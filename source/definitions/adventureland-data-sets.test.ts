import { GData } from "./adventureland-data"

/**
 * The following is from http://adventure.land/data.js, version 666 (2021-04-27)
 * It is used to confirm type correctness
 */

test("G.sets type validation", async () => {
    const G_sets: Pick<GData, "sets"> = {
        "sets": {
            "wt3": {
                "name": "Heavy Armor",
                "items": [
                    "hhelmet",
                    "harmor",
                    "hboots",
                    "hgloves",
                    "hpants"
                ],
                "1": {
                    "for": 2
                },
                "3": {
                    "for": 6
                },
                "2": {
                    "for": 4
                },
                "5": {
                    "for": 16
                },
                "4": {
                    "for": 10
                }
            },
            "wt4": {
                "name": "Darkforge Armor",
                "items": [
                    "xhelmet",
                    "xarmor",
                    "xboots",
                    "xgloves",
                    "xpants"
                ],
                "1": {
                    "for": 3
                },
                "3": {
                    "for": 7
                },
                "2": {
                    "for": 5
                },
                "5": {
                    "for": 22
                },
                "4": {
                    "for": 15
                }
            },
            "vampires": {
                "1": {},
                "items": [
                    "mcape",
                    "vgloves",
                    "vboots",
                    "vattire",
                    "vcape",
                    "vorb",
                    "vhammer",
                    "vdagger",
                    "vstaff",
                    "vsword",
                    "vblood",
                    "vring"
                ],
                "3": {
                    "lifesteal": 1
                },
                "2": {
                    "vit": 10
                },
                "name": "Vampires"
            },
            "easter": {
                "1": {},
                "3": {
                    "vit": 3
                },
                "2": {
                    "luck": 5
                },
                "5": {
                    "vit": 2
                },
                "name": "Bunny Set",
                "6": {
                    "vit": 2
                },
                "items": [
                    "eears",
                    "ecape",
                    "epyjamas",
                    "eslippers",
                    "pinkie",
                    "carrotsword"
                ],
                "explanation": "An Easter / Bunny themed set!",
                "4": {
                    "speed": 2
                }
            },
            "fury": {
                "name": "Rage and Fury",
                "items": [
                    "suckerpunch",
                    "suckerpunch",
                    "fury",
                    "fallen"
                ],
                "1": {},
                "3": {
                    "dex": 2
                },
                "2": {
                    "str": 1
                },
                "4": {
                    "apiercing": 32
                }
            },
            "mranger": {
                "1": {},
                "3": {
                    "dex": 3,
                    "speed": 2
                },
                "2": {
                    "dex": 3
                },
                "5": {
                    "resistance": 100
                },
                "name": "Monster Hunter Ranger",
                "items": [
                    "mrnhat",
                    "mrnarmor",
                    "mrngloves",
                    "mrnpants",
                    "mrnboots"
                ],
                "explanation": "A set for a noble ranger who serves our realm!",
                "4": {
                    "apiercing": 60
                }
            },
            "mrogue": {
                "1": {},
                "3": {
                    "dex": 4,
                    "speed": 3
                },
                "2": {
                    "dex": 6
                },
                "5": {
                    "crit": 5
                },
                "name": "Monster Hunter Rogue",
                "items": [
                    "mrhood",
                    "mrarmor",
                    "mrgloves",
                    "mrpants",
                    "mrboots"
                ],
                "explanation": "A set for a noble rogue who serves our realm!",
                "4": {
                    "apiercing": 80
                }
            },
            "mmage": {
                "1": {},
                "3": {
                    "int": 3,
                    "speed": 2
                },
                "2": {
                    "int": 2
                },
                "5": {
                    "crit": 2
                },
                "name": "Monster Hunter Mage",
                "items": [
                    "mmhat",
                    "mmarmor",
                    "mmgloves",
                    "mmpants",
                    "mmshoes"
                ],
                "explanation": "A set for a noble mage who serves our realm!",
                "4": {
                    "rpiercing": 40
                }
            },
            "holidays": {
                "1": {},
                "3": {
                    "vit": 1
                },
                "2": {
                    "dex": 1
                },
                "5": {},
                "name": "Holiday Spirit",
                "6": {},
                "7": {},
                "items": [
                    "xmashat",
                    "xmassweater",
                    "xmasshoes",
                    "xmaspants",
                    "mittens",
                    "supermittens",
                    "santasbelt",
                    "ornamentstaff",
                    "candycanesword",
                    "merry",
                    "orbofsc",
                    "mearring",
                    "xmace"
                ],
                "explanation": "Every month is December with this set!",
                "4": {
                    "luck": 6
                }
            },
            "wanderers": {
                "1": {},
                "3": {
                    "mp": 100
                },
                "2": {
                    "hp": 200
                },
                "5": {
                    "luck": 16
                },
                "name": "Wanderer's Set",
                "items": [
                    "wcap",
                    "wattire",
                    "wbreeches",
                    "wgloves",
                    "wshoes"
                ],
                "explanation": "Wanderer was a curious adventurer. Traveling from place to place. The items he left over make up a very lucky set when they are combined.",
                "4": {
                    "gold": 10
                }
            },
            "mmerchant": {
                "1": {},
                "3": {
                    "speed": 2,
                    "str": 3,
                    "vit": 8
                },
                "2": {
                    "courage": 1,
                    "pcourage": 1,
                    "vit": 6,
                    "mcourage": 1
                },
                "5": {
                    "courage": 2,
                    "pcourage": 2,
                    "for": 32,
                    "mcourage": 2
                },
                "name": "Monster Hunter Merchant",
                "items": [
                    "mchat",
                    "mcarmor",
                    "mcgloves",
                    "mcpants",
                    "mcboots"
                ],
                "explanation": "A set for a noble merchant who has some friends that serve our realm!",
                "4": {
                    "evasion": 6
                }
            },
            "mpriest": {
                "1": {},
                "3": {
                    "int": 3,
                    "speed": 2
                },
                "2": {
                    "int": 3
                },
                "5": {
                    "mp": 2000
                },
                "name": "Monster Hunter Priest",
                "items": [
                    "mphat",
                    "mparmor",
                    "mpgloves",
                    "mppants",
                    "mpshoes"
                ],
                "explanation": "A set for a noble priest who serves our realm!",
                "4": {
                    "rpiercing": 120
                }
            },
            "mwarrior": {
                "1": {},
                "3": {
                    "speed": 1,
                    "str": 3
                },
                "2": {
                    "str": 2
                },
                "5": {
                    "crit": 5
                },
                "name": "Monster Hunter Warrior",
                "items": [
                    "mwhelmet",
                    "mwarmor",
                    "mwgloves",
                    "mwpants",
                    "mwboots"
                ],
                "explanation": "A set for a noble warrior who serves our realm!",
                "4": {
                    "apiercing": 40
                }
            },
            "rugged": {
                "1": {},
                "3": {
                    "armor": 20,
                    "range": 2,
                    "resistance": 20
                },
                "2": {
                    "dex": 1,
                    "int": 1,
                    "str": 1
                },
                "5": {
                    "speed": 4
                },
                "name": "Rugged Set",
                "items": [
                    "helmet1",
                    "coat1",
                    "shoes1",
                    "gloves1",
                    "pants1"
                ],
                "explanation": "Just the right amount of protection for the agile wearer",
                "4": {
                    "for": 8
                }
            },
            "swift": {
                "1": {},
                "items": [
                    "wingedboots",
                    "fierygloves"
                ],
                "2": {
                    "dex": 1
                },
                "name": "Swift Judgement"
            },
            "mpx": {
                "1": {},
                "items": [
                    "mpxbelt",
                    "mpxgloves",
                    "mpxamulet"
                ],
                "3": {
                    "speed": 1,
                    "mp": 500,
                    "rpiercing": 20
                },
                "2": {
                    "mp": 100
                },
                "name": "MP X"
            },
            "legends": {
                "name": "The Legends",
                "items": [
                    "warpvest",
                    "starkillers",
                    "powerglove",
                    "goldenpowerglove"
                ],
                "1": {},
                "3": {
                    "for": 10
                },
                "2": {},
                "4": {
                    "for": 2
                }
            }
        }
    }
    expect(G_sets).toBeDefined()
})