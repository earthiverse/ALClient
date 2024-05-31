/* eslint-disable sort-keys */
import type { GData } from "./adventureland-data"

/**
 * The following is from http://adventure.land/data.js, version 683 (2021-07-28)
 * It is used to confirm type correctness
 */

test("G.dismantle type validation", async () => {
    const G_dismantle: Pick<GData, "dismantle"> = {
        dismantle: {
            molesteeth: {
                items: [[0.1, "platinumnugget"]],
                cost: 100000,
            },
            goldingot: {
                items: [[12, "goldnugget"]],
                cost: 1200000,
            },
            essenceoffrost: {
                items: [[1, "emptyjar"]],
                cost: 10,
            },
            platinumingot: {
                items: [[8, "platinumnugget"]],
                cost: 12000000,
            },
            essenceofnature: {
                items: [[1, "emptyjar"]],
                cost: 10,
            },
            bowofthedead: {
                items: [[1, "mbones"]],
                cost: 40,
            },
            lostearring: {
                items: [[0.12, "goldnugget"]],
                cost: 36000,
            },
            swordofthedead: {
                items: [[1, "mbones"]],
                cost: 40,
            },
            staffofthedead: {
                items: [[1, "mbones"]],
                cost: 40,
            },
            essenceoffire: {
                items: [[1, "emptyjar"]],
                cost: 10,
            },
            maceofthedead: {
                items: [[1, "mbones"]],
                cost: 40,
            },
            bronzeingot: {
                items: [[16, "bronzenugget"]],
                cost: 120000,
            },
            fireblade: {
                items: [[1, "essenceoffire"]],
                cost: 10000,
            },
            essenceoflife: {
                items: [[1, "emptyjar"]],
                cost: 10,
            },
            firestars: {
                items: [[1, "essenceoffire"]],
                cost: 10000,
            },
            daggerofthedead: {
                items: [[1, "mbones"]],
                cost: 40,
            },
            goldenegg: {
                items: [
                    [1, "goldnugget"],
                    [0.5, "goldnugget"],
                ],
                cost: 120000,
            },
            spearofthedead: {
                items: [[2, "mbones"]],
                cost: 40,
            },
            firestaff: {
                items: [[1, "essenceoffire"]],
                cost: 10000,
            },
        },
    }
    expect(G_dismantle).toBeDefined()
})
