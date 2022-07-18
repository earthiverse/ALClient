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
     *
     * @param targets Put in pairs of entity IDs, and how much mp to spend attacking each target. E.g.: [["12345", "100"]]
     */
    public async cburst(targets: [string, number][]): Promise<void> {
        if (!this.ready) throw new Error("We aren't ready yet [cburst].")
        if (targets.length == 0) throw new Error("No targets were given to cburst.")
        const cbursted = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]cburst['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("game_response", failCheck)
                    this.socket.off("disappearing_text", failCheck2)
                    this.socket.off("eval", cooldownCheck)
                    resolve()
                }
            }

            const failCheck = (data: GameResponseData) => {
                if (typeof data == "object") {
                    if (data.response == "cooldown" && data.skill == "cburst") {
                        this.socket.off("game_response", failCheck)
                        this.socket.off("disappearing_text", failCheck2)
                        this.socket.off("eval", cooldownCheck)
                        reject(`cburst failed due to cooldown (ms: ${data.ms}).`)
                    } else if (data.response == "no_mp" && data.place == "cburst") {
                        this.socket.off("game_response", failCheck)
                        this.socket.off("disappearing_text", failCheck2)
                        this.socket.off("eval", cooldownCheck)
                        reject("cburst failed due to insufficient MP.")
                    } else if (data.response == "too_far" && data.place == "cburst") {
                        // TODO: I don't think this is correct. What if you attack 2, and
                        //       only one is out of range? We should keep track, and check
                        //       against the length of the targets array.
                        this.socket.off("game_response", failCheck)
                        this.socket.off("disappearing_text", failCheck2)
                        this.socket.off("eval", cooldownCheck)
                        reject(`${data.id} is too far away to cburst (dist: ${data.dist}).`)
                    }
                } else if (typeof data == "string") {
                    if (data == "skill_cant_incapacitated") {
                        this.socket.off("game_response", failCheck)
                        this.socket.off("disappearing_text", failCheck2)
                        this.socket.off("eval", cooldownCheck)
                        reject("We can't cburst, we are incapacitated.")
                    }
                }
            }

            const failCheck2 = (data: DisappearingTextData) => {
                if (data.message == "NO HITS" && data.id == this.id) {
                    this.socket.off("game_response", failCheck)
                    this.socket.off("disappearing_text", failCheck2)
                    this.socket.off("eval", cooldownCheck)
                    resolve() // We technically cbursted, we just didn't hit anything
                }
            }

            setTimeout(() => {
                this.socket.off("game_response", failCheck)
                this.socket.off("disappearing_text", failCheck2)
                this.socket.off("eval", cooldownCheck)
                reject(`cburst timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
            this.socket.on("game_response", failCheck)
            this.socket.on("disappearing_text", failCheck2)
        })

        this.socket.emit("skill", { name: "cburst", targets: targets })
        return cbursted
    }

    public async energize(target: string, mp?: number): Promise<void> {
        if (!this.ready) throw new Error("We aren't ready yet [energize].")
        const energized = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]energize['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("eval", cooldownCheck)
                reject(`energize timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
        })

        this.socket.emit("skill", { id: target, mp: mp, name: "energize" })
        return energized
    }

    // NOTE: UNTESTED
    public async entangle(target: string, essenceofnature = this.locateItem("essenceofnature")): Promise<void> {
        if (!this.ready) throw new Error("We aren't ready yet [entangle].")
        if (essenceofnature === undefined) throw new Error("We need an essenceofnature in order to entangle.")

        const tangled = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]entangle['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("eval", cooldownCheck)
                reject(`entangle timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
        })
        this.socket.emit("skill", {
            name: "entangle",
            id: target,
            num: essenceofnature
        })
        return tangled
    }

    public async light(): Promise<void> {
        if (!this.ready) throw new Error("We aren't ready yet [light].")
        const lit = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]light['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("eval", cooldownCheck)
                reject(`light timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
        })
        this.socket.emit("skill", {
            name: "light"
        })
        return lit
    }

    public async magiport(target: string): Promise<void> {
        if (!this.ready) throw new Error("We aren't ready yet [magiport].")
        const magiportOfferSent = new Promise<void>((resolve, reject) => {
            const magiportCheck = (data: GameResponseData) => {
                if (typeof data == "object") {
                    if (data.response == "magiport_failed" && data.id == target) {
                        this.socket.off("game_response", magiportCheck)
                        reject(`Magiport for '${target}' failed.`)
                    } else if (data.response == "magiport_sent" && data.id == target) {
                        this.socket.off("game_response", magiportCheck)
                        resolve()
                    }
                }
            }

            setTimeout(() => {
                this.socket.off("game_response", magiportCheck)
                reject(`magiport timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("game_response", magiportCheck)
        })

        this.socket.emit("skill", { name: "magiport", id: target })
        return magiportOfferSent
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
