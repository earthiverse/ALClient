import { ActionData } from "./definitions/adventureland-server.js"
import { PingCompensatedCharacter } from "./PingCompensatedCharacter.js"

export class Ranger extends PingCompensatedCharacter {
    ctype: "ranger" = "ranger" as const

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
            const response = this.getResponsePromise("5shot")
            this.socket.emit("skill", {
                ids: [target1, target2, target3, target4, target5],
                name: "5shot"
            })
            await response
        } finally {
            this.socket.off("action", getProjectiles)
        }

        return projectiles
    }

    // NOTE: UNTESTED
    public async fourFinger(target: string): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [fourFinger].")
        // TODO: Check that the target is not a monster.

        const response = this.getResponsePromise("4fingers")
        this.socket.emit("skill", {
            id: target,
            name: "4fingers"
        })
        return response
    }

    public async huntersMark(target: string): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [huntersMark].")

        const response = this.getResponsePromise("huntersmark")
        this.socket.emit("skill", {
            id: target,
            name: "huntersmark"
        })
        return response
    }

    public async piercingShot(target: string): Promise<string> {
        if (!this.ready) throw new Error("We aren't ready yet [piercingShot].")

        let projectile: string
        const getProjectile = (data: ActionData) => {
            if (data.attacker == this.id
                && data.target == target
                && data.type == "piercingshot") {
                this.socket.off("action", getProjectile)
                projectile = data.pid
            }
        }
        this.socket.on("action", getProjectile)

        try {
            const response = this.getResponsePromise("piercingshot")
            this.socket.emit("skill", { id: target, name: "piercingshot" })
            await response
        } finally {
            this.socket.off("action", getProjectile)
        }

        return projectile
    }

    // NOTE: UNTESTED
    public async poisonArrow(target: string, poison = this.locateItem("poison")): Promise<string> {
        if (!this.ready) throw new Error("We aren't ready yet [poisonArrow].")
        if (poison === undefined) throw new Error("We need poison to use this skill.")

        let projectile: string
        const getProjectile = (data: ActionData) => {
            if (data.attacker == this.id
                && data.target == target
                && data.type == "poisonarrow") {
                this.socket.off("action", getProjectile)
                projectile = data.pid
            }
        }
        this.socket.on("action", getProjectile)

        try {
            const response = this.getResponsePromise("poisonarrow")
            this.socket.emit("skill", { id: target, name: "poisonarrow", num: poison })
            await response
        } finally {
            this.socket.off("action", getProjectile)
        }

        return projectile
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
            const response = this.getResponsePromise("supershot")
            this.socket.emit("skill", { id: target, name: "supershot" })
            await response
        } finally {
            this.socket.off("action", getProjectile)
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
            const response = this.getResponsePromise("3shot")
            this.socket.emit("skill", {
                ids: [target1, target2, target3],
                name: "3shot"
            })
            await response
        } finally {
            this.socket.off("action", getProjectiles)
        }

        return projectiles
    }
}
