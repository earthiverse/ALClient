import { Item } from "./Item.js"
import { GData, ItemDataTrade } from "./index.js"

export class TradeItem extends Item implements ItemDataTrade {
    public b: boolean = false
    public giveaway?: number
    public list?: string[]
    public price: number
    public rid: string

    public constructor(itemData: ItemDataTrade, g: GData) {
        super(itemData, g)
    }
}