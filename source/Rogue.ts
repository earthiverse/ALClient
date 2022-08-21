import { DeathData, EvalData, GameResponseData } from "./definitions/adventureland-server.js"
import { Constants } from "./Constants.js"
import { PingCompensatedCharacter } from "./PingCompensatedCharacter.js"

export class Rogue extends PingCompensatedCharacter {
    ctype: "rogue" = "rogue"

    // NOTE: UNTESTED
    public async invis(): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [invis].")

        const response = this.getResponsePromise("invis")
        this.socket.emit("skill", { name: "invis" })
        return response
    }

    public async mentalBurst(target: string): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [mentalBurst].")

        const response = this.getResponsePromise("mentalburst")
        this.socket.emit("skill", {
            id: target,
            name: "mentalburst"
        })
        return response
    }

    // NOTE: UNTESTED
    public async poisonCoat(poison = this.locateItem("poison")): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [poisonCoat].")
        if (poison === undefined) throw new Error("We don't have any poison in our inventory.")

        const response = this.getResponsePromise("pcoat")
        this.socket.emit("skill", {
            name: "pcoat",
            num: poison
        })
        return response
    }

    // NOTE: UNTESTED
    public async quickPunch(target: string): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [quickPunch].")
        // TODO: Item checks

        const response = this.getResponsePromise("quickpunch")
        this.socket.emit("skill", {
            id: target,
            name: "quickpunch"
        })
        return response
    }

    public async quickStab(target: string): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [quickStab].")
        // TODO: Item checks

        const response = this.getResponsePromise("quickstab")
        this.socket.emit("skill", {
            id: target,
            name: "quickstab"
        })
        return response
    }

    public async rspeed(target: string): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [rspeed].")

        // TODO: Improve to check if we applied it on the given character
        const response = this.getResponsePromise("rspeed")
        this.socket.emit("skill", {
            id: target,
            name: "rspeed",
        })
        return response
    }

    // NOTE: UNTESTED
    public async shadowStrike(shadowstone = this.locateItem("shadowstone")): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [shadowStrike].")
        if (shadowstone === undefined) throw new Error("We need a shadowstone in order to shadowstrike.")

        const response = this.getResponsePromise("shadowstrike")
        this.socket.emit("skill", {
            name: "shadowstrike",
            num: shadowstone
        })
        return response
    }

    // NOTE: Untested
    // TODO: Add promises
    public async stopInvis() {
        if (!this.ready) throw new Error("We aren't ready yet [stopInvis].")
        this.socket.emit("stop", { action: "invis" })
    }
}