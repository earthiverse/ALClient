import { Game } from "./Game"
import { TradeItem } from "./TradeItem"

beforeAll(async () => {
    await Game.getGData(true, false)
}, 60000)

test("Item attributes", async () => {
    const buyingMonsterToken = new TradeItem({ b: true, name: "monstertoken", price: 250_000, rid: "abcdefg" }, Game.G)
    expect(buyingMonsterToken.b).toEqual(true)
    expect(buyingMonsterToken.name).toEqual("monstertoken")
    expect(buyingMonsterToken.rid).toEqual("abcdefg")
    expect(buyingMonsterToken.price).toEqual(250_000)

    const sellingMonsterToken = new TradeItem({ name: "monstertoken", price: 250_000, rid: "abcdefg" }, Game.G)
    expect(sellingMonsterToken.b).toEqual(false)
})