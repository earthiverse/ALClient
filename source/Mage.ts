import { TIMEOUT } from "./Constants"
import { EvalData, GameResponseData } from "./definitions/adventureland-server"
import { Pathfinder } from "./pathfinder.js"
import { PingCompensatedPlayer } from "./PingCompensatedPlayer.js"

export class Mage extends PingCompensatedPlayer {
    // TODO: Add promises
    public blink(x: number, y: number): void {
        const blinkTo = { map: this.character.map, x: x, y: y }
        // TODO: We should have an isWalkable(NodeData) position.
        if (Pathfinder.canWalk(blinkTo, blinkTo)) {
            this.socket.emit("skill", { name: "blink", x: x, y: y })
        }
    }

    /**
     *
     * @param targets Put in pairs of entity IDs, and how much mp to spend attacking each target. E.g.: [["12345", "100"]]
     */
    public cburst(targets: [string, number][]): Promise<unknown> {
        const cbursted = new Promise((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]cburst['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.removeListener("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.removeListener("eval", cooldownCheck)
                reject(`cburst timeout (${TIMEOUT}ms)`)
            }, TIMEOUT)
            this.socket.on("eval", cooldownCheck)
        })

        this.socket.emit("skill", { name: "cburst", targets: targets })
        return cbursted
    }

    public energize(target: string): Promise<unknown> {
        const energized = new Promise((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]energize['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.removeListener("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.removeListener("eval", cooldownCheck)
                reject(`energize timeout (${TIMEOUT}ms)`)
            }, TIMEOUT)
            this.socket.on("eval", cooldownCheck)
        })

        this.socket.emit("skill", { name: "energize", id: target })
        return energized
    }

    public magiport(target: string): Promise<unknown> {
        const magiportOfferSent = new Promise((resolve, reject) => {
            const magiportCheck = (data: GameResponseData) => {
                if (typeof data == "object") {
                    if (data.response == "magiport_failed" && data.id == target) {
                        this.socket.removeListener("game_response", magiportCheck)
                        reject(`Magiport for '${target}' failed.`)
                    } else if (data.response == "magiport_sent" && data.id == target) {
                        this.socket.removeListener("game_response", magiportCheck)
                        resolve(`Magiport request sent to ${target}.`)
                    }
                }
            }

            setTimeout(() => {
                this.socket.removeListener("game_response", magiportCheck)
                reject(`magiport timeout (${TIMEOUT}ms)`)
            }, TIMEOUT)
            this.socket.on("game_response", magiportCheck)
        })

        this.socket.emit("skill", { name: "magiport", id: target })
        return magiportOfferSent
    }
}
