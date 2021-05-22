import { CharacterData, EvalData } from "./definitions/adventureland-server"
import { Constants } from "./Constants"
import { PingCompensatedCharacter } from "./PingCompensatedCharacter"

export class Paladin extends PingCompensatedCharacter {
    // NOTE: Untested
    public manaShieldOff(): Promise<void> {
        if (!this.s.mshield) return Promise.resolve() // It's already off

        const shieldCheck = new Promise<void>((resolve, reject) => {
            const successCheck = (data: CharacterData) => {
                if (!data.s || !data.s.mshield) {
                    this.socket.removeListener("player", successCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.removeListener("player", successCheck)
                reject(`manaShieldOff timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
        })

        this.socket.emit("skill", { name: "mshield" })
        return shieldCheck
    }

    // NOTE: Untested
    public manaShieldOn(): Promise<void> {
        if (this.s.mshield) return Promise.resolve() // It's already on

        const shieldCheck = new Promise<void>((resolve, reject) => {
            const successCheck = (data: CharacterData) => {
                if (data.s?.mshield) {
                    this.socket.removeListener("player", successCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.removeListener("player", successCheck)
                reject(`manaShieldOn timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
        })

        this.socket.emit("skill", { name: "mshield" })
        return shieldCheck
    }

    // NOTE: Untested
    public selfHeal(): Promise<void> {
        const healed = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]selfheal['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.removeListener("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.removeListener("eval", cooldownCheck)
                reject(`selfheal timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
        })
        this.socket.emit("skill", { name: "selfheal" })
        return healed
    }
}