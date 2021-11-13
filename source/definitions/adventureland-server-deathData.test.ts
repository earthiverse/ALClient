import { DeathData } from "./adventureland-server"

/**
 * The following is from socket events received 2021-04-23
 * It is used to confirm type correctness
 */

test("DeathData type validation", async () => {
    const deathDatas: DeathData[] = [
        { "id": "368523" }
    ]
    for (const deathData of deathDatas) expect(deathData).not.toBe(undefined)
})