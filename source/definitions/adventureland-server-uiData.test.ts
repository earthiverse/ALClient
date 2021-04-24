import { UIData } from "./adventureland-server"

/** 
 * The following is from socket events received 2021-04-22
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
    expect(buy).not.toBe(undefined)

    const mluck: UIData = {
        "type":"mluck",
        "from":"earthMer",
        "to":"earthMer"
    }
    expect(mluck).not.toBe(undefined)
})