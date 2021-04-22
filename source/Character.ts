import { AchievementProgressData, CharacterData, ServerData, ActionData, ChestOpenedData, DeathData, DisappearData, ChestData, EntitiesData, EvalData, GameResponseData, HitData, NewMapData, PartyData, StartData, WelcomeData, LoadedData, AuthData, DisappearingTextData, GameLogData, UIData, UpgradeData, QData, TrackerData, EmotionData } from "./definitions/adventureland-server"
import { BankInfo, ItemInfo, SlotType, SInfo, IPosition, TradeSlotType, CharacterType, SlotInfo, StatusInfo } from "./definitions/adventureland"
import { LinkData, NodeData } from "./definitions/pathfinder"
import { Constants } from "./Constants"
import { Mage } from "./Mage"
import { Observer } from "./Observer"
import { Pathfinder } from "./index"
import { Tools } from "./Tools"
import { Entity } from "./Entity"
import { Player } from "./Player"
import { Attribute, BankPackName, ConditionName, CXData, DamageType, EmotionName, GData2, ItemName, MapName, MonsterName, NPCName, SkillName } from "./definitions/adventureland-data"

export class Character extends Observer implements CharacterData {
    protected userID: string;
    protected userAuth: string;
    protected characterID: string;
    protected lastPositionUpdate: number;
    protected pingNum = 1;
    protected pingMap = new Map<string, { log: boolean, time: number }>();
    protected timeouts = new Map<string, ReturnType<typeof setTimeout>>();

    public achievements = new Map<string, AchievementProgressData>();
    public bank: BankInfo = { gold: 0 };
    public chests = new Map<string, ChestData>();
    public entities = new Map<string, Entity>();
    public nextSkill = new Map<SkillName, Date>();
    public partyData: PartyData;
    public pings: number[] = [];
    public players = new Map<string, Player>();
    public projectiles = new Map<string, ActionData & { date: Date; }>();
    public server: WelcomeData;
    public S: SInfo;

    // CharacterData
    public afk: string
    public age: number
    public apiercing = 0
    public blast = 0
    public controller: string
    public x: number
    public y: number
    public map: MapName
    public in: MapName
    public name: string
    public id: string
    public ctype: CharacterType
    public abs: boolean
    public angle: number
    public armor = 0
    public attack = 0
    public c: any
    public cid: number
    public cx: CXData
    public damage_type: DamageType
    public focus?: string
    public frequency: number
    public going_x: number
    public going_y: number
    public gold = 0
    public hp = 0
    public level = 1
    public m: number
    public mp_cost: number
    public max_hp = 1
    public max_mp = 1
    public move_num: number
    public moving = false
    public mp = 1
    public npc?: string
    public owner: string
    public party?: string
    public pdps: number
    public q: {
        compound?: { len: number; ms: number; num: number; nums: number[] };
        upgrade?: {
            len: number
            ms: number
            num: number
        }
        exchange?: {
            len: number
            ms: number
            // TODO: add more variables
        }
    }
    public range = 1
    public resistance = 0
    public rip = true
    public rpiercing = 0
    public s: StatusInfo
    public skin: string
    public slots: SlotInfo
    public speed = 1
    public stand?: boolean | "cstand" | "stand0"
    public tp = false
    public emx: { [T in EmotionName]?: number }
    explosion: number
    firesistance: number
    fzresistance: number
    mp_reduction: number
    pnresistance: number
    stun: number
    int: number
    str: number
    dex: number
    vit: number
    for: number
    max_xp: number
    goldm: number
    xpm: number
    xp: number
    luckm: number
    isize: number
    esize: number
    cash: number
    targets: number
    target?: string
    evasion: number
    miss: number
    reflection: number
    lifesteal: number
    manasteal: number
    crit: number
    critdamage: number
    dreturn: number
    tax: number
    xrange: number
    items: ItemInfo[]
    cc: number
    ipass?: string
    friends?: any
    acx?: any
    xcx?: string[]
    hitchhikers?: [string, any][]
    user?: BankInfo
    fear: number
    courage: number
    mcourage: number
    pcourage: number

    constructor(userID: string, userAuth: string, characterID: string, g: GData2, serverData: ServerData) {
        super(serverData, g)
        this.userID = userID
        this.userAuth = userAuth
        this.characterID = characterID

        this.socket.on("start", (data: StartData) => {
            this.going_x = data.x
            this.going_y = data.y
            this.moving = false
            this.damage_type = this.G.classes[data.ctype].damage_type

            this.updateCharacter(data)
            if (data.entities) this.parseEntities(data.entities)
            this.S = data.s_info
        })

        this.socket.on("achievement_progress", (data: AchievementProgressData) => {
            this.achievements.set(data.name, data)
        })

        this.socket.on("action", (data: ActionData) => {
            // TODO: do we need this 'date'?
            this.projectiles.set(data.pid, { ...data, date: new Date() })
        })

        this.socket.on("chest_opened", (data: ChestOpenedData) => {
            this.chests.delete(data.id)
        })

        this.socket.on("death", (data: DeathData) => {
            const entity = this.entities.get(data.id)

            // If it was a special monster in 'S', delete it from 'S'.
            if (this.S && entity && this.S[entity.type])
                delete this.S[entity.type]

            this.entities.delete(data.id)
            // TODO: Does this get called for players, too? Players turn in to grave stones...
        })

        this.socket.on("disappear", (data: DisappearData) => {
            if (data.reason == "disconnect") {
                // Only players can disconnect
                this.players.delete(data.id)
            } else if (data.reason == "transport" && (typeof data.s == "number" || typeof data.s == "undefined")) {
                // Only players can transport
                const player = this.players.get(data.id)
                if (player && data.to) {
                    const location = this.G.maps[data.to].spawns[data.s == undefined ? 0 : data.s]
                    player.x = location[0]
                    player.y = location[1]
                    this.players.set(data.id, player)
                } else if (data.to == undefined) {
                    // They moved somewhere unknown (TODO: Is this because they are wearing a stealth cape?)
                    this.players.delete(data.id)
                }
            } else if (data.reason == undefined) {
                // This probably meant that the entity ran in to a wall
                this.entities.delete(data.id)
            } else if (data.reason == "invis") {
                // This probably means the rogue went invisible 
                this.players.delete(data.id)
                this.entities.delete(data.id)
            } else {
                const player = this.players.get(data.id)
                if (player) {
                    if (Array.isArray(data.s)) {
                        player.x = data.s[0]
                        player.y = data.s[1]
                    } else {
                        const location = this.G.maps[data.to].spawns[data.s == undefined ? 0 : data.s]
                        player.x = location[0]
                        player.y = location[1]
                    }
                    this.players.set(data.id, player)
                } else {
                    const entity = this.entities.get(data.id)
                    if (entity) {
                        if (Array.isArray(data.s)) {
                            entity.x = data.s[0]
                            entity.y = data.s[1]
                        } else {
                            const location = this.G.maps[data.to].spawns[data.s == undefined ? 0 : data.s]
                            entity.x = location[0]
                            entity.y = location[1]
                        }
                        this.entities.set(data.id, entity)
                    }
                }
            }
            this.updatePositions()
        })

        this.socket.on("drop", (data: ChestData) => {
            this.chests.set(data.id, data)
        })

        this.socket.on("entities", (data: EntitiesData) => {
            this.parseEntities(data)
        })

        this.socket.on("eval", (data: EvalData) => {
            // Skill timeouts (like attack) are sent via eval
            const skillReg1 = /skill_timeout\s*\(\s*['"](.+?)['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.exec(data.code)
            if (skillReg1) {
                const skill = skillReg1[1] as SkillName
                let cooldown: number
                if (skillReg1[2]) {
                    cooldown = Number.parseFloat(skillReg1[2])
                } else if (this.G.skills[skill].cooldown) {
                    cooldown = this.G.skills[skill].cooldown
                }
                this.setNextSkill(skill, new Date(Date.now() + Math.ceil(cooldown)))
                return
            }

            // Potion timeouts are sent via eval
            const potReg = /pot_timeout\s*\(\s*(\d+\.?\d+?)\s*\)/.exec(data.code)
            if (potReg) {
                const cooldown = Number.parseFloat(potReg[1])
                this.setNextSkill("use_hp", new Date(Date.now() + Math.ceil(cooldown)))
                this.setNextSkill("use_mp", new Date(Date.now() + Math.ceil(cooldown)))
                return
            }
        })

        this.socket.on("game_error", (data: string | { message: string; }) => {
            if (typeof data == "string") {
                console.error(`Game Error: ${data}`)
            } else {
                console.error("Game Error ----------")
                console.error(data)
            }
            this.disconnect()
        })

        this.socket.on("game_response", (data: GameResponseData) => {
            this.parseGameResponse(data)
        })

        this.socket.on("hit", (data: HitData) => {
            if (data.miss || data.evade) {
                this.projectiles.delete(data.pid)
                return
            }

            if (data.reflect) {
                // TODO: Reflect!
                this.projectiles.get(data.pid)
            }

            if (data.kill == true) {
                this.projectiles.delete(data.pid)
                this.entities.delete(data.id)
            } else if (data.damage) {
                this.projectiles.delete(data.pid)
                const entity = this.entities.get(data.id)
                if (entity) {
                    entity.hp = entity.hp - data.damage
                    this.entities.set(data.id, entity)
                }
            }
        })

        this.socket.on("new_map", (data: NewMapData) => {
            this.projectiles.clear()

            this.parseEntities(data.entities)

            this.x = data.x
            this.y = data.y
            this.in = data.in
            this.map = data.name
            this.m = data.m
        })

        // TODO: Confirm this works for leave_party(), too.
        this.socket.on("party_update", (data: PartyData) => {
            this.partyData = data
        })

        this.socket.on("ping_ack", (data: { id: string; }) => {
            const ping = this.pingMap.get(data.id)
            if (ping) {
                // Add the new ping
                const time = Date.now() - ping.time
                this.pings.push(time)
                if (ping.log) console.log(`Ping: ${time}`)

                // Remove the oldest ping
                if (this.pings.length > Constants.MAX_PINGS) this.pings.shift()

                // Remove the ping from the map
                this.pingMap.delete(data.id)
            }
        })

        this.socket.on("player", (data: CharacterData) => {
            this.updateCharacter(data)
        })

        this.socket.on("q_data", (data: QData) => {
            if (data.q.upgrade) this.q.upgrade = data.q.upgrade
            if (data.q.compound) this.q.compound = data.q.compound
        })

        this.socket.on("server_info", (data: SInfo) => {
            // Add Soft properties
            for (const mtype in data) {
                if (typeof data[mtype] !== "object")
                    continue
                const mN = mtype as MonsterName
                if (data[mN].live && data[mN].hp == undefined) {
                    data[mN].hp = this.G.monsters[mN].hp
                    data[mN].max_hp = this.G.monsters[mN].hp
                }
            }

            this.S = data
        })

        this.socket.on("upgrade", (data: UpgradeData) => {
            if (data.type == "compound" && this.q.compound) delete this.q.compound

            // else if (data.type == "exchange" && this.q.exchange) delete this.q.exchange
            else if (data.type == "upgrade" && this.q.upgrade) delete this.q.upgrade
        })

        this.socket.on("welcome", (data: WelcomeData) => {
            this.server = data

            // This serves as a doublecheck.
            if (this.serverRegion !== data.region)
                console.error(`REGIONS DO NOT MATCH!? ${this.serverRegion} VS. ${data.region}`)
            if (this.serverIdentifier !== data.name)
                console.error(`IDENTIFIERS DO NOT MATCH!? ${this.serverIdentifier} VS. ${data.name}`)
            this.serverRegion = data.region
            this.serverIdentifier = data.name

            // Send a response that we're ready to go
            this.socket.emit("loaded", {
                height: 1080,
                width: 1920,
                scale: 2,
                success: 1
            } as LoadedData)
        })
    }

    protected updateLoop(): void {
        if (this.socket.disconnected) return

        if (this.lastPositionUpdate === undefined) {
            this.updatePositions()
            this.timeouts.set("updateLoop", setTimeout(async () => { this.updateLoop() }, Constants.UPDATE_POSITIONS_EVERY_MS))
            return
        }

        const msSinceLastUpdate = Date.now() - this.lastPositionUpdate
        if (msSinceLastUpdate > Constants.UPDATE_POSITIONS_EVERY_MS) {
            // Update now
            this.updatePositions()
            this.timeouts.set("updateLoop", setTimeout(async () => { this.updateLoop() }, Constants.UPDATE_POSITIONS_EVERY_MS))
        } else {
            // Update in a bit
            this.timeouts.set("updateLoop", setTimeout(async () => { this.updateLoop() }, Constants.UPDATE_POSITIONS_EVERY_MS - msSinceLastUpdate))
        }
    }

    public updateCharacter(data: CharacterData): void {
        // Update all the character information we can
        for (const datum in data) {
            if (datum == "hitchhikers") {
                // Game responses
                for (const [event, datum] of data.hitchhikers) {
                    if (event == "game_response") {
                        this.parseGameResponse(datum)
                    }
                }
            } else if (datum == "entities") {
                this.parseEntities(data[datum])
            } else if (datum == "moving") {
                // We'll handle moving...
            } else if (datum == "tp") {
                // We just teleported, but we don't want to keep the data.
            } else if (datum == "user") {
                // Bank information
                this.bank = data.user
            } else {
                // Normal attribute
                this[datum] = data[datum]
            }
        }
    }

    protected async parseEntities(data: EntitiesData): Promise<void> {
        if (data.type == "all") {
            // Erase all of the entities
            this.entities.clear()
            this.players.clear()
        } else {
            // Update all positions
            this.updatePositions()
        }

        for (const monster of data.monsters) {
            if (!this.entities.has(monster.id)) {
                // Create the entity and add it to our list
                const e = new Entity(monster, data.map, this.G)
                this.entities.set(monster.id, e)
            } else {
                // Update everything
                const e = this.entities.get(monster.id)
                e.updateData(monster)
            }
        }
        for (const player of data.players) {
            if (!this.players.has(player.id)) {
                // Create the player and add it to our list
                const p = new Player(player, data.map, this.G)
                this.players.set(player.id, p)
            } else {
                // Update everything
                const p = this.players.get(player.id)
                p.updateData(player)
            }
        }
    }

    protected parseGameResponse(data: GameResponseData): void {
        // Adjust cooldowns
        if (typeof (data) == "object") {
            if (data.response == "cooldown") {
                // A skill is on cooldown
                const skill = data.skill
                if (skill) {
                    const cooldown = data.ms
                    this.setNextSkill(skill, new Date(Date.now() + Math.ceil(cooldown)))
                }
            } else if (data.response == "ex_condition") {
                // The condition expired
                delete this.s[data.name]
            } else if (data.response == "skill_success") {
                const cooldown = this.G.skills[data.name].cooldown
                if (cooldown) {
                    this.setNextSkill(data.name, new Date(Date.now() + cooldown))
                }
            } else {
                // DEBUG
                console.debug("Game Response Data -----")
                console.debug(data)
            }
        } else if (typeof (data) == "string") {
            if (data == "resolve_skill") {
                // Ignore. We resolve our skills a different way than the vanilla client
            } else {
                // DEBUG
                console.debug(`Game Response: ${data}`)
            }
        }
    }

    protected setNextSkill(skill: SkillName, next: Date): void {
        this.nextSkill.set(skill, next)
    }

    protected updatePositions(): void {
        if (this.lastPositionUpdate) {
            const msSinceLastUpdate = Date.now() - this.lastPositionUpdate

            // Update entities
            for (const [, entity] of this.entities) {
                if (!entity.moving)
                    continue

                const speed = entity.speed

                const distanceTravelled = speed * msSinceLastUpdate / 1000
                const angle = Math.atan2(entity.going_y - entity.y, entity.going_x - entity.x)
                const distanceToGoal = Tools.distance({ x: entity.x, y: entity.y }, { x: entity.going_x, y: entity.going_y })
                if (distanceTravelled > distanceToGoal) {
                    entity.moving = false
                    entity.x = entity.going_x
                    entity.y = entity.going_y
                } else {
                    entity.x = entity.x + Math.cos(angle) * distanceTravelled
                    entity.y = entity.y + Math.sin(angle) * distanceTravelled
                }

                // Update conditions
                for (const condition in entity.s) {
                    const newCooldown = entity.s[condition as ConditionName].ms - msSinceLastUpdate
                    if (newCooldown <= 0)
                        delete entity.s[condition as ConditionName]
                    else
                        entity.s[condition as ConditionName].ms = newCooldown
                }
            }

            // Update players
            for (const player of this.players.values()) {
                if (!player.moving)
                    continue
                const distanceTravelled = player.speed * msSinceLastUpdate / 1000
                const angle = Math.atan2(player.going_y - player.y, player.going_x - player.x)
                const distanceToGoal = Tools.distance({ x: player.x, y: player.y }, { x: player.going_x, y: player.going_y })
                if (distanceTravelled > distanceToGoal) {
                    player.moving = false
                    player.x = player.going_x
                    player.y = player.going_y
                } else {
                    player.x = player.x + Math.cos(angle) * distanceTravelled
                    player.y = player.y + Math.sin(angle) * distanceTravelled
                }

                // Update conditions
                for (const condition in player.s) {
                    const newCooldown = player.s[condition as ConditionName].ms - msSinceLastUpdate
                    if (newCooldown <= 0)
                        delete player.s[condition as ConditionName]
                    else
                        player.s[condition as ConditionName].ms = newCooldown
                }
            }

            // Update character
            if (this.moving) {
                const distanceTravelled = this.speed * msSinceLastUpdate / 1000
                const angle = Math.atan2(this.going_y - this.y, this.going_x - this.x)
                const distanceToGoal = Tools.distance({ x: this.x, y: this.y }, { x: this.going_x, y: this.going_y })
                if (distanceTravelled > distanceToGoal) {
                    this.moving = false
                    this.x = this.going_x
                    this.y = this.going_y
                } else {
                    this.x = this.x + Math.cos(angle) * distanceTravelled
                    this.y = this.y + Math.sin(angle) * distanceTravelled
                }
            }

            // Update conditions
            for (const condition in this.s) {
                const newCooldown = this.s[condition as ConditionName].ms - msSinceLastUpdate
                if (newCooldown <= 0)
                    delete this.s[condition as ConditionName]
                else
                    this.s[condition as ConditionName].ms = newCooldown
            }
        }

        // Erase all entities that are far away
        let toDelete: string[] = []
        for (const [id, entity] of this.entities) {
            if (Tools.distance(this, entity) < Constants.MAX_VISIBLE_RANGE)
                continue
            toDelete.push(id)
        }
        for (const id of toDelete)
            this.entities.delete(id)

        // Erase all players that are far away
        toDelete = []
        for (const [id, player] of this.players) {
            if (Tools.distance(this, player) < Constants.MAX_VISIBLE_RANGE)
                continue
            toDelete.push(id)
        }
        for (const id of toDelete)
            this.players.delete(id)

        this.lastPositionUpdate = Date.now()
    }

    /**
     * TODO: Add fail check for logging in with too many characters to one server
     *
     * @return {*}  {Promise<void>}
     * @memberof Character
     */
    public async connect(): Promise<void> {
        const connected = new Promise<void>((resolve, reject) => {
            const failCheck = (data: string | { message: string; }) => {
                if (typeof data == "string") {
                    this.socket.removeListener("start", startCheck)
                    reject(`Failed to connect: ${data}`)
                } else {
                    this.socket.removeListener("start", startCheck)
                    reject(`Failed to connect: ${data.message}`)
                }
            }

            const startCheck = () => {
                this.socket.removeListener("game_error", failCheck)
                resolve()
            }

            setTimeout(() => {
                this.socket.removeListener("start", startCheck)
                this.socket.removeListener("game_error", failCheck)
                reject("Failed to start within 10s.")
            }, 10000)

            this.socket.once("start", startCheck)
            this.socket.once("game_error", failCheck)
        })

        // When we're loaded, authenticate
        this.socket.on("welcome", () => {
            this.socket.emit("auth", {
                auth: this.userAuth,
                character: this.characterID,
                height: 1080,
                no_graphics: "True",
                no_html: "1",
                passphrase: "",
                scale: 2,
                user: this.userID,
                width: 1920
            } as AuthData)
        })

        this.socket.open()

        return connected
    }

    public async disconnect(): Promise<void> {
        if (this.socket.disconnected)
            return
        console.warn("Disconnecting!")

        // Close the socket
        this.socket.close()
        this.socket.removeAllListeners()

        // Cancel all timeouts
        for (const [, timer] of this.timeouts) clearTimeout(timer)
    }

    /**
     * This function will request all nearby entities and players from the server. You can use it to make sure we have the latest data.
     * NOTE: There is a rather high code call cost to this, don't call it too often.
     */
    public async requestEntitiesData(): Promise<EntitiesData> {
        return new Promise<EntitiesData>((resolve, reject) => {
            const checkEntitiesEvent = (data: EntitiesData) => {
                this.socket.removeListener("entities")
                if (data.type == "all") resolve(data)
            }

            setTimeout(() => {
                this.socket.removeListener("entities", checkEntitiesEvent)
                reject(`requestEntitiesData timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("entities", checkEntitiesEvent)

            this.socket.emit("send_updates", {})
        })
    }

    /**
     * This function is a hack to get the server to respond with a player data update. It will respond with two...
     */
    public async requestPlayerData(): Promise<CharacterData> {
        return new Promise<CharacterData>((resolve, reject) => {
            const checkPlayerEvent = (data: CharacterData) => {
                if (data.s.typing) {
                    this.socket.removeListener("player", checkPlayerEvent)
                    resolve(data)
                }
            }

            setTimeout(() => {
                this.socket.removeListener("player", checkPlayerEvent)
                reject(`requestPlayerData timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("player", checkPlayerEvent)

            this.socket.emit("property", { typing: true })
        })
    }

    // TODO: Convert to async, and return a promise<number> with the ping ms time
    public sendPing(log = true): string {
        // Get the next pingID
        const pingID = this.pingNum.toString()
        this.pingNum++

        // Set the pingID in the map
        this.pingMap.set(pingID, { log: log, time: Date.now() })

        // Get the ping
        this.socket.emit("ping_trig", { id: pingID })
        return pingID
    }

    /**
     * Accepts a magiport reequest from another character
     * @param name ID of the character that offered a magiport.
     */
    public acceptMagiport(name: string): Promise<NodeData> {
        const acceptedMagiport = new Promise<NodeData>((resolve, reject) => {
            const magiportCheck = (data: NewMapData) => {
                if (data.effect == "magiport") {
                    this.socket.removeListener("new_map", magiportCheck)
                    resolve({ map: data.in, x: data.x, y: data.y })
                }
            }

            setTimeout(() => {
                this.socket.removeListener("new_map", magiportCheck)
                reject(`acceptMagiport timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("new_map", magiportCheck)
        })

        this.socket.emit("magiport", { name: name })
        return acceptedMagiport
    }

    /**
     * Accepts another character's party invite.
     * @param id The ID of the character's party you want to accept the invite for.
     */
    public acceptPartyInvite(id: string): Promise<PartyData> {
        const acceptedInvite = new Promise<PartyData>((resolve, reject) => {
            const partyCheck = (data: PartyData) => {
                if (data.list.includes(this.id)
                    && data.list.includes(id)) {
                    this.socket.removeListener("party_update", partyCheck)
                    this.socket.removeListener("game_log", unableCheck)
                    resolve(data)
                }
            }

            const unableCheck = (data: GameLogData) => {
                const notFound = RegExp("^.+? is not found$")
                if (data == "Invitation expired") {
                    this.socket.removeListener("party_update", partyCheck)
                    this.socket.removeListener("game_log", unableCheck)
                    reject(data)
                } else if (notFound.test(data)) {
                    this.socket.removeListener("party_update", partyCheck)
                    this.socket.removeListener("game_log", unableCheck)
                    reject(data)
                } else if (data == "Already partying") {
                    if (this.partyData.list.includes(this.id) && this.partyData.list.includes(id)) {
                        // NOTE: We resolve the promise even if we have already accepted it if we're in the correct party.
                        this.socket.removeListener("party_update", partyCheck)
                        this.socket.removeListener("game_log", unableCheck)
                        resolve(this.partyData)
                    } else {
                        this.socket.removeListener("party_update", partyCheck)
                        this.socket.removeListener("game_log", unableCheck)
                        reject(data)
                    }
                }
            }

            setTimeout(() => {
                this.socket.removeListener("party_update", partyCheck)
                this.socket.removeListener("game_log", unableCheck)
                reject(`acceptPartyInvite timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("party_update", partyCheck)
            this.socket.on("game_log", unableCheck)
        })

        this.socket.emit("party", { event: "accept", name: id })
        return acceptedInvite
    }

    // TODO: Add failure checks
    public acceptPartyRequest(id: string): Promise<PartyData> {
        const acceptedRequest = new Promise<PartyData>((resolve, reject) => {
            const partyCheck = (data: PartyData) => {
                if (data.list.includes(this.id)
                    && data.list.includes(id)) {
                    this.socket.removeListener("party_update", partyCheck)
                    resolve(data)
                }
            }

            setTimeout(() => {
                this.socket.removeListener("party_update", partyCheck)
                reject(`acceptPartyRequest timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("party_update", partyCheck)
        })

        this.socket.emit("party", { event: "raccept", name: id })
        return acceptedRequest
    }

    // TODO: Add 'notthere' (e.g. calling attack("12345") returns ["notthere", {place: "attack"}])
    // TODO: Check if cooldown is sent after attack
    /**
     * NOTE: We can't name this function `attack` because of the property `attack` that specifies damage.s
     * @param id The ID of the entity or player to attack
     */
    public basicAttack(id: string): Promise<string> {
        if (this.mp_cost > this.mp)
            return Promise.reject("Not enough MP to attack")

        const attackStarted = new Promise<string>((resolve, reject) => {
            const deathCheck = (data: DeathData) => {
                if (data.id == id) {
                    this.socket.removeListener("action", attackCheck)
                    this.socket.removeListener("game_response", failCheck)
                    this.socket.removeListener("death", deathCheck)
                    reject(`Entity ${id} not found`)
                }
            }
            const failCheck = (data: GameResponseData) => {
                if (typeof data == "object") {
                    if (data.response == "disabled") {
                        this.socket.removeListener("action", attackCheck)
                        this.socket.removeListener("game_response", failCheck)
                        this.socket.removeListener("death", deathCheck)
                        reject(`Attack on ${id} failed (disabled).`)
                    } else if (data.response == "attack_failed" && data.id == id) {
                        this.socket.removeListener("action", attackCheck)
                        this.socket.removeListener("game_response", failCheck)
                        this.socket.removeListener("death", deathCheck)
                        reject(`Attack on ${id} failed.`)
                    } else if (data.response == "too_far" && data.id == id) {
                        this.socket.removeListener("action", attackCheck)
                        this.socket.removeListener("game_response", failCheck)
                        this.socket.removeListener("death", deathCheck)
                        reject(`${id} is too far away to attack (dist: ${data.dist}).`)
                    } else if (data.response == "cooldown" && data.id == id) {
                        this.socket.removeListener("action", attackCheck)
                        this.socket.removeListener("game_response", failCheck)
                        this.socket.removeListener("death", deathCheck)
                        reject(`Attack on ${id} failed due to cooldown (ms: ${data.ms}).`)
                    } else if (data.response == "no_mp" && data.place == "attack") {
                        this.socket.removeListener("action", attackCheck)
                        this.socket.removeListener("game_response", failCheck)
                        this.socket.removeListener("death", deathCheck)
                        reject(`Attack on ${id} failed due to insufficient MP.`)
                    }
                }
            }
            const attackCheck = (data: ActionData) => {
                if (data.attacker == this.id && data.target == id && data.type == "attack") {
                    this.socket.removeListener("action", attackCheck)
                    this.socket.removeListener("game_response", failCheck)
                    this.socket.removeListener("death", deathCheck)
                    resolve(data.pid)
                }
            }
            setTimeout(() => {
                this.socket.removeListener("action", attackCheck)
                this.socket.removeListener("game_response", failCheck)
                this.socket.removeListener("death", deathCheck)
                reject(`attack timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("action", attackCheck)
            this.socket.on("game_response", failCheck)
            this.socket.on("death", deathCheck)
        })

        this.socket.emit("attack", { id: id })
        return attackStarted
    }

    // TODO: Return buy info
    public buy(itemName: ItemName, quantity = 1): Promise<number> {
        if (this.gold < this.G.items[itemName].g)
            return Promise.reject(`Insufficient gold. We only have ${this.gold}, but the item costs ${this.G.items[itemName].g}`)

        const itemReceived = new Promise<number>((resolve, reject) => {
            const buyCheck1 = (data: CharacterData) => {
                if (!data.hitchhikers)
                    return
                for (const hitchhiker of data.hitchhikers) {
                    if (hitchhiker[0] == "game_response") {
                        const data: GameResponseData = hitchhiker[1]
                        if (typeof data == "object"
                            && data.response == "buy_success"
                            && data.name == itemName
                            && data.q == quantity) {
                            this.socket.removeListener("player", buyCheck1)
                            this.socket.removeListener("game_response", buyCheck2)
                            resolve(data.num)
                        }
                    }
                }
            }
            const buyCheck2 = (data: GameResponseData) => {
                if (data == "buy_cant_npc") {
                    this.socket.removeListener("player", buyCheck1)
                    this.socket.removeListener("game_response", buyCheck2)
                    reject(`Cannot buy ${quantity} ${itemName}(s) from an NPC`)
                } else if (data == "buy_cant_space") {
                    this.socket.removeListener("player", buyCheck1)
                    this.socket.removeListener("game_response", buyCheck2)
                    reject(`Not enough inventory space to buy ${quantity} ${itemName}(s)`)
                } else if (data == "buy_cost") {
                    this.socket.removeListener("player", buyCheck1)
                    this.socket.removeListener("game_response", buyCheck2)
                    reject(`Not enough gold to buy ${quantity} ${itemName}(s)`)
                }
            }
            setTimeout(() => {
                this.socket.removeListener("player", buyCheck1)
                this.socket.removeListener("game_response", buyCheck2)
                reject(`buy timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("player", buyCheck1)
            this.socket.on("game_response", buyCheck2)
        })

        if (this.G.items[itemName].s) {
            // Item is stackable
            this.socket.emit("buy", { name: itemName, quantity: quantity })
        } else {
            // Item is not stackable.
            this.socket.emit("buy", { name: itemName })
        }
        return itemReceived
    }

    // TODO: Add promises
    public buyFromMerchant(id: string, slot: TradeSlotType, rid: string, quantity = 1): Promise<void> {
        if (quantity <= 0)
            return Promise.reject(`We can not buy a quantity of ${quantity}.`)
        const merchant = this.players.get(id)
        if (!merchant)
            return Promise.reject(`We can not see ${id} nearby.`)
        if (Tools.distance(this, merchant) > Constants.NPC_INTERACTION_DISTANCE)
            return Promise.reject(`We are too far away from ${id} to buy from.`)

        const item = merchant.slots[slot]
        if (!item)
            return Promise.reject(`We could not find an item in slot ${slot} on ${id}.`)
        if (item.b)
            return Promise.reject("The item is not for sale, this merchant is *buying* that item.")
        if (item.rid !== rid)
            return Promise.reject(`The RIDs do not match (item: ${item.rid}, supplied: ${rid})`)

        if (!merchant.slots[slot].q && quantity != 1) {
            console.warn("We are only going to buy 1, as there is only 1 available.")
            quantity = 1
        } else if (merchant.slots[slot].q && quantity > merchant.slots[slot].q) {
            console.warn(`We can't buy ${quantity}, we can only buy ${merchant.slots[slot].q}, so we're doing that.`)
            quantity = merchant.slots[slot].q
        }

        if (this.gold < merchant.slots[slot].price * quantity) {
            if (this.gold < merchant.slots[slot].price)
                return Promise.reject(`We don't have enough gold. It costs ${merchant.slots[slot].price}, but we only have ${this.gold}`)

            // Determine how many we *can* buy.
            const buyableQuantity = Math.floor(this.gold / merchant.slots[slot].price)
            console.warn(`We don't have enough gold to buy ${quantity}, we can only buy ${buyableQuantity}, so we're doing that.`)
            quantity = buyableQuantity
        }

        this.socket.emit("trade_buy", { slot: slot, id: id, rid: rid, q: quantity.toString() })
    }

    // TODO: Add promises
    public buyFromPonty(item: ItemInfo): unknown {
        if (!item.rid) return Promise.reject("This item does not have an 'rid'.")
        const price = this.G.items[item.name].g * 1.2 /* Ponty items have a 20% markup */ * (item.q ? item.q : 1)
        if (price > this.gold) return Promise.reject("We don't have enough gold to buy this.")
        this.socket.emit("sbuy", { rid: item.rid })
    }

    /**
     * Returns the *minimum* gold required to obtain the given item.
     *
     * @param {ItemInfo} item - The item to calculate the minimum cost for
     * @return {*}  {number} - The cost of the item
     * @memberof Character
     */
    public calculateItemCost(item: ItemInfo): number {
        const gInfo = this.G.items[item.name]

        // Base cost
        let cost = gInfo.g

        // Cost to upgrade using lowest level scroll
        if (gInfo.compound) {
            for (let i = 0; i < item.level; i++) {
                cost *= 3 // Three of the current level items are required
                let scrollLevel = 0
                for (const grade of gInfo.grades) {
                    if (i + 1 < grade) {
                        const scrollInfo = this.G.items[`cscroll${scrollLevel}` as ItemName]
                        cost += scrollInfo.g
                        break
                    }
                    scrollLevel++
                }
            }
        } else if (gInfo.upgrade) {
            for (let i = 0; i < item.level; i++) {
                let scrollLevel = 0
                for (const grade of gInfo.grades) {
                    if (i + 1 < grade) {
                        const scrollInfo = this.G.items[`scroll${scrollLevel}` as ItemName]
                        cost += scrollInfo.g
                        break
                    }
                    scrollLevel++
                }
            }
        }

        return cost
    }

    public calculateItemGrade(item: ItemInfo): number {
        const gInfo = this.G.items[item.name]
        if (!gInfo.grades) return
        let grade = 0
        for (const level of gInfo.grades) {
            if (item.level < level) break
            grade++
        }
        return grade
    }

    public canBuy(item: ItemName): boolean {
        if (this.isFull()) return false // We are full

        const gInfo = this.G.items[item]
        if (this.gold < gInfo.g) return false // We can't afford it

        const computerAvailable = this.locateItem("computer") !== undefined

        let buyable = false
        let close = false
        // Double check if we can buy from an NPC
        for (const map in this.G.maps) {
            if (buyable == true) break
            if (!computerAvailable && map !== this.map) continue // We aren't close, and we don't have a computer, so don't check this map
            if (this.G.maps[map as MapName].ignore) continue
            for (const npc of this.G.maps[map as MapName].npcs) {
                if (buyable == true) break
                if (this.G.npcs[npc.id].items === undefined) continue
                for (const i of this.G.npcs[npc.id].items) {
                    if (i == item) {
                        buyable = true
                        if (Tools.distance(this, { map: map as MapName, x: npc.position[0], y: npc.position[1] }) < Constants.NPC_INTERACTION_DISTANCE)
                            close = true
                        break
                    }
                }
            }
        }
        if (!buyable) return false

        if (computerAvailable || close) return true

        return false
    }
    public canCraft(itemToCraft: ItemName): boolean {
        if (!this.G.craft[itemToCraft]) return false // Item is not craftable
        if (this.G.craft[itemToCraft].cost > this.gold) return false // We don't have enough money
        for (const [requiredQuantity, requiredItem, requiredItemLevel] of this.G.craft[itemToCraft].items) {
            if (!this.hasItem(requiredItem, this.items, { level: requiredItemLevel, quantityGreaterThan: requiredQuantity - 1 })) return false // We don't have this required item
        }
        if (this.G.maps[this.map].mount) return false // Can't craft things in the bank

        return true
    }

    /**
     * Returns true if it's a guaranteed kill in one hit
     */
    public canKillInOneShot(entity: Entity): boolean {
        // Check if it can heal
        const gInfo = this.G.monsters[entity.type]
        if (gInfo.lifesteal !== undefined) return false
        if (gInfo.abilities && gInfo.abilities.self_healing) return false

        if (this.damage_type == "magical" && entity.reflection !== undefined) return false
        if (this.damage_type == "physical" && entity.evasion !== undefined) return false

        if (entity["1hp"]) {
            if (entity.hp == 1) return true
            else return false
        }

        return Tools.calculateDamageRange(this, entity)[0] > entity.hp
    }

    /**
     * Returns true if we can use the skill.
     * This function checks various requirements, such as level, having a required item equipped, etc.
     * If you only want to check the cooldown, use isOnCooldown(skill) or getCooldown(skill).
     *
     * @param {SkillName} skill
     * @param {{
     *         ignoreCooldown?: boolean,
     *         ignoreEquipped?: boolean
     *     }} [options]
     * @return {*}  {boolean}
     * @memberof Character
     */
    public canUse(skill: SkillName, options?: {
        ignoreCooldown?: boolean,
        ignoreEquipped?: boolean
    }): boolean {
        if (this.rip) return false // We are dead
        if (this.s.stoned) return false // We are 'stoned' (oneeye condition)
        if (this.isOnCooldown(skill) && !options?.ignoreCooldown) return false // Skill is on cooldown
        const gInfoSkill = this.G.skills[skill]
        if (gInfoSkill.mp !== undefined && this.mp < gInfoSkill.mp) return false // Not enough MP
        if (skill == "attack" && this.mp < this.mp_cost) return false // Not enough MP (attack)
        if (gInfoSkill.level !== undefined && this.level < gInfoSkill.level) return false // Not a high enough level
        if (gInfoSkill.wtype && !options?.ignoreEquipped) {
            // The skill requires a certain weapon type
            if (!this.slots.mainhand) return false // We don't have any weapon equipped
            const gInfoWeapon = this.G.items[this.slots.mainhand.name]
            if (typeof gInfoSkill.wtype == "object") {
                // There's a list of acceptable weapon types
                let isAcceptableWeapon = false
                for (const wtype of gInfoSkill.wtype) {
                    if (gInfoWeapon.wtype == wtype) {
                        isAcceptableWeapon = true
                        break
                    }
                }
                if (!isAcceptableWeapon)
                    return false
            } else {
                // There's only one acceptable weapon type
                if (gInfoWeapon.wtype !== gInfoSkill.wtype)
                    return false // We don't have the right weapon type equipped
            }
        }
        if (gInfoSkill.consume && !options?.ignoreEquipped) {
            if (!this.hasItem(gInfoSkill.consume)) return false // We don't have the required consumable
        }
        if (gInfoSkill.inventory && !options?.ignoreEquipped) {
            for (const item of gInfoSkill.inventory) {
                if (!this.hasItem(item)) return false // We don't have the required item in our inventory
            }
        }
        if (gInfoSkill.slot && !options?.ignoreEquipped) {
            // The skill requires an item to be equipped
            let hasSlot = false
            for (const [slot, item] of gInfoSkill.slot) {
                if (this.slots[slot] && this.slots[slot].name == item) {
                    // We have it equipped
                    hasSlot = true
                    break
                }
            }
            if (!hasSlot) return false // We don't have anything equipped that lets us use this skill
        }
        if (gInfoSkill.class) {
            // The skill is only available to certain classes
            let compatibleClass = false
            for (const c of gInfoSkill.class) {
                if (c == this.ctype) {
                    compatibleClass = true // We are compatible!
                    break
                }
            }
            if (!compatibleClass) return false
        }
        if (gInfoSkill.requirements) {
            // This skill has stat requirements
            for (const s in gInfoSkill.requirements) {
                const stat = s as Attribute
                if (this[stat] < gInfoSkill.requirements[stat]) return false
            }
        }

        // Special circumstance -- we can't use blink if we're being dampened
        if (this.s.dampened) {
            if (skill == "blink") return false
        }

        // Special circumstance -- merchants can't attack unless they have a dartgun
        if (this.ctype == "merchant" && skill == "attack") {
            if (!this.slots.mainhand) return false // No weapon
            if (this.slots.mainhand.name !== "dartgun") return false // Wrong weapon
            if (this.gold < 100) return false // Not enough gold to shoot
        }

        return true
    }

    // TODO: Return better compound info
    // TODO: Add offering
    public compound(item1Pos: number, item2Pos: number, item3Pos: number, cscrollPos: number, offeringPos?: number): Promise<boolean> {
        const item1Info = this.items[item1Pos]
        const item2Info = this.items[item2Pos]
        const item3Info = this.items[item3Pos]
        const cscrollInfo = this.items[cscrollPos]
        if (!item1Info) return Promise.reject(`There is no item in inventory slot ${item1Pos} (item1).`)
        if (!item2Info) return Promise.reject(`There is no item in inventory slot ${item2Pos} (item2).`)
        if (!item3Info) return Promise.reject(`There is no item in inventory slot ${item3Pos} (item3).`)
        if (!cscrollInfo) return Promise.reject(`There is no item in inventory slot ${cscrollPos} (cscroll).`)
        if (item1Info.name != item2Info.name || item1Info.name != item3Info.name) return Promise.reject("You can only combine 3 of the same items.")
        if (item1Info.level != item2Info.level || item1Info.level != item3Info.level) return Promise.reject("You can only combine 3 items of the same level.")

        const compoundComplete = new Promise<boolean>((resolve, reject) => {
            const playerCheck = (data: CharacterData) => {
                if (!data.hitchhikers)
                    return
                for (const [event, datum] of data.hitchhikers) {
                    if (event == "game_response" && datum.response == "compound_fail") {
                        this.socket.removeListener("game_response", gameResponseCheck)
                        this.socket.removeListener("player", playerCheck)
                        resolve(false)
                        return
                    } else if (event == "game_response" && datum.response == "compound_success") {
                        this.socket.removeListener("game_response", gameResponseCheck)
                        this.socket.removeListener("player", playerCheck)
                        resolve(true)
                        return
                    }
                }
            }

            const gameResponseCheck = (data: GameResponseData) => {
                if (typeof data == "object") {
                    if (data.response == "bank_restrictions" && data.place == "compound") {
                        this.socket.removeListener("game_response", gameResponseCheck)
                        this.socket.removeListener("player", playerCheck)
                        reject("You can't compound items in the bank.")
                    }
                } else if (typeof data == "string") {
                    if (data == "compound_no_item") {
                        this.socket.removeListener("game_response", gameResponseCheck)
                        this.socket.removeListener("player", playerCheck)
                        reject()
                    }
                }
            }

            setTimeout(() => {
                this.socket.removeListener("game_response", gameResponseCheck)
                this.socket.removeListener("player", playerCheck)
                reject("compound timeout (60000ms)")
            }, 60000)
            this.socket.on("game_response", gameResponseCheck)
            this.socket.on("player", playerCheck)
        })

        this.socket.emit("compound", {
            "items": [item1Pos, item2Pos, item3Pos],
            "scroll_num": cscrollPos,
            "clevel": item1Info.level
        })
        return compoundComplete
    }

    // TODO: Add promises
    public craft(item: ItemName): Promise<void> {
        const gInfo = this.G.craft[item]
        if (!gInfo) return Promise.reject(`Can not find a recipe for ${item}.`)
        if (gInfo.cost > this.gold) return Promise.reject(`We don't have enough gold to craft ${item}.`)

        const itemPositions: [number, number][] = []
        for (let i = 0; i < gInfo.items.length; i++) {
            const requiredQuantity = gInfo.items[i][0]
            const requiredName = gInfo.items[i][1]
            const requiredLevel = gInfo.items[i][2]

            const searchArgs = {
                quantityGreaterThan: requiredQuantity > 1 ? requiredQuantity : undefined,
                level: requiredLevel
            }

            const itemPos = this.locateItem(requiredName, this.items, searchArgs)
            if (itemPos == undefined) return Promise.reject(`We don't have ${requiredQuantity} ${requiredName} to craft ${item}.`)

            itemPositions.push([i, itemPos])
        }

        const crafted = new Promise<void>((resolve, reject) => {
            const successCheck = async (data: GameResponseData) => {
                if (typeof data == "object") {
                    if (data.response == "craft" && data.name == item) {
                        this.socket.removeListener("game_response", successCheck)
                        resolve()
                    }
                }
            }

            setTimeout(() => {
                this.socket.removeListener("game_response", successCheck)
                reject(`craft timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
        })

        this.socket.emit("craft", { items: itemPositions })
        return crafted
    }

    // TODO: Add promises
    public depositGold(gold: number): unknown {
        // TODO: Check if you can be in the basement and deposit gold
        if (this.map !== "bank") return Promise.reject("We need to be in 'bank' to deposit gold.")
        if (gold <= 0) return Promise.reject("We can't deposit 0 or less gold")

        if (gold > this.gold) {
            gold = this.gold
            console.warn(`We are only going to deposit ${gold} gold.`)
        }

        this.socket.emit("bank", { operation: "deposit", amount: gold })
    }

    public depositItem(inventoryPos: number, bankPack?: BankPackName, bankSlot = -1): unknown {
        if (this.map !== "bank" && this.map !== "bank_b" && this.map !== "bank_u")
            return Promise.reject(`We're not in the bank (we're in '${this.map}')`)

        const item = this.items[inventoryPos]
        if (!item)
            return Promise.reject(`There is no item in inventory slot ${inventoryPos}.`)

        if (bankPack) {
            // Check if we can access the supplied bankPack
            const bankPackNum = Number.parseInt(bankPack.substr(5, 2))
            if ((this.map == "bank" && bankPackNum < 0 && bankPackNum > 7)
                || (this.map == "bank_b" && bankPackNum < 8 && bankPackNum > 23)
                || (this.map == "bank_u" && bankPackNum < 24 && bankPackNum > 47)) {
                return Promise.reject(`We can not access ${bankPack} on ${this.map}.`)
            }
        } else {
            // Look for a good bankPack
            bankSlot = undefined
            let packFrom: number
            let packTo: number
            if (this.map == "bank") {
                packFrom = 0
                packTo = 7
            } else if (this.map == "bank_b") {
                packFrom = 8
                packTo = 23
            } else if (this.map == "bank_u") {
                packFrom = 24
                packTo = 47
            }

            const numStackable = this.G.items[item.name].s

            let emptyPack: BankPackName
            let emptySlot: number
            for (let packNum = packFrom; packNum <= packTo; packNum++) {
                const packName = `items${packNum}` as BankPackName
                const pack = this.bank[packName] as ItemInfo[]
                if (!pack)
                    continue // We don't have access to this pack
                for (let slotNum = 0; slotNum < pack.length; slotNum++) {
                    const slot = pack[slotNum]
                    if (!slot) {
                        if (!numStackable) {
                            // We can't stack the item, and we found a bank slot with nothing in it. Perfect!
                            bankPack = packName
                            bankSlot = slotNum
                            break
                        } else if (!emptyPack && emptySlot == undefined) {
                            // We can stack the item, but we don't want to use up a space right away if we can add these to another stack
                            emptyPack = packName
                            emptySlot = slotNum
                        }
                    } else if (numStackable && slot.name == item.name && (slot.q + item.q <= numStackable)) {
                        // We found a place to stack our items!
                        bankPack = packName
                        bankSlot = -1 // Apparently -1 will figure it out...
                        break
                    }
                }

                if (bankPack && bankSlot !== undefined)
                    break // We found something
            }
            if (bankPack == undefined && bankSlot == undefined && emptyPack !== undefined && emptySlot !== undefined) {
                // We can't stack it on an existing stack, use an empty slot we found
                bankPack = emptyPack
                bankSlot = emptySlot
            } else if (bankPack === undefined && bankSlot === undefined && emptyPack === undefined && emptySlot === undefined) {
                // We have nowhere to stack it...
                return Promise.reject(`Bank is full. There is nowhere to place '${item.name}'.`)
            }
        }

        const bankItemCount = this.countItem(item.name, this.bank[bankPack])
        const swapped = new Promise<void>((resolve, reject) => {
            const checkDeposit = (data: CharacterData) => {
                if (!data.user) {
                    if (data.map !== "bank" && data.map !== "bank_b" && data.map !== "bank_u") {
                        this.socket.removeListener("player", checkDeposit)
                        return reject(`We're not in the bank (we're in '${data.map}')`)
                    }
                } else {
                    const newBankItemCount = this.countItem(item.name, data.user[bankPack])
                    if ((item.q && newBankItemCount == (bankItemCount + item.q))
                        || (!item.q && newBankItemCount == (bankItemCount + 1))) {
                        this.socket.removeListener("player", checkDeposit)
                        return resolve()
                    }
                }
            }

            setTimeout(() => {
                this.socket.removeListener("player", checkDeposit)
                reject(`depositItem timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("player", checkDeposit)
        })

        this.socket.emit("bank", { operation: "swap", pack: bankPack, str: bankSlot, inv: inventoryPos })
        return swapped
    }

    /**
     * Perform an emotion
     *
     * @param {EmotionName} emotionName
     * @return {*}  {Promise<void>}
     * @memberof Character
     */
    public emote(emotionName: EmotionName): Promise<void> {
        if (!this.emx[emotionName]) return Promise.reject(`We don't have the emotion '${emotionName}'`)

        const emoted = new Promise<void>((resolve, reject) => {
            const failCheck = (data: GameResponseData) => {
                if (typeof data == "string") {
                    if (data == "emotion_cooldown") {
                        this.socket.removeListener("game_response", failCheck)
                        this.socket.removeListener("emotion", successCheck)
                        reject()
                    } else if (data == "emotion_cant") {
                        this.socket.removeListener("game_response", failCheck)
                        this.socket.removeListener("emotion", successCheck)
                        reject()
                    }
                }
            }

            const successCheck = (data: EmotionData) => {
                if (data.name == emotionName && data.player == this.name) {
                    this.socket.removeListener("game_response", failCheck)
                    this.socket.removeListener("emotion", successCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.removeListener("game_response", failCheck)
                this.socket.removeListener("emotion", successCheck)
                reject(`emote timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("game_response", failCheck)
            this.socket.on("emotion", successCheck)
        })

        this.socket.emit("emotion", { name: emotionName })
        return emoted
    }

    public equip(inventoryPos: number, equipSlot?: SlotType): Promise<void> {
        if (!this.items[inventoryPos]) return Promise.reject(`No item in inventory slot ${inventoryPos}.`)

        const iInfo = this.items[inventoryPos]
        // const gInfo = this.game.G.items[iInfo.name]
        // const beforeSlots = this.game.character.slots
        const equipFinished = new Promise<void>((resolve, reject) => {
            const equipCheck = (data: CharacterData) => {
                if (equipSlot) {
                    // Check the slot we equipped it to
                    const item = data.slots[equipSlot]
                    if (item
                        && item.name == iInfo.name
                        && item.level == iInfo.level
                        && item.p == iInfo.p) {
                        this.socket.removeListener("player", equipCheck)
                        this.socket.removeListener("disappearing_text", cantEquipCheck)
                        resolve()
                    }
                } else {
                    // Look for the item in all of the slots
                    for (const slot in data.slots) {
                        const item = data.slots[slot as SlotType]
                        if (item && item.name == iInfo.name) {
                            this.socket.removeListener("player", equipCheck)
                            this.socket.removeListener("disappearing_text", cantEquipCheck)
                            resolve()
                        }
                    }
                }
            }
            const cantEquipCheck = (data: DisappearingTextData) => {
                if (data.id == this.id && data.message == "CAN'T EQUIP") {
                    this.socket.removeListener("player", equipCheck)
                    this.socket.removeListener("disappearing_text", cantEquipCheck)
                    reject(`Can't equip '${inventoryPos}' (${iInfo.name})`)
                }
            }
            setTimeout(() => {
                this.socket.removeListener("player", equipCheck)
                this.socket.removeListener("disappearing_text", cantEquipCheck)
                reject(`equip timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("player", equipCheck)
            this.socket.on("disappearing_text", cantEquipCheck)
        })

        this.socket.emit("equip", { num: inventoryPos, slot: equipSlot })
        return equipFinished
    }

    public exchange(inventoryPos: number): Promise<void> {
        if (!this.items[inventoryPos]) return Promise.reject(`No item in inventory slot ${inventoryPos}.`)
        if (this.G.maps[this.map].mount) return Promise.reject("We can't exchange things in the bank.")

        let startedExchange = false
        if (this.q.exchange) startedExchange = true
        const exchangeFinished = new Promise<void>((resolve, reject) => {
            const completeCheck = (data: CharacterData) => {
                if (!startedExchange && data.q.exchange?.len == data.q.exchange?.ms) {
                    startedExchange = true
                    return
                }
                if (startedExchange && !data.q.exchange) {
                    this.socket.removeListener("player", completeCheck)
                    this.socket.removeListener("game_response", bankCheck)
                    resolve()
                }
            }
            const bankCheck = (data: GameResponseData) => {
                if (typeof data == "object" && data.response == "bank_restrictions" && data.place == "upgrade") {
                    this.socket.removeListener("player", completeCheck)
                    this.socket.removeListener("game_response", bankCheck)
                    reject("You can't exchange items in the bank.")
                } else if (typeof data == "string") {
                    if (data == "exchange_notenough") {
                        this.socket.removeListener("player", completeCheck)
                        this.socket.removeListener("game_response", bankCheck)
                        reject("We don't have enough items to exchange.")
                    } else if (data == "exchange_existing") {
                        this.socket.removeListener("player", completeCheck)
                        this.socket.removeListener("game_response", bankCheck)
                        reject("We are already exchanging something.")
                    }
                }
            }
            setTimeout(() => {
                this.socket.removeListener("player", completeCheck)
                this.socket.removeListener("game_response", bankCheck)
                reject("exchange timeout (60000ms)")
            }, 60000)
            this.socket.on("game_response", bankCheck)
            this.socket.on("player", completeCheck)
        })

        this.socket.emit("exchange", { item_num: inventoryPos, q: this.items[inventoryPos]?.q })
        return exchangeFinished
    }

    // TODO: Add promises and checks
    public finishMonsterHuntQuest() {
        this.socket.emit("monsterhunt")
    }

    public getMonsterHuntQuest(): Promise<void> {
        if (this.ctype == "merchant") return Promise.reject("Merchants can't do Monster Hunts.")
        let close = false
        // Look for a monsterhunter on the current map
        for (const npc of this.G.maps[this.map].npcs) {
            if (npc.id !== "monsterhunter") continue
            if (Tools.distance(this, { x: npc.position[0], y: npc.position[1] }) <= Constants.NPC_INTERACTION_DISTANCE) {
                close = true
                break
            }
        }
        if (!close) return Promise.reject("We are too far away from the Monster Hunter NPC.")
        if (this.s.monsterhunt && this.s.monsterhunt.c > 0) return Promise.reject(`We can't get a new monsterhunt. We have ${this.s.monsterhunt.ms}ms left to kill ${this.s.monsterhunt.c} ${this.s.monsterhunt.id}s.`)

        if (this.s.monsterhunt && this.s.monsterhunt.c == 0) {
            console.warn("We are going to complete the current monster quest first")
            this.finishMonsterHuntQuest()
        }

        const questGot = new Promise<void>((resolve, reject) => {
            const failCheck = (data: GameResponseData) => {
                if (data == "ecu_get_closer") {
                    this.socket.removeListener("game_response", failCheck)
                    this.socket.removeListener("player", successCheck)
                    reject("Too far away from Monster Hunt NPC.")
                } else if (data == "monsterhunt_merchant") {
                    this.socket.removeListener("game_response", failCheck)
                    this.socket.removeListener("player", successCheck)
                    reject("Merchants can't do Monster Hunts.")
                }
            }
            const successCheck = (data: CharacterData) => {
                if (!data.hitchhikers)
                    return
                for (const hitchhiker of data.hitchhikers) {
                    if (hitchhiker[0] == "game_response" && hitchhiker[1] == "monsterhunt_started") {
                        this.socket.removeListener("game_response", failCheck)
                        this.socket.removeListener("player", successCheck)
                        resolve()
                        return
                    }
                }
            }
            setTimeout(() => {
                this.socket.removeListener("game_response", failCheck)
                this.socket.removeListener("player", successCheck)
                reject(`getMonsterHuntQuest timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("game_response", failCheck)
            this.socket.on("player", successCheck)
        })

        this.socket.emit("monsterhunt")
        return questGot
    }

    public getPontyItems(): Promise<ItemInfo[]> {
        const pontyItems = new Promise<ItemInfo[]>((resolve, reject) => {
            const distanceCheck = (data: GameResponseData) => {
                if (data == "buy_get_closer") {
                    this.socket.removeListener("game_response", distanceCheck)
                    this.socket.removeListener("secondhands", secondhandsItems)
                    reject("Too far away from secondhands NPC.")
                }
            }

            const secondhandsItems = (data: ItemInfo[]) => {
                this.socket.removeListener("game_response", distanceCheck)
                this.socket.removeListener("secondhands", secondhandsItems)
                resolve(data)
            }

            setTimeout(() => {
                this.socket.removeListener("game_response", distanceCheck)
                this.socket.removeListener("secondhands", secondhandsItems)
                reject(`getPontyItems timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("secondhands", secondhandsItems)
            this.socket.on("game_response", distanceCheck)
        })

        this.socket.emit("secondhands")
        return pontyItems
    }

    /**
     * Retrieves tracker data
     *
     * @return {*}  {Promise<TrackerData>}
     * @memberof Character
     */
    public getTrackerData(): Promise<TrackerData> {
        if (!this.hasItem("tracker")) return Promise.reject("We need a tracker to obtain tracker data.")

        const gotTrackerData = new Promise<TrackerData>((resolve, reject) => {
            const gotCheck = (data: TrackerData) => {
                this.socket.removeListener("tracker", gotCheck)
                resolve(data)
            }

            setTimeout(() => {
                this.socket.removeListener("tracker", gotCheck)
                reject(`getTrackerData timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.once("tracker", gotCheck)
        })

        this.socket.emit("tracker")
        return gotTrackerData
    }

    /**
     * Returns true if our inventory is full, false otherwise
     *
     * @return {*}  {boolean}
     * @memberof Character
     */
    public isFull(): boolean {
        return this.esize == 0
    }

    /**
     * Returns true if our character is scared, false otherwise
     *
     * @return {*}  {boolean}
     * @memberof Character
     */
    public isScared(): boolean {
        return this.fear > 0
    }

    /**
     * For use on 'cyberland' and 'jail' to leave the map. You will be transported to the spawn on "main".
     *
     * @return {*}  {Promise<void>}
     * @memberof Character
     */
    public leaveMap(): Promise<void> {
        const leaveComplete = new Promise<void>((resolve, reject) => {
            const leaveCheck = (data: NewMapData) => {
                if (data.name == "main") {
                    this.socket.removeListener("new_map", leaveCheck)
                    this.socket.removeListener("game_response", failCheck)
                    resolve()
                } else {
                    this.socket.removeListener("new_map", leaveCheck)
                    this.socket.removeListener("game_response", failCheck)
                    reject(`We are now in ${data.name}, but we should be in main`)
                }
            }

            const failCheck = (data: GameResponseData) => {
                if (typeof data == "string") {
                    if (data == "cant_escape") {
                        this.socket.removeListener("new_map", leaveCheck)
                        this.socket.removeListener("game_response", failCheck)
                        reject(`Can't escape from current map ${this.map}`)
                    }
                }
            }

            setTimeout(() => {
                this.socket.removeListener("new_map", leaveCheck)
                this.socket.removeListener("game_response", failCheck)
                reject(`leaveMap timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.once("new_map", leaveCheck)
            this.socket.on("game_response", failCheck)
        })

        this.socket.emit("leave")
        return leaveComplete
    }

    // TODO: Add checks and promises
    public leaveParty() {
        this.socket.emit("party", { event: "leave" })
    }

    /**
     * Moves the character to a given location. If the character can not move there safely,
     * i.e. there's a wall in the way, then we will move to the closest we can walk there in
     * a straight line.
     * 
     * If you want this function to return after we complete the move, use `await`.
     * 
     * If you start a new move before the last move is finished, the last move's promise will resolve.
     *
     * @param {number} x
     * @param {number} y
     * @param {{ disableSafetyCheck: boolean }} [options] 
     * 
     * disableSafetyCheck - If set to true, move() will not check map bounds
     * 
     * @return {*}  {Promise<NodeData>}
     * @memberof Character
     */
    public async move(x: number, y: number, options?: { disableSafetyCheck: boolean }): Promise<NodeData> {
        // Check if we're already there
        if (this.x == x && this.y == y) return Promise.resolve({ map: this.map, y: this.y, x: this.x })

        let to: IPosition = { map: this.map, x: x, y: y }
        if (!options?.disableSafetyCheck) {
            to = Pathfinder.getSafeWalkTo(
                { map: this.map, x: this.x, y: this.y },
                { map: this.map, x, y })
            if (to.x !== x || to.y !== y) {
                console.warn(`move: We can't move to {x: ${x}, y: ${y}} safely. We will move to {x: ${to.x}, y: ${to.y}}.`)
            }
        }
        const moveFinished = new Promise<NodeData>((resolve, reject) => {
            let timeToFinishMove = 1 + Tools.distance(this, { x: to.x, y: to.y }) / this.speed

            const checkPlayer = async (data: CharacterData) => {
                if (!data.moving || data.going_x != to.x || data.going_y != to.y) {
                    // We *might* not be moving in the right direction. Let's request new data and check.
                    const newData = await this.requestPlayerData()
                    if (!newData.moving || newData.going_x != to.x || newData.going_y != to.y) {
                        clearTimeout(timeout)
                        this.socket.removeListener("player", checkPlayer)
                        reject(`move to ${to.x}, ${to.y} failed`)
                    }
                } else {
                    // We're still moving in the right direction
                    timeToFinishMove = Tools.distance(this, { x: data.x, y: data.y }) / data.speed
                    clearTimeout(timeout)
                    timeout = setTimeout(checkPosition, timeToFinishMove)
                }
            }

            const checkPosition = () => {
                // Force an update of the character position
                this.updatePositions()
                timeToFinishMove = 1 + Tools.distance(this, { x: to.x, y: to.y }) / this.speed

                if (this.x == to.x && this.y == to.y) {
                    // We are here!
                    this.socket.removeListener("player", checkPlayer)
                    resolve({ x: x, y: y, map: this.map })
                } else if (this.moving && this.going_x == to.x && this.going_y == to.y) {
                    // We are still moving in the right direction
                    timeout = setTimeout(checkPosition, timeToFinishMove)
                } else {
                    // We're not moving in the right direction
                    this.socket.removeListener("player", checkPlayer)
                    reject(`move to ${to.x}, ${to.y} failed (we're currently going to ${this.going_x}, ${this.going_y})`)
                }
            }
            let timeout = setTimeout(checkPosition, timeToFinishMove)

            this.socket.on("player", checkPlayer)
        })

        this.socket.emit("move", {
            x: this.x,
            y: this.y,
            going_x: to.x,
            going_y: to.y,
            m: this.m
        })
        this.updatePositions()
        this.going_x = to.x
        this.going_y = to.y
        this.moving = true
        this.move_num += 1
        return moveFinished
    }

    public openChest(id: string): Promise<ChestOpenedData> {
        const chestOpened = new Promise<ChestOpenedData>((resolve, reject) => {
            const openCheck = (data: ChestOpenedData) => {
                if (data.id == id) {
                    this.socket.removeListener("chest_opened", openCheck)
                    resolve(data)
                }
            }
            setTimeout(() => {
                this.socket.removeListener("chest_opened", openCheck)
                reject(`openChest timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("chest_opened", openCheck)
        })
        this.socket.emit("open_chest", { id: id })
        return chestOpened
    }

    public regenHP(): Promise<void> {
        const regenReceived = new Promise<void>((resolve, reject) => {
            const regenCheck = (data: EvalData) => {
                if (data.code && data.code.includes("pot_timeout")) {
                    this.socket.removeListener("eval", regenCheck)
                    resolve()
                }
            }
            setTimeout(() => {
                this.socket.removeListener("eval", regenCheck)
                reject(`regenHP timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", regenCheck)
        })

        this.socket.emit("use", { item: "hp" })
        return regenReceived
    }

    public regenMP(): Promise<void> {
        // if (this.game.nextSkill.get("use_mp")?.getTime() > Date.now()) return Promise.reject("use_mp is on cooldown")
        const regenReceived = new Promise<void>((resolve, reject) => {
            const regenCheck = (data: EvalData) => {
                if (data.code && data.code.includes("pot_timeout")) {
                    this.socket.removeListener("eval", regenCheck)
                    resolve()
                }
            }
            setTimeout(() => {
                this.socket.removeListener("eval", regenCheck)
                reject(`regenMP timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", regenCheck)
        })

        this.socket.emit("use", { item: "mp" })
        return regenReceived
    }

    // TODO: Improve with promises
    public respawn(): void {
        this.socket.emit("respawn")
    }

    public scare(): Promise<string[]> {
        const scared = new Promise<string[]>((resolve, reject) => {
            // TODO: Move this typescript to a definition
            let ids: string[]
            const idsCheck = (data: UIData) => {
                if (data.type == "scare") {
                    ids = data.ids
                    this.socket.removeListener("ui", idsCheck)
                }
            }

            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]scare['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.removeListener("ui", idsCheck)
                    this.socket.removeListener("eval", cooldownCheck)
                    resolve(ids)
                }
            }

            setTimeout(() => {
                this.socket.removeListener("ui", idsCheck)
                this.socket.removeListener("eval", cooldownCheck)
                reject(`scare timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("ui", idsCheck)
            this.socket.on("eval", cooldownCheck)
        })

        this.socket.emit("skill", { name: "scare" })
        return scared
    }

    // TODO: Add promises
    public async sell(itemPos: number, quantity = 1): Promise<void> {
        this.socket.emit("sell", { num: itemPos, quantity: quantity })
    }

    // TODO: Add promises
    public async sendCM(to: string[], message: unknown): Promise<void> {
        this.socket.emit("cm", { to: to, message: JSON.stringify(message) })
    }

    // TODO: Add distance check
    public async sendGold(to: string, amount: number): Promise<number> {
        if (this.gold == 0) return Promise.reject("We have no gold to send.")
        if (!this.players.has(to)) return Promise.reject(`We can't see ${to} nearby to send gold.`)
        if (Tools.distance(this, this.players.get(to)) > Constants.NPC_INTERACTION_DISTANCE) return Promise.reject(`We are too far away from ${to} to send gold.`)

        const goldSent: Promise<number> = new Promise<number>((resolve, reject) => {
            const sentCheck = (data: GameResponseData) => {
                if (data == "trade_get_closer") {
                    this.socket.removeListener("game_response", sentCheck)
                    reject(`We are too far away from ${to} to send gold.`)
                } else if (typeof data == "object" && data.response == "gold_sent" && data.name == to) {
                    if (data.gold !== amount)
                        console.warn(`We wanted to send ${to} ${amount} gold, but we sent ${data.gold}.`)
                    this.socket.removeListener("game_response", sentCheck)
                    resolve(data.gold)
                }
            }

            setTimeout(() => {
                this.socket.removeListener("game_response", sentCheck)
                reject(`sendGold timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("game_response", sentCheck)
        })
        this.socket.emit("send", { name: to, gold: amount })
        return goldSent
    }

    public sendItem(to: string, inventoryPos: number, quantity = 1): Promise<void> {
        if (!this.players.has(to)) return Promise.reject(`${to} is not nearby.`)
        if (!this.items[inventoryPos]) return Promise.reject(`No item in inventory slot ${inventoryPos}.`)
        if (this.items[inventoryPos]?.q < quantity) return Promise.reject(`We only have a quantity of ${this.items[inventoryPos].q}, not ${quantity}.`)

        const item = this.items[inventoryPos]

        const itemSent = new Promise<void>((resolve, reject) => {
            const sentCheck = (data: GameResponseData) => {
                if (data == "trade_get_closer") {
                    this.socket.removeListener("game_response", sentCheck)
                    reject(`sendItem failed, ${to} is too far away`)
                } else if (data == "send_no_space") {
                    this.socket.removeListener("game_response", sentCheck)
                    reject(`sendItem failed, ${to} has no inventory space`)
                } else if (typeof data == "object" && data.response == "item_sent" && data.name == to && data.item == item.name && data.q == quantity) {
                    this.socket.removeListener("game_response", sentCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.removeListener("game_response", sentCheck)
                reject(`sendItem timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("game_response", sentCheck)
        })

        this.socket.emit("send", { name: to, num: inventoryPos, q: quantity })
        return itemSent
    }

    /**
     * Invites the given character to our party.
     * @param id The character ID to invite to our party.
     */
    // TODO: See what socket events happen, and see if we can see if the server picked up our request
    public sendPartyInvite(id: string) {
        this.socket.emit("party", { event: "invite", name: id })
    }

    /**
     * Requests to join another character's party.
     * @param id The character ID to request a party invite from.
     */
    // TODO: See what socket events happen, and see if we can see if the server picked up our request
    public sendPartyRequest(id: string) {
        this.socket.emit("party", { event: "request", name: id })
    }

    /**
     * Shifts a booster to the given type
     *
     * @param {number} booster the inventory popsition of the booster
     * @param {("goldbooster" | "luckbooster" | "xpbooster")} to the type you want to shift it to
     * @memberof Character
     */
    // TODO: Add promises
    public shiftBooster(booster: number, to: "goldbooster" | "luckbooster" | "xpbooster") {
        const itemInfo = this.items[booster]
        if (!itemInfo) return Promise.reject(`Inventory Slot ${booster} is empty.`)
        if (!["goldbooster", "luckbooster", "xpbooster"].includes(itemInfo.name)) return Promise.reject(`The given item is not a booster (it's a '${itemInfo.name}')`)

        this.socket.emit("booster", { num: booster, action: "shift", to: to })
    }

    protected lastSmartMove: number = Date.now();
    /**
     * Used to move long distances strategically, i.e. avoiding walking through walls.
     * You can use this function to move across maps.
     *
     * @param {(MapName | MonsterName | NPCName | IPosition)} to
     * @param {{ avoidTownWarps?: boolean, getWithin?: number; useBlink?: boolean; }} [options={
     *         getWithin: 0,
     *         useBlink: false
     *     }]
     * @return {*}  {Promise<NodeData>}
     * @memberof Character
     */
    public async smartMove(to: MapName | MonsterName | NPCName | IPosition, options: { avoidTownWarps?: boolean, getWithin?: number; useBlink?: boolean; } = {
        avoidTownWarps: false,
        getWithin: 0,
        useBlink: false
    }): Promise<NodeData> {
        const started = Date.now()
        this.lastSmartMove = started
        let fixedTo: NodeData
        let path: LinkData[]
        if (typeof to == "string") {
            // Check if our destination is a map name
            for (const mapName in this.G.maps) {
                if (to !== mapName)
                    continue

                // Set `to` to the `town` spawn on the map
                const mainSpawn = this.G.maps[to as MapName].spawns[0]
                fixedTo = { map: to as MapName, x: mainSpawn[0], y: mainSpawn[1] }
                break
            }

            // Check if our destination is a monster type
            if (!fixedTo) {
                for (const mtype in this.G.monsters) {
                    if (to !== mtype)
                        continue

                    // Set `to` to the closest spawn for these monsters
                    const locations = this.locateMonster(mtype as MonsterName)
                    let closestDistance: number = Number.MAX_VALUE
                    for (const location of locations) {
                        const potentialPath = await Pathfinder.getPath(this, location, options?.avoidTownWarps == true)
                        const distance = Pathfinder.computePathCost(potentialPath)
                        if (distance < closestDistance) {
                            path = potentialPath
                            fixedTo = path[path.length - 1]
                            closestDistance = distance
                        }
                    }
                    break
                }
            }

            // Check if our destination is an NPC role
            if (!fixedTo) {
                for (const mapName in this.G.maps) {
                    if (this.G.maps[mapName as MapName].ignore)
                        continue
                    for (const npc of this.G.maps[mapName as MapName].npcs) {
                        if (to !== npc.id)
                            continue

                        // Set `to` to the closest NPC
                        const locations = this.locateNPC(npc.id)
                        let closestDistance: number = Number.MAX_VALUE
                        for (const location of locations) {
                            const potentialPath = await Pathfinder.getPath(this, location, options?.avoidTownWarps == true)
                            const distance = Pathfinder.computePathCost(potentialPath)
                            if (distance < closestDistance) {
                                path = potentialPath
                                fixedTo = path[path.length - 1]
                                closestDistance = distance
                            }
                        }
                        break
                    }
                }
            }

            if (!fixedTo)
                return Promise.reject(`Could not find a suitable destination for '${to}'`)
        } else if (to.x !== undefined && to.y !== undefined) {
            if (to.map)
                fixedTo = to as NodeData
            else
                fixedTo = { map: this.map, x: to.x, y: to.y }
        } else {
            console.debug(to)
            return Promise.reject("'to' is unsuitable for smartMove. We need a 'map', an 'x', and a 'y'.")
        }

        // Check if we're already close enough
        if (options?.getWithin >= Tools.distance(this, fixedTo))
            return Promise.resolve({ x: this.x, y: this.y, map: this.map })

        // If we don't have the path yet, get it
        if (!path) path = await Pathfinder.getPath(this, fixedTo, options?.avoidTownWarps == true)

        let lastMove = -1
        for (let i = 0; i < path.length; i++) {
            let currentMove = path[i]

            if (started < this.lastSmartMove) {
                if (typeof to == "string")
                    return Promise.reject(`smartMove to ${to} cancelled (new smartMove started)`)
                else
                    return Promise.reject(`smartMove to ${to.map}:${to.x},${to.y} cancelled (new smartMove started)`)
            }

            if (Tools.distance(this, fixedTo) < options.getWithin) {
                break // We're already close enough!
            }

            // Check if we can walk to a spot close to the goal if that's OK
            if (currentMove.type == "move" && this.map == fixedTo.map && options.getWithin > 0) {
                const angle = Math.atan2(this.y - fixedTo.y, this.x - fixedTo.x)
                const potentialMove: LinkData = {
                    type: "move",
                    map: this.map,
                    x: fixedTo.x + Math.cos(angle) * options.getWithin,
                    y: fixedTo.y + Math.sin(angle) * options.getWithin
                }
                if (Pathfinder.canWalkPath(this, potentialMove)) {
                    i = path.length
                    currentMove = potentialMove
                }
            }

            // Skip check -- check if we can move to the next node
            if (currentMove.type == "move") {
                for (let j = i + 1; j < path.length; j++) {
                    const potentialMove = path[j]
                    if (potentialMove.map !== currentMove.map)
                        break
                    if (potentialMove.type == "town")
                        break

                    if (potentialMove.type == "move" && Pathfinder.canWalkPath(this, potentialMove)) {
                        i = j
                        currentMove = potentialMove
                    }
                }
            }

            // Blink skip check
            if (options?.useBlink && this.canUse("blink")) {
                let blinked = false
                for (let j = path.length - 1; j > i; j--) {
                    const potentialMove = path[j]
                    if (potentialMove.map == currentMove.map) {
                        await (this as unknown as Mage).blink(potentialMove.x, potentialMove.y)
                        i = j
                        blinked = true
                        break
                    }
                }
                if (blinked)
                    continue
            }

            // TODO: We should probably add a check that we won't move further away if this goes off
            //       before this is actually implemented.
            // // If we're going to be using town "soon", ready it up!
            // let time = 0
            // for (let j = i + 1; j < path.length; j++) {
            //     const lastMove = path[j - 1]
            //     const nextMove = path[j]
            //     if (nextMove.type == "move") {
            //         time += 2 * Tools.distance(lastMove, nextMove) / this.speed
            //     } else if (nextMove.type == "transport" || nextMove.type == "leave") {
            //         time += Math.min(...this.pings)
            //     } else if (nextMove.type == "town") {
            //         if (time < 2000) {
            //             console.log(`We're prematurely warping to town to save ${3000 - time}ms!`)
            //             this.warpToTown() // Prematurely warp to town!
            //             break
            //         }
            //     }
            //     if (time > 2000) break
            // }
            // Perform the next movement
            try {
                if (currentMove.type == "leave") {
                    await this.leaveMap()
                } else if (currentMove.type == "move") {
                    if (currentMove.map !== this.map) {
                        return Promise.reject(`We are supposed to be in ${currentMove.map}, but we are in ${this.map}`)
                    }
                    await this.move(currentMove.x, currentMove.y, { disableSafetyCheck: true })
                } else if (currentMove.type == "town") {
                    await this.warpToTown()
                } else if (currentMove.type == "transport") {
                    await this.transport(currentMove.map, currentMove.spawn)
                }
            } catch (e) {
                console.error(e)
                await this.requestPlayerData()
                if (lastMove == i)
                    return Promise.reject("We are having some trouble smartMoving...")
                lastMove = i
                i--
            }
        }

        return { map: this.map, x: this.x, y: this.y }
    }

    public async stopSmartMove(): Promise<NodeData> {
        this.lastSmartMove = Date.now()
        if (this?.c?.town) {
            this.stopWarpToTown()
        }
        return this.move(this.x, this.y)
    }

    // TODO: Add promises
    public stopWarpToTown(): void {
        // TODO: Check if we are warping to town, return reject promise if we are

        this.socket.emit("stop", { action: "town" })
    }

    public takeMailItem(mailID: string): Promise<void> {
        // TODO: We could be receiving a stacked item, and that could stack on something in our inventory...
        // if (this.isFull()) return Promise.reject("Not enough inventory space to retrieve mail item")

        const itemReceived = new Promise<void>((resolve, reject) => {
            const successCheck = (data: GameResponseData) => {
                if (typeof data == "object") {
                    if (data.response == "mail_item_taken") {
                        this.socket.removeListener("game_response", successCheck)
                        resolve()
                    }
                }
            }

            setTimeout(() => {
                this.socket.removeListener("game_response", successCheck)
                reject("takeMailItem timeout (5000ms)")
            }, 5000)
            this.socket.on("game_response", successCheck)
        })

        this.socket.emit("mail_take_item", { id: mailID })
        return itemReceived
    }

    public throwSnowball(target: string, snowball = this.locateItem("snowball")): Promise<string> {
        if (this.G.skills.snowball.mp > this.mp) return Promise.reject("Not enough MP to throw a snowball.")
        if (snowball === undefined) return Promise.reject("We don't have any snowballs in our inventory.")

        const throwStarted = new Promise<string>((resolve, reject) => {
            let projectile: string

            const attackCheck = (data: ActionData) => {
                if (data.attacker == this.id
                    && data.type == "snowball"
                    && data.target == target) {
                    projectile = data.pid
                }
            }

            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]snowball['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.removeListener("action", attackCheck)
                    this.socket.removeListener("eval", cooldownCheck)
                    resolve(projectile)
                }
            }

            const failCheck = (data: GameResponseData) => {
                if (typeof data == "object") {
                    if (data.response == "attack_failed") {
                        this.socket.removeListener("action", attackCheck)
                        this.socket.removeListener("eval", cooldownCheck)
                        reject("throwsnowball failed")
                    }
                }
            }

            setTimeout(() => {
                this.socket.removeListener("action", attackCheck)
                this.socket.removeListener("eval", cooldownCheck)
                reject(`throwsnowball timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("action", attackCheck)
            this.socket.on("eval", cooldownCheck)
            this.socket.on("game_response", failCheck)
        })

        this.socket.emit("skill", { name: "snowball", id: target, num: snowball })
        return throwStarted
    }

    public transport(map: MapName, spawn: number): Promise<void> {
        const transportComplete = new Promise<void>((resolve, reject) => {
            const transportCheck = (data: NewMapData) => {
                this.socket.removeListener("game_response", failCheck)
                if (data.name == map)
                    resolve()
                else
                    reject(`We are now in ${data.name}, but we should be in ${map}`)
            }

            const failCheck = (data: GameResponseData) => {
                if (typeof data == "object") {
                    if (data.response == "bank_opx" && data.reason == "mounted") {
                        this.socket.removeListener("game_response", failCheck)
                        this.socket.removeListener("new_map", transportCheck)
                        reject(`${data.name} is currently in the bank, we can't enter.`)
                    }
                }
            }

            setTimeout(() => {
                this.socket.removeListener("game_response", failCheck)
                this.socket.removeListener("new_map", transportCheck)
                reject(`transport timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.once("new_map", transportCheck)
            this.socket.on("game_response", failCheck)
        })

        this.socket.emit("transport", { to: map, s: spawn })
        return transportComplete
    }

    public unequip(slot: SlotType | TradeSlotType): Promise<void> {
        if (this.slots[slot] === null) return Promise.reject(`Slot ${slot} is empty; nothing to unequip.`)
        if (this.slots[slot] === undefined) return Promise.reject(`Slot ${slot} does not exist.`)

        const unequipped = new Promise<void>((resolve, reject) => {
            const unequipCheck = (data: CharacterData) => {
                if (data.slots[slot] === null) {
                    this.socket.removeListener("player", unequipCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.removeListener("player", unequipCheck)
                reject(`unequip timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)

            this.socket.on("player", unequipCheck)
        })

        this.socket.emit("unequip", { slot: slot })
        return unequipped
    }

    public upgrade(itemPos: number, scrollPos: number, offeringPos?: number): Promise<boolean> {
        if (this.G.maps[this.map].mount) return Promise.reject("We can't upgrade things in the bank.")

        const itemInfo = this.items[itemPos]
        const scrollInfo = this.items[scrollPos]
        if (!itemInfo) return Promise.reject(`There is no item in inventory slot ${itemPos}.`)
        if (this.G.items[itemInfo.name].upgrade == undefined) return Promise.reject("This item is not upgradable.")
        if (!scrollInfo) return Promise.reject(`There is no scroll in inventory slot ${scrollPos}.`)

        const upgradeComplete = new Promise<boolean>((resolve, reject) => {
            const playerCheck = (data: CharacterData) => {
                if (!data.hitchhikers)
                    return
                for (const [event, datum] of data.hitchhikers) {
                    if (event == "game_response" && datum.response == "upgrade_fail" && datum.num == itemPos) {
                        this.socket.removeListener("game_response", gameResponseCheck)
                        this.socket.removeListener("player", playerCheck)
                        resolve(false)
                        return
                    } else if (event == "game_response" && datum.response == "upgrade_success" && datum.num == itemPos) {
                        this.socket.removeListener("game_response", gameResponseCheck)
                        this.socket.removeListener("player", playerCheck)
                        resolve(true)
                        return
                    }
                }
            }

            const gameResponseCheck = (data: GameResponseData) => {
                if (typeof data == "object" && data.response == "bank_restrictions" && data.place == "upgrade") {
                    this.socket.removeListener("game_response", gameResponseCheck)
                    this.socket.removeListener("player", playerCheck)
                    reject("You can't upgrade items in the bank.")
                } else if (typeof data == "string") {
                    if (data == "bank_restrictions") {
                        this.socket.removeListener("game_response", gameResponseCheck)
                        this.socket.removeListener("player", playerCheck)
                        reject("We can't upgrade things in the bank.")
                    } else if (data == "upgrade_in_progress") {
                        this.socket.removeListener("game_response", gameResponseCheck)
                        this.socket.removeListener("player", playerCheck)
                        reject("We are already upgrading something.")
                    } else if (data == "upgrade_incompatible_scroll") {
                        this.socket.removeListener("game_response", gameResponseCheck)
                        this.socket.removeListener("player", playerCheck)
                        reject(`The scroll we're trying to use (${scrollInfo.name}) isn't a high enough grade to upgrade this item.`)
                    } else if (data == "upgrade_success") {
                        this.socket.removeListener("game_response", gameResponseCheck)
                        this.socket.removeListener("player", playerCheck)
                        resolve(true)
                    } else if (data == "upgrade_fail") {
                        this.socket.removeListener("game_response", gameResponseCheck)
                        this.socket.removeListener("player", playerCheck)
                        resolve(false)
                    }
                }
            }
            setTimeout(() => {
                this.socket.removeListener("game_response", gameResponseCheck)
                this.socket.removeListener("player", playerCheck)
                reject("upgrade timeout (60000ms)")
            }, 60000)
            this.socket.on("game_response", gameResponseCheck)
            this.socket.on("player", playerCheck)
        })

        this.socket.emit("upgrade", { item_num: itemPos, scroll_num: scrollPos, offering_num: offeringPos, clevel: this.items[itemPos].level })
        return upgradeComplete
    }

    // TODO: Check if it's an HP Pot
    public useHPPot(itemPos: number): Promise<void> {
        if (!this.items[itemPos]) return Promise.reject(`There is no item in inventory slot ${itemPos}.`)
        if (this.G.items[this.items[itemPos].name].type !== "pot") return Promise.reject(`The item provided (${itemPos}) is not a potion.`)
        if (this.G.items[this.items[itemPos].name].gives[0][0] !== "hp") return Promise.reject(`The item provided(${itemPos}) is not an HP Potion.`)
        if (this.G.items[this.items[itemPos].name].gives[0][1] < 0) return Promise.reject(`The item provided(${itemPos}) is not an HP Potion.`)

        const healReceived = new Promise<void>((resolve, reject) => {
            const healCheck = (data: EvalData) => {
                if (data.code && data.code.includes("pot_timeout")) {
                    this.socket.removeListener("eval", healCheck)
                    resolve()
                }
            }
            setTimeout(() => {
                this.socket.removeListener("eval", healCheck)
                reject(`useHPPot timeout(${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", healCheck)
        })

        this.socket.emit("equip", { num: itemPos })
        return healReceived
    }

    // TODO: Check if it's an MP Pot
    public useMPPot(itemPos: number): Promise<void> {
        if (!this.items[itemPos]) return Promise.reject(`There is no item in inventory slot ${itemPos}.`)
        if (this.G.items[this.items[itemPos].name].type !== "pot") return Promise.reject(`The item provided (${itemPos}) is not a potion.`)
        if (this.G.items[this.items[itemPos].name].gives[0][0] !== "mp") return Promise.reject(`The item provided(${itemPos}) is not an MP Potion.`)
        if (this.G.items[this.items[itemPos].name].gives[0][1] < 0) return Promise.reject(`The item provided(${itemPos}) is not an MP Potion.`)

        const healReceived = new Promise<void>((resolve, reject) => {
            const healCheck = (data: EvalData) => {
                if (data.code && data.code.includes("pot_timeout")) {
                    this.socket.removeListener("eval", healCheck)
                    resolve()
                }
            }
            setTimeout(() => {
                this.socket.removeListener("eval", healCheck)
                reject(`useMPPot timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", healCheck)
        })

        this.socket.emit("equip", { num: itemPos })
        return healReceived
    }

    public warpToJail(): Promise<NodeData> {
        return this.move(Number.MAX_VALUE, Number.MAX_VALUE, { disableSafetyCheck: true })
    }

    public warpToTown(): Promise<NodeData> {
        let startedWarp = false
        const warpComplete = new Promise<NodeData>((resolve, reject) => {
            const failCheck = (data: CharacterData) => {
                if (!startedWarp && data.c.town && data.c.town.ms == 3000) {
                    startedWarp = true
                    return
                }
                if (startedWarp && !data.c.town) {
                    this.socket.removeListener("player", failCheck)
                    this.socket.removeListener("new_map", warpedCheck2)
                    reject("warpToTown failed.")
                }
            }
            const warpedCheck2 = (data: NewMapData) => {
                if (data.effect == 1) {
                    this.socket.removeListener("player", failCheck)
                    this.socket.removeListener("new_map", warpedCheck2)
                    resolve({ map: data.name, x: data.x, y: data.y })
                }
            }

            setTimeout(() => {
                if (!startedWarp) {
                    this.socket.removeListener("player", failCheck)
                    this.socket.removeListener("new_map", warpedCheck2)
                    reject("warpToTown timeout (1000ms)")
                }
            }, 1000)

            setTimeout(() => {
                this.socket.removeListener("player", failCheck)
                this.socket.removeListener("new_map", warpedCheck2)
                reject("warpToTown timeout (5000ms)")
            }, 5000)
            this.socket.on("new_map", warpedCheck2)
            this.socket.on("player", failCheck)
        })

        this.socket.emit("town")
        return warpComplete
    }

    public withdrawGold(gold: number): unknown {
        // TODO: Check if you can be in the basement and withdraw gold
        if (this.map !== "bank")
            return Promise.reject("We need to be in 'bank' to withdraw gold.")
        if (gold <= 0)
            return Promise.reject("We can't withdraw 0 or less gold.")

        if (gold > this.bank.gold) {
            gold = this.bank.gold
            console.warn(`We are only going to withdraw ${gold} gold.`)
        }

        this.socket.emit("bank", { operation: "withdraw", amount: gold })
    }

    public withdrawItem(bankPack: BankPackName, bankPos: number, inventoryPos = -1): unknown {
        const item = this.bank[bankPack][bankPos]
        if (!item) return Promise.reject(`There is no item in bank ${bankPack}[${bankPos}]`)

        const bankPackNum = Number.parseInt(bankPack.substr(5, 2))
        if ((this.map == "bank" && bankPackNum < 0 && bankPackNum > 7)
            || (this.map == "bank_b" && bankPackNum < 8 && bankPackNum > 23)
            || (this.map == "bank_u" && bankPackNum < 24 && bankPackNum > 47)) {
            return Promise.reject(`We can not access ${bankPack} on ${this.map}.`)
        }

        const itemCount = this.countItem(item.name)

        const swapped = new Promise<void>((resolve, reject) => {
            const checkWithdrawal = (data: CharacterData) => {
                const newCount = this.countItem(item.name, data.items)
                if (item.q && newCount == (itemCount + item.q)
                    || !item.q && newCount == (itemCount + 1)) {
                    this.socket.removeListener("player", checkWithdrawal)
                    return resolve()
                }
            }

            setTimeout(() => {
                this.socket.removeListener("player", checkWithdrawal)
                reject(`withdrawItem timeout(${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("player", checkWithdrawal)
        })

        this.socket.emit("bank", { operation: "swap", pack: bankPack, str: bankPos, inv: inventoryPos })
        return swapped
    }

    /**
     * Returns the number of items that match the given parameters
     * @param itemName The item to look for
     * @param inventory Where to look for the item
     * @param filters Filters to help search for specific properties on items
     */
    public countItem(item: ItemName, inventory = this.items,
        filters?: {
            levelGreaterThan?: number;
            levelLessThan?: number;
        }): number {
        let count = 0
        for (const inventoryItem of inventory) {
            if (!inventoryItem) continue
            if (inventoryItem.name !== item) continue

            if (filters?.levelGreaterThan !== undefined) {
                if (inventoryItem.level == undefined)
                    continue // This item doesn't have a level
                if (inventoryItem.level <= filters.levelGreaterThan)
                    continue // This item is a lower level than desired
            }
            if (filters?.levelLessThan !== undefined) {
                if (inventoryItem.level == undefined)
                    continue // This item doesn't have a level
                if (inventoryItem.level >= filters.levelLessThan)
                    continue // This item is a higher level than desired
            }

            // We have the item!
            if (inventoryItem.q) {
                count += inventoryItem.q
            } else {
                count += 1
            }
        }

        return count
    }

    public getCooldown(skill: SkillName): number {
        // Check if this skill is shared with another cooldown
        if (this.G.skills[skill].share) skill = this.G.skills[skill].share

        const nextSkill = this.nextSkill.get(skill)
        if (!nextSkill) return 0

        const cooldown = nextSkill.getTime() - Date.now()
        if (cooldown < 0) return 0
        return cooldown
    }

    public getNearestMonster(mtype?: MonsterName): { monster: Entity; distance: number; } {
        let closest: Entity
        let closestD = Number.MAX_VALUE
        this.entities.forEach((entity) => {
            if (mtype && entity.type != mtype)
                return
            const d = Tools.distance(this, entity)
            if (d < closestD) {
                closest = entity
                closestD = d
            }
        })
        if (closest)
            return { monster: closest, distance: closestD }
    }

    public getNearestAttackablePlayer(): { player: Player; distance: number; } {
        if (!this.isPVP())
            return undefined

        let closest: Player
        let closestD = Number.MAX_VALUE
        this.players.forEach((player) => {
            if (player.s?.invincible)
                return
            if (player.npc)
                return
            const d = Tools.distance(this, player)
            if (d < closestD) {
                closest = player
                closestD = d
            }
        })
        if (closest)
            return { player: closest, distance: closestD }
    }

    /**
     * Returns a boolean corresponding to whether or not we have a PvP marked item in our inventory
     * @param inv The inventory to look in
     */
    public hasPvPMarkedItem(inv = this.items): boolean {
        for (let i = 0; i < inv.length; i++) {
            const item = inv[i]
            if (!item) continue
            if (item.v) return true
        }
        return false
    }

    /**
     * Returns a boolean corresponding to whether or not the item is in our inventory.
     * @param iN The item to look for
     * @param inv Where to look for the item
     */
    public hasItem(iN: ItemName, inv = this.items,
        args?: {
            level?: number;
            levelGreaterThan?: number;
            levelLessThan?: number;
            locateHighestLevel?: number;
            quantityGreaterThan?: number;
        }): boolean {
        return this.locateItem(iN, inv, args) !== undefined
    }

    /**
     * Returns a boolean corresponding to whether or not we have a given item equipped.
     * @param itemName The item to look for
     */
    public isEquipped(itemName: ItemName): boolean {
        for (const slot in this.slots) {
            if (!this.slots[slot as SlotType]) continue // Nothing equipped in this slot
            if (this.slots[slot as SlotType].b) continue // We are buying this item, we don't have it equipped
            if (this.slots[slot as SlotType].name == itemName) return true
        }
        return false
    }

    /**
     * Returns true if our skill is on cooldown, false otherwise.
     * This function does not check if you can use the skill.
     * If you want to check if you have all the requirements to use it, see canUse(skill).
     *
     * @param {SkillName} skill
     * @return {*}  {boolean}
     * @memberof Character
     */
    public isOnCooldown(skill: SkillName): boolean {
        return this.getCooldown(skill) !== 0
    }

    /**
     * Can we attack other players?
     *
     * @return {*}  {boolean}
     * @memberof Character
     */
    public isPVP(): boolean {
        if (this.G.maps[this.map].pvp) return true
        if (this.G.maps[this.map].safe) return false
        return this.server.pvp
    }

    public locateDuplicateItems(inventory = this.items): {
        [T in ItemName]?: number[];
    } {
        const items: (ItemInfo & { slotNum: number; })[] = []
        for (let i = 0; i < inventory.length; i++) {
            const item = inventory[i]
            if (!item)
                continue
            items.push({ ...item, slotNum: i })
        }

        // Sort the data to make it easier to parse the data later
        items.sort((a, b) => {
            // Sort alphabetically
            const n = a.name.localeCompare(b.name)
            if (n !== 0)
                return n

            // Sort lowest level first
            if (a.level !== undefined && b.level !== undefined && a.level !== b.level)
                return a.level - b.level

            // Sort 'p' items first
            if (a.p !== undefined && b.p === undefined)
                return -1

            return 0
        })

        const duplicates: {
            [T in ItemName]?: number[];
        } = {}
        for (let i = 0; i < items.length - 1; i++) {
            const item1 = items[i]
            for (let j = i + 1; j < items.length; j++) {
                const item2 = items[j]

                if (item1.name === item2.name) {
                    if (j == i + 1) {
                        duplicates[item1.name] = [item1.slotNum, item2.slotNum]
                    } else {
                        duplicates[item1.name].push(item2.slotNum)
                    }
                } else {
                    i = j - 1
                    break
                }
            }
        }

        return duplicates
    }

    /**
     * Returns the index of the item in the given inventory
     * @param itemName The item to look for
     * @param inventory Where to look for the item
     * @param filters Filters to help search for specific properties on items
     */
    public locateItem(itemName: ItemName, inventory = this.items,
        filters?: {
            level?: number;
            levelGreaterThan?: number;
            levelLessThan?: number;
            quantityGreaterThan?: number;
        }): number {
        for (let i = 0; i < inventory.length; i++) {
            const item = inventory[i]
            if (!item) continue
            if (item.name !== itemName) continue

            if (filters?.level !== undefined) {
                if (item.level !== filters.level)
                    continue // The item's level doesn't match
            }
            if (filters?.levelGreaterThan !== undefined) {
                if (item.level == undefined)
                    continue // This item doesn't have a level
                if (item.level <= filters.levelGreaterThan)
                    continue // This item is a lower level than desired
            }
            if (filters?.levelLessThan !== undefined) {
                if (item.level == undefined)
                    continue // This item doesn't have a level
                if (item.level >= filters.levelLessThan)
                    continue // This item is a higher level than desired
            }
            if (filters?.quantityGreaterThan !== undefined) {
                if (item.q == undefined)
                    continue // This item doesn't have a quantity
                if (item.q <= filters.quantityGreaterThan)
                    continue // There isn't enough items in this stack
            }

            return i
        }
        return undefined
    }

    /**
     * Returns a list of indexes of the items in the given inventory
     * @param itemName The item to look for
     * @param inventory Where to look for the item
     * @param filters Filters to help search for specific properties on items
     */
    public locateItems(itemName: ItemName, inventory = this.items,
        filters?: {
            level?: number;
            levelGreaterThan?: number;
            levelLessThan?: number;
            quantityGreaterThan?: number;
        }): number[] {
        const found: number[] = []
        for (let i = 0; i < inventory.length; i++) {
            const item = inventory[i]
            if (!item) continue
            if (item.name !== itemName) continue

            if (filters) {
                if (filters.level !== undefined) {
                    if (item.level !== filters.level)
                        continue // The item's level doesn't match
                }
                if (filters.levelGreaterThan !== undefined) {
                    if (item.level == undefined)
                        continue // This item doesn't have a level
                    if (item.level <= filters.levelGreaterThan)
                        continue // This item is a lower level than desired
                }
                if (filters.levelLessThan !== undefined) {
                    if (item.level == undefined)
                        continue // This item doesn't have a level
                    if (item.level >= filters.levelLessThan)
                        continue // This item is a higher level than desired
                }
                if (filters.quantityGreaterThan !== undefined) {
                    if (item.q == undefined)
                        continue // This item doesn't have a quantity
                    if (item.q <= filters.quantityGreaterThan)
                        continue // There isn't enough items in this stack
                }
            }

            found.push(i)
        }
        return found
    }

    public locateMonster(mType: MonsterName): NodeData[] {
        const locations: NodeData[] = []

        // Known special monster spawns
        if (mType == "goldenbat")
            mType = "bat"
        else if (mType == "snowman")
            mType = "arcticbee"

        for (const mapName in this.G.maps) {
            if (this.G.maps[mapName as MapName].ignore)
                continue

            const map = this.G.maps[mapName as MapName]
            if (map.instance || !map.monsters || map.monsters.length == 0)
                continue // Map is unreachable, or there are no monsters

            for (const monsterSpawn of map.monsters) {
                if (monsterSpawn.type != mType)
                    continue
                if (monsterSpawn.boundary) {
                    locations.push({ "map": mapName as MapName, "x": (monsterSpawn.boundary[0] + monsterSpawn.boundary[2]) / 2, "y": (monsterSpawn.boundary[1] + monsterSpawn.boundary[3]) / 2 })
                } else if (monsterSpawn.boundaries) {
                    for (const boundary of monsterSpawn.boundaries) {
                        locations.push({ "map": boundary[0], "x": (boundary[1] + boundary[3]) / 2, "y": (boundary[2] + boundary[4]) / 2 })
                    }
                }
            }
        }

        return locations
    }

    public locateNPC(npcID: NPCName): NodeData[] {
        const locations: NodeData[] = []
        for (const mapName in this.G.maps) {
            const map = this.G.maps[mapName as MapName]
            if (map.ignore) continue
            if (map.instance || !map.npcs || map.npcs.length == 0) continue // Map is unreachable, or there are no NPCs

            for (const npc of map.npcs) {
                if (npc.id !== npcID) continue

                // TODO: If it's an NPC that moves around, check in the database for the latest location
                if (npc.position) {
                    locations.push({ map: mapName as MapName, x: npc.position[0], y: npc.position[1] })
                } else if (npc.positions) {
                    for (const position of npc.positions) {
                        locations.push({ map: mapName as MapName, x: position[0], y: position[1] })
                    }
                }
            }
        }

        return locations
    }

    public locateCraftNPC(itemName: ItemName): NodeData {
        // Is the item craftable?
        const gCraft = this.G.craft[itemName]
        if (gCraft) {
            // If the item has a quest associated with it, use that npc, otherwise use the craftsman.
            const npcToLocate = gCraft.quest ? gCraft.quest : "craftsman"
            for (const mapName in this.G.maps) {
                const gMap = this.G.maps[mapName as MapName]
                if (gMap.ignore) continue

                for (const npc of gMap.npcs) {
                    if (npc.id == npcToLocate) {
                        // We found the NPC
                        return { map: mapName as MapName, x: npc.position[0], y: npc.position[1] }
                    }
                }
            }
        }

        throw Error(`${itemName} is not craftable.`)
    }

    public locateExchangeNPC(itemName: ItemName): NodeData {
        // Does the item have a quest involved?
        const gItem = this.G.items[itemName]
        if (gItem.quest) {
            // Find the NPC that accepts these quests
            let npcToLocate: NPCName
            for (const npcName in this.G.npcs) {
                const gNPC = this.G.npcs[npcName as NPCName]
                if (gNPC.ignore) continue

                if (gNPC.quest == gItem.quest) {
                    npcToLocate = gNPC.id
                    break
                }
            }
            // Look for the NPC in the maps
            if (npcToLocate) {
                for (const mapName in this.G.maps) {
                    const gMap = this.G.maps[mapName as MapName]
                    if (gMap.ignore) continue

                    for (const npc of gMap.npcs) {
                        if (npc.id == npcToLocate) {
                            // We found the NPC
                            return { map: mapName as MapName, x: npc.position[0], y: npc.position[1] }
                        }
                    }
                }
            }
        }

        // Is the item a token?
        if (gItem.type == "token") {
            // Find the NPC that accepts these tokens
            let npcToLocate: NPCName
            for (const npcName in this.G.npcs) {
                const gNPC = this.G.npcs[npcName as NPCName]
                if (gNPC.ignore) continue

                if (gNPC.token == itemName) {
                    npcToLocate = gNPC.id
                    break
                }
            }
            // Look for the NPC in the maps
            if (npcToLocate) {
                for (const mapName in this.G.maps) {
                    const gMap = this.G.maps[mapName as MapName]
                    if (gMap.ignore) continue

                    for (const npc of gMap.npcs) {
                        if (npc.id == npcToLocate) {
                            // We found the NPC
                            return { map: mapName as MapName, x: npc.position[0], y: npc.position[1] }
                        }
                    }
                }
            }
        }

        // Is the item exchangable?
        if (gItem.e) {
            for (const mapName in this.G.maps) {
                const gMap = this.G.maps[mapName as MapName]
                if (gMap.ignore) continue

                for (const npc of gMap.npcs) {
                    if (npc.id == "exchange") {
                        // We found the NPC
                        return { map: mapName as MapName, x: npc.position[0], y: npc.position[1] }
                    }
                }
            }
        }

        throw Error(`${itemName} is not exchangable`)
    }
}
