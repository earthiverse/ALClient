import { CharacterData, EntitiesData } from "./definitions/adventureland-server"
import { SkillName, ConditionName } from "./definitions/adventureland"
import { Constants } from "./Constants"
import { Character } from "./Character"
import { Tools } from "./Tools"

export class PingCompensatedCharacter extends Character {
    async connect(): Promise<void> {
        const promise = super.connect()
        return promise.then(async () => { this.pingLoop() })
    }

    protected setNextSkill(skill: SkillName, next: Date): void {
        // Get ping compensation
        let pingCompensation = 0
        if (this.pings.length > 0) {
            pingCompensation = Math.min(...this.pings)
        }

        this.nextSkill.set(skill, new Date(next.getTime() - pingCompensation))
    }

    protected async parseEntities(data: EntitiesData): Promise<void> {
        super.parseEntities(data)

        const pingCompensation = Math.min(...this.pings) / 2

        for (const monster of data.monsters) {
            // Compensate position
            const entity = this.entities.get(monster.id)
            if (!entity || !entity.moving)
                continue
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
            if (!entity || !entity.moving)
                continue
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

    public updateCharacter(data: CharacterData): void {
        super.updateCharacter(data)

        const pingCompensation = Math.min(...this.pings) / 2

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

    protected pingLoop(): void {
        if (this.socket.disconnected) return

        this.sendPing()
        if (this.pings.length > Constants.MAX_PINGS / 10) {
            this.timeouts.set("pingLoop", setTimeout(async () => { this.pingLoop() }, Constants.PING_EVERY_MS))
        } else {
            this.timeouts.set("pingLoop", setTimeout(async () => { this.pingLoop() }, 1000))
        }
    }
}
