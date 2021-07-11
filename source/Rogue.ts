import { DeathData, EvalData, GameResponseData } from "./definitions/adventureland-server"
import { Constants } from "./Constants"
import { PingCompensatedCharacter } from "./PingCompensatedCharacter"

export class Rogue extends PingCompensatedCharacter {
    // NOTE: UNTESTED
    // TODO: Add promises
    public invis(): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [invis].")
        this.socket.emit("skill", { name: "invis" })
    }

    // NOTE: UNTESTED
    public mentalBurst(target: string): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [mentalBurst].")
        const bursted = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]mentalburst['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.removeListener("eval", cooldownCheck)
                    this.socket.removeListener("death", deathCheck)
                    this.socket.removeListener("game_response", failCheck)
                    resolve()
                }
            }

            const deathCheck = (data: DeathData) => {
                if (data.id == target) {
                    this.socket.removeListener("eval", cooldownCheck)
                    this.socket.removeListener("death", deathCheck)
                    this.socket.removeListener("game_response", failCheck)
                    reject(`Entity ${target} not found`)
                }
            }

            const failCheck = (data: GameResponseData) => {
                if (typeof data == "object") {
                    if (data.response == "cooldown" && data.skill == "mentalburst") {
                        this.socket.removeListener("eval", cooldownCheck)
                        this.socket.removeListener("death", deathCheck)
                        this.socket.removeListener("game_response", failCheck)
                        reject(`mentalBurst on ${target} failed due to cooldown (ms: ${data.ms}).`)
                    } else if (data.response == "too_far" && data.place == "mentalburst") {
                        this.socket.removeListener("eval", cooldownCheck)
                        this.socket.removeListener("death", deathCheck)
                        this.socket.removeListener("game_response", failCheck)
                        reject(`${target} is too far away to mentalBurst (dist: ${data.dist}).`)
                    }
                }
            }

            setTimeout(() => {
                this.socket.removeListener("eval", cooldownCheck)
                this.socket.removeListener("death", deathCheck)
                this.socket.removeListener("game_response", failCheck)
                reject(`mentalBurst timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
            this.socket.on("death", deathCheck)
            this.socket.on("game_response", failCheck)
        })
        this.socket.emit("skill", {
            id: target,
            name: "mentalburst"
        })
        return bursted
    }

    // NOTE: UNTESTED
    public poisonCoat(): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [poisonCoat].")
        const poisonCoated = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]pcoat['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.removeListener("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.removeListener("eval", cooldownCheck)
                reject(`poisoncoat timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
        })
        this.socket.emit("skill", {
            name: "pcoat"
        })
        return poisonCoated
    }

    // NOTE: UNTESTED
    public quickPunch(target: string): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [quickPunch].")
        const marked = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]quickpunch['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.removeListener("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.removeListener("eval", cooldownCheck)
                reject(`quickPunch timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
        })
        this.socket.emit("skill", {
            id: target,
            name: "quickpunch"
        })
        return marked
    }

    // NOTE: UNTESTED
    public quickStab(target: string): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [quickStab].")
        const stabbed = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]quickstab['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.removeListener("eval", cooldownCheck)
                    this.socket.removeListener("death", deathCheck)
                    this.socket.removeListener("game_response", failCheck)
                    resolve()
                }
            }

            const failCheck = (data: GameResponseData) => {
                if (typeof data == "object") {
                    if (data.response == "cooldown" && data.skill == "quickstab") {
                        this.socket.removeListener("eval", cooldownCheck)
                        this.socket.removeListener("death", deathCheck)
                        this.socket.removeListener("game_response", failCheck)
                        reject(`quickStab on ${target} failed due to cooldown (ms: ${data.ms}).`)
                    } else if (data.response == "too_far" && data.place == "quickstab") {
                        this.socket.removeListener("eval", cooldownCheck)
                        this.socket.removeListener("death", deathCheck)
                        this.socket.removeListener("game_response", failCheck)
                        reject(`${target} is too far away to mentalBurst (dist: ${data.dist}).`)
                    }
                }
            }

            const deathCheck = (data: DeathData) => {
                if (data.id == target) {
                    this.socket.removeListener("eval", cooldownCheck)
                    this.socket.removeListener("death", deathCheck)
                    this.socket.removeListener("game_response", failCheck)
                    reject(`Entity ${target} not found`)
                }
            }

            setTimeout(() => {
                this.socket.removeListener("eval", cooldownCheck)
                this.socket.removeListener("death", deathCheck)
                this.socket.removeListener("game_response", failCheck)
                reject(`quickStab timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
            this.socket.on("death", deathCheck)
            this.socket.on("game_response", failCheck)
        })
        this.socket.emit("skill", {
            id: target,
            name: "quickstab"
        })
        return stabbed
    }

    // NOTE: UNTESTED
    // TODO: Improve to check if we applied it on the given character
    public rspeed(target: string): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [rspeed].")
        const swifted = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]rspeed['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.removeListener("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.removeListener("eval", cooldownCheck)
                reject(`rspeed timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
        })
        this.socket.emit("skill", {
            id: target,
            name: "rspeed",
        })
        return swifted
    }

    // NOTE: UNTESTED
    public shadowStrike(shadowstone = this.locateItem("shadowstone")): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [shadowStrike].")
        if (shadowstone === undefined) return Promise.reject("We need a shadowstone in order to shadowstrike.")

        const shadowStriked = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]shadowstrike['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.removeListener("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.removeListener("eval", cooldownCheck)
                reject(`shadowstrike timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
        })
        this.socket.emit("skill", {
            name: "shadowstrike",
            num: shadowstone
        })
        return shadowStriked
    }
}