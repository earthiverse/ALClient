import socketio, { Socket } from "socket.io-client"
import { Database, EntityModel, IPlayer, NPCModel, PlayerModel } from "./database/Database.js"
import { ConditionName, GData, GMap, MapName, MonsterName } from "./definitions/adventureland-data.js"
import { ServerData, WelcomeData, LoadedData, ActionData, ServerInfoData, ServerInfoDataLive, DeathData, DisappearData, EntitiesData, HitData, NewMapData, ServerInfoDataNotLive, GameEventData, ServerToClientEvents, ClientToServerEvents, ActionDataRay, ActionDataProjectile, QInfo, ChannelInfo } from "./definitions/adventureland-server.js"
import { Constants } from "./Constants.js"
import { Entity } from "./Entity.js"
import { Player } from "./Player.js"
import { Tools } from "./Tools.js"
import { RespawnModel } from "./database/respawns/respawns.model.js"
import isNumber from "is-number"
import { UpdateQuery } from "mongoose"
import { ServerModel } from "./database/servers/servers.model.js"

export class Observer {
    public socket: Socket<ServerToClientEvents, ClientToServerEvents>

    protected lastAllEntities: number
    protected lastPositionUpdate: number

    public G: GData

    public entities = new Map<string, Entity>()

    protected pingIndex = 0
    protected pingMap = new Map<string, { log: boolean, time: number }>()
    protected pingNum = 1
    private static pingsPerServer = new Map<string, number[]>()
    public pings: number[] = []
    public players = new Map<string, Player>()
    public projectiles = new Map<string, ActionData & { date: Date; }>()
    public S: ServerInfoData = {}
    public server: WelcomeData

    public serverData: ServerData
    public map: MapName
    public x: number
    public y: number

    public get ping(): number {
        return this.pings.length == 0 ? 0 : Math.min(...this.pings)
    }

    public get timeout(): number {
        return Math.min(this.ping * 2, Constants.TIMEOUT)
    }

    constructor(serverData: ServerData, g: GData) {
        this.serverData = serverData
        this.G = g

        if (serverData) {
            // Retrieve the cached pings data
            const key = `${serverData.region}${serverData.name}`
            const pings = Observer.pingsPerServer.get(key)
            if (pings) {
                this.pings = pings
            }
        }
    }

    public async connect(reconnect = false, start = true): Promise<void> {
        this.socket = socketio(`ws${this.serverData.secure ? "s" : ""}://${this.serverData.addr}:${this.serverData.port}`, {
            autoConnect: false,
            reconnection: reconnect,
            transports: ["websocket"]
        })

        this.socket.on("action", (data: ActionData) => {
            if ((data as ActionDataRay).instant) return // It's instant, don't add a projectile

            // Fix the ETA
            const attacker = this.players.get(data.attacker) ?? this.entities.get(data.attacker)
            const target = this.entities.get(data.attacker) ?? this.players.get(data.attacker)
            const projectileSpeed = this.G.projectiles[(data as ActionDataProjectile).projectile]?.speed
            if (attacker && target && projectileSpeed) {
                const distance = Tools.distance(attacker, target)
                const fixedETA = (distance / projectileSpeed) * 1000
                data.eta = fixedETA
            }

            this.projectiles.set(data.pid, { ...data, date: new Date() })
        })

        this.socket.on("death", (data: DeathData) => {
            this.deleteEntity(data.id, true)
        })

        // Update database when characters move around the map by transporting
        this.socket.on("disappear", (data: DisappearData) => {
            // Remove them from their list
            this.players.delete(data.id) || this.deleteEntity(data.id)

            this.updatePositions()

            if (!Database.connection || data.reason == "disconnect" || data.reason == "invis") return // We don't track these

            if ((data.effect == "blink" || data.effect == "magiport")
                && data.to !== undefined && this.G.maps[data.to] && data.s !== undefined
                // NOTE: entity IDs are numbers, so the isNumber check filters out entities
                && !isNumber(data.id)) {
                // They used "blink" or "magiport" and don't have a stealth cape
                const updateData: Partial<IPlayer> = {
                    lastSeen: Date.now(),
                    map: data.to as MapName,
                    serverIdentifier: this.serverData.name,
                    serverRegion: this.serverData.region,
                    x: data.s[0],
                    y: data.s[1]
                }
                const nextUpdate = Database.nextUpdate.get(`${this.serverData.name}${this.serverData.region}${data.id}`)
                if (!nextUpdate || Date.now() >= nextUpdate) {
                    PlayerModel.updateOne({ name: data.id }, updateData, { upsert: true }).lean().exec().catch((e) => { console.error(e) })
                    Database.nextUpdate.set(`${this.serverData.name}${this.serverData.region}${data.id}`, Date.now() + Constants.MONGO_UPDATE_MS)
                }
            } else if (data.to !== undefined && data.effect == 1) {
                let s = 0
                if (data.s !== undefined) s = data.s
                // They used a "home" teleport and don't have a stealth cape
                const spawnLocation = (this.G.maps[data.to as MapName] as GMap)?.spawns[s]
                if (!spawnLocation) return // They are wearing a stealth cape
                const updateData: Partial<IPlayer> = {
                    lastSeen: Date.now(),
                    map: data.to as MapName,
                    serverIdentifier: this.serverData.name,
                    serverRegion: this.serverData.region,
                    x: spawnLocation[0],
                    y: spawnLocation[1]
                }
                const nextUpdate = Database.nextUpdate.get(`${this.serverData.name}${this.serverData.region}${data.id}`)
                if (!nextUpdate || Date.now() >= nextUpdate) {
                    PlayerModel.updateOne({ name: data.id }, updateData, { upsert: true }).lean().exec().catch((e) => { console.error(e) })
                    Database.nextUpdate.set(`${this.serverData.name}${this.serverData.region}${data.id}`, Date.now() + Constants.MONGO_UPDATE_MS)
                }
            }
        })

        this.socket.on("disconnect", () => {
            // Save the ping data if we reconnect to the same server
            if (!this.serverData || !this.pings || this.pings.length == 0) return
            const key = `${this.serverData.region}${this.serverData.name}`
            Observer.pingsPerServer.set(key, this.pings)
        })

        this.socket.on("entities", (data: EntitiesData) => {
            this.parseEntities(data)
        })

        this.socket.on("game_event", (data: GameEventData) => {
            if (this.G.monsters[data.name]) {
                // The event is a monster
                const monsterData = {
                    hp: this.G.monsters[data.name].hp,
                    lastSeen: Date.now(),
                    level: 1,
                    map: data.map,
                    x: data.x,
                    y: data.y
                }

                this.S[data.name] = {
                    ...monsterData,
                    live: true,
                    max_hp: monsterData.hp
                }

                if (Database.connection) {
                    EntityModel.updateOne({
                        serverIdentifier: this.serverData.name,
                        serverRegion: this.serverData.region,
                        type: data.name
                    }, monsterData, {
                        upsert: true
                    }).lean().exec().catch((e) => { console.error(e) })
                }
            }
        })

        this.socket.on("hit", (data: HitData) => {
            if (data.miss || data.evade) {
                this.projectiles.delete(data.pid)
                return
            }

            if (data.reflect) {
                // Reflect the projectile towards the attacker
                const p = this.projectiles.get(data.pid)
                if (p) {
                    p.damage = data.reflect
                    p.target = data.hid
                    // TODO: Is this correct!? Shouldn't we check the `data.hid` position?
                    p.x = this.x
                    p.y = this.y
                }
            }

            if (data.kill) {
                this.projectiles.delete(data.pid)
                this.deleteEntity(data.id, true)
            } else if (data.damage) {
                this.projectiles.delete(data.pid)
                const e = this.entities.get(data.id) ?? this.players.get(data.id)
                if (e) e.hp = e.hp - data.damage
            } else {
                // NOTE: Priest's `curse` doesn't do damage, and is one example of a projectile that would be caught in this else block.
                this.projectiles.delete(data.pid)
            }
        })

        this.socket.on("new_map", (data: NewMapData) => {
            this.parseNewMap(data)
        })

        this.socket.on("ping_ack", (data: { id: string; }) => {
            const ping = this.pingMap.get(data.id)
            if (ping) {
                // Add the new ping
                const time = Date.now() - ping.time
                this.pings[this.pingIndex++] = time
                this.pingIndex = this.pingIndex % Constants.MAX_PINGS
                if (ping.log) console.log(`Ping: ${time}`)

                // Remove the ping from the map
                this.pingMap.delete(data.id)
            }
        })

        this.socket.on("server_info", (data: ServerInfoData) => {
            const databaseEntityUpdates = []
            const databaseRespawnUpdates = []
            const databaseDeletes = new Set<MonsterName>()
            const now = Date.now()

            if (Database.connection) {
                for (const type of Constants.SERVER_INFO_MONSTERS) {
                    if (!data[type] || !(data[type] as ServerInfoDataLive).live) databaseDeletes.add(type)
                }
            }

            for (const mtype in data) {
                const mData = data[mtype as MonsterName]
                if (typeof mData !== "object") continue // Event information, not monster information
                if ((mData as ServerInfoDataNotLive).live == false) {
                    if (Database.connection) {
                        databaseDeletes.add(mtype as MonsterName)

                        // The next respawn date is known
                        const nextSpawn = new Date((data[mtype as MonsterName] as ServerInfoDataNotLive).spawn)
                        databaseRespawnUpdates.push({
                            updateOne: {
                                filter: { serverIdentifier: this.serverData.name, serverRegion: this.serverData.region, type: mtype },
                                update: { estimatedRespawn: nextSpawn.getTime() },
                                upsert: true
                            }
                        })
                    }
                    continue
                }
                if (data[mtype as MonsterName]["x"] == undefined || data[mtype as MonsterName]["y"] == undefined) continue // No location data (e.g.: Slenderman)

                // Add soft properties to monster
                const mN = mtype as MonsterName
                const goodData = data[mN] as ServerInfoDataLive

                if (goodData.hp == undefined) goodData.hp = this.G.monsters[mN].hp
                if (goodData.max_hp == undefined) goodData.max_hp = this.G.monsters[mN].hp

                data[mN] = goodData

                if (Database.connection && Constants.SPECIAL_MONSTERS.includes(mN)) {
                    const nextUpdate = Database.nextUpdate.get(`${this.serverData.name}${this.serverData.region}${mN}`)
                    if (nextUpdate && Date.now() < nextUpdate) continue // We've updated this monster recently
                    databaseEntityUpdates.push({
                        updateOne: {
                            filter: { serverIdentifier: this.serverData.name, serverRegion: this.serverData.region, type: mN },
                            update: { hp: goodData.hp, lastSeen: now, map: goodData.map, target: goodData.target, x: goodData.x, y: goodData.y },
                            upsert: true
                        }
                    })
                    databaseRespawnUpdates.push({
                        deleteOne: {
                            filter: { serverIdentifier: this.serverData.name, serverRegion: this.serverData.region, type: mN }
                        }
                    })
                    Database.nextUpdate.set(`${this.serverData.name}${this.serverData.region}${mN}`, Date.now() + Constants.MONGO_UPDATE_MS)
                }
            }

            if (Database.connection) {
                const nextUpdate = Database.nextUpdate.get(`${this.serverData.name}${this.serverData.region}*server_info*`)
                if (!nextUpdate || Date.now() >= nextUpdate) {
                    for (const type in Constants.MONSTER_RESPAWN_TIMES) {
                        const mtype = type as MonsterName

                        if (data[mtype]) continue // It's still alive
                        if (!this.S[mtype]) continue // It wasn't alive before

                        // This special monster just died
                        const nextSpawn = Date.now() + Constants.MONSTER_RESPAWN_TIMES[mtype]
                        databaseRespawnUpdates.push({
                            updateOne: {
                                filter: { serverIdentifier: this.serverData.name, serverRegion: this.serverData.region, type: type },
                                update: { estimatedRespawn: nextSpawn },
                                upsert: true
                            }
                        })
                    }
                    if (databaseDeletes.size) EntityModel.deleteMany({ serverIdentifier: this.serverData.name, serverRegion: this.serverData.region, type: { $in: [...databaseDeletes] } }).catch(console.error)
                    if (databaseEntityUpdates.length) EntityModel.bulkWrite(databaseEntityUpdates).catch(console.error)
                    if (databaseRespawnUpdates.length) RespawnModel.bulkWrite(databaseRespawnUpdates).catch(console.error)
                    const updateData = {
                        S: data,
                        lastUpdate: now,
                        serverIdentifier: this.serverData.name,
                        serverRegion: this.serverData.region
                    }
                    ServerModel.updateOne({ serverIdentifier: this.serverData.name, serverRegion: this.serverData.region }, updateData, { upsert: true }).catch(console.error)
                    Database.nextUpdate.set(`${this.serverData.name}${this.serverData.region}*server_info*`, Date.now() + Constants.MONGO_UPDATE_MS)
                }
            }

            this.S = data
        })

        this.socket.on("welcome", (data: WelcomeData) => {
            this.server = data
            if (data.S) this.S = data.S
        })

        if (start) {
            console.debug(`Connecting to ${this.serverData.region} ${this.serverData.name}...`)
            const connected = new Promise<void>((resolve, reject) => {
                this.socket.on("welcome", (data: WelcomeData) => {
                    if (data.region !== this.serverData.region || data.name !== this.serverData.name) {
                        reject(new Error(`We wanted the server ${this.serverData.region}${this.serverData.name}, but we are on ${data.region}${data.name}.`))
                    } else {
                        this.socket.emit("loaded", {
                            height: 1080,
                            scale: 2,
                            success: 1,
                            width: 1920
                        } as LoadedData)
                        resolve()
                    }
                })

                setTimeout(() => {
                    reject(new Error(`Failed to start within ${Constants.CONNECT_TIMEOUT_MS / 1000}s.`))
                }, Constants.CONNECT_TIMEOUT_MS)
            })
            this.socket.open()
            return connected
        }
    }

    /**
     * Removes an entity from the entity map, as well as potentially handling database updates
     * for special monsters
     * @param id The ID of the entity to remove
     * @param death Are we deleting it because it died?
     * @returns If the entity was successfully deleted from the entities map
     */
    public deleteEntity(id: string, death = false): boolean {
        const entity = this.entities.get(id)
        if (entity) {
            // If it was a special monster in 'S', delete it from 'S'.
            if (this.S[entity.type] && death) delete this.S[entity.type]

            // Delete the entity from the database on death
            if (Database.connection && Constants.SPECIAL_MONSTERS.includes(entity.type)) {
                const nextUpdate = Database.nextUpdate.get(`${this.serverData.name}${this.serverData.region}${entity.id}`)
                if (death && nextUpdate !== Number.MAX_VALUE) {
                    EntityModel.deleteOne({ name: id, serverIdentifier: this.serverData.name, serverRegion: this.serverData.region }).lean().exec().catch(() => { /* Suppress errors */ })
                    Database.nextUpdate.set(`${this.serverData.name}${this.serverData.region}${entity.id}`, Number.MAX_VALUE)
                }
            }

            return this.entities.delete(id)
        }
        return false
    }

    protected parseEntities(data: EntitiesData): void {
        if (data.type == "all") {
            this.lastAllEntities = Date.now()

            // Erase all of the entities
            this.entities.clear()
            this.players.clear()
            this.lastPositionUpdate = Date.now()
        } else {
            // Update all positions
            this.updatePositions()
        }

        const visibleIDs = []
        const entityUpdates = []
        const npcUpdates = []
        const playerUpdates = []

        for (const monster of data.monsters) {
            let e: Entity
            if (!this.entities.has(monster.id)) {
                // Create the entity and add it to our list
                e = new Entity(monster, data.map, data.in, this.G)
                this.entities.set(monster.id, e)
            } else {
                // Update everything
                e = this.entities.get(monster.id)
                e.updateData(monster)
            }
            visibleIDs.push(e.id)

            // Update our database
            if (Database.connection && Constants.SPECIAL_MONSTERS.includes(e.type)) {
                const nextUpdate = Database.nextUpdate.get(`${this.serverData.name}${this.serverData.region}${e.id}`)
                if (!nextUpdate || Date.now() > nextUpdate) {
                    if (Constants.ONE_SPAWN_MONSTERS.includes(e.type)) {
                        // Don't include the id in the filter, so it overwrites the last one
                        entityUpdates.push({
                            updateOne: {
                                filter: { serverIdentifier: this.serverData.name, serverRegion: this.serverData.region, type: e.type },
                                update: { hp: e.hp, in: e.in, lastSeen: Date.now(), level: e.level, map: e.map, name: e.id, s: e.s, target: e.target, x: e.x, y: e.y },
                                upsert: true
                            }
                        })
                        Database.nextUpdate.set(`${this.serverData.name}${this.serverData.region}${e.type}`, Date.now() + Constants.MONGO_UPDATE_MS)
                    } else {
                        // Include the id in the filter
                        entityUpdates.push({
                            updateOne: {
                                filter: { name: e.id, serverIdentifier: this.serverData.name, serverRegion: this.serverData.region, type: e.type },
                                update: { hp: e.hp, in: e.in, lastSeen: Date.now(), level: e.level, map: e.map, name: e.id, s: e.s, target: e.target, x: e.x, y: e.y },
                                upsert: true
                            }
                        })
                    }
                    Database.nextUpdate.set(`${this.serverData.name}${this.serverData.region}${e.id}`, Date.now() + Constants.MONGO_UPDATE_MS)
                }
            }
        }

        for (const player of data.players) {
            let p: Player
            if (!this.players.has(player.id)) {
                // Create the player and add it to our list
                p = new Player(player, data.map, data.in, this.G)
                this.players.set(player.id, p)
            } else {
                // Update everything
                p = this.players.get(player.id)
                p.updateData(player)
            }

            // Update our database
            if (Database.connection) {
                const nextUpdate = Database.nextUpdate.get(`${this.serverData.name}${this.serverData.region}${p.id}`)
                if (!nextUpdate || Date.now() > nextUpdate) {
                    if (p.isNPC()) {
                        npcUpdates.push({
                            updateOne: {
                                filter: { name: p.name, serverIdentifier: this.serverData.name, serverRegion: this.serverData.region },
                                update: { lastSeen: Date.now(), map: p.map, x: p.x, y: p.y },
                                upsert: true
                            }
                        })
                    } else {
                        const updateData: UpdateQuery<IPlayer> = {
                            in: p.in,
                            lastSeen: Date.now(),
                            map: p.map,
                            party: p.party,
                            rip: p.rip,
                            s: p.s,
                            serverIdentifier: this.serverData.name,
                            serverRegion: this.serverData.region,
                            "slots.amulet": p.slots.amulet,
                            "slots.belt": p.slots.belt,
                            "slots.cape": p.slots.cape,
                            "slots.chest": p.slots.chest,
                            "slots.earring1": p.slots.earring1,
                            "slots.earring2": p.slots.earring2,
                            "slots.elixir": p.slots.elixir,
                            "slots.gloves": p.slots.gloves,
                            "slots.helmet": p.slots.helmet,
                            "slots.mainhand": p.slots.mainhand,
                            "slots.offhand": p.slots.offhand,
                            "slots.orb": p.slots.orb,
                            "slots.pants": p.slots.pants,
                            "slots.ring1": p.slots.ring1,
                            "slots.ring2": p.slots.ring2,
                            "slots.shoes": p.slots.shoes,
                            "slots.trade1": p.slots.trade1,
                            "slots.trade2": p.slots.trade2,
                            "slots.trade3": p.slots.trade3,
                            "slots.trade4": p.slots.trade4,
                            type: p.ctype,
                            x: p.x,
                            y: p.y,
                        }

                        if (p.stand) {
                            updateData["slots.trade5"] = p.slots.trade5
                            updateData["slots.trade6"] = p.slots.trade6
                            updateData["slots.trade7"] = p.slots.trade7
                            updateData["slots.trade8"] = p.slots.trade8
                            updateData["slots.trade9"] = p.slots.trade9
                            updateData["slots.trade10"] = p.slots.trade10
                            updateData["slots.trade11"] = p.slots.trade11
                            updateData["slots.trade12"] = p.slots.trade12
                            updateData["slots.trade13"] = p.slots.trade13
                            updateData["slots.trade14"] = p.slots.trade14
                            updateData["slots.trade15"] = p.slots.trade15
                            updateData["slots.trade16"] = p.slots.trade16
                            updateData["slots.trade17"] = p.slots.trade17
                            updateData["slots.trade18"] = p.slots.trade18
                            updateData["slots.trade19"] = p.slots.trade19
                            updateData["slots.trade20"] = p.slots.trade20
                            updateData["slots.trade21"] = p.slots.trade21
                            updateData["slots.trade22"] = p.slots.trade22
                            updateData["slots.trade23"] = p.slots.trade23
                            updateData["slots.trade24"] = p.slots.trade24
                            updateData["slots.trade25"] = p.slots.trade25
                            updateData["slots.trade26"] = p.slots.trade26
                            updateData["slots.trade27"] = p.slots.trade27
                            updateData["slots.trade28"] = p.slots.trade28
                            updateData["slots.trade29"] = p.slots.trade29
                            updateData["slots.trade30"] = p.slots.trade30
                        }
                        if (p.owner) updateData.owner = p.owner
                        playerUpdates.push({
                            updateOne: {
                                filter: { name: p.id },
                                update: updateData,
                                upsert: true
                            }
                        })
                    }
                    Database.nextUpdate.set(`${this.serverData.name}${this.serverData.region}${p.id}`, Date.now() + Constants.MONGO_UPDATE_MS)
                }
            }
        }

        if (Database.connection) {
            if (entityUpdates.length) EntityModel.bulkWrite(entityUpdates).catch(console.error)
            if (npcUpdates.length) NPCModel.bulkWrite(npcUpdates).catch(console.error)
            if (playerUpdates.length) PlayerModel.bulkWrite(playerUpdates).catch(console.error)

            if (data.type == "all") {
                // Get live special monsters so we can exclude deleting them
                const liveSpecialMonsters: MonsterName[] = []
                for (const key in this.S) {
                    const data = this.S[key] as ServerInfoDataLive
                    if (data.live) liveSpecialMonsters.push(key as MonsterName)
                }

                // Delete monsters that we should be able to see
                EntityModel.aggregate([
                    {
                        $match: {
                            map: this.map,
                            name: { $nin: visibleIDs },
                            serverIdentifier: this.serverData.name,
                            serverRegion: this.serverData.region,
                            type: { $nin: liveSpecialMonsters },
                        }
                    },
                    {
                        $project: {
                            distance: {
                                $sqrt: {
                                    $add: [
                                        { $pow: [{ $subtract: [this.y, "$y"] }, 2] },
                                        { $pow: [{ $subtract: [this.x, "$x"] }, 2] }
                                    ]
                                }
                            }
                        }
                    },
                    {
                        $match: {
                            distance: {
                                $lt: Constants.MAX_VISIBLE_RANGE / 2
                            }
                        }
                    }
                ]).exec().then((toDeletes => {
                    try {
                        const ids = []
                        for (const toDelete of toDeletes) ids.push(toDelete._id)
                        if (ids.length) EntityModel.deleteMany({ _id: { $in: ids }, serverIdentifier: this.serverData.name, serverRegion: this.serverData.region }).lean().exec().catch(console.error)
                    } catch (e) {
                        console.error(e)
                    }
                })).catch(console.error)
            }
        }
    }

    protected parseNewMap(data: NewMapData): void {
        this.projectiles.clear()

        this.x = data.x
        this.y = data.y
        this.map = data.name

        this.parseEntities(data.entities)
    }

    protected updatePositions(): void {
        if (this.lastPositionUpdate) {
            const msSinceLastUpdate = Date.now() - this.lastPositionUpdate
            if (msSinceLastUpdate == 0) return

            // Update entities
            for (const [, entity] of this.entities) {
                if (!entity.moving)
                    continue

                const speed = entity.speed

                const distanceTraveled = speed * msSinceLastUpdate / 1000
                const angle = Math.atan2(entity.going_y - entity.y, entity.going_x - entity.x)
                const distanceToGoal = Tools.distance({ x: entity.x, y: entity.y }, { x: entity.going_x, y: entity.going_y })
                if (distanceTraveled > distanceToGoal) {
                    entity.moving = false
                    entity.x = entity.going_x
                    entity.y = entity.going_y
                } else {
                    entity.x = entity.x + Math.cos(angle) * distanceTraveled
                    entity.y = entity.y + Math.sin(angle) * distanceTraveled
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
            for (const [, player] of this.players) {
                if (!player.moving)
                    continue
                const distanceTraveled = player.speed * msSinceLastUpdate / 1000
                const angle = Math.atan2(player.going_y - player.y, player.going_x - player.x)
                const distanceToGoal = Tools.distance({ x: player.x, y: player.y }, { x: player.going_x, y: player.going_y })
                if (distanceTraveled > distanceToGoal) {
                    player.moving = false
                    player.x = player.going_x
                    player.y = player.going_y
                } else {
                    player.x = player.x + Math.cos(angle) * distanceTraveled
                    player.y = player.y + Math.sin(angle) * distanceTraveled
                }

                // Update conditions
                for (const condition in player.s) {
                    const newCooldown = player.s[condition as ConditionName].ms - msSinceLastUpdate
                    if (newCooldown <= 0)
                        delete player.s[condition as ConditionName]
                    else
                        player.s[condition as ConditionName].ms = newCooldown
                }

                // Update processes
                for (const process in player.q) {
                    const newCooldown = player.q[process as keyof QInfo].ms - msSinceLastUpdate
                    if (newCooldown <= 0)
                        delete player.q[process as keyof QInfo]
                    else
                        player.q[process as keyof QInfo].ms = newCooldown
                }

                // Update channels
                for (const channel in player.c) {
                    const newCooldown = player.c[channel as keyof ChannelInfo].ms - msSinceLastUpdate
                    if (newCooldown <= 0)
                        delete player.c[channel as keyof ChannelInfo]
                    else
                        player.c[channel as keyof ChannelInfo].ms = newCooldown
                }
            }
        }

        // Erase all entities that are far away
        let toDelete: string[] = []
        for (const [id, entity] of this.entities) {
            if (Tools.squaredDistance(this, entity) < Constants.MAX_VISIBLE_RANGE_SQUARED)
                continue
            toDelete.push(id)
        }
        for (const id of toDelete) this.deleteEntity(id)

        // Erase all players that are far away
        toDelete = []
        for (const [id, player] of this.players) {
            if (Tools.squaredDistance(this, player) < Constants.MAX_VISIBLE_RANGE_SQUARED)
                continue
            toDelete.push(id)
        }
        for (const id of toDelete)
            this.players.delete(id)

        // Erase all stale projectiles
        for (const [id, projectile] of this.projectiles) {
            if (Date.now() - projectile.date.getTime() > Constants.STALE_PROJECTILE_MS) this.projectiles.delete(id)
        }

        this.lastPositionUpdate = Date.now()
    }

    public async sendPing(log = true): Promise<number> {
        // Get the next pingID
        const pingID = this.pingNum.toString()
        this.pingNum++

        // Set the pingID in the map
        this.pingMap.set(pingID, { log: log, time: Date.now() })

        const promise = new Promise<number>((resolve, reject) => {
            const cleanup = () => {
                this.socket.off("ping_ack", pingListener)
                clearTimeout(timeout)
            }

            const pingListener = (data: { id: string}) => {
                if (data.id == pingID) {
                    const time = Date.now() - this.pingMap.get(pingID)?.time
                    cleanup()
                    resolve(time)
                }
            }

            const timeout = setTimeout(() => {
                cleanup()
                reject(new Error("ping timeout (5000ms)"))
            }, 5000)

            this.socket.on("ping_ack", pingListener)
        })

        // Get the ping
        this.socket.emit("ping_trig", { id: pingID })
        return promise
    }
}