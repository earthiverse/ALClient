import { ActionData, DeathData, EvalData, GameResponseData, NotThereData } from "./definitions/adventureland-server.js"
import { Constants } from "./Constants.js"
import { PingCompensatedCharacter } from "./PingCompensatedCharacter.js"

export class Priest extends PingCompensatedCharacter {
    ctype: "priest" = "priest"

    public async absorbSins(target: string): Promise<void> {
        if (!this.ready) throw new Error("We aren't ready yet [absorbSins].")
        const absorbed = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]absorb['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("eval", cooldownCheck)
                reject(`curse timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
        })

        this.socket.emit("skill", { id: target, name: "absorb" })
        return absorbed
    }

    public async curse(target: string): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [curse].")

        const response = this.getResponsePromise("curse")
        this.socket.emit("skill", { id: target, name: "curse" })
        return response
    }

    public async darkBlessing(): Promise<void> {
        if (!this.ready) throw new Error("We aren't ready yet [darkBlessing].")
        const darkBlessed = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]darkblessing['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("eval", cooldownCheck)
                reject(`darkblessing timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
        })

        this.socket.emit("skill", { name: "darkblessing" })
        return darkBlessed
    }

    public async heal(id: string): Promise<string> {
        if (!this.ready) throw new Error("We aren't ready yet [heal].")

        let projectile: string
        const getProjectile = (data: ActionData) => {
            if (data.attacker == this.id
                && data.type == "heal"
                && data.target == id) {
                projectile = data.pid
            }
        }
        this.socket.on("action", getProjectile)

        try {
            const response = this.getResponsePromise("heal")
            this.socket.emit("heal", { id: id })
            await response
        } finally {
            this.socket.off("action", getProjectile)
        }

        return projectile
    }

    public async partyHeal(): Promise<void> {
        if (!this.ready) throw new Error("We aren't ready yet [partyHeal].")
        const healStarted = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]partyheal['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("eval", cooldownCheck)
                reject(`partyHeal timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
        })

        this.socket.emit("skill", { name: "partyheal" })
        return healStarted
    }

    // NOTE: Untested. We might need to increase the timeout?
    public async revive(target: string, essenceOfLife = this.locateItem("essenceoflife")): Promise<void> {
        if (!this.ready) throw new Error("We aren't ready yet [revive].")
        if (essenceOfLife === undefined) throw new Error("We don't have any essenceoflife in our inventory.")

        const revived = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]revive['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("eval", cooldownCheck)
                reject(`revive timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
        })

        this.socket.emit("skill", { id: target, name: "revive", num: essenceOfLife })
        return revived
    }
}
