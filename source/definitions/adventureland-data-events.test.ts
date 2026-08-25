import type { GData } from "./adventureland-data"

/**
 * The following is from http://adventure.land/data.js, version 5140 (2026-08-25)
 * It is used to confirm type correctness
 */

test("G.events type validation", async () => {
    const G_events: Pick<GData, "events"> = {
        events: {
            abtesting: {
                duration: 480,
                join: true,
                modal: "event-abtesting",
                name: "A/B Testing",
                sprite: "thehelmet",
                type: "daily",
            },
            crabxx: {
                duration: 2400,
                join: true,
                modal: "event-crabxx",
                name: "Giga Crab",
                sprite: "crabxx",
                type: "daily",
            },
            egghunt: {
                duration: 1296000,
                modal: "event-egghunt",
                name: "Egg Hunt",
                sprite: "basketofeggs",
                type: "seasonal",
            },
            franky: {
                duration: 2400,
                join: true,
                modal: "event-franky",
                name: "Franky",
                sprite: "franky",
                type: "nightly",
            },
            goobrawl: {
                duration: 540,
                join: true,
                modal: "event-goobrawl",
                name: "Goo Brawl",
                sprite: "rgoo",
                type: "daily",
            },
            halloween: {
                duration: 2592000,
                modal: "event-halloween",
                name: "Halloween",
                sprite: "candy0",
                type: "seasonal",
            },
            holidayseason: {
                duration: 2592000,
                modal: "event-holidayseason",
                name: "Holiday Season",
                sprite: "grinch",
                type: "seasonal",
            },
            icegolem: {
                duration: 2400,
                join: true,
                modal: "event-icegolem",
                name: "Ice Golem",
                sprite: "icegolem",
                type: "nightly",
            },
            lunarnewyear: {
                duration: 1296000,
                modal: "event-lunarnewyear",
                name: "Lunar New Year",
                sprite: "redenvelopev4",
                type: "seasonal",
            },
            valentines: {
                duration: 864000,
                modal: "event-valentines",
                name: "Valentines",
                sprite: "cupid",
                type: "seasonal",
            },
        },
    }
    expect(G_events).toBeDefined()
})
