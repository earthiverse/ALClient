import { Item } from "./Item.js"
import { TradeItemInfo } from "./definitions/adventureland.js"
import { GData } from "./index.js"

export class TradeItem extends Item implements TradeItemInfo {
    price: number
    rid: string

    public constructor(itemData: TradeItemInfo, g: GData) {
        super(itemData, g)
    }
}