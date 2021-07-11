import { CharacterData, EntitiesData, PlayerData, ServerData } from "./definitions/adventureland-server"
import { Constants } from "./Constants"
import { Character } from "./Character"
import { Tools } from "./Tools"
import { ConditionName, GData2, SkillName } from "./definitions/adventureland-data"

export class PingCompensatedCharacter extends Character {
    constructor(userID: string, userAuth: string, characterID: string, g: GData2, serverData: ServerData) {
        super(userID, userAuth, characterID, g, serverData)
    }

    public async connect(): Promise<void> {
        try {
            await super.connect()
            this.pingLoop()
        } catch (e) {
            await this.disconnect()
            return Promise.reject(e)
        }
    }

    public calculateCompensation(): number {
        const pingCompensation = this.pings.length > 0 ? Math.min(...this.pings) : 0
        if (pingCompensation < 0) console.error(`Ping compensation is < 0! (${pingCompensation})`)
        return pingCompensation
    }

    protected setNextSkill(skill: SkillName, next: Date): void {
        super.setNextSkill(skill, new Date(next.getTime() - this.calculateCompensation()))
    }

    public parseCharacter(data: CharacterData | PlayerData): void {
        super.parseCharacter(data)

        // Get ping compensation
        const pingCompensation = this.calculateCompensation()

        // Compensate movement
        if (this.moving) {
            const distanceTravelled = this.speed * pingCompensation / 1000
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

        // Compensate conditions
        for (const condition in this.s) {
            if (this.s[condition as ConditionName].ms) {
                this.s[condition as ConditionName].ms -= pingCompensation
            }
        }
    }

    protected async parseEntities(data: EntitiesData): Promise<void> {
        super.parseEntities(data)

        // Get ping compensation
        const pingCompensation = this.calculateCompensation()

        for (const monster of data.monsters) {
            // Compensate position
            const entity = this.entities.get(monster.id)
            if (!entity || !entity.moving) continue
            const distanceTravelled = entity.speed * pingCompensation / 1000
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

            // Compensate conditions
            for (const condition in entity.s) {
                if (entity.s[condition as ConditionName].ms) {
                    entity.s[condition as ConditionName].ms -= pingCompensation
                }
            }
        }

        for (const player of data.players) {
            // Compensate position
            const entity = this.players.get(player.id)
            if (!entity || !entity.moving) continue
            const distanceTravelled = entity.speed * pingCompensation / 1000
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

            // Compensate conditions
            for (const condition in entity.s) {
                if (entity.s[condition as ConditionName].ms) {
                    entity.s[condition as ConditionName].ms -= pingCompensation
                }
            }
        }
    }

    protected pingLoop(): void {
        if (!this.socket || this.socket.disconnected) {
            this.timeouts.set("pingLoop", setTimeout(async () => { this.pingLoop() }, 1000))
            return
        }

        this.sendPing(false)
        if (this.pings.length > Math.ceil(Constants.MAX_PINGS / 10)) {
            this.timeouts.set("pingLoop", setTimeout(async () => { this.pingLoop() }, Constants.PING_EVERY_MS))
        } else {
            this.timeouts.set("pingLoop", setTimeout(async () => { this.pingLoop() }, 1000))
        }
    }
}
