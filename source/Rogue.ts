import { DeathData, EvalData, GameResponseData } from "./definitions/adventureland-server.js"
import { Constants } from "./Constants.js"
import { PingCompensatedCharacter } from "./PingCompensatedCharacter.js"

export class Rogue extends PingCompensatedCharacter {
    ctype: "rogue" = "rogue"

    // NOTE: UNTESTED
    // TODO: Add promises
    public async invis(): Promise<void> {
        if (!this.ready) throw new Error("We aren't ready yet [invis].")
        this.socket.emit("skill", { name: "invis" })
    }

    public async mentalBurst(target: string): Promise<void> {
        if (!this.ready) throw new Error("We aren't ready yet [mentalBurst].")
        const bursted = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]mentalburst['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("eval", cooldownCheck)
                    this.socket.off("death", deathCheck)
                    this.socket.off("game_response", failCheck)
                    resolve()
                }
            }

            const deathCheck = (data: DeathData) => {
                if (data.id == target) {
                    this.socket.off("eval", cooldownCheck)
                    this.socket.off("death", deathCheck)
                    this.socket.off("game_response", failCheck)
                    reject(`Entity ${target} not found`)
                }
            }

            const failCheck = (data: GameResponseData) => {
                if (typeof data == "object") {
                    if (data.response == "cooldown" && data.skill == "mentalburst") {
                        this.socket.off("eval", cooldownCheck)
                        this.socket.off("death", deathCheck)
                        this.socket.off("game_response", failCheck)
                        reject(`mentalBurst on ${target} failed due to cooldown (ms: ${data.ms}).`)
                    } else if (data.response == "too_far" && data.place == "mentalburst") {
                        this.socket.off("eval", cooldownCheck)
                        this.socket.off("death", deathCheck)
                        this.socket.off("game_response", failCheck)
                        reject(`${target} is too far away to mentalBurst (dist: ${data.dist}).`)
                    }
                }
            }

            setTimeout(() => {
                this.socket.off("eval", cooldownCheck)
                this.socket.off("death", deathCheck)
                this.socket.off("game_response", failCheck)
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
    public async poisonCoat(poison = this.locateItem("poison")): Promise<void> {
        if (!this.ready) throw new Error("We aren't ready yet [poisonCoat].")
        if (poison === undefined) throw new Error("We don't have any poison in our inventory.")

        const poisonCoated = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]pcoat['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("eval", cooldownCheck)
                reject(`poisonCoat timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
        })
        this.socket.emit("skill", {
            name: "pcoat",
            num: poison
        })
        return poisonCoated
    }

    // NOTE: UNTESTED
    public async quickPunch(target: string): Promise<void> {
        if (!this.ready) throw new Error("We aren't ready yet [quickPunch].")
        const marked = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]quickpunch['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("eval", cooldownCheck)
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

    public async quickStab(target: string): Promise<void> {
        if (!this.ready) throw new Error("We aren't ready yet [quickStab].")
        const stabbed = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]quickstab['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("eval", cooldownCheck)
                    this.socket.off("death", deathCheck)
                    this.socket.off("game_response", failCheck)
                    resolve()
                }
            }

            const failCheck = (data: GameResponseData) => {
                if (typeof data == "object") {
                    if (data.response == "cooldown" && data.skill == "quickstab") {
                        this.socket.off("eval", cooldownCheck)
                        this.socket.off("death", deathCheck)
                        this.socket.off("game_response", failCheck)
                        reject(`quickStab on ${target} failed due to cooldown (ms: ${data.ms}).`)
                    } else if (data.response == "too_far" && data.place == "quickstab") {
                        this.socket.off("eval", cooldownCheck)
                        this.socket.off("death", deathCheck)
                        this.socket.off("game_response", failCheck)
                        reject(`${target} is too far away to quickStab (dist: ${data.dist}).`)
                    }
                }
            }

            const deathCheck = (data: DeathData) => {
                if (data.id == target) {
                    this.socket.off("eval", cooldownCheck)
                    this.socket.off("death", deathCheck)
                    this.socket.off("game_response", failCheck)
                    reject(`Entity ${target} not found`)
                }
            }

            setTimeout(() => {
                this.socket.off("eval", cooldownCheck)
                this.socket.off("death", deathCheck)
                this.socket.off("game_response", failCheck)
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

    // TODO: Improve to check if we applied it on the given character
    public async rspeed(target: string): Promise<void> {
        if (!this.ready) throw new Error("We aren't ready yet [rspeed].")
        const rSpeedApplied = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]rspeed['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("eval", cooldownCheck)
                reject(`rspeed timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
        })
        this.socket.emit("skill", {
            id: target,
            name: "rspeed",
        })
        return rSpeedApplied
    }

    // NOTE: UNTESTED
    public async shadowStrike(shadowstone = this.locateItem("shadowstone")): Promise<void> {
        if (!this.ready) throw new Error("We aren't ready yet [shadowStrike].")
        if (shadowstone === undefined) throw new Error("We need a shadowstone in order to shadowstrike.")

        const shadowStriked = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]shadowstrike['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("eval", cooldownCheck)
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

    // NOTE: Untested
    // TODO: Add promises
    public async stopInvis() {
        if (!this.ready) throw new Error("We aren't ready yet [stopInvis].")
        this.socket.emit("stop", { action: "invis" })
    }
}