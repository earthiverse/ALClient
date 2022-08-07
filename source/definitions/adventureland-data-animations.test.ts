/* eslint-disable sort-keys */
import { GData } from "./adventureland-data"

/**
 * The following is from http://adventure.land/data.js, version 683 (2021-07-28)
 * It is used to confirm type correctness
 */

test("G.animations type validation", async () => {
    const G_animations: Pick<GData, "animations"> = {
        "animations": {
            "acid": {
                "continuous": true,
                "file": "/images/sprites/animations/terrorAcid.png",
                "frames": 4,
                "scale": 0.75,
                "speed": 280
            },
            "arrow1": {
                "continuous": true,
                "directional": true,
                "file": "/images/sprites/animations/arrow1.png",
                "frames": 4,
                "speed": 400
            },
            "arrow_hit": {
                "alpha": 0.9,
                "file": "/images/sprites/animations/Slash0Arrow.png",
                "frames": 7,
                "size": 0.8
            },
            "block": {
                "file": "/images/sprites/animations/Block.png",
                "frames": 11
            },
            "burst": {
                "alpha": 0.7,
                "file": "/images/sprites/animations/Electric.png",
                "frames": 6
            },
            "carrow": {
                "continuous": true,
                "directional": true,
                "file": "/images/sprites/animations/CArrow.png",
                "frames": 3,
                "speed": 500
            },
            "confetti": {
                "alpha": 0.4,
                "file": "/images/sprites/animations/confetti2.png",
                "frames": 12
            },
            "crackle": {
                "file": "/images/sprites/animations/GlintF.png",
                "frames": 4
            },
            "cuarrow": {
                "continuous": true,
                "directional": true,
                "file": "/images/sprites/animations/heartedArrow.png",
                "frames": 3,
                "speed": 320
            },
            "curse": {
                "alpha": 0.9,
                "aspeed": "slow",
                "file": "/images/sprites/animations/Poison.png",
                "frames": 8,
                "proportional": true
            },
            "curse_new": {
                "alpha": 1,
                "aspeed": "slow",
                "exact": true,
                "file": "/images/sprites/animations/curse.png",
                "frames": 6,
                "y": 6
            },
            "curse_projectile": {
                "continuous": true,
                "file": "/images/sprites/animations/curseAttack.png",
                "framefps": 1,
                "frames": 3,
                "speed": 240
            },
            "dampened": {
                "alpha": 1,
                "aspeed": "slow",
                "continuous": true,
                "file": "/images/sprites/animations/Dampen.png",
                "frames": 6,
                "proportional": true
            },
            "exchange": {
                "file": "/images/sprites/animations/Consume2.png",
                "frames": 13
            },
            "explode_a": {
                "file": "/images/sprites/animations/ExplodeA.png",
                "frames": 12
            },
            "explode_b": {
                "file": "/images/sprites/animations/ExplodeB.png",
                "frames": 12
            },
            "explode_c": {
                "file": "/images/sprites/animations/ExplodeC.png",
                "frames": 12
            },
            "explode_p": {
                "file": "/images/sprites/animations/ExplodeP2.png",
                "frames": 12
            },
            "explode_up": {
                "file": "/images/sprites/animations/ExplodeUCS.png",
                "frames": 12
            },
            "failure": {
                "file": "/images/sprites/animations/CRed_Spark5.png",
                "frames": 10
            },
            "firearrow": {
                "continuous": true,
                "directional": true,
                "file": "/images/sprites/animations/fireArrow.png",
                "frames": 4,
                "scale": 0.75,
                "speed": 460
            },
            "fireball": {
                "continuous": true,
                "directional": true,
                "file": "/images/sprites/animations/fireball.png",
                "frames": 4,
                "speed": 320
            },
            "flare_blue": {
                "alpha": 0.7,
                "file": "/images/sprites/animations/flare_effect_blue.png",
                "frames": 9
            },
            "flare_yellow": {
                "alpha": 0.7,
                "file": "/images/sprites/animations/flare_effect_yellow.png",
                "frames": 9
            },
            "fog": {
                "file": "/images/sprites/weather/fog.png",
                "frames": 2
            },
            "frostarrow": {
                "continuous": true,
                "directional": true,
                "file": "/images/sprites/animations/frostArrow.png",
                "frames": 4,
                "scale": 0.75,
                "speed": 580
            },
            "frostball": {
                "continuous": true,
                "directional": true,
                "file": "/images/sprites/animations/frostball.png",
                "frames": 4,
                "speed": 420
            },
            "garrow": {
                "continuous": true,
                "directional": true,
                "file": "/images/sprites/animations/garrow.png",
                "frames": 4,
                "speed": 640
            },
            "gburst": {
                "alpha": 0.7,
                "file": "/images/sprites/animations/ElectricG.png",
                "frames": 6
            },
            "gm": {
                "alpha": 0.8,
                "continuous": true,
                "file": "/images/sprites/animations/Shield_Invincible.png",
                "frames": 9
            },
            "gold": {
                "continuous": true,
                "directional": true,
                "file": "/images/sprites/animations/gold.png",
                "frames": 1,
                "front": true,
                "speed": 160
            },
            "gold_anim": {
                "file": "/images/sprites/animations/gold_anim.png",
                "frames": 13
            },
            "hardshell": {
                "alpha": 0.8,
                "aspeed": "slow",
                "continuous": true,
                "file": "/images/sprites/animations/warrior_shield.png",
                "frames": 9
            },
            "heal": {
                "file": "/images/sprites/animations/ConsumeP.png",
                "frames": 13
            },
            "heal_projectile": {
                "continuous": true,
                "file": "/images/sprites/animations/healAttack.png",
                "frames": 4,
                "scale": 0.5,
                "speed": 120
            },
            "hearts_single": {
                "alpha": 1,
                "file": "/images/sprites/emotions/heart_rise_single.png",
                "frames": 10,
                "size": 2,
                "y": -10
            },
            "icecrack": {
                "alpha": 1,
                "file": "/images/sprites/animations/crackingIce.png",
                "frames": 6,
                "size": 1,
                "y": 2
            },
            "invincible": {
                "alpha": 0.8,
                "continuous": true,
                "file": "/images/sprites/animations/Shield1.png",
                "frames": 9
            },
            "light": {
                "alpha": 0.7,
                "file": "/images/sprites/animations/Light.png",
                "frames": 11
            },
            "magic0": {
                "continuous": true,
                "directional": true,
                "file": "/images/sprites/animations/magic0.png",
                "framefps": 9,
                "frames": 4,
                "speed": 320
            },
            "magic1": {
                "continuous": true,
                "directional": true,
                "file": "/images/sprites/animations/magic1.png",
                "framefps": 9,
                "frames": 4,
                "speed": 400
            },
            "magic2": {
                "continuous": true,
                "directional": true,
                "file": "/images/sprites/animations/magic2.png",
                "framefps": 9,
                "frames": 4,
                "speed": 360
            },
            "magic3": {
                "continuous": true,
                "directional": true,
                "file": "/images/sprites/animations/magic3.png",
                "framefps": 9,
                "frames": 4,
                "speed": 400
            },
            "magic4": {
                "continuous": true,
                "directional": true,
                "file": "/images/sprites/animations/magic4.png",
                "framefps": 9,
                "frames": 4,
                "speed": 480
            },
            "mblob": {
                "continuous": true,
                "directional": true,
                "file": "/images/sprites/animations/MBlob.png",
                "frames": 3,
                "speed": 800
            },
            "mblob_purplish": {
                "continuous": true,
                "directional": true,
                "file": "/images/sprites/animations/MBlobP.png",
                "frames": 3,
                "speed": 400
            },
            "mblob_red": {
                "continuous": true,
                "directional": true,
                "file": "/images/sprites/animations/MBlobR.png",
                "framefps": 9,
                "frames": 3,
                "speed": 800
            },
            "mluck": {
                "file": "/images/sprites/animations/Consume0.png",
                "frames": 13
            },
            "party_heal": {
                "alpha": 1,
                "aspeed": "slow",
                "exact": true,
                "file": "/images/sprites/animations/partyHeal.png",
                "frames": 9,
                "y": 6
            },
            "pblob": {
                "continuous": true,
                "directional": true,
                "file": "/images/sprites/animations/PBlob.png",
                "frames": 3,
                "speed": 320
            },
            "pinky": {
                "continuous": true,
                "directional": true,
                "file": "/images/sprites/animations/pinky.png?v=2",
                "frames": 3,
                "speed": 460
            },
            "poucharrow": {
                "continuous": true,
                "directional": true,
                "file": "/images/sprites/animations/pouchArrow.png",
                "frames": 4,
                "scale": 0.75,
                "speed": 300
            },
            "rain": {
                "file": "/images/sprites/weather/wsheet_rain1_1.png",
                "frames": 4
            },
            "reflection": {
                "alpha": 0.8,
                "aspeed": "slow",
                "continuous": true,
                "file": "/images/sprites/animations/reflection.png",
                "frames": 9
            },
            "revival": {
                "alpha": 0.8,
                "continuous": true,
                "file": "/images/sprites/animations/Teleport1P.png",
                "frames": 12,
                "speeding": true
            },
            "rspeed": {
                "file": "/images/sprites/animations/ConsumeR.png",
                "frames": 13
            },
            "slash": {
                "continuous": true,
                "directional": true,
                "file": "/images/sprites/animations/slash.png",
                "frames": 3,
                "front": true,
                "speed": 320
            },
            "slash0": {
                "file": "/images/sprites/animations/Slash0.png",
                "frames": 7
            },
            "slash1": {
                "file": "/images/sprites/animations/Slash1.png",
                "frames": 7
            },
            "slash2": {
                "alpha": 0.9,
                "aspeed": "fast",
                "file": "/images/sprites/animations/Slash2Quick.png",
                "frames": 7,
                "size": 0.75
            },
            "slash3": {
                "file": "/images/sprites/animations/Slash3.png",
                "frames": 7
            },
            "snow": {
                "file": "/images/sprites/weather/wsheet_snow_1.png",
                "frames": 4
            },
            "snowball": {
                "continuous": true,
                "directional": true,
                "file": "/images/sprites/animations/snowball_projectile.png",
                "frames": 4,
                "size": 0.75,
                "speed": 180
            },
            "snowball_hit": {
                "alpha": 1,
                "aspeed": "slow",
                "exact": true,
                "file": "/images/sprites/animations/snowball_hit.png",
                "frames": 4,
                "y": -10
            },
            "snowflake": {
                "file": "/images/sprites/animations/snowflake.png",
                "frames": 7
            },
            "spark0": {
                "file": "/images/sprites/animations/Spark0.png",
                "frames": 10
            },
            "starkiller": {
                "alpha": 0.8,
                "aspeed": "mild",
                "file": "/images/sprites/animations/attack3.png",
                "frames": 12
            },
            "stunned": {
                "alpha": 0.4,
                "file": "/images/sprites/animations/NuclearA1.png",
                "frames": 6
            },
            "success": {
                "file": "/images/sprites/animations/CGreen_Spark3.png",
                "frames": 10
            },
            "superarrow": {
                "continuous": true,
                "directional": true,
                "file": "/images/sprites/animations/arrow2.png",
                "frames": 4,
                "scale": 1.5,
                "speed": 600
            },
            "supershot": {
                "alpha": 0.9,
                "file": "/images/sprites/animations/Slash0Super.png",
                "frames": 7
            },
            "tangle": {
                "alpha": 1,
                "aspeed": "slow",
                "continuous": true,
                "file": "/images/sprites/animations/Tangle.png",
                "frames": 6,
                "proportional": true
            },
            "taunt": {
                "alpha": 1,
                "file": "/images/sprites/animations/Puff.png",
                "frames": 7
            },
            "tiling_burst": {
                "alpha": 1,
                "fade": true,
                "file": "/images/sprites/animations/burst.png",
                "frames": 1,
                "tiling": true
            },
            "tiling_burst_g": {
                "alpha": 1,
                "fade": true,
                "file": "/images/sprites/animations/eburst.png",
                "frames": 1,
                "tiling": true
            },
            "tiling_burstj": {
                "alpha": 1,
                "fade": true,
                "file": "/images/sprites/animations/lightningBurst3.png",
                "frames": 1,
                "tiling": true
            },
            "transport": {
                "alpha": 0.8,
                "continuous": true,
                "file": "/images/sprites/animations/Teleport2.png",
                "frames": 9
            },
            "typing": {
                "alpha": 1,
                "aspeed": "slow",
                "bubble": true,
                "continuous": true,
                "file": "/images/sprites/animations/typingAnim.png",
                "frames": 4
            },
            "wandy": {
                "continuous": true,
                "directional": true,
                "file": "/images/sprites/animations/wandy.png?v=2",
                "frames": 3,
                "speed": 560
            },
            "wslash": {
                "continuous": true,
                "directional": true,
                "file": "/images/sprites/animations/wslash.png",
                "frames": 3,
                "front": true,
                "speed": 520
            }
        }
    }
    expect(G_animations).not.toBe(undefined)
})