import { ActionData, EvalData } from "./definitions/adventureland-server.js"
import { Constants } from "./Constants.js"
import { PingCompensatedCharacter } from "./PingCompensatedCharacter.js"

export class Ranger extends PingCompensatedCharacter {
    ctype: "ranger" = "ranger"

    public async fiveShot(target1: string, target2: string, target3: string, target4: string, target5: string): Promise<string[]> {
        if (!this.ready) throw new Error("We aren't ready yet [fiveShot].")

        const projectiles: string[] = []
        const getProjectiles = (data: ActionData) => {
            if (data.attacker == this.id
                && data.type == "5shot"
                && (data.target == target1 || data.target == target2 || data.target == target3 || data.target == target4 || data.target == target5)) {
                projectiles.push(data.pid)
            }
        }
        this.socket.on("action", getProjectiles)

        try {
            const response = this.getSkillPromise("5shot")
            this.socket.emit("skill", {
                ids: [target1, target2, target3, target4, target5],
                name: "5shot"
            })
            await response
        } catch (e) {
            this.socket.off("action", getProjectiles)
            throw e
        }

        this.socket.off("action", getProjectiles)
        return projectiles
    }

    // NOTE: UNTESTED
    public async fourFinger(target: string): Promise<void> {
        if (!this.ready) throw new Error("We aren't ready yet [fourFinger].")
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

    public async huntersMark(target: string): Promise<void> {
        if (!this.ready) throw new Error("We aren't ready yet [huntersMark].")
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

    public async piercingShot(target: string): Promise<string> {
        if (!this.ready) throw new Error("We aren't ready yet [piercingShot].")
        if (this.G.skills.piercingshot.mp > this.mp) throw new Error("Not enough MP to use piercingShot")

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
                // NOTE: This is `attack`, not `piercingshot`, because they share a cooldown.
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
    public async poisonArrow(target: string, poison = this.locateItem("poison")): Promise<string> {
        if (!this.ready) throw new Error("We aren't ready yet [poisonArrow].")
        if (poison === undefined) throw new Error("We need poison to use this skill.")

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
     * @param {string} target
     * @return {*}  {Promise<string>}
     * @memberof Ranger
     */
    public async superShot(target: string): Promise<string> {
        if (!this.ready) throw new Error("We aren't ready yet [superShot].")

        // Set up to return the projectile for the super shot.
        let projectile: string
        const getProjectile = (data: ActionData) => {
            if (data.attacker == this.id
                && data.type == "supershot"
                && data.target == target) {
                projectile = data.pid
            }
        }
        this.socket.on("action", getProjectile)

        try {
            const response = this.getSkillPromise("supershot")
            this.socket.emit("skill", { id: target, name: "supershot" })
            await response
        } catch (e) {
            this.socket.off("action", getProjectile)
            throw e
        }

        return projectile
    }

    public async threeShot(target1: string, target2: string, target3: string): Promise<string[]> {
        if (!this.ready) throw new Error("We aren't ready yet [threeShot].")

        const projectiles: string[] = []
        const getProjectiles = (data: ActionData) => {
            if (data.attacker == this.id
                && data.type == "3shot"
                && (data.target == target1 || data.target == target2 || data.target == target3)) {
                projectiles.push(data.pid)
            }
        }
        this.socket.on("action", getProjectiles)

        try {
            const response = this.getSkillPromise("3shot")
            this.socket.emit("skill", {
                ids: [target1, target2, target3],
                name: "3shot"
            })
            await response
        } catch (e) {
            this.socket.off("action", getProjectiles)
            throw e
        }

        this.socket.off("action", getProjectiles)
        return projectiles
    }
}
