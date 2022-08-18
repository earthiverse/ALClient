import { DisappearingTextData, EvalData, GameResponseData, NewMapData } from "./definitions/adventureland-server.js"
import { Constants } from "./Constants.js"
import { Pathfinder } from "./Pathfinder.js"
import { PingCompensatedCharacter } from "./PingCompensatedCharacter.js"

export class Mage extends PingCompensatedCharacter {
    ctype: "mage" = "mage"

    // NOTE: UNTESTED
    public async alchemy(): Promise<void> {
        if (!this.ready) throw new Error("We aren't ready yet [alchemy].")
        const performedAlchemy = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]alchemy['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("eval", cooldownCheck)
                reject(`alchemy timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
        })
        this.socket.emit("skill", {
            name: "alchemy"
        })
        return performedAlchemy
    }

    public async blink(x: number, y: number): Promise<void> {
        if (!this.ready) throw new Error("We aren't ready yet [blink].")

        // Blink rounds to the nearest 10 on the server, so we're going to preemptively
        // round to the nearest 10 and check if we can blink to that spot to avoid
        // wasting MP.
        const roundedX = Math.round(x / 10) * 10
        const roundedY = Math.round(y / 10) * 10
        if (x !== roundedX || y !== roundedY) {
            console.log(`Blink position changed from ${x},${y} to ${roundedX},${roundedY}.`)
            x = roundedX
            y = roundedY
        }

        if (!Pathfinder.canStand({ map: this.map, x: x, y: y })) throw new Error(`We cannot blink to ${this.map},${x},${y}`)

        const blinked = new Promise<void>((resolve, reject) => {
            const successCheck = (data: NewMapData) => {
                if (data.effect == "blink" && x == data.x && y == data.y) {
                    this.socket.off("new_map", successCheck)
                    this.socket.off("game_response", failCheck)
                    resolve()
                }
            }

            const failCheck = (data: GameResponseData) => {
                if (typeof data == "string") {
                    if (data == "blink_failed") {
                        this.socket.off("new_map", successCheck)
                        this.socket.off("game_response", failCheck)
                        reject(`Blink from ${this.map}:${this.x},${this.y} to ${this.map}:${x},${y} failed.`)
                    }
                }
            }

            setTimeout(() => {
                this.socket.off("new_map", successCheck)
                this.socket.off("game_response", failCheck)
                reject(`blink timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("new_map", successCheck)
            this.socket.on("game_response", failCheck)
        })

        this.socket.emit("skill", { name: "blink", x: x, y: y })
        return blinked
    }

    // NOTE: UNTESTED
    public async burst(target: string): Promise<void> {
        if (!this.ready) throw new Error("We aren't ready yet [burst].")
        const bursted = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]burst['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("eval", cooldownCheck)
                reject(`burst timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
        })

        this.socket.emit("skill", { name: "burst", id: target })
        return bursted
    }

    /**
     * Controlled burst allows mages to spend MP to attack each target that they specify
     * @param targets [[entityID, mpForTarget], ...]
     * @returns
     */
    public async cburst(targets: [string, number][]): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [cburst].")
        if (targets.length == 0) throw new Error("No targets were given to cburst.")

        const response = this.getResponsePromise("cburst")
        this.socket.emit("skill", { name: "cburst", targets: targets })
        return response
    }

    public async energize(target: string, mp?: number): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [energize].")

        const response = this.getResponsePromise("energize")
        this.socket.emit("skill", { id: target, mp: mp, name: "energize" })
        return response
    }

    // NOTE: UNTESTED
    public async entangle(target: string, essenceofnature = this.locateItem("essenceofnature")): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [entangle].")
        if (essenceofnature === undefined) throw new Error("We need an essenceofnature in order to entangle.")

        const response = this.getResponsePromise("entangle")
        this.socket.emit("skill", {
            name: "entangle",
            id: target,
            num: essenceofnature
        })
        return response
    }

    public async light(): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [light].")

        const response = this.getResponsePromise("light")
        this.socket.emit("skill", {
            name: "light"
        })
        return response
    }

    /**
     * Sends an offer to teleport another player to your location
     *
     * NOTE: If you offer to magiport a player that is not online, it will still use MP.
     *
     * @param target The ID of the player to teleport
     * @returns A boolean representing whether or not the offer was sent
     */
    public async magiport(target: string): Promise<boolean> {
        if (!this.ready) throw new Error("We aren't ready yet [magiport].")

        let status: boolean
        const getMagiportStatus = (data: GameResponseData) => {
            if (typeof data !== "object") return
            if (data.response == "magiport_failed" && data.id == target) {
                status = false
                return
            }
            if (data.response == "magiport_sent" && data.id == target) {
                status = true
                return
            }
        }
        this.socket.on("game_response", getMagiportStatus)

        try {
            const response = this.getResponsePromise("magiport")
            this.socket.emit("skill", { id: target, name: "magiport" })
            await response
        } finally {
            this.socket.off("game_response", getMagiportStatus)
        }

        return status
    }

    /**
     * NOTE: This function is not named 'reflection' due to the 'reflection' property.
     *
     * @param {string} target
     * @return {*}  {Promise<void>}
     * @memberof Mage
     */
    public async applyReflection(target: string): Promise<void> {
        if (!this.ready) throw new Error("We aren't ready yet [applyReflection].")
        const relectioned = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]reflection['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("eval", cooldownCheck)
                reject(`reflection timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
        })
        this.socket.emit("skill", {
            name: "reflection",
            id: target,
        })
        return relectioned
    }
}
