import { Game } from "./Game"
import { TradeItem } from "./TradeItem"

beforeAll(async () => {
    await Game.getGData(true, false)
}, 60000)

test("Item attributes", async () => {
    const cxJar = new TradeItem({ b: true, name: "monstertoken", price: 250_000, rid: "abcdefg" }, Game.G)
    expect(cxJar.name).toEqual("monstertoken")
})