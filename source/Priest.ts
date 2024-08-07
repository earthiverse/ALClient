import type { ProjectileSkillGRDataObject } from "./definitions/adventureland-server.js"
import { PingCompensatedCharacter } from "./PingCompensatedCharacter.js"

export class Priest extends PingCompensatedCharacter {
    ctype: "priest" = "priest" as const

    public async absorbSins(target: string): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [absorbSins].")

        const response = this.getResponsePromise("absorb")
        this.socket.emit("skill", { id: target, name: "absorb" })
        return response
    }

    public async curse(target: string): Promise<ProjectileSkillGRDataObject> {
        if (!this.ready) throw new Error("We aren't ready yet [curse].")

        const response = this.getResponsePromise("curse") as Promise<ProjectileSkillGRDataObject>
        this.socket.emit("skill", { id: target, name: "curse" })
        return response
    }

    public async darkBlessing(): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [darkBlessing].")

        const response = this.getResponsePromise("darkblessing")
        this.socket.emit("skill", { name: "darkblessing" })
        return response
    }

    /**
     * NOTE: We can't name this function `heal` because of the property `heal` that tells us how much we heal for.
     * @param id The ID of the entity or player to heal
     */
    public async healSkill(id: string): Promise<ProjectileSkillGRDataObject> {
        if (!this.ready) throw new Error("We aren't ready yet [healSkill].")

        const response = this.getResponsePromise("heal") as Promise<ProjectileSkillGRDataObject>
        this.socket.emit("heal", { id: id })
        return response
    }

    public async partyHeal(): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [partyHeal].")

        const response = this.getResponsePromise("partyheal")
        this.socket.emit("skill", { name: "partyheal" })
        return response
    }

    // NOTE: Untested. We might need to increase the timeout?
    public async revive(target: string, essenceOfLife = this.locateItem("essenceoflife")): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [revive].")
        if (essenceOfLife === undefined) throw new Error("We don't have any essenceoflife in our inventory.")

        const response = this.getResponsePromise("revive")
        this.socket.emit("skill", { id: target, name: "revive", num: essenceOfLife })
        return response
    }
}
