import { DisappearData } from "./adventureland-server"

/**
 * The following is from socket events received 2021-04-23 to 2021-08-13
 * It is used to confirm type correctness
 */

test("DisappearData type validation", async () => {
    const reports: DisappearData[] = [
        {
            id: "Drippy",
            reason: "transport"
        },
        {
            id: "earthMer",
            reason: "transport",
            s: 0,
            to: "bank"
        },
        {
            id: "Bjarna",
            invis: true,
            reason: "invis"
        },
        {
            effect: "blink",
            id: "cclair",
            reason: "transport"
        },
        {
            effect: "blink",
            id: "Theron",
            reason: "transport",
            s: [
                -120,
                1360,
                0
            ],
            to: "main"
        },
        {
            effect: 1,
            id: "BadgerMage",
            reason: "transport",
            s: 5,
            to: "main"
        },
        {
            id: "Oristus",
            reason: "disconnect"
        },
        {
            effect: "magiport",
            id: "Dotrawr",
            reason: "transport",
            s: [
                -50,
                1890
            ],
            to: "main"
        },
        {
            id: "ScoutWarr",
            reason: "transport",
            to: "jail"
        },
        {
            id: "2591176",
            place: "mentalburst",
            reason: "not_there"
        }
    ]
    for (const report of reports) expect(report).toBeDefined()
})