import { DeathData } from "./adventureland-server"

/**
 * The following is from socket events received 2021-04-23 to 2023-01-16
 * It is used to confirm type correctness
 */

test("DeathData type validation", async () => {
    const deathData: DeathData[] = [
        /** Normal */
        {
            "id": "368523"
        },
        /** Cooperative monster */
        {
            "id": "4253763",
            "luckm": 1.23,
            "points": {
                "attackMag": 54340,
                "attackMag2": 51781,
                "attackMag3": 55614.25
            }
        }
    ]
    for (const deathDatum of deathData) expect(deathDatum).toBeDefined()
})