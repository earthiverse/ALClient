import { CharacterData, ActionData, EvalData, GameResponseData } from "./definitions/adventureland-server.js"
import { Constants } from "./Constants.js"
import { PingCompensatedCharacter } from "./PingCompensatedCharacter.js"
import { IPosition } from "./index.js"

export class Warrior extends PingCompensatedCharacter {
    ctype: "warrior" = "warrior"

    // TODO: Investigate why the cooldown check doesn't work.
    public async agitate(): Promise<void> {
        if (!this.ready) throw "We aren't ready yet [agitate]."
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

        this.socket.volatile.emit("skill", {
            name: "agitate"
        })
        return agitated
    }

    public async charge(): Promise<void> {
        if (!this.ready) throw "We aren't ready yet [charge]."
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

        this.socket.volatile.emit("skill", { name: "charge" })
        return charged
    }

    public async cleave(): Promise<void> {
        if (!this.ready) throw "We aren't ready yet [cleave]."

        const cleaved = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]cleave['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("eval", cooldownCheck)
                    this.socket.off("game_response", failCheck)
                    resolve()
                }
            }

            const failCheck = (data: GameResponseData) => {
                if (typeof data == "object" && data.response == "cooldown" && data.skill == "cleave") {
                    this.socket.off("eval", cooldownCheck)
                    this.socket.off("game_response", failCheck)
                    reject(`Cleave failed due to cooldown (ms: ${data.ms}).`)
                }
            }

            setTimeout(() => {
                this.socket.off("eval", cooldownCheck)
                this.socket.off("game_response", failCheck)
                reject(`cleave timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
            this.socket.on("game_response", failCheck)
        })

        this.socket.volatile.emit("skill", {
            name: "cleave"
        })
        return cleaved
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
    public async dash(to: IPosition): Promise<void> {
        if (to.map && to.map !== this.map) throw "We cannot dash across maps."

        const dashed = new Promise<void>((resolve, reject) => {
            const dashedCheck = (data: EvalData) => {
                if (/^ui_move/.test(data.code)) {
                    this.socket.off("eval", dashedCheck)
                    this.socket.off("game_response", failCheck)
                    resolve()
                }
            }

            const failCheck = (data: GameResponseData) => {
                if (typeof (data) == "string") {
                    if (data == "dash_failed") {
                        this.socket.off("eval", dashedCheck)
                        this.socket.off("game_response", failCheck)
                        reject("Dash failed")
                    }
                }
            }

            setTimeout(() => {
                this.socket.off("eval", dashedCheck)
                this.socket.off("game_response", failCheck)
                reject(`dash timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", dashedCheck)
            this.socket.on("game_response", failCheck)
        })

        this.socket.volatile.emit("skill", {
            name: "dash",
            x: to.x,
            y: to.y
        })
        return dashed
    }

    public async hardshell(): Promise<void> {
        if (!this.ready) throw "We aren't ready yet [hardshell]."
        const hardshelled = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]hardshell['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("player", successCheck)
                    this.socket.off("eval", cooldownCheck)
                    this.socket.off("game_response", responseCheck)
                    resolve()
                }
            }

            const successCheck = (data: CharacterData) => {
                if (!data.hitchhikers)
                    return
                for (const [event, datum] of data.hitchhikers) {
                    if (event == "game_response" && datum.response == "skill_success" && datum.name == "hardshell") {
                        this.socket.off("player", successCheck)
                        this.socket.off("eval", cooldownCheck)
                        this.socket.off("game_response", responseCheck)
                        resolve()
                        return
                    }
                }
            }

            const responseCheck = (data: GameResponseData) => {
                if (typeof data == "object") {
                    if (data.response == "cooldown" && data.skill == "hardshell") {
                        this.socket.off("player", successCheck)
                        this.socket.off("eval", cooldownCheck)
                        this.socket.off("game_response", responseCheck)
                        reject(`Hardshell failed due to cooldown (ms: ${data.ms}).`)
                    } else if (data.response == "skill_success" && data.name == "hardshell") {
                        this.socket.off("player", successCheck)
                        this.socket.off("eval", cooldownCheck)
                        this.socket.off("game_response", responseCheck)
                        resolve()
                    }
                }
            }

            setTimeout(() => {
                this.socket.off("player", successCheck)
                this.socket.off("eval", cooldownCheck)
                this.socket.off("game_response", responseCheck)
                reject(`hardshell timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("player", successCheck)
            this.socket.on("eval", cooldownCheck)
            this.socket.on("game_response", responseCheck)
        })

        this.socket.volatile.emit("skill", {
            name: "hardshell"
        })
        return hardshelled
    }

    // TODO: Return ids of those monsters & players that are now stomped
    public async stomp(): Promise<void> {
        if (!this.ready) throw "We aren't ready yet [stomp]."
        const stomped = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]stomp['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("eval", cooldownCheck)
                    this.socket.off("game_response", failCheck)
                    resolve()
                }
            }

            const failCheck = (data: GameResponseData) => {
                if (typeof data == "object" && data.response == "cooldown" && data.skill == "stomp") {
                    this.socket.off("eval", cooldownCheck)
                    this.socket.off("game_response", failCheck)
                    reject(`Stomp failed due to cooldown (ms: ${data.ms}).`)
                }
            }

            setTimeout(() => {
                this.socket.off("eval", cooldownCheck)
                this.socket.off("game_response", failCheck)
                reject(`stomp timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
            this.socket.on("game_response", failCheck)
        })

        this.socket.volatile.emit("skill", {
            name: "stomp"
        })
        return stomped
    }

    public async taunt(target: string): Promise<string> {
        if (!this.ready) throw "We aren't ready yet [taunt]."
        const tauntStarted = new Promise<string>((resolve, reject) => {
            const tauntCheck = (data: ActionData) => {
                if (data.attacker == this.id
                    && data.type == "taunt"
                    && data.target == target) {
                    this.socket.off("action", tauntCheck)
                    this.socket.off("game_response", failCheck)
                    resolve(data.pid)
                }
            }

            const failCheck = (data: GameResponseData) => {
                if (typeof data == "object") {
                    if (data.response == "no_target") {
                        this.socket.off("action", tauntCheck)
                        this.socket.off("game_response", failCheck)
                        reject(`Taunt on ${target} failed (no target).`)
                    } else if (data.response == "too_far" && data.id == target) {
                        this.socket.off("action", tauntCheck)
                        this.socket.off("game_response", failCheck)
                        reject(`${target} is too far away to taunt (dist: ${data.dist}).`)
                    } else if (data.response == "cooldown" && data.id == target && data.skill == "taunt") {
                        this.socket.off("action", tauntCheck)
                        this.socket.off("game_response", failCheck)
                        reject(`Taunt on ${target} failed due to cooldown (ms: ${data.ms}).`)
                    }
                }
            }

            setTimeout(() => {
                this.socket.off("action", tauntCheck)
                this.socket.off("game_response", failCheck)
                reject(`taunt timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("action", tauntCheck)
            this.socket.on("game_response", failCheck)
        })

        this.socket.volatile.emit("skill", { name: "taunt", id: target })
        return tauntStarted
    }

    public async warcry(): Promise<void> {
        if (!this.ready) throw "We aren't ready yet [warcry]."
        const warCried = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]warcry['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("eval", cooldownCheck)
                reject(`warcry timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
        })

        this.socket.volatile.emit("skill", { name: "warcry" })
        return warCried
    }
}
