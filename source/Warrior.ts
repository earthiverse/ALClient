import { ActionData } from "./definitions/adventureland-server.js"
import { PingCompensatedCharacter } from "./PingCompensatedCharacter.js"
import { IPosition } from "./index.js"

export class Warrior extends PingCompensatedCharacter {
    ctype: "warrior" = "warrior"

    public async agitate(): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [agitate].")

        // TODO: Get IDs of agitated monsters
        const response = this.getResponsePromise("agitate")
        this.socket.emit("skill", { name: "agitate" })
        return response
    }

    public async charge(): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [charge].")

        const response = this.getResponsePromise("charge")
        this.socket.emit("skill", { name: "charge" })
        return response
    }

    public async cleave(): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [cleave].")
        // TODO: Add item checks

        // TODO: Get IDs of cleaved monsters, or the projectiles
        const response = this.getResponsePromise("cleave")
        this.socket.emit("skill", {
            name: "cleave"
        })
        return response
    }

    /**
     * Dash is a Warrior skill that lets you dash over small obstacles.
     *
     * NOTE: Dash currently (as of 2021-11-13) rounds to the nearest 10 for x and y coordinates,
     * e.g. `{x: 213, y: 216}` will become `{x: 210, y: 220}`
     *
     * @param {IPosition} to
     * @return {*}
     * @memberof Warrior
     */
    public async dash(to: IPosition): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [dash].")
        if (to.map && to.map !== this.map) throw new Error("We cannot dash across maps.")
        // TODO: Add destination checks

        const response = this.getResponsePromise("dash")
        this.socket.emit("skill", {
            name: "dash",
            x: to.x,
            y: to.y
        })
        return response
    }

    public async hardshell(): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [hardshell].")

        const response = this.getResponsePromise("hardshell")
        this.socket.emit("skill", {
            name: "hardshell"
        })
        return response
    }

    /**
     * Stomps and stuns nearby hostiles for a few seconds
     * @returns
     */
    public async stomp(): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [stomp].")
        // TODO: Add item checks

        // TODO: Return ids of those monsters & players that are now stomped
        const response = this.getResponsePromise("stomp")
        this.socket.emit("skill", {
            name: "stomp"
        })
        return response
    }

    /**
     * Makes a monster to target you instead of its original target
     * @param target The monster ID to taunt
     * @returns The ID of the taunt projectile
     */
    public async taunt(target: string): Promise<string> {
        if (!this.ready) throw new Error("We aren't ready yet [taunt].")

        let projectile: string
        const getProjectile = (data: ActionData) => {
            if (data.attacker == this.id
                && data.type == "taunt"
                && data.target == target) {
                this.socket.off("action", getProjectile)
                projectile = data.pid
            }
        }
        this.socket.on("action", getProjectile)

        try {
            const response = this.getResponsePromise("taunt")
            this.socket.emit("skill", { id: target, name: "taunt" })
            await response
        } finally {
            this.socket.off("action", getProjectile)
        }

        return projectile
    }

    public async warcry(): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [warcry].")

        // TODO: Return ids affected
        const response = this.getResponsePromise("warcry")
        this.socket.emit("skill", { name: "warcry" })
        return response
    }
}
