import { AchievementProgressData, CharacterData, ServerData, ActionData, ChestOpenedData, DeathData, DisappearData, ChestData, EntitiesData, EvalData, GameResponseData, HitData, NewMapData, PartyData, StartData, WelcomeData, LoadedData, EntityData, PlayerData, AuthData, DisappearingTextData, GameLogData, UIData, UpgradeData, QData } from "./definitions/adventureland-server"
import { GData, SkillName, BankInfo, ConditionName, MapName, ItemInfo, ItemName, SlotType, MonsterName, SInfo, IPosition, NPCType, BankPackType, TradeSlotType, StatType } from "./definitions/adventureland"
import { Tools } from "./Tools"
import { Pathfinder } from "./pathfinder"
import { LinkData, NodeData } from "./definitions/pathfinder"
import { MAX_PINGS, NPC_INTERACTION_DISTANCE, TIMEOUT } from "./Constants"
import { Observer } from "./Observer"
import { Mage } from "./Mage"


export class Player extends Observer {
    protected userID: string;
    protected userAuth: string;
    protected characterID: string;
    protected lastPositionUpdate: number;
    protected promises: Promise<boolean>[] = [];
    protected pingNum = 1;
    protected pingMap = new Map<string, number>();
    protected timeouts = new Map<string, ReturnType<typeof setTimeout>>();

    public achievements = new Map<string, AchievementProgressData>();
    public bank: BankInfo = { gold: 0 };
    public character: CharacterData;
    public chests = new Map<string, ChestData>();
    public entities = new Map<string, EntityData>();
    public nextSkill = new Map<SkillName, Date>();
    public party: PartyData;
    public pings: number[] = [];
    public players = new Map<string, PlayerData>();
    public projectiles = new Map<string, ActionData & { date: Date; }>();
    public server: WelcomeData;
    public S: SInfo;

    constructor(userID: string, userAuth: string, characterID: string, g: GData, serverData: ServerData) {
        super(serverData, g)
        this.userID = userID
        this.userAuth = userAuth
        this.characterID = characterID

        this.socket.on("start", (data: StartData) => {
            // console.log("socket: start!")
            // console.log(data)
            this.parseCharacter(data)
            if (data.entities)
                this.parseEntities(data.entities)
            this.S = data.s_info
        })

        this.socket.on("achievement_progress", (data: AchievementProgressData) => {
            this.achievements.set(data.name, data)
            console.log(data)
        })

        this.socket.on("action", (data: ActionData) => {
            // TODO: do we need this 'date'?
            this.projectiles.set(data.pid, { ...data, date: new Date() })
        })

        // on("connect")
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
            this.players.delete(data.id)
        })

        this.socket.on("disconnect", () => {
            // console.log("We are disconnecting!?")
            // NOTE: We will try to automatically reconnect
            // this.disconnect()
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
            // console.log("socket: hit!")
            // console.log(data)
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

            if (this.character) {
                this.character.x = data.x
                this.character.y = data.y
                this.character.in = data.in
                this.character.map = data.name
                this.character.m = data.m
            }
        })

        // TODO: Confirm this works for leave_party(), too.
        this.socket.on("party_update", (data: PartyData) => {
            this.party = data
        })

        this.socket.on("ping_ack", (data: { id: string; }) => {
            if (this.pingMap.has(data.id)) {
                // Add the new ping
                const ping = Date.now() - this.pingMap.get(data.id)
                this.pings.push(ping)
                console.log(`Ping: ${ping}`)

                // Remove the oldest ping
                if (this.pings.length > MAX_PINGS)
                    this.pings.shift()

                // Remove the ping from the map
                this.pingMap.delete(data.id)
            }
        })

        this.socket.on("player", (data: CharacterData) => {
            this.parseCharacter(data)
        })

        this.socket.on("q_data", (data: QData) => {
            if (data.q.upgrade)
                this.character.q.upgrade = data.q.upgrade
            if (data.q.compound)
                this.character.q.compound = data.q.compound
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
            if (data.type == "compound" && this.character.q.compound)
                delete this.character.q.compound

            // else if (data.type == "exchange" && this.character.q.exchange) delete this.character.q.exchange
            else if (data.type == "upgrade" && this.character.q.upgrade)
                delete this.character.q.upgrade
        })

        this.socket.on("welcome", (data: WelcomeData) => {
            // console.log("socket: welcome!")
            this.server = data

            // This serves as a doublecheck.
            if (this.serverRegion !== data.region)
                console.error(`REGIONS DO NOT MATCH!? ${this.serverRegion} VS. ${data.region}`)
            if (this.serverIdentifier !== data.name)
                console.error(`IDENTIFIERS DO NOT MATCH!? ${this.serverIdentifier} VS. ${data.name}`)
            this.serverRegion = data.region
            this.serverIdentifier = data.name

            // Send a response that we're ready to go
            // console.log("socket: loaded...")
            this.socket.emit("loaded", {
                height: 1080,
                width: 1920,
                scale: 2,
                success: 1
            } as LoadedData)
        })
    }

    protected parseCharacter(data: CharacterData): void {
        // Create the character if we don't have one
        if (!this.character) {
            this.character = data
            delete this.character["base_gold"]
            delete this.character["entities"]
            delete this.character["hitchhikers"]
            delete this.character["info"]
            delete this.character["s_info"]
            delete this.character["user"]

            // Add going_to variables
            this.character.going_x = data.x
            this.character.going_y = data.y
            this.character.moving = false
            this.character.damage_type = this.G.classes[data.ctype].damage_type
        }

        // Update all the character information we can
        for (const datum in data) {
            if (datum == "hitchhikers") {
                // Game responses
                for (const [event, datum] of data.hitchhikers) {
                    if (event == "game_response") {
                        this.parseGameResponse(datum)
                    }
                }
            } else if (datum == "moving") {
                // We'll handle moving...
            } else if (datum == "tp") {
                // We just teleported, but we don't want to keep the data.
            } else if (datum == "user") {
                // Bank information
                this.bank = data.user
            } else {
                // Normal attribute
                this.character[datum] = data[datum]
            }
        }
    }

    protected async parseEntities(data: EntitiesData): Promise<void> {
        if (data.type == "all") {
            // Erase all of the entities
            this.entities.clear()
            this.players.clear()
        } else if (this.character) {
            // Update all positions
            this.updatePositions()
        }

        for (const monster of data.monsters) {
            if (!this.entities.has(monster.id)) {
                // Set soft properties
                if (monster.level === undefined)
                    monster.level = 1
                if (monster.max_hp === undefined)
                    monster.max_hp = this.G.monsters[monster.type]["hp"]
                if (monster.max_mp === undefined)
                    monster.max_mp = this.G.monsters[monster.type]["mp"]
                if (monster.map === undefined)
                    monster.map = data.map

                if (monster["1hp"] === undefined)
                    monster["1hp"] = this.G.monsters[monster.type]["1hp"]
                if (monster.apiercing === undefined)
                    monster.apiercing = this.G.monsters[monster.type].apiercing
                if (monster.attack === undefined)
                    monster.attack = this.G.monsters[monster.type].attack
                if (monster.cooperative === undefined)
                    monster.cooperative = this.G.monsters[monster.type].cooperative
                if (monster.damage_type === undefined)
                    monster.damage_type = this.G.monsters[monster.type].damage_type
                if (monster.evasion === undefined)
                    monster.evasion = this.G.monsters[monster.type].evasion
                if (monster.frequency === undefined)
                    monster.frequency = this.G.monsters[monster.type].frequency
                if (monster.hp === undefined)
                    monster.hp = this.G.monsters[monster.type].hp
                if (monster.immune === undefined)
                    monster.immune = this.G.monsters[monster.type].immune
                if (monster.mp === undefined)
                    monster.mp = this.G.monsters[monster.type].mp
                if (monster.range === undefined)
                    monster.range = this.G.monsters[monster.type].range
                if (monster.reflection === undefined)
                    monster.reflection = this.G.monsters[monster.type].reflection
                if (monster.speed === undefined)
                    monster.speed = this.G.monsters[monster.type].speed
                if (monster.xp === undefined)
                    monster.xp = this.G.monsters[monster.type].xp

                // Set everything else
                this.entities.set(monster.id, monster)
            } else {
                // Update everything
                const entity = this.entities.get(monster.id)
                for (const attr in monster)
                    entity[attr] = monster[attr]
            }
        }
        for (const player of data.players) {
            if (player.id == this.character?.id) {
                // Update everything for our own player if we see it
                for (const datum in player)
                    this.character[datum] = player[datum]
            } else {
                this.players.set(player.id, player)
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
                delete this.character.s[data.name]
            } else if (data.response == "skill_success") {
                const cooldown = this.G.skills[data.name].cooldown
                if (cooldown) {
                    this.setNextSkill(data.name, new Date(Date.now() + cooldown))
                }
            } else {
                // DEBUG
                console.info("Game Response Data -----")
                console.info(data)
            }
        } else if (typeof (data) == "string") {
            // DEBUG
            console.info(`Game Response: ${data}`)
        }
    }

    protected setNextSkill(skill: SkillName, next: Date): void {
        this.nextSkill.set(skill, next)
    }

    protected updatePositions(): void {
        if (this.lastPositionUpdate) {
            const msSinceLastUpdate = Date.now() - this.lastPositionUpdate

            // Update entities
            for (const entity of this.entities.values()) {
                if (!entity.moving)
                    continue
                const distanceTravelled = entity.speed * msSinceLastUpdate / 1000
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
            if (this.character.moving) {
                const distanceTravelled = this.character.speed * msSinceLastUpdate / 1000
                const angle = Math.atan2(this.character.going_y - this.character.y, this.character.going_x - this.character.x)
                const distanceToGoal = Tools.distance({ x: this.character.x, y: this.character.y }, { x: this.character.going_x, y: this.character.going_y })
                if (distanceTravelled > distanceToGoal) {
                    this.character.moving = false
                    this.character.x = this.character.going_x
                    this.character.y = this.character.going_y
                } else {
                    this.character.x = this.character.x + Math.cos(angle) * distanceTravelled
                    this.character.y = this.character.y + Math.sin(angle) * distanceTravelled
                }
            }

            // Update conditions
            for (const condition in this.character.s) {
                const newCooldown = this.character.s[condition as ConditionName].ms - msSinceLastUpdate
                if (newCooldown <= 0)
                    delete this.character.s[condition as ConditionName]
                else
                    this.character.s[condition as ConditionName].ms = newCooldown
            }
        }

        // Erase all players and entities that are more than 600 units away
        let toDelete: string[] = []
        for (const [id, entity] of this.entities) {
            if (Tools.distance(this.character, entity) < 600)
                continue
            toDelete.push(id)
        }
        for (const id of toDelete)
            this.entities.delete(id)
        toDelete = []
        for (const [id, player] of this.players) {
            if (Tools.distance(this.character, player) < 600)
                continue
            toDelete.push(id)
        }
        for (const id of toDelete)
            this.players.delete(id)

        this.lastPositionUpdate = Date.now()
    }

    public async connect(): Promise<unknown> {
        const connected = new Promise<unknown>((resolve, reject) => {
            const failCheck = (data: string | { message: string; }) => {
                if (typeof data == "string") {
                    reject(`Failed to connect: ${data}`)
                } else {
                    reject(`Failed to connect: ${data.message}`)
                }
            }

            const startCheck = () => {
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
            // console.log("socket: authenticating...")
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
        for (const timer of this.timeouts.values())
            clearTimeout(timer)
    }

    /**
     * This function is a hack to get the server to respond with a player data update. It will respond with two...
     */
    public async requestPlayerData(): Promise<CharacterData> {
        return new Promise((resolve, reject) => {
            const checkPlayerEvent = (data: CharacterData) => {
                if (data.s.typing) {
                    this.socket.removeListener("player", checkPlayerEvent)
                    resolve(data)
                }
            }

            setTimeout(() => {
                this.socket.removeListener("player", checkPlayerEvent)
                reject(`requestPlayerData timeout (${TIMEOUT}ms)`)
            }, TIMEOUT)
            this.socket.on("player", checkPlayerEvent)

            this.socket.emit("property", { typing: true })
        })
    }

    // TODO: Convert to async, and return a promise<number> with the ping ms time
    public sendPing(): string {
        // Get the next pingID
        const pingID = this.pingNum.toString()
        this.pingNum++

        // Set the pingID in the map
        this.pingMap.set(pingID, Date.now())

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
                reject(`acceptMagiport timeout (${TIMEOUT}ms)`)
            }, TIMEOUT)
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
                if (data.list.includes(this.character.id)
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
                    if (this.party.list.includes(this.character.id)
                        && this.party.list.includes(id)) {
                        // NOTE: We resolve the promise even if we have already accepted it if we're in the correct party.
                        this.socket.removeListener("party_update", partyCheck)
                        this.socket.removeListener("game_log", unableCheck)
                        resolve(this.party)
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
                reject(`acceptPartyInvite timeout (${TIMEOUT}ms)`)
            }, TIMEOUT)
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
                if (data.list.includes(this.character.id)
                    && data.list.includes(id)) {
                    this.socket.removeListener("party_update", partyCheck)
                    resolve(data)
                }
            }

            setTimeout(() => {
                this.socket.removeListener("party_update", partyCheck)
                reject(`acceptPartyRequest timeout (${TIMEOUT}ms)`)
            }, TIMEOUT)
            this.socket.on("party_update", partyCheck)
        })

        this.socket.emit("party", { event: "raccept", name: id })
        return acceptedRequest
    }

    // TODO: Add 'notthere' (e.g. calling attack("12345") returns ["notthere", {place: "attack"}])
    // TODO: Check if cooldown is sent after attack
    public attack(id: string): Promise<string> {
        if (this.character.mp_cost > this.character.mp)
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
                if (data.attacker == this.character.id && data.target == id && data.type == "attack") {
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
                reject(`attack timeout (${TIMEOUT}ms)`)
            }, TIMEOUT)
            this.socket.on("action", attackCheck)
            this.socket.on("game_response", failCheck)
            this.socket.on("death", deathCheck)
        })

        this.socket.emit("attack", { id: id })
        return attackStarted
    }

    // TODO: Return buy info
    public buy(itemName: ItemName, quantity = 1): Promise<number> {
        if (this.character.gold < this.G.items[itemName].g)
            return Promise.reject(`Insufficient gold. We have ${this.character.gold}, but the item costs ${this.G.items[itemName].g}`)

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
                reject(`buy timeout (${TIMEOUT}ms)`)
            }, TIMEOUT)
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
    public buyFromMerchant(id: string, slot: TradeSlotType, rid: string, quantity = 1): Promise<unknown> {
        if (quantity <= 0)
            return Promise.reject(`We can not buy a quantity of ${quantity}.`)
        const merchant = this.players.get(id)
        if (!merchant)
            return Promise.reject(`We can not see ${id} nearby.`)
        if (Tools.distance(this.character, merchant) > NPC_INTERACTION_DISTANCE)
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

        if (this.character.gold < merchant.slots[slot].price * quantity) {
            if (this.character.gold < merchant.slots[slot].price)
                return Promise.reject(`We don't have enough gold. It costs ${merchant.slots[slot].price}, but we only have ${this.character.gold}`)

            // Determine how many we *can* buy.
            const buyableQuantity = Math.floor(this.character.gold / merchant.slots[slot].price)
            console.warn(`We don't have enough gold to buy ${quantity}, we can only buy ${buyableQuantity}, so we're doing that.`)
            quantity = buyableQuantity
        }

        this.socket.emit("trade_buy", { slot: slot, id: id, rid: rid, q: quantity.toString() })
    }

    // TODO: Add promises
    // TODO: Check gold
    public buyFromPonty(item: ItemInfo): unknown {
        if (!item.rid)
            return Promise.reject("This item does not have an 'rid'.")
        const price = this.G.items[item.name].g * (item.q ? item.q : 1)
        if (price > this.character.gold)
            return Promise.reject("We don't have enough gold to buy this.")
        this.socket.emit("sbuy", { rid: item.rid })
    }

    /**
     * Returns the *minimum* gold required to obtain the given item.
     * @param item 
     */
    // TODO: Add option to add 
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
        let level = 0
        for (const grade of gInfo.grades) {
            if (item.level < grade) break
            level++
        }
        return level
    }

    public canBuy(item: ItemName): boolean {
        if (this.isFull())
            return false // We are full

        const gInfo = this.G.items[item]
        if (this.character.gold < gInfo.g)
            return false // We can't afford it

        const computerAvailable = this.locateItem("computer") !== undefined

        let buyable = gInfo.buy
        let close = false
        if (buyable === undefined) {
            // Double check if we can buy from an NPC
            for (const map in this.G.maps) {
                if (buyable !== undefined)
                    break
                if (!computerAvailable && map !== this.character.map)
                    continue // We aren't close, and we don't have a computer, so don't check this map
                if (this.G.maps[map as MapName].ignore)
                    continue
                for (const npc of this.G.maps[map as MapName].npcs) {
                    if (buyable !== undefined)
                        break
                    if (this.G.npcs[npc.id].items === undefined)
                        continue
                    for (const i of this.G.npcs[npc.id].items) {
                        if (i == item) {
                            buyable = true
                            if (Tools.distance(this.character, { map: map as MapName, x: npc.position[0], y: npc.position[1] }) < NPC_INTERACTION_DISTANCE)
                                close = true
                            break
                        }
                    }
                }
            }
        }
        if (!buyable)
            return false

        if (computerAvailable || close)
            return true

        return false
    }

    /**
     * Returns true if it's a guaranteed kill in one hit
     */
    public canKillInOneShot(entity: EntityData): boolean {
        // Check if it can heal
        const gInfo = this.G.monsters[entity.type]
        if (gInfo.abilities && gInfo.abilities.self_healing) return false

        if (this.character.damage_type == "magical" && entity.reflection !== undefined) return false
        if (this.character.damage_type == "physical" && entity.evasion !== undefined) return false

        if (entity["1hp"]) {
            if (entity.hp == 1) return true
            else return false
        }

        return Tools.calculateDamageRange(this.character, entity)[0] > entity.hp
    }

    public canUse(skill: SkillName): boolean {
        if (this.character.rip)
            return false // We are dead
        if (this.character.s.stoned)
            return false // We are 'stoned' (oneeye condition)
        if (this.getCooldown(skill) > 0)
            return false // Skill is on cooldown
        const gInfoSkill = this.G.skills[skill]
        if (gInfoSkill.mp !== undefined && this.character.mp < gInfoSkill.mp)
            return false // Not enough MP
        if (skill == "attack" && this.character.mp < this.character.mp_cost)
            return false // Not enough MP (attack)
        if (gInfoSkill.level !== undefined && this.character.level < gInfoSkill.level)
            return false // Not a high enough level
        if (gInfoSkill.wtype) {
            // The skill requires a certain weapon type
            if (!this.character.slots.mainhand)
                return false // We don't have any weapon equipped
            const gInfoWeapon = this.G.items[this.character.slots.mainhand.name]
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
        if (gInfoSkill.slot) {
            // The skill requires a certain item
            for (const [slot, item] of gInfoSkill.slot) {
                if (!this.character.slots[slot])
                    return false // We don't have anything equipped in one of the slots required
                if (this.character.slots[slot].name !== item)
                    return false // We don't have the right item equipped in the slot
            }
        }
        if (gInfoSkill.class) {
            // The skill is only available to certain classes
            let compatibleClass = false
            for (const c of gInfoSkill.class) {
                if (c == this.character.ctype) {
                    compatibleClass = true // We are compatible!
                    break
                }
            }
            if (!compatibleClass)
                return false
        }
        if (gInfoSkill.requirements) {
            // This skill has stat requirements
            for (const s in gInfoSkill.requirements) {
                const stat = s as StatType
                if (this.character[stat] < gInfoSkill.requirements[stat])
                    return false
            }
        }

        // Special circumstance -- we can't use blink if we're being dampened
        if (this.character.s.dampened) {
            if (skill == "blink")
                return false
        }

        // Special circumstance -- merchants can't attack unless they have a dartgun
        if (this.character.ctype == "merchant" && skill == "attack") {
            if (!this.character.slots.mainhand)
                return false // No weapon
            if (this.character.slots.mainhand.name !== "dartgun")
                return false // Wrong weapon
            if (this.character.gold < 100)
                return false // Not enough gold to shoot
        }

        return true
    }

    // TODO: Return better compound info
    // TODO: Add offering
    public compound(item1Pos: number, item2Pos: number, item3Pos: number, cscrollPos: number, offeringPos?: number): Promise<boolean> {
        const item1Info = this.character.items[item1Pos]
        const item2Info = this.character.items[item2Pos]
        const item3Info = this.character.items[item3Pos]
        const cscrollInfo = this.character.items[cscrollPos]
        if (!item1Info)
            return Promise.reject(`There is no item in inventory slot ${item1Pos} (item1).`)
        if (!item2Info)
            return Promise.reject(`There is no item in inventory slot ${item2Pos} (item2).`)
        if (!item3Info)
            return Promise.reject(`There is no item in inventory slot ${item3Pos} (item3).`)
        if (!cscrollInfo)
            return Promise.reject(`There is no item in inventory slot ${cscrollPos} (cscroll).`)
        if (item1Info.name != item2Info.name || item1Info.name != item3Info.name)
            return Promise.reject("You can only combine 3 of the same items.")
        if (item1Info.level != item2Info.level || item1Info.level != item3Info.level)
            return Promise.reject("You can only combine 3 items of the same level.")

        const compoundComplete = new Promise<boolean>((resolve, reject) => {
            const completeCheck = (data: UpgradeData) => {
                if (data.type == "compound") {
                    this.socket.removeListener("upgrade", completeCheck)
                    this.socket.removeListener("game_response", gameResponseCheck)
                    this.socket.removeListener("player", playerCheck)
                    resolve(data.success == 1)
                }
            }

            const playerCheck = (data: CharacterData) => {
                if (!data.hitchhikers)
                    return
                for (const [event, datum] of data.hitchhikers) {
                    if (event == "game_response" && datum.response == "compound_fail") {
                        this.socket.removeListener("upgrade", completeCheck)
                        this.socket.removeListener("game_response", gameResponseCheck)
                        this.socket.removeListener("player", playerCheck)
                        resolve(false)
                        return
                    } else if (event == "game_response" && datum.response == "compound_success") {
                        this.socket.removeListener("upgrade", completeCheck)
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
                        this.socket.removeListener("upgrade", completeCheck)
                        this.socket.removeListener("game_response", gameResponseCheck)
                        this.socket.removeListener("player", playerCheck)
                        reject("You can't compound items in the bank.")
                    }
                } else if (typeof data == "string") {
                    if (data == "compound_no_item") {
                        this.socket.removeListener("upgrade", completeCheck)
                        this.socket.removeListener("game_response", gameResponseCheck)
                        this.socket.removeListener("player", playerCheck)
                        reject()
                    }
                }
            }

            setTimeout(() => {
                this.socket.removeListener("upgrade", completeCheck)
                this.socket.removeListener("game_response", gameResponseCheck)
                this.socket.removeListener("player", playerCheck)
                reject("compound timeout (60000ms)")
            }, 60000)
            this.socket.on("upgrade", completeCheck)
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
    // TODO: Unverified. Might not work.
    public craft(item: ItemName): Promise<unknown> {
        const gInfo = this.G.craft[item]
        if (!gInfo)
            return Promise.reject(`Can not find a recipe for ${item}.`)
        if (gInfo.cost > this.character.gold)
            return Promise.reject(`We don't have enough gold to craft ${item}.`)

        const itemPositions: number[] = []
        for (let i = 0; i < gInfo.items.length; i++) {
            const lookQ = gInfo.items[i][0]
            const lookName = gInfo.items[i][1]
            const lookLevel = gInfo.items[i][2]

            const searchArgs = {
                quantityGreaterThan: lookQ > 1 ? lookQ : undefined,
                level: lookLevel
            }

            const itemPos = this.locateItem(lookName, this.character.items, searchArgs)
            if (itemPos == undefined)
                return Promise.reject(`We don't have ${lookQ} ${lookName} to craft ${item}.`)

            itemPositions.push(itemPos)
        }

        this.socket.emit("craft", { items: itemPositions })
        return
    }

    // TODO: Add promises
    public depositGold(gold: number): unknown {
        // TODO: Check if you can be in the basement and deposit gold
        if (this.character.map !== "bank")
            return Promise.reject("We need to be in 'bank' to deposit gold.")
        if (gold <= 0)
            return Promise.reject("We can't deposit 0 or less gold")

        if (gold > this.character.gold) {
            gold = this.character.gold
            console.warn(`We are only going to deposit ${gold} gold.`)
        }
        this.socket.emit("bank", { operation: "deposit", amount: gold })
    }

    public depositItem(inventoryPos: number, bankPack?: Exclude<BankPackType, "gold">, bankSlot = -1): unknown {
        if (this.character.map !== "bank" && this.character.map !== "bank_b" && this.character.map !== "bank_u")
            return Promise.reject(`We're not in the bank (we're in '${this.character.map}')`)

        const item = this.character.items[inventoryPos]
        if (!item)
            return Promise.reject(`There is no item in inventory slot ${inventoryPos}.`)

        if (bankPack) {
            // Check if we can access the supplied bankPack
            const bankPackNum = Number.parseInt(bankPack.substr(5, 2))
            if ((this.character.map == "bank" && bankPackNum < 0 && bankPackNum > 7)
                || (this.character.map == "bank_b" && bankPackNum < 8 && bankPackNum > 23)
                || (this.character.map == "bank_u" && bankPackNum < 24 && bankPackNum > 47)) {
                return Promise.reject(`We can not access ${bankPack} on ${this.character.map}.`)
            }
        } else {
            // Look for a good bankPack
            bankSlot = undefined
            let packFrom: number
            let packTo: number
            if (this.character.map == "bank") {
                packFrom = 0
                packTo = 7
            } else if (this.character.map == "bank_b") {
                packFrom = 8
                packTo = 23
            } else if (this.character.map == "bank_u") {
                packFrom = 24
                packTo = 47
            }

            const numStackable = this.G.items[item.name].s

            let emptyPack: Exclude<BankPackType, "gold">
            let emptySlot: number
            for (let packNum = packFrom; packNum <= packTo; packNum++) {
                const packName = `items${packNum}` as Exclude<BankPackType, "gold">
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
        const swapped = new Promise((resolve, reject) => {
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
                reject(`depositItem timeout (${TIMEOUT}ms)`)
            }, TIMEOUT)
            this.socket.on("player", checkDeposit)
        })

        this.socket.emit("bank", { operation: "swap", pack: bankPack, str: bankSlot, inv: inventoryPos })
        return swapped
    }

    public equip(inventoryPos: number, equipSlot?: SlotType): Promise<unknown> {
        if (!this.character.items[inventoryPos])
            return Promise.reject(`No item in inventory slot ${inventoryPos}.`)

        const iInfo = this.character.items[inventoryPos]
        // const gInfo = this.game.G.items[iInfo.name]
        // const beforeSlots = this.game.character.slots
        const equipFinished = new Promise((resolve, reject) => {
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
                if (data.id == this.character.id && data.message == "CAN'T EQUIP") {
                    this.socket.removeListener("player", equipCheck)
                    this.socket.removeListener("disappearing_text", cantEquipCheck)
                    reject(`Can't equip '${inventoryPos}' (${iInfo.name})`)
                }
            }
            setTimeout(() => {
                this.socket.removeListener("player", equipCheck)
                this.socket.removeListener("disappearing_text", cantEquipCheck)
                reject(`equip timeout (${TIMEOUT}ms)`)
            }, TIMEOUT)
            this.socket.on("player", equipCheck)
            this.socket.on("disappearing_text", cantEquipCheck)
        })

        this.socket.emit("equip", { num: inventoryPos, slot: equipSlot })
        return equipFinished
    }

    public exchange(inventoryPos: number): Promise<unknown> {
        if (!this.character.items[inventoryPos])
            return Promise.reject(`No item in inventory slot ${inventoryPos}.`)

        const exchangeFinished = new Promise((resolve, reject) => {
            const completeCheck = (data: UpgradeData) => {
                if (data.type == "exchange") {
                    this.socket.removeListener("upgrade", completeCheck)
                    this.socket.removeListener("game_response", bankCheck)
                    resolve(data.success == 1)
                }
            }
            const bankCheck = (data: GameResponseData) => {
                if (typeof data == "object" && data.response == "bank_restrictions" && data.place == "upgrade") {
                    this.socket.removeListener("upgrade", completeCheck)
                    this.socket.removeListener("game_response", bankCheck)
                    reject("You can't exchange items in the bank.")
                } else if (typeof data == "string") {
                    if (data == "exchange_notenough") {
                        this.socket.removeListener("upgrade", completeCheck)
                        this.socket.removeListener("game_response", bankCheck)
                        reject("We don't have enough items to exchange.")
                    } else if (data == "exchange_existing") {
                        this.socket.removeListener("upgrade", completeCheck)
                        this.socket.removeListener("game_response", bankCheck)
                        reject("We are already exchanging something.")
                    }
                }
            }
            setTimeout(() => {
                this.socket.removeListener("upgrade", completeCheck)
                this.socket.removeListener("game_response", bankCheck)
                reject(`exchange timeout (${TIMEOUT}ms)`)
            }, TIMEOUT)
            this.socket.on("game_response", bankCheck)
            this.socket.on("upgrade", completeCheck)
        })

        this.socket.emit("exchange", { item_num: inventoryPos, q: this.character.items[inventoryPos]?.q })
        return exchangeFinished
    }

    // TODO: Add promises and checks
    public finishMonsterHuntQuest() {
        this.socket.emit("monsterhunt")
    }

    public getMonsterHuntQuest(): Promise<unknown> {
        if (this.character.ctype == "merchant")
            return Promise.reject("Merchants can't do Monster Hunts.")
        let close = false
        // Look for a monsterhunter on the current map
        for (const npc of this.G.maps[this.character.map].npcs) {
            if (npc.id !== "monsterhunter")
                continue
            if (Tools.distance(this.character, { x: npc.position[0], y: npc.position[1] }) <= NPC_INTERACTION_DISTANCE) {
                close = true
                break
            }
        }
        if (!close)
            return Promise.reject("We are too far away from the Monster Hunter NPC.")
        if (this.character.s.monsterhunt && this.character.s.monsterhunt.c > 0)
            return Promise.reject(`We can't get a new monsterhunt. We have ${this.character.s.monsterhunt.ms}ms left to kill ${this.character.s.monsterhunt.c} ${this.character.s.monsterhunt.id}s.`)

        if (this.character.s.monsterhunt && this.character.s.monsterhunt.c == 0) {
            console.warn("We are going to complete the current monster quest first")
            this.finishMonsterHuntQuest()
        }

        const questGot = new Promise((resolve, reject) => {
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
                reject(`getMonsterHuntQuest timeout (${TIMEOUT}ms)`)
            }, TIMEOUT)
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
                reject(`getPontyItems timeout (${TIMEOUT}ms)`)
            }, TIMEOUT)
            this.socket.on("secondhands", secondhandsItems)
            this.socket.on("game_response", distanceCheck)
        })

        this.socket.emit("secondhands")
        return pontyItems
    }

    /**
     * Returns true if our inventory is full, false otherwise
     */
    public isFull(): boolean {
        return this.character.esize >= this.character.isize
    }

    /**
     * For use on 'cyberland' and 'jail' to leave the map. You will be transported to the spawn on "main".
     */
    public leaveMap(): Promise<unknown> {
        const leaveComplete = new Promise((resolve, reject) => {
            this.socket.once("new_map", (data: NewMapData) => {
                if (data.name == "main")
                    resolve()
                else
                    reject(`We are now in ${data.name}, but we should be in main`)
            })

            setTimeout(() => {
                reject(`leaveMap timeout (${TIMEOUT}ms)`)
            }, TIMEOUT)
        })

        this.socket.emit("leave")
        return leaveComplete
    }

    // TODO: Add checks and promises
    public leaveParty() {
        this.socket.emit("party", { event: "leave" })
    }

    public async move(x: number, y: number, safetyCheck = true): Promise<NodeData> {
        // Check if we're already there
        if (this.character.x == x && this.character.y == y)
            return Promise.resolve({ map: this.character.map, y: this.character.y, x: this.character.x })

        let to: IPosition = { map: this.character.map, x: x, y: y }
        if (safetyCheck) {
            to = Pathfinder.getSafeWalkTo(
                { map: this.character.map, x: this.character.x, y: this.character.y },
                { map: this.character.map, x, y })
            if (to.x !== x || to.y !== y) {
                console.warn(`move: We can't move to {x: ${x}, y: ${y}} safely. We will move to {x: ${to.x}, y: ${to.y}}.`)
            }
        }
        const moveFinished = new Promise<NodeData>((resolve, reject) => {
            let timeToFinishMove = 1 + Tools.distance(this.character, { x: to.x, y: to.y }) / this.character.speed

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
                    timeToFinishMove = Tools.distance(this.character, { x: data.x, y: data.y }) / data.speed
                    clearTimeout(timeout)
                    timeout = setTimeout(checkPosition, timeToFinishMove)
                }
            }

            const checkPosition = () => {
                // Force an update of the character position
                this.updatePositions()
                timeToFinishMove = 1 + Tools.distance(this.character, { x: to.x, y: to.y }) / this.character.speed

                if (this.character.x == to.x && this.character.y == to.y) {
                    // We are here!
                    this.socket.removeListener("player", checkPlayer)
                    resolve(this.character)
                } else if (this.character.moving && this.character.going_x == to.x && this.character.going_y == to.y) {
                    // We are still moving in the right direction
                    timeout = setTimeout(checkPosition, timeToFinishMove)
                } else {
                    // We're not moving in the right direction
                    this.socket.removeListener("player", checkPlayer)
                    reject(`move to ${to.x}, ${to.y} failed (we're currently going to ${this.character.going_x}, ${this.character.going_y})`)
                }
            }
            let timeout = setTimeout(checkPosition, timeToFinishMove)

            this.socket.on("player", checkPlayer)
        })

        this.socket.emit("move", {
            x: this.character.x,
            y: this.character.y,
            going_x: to.x,
            going_y: to.y,
            m: this.character.m
        })
        this.updatePositions()
        this.character.going_x = to.x
        this.character.going_y = to.y
        this.character.moving = true
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
                reject(`openChest timeout (${TIMEOUT}ms)`)
            }, TIMEOUT)
            this.socket.on("chest_opened", openCheck)
        })
        this.socket.emit("open_chest", { id: id })
        return chestOpened
    }

    public regenHP(): Promise<unknown> {
        const regenReceived = new Promise((resolve, reject) => {
            const regenCheck = (data: EvalData) => {
                if (data.code && data.code.includes("pot_timeout")) {
                    this.socket.removeListener("eval", regenCheck)
                    resolve()
                }
            }
            setTimeout(() => {
                this.socket.removeListener("eval", regenCheck)
                reject(`regenHP timeout (${TIMEOUT}ms)`)
            }, TIMEOUT)
            this.socket.on("eval", regenCheck)
        })

        this.socket.emit("use", { item: "hp" })
        return regenReceived
    }

    public regenMP(): Promise<unknown> {
        // if (this.game.nextSkill.get("use_mp")?.getTime() > Date.now()) return Promise.reject("use_mp is on cooldown")
        const regenReceived = new Promise((resolve, reject) => {
            const regenCheck = (data: EvalData) => {
                if (data.code && data.code.includes("pot_timeout")) {
                    this.socket.removeListener("eval", regenCheck)
                    resolve()
                }
            }
            setTimeout(() => {
                this.socket.removeListener("eval", regenCheck)
                reject(`regenMP timeout (${TIMEOUT}ms)`)
            }, TIMEOUT)
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
                reject(`scare timeout (${TIMEOUT}ms)`)
            }, TIMEOUT)
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

    public async sendGold(to: string, amount: number): Promise<number> {
        if (this.character.gold == 0)
            return Promise.reject("We have no gold to send.")
        if (!this.players.has(to))
            return Promise.reject(`We can not see ${to} to send gold.`)

        const goldSent: Promise<number> = new Promise((resolve, reject) => {
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
                reject(`sendGold timeout (${TIMEOUT}ms)`)
            }, TIMEOUT)
            this.socket.on("game_response", sentCheck)
        })
        this.socket.emit("send", { name: to, gold: amount })
        return goldSent
    }

    public sendItem(to: string, inventoryPos: number, quantity = 1): Promise<unknown> {
        if (!this.players.has(to))
            return Promise.reject(`"${to}" is not nearby.`)
        if (!this.character.items[inventoryPos])
            return Promise.reject(`No item in inventory slot ${inventoryPos}.`)
        if (this.character.items[inventoryPos]?.q < quantity)
            return Promise.reject(`We only have a quantity of ${this.character.items[inventoryPos].q}, not ${quantity}.`)

        const item = this.character.items[inventoryPos]

        const itemSent = new Promise((resolve, reject) => {
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
                reject(`sendItem timeout (${TIMEOUT}ms)`)
            }, TIMEOUT)
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

    protected lastSmartMove: number = Date.now();
    /**
     * A function that moves to, and returns when we move to a given location
     * @param to Where to move to. If given a string, we will try to navigate to the proper location.
     */
    public async smartMove(to: MapName | MonsterName | NPCType | IPosition, options: { getWithin?: number; useBlink?: boolean; } = {
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
                    const locations = this.locateMonsters(mtype as MonsterName)
                    let closestDistance: number = Number.MAX_VALUE
                    for (const location of locations) {
                        const potentialPath = await Pathfinder.getPath(this.character, location)
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
                        const locations = this.locateNPCs(npc.id)
                        let closestDistance: number = Number.MAX_VALUE
                        for (const location of locations) {
                            const potentialPath = await Pathfinder.getPath(this.character, location)
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
                fixedTo = { map: this.character.map, x: to.x, y: to.y }
        } else {
            console.log(to)
            return Promise.reject("'to' is unsuitable for smartMove. We need a 'map', an 'x', and a 'y'.")
        }

        // Check if we're already close enough
        if (options && options.getWithin !== undefined && Tools.distance(this.character, fixedTo) <= options.getWithin)
            return Promise.resolve(this.character)

        // If we don't have the path yet, get it
        if (!path)
            path = await Pathfinder.getPath(this.character, fixedTo)

        let lastMove = -1
        for (let i = 0; i < path.length; i++) {
            let currentMove = path[i]

            if (started < this.lastSmartMove) {
                if (typeof to == "string")
                    return Promise.reject(`smartMove to ${to} cancelled (new smartMove started)`)
                else
                    return Promise.reject(`smartMove to ${to.map}:${to.x},${to.y} cancelled (new smartMove started)`)
            }

            if (Tools.distance(this.character, fixedTo) < options.getWithin) {
                break // We're already close enough!
            }

            // Check if we can walk to a spot close to the goal if that's OK
            if (currentMove.type == "move" && this.character.map == fixedTo.map && options.getWithin > 0) {
                const angle = Math.atan2(this.character.y - fixedTo.y, this.character.x - fixedTo.x)
                const potentialMove: LinkData = {
                    type: "move",
                    map: this.character.map,
                    x: fixedTo.x + Math.cos(angle) * options.getWithin,
                    y: fixedTo.y + Math.sin(angle) * options.getWithin
                }
                if (Pathfinder.canWalk(this.character, potentialMove)) {
                    // console.log("walk close success!")
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

                    if (potentialMove.type == "move" && Pathfinder.canWalk(this.character, potentialMove)) {
                        console.log("skip check success!")
                        i = j
                        currentMove = potentialMove
                    }
                }
            }

            // Blink skip check
            if (options.useBlink && this.canUse("blink")) {
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
            //         time += 2 * Tools.distance(lastMove, nextMove) / this.character.speed
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
                    if (currentMove.map !== this.character.map) {
                        return Promise.reject(`We are supposed to be in ${currentMove.map}, but we are in ${this.character.map}`)
                    }
                    await this.move(currentMove.x, currentMove.y, false)
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

        return { map: this.character.map, x: this.character.x, y: this.character.y }
    }

    public async stopSmartMove(): Promise<NodeData> {
        this.lastSmartMove = Date.now()
        return this.move(this.character.x, this.character.y)
    }

    // TODO: Add promises
    public stopWarpToTown(): void {
        this.socket.emit("stop", { action: "town" })
    }

    public transport(map: MapName, spawn: number): Promise<unknown> {
        const transportComplete = new Promise((resolve, reject) => {
            this.socket.once("new_map", (data: NewMapData) => {
                if (data.name == map)
                    resolve()
                else
                    reject(`We are now in ${data.name}, but we should be in ${map}`)
            })

            setTimeout(() => {
                reject(`transport timeout (${TIMEOUT}ms)`)
            }, TIMEOUT)
        })

        this.socket.emit("transport", { to: map, s: spawn })
        return transportComplete
    }

    public unequip(slot: SlotType | TradeSlotType): Promise<unknown> {
        if (this.character.slots[slot] === null)
            return Promise.reject(`Slot ${slot} is empty; nothing to unequip.`)
        if (this.character.slots[slot] === undefined)
            return Promise.reject(`Slot ${slot} does not exist.`)

        const unequipped = new Promise((resolve, reject) => {
            const unequipCheck = (data: CharacterData) => {
                if (data.slots[slot] === null) {
                    this.socket.removeListener("player", unequipCheck)
                    resolve()
                }
            }
            setTimeout(() => {
                this.socket.removeListener("player", unequipCheck)
                reject(`unequip timeout (${TIMEOUT}ms)`)
            }, TIMEOUT)
        })

        this.socket.emit("unequip", { slot: slot })
        return unequipped
    }

    // TODO: Add offering support
    public upgrade(itemPos: number, scrollPos: number): Promise<boolean> {
        if (this.character.map.startsWith("bank"))
            return Promise.reject("We can't upgrade things in the bank.")

        const itemInfo = this.character.items[itemPos]
        const scrollInfo = this.character.items[scrollPos]
        if (!itemInfo)
            return Promise.reject(`There is no item in inventory slot ${itemPos}.`)
        if (this.G.items[itemInfo.name].upgrade == undefined)
            return Promise.reject("This item is not upgradable.")
        if (!scrollInfo)
            return Promise.reject(`There is no scroll in inventory slot ${scrollPos}.`)

        const upgradeComplete = new Promise<boolean>((resolve, reject) => {
            const completeCheck = (data: UpgradeData) => {
                if (data.type == "upgrade") {
                    this.socket.removeListener("upgrade", completeCheck)
                    this.socket.removeListener("game_response", gameResponseCheck)
                    this.socket.removeListener("player", playerCheck)
                    resolve(data.success == 1)
                }
            }

            const playerCheck = (data: CharacterData) => {
                if (!data.hitchhikers)
                    return
                for (const [event, datum] of data.hitchhikers) {
                    if (event == "game_response" && datum.response == "upgrade_fail" && datum.num == itemPos) {
                        this.socket.removeListener("upgrade", completeCheck)
                        this.socket.removeListener("game_response", gameResponseCheck)
                        this.socket.removeListener("player", playerCheck)
                        resolve(false)
                        return
                    } else if (event == "game_response" && datum.response == "upgrade_success" && datum.num == itemPos) {
                        this.socket.removeListener("upgrade", completeCheck)
                        this.socket.removeListener("game_response", gameResponseCheck)
                        this.socket.removeListener("player", playerCheck)
                        resolve(true)
                        return
                    }
                }
            }

            const gameResponseCheck = (data: GameResponseData) => {
                if (typeof data == "object" && data.response == "bank_restrictions" && data.place == "upgrade") {
                    this.socket.removeListener("upgrade", completeCheck)
                    this.socket.removeListener("game_response", gameResponseCheck)
                    this.socket.removeListener("player", playerCheck)
                    reject("You can't upgrade items in the bank.")
                } else if (typeof data == "string") {
                    if (data == "bank_restrictions") {
                        this.socket.removeListener("upgrade", completeCheck)
                        this.socket.removeListener("game_response", gameResponseCheck)
                        this.socket.removeListener("player", playerCheck)
                        reject("We can't upgrade things in the bank.")
                    } else if (data == "upgrade_in_progress") {
                        this.socket.removeListener("upgrade", completeCheck)
                        this.socket.removeListener("game_response", gameResponseCheck)
                        this.socket.removeListener("player", playerCheck)
                        reject("We are already upgrading something.")
                    } else if (data == "upgrade_incompatible_scroll") {
                        this.socket.removeListener("upgrade", completeCheck)
                        this.socket.removeListener("game_response", gameResponseCheck)
                        this.socket.removeListener("player", playerCheck)
                        reject(`The scroll we're trying to use (${scrollInfo.name}) isn't a high enough grade to upgrade this item.`)
                    } else if (data == "upgrade_success") {
                        this.socket.removeListener("upgrade", completeCheck)
                        this.socket.removeListener("game_response", gameResponseCheck)
                        this.socket.removeListener("player", playerCheck)
                        resolve(true)
                    } else if (data == "upgrade_fail") {
                        this.socket.removeListener("upgrade", completeCheck)
                        this.socket.removeListener("game_response", gameResponseCheck)
                        this.socket.removeListener("player", playerCheck)
                        resolve(false)
                    }
                }
            }
            setTimeout(() => {
                this.socket.removeListener("upgrade", completeCheck)
                this.socket.removeListener("game_response", gameResponseCheck)
                this.socket.removeListener("player", playerCheck)
                reject("upgrade timeout (60000ms)")
            }, 60000)
            this.socket.on("upgrade", completeCheck)
            this.socket.on("game_response", gameResponseCheck)
            this.socket.on("player", playerCheck)
        })

        this.socket.emit("upgrade", { item_num: itemPos, scroll_num: scrollPos, clevel: this.character.items[itemPos].level })
        return upgradeComplete
    }

    // TODO: Check if it's an HP Pot
    public useHPPot(itemPos: number): Promise<unknown> {
        if (!this.character.items[itemPos])
            return Promise.reject(`There is no item in inventory slot ${itemPos}.`)

        const healReceived = new Promise((resolve, reject) => {
            const healCheck = (data: EvalData) => {
                if (data.code && data.code.includes("pot_timeout")) {
                    this.socket.removeListener("eval", healCheck)
                    resolve()
                }
            }
            setTimeout(() => {
                this.socket.removeListener("eval", healCheck)
                reject(`useHPPot timeout (${TIMEOUT}ms)`)
            }, TIMEOUT)
            this.socket.on("eval", healCheck)
        })

        this.socket.emit("equip", { num: itemPos })
        return healReceived
    }

    // TODO: Check if it's an MP Pot
    public useMPPot(itemPos: number): Promise<unknown> {
        if (!this.character.items[itemPos])
            return Promise.reject(`There is no item in inventory slot ${itemPos}.`)

        const healReceived = new Promise((resolve, reject) => {
            const healCheck = (data: EvalData) => {
                if (data.code && data.code.includes("pot_timeout")) {
                    this.socket.removeListener("eval", healCheck)
                    resolve()
                }
            }
            setTimeout(() => {
                this.socket.removeListener("eval", healCheck)
                reject(`useMPPot timeout (${TIMEOUT}ms)`)
            }, TIMEOUT)
            this.socket.on("eval", healCheck)
        })

        this.socket.emit("equip", { num: itemPos })
        return healReceived
    }

    public warpToJail(): Promise<NodeData> {
        return this.move(Number.MAX_VALUE, Number.MAX_VALUE, false)
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
        if (this.character.map !== "bank")
            return Promise.reject("We need to be in 'bank' to withdraw gold.")
        if (gold <= 0)
            return Promise.reject("We can't withdraw 0 or less gold.")

        if (gold > this.bank.gold) {
            gold = this.bank.gold
            console.warn(`We are only going to withdraw ${gold} gold.`)
        }

        this.socket.emit("bank", { operation: "withdraw", amount: gold })
    }

    public withdrawItem(bankPack: Exclude<BankPackType, "gold">, bankPos: number, inventoryPos = -1): unknown {
        const item = this.bank[bankPack][bankPos]
        if (!item)
            return Promise.reject(`There is no item in bank ${bankPack}[${bankPos}]`)

        const bankPackNum = Number.parseInt(bankPack.substr(5, 2))
        if ((this.character.map == "bank" && bankPackNum < 0 && bankPackNum > 7)
            || (this.character.map == "bank_b" && bankPackNum < 8 && bankPackNum > 23)
            || (this.character.map == "bank_u" && bankPackNum < 24 && bankPackNum > 47)) {
            return Promise.reject(`We can not access ${bankPack} on ${this.character.map}.`)
        }

        const itemCount = this.countItem(item.name)

        const swapped = new Promise((resolve, reject) => {
            // TODO: Resolve
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
                reject(`withdrawItem timeout (${TIMEOUT}ms)`)
            }, TIMEOUT)
            this.socket.on("player", checkWithdrawal)
        })

        console.log({ operation: "swap", pack: bankPack, str: bankPos, inv: inventoryPos })
        this.socket.emit("bank", { operation: "swap", pack: bankPack, str: bankPos, inv: inventoryPos })
        return swapped
    }

    /**
     * Returns the number of items that match the given parameters
     * @param itemName The item to look for
     * @param inventory Where to look for the item
     * @param filters Filters to help search for specific properties on items
     */
    public countItem(item: ItemName, inventory = this.character.items,
        args?: {
            levelGreaterThan?: number;
            levelLessThan?: number;
        }): number {
        let count = 0
        for (const inventoryItem of inventory) {
            if (!inventoryItem)
                continue
            if (inventoryItem.name !== item)
                continue

            if (args) {
                if (args.levelGreaterThan !== undefined) {
                    if (inventoryItem.level == undefined)
                        continue // This item doesn't have a level
                    if (inventoryItem.level <= args.levelGreaterThan)
                        continue // This item is a lower level than desired
                }
                if (args.levelLessThan !== undefined) {
                    if (inventoryItem.level == undefined)
                        continue // This item doesn't have a level
                    if (inventoryItem.level >= args.levelLessThan)
                        continue // This item is a higher level than desired
                }
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
        if (this.G.skills[skill].share)
            skill = this.G.skills[skill].share

        const nextSkill = this.nextSkill.get(skill)
        if (!nextSkill)
            return 0

        const cooldown = nextSkill.getTime() - Date.now()
        if (cooldown < 0)
            return 0
        return cooldown
    }

    public getNearestMonster(mtype?: MonsterName): { monster: EntityData; distance: number; } {
        let closest: EntityData
        let closestD = Number.MAX_VALUE
        this.entities.forEach((entity) => {
            if (mtype && entity.type != mtype)
                return
            const d = Tools.distance(this.character, entity)
            if (d < closestD) {
                closest = entity
                closestD = d
            }
        })
        if (closest)
            return { monster: closest, distance: closestD }
    }

    public getNearestAttackablePlayer(): { player: PlayerData; distance: number; } {
        if (!this.isPVP())
            return undefined

        let closest: PlayerData
        let closestD = Number.MAX_VALUE
        this.players.forEach((player) => {
            if (player.s?.invincible)
                return
            if (player.npc)
                return
            const d = Tools.distance(this.character, player)
            if (d < closestD) {
                closest = player
                closestD = d
            }
        })
        if (closest)
            return { player: closest, distance: closestD }
    }

    /**
     * Returns a boolean corresponding to whether or not the item is in our inventory.
     * @param iN The item to look for
     * @param inv Where to look for the item
     */
    public hasItem(iN: ItemName, inv = this.character.items,
        args?: {
            levelGreaterThan?: number;
            levelLessThan?: number;
        }): boolean {
        for (let i = 0; i < inv.length; i++) {
            const item = inv[i]
            if (!item)
                continue

            if (args) {
                if (args.levelGreaterThan !== undefined) {
                    if (item.level == undefined)
                        continue // This item doesn't have a level
                    if (item.level <= args.levelGreaterThan)
                        continue // This item is a lower level than desired
                }
                if (args.levelLessThan !== undefined) {
                    if (item.level == undefined)
                        continue // This item doesn't have a level
                    if (item.level >= args.levelLessThan)
                        continue // This item is a higher level than desired
                }
            }

            if (item.name == iN)
                return true
        }
        return false
    }

    /**
     * Returns a boolean corresponding to whether or not we have a given item equipped.
     * @param itemName The item to look for
     */
    public isEquipped(itemName: ItemName): boolean {
        for (const slot in this.character.slots) {
            if (!this.character.slots[slot as SlotType])
                continue // Nothing equipped in this slot
            if (this.character.slots[slot as SlotType].name == itemName)
                return true
        }
        return false
    }

    /**
     * Returns a boolean corresponding to whether or not we can attack other players
     */
    public isPVP(): boolean {
        if (this.G[this.character.map].pvp)
            return true
        return this.server.pvp
    }

    public locateDuplicateItems(inventory = this.character.items): {
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
     * @param iN The item to look for
     * @param inv Where to look for the item
     * @param args Filters to help search for specific properties on items
     */
    public locateItem(iN: ItemName, inv = this.character.items,
        args?: {
            level?: number;
            levelGreaterThan?: number;
            levelLessThan?: number;
            locateHighestLevel?: number;
            quantityGreaterThan?: number;
        }): number {
        for (let i = 0; i < inv.length; i++) {
            const item = inv[i]
            if (!item)
                continue
            if (item.name !== iN)
                continue

            if (args) {
                if (args.level !== undefined) {
                    if (item.level !== args.level)
                        continue // The item's level doesn't match
                }
                if (args.levelGreaterThan !== undefined) {
                    if (item.level == undefined)
                        continue // This item doesn't have a level
                    if (item.level <= args.levelGreaterThan)
                        continue // This item is a lower level than desired
                }
                if (args.levelLessThan !== undefined) {
                    if (item.level == undefined)
                        continue // This item doesn't have a level
                    if (item.level >= args.levelLessThan)
                        continue // This item is a higher level than desired
                }
                if (args.quantityGreaterThan !== undefined) {
                    if (item.q == undefined)
                        continue // This item doesn't have a quantity
                    if (item.q <= args.quantityGreaterThan)
                        continue // There isn't enough items in this stack
                }
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
    public locateItems(itemName: ItemName, inventory = this.character.items,
        filters?: {
            levelGreaterThan?: number;
            levelLessThan?: number;
        }): number[] {
        const found: number[] = []
        for (let i = 0; i < inventory.length; i++) {
            const item = inventory[i]
            if (!item)
                continue

            if (filters) {
                if (filters.levelGreaterThan) {
                    if (item.level == undefined)
                        continue // This item doesn't have a level
                    if (item.level <= filters.levelGreaterThan)
                        continue // This item is a lower level than desired
                }
                if (filters.levelLessThan) {
                    if (item.level == undefined)
                        continue // This item doesn't have a level
                    if (item.level >= filters.levelLessThan)
                        continue // This item is a higher level than desired
                }
            }

            if (item.name == itemName) {
                found.push(i)
            }
        }
        return found
    }

    public locateMonsters(mType: MonsterName): NodeData[] {
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

    public locateNPCs(npcType: NPCType): NodeData[] {
        const locations: NodeData[] = []
        for (const mapName in this.G.maps) {
            const map = this.G.maps[mapName as MapName]
            if (map.ignore)
                continue
            if (map.instance || !map.npcs || map.npcs.length == 0)
                continue // Map is unreachable, or there are no NPCs

            for (const npc of map.npcs) {
                if (npc.id !== npcType)
                    continue

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
}
