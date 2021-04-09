import { GData2 } from "./adventureland-data"

/** 
 * The following is from http://adventure.land/data.js, version 657 (2021-04-09)
 * It is used to confirm type correctness
 */

test("G.achivements type validation", async () => {
    const G_achievements: Pick<GData2, "achievements"> = {
        "achievements": {
            "gooped": {
                "count": 60000000,
                "explanation": "Receive 60M damage from Goo's",
                "name": "Gooped",
                "rr": 40000,
                "title": "gooped"
            },
            "festive": {
                "count": 400000,
                "explanation": "Deal 400K damage to Grinch",
                "name": "Festive",
                "title": "festive"
            },
            "1000boss": {
                "explanation": "Defeat 1,000 Bosses",
                "name": "1000th Boss"
            },
            "discoverlair": {
                "explanation": "Find the lair of the Spider Queen.",
                "name": "[Discover] Lair"
            },
            "upgrade10": {
                "name": "The Final Frontier"
            },
            "lucky": {
                "explanation": "Succeed with the exact % on an upgrade or compound.",
                "name": "Lucky",
                "title": "lucky"
            },
            "reach60": {
                "name": "Become Level 60",
                "shells": 100
            },
            "reach90": {
                "explanation": "Reach Level 90",
                "name": "Is it even possible?!",
                "shells": 20000
            },
            "reach70": {
                "name": "Become Level 70",
                "shells": 200
            },
            "firehazard": {
                "count": 20000,
                "explanation": "Last hit 20,000 monsters consecutively with only burn damage using same weapon!",
                "name": "Fire Hazard",
                "title": "firehazard"
            },
            "monsterhunter": {
                "explanation": "Kill 1,000,000 Monsters",
                "name": "Monster Hunter"
            },
            "100boss": {
                "explanation": "Defeat 100 Bosses",
                "name": "100th Boss"
            },
            "reach40": {
                "item": "gem1",
                "name": "Become Level 40"
            },
            "stomped": {
                "count": 1200,
                "explanation": "Get hit 1,200 times randomly by Stompy, without getting hit by any other monster!",
                "name": "Stomped",
                "title": "stomped"
            },
            "reach50": {
                "name": "Become Level 50",
                "shells": 50
            },
            "reach80": {
                "name": "Become Level 80",
                "shells": 200
            }
        }
    }
    expect(G_achievements).not.toBe(undefined)
})