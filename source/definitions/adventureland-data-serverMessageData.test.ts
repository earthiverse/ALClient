import type { ServerMessageData } from "./adventureland-server"

/**
 * The following is from socket events received 2022-01-14
 * It is used to confirm type correctness
 */

test("ServerMessageData type validation", async () => {
    const snowman1: ServerMessageData = {
        color: "#B1DCEF",
        event: true,
        message: "Join the fight against Snowman!",
    }
    expect(snowman1).toBeDefined()

    const snowman2: ServerMessageData = {
        color: "#B1DCEF",
        discord: "orange",
        message: "Snowman spawned in Winterland!",
    }
    expect(snowman2).toBeDefined()
})
