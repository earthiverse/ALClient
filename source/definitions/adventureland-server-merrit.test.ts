import type { MerritGiftData, MerritStatusData } from "./adventureland-server"

/**
 * The following is from socket events received 2026-09-08
 * It is used to confirm type correctness
 */

test("MerritStatusData type validation", async () => {
    const statusEvents: MerritStatusData[] = [
        { reasons: [{ code: "closed" }], next_at: 0, last: null, server_now: 1788866290313 },
        {
            reasons: [{ code: "warming", remaining_ms: 206 }],
            next_at: 1788866412344,
            last: null,
            server_now: 1788866412138,
        },
        {
            reasons: [
                { code: "warming", remaining_ms: 120000 },
                { code: "cooldown", remaining_ms: 3599987 },
            ],
            next_at: 1788870021270,
            last: {
                id: "yimvZfbonZpKGFadaMCH04hEFIVvrUrN",
                at: 1788866421270,
                character: "CH_4937158681165824",
                name: "Merzair",
                item: "marketparcel",
                quantity: 1,
                shells: 0,
                reason: "Your shop stayed stocked for two minutes and left the neighbors room.",
            },
            server_now: 1788866421283,
        },
    ]

    for (const status of statusEvents) {
        expect(status).toBeDefined()
    }
})

test("MerritGiftData type validation", async () => {
    const giftEvents: MerritGiftData[] = [
        {
            id: "yimvZfbonZpKGFadaMCH04hEFIVvrUrN",
            receipt: {
                id: "yimvZfbonZpKGFadaMCH04hEFIVvrUrN",
                at: 1788866421270,
                character: "CH_4937158681165824",
                name: "Merzair",
                item: "marketparcel",
                quantity: 1,
                shells: 0,
                reason: "Your shop stayed stocked for two minutes and left the neighbors room.",
            },
        },
    ]

    for (const gift of giftEvents) {
        expect(gift).toBeDefined()
    }
})
