import { Item } from "./Item.js"
import { GData, ItemDataTrade } from "./index.js"

export class TradeItem extends Item implements ItemDataTrade {
    b: boolean = false
    giveaway?: number
    list?: string[]
    price: number
    rid: string

    public constructor(itemData: ItemDataTrade, g: GData) {
        super(itemData, g)
    }
}