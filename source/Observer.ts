import socketio from "socket.io-client"
import { ServerData, WelcomeData, LoadedData, ServerInfoData, DeathData, HitData, ActionData, DisappearData, EntitiesData, NewMapData, ServerInfoDataLive } from "./definitions/adventureland-server"
import { ServerRegion, ServerIdentifier } from "./definitions/adventureland"
import { ConditionName, GData2, MapName, MonsterName } from "./definitions/adventureland-data"
import { Entity } from "./Entity"
import { Player } from "./Player"
import { Tools } from "./Tools"
import { Constants } from "./Constants"
import { EntityModel } from "./database/entities/entities.model"
import { PlayerModel } from "./database/players/players.model"
import { NPCModel } from "./database/npcs/npcs.model"

export class Observer {
    protected lastPositionUpdate: number;

    public socket: SocketIOClient.Socket;

    public G: GData2;

    public serverRegion: ServerRegion;
    public serverIdentifier: ServerIdentifier;

    public in: string;
    public m: number
    public map: MapName;
    public x: number;
    public y: number;

    public entities = new Map<string, Entity>();
    public players = new Map<string, Player>();
    public projectiles = new Map<string, ActionData & { date: Date; }>();
    public S: ServerInfoData;

    constructor(serverData: ServerData, g: GData2, reconnect = false) {
        this.serverRegion = serverData.region
        this.serverIdentifier = serverData.name
        this.G = g

        this.socket = socketio(`ws://${serverData.addr}:${serverData.port}`, {
            autoConnect: false,
            reconnection: reconnect,
            transports: ["websocket"]
        })

        this.socket.on("action", (data: ActionData) => {
            // TODO: do we need this 'date'?
            this.projectiles.set(data.pid, { ...data, date: new Date() })
        })

        this.socket.on("death", (data: DeathData) => {
            this.markEntityAsDead(data.id)
        })

        this.socket.on("disappear", (data: DisappearData) => {
            // Remove them from their list
            this.players.delete(data.id) || this.entities.delete(data.id)

            this.updatePositions()
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

            if (data.kill == true) {
                this.projectiles.delete(data.pid)
                this.markEntityAsDead(data.id)
            } else if (data.damage) {
                this.projectiles.delete(data.pid)
                const e = this.entities.get(data.id)
                // Update HP
                if (e) e.hp = e.hp - data.damage
            }
        })

        this.socket.on("new_map", async (data: NewMapData) => {
            this.projectiles.clear()

            this.x = data.x
            this.y = data.y
            this.in = data.in
            this.map = data.name
            this.m = data.m

            this.parseEntities(data.entities)

            // Delete monsters that haven't been seen 'round these parts in a while.
            const toDeletes = EntityModel.aggregate([
                {
                    $match: {
                        serverRegion: this.serverRegion,
                        serverIdentifier: this.serverIdentifier,
                        map: this.map,
                        lastSeen: { $lt: Date.now() - Constants.STALE_MONSTER_MS }
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
                            $lt: Constants.MAX_VISIBLE_RANGE
                        }
                    }
                }
            ]).exec()
            if (toDeletes) {
                const ids = []
                for (const toDelete of toDeletes) ids.push(toDelete._id)
                EntityModel.deleteMany({ _id: { $in: ids } }).exec()
            }
        })

        this.socket.on("server_info", async (data: ServerInfoData) => {
            // Add Soft properties
            const databaseUpdates = []

            for (const datum in data) {
                const mtype = datum as MonsterName
                if (typeof data[mtype] == "object") {
                    if (data[mtype].live) {
                        const goodData = data[mtype] as ServerInfoDataLive
                        if (!goodData.hp) (data[mtype] as ServerInfoDataLive).hp = this.G.monsters[datum].hp
                        if (!goodData.max_hp) (data[mtype] as ServerInfoDataLive).max_hp = this.G.monsters[datum].hp

                        // Update database
                        if (Constants.SPECIAL_MONSTERS.includes(mtype)) {
                            const now = Date.now()
                            databaseUpdates.push({
                                updateOne: {
                                    filter: { serverIdentifier: this.serverIdentifier, serverRegion: this.serverRegion, type: mtype },
                                    update: { map: goodData.map, x: goodData.x, y: goodData.y, hp: goodData.hp, target: goodData.target, lastSeen: now },
                                    upsert: true
                                }
                            })
                        }
                    }
                }
            }

            if (databaseUpdates.length) EntityModel.bulkWrite(databaseUpdates)

            this.S = data
        })
    }

    public async connect(): Promise<void> {
        console.debug(`Connecting to ${this.serverRegion}${this.serverIdentifier}...`)
        const connected = new Promise<void>((resolve, reject) => {
            this.socket.on("welcome", (data: WelcomeData) => {
                if (data.region !== this.serverRegion || data.name !== this.serverIdentifier) {
                    reject(`We wanted the server ${this.serverRegion}${this.serverIdentifier}, but we are on ${data.region}${data.name}.`)
                } else {
                    this.socket.emit("loaded", {
                        height: 1080,
                        width: 1920,
                        scale: 2,
                        success: 1
                    } as LoadedData)
                    resolve()
                }
            })

            setTimeout(() => {
                reject("Failed to start within 10s.")
            }, 10000)
        })

        this.socket.open()
        return connected
    }

    protected async markEntityAsDead(id: string): Promise<void> {
        const entity = this.entities.get(id)

        if (entity) {
            // If it was a special monster in 'S', delete it from 'S'.
            if (this.S && this.S[entity.type]) delete this.S[entity.type]

            this.entities.delete(id)

            // Update database
            if (Constants.SPECIAL_MONSTERS.includes(entity.type)) {
                // If there's only one monster, delete all.
                if (Constants.ONE_SPAWN_MONSTERS.includes(entity.type)) {
                    EntityModel.deleteMany({ type: entity.type, serverRegion: this.serverRegion, serverIdentifier: this.serverIdentifier }).exec()
                } else {
                    EntityModel.deleteOne({ name: id, serverRegion: this.serverRegion, serverIdentifier: this.serverIdentifier }).exec()
                }
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

        const now = Date.now()
        const entityUpdates = []
        const npcUpdates = []
        const playerUpdates = []

        for (const monster of data.monsters) {
            let e: Entity
            if (!this.entities.has(monster.id)) {
                // Create the entity and add it to our list
                e = new Entity(monster, data.map, this.G)
                this.entities.set(monster.id, e)
            } else {
                // Update everything
                e = this.entities.get(monster.id)
                e.updateData(monster)
            }

            // Update our database
            if (Constants.SPECIAL_MONSTERS.includes(e.type)
                && (!e.lastMongoUpdate || Date.now() - e.lastMongoUpdate > Constants.MONGO_UPDATE_ENTITY_MS)) {
                entityUpdates.push({
                    updateOne: {
                        filter: { serverIdentifier: this.serverIdentifier, serverRegion: this.serverRegion, name: e.id, type: e.type },
                        update: { map: e.map, x: e.x, y: e.y, level: e.level, hp: e.hp, target: e.target, lastSeen: now },
                        upsert: true
                    }
                })
                e.lastMongoUpdate = now
            }
        }
        for (const player of data.players) {
            let p: Player
            if (!this.players.has(player.id)) {
                // Create the player and add it to our list
                p = new Player(player, data.map, this.G)
                this.players.set(player.id, p)
            } else {
                // Update everything
                p = this.players.get(player.id)
                p.updateData(player)
            }

            // Update our database
            if (p.isNPC()) {
                if (!p.lastMongoUpdate || Date.now() - p.lastMongoUpdate > Constants.MONGO_UPDATE_ENTITY_MS) {
                    const now = Date.now()
                    npcUpdates.push({
                        updateOne: {
                            filter: { serverIdentifier: this.serverIdentifier, serverRegion: this.serverRegion, name: p.id },
                            update: { map: p.map, x: p.x, y: p.y, lastSeen: now },
                            upsert: true
                        }
                    })
                    p.lastMongoUpdate = now
                }
            } else {
                if (!p.lastMongoUpdate || Date.now() - p.lastMongoUpdate > Constants.MONGO_UPDATE_ENTITY_MS) {
                    const now = Date.now()
                    playerUpdates.push({
                        updateOne: {
                            filter: { name: p.id },
                            update: { serverIdentifier: this.serverIdentifier, serverRegion: this.serverRegion, map: p.map, x: p.x, y: p.y, s: p.s, lastSeen: now },
                            upsert: true
                        }
                    })
                    p.lastMongoUpdate = now
                }
            }
        }

        if (entityUpdates.length) EntityModel.bulkWrite(entityUpdates)
        if (npcUpdates.length) NPCModel.bulkWrite(npcUpdates)
        if (playerUpdates.length) PlayerModel.bulkWrite(playerUpdates)
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
            if (Tools.distance(this, entity) < Constants.MAX_VISIBLE_RANGE) continue
            toDelete.push(id)
        }
        for (const id of toDelete) this.entities.delete(id)

        // Erase all players that are far away
        toDelete = []
        for (const [id, player] of this.players) {
            if (Tools.distance(this, player) < Constants.MAX_VISIBLE_RANGE) continue
            toDelete.push(id)
        }
        for (const id of toDelete) this.players.delete(id)

        // Erase all stale projectiles
        toDelete = []
        for (const [id, projectile] of this.projectiles) {
            if (Date.now() - projectile.date.getTime() < Constants.STALE_PROJECTILE_MS) continue
            toDelete.push(id)
        }
        for (const id of toDelete) this.projectiles.delete(id)

        this.lastPositionUpdate = Date.now()
    }
}