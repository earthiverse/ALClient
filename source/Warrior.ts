import { CharacterData, ActionData, EvalData, GameResponseData } from "./definitions/adventureland-server.js"
import { Constants } from "./Constants.js"
import { PingCompensatedCharacter } from "./PingCompensatedCharacter.js"
import { IPosition } from "./index.js"

export class Warrior extends PingCompensatedCharacter {
    ctype: "warrior" = "warrior"

    // TODO: Investigate why the cooldown check doesn't work.
    public async agitate(): Promise<void> {
        if (!this.ready) throw new Error("We aren't ready yet [agitate].")
        const agitated = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]agitate['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("eval", cooldownCheck)
                    this.socket.off("game_response", failCheck)
                    resolve()
                }
            }

            const failCheck = (data: GameResponseData) => {
                if (typeof data == "object" && data.response == "cooldown" && data.skill == "agitate") {
                    this.socket.off("eval", cooldownCheck)
                    this.socket.off("game_response", failCheck)
                    reject(`Agitate failed due to cooldown (ms: ${data.ms}).`)
                }
            }

            setTimeout(() => {
                this.socket.off("eval", cooldownCheck)
                this.socket.off("game_response", failCheck)
                reject(`agitate timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
            this.socket.on("game_response", failCheck)
        })

        this.socket.emit("skill", {
            name: "agitate"
        })
        return agitated
    }

    public async charge(): Promise<void> {
        if (!this.ready) throw new Error("We aren't ready yet [charge].")
        const charged = new Promise<void>((resolve, reject) => {
            const successCheck = (data: CharacterData) => {
                if (!data.hitchhikers) return
                for (const [event, datum] of data.hitchhikers) {
                    if (event == "game_response" && datum.response == "skill_success" && datum.name == "charge") {
                        this.socket.off("player", successCheck)
                        this.socket.off("game_response", failCheck)
                        resolve()
                        return
                    }
                }
            }

            const failCheck = (data: GameResponseData) => {
                if (typeof data == "object") {
                    if (data.response == "cooldown" && data.skill == "charge") {
                        this.socket.off("player", successCheck)
                        this.socket.off("game_response", failCheck)
                        reject(`Charge failed due to cooldown (ms: ${data.ms}).`)
                    }
                }
            }

            setTimeout(() => {
                this.socket.off("player", successCheck)
                this.socket.off("game_response", failCheck)
                reject(`charge timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("player", successCheck)
            this.socket.on("game_response", failCheck)
        })

        this.socket.emit("skill", { name: "charge" })
        return charged
    }

    public async cleave(): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [cleave].")
        // TODO: Add item checks

        // TODO: Get IDs of cleaved monsters
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
            this.socket.emit("skill", { name: "taunt", id: target })
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
