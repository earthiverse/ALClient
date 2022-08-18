import { DisappearData } from "./adventureland-server"

/**
 * The following is from socket events received 2021-04-23 to 2021-08-13
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
        { "id": "Theron",
            "reason": "transport",
            "to": "main",
            "s": [-120, 1360, 0],
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
        },
        {
            "id": "Dotrawr",
            "reason": "transport",
            "to": "main",
            "s": [-50, 1890],
            "effect": "magiport"
        },
        {
            id: "ScoutWarr",
            reason: "transport",
            to: "jail"
        }
    ]
    for (const report of reports) expect(report).toBeDefined()
})