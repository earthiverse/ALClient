import socketio, { Socket } from "socket.io-client"
import { Database, EntityModel, IPlayer, NPCModel, PlayerModel } from "./database/Database.js"
import { ConditionName, GData, GMap, MapName, MonsterName } from "./definitions/adventureland-data.js"
import { ServerData, WelcomeData, LoadedData, ActionData, ServerInfoData, ServerInfoDataLive, DeathData, DisappearData, EntitiesData, HitData, NewMapData } from "./definitions/adventureland-server.js"
import { Constants } from "./Constants.js"
import { Entity } from "./Entity.js"
import { Player } from "./Player.js"
import { Tools } from "./Tools.js"

export class Observer {
    public socket: Socket

    protected lastAllEntities: number
    protected lastPositionUpdate: number

    public G: GData;

    public entities = new Map<string, Entity>()

    protected pingIndex = 0
    protected pingMap = new Map<string, { log: boolean, time: number }>()
    protected pingNum = 1
    public pings: number[] = []
    public players = new Map<string, Player>()
    public projectiles = new Map<string, ActionData & { date: Date; }>()
    public S: ServerInfoData = {}

    public serverData: ServerData
    public map: MapName;
    public x: number;
    public y: number;

    constructor(serverData: ServerData, g: GData) {
        this.serverData = serverData
        this.G = g
    }

    public async connect(reconnect = false, start = true): Promise<void> {
        this.socket = socketio(`ws://${this.serverData.addr}:${this.serverData.port}`, {
            autoConnect: false,
            forceNew: true,
            reconnection: reconnect,
            transports: ["websocket"]
        })

        this.socket.on("action", (data: ActionData) => {
            this.projectiles.set(data.pid, { ...data, date: new Date() })
        })

        this.socket.on("death", (data: DeathData) => {
            this.deleteEntity(data.id)
        })

        // Update database when characters move around the map by transporting
        this.socket.on("disappear", (data: DisappearData) => {
            // Remove them from their list
            this.players.delete(data.id) || this.entities.delete(data.id)

            this.updatePositions()

            if (!Database.connection || data.reason == "disconnect" || data.reason == "invis") return // We don't track these

            if ((data.effect == "blink" || data.effect == "magiport") && data.to !== undefined && this.G.maps[data.to] && data.s !== undefined) {
                // They used "blink" or "magiport" and don't have a stealth cape
                const updateData: Partial<IPlayer> = {
                    lastSeen: Date.now(),
                    map: data.to as MapName,
                    serverIdentifier: this.serverData.name,
                    serverRegion: this.serverData.region,
                    x: data.s[0],
                    y: data.s[1]
                }
                PlayerModel.updateOne({ name: data.id }, updateData, { upsert: true }).lean().exec().catch((e) => { console.error(e) })
                Database.lastMongoUpdate.set(data.id, new Date())
            } else if (data.to !== undefined && data.effect == 1) {
                let s = 0
                if (data.s !== undefined) s = data.s
                // They used a "home" teleport and don't have a stealth cape
                const spawnLocation = (this.G.maps[data.to as MapName] as GMap)?.spawns[s]
                if (!spawnLocation) return // They are wearing a stealth cape, or entered an instance
                const updateData: Partial<IPlayer> = {
                    lastSeen: Date.now(),
                    map: data.to as MapName,
                    serverIdentifier: this.serverData.name,
                    serverRegion: this.serverData.region,
                    x: spawnLocation[0],
                    y: spawnLocation[1]
                }
                PlayerModel.updateOne({ name: data.id }, updateData, { upsert: true }).lean().exec().catch((e) => { console.error(e) })
                Database.lastMongoUpdate.set(data.id, new Date())
            }
        })

        this.socket.on("entities", (data: EntitiesData) => {
            this.parseEntities(data)
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
                    p.x = this.x
                    p.y = this.y
                }
            }

            if (data.kill) {
                this.projectiles.delete(data.pid)
                this.deleteEntity(data.id)
            } else if (data.damage) {
                this.projectiles.delete(data.pid)
                const e = this.entities.get(data.id)
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
            const databaseUpdates = []
            const now = Date.now()

            for (const mtype in data) {
                if (typeof data[mtype] !== "object") continue // Event information, not monster information
                if (!data[mtype].live) continue // Monster is not alive

                // Add soft properties to monster
                const mN = mtype as MonsterName
                const goodData = data[mN] as ServerInfoDataLive

                if (goodData.hp == undefined) goodData.hp = this.G.monsters[mN].hp
                if (goodData.max_hp == undefined) goodData.max_hp = this.G.monsters[mN].hp

                data[mN] = goodData

                if (Database.connection && Constants.SPECIAL_MONSTERS.includes(mN)) {
                    databaseUpdates.push({
                        updateOne: {
                            filter: { serverIdentifier: this.serverData.name, serverRegion: this.serverData.region, type: mtype },
                            update: { hp: goodData.hp, lastSeen: now, map: goodData.map, target: goodData.target, x: goodData.x, y: goodData.y },
                            upsert: true
                        }
                    })
                }
            }

            if (Database.connection && databaseUpdates.length) EntityModel.bulkWrite(databaseUpdates)

            this.S = data
        })

        if (start) {
            console.debug(`Connecting to ${this.serverData.region}${this.serverData.name}...`)
            const connected = new Promise<void>((resolve, reject) => {
                this.socket.on("welcome", (data: WelcomeData) => {
                    if (data.region !== this.serverData.region || data.name !== this.serverData.name) {
                        reject(`We wanted the server ${this.serverData.region}${this.serverData.name}, but we are on ${data.region}${data.name}.`)
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
                    reject(`Failed to start within ${Constants.CONNECT_TIMEOUT_MS / 1000}s.`)
                }, Constants.CONNECT_TIMEOUT_MS)
            })
            this.socket.open()
            return connected
        }
    }

    public async deleteEntity(id: string): Promise<void> {
        const entity = this.entities.get(id)
        if (entity) {
            // If it was a special monster in 'S', delete it from 'S'.
            if (this.S[entity.type]) delete this.S[entity.type]

            // Delete the entity from the database on death
            if (Database.connection) {
                const lastUpdate = Database.lastMongoUpdate.get(entity.id)
                if (lastUpdate || Constants.SPECIAL_MONSTERS.includes(entity.type)) {
                    EntityModel.deleteOne({ name: id, serverIdentifier: this.serverData.name, serverRegion: this.serverData.region }).lean().exec().catch(() => { /* Suppress errors */ })
                    Database.lastMongoUpdate.delete(id)
                }
            }

            this.entities.delete(id)
        }
    }

    protected parseEntities(data: EntitiesData): void {
        if (data.type == "all") {
            this.lastAllEntities = Date.now()

            // Erase all of the entities
            this.entities.clear()
            this.players.clear()
            this.lastPositionUpdate = Date.now()

            // Reset the lastUpdates
            Database.lastMongoUpdate.clear()
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
            if (Database.connection) {
                if (Constants.SPECIAL_MONSTERS.includes(e.type)) {
                    const lastUpdate = Database.lastMongoUpdate.get(e.id)
                    if (!lastUpdate || (Date.now() - lastUpdate.getTime()) > Constants.MONGO_UPDATE_MS) {
                        if (Constants.ONE_SPAWN_MONSTERS.includes(e.type)) {
                        // Don't include the id in the filter, so it overwrites the last one
                            entityUpdates.push({
                                updateOne: {
                                    filter: { serverIdentifier: this.serverData.name, serverRegion: this.serverData.region, type: e.type },
                                    update: { hp: e.hp, in: e.in, lastSeen: Date.now(), level: e.level, map: e.map, target: e.target, x: e.x, y: e.y },
                                    upsert: true
                                }
                            })
                        } else {
                        // Include the id in the filter
                            entityUpdates.push({
                                updateOne: {
                                    filter: { name: e.id, serverIdentifier: this.serverData.name, serverRegion: this.serverData.region, type: e.type },
                                    update: { hp: e.hp, in: e.in, lastSeen: Date.now(), level: e.level, map: e.map, target: e.target, x: e.x, y: e.y },
                                    upsert: true
                                }
                            })
                        }

                        Database.lastMongoUpdate.set(e.id, new Date())
                    }
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
                const lastUpdate = Database.lastMongoUpdate.get(p.id)
                if (!lastUpdate || (Date.now() - lastUpdate.getTime()) > Constants.MONGO_UPDATE_MS) {
                    if (p.isNPC()) {
                        npcUpdates.push({
                            updateOne: {
                                filter: { name: p.id, serverIdentifier: this.serverData.name, serverRegion: this.serverData.region },
                                update: { lastSeen: Date.now(), map: p.map, x: p.x, y: p.y },
                                upsert: true
                            }
                        })
                    } else {
                        const updateData: Partial<IPlayer> = {
                            in: p.in,
                            lastSeen: Date.now(),
                            map: p.map,
                            s: p.s,
                            serverIdentifier: this.serverData.name,
                            serverRegion: this.serverData.region,
                            slots: p.slots,
                            type: p.ctype,
                            x: p.x,
                            y: p.y,
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
                    Database.lastMongoUpdate.set(p.id, new Date())
                }
            }
        }

        if (Database.connection) {
            if (entityUpdates.length) EntityModel.bulkWrite(entityUpdates).catch((e) => { console.error(e) })
            if (npcUpdates.length) NPCModel.bulkWrite(npcUpdates).catch((e) => { console.error(e) })
            if (playerUpdates.length) PlayerModel.bulkWrite(playerUpdates).catch((e) => { console.error(e) })

            if (data.type == "all") {
            // Delete monsters that we should be able to see
                EntityModel.aggregate([
                    {
                        $match: {
                            map: this.map,
                            name: { $nin: visibleIDs },
                            serverIdentifier: this.serverData.name,
                            serverRegion: this.serverData.region,
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
                    },
                    { $project: {
                        _id: 1
                    } }
                ]).exec().then((toDeletes => {
                    try {
                        const ids = []
                        for (const toDelete of toDeletes) ids.push(toDelete._id)
                        EntityModel.deleteMany({ name: { $in: ids } }).lean().exec()
                    } catch (e) {
                        console.error(e)
                        console.log("DEBUG -----")
                        console.log("toDeletes:")
                        console.log(toDeletes)
                    }
                })).catch((e) => { console.error(e) })
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
            for (const [, player] of this.players) {
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

        // Erase all stale projectiles
        for (const [id, projectile] of this.projectiles) {
            if (Date.now() - projectile.date.getTime() > Constants.STALE_PROJECTILE_MS) this.projectiles.delete(id)
        }

        this.lastPositionUpdate = Date.now()
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

    public getNearestMonster(mtype?: MonsterName): { monster: Entity; distance: number; } {
        let closest: Entity
        let closestD = Number.MAX_VALUE
        for (const [, entity] of this.entities) {
            if (mtype && entity.type !== mtype) continue
            const d = Tools.distance(this, entity)
            if (d < closestD) {
                closest = entity
                closestD = d
            }
        }
        if (closest) return { distance: closestD, monster: closest }
    }
}