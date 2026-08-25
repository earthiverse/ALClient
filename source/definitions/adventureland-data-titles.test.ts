import type { GData } from "./adventureland-data"

/**
 * The following is from http://adventure.land/data.js, version 5140 (2026-08-25)
 * It is used to confirm type correctness
 */

test("G.titles type validation", async () => {
    const G_titles: Pick<GData, "titles"> = {
        titles: {
            abtesting: { achievement: "abtesting", for: 1, title: "Tester's", type: "orb" },
            critmonger: { str: 2, title: "Monger's", type: "mainhand" },
            fast: { frequency: 10, misc: true, source: "upgrade", title: "Fast", type: "weapon" },
            festive: { achievement: "festive", luck: 1, title: "Festive", type: "cape" },
            firehazard: { achievement: "firehazard", critdamage: 4, title: "Hazardous", type: "mainhand" },
            glitched: { random_stat: 1, source: "exchanges", title: "Glitched", type: "all_items" },
            gooped: { achievement: "gooped", pnresistance: 1, title: "Gooped", type: "pants" },
            legacy: { manual: true, misc: true, title: "Legacy", type: "all_items" },
            lucky: { luck: 2, title: "Lucky", type: "all_items" },
            shiny: { improve: true, source: "random", title: "Shiny", type: "all_items" },
            sniper: {
                attack: 2,
                consecutive_200p_range_last_hits: 1000000,
                source: "achievement",
                title: "Sniper's",
                type: "mainhand",
            },
            stomped: { achievement: "stomped", for: 1, title: "Stomped", type: "helmet" },
            superfast: { frequency: 20, misc: true, source: "upgrade", title: "Super Fast", type: "weapon" },
        },
    }
    expect(G_titles).toBeDefined()
})
