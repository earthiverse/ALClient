import type {
    CharacterData,
    DisappearingTextData,
    GameLogData,
    GameResponseData,
    SkillTimeoutData,
    UIData,
    UIDataFishingMining,
} from "./definitions/adventureland-server.js"
import type { TradeSlotType } from "./definitions/adventureland.js"
import { Constants } from "./Constants.js"
import { PingCompensatedCharacter } from "./PingCompensatedCharacter.js"
import { Tools } from "./Tools.js"
import type { ItemName } from "./definitions/adventureland-data.js"

export class Merchant extends PingCompensatedCharacter {
    ctype: "merchant" = "merchant" as const

    /**
     * Fish for items.
     *
     * @return {*}  {Promise<void>}
     * @memberof Merchant
     */
    public async fish(): Promise<string> {
        if (!this.ready) throw new Error("We aren't ready yet [fish].")
        if (this.c.fishing) return // We're already fishing
        // TODO: Add area check if we can fish here

        // Start fishing
        const started = this.getResponsePromise("fishing")
        this.socket.emit("skill", { name: "fishing" })
        return started.then(() => {
            return new Promise<string>((resolve, reject) => {
                const cleanup = () => {
                    this.socket.off("ui", noneCheck)
                    this.socket.off("game_log", logCheck)
                    this.socket.off("skill_timeout", cooldownCheck)
                    clearTimeout(timeout)
                }

                const noneCheck = (data: UIDataFishingMining) => {
                    if (data.type == "fishing_none") {
                        cleanup()
                        resolve("We didn't fish anything.")
                    }
                }

                let log: string
                const logCheck = (data: GameLogData) => {
                    if (typeof data !== "object") return
                    const fishRegex = /^Fished an* .+/.exec(data.message)
                    if (fishRegex) log = fishRegex[0]
                }

                const cooldownCheck = (data: SkillTimeoutData) => {
                    if (data.name == "fishing") {
                        cleanup()
                        resolve(log)
                    }
                }

                const timeout = setTimeout(() => {
                    cleanup()
                    reject(new Error("fish timeout (20000ms)"))
                }, 20000)

                this.socket.on("ui", noneCheck)
                this.socket.on("game_log", logCheck)
                this.socket.on("skill_timeout", cooldownCheck)
            })
        })
    }

    // TODO: Add promises
    public async joinGiveaway(slot: TradeSlotType, id: string, rid: string): Promise<void> {
        if (!this.ready) throw new Error("We aren't ready yet [joinGiveaway].")
        const merchant = this.players.get(id)
        if (!merchant || Tools.squaredDistance(this, merchant) > Constants.NPC_INTERACTION_DISTANCE_SQUARED)
            throw new Error(`${id} is too far away.`)
        if (!merchant.slots[slot]?.giveaway) throw new Error(`${id}'s slot ${slot} is not a giveaway.`)
        if (merchant.slots[slot]?.list.includes(this.id)) return // We've already joined it

        // const joined = new Promise<void>((resolve, reject) => {
        //     // TODO
        // })

        this.socket.emit("join_giveaway", { id: id, rid: rid, slot: slot })
        // return joined
    }

    /**
     * Lists an item for sale on your merchant stand
     *
     * @param {number} itemPos the position of the item in your inventory
     * @param {number} price the price to sell the item
     * @param {TradeSlotType} [tradeSlot] the trade slot to list the item in
     * @param {number} [quantity=1] the number of items to sell at this price
     * @return {*}  {Promise<unknown>}
     * @memberof Merchant
     */
    public async listForSale(
        itemPos: number,
        price: number,
        tradeSlot?: TradeSlotType,
        quantity = 1,
    ): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [listForSale].")
        const itemInfo = this.items[itemPos]
        if (!itemInfo) throw new Error(`We do not have an item in slot ${itemPos}`)
        if (price <= 0) throw new Error("The lowest you can set the price is 1.")
        if (quantity <= 0) throw new Error("The lowest you can set the quantity to is 1.")
        const gInfo = this.G.items[itemInfo.name]
        if (!tradeSlot && itemInfo.q) {
            // Look for an existing item to stack for sale
            for (const slotName in this.slots) {
                if (!slotName.startsWith("trade")) continue // Not a trade slot
                const slotInfo = this.slots[slotName as TradeSlotType]
                if (!slotInfo) continue // Nothing in this slot

                if (slotInfo.name !== itemInfo.name) continue // Check if it's the same item
                if (slotInfo.p !== itemInfo.p) continue
                if (slotInfo.data !== itemInfo.data) continue

                if (quantity + slotInfo.q > gInfo.s) continue // Check if it's stackable

                if (price < slotInfo.price) continue // We're listing it for less, don't list them all at this price.

                tradeSlot = slotName as TradeSlotType
                break
            }
        }
        if (!tradeSlot) {
            // Look for an empty trade slot to list this item in
            for (const slotName in this.slots) {
                if (!slotName.startsWith("trade")) continue // Not a trade slot
                const slotInfo = this.slots[slotName as TradeSlotType]
                if (slotInfo) continue

                tradeSlot = slotName as TradeSlotType
                break
            }
            if (!tradeSlot) throw new Error("We don't have an empty trade slot to list the item for sale.")
        }
        const slotInfo = this.slots[tradeSlot]
        if (slotInfo) {
            if (
                itemInfo.name == slotInfo.name && // Same item
                itemInfo.p == slotInfo.p &&
                itemInfo.data == slotInfo.data &&
                price >= slotInfo.price && // Same, or higher price
                gInfo.s &&
                quantity + slotInfo.q <= gInfo.s && // Stackable
                this.esize > 0 // NOTE: Unequipping trade items only works if we have an empty slot, even if we can stack the items
            ) {
                if (itemPos !== 0) {
                    // Swap items so when it gets stacked, it gets stacked in the correct position
                    await this.swapItems(0, itemPos)
                }

                // Unequip, so we can combine the two slots
                await this.unequip(tradeSlot)
                quantity += slotInfo.q

                if (itemPos !== 0) {
                    // Swap back
                    await this.swapItems(0, itemPos)
                }
            } else {
                throw new Error(`We are already trading something in ${tradeSlot}.`)
            }
        }

        const listed = new Promise<void>((resolve, reject) => {
            const failCheck1 = (data: GameResponseData) => {
                if (typeof data == "string") {
                    if (data == "slot_occupied") {
                        this.socket.off("game_response", failCheck1)
                        this.socket.off("disappearing_text", failCheck2)
                        this.socket.off("player", successCheck)
                        reject(new Error(`We are already listing something in ${tradeSlot}.`))
                    }
                }
            }

            const failCheck2 = (data: DisappearingTextData) => {
                if (data.message == "CAN'T EQUIP" && data.id == this.id) {
                    this.socket.off("game_response", failCheck1)
                    this.socket.off("disappearing_text", failCheck2)
                    this.socket.off("player", successCheck)
                    reject(new Error(`We failed listing the item in ${tradeSlot}.`))
                }
            }

            const successCheck = (data: CharacterData) => {
                const newTradeSlot = data.slots[tradeSlot]
                if (newTradeSlot && newTradeSlot.name == itemInfo.name && newTradeSlot.q == quantity) {
                    this.socket.off("game_response", failCheck1)
                    this.socket.off("disappearing_text", failCheck2)
                    this.socket.off("player", successCheck)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.off("game_response", failCheck1)
                this.socket.off("disappearing_text", failCheck2)
                this.socket.off("player", successCheck)
                reject(new Error("listForSale timeout (1000ms)"))
            }, 1000)
            this.socket.on("game_response", failCheck1)
            this.socket.on("disappearing_text", failCheck2)
            this.socket.on("player", successCheck)
        })

        this.socket.emit("equip", {
            num: itemPos,
            price: price,
            q: quantity,
            slot: tradeSlot,
        })
        return listed
    }

    /**
     * NOTE: Untested
     *
     * Adds an item that you want to purchase to your trade listing
     *
     * To remove a listing, call unequip(tradeSlot)
     *
     * @param itemName The item you want to buy
     * @param price The price you'll pay for it
     * @param tradeSlot The trade slot you want to put the request in
     * @param quantity How many of the item you want to buy
     * @param level For equipment, the level of the item you wish to buy
     */
    public async listForPurchase(
        itemName: ItemName,
        price: number,
        tradeSlot?: TradeSlotType,
        quantity = 1,
        level?: number,
    ): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [listForPurchase].")

        if (price <= 0) throw new Error("The lowest you can set the price is 1.")
        if (quantity <= 0) throw new Error("The lowest you can set the quantity to is 1.")
        if (!tradeSlot) {
            for (const slotName in this.slots) {
                if (!slotName.startsWith("trade")) continue // Not a trade slot
                const slotInfo = this.slots[slotName as TradeSlotType]
                if (slotInfo) continue

                tradeSlot = slotName as TradeSlotType
                break
            }
            if (!tradeSlot) throw new Error("We don't have any empty trade slot to wishlist the item.")
        } else {
            if (this.slots[tradeSlot]) throw new Error(`We already have something listed in '${tradeSlot}'.`)
            if (this.slots[tradeSlot] === undefined) throw new Error(`We don't have a trade slot '${tradeSlot}'.`)
        }
        const wishListed = new Promise<void>((resolve, reject) => {
            const successCheck = (data: CharacterData) => {
                const newTradeSlot = data.slots[tradeSlot]
                if (!newTradeSlot) return // No data (yet?)
                if (!newTradeSlot.b) return
                if (newTradeSlot.name !== itemName) return
                if (newTradeSlot.q !== quantity) return
                if (newTradeSlot.price !== price) return

                this.socket.off("player", successCheck)
                this.socket.off("game_response", failCheck)
                resolve()
            }
            const failCheck = (data: GameResponseData) => {
                if (typeof data == "string") {
                    if (data == "slot_occupied") {
                        this.socket.off("player", successCheck)
                        this.socket.off("game_response", failCheck)
                        reject(new Error(`We already have something listed in '${tradeSlot}'.`))
                    }
                }
            }
            setTimeout(() => {
                this.socket.off("player", successCheck)
                this.socket.off("game_response", failCheck)
                reject(new Error("listForPurchase timeout (1000ms)"))
            }, 1000)
            this.socket.on("player", successCheck)
            this.socket.on("game_response", failCheck)
        })
        this.socket.emit("trade_wishlist", {
            level: level,
            name: itemName,
            price: price,
            q: quantity,
            slot: tradeSlot,
        })
        return wishListed
    }

    public async merchantCourage(): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [merchantCourage].")

        const response = this.getResponsePromise("mcourage")
        this.socket.emit("skill", { name: "mcourage" })
        return response
    }

    public async mine(): Promise<string> {
        if (!this.ready) throw new Error("We aren't ready yet [mine].")
        if (this.c.mining) return // We're already mining
        // TODO: Add area check if we can mine here

        // Start mining
        const started = this.getResponsePromise("mining")
        this.socket.emit("skill", { name: "mining" })
        return started.then(() => {
            return new Promise<string>((resolve, reject) => {
                const cleanup = () => {
                    this.socket.off("ui", noneCheck)
                    this.socket.off("game_log", logCheck)
                    this.socket.off("skill_timeout", cooldownCheck)
                    clearTimeout(timeout)
                }

                const noneCheck = (data: UIData) => {
                    if (data.type == "mining_none") {
                        cleanup()
                        resolve("We didn't mine anything.")
                    }
                }

                let log: string
                const logCheck = (data: GameLogData) => {
                    if (typeof data !== "object") return
                    const mineRegex = /^Mined an* .+/.exec(data.message)
                    if (mineRegex) log = mineRegex[0]
                }

                const cooldownCheck = (data: SkillTimeoutData) => {
                    if (data.name == "mining") {
                        cleanup()
                        resolve(log)
                    }
                }

                const timeout = setTimeout(() => {
                    cleanup()
                    reject(new Error("mine timeout (20000ms)"))
                }, 20000)

                this.socket.on("ui", noneCheck)
                this.socket.on("game_log", logCheck)
                this.socket.on("skill_timeout", cooldownCheck)
            })
        })
    }

    public async mluck(target: string): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [mluck].")
        if (target !== this.id) {
            const player = this.players.get(target)
            if (!player) throw new Error(`Could not find ${target} to mluck.`)
            if (player.npc) throw new Error(`${target} is an NPC. You can't mluck NPCs.`)
            if (
                player.s.mluck &&
                player.s.mluck.strong && // They have a strong mluck
                ((player.owner && player.owner !== this.owner) || // If they are public, check if they are from different owners
                    player.s.mluck.f !== this.id)
            ) {
                // Else, rely on the character id
                throw new Error(`${target} has a strong mluck from ${player.s.mluck.f}.`)
            }
        }

        const response = this.getResponsePromise("mluck")
        this.socket.emit("skill", { id: target, name: "mluck" })
        return response
    }

    public async massProduction(): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [massProduction].")
        if (this.s.massproduction) return // We already have it active

        const response = this.getResponsePromise("massproduction")
        this.socket.emit("skill", { name: "massproduction" })
        return response
    }

    public massProductionPP(): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [massProductionPP].")
        if (this.s.massproductionpp) return // We already have it active

        const response = this.getResponsePromise("massproductionpp")
        this.socket.emit("skill", { name: "massproductionpp" })
        return response
    }

    public async massExchange(): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [massExchange].")
        if (this.s.massexchange) return // We already have it active

        const response = this.getResponsePromise("massexchange")
        this.socket.emit("skill", { name: "massexchange" })
        return response
    }

    public async massExchangePP(): Promise<unknown> {
        if (!this.ready) throw new Error("We aren't ready yet [massExchangePP].")
        if (this.s.massexchangepp) return // We already have it active

        const response = this.getResponsePromise("massexchangepp")
        this.socket.emit("skill", { name: "massexchangepp" })
        return response
    }
}
