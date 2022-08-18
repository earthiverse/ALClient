/* eslint-disable sort-keys */
import { UIData } from "./adventureland-server"

/**
 * The following is from socket events received 2021-04-22 to 2021-07-14
 * It is used to confirm type correctness
 */

test("UIData type validation", async () => {
    const buy: UIData = {
        "type": "+$",
        "id": "scrolls",
        "name": "earthPri",
        "item": {
            "name": "mpot1",
            "q": 1
        }
    }
    expect(buy).toBeDefined()

    const mluck: UIData = {
        "type": "mluck",
        "from": "earthMer",
        "to": "earthMer"
    }
    expect(mluck).toBeDefined()

    const trade_sell: UIData = {
        "type": "+$$",
        "seller": "earthWar",
        "buyer": "Dinger",
        "item": {
            "name": "wbook0",
            "level": 0,
            "q": 1,
            "price": 50000
        },
        "slot": "trade1",
        "num": 23,
        "snum": 6
    }
    expect(trade_sell).toBeDefined()
})