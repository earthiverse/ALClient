import { CharacterData, EntitiesData, EvalData, GameResponseData, PlayerData, UIData } from "./definitions/adventureland-server"
import { TradeSlotType } from "./definitions/adventureland"
import { Constants } from "./Constants"
import { PingCompensatedCharacter } from "./PingCompensatedCharacter"

export class Merchant extends PingCompensatedCharacter {
    public closeMerchantStand(): Promise<void> {
        if (!this.stand)
            return Promise.resolve() // It's already closed

        const closed = new Promise<void>((resolve, reject) => {
            const checkStand = (data: CharacterData) => {
                if (!data.stand) {
                    this.socket.removeListener("player", checkStand)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.removeListener("player", checkStand)
                reject(`closeMerchantStand timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("player", checkStand)
        })

        this.socket.emit("merchant", { close: 1 })
        return closed
    }

    /**
     * Fish for items
     *
     * @return {*}  {Promise<void>}
     * @memberof Merchant
     */
    public fish(): Promise<void> {
        const fished = new Promise<void>((resolve, reject) => {
            const caughtCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]fishing['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.removeListener("game_response", failCheck1)
                    this.socket.removeListener("ui", failCheck2)
                    this.socket.removeListener("eval", caughtCheck)
                    resolve()
                }
            }

            const failCheck1 = (data: GameResponseData) => {
                if (typeof data == "string") {
                    if (data == "skill_cant_wtype") {
                        this.socket.removeListener("game_response", failCheck1)
                        this.socket.removeListener("ui", failCheck2)
                        this.socket.removeListener("eval", caughtCheck)
                        reject("We don't have a fishing rod equipped")
                    }
                } else if (typeof data == "object") {
                    if (data.response == "cooldown" && data.place == "fishing" && data.skill == "fishing") {
                        this.socket.removeListener("game_response", failCheck1)
                        this.socket.removeListener("ui", failCheck2)
                        this.socket.removeListener("eval", caughtCheck)
                        reject(`Fishing is on cooldown (${data.ms}ms remaining)`)
                    }
                }
            }

            const failCheck2 = (data: UIData) => {
                if(data.type == "fishing_fail" && data.name == this.name) {
                    // NOTE: We might not be in a fishing area?
                    this.socket.removeListener("game_response", failCheck1)
                    this.socket.removeListener("ui", failCheck2)
                    this.socket.removeListener("eval", caughtCheck)
                    reject("We failed to fish.")
                } else if(data.type == "fishing_none" && data.name == this.name) {
                    // We fished, but we didn't catch anything
                    this.socket.removeListener("game_response", failCheck1)
                    this.socket.removeListener("ui", failCheck2)
                    this.socket.removeListener("eval", caughtCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.removeListener("game_response", failCheck1)
                this.socket.removeListener("ui", failCheck2)
                this.socket.removeListener("eval", caughtCheck)
                reject("fish timeout (10000ms)")
            }, 10000)
            this.socket.on("game_response", failCheck1)
            this.socket.on("eval", caughtCheck)
            this.socket.on("ui", failCheck2)
        })

        this.socket.emit("skill", { name: "fishing" })
        return fished
    }

    // TODO: Add promises
    public listForSale(itemPos: number, tradeSlot: TradeSlotType, price: number, quantity = 1): unknown {
        const itemInfo = this.items[itemPos]
        if (!itemInfo)
            return Promise.reject(`We do not have an item in slot ${itemPos}`)

        this.socket.emit("equip", {
            num: itemPos,
            q: quantity,
            slot: tradeSlot,
            price: price
        })
    }

    // TODO: Add promises
    public merchantCourage(): void {
        this.socket.emit("skill", { name: "mcourage" })
    }

    public mluck(target: string): Promise<void> {
        if (target !== this.id) {
            const player = this.players.get(target)
            if (!player) return Promise.reject(`Could not find ${target} to mluck.`)
            if (player.npc) return Promise.reject(`${target} is an NPC. You can't mluck NPCs.`)
            if (player.s.mluck && player.s.mluck.strong && player.s.mluck.f !== this.id) return Promise.reject(`${target} has a strong mluck from ${player.s.mluck.f}.`)
        }

        const mlucked = new Promise<void>((resolve, reject) => {
            const mluckCheck = (data: EntitiesData) => {
                for (const player of data.players) {
                    if (player.id == target
                        && player.s?.mluck?.f == this.id
                        && player.s?.mluck?.ms == this.G.conditions.mluck.duration) {
                        this.socket.removeListener("entities", mluckCheck)
                        this.socket.removeListener("game_response", failCheck)
                        this.socket.removeListener("player", selfMluckCheck)
                        resolve()
                    }
                }
            }

            const selfMluckCheck = (data: PlayerData) => {
                if (data.s?.mluck?.f == this.id
                    && data.s?.mluck?.ms == this.G.conditions.mluck.duration) {
                    this.socket.removeListener("entities", mluckCheck)
                    this.socket.removeListener("game_response", failCheck)
                    this.socket.removeListener("player", selfMluckCheck)
                    resolve()
                }
            }

            const failCheck = async (data: GameResponseData) => {
                if (typeof data == "string") {
                    if (data == "skill_too_far") {
                        this.socket.removeListener("entities", mluckCheck)
                        this.socket.removeListener("game_response", failCheck)
                        this.socket.removeListener("player", selfMluckCheck)
                        await this.requestPlayerData()
                        reject(`We are too far from ${target} to mluck.`)
                    } else if (data == "no_level") {
                        this.socket.removeListener("entities", mluckCheck)
                        this.socket.removeListener("game_response", failCheck)
                        this.socket.removeListener("player", selfMluckCheck)
                        reject("We aren't a high enough level to use mluck.")
                    }
                }
            }

            setTimeout(() => {
                this.socket.removeListener("entities", mluckCheck)
                this.socket.removeListener("game_response", failCheck)
                this.socket.removeListener("player", selfMluckCheck)
                reject(`mluck timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("game_response", failCheck)
            this.socket.on("player", selfMluckCheck)
            this.socket.on("entities", mluckCheck)
        })
        this.socket.emit("skill", { name: "mluck", id: target })
        return mlucked
    }

    public openMerchantStand(): Promise<void> {
        if (this.stand)
            return Promise.resolve() // It's already open


        // Find the stand
        let stand = this.locateItem("stand0")
        if (stand === undefined) {
            // No stand, do we have a computer?
            stand = this.locateItem("computer")
            if (stand === undefined)
                return Promise.reject("Could not find merchant stand ('stand0') or computer in inventory.")
        }

        const opened = new Promise<void>((resolve, reject) => {
            const checkStand = (data: CharacterData) => {
                if (data.stand) {
                    this.socket.removeListener("player", checkStand)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.removeListener("player", checkStand)
                reject(`openMerchantStand timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("player", checkStand)
        })

        this.socket.emit("merchant", { num: stand })
        return opened
    }

    public massProduction(): Promise<void> {
        const massProductioned = new Promise<void>((resolve, reject) => {
            const productedCheck = (data: UIData) => {
                if (data.type == "massproduction" && data.name == this.id) {
                    this.socket.removeListener("ui", productedCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.removeListener("ui", productedCheck)
                reject(`massProduction timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("ui", productedCheck)
        })

        this.socket.emit("skill", { name: "massproduction" })
        return massProductioned
    }

    // public massProductionPP(): Promise<void> {
    //     const massProductioned = new Promise<void>((resolve, reject) => {
    //         const productedCheck = (data: UIData) => {
    //             if (data.type == "massproductionpp" && data.name == this.id) {
    //                 this.socket.removeListener("ui", productedCheck)
    //                 resolve()
    //             }
    //         }

    //         setTimeout(() => {
    //             this.socket.removeListener("ui", productedCheck)
    //             reject(`massProductionPP timeout (${Constants.TIMEOUT}ms)`)
    //         }, Constants.TIMEOUT)
    //         this.socket.on("ui", productedCheck)
    //     })

    //     this.socket.emit("skill", { name: "massproductionpp" })
    //     return massProductioned
    // }
}
