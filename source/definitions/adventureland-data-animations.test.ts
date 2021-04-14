import { GData2 } from "./adventureland-data"

/** 
 * The following is from http://adventure.land/data.js, version 657 (2021-04-09)
 * It is used to confirm type correctness
 */

test("G.animations type validation", async () => {
    const G_animations: Pick<GData2, "animations"> = {
        "animations": {
            "spark0": {
                "frames": 10,
                "file": "/images/sprites/animations/Spark0.png"
            },
            "explode_c": {
                "frames": 12,
                "file": "/images/sprites/animations/ExplodeC.png"
            },
            "explode_b": {
                "frames": 12,
                "file": "/images/sprites/animations/ExplodeB.png"
            },
            "explode_a": {
                "frames": 12,
                "file": "/images/sprites/animations/ExplodeA.png"
            },
            "starkiller": {
                "frames": 12,
                "alpha": 0.8,
                "aspeed": "mild",
                "file": "/images/sprites/animations/attack3.png"
            },
            "tiling_burstj": {
                "file": "/images/sprites/animations/lightningBurst3.png",
                "fade": true,
                "frames": 1,
                "alpha": 1,
                "tiling": true,
                "speed": 0
            },
            "magic2": {
                "directional": true,
                "framefps": 9,
                "continuous": true,
                "file": "/images/sprites/animations/magic2.png",
                "frames": 4,
                "speed": 360
            },
            "crackle": {
                "frames": 4,
                "file": "/images/sprites/animations/GlintF.png"
            },
            "pinky": {
                "frames": 3,
                "continuous": true,
                "speed": 460,
                "file": "/images/sprites/animations/pinky.png?v=2",
                "directional": true
            },
            "mluck": {
                "frames": 13,
                "file": "/images/sprites/animations/Consume0.png"
            },
            "curse_projectile": {
                "frames": 3,
                "framefps": 1,
                "continuous": true,
                "speed": 240,
                "file": "/images/sprites/animations/curseAttack.png"
            },
            "mblob": {
                "frames": 3,
                "continuous": true,
                "speed": 800,
                "file": "/images/sprites/animations/MBlob.png",
                "directional": true
            },
            "explode_p": {
                "frames": 12,
                "file": "/images/sprites/animations/ExplodeP2.png"
            },
            "gm": {
                "frames": 9,
                "alpha": 0.8,
                "continuous": true,
                "file": "/images/sprites/animations/Shield_Invincible.png"
            },
            "acid": {
                "frames": 4,
                "continuous": true,
                "speed": 280,
                "scale": 0.75,
                "file": "/images/sprites/animations/terrorAcid.png"
            },
            "firearrow": {
                "scale": 0.75,
                "directional": true,
                "continuous": true,
                "file": "/images/sprites/animations/fireArrow.png",
                "frames": 4,
                "speed": 460
            },
            "tangle": {
                "continuous": true,
                "file": "/images/sprites/animations/Tangle.png",
                "proportional": true,
                "frames": 6,
                "alpha": 1,
                "aspeed": "slow"
            },
            "pblob": {
                "frames": 3,
                "continuous": true,
                "speed": 320,
                "file": "/images/sprites/animations/PBlob.png",
                "directional": true
            },
            "gold": {
                "directional": true,
                "continuous": true,
                "front": true,
                "file": "/images/sprites/animations/gold.png",
                "frames": 1,
                "speed": 160
            },
            "revival": {
                "frames": 12,
                "alpha": 0.8,
                "continuous": true,
                "file": "/images/sprites/animations/Teleport1P.png",
                "speeding": true
            },
            "burst": {
                "frames": 6,
                "alpha": 1,
                "file": "/images/sprites/animations/Electric.png"
            },
            "snow": {
                "frames": 4,
                "file": "/images/sprites/weather/wsheet_snow_1.png"
            },
            "arrow1": {
                "frames": 4,
                "continuous": true,
                "speed": 400,
                "file": "/images/sprites/animations/arrow1.png",
                "directional": true
            },
            "gold_anim": {
                "frames": 13,
                "file": "/images/sprites/animations/gold_anim.png"
            },
            "supershot": {
                "frames": 7,
                "alpha": 0.9,
                "file": "/images/sprites/animations/Slash0Super.png"
            },
            "fog": {
                "frames": 2,
                "file": "/images/sprites/weather/fog.png"
            },
            "transport": {
                "frames": 9,
                "alpha": 0.8,
                "continuous": true,
                "file": "/images/sprites/animations/Teleport2.png"
            },
            "slash": {
                "directional": true,
                "continuous": true,
                "front": true,
                "file": "/images/sprites/animations/slash.png",
                "frames": 3,
                "speed": 320
            },
            "typing": {
                "bubble": true,
                "continuous": true,
                "file": "/images/sprites/animations/typingAnim.png",
                "frames": 4,
                "alpha": 1,
                "aspeed": "slow"
            },
            "success": {
                "frames": 10,
                "file": "/images/sprites/animations/CGreen_Spark3.png"
            },
            "snowflake": {
                "frames": 7,
                "file": "/images/sprites/animations/snowflake.png"
            },
            "heal_projectile": {
                "frames": 4,
                "continuous": true,
                "speed": 120,
                "scale": 0.5,
                "file": "/images/sprites/animations/healAttack.png"
            },
            "garrow": {
                "frames": 4,
                "continuous": true,
                "speed": 640,
                "file": "/images/sprites/animations/garrow.png",
                "directional": true
            },
            "rspeed": {
                "frames": 13,
                "file": "/images/sprites/animations/ConsumeR.png"
            },
            "exchange": {
                "frames": 13,
                "file": "/images/sprites/animations/Consume2.png"
            },
            "dampened": {
                "continuous": true,
                "file": "/images/sprites/animations/Dampen.png",
                "proportional": true,
                "frames": 6,
                "alpha": 1,
                "aspeed": "slow"
            },
            "taunt": {
                "frames": 7,
                "alpha": 1,
                "file": "/images/sprites/animations/Puff.png"
            },
            "heal": {
                "frames": 13,
                "file": "/images/sprites/animations/ConsumeP.png"
            },
            "rain": {
                "frames": 4,
                "file": "/images/sprites/weather/wsheet_rain1_1.png"
            },
            "snowball_hit": {
                "aspeed": "slow",
                "y": -10,
                "file": "/images/sprites/animations/snowball_hit.png",
                "frames": 4,
                "alpha": 1,
                "exact": true
            },
            "magic4": {
                "directional": true,
                "framefps": 9,
                "continuous": true,
                "file": "/images/sprites/animations/magic4.png",
                "frames": 4,
                "speed": 480
            },
            "snowball": {
                "directional": true,
                "continuous": true,
                "file": "/images/sprites/animations/snowball_projectile.png",
                "frames": 4,
                "speed": 180,
                "size": 0.75
            },
            "curse": {
                "frames": 8,
                "alpha": 0.9,
                "aspeed": "slow",
                "file": "/images/sprites/animations/Poison.png",
                "proportional": true
            },
            "magic1": {
                "directional": true,
                "framefps": 9,
                "continuous": true,
                "file": "/images/sprites/animations/magic1.png",
                "frames": 4,
                "speed": 400
            },
            "magic0": {
                "directional": true,
                "framefps": 9,
                "continuous": true,
                "file": "/images/sprites/animations/magic0.png",
                "frames": 4,
                "speed": 320
            },
            "magic3": {
                "directional": true,
                "framefps": 9,
                "continuous": true,
                "file": "/images/sprites/animations/magic3.png",
                "frames": 4,
                "speed": 400
            },
            "frostarrow": {
                "scale": 0.75,
                "directional": true,
                "continuous": true,
                "file": "/images/sprites/animations/frostArrow.png",
                "frames": 4,
                "speed": 580
            },
            "confetti": {
                "frames": 12,
                "alpha": 0.4,
                "file": "/images/sprites/animations/confetti2.png"
            },
            "stunned": {
                "frames": 6,
                "alpha": 0.4,
                "file": "/images/sprites/animations/NuclearA1.png"
            },
            "superarrow": {
                "scale": 1.5,
                "directional": true,
                "continuous": true,
                "file": "/images/sprites/animations/arrow2.png",
                "frames": 4,
                "speed": 600
            },
            "reflection": {
                "frames": 9,
                "alpha": 0.8,
                "continuous": true,
                "aspeed": "slow",
                "file": "/images/sprites/animations/reflection.png"
            },
            "cuarrow": {
                "frames": 3,
                "continuous": true,
                "speed": 320,
                "file": "/images/sprites/animations/heartedArrow.png",
                "directional": true
            },
            "carrow": {
                "frames": 3,
                "continuous": true,
                "speed": 500,
                "file": "/images/sprites/animations/CArrow.png",
                "directional": true
            },
            "curse_new": {
                "aspeed": "slow",
                "y": 6,
                "file": "/images/sprites/animations/curse.png",
                "frames": 6,
                "alpha": 1,
                "exact": true
            },
            "mblob_red": {
                "directional": true,
                "framefps": 9,
                "continuous": true,
                "file": "/images/sprites/animations/MBlobR.png",
                "frames": 3,
                "speed": 800
            },
            "mblob_purplish": {
                "frames": 3,
                "continuous": true,
                "speed": 400,
                "file": "/images/sprites/animations/MBlobP.png",
                "directional": true
            },
            "failure": {
                "frames": 10,
                "file": "/images/sprites/animations/CRed_Spark5.png"
            },
            "arrow_hit": {
                "frames": 7,
                "alpha": 0.9,
                "file": "/images/sprites/animations/Slash0Arrow.png",
                "size": 0.8
            },
            "invincible": {
                "frames": 9,
                "alpha": 0.8,
                "continuous": true,
                "file": "/images/sprites/animations/Shield1.png"
            },
            "explode_up": {
                "frames": 12,
                "file": "/images/sprites/animations/ExplodeUCS.png"
            },
            "slash3": {
                "frames": 7,
                "file": "/images/sprites/animations/Slash3.png"
            },
            "slash2": {
                "frames": 7,
                "alpha": 0.9,
                "aspeed": "fast",
                "file": "/images/sprites/animations/Slash2Quick.png",
                "size": 0.75
            },
            "slash1": {
                "frames": 7,
                "file": "/images/sprites/animations/Slash1.png"
            },
            "slash0": {
                "frames": 7,
                "file": "/images/sprites/animations/Slash0.png"
            },
            "frostball": {
                "frames": 4,
                "continuous": true,
                "speed": 420,
                "file": "/images/sprites/animations/frostball.png",
                "directional": true
            },
            "party_heal": {
                "aspeed": "slow",
                "y": 6,
                "file": "/images/sprites/animations/partyHeal.png",
                "frames": 9,
                "alpha": 1,
                "exact": true
            },
            "tiling_burst": {
                "frames": 1,
                "alpha": 1,
                "tiling": true,
                "fade": true,
                "file": "/images/sprites/animations/burst.png"
            },
            "light": {
                "frames": 11,
                "alpha": 0.7,
                "file": "/images/sprites/animations/Light.png"
            },
            "wslash": {
                "directional": true,
                "continuous": true,
                "front": true,
                "file": "/images/sprites/animations/wslash.png",
                "frames": 3,
                "speed": 520
            },
            "poucharrow": {
                "scale": 0.75,
                "directional": true,
                "continuous": true,
                "file": "/images/sprites/animations/pouchArrow.png",
                "frames": 4,
                "speed": 300
            },
            "wandy": {
                "frames": 3,
                "continuous": true,
                "speed": 560,
                "file": "/images/sprites/animations/wandy.png?v=2",
                "directional": true
            },
            "fireball": {
                "frames": 4,
                "continuous": true,
                "speed": 320,
                "file": "/images/sprites/animations/fireball.png",
                "directional": true
            },
            "hardshell": {
                "frames": 9,
                "alpha": 0.8,
                "continuous": true,
                "aspeed": "slow",
                "file": "/images/sprites/animations/warrior_shield.png"
            },
            "block": {
                "frames": 11,
                "file": "/images/sprites/animations/Block.png"
            },
            "icecrack": {
                "frames": 6,
                "alpha": 1,
                "y": 2,
                "file": "/images/sprites/animations/crackingIce.png",
                "size": 1
            }
        }
    }
    expect(G_animations).not.toBe(undefined)
})