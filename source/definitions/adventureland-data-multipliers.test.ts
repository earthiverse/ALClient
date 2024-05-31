import type { GData } from "./adventureland-data"

/**
 * The following is from http://adventure.land/data.js, version 720 (2022-07-26)
 * It is used to confirm type correctness
 */

test("G.multipliers type validation", async () => {
    const G_multipliers: Pick<GData, "multipliers"> = {
        multipliers: {
            buy_to_sell: 0.6,
            extra_shells: 0,
            lostandfound_mult: 4,
            secondhands_cash_mult: 3,
            secondhands_mult: 2,
            shells_to_gold: 32000,
        },
    }
    expect(G_multipliers).toBeDefined()
})
