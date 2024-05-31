import { Item } from "./Item.js"
import type { GData } from "./definitions/adventureland-data.js"
import type { ItemDataTrade } from "./definitions/adventureland-server.js"

export class TradeItem extends Item implements ItemDataTrade {
    public b: boolean = false
    public giveaway?: number
    public list?: string[]
    public price: number
    public rid: string

    public constructor(itemData: ItemDataTrade, g: GData) {
        super(itemData, g)

        // Set everything else
        for (const key in itemData) this[key] = itemData[key]
    }
}
