import type { PaladinAura } from "./definitions/adventureland-server.js"
import { PingCompensatedCharacter } from "./PingCompensatedCharacter.js"

export class Paladin extends PingCompensatedCharacter {
    ctype: "paladin" = "paladin" as const

    // NOTE: Untested
    public async aetherShieldOff(): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [aetherShieldOff].")
        if (!this.s.aether_shield) return // It's already off

        const response = this.getResponsePromise("aether_shield")
        this.socket.emit("skill", { name: "aether_shield" })
        return response
    }

    // NOTE: Untested
    public async aetherShieldOn(): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [aetherShieldOn].")
        if (this.s.aether_shield) return // It's already on

        const response = this.getResponsePromise("aether_shield")
        this.socket.emit("skill", { name: "aether_shield" })
        return response
    }

    // NOTE: Untested
    public async beaconOfResolve(): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [beaconOfResolve].")

        const response = this.getResponsePromise("beacon_of_resolve")
        this.socket.emit("skill", { name: "beacon_of_resolve" })
        return response
    }

    // NOTE: Untested
    public async cleansingLight(target: string): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [cleansingLight].")

        const response = this.getResponsePromise("cleansing_light")
        this.socket.emit("skill", { id: target, name: "cleansing_light" })
        return response
    }

    // NOTE: Untested
    public async guardiansOath(target: string): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [guardiansOath].")

        const response = this.getResponsePromise("guardians_oath")
        this.socket.emit("skill", { id: target, name: "guardians_oath" })
        return response
    }

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
    public async paladinAura(aura: PaladinAura): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [paladinAura].")

        const response = this.getResponsePromise("paladin_aura")
        this.socket.emit("skill", { id: aura, name: "paladin_aura" })
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

    // NOTE: Untested
    public async shieldSlam(target: string): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [shieldSlam].")

        const response = this.getResponsePromise("shield_slam")
        this.socket.emit("skill", { id: target, name: "shield_slam" })
        return response
    }

    // NOTE: Untested
    public async smash(target: string): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [smash].")

        const response = this.getResponsePromise("smash")
        this.socket.emit("skill", { id: target, name: "smash" })
        return response
    }
}
