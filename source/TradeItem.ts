import { Item } from "./Item.js"
import { TradeItemInfo } from "./definitions/adventureland.js"

export class TradeItem extends Item implements TradeItemInfo {
    price: number
    rid: string
}