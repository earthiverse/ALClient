import { TIMEOUT } from "./Constants"
import { ActionData, DeathData, EvalData, GameResponseData } from "./definitions/adventureland-server"
import { PingCompensatedPlayer } from "./PingCompensatedPlayer"

export class Priest extends PingCompensatedPlayer {
    public curse(target: string): Promise<unknown> {
        const curseStarted = new Promise<string[]>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]curse['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.removeListener("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.removeListener("eval", cooldownCheck)
                reject(`curse timeout (${TIMEOUT}ms)`)
            }, TIMEOUT)
            this.socket.on("eval", cooldownCheck)
        })

        this.socket.emit("skill", { name: "curse", id: target })
        return curseStarted
    }

    public heal(id: string): Promise<string> {
        // if (!this.game.entities.has(id) && !this.game.players.has(id)) return Promise.reject(`No Entity with ID '${id}'`)
        const healStarted = new Promise<string>((resolve, reject) => {
            const deathCheck = (data: DeathData) => {
                if (data.id == id) {
                    this.socket.removeListener("action", attackCheck)
                    this.socket.removeListener("game_response", failCheck)
                    this.socket.removeListener("death", deathCheck)
                    reject(`Entity ${id} not found`)
                }
            }
            const failCheck = (data: GameResponseData) => {
                if (typeof data == "object") {
                    if (data.response == "disabled") {
                        this.socket.removeListener("action", attackCheck)
                        this.socket.removeListener("game_response", failCheck)
                        this.socket.removeListener("death", deathCheck)
                        reject(`Heal on ${id} failed (disabled).`)
                    } else if (data.response == "attack_failed" && data.id == id) {
                        this.socket.removeListener("action", attackCheck)
                        this.socket.removeListener("game_response", failCheck)
                        this.socket.removeListener("death", deathCheck)
                        reject(`Heal on ${id} failed.`)
                    } else if (data.response == "too_far" && data.id == id) {
                        this.socket.removeListener("action", attackCheck)
                        this.socket.removeListener("game_response", failCheck)
                        this.socket.removeListener("death", deathCheck)
                        reject(`${id} is too far away to heal (dist: ${data.dist}).`)
                    } else if (data.response == "cooldown" && data.id == id) {
                        this.socket.removeListener("action", attackCheck)
                        this.socket.removeListener("game_response", failCheck)
                        this.socket.removeListener("death", deathCheck)
                        reject(`Heal on ${id} failed due to cooldown (ms: ${data.ms}).`)
                    }
                }
            }
            const attackCheck = (data: ActionData) => {
                if (data.attacker == this.character.id && data.target == id && data.type == "heal") {
                    this.socket.removeListener("action", attackCheck)
                    this.socket.removeListener("game_response", failCheck)
                    this.socket.removeListener("death", deathCheck)
                    resolve(data.pid)
                }
            }
            setTimeout(() => {
                this.socket.removeListener("action", attackCheck)
                this.socket.removeListener("game_response", failCheck)
                this.socket.removeListener("death", deathCheck)
                reject(`heal timeout (${TIMEOUT}ms)`)
            }, TIMEOUT)
            this.socket.on("action", attackCheck)
            this.socket.on("game_response", failCheck)
            this.socket.on("death", deathCheck)
        })

        this.socket.emit("heal", { id: id })
        return healStarted
    }

    public partyHeal(): Promise<string[]> {
        const healStarted = new Promise<string[]>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]partyheal['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.removeListener("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.removeListener("eval", cooldownCheck)
                reject(`partyHeal timeout (${TIMEOUT}ms)`)
            }, TIMEOUT)
            this.socket.on("eval", cooldownCheck)
        })

        this.socket.emit("skill", { name: "partyheal" })
        return healStarted
    }
}
