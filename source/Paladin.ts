import { CharacterData, EvalData } from "./definitions/adventureland-server"
import { Constants } from "./Constants"
import { PingCompensatedCharacter } from "./PingCompensatedCharacter"

export class Paladin extends PingCompensatedCharacter {
    // NOTE: Untested
    public manaShieldOff(): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [manaShieldOff].")
        if (!this.s.mshield) return Promise.resolve() // It's already off

        const shieldCheck = new Promise<void>((resolve, reject) => {
            const successCheck = (data: CharacterData) => {
                if (!data.s || !data.s.mshield) {
                    this.socket.off("player", successCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("player", successCheck)
                reject(`manaShieldOff timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
        })

        this.socket.emit("skill", { name: "mshield" })
        return shieldCheck
    }

    // NOTE: Untested
    public manaShieldOn(): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [manaShieldOn].")
        if (this.s.mshield) return Promise.resolve() // It's already on

        const shieldCheck = new Promise<void>((resolve, reject) => {
            const successCheck = (data: CharacterData) => {
                if (data.s?.mshield) {
                    this.socket.off("player", successCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("player", successCheck)
                reject(`manaShieldOn timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
        })

        this.socket.emit("skill", { name: "mshield" })
        return shieldCheck
    }

    // NOTE: Untested
    public selfHeal(): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [selfHeal].")
        const healed = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]selfheal['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("eval", cooldownCheck)
                reject(`selfheal timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
        })
        this.socket.emit("skill", { name: "selfheal" })
        return healed
    }
}