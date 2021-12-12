import { ActionData, EvalData, GameResponseData } from "./definitions/adventureland-server.js"
import { Constants } from "./Constants.js"
import { PingCompensatedCharacter } from "./PingCompensatedCharacter.js"

export class Ranger extends PingCompensatedCharacter {
    ctype: "ranger" = "ranger"

    public fiveShot(target1: string, target2: string, target3: string, target4: string, target5: string): Promise<string[]> {
        if (!this.ready) return Promise.reject("We aren't ready yet [fiveShot].")
        const attackStarted = new Promise<string[]>((resolve, reject) => {
            const projectiles: string[] = []

            const attackCheck = (data: ActionData) => {
                if (data.attacker == this.id
                    && data.type == "5shot"
                    && (data.target == target1 || data.target == target2 || data.target == target3 || data.target == target4 || data.target == target5)) {
                    projectiles.push(data.pid)
                }
            }

            const failCheck = (data: GameResponseData) => {
                if (typeof data == "object") {
                    if (data.response == "cooldown" && data.skill == "5shot") {
                        this.socket.off("action", attackCheck)
                        this.socket.off("game_response", failCheck)
                        this.socket.off("eval", cooldownCheck)
                        reject(`fiveShot failed due to cooldown (ms: ${data.ms}).`)
                    } else if (data.response == "no_mp" && data.place == "5shot") {
                        this.socket.off("action", attackCheck)
                        this.socket.off("game_response", failCheck)
                        this.socket.off("eval", cooldownCheck)
                        reject("fiveShot failed due to insufficient MP.")
                    }
                }
            }

            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]5shot['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("action", attackCheck)
                    this.socket.off("game_response", failCheck)
                    this.socket.off("eval", cooldownCheck)
                    resolve(projectiles)
                }
            }

            setTimeout(() => {
                this.socket.off("action", attackCheck)
                this.socket.off("game_response", failCheck)
                this.socket.off("eval", cooldownCheck)
                reject(`5shot timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("action", attackCheck)
            this.socket.on("game_response", failCheck)
            this.socket.on("eval", cooldownCheck)
        })

        this.socket.emit("skill", {
            ids: [target1, target2, target3, target4, target5],
            name: "5shot"
        })
        return attackStarted
    }

    // NOTE: UNTESTED
    public fourFinger(target: string): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [fourFinger].")
        // TODO: Check that the target is not a monster.

        const marked = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]4fingers['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("eval", cooldownCheck)
                reject(`fourfinger timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
        })
        this.socket.emit("skill", {
            id: target,
            name: "4fingers"
        })
        return marked
    }

    public huntersMark(target: string): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [huntersMark].")
        const marked = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]huntersmark['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("eval", cooldownCheck)
                reject(`huntersmark timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
        })
        this.socket.emit("skill", {
            id: target,
            name: "huntersmark"
        })
        return marked
    }

    public piercingShot(target: string): Promise<string> {
        if (!this.ready) return Promise.reject("We aren't ready yet [piercingShot].")
        if (this.G.skills.piercingshot.mp > this.mp) return Promise.reject("Not enough MP to use piercingShot")

        const piercingShotStarted = new Promise<string>((resolve, reject) => {
            let projectile: string

            const attackCheck = (data: ActionData) => {
                if (data.attacker == this.id
                    && data.type == "piercingshot"
                    && data.target == target) {
                    projectile = data.pid
                }
            }

            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]attack['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("action", attackCheck)
                    this.socket.off("eval", cooldownCheck)
                    resolve(projectile)
                }
            }

            setTimeout(() => {
                this.socket.off("action", attackCheck)
                this.socket.off("eval", cooldownCheck)
                reject(`piercingshot timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("action", attackCheck)
            this.socket.on("eval", cooldownCheck)
        })

        this.socket.emit("skill", { id: target, name: "piercingshot" })
        return piercingShotStarted
    }

    // NOTE: UNTESTED
    public poisonArrow(target: string, poison = this.locateItem("poison")): Promise<string> {
        if (!this.ready) return Promise.reject("We aren't ready yet [poisonArrow].")
        if (poison === undefined) return Promise.reject("We need poison to use this skill.")

        const poisonArrowed = new Promise<string>((resolve, reject) => {
            let projectile: string

            const attackCheck = (data: ActionData) => {
                if (data.attacker == this.id
                    && data.type == "poisonarrow"
                    && data.target == target) {
                    projectile = data.pid
                }
            }

            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]poisonarrow['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("action", attackCheck)
                    this.socket.off("eval", cooldownCheck)
                    resolve(projectile)
                }
            }

            setTimeout(() => {
                this.socket.off("action", attackCheck)
                this.socket.off("eval", cooldownCheck)
                reject(`poisonarrow timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("action", attackCheck)
            this.socket.on("eval", cooldownCheck)
        })

        this.socket.emit("skill", { id: target, name: "poisonarrow", num: poison })
        return poisonArrowed
    }

    /**
     * TODO: Add a fail check for when we supershot an entity that doesn't exist (probably already killed)
     *
     * @param {string} target
     * @return {*}  {Promise<string>}
     * @memberof Ranger
     */
    public superShot(target: string): Promise<string> {
        if (!this.ready) return Promise.reject("We aren't ready yet [superShot].")
        if (this.G.skills.supershot.mp > this.mp) return Promise.reject("Not enough MP to use superShot")

        const superShotStarted = new Promise<string>((resolve, reject) => {
            let projectile: string

            const attackCheck = (data: ActionData) => {
                if (data.attacker == this.id
                    && data.type == "supershot"
                    && data.target == target) {
                    projectile = data.pid
                }
            }

            // TODO: Find a socket event for the fail
            // const failCheck = (data: GameResponseData) => {
            //     if(typeof data == "string") {
            //         if(data == "no_target") {

            //         }
            //     }
            // }

            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]supershot['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("action", attackCheck)
                    this.socket.off("eval", cooldownCheck)
                    resolve(projectile)
                }
            }

            setTimeout(() => {
                this.socket.off("action", attackCheck)
                this.socket.off("eval", cooldownCheck)
                reject(`supershot timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("action", attackCheck)
            this.socket.on("eval", cooldownCheck)
        })

        this.socket.emit("skill", { id: target, name: "supershot" })
        return superShotStarted
    }

    public threeShot(target1: string, target2: string, target3: string): Promise<string[]> {
        if (!this.ready) return Promise.reject("We aren't ready yet [threeShot].")
        const attackStarted = new Promise<string[]>((resolve, reject) => {
            const projectiles: string[] = []

            const attackCheck = (data: ActionData) => {
                if (data.attacker == this.id
                    && data.type == "3shot"
                    && (data.target == target1 || data.target == target2 || data.target == target3)) {
                    projectiles.push(data.pid)
                }
            }

            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]3shot['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("action", attackCheck)
                    this.socket.off("game_response", failCheck)
                    this.socket.off("eval", cooldownCheck)
                    resolve(projectiles)
                }
            }

            const failCheck = (data: GameResponseData) => {
                if (typeof data == "object") {
                    if (data.response == "cooldown" && data.skill == "3shot") {
                        this.socket.off("action", attackCheck)
                        this.socket.off("game_response", failCheck)
                        this.socket.off("eval", cooldownCheck)
                        reject(`threeShot failed due to cooldown (ms: ${data.ms}).`)
                    } else if (data.response == "no_mp" && data.place == "3shot") {
                        this.socket.off("action", attackCheck)
                        this.socket.off("game_response", failCheck)
                        this.socket.off("eval", cooldownCheck)
                        reject("threeShot failed due to insufficient MP.")
                    }
                }
            }

            setTimeout(() => {
                this.socket.off("action", attackCheck)
                this.socket.off("game_response", failCheck)
                this.socket.off("eval", cooldownCheck)
                reject(`3shot timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("action", attackCheck)
            this.socket.on("game_response", failCheck)
            this.socket.on("eval", cooldownCheck)
        })

        this.socket.emit("skill", {
            ids: [target1, target2, target3],
            name: "3shot"
        })
        return attackStarted
    }
}
