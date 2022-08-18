import { GameEventData } from "./adventureland-server"

/**
 * The following is from socket events received 2022-01-14
 * It is used to confirm type correctness
 */

test("GameEventData type validation", async () => {
    const snowman: GameEventData = {
        "name": "snowman",
        "map": "winterland",
        "x": 900,
        "y": -800
    }
    expect(snowman).toBeDefined()
})