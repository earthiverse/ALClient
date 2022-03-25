import { Database, DeathModel, IPlayer, PlayerModel } from "./database/Database.js"
import { BankInfo, SlotType, IPosition, TradeSlotType, SlotInfo, StatusInfo } from "./definitions/adventureland.js"
import { Attribute, BankPackName, CharacterType, ConditionName, CXData, DamageType, EmotionName, GData, GMap, ItemName, MapName, MonsterName, NPCName, SkillName } from "./definitions/adventureland-data.js"
import { AchievementProgressData, CharacterData, ServerData, ActionData, ChestOpenedData, DeathData, ChestData, EntitiesData, EvalData, GameResponseData, GameResponseDataObject, NewMapData, PartyData, StartData, WelcomeData, LoadedData, AuthData, DisappearingTextData, GameLogData, UIData, UpgradeData, QData, TrackerData, EmotionData, PlayersData, ItemData, ItemDataTrade, PlayerData, FriendData, NotThereData, PMData, ChatLogData } from "./definitions/adventureland-server.js"
import { LinkData, PathfinderOptions } from "./definitions/pathfinder.js"
import { Constants } from "./Constants.js"
import { Entity } from "./Entity.js"
import { Mage } from "./Mage.js"
import { Observer } from "./Observer.js"
import { Player } from "./Player.js"
import { Pathfinder } from "./Pathfinder.js"
import { Tools } from "./Tools.js"
import { AchievementModel } from "./database/achievements/achievements.model.js"
import { BankModel } from "./database/banks/banks.model.js"
import { IBank } from "./database/banks/banks.types.js"
import { isDeepStrictEqual } from "util"
import { GetEntitiesFilters, GetEntityFilters, LocateItemFilters, LocateItemsFilters } from "./definitions/alclient.js"

export class Character extends Observer implements CharacterData {
    protected userAuth: string
    protected characterID: string
    public timeouts = new Map<string, ReturnType<typeof setTimeout>>()

    public achievements = new Map<string, AchievementProgressData>()
    public bank: BankInfo = { gold: 0 }
    public chests = new Map<string, ChestData>()
    public nextSkill = new Map<SkillName, Date>()
    public partyData: PartyData
    public ready = false

    // CharacterData
    public afk: "code"
    public age: number
    public apiercing = 0
    public blast = 0
    public controller: string
    public in: string
    public name: string
    public id: string
    public ctype: CharacterType
    public abs: boolean
    public angle: number
    public armor = 0
    public attack = 0
    public c: any = {}
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
    public npc?: NPCName
    public owner: string
    public party?: string
    public pdps: number
    public q: {
        upgrade?: { len: number; ms: number; num: number };
        compound?: { len: number; ms: number; num: number; nums: number[] };
        exchange?: { len: number; ms: number; num: number; name: ItemName; id: ItemName; q: number }
    } = {}
    public range = 1
    public resistance = 0
    public rip = true
    public rpiercing = 0
    public s: StatusInfo = {}
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
    items: ItemData[]
    cc: number
    ipass?: string
    friends?: string[]
    acx?: any
    xcx?: string[]
    hitchhikers?: [string, any][]
    user?: BankInfo
    fear: number
    courage: number
    mcourage: number
    pcourage: number

    constructor(userID: string, userAuth: string, characterID: string, g: GData, serverData: ServerData) {
        super(serverData, g)
        this.owner = userID
        this.userAuth = userAuth
        this.characterID = characterID
    }

    protected async updateLoop(): Promise<void> {
        if (!this.socket || this.socket.disconnected || !this.ready) {
            this.timeouts.set("updateLoop", setTimeout(async () => { this.updateLoop() }, Constants.UPDATE_POSITIONS_EVERY_MS))
            return
        }

        if (this.lastPositionUpdate === undefined) {
            this.updatePositions()
            this.timeouts.set("updateLoop", setTimeout(async () => { this.updateLoop() }, Constants.UPDATE_POSITIONS_EVERY_MS))
            return
        }

        if (this.lastAllEntities !== undefined && Date.now() - this.lastAllEntities > Constants.STALE_MONSTER_MS) {
            await this.requestEntitiesData().catch(() => { /* Suppress Errors */ })
        }

        const msSinceLastUpdate = Date.now() - this.lastPositionUpdate
        if (msSinceLastUpdate > Constants.UPDATE_POSITIONS_EVERY_MS) {
            // Update now
            this.updatePositions()
            this.timeouts.set("updateLoop", setTimeout(async () => { this.updateLoop() }, Constants.UPDATE_POSITIONS_EVERY_MS))
            return
        } else {
            // Update in a bit
            this.timeouts.set("updateLoop", setTimeout(async () => { this.updateLoop() }, Constants.UPDATE_POSITIONS_EVERY_MS - msSinceLastUpdate))
            return
        }
    }

    public parseCharacter(data: CharacterData | PlayerData): void {
        this.updatePositions()

        // Update all the character information we can
        for (const datum in data) {
            if (datum == "hitchhikers") {
                // Game responses
                for (const [event, datum] of (data as CharacterData).hitchhikers) {
                    if (event == "game_response") {
                        this.parseGameResponse(datum)
                    } else if (event == "eval") {
                        this.parseEval(datum as EvalData)
                    }
                }
            } else if (datum == "entities") {
                this.parseEntities(data[datum])
            } else if (datum == "owner") {
                // We know who the owner is, for some reason start sends it as a blank string
            } else if (datum == "tp") {
                // We just teleported, but we don't want to keep the data.
            } else if (datum == "user") {
                // Bank information
                this.bank = (data as CharacterData).user

                if (Database.connection) {
                    const updateData: Partial<IBank> = {
                        lastUpdated: Date.now(),
                        owner: this.owner,
                        ...(data as CharacterData).user
                    }
                    BankModel.updateOne({ owner: this.owner }, updateData, { upsert: true }).lean().exec().catch((e) => { console.error(e) })
                }

                // Add empty bank slots
                for (const datum in this.bank) {
                    if (Array.isArray(this.bank[datum])) {
                        this.bank[datum].length = Constants.BANK_PACK_SIZE
                    }
                }
            } else {
                // Normal attribute
                this[datum] = data[datum]
            }
        }

        // Keep name updated for those that prefer to use name instead of id.
        this.name = data.id

        // Clear party info if we have no party
        if (!this.party) this.partyData = undefined

        // Set damage type if not set
        if (!this.damage_type && this.ctype) this.damage_type = this.G.classes[this.ctype].damage_type

        // Update database with latest information
        if (!Database.connection) return
        const nextUpdate = Database.nextUpdate.get(`${this.server.name}${this.server.region}${this.id}`)
        if (!nextUpdate || Date.now() >= nextUpdate) {
            const updateData: Partial<IPlayer> = {
                items: this.items,
                lastSeen: Date.now(),
                map: this.map,
                name: this.id,
                s: this.s,
                serverIdentifier: this.serverData.name,
                serverRegion: this.serverData.region,
                slots: this.slots,
                type: this.ctype,
                x: this.x,
                y: this.y
            }
            if (this.owner) updateData.owner = this.owner
            PlayerModel.updateOne({ name: this.id }, updateData, { upsert: true }).lean().exec().catch((e) => { console.error(e) })
            Database.nextUpdate.set(`${this.server.name}${this.server.region}${this.id}`, Date.now() + Constants.MONGO_UPDATE_MS)
        }
    }

    protected parseEntities(data: EntitiesData): void {
        // Update our party members data if we have some
        if (this.party) {
            for (let i = 0; i < data.players.length; i++) {
                const player = data.players[i]
                const partyPlayer = this.partyData?.party?.[player.id]
                if (!partyPlayer) continue // Not in our party

                // Update all the information we can
                for (const key in partyPlayer) if (player[key]) partyPlayer[key] = player[key]
            }
        }

        // Look for ourself in the players, and parse it differently so we don't get it mixed up with the other players
        for (let i = 0; i < data.players.length; i++) {
            const player = data.players[i]
            if (player.id == this.id) {
                this.parseCharacter(player)
                data.players.splice(i, 1)
                break
            }
        }

        super.parseEntities(data)
    }

    protected parseEval(data: EvalData): void {
        // Skill timeouts (like attack) are sent via eval
        const skillReg1 = /^skill_timeout\s*\(\s*['"](.+?)['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.exec(data.code)
        if (skillReg1) {
            const skill = skillReg1[1] as SkillName
            let cooldown: number
            if (skillReg1[2]) {
                cooldown = Number.parseFloat(skillReg1[2])
            } else if (this.G.skills[skill].cooldown) {
                cooldown = this.G.skills[skill].cooldown
            }
            if (cooldown !== undefined) {
                const next = new Date(Date.now() + Math.ceil(cooldown))
                this.setNextSkill(skill, next)
            }
            return
        }

        // Potion timeouts are sent via eval
        const potReg = /^pot_timeout\s*\(\s*(\d*\.?\d+)\s*\)/.exec(data.code)
        if (potReg) {
            const cooldown = Number.parseFloat(potReg[1])
            const next = new Date(Date.now() + Math.ceil(cooldown))
            this.setNextSkill("regen_hp", next)
            this.setNextSkill("regen_mp", next)
            // NOTE: We don't need these, because regen_hp and regen_mp share these cooldowns in G.skills
            // this.setNextSkill("use_hp", next)
            // this.setNextSkill("use_mp", next)
            return
        }

        // Skills that move your character (e.g.: dash) are sent via eval
        const uiMoveReg = /^ui_move\s*\(\s*(-?\d*\.{0,1}\d+)\s*,\s*(-?\d*\.{0,1}\d+)\s*\)/.exec(data.code)
        if (uiMoveReg) {
            const x = Number.parseFloat(uiMoveReg[1])
            const y = Number.parseFloat(uiMoveReg[2])
            this.x = x
            this.y = y
            return
        }

        // TODO: Handle pvp_timeout

        console.error(`Unhandled 'eval': ${JSON.stringify(data)}`)
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
            } else if (Database.connection && data.response == "defeated_by_a_monster") {
                DeathModel.insertMany([{
                    cause: data.monster,
                    map: this.map,
                    name: this.id,
                    serverIdentifier: this.server.name,
                    serverRegion: this.server.region,
                    time: Date.now(),
                    x: this.x,
                    y: this.y
                }])
            } else if (data.response == "ex_condition") {
                // The condition expired
                delete this.s[data.name]
            } else if (data.response == "skill_success") {
                const cooldown = this.G.skills[data.name].cooldown
                if (cooldown) {
                    this.setNextSkill(data.name, new Date(Date.now() + cooldown))
                }
            }
        } else if (typeof (data) == "string") {
            if (data == "resolve_skill") {
                // Ignore. We resolve our skills a different way than the vanilla client
            }
        }
    }

    protected parseNewMap(data: NewMapData): void {
        this.going_x = data.x
        this.going_y = data.y
        this.in = data.in
        this.m = data.m
        this.moving = false

        super.parseNewMap(data)
    }

    protected parseQData(data: QData): void {
        if (data.q?.upgrade) this.q.upgrade = data.q.upgrade
        if (data.q?.compound) this.q.compound = data.q.compound
    }

    protected setNextSkill(skill: SkillName, next: Date): void {
        this.nextSkill.set(skill, next)
        if (this.G.skills[skill].share) this.nextSkill.set(this.G.skills[skill].share, next)
    }

    protected updatePositions(): void {
        if (this.lastPositionUpdate) {
            const msSinceLastUpdate = Date.now() - this.lastPositionUpdate
            if (msSinceLastUpdate == 0) return

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

        super.updatePositions()
    }

    /**
     * TODO: Add fail check for logging in with too many characters to one server
     *
     * @return {*}  {Promise<void>}
     * @memberof Character
     */
    public async connect(): Promise<void> {
        try {
            await super.connect(false, false)
        } catch (e) {
            return Promise.reject(e)
        }

        this.socket.on("disconnect", () => {
            this.ready = false
        })

        this.socket.on("disconnect_reason", () => {
            this.ready = false
        })

        this.socket.on("friends", (data: FriendData) => {
            if (data.event == "lost" || data.event == "new" || data.event == "update") {
                this.friends = data.friends
            }
        })

        this.socket.on("start", (data: StartData) => {
            this.going_x = data.x
            this.going_y = data.y
            this.moving = false
            this.damage_type = this.G.classes[data.ctype].damage_type

            this.parseCharacter(data)
            if (data.entities) this.parseEntities(data.entities)
            this.S = data.s_info
            this.ready = true
        })

        this.socket.on("achievement_progress", (data: AchievementProgressData) => {
            this.achievements.set(data.name, data)
        })

        this.socket.on("chest_opened", (data: ChestOpenedData) => {
            this.chests.delete(data.id)
        })

        this.socket.on("drop", (data: ChestData) => {
            this.chests.set(data.id, data)
        })

        this.socket.on("eval", (data: EvalData) => {
            this.parseEval(data)
        })

        this.socket.on("game_error", (data: string | { message: string; }) => {
            if (typeof data == "string") {
                console.error(`Game Error: ${data}`)
            } else {
                console.error("Game Error ----------")
                console.error(data)
            }
        })

        if (Database.connection) {
            this.socket.on("game_log", async (data: { message: string; color: string; }) => {
                const result = /^Slain by (.+)$/.exec(data.message)
                if (result) {
                    DeathModel.create({
                        cause: result[1],
                        map: this.map,
                        name: this.id,
                        serverIdentifier: this.server.name,
                        serverRegion: this.server.region,
                        time: Date.now(),
                        x: this.x,
                        y: this.y
                    })
                }
            })
        }

        this.socket.on("game_response", (data: GameResponseData) => {
            this.parseGameResponse(data)
        })

        // TODO: Confirm this works for leave_party(), too.
        this.socket.on("party_update", (data: PartyData) => {
            this.partyData = data

            if (data && Database.connection) {
                const playerUpdates = []
                for (const id in data.party) {
                    const cData = data.party[id]

                    const updateData: Partial<IPlayer> = {
                        in: cData.in,
                        lastSeen: Date.now(),
                        map: cData.map,
                        name: id,
                        serverIdentifier: this.serverData.name,
                        serverRegion: this.serverData.region,
                        type: cData.type,
                        x: cData.x,
                        y: cData.y
                    }
                    playerUpdates.push({
                        updateOne: {
                            filter: { name: id },
                            update: updateData,
                            upsert: true
                        }
                    })
                }
                if (playerUpdates.length) PlayerModel.bulkWrite(playerUpdates).catch((e) => { console.error(e) })
            }
        })

        this.socket.on("player", (data: CharacterData) => {
            this.parseCharacter(data)
        })

        this.socket.on("q_data", (data: QData) => {
            this.parseQData(data)
        })

        if (Database.connection) {
            this.socket.on("tracker", async (data: TrackerData) => {
            // Add tracker data to the database
                await AchievementModel.create({ date: Date.now(), max: data.max, monsters: data.monsters, name: this.id }).catch((e) => { console.error(e) })
            })
        }

        this.socket.on("upgrade", (data: UpgradeData) => {
            if (data.type == "compound" && this.q.compound) delete this.q.compound

            // else if (data.type == "exchange" && this.q.exchange) delete this.q.exchange
            else if (data.type == "upgrade" && this.q.upgrade) delete this.q.upgrade
        })

        this.socket.on("welcome", (data: WelcomeData) => {
            // Send a response that we're ready to go
            this.socket.emit("loaded", {
                height: 1080,
                scale: 2,
                success: 1,
                width: 1920
            } as LoadedData)

            // When we're loaded, authenticate
            this.socket.emit("auth", {
                auth: this.userAuth,
                character: this.characterID,
                height: 1080,
                no_graphics: "True",
                no_html: "1",
                passphrase: "",
                scale: 2,
                user: this.owner,
                width: 1920
            } as AuthData)
        })

        const connected = new Promise<void>((resolve, reject) => {
            const failCheck = (data: string | { message: string; }) => {
                if (typeof data == "string") {
                    this.socket.off("start", startCheck)
                    this.socket.off("disconnect_reason", failCheck2)
                    reject(`Failed to connect: ${data}`)
                } else {
                    this.socket.off("start", startCheck)
                    this.socket.off("disconnect_reason", failCheck2)
                    reject(`Failed to connect: ${data.message}`)
                }
            }

            const failCheck2 = (data: string) => {
                this.socket.off("start", startCheck)
                this.socket.off("game_error", failCheck)
                reject(`Failed to connect: ${data}`)
            }

            const startCheck = () => {
                this.socket.off("game_error", failCheck)
                this.socket.off("disconnect_reason", failCheck2)
                this.updateLoop()
                resolve()
            }

            setTimeout(() => {
                this.socket.off("start", startCheck)
                this.socket.off("game_error", failCheck)
                this.socket.off("disconnect_reason", failCheck2)
                reject(`Failed to start within ${Constants.CONNECT_TIMEOUT_MS / 1000}s.`)
            }, Constants.CONNECT_TIMEOUT_MS)

            this.socket.once("start", startCheck)
            this.socket.once("game_error", failCheck)
            this.socket.once("disconnect_reason", failCheck2)
        })

        this.socket.open()

        return connected
    }

    public disconnect(): void {
        console.warn("Disconnecting!")

        // Close & remove the socket
        if (this.socket) {
            this.socket.disconnect()
            this.socket.off()
        }

        this.ready = false

        // Cancel all timeouts
        for (const [, timer] of this.timeouts) clearTimeout(timer)
    }

    /**
     * This function will request all nearby entities and players from the server. You can use it to make sure we have the latest data.
     * NOTE: There is a rather high code call cost to this, don't call it too often.
     */
    public async requestEntitiesData(): Promise<EntitiesData> {
        if (!this.ready) return Promise.reject("We aren't ready yet [requestEntitiesData].")

        return new Promise<EntitiesData>((resolve, reject) => {
            const checkEntitiesEvent = (data: EntitiesData) => {
                if (data.type == "all") {
                    this.socket.off("entities", checkEntitiesEvent)
                    resolve(data)
                }
            }

            setTimeout(() => {
                this.socket.off("entities", checkEntitiesEvent)
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
        if (!this.ready) return Promise.reject("We aren't ready yet [requestPlayerData].")

        return new Promise<CharacterData>((resolve, reject) => {
            const checkPlayerEvent = (data: CharacterData) => {
                if (data.s.typing) {
                    this.socket.off("player", checkPlayerEvent)
                    resolve(data)
                }
            }

            setTimeout(() => {
                this.socket.off("player", checkPlayerEvent)
                reject(`requestPlayerData timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("player", checkPlayerEvent)

            this.socket.emit("property", { typing: true })
        })
    }

    /**
     * Accepts a friend request.
     *
     * @param {string} id
     * @return {*}  {Promise<FriendData>}
     * @memberof Character
     */
    public acceptFriendRequest(id: string): Promise<FriendData> {
        if (!this.ready) return Promise.reject("We aren't ready yet [acceptFriendRequest].")

        const friended = new Promise<FriendData>((resolve, reject) => {
            const successCheck = (data: FriendData) => {
                if (data.event == "new") {
                    this.socket.off("friend", successCheck)
                    this.socket.off("game_response", failCheck)
                    resolve(data)
                }
            }
            const failCheck = (data: GameResponseData) => {
                if (typeof data == "string") {
                    if (data == "friend_expired") {
                        this.socket.off("friend", successCheck)
                        this.socket.off("game_response", failCheck)
                        reject("Friend request expired.")
                    }
                }
            }
            setTimeout(() => {
                this.socket.off("friend", successCheck)
                this.socket.off("game_response", failCheck)
                reject(`acceptFriendRequest timeout(${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("friend", successCheck)
            this.socket.on("game_response", failCheck)
        })
        this.socket.emit("friend", { event: "accept", name: id })
        return friended
    }

    /**
     * Accepts a magiport request from another character
     * @param name ID of the character that offered a magiport.
     */
    public acceptMagiport(name: string): Promise<IPosition> {
        if (!this.ready) return Promise.reject("We aren't ready yet [acceptMagiport].")

        const acceptedMagiport = new Promise<IPosition>((resolve, reject) => {
            const magiportCheck = (data: NewMapData) => {
                if (data.effect == "magiport") {
                    this.socket.off("new_map", magiportCheck)
                    resolve({ map: data.name, x: data.x, y: data.y })
                }
            }

            setTimeout(() => {
                this.socket.off("new_map", magiportCheck)
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
        if (!this.ready) return Promise.reject("We aren't ready yet [acceptPartyInvite].")

        const acceptedInvite = new Promise<PartyData>((resolve, reject) => {
            const partyCheck = (data: PartyData) => {
                if (data.list && data.list.includes(this.id)
                    && data.list.includes(id)) {
                    this.socket.off("party_update", partyCheck)
                    this.socket.off("game_log", unableCheck)
                    resolve(data)
                }
            }

            const unableCheck = (data: GameLogData) => {
                const notFound = RegExp("^.+? is not found$")
                if (data == "Invitation expired") {
                    this.socket.off("party_update", partyCheck)
                    this.socket.off("game_log", unableCheck)
                    reject(data)
                } else if (notFound.test(data)) {
                    this.socket.off("party_update", partyCheck)
                    this.socket.off("game_log", unableCheck)
                    reject(data)
                } else if (data == "Already partying") {
                    if (this.partyData.list.includes(this.id) && this.partyData.list.includes(id)) {
                        // NOTE: We resolve the promise even if we have already accepted it if we're in the correct party.
                        this.socket.off("party_update", partyCheck)
                        this.socket.off("game_log", unableCheck)
                        resolve(this.partyData)
                    } else {
                        this.socket.off("party_update", partyCheck)
                        this.socket.off("game_log", unableCheck)
                        reject(data)
                    }
                }
            }

            setTimeout(() => {
                this.socket.off("party_update", partyCheck)
                this.socket.off("game_log", unableCheck)
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
        if (!this.ready) return Promise.reject("We aren't ready yet [acceptPartyRequest].")

        const acceptedRequest = new Promise<PartyData>((resolve, reject) => {
            const partyCheck = (data: PartyData) => {
                if (data.list && data.list.includes(this.id) && data.list.includes(id)) {
                    this.socket.off("party_update", partyCheck)
                    resolve(data)
                }
            }

            setTimeout(() => {
                this.socket.off("party_update", partyCheck)
                reject(`acceptPartyRequest timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("party_update", partyCheck)
        })

        this.socket.emit("party", { event: "raccept", name: id })
        return acceptedRequest
    }

    /**
     * NOTE: We can't name this function `attack` because of the property `attack` that specifies damage.s
     * @param id The ID of the entity or player to attack
     */
    public basicAttack(id: string): Promise<string> {
        if (!this.ready) return Promise.reject("We aren't ready yet [basicAttack].")

        const attackStarted = new Promise<string>((resolve, reject) => {
            const deathCheck = (data: DeathData) => {
                if (data.id == id) {
                    this.socket.off("action", attackCheck)
                    this.socket.off("game_response", failCheck)
                    this.socket.off("notthere", failCheck2)
                    this.socket.off("death", deathCheck)
                    reject(`Entity ${id} not found`)
                }
            }
            const failCheck = (data: GameResponseData) => {
                if (typeof data == "object") {
                    if (data.response == "disabled") {
                        this.socket.off("action", attackCheck)
                        this.socket.off("game_response", failCheck)
                        this.socket.off("notthere", failCheck2)
                        this.socket.off("death", deathCheck)
                        reject(`Attack on ${id} failed (disabled).`)
                    } else if (data.response == "attack_failed" && data.id == id) {
                        this.socket.off("action", attackCheck)
                        this.socket.off("game_response", failCheck)
                        this.socket.off("notthere", failCheck2)
                        this.socket.off("death", deathCheck)
                        reject(`Attack on ${id} failed.`)
                    } else if (data.response == "too_far" && data.place == "attack" && data.id == id) {
                        this.socket.off("action", attackCheck)
                        this.socket.off("game_response", failCheck)
                        this.socket.off("notthere", failCheck2)
                        this.socket.off("death", deathCheck)
                        reject(`${id} is too far away to attack (dist: ${data.dist}).`)
                    } else if (data.response == "cooldown" && data.place == "attack" && data.id == id) {
                        this.socket.off("action", attackCheck)
                        this.socket.off("game_response", failCheck)
                        this.socket.off("notthere", failCheck2)
                        this.socket.off("death", deathCheck)
                        reject(`Attack on ${id} failed due to cooldown (ms: ${data.ms}).`)
                    } else if (data.response == "no_mp" && data.place == "attack") {
                        this.socket.off("action", attackCheck)
                        this.socket.off("game_response", failCheck)
                        this.socket.off("notthere", failCheck2)
                        this.socket.off("death", deathCheck)
                        reject(`Attack on ${id} failed due to insufficient MP.`)
                    }
                }
            }
            const failCheck2 = (data: NotThereData) => {
                if (data.place == "attack") {
                    this.socket.off("action", attackCheck)
                    this.socket.off("game_response", failCheck)
                    this.socket.off("notthere", failCheck2)
                    this.socket.off("death", deathCheck)
                    reject(`${id} could not be found to attack.`)
                }
            }
            const attackCheck = (data: ActionData) => {
                if (data.attacker == this.id && data.target == id && data.type == "attack") {
                    this.socket.off("action", attackCheck)
                    this.socket.off("game_response", failCheck)
                    this.socket.off("notthere", failCheck2)
                    this.socket.off("death", deathCheck)
                    resolve(data.pid)
                }
            }
            setTimeout(() => {
                this.socket.off("action", attackCheck)
                this.socket.off("game_response", failCheck)
                this.socket.off("notthere", failCheck2)
                this.socket.off("death", deathCheck)
                reject(`attack timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("action", attackCheck)
            this.socket.on("game_response", failCheck)
            this.socket.on("notthere", failCheck2)
            this.socket.on("death", deathCheck)
        })

        this.socket.emit("attack", { id: id })
        return attackStarted
    }

    // TODO: Return buy info
    public buy(itemName: ItemName, quantity = 1): Promise<number> {
        if (!this.ready) return Promise.reject("We aren't ready yet [buy].")
        if (this.gold < this.G.items[itemName].g) return Promise.reject(`Insufficient gold. We only have ${this.gold}, but the item costs ${this.G.items[itemName].g}`)

        const itemReceived = new Promise<number>((resolve, reject) => {
            const buyCheck1 = (data: CharacterData) => {
                if (!data.hitchhikers) return
                for (const hitchhiker of data.hitchhikers) {
                    if (hitchhiker[0] == "game_response") {
                        const data: GameResponseData = hitchhiker[1]
                        if (typeof data == "object"
                            && data.response == "buy_success"
                            && data.name == itemName
                            && data.q == quantity) {
                            this.socket.off("player", buyCheck1)
                            this.socket.off("game_response", buyCheck2)
                            resolve(data.num)
                        }
                    }
                }
            }
            const buyCheck2 = (data: GameResponseData) => {
                if (data == "buy_cant_npc") {
                    this.socket.off("player", buyCheck1)
                    this.socket.off("game_response", buyCheck2)
                    reject(`Cannot buy ${quantity} ${itemName}(s) from an NPC`)
                } else if (data == "buy_cant_space") {
                    this.socket.off("player", buyCheck1)
                    this.socket.off("game_response", buyCheck2)
                    reject(`Not enough inventory space to buy ${quantity} ${itemName}(s)`)
                } else if (data == "buy_cost") {
                    this.socket.off("player", buyCheck1)
                    this.socket.off("game_response", buyCheck2)
                    reject(`Not enough gold to buy ${quantity} ${itemName}(s)`)
                }
            }
            setTimeout(() => {
                this.socket.off("player", buyCheck1)
                this.socket.off("game_response", buyCheck2)
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

    /**
     * Buy an item from an NPC (e.g. monsterhunter) with tokens
     * @param itemName The item to buy with tokens
     * @returns
     */
    public buyWithTokens(itemName: ItemName): Promise<void> {
        const numBefore = this.countItem(itemName)

        // Check if this item is buyable with tokens, and if we have enough
        let tokenTypeNeeded: "funtoken" | "monstertoken" | "pvptoken"
        let numTokensNeeded: number
        for (const t in this.G.tokens) {
            const tokenType = t as "funtoken" | "monstertoken" | "pvptoken"
            const tokenTable = this.G.tokens[tokenType]
            for (const item in tokenTable) {
                if (item !== itemName) continue

                // We found it
                tokenTypeNeeded = tokenType
                numTokensNeeded = tokenTable[item as ItemName]
                break
            }
            if (tokenTypeNeeded) break
        }
        if (tokenTypeNeeded === undefined) return Promise.reject(`${itemName} is not purchasable with tokens.`)
        const numTokens = this.countItem(tokenTypeNeeded)
        if (numTokens < numTokensNeeded) return Promise.reject(`We need ${numTokensNeeded} to buy ${itemName}, but we only have ${numTokens}.`)

        const itemReceived = new Promise<void>((resolve, reject) => {
            const buyCheck = (data: CharacterData) => {
                const numNow = this.countItem(itemName, data.items)
                if (numNow > numBefore) {
                    this.socket.off("player", buyCheck)
                    this.socket.off("game_response", failCheck)
                    resolve()
                }
            }

            const failCheck = (data: GameResponseData) => {
                if (typeof data == "string") {
                    if (data == "exchange_notenough") {
                        this.socket.off("player", buyCheck)
                        this.socket.off("game_response", failCheck)
                        reject(`Not enough tokens to buy ${itemName}.`)
                    }
                }
            }
            setTimeout(() => {
                this.socket.off("player", buyCheck)
                this.socket.off("game_response", failCheck)
                reject(`buyWithTokens timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)

            this.socket.on("player", buyCheck)
            this.socket.on("game_response", failCheck)
        })

        const invTokens = this.locateItem(tokenTypeNeeded)
        this.socket.emit("exchange_buy", { name: itemName, num: invTokens, q: this.items[invTokens].q })
        return itemReceived
    }

    public buyFromMerchant(id: string, slot: TradeSlotType, rid: string, quantity = 1): Promise<ItemData> {
        if (!this.ready) return Promise.reject("We aren't ready yet [buyFromMerchant].")
        if (quantity <= 0) return Promise.reject(`We can not buy a quantity of ${quantity}.`)
        const merchant = this.players.get(id)
        if (!merchant) return Promise.reject(`We can not see ${id} nearby.`)
        if (Tools.distance(this, merchant) > Constants.NPC_INTERACTION_DISTANCE) return Promise.reject(`We are too far away from ${id} to buy from.`)

        const item = merchant.slots[slot]
        if (!item) return Promise.reject(`We could not find an item in slot ${slot} on ${id}.`)
        if (item.b) return Promise.reject("The item is not for sale, this merchant is *buying* that item.")
        if (item.rid !== rid) return Promise.reject(`The RIDs do not match (item: ${item.rid}, supplied: ${rid})`)

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

        const itemBought = new Promise<ItemData>((resolve, reject) => {
            const buyCheck = (data: UIData) => {
                if (data.type == "+$$" && data.seller == id && data.buyer == this.id && data.slot == slot) {
                    this.socket.off("ui", buyCheck)
                    resolve(data.item)
                }
            }

            setTimeout(() => {
                this.socket.off("ui", buyCheck)
                reject(`buy timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("ui", buyCheck)
        })

        this.socket.emit("trade_buy", { id: id, q: quantity.toString(), rid: rid, slot: slot })
        return itemBought
    }

    /**
     * Buys an item from Ponty. Get items from `getPontyItems()`
     *
     * @param {ItemDataTrade} item
     * @return {*}  {Promise<void>}
     * @memberof Character
     */
    public buyFromPonty(item: ItemDataTrade): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [buyFromPonty].")
        if (!item.rid) return Promise.reject("This item does not have an 'rid'.")
        const price = this.G.items[item.name].g * Constants.PONTY_MARKUP * (item.q ? item.q : 1)
        if (price > this.gold) return Promise.reject(`We don't have enough gold to buy ${item.name} from Ponty.`)

        const numBefore = this.countItem(item.name, this.items)

        const bought = new Promise<void>((resolve, reject) => {
            const failCheck = (message: string) => {
                if (message == "Item gone") {
                    this.socket.off("game_log", failCheck)
                    this.socket.off("player", successCheck)
                    reject(`${item.name} is no longer available from Ponty.`)
                }
            }

            const successCheck = (data: CharacterData) => {
                const numNow = this.countItem(item.name, data.items)
                if ((item.q && numNow == numBefore + item.q)
                    || (numNow == numBefore + 1)) {
                    this.socket.off("game_log", failCheck)
                    this.socket.off("player", successCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("game_log", failCheck)
                this.socket.off("player", successCheck)
                reject("buyFromPonty timeout (5000ms)")
            }, 5000)
            this.socket.on("game_log", failCheck)
            this.socket.on("player", successCheck)
        })

        this.socket.emit("sbuy", { rid: item.rid })
        return bought
    }

    /**
     * Calculates the type of targets attacking you.
     *
     * The first element is the current number of targets of the given damage type.
     *
     * The second element is our character's courage
     *
     * @return {*}  {{
     *         magical: [number, number];
     *         physical: [number, number];
     *         pure: [number, number];
     *         }}
     * @memberof Character
     */
    public calculateTargets(): {
        magical: number;
        physical: number;
        pure: number;
    } {
        const targets = {
            magical: 0,
            physical: 0,
            pure: 0
        }

        for (const entity of this.getEntities({
            targetingMe: true
        })) {
            switch (entity.damage_type) {
                case "magical":
                    targets.magical += 1
                    break
                case "physical":
                    targets.physical += 1
                    break
                case "pure":
                    targets.pure += 1
                    break
            }
        }

        if ((targets.magical + targets.physical + targets.pure) < this.targets) {
            // Something else is targeting us, assume the worst
            const difference = this.targets - (targets.magical + targets.physical + targets.pure)
            targets.magical += difference
            targets.physical += difference
            targets.pure += difference
        }

        // TODO: We can probably use `this.fear` and `this.courage`/`this.mcourage`/`this.pcourage`
        // If we're not feared, the `targets.X` count is guaranteed to be less than our courage

        return targets
    }

    public calculateDamageRange(defender: Character | Entity | Player, skill: SkillName = "attack"): [number, number] {
        // If the entity is immune, most skills won't do damage
        if ((defender as Entity).immune && ["3shot", "5shot", "burst", "cburst", "supershot", "taunt"].includes(skill)) return [0, 0]

        if (defender["1hp"] || skill == "taunt") {
            if (this.crit) {
                return [1, 2]
            } else {
                return [1, 1]
            }
        }

        let baseDamage: number = this.attack
        if (!this.G.skills[skill]) {
            console.log(`calculateDamageRange DEBUG: '${skill}' isn't a skill!?`)
        } else {
            if (this.G.skills[skill].damage) baseDamage = this.G.skills[skill].damage
        }

        // NOTE: I asked Wizard to add something to G.conditions.cursed and .marked so we don't need these hardcoded.
        if (defender.s.cursed) baseDamage *= 1.2
        if (defender.s.marked) baseDamage *= 1.1

        if (this.ctype == "priest") baseDamage *= 0.4 // Priests only do 40% damage

        const damage_type = this.G.skills[skill].damage_type ?? this.damage_type

        let additionalApiercing = 0
        if (this.G.skills[skill].apiercing) additionalApiercing = this.G.skills[skill].apiercing
        // NOTE: currently no skills with rpiercing
        // let additionalRpiercing = 0
        // if (this.G.skills[skill].rpiercing) additionalRpiercing = this.G.skills[skill].rpiercing
        if (damage_type == "physical") baseDamage *= Tools.damage_multiplier(defender.armor - this.apiercing - additionalApiercing)
        else if (damage_type == "magical") baseDamage *= Tools.damage_multiplier(defender.resistance - this.rpiercing /** - additionalRpiercing */)

        if (this.G.skills[skill].damage_multiplier) baseDamage *= this.G.skills[skill].damage_multiplier

        let lowerLimit = baseDamage * 0.9
        let upperLimit = baseDamage * 1.1

        if (this.crit) {
            if (this.crit >= 100) {
                lowerLimit *= (2 + (this.critdamage / 100))
            }
            upperLimit *= (2 + (this.critdamage / 100))
        }

        // NOTE: This information is from @Wizard on Discord on May 1st, 2020
        // https://discord.com/channels/238332476743745536/243707345887166465/705722706250694737
        if (skill == "cleave") {
            lowerLimit *= 0.1
            upperLimit *= 0.9
        }

        return [lowerLimit, upperLimit]
    }

    /**
     * Returns the *minimum* gold required to obtain the given item.
     *
     * @param {ItemData} item - The item to calculate the minimum cost for
     * @return {*}  {number} - The cost of the item
     * @memberof Character
     */
    public calculateItemCost(item: ItemData): number {
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

        // The first level of a gifted item is only worth 1 gold.
        if (item.gift) cost -= (gInfo.g - 1)

        return cost
    }

    public calculateItemGrade(item: ItemData): number {
        const gInfo = this.G.items[item.name]
        if (!gInfo.grades) return
        let grade = 0
        for (const level of gInfo.grades) {
            if (item.level < level) break
            grade++
        }
        return grade
    }

    public canBuy(item: ItemName, options?: {
        ignoreLocation?: boolean
    }): boolean {
        if (this.isFull()) return false // We are full

        const gInfo = this.G.items[item]
        if (this.gold < gInfo.g) return false // We can't afford it

        const computerAvailable = this.hasItem("computer") || this.hasItem("supercomputer")

        let buyable = false
        let close = false
        // Double check if we can buy from an NPC
        for (const map in this.G.maps) {
            if (buyable == true) break
            if (!computerAvailable && map !== this.map) continue // We aren't close, and we don't have a computer, so don't check this map
            if (this.G.maps[map as MapName].ignore) continue
            for (const npc of this.G.maps[map as MapName].npcs) {
                if (buyable == true) break
                if (this.G.npcs[npc.id].items == undefined) continue
                for (const i of this.G.npcs[npc.id].items) {
                    if (i == item) {
                        buyable = true
                        if (Tools.distance(this, { map: map as MapName, x: npc.position[0], y: npc.position[1] }) < Constants.NPC_INTERACTION_DISTANCE) close = true
                        break
                    }
                }
            }
        }
        if (!buyable) return false

        return (computerAvailable || close || options?.ignoreLocation)
    }

    /**
     * Returns true if you have the required items and gold to craft the item, and you
     * are near the NPC where you can craft this item.
     *
     * @param {ItemName} itemToCraft
     * @return {*}  {boolean}
     * @memberof Character
     */
    public canCraft(itemToCraft: ItemName, options?: {
        ignoreLocation?: boolean
    }): boolean {
        const gCraft = this.G.craft[itemToCraft]
        if (!gCraft) return false // Item is not craftable
        if (gCraft.cost > this.gold) return false // We don't have enough money
        for (const [requiredQuantity, requiredItem, requiredItemLevel] of gCraft.items) {
            // If the item is compoundable or upgradable, the level needs to be 0
            let fixedItemLevel = requiredItemLevel
            if (fixedItemLevel === undefined) {
                const gInfo = this.G.items[requiredItem]
                if (gInfo.upgrade || gInfo.compound) fixedItemLevel = 0
            }

            if (!this.hasItem(requiredItem, this.items, { level: fixedItemLevel, quantityGreaterThan: requiredQuantity - 1 })) return false // We don't have this required item
        }
        if (this.G.maps[this.map].mount) return false // Can't craft things in the bank

        if (!this.hasItem("computer") && !this.hasItem("supercomputer") && !options?.ignoreLocation) {
            // Check if we're near the NPC we need
            const craftableLocation = this.locateCraftNPC(itemToCraft)
            if (Tools.distance(this, craftableLocation) > Constants.NPC_INTERACTION_DISTANCE) return false
        }

        return true
    }


    /**
     * Returns true if you have enough of the exchangeable items, and you are
     * near the NPC where you can exchange this item.
     *
     * @param {ItemName} itemToExchange
     * @param {{
     *         ignoreLocation?: boolean
     *     }} [options]
     * @return {*}  {boolean}
     * @memberof Character
     */
    public canExchange(itemToExchange: ItemName, options?: {
        ignoreLocation?: boolean
    }): boolean {
        // TODO: Add a check if we are already crafting something

        const gItem = this.G.items[itemToExchange]
        if (gItem.e !== undefined && this.countItem(itemToExchange) < gItem.e) return false // We don't have enough to exchange

        if (!this.hasItem("computer") && !this.hasItem("supercomputer") && !options?.ignoreLocation) {
            const exchangeableLocation = this.locateExchangeNPC(itemToExchange)
            if (Tools.distance(this, exchangeableLocation) > Constants.NPC_INTERACTION_DISTANCE) return false // Too far away
        }

        return true
    }

    /**
     * Returns true if we can 100% kill the entity in one shot.
     *
     * @param {Entity} entity
     * @param {SkillName} [skill="attack"]
     * @return {*}  {boolean}
     * @memberof Character
     */
    public canKillInOneShot(entity: Entity, skill: SkillName = "attack"): boolean {
        // Check if it can heal
        if (entity.lifesteal) return false
        if (entity.abilities?.self_healing) return false

        const damage_type = this.G.skills[skill].damage_type ?? this.damage_type

        // Check if it can avoid our shot
        if (entity.avoidance) return false
        if (damage_type == "magical" && entity.reflection) return false
        if (damage_type == "physical" && entity.evasion) return false

        return this.calculateDamageRange(entity, skill)[0] >= entity.hp
    }

    /**
     * Returns true if we can sell items from where we are standing
     *
     * @return {*}  {boolean}
     * @memberof Character
     */
    public canSell(): boolean {
        if (this.map == "bank" || this.map == "bank_b" || this.map == "bank_u") return false // Can't sell in the bank
        if (this.hasItem("computer") || this.hasItem("supercomputer")) return true // We can sell anywhere with a computer

        // Check if we're near an NPC merchant
        for (const npc of (this.G.maps[this.map] as GMap).npcs) {
            const gNPC = this.G.npcs[npc.id]
            if (!gNPC.items) continue // This NPC doesn't do merchant stuff
            if (Tools.distance(this, { map: this.map, x: npc.position[0], y: npc.position[1] }) > Constants.NPC_INTERACTION_DISTANCE) continue // Too far away

            return true
        }

        return false
    }

    /**
     * UNFINISHED. DO NOT USE YET.
     * TODO: Finish
     *
     * @param {number} itemPos
     * @param {number} scrollPos
     * @param {number} [offeringPos]
     * @return {*}  {boolean}
     * @memberof Character
     */
    public canUpgrade(itemPos: number, scrollPos: number, offeringPos?: number): boolean {
        if (this.map == "bank" || this.map == "bank_b" || this.map == "bank_u") return false // Can't upgrade in the bank

        const itemInfo = this.items[itemPos]
        if (!itemInfo) throw new Error(`No item in inventory position '${itemPos}'.`)
        const gItemInfo = this.G.items[itemInfo.name]
        if (!gItemInfo.upgrade) return false // Item is not upgradable
        const scrollInfo = this.items[scrollPos]
        if (!scrollInfo) throw new Error(`No scroll in inventory position '${scrollPos}'.`)
        const offeringInfo = this.items[offeringPos]

        // Distance check
        if (!this.hasItem("computer") && !this.hasItem("supercomputer")
         && Tools.distance(this, { map: "main", x: this.G.maps.main.ref.u_mid[0], y: this.G.maps.main.ref.u_mid[1] }) > Constants.NPC_INTERACTION_DISTANCE) return false

        // Scroll compatibility check

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
        for (const conditionName in this.s) {
            const gCondition = this.G.conditions[conditionName as ConditionName]
            if (gCondition?.blocked) return false // We have a condition that prevents us from using skills
        }
        if (this.isOnCooldown(skill) && !options?.ignoreCooldown) return false // Skill is on cooldown
        if (this.G.skills[skill].hostile && (this.G.maps[this.map] as GMap).safe) return false // Can't use a hostile skill in a safe place
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

    public compound(item1Pos: number, item2Pos: number, item3Pos: number, cscrollPos: number, offeringPos?: number): Promise<boolean> {
        if (!this.ready) return Promise.reject("We aren't ready yet [compound].")
        const item1Info = this.items[item1Pos]
        const item2Info = this.items[item2Pos]
        const item3Info = this.items[item3Pos]
        const cscrollInfo = this.items[cscrollPos]
        if (!item1Info) return Promise.reject(`There is no item in inventory slot ${item1Pos} (item1).`)
        if (!item2Info) return Promise.reject(`There is no item in inventory slot ${item2Pos} (item2).`)
        if (!item3Info) return Promise.reject(`There is no item in inventory slot ${item3Pos} (item3).`)
        if (!cscrollInfo) return Promise.reject(`There is no item in inventory slot ${cscrollPos} (cscroll).`)
        if (offeringPos !== undefined) {
            const offeringInfo = this.items[offeringPos]
            if (!offeringInfo) return Promise.reject(`There is no item in inventory slot ${offeringPos} (offering).`)
        }
        if (item1Info.name != item2Info.name || item1Info.name != item3Info.name) return Promise.reject("You can only combine 3 of the same items.")
        if (item1Info.level != item2Info.level || item1Info.level != item3Info.level) return Promise.reject("You can only combine 3 items of the same level.")

        const compoundComplete = new Promise<boolean>((resolve, reject) => {
            const playerCheck = (data: CharacterData) => {
                if (!data.hitchhikers)
                    return
                for (const [event, datum] of data.hitchhikers) {
                    if (event == "game_response" && datum.response == "compound_fail") {
                        this.socket.off("game_response", gameResponseCheck)
                        this.socket.off("player", playerCheck)
                        resolve(false)
                        return
                    } else if (event == "game_response" && datum.response == "compound_success") {
                        this.socket.off("game_response", gameResponseCheck)
                        this.socket.off("player", playerCheck)
                        resolve(true)
                        return
                    }
                }
            }

            const gameResponseCheck = (data: GameResponseData) => {
                if (typeof data == "object") {
                    if (data.response == "bank_restrictions" && data.place == "compound") {
                        this.socket.off("game_response", gameResponseCheck)
                        this.socket.off("player", playerCheck)
                        reject("You can't compound items in the bank.")
                    }
                } else if (typeof data == "string") {
                    if (data == "compound_no_item") {
                        this.socket.off("game_response", gameResponseCheck)
                        this.socket.off("player", playerCheck)
                        reject()
                    }
                }
            }

            setTimeout(() => {
                this.socket.off("game_response", gameResponseCheck)
                this.socket.off("player", playerCheck)
                reject("compound timeout (60000ms)")
            }, 60000)
            this.socket.on("game_response", gameResponseCheck)
            this.socket.on("player", playerCheck)
        })

        this.socket.emit("compound", {
            "clevel": item1Info.level,
            "items": [item1Pos, item2Pos, item3Pos],
            "offering_num": offeringPos,
            "scroll_num": cscrollPos
        })
        return compoundComplete
    }

    /**
     * Crafts the given item name using items in the character's inventory.
     *
     * @param {ItemName} item
     * @return {*}  {Promise<void>}
     * @memberof Character
     */
    public craft(item: ItemName): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [craft].")
        const gInfo = this.G.craft[item]
        if (!gInfo) return Promise.reject(`Can not find a recipe for ${item}.`)
        if (gInfo.cost > this.gold) return Promise.reject(`We don't have enough gold to craft ${item}.`)

        const itemPositions: [number, number][] = []
        for (let i = 0; i < gInfo.items.length; i++) {
            const requiredQuantity = gInfo.items[i][0]
            const requiredName = gInfo.items[i][1]
            // If the item is compoundable or upgradable, the level needs to be 0
            let fixedItemLevel = gInfo.items[i][2]
            if (fixedItemLevel === undefined) {
                const gInfo = this.G.items[requiredName]
                if (gInfo.upgrade || gInfo.compound) fixedItemLevel = 0
            }

            const searchArgs = {
                level: fixedItemLevel,
                quantityGreaterThan: requiredQuantity > 1 ? requiredQuantity - 1 : undefined,
            }

            const itemPos = this.locateItem(requiredName, this.items, searchArgs)
            if (itemPos == undefined) return Promise.reject(`We don't have ${requiredQuantity} ${requiredName} to craft ${item}.`)

            itemPositions.push([i, itemPos])
        }

        const crafted = new Promise<void>((resolve, reject) => {
            const successCheck = async (data: GameResponseData) => {
                if (typeof data == "object") {
                    if (data.response == "craft" && data.name == item) {
                        this.socket.off("game_response", successCheck)
                        resolve()
                    }
                }
            }

            setTimeout(() => {
                this.socket.off("game_response", successCheck)
                reject(`craft timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
        })

        this.socket.emit("craft", { items: itemPositions })
        return crafted
    }

    // TODO: Add promises
    public depositGold(gold: number): unknown {
        if (!this.ready) return Promise.reject("We aren't ready yet [depositGold].")
        // TODO: Check if you can be in the basement and deposit gold
        if (this.map !== "bank") return Promise.reject("We need to be in 'bank' to deposit gold.")
        if (gold <= 0) return Promise.reject("We can't deposit 0 or less gold")

        if (gold > this.gold) {
            gold = this.gold
            console.warn(`We are only going to deposit ${gold} gold.`)
        }

        this.socket.emit("bank", { amount: gold, operation: "deposit" })
    }

    /**
     * Deposits an item in your bank.
     *
     * @param {number} inventoryPos
     * @param {BankPackName} [bankPack]
     * @param {*} [bankSlot=-1]
     * @return {*}  {unknown}
     * @memberof Character
     */
    public async depositItem(inventoryPos: number, bankPack?: BankPackName, bankSlot = -1): Promise<unknown> {
        if (!this.ready) return Promise.reject("We aren't ready yet [depositItem].")
        if (this.map !== "bank" && this.map !== "bank_b" && this.map !== "bank_u") return Promise.reject(`We're not in the bank (we're in '${this.map}')`)

        // Wait up to 5s to get bank items
        for (let i = 0; i < 20; i++) {
            if (this.bank) break
            await new Promise(resolve => setTimeout(resolve, 250))
        }
        if (!this.bank) return Promise.reject("We don't have bank information yet. Please try again in a bit.")

        const item = this.items[inventoryPos]
        if (!item) return Promise.reject(`There is no item in inventory slot ${inventoryPos}.`)

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
                const pack = this.bank[packName] as ItemData[]
                if (!pack) continue // We don't have access to this pack
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
                        this.socket.off("player", checkDeposit)
                        return reject(`We're not in the bank (we're in '${data.map}')`)
                    }
                } else {
                    const newBankItemCount = this.countItem(item.name, data.user[bankPack])
                    if ((item.q && newBankItemCount == (bankItemCount + item.q))
                        || (!item.q && newBankItemCount == (bankItemCount + 1))) {
                        this.socket.off("player", checkDeposit)
                        return resolve()
                    }
                }
            }

            setTimeout(() => {
                this.socket.off("player", checkDeposit)
                reject(`depositItem timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("player", checkDeposit)
        })

        this.socket.emit("bank", { inv: inventoryPos, operation: "swap", pack: bankPack, str: bankSlot })
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
        if (!this.ready) return Promise.reject("We aren't ready yet [emote].")
        if (!this.emx[emotionName]) return Promise.reject(`We don't have the emotion '${emotionName}'`)

        const emoted = new Promise<void>((resolve, reject) => {
            const failCheck = (data: GameResponseData) => {
                if (typeof data == "string") {
                    if (data == "emotion_cooldown") {
                        this.socket.off("game_response", failCheck)
                        this.socket.off("emotion", successCheck)
                        reject()
                    } else if (data == "emotion_cant") {
                        this.socket.off("game_response", failCheck)
                        this.socket.off("emotion", successCheck)
                        reject()
                    }
                }
            }

            const successCheck = (data: EmotionData) => {
                if (data.name == emotionName && data.player == this.id) {
                    this.socket.off("game_response", failCheck)
                    this.socket.off("emotion", successCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("game_response", failCheck)
                this.socket.off("emotion", successCheck)
                reject(`emote timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("game_response", failCheck)
            this.socket.on("emotion", successCheck)
        })

        this.socket.emit("emotion", { name: emotionName })
        return emoted
    }

    /**
     * Use this function to enter dungeons.
     *
     * See `transport` for traveling through normal doors.
     *
     * @param {MapName} map
     * @param {string} [instance] Instance ID string. If not set, a key will be consumed from your inventory to create a new one.
     * @return {*}  {Promise<void>}
     * @memberof Character
     */
    public async enter(map: MapName, instance?: string): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [emote].")

        let found = false
        let distance = Number.MAX_VALUE
        for (const d of (this.G.maps[this.map] as GMap).doors) {
            if (d[4] !== map) continue
            found = true
            distance = Pathfinder.doorDistance(this, d)
            if (distance > Constants.DOOR_REACH_DISTANCE) continue
            break
        }
        if (!found) return Promise.reject(`There is no door to ${map} from ${this.map}.`)
        if (distance > Constants.DOOR_REACH_DISTANCE) return Promise.reject(`We are too far (${distance}) from the door to ${map}.`)

        const enterComplete = new Promise<void>((resolve, reject) => {
            const enterCheck = (data: NewMapData) => {
                this.socket.off("game_response", failCheck)
                if (data.name == map) resolve()
                else reject(`We are now in ${data.name}, but we should be in ${map}`)
            }

            const failCheck = (data: GameResponseData) => {
                if (typeof data == "string") {
                    if (data == "transport_cant_item") {
                        this.socket.off("new_map", enterCheck)
                        this.socket.off("game_response", failCheck)
                        return Promise.reject(`We don't have the required item to enter ${map}.`)
                    }
                }
            }

            setTimeout(() => {
                this.socket.off("new_map", enterCheck)
                this.socket.off("game_response", failCheck)
                reject(`enter timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.once("new_map", enterCheck)
            this.socket.on("game_response", failCheck)
        })
        this.socket.emit("enter", { name: instance, place: map })
        return enterComplete
    }

    public equip(inventoryPos: number, equipSlot?: SlotType): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [equip].")
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
                        this.socket.off("player", equipCheck)
                        this.socket.off("disappearing_text", cantEquipCheck)
                        resolve()
                    }
                } else {
                    // Look for the item in all of the slots
                    for (const slot in data.slots) {
                        const item = data.slots[slot as SlotType]
                        if (item && item.name == iInfo.name) {
                            this.socket.off("player", equipCheck)
                            this.socket.off("disappearing_text", cantEquipCheck)
                            resolve()
                        }
                    }
                }
            }
            const cantEquipCheck = (data: DisappearingTextData) => {
                if (data.id == this.id && data.message == "CAN'T EQUIP") {
                    this.socket.off("player", equipCheck)
                    this.socket.off("disappearing_text", cantEquipCheck)
                    reject(`Can't equip '${inventoryPos}' (${iInfo.name})`)
                }
            }
            setTimeout(() => {
                this.socket.off("player", equipCheck)
                this.socket.off("disappearing_text", cantEquipCheck)
                reject(`equip timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("player", equipCheck)
            this.socket.on("disappearing_text", cantEquipCheck)
        })

        this.socket.emit("equip", { num: inventoryPos, slot: equipSlot })
        return equipFinished
    }

    public exchange(inventoryPos: number): Promise<number | string> {
        if (!this.ready) return Promise.reject("We aren't ready yet [exchange].")
        if (!this.items[inventoryPos]) return Promise.reject(`No item in inventory slot ${inventoryPos}.`)
        if (this.G.maps[this.map].mount) return Promise.reject("We can't exchange things in the bank.")

        let startedExchange = false
        if (this.q.exchange) startedExchange = true
        const exchangeFinished = new Promise<number>((resolve, reject) => {
            const completeCheck = (data: UpgradeData) => {
                if(data.type == "exchange"){
                    this.socket.off("upgrade", completeCheck)
                    this.socket.off("game_response", bankCheck)
                    this.socket.off("game_response", completeCheck2)
                    return resolve(data.success)
                }
            }
            const completeCheck2 = (data: GameResponseDataObject) => {
                if(['seashell_success'].includes(data.response)){
                    this.socket.off("upgrade", completeCheck)
                    this.socket.off("game_response", bankCheck)
                    this.socket.off("game_response", completeCheck2)
                    return resolve(1)
                }
            }

            const bankCheck = (data: GameResponseData) => {
                if (typeof data == "object" && data.response == "bank_restrictions" && data.place == "upgrade") {
                    this.socket.off("upgrade", completeCheck)
                    this.socket.off("game_response", bankCheck)
                    this.socket.off("game_response", completeCheck2)
                    reject("You can't exchange items in the bank.")
                } else if (typeof data == "string") {
                    if (data == "exchange_notenough") {
                        this.socket.off("upgrade", completeCheck)
                        this.socket.off("game_response", bankCheck)
                        this.socket.off("game_response", completeCheck2)
                        reject("We don't have enough items to exchange.")
                    } else if (data == "exchange_existing") {
                        this.socket.off("upgrade", completeCheck)
                        this.socket.off("game_response", bankCheck)
                        this.socket.off("game_response", completeCheck2)
                        reject("We are already exchanging something.")
                    }
                }
            }
            setTimeout(() => {
                this.socket.off("upgrade", completeCheck)
                this.socket.off("game_response", bankCheck)
                this.socket.off("game_response", completeCheck2)

                reject("exchange timeout (60000ms)")
            }, 60000)
            this.socket.on("game_response", bankCheck)
            this.socket.on("game_response", completeCheck2)
            this.socket.on("upgrade", completeCheck)
        })

        this.socket.emit("exchange", { item_num: inventoryPos, q: this.items[inventoryPos]?.q })
        return exchangeFinished
    }

    public finishMonsterHuntQuest(): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [finishMonsterHuntQuest].")
        if (!this.s.monsterhunt) return Promise.reject("We don't have a monster hunt to turn in.")
        if (this.s.monsterhunt.c > 0) return Promise.reject(`We still have to kill ${this.s.monsterhunt.c} ${this.s.monsterhunt.id}(s).`)

        let close = false
        // Look for a monsterhunter on the current map
        for (const npc of (this.G.maps[this.map] as GMap).npcs) {
            if (npc.id !== "monsterhunter") continue // Not the monsterhunter
            if (Tools.distance(this, { x: npc.position[0], y: npc.position[1] }) > Constants.NPC_INTERACTION_DISTANCE) continue // Too far away
            close = true
            break
        }
        if (!close) return Promise.reject("We are too far away from the Monster Hunter NPC.")

        const questFinished = new Promise<void>((resolve, reject) => {
            const successCheck = (data: CharacterData) => {
                if (!data.s || data.s.monsterhunt == undefined) {
                    this.socket.off("player", successCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("player", successCheck)
                reject(`finishMonsterHuntQuest timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("player", successCheck)
        })
        this.socket.emit("monsterhunt")
        return questFinished
    }

    /**
     * Returns a list of nearby entities, with optional filters
     *
     * @param {GetEntitiesFilters} [filters={}]
     * @return {*}  {Entity[]}
     * @memberof Character
     */
    public getEntities(filters: GetEntitiesFilters = {}): Entity[] {
        const entities: Entity[] = []
        for (const [, entity] of this.entities) {
            if (filters.targetingMe !== undefined) {
                if (filters.targetingMe) {
                    if (entity.target !== this.id) continue
                } else {
                    if (entity.target == this.id) continue
                }
            }
            if (filters.targetingPartyMember !== undefined) {
                const attackingPartyMember = entity.isAttackingPartyMember(this)
                if (filters.targetingPartyMember) {
                    if (!attackingPartyMember) continue
                } else {
                    if (attackingPartyMember) continue
                }
            }
            if (filters.targetingPlayer !== undefined && entity.target !== filters.targetingPlayer) continue
            if (filters.level !== undefined && filters.level !== entity.level) continue
            if (filters.levelGreaterThan !== undefined && filters.levelGreaterThan <= entity.level) continue
            if (filters.levelLessThan !== undefined && filters.levelLessThan >= entity.level) continue
            if (filters.type !== undefined && filters.type !== entity.type) continue
            if (filters.typeList !== undefined && !filters.typeList.includes(entity.type)) continue
            if (filters.withinRange !== undefined && Tools.distance(this, entity) > filters.withinRange) continue
            if (filters.canWalkTo !== undefined) {
                const canWalkTo = Pathfinder.canWalkPath(this, entity)
                if (filters.canWalkTo && !canWalkTo) continue
                if (!filters.canWalkTo && canWalkTo) continue
            }
            if (filters.couldGiveCredit !== undefined) {
                const couldGiveCredit = entity.couldGiveCreditForKill(this)
                if (filters.couldGiveCredit && !couldGiveCredit) continue
                if (!filters.couldGiveCredit && couldGiveCredit) continue
            }
            if (filters.willBurnToDeath !== undefined) {
                const willBurnToDeath = entity.willBurnToDeath()
                if (filters.willBurnToDeath && !willBurnToDeath) continue
                if (!filters.willBurnToDeath && willBurnToDeath) continue
            }
            if (filters.willDieToProjectiles !== undefined) {
                const willDieToProjectiles = entity.willDieToProjectiles(this, this.projectiles, this.players, this.entities)
                if (filters.willDieToProjectiles && !willDieToProjectiles) continue
                if (!filters.willDieToProjectiles && willDieToProjectiles) continue
            }

            entities.push(entity)
        }

        return entities
    }

    /**
     * Returns a nearby entity, with optional filters
     *
     * @param {GetEntityFilters} [filters={}]
     * @return {*}  {Entity}
     * @memberof Character
     */
    public getEntity(filters: GetEntityFilters = {}): Entity {
        const entities = this.getEntities(filters)

        if (filters.returnNearest) {
            let closest: Entity
            let closestDistance = Number.MAX_VALUE
            for (const entity of entities) {
                const distance = Tools.distance(this, entity)
                if (distance < closestDistance) {
                    closest = entity
                    closestDistance = distance
                }
            }
            return closest
        }

        if (entities.length > 0) return entities[0]
    }

    /**
     * Returns the index of the first empty slot in the given inventory
     *
     * @param {*} [items=this.items] The inventory to look in
     * @return {*}  {number} The index of the first empty slot
     * @memberof Character
     */
    public getFirstEmptyInventorySlot(items = this.items): number {
        for (let i = 0; i < items.length; i++) {
            const item = items[i]
            if (!item) return i
        }
        return undefined
    }

    public async getMonsterHuntQuest(): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [getMonsterHuntQuest].")
        if (this.s.monsterhunt && this.s.monsterhunt.c > 0) return Promise.reject(`We can't get a new monsterhunt. We have ${this.s.monsterhunt.ms}ms left to kill ${this.s.monsterhunt.c} ${this.s.monsterhunt.id}(s).`)
        if (this.ctype == "merchant") return Promise.reject("Merchants can't do Monster Hunts.")
        let close = false
        // Look for a monsterhunter on the current map
        for (const npc of (this.G.maps[this.map] as GMap).npcs) {
            if (npc.id !== "monsterhunter") continue // Not the monsterhunter
            if (Tools.distance(this, { x: npc.position[0], y: npc.position[1] }) > Constants.NPC_INTERACTION_DISTANCE) continue // Too far away
            close = true
            break
        }
        if (!close) return Promise.reject("We are too far away from the Monster Hunter NPC.")

        if (this.s.monsterhunt && this.s.monsterhunt.c == 0) {
            console.warn("We are going to finish the current monster quest first.")
            await this.finishMonsterHuntQuest()
        }

        const questGot = new Promise<void>((resolve, reject) => {
            const failCheck = (data: GameResponseData) => {
                if (data == "ecu_get_closer") {
                    this.socket.off("game_response", failCheck)
                    this.socket.off("player", successCheck)
                    reject("Too far away from Monster Hunt NPC.")
                } else if (data == "monsterhunt_merchant") {
                    this.socket.off("game_response", failCheck)
                    this.socket.off("player", successCheck)
                    reject("Merchants can't do Monster Hunts.")
                }
            }
            const successCheck = (data: CharacterData) => {
                if (!data.hitchhikers) return
                for (const hitchhiker of data.hitchhikers) {
                    if (hitchhiker[0] == "game_response" && hitchhiker[1] == "monsterhunt_started") {
                        this.socket.off("game_response", failCheck)
                        this.socket.off("player", successCheck)
                        resolve()
                        return
                    }
                }
            }
            setTimeout(() => {
                this.socket.off("game_response", failCheck)
                this.socket.off("player", successCheck)
                reject(`getMonsterHuntQuest timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("game_response", failCheck)
            this.socket.on("player", successCheck)
        })

        this.socket.emit("monsterhunt")
        return questGot
    }

    /**
     * Returns a list of the players that are online on the server
     *
     * @return {*}  {Promise<PlayersData>}
     * @memberof Character
     */
    public getPlayers(): Promise<PlayersData> {
        if (!this.ready) return Promise.reject("We aren't ready yet [getPlayers].")
        const playersData = new Promise<PlayersData>((resolve, reject) => {
            const dataCheck = (data: PlayersData) => {
                resolve(data)
            }

            setTimeout(() => {
                this.socket.off("players", dataCheck)
                reject(`getPlayers timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.once("players", dataCheck)
        })
        this.socket.emit("players")
        return playersData
    }

    public getPontyItems(): Promise<ItemDataTrade[]> {
        if (!this.ready) return Promise.reject("We aren't ready yet [getPontyItems].")
        const pontyItems = new Promise<ItemDataTrade[]>((resolve, reject) => {
            const distanceCheck = (data: GameResponseData) => {
                if (data == "buy_get_closer") {
                    this.socket.off("game_response", distanceCheck)
                    this.socket.off("secondhands", secondhandsItems)
                    reject("Too far away from secondhands NPC.")
                }
            }

            const secondhandsItems = (data: ItemDataTrade[]) => {
                this.socket.off("game_response", distanceCheck)
                this.socket.off("secondhands", secondhandsItems)
                resolve(data)
            }

            setTimeout(() => {
                this.socket.off("game_response", distanceCheck)
                this.socket.off("secondhands", secondhandsItems)
                reject("getPontyItems timeout (5000ms)")
            }, 5000)
            this.socket.on("secondhands", secondhandsItems)
            this.socket.on("game_response", distanceCheck)
        })

        this.socket.emit("secondhands")
        return pontyItems
    }

    /**
     * Retrieves the entity our character is currently targeting.
     *
     * @return {*}  {Entity}
     * @memberof Character
     */
    public getTargetEntity(): Entity {
        return this.entities.get(this.target)
    }

    /**
     * Retrieves tracker data
     *
     * @return {*}  {Promise<TrackerData>}
     * @memberof Character
     */
    public getTrackerData(): Promise<TrackerData> {
        if (!this.ready) return Promise.reject("We aren't ready yet [getTrackerData].")
        if (!this.hasItem("tracker")) return Promise.reject("We need a tracker to obtain tracker data.")

        const gotTrackerData = new Promise<TrackerData>((resolve, reject) => {
            const gotCheck = (data: TrackerData) => {
                resolve(data)
            }

            setTimeout(() => {
                this.socket.off("tracker", gotCheck)
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
     * Removes a party member
     *
     * @param {string} toKick
     * @return {*}  {Promise<void>}
     * @memberof Character
     */
    public kickPartyMember(toKick: string): Promise<void> {
        if (!this.party) return Promise.resolve() // We're not in a party, so consider whoever they are "kicked"...
        if (!this.partyData.list.includes(toKick)) return Promise.resolve() // They aren't in our party, so consider whoever they are "kicked"...
        if (toKick == this.id) return this.leaveParty() // If it's us, leave the party instead, don't kick ourselves.
        if (this.partyData.list.indexOf(this.id) > this.partyData.list.indexOf(toKick)) return Promise.reject(`We can't kick ${toKick}, they're higher on the party list.`)

        const kicked = new Promise<void>((resolve, reject) => {
            const kickedCheck = (data: PartyData) => {
                if (!data.list || !data.list.includes(toKick)) {
                    // They're no longer in our party list
                    this.socket.off("party_update", kickedCheck)
                    resolve()
                }
            }
            setTimeout(() => {
                this.socket.off("party_update", kickedCheck)
                reject(`kickPartyMember timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("party_update", kickedCheck)
        })
        this.socket.emit("party", { event: "kick", name: toKick })
        return kicked
    }

    /**
     * For use on 'cyberland' and 'jail' to leave the map. You will be transported to the spawn on "main".
     *
     * @return {*}  {Promise<void>}
     * @memberof Character
     */
    public leaveMap(): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [leaveMap].")
        const leaveComplete = new Promise<void>((resolve, reject) => {
            const leaveCheck = (data: NewMapData) => {
                if (data.name == "main") {
                    this.socket.off("new_map", leaveCheck)
                    this.socket.off("game_response", failCheck)
                    resolve()
                } else {
                    this.socket.off("new_map", leaveCheck)
                    this.socket.off("game_response", failCheck)
                    reject(`We are now in ${data.name}, but we should be in main`)
                }
            }

            const failCheck = (data: GameResponseData) => {
                if (typeof data == "string") {
                    if (data == "cant_escape") {
                        this.socket.off("new_map", leaveCheck)
                        this.socket.off("game_response", failCheck)
                        reject(`Can't escape from current map ${this.map}`)
                    }
                }
            }

            setTimeout(() => {
                this.socket.off("new_map", leaveCheck)
                this.socket.off("game_response", failCheck)
                reject(`leaveMap timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.once("new_map", leaveCheck)
            this.socket.on("game_response", failCheck)
        })

        this.socket.emit("leave")
        return leaveComplete
    }

    // TODO: Add checks and promises
    public leaveParty(): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [leaveParty].")
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
     * @return {*}  {Promise<IPosition>}
     * @memberof Character
     */
    public async move(x: number, y: number, options?: { disableSafetyCheck: boolean }): Promise<IPosition> {
        if (!this.ready) return Promise.reject("We aren't ready yet [move].")

        let to: IPosition = { map: this.map, x: x, y: y }
        if (!options?.disableSafetyCheck) {
            to = Pathfinder.getSafeWalkTo(
                { map: this.map, x: this.x, y: this.y },
                { map: this.map, x, y })
            if (to.x !== x || to.y !== y) {
                console.warn(`move: We can't move to {x: ${x}, y: ${y}} safely. We will move to {x: ${to.x}, y: ${to.y}}.`)
            }
        }

        // Check if we're already there
        if (this.x == to.x && this.y == to.y) return Promise.resolve({ map: this.map, x: this.x, y: this.y })
        const startTime = Date.now()
        const moveFinished = new Promise<IPosition>((resolve, reject) => {
            let timeToFinishMove = 1 + Tools.distance(this, { x: to.x, y: to.y }) / this.speed

            const checkPlayer = async (data: CharacterData) => {
                if (!data.moving || data.going_x !== to.x || data.going_y !== to.y) {
                    // Skip check if we get data less than our ping, because it's probably not correct.
                    if (Date.now() - startTime < Math.min(...this.pings)) return

                    // We *might* not be moving in the right direction. Let's request new data and check.
                    try {
                        const newData = await this.requestPlayerData()
                        if (!newData.moving || newData.going_x !== to.x || newData.going_y !== to.y) {
                            clearTimeout(timeout)
                            this.socket.off("player", checkPlayer)
                            reject(`move to ${to.x}, ${to.y} failed`)
                        }
                    } catch (e) {
                        console.error(e)
                    }
                } else {
                    // We're still moving in the right direction
                    timeToFinishMove = 1 + Tools.distance(this, { x: data.going_x, y: data.going_y }) / data.speed
                    clearTimeout(timeout)
                    timeout = setTimeout(checkPosition, timeToFinishMove)
                }
            }

            const checkPosition = () => {
                // Force an update of the character position
                this.updatePositions()

                if (this.x == to.x && this.y == to.y) {
                    // We are here!
                    this.socket.off("player", checkPlayer)
                    resolve({ map: this.map, x: x, y: y })
                } else if (this.moving && this.going_x == to.x && this.going_y == to.y) {
                    // We are still moving in the right direction
                    timeToFinishMove = 1 + Tools.distance(this, { x: to.x, y: to.y }) / this.speed
                    timeout = setTimeout(checkPosition, timeToFinishMove)
                } else {
                    // We're not moving in the right direction
                    this.socket.off("player", checkPlayer)
                    reject(`move to (${to.x}, ${to.y}) failed (we're currently going from (${this.x}, ${this.y}) to (${this.going_x}, ${this.going_y}))`)
                }
            }
            let timeout = setTimeout(checkPosition, timeToFinishMove)

            this.socket.on("player", checkPlayer)
        })

        if (!this.moving || this.going_x !== to.x || this.going_y !== to.y) {
            // Only send a move if it's to a different location than we're already going
            this.socket.emit("move", {
                going_x: to.x,
                going_y: to.y,
                m: this.m,
                x: this.x,
                y: this.y,
            })
            this.updatePositions()
            this.going_x = to.x
            this.going_y = to.y
            this.moving = true
            this.move_num += 1
        }

        return moveFinished
    }

    public openChest(id: string): Promise<ChestOpenedData> {
        if (!this.ready) return Promise.reject("We aren't ready yet [openChest].")
        const chestOpened = new Promise<ChestOpenedData>((resolve, reject) => {
            const openCheck = (data: ChestOpenedData) => {
                if (data.id == id) {
                    this.socket.off("chest_opened", openCheck)
                    resolve(data)
                }
            }
            setTimeout(() => {
                this.socket.off("chest_opened", openCheck)
                reject(`openChest timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("chest_opened", openCheck)
        })
        this.socket.emit("open_chest", { id: id })
        return chestOpened
    }

    public regenHP(): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [regenHP].")
        const regenReceived = new Promise<void>((resolve, reject) => {
            const regenCheck = (data: EvalData) => {
                if (data.code && data.code.includes("pot_timeout")) {
                    this.socket.off("eval", regenCheck)
                    this.socket.off("disappearing_text", failCheck)
                    resolve()
                }
            }

            const failCheck = (data: DisappearingTextData) => {
                if (data.id == this.id && data.message == "NOT READY") {
                    this.socket.off("eval", regenCheck)
                    this.socket.off("disappearing_text", failCheck)
                    reject("regenHP is on cooldown")
                }
            }

            setTimeout(() => {
                this.socket.off("eval", regenCheck)
                this.socket.off("disappearing_text", failCheck)
                reject(`regenHP timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)

            this.socket.on("eval", regenCheck)
            this.socket.on("disappearing_text", failCheck)
        })

        this.socket.emit("use", { item: "hp" })
        return regenReceived
    }

    public regenMP(): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [regenMP].")
        const regenReceived = new Promise<void>((resolve, reject) => {
            const regenCheck = (data: EvalData) => {
                if (data.code && data.code.includes("pot_timeout")) {
                    this.socket.off("eval", regenCheck)
                    this.socket.off("disappearing_text", failCheck)
                    resolve()
                }
            }

            const failCheck = (data: DisappearingTextData) => {
                if (data.id == this.id && data.message == "NOT READY") {
                    this.socket.off("eval", regenCheck)
                    this.socket.off("disappearing_text", failCheck)
                    reject("regenMP is on cooldown")
                }
            }

            setTimeout(() => {
                this.socket.off("eval", regenCheck)
                this.socket.off("disappearing_text", failCheck)
                reject(`regenMP timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)

            this.socket.on("eval", regenCheck)
            this.socket.on("disappearing_text", failCheck)
        })

        this.socket.emit("use", { item: "mp" })
        return regenReceived
    }

    /**
     * If you are dead, you can call this function to respawn.
     *
     * @param {boolean} [safe] If set, you will spawn in Wizard's cave instead of near the goos.
     * @return {*}  {Promise<IPosition>}
     * @memberof Character
     */
    public respawn(safe?: boolean): Promise<IPosition> {
        if (!this.ready) return Promise.reject("We aren't ready yet [respawn].")
        const respawned = new Promise<IPosition>((resolve, reject) => {
            const respawnCheck = (data: NewMapData) => {
                if (data.effect == 1) {
                    this.socket.off("new_map", respawnCheck)
                    this.socket.off("game_log", failCheck)
                    resolve({ map: data.name, x: data.x, y: data.y })
                }
            }
            const failCheck = (data: GameLogData) => {
                if (data == "Can't respawn yet.") {
                    this.socket.off("new_map", respawnCheck)
                    this.socket.off("game_log", failCheck)
                    reject(data)
                }
            }
            setTimeout(() => {
                this.socket.off("new_map", respawnCheck)
                this.socket.off("game_log", failCheck)
                reject(`respawn timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("new_map", respawnCheck)
            this.socket.on("game_log", failCheck)
        })
        this.socket.emit("respawn", { safe: safe })
        return respawned
    }

    // TODO: Improve with item check
    public scare(): Promise<string[]> {
        if (!this.ready) return Promise.reject("We aren't ready yet [scare].")
        const scared = new Promise<string[]>((resolve, reject) => {
            let ids: string[]
            const idsCheck = (data: UIData) => {
                if (data.type == "scare") {
                    ids = data.ids
                    this.socket.off("ui", idsCheck)
                }
            }

            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]scare['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("ui", idsCheck)
                    this.socket.off("eval", cooldownCheck)
                    resolve(ids)
                }
            }

            setTimeout(() => {
                this.socket.off("ui", idsCheck)
                this.socket.off("eval", cooldownCheck)
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
        if (!this.ready) return Promise.reject("We aren't ready yet [sell].")
        if (this.map == "bank" || this.map == "bank_b" || this.map == "bank_u") return Promise.reject("We can't sell items in the bank.")
        this.socket.emit("sell", { num: itemPos, quantity: quantity })
    }

    public async sellToMerchant(id: string, slot: TradeSlotType, rid: string, q: number): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [sellToMerchant].")

        // TODO: Add a check that we have the item

        const sold = new Promise<void>((resolve, reject) => {
            const soldCheck = (data: UIData) => {
                if (data.type == "+$$" && data.seller == this.id && data.buyer == id) {
                    this.socket.off("game_response", failCheck)
                    this.socket.off("ui", soldCheck)
                    resolve()
                }
            }

            const failCheck = (data: GameResponseData) => {
                if (typeof (data) == "string") {
                    if (data == "trade_bspace") {
                        this.socket.off("game_response", failCheck)
                        this.socket.off("ui", soldCheck)
                        reject(`${id} doesn't have enough space, so we can't sell items.`)
                    }
                }
            }
            // TODO: Add a check that the merchant we're selling to isn't full

            setTimeout(() => {
                this.socket.off("game_response", failCheck)
                this.socket.off("ui", soldCheck)
                reject(`sellToMerchant timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("ui", soldCheck)
            this.socket.on("game_response", failCheck)
        })

        this.socket.emit("trade_sell", { id: id, q: q, rid: rid, slot: slot })
        return sold
    }

    public sendCM(to: string[], message: unknown): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [sendCM].")
        this.socket.emit("cm", { message: JSON.stringify(message), to: to })
    }

    /**
     * Sends a PM to another character.
     * NOTE: This function's promise will only resolve after 5 seconds due to game limitations.
     *       Use caution when awaiting the promises!
     *
     * @param to The character ID to send a PM to
     * @param message The message
     * @returns true if we are pretty sure the PM was sent
     */
    public sendPM(to: string, message: string): Promise<boolean> {
        if (!this.ready) return Promise.reject("We aren't ready yet [sendPM].")

        const sent = new Promise<boolean>((resolve, reject) => {
            let isReceived = false
            const sentCheck = (data: PMData) => {
                if (data.message == message && data.owner == this.id && data.to == to) {
                    // We still may receive a failed response after this, don't resolve yet
                    isReceived = true
                }
                if (data.message == "(FAILED)" && data.owner == this.id && data.to == to) {
                    this.socket.off("pm", sentCheck)
                    return reject(`Failed sending a PM to ${to}.`)
                }
            }
            setTimeout(() => {
                this.socket.off("pm", sentCheck)
                return isReceived ? resolve(true) : reject("send timeout (5000ms)")
            }, 5000)

            this.socket.on("pm", sentCheck)
        })

        this.socket.emit("say", { message: message, name: to })
        return sent
    }

    /**
     * Sends a message to the server chat
     * @param message The message to send
     * @returns
     */
    public say(message: string): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [say].")

        const sent = new Promise<void>((resolve, reject) => {
            const sentCheck = (data: ChatLogData) => {
                if (data.message == message && data.owner == this.id) {
                    this.socket.off("chat_log", sentCheck)
                    this.socket.off("game_error", failCheck)
                    resolve()
                }
            }
            const failCheck = (data: string | { message: string; }) => {
                if (data == "You can't chat this fast.") {
                    this.socket.off("chat_log", sentCheck)
                    this.socket.off("game_error", failCheck)
                    reject("You can't chat this fast.")
                }
            }
            setTimeout(() => {
                this.socket.off("chat_log", sentCheck)
                this.socket.off("game_error", failCheck)
                reject(`say timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)

            this.socket.on("chat_log", sentCheck)
            this.socket.on("game_error", failCheck)
        })

        this.socket.emit("say", { message: message })
        return sent
    }

    public sendFriendRequest(id: string): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [sendFriendRequest].")

        const requestSent = new Promise<void>((resolve, reject) => {
            const check = (data: GameResponseData) => {
                if (typeof data == "string") {
                    if (data == "friend_already" || data == "friend_rsent") {
                        // We are already friends, or the request has been sent
                        this.socket.off("game_response", check)
                        resolve()
                    } else if (data == "friend_rleft") {
                        // We couldn't send the friend request
                        this.socket.off("game_response", check)
                        reject(`${id} is not online on the same server.`)
                    }
                }
            }
            setTimeout(() => {
                this.socket.off("game_response", check)
                reject(`sendFriendRequest timeout(${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("game_response", check)
        })
        this.socket.emit("friend", { event: "request", name: id })
        return requestSent
    }

    public async sendGold(to: string, amount: number): Promise<number> {
        if (!this.ready) return Promise.reject("We aren't ready yet [sendGold].")
        if (this.gold == 0) return Promise.reject("We have no gold to send.")
        if (!this.players.has(to)) return Promise.reject(`We can't see ${to} nearby to send gold.`)
        if (Tools.distance(this, this.players.get(to)) > Constants.NPC_INTERACTION_DISTANCE) return Promise.reject(`We are too far away from ${to} to send gold.`)

        const goldSent: Promise<number> = new Promise<number>((resolve, reject) => {
            const sentCheck = (data: GameResponseData) => {
                if (data == "trade_get_closer") {
                    this.socket.off("game_response", sentCheck)
                    reject(`We are too far away from ${to} to send gold.`)
                } else if (typeof data == "object" && data.response == "gold_sent" && data.name == to) {
                    if (data.gold !== amount)
                        console.warn(`We wanted to send ${to} ${amount} gold, but we sent ${data.gold}.`)
                    this.socket.off("game_response", sentCheck)
                    resolve(data.gold)
                }
            }

            setTimeout(() => {
                this.socket.off("game_response", sentCheck)
                reject(`sendGold timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("game_response", sentCheck)
        })
        this.socket.emit("send", { gold: amount, name: to })
        return goldSent
    }

    public sendItem(to: string, inventoryPos: number, quantity = 1): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [sendItem].")
        if (!this.players.has(to)) return Promise.reject(`${to} is not nearby.`)
        if (!this.items[inventoryPos]) return Promise.reject(`No item in inventory slot ${inventoryPos}.`)
        if (this.items[inventoryPos]?.q < quantity) return Promise.reject(`We only have a quantity of ${this.items[inventoryPos].q}, not ${quantity}.`)

        const item = this.items[inventoryPos]

        const itemSent = new Promise<void>((resolve, reject) => {
            const sentCheck = (data: GameResponseData) => {
                if (data == "trade_get_closer") {
                    this.socket.off("game_response", sentCheck)
                    reject(`sendItem failed, ${to} is too far away`)
                } else if (data == "send_no_space") {
                    this.socket.off("game_response", sentCheck)
                    reject(`sendItem failed, ${to} has no inventory space`)
                } else if (typeof data == "object" && data.response == "item_sent" && data.name == to && data.item == item.name && data.q == quantity) {
                    this.socket.off("game_response", sentCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("game_response", sentCheck)
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
    public sendPartyInvite(id: string): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [sendPartyInvite].")
        const invited = new Promise<void>((resolve, reject) => {
            const sentCheck = (data: string) => {
                if (data == `Invited ${id} to party`) {
                    this.socket.off("game_log", sentCheck)
                    resolve()
                }
            }
            setTimeout(() => {
                this.socket.off("game_log", sentCheck)
                reject(`sendPartyInvite timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("game_log", sentCheck)
        })

        this.socket.emit("party", { event: "invite", name: id })
        return invited
    }

    /**
     * Requests to join another character's party.
     * @param id The character ID to request a party invite from.
     */
    // TODO: See what socket events happen, and see if we can see if the server picked up our request
    public sendPartyRequest(id: string): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [sendPartyRequest].")
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
    public shiftBooster(booster: number, to: "goldbooster" | "luckbooster" | "xpbooster"): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [shiftBooster].")
        const itemInfo = this.items[booster]
        if (!itemInfo) return Promise.reject(`Inventory Slot ${booster} is empty.`)
        if (!["goldbooster", "luckbooster", "xpbooster"].includes(itemInfo.name)) return Promise.reject(`The given item is not a booster (it's a '${itemInfo.name}')`)

        this.socket.emit("booster", { action: "shift", num: booster, to: to })
    }

    protected lastSmartMove: number = Date.now()
    public smartMoving: IPosition & {map: MapName} = undefined
    /**
     * Used to move long distances strategically, i.e. avoiding walking through walls.
     * You can use this function to move across maps.
     *
     * @param {(IPosition | ItemName | MapName | MonsterName | NPCName)} to
     * @param {PathfinderOptions} [options={
     *         avoidTownWarps: false,
     *         getWithin: 0,
     *         useBlink: false
     *     }]
     * @return {*}  {Promise<IPosition>}
     * @memberof Character
     */
    public async smartMove(to: IPosition | ItemName | MapName | MonsterName | NPCName, options?: PathfinderOptions): Promise<IPosition> {
        if (!this.ready) return Promise.reject("We aren't ready yet [smartMove].")

        if (options == undefined) options = {}
        if (options.costs == undefined) {
            options.costs = {
                town: this.speed * (4 + (Math.min(...this.pings, 1000) / 500)), // Set it to 4s of movement, because it takes 3s to channel + it could be cancelled.
                transport: this.speed * (Math.min(...this.pings, 1000) / 500) // Based on how long it takes to confirm with the server
            }
        }

        let fixedTo: IPosition & {map: MapName}
        let path: LinkData[]
        if (typeof to == "string") {
            // Check if our destination is a map name
            const gMap: GMap = this.G.maps[to]
            if (gMap) {
                // Set `to` to the `town` spawn on the map
                const mainSpawn = gMap.spawns[0]
                fixedTo = { map: to as MapName, x: mainSpawn[0], y: mainSpawn[1] }
            }

            // Check if our destination is a monster type
            if (!fixedTo) {
                const gMonster = this.G.monsters[to as Exclude<MonsterName, "terracota">]
                if (gMonster) {
                    // Set `to` to the closest spawn for these monsters
                    const locations = this.locateMonster(to as MonsterName)
                    let closestDistance: number = Number.MAX_VALUE
                    for (const location of locations) {
                        const potentialPath = await Pathfinder.getPath(this, location as IPosition & {map: MapName}, options)
                        const distance = Pathfinder.computePathCost(potentialPath)
                        if (distance < closestDistance) {
                            path = potentialPath
                            fixedTo = path[path.length - 1]
                            closestDistance = distance
                        }
                    }
                }
            }

            // Check if our destination is an NPC role
            if (!fixedTo) {
                const locations = this.locateNPC(to as NPCName)
                // Set `to` to the closest NPC
                let closestDistance: number = Number.MAX_VALUE
                for (const location of locations) {
                    const potentialPath = await Pathfinder.getPath(this, location as IPosition & {map: MapName}, options)
                    const distance = Pathfinder.computePathCost(potentialPath)
                    if (distance < closestDistance) {
                        path = potentialPath
                        fixedTo = path[path.length - 1]
                        closestDistance = distance
                    }
                }
            }

            // Check if our destination is an ItemName. If it is, go to the NPC that sells that item.
            if (!fixedTo) {
                const gItem = this.G.items[to as ItemName]
                if (gItem) {
                    for (const map in this.G.maps) {
                        if ((this.G.maps[map as MapName] as GMap).ignore) continue
                        for (const npc of (this.G.maps[map as MapName] as GMap).npcs) {
                            if (this.G.npcs[npc.id].items === undefined) continue
                            for (const i of this.G.npcs[npc.id].items) {
                                if (i == to as ItemName) {
                                    // We found the NPC that sells the item
                                    // We're going to run smartMove again to the NPC
                                    return this.smartMove(npc.id, options)
                                }
                            }
                        }
                    }
                }
            }

            if (!fixedTo) return Promise.reject(`Could not find a suitable destination for '${to}'`)
        } else if (to.x !== undefined && to.y !== undefined) {
            fixedTo = { map: to.map || this.map, x: to.x, y: to.y }
        } else {
            console.debug(to)
            return Promise.reject("'to' is unsuitable for smartMove. We need a 'map', an 'x', and a 'y'.")
        }

        // Check if we're already close enough
        const distance = Tools.distance(this, fixedTo)
        if (distance == 0) return Promise.resolve(fixedTo)
        if (options?.getWithin >= distance) return Promise.resolve({ map: this.map, x: this.x, y: this.y })

        // If we don't have the path yet, get it
        this.smartMoving = fixedTo
        try {
            if (!path) path = await Pathfinder.getPath(this, fixedTo, options)
        } catch (e) {
            this.smartMoving = undefined
            throw Error(e)
        }

        const started = Date.now()
        this.lastSmartMove = started
        let numAttempts = 0
        for (let i = 0; i < path.length; i++) {
            let currentMove = path[i]

            if (started < this.lastSmartMove) {
                if (typeof to == "string")
                    return Promise.reject(`smartMove to ${to} cancelled (new smartMove started)`)
                else
                    return Promise.reject(`smartMove to ${to.map}:${to.x},${to.y} cancelled (new smartMove started)`)
            }

            if (options?.getWithin >= Tools.distance(this, fixedTo)) {
                break // We're already close enough!
            }

            // Check if we can walk to a spot close to the goal if that's OK
            if (currentMove.type == "move" && this.map == fixedTo.map && options?.getWithin > 0) {
                const angle = Math.atan2(this.y - fixedTo.y, this.x - fixedTo.x)
                const potentialMove: LinkData = {
                    map: this.map,
                    type: "move",
                    x: fixedTo.x + Math.cos(angle) * options.getWithin,
                    y: fixedTo.y + Math.sin(angle) * options.getWithin
                }
                if (Pathfinder.canWalkPath(this, potentialMove)) {
                    i = path.length
                    currentMove = potentialMove
                }
            }

            // Shortcut check -- check if we can move to the next node
            if (currentMove.type == "move") {
                for (let j = i + 1; j < path.length; j++) {
                    const potentialMove = path[j]
                    if (potentialMove.map !== currentMove.map) break
                    if (potentialMove.type == "town") break

                    if (potentialMove.type == "move" && Pathfinder.canWalkPath(this, potentialMove)) {
                        i = j
                        currentMove = potentialMove
                    }
                }
            }

            // Blink check -- blink to the furthest node we can on the same map
            if (options?.useBlink && this.canUse("blink")) {
                let blinked = false
                for (let j = path.length - 1; j > i; j--) {
                    const potentialMove = path[j]

                    // Get closest blinkable spot near the potential move
                    for (const [dX, dY] of [[0, 0], [-10, 0], [10, 0], [0, -10], [0, 10], [-10, -10], [-10, 10], [10, -10], [10, 10]]) {
                        // Check if we can blink there
                        const roundedX = Math.round((potentialMove.x + dX) / 10) * 10
                        const roundedY = Math.round((potentialMove.y + dY) / 10) * 10
                        if (!Pathfinder.canStand({ map: potentialMove.map, x: roundedX, y: roundedY })) continue

                        // We found a spot we can blink to
                        potentialMove.x = roundedX
                        potentialMove.y = roundedY
                        break
                    }

                    if (potentialMove.map == this.map) {
                        if (Tools.distance(currentMove, potentialMove) < (this.speed * 2)) break // We're close, don't waste a blink
                        try {
                            await (this as unknown as Mage).blink(potentialMove.x, potentialMove.y)
                        } catch (e) {
                            console.log(`Error blinking while smartMoving: ${e}, attempting 1 more time`)
                            try {
                                await new Promise(resolve => setTimeout(resolve, Constants.TIMEOUT))
                                await (this as unknown as Mage).blink(potentialMove.x, potentialMove.y)
                            } catch (e2) {
                                console.error(`Failed blinking while smartMoving: ${e2}`)
                                break
                            }
                        }
                        this.stopWarpToTown()?.catch(() => { /* Suppress errors */ })
                        i = j
                        blinked = true
                        break
                    }
                }
                if (blinked) continue
            }

            // Town check -- Preemptively start the town warp
            for (let j = i + 1; j < path.length; j++) {
                const futureMove = path[j]
                if (currentMove.map !== futureMove.map) break
                if (futureMove.type == "town") {
                    this.warpToTown()?.catch((e) => { console.error(e) })
                    break
                }
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
            //         time += Math.min(...this.pings, 1000)
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
                if (currentMove.type == "enter") {
                    if (!fixedTo.in && !this.hasItem(currentMove.key)) return Promise.reject(`We need '${currentMove.key}' to enter '${currentMove.map}'.`)
                    await this.enter(currentMove.map, fixedTo.in)
                } else if (currentMove.type == "leave") {
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
                numAttempts = 0
            } catch (e) {
                console.error(e)
                numAttempts++
                if (numAttempts >= 3) {
                    this.smartMoving = undefined
                    return Promise.reject("We are having some trouble smartMoving...")
                }
                await this.requestPlayerData().catch((e) => { console.error(e) })
                i--
                await new Promise(resolve => setTimeout(resolve, Constants.TIMEOUT))

            }
        }

        this.smartMoving = undefined
        this.stopWarpToTown()?.catch(() => { /* Suppress warnings */ })
        return { map: this.map, x: this.x, y: this.y }
    }

    /**
     * Starts "Konami" mode.
     *
     * In Konami mode, you can only attack the monster it specifies.
     *
     * You have a (very low) chance to get a special item in this mode.
     *
     * To exit Konami mode, you need to disconnect and reconnect
     *
     * @return {*}  {Promise<MonsterName>} The type of monster you need to target
     * @memberof Character
     */
    public async startKonami(): Promise<MonsterName> {
        const started = new Promise<MonsterName>((resolve, reject) => {
            const successCheck = (data: GameResponseData) => {
                if (typeof data !== "object") return
                if (data.response !== "target_lock") return
                this.socket.off("game_response", successCheck)
                resolve(data.monster)
            }
            setTimeout(() => {
                this.socket.off("game_response", successCheck)
                reject("startKonami timeout (5000ms)")
            }, 5000)
            this.socket.on("game_response", successCheck)
        })

        this.socket.emit("move", { "key": "up" })
        this.socket.emit("move", { "key": "up" })
        this.socket.emit("move", { "key": "down" })
        this.socket.emit("move", { "key": "down" })
        this.socket.emit("move", { "key": "left" })
        this.socket.emit("move", { "key": "right" })
        this.socket.emit("move", { "key": "left" })
        this.socket.emit("move", { "key": "right" })
        this.socket.emit("interaction", { "key": "B" })
        this.socket.emit("interaction", { "key": "A" })
        this.socket.emit("interaction", { "key": "enter" })

        return started
    }

    public async stopSmartMove(): Promise<IPosition> {
        if (!this.ready) return Promise.reject("We aren't ready yet [stopSmartMove].")
        this.smartMoving = undefined
        this.lastSmartMove = Date.now()
        if (this?.c?.town) {
            this.stopWarpToTown()
        }
        return this.move(this.x, this.y)
    }

    // TODO: Add promises
    public stopWarpToTown(): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [stopWarpToTown].")
        // TODO: Check if we are warping to town, return reject promise if we are

        this.socket.emit("stop", { action: "town" })
    }

    /**
     * Swaps two items in your inventory
     *
     * @param {number} itemPosA
     * @param {number} itemPosB
     * @return {*}  {Promise<void>}
     * @memberof Character
     */
    public swapItems(itemPosA: number, itemPosB: number): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [swapItems].")
        if (itemPosA == itemPosB) return Promise.resolve() // They're the same position

        const itemDataA = this.items[itemPosA]
        const itemDataB = this.items[itemPosB]

        const itemsSwapped = new Promise<void>((resolve, reject) => {
            const successCheck = (data: CharacterData) => {
                const checkItemDataA = data.items[itemPosA]
                const checkItemDataB = data.items[itemPosB]

                if (isDeepStrictEqual(checkItemDataB, itemDataA)
                && isDeepStrictEqual(checkItemDataA, itemDataB)) {
                    this.socket.off("playerData", successCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("playerData", successCheck)
                reject("swapItems timeout (1000ms)")
            }, 1000)
            this.socket.on("playerData", successCheck)
        })

        this.socket.emit("imove", { a: itemPosA, b: itemPosB })
        return itemsSwapped
    }

    public takeMailItem(mailID: string): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [takeMailItem].")

        const itemReceived = new Promise<void>((resolve, reject) => {
            const successCheck = (data: GameResponseData) => {
                if (typeof data == "object") {
                    if (data.response == "mail_item_taken") {
                        this.socket.off("game_response", successCheck)
                        resolve()
                    }
                }
            }

            setTimeout(() => {
                this.socket.off("game_response", successCheck)
                reject("takeMailItem timeout (5000ms)")
            }, 5000)
            this.socket.on("game_response", successCheck)
        })

        this.socket.emit("mail_take_item", { id: mailID })
        return itemReceived
    }

    public throwSnowball(target: string, snowball = this.locateItem("snowball")): Promise<string> {
        if (!this.ready) return Promise.reject("We aren't ready yet [throwSnowball].")
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
                    this.socket.off("action", attackCheck)
                    this.socket.off("eval", cooldownCheck)
                    resolve(projectile)
                }
            }

            const failCheck = (data: GameResponseData) => {
                if (typeof data == "object") {
                    if (data.response == "attack_failed") {
                        this.socket.off("action", attackCheck)
                        this.socket.off("eval", cooldownCheck)
                        reject("throwsnowball failed")
                    }
                }
            }

            setTimeout(() => {
                this.socket.off("action", attackCheck)
                this.socket.off("eval", cooldownCheck)
                reject(`throwsnowball timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("action", attackCheck)
            this.socket.on("eval", cooldownCheck)
            this.socket.on("game_response", failCheck)
        })

        this.socket.emit("skill", { id: target, name: "snowball", num: snowball })
        return throwStarted
    }

    /**
     * Use this function to travel through normal doors.
     *
     * See `enter` for entering dungeons.
     *
     * @param {MapName} map The map to move to
     * @param {number} spawn The spawn to move to for the given map
     * @return {*}  {Promise<void>}
     * @memberof Character
     */
    public transport(map: MapName, spawn: number): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [transport].")
        const transportComplete = new Promise<void>((resolve, reject) => {
            const transportCheck = (data: NewMapData) => {
                this.socket.off("game_response", failCheck)
                if (data.name == map) resolve()
                else reject(`We are now in ${data.name}, but we should be in ${map}`)
            }

            const failCheck = (data: GameResponseData) => {
                if (typeof data == "object") {
                    if (data.response == "bank_opx" && data.reason == "mounted") {
                        this.socket.off("game_response", failCheck)
                        this.socket.off("new_map", transportCheck)
                        reject(`${data.name} is currently in the bank, we can't enter.`)
                    }
                } else if (typeof data == "string") {
                    if (data == "cant_enter") {
                        this.socket.off("game_response", failCheck)
                        this.socket.off("new_map", transportCheck)
                        reject(`The door to spawn ${spawn} on ${map} requires a key. Use 'enter' instead of 'transport'.`)
                    } else if (data == "transport_cant_locked") {
                        this.socket.off("game_response", failCheck)
                        this.socket.off("new_map", transportCheck)
                        reject(`We haven't unlocked the door to spawn ${spawn} on ${map}.`)
                    } else if (data == "transport_cant_reach") {
                        this.socket.off("game_response", failCheck)
                        this.socket.off("new_map", transportCheck)
                        reject(`We are too far away from the door to spawn ${spawn} on ${map}.`)
                    }
                }
            }

            setTimeout(() => {
                this.socket.off("game_response", failCheck)
                this.socket.off("new_map", transportCheck)
                reject(`transport timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.once("new_map", transportCheck)
            this.socket.on("game_response", failCheck)
        })

        this.socket.emit("transport", { s: spawn, to: map })
        return transportComplete
    }

    /**
     * Unequips the item in the given slot.
     * Also used to remove items from the merchant stand.
     *
     * @param {(SlotType | TradeSlotType)} slot
     * @return {*}  {Promise<number>} The position of the unequipped item in the inventory
     * @memberof Character
     */
    public unequip(slot: SlotType | TradeSlotType): Promise<number> {
        if (!this.ready) return Promise.reject("We aren't ready yet [unequip].")
        if (this.slots[slot] === null) return Promise.reject(`Slot ${slot} is empty; nothing to unequip.`)
        if (this.slots[slot] === undefined) return Promise.reject(`Slot ${slot} does not exist.`)
        if (this.esize == 0) return Promise.reject(`Our inventory is full. We cannot unequip ${slot}.`)

        const slotInfo = this.slots[slot]

        const unequipped = new Promise<number>((resolve, reject) => {
            const unequipCheck = (data: CharacterData) => {
                if (data.slots[slot] === null) {
                    this.socket.off("player", unequipCheck)

                    // Look for the unequipped item in the inventory
                    let inventorySlot: number = undefined
                    for (let i = data.isize - 1; i > 0; i--) {
                        const item = data.items[i]
                        if (!item) continue

                        let same = true
                        for (const key in slotInfo) {
                            if (item[key] !== slotInfo[key]) {
                                same = false
                                break
                            }
                        }
                        if (same) {
                            inventorySlot = i
                            break
                        }
                    }
                    resolve(inventorySlot)
                }
            }

            setTimeout(() => {
                this.socket.off("player", unequipCheck)
                reject(`unequip timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)

            this.socket.on("player", unequipCheck)
        })

        this.socket.emit("unequip", { slot: slot })
        return unequipped
    }

    /**
     * Unfriend another player.
     * NOTE: `data.name` may not equal `id`. The event uses the player's 1st character's name.
     *
     * @param {string} id
     * @return {*}  {Promise<FriendData>}
     * @memberof Character
     */
    public unfriend(id: string): Promise<FriendData> {
        if (!this.ready) return Promise.reject("We aren't ready yet [unfriend].")

        const unfriended = new Promise<FriendData>((resolve, reject) => {
            const failCheck = (data: GameResponseData) => {
                if (typeof data == "object") {
                    if (data.response == "unfriend_failed") {
                        this.socket.off("friend", check)
                        this.socket.off("game_response", failCheck)
                        reject(`unfriend failed (${data.reason})`)
                    }
                }
            }
            const check = (data: FriendData) => {
                if (data.event == "lost") {
                    this.socket.off("friend", check)
                    this.socket.off("game_response", failCheck)
                    resolve(data)
                }
            }
            setTimeout(() => {
                this.socket.off("friend", check)
                this.socket.off("game_response", failCheck)
                reject("unfriend timeout(2500ms)")
            }, 2500)
            this.socket.on("friend", check)
            this.socket.on("game_response", failCheck)
        })
        this.socket.emit("friend", { event: "unfriend", name: id })
        return unfriended
    }

    public upgrade(itemPos: number, scrollPos: number, offeringPos?: number): Promise<boolean> {
        if (!this.ready) return Promise.reject("We aren't ready yet [upgrade].")
        if (this.G.maps[this.map].mount) return Promise.reject("We can't upgrade things in the bank.")

        const itemInfo = this.items[itemPos]
        const scrollInfo = this.items[scrollPos]
        if (!itemInfo) return Promise.reject(`There is no item in inventory slot ${itemPos}.`)
        if (this.G.items[itemInfo.name].upgrade == undefined) return Promise.reject("This item is not upgradable.")
        if (!scrollInfo) return Promise.reject(`There is no scroll in inventory slot ${scrollPos}.`)
        if (offeringPos !== undefined) {
            const offeringInfo = this.items[offeringPos]
            if (!offeringInfo) return Promise.reject(`There is no item in inventory slot ${offeringPos} (offering).`)
        }

        const upgradeComplete = new Promise<boolean>((resolve, reject) => {
            const playerCheck = (data: CharacterData) => {
                if (!data.hitchhikers)
                    return
                for (const [event, datum] of data.hitchhikers) {
                    if (event == "game_response" && datum.response == "upgrade_fail" && datum.num == itemPos) {
                        this.socket.off("game_response", gameResponseCheck)
                        this.socket.off("player", playerCheck)
                        resolve(false)
                        return
                    } else if (event == "game_response" && datum.response == "upgrade_success" && datum.num == itemPos) {
                        this.socket.off("game_response", gameResponseCheck)
                        this.socket.off("player", playerCheck)
                        resolve(true)
                        return
                    }
                }
            }

            const gameResponseCheck = (data: GameResponseData) => {
                if (typeof data == "object") {
                    if (data.response == "bank_restrictions" && data.place == "upgrade") {
                        this.socket.off("game_response", gameResponseCheck)
                        this.socket.off("player", playerCheck)
                        reject("You can't upgrade items in the bank.")
                    } else if (data.response == "item_locked" && data.place == "upgrade") {
                        this.socket.off("game_response", gameResponseCheck)
                        this.socket.off("player", playerCheck)
                        reject("You can't upgrade locked items.")
                    } else if (data.response == "get_closer" && data.place == "upgrade") {
                        this.socket.off("game_response", gameResponseCheck)
                        this.socket.off("player", playerCheck)
                        reject("We are too far away to upgrade items.")
                    }
                } else if (typeof data == "string") {
                    if (data == "bank_restrictions") {
                        this.socket.off("game_response", gameResponseCheck)
                        this.socket.off("player", playerCheck)
                        reject("We can't upgrade things in the bank.")
                    } else if (data == "upgrade_in_progress") {
                        this.socket.off("game_response", gameResponseCheck)
                        this.socket.off("player", playerCheck)
                        reject("We are already upgrading something.")
                    } else if (data == "upgrade_incompatible_scroll") {
                        this.socket.off("game_response", gameResponseCheck)
                        this.socket.off("player", playerCheck)
                        reject(`The scroll we're trying to use (${scrollInfo.name}) isn't a high enough grade to upgrade this item.`)
                    } else if (data == "upgrade_fail") {
                        this.socket.off("game_response", gameResponseCheck)
                        this.socket.off("player", playerCheck)
                        resolve(false)
                    } else if (data == "upgrade_success") {
                        this.socket.off("game_response", gameResponseCheck)
                        this.socket.off("player", playerCheck)
                        resolve(true)
                    }
                }
            }
            setTimeout(() => {
                this.socket.off("game_response", gameResponseCheck)
                this.socket.off("player", playerCheck)
                reject("upgrade timeout (60000ms)")
            }, 60000)
            this.socket.on("game_response", gameResponseCheck)
            this.socket.on("player", playerCheck)
        })

        this.socket.emit("upgrade", { clevel: this.items[itemPos].level, item_num: itemPos, offering_num: offeringPos, scroll_num: scrollPos })
        return upgradeComplete
    }

    public useHPPot(itemPos: number): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [useHPPot].")
        if (!this.items[itemPos]) return Promise.reject(`There is no item in inventory slot ${itemPos}.`)
        if (this.G.items[this.items[itemPos].name].type !== "pot") return Promise.reject(`The item provided (${itemPos}) is not a potion.`)
        if (this.G.items[this.items[itemPos].name].gives[0][0] !== "hp") return Promise.reject(`The item provided(${itemPos}) is not an HP Potion.`)
        if (this.G.items[this.items[itemPos].name].gives[0][1] < 0) return Promise.reject(`The item provided(${itemPos}) is not an HP Potion.`)

        const healReceived = new Promise<void>((resolve, reject) => {
            const healCheck = (data: EvalData) => {
                if (data.code && data.code.includes("pot_timeout")) {
                    this.socket.off("eval", healCheck)
                    this.socket.off("disappearing_text", failCheck)
                    resolve()
                }
            }

            const failCheck = (data: DisappearingTextData) => {
                if (data.id == this.id && data.message == "NOT READY") {
                    this.socket.off("eval", healCheck)
                    this.socket.off("disappearing_text", failCheck)
                    reject("useHPPot is on cooldown")
                }
            }

            setTimeout(() => {
                this.socket.off("eval", healCheck)
                this.socket.off("disappearing_text", failCheck)
                reject(`useHPPot timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)

            this.socket.on("eval", healCheck)
            this.socket.on("disappearing_text", failCheck)
        })

        this.socket.emit("equip", { consume: true, num: itemPos })
        return healReceived
    }

    public useMPPot(itemPos: number): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [useMPPot].")
        if (!this.items[itemPos]) return Promise.reject(`There is no item in inventory slot ${itemPos}.`)
        if (this.G.items[this.items[itemPos].name].type !== "pot") return Promise.reject(`The item provided (${itemPos}) is not a potion.`)
        if (this.G.items[this.items[itemPos].name].gives[0][0] !== "mp") return Promise.reject(`The item provided(${itemPos}) is not an MP Potion.`)
        if (this.G.items[this.items[itemPos].name].gives[0][1] < 0) return Promise.reject(`The item provided(${itemPos}) is not an MP Potion.`)

        const healReceived = new Promise<void>((resolve, reject) => {
            const healCheck = (data: EvalData) => {
                if (data.code && data.code.includes("pot_timeout")) {
                    this.socket.off("eval", healCheck)
                    this.socket.off("disappearing_text", failCheck)
                    resolve()
                }
            }

            const failCheck = (data: DisappearingTextData) => {
                if (data.id == this.id && data.message == "NOT READY") {
                    this.socket.off("eval", healCheck)
                    this.socket.off("disappearing_text", failCheck)
                    reject("useMPPot is on cooldown")
                }
            }

            setTimeout(() => {
                this.socket.off("eval", healCheck)
                this.socket.off("disappearing_text", failCheck)
                reject(`useMPPot timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)

            this.socket.on("eval", healCheck)
            this.socket.on("disappearing_text", failCheck)
        })

        this.socket.emit("equip", { consume: true, num: itemPos })
        return healReceived
    }

    // TODO: This will probably reject because the move doesn't match with the destination
    public warpToJail(): Promise<IPosition> {
        if (!this.ready) return Promise.reject("We aren't ready yet [warpToJail].")
        return this.move(100_000, 100_000, { disableSafetyCheck: true })
    }

    public warpToTown(): Promise<IPosition> {
        if (!this.ready) return Promise.reject("We aren't ready yet [warpToTown].")
        let startedWarp = false
        if (this.c.town) startedWarp = true
        const warpComplete = new Promise<IPosition>((resolve, reject) => {
            const failCheck = (data: CharacterData) => {
                if (!startedWarp && data.c.town) {
                    startedWarp = true
                    return
                }
                if (startedWarp && !data.c.town) {
                    this.socket.off("player", failCheck)
                    this.socket.off("new_map", warpedCheck2)
                    reject("warpToTown failed.")
                }
            }
            const warpedCheck2 = (data: NewMapData) => {
                if (data.effect == 1) {
                    this.socket.off("player", failCheck)
                    this.socket.off("new_map", warpedCheck2)
                    resolve({ map: data.name, x: data.x, y: data.y })
                }
            }

            setTimeout(() => {
                if (!startedWarp) {
                    this.socket.off("player", failCheck)
                    this.socket.off("new_map", warpedCheck2)
                    reject("warpToTown timeout (1000ms)")
                }
            }, 1000)

            setTimeout(() => {
                this.socket.off("player", failCheck)
                this.socket.off("new_map", warpedCheck2)
                reject("warpToTown timeout (5000ms)")
            }, 5000)
            this.socket.on("new_map", warpedCheck2)
            this.socket.on("player", failCheck)
        })

        if (!startedWarp) this.socket.emit("town")
        return warpComplete
    }

    public withdrawGold(gold: number): unknown {
        if (!this.ready) return Promise.reject("We aren't ready yet [withdrawGold].")
        // TODO: Check if you can be in the basement and withdraw gold
        if (this.map !== "bank")
            return Promise.reject("We need to be in 'bank' to withdraw gold.")
        if (gold <= 0)
            return Promise.reject("We can't withdraw 0 or less gold.")

        if (gold > this.bank.gold) {
            gold = this.bank.gold
            console.warn(`We are only going to withdraw ${gold} gold.`)
        }

        this.socket.emit("bank", { amount: gold, operation: "withdraw" })
    }

    public async withdrawItem(bankPack: BankPackName, bankPos: number, inventoryPos = -1): Promise<unknown> {
        if (!this.ready) return Promise.reject("We aren't ready yet [withdrawItem].")

        // Wait up to 5s to get bank items
        for (let i = 0; i < 20; i++) {
            if (this.bank) break
            await new Promise(resolve => setTimeout(resolve, 250))
        }
        if (!this.bank) return Promise.reject("We don't have bank information yet. Please try again in a bit.")


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
                    this.socket.off("player", checkWithdrawal)
                    return resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("player", checkWithdrawal)
                reject(`withdrawItem timeout(${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("player", checkWithdrawal)
        })

        this.socket.emit("bank", { inv: inventoryPos, operation: "swap", pack: bankPack, str: bankPos })
        return swapped
    }

    /**
     * Returns true if the entity has a >0% chance to die from projectiles already cast.
     *
     * @param {Map<string, ActionData>} projectiles (e.g.: bot.projectiles)
     * @param {Map<string, Player>} players (e.g.: bot.players)
     * @param {Map<string, Player>} entities (e.g.: bot.entitites)
     * @return {*}  {boolean}
     * @memberof Entity
     */
    public couldDieToProjectiles(): boolean {
        // if (this.avoidance >= 100) return false
        let incomingProjectileDamage = 0
        for (const projectile of this.projectiles.values()) {
            if (!projectile.damage) continue // Won't do any damage
            if (projectile.target !== this.id) continue // This projectile is heading towards another entity

            // NOTE: Entities can attack themselves if the projectile gets reflected
            let attacker: Character | Entity | Player
            if (!attacker && this.id == projectile.attacker) attacker = this
            if (!attacker) attacker = this.players.get(projectile.attacker)
            if (!attacker) attacker = this.entities.get(projectile.attacker)
            if (!attacker) {
                // Couldn't find attacker, assume it will crit with maximum damage
                incomingProjectileDamage += projectile.damage * 2.2
                if (incomingProjectileDamage >= this.hp) return true
                continue
            }

            if (attacker.damage_type == "physical" && this.evasion >= 100) continue // We will avoid the attack
            if (attacker.damage_type == "magical" && this.reflection >= 100) continue // We will reflect the attack

            const maximumDamage = attacker.calculateDamageRange(this, projectile.type)[1]

            incomingProjectileDamage += maximumDamage
            if (incomingProjectileDamage >= this.hp) return true
        }
        return false
    }

    /**
     * Returns the number of items that match the given parameters
     * @param itemName The item to look for
     * @param inventory Where to look for the item
     * @param filters Filters to help search for specific properties on items
     */
    public countItem(item: ItemName, inventory = this.items, filters?: LocateItemsFilters): number {
        let count = 0
        for (const index of this.locateItems(item, inventory, filters)) {
            const item = inventory[index]
            count += item.q ?? 1
        }

        return count
    }

    public getCooldown(skill: SkillName): number {
        const nextSkill = this.nextSkill.get(skill)
        if (nextSkill == undefined) return 0

        const cooldown = nextSkill.getTime() - Date.now()
        if (cooldown <= 0) return 0
        return cooldown
    }

    public getNearestAttackablePlayer(): { player: Player; distance: number; } {
        if (!this.isPVP()) return undefined

        let closest: Player
        let closestD = Number.MAX_VALUE
        for (const [, player] of this.players) {
            if (player.s?.invincible) return
            if (player.npc) return
            const d = Tools.distance(this, player)
            if (d < closestD) {
                closest = player
                closestD = d
            }
        }
        if (closest) return { distance: closestD, player: closest }
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
     * Check if we have the given item in the given inventory
     *
     * @param {ItemName} iN The item to look for
     * @param {*} [inv=this.items] Where to look for the item
     * @param {LocateItemsFilters>} [filters]
     * @return {*}  {boolean}
     * @memberof Character
     */
    public hasItem(iN: ItemName, inv = this.items,
        filters?: LocateItemsFilters): boolean {
        return this.locateItems(iN, inv, filters).length > 0
    }

    /**
     * Returns a boolean corresponding to whether or not we have a given item equipped.
     * @param itemName The item to look for
     */
    public isEquipped(itemName: ItemName): boolean {
        for (const slot in this.slots) {
            if (!this.slots[slot as SlotType]) continue // Nothing equipped in this slot
            if (this.slots[slot as TradeSlotType].price) continue // This is a merchant transaction, it's not equipped, it's in our stand
            if (this.slots[slot as SlotType].name == itemName) return true
        }
        return false
    }

    /**
     * Returns a boolean corresponding to whether or not we have the given item listed for purchase.
     * @param itemName The item to look for
     * @returns
     */
    public isListedForPurchase(itemName: ItemName): boolean {
        for (const slot in this.slots) {
            if (!this.slots[slot as SlotType]) continue // Nothing equipped in this slot
            if (!this.slots[slot as TradeSlotType].price) continue // This is not a merchant transaction
            if (!this.slots[slot as TradeSlotType].b) continue // We are selling this item, not buying it
            if (this.slots[slot as SlotType].name == itemName) return true
        }
        return false
    }

    /**
     * Returns a boolean corresponding to whether or not we have the given item listed for sale.
     * @param itemName The item to look for
     * @returns
     */
    public isListedForSale(itemName: ItemName): boolean {
        for (const slot in this.slots) {
            if (!this.slots[slot as SlotType]) continue // Nothing equipped in this slot
            if (!this.slots[slot as TradeSlotType].price) continue // This is not a merchant transaction
            if (this.slots[slot as TradeSlotType].b) continue // We are buying this item, it's not for sale
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

    /**
     * Returns the index of the item in the given inventory
     * @param iN The item to look for
     * @param inv Where to look for the item
     * @param filters Filters to help search for specific properties on items
     */
    public locateItem(iN: ItemName, inv = this.items,
        filters?: LocateItemFilters): number {
        const located = this.locateItems(iN, inv, filters)

        if (located.length == 0) return undefined // No items found

        if (filters?.returnHighestLevel) {
            if (filters.returnLowestLevel) throw new Error("Set either returnHighestLevel or returnLowestLevel, not both.")
            let highestLevel: number = Number.MIN_VALUE
            let highestLevelIndex
            for (let i = 0; i < located.length; i++) {
                const j = located[i]
                const item = inv[j]
                if (item.level > highestLevel) {
                    highestLevel = item.level
                    highestLevelIndex = i
                }
            }
            return located[highestLevelIndex]
        }

        if (filters?.returnLowestLevel) {
            let lowestLevel: number = Number.MAX_VALUE
            let lowestLevelIndex
            for (let i = 0; i < located.length; i++) {
                const j = located[i]
                const item = inv[j]
                if (item.level < lowestLevel) {
                    lowestLevel = item.level
                    lowestLevelIndex = i
                }
            }
            return located[lowestLevelIndex]
        }

        return located[0]
    }

    /**
     * Returns a list of indexes of the items in the given inventory
     * @param iN The item to look for
     * @param inv Where to look for the item
     * @param filters Filters to help search for specific properties on items
     */
    public locateItems(iN: ItemName, inv = this.items,
        filters?: LocateItemsFilters): number[] {
        if (filters?.quantityGreaterThan == 0) delete filters.quantityGreaterThan

        const found: number[] = []
        for (let i = 0; i < inv.length; i++) {
            const item = inv[i]
            if (!item) continue
            if (item.name !== iN) continue

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
            if (filters?.locked !== undefined) {
                if (filters.locked && item.l !== "l")
                    continue // This item isn't locked
                if (!filters.locked && item.l == "l")
                    continue // This item is locked
            }
            if (filters?.quantityGreaterThan !== undefined) {
                if (item.q == undefined)
                    continue // This item doesn't have a quantity
                if (item.q <= filters.quantityGreaterThan)
                    continue // There isn't enough items in this stack
            }
            if (filters?.special !== undefined) {
                if (filters.special && !item.p)
                    continue // The item isn't titled
                if (!filters.special && item.p)
                    continue // The item is titled
            }
            if (filters?.statType !== undefined) {
                if (item.stat_type !== filters.statType)
                    continue // This item doesn't match the stat scroll
            }

            found.push(i)
        }
        return found
    }

    /**
     * Returns an object with keys for each item name.
     * Each item object has keys for each level.
     * Each level object is an array of item positions.
     *
     * Set `minAmount` to 2 to find duplicate items. Set `minAmount` to 3 to find triplicate items.
     *
     * @param {*} [inventory=this.items]
     * @param {{ minAmount?: number }} [options]
     * @return {*}  {{
     *         [name in ItemName]?: {
     *             [level in number]?: number[];
     *         }
     *     }}
     * @memberof Character
     */
    public locateItemsByLevel(inventory = this.items, options?: {
        excludeLockedItems?: boolean
        excludeSpecialItems?: boolean
        minAmount?: number
    }): {
            [name in ItemName]?: {
                [level in number]?: number[];
            }
        } {
        const itemsByLevel = inventory.reduce((items, item, slotNum) => {
            if (item) {
                const { name, level } = item
                if (options?.excludeSpecialItems && item.p) return items // Don't include special items if we're excluding them
                if (options?.excludeLockedItems && item.l) return items // Don't include locked items if we're excluding them
                items[name] = items[name] || {}
                items[name][level] = [...(items[name][level] || []), slotNum]
            }
            return items
        }, {})

        // Remove any items that do not meet the minimum amount
        if (options?.minAmount) {
            for (const itemName in itemsByLevel) {
                for (const itemLevel in itemsByLevel[itemName]) {
                    if (itemsByLevel[itemName][itemLevel].length < options?.minAmount) delete itemsByLevel[itemName][itemLevel]
                }

                if (!Object.keys(itemsByLevel[itemName]).length) delete itemsByLevel[itemName]
            }
        }

        return itemsByLevel
    }

    public locateMonster(mType: MonsterName): IPosition[] {
        const locations: IPosition[] = []

        // Known special monster spawns
        if (mType == "goldenbat") mType = "bat"
        else if (mType == "snowman") mType = "arcticbee"

        for (const mapName in this.G.maps) {
            const map = this.G.maps[mapName as MapName]
            if (map.ignore) continue
            if (map.instance || !map.monsters || map.monsters.length == 0) continue // Map is unreachable, or there are no monsters

            for (const monsterSpawn of map.monsters) {
                if (monsterSpawn.type != mType) continue
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

    public locateNPC(npcID: NPCName): IPosition[] {
        const locations: IPosition[] = []
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

    public locateCraftNPC(itemName: ItemName): IPosition {
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

    public locateExchangeNPC(itemName: ItemName): IPosition {
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

        // Is the item exchangeable?
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

        throw Error(`${itemName} is not exchangeable`)
    }
}