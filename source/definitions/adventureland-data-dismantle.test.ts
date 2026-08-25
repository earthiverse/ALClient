import type { GData } from "./adventureland-data"

/**
 * The following is from http://adventure.land/data.js, version 5140 (2026-08-25)
 * It is used to confirm type correctness
 */

test("G.dismantle type validation", async () => {
    const G_dismantle: Pick<GData, "dismantle"> = {
        dismantle: {
            bowofthedead: { cost: 40, items: [[1, "mbones"]] },
            bronzeingot: { cost: 120000, items: [[16, "bronzenugget"]] },
            daggerofthedead: { cost: 40, items: [[1, "mbones"]] },
            essenceoffire: { cost: 10, items: [[1, "emptyjar"]] },
            essenceoffrost: { cost: 10, items: [[1, "emptyjar"]] },
            essenceoflife: { cost: 10, items: [[1, "emptyjar"]] },
            essenceofnature: { cost: 10, items: [[1, "emptyjar"]] },
            fireblade: { cost: 10000, items: [[1, "essenceoffire"]] },
            firebow: { cost: 10000, items: [[1, "essenceoffire"]] },
            firestaff: { cost: 10000, items: [[1, "essenceoffire"]] },
            firestars: { cost: 10000, items: [[1, "essenceoffire"]] },
            goldenegg: {
                cost: 120000,
                items: [
                    [1, "goldnugget"],
                    [0.5, "goldnugget"],
                ],
            },
            goldingot: { cost: 1200000, items: [[12, "goldnugget"]] },
            lostearring: { cost: 36000, items: [[0.12, "goldnugget"]] },
            maceofthedead: { cost: 40, items: [[1, "mbones"]] },
            molesteeth: { cost: 100000, items: [[0.1, "platinumnugget"]] },
            platinumingot: { cost: 12000000, items: [[8, "platinumnugget"]] },
            pmaceofthedead: { cost: 40, items: [[1, "mbones"]] },
            spearofthedead: { cost: 40, items: [[2, "mbones"]] },
            staffofthedead: { cost: 40, items: [[1, "mbones"]] },
            swordofthedead: { cost: 40, items: [[1, "mbones"]] },
        },
    }
    expect(G_dismantle).toBeDefined()
})
