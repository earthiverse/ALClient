import { ActionData } from "./definitions/adventureland-server.js"
import { PingCompensatedCharacter } from "./PingCompensatedCharacter.js"

export class Priest extends PingCompensatedCharacter {
    ctype: "priest" = "priest"

    public async absorbSins(target: string): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [absorbSins].")

        const response = this.getResponsePromise("absorb")
        this.socket.emit("skill", { id: target, name: "absorb" })
        return response
    }

    public async curse(target: string): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [curse].")

        const response = this.getResponsePromise("curse")
        this.socket.emit("skill", { id: target, name: "curse" })
        return response
    }

    public async darkBlessing(): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [darkBlessing].")

        const response = this.getResponsePromise("darkblessing")
        this.socket.emit("skill", { name: "darkblessing" })
        return response
    }

    public async heal(id: string): Promise<string> {
        if (!this.ready) throw new Error("We aren't ready yet [heal].")

        let projectile: string
        const getProjectile = (data: ActionData) => {
            if (data.attacker == this.id
                && data.type == "heal"
                && data.target == id) {
                projectile = data.pid
            }
        }
        this.socket.on("action", getProjectile)

        try {
            const response = this.getResponsePromise("heal")
            this.socket.emit("heal", { id: id })
            await response
        } finally {
            this.socket.off("action", getProjectile)
        }

        return projectile
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
