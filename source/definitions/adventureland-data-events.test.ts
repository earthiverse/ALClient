import type { GData } from "./adventureland-data"

/**
 * The following is from http://adventure.land/data.js, version 729 (2022-08-06)
 * It is used to confirm type correctness
 */

test("G.events type validation", async () => {
    const G_emotions: Pick<GData, "events"> = {
        events: {
            abtesting: {
                daily: true,
                duration: 480,
                join: true,
            },
            crabxx: {
                daily: true,
                duration: 2400,
                join: true,
            },
            franky: {
                daily: true,
                duration: 2400,
                join: true,
            },
            goobrawl: {
                daily: true,
                duration: 540,
                join: true,
            },
            icegolem: {
                daily: true,
                duration: 2400,
                join: true,
            },
        },
    }
    expect(G_emotions).toBeDefined()
})
