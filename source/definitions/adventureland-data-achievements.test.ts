import type { GData } from "./adventureland-data"

/**
 * The following is from http://adventure.land/data.js, version 5140 (2026-08-25)
 * It is used to confirm type correctness
 */

test("G.achievements type validation", async () => {
    const G_achievements: Pick<GData, "achievements"> = {
        achievements: {
            "100boss": { explanation: "Defeat 100 Bosses", name: "100th Boss" },
            "1000boss": { explanation: "Defeat 1,000 Bosses", name: "1000th Boss" },
            abtesting: {
                count: 1000,
                explanation: "Get 1000 kills during the A/B Testing Event",
                name: "1000 Test Kills",
                title: "abtesting",
            },
            discoverlair: { explanation: "Find the lair of the Spider Queen.", name: "[Discover] Lair" },
            festive: { count: 400000, explanation: "Deal 400K damage to Grinch", name: "Festive", title: "festive" },
            firehazard: {
                count: 20000,
                explanation: "Last hit 20,000 monsters consecutively with only burn damage using same weapon!",
                name: "Fire Hazard",
                title: "firehazard",
            },
            gooped: {
                count: 60000000,
                explanation: "Receive 60M damage from Goo's",
                name: "Gooped",
                rr: 40000,
                title: "gooped",
            },
            lucky: {
                explanation: "Succeed with the exact % on an upgrade or compound.",
                name: "Lucky",
                title: "lucky",
            },
            monsterhunter: { explanation: "Kill 1,000,000 Monsters", name: "Monster Hunter" },
            reach40: { item: "gem1", name: "Become Level 40" },
            reach50: { name: "Become Level 50", shells: 50 },
            reach60: { name: "Become Level 60", shells: 100 },
            reach70: { name: "Become Level 70", shells: 200 },
            reach80: { name: "Become Level 80", shells: 200 },
            reach90: { explanation: "Reach Level 90", name: "Is it even possible?!", shells: 20000 },
            stomped: {
                count: 1200,
                explanation: "Get hit 1,200 times randomly by Stompy, without getting hit by any other monster!",
                name: "Stomped",
                title: "stomped",
            },
            upgrade10: { name: "The Final Frontier" },
        },
    }
    expect(G_achievements).toBeDefined()
})
