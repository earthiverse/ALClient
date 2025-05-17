import type { GData } from "./adventureland-data"

/**
 * The following is from http://adventure.land/data.js, version 729 (2022-08-06)
 * It is used to confirm type correctness
 */

test("G.projectiles type validation", async () => {
    const G_projectiles: Pick<GData, "projectiles"> = {
        projectiles: {
            acid: {
                animation: "acid",
                speed: 280,
            },
            arrow: {
                animation: "carrow",
                hit_animation: "arrow_hit",
                speed: 500,
            },
            bigmagic: {
                animation: "magic0",
                hit_animation: "explode_c",
                speed: 320,
            },
            burst: {
                hit_animation: "burst",
                instant: true,
                ray: "tiling_burstj",
            },
            crossbowarrow: {
                animation: "carrow",
                hit_animation: "arrow_hit",
                speed: 700,
            },
            cupid: {
                animation: "cuarrow",
                hit_animation: "heal",
                speed: 320,
            },
            curse: {
                animation: "curse_projectile",
                hit_animation: "curse_new",
                speed: 240,
            },
            dartgun: {
                animation: "gold",
                hit_animation: "slash1",
                speed: 320,
            },
            firearrow: {
                animation: "firearrow",
                hit_animation: "arrow_hit",
                speed: 460,
            },
            fireball: {
                animation: "fireball",
                hit_animation: "explode_c",
                speed: 320,
            },
            frostarrow: {
                animation: "frostarrow",
                hit_animation: "icecrack",
                speed: 580,
            },
            frostball: {
                animation: "frostball",
                hit_animation: "explode_c",
                speed: 420,
            },
            garrow: {
                animation: "garrow",
                hit_animation: "arrow_hit",
                speed: 640,
            },
            gburst: {
                hit_animation: "gburst",
                instant: true,
                ray: "tiling_burst_g",
            },
            magic: {
                animation: "magic1",
                hit_animation: "explode_c",
                speed: 400,
            },
            magic_divine: {
                animation: "magic4",
                hit_animation: "explode_c",
                speed: 480,
            },
            magic_purple: {
                animation: "magic3",
                hit_animation: "explode_c",
                speed: 400,
            },
            mentalburst: {
                hit_animation: "burst",
                instant: true,
                kill_text: ["POW!", "#4C9AE0"],
                ray: "tiling_burstj",
            },
            mmagic: {
                animation: "mblob_purplish",
                hit_animation: "explode_p",
                speed: 400,
            },
            momentum: {
                animation: "slash",
                hit_animation: "slash1",
                speed: 320,
            },
            partyheal: {
                hit_animation: "party_heal",
                instant: true,
            },
            pinky: {
                animation: "pinky",
                hit_animation: "explode_c",
                speed: 460,
            },
            plight: {
                animation: "heal_projectile",
                hit_animation: "heal",
                speed: 120,
            },
            pmagic: {
                animation: "magic2",
                hit_animation: "explode_p",
                speed: 360,
            },
            poisonarrow: {
                animation: "arrow1",
                hit_animation: "arrow_hit",
                hit_text: ["POISONED!", "poison"],
                speed: 400,
            },
            pouch: {
                animation: "poucharrow",
                hit_animation: "explode_b",
                speed: 300,
            },
            purify: {
                hit_animation: "flare_yellow",
                hit_text: ["PURIFIED!", "#DDCC7B"],
                instant: true,
            },
            quickpunch: {
                animation: "slash",
                hit_animation: "slash2",
                hit_text: ["PUNCH!", "#41338B"],
                speed: 420,
            },
            quickstab: {
                animation: "slash",
                hit_animation: "slash2",
                hit_text: ["STAB!", "#41338B"],
                speed: 420,
            },
            sburst: {
                hit_animation: "burst",
                instant: true,
                ray: "tiling_burst",
            },
            smash: {
                animation: "slash",
                hit_animation: "slash2",
                hit_text: ["SMASH!", "#CBB892"],
                speed: 420,
            },
            snowball: {
                animation: "snowball",
                hit_animation: "snowball_hit",
                pure: true,
                speed: 180,
            },
            stone: {
                animation: "pblob",
                hit_animation: "slash1",
                speed: 320,
            },
            stone_k: {
                animation: "pblob",
                hit_animation: "explode_b",
                speed: 320,
            },
            supershot: {
                animation: "superarrow",
                hit_animation: "supershot",
                hit_text: ["SUPERSHOT!", "#9B172E"],
                speed: 600,
            },
            wandy: {
                animation: "wandy",
                hit_animation: "explode_c",
                speed: 560,
            },
            wmomentum: {
                animation: "wslash",
                hit_animation: "slash3",
                speed: 520,
            },
        },
    }
    expect(G_projectiles).toBeDefined()
})
