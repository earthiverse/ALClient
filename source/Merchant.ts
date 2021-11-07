import { CharacterData, EntitiesData, EvalData, GameResponseData, PlayerData, UIData } from "./definitions/adventureland-server.js"
import { TradeSlotType } from "./definitions/adventureland.js"
import { Constants } from "./Constants.js"
import { PingCompensatedCharacter } from "./PingCompensatedCharacter.js"
import { Tools } from "./Tools.js"
import { ItemName } from "./definitions/adventureland-data.js"

export class Merchant extends PingCompensatedCharacter {
    ctype: "merchant" = "merchant"

    public closeMerchantStand(): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [closeMerchantStand].")
        if (!this.stand) return Promise.resolve() // It's already closed

        const closed = new Promise<void>((resolve, reject) => {
            const checkStand = (data: CharacterData) => {
                if (!data.stand) {
                    this.socket.off("player", checkStand)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("player", checkStand)
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
        if (!this.ready) return Promise.reject("We aren't ready yet [fish].")
        let startedFishing = false
        if (this.c.fishing) startedFishing = true // We're already fishing!?
        const fished = new Promise<void>((resolve, reject) => {
            const caughtCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]fishing['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("game_response", failCheck1)
                    this.socket.off("ui", failCheck2)
                    this.socket.off("eval", caughtCheck)
                    this.socket.off("player", failCheck3)
                    resolve()
                }
            }

            const failCheck1 = (data: GameResponseData) => {
                if (typeof data == "string") {
                    if (data == "skill_cant_wtype") {
                        this.socket.off("game_response", failCheck1)
                        this.socket.off("ui", failCheck2)
                        this.socket.off("eval", caughtCheck)
                        this.socket.off("player", failCheck3)
                        reject("We don't have a fishing rod equipped")
                    }
                } else if (typeof data == "object") {
                    if (data.response == "cooldown" && data.place == "fishing" && data.skill == "fishing") {
                        this.socket.off("game_response", failCheck1)
                        this.socket.off("ui", failCheck2)
                        this.socket.off("eval", caughtCheck)
                        this.socket.off("player", failCheck3)
                        reject(`Fishing is on cooldown (${data.ms}ms remaining)`)
                    }
                }
            }

            const failCheck2 = (data: UIData) => {
                if (data.type == "fishing_fail" && data.name == this.id) {
                    // NOTE: We might not be in a fishing area?
                    this.socket.off("game_response", failCheck1)
                    this.socket.off("ui", failCheck2)
                    this.socket.off("eval", caughtCheck)
                    this.socket.off("player", failCheck3)
                    reject("We failed to fish.")
                } else if (data.type == "fishing_none") {
                    // We fished, but we didn't catch anything
                    this.socket.off("game_response", failCheck1)
                    this.socket.off("ui", failCheck2)
                    this.socket.off("eval", caughtCheck)
                    this.socket.off("player", failCheck3)
                    resolve()
                }
            }

            const failCheck3 = (data: CharacterData) => {
                if (!startedFishing && data.c.fishing) {
                    startedFishing = true
                } else if (startedFishing && !data.c.fishing) {
                    this.socket.off("game_response", failCheck1)
                    this.socket.off("ui", failCheck2)
                    this.socket.off("eval", caughtCheck)
                    this.socket.off("player", failCheck3)
                    // TODO: Is there a reliable way to figure out if we got interrupted?
                    // TODO: Maybe the eval cooldown?
                    resolve() // We fished and caught nothing, or got interrupted.
                }
            }

            setTimeout(() => {
                this.socket.off("game_response", failCheck1)
                this.socket.off("ui", failCheck2)
                this.socket.off("eval", caughtCheck)
                this.socket.off("player", failCheck3)
                reject("fish timeout (20000ms)")
            }, 20000)
            this.socket.on("game_response", failCheck1)
            this.socket.on("eval", caughtCheck)
            this.socket.on("ui", failCheck2)
            this.socket.on("player", failCheck3)
        })

        this.socket.emit("skill", { name: "fishing" })
        return fished
    }

    // TODO: Add promises
    public joinGiveaway(slot: TradeSlotType, id: string, rid: string): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [joinGiveaway].")
        const merchant = this.players.get(id)
        if (!merchant || Tools.distance(this, merchant) > Constants.NPC_INTERACTION_DISTANCE) return Promise.reject(`${id} is too far away.`)
        if (!merchant.slots[slot]?.giveaway) return Promise.reject(`${id}'s slot ${slot} is not a giveaway.`)
        if (merchant.slots[slot]?.list.includes(id)) return Promise.resolve() // We've already joined it

        this.socket.emit("join_giveaway", { slot: slot, id: id, rid: rid })
    }

    // TODO: Add promises
    public listForSale(itemPos: number, tradeSlot: TradeSlotType, price: number, quantity = 1): unknown {
        if (!this.ready) return Promise.reject("We aren't ready yet [listForSale].")
        const itemInfo = this.items[itemPos]
        if (!itemInfo) return Promise.reject(`We do not have an item in slot ${itemPos}`)

        this.socket.emit("equip", {
            num: itemPos,
            q: quantity,
            slot: tradeSlot,
            price: price
        })
    }

    // TODO: Add promises
    public merchantCourage(): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [merchantCourage].")
        this.socket.emit("skill", { name: "mcourage" })
    }

    public mine(): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [mine].")
        let startedMining = false
        if (this.c.mining) startedMining = true // We're already mining!?
        const mined = new Promise<void>((resolve, reject) => {
            const caughtCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]mining['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("game_response", failCheck1)
                    this.socket.off("ui", failCheck2)
                    this.socket.off("eval", caughtCheck)
                    this.socket.off("player", failCheck3)
                    resolve()
                }
            }

            const failCheck1 = (data: GameResponseData) => {
                if (typeof data == "string") {
                    if (data == "skill_cant_wtype") {
                        this.socket.off("game_response", failCheck1)
                        this.socket.off("ui", failCheck2)
                        this.socket.off("eval", caughtCheck)
                        this.socket.off("player", failCheck3)
                        reject("We don't have a pickaxe equipped")
                    }
                } else if (typeof data == "object") {
                    if (data.response == "cooldown" && data.place == "mining" && data.skill == "mining") {
                        this.socket.off("game_response", failCheck1)
                        this.socket.off("ui", failCheck2)
                        this.socket.off("eval", caughtCheck)
                        this.socket.off("player", failCheck3)
                        reject(`Mining is on cooldown (${data.ms}ms remaining)`)
                    }
                }
            }

            const failCheck2 = (data: UIData) => {
                if (data.type == "mining_fail" && data.name == this.id) {
                    // NOTE: We might not be in a mining area?
                    this.socket.off("game_response", failCheck1)
                    this.socket.off("ui", failCheck2)
                    this.socket.off("eval", caughtCheck)
                    this.socket.off("player", failCheck3)
                    reject("We failed to mine.")
                } else if (data.type == "mining_none") {
                    // We mined, but we didn't get anything
                    this.socket.off("game_response", failCheck1)
                    this.socket.off("ui", failCheck2)
                    this.socket.off("eval", caughtCheck)
                    this.socket.off("player", failCheck3)
                    resolve()
                }
            }

            const failCheck3 = (data: CharacterData) => {
                if (!startedMining && data.c.mining) {
                    startedMining = true
                } else if (startedMining && !data.c.mining) {
                    this.socket.off("game_response", failCheck1)
                    this.socket.off("ui", failCheck2)
                    this.socket.off("eval", caughtCheck)
                    this.socket.off("player", failCheck3)
                    // TODO: Is there a reliable way to figure out if we got interrupted?
                    // TODO: Maybe the eval cooldown?
                    resolve() // We mined and caught nothing, or got interrupted.
                }
            }

            setTimeout(() => {
                this.socket.off("game_response", failCheck1)
                this.socket.off("ui", failCheck2)
                this.socket.off("eval", caughtCheck)
                this.socket.off("player", failCheck3)
                reject("mine timeout (20000ms)")
            }, 20000)
            this.socket.on("game_response", failCheck1)
            this.socket.on("eval", caughtCheck)
            this.socket.on("ui", failCheck2)
            this.socket.on("player", failCheck3)
        })

        this.socket.emit("skill", { name: "mining" })
        return mined
    }

    public mluck(target: string): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [mluck].")
        let previousMs = 0
        if (target !== this.id) {
            const player = this.players.get(target)
            if (!player) return Promise.reject(`Could not find ${target} to mluck.`)
            if (player.npc) return Promise.reject(`${target} is an NPC. You can't mluck NPCs.`)
            if (player.s.mluck && player.s.mluck.strong // They have a strong mluck
                && ((player.owner && player.owner !== this.owner) // If they are public, check if they are from different owners
                    || (player.s.mluck.f !== this.id))) { // Else, rely on the character id
                return Promise.reject(`${target} has a strong mluck from ${player.s.mluck.f}.`)
            }
            previousMs = player.s?.mluck?.ms ?? 0
        } else {
            previousMs = this.s?.mluck?.ms ?? 0
        }

        const mlucked = new Promise<void>((resolve, reject) => {
            const cooldownCheck = (data: EvalData) => {
                if (/skill_timeout\s*\(\s*['"]mluck['"]\s*,?\s*(\d+\.?\d+?)?\s*\)/.test(data.code)) {
                    this.socket.off("entities", mluckCheck)
                    this.socket.off("game_response", failCheck)
                    this.socket.off("player", selfMluckCheck)
                    this.socket.off("eval", cooldownCheck)
                    resolve()
                }
            }

            const mluckCheck = (data: EntitiesData) => {
                for (const player of data.players) {
                    if (player.id == target
                        && player.s?.mluck?.f == this.id
                        && player.s?.mluck?.ms >= previousMs) {
                        this.socket.off("entities", mluckCheck)
                        this.socket.off("game_response", failCheck)
                        this.socket.off("player", selfMluckCheck)
                        this.socket.off("eval", cooldownCheck)
                        resolve()
                    }
                }
            }

            const selfMluckCheck = (data: PlayerData) => {
                if (this.id == target
                    && data.s?.mluck?.f == this.id
                    && data.s?.mluck?.ms >= previousMs) {
                    this.socket.off("entities", mluckCheck)
                    this.socket.off("game_response", failCheck)
                    this.socket.off("player", selfMluckCheck)
                    this.socket.off("eval", cooldownCheck)
                    resolve()
                }
            }

            const failCheck = async (data: GameResponseData) => {
                if (typeof data == "string") {
                    if (data == "skill_too_far") {
                        this.socket.off("entities", mluckCheck)
                        this.socket.off("game_response", failCheck)
                        this.socket.off("player", selfMluckCheck)
                        this.socket.off("eval", cooldownCheck)
                        await this.requestPlayerData().catch((e) => { console.error(e) })
                        reject(`We are too far from ${target} to mluck.`)
                    } else if (data == "no_level") {
                        this.socket.off("entities", mluckCheck)
                        this.socket.off("game_response", failCheck)
                        this.socket.off("player", selfMluckCheck)
                        this.socket.off("eval", cooldownCheck)
                        reject("We aren't a high enough level to use mluck.")
                    }
                }
            }

            setTimeout(() => {
                this.socket.off("entities", mluckCheck)
                this.socket.off("game_response", failCheck)
                this.socket.off("player", selfMluckCheck)
                this.socket.off("eval", cooldownCheck)
                reject(`mluck timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("game_response", failCheck)
            this.socket.on("player", selfMluckCheck)
            this.socket.on("entities", mluckCheck)
            this.socket.on("eval", cooldownCheck)
        })
        this.socket.emit("skill", { id: target, name: "mluck" })
        return mlucked
    }

    public openMerchantStand(): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [openMerchantStand].")
        if (this.stand) return Promise.resolve() // It's already open

        // Find a suitable stand
        let stand: number
        for (const item of ["supercomputer", "computer", "stand1", "stand0"] as ItemName[]) {
            stand = this.locateItem(item)
            if (stand !== undefined) break
        }
        if (stand == undefined) return Promise.reject("Could not find a suitable merchant stand in inventory.")

        const opened = new Promise<void>((resolve, reject) => {
            const checkStand = (data: CharacterData) => {
                if (data.stand) {
                    this.socket.off("player", checkStand)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("player", checkStand)
                reject(`openMerchantStand timeout (${Constants.TIMEOUT}ms)`)
            }, Constants.TIMEOUT)
            this.socket.on("player", checkStand)
        })

        this.socket.emit("merchant", { num: stand })
        return opened
    }

    public massProduction(): Promise<void> {
        if (!this.ready) return Promise.reject("We aren't ready yet [massProduction].")
        const massProductioned = new Promise<void>((resolve, reject) => {
            const productedCheck = (data: UIData) => {
                if (data.type == "massproduction" && data.name == this.id) {
                    this.socket.off("ui", productedCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("ui", productedCheck)
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
    //                 this.socket.off("ui", productedCheck)
    //                 resolve()
    //             }
    //         }

    //         setTimeout(() => {
    //             this.socket.off("ui", productedCheck)
    //             reject(`massProductionPP timeout (${Constants.TIMEOUT}ms)`)
    //         }, Constants.TIMEOUT)
    //         this.socket.on("ui", productedCheck)
    //     })

    //     this.socket.emit("skill", { name: "massproductionpp" })
    //     return massProductioned
    // }
}
