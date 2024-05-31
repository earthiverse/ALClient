import {
    ChannelInfo,
    CharacterData,
    EntitiesData,
    PlayerData,
    PQData,
    QInfo,
    ServerData,
} from "./definitions/adventureland-server.js"
import { Constants } from "./Constants.js"
import { Character } from "./Character.js"
import { Tools } from "./Tools.js"
import { ConditionName, GData, SkillName } from "./definitions/adventureland-data.js"

export class PingCompensatedCharacter extends Character {
    constructor(userID: string, userAuth: string, characterID: string, g: GData, serverData: ServerData) {
        super(userID, userAuth, characterID, g, serverData)
    }

    public async connect(): Promise<void> {
        try {
            await super.connect()
            this.pingLoop()
        } catch (e) {
            this.disconnect()
            throw e
        }
    }

    protected setNextSkill(skill: SkillName, next: Date): void {
        super.setNextSkill(skill, new Date(next.getTime() - this.ping))
    }

    public parseCharacter(data: CharacterData | PlayerData): void {
        super.parseCharacter(data)

        // Get ping compensation
        const pingCompensation = this.ping

        // Compensate movement
        if (this.moving) {
            const distanceTraveled = (this.speed * pingCompensation) / 1000
            const angle = Math.atan2(this.going_y - this.y, this.going_x - this.x)
            const distanceToGoal = Tools.distance({ x: this.x, y: this.y }, { x: this.going_x, y: this.going_y })
            if (distanceTraveled > distanceToGoal) {
                this.moving = false
                this.x = this.going_x
                this.y = this.going_y
            } else {
                this.x = this.x + Math.cos(angle) * distanceTraveled
                this.y = this.y + Math.sin(angle) * distanceTraveled
            }
        }

        // Compensate conditions
        for (const condition in this.s) {
            if (this.s[condition as ConditionName].ms !== undefined) {
                this.s[condition as ConditionName].ms -= pingCompensation
                if (this.s[condition as ConditionName].ms < 0) {
                    delete this.s[condition as ConditionName]
                }
            }
        }

        // Compensate processes
        for (const process in this.q) {
            if (this.q[process].ms !== undefined) {
                this.q[process].ms -= pingCompensation
                if (this.q[process].ms < 0) {
                    delete this.q[process]
                }
            }
        }

        // Compensate channels
        for (const channel in this.c) {
            if (this.c[channel as keyof ChannelInfo].ms !== undefined) {
                this.c[channel as keyof ChannelInfo].ms -= pingCompensation
                if (this.c[channel as keyof ChannelInfo].ms < 0) {
                    delete this.c[channel as keyof ChannelInfo]
                }
            }
        }
    }

    protected parseEntities(data: EntitiesData): void {
        super.parseEntities(data)

        // Get ping compensation
        const pingCompensation = this.ping

        for (const monster of data.monsters) {
            // Compensate position
            const entity = this.entities.get(monster.id)
            if (!entity || !entity.moving) continue
            const distanceTraveled = (entity.speed * pingCompensation) / 1000
            const angle = Math.atan2(entity.going_y - entity.y, entity.going_x - entity.x)
            const distanceToGoal = Tools.distance(
                { x: entity.x, y: entity.y },
                { x: entity.going_x, y: entity.going_y },
            )
            if (distanceTraveled >= distanceToGoal) {
                entity.moving = false
                entity.x = entity.going_x
                entity.y = entity.going_y
            } else {
                entity.x = entity.x + Math.cos(angle) * distanceTraveled
                entity.y = entity.y + Math.sin(angle) * distanceTraveled
            }

            // Compensate conditions
            for (const condition in entity.s) {
                if (entity.s[condition as ConditionName].ms === undefined) continue
                entity.s[condition as ConditionName].ms -= pingCompensation
                if (entity.s[condition as ConditionName].ms < 0) {
                    delete entity.s[condition as ConditionName]
                }
            }
        }

        for (const player of data.players) {
            // Compensate position
            const entity = this.players.get(player.id)
            if (!entity || !entity.moving) continue
            const distanceTraveled = (entity.speed * pingCompensation) / 1000
            const angle = Math.atan2(entity.going_y - entity.y, entity.going_x - entity.x)
            const distanceToGoal = Tools.distance(
                { x: entity.x, y: entity.y },
                { x: entity.going_x, y: entity.going_y },
            )
            if (distanceTraveled >= distanceToGoal) {
                entity.moving = false
                entity.x = entity.going_x
                entity.y = entity.going_y
            } else {
                entity.x = entity.x + Math.cos(angle) * distanceTraveled
                entity.y = entity.y + Math.sin(angle) * distanceTraveled
            }

            // Compensate conditions
            for (const condition in entity.s) {
                if (entity.s[condition as ConditionName].ms === undefined) continue
                entity.s[condition as ConditionName].ms -= pingCompensation
                if (entity.s[condition as ConditionName].ms < 0) {
                    delete entity.s[condition as ConditionName]
                }
            }

            // Compensate processes
            for (const process in entity.q) {
                if (entity.q[process as keyof QInfo].ms !== undefined) {
                    entity.q[process as keyof QInfo].ms -= pingCompensation
                    if (entity.q[process as keyof QInfo].ms < 0) {
                        delete entity.q[process as keyof QInfo]
                    }
                }
            }

            // Compensate channels
            for (const channel in entity.c) {
                if (entity.c[channel as keyof ChannelInfo].ms !== undefined) {
                    entity.c[channel as keyof ChannelInfo].ms -= pingCompensation
                    if (entity.c[channel as keyof ChannelInfo].ms < 0) {
                        delete entity.c[channel as keyof ChannelInfo]
                    }
                }
            }
        }
    }

    protected parseQData(data: PQData): void {
        // Get ping compensation
        const pingCompensation = this.ping

        // Update our `q` to match the new data
        for (const process in data.q) {
            const newCooldown = data.q[process as keyof QInfo].ms - pingCompensation
            if (newCooldown <= 0) delete this.q[process as keyof QInfo]
            else this.q[process] = data.q[process]
        }
    }

    protected pingLoop(): void {
        if (!this.socket || this.socket.disconnected) {
            this.timeouts.set(
                "pingLoop",
                setTimeout(() => this.pingLoop(), 1000),
            )
            return
        }

        this.sendPing(false).catch(console.error)
        if (this.pings.length > Math.ceil(Constants.MAX_PINGS / 10)) {
            this.timeouts.set(
                "pingLoop",
                setTimeout(() => this.pingLoop(), Constants.PING_EVERY_MS),
            )
        } else {
            this.timeouts.set(
                "pingLoop",
                setTimeout(() => this.pingLoop(), 1000),
            )
        }
    }
}
