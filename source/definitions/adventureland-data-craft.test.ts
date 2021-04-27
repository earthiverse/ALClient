import { GData2 } from "./adventureland-data"

/** 
 * The following is from http://adventure.land/data.js, version 666 (2021-04-27)
 * It is used to confirm type correctness
 */

test("G.craft type validation", async () => {
    const G_craft: Pick<GData2, "craft"> = {
        "craft": {
            "pouchbow": {
                "items": [
                    [
                        1,
                        "bow"
                    ],
                    [
                        1,
                        "smoke"
                    ]
                ],
                "cost": 180000
            },
            "platinumingot": {
                "items": [
                    [
                        8,
                        "platinumnugget"
                    ]
                ],
                "cost": 36000000
            },
            "resistancering": {
                "items": [
                    [
                        1,
                        "ink"
                    ],
                    [
                        5,
                        "ascale"
                    ],
                    [
                        1,
                        "vitring",
                        2
                    ]
                ],
                "quest": "mcollector",
                "cost": 0
            },
            "wbreeches": {
                "items": [
                    [
                        10,
                        "crabclaw"
                    ],
                    [
                        100,
                        "spores"
                    ]
                ],
                "quest": "mcollector",
                "cost": 0
            },
            "wgloves": {
                "items": [
                    [
                        60,
                        "beewings"
                    ],
                    [
                        20,
                        "spores"
                    ]
                ],
                "quest": "mcollector",
                "cost": 0
            },
            "snakeoil": {
                "items": [
                    [
                        40,
                        "dstones"
                    ],
                    [
                        9000,
                        "rattail"
                    ]
                ],
                "quest": "witch",
                "cost": 0
            },
            "rod": {
                "items": [
                    [
                        1,
                        "staff"
                    ],
                    [
                        1,
                        "spidersilk"
                    ]
                ],
                "cost": 100
            },
            "elixirfzres": {
                "items": [
                    [
                        50,
                        "bfur"
                    ],
                    [
                        10,
                        "mpot0"
                    ]
                ],
                "quest": "witch",
                "cost": 0
            },
            "wcap": {
                "items": [
                    [
                        50,
                        "beewings"
                    ],
                    [
                        3,
                        "gslime"
                    ]
                ],
                "quest": "mcollector",
                "cost": 0
            },
            "hbow": {
                "items": [
                    [
                        40,
                        "dstones"
                    ],
                    [
                        2,
                        "pleather"
                    ],
                    [
                        1,
                        "feather0"
                    ]
                ],
                "quest": "mcollector",
                "cost": 0
            },
            "daggerofthedead": {
                "items": [
                    [
                        1,
                        "mbones"
                    ],
                    [
                        1,
                        "wand"
                    ]
                ],
                "cost": 24000
            },
            "computer": {
                "items": [
                    [
                        1,
                        "networkcard"
                    ],
                    [
                        8,
                        "qubics"
                    ],
                    [
                        1,
                        "platinumnugget"
                    ],
                    [
                        12,
                        "goldnugget"
                    ],
                    [
                        100,
                        "electronics"
                    ]
                ],
                "cost": 120000000
            },
            "mushroomstaff": {
                "items": [
                    [
                        1,
                        "staff"
                    ],
                    [
                        2,
                        "smush"
                    ]
                ],
                "cost": 24000
            },
            "firestars": {
                "items": [
                    [
                        1,
                        "throwingstars"
                    ],
                    [
                        1,
                        "essenceoffire"
                    ]
                ],
                "cost": 180000
            },
            "cclaw": {
                "items": [
                    [
                        1,
                        "claw"
                    ],
                    [
                        1,
                        "crabclaw"
                    ]
                ],
                "cost": 24000
            },
            "quiver": {
                "items": [
                    [
                        1,
                        "ascale"
                    ],
                    [
                        200,
                        "beewings"
                    ]
                ],
                "quest": "mcollector",
                "cost": 0
            },
            "fierygloves": {
                "items": [
                    [
                        1,
                        "gloves"
                    ],
                    [
                        20,
                        "feather0"
                    ],
                    [
                        2,
                        "essenceoffire"
                    ]
                ],
                "cost": 120000
            },
            "offeringx": {
                "items": [
                    [
                        10,
                        "offering"
                    ],
                    [
                        1200,
                        "essenceofnature"
                    ],
                    [
                        200,
                        "essenceoflife"
                    ],
                    [
                        1,
                        "essenceofgreed"
                    ]
                ],
                "cost": 32000000
            },
            "ctristone": {
                "items": [
                    [
                        1,
                        "strring"
                    ],
                    [
                        1,
                        "intring"
                    ],
                    [
                        1,
                        "dexring"
                    ],
                    [
                        10,
                        "vitscroll"
                    ]
                ],
                "cost": 20000
            },
            "basketofeggs": {
                "items": [
                    [
                        1,
                        "egg0"
                    ],
                    [
                        1,
                        "egg1"
                    ],
                    [
                        1,
                        "egg2"
                    ],
                    [
                        1,
                        "egg3"
                    ],
                    [
                        1,
                        "egg4"
                    ],
                    [
                        1,
                        "egg5"
                    ],
                    [
                        1,
                        "egg6"
                    ],
                    [
                        1,
                        "egg7"
                    ],
                    [
                        1,
                        "egg8"
                    ]
                ],
                "cost": 100
            },
            "goldingot": {
                "items": [
                    [
                        12,
                        "goldnugget"
                    ]
                ],
                "cost": 3600000
            },
            "fsword": {
                "items": [
                    [
                        1,
                        "blade"
                    ],
                    [
                        2,
                        "essenceoffrost"
                    ]
                ],
                "cost": 20000
            },
            "fclaw": {
                "items": [
                    [
                        1,
                        "claw"
                    ],
                    [
                        2,
                        "essenceoffrost"
                    ]
                ],
                "cost": 20000
            },
            "elixirfires": {
                "items": [
                    [
                        1,
                        "cshell"
                    ],
                    [
                        2000,
                        "hpot0"
                    ]
                ],
                "quest": "witch",
                "cost": 0
            },
            "bowofthedead": {
                "items": [
                    [
                        1,
                        "mbones"
                    ],
                    [
                        1,
                        "bow"
                    ]
                ],
                "cost": 120000
            },
            "elixirint1": {
                "items": [
                    [
                        10,
                        "elixirint0"
                    ]
                ],
                "cost": 1000
            },
            "bronzeingot": {
                "items": [
                    [
                        16,
                        "bronzenugget"
                    ]
                ],
                "cost": 360000
            },
            "maceofthedead": {
                "items": [
                    [
                        1,
                        "mbones"
                    ],
                    [
                        1,
                        "wbasher"
                    ]
                ],
                "cost": 240000
            },
            "elixirdex1": {
                "items": [
                    [
                        10,
                        "elixirdex0"
                    ]
                ],
                "cost": 1000
            },
            "swordofthedead": {
                "items": [
                    [
                        1,
                        "mbones"
                    ],
                    [
                        1,
                        "sword"
                    ]
                ],
                "cost": 24000
            },
            "ornamentstaff": {
                "items": [
                    [
                        1,
                        "staff"
                    ],
                    [
                        1,
                        "ornament"
                    ],
                    [
                        20,
                        "confetti"
                    ]
                ],
                "cost": 120000
            },
            "froststaff": {
                "items": [
                    [
                        1,
                        "staff"
                    ],
                    [
                        2,
                        "essenceoffrost"
                    ]
                ],
                "cost": 20000
            },
            "gstaff": {
                "items": [
                    [
                        1,
                        "staff"
                    ],
                    [
                        1,
                        "essenceofgreed"
                    ]
                ],
                "cost": 180000
            },
            "orbg": {
                "items": [
                    [
                        1,
                        "ascale"
                    ],
                    [
                        1,
                        "pleather"
                    ],
                    [
                        1,
                        "cscale"
                    ],
                    [
                        1,
                        "bfur"
                    ]
                ],
                "quest": "mcollector",
                "cost": 0
            },
            "stealthcape": {
                "items": [
                    [
                        1,
                        "bcape"
                    ],
                    [
                        5,
                        "shadowstone"
                    ],
                    [
                        200,
                        "essenceofnature"
                    ],
                    [
                        1000,
                        "cscale"
                    ]
                ],
                "cost": 2000000
            },
            "elixirint2": {
                "items": [
                    [
                        10,
                        "elixirint1"
                    ]
                ],
                "cost": 2400
            },
            "wingedboots": {
                "items": [
                    [
                        1,
                        "shoes"
                    ],
                    [
                        20,
                        "feather0"
                    ]
                ],
                "cost": 120000
            },
            "firebow": {
                "items": [
                    [
                        1,
                        "bow"
                    ],
                    [
                        2,
                        "essenceoffire"
                    ]
                ],
                "cost": 40000
            },
            "wshoes": {
                "items": [
                    [
                        5,
                        "frogt"
                    ],
                    [
                        500,
                        "beewings"
                    ],
                    [
                        100,
                        "crabclaw"
                    ]
                ],
                "quest": "mcollector",
                "cost": 0
            },
            "wblade": {
                "items": [
                    [
                        1,
                        "stick",
                        9
                    ],
                    [
                        1,
                        "blade"
                    ],
                    [
                        800,
                        "essenceoffrost"
                    ]
                ],
                "cost": 24000000
            },
            "slimestaff": {
                "items": [
                    [
                        1,
                        "staff"
                    ],
                    [
                        10,
                        "gslime"
                    ]
                ],
                "cost": 24000
            },
            "pickaxe": {
                "items": [
                    [
                        1,
                        "staff"
                    ],
                    [
                        1,
                        "spidersilk"
                    ],
                    [
                        1,
                        "blade"
                    ]
                ],
                "cost": 100
            },
            "merry": {
                "items": [
                    [
                        1,
                        "bow"
                    ],
                    [
                        1,
                        "candycane"
                    ],
                    [
                        1,
                        "mistletoe"
                    ]
                ],
                "cost": 480000
            },
            "candycanesword": {
                "items": [
                    [
                        1,
                        "blade",
                        7
                    ],
                    [
                        1,
                        "candycane"
                    ]
                ],
                "cost": 480000
            },
            "frostbow": {
                "items": [
                    [
                        1,
                        "bow"
                    ],
                    [
                        3,
                        "essenceoffrost"
                    ]
                ],
                "cost": 40000
            },
            "dartgun": {
                "items": [
                    [
                        1,
                        "blade",
                        9
                    ],
                    [
                        12,
                        "qubics"
                    ],
                    [
                        4,
                        "platinumnugget"
                    ],
                    [
                        20,
                        "goldnugget"
                    ]
                ],
                "cost": 32000000
            },
            "elixirpnres": {
                "items": [
                    [
                        500,
                        "bwing"
                    ],
                    [
                        1,
                        "hpot0"
                    ]
                ],
                "quest": "witch",
                "cost": 0
            },
            "elixirvit1": {
                "items": [
                    [
                        10,
                        "elixirvit0"
                    ]
                ],
                "cost": 1000
            },
            "elixirvit2": {
                "items": [
                    [
                        10,
                        "elixirvit1"
                    ]
                ],
                "cost": 2400
            },
            "wattire": {
                "items": [
                    [
                        100,
                        "gslime"
                    ],
                    [
                        200,
                        "crabclaw"
                    ]
                ],
                "quest": "mcollector",
                "cost": 0
            },
            "staffofthedead": {
                "items": [
                    [
                        1,
                        "mbones"
                    ],
                    [
                        1,
                        "staff"
                    ]
                ],
                "cost": 120000
            },
            "xbox": {
                "items": [
                    [
                        1,
                        "x0"
                    ],
                    [
                        1,
                        "x1"
                    ],
                    [
                        1,
                        "x2"
                    ],
                    [
                        1,
                        "x3"
                    ],
                    [
                        1,
                        "x4"
                    ],
                    [
                        1,
                        "x5"
                    ],
                    [
                        1,
                        "x6"
                    ],
                    [
                        1,
                        "x7"
                    ],
                    [
                        1,
                        "x8"
                    ]
                ],
                "cost": 1200
            },
            "elixirdex2": {
                "items": [
                    [
                        10,
                        "elixirdex1"
                    ]
                ],
                "cost": 2400
            },
            "elixirstr1": {
                "items": [
                    [
                        10,
                        "elixirstr0"
                    ]
                ],
                "cost": 1000
            },
            "heartwood": {
                "items": [
                    [
                        1,
                        "woodensword",
                        8
                    ],
                    [
                        1,
                        "nheart"
                    ]
                ],
                "cost": 120000000
            },
            "fireblade": {
                "items": [
                    [
                        1,
                        "blade"
                    ],
                    [
                        1,
                        "essenceoffire"
                    ]
                ],
                "cost": 20000
            },
            "armorring": {
                "items": [
                    [
                        1,
                        "snakefang"
                    ],
                    [
                        1,
                        "lotusf"
                    ],
                    [
                        1,
                        "vitring",
                        2
                    ]
                ],
                "quest": "mcollector",
                "cost": 0
            },
            "lbelt": {
                "items": [
                    [
                        100,
                        "bfur"
                    ],
                    [
                        1,
                        "hpbelt",
                        2
                    ]
                ],
                "quest": "mcollector",
                "cost": 0
            },
            "charmer": {
                "items": [
                    [
                        1,
                        "goldnugget"
                    ],
                    [
                        20,
                        "gem1"
                    ],
                    [
                        1,
                        "emptyheart"
                    ]
                ],
                "cost": 80000
            },
            "elixirstr2": {
                "items": [
                    [
                        10,
                        "elixirstr1"
                    ]
                ],
                "cost": 2400
            },
            "stinger": {
                "items": [
                    [
                        12,
                        "feather0"
                    ]
                ],
                "quest": "mcollector",
                "cost": 0
            },
            "spearofthedead": {
                "items": [
                    [
                        2,
                        "mbones"
                    ],
                    [
                        1,
                        "spear"
                    ]
                ],
                "cost": 24000
            },
            "firestaff": {
                "items": [
                    [
                        1,
                        "staff"
                    ],
                    [
                        1,
                        "essenceoffire"
                    ]
                ],
                "cost": 20000
            }
        }
    }
    expect(G_craft).not.toBe(undefined)
})