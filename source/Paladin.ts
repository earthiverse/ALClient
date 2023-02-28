import { PingCompensatedCharacter } from "./PingCompensatedCharacter.js"

export class Paladin extends PingCompensatedCharacter {
    ctype: "paladin" = "paladin"

    // NOTE: Untested
    public async manaShieldOff(): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [manaShieldOff].")
        if (!this.s.mshield) return // It's already off

        const response = this.getResponsePromise("mshield")
        this.socket.emit("skill", { name: "mshield" })
        return response
    }

    // NOTE: Untested
    public async manaShieldOn(): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [manaShieldOn].")
        if (this.s.mshield) return // It's already on

        const response = this.getResponsePromise("mshield")
        this.socket.emit("skill", { name: "mshield" })
        return response
    }

    // NOTE: Untested
    public async purify(target: string): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [purify].")

        const response = this.getResponsePromise("purify")
        this.socket.emit("skill", { id: target, name: "purify" })
        return response
    }

    // NOTE: Untested
    public async selfHeal(): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [selfHeal].")

        const response = this.getResponsePromise("selfheal")
        this.socket.emit("skill", { name: "selfheal" })
        return response
    }
}