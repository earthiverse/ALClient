/* eslint-disable sort-keys */
import { GData } from "./adventureland-data"

/**
 * The following is from http://adventure.land/data.js, version 683 (2021-07-28)
 * It is used to confirm type correctness
 */

test("G.titles type validation", async () => {
    const G_titles: Pick<GData, "titles"> = {
        titles: {
            firehazard: {
                type: "mainhand",
                critdamage: 4,
                achievement: "firehazard",
                title: "Hazardous",
            },
            festive: {
                luck: 1,
                type: "cape",
                achievement: "festive",
                title: "Festive",
            },
            critmonger: {
                type: "mainhand",
                str: 2,
                title: "Monger's",
            },
            glitched: {
                source: "exchanges",
                type: "all_items",
                random_stat: 1,
                title: "Glitched",
            },
            lucky: {
                title: "Lucky",
                type: "all_items",
                luck: 2,
            },
            legacy: {
                manual: true,
                type: "all_items",
                title: "Legacy",
            },
            fast: {
                source: "upgrade",
                frequency: 10,
                type: "weapon",
                misc: true,
                title: "Fast",
            },
            gooped: {
                type: "pants",
                pnresistance: 1,
                achievement: "gooped",
                title: "Gooped",
            },
            stomped: {
                type: "helmet",
                for: 1,
                achievement: "stomped",
                title: "Stomped",
            },
            shiny: {
                source: "random",
                title: "Shiny",
                type: "all_items",
                improve: true,
            },
            superfast: {
                source: "upgrade",
                frequency: 20,
                type: "weapon",
                misc: true,
                title: "Super Fast",
            },
            sniper: {
                consecutive_200p_range_last_hits: 1000000,
                attack: 2,
                title: "Sniper's",
                type: "mainhand",
                source: "achievement",
            },
        },
    }
    expect(G_titles).toBeDefined()
})
