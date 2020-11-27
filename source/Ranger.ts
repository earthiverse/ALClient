import { ActionData, EvalData } from "./definitions/adventureland-server"
import { Constants } from "./Constants"
import { PingCompensatedPlayer } from "./PingCompensatedPlayer"

export class Ranger extends PingCompensatedPlayer {
    public fiveShot(target1: string, target2: string, target3: string, target4: string, target5: string): Promise<string[]> {
        const attackStarted = new Promise<string[]>((resolve, reject) => {
            const projectiles: string[] = []

            const attackCheck = (data: ActionData) => {
                if (data.attacker == this.character.id
                    && data.type == "5shot"
                    && (data.target == target1 || data.target == target2 || data.target == target3 || data.target == target4 || data.target == target5)) {
                    projectiles.push(data.pid)
                }
            }

            // TODO: Confirm that the cooldown is always sent after the projectiles
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]5shot['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.removeListener("action", attackCheck)
                    this.socket.removeListener("eval", cooldownCheck)
                    resolve(projectiles)
                }
            }

            setTimeout(() => {
                this.socket.removeListener("action", attackCheck)
                this.socket.removeListener("eval", cooldownCheck)
                reject(`5shot timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("action", attackCheck)
            this.socket.on("eval", cooldownCheck)
        })

        this.socket.emit("skill", {
            name: "5shot",
            ids: [target1, target2, target3, target4, target5]
        })
        return attackStarted
    }

    // NOTE: UNTESTED
    public fourFinger(target: string): Promise<void> {
        // TODO: Check that the target is not a monster.

        const marked = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]4fingers['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.removeListener("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.removeListener("eval", cooldownCheck)
                reject(`fourfinger timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
        })
        this.socket.emit("skill", {
            name: "4fingers",
            id: target
        })
        return marked
    }

    public huntersMark(target: string): Promise<void> {
        const marked = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]huntersmark['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.removeListener("eval", cooldownCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.removeListener("eval", cooldownCheck)
                reject(`supershot timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("eval", cooldownCheck)
        })
        this.socket.emit("skill", {
            name: "huntersmark",
            id: target
        })
        return marked
    }

    public piercingShot(target: string): Promise<string> {
        if (this.G.skills.piercingshot.mp > this.character.mp)
            return Promise.reject("Not enough MP to use piercingShot")

        const piercingShotStarted = new Promise<string>((resolve, reject) => {
            let projectile: string

            const attackCheck = (data: ActionData) => {
                if (data.attacker == this.character.id
                    && data.type == "piercingshot"
                    && data.target == target) {
                    projectile = data.pid
                }
            }

            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]piercingshot['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.removeListener("action", attackCheck)
                    this.socket.removeListener("eval", cooldownCheck)
                    resolve(projectile)
                }
            }

            setTimeout(() => {
                this.socket.removeListener("action", attackCheck)
                this.socket.removeListener("eval", cooldownCheck)
                reject(`piercingshot timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("action", attackCheck)
            this.socket.on("eval", cooldownCheck)
        })

        this.socket.emit("skill", { name: "piercingshot", id: target })
        return piercingShotStarted
    }

    // NOTE: UNTESTED
    public poisonArrow(target: string, poison = this.locateItem("poison")): Promise<string> {
        if (poison === undefined) return Promise.reject("We need poison to use this skill.")

        const poisonArrowed = new Promise<string>((resolve, reject) => {
            let projectile: string

            const attackCheck = (data: ActionData) => {
                if (data.attacker == this.character.id
                    && data.type == "poisonarrow"
                    && data.target == target) {
                    projectile = data.pid
                }
            }

            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]poisonarrow['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.removeListener("action", attackCheck)
                    this.socket.removeListener("eval", cooldownCheck)
                    resolve(projectile)
                }
            }

            setTimeout(() => {
                this.socket.removeListener("action", attackCheck)
                this.socket.removeListener("eval", cooldownCheck)
                reject(`poisonarrow timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("action", attackCheck)
            this.socket.on("eval", cooldownCheck)
        })

        this.socket.emit("skill", { name: "poisonarrow", num: poison, id: target })
        return poisonArrowed
    }

    public superShot(target: string): Promise<string> {
        if (this.G.skills.supershot.mp > this.character.mp)
            return Promise.reject("Not enough MP to use superShot")

        const superShotStarted = new Promise<string>((resolve, reject) => {
            let projectile: string

            const attackCheck = (data: ActionData) => {
                if (data.attacker == this.character.id
                    && data.type == "supershot"
                    && data.target == target) {
                    projectile = data.pid
                }
            }

            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]supershot['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.removeListener("action", attackCheck)
                    this.socket.removeListener("eval", cooldownCheck)
                    resolve(projectile)
                }
            }

            setTimeout(() => {
                this.socket.removeListener("action", attackCheck)
                this.socket.removeListener("eval", cooldownCheck)
                reject(`supershot timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("action", attackCheck)
            this.socket.on("eval", cooldownCheck)
        })

        this.socket.emit("skill", { name: "supershot", id: target })
        return superShotStarted
    }

    public threeShot(target1: string, target2: string, target3: string): Promise<string[]> {
        const attackStarted = new Promise<string[]>((resolve, reject) => {
            const projectiles: string[] = []

            const attackCheck = (data: ActionData) => {
                if (data.attacker == this.character.id
                    && data.type == "3shot"
                    && (data.target == target1 || data.target == target2 || data.target == target3)) {
                    projectiles.push(data.pid)
                }
            }

            // TODO: Confirm that the cooldown is always sent after the projectiles
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]3shot['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.removeListener("action", attackCheck)
                    this.socket.removeListener("eval", cooldownCheck)
                    resolve(projectiles)
                }
            }

            setTimeout(() => {
                this.socket.removeListener("action", attackCheck)
                this.socket.removeListener("eval", cooldownCheck)
                reject(`3shot timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("action", attackCheck)
            this.socket.on("eval", cooldownCheck)
        })

        this.socket.emit("skill", {
            name: "3shot",
            ids: [target1, target2, target3]
        })
        return attackStarted
    }
}
