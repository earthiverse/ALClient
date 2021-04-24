import { DisappearData } from "./adventureland-server"

/** 
 * The following is from socket events received 2021-04-23
 * It is used to confirm type correctness
 */

test("DisappearData type validation", async () => {
    const reports: DisappearData[] = [
        {
            "id": "Drippy",
            "reason": "transport"
        },
        {
            "id": "earthMer",
            "reason": "transport",
            "to": "bank",
            "s": 0
        },
        {
            "id": "Bjarna",
            "invis": true,
            "reason": "invis"
        },
        {
            "id": "cclair",
            "reason": "transport",
            "effect": "blink"
        },
        {
            "id": "BadgerMage",
            "reason": "transport",
            "to": "main",
            "s": 5,
            "effect": 1
        },
        {
            "id": "Oristus",
            "reason": "disconnect"
        }
    ]
    for (const report of reports) expect(report).not.toBe(undefined)
})