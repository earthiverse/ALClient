import { CharacterData, EntitiesData, GameResponseData } from "./definitions/adventureland-server"
import { TradeSlotType } from "./definitions/adventureland"
import { PingCompensatedPlayer } from "./PingCompensatedPlayer.js"
import { TIMEOUT } from "./Constants"

export class Merchant extends PingCompensatedPlayer {
    public closeMerchantStand(): Promise<unknown> {
        if (!this.character.stand)
            return Promise.resolve() // It's already closed

        const closed = new Promise((resolve, reject) => {
            const checkStand = (data: CharacterData) => {
                if (!data.stand) {
                    this.socket.removeListener("player", checkStand)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.removeListener("player", checkStand)
                reject(`closeMerchantStand timeout (${TIMEOUT}ms)`)
            }, TIMEOUT)
            this.socket.on("player", checkStand)
        })

        this.socket.emit("merchant", { close: 1 })
        return closed
    }

    // TODO: Add promises
    public listForSale(itemPos: number, tradeSlot: TradeSlotType, price: number, quantity = 1): unknown {
        const itemInfo = this.character.items[itemPos]
        if (!itemInfo)
            return Promise.reject(`We do not have an item in slot ${itemPos}`)

        this.socket.emit("equip", {
            num: itemPos,
            q: quantity,
            slot: tradeSlot,
            price: price
        })
    }

    public mluck(target: string): Promise<unknown> {
        if (target !== this.character.id) {
            const player = this.players.get(target)
            if (!player)
                return Promise.reject(`Could not find ${target} to mluck.`)
            if (player.npc)
                return Promise.reject(`${target} is an NPC. You can't mluck NPCs.`)
            if (player.s.mluck && player.s.mluck.strong && player.s.mluck.f !== this.character.id)
                return Promise.reject(`${target} has a strong mluck from ${player.s.mluck.f}.`)
        }

        const mlucked = new Promise((resolve, reject) => {
            const mluckCheck = (data: EntitiesData) => {
                for (const player of data.players) {
                    if (player.id == target
                        && player.s.mluck
                        && player.s.mluck.f == this.character.id) {
                        this.socket.removeListener("entities", mluckCheck)
                        this.socket.removeListener("game_response", failCheck)
                        resolve()
                    }
                }
            }

            const failCheck = async (data: GameResponseData) => {
                if (typeof data == "string") {
                    if (data == "skill_too_far") {
                        this.socket.removeListener("entities", mluckCheck)
                        this.socket.removeListener("game_response", failCheck)
                        await this.requestPlayerData()
                        reject(`We are too far from ${target} to mluck.`)
                    } else if (data == "no_level") {
                        this.socket.removeListener("entities", mluckCheck)
                        this.socket.removeListener("game_response", failCheck)
                        reject("We aren't a high enough level to use mluck.")
                    }
                }
            }

            setTimeout(() => {
                this.socket.removeListener("entities", mluckCheck)
                this.socket.removeListener("game_response", failCheck)
                reject(`mluck timeout (${TIMEOUT}ms)`)
            }, TIMEOUT)
            this.socket.on("entities", mluckCheck)
            this.socket.on("game_response", failCheck)
        })
        this.socket.emit("skill", { name: "mluck", id: target })
        return mlucked
    }

    public openMerchantStand(): Promise<unknown> {
        if (this.character.stand)
            return Promise.resolve() // It's already open


        // Find the stand
        let stand = this.locateItem("stand0")
        if (stand === undefined) {
            // No stand, do we have a computer?
            stand = this.locateItem("computer")
            if (stand === undefined)
                return Promise.reject("Could not find merchant stand ('stand0') or computer in inventory.")
        }

        const opened = new Promise((resolve, reject) => {
            const checkStand = (data: CharacterData) => {
                if (data.stand) {
                    this.socket.removeListener("player", checkStand)
                    resolve()
                }
            }

            setTimeout(() => {
                this.socket.removeListener("player", checkStand)
                reject(`openMerchantStand timeout (${TIMEOUT}ms)`)
            }, TIMEOUT)
            this.socket.on("player", checkStand)
        })

        this.socket.emit("merchant", { num: stand })
        return opened
    }
}
