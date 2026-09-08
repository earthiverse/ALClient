import type { GData } from "./adventureland-data"

/**
 * The following is from http://adventure.land/data.js, version 8535 (2026-09-07)
 * It is used to confirm type correctness
 */

test("G.events type validation", async () => {
    const G_events: Pick<GData, "events"> = {
        events: {
            abtesting: {
                announcement: { accent: "#78D6A0", color: "#EC526D", effect: "sparks", text: "Join the team battle." },
                duration: 480,
                join: true,
                modal: "event-abtesting",
                name: "A/B Testing",
                sprite: "thehelmet",
                type: "daily",
            },
            anniversary: {
                announcement: {
                    accent: "#ED86AB",
                    color: "#F0B742",
                    effect: "confetti",
                    text: "Find players for cake and Gifts.",
                    title: "10 Years of Adventure",
                },
                modal: "event-anniversary",
                name: "Ten Years of Adventure Land",
                sprite: "sixcake",
                type: "seasonal",
            },
            crabxx: {
                announcement: {
                    accent: "#73D5DB",
                    color: "#F18B64",
                    effect: "splash",
                    text: "Help take down Giga Crab.",
                },
                duration: 2400,
                join: true,
                modal: "event-crabxx",
                name: "Giga Crab",
                sprite: "crabxx",
                type: "daily",
            },
            egghunt: {
                announcement: {
                    accent: "#D7A1E8",
                    color: "#AFD778",
                    effect: "confetti",
                    text: "Hunt for eggs across the land.",
                },
                duration: 1296000,
                modal: "event-egghunt",
                name: "Egg Hunt",
                sprite: "basketofeggs",
                type: "seasonal",
            },
            franky: {
                announcement: { accent: "#C29BE7", color: "#9FCF6D", effect: "sparks", text: "Franky is awake." },
                duration: 2400,
                join: true,
                modal: "event-franky",
                name: "Franky",
                sprite: "franky",
                type: "nightly",
            },
            goobrawl: {
                announcement: { accent: "#A5DC6C", color: "#F78159", effect: "bubbles", text: "Join the goo fight." },
                duration: 540,
                join: true,
                modal: "event-goobrawl",
                name: "Goo Brawl",
                sprite: "rgoo",
                type: "daily",
            },
            halloween: {
                announcement: {
                    accent: "#AD91DC",
                    color: "#F5A05B",
                    effect: "embers",
                    text: "Collect candy from monsters.",
                },
                duration: 2592000,
                modal: "event-halloween",
                name: "Halloween",
                sprite: "candy0",
                type: "seasonal",
            },
            holidayseason: {
                announcement: {
                    accent: "#EE8B92",
                    color: "#7ACA8B",
                    effect: "snow",
                    text: "Collect candy canes and gifts.",
                },
                duration: 2592000,
                modal: "event-holidayseason",
                name: "Holiday Season",
                sprite: "grinch",
                type: "seasonal",
            },
            icegolem: {
                announcement: { accent: "#E0F6FF", color: "#8BD4F4", effect: "snow", text: "Face the Ice Golem." },
                duration: 2400,
                join: true,
                modal: "event-icegolem",
                name: "Ice Golem",
                sprite: "icegolem",
                type: "nightly",
            },
            lunarnewyear: {
                announcement: {
                    accent: "#F3D16E",
                    color: "#EF7272",
                    effect: "fireworks",
                    text: "Envelopes are dropping across the land.",
                },
                duration: 1296000,
                modal: "event-lunarnewyear",
                name: "Lunar New Year",
                sprite: "redenvelopev4",
                type: "seasonal",
            },
            valentines: {
                announcement: {
                    accent: "#F5C8D9",
                    color: "#F08AB6",
                    effect: "hearts",
                    text: "Candy Pops and Love Goo await.",
                },
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
