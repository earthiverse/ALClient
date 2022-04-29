import { GameResponseData } from "./adventureland-server"

/**
 * The following is from socket events received 2022-04-30
 * It is used to confirm type correctness
 */

test("GameEventData type validation", async () => {
    const donate: GameResponseData = {
        "gold": 1,
        "response": "donate_low",
        "xprate": 3.2
    }
    expect(donate).not.toBe(undefined)

    const donateGum: GameResponseData = {
        "gold": 123456,
        "response": "donate_gum",
        "xprate": 3.2
    }
    expect(donateGum).not.toBe(undefined)

    const donateThanks: GameResponseData = {
        "gold": 1000000,
        "response": "donate_thx",
        "xprate": 3.2
    }
    expect(donateThanks).not.toBe(undefined)

    const lostAndFoundInfo: GameResponseData = {
        "gold": 32279215800.782036,
        "response": "lostandfound_info"
    }
    expect(lostAndFoundInfo).not.toBe(undefined)
})