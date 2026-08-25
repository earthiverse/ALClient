import type { GData } from "./adventureland-data"

/**
 * The following is from http://adventure.land/data.js, version 5140 (2026-08-25)
 * It is used to confirm type correctness
 */

test("G.emotions type validation", async () => {
    const G_emotions: Pick<GData, "emotions"> = {
        emotions: {
            drop_egg: { cooldown: 2000, fx: "drop_egg" },
            hearts_single: { cooldown: 2000, fx: "hearts_single" },
        },
    }
    expect(G_emotions).toBeDefined()
})
