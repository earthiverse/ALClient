import { PingCompensatedCharacter } from "./PingCompensatedCharacter.js"
import { ProjectileSkillGRDataObject, UIData } from "./definitions/adventureland-server.js"
import { IPosition } from "./definitions/adventureland.js"
import { Tools } from "./Tools.js"

export class Warrior extends PingCompensatedCharacter {
    ctype: "warrior" = "warrior" as const

    public async agitate(): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [agitate].")

        let ids: string[]
        const getIDs = (data: UIData) => {
            if (data.type == "agitate" && data.name == this.id) {
                ids = data.ids
            }
        }
        this.socket.on("ui", getIDs)
        try {
            const response = this.getResponsePromise("agitate")
            this.socket.emit("skill", { name: "agitate" })
            await response
        } finally {
            this.socket.off("ui", getIDs)
        }

        return ids
    }

    public async charge(): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [charge].")

        const response = this.getResponsePromise("charge")
        this.socket.emit("skill", { name: "charge" })
        return response
    }

    public async cleave(): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [cleave].")
        const currentWtype = this.G.items[this.slots.mainhand.name].wtype
        if (currentWtype !== "axe" && currentWtype !== "scythe")
            throw new Error("We need to have an 'axe' or 'scythe' type weapon equipped in order to cleave.")

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
        const dist = Tools.distance({ map: this.map, x: this.x, y: this.y }, to)
        if (dist < 5) throw new Error("dash location is too close (min distance: 5)")
        else if (dist > 50) throw new Error("dash location is too far (max dist: 50)")

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
        if (this.G.items[this.slots.mainhand.name].wtype !== "basher")
            throw new Error("We need to have a 'basher' type weapon equipped in order to stomp.")

        const stomped = this.getResponsePromise("stomp")
        this.socket.emit("skill", { name: "stomp" })
        return stomped
    }

    /**
     * Makes a monster to target you instead of its original target
     * @param target The monster ID to taunt
     * @returns The ID of the taunt projectile
     */
    public async taunt(target: string): Promise<ProjectileSkillGRDataObject> {
        if (!this.ready) throw new Error("We aren't ready yet [taunt].")

        const response = this.getResponsePromise("taunt") as Promise<ProjectileSkillGRDataObject>

        this.socket.emit("skill", { id: target, name: "taunt" })

        return response
    }

    public async warcry(): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [warcry].")

        // TODO: Return ids affected
        const response = this.getResponsePromise("warcry")
        this.socket.emit("skill", { name: "warcry" })
        return response
    }
}