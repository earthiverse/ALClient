import { CharacterData, ActionData, EvalData, GameResponseData } from "./definitions/adventureland-server"
import { Constants } from "./Constants"
import { PingCompensatedPlayer } from "./PingCompensatedPlayer"

export class Warrior extends PingCompensatedPlayer {
    // TODO: Investigate why the cooldown check doesn't work.
    public agitate(): Promise<unknown> {
        const agitated = new Promise((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]agitate['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.removeListener("eval", cooldownCheck)
                    this.socket.removeListener("game_response", failCheck)
                    resolve()
                }
            }

            const failCheck = (data: GameResponseData) => {
                if (typeof data == "object" && data.response == "cooldown" && data.skill == "agitate") {
                    this.socket.removeListener("eval", cooldownCheck)
                    this.socket.removeListener("game_response", failCheck)
                    reject(`Agitate failed due to cooldown (ms: ${data.ms}).`)
                }
            }

            setTimeout(() => {
                this.socket.removeListener("eval", cooldownCheck)
                this.socket.removeListener("game_response", failCheck)
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

    public charge(): Promise<unknown> {
        const charged = new Promise((resolve, reject) => {
            const successCheck = (data: CharacterData) => {
                if (!data.hitchhikers)
                    return
                for (const [event, datum] of data.hitchhikers) {
                    if (event == "game_response" && datum.response == "skill_success" && datum.name == "charge") {
                        this.socket.removeListener("player", successCheck)
                        this.socket.removeListener("game_response", failCheck)
                        resolve()
                        return
                    }
                }
            }

            const failCheck = (data: GameResponseData) => {
                if (typeof data == "object") {
                    if (data.response == "cooldown" && data.skill == "charge") {
                        this.socket.removeListener("player", successCheck)
                        this.socket.removeListener("game_response", failCheck)
                        reject(`Charge failed due to cooldown (ms: ${data.ms}).`)
                    }
                }
            }

            setTimeout(() => {
                this.socket.removeListener("player", successCheck)
                this.socket.removeListener("game_response", failCheck)
                reject(`charge timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("player", successCheck)
            this.socket.on("game_response", failCheck)
        })

        this.socket.emit("skill", { name: "charge" })
        return charged
    }

    public cleave(): Promise<unknown> {
        if (this.G.skills.cleave.mp > this.character.mp)
            return Promise.reject("Not enough MP to use cleave")

        const cleaved = new Promise((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]cleave['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.removeListener("eval", cooldownCheck)
                    this.socket.removeListener("game_response", failCheck)
                    resolve()
                }
            }

            const failCheck = (data: GameResponseData) => {
                if (typeof data == "object" && data.response == "cooldown" && data.skill == "cleave") {
                    this.socket.removeListener("eval", cooldownCheck)
                    this.socket.removeListener("game_response", failCheck)
                    reject(`Cleave failed due to cooldown (ms: ${data.ms}).`)
                }
            }

            setTimeout(() => {
                this.socket.removeListener("eval", cooldownCheck)
                this.socket.removeListener("game_response", failCheck)
                reject(`cleave timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
            this.socket.on("game_response", failCheck)
        })

        this.socket.emit("skill", {
            name: "cleave"
        })
        return cleaved
    }

    public hardshell(): Promise<unknown> {
        const hardshelled = new Promise((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]hardshell['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.removeListener("player", successCheck)
                    this.socket.removeListener("eval", cooldownCheck)
                    this.socket.removeListener("game_response", responseCheck)
                    resolve()
                }
            }

            const successCheck = (data: CharacterData) => {
                if (!data.hitchhikers)
                    return
                for (const [event, datum] of data.hitchhikers) {
                    if (event == "game_response" && datum.response == "skill_success" && datum.name == "hardshell") {
                        this.socket.removeListener("player", successCheck)
                        this.socket.removeListener("eval", cooldownCheck)
                        this.socket.removeListener("game_response", responseCheck)
                        resolve()
                        return
                    }
                }
            }

            const responseCheck = (data: GameResponseData) => {
                if (typeof data == "object") {
                    if (data.response == "cooldown" && data.skill == "hardshell") {
                        this.socket.removeListener("player", successCheck)
                        this.socket.removeListener("eval", cooldownCheck)
                        this.socket.removeListener("game_response", responseCheck)
                        reject(`Hardshell failed due to cooldown (ms: ${data.ms}).`)
                    } else if (data.response == "skill_success" && data.name == "hardshell") {
                        this.socket.removeListener("player", successCheck)
                        this.socket.removeListener("eval", cooldownCheck)
                        this.socket.removeListener("game_response", responseCheck)
                        resolve()
                    }
                }
            }

            setTimeout(() => {
                this.socket.removeListener("player", successCheck)
                this.socket.removeListener("eval", cooldownCheck)
                this.socket.removeListener("game_response", responseCheck)
                reject(`hardshell timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("player", successCheck)
            this.socket.on("eval", cooldownCheck)
            this.socket.on("game_response", responseCheck)
        })

        this.socket.emit("skill", {
            name: "hardshell"
        })
        return hardshelled
    }

    // TODO: Return ids of those monsters & players that are now stomped
    public stomp(): Promise<unknown> {
        const stomped = new Promise((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]stomp['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.removeListener("eval", cooldownCheck)
                    this.socket.removeListener("game_response", failCheck)
                    resolve()
                }
            }

            const failCheck = (data: GameResponseData) => {
                if (typeof data == "object" && data.response == "cooldown" && data.skill == "stomp") {
                    this.socket.removeListener("eval", cooldownCheck)
                    this.socket.removeListener("game_response", failCheck)
                    reject(`Stomp failed due to cooldown (ms: ${data.ms}).`)
                }
            }

            setTimeout(() => {
                this.socket.removeListener("eval", cooldownCheck)
                this.socket.removeListener("game_response", failCheck)
                reject(`stomp timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
            this.socket.on("game_response", failCheck)
        })

        this.socket.emit("skill", {
            name: "stomp"
        })
        return stomped
    }

    // TODO: Investigate if cooldown is before or after the "action" event. We are getting lots of "failed due to cooldowns"
    public taunt(target: string): Promise<string> {
        const tauntStarted = new Promise<string>((resolve, reject) => {
            const tauntCheck = (data: ActionData) => {
                if (data.attacker == this.character.id
                    && data.type == "taunt"
                    && data.target == target) {
                    resolve(data.pid)
                    this.socket.removeListener("action", tauntCheck)
                }
            }

            const failCheck = (data: GameResponseData) => {
                if (typeof data == "object") {
                    if (data.response == "no_target") {
                        this.socket.removeListener("action", tauntCheck)
                        this.socket.removeListener("game_response", failCheck)
                        reject(`Taunt on ${target} failed (no target).`)
                    } else if (data.response == "too_far" && data.id == target) {
                        this.socket.removeListener("action", tauntCheck)
                        this.socket.removeListener("game_response", failCheck)
                        reject(`${target} is too far away to taunt (dist: ${data.dist}).`)
                    } else if (data.response == "cooldown" && data.id == target) {
                        this.socket.removeListener("action", tauntCheck)
                        this.socket.removeListener("game_response", failCheck)
                        reject(`Taunt on ${target} failed due to cooldown (ms: ${data.ms}).`)
                    }
                }
            }

            setTimeout(() => {
                this.socket.removeListener("action", tauntCheck)
                this.socket.removeListener("game_response", failCheck)
                reject(`taunt timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("action", tauntCheck)
            this.socket.on("game_response", failCheck)
        })

        this.socket.emit("skill", { name: "taunt", id: target })
        return tauntStarted
    }

    // TODO: Add promises and checks
    public warcry() {
        this.socket.emit("skill", { name: "warcry" })
    }
}
