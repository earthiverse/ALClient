import { GData2 } from "./adventureland-data"

/** 
 * The following is from http://adventure.land/data.js, version 657 (2021-04-09)
 * It is used to confirm type correctness
 */

test("G.projectiles type validation", async () => {
    const G_projectiles: Pick<GData2, "projectiles"> = {
        "projectiles": {
            "burst": {
                "animation": "tiling_burstj",
                "speed": 0,
                "ray": true
            },
            "pinky": {
                "animation": "pinky",
                "speed": 460
            },
            "stone_k": {
                "hit_animation": "explode_b",
                "animation": "pblob",
                "speed": 320
            },
            "plight": {
                "animation": "heal_projectile",
                "speed": 120
            },
            "acid": {
                "animation": "acid",
                "speed": 280
            },
            "firearrow": {
                "animation": "firearrow",
                "speed": 460
            },
            "frostball": {
                "animation": "frostball",
                "speed": 420
            },
            "curse": {
                "hit_animation": "curse_new",
                "animation": "curse_projectile",
                "speed": 240
            },
            "bigmagic": {
                "animation": "magic0",
                "speed": 320
            },
            "cupid": {
                "animation": "cuarrow",
                "speed": 320
            },
            "supershot": {
                "animation": "superarrow",
                "speed": 600
            },
            "magic_divine": {
                "animation": "magic4",
                "speed": 480
            },
            "pmagic": {
                "animation": "magic2",
                "speed": 360
            },
            "magic_purple": {
                "animation": "magic3",
                "speed": 400
            },
            "garrow": {
                "animation": "garrow",
                "speed": 640
            },
            "snowball": {
                "hit_animation": "snowball_hit",
                "animation": "snowball",
                "speed": 180,
                "pure": true
            },
            "frostarrow": {
                "hit_animation": "icecrack",
                "animation": "frostarrow",
                "speed": 580
            },
            "pouch": {
                "hit_animation": "explode_b",
                "animation": "poucharrow",
                "speed": 300
            },
            "poisonarrow": {
                "hit_animation": "arrow_hit",
                "animation": "arrow1",
                "speed": 400
            },
            "stone": {
                "animation": "pblob",
                "speed": 320
            },
            "magic": {
                "animation": "magic1",
                "speed": 400
            },
            "crossbowarrow": {
                "animation": "carrow",
                "speed": 700
            },
            "mmagic": {
                "animation": "mblob_purplish",
                "speed": 400
            },
            "momentum": {
                "hit_animation": "slash1",
                "animation": "slash",
                "speed": 320
            },
            "arrow": {
                "animation": "carrow",
                "speed": 500
            },
            "wandy": {
                "animation": "wandy",
                "speed": 560
            },
            "fireball": {
                "animation": "fireball",
                "speed": 320
            },
            "wmomentum": {
                "hit_animation": "slash3",
                "animation": "wslash",
                "speed": 520
            }
        }
    }
    expect(G_projectiles).not.toBe(undefined)
})