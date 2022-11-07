/* eslint-disable sort-keys */
import { GData } from "./adventureland-data"

/**
 * The following is from http://adventure.land/data.js, version 757 (2022-11-08)
 * It is used to confirm type correctness
 */

test("G.monsters type validation", async () => {
    const G_monsters: Pick<GData, "monsters"> = {
        "monsters": {
            "a1": {
                "aggro": 1,
                "armor": 120,
                "attack": 4240,
                "charge": 67,
                "damage_type": "magical",
                "difficulty": 8,
                "frequency": 1.2,
                "hp": 18700000,
                "humanoid": true,
                "mp": 374000,
                "name": "Spike",
                "phresistance": 10,
                "rage": 1,
                "range": 147,
                "resistance": 260,
                "respawn": -1,
                "roam": true,
                "skin": "a1",
                "slots": {
                    "mainhand": {
                        "level": 10,
                        "name": "vstaff"
                    }
                },
                "spawns": [
                    [
                        200,
                        "bat"
                    ]
                ],
                "speed": 32,
                "xp": 32000000
            },
            "a2": {
                "abilities": {
                    "anger": {
                        "cooldown": 8000,
                        "radius": 300
                    }
                },
                "aggro": 1,
                "armor": 220,
                "attack": 2240,
                "charge": 96,
                "damage_type": "physical",
                "difficulty": 8,
                "frequency": 1.4,
                "hp": 420000,
                "humanoid": true,
                "mp": 8400,
                "name": "Bill",
                "phresistance": 15,
                "poisonous": true,
                "rage": 1,
                "range": 35,
                "resistance": 160,
                "respawn": -1,
                "roam": true,
                "skin": "a2",
                "slots": {
                    "mainhand": {
                        "level": 9,
                        "name": "vdagger"
                    },
                    "offhand": {
                        "level": 10,
                        "name": "vdagger"
                    }
                },
                "speed": 32,
                "xp": 1200000
            },
            "a3": {
                "abilities": {
                    "anger": {
                        "cooldown": 8000,
                        "radius": 300
                    }
                },
                "aggro": 1,
                "armor": 220,
                "attack": 1520,
                "charge": 80,
                "damage_type": "physical",
                "difficulty": 8,
                "explosion": 20,
                "frequency": 1.2,
                "hp": 342000,
                "humanoid": true,
                "mp": 6840,
                "name": "Lestat",
                "phresistance": 20,
                "rage": 1,
                "range": 35,
                "resistance": 160,
                "respawn": -1,
                "roam": true,
                "skin": "a3",
                "slots": {
                    "mainhand": {
                        "level": 10,
                        "name": "vhammer"
                    },
                    "offhand": {
                        "level": 10,
                        "name": "vhammer"
                    }
                },
                "speed": 32,
                "xp": 9600000
            },
            "a4": {
                "aggro": 1,
                "armor": 320,
                "attack": 720,
                "charge": 86,
                "damage_type": "physical",
                "difficulty": 8,
                "frequency": 1.5,
                "hp": 560000,
                "humanoid": true,
                "mp": 11200,
                "name": "Orlok",
                "phresistance": 25,
                "rage": 1,
                "range": 35,
                "resistance": 160,
                "respawn": -1,
                "roam": true,
                "skin": "a4",
                "slots": {
                    "mainhand": {
                        "level": 9,
                        "name": "scythe"
                    }
                },
                "spawns": [
                    [
                        1600,
                        "zapper0"
                    ]
                ],
                "speed": 42,
                "xp": 1600000
            },
            "a5": {
                "abilities": {
                    "healing": {
                        "cooldown": 800,
                        "heal": 66000
                    }
                },
                "aggro": 1,
                "armor": 60,
                "attack": 240,
                "charge": 76,
                "damage_type": "magical",
                "difficulty": 8,
                "frequency": 0.3,
                "hp": 230000,
                "humanoid": true,
                "mp": 4600,
                "name": "Elena",
                "phresistance": 25,
                "rage": 1,
                "range": 135,
                "resistance": 240,
                "respawn": -1,
                "roam": true,
                "skin": "a5",
                "slots": {
                    "mainhand": {
                        "level": 10,
                        "name": "lmace"
                    }
                },
                "speed": 32,
                "supporter": true,
                "xp": 1200000
            },
            "a6": {
                "abilities": {
                    "weakness_aura": {
                        "aura": true,
                        "condition": "weakness",
                        "cooldown": 4000,
                        "radius": 100
                    }
                },
                "aggro": 1,
                "armor": 220,
                "attack": 8960,
                "charge": 86,
                "damage_type": "physical",
                "difficulty": 8,
                "frequency": 2,
                "hp": 320000,
                "humanoid": true,
                "mp": 6400,
                "name": "Marceline",
                "phresistance": 30,
                "rage": 1,
                "range": 35,
                "resistance": 120,
                "respawn": -1,
                "roam": true,
                "skin": "a6",
                "slots": {
                    "mainhand": {
                        "level": 9,
                        "name": "scythe"
                    }
                },
                "speed": 32,
                "xp": 880000
            },
            "a7": {
                "abilities": {
                    "dampening_aura": {
                        "aura": true,
                        "condition": "dampened",
                        "cooldown": 180,
                        "radius": 300
                    },
                    "mlight": {
                        "cooldown": 3000
                    }
                },
                "aggro": 1,
                "armor": 50,
                "attack": 910,
                "charge": 72,
                "damage_type": "magical",
                "difficulty": 8,
                "frequency": 1.2,
                "hp": 720000,
                "humanoid": true,
                "mp": 14400,
                "name": "Lucinda",
                "phresistance": 30,
                "rage": 1,
                "range": 135,
                "resistance": 200,
                "respawn": -1,
                "roam": true,
                "skin": "a7",
                "slots": {
                    "mainhand": {
                        "level": 10,
                        "name": "oozingterror"
                    }
                },
                "speed": 32,
                "xp": 1200000
            },
            "a8": {
                "abilities": {
                    "curse_aura": {
                        "aura": true,
                        "condition": "cursed",
                        "cooldown": 4000,
                        "radius": 300
                    }
                },
                "aggro": 1,
                "armor": 220,
                "attack": 2680,
                "charge": 76,
                "damage_type": "physical",
                "difficulty": 8,
                "frequency": 4,
                "hp": 560000,
                "humanoid": true,
                "mp": 11200,
                "name": "Angel",
                "phresistance": 35,
                "rage": 1,
                "range": 35,
                "resistance": 220,
                "respawn": -1,
                "roam": true,
                "skin": "a8",
                "slots": {
                    "mainhand": {
                        "level": 10,
                        "name": "pinkie"
                    },
                    "offhand": {
                        "level": 10,
                        "name": "pinkie"
                    }
                },
                "speed": 32,
                "xp": 1200000
            },
            "arcticbee": {
                "aa": 1,
                "achievements": [
                    [
                        10,
                        "stat",
                        "mp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "mp",
                        10
                    ],
                    [
                        1000,
                        "stat",
                        "resistance",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "int",
                        1
                    ],
                    [
                        100000,
                        "stat",
                        "dex",
                        2
                    ],
                    [
                        1000000,
                        "stat",
                        "resistance",
                        5
                    ],
                    [
                        10000000,
                        "stat",
                        "range",
                        2.5
                    ]
                ],
                "aggro": 1,
                "attack": 64,
                "damage_type": "physical",
                "frequency": 0.6,
                "hp": 1600,
                "mp": 32,
                "name": "Arctic Bee",
                "phresistance": 50,
                "rage": 0.05,
                "range": 20,
                "respawn": 1,
                "skin": "arcticbee",
                "speed": 12,
                "xp": 1800
            },
            "armadillo": {
                "achievements": [
                    [
                        10,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        1000,
                        "stat",
                        "armor",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "for",
                        1
                    ],
                    [
                        100000,
                        "stat",
                        "dreturn",
                        0.5
                    ],
                    [
                        1000000,
                        "stat",
                        "armor",
                        10
                    ],
                    [
                        10000000,
                        "stat",
                        "dreturn",
                        1
                    ]
                ],
                "aggro": 0,
                "armor": 60,
                "attack": 20,
                "damage_type": "physical",
                "difficulty": 1.1,
                "dreturn": 30,
                "frequency": 0.5,
                "hp": 1600,
                "mp": 32,
                "name": "Armadillo",
                "rage": 0,
                "range": 20,
                "respawn": 3,
                "skin": "armadillo",
                "speed": 14,
                "xp": 1720
            },
            "bat": {
                "aa": 1,
                "achievements": [
                    [
                        10,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "hp",
                        20
                    ],
                    [
                        1000,
                        "stat",
                        "armor",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "dex",
                        1
                    ],
                    [
                        100000,
                        "stat",
                        "str",
                        2
                    ],
                    [
                        1000000,
                        "stat",
                        "gold",
                        0.5
                    ],
                    [
                        10000000,
                        "stat",
                        "lifesteal",
                        1
                    ]
                ],
                "aggro": 0.3,
                "attack": 50,
                "damage_type": "physical",
                "frequency": 0.7,
                "hp": 9600,
                "mp": 192,
                "name": "Bat",
                "phresistance": 35,
                "rage": 0,
                "range": 35,
                "resistance": 120,
                "respawn": 12,
                "skin": "bat",
                "speed": 24,
                "xp": 8000
            },
            "bbpompom": {
                "achievements": [
                    [
                        10,
                        "stat",
                        "mp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "mp",
                        20
                    ],
                    [
                        1000,
                        "stat",
                        "vit",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "int",
                        1
                    ],
                    [
                        100000,
                        "stat",
                        "int",
                        2
                    ],
                    [
                        1000000,
                        "stat",
                        "resistance",
                        5
                    ],
                    [
                        10000000,
                        "stat",
                        "range",
                        2
                    ]
                ],
                "aggro": 0.2,
                "attack": 320,
                "damage_type": "magical",
                "frequency": 0.6,
                "hit": "explode_p",
                "hp": 6400,
                "mp": 128,
                "name": "Pom Pom",
                "rage": 0,
                "range": 280,
                "resistance": 160,
                "respawn": 4,
                "skin": "bbpompom",
                "speed": 18,
                "xp": 6000
            },
            "bee": {
                "aa": 1,
                "achievements": [
                    [
                        10,
                        "stat",
                        "hp",
                        5
                    ],
                    [
                        100,
                        "stat",
                        "mp",
                        5
                    ],
                    [
                        1000,
                        "stat",
                        "mp",
                        5
                    ],
                    [
                        10000,
                        "stat",
                        "attack",
                        2
                    ],
                    [
                        100000,
                        "stat",
                        "apiercing",
                        2
                    ],
                    [
                        1000000,
                        "stat",
                        "attack",
                        3
                    ],
                    [
                        10000000,
                        "stat",
                        "xp",
                        1
                    ]
                ],
                "aggro": 1,
                "attack": 16,
                "damage_type": "physical",
                "frequency": 0.5,
                "hp": 300,
                "mp": 6,
                "name": "Bee",
                "phresistance": 60,
                "rage": 0.1,
                "range": 20,
                "respawn": 2,
                "skin": "bee",
                "speed": 12,
                "xp": 400
            },
            "bgoo": {
                "aa": 1,
                "achievements": [
                    [
                        1000,
                        "stat",
                        "vit",
                        1
                    ]
                ],
                "aggro": 0,
                "armor": 200,
                "attack": 5,
                "charge": 12,
                "cooperative": true,
                "damage_type": "physical",
                "frequency": 0.4,
                "hp": 100000,
                "mp": 2000,
                "name": "Brawl Goo",
                "rage": 0,
                "range": 15,
                "resistance": 200,
                "respawn": -1,
                "size": 1.5,
                "skin": "goo4",
                "special": true,
                "speed": 6,
                "xp": 100000
            },
            "bigbird": {
                "aa": 1,
                "achievements": [
                    [
                        10,
                        "stat",
                        "mp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "mp",
                        30
                    ],
                    [
                        1000,
                        "stat",
                        "vit",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "evasion",
                        0.25
                    ],
                    [
                        100000,
                        "stat",
                        "resistance",
                        5
                    ],
                    [
                        1000000,
                        "stat",
                        "speed",
                        0.5
                    ],
                    [
                        10000000,
                        "stat",
                        "evasion",
                        1
                    ]
                ],
                "aggro": 1,
                "attack": 480,
                "charge": 52,
                "damage_type": "physical",
                "evasion": 20,
                "frequency": 0.8,
                "hp": 32000,
                "mp": 640,
                "name": "Hawk",
                "phresistance": 30,
                "rage": 0.4,
                "range": 20,
                "respawn": 12,
                "skin": "bigbird",
                "speed": 24,
                "xp": 30000
            },
            "bluefairy": {
                "aa": 1,
                "achievements": [
                    [
                        10,
                        "stat",
                        "xp",
                        2
                    ]
                ],
                "aggro": 0,
                "attack": 2400,
                "damage_type": "magical",
                "frequency": 100,
                "hit": "explode_c",
                "hp": 4000000,
                "mp": 80000,
                "name": "Fairy",
                "phresistance": 70,
                "rage": 0,
                "range": 999999,
                "respawn": 0,
                "skin": "bluefairy",
                "speed": 10,
                "xp": 2000000
            },
            "boar": {
                "achievements": [
                    [
                        10,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "mp",
                        20
                    ],
                    [
                        1000,
                        "stat",
                        "vit",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "str",
                        1
                    ],
                    [
                        100000,
                        "stat",
                        "int",
                        2
                    ],
                    [
                        1000000,
                        "stat",
                        "vit",
                        5
                    ],
                    [
                        10000000,
                        "stat",
                        "armor",
                        12
                    ]
                ],
                "aggro": 1,
                "armor": 100,
                "attack": 240,
                "charge": 40,
                "damage_type": "physical",
                "frequency": 0.7,
                "hp": 12000,
                "mp": 240,
                "name": "Wild Boar",
                "rage": 1,
                "range": 24,
                "respawn": 10,
                "skin": "boar",
                "speed": 20,
                "xp": 10800
            },
            "booboo": {
                "aa": 1,
                "achievements": [
                    [
                        1,
                        "stat",
                        "mp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "mp",
                        20
                    ],
                    [
                        1000,
                        "stat",
                        "vit",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "for",
                        1
                    ],
                    [
                        100000,
                        "stat",
                        "str",
                        2
                    ],
                    [
                        1000000,
                        "stat",
                        "speed",
                        0.5
                    ],
                    [
                        10000000,
                        "stat",
                        "range",
                        2.25
                    ]
                ],
                "aggro": 1.5,
                "attack": 220,
                "charge": 96,
                "damage_type": "pure",
                "difficulty": 1.25,
                "frequency": 1.2,
                "hp": 8000,
                "mp": 160,
                "name": "Boo Boo",
                "phresistance": 50,
                "rage": 1.5,
                "range": 420,
                "respawn": 48,
                "skin": "booboo",
                "speed": 16,
                "xp": 12000
            },
            "bscorpion": {
                "abilities": {
                    "weakness_aura": {
                        "aura": true,
                        "condition": "weakness",
                        "cooldown": 4000,
                        "radius": 100
                    }
                },
                "achievements": [
                    [
                        10,
                        "stat",
                        "mp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "mp",
                        10
                    ],
                    [
                        1000,
                        "stat",
                        "dex",
                        0.5
                    ],
                    [
                        10000,
                        "stat",
                        "dex",
                        0.5
                    ]
                ],
                "aggro": 0.8,
                "armor": 500,
                "attack": 3200,
                "crit": 10,
                "damage_type": "physical",
                "frequency": 0.6,
                "hp": 576900,
                "mp": 11538,
                "name": "Black Scorpion",
                "poisonous": true,
                "rage": 0,
                "range": 32,
                "resistance": 240,
                "respawn": 6,
                "skin": "bscorpion",
                "speed": 24,
                "xp": 634800
            },
            "cgoo": {
                "aa": 1,
                "achievements": [
                    [
                        10,
                        "stat",
                        "hp",
                        20
                    ],
                    [
                        100,
                        "stat",
                        "vit",
                        1
                    ],
                    [
                        1000,
                        "stat",
                        "for",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "hp",
                        100
                    ],
                    [
                        100000,
                        "stat",
                        "for",
                        2
                    ],
                    [
                        1000000,
                        "stat",
                        "vit",
                        3
                    ],
                    [
                        10000000,
                        "stat",
                        "for",
                        5
                    ]
                ],
                "aggro": 0.1,
                "attack": 320,
                "damage_type": "physical",
                "difficulty": 6,
                "frequency": 1.2,
                "hp": 2400,
                "mp": 48,
                "name": "Irradiated Goo",
                "rage": 0,
                "range": 64,
                "resistance": 260,
                "respawn": 48,
                "skin": "cgoo",
                "speed": 9,
                "xp": 4800
            },
            "chestm": {
                "aggro": 0.2,
                "attack": 320,
                "damage_type": "magical",
                "frequency": 0.6,
                "hide": true,
                "hit": "explode_p",
                "hp": 6400,
                "mp": 128,
                "name": "Angry Chest",
                "rage": 0,
                "range": 280,
                "resistance": 160,
                "respawn": 4,
                "skin": "chestm",
                "speed": 4,
                "xp": 6000
            },
            "crab": {
                "achievements": [
                    [
                        10,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        1000,
                        "stat",
                        "mp",
                        5
                    ],
                    [
                        10000,
                        "stat",
                        "attack",
                        5
                    ],
                    [
                        100000,
                        "stat",
                        "hp",
                        200
                    ],
                    [
                        1000000,
                        "stat",
                        "rpiercing",
                        3
                    ],
                    [
                        10000000,
                        "stat",
                        "range",
                        2
                    ],
                    [
                        100000000,
                        "stat",
                        "hp",
                        5
                    ]
                ],
                "aggro": 0.2,
                "armor": 160,
                "attack": 24,
                "damage_type": "physical",
                "frequency": 0.4,
                "hp": 400,
                "mp": 8,
                "name": "Tiny Crab",
                "rage": 0,
                "range": 15,
                "respawn": 0.64,
                "size": 0.5,
                "skin": "crab",
                "speed": 6,
                "xp": 500
            },
            "crabx": {
                "achievements": [
                    [
                        10,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        1000,
                        "stat",
                        "armor",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "str",
                        1
                    ],
                    [
                        100000,
                        "stat",
                        "speed",
                        0.5
                    ],
                    [
                        1000000,
                        "stat",
                        "luck",
                        0.5
                    ],
                    [
                        10000000,
                        "stat",
                        "hp",
                        400
                    ]
                ],
                "aggro": 0.5,
                "armor": 210,
                "attack": 240,
                "charge": 30,
                "damage_type": "physical",
                "frequency": 0.3,
                "hp": 4200,
                "mp": 84,
                "name": "Huge Crab",
                "rage": 0,
                "range": 15,
                "respawn": 4,
                "skin": "crabx",
                "speed": 8,
                "xp": 3600
            },
            "crabxx": {
                "achievements": [
                    [
                        1,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "luck",
                        1
                    ]
                ],
                "aggro": 0,
                "announce": "#B73237",
                "armor": 320,
                "attack": 16000,
                "charge": 80,
                "cooperative": true,
                "damage_type": "physical",
                "difficulty": 10,
                "frequency": 0.3,
                "hp": 960000,
                "mp": 19200,
                "name": "Giga Crab",
                "phresistance": 30,
                "rage": 0,
                "range": 45,
                "respawn": -1,
                "size": 1.5,
                "skin": "crabx",
                "spawns": [
                    [
                        1000,
                        "crabx"
                    ]
                ],
                "special": true,
                "speed": 30,
                "xp": 720000
            },
            "croc": {
                "aa": 0,
                "achievements": [
                    [
                        10,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        1000,
                        "stat",
                        "resistance",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "for",
                        1
                    ],
                    [
                        100000,
                        "stat",
                        "speed",
                        0.25
                    ],
                    [
                        1000000,
                        "stat",
                        "attack",
                        10
                    ],
                    [
                        10000000,
                        "stat",
                        "dreturn",
                        1
                    ]
                ],
                "aggro": 0.2,
                "armor": 40,
                "attack": 48,
                "damage_type": "physical",
                "frequency": 0.5,
                "hp": 3200,
                "mp": 64,
                "name": "Croc",
                "rage": 1,
                "range": 15,
                "respawn": 6,
                "skin": "croc",
                "speed": 10,
                "xp": 3600
            },
            "cutebee": {
                "aa": 1,
                "achievements": [
                    [
                        1,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        20,
                        "stat",
                        "for",
                        1
                    ]
                ],
                "aggro": 1,
                "attack": 16,
                "avoidance": 99.9,
                "cute": true,
                "damage_type": "physical",
                "explanation": "Spawns in Mainland around every 480,000 Bee spawns",
                "frequency": 0.5,
                "hp": 300,
                "mp": 6,
                "name": "Cute Bee",
                "phresistance": 60,
                "rage": 0.05,
                "range": 20,
                "respawn": -1,
                "skin": "cutebee",
                "speed": 12,
                "xp": 400
            },
            "d_wiz": {
                "abilities": {
                    "self_healing": {
                        "cooldown": 2000,
                        "heal": 4800
                    }
                },
                "aggro": 1,
                "armor": 560,
                "attack": 5200,
                "charge": 90,
                "damage_type": "magical",
                "frequency": 2,
                "hp": 100000,
                "mp": 2000,
                "name": "Dark Wizard",
                "rage": 0,
                "range": 240,
                "resistance": 920,
                "respawn": 6000,
                "skin": "shadow",
                "slots": {
                    "mainhand": {
                        "level": 13,
                        "name": "oozingterror"
                    }
                },
                "speed": 12,
                "unlist": true,
                "xp": 10000
            },
            "dknight2": {
                "achievements": [
                    [
                        1,
                        "stat",
                        "luck",
                        50
                    ]
                ],
                "aggro": 0.3,
                "armor": 200,
                "attack": 2275,
                "damage_type": "physical",
                "frequency": 1.2,
                "hide": true,
                "hp": 86000,
                "mp": 1720,
                "name": "Dark Knight",
                "rage": 0,
                "range": 32,
                "respawn": 40,
                "skin": "dknight2",
                "speed": 28,
                "xp": 72000
            },
            "dragold": {
                "abilities": {
                    "multi_burn": {
                        "cooldown": 24000,
                        "damage": 4000
                    }
                },
                "achievements": [
                    [
                        1,
                        "stat",
                        "gold",
                        1
                    ],
                    [
                        10,
                        "stat",
                        "for",
                        0.5
                    ],
                    [
                        20,
                        "stat",
                        "luck",
                        1
                    ]
                ],
                "aggro": 0,
                "announce": "#D7B717",
                "armor": 240,
                "attack": 800,
                "cooperative": true,
                "damage_type": "magical",
                "frequency": 1,
                "hp": 12800000,
                "mp": 256000,
                "name": "Dragold",
                "phresistance": 65,
                "projectile": "fireball",
                "rage": 0,
                "range": 320,
                "resistance": 320,
                "respawn": 10800,
                "skin": "dragold",
                "special": true,
                "speed": 22,
                "xp": 12000000
            },
            "eelemental": {
                "aggro": 0.2,
                "attack": 1800,
                "damage_type": "physical",
                "evasion": 80,
                "frequency": 1.2,
                "hp": 80000,
                "mp": 1600,
                "name": "Earth Elemental",
                "rage": 0,
                "range": 80,
                "respawn": 1,
                "skin": "eelemental",
                "speed": 20,
                "xp": 10
            },
            "ent": {
                "abilities": {
                    "mtangle": {
                        "cooldown": 3200
                    }
                },
                "achievements": [
                    [
                        1,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "hp",
                        30
                    ],
                    [
                        1000,
                        "stat",
                        "vit",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "for",
                        3
                    ],
                    [
                        100000,
                        "stat",
                        "resistance",
                        10
                    ],
                    [
                        1000000,
                        "stat",
                        "attack",
                        25
                    ],
                    [
                        10000000,
                        "stat",
                        "speed",
                        2
                    ]
                ],
                "aggro": 0.2,
                "armor": 100,
                "attack": 3600,
                "charge": 48,
                "damage_type": "physical",
                "frequency": 1.2,
                "hp": 8000000,
                "mp": 160000,
                "name": "Ent",
                "phresistance": 15,
                "rage": 0,
                "range": 64,
                "resistance": 100,
                "respawn": 12,
                "skin": "ent",
                "speed": 12,
                "xp": 9200000
            },
            "felemental": {
                "aggro": 0.2,
                "attack": 1800,
                "damage_type": "physical",
                "evasion": 80,
                "frequency": 1.2,
                "hp": 80000,
                "mp": 1600,
                "name": "Fire Elemental",
                "rage": 0,
                "range": 80,
                "respawn": 1,
                "skin": "felemental",
                "speed": 20,
                "xp": 10
            },
            "fieldgen0": {
                "aa": 1,
                "abilities": {
                    "dampening_aura": {
                        "aura": true,
                        "condition": "dampened",
                        "cooldown": 180,
                        "radius": 300
                    },
                    "degen": {
                        "amount": 60,
                        "cooldown": 200
                    }
                },
                "aggro": 0,
                "armor": 2200,
                "attack": 0,
                "damage_type": "pure",
                "frequency": 0,
                "hide": true,
                "hp": 6400,
                "mp": 128,
                "name": "Field Generator",
                "rage": 0,
                "range": 0,
                "resistance": 1600,
                "respawn": -1,
                "skin": "fieldgen0",
                "speed": 0,
                "trap": true,
                "xp": 0
            },
            "fireroamer": {
                "abilities": {
                    "burn": {
                        "attr0": 100,
                        "unlimited": true
                    }
                },
                "achievements": [
                    [
                        10,
                        "stat",
                        "mp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "mp",
                        10
                    ],
                    [
                        1000,
                        "stat",
                        "vit",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "int",
                        1
                    ],
                    [
                        100000,
                        "stat",
                        "for",
                        2
                    ],
                    [
                        1000000,
                        "stat",
                        "evasion",
                        0.5
                    ],
                    [
                        10000000,
                        "stat",
                        "apiercing",
                        20
                    ]
                ],
                "aggro": 0.2,
                "armor": 120,
                "attack": 320,
                "damage_type": "magical",
                "difficulty": 1.1,
                "evasion": 4,
                "frequency": 1.2,
                "hit": "explode_p",
                "hp": 84000,
                "mp": 1680,
                "name": "Fire Spirit",
                "phresistance": 50,
                "rage": 0,
                "range": 280,
                "resistance": 320,
                "respawn": 2,
                "rpiercing": 320,
                "skin": "fireroamer",
                "speed": 24,
                "xp": 64200
            },
            "franky": {
                "achievements": [
                    [
                        1,
                        "stat",
                        "for",
                        1
                    ],
                    [
                        100,
                        "stat",
                        "attack",
                        10
                    ],
                    [
                        1000,
                        "stat",
                        "attack",
                        20
                    ],
                    [
                        10000,
                        "stat",
                        "frequency",
                        1
                    ],
                    [
                        100000,
                        "stat",
                        "xp",
                        2
                    ],
                    [
                        1000000,
                        "stat",
                        "range",
                        1
                    ]
                ],
                "aggro": 1,
                "announce": "#9D99EF",
                "attack": 2910,
                "charge": 64,
                "cooperative": true,
                "damage_type": "magical",
                "frequency": 1.6,
                "hit": "explode_c",
                "hp": 120000000,
                "humanoid": true,
                "mp": 2400000,
                "name": "Franky",
                "phresistance": 70,
                "rage": 0,
                "range": 948,
                "respawn": -1,
                "skin": "franky",
                "spawns": [
                    [
                        200,
                        "nerfedmummy"
                    ]
                ],
                "special": true,
                "speed": 48,
                "xp": 200000000
            },
            "frog": {
                "achievements": [
                    [
                        10,
                        "stat",
                        "mp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "vit",
                        1
                    ],
                    [
                        1000,
                        "stat",
                        "int",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "evasion",
                        0.5
                    ],
                    [
                        100000,
                        "stat",
                        "int",
                        3
                    ],
                    [
                        1000000,
                        "stat",
                        "vit",
                        4
                    ],
                    [
                        10000000,
                        "stat",
                        "evasion",
                        1
                    ]
                ],
                "aggro": 0,
                "attack": 24,
                "damage_type": "physical",
                "difficulty": 12,
                "evasion": 99,
                "frequency": 0.5,
                "hp": 600,
                "mp": 12,
                "name": "Froggie",
                "rage": 0,
                "range": 15,
                "respawn": 960,
                "skin": "frog",
                "speed": 10,
                "xp": 7200
            },
            "fvampire": {
                "achievements": [
                    [
                        1,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "mp",
                        20
                    ],
                    [
                        1000,
                        "stat",
                        "attack",
                        5
                    ],
                    [
                        10000,
                        "stat",
                        "for",
                        1
                    ],
                    [
                        100000,
                        "stat",
                        "xp",
                        2.5
                    ],
                    [
                        1000000,
                        "stat",
                        "lifesteal",
                        1
                    ],
                    [
                        10000000,
                        "stat",
                        "lifesteal",
                        2.5
                    ]
                ],
                "aggro": 0.05,
                "armor": 100,
                "attack": 875,
                "damage_type": "magical",
                "frequency": 1.2,
                "hit": "explode_c",
                "hp": 240000,
                "humanoid": true,
                "mp": 4800,
                "name": "Ms. Dracul",
                "prefix": "",
                "rage": 0,
                "range": 120,
                "rbuff": "mlifesteal",
                "resistance": 300,
                "respawn": 1440,
                "skin": "fvampire",
                "speed": 40,
                "xp": 200000
            },
            "gbluepro": {
                "abilities": {
                    "multi_freeze": {
                        "cooldown": 4000,
                        "damage": 800
                    }
                },
                "aggro": 1,
                "article": "event-mae",
                "attack": 9600,
                "charge": 84,
                "cooperative": true,
                "damage_type": "magical",
                "frequency": 1.2,
                "hit": "explode_c",
                "hp": 3200000,
                "mp": 64000,
                "name": "Protector of Frost",
                "rage": 0,
                "range": 948,
                "respawn": 300,
                "skin": "gbluepro",
                "slots": {
                    "mainhand": {
                        "level": 12,
                        "name": "froststaff"
                    }
                },
                "speed": 48,
                "xp": 7200000
            },
            "ggreenpro": {
                "abilities": {
                    "self_healing": {
                        "cooldown": 2000,
                        "heal": 48000
                    },
                    "tangle": {
                        "cooldown": 1600
                    }
                },
                "aggro": 1,
                "attack": 1120,
                "charge": 64,
                "damage_type": "physical",
                "frequency": 3,
                "hit": "explode_c",
                "hp": 1600000,
                "mp": 32000,
                "name": "Protector of Nature",
                "rage": 0,
                "range": 948,
                "respawn": 3600,
                "skin": "ggreenpro",
                "slots": {
                    "mainhand": {
                        "level": 12,
                        "name": "woodensword"
                    }
                },
                "speed": 48,
                "xp": 9600000
            },
            "ghost": {
                "achievements": [
                    [
                        10,
                        "stat",
                        "mp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "mp",
                        10
                    ],
                    [
                        1000,
                        "stat",
                        "for",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "int",
                        1
                    ],
                    [
                        100000,
                        "stat",
                        "int",
                        1
                    ],
                    [
                        1000000,
                        "stat",
                        "hp",
                        300
                    ],
                    [
                        10000000,
                        "stat",
                        "resistance",
                        10
                    ]
                ],
                "aggro": 0.05,
                "attack": 200,
                "damage_type": "magical",
                "evasion": 20,
                "frequency": 1,
                "hit": "explode_p",
                "hp": 12000,
                "mp": 240,
                "name": "Ghost",
                "phresistance": 90,
                "rage": 0,
                "range": 120,
                "resistance": 400,
                "respawn": 4,
                "skin": "ghost",
                "speed": 12,
                "xp": 16000
            },
            "goblin": {
                "achievements": [
                    [
                        1,
                        "stat",
                        "gold",
                        2
                    ],
                    [
                        100,
                        "stat",
                        "xp",
                        5
                    ],
                    [
                        1000,
                        "stat",
                        "gold",
                        5
                    ],
                    [
                        5000,
                        "stat",
                        "reflection",
                        2
                    ]
                ],
                "aggro": 0,
                "attack": 0,
                "damage_type": "physical",
                "evasion": 99.95,
                "frequency": 1,
                "hp": 50,
                "immune": true,
                "mp": 1,
                "name": "Sneaky Goblin",
                "phresistance": 30,
                "rage": 0,
                "range": 2,
                "reflection": 99.95,
                "respawn": -1,
                "skin": "goblin",
                "special": true,
                "speed": 30,
                "xp": 640000
            },
            "goldenbat": {
                "aa": 1,
                "achievements": [
                    [
                        1,
                        "stat",
                        "gold",
                        1
                    ],
                    [
                        10,
                        "stat",
                        "luck",
                        1
                    ],
                    [
                        100,
                        "stat",
                        "gold",
                        1
                    ],
                    [
                        1000,
                        "stat",
                        "range",
                        1
                    ],
                    [
                        2000,
                        "stat",
                        "frequency",
                        1
                    ],
                    [
                        5000,
                        "stat",
                        "gold",
                        5
                    ]
                ],
                "aggro": 0.3,
                "attack": 50,
                "damage_type": "physical",
                "difficulty": 100,
                "explanation": "Spawns in Cave of Darkness around every 80,000 Bat spawns",
                "frequency": 0.7,
                "hp": 24000,
                "mp": 480,
                "name": "Golden Bat",
                "phresistance": 70,
                "rage": 0,
                "range": 35,
                "respawn": -1,
                "skin": "goldenbat",
                "speed": 24,
                "xp": 20000
            },
            "goo": {
                "aa": 1,
                "achievements": [
                    [
                        10,
                        "stat",
                        "hp",
                        5
                    ],
                    [
                        100,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        1000,
                        "stat",
                        "mp",
                        5
                    ],
                    [
                        10000,
                        "stat",
                        "dex",
                        1
                    ],
                    [
                        100000,
                        "stat",
                        "str",
                        1
                    ],
                    [
                        1000000,
                        "stat",
                        "int",
                        1
                    ],
                    [
                        10000000,
                        "stat",
                        "speed",
                        0.25
                    ]
                ],
                "aggro": 0,
                "attack": 5,
                "charge": 12,
                "damage_type": "physical",
                "frequency": 0.4,
                "hp": 100,
                "mp": 2,
                "name": "Goo",
                "rage": 0,
                "range": 15,
                "respawn": 1,
                "skin": "goo",
                "speed": 6,
                "xp": 100
            },
            "gpurplepro": {
                "abilities": {
                    "putrid": {
                        "curse": true,
                        "poison": true
                    }
                },
                "aggro": 1,
                "article": "event-mae",
                "attack": 4893,
                "charge": 84,
                "cooperative": true,
                "damage_type": "magical",
                "frequency": 2,
                "hit": "explode_c",
                "hp": 4300000,
                "mp": 86000,
                "name": "Protector of Darkness",
                "rage": 0,
                "range": 948,
                "respawn": 420,
                "skin": "gpurplepro",
                "slots": {
                    "mainhand": {
                        "level": 12,
                        "name": "oozingterror"
                    }
                },
                "speed": 48,
                "xp": 8200000
            },
            "gredpro": {
                "abilities": {
                    "burn": {
                        "attr0": 100,
                        "unlimited": true
                    }
                },
                "aggro": 1,
                "attack": 120,
                "charge": 84,
                "damage_type": "magical",
                "frequency": 1.2,
                "hit": "explode_c",
                "hp": 2400000,
                "mp": 48000,
                "name": "Protector of Fire",
                "rage": 0,
                "range": 948,
                "respawn": 600,
                "skin": "gredpro",
                "slots": {
                    "mainhand": {
                        "level": 12,
                        "name": "firestaff"
                    }
                },
                "speed": 48,
                "xp": 3200000
            },
            "greenfairy": {
                "aa": 1,
                "achievements": [
                    [
                        10,
                        "stat",
                        "luck",
                        2
                    ]
                ],
                "aggro": 0,
                "attack": 3000,
                "damage_type": "magical",
                "frequency": 100,
                "hit": "explode_c",
                "hp": 3600000,
                "mp": 72000,
                "name": "Fairy",
                "phresistance": 70,
                "rage": 0,
                "range": 999999,
                "respawn": 0,
                "skin": "greenfairy",
                "speed": 10,
                "xp": 2000000
            },
            "greenjr": {
                "achievements": [
                    [
                        1,
                        "stat",
                        "mp",
                        10
                    ],
                    [
                        10,
                        "stat",
                        "vit",
                        1
                    ],
                    [
                        100,
                        "stat",
                        "armor",
                        10
                    ],
                    [
                        1000,
                        "stat",
                        "resistance",
                        15
                    ],
                    [
                        10000,
                        "stat",
                        "for",
                        3
                    ],
                    [
                        100000,
                        "stat",
                        "frequency",
                        1
                    ],
                    [
                        1000000,
                        "stat",
                        "speed",
                        1
                    ]
                ],
                "aggro": 1,
                "attack": 30,
                "cbuff": [
                    [
                        60,
                        "halloween0"
                    ],
                    [
                        70,
                        "halloween1"
                    ],
                    [
                        200,
                        "halloween2"
                    ]
                ],
                "charge": 120,
                "damage_type": "physical",
                "difficulty": 2,
                "evasion": 40,
                "frequency": 20,
                "hp": 4200,
                "mp": 84,
                "name": "Green Jr.",
                "rage": 1,
                "range": 80,
                "reflection": 4,
                "resistance": 400,
                "respawn": 51840,
                "rpiercing": 420,
                "skin": "greenjr",
                "speed": 60,
                "xp": 120000
            },
            "grinch": {
                "abilities": {
                    "portal": {
                        "cooldown": 0
                    },
                    "self_healing": {
                        "cooldown": 8008,
                        "heal": 8008
                    }
                },
                "achievements": [
                    [
                        1,
                        "stat",
                        "hp",
                        20
                    ],
                    [
                        100,
                        "stat",
                        "fzresistance",
                        1
                    ],
                    [
                        1000,
                        "stat",
                        "pnresistance",
                        1
                    ]
                ],
                "aggro": 0,
                "announce": "#C82F17",
                "attack": 9,
                "cooperative": true,
                "damage_type": "magical",
                "frequency": 0.5,
                "global": true,
                "goldsteal": 1,
                "hit": "explode_c",
                "hp": 24000000,
                "humanoid": true,
                "mp": 480000,
                "name": "Grinch",
                "passive": true,
                "phresistance": 90,
                "prefix": "",
                "rage": 0,
                "range": 120,
                "resistance": 150,
                "respawn": 43200,
                "skin": "grinch",
                "slots": {
                    "mainhand": {
                        "level": 13,
                        "name": "ornamentstaff"
                    }
                },
                "special": true,
                "speed": 40,
                "xp": 12000
            },
            "gscorpion": {
                "achievements": [
                    [
                        10,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "mp",
                        20
                    ],
                    [
                        1000,
                        "stat",
                        "mp",
                        10
                    ],
                    [
                        10000,
                        "stat",
                        "int",
                        1
                    ],
                    [
                        100000,
                        "stat",
                        "dex",
                        1
                    ],
                    [
                        1000000,
                        "stat",
                        "vit",
                        2
                    ],
                    [
                        10000000,
                        "stat",
                        "attack",
                        30
                    ]
                ],
                "aggro": 0.3,
                "armor": 300,
                "attack": 120,
                "damage_type": "physical",
                "frequency": 0.8,
                "hp": 32000,
                "mp": 640,
                "name": "Scorpion",
                "rage": 0,
                "range": 32,
                "respawn": 6,
                "skin": "gscorpion",
                "speed": 24,
                "xp": 48000
            },
            "harpy": {
                "abilities": {
                    "warp_on_hit": {
                        "attr0": 0.08,
                        "unlimited": true
                    }
                },
                "achievements": [
                    [
                        10,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        1000,
                        "stat",
                        "fzresistance",
                        0.5
                    ],
                    [
                        10000,
                        "stat",
                        "fzresistance",
                        0.5
                    ],
                    [
                        100000,
                        "stat",
                        "fzresistance",
                        0.5
                    ],
                    [
                        200000,
                        "stat",
                        "speed",
                        0.25
                    ]
                ],
                "aggro": 0.01,
                "armor": 160,
                "attack": 1720,
                "charge": 96,
                "charge_skin": "harpy_fly",
                "damage_type": "magical",
                "difficulty": 2,
                "frequency": 0.8,
                "hit": "explode_p",
                "hp": 160000,
                "mp": 3200,
                "name": "Harpy",
                "phresistance": 40,
                "rage": 0,
                "range": 220,
                "resistance": 600,
                "respawn": 4,
                "rpiercing": 160,
                "skin": "harpy",
                "slots": {
                    "mainhand": {
                        "level": 6,
                        "name": "harbringer"
                    }
                },
                "speed": 12,
                "xp": 192000
            },
            "hen": {
                "achievements": [
                    [
                        1000,
                        "stat",
                        "gold",
                        2
                    ]
                ],
                "aggro": 1,
                "attack": 48,
                "cute": true,
                "damage_type": "physical",
                "frequency": 1.5,
                "hp": 60,
                "mp": 1,
                "name": "Chicken",
                "rage": 0.2,
                "range": 20,
                "respawn": 200,
                "skin": "hen",
                "speed": 10,
                "xp": 10
            },
            "icegolem": {
                "abilities": {
                    "multi_freeze": {
                        "cooldown": 2000,
                        "damage": 2000
                    }
                },
                "achievements": [
                    [
                        1,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        10,
                        "stat",
                        "hp",
                        30
                    ]
                ],
                "aggro": 0.2,
                "announce": true,
                "armor": 800,
                "attack": 2400,
                "charge": 48,
                "cooperative": true,
                "damage_type": "physical",
                "difficulty": 12,
                "frequency": 1.2,
                "hp": 16000000,
                "mp": 320000,
                "name": "Ice Golem",
                "phresistance": 40,
                "rage": 0,
                "range": 64,
                "resistance": 800,
                "respawn": -1,
                "skin": "icegolem",
                "special": true,
                "speed": 12,
                "xp": 92000000
            },
            "iceroamer": {
                "achievements": [
                    [
                        10,
                        "stat",
                        "mp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "mp",
                        10
                    ],
                    [
                        1000,
                        "stat",
                        "vit",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "int",
                        1
                    ],
                    [
                        100000,
                        "stat",
                        "for",
                        2
                    ],
                    [
                        1000000,
                        "stat",
                        "reflection",
                        0.5
                    ],
                    [
                        10000000,
                        "stat",
                        "rpiercing",
                        20
                    ]
                ],
                "aggro": 0.2,
                "attack": 120,
                "damage_type": "magical",
                "evasion": 10,
                "frequency": 0.7,
                "hit": "explode_p",
                "hp": 3600,
                "mp": 72,
                "name": "Water Spirit",
                "phresistance": 50,
                "rage": 0,
                "range": 100,
                "reflection": 8,
                "respawn": 2,
                "rpiercing": 320,
                "skin": "iceroamer",
                "speed": 20,
                "xp": 4200
            },
            "jr": {
                "achievements": [
                    [
                        1,
                        "stat",
                        "mp",
                        10
                    ],
                    [
                        10,
                        "stat",
                        "vit",
                        1
                    ],
                    [
                        100,
                        "stat",
                        "resistance",
                        10
                    ],
                    [
                        1000,
                        "stat",
                        "armor",
                        8
                    ],
                    [
                        10000,
                        "stat",
                        "attack",
                        20
                    ],
                    [
                        100000,
                        "stat",
                        "luck",
                        1
                    ],
                    [
                        1000000,
                        "stat",
                        "speed",
                        1
                    ]
                ],
                "aggro": 1,
                "attack": 10,
                "cbuff": [
                    [
                        60,
                        "halloween0"
                    ],
                    [
                        70,
                        "halloween1"
                    ],
                    [
                        200,
                        "halloween2"
                    ]
                ],
                "charge": 90,
                "damage_type": "magical",
                "difficulty": 2,
                "evasion": 80,
                "frequency": 20,
                "hp": 3200,
                "mp": 64,
                "name": "Jr.",
                "rage": 1,
                "range": 30,
                "resistance": 400,
                "respawn": 25920,
                "skin": "jr",
                "speed": 40,
                "xp": 80000
            },
            "jrat": {
                "achievements": [
                    [
                        1000000,
                        "stat",
                        "for",
                        5
                    ]
                ],
                "aggro": 0,
                "attack": 240,
                "damage_type": "physical",
                "difficulty": 0.2,
                "frequency": 0.5,
                "hp": 4000,
                "mp": 80,
                "name": "Rat",
                "rage": 0,
                "range": 40,
                "respawn": 42,
                "skin": "rat",
                "speed": 12,
                "xp": 100
            },
            "kitty1": {
                "aa": 0,
                "aggro": 0,
                "attack": 5,
                "charge": 12,
                "cute": true,
                "damage_type": "physical",
                "frequency": 0.4,
                "hp": 100,
                "mp": 2,
                "name": "Kitty",
                "rage": 0,
                "range": 15,
                "respawn": 6000,
                "skin": "kitty1",
                "speed": 14,
                "xp": -500
            },
            "kitty2": {
                "aa": 0,
                "aggro": 0,
                "attack": 5,
                "charge": 12,
                "cute": true,
                "damage_type": "physical",
                "frequency": 0.4,
                "hp": 100,
                "mp": 2,
                "name": "Kitty",
                "rage": 0,
                "range": 15,
                "respawn": 6000,
                "skin": "kitty2",
                "speed": 14,
                "xp": -500
            },
            "kitty3": {
                "aa": 0,
                "aggro": 0,
                "attack": 5,
                "charge": 12,
                "cute": true,
                "damage_type": "physical",
                "frequency": 0.4,
                "hp": 100,
                "mp": 2,
                "name": "Kitty",
                "rage": 0,
                "range": 15,
                "respawn": 6000,
                "skin": "kitty3",
                "speed": 14,
                "xp": -500
            },
            "kitty4": {
                "aa": 0,
                "aggro": 0,
                "attack": 5,
                "charge": 12,
                "cute": true,
                "damage_type": "physical",
                "frequency": 0.4,
                "hp": 100,
                "mp": 2,
                "name": "Kitty",
                "rage": 0,
                "range": 15,
                "respawn": 6000,
                "skin": "kitty4",
                "speed": 14,
                "xp": -500
            },
            "ligerx": {
                "achievements": [
                    [
                        1,
                        "stat",
                        "luck",
                        50
                    ]
                ],
                "aggro": 0.2,
                "attack": 1800,
                "charge": 60,
                "damage_type": "physical",
                "explanation": "A genetically modified and cybernetically enhanced beast!",
                "frequency": 1.2,
                "hp": 80000,
                "mp": 1600,
                "name": "Liger X",
                "rage": 0,
                "range": 80,
                "respawn": 960,
                "skin": "ligerx",
                "speed": 30,
                "xp": 120000
            },
            "mechagnome": {
                "abilities": {
                    "portal": {
                        "cooldown": 0
                    }
                },
                "achievements": [
                    [
                        1,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "hp",
                        20
                    ],
                    [
                        1000,
                        "stat",
                        "vit",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "dex",
                        1
                    ],
                    [
                        100000,
                        "stat",
                        "attack",
                        5
                    ],
                    [
                        1000000,
                        "stat",
                        "vit",
                        5
                    ],
                    [
                        10000000,
                        "stat",
                        "lifesteal",
                        1.25
                    ]
                ],
                "aggro": 0,
                "armor": 600,
                "attack": 48,
                "charge": 120,
                "damage_type": "physical",
                "frequency": 4,
                "hp": 164000,
                "mp": 3280,
                "name": "Mech-a Gnome",
                "rage": 0,
                "range": 30,
                "resistance": 600,
                "respawn": 480,
                "skin": "mechagnome",
                "speed": 1,
                "xp": 80000
            },
            "minimush": {
                "achievements": [
                    [
                        10,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "hp",
                        20
                    ],
                    [
                        1000,
                        "stat",
                        "for",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "frequency",
                        0.25
                    ],
                    [
                        100000,
                        "stat",
                        "resistance",
                        5
                    ],
                    [
                        1000000,
                        "stat",
                        "str",
                        2
                    ],
                    [
                        10000000,
                        "stat",
                        "speed",
                        1
                    ]
                ],
                "aggro": 0.05,
                "attack": 120,
                "damage_type": "magical",
                "frequency": 1,
                "hit": "explode_p",
                "hp": 500,
                "mp": 10,
                "name": "Pom Pom",
                "rage": 0,
                "range": 120,
                "resistance": 120,
                "respawn": 4,
                "skin": "minimush",
                "speed": 12,
                "xp": 600
            },
            "mole": {
                "achievements": [
                    [
                        10,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "mp",
                        10
                    ],
                    [
                        1000,
                        "stat",
                        "for",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "str",
                        1
                    ],
                    [
                        100000,
                        "stat",
                        "attack",
                        5
                    ],
                    [
                        1000000,
                        "stat",
                        "apiercing",
                        5
                    ],
                    [
                        10000000,
                        "stat",
                        "gold",
                        1
                    ]
                ],
                "aggro": 1,
                "apiercing": 320,
                "attack": 480,
                "charge": 60,
                "damage_type": "physical",
                "difficulty": 1.2,
                "frequency": 0.8,
                "hp": 12400,
                "mp": 248,
                "name": "Mole",
                "rage": 1,
                "range": 15,
                "respawn": 6,
                "skin": "mole",
                "speed": 18,
                "xp": 8000
            },
            "mrgreen": {
                "achievements": [
                    [
                        1,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        10,
                        "stat",
                        "mp",
                        20
                    ],
                    [
                        100,
                        "stat",
                        "vit",
                        1
                    ],
                    [
                        1000,
                        "stat",
                        "dex",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "armor",
                        10
                    ],
                    [
                        100000,
                        "stat",
                        "rpiercing",
                        10
                    ],
                    [
                        1000000,
                        "stat",
                        "manasteal",
                        0.32
                    ]
                ],
                "aggro": 1,
                "announce": "#256943",
                "apiercing": 320,
                "attack": 1200,
                "cbuff": [
                    [
                        60,
                        "halloween0"
                    ],
                    [
                        70,
                        "halloween1"
                    ],
                    [
                        200,
                        "halloween2"
                    ]
                ],
                "charge": 90,
                "cooperative": true,
                "damage_type": "physical",
                "frequency": 1.6,
                "hp": 36000000,
                "mp": 720000,
                "name": "Mr. Green",
                "rage": 1,
                "range": 620,
                "resistance": 900,
                "respawn": 5640,
                "skin": "mrgreen",
                "slots": {
                    "mainhand": {
                        "level": 10,
                        "name": "gbow"
                    }
                },
                "speed": 40,
                "xp": 48000000
            },
            "mrpumpkin": {
                "achievements": [
                    [
                        1,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        10,
                        "stat",
                        "mp",
                        20
                    ],
                    [
                        100,
                        "stat",
                        "vit",
                        1
                    ],
                    [
                        1000,
                        "stat",
                        "str",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "resistance",
                        10
                    ],
                    [
                        100000,
                        "stat",
                        "apiercing",
                        10
                    ],
                    [
                        1000000,
                        "stat",
                        "crit",
                        1
                    ]
                ],
                "aggro": 0.05,
                "announce": "#FD8940",
                "attack": 1200,
                "cbuff": [
                    [
                        60,
                        "halloween0"
                    ],
                    [
                        70,
                        "halloween1"
                    ],
                    [
                        200,
                        "halloween2"
                    ]
                ],
                "cooperative": true,
                "damage_type": "magical",
                "frequency": 1,
                "hit": "explode_c",
                "hp": 36000000,
                "mp": 720000,
                "name": "Mr. Pumpkin",
                "phresistance": 30,
                "rage": 0,
                "range": 520,
                "respawn": 3240,
                "skin": "mrpumpkin",
                "slots": {
                    "mainhand": {
                        "level": 8,
                        "name": "oozingterror"
                    }
                },
                "speed": 40,
                "xp": 48000000
            },
            "mummy": {
                "achievements": [
                    [
                        1,
                        "stat",
                        "hp",
                        20
                    ],
                    [
                        100,
                        "stat",
                        "vit",
                        1
                    ],
                    [
                        1000,
                        "stat",
                        "str",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "attack",
                        5
                    ],
                    [
                        100000,
                        "stat",
                        "speed",
                        0.5
                    ],
                    [
                        1000000,
                        "stat",
                        "attack",
                        25
                    ],
                    [
                        10000000,
                        "stat",
                        "evasion",
                        1
                    ]
                ],
                "aggro": 1.5,
                "attack": 420,
                "charge": 96,
                "damage_type": "physical",
                "difficulty": 2,
                "frequency": 1.2,
                "hp": 12000,
                "mp": 240,
                "name": "Mummy",
                "rage": 1.5,
                "range": 48,
                "respawn": 24,
                "skin": "mummy",
                "speed": 16,
                "xp": 16000
            },
            "mvampire": {
                "achievements": [
                    [
                        1,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "mp",
                        20
                    ],
                    [
                        1000,
                        "stat",
                        "attack",
                        5
                    ],
                    [
                        10000,
                        "stat",
                        "resistance",
                        5
                    ],
                    [
                        100000,
                        "stat",
                        "resistance",
                        5
                    ],
                    [
                        1000000,
                        "stat",
                        "lifesteal",
                        1
                    ],
                    [
                        10000000,
                        "stat",
                        "lifesteal",
                        2.5
                    ]
                ],
                "aggro": 0.05,
                "armor": 90,
                "attack": 245,
                "damage_type": "magical",
                "frequency": 1.2,
                "hit": "explode_c",
                "hp": 240000,
                "humanoid": true,
                "mp": 4800,
                "name": "Dracul",
                "prefix": "",
                "rage": 0,
                "range": 120,
                "rbuff": "mlifesteal",
                "resistance": 150,
                "respawn": 1080,
                "skin": "mvampire",
                "speed": 40,
                "xp": 200000
            },
            "nelemental": {
                "aggro": 0.2,
                "attack": 1800,
                "damage_type": "physical",
                "evasion": 80,
                "frequency": 1.2,
                "hp": 80000,
                "mp": 1600,
                "name": "Nature Elemental",
                "rage": 0,
                "range": 80,
                "respawn": 1,
                "skin": "nelemental",
                "speed": 20,
                "xp": 10
            },
            "nerfedmummy": {
                "achievements": [
                    [
                        1,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "hp",
                        20
                    ],
                    [
                        1000,
                        "stat",
                        "hp",
                        30
                    ],
                    [
                        10000,
                        "stat",
                        "vit",
                        1
                    ],
                    [
                        100000,
                        "stat",
                        "vit",
                        2
                    ],
                    [
                        1000000,
                        "stat",
                        "crit",
                        0.5
                    ],
                    [
                        10000000,
                        "stat",
                        "manasteal",
                        0.25
                    ]
                ],
                "aggro": 1,
                "attack": 240,
                "charge": 96,
                "damage_type": "physical",
                "frequency": 0.9,
                "hp": 1600,
                "mp": 32,
                "name": "Mummy",
                "rage": 1,
                "range": 48,
                "respawn": 24,
                "skin": "mummy",
                "speed": 96,
                "xp": 1800
            },
            "oneeye": {
                "abilities": {
                    "stone": {
                        "cooldown": 6400
                    }
                },
                "achievements": [
                    [
                        1,
                        "stat",
                        "for",
                        1
                    ],
                    [
                        100,
                        "stat",
                        "mp",
                        25
                    ],
                    [
                        1000,
                        "stat",
                        "attack",
                        5
                    ],
                    [
                        10000,
                        "stat",
                        "int",
                        1
                    ],
                    [
                        100000,
                        "stat",
                        "resistance",
                        5
                    ],
                    [
                        1000000,
                        "stat",
                        "frequency",
                        1
                    ],
                    [
                        10000000,
                        "stat",
                        "attack",
                        50
                    ]
                ],
                "aggro": 1,
                "armor": 160,
                "attack": 480,
                "damage_type": "physical",
                "difficulty": 1.2,
                "frequency": 3,
                "hp": 420000,
                "mp": 8400,
                "name": "One Eye",
                "phresistance": 30,
                "rage": 0,
                "range": 40,
                "resistance": 160,
                "respawn": 4,
                "skin": "oneeye",
                "speed": 24,
                "xp": 582000
            },
            "osnake": {
                "achievements": [
                    [
                        10,
                        "stat",
                        "mp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "hp",
                        20
                    ],
                    [
                        1000,
                        "stat",
                        "vit",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "str",
                        1
                    ],
                    [
                        100000,
                        "stat",
                        "speed",
                        0.25
                    ],
                    [
                        1000000,
                        "stat",
                        "armor",
                        5
                    ],
                    [
                        10000000,
                        "stat",
                        "xp",
                        1
                    ]
                ],
                "aggro": 0,
                "attack": 24,
                "damage_type": "physical",
                "difficulty": 2,
                "frequency": 0.6,
                "hp": 720,
                "mp": 14,
                "name": "Snake",
                "rage": 0,
                "range": 20,
                "respawn": 60,
                "skin": "osnake",
                "speed": 12,
                "xp": 1600
            },
            "phoenix": {
                "aa": 1,
                "achievements": [
                    [
                        1,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "hp",
                        20
                    ],
                    [
                        1000,
                        "stat",
                        "vit",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "int",
                        1
                    ],
                    [
                        100000,
                        "stat",
                        "resistance",
                        5
                    ],
                    [
                        1000000,
                        "stat",
                        "resistance",
                        10
                    ],
                    [
                        10000000,
                        "stat",
                        "frequency",
                        1
                    ]
                ],
                "aggro": 0.2,
                "attack": 125,
                "cooperative": true,
                "damage_type": "magical",
                "frequency": 1.2,
                "hit": "explode_a",
                "hp": 160000,
                "mp": 3200,
                "name": "Phoenix",
                "phresistance": 40,
                "prefix": "the",
                "rage": 0,
                "range": 120,
                "resistance": 160,
                "respawn": 32,
                "skin": "phoenix",
                "speed": 50,
                "xp": 180000
            },
            "pinkgoblin": {
                "abilities": {
                    "self_healing": {
                        "cooldown": 4000,
                        "heal": 96000
                    }
                },
                "achievements": [
                    [
                        1000,
                        "stat",
                        "mp",
                        10
                    ],
                    [
                        2000,
                        "stat",
                        "vit",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "for",
                        1
                    ],
                    [
                        100000,
                        "stat",
                        "str",
                        2
                    ],
                    [
                        1000000,
                        "stat",
                        "speed",
                        0.5
                    ],
                    [
                        10000000,
                        "stat",
                        "range",
                        1.25
                    ]
                ],
                "aggro": 0,
                "armor": 200,
                "attack": 2400,
                "damage_type": "magical",
                "difficulty": 2,
                "frequency": 0.4,
                "hit": "explode_p",
                "hp": 420000,
                "mp": 8400,
                "name": "Pink Goblin",
                "prefix": "",
                "rage": 0,
                "range": 240,
                "resistance": 350,
                "respawn": 40,
                "skin": "pinkgoblin",
                "slots": {
                    "mainhand": {
                        "level": 8,
                        "name": "pmace"
                    }
                },
                "speed": 40,
                "xp": 460000
            },
            "pinkgoo": {
                "1hp": true,
                "achievements": [
                    [
                        10,
                        "stat",
                        "vit",
                        1
                    ],
                    [
                        100,
                        "stat",
                        "speed",
                        0.5
                    ],
                    [
                        1000,
                        "stat",
                        "hp",
                        200
                    ],
                    [
                        10000,
                        "stat",
                        "armor",
                        10
                    ]
                ],
                "aggro": 0,
                "attack": 100,
                "avoidance": 98,
                "cooperative": true,
                "damage_type": "physical",
                "frequency": 1,
                "hp": 40,
                "immune": true,
                "mp": 0,
                "name": "Love Goo",
                "phresistance": 30,
                "rage": 0,
                "range": 20,
                "respawn": 3600,
                "skin": "pinkgoo",
                "special": true,
                "speed": 8,
                "xp": 12000
            },
            "plantoid": {
                "achievements": [
                    [
                        1,
                        "stat",
                        "mp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "hp",
                        20
                    ],
                    [
                        1000,
                        "stat",
                        "int",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "mp",
                        40
                    ],
                    [
                        100000,
                        "stat",
                        "dex",
                        1
                    ],
                    [
                        1000000,
                        "stat",
                        "resistance",
                        5
                    ],
                    [
                        10000000,
                        "stat",
                        "mp",
                        250
                    ]
                ],
                "aggro": 0.2,
                "armor": 160,
                "attack": 640,
                "damage_type": "physical",
                "frequency": 1.2,
                "hp": 120000,
                "mp": 2400,
                "name": "Sprawling",
                "rage": 0,
                "range": 80,
                "resistance": 190,
                "respawn": 18,
                "skin": "plantoid",
                "speed": 20,
                "xp": 96000
            },
            "poisio": {
                "achievements": [
                    [
                        10,
                        "stat",
                        "mp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "hp",
                        20
                    ],
                    [
                        1000,
                        "stat",
                        "armor",
                        2
                    ],
                    [
                        10000,
                        "stat",
                        "dex",
                        1
                    ],
                    [
                        100000,
                        "stat",
                        "rpiercing",
                        5
                    ],
                    [
                        1000000,
                        "stat",
                        "crit",
                        0.5
                    ],
                    [
                        10000000,
                        "stat",
                        "frequency",
                        1
                    ]
                ],
                "aggro": 1,
                "attack": 240,
                "damage_type": "physical",
                "frequency": 0.6,
                "hp": 3600,
                "mp": 72,
                "name": "Poisio",
                "rage": 0.2,
                "range": 20,
                "respawn": 6,
                "skin": "poisio",
                "speed": 24,
                "xp": 4000
            },
            "porcupine": {
                "achievements": [
                    [
                        10,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        1000,
                        "stat",
                        "for",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "for",
                        1
                    ],
                    [
                        100000,
                        "stat",
                        "dreturn",
                        0.5
                    ],
                    [
                        1000000,
                        "stat",
                        "hp",
                        300
                    ],
                    [
                        10000000,
                        "stat",
                        "armor",
                        10
                    ]
                ],
                "aggro": 1,
                "armor": 120,
                "attack": 16,
                "charge": 30,
                "damage_type": "physical",
                "difficulty": 1.2,
                "dreturn": 4800,
                "frequency": 0.5,
                "hp": 3800,
                "mp": 76,
                "name": "Porcupine",
                "rage": 0.4,
                "range": 20,
                "respawn": 2,
                "skin": "porcupine",
                "speed": 10,
                "xp": 3200
            },
            "pppompom": {
                "achievements": [
                    [
                        10,
                        "stat",
                        "mp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "mp",
                        20
                    ],
                    [
                        1000,
                        "stat",
                        "vit",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "int",
                        1
                    ],
                    [
                        100000,
                        "stat",
                        "int",
                        2
                    ],
                    [
                        1000000,
                        "stat",
                        "resistance",
                        5
                    ],
                    [
                        10000000,
                        "stat",
                        "range",
                        2
                    ]
                ],
                "aggro": 0.2,
                "attack": 920,
                "damage_type": "physical",
                "difficulty": 1.2,
                "frequency": 1.32,
                "hit": "explode_p",
                "hp": 64000,
                "mp": 1280,
                "name": "Pom Pom",
                "poisonous": true,
                "rage": 0,
                "range": 300,
                "resistance": 480,
                "respawn": 4,
                "skin": "pppompom",
                "speed": 18,
                "xp": 62400
            },
            "prat": {
                "achievements": [
                    [
                        1,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "hp",
                        20
                    ],
                    [
                        1000,
                        "stat",
                        "vit",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "dex",
                        1
                    ],
                    [
                        100000,
                        "stat",
                        "attack",
                        5
                    ],
                    [
                        1000000,
                        "stat",
                        "vit",
                        5
                    ],
                    [
                        10000000,
                        "stat",
                        "lifesteal",
                        1.25
                    ]
                ],
                "aggro": 1,
                "armor": 160,
                "attack": 320,
                "charge": 86,
                "damage_type": "physical",
                "frequency": 1.6,
                "hp": 9200,
                "lifesteal": 120,
                "mp": 184,
                "name": "Vampire Rat",
                "rage": 0.4,
                "range": 32,
                "respawn": 4,
                "skin": "prat",
                "speed": 12,
                "xp": 7600
            },
            "puppy1": {
                "aa": 0,
                "aggro": 0,
                "attack": 5,
                "charge": 12,
                "cute": true,
                "damage_type": "physical",
                "frequency": 0.4,
                "hp": 100,
                "mp": 2,
                "name": "Puppy",
                "pet": {
                    "aggression": [
                        10,
                        100
                    ],
                    "brightness": 0,
                    "chatter": [
                        20,
                        100
                    ],
                    "courage": [
                        80,
                        100
                    ],
                    "exponential": true,
                    "level": {
                        "armor": 20,
                        "attack": 40,
                        "charge": 3,
                        "evasion": 5,
                        "hp": 300,
                        "resistance": 30,
                        "speed": 2
                    },
                    "obedience": [
                        0,
                        50
                    ],
                    "passion": [
                        50,
                        100
                    ],
                    "xp": 1000
                },
                "rage": 0,
                "range": 15,
                "respawn": 6000,
                "skin": "puppy1",
                "speed": 16,
                "xp": -500
            },
            "puppy2": {
                "aa": 0,
                "aggro": 0,
                "attack": 5,
                "charge": 12,
                "cute": true,
                "damage_type": "physical",
                "frequency": 0.4,
                "hp": 100,
                "mp": 2,
                "name": "Puppy",
                "pet": {
                    "aggression": [
                        10,
                        100
                    ],
                    "brightness": 0,
                    "chatter": [
                        20,
                        100
                    ],
                    "courage": [
                        80,
                        100
                    ],
                    "exponential": true,
                    "level": {
                        "armor": 20,
                        "attack": 40,
                        "charge": 3,
                        "evasion": 5,
                        "hp": 300,
                        "resistance": 30,
                        "speed": 2
                    },
                    "obedience": [
                        0,
                        50
                    ],
                    "passion": [
                        50,
                        100
                    ],
                    "xp": 1000
                },
                "rage": 0,
                "range": 15,
                "respawn": 6000,
                "skin": "puppy2",
                "speed": 16,
                "xp": -500
            },
            "puppy3": {
                "aa": 0,
                "aggro": 0,
                "attack": 5,
                "charge": 12,
                "cute": true,
                "damage_type": "physical",
                "frequency": 0.4,
                "hp": 100,
                "mp": 2,
                "name": "Puppy",
                "pet": {
                    "aggression": [
                        10,
                        100
                    ],
                    "brightness": 0,
                    "chatter": [
                        20,
                        100
                    ],
                    "courage": [
                        80,
                        100
                    ],
                    "exponential": true,
                    "level": {
                        "armor": 20,
                        "attack": 40,
                        "charge": 3,
                        "evasion": 5,
                        "hp": 300,
                        "resistance": 30,
                        "speed": 2
                    },
                    "obedience": [
                        0,
                        50
                    ],
                    "passion": [
                        50,
                        100
                    ],
                    "xp": 1000
                },
                "rage": 0,
                "range": 15,
                "respawn": 6000,
                "skin": "puppy3",
                "speed": 16,
                "xp": -500
            },
            "puppy4": {
                "aa": 0,
                "aggro": 0,
                "attack": 5,
                "charge": 12,
                "cute": true,
                "damage_type": "physical",
                "frequency": 0.4,
                "hp": 100,
                "mp": 2,
                "name": "Puppy",
                "rage": 0,
                "range": 15,
                "respawn": 6000,
                "skin": "puppy4",
                "speed": 16,
                "xp": -500
            },
            "rat": {
                "achievements": [
                    [
                        10,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "mp",
                        5
                    ],
                    [
                        1000,
                        "stat",
                        "armor",
                        2
                    ],
                    [
                        10000,
                        "stat",
                        "gold",
                        0.5
                    ],
                    [
                        100000,
                        "stat",
                        "attack",
                        5
                    ],
                    [
                        1000000,
                        "stat",
                        "rpiercing",
                        3
                    ],
                    [
                        10000000,
                        "stat",
                        "attack",
                        20
                    ]
                ],
                "aggro": 1,
                "attack": 80,
                "damage_type": "physical",
                "difficulty": 1.4,
                "frequency": 0.5,
                "hp": 820,
                "mp": 16,
                "name": "Rat",
                "rage": 1,
                "range": 40,
                "respawn": 2,
                "skin": "rat",
                "speed": 12,
                "xp": 640
            },
            "redfairy": {
                "aa": 1,
                "abilities": {
                    "heal": {
                        "cooldown": 1000,
                        "heal": 20000
                    }
                },
                "achievements": [
                    [
                        10,
                        "stat",
                        "gold",
                        2
                    ]
                ],
                "aggro": 0,
                "attack": 4000,
                "damage_type": "magical",
                "frequency": 100,
                "hit": "explode_c",
                "hp": 4800000,
                "mp": 96000,
                "name": "Fairy",
                "phresistance": 70,
                "rage": 0,
                "range": 999999,
                "respawn": 0,
                "skin": "redfairy",
                "speed": 10,
                "xp": 2000000
            },
            "rgoo": {
                "aa": 1,
                "achievements": [
                    [
                        1,
                        "stat",
                        "hp",
                        20
                    ],
                    [
                        100,
                        "stat",
                        "for",
                        1
                    ]
                ],
                "aggro": 0.1,
                "armor": 300,
                "attack": 320,
                "cooperative": true,
                "damage_type": "physical",
                "frequency": 1.2,
                "hp": 1000000,
                "mp": 20000,
                "name": "Rainbow Goo",
                "rage": 0,
                "range": 64,
                "resistance": 300,
                "respawn": -1,
                "size": 1.5,
                "skin": "gooD",
                "special": true,
                "speed": 9,
                "xp": 48000000
            },
            "rharpy": {
                "achievements": [
                    [
                        1,
                        "stat",
                        "mp",
                        5
                    ],
                    [
                        10,
                        "stat",
                        "attack",
                        2
                    ],
                    [
                        1000,
                        "stat",
                        "stresistance",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "stresistance",
                        1
                    ],
                    [
                        20000,
                        "stat",
                        "speed",
                        0.25
                    ]
                ],
                "aggro": 1.2,
                "apiercing": 160,
                "armor": 360,
                "attack": 1420,
                "charge": 116,
                "charge_skin": "rharpy_fly",
                "cooperative": true,
                "damage_type": "magical",
                "difficulty": 3,
                "frequency": 0.7,
                "hit": "momentum",
                "hp": 320000,
                "mp": 6400,
                "name": "Rebel Harpy",
                "phresistance": 60,
                "rage": 1.2,
                "range": 30,
                "resistance": 240,
                "respawn": 400,
                "skin": "rharpy",
                "slots": {
                    "mainhand": {
                        "level": 9,
                        "name": "basher"
                    }
                },
                "speed": 18,
                "xp": 332000
            },
            "rooster": {
                "achievements": [
                    [
                        1000,
                        "stat",
                        "for",
                        1
                    ]
                ],
                "aggro": 1,
                "attack": 48,
                "cute": true,
                "damage_type": "physical",
                "frequency": 1.5,
                "hp": 60,
                "mp": 1,
                "name": "Chicken",
                "rage": 0.2,
                "range": 20,
                "respawn": 200,
                "skin": "rooster",
                "speed": 7,
                "xp": 10
            },
            "rudolph": {
                "achievements": [
                    [
                        100,
                        "stat",
                        "for",
                        2
                    ],
                    [
                        1000,
                        "stat",
                        "for",
                        2
                    ]
                ],
                "aggro": 0,
                "armor": 1200,
                "attack": 1600,
                "damage_type": "magical",
                "frequency": 10,
                "hit": "explode_c",
                "hp": 12000000,
                "mp": 240000,
                "name": "Reindeer",
                "prefix": "the",
                "rage": 0,
                "range": 999999,
                "resistance": 1200,
                "respawn": 3600,
                "skin": "rudolph",
                "speed": 24,
                "xp": 2000000
            },
            "scorpion": {
                "achievements": [
                    [
                        10,
                        "stat",
                        "mp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "hp",
                        20
                    ],
                    [
                        1000,
                        "stat",
                        "armor",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "dex",
                        1
                    ],
                    [
                        100000,
                        "stat",
                        "int",
                        1
                    ],
                    [
                        1000000,
                        "stat",
                        "str",
                        1
                    ],
                    [
                        10000000,
                        "stat",
                        "attack",
                        15
                    ]
                ],
                "aggro": 0.3,
                "armor": 200,
                "attack": 100,
                "damage_type": "physical",
                "frequency": 0.8,
                "hp": 24000,
                "mp": 480,
                "name": "Scorpion",
                "rage": 0,
                "range": 32,
                "respawn": 6,
                "skin": "scorpion",
                "speed": 24,
                "xp": 20000
            },
            "skeletor": {
                "achievements": [
                    [
                        1,
                        "stat",
                        "for",
                        1
                    ],
                    [
                        100,
                        "stat",
                        "vit",
                        1
                    ],
                    [
                        1000,
                        "stat",
                        "for",
                        2
                    ],
                    [
                        10000,
                        "stat",
                        "vit",
                        3
                    ],
                    [
                        100000,
                        "stat",
                        "crit",
                        0.25
                    ],
                    [
                        1000000,
                        "stat",
                        "for",
                        10
                    ],
                    [
                        10000000,
                        "stat",
                        "for",
                        20
                    ]
                ],
                "aggro": 0.2,
                "attack": 1800,
                "damage_type": "physical",
                "frequency": 1.2,
                "hp": 80000,
                "mp": 1600,
                "name": "Skeletor",
                "rage": 0,
                "range": 80,
                "respawn": 960,
                "skin": "skeletor",
                "slots": {
                    "mainhand": {
                        "level": 8,
                        "name": "scythe"
                    }
                },
                "speed": 40,
                "xp": 120000
            },
            "slenderman": {
                "achievements": [
                    [
                        1,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        10,
                        "stat",
                        "mp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "for",
                        1
                    ]
                ],
                "aggro": 0.05,
                "announce": "#3D3C81",
                "attack": 3600,
                "cbuff": [
                    [
                        60,
                        "halloween0"
                    ],
                    [
                        70,
                        "halloween1"
                    ],
                    [
                        200,
                        "halloween2"
                    ]
                ],
                "cooperative": true,
                "damage_type": "physical",
                "frequency": 0.3,
                "hp": 66666,
                "immune": true,
                "mp": 1333,
                "name": "Slenderman",
                "phresistance": 95,
                "rage": 0,
                "range": 52,
                "reflection": 96,
                "respawn": 600,
                "skin": "slenderman",
                "special": true,
                "speed": 280,
                "xp": 4800
            },
            "snake": {
                "achievements": [
                    [
                        10,
                        "stat",
                        "mp",
                        5
                    ],
                    [
                        100,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        1000,
                        "stat",
                        "vit",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "dex",
                        1
                    ],
                    [
                        100000,
                        "stat",
                        "speed",
                        0.25
                    ],
                    [
                        1000000,
                        "stat",
                        "armor",
                        5
                    ],
                    [
                        10000000,
                        "stat",
                        "resistance",
                        10
                    ]
                ],
                "aggro": 0,
                "attack": 24,
                "damage_type": "physical",
                "frequency": 0.6,
                "hp": 720,
                "mp": 14,
                "name": "Snake",
                "rage": 0,
                "range": 20,
                "respawn": 3,
                "skin": "snake",
                "speed": 12,
                "xp": 960
            },
            "snowman": {
                "1hp": true,
                "achievements": [
                    [
                        10,
                        "stat",
                        "mp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "resistance",
                        3
                    ],
                    [
                        1000,
                        "stat",
                        "resistance",
                        5
                    ],
                    [
                        10000,
                        "stat",
                        "attack",
                        5
                    ],
                    [
                        100000,
                        "stat",
                        "speed",
                        1.75
                    ],
                    [
                        1000000,
                        "stat",
                        "luck",
                        5
                    ]
                ],
                "aggro": 0,
                "announce": "#B1DCEF",
                "attack": 80,
                "cooperative": true,
                "damage_type": "physical",
                "frequency": 1,
                "hp": 1200,
                "immune": true,
                "mp": 24,
                "name": "Snowman",
                "rage": 0,
                "range": 20,
                "respawn": 3600,
                "s": {
                    "fullguardx": {
                        "ms": 300000
                    }
                },
                "skin": "snowman",
                "special": true,
                "speed": 8,
                "xp": 12000
            },
            "spider": {
                "achievements": [
                    [
                        10,
                        "stat",
                        "mp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "mp",
                        10
                    ],
                    [
                        1000,
                        "stat",
                        "armor",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "for",
                        1
                    ],
                    [
                        100000,
                        "stat",
                        "str",
                        1
                    ],
                    [
                        1000000,
                        "stat",
                        "crit",
                        0.25
                    ],
                    [
                        10000000,
                        "stat",
                        "vit",
                        8
                    ]
                ],
                "aggro": 0.3,
                "attack": 80,
                "damage_type": "physical",
                "frequency": 1,
                "hp": 18000,
                "mp": 360,
                "name": "Spider",
                "rage": 0,
                "range": 32,
                "respawn": 14,
                "skin": "spider",
                "speed": 24,
                "xp": 12000
            },
            "squig": {
                "aa": 1,
                "achievements": [
                    [
                        10,
                        "stat",
                        "mp",
                        5
                    ],
                    [
                        100,
                        "stat",
                        "mp",
                        5
                    ],
                    [
                        1000,
                        "stat",
                        "mp",
                        10
                    ],
                    [
                        10000,
                        "stat",
                        "mp",
                        10
                    ],
                    [
                        100000,
                        "stat",
                        "evasion",
                        0.25
                    ],
                    [
                        1000000,
                        "stat",
                        "resistance",
                        5
                    ],
                    [
                        10000000,
                        "stat",
                        "evasion",
                        1
                    ]
                ],
                "aggro": 0,
                "attack": 7,
                "damage_type": "physical",
                "frequency": 0.5,
                "hp": 1000,
                "mp": 20,
                "name": "Squig",
                "rage": 0,
                "range": 15,
                "respawn": 12,
                "skin": "squig",
                "speed": 10,
                "xp": 600
            },
            "squigtoad": {
                "achievements": [
                    [
                        10,
                        "stat",
                        "mp",
                        5
                    ],
                    [
                        100,
                        "stat",
                        "mp",
                        5
                    ],
                    [
                        1000,
                        "stat",
                        "mp",
                        5
                    ],
                    [
                        10000,
                        "stat",
                        "evasion",
                        0.25
                    ],
                    [
                        100000,
                        "stat",
                        "int",
                        1
                    ],
                    [
                        1000000,
                        "stat",
                        "attack",
                        5
                    ],
                    [
                        10000000,
                        "stat",
                        "evasion",
                        1
                    ]
                ],
                "aggro": 0,
                "attack": 24,
                "damage_type": "physical",
                "difficulty": 3,
                "frequency": 0.6,
                "hp": 9600,
                "mp": 192,
                "name": "Squigtoad",
                "rage": 0,
                "range": 20,
                "respawn": 120,
                "skin": "squigtoad",
                "speed": 16,
                "xp": 32000
            },
            "stompy": {
                "achievements": [
                    [
                        1,
                        "stat",
                        "hp",
                        50
                    ],
                    [
                        100,
                        "stat",
                        "mp",
                        20
                    ],
                    [
                        1000,
                        "stat",
                        "speed",
                        0.25
                    ],
                    [
                        10000,
                        "stat",
                        "range",
                        0.5
                    ],
                    [
                        100000,
                        "stat",
                        "mp",
                        50
                    ],
                    [
                        1000000,
                        "stat",
                        "frequency",
                        1
                    ],
                    [
                        10000000,
                        "stat",
                        "attack",
                        200
                    ]
                ],
                "aggro": 0.2,
                "attack": 3600,
                "charge": 80,
                "damage_type": "physical",
                "frequency": 0.8,
                "hp": 640000,
                "mp": 12800,
                "name": "Stompy",
                "rage": 0,
                "range": 64,
                "respawn": 2160,
                "skin": "stompy",
                "speed": 40,
                "xp": 600000
            },
            "stoneworm": {
                "achievements": [
                    [
                        10,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "mp",
                        20
                    ],
                    [
                        1000,
                        "stat",
                        "hp",
                        30
                    ],
                    [
                        10000,
                        "stat",
                        "for",
                        1
                    ],
                    [
                        100000,
                        "stat",
                        "for",
                        2
                    ],
                    [
                        1000000,
                        "stat",
                        "apiercing",
                        5
                    ],
                    [
                        10000000,
                        "stat",
                        "resistance",
                        10
                    ]
                ],
                "aggro": 1,
                "apiercing": 800,
                "attack": 360,
                "balance": "Spadar",
                "charge": 46,
                "damage_type": "physical",
                "frequency": 0.6,
                "hp": 2200,
                "mp": 44,
                "name": "Stone Worm",
                "rage": 1,
                "range": 20,
                "respawn": 1,
                "skin": "stoneworm",
                "speed": 12,
                "xp": 2400
            },
            "target": {
                "aggro": 0,
                "attack": 0,
                "damage_type": "physical",
                "frequency": 0.1,
                "hp": 50000,
                "humanoid": true,
                "mp": 1000,
                "name": "Target Automatron",
                "orientation": 2,
                "phresistance": 50,
                "rage": 0,
                "range": 1,
                "respawn": 0,
                "skin": "target",
                "speed": 12,
                "stationary": true,
                "xp": 1000
            },
            "target_a500": {
                "aggro": 0,
                "armor": 500,
                "attack": 0,
                "damage_type": "physical",
                "frequency": 0.1,
                "hp": 50000,
                "humanoid": true,
                "immune": true,
                "mp": 1000,
                "name": "Target Automatron",
                "orientation": 0,
                "rage": 0,
                "range": 1,
                "respawn": 0,
                "skin": "target_a500",
                "speed": 12,
                "stationary": true,
                "xp": 1000
            },
            "target_a750": {
                "aggro": 0,
                "armor": 750,
                "attack": 0,
                "damage_type": "physical",
                "frequency": 0.1,
                "hp": 50000,
                "humanoid": true,
                "mp": 1000,
                "name": "Target Automatron",
                "orientation": 0,
                "rage": 0,
                "range": 1,
                "respawn": 0,
                "skin": "target_a750",
                "speed": 12,
                "stationary": true,
                "xp": 1000
            },
            "target_ar500red": {
                "abilities": {
                    "self_healing": {
                        "cooldown": 10000,
                        "heal": 100000
                    }
                },
                "aggro": 0,
                "armor": 500,
                "attack": 0,
                "damage_type": "physical",
                "dreturn": 50,
                "evasion": 50,
                "frequency": 0.1,
                "hp": 500000,
                "humanoid": true,
                "mp": 10000,
                "name": "Target Automatron",
                "orientation": 1,
                "rage": 0,
                "range": 1,
                "reflection": 50,
                "resistance": 500,
                "respawn": 0,
                "skin": "target_ar500red",
                "speed": 12,
                "stationary": true,
                "xp": 1000
            },
            "target_ar900": {
                "achievements": [
                    [
                        100,
                        "stat",
                        "for",
                        1
                    ]
                ],
                "aggro": 0,
                "armor": 900,
                "attack": 0,
                "damage_type": "physical",
                "frequency": 0.1,
                "hp": 50000,
                "humanoid": true,
                "mp": 1000,
                "name": "Target Automatron",
                "orientation": 0,
                "rage": 0,
                "range": 1,
                "resistance": 900,
                "respawn": 0,
                "skin": "target_ar900",
                "speed": 12,
                "stationary": true,
                "xp": 1000
            },
            "target_r500": {
                "aggro": 0,
                "attack": 0,
                "damage_type": "physical",
                "evasion": 50,
                "frequency": 0.1,
                "hp": 50000,
                "humanoid": true,
                "mp": 1000,
                "name": "Target Automatron",
                "orientation": 0,
                "rage": 0,
                "range": 1,
                "resistance": 500,
                "respawn": 0,
                "skin": "target_r500",
                "speed": 12,
                "stationary": true,
                "xp": 1000
            },
            "target_r750": {
                "abilities": {
                    "portal": {
                        "cooldown": 0
                    }
                },
                "aggro": 0,
                "attack": 0,
                "damage_type": "physical",
                "frequency": 0.1,
                "hp": 50000,
                "humanoid": true,
                "mp": 1000,
                "name": "Target Automatron",
                "orientation": 0,
                "rage": 0,
                "range": 1,
                "resistance": 750,
                "respawn": 0,
                "skin": "target_r750",
                "speed": 36,
                "stationary": true,
                "xp": 1000
            },
            "tiger": {
                "achievements": [
                    [
                        1,
                        "stat",
                        "vit",
                        1
                    ]
                ],
                "aggro": 0,
                "announce": "#D65A3A",
                "armor": 540,
                "attack": 960,
                "avoidance": 99,
                "cute": true,
                "damage_type": "physical",
                "drop_on_hit": true,
                "explanation": "Legendary animal, rarely appears to players.",
                "frequency": 0.8,
                "hp": 12000,
                "immune": true,
                "mp": 240,
                "name": "Tiger",
                "peaceful": true,
                "phresistance": 60,
                "rage": 0,
                "range": 20,
                "reflection": 100,
                "respawn": 1800,
                "roam": true,
                "skin": "tiger",
                "special": true,
                "speed": 24,
                "xp": 24800
            },
            "tinyp": {
                "aa": 1,
                "abilities": {
                    "self_healing": {
                        "cooldown": 10,
                        "heal": 1200
                    }
                },
                "achievements": [
                    [
                        1,
                        "stat",
                        "for",
                        0.25
                    ],
                    [
                        10,
                        "stat",
                        "luck",
                        0.5
                    ]
                ],
                "aggro": 0.3,
                "attack": 240,
                "cute": true,
                "damage_type": "physical",
                "escapist": true,
                "frequency": 5,
                "hp": 5600,
                "immune": true,
                "mp": 112,
                "name": "Fairy",
                "phresistance": 98,
                "rage": 0,
                "range": 35,
                "respawn": -1,
                "roam": true,
                "skin": "tinyp",
                "special": true,
                "speed": 24,
                "xp": 12000
            },
            "tortoise": {
                "achievements": [
                    [
                        10,
                        "stat",
                        "hp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "mp",
                        10
                    ],
                    [
                        1000,
                        "stat",
                        "hp",
                        20
                    ],
                    [
                        10000,
                        "stat",
                        "armor",
                        5
                    ],
                    [
                        100000,
                        "stat",
                        "str",
                        1
                    ],
                    [
                        1000000,
                        "stat",
                        "speed",
                        0.5
                    ],
                    [
                        10000000,
                        "stat",
                        "armor",
                        10
                    ]
                ],
                "aggro": 0,
                "armor": 200,
                "attack": 36,
                "damage_type": "physical",
                "frequency": 0.5,
                "hp": 7200,
                "mp": 144,
                "name": "Tortoise",
                "rage": 0,
                "range": 15,
                "respawn": 12,
                "skin": "tortoise",
                "speed": 10,
                "xp": 5200
            },
            "vbat": {
                "aa": 1,
                "aggro": 0.3,
                "attack": 1240,
                "charge": 84,
                "damage_type": "physical",
                "difficulty": 17,
                "frequency": 1.56,
                "hp": 156000,
                "mp": 3120,
                "name": "Vampireling",
                "phresistance": 70,
                "rage": 0.1,
                "range": 35,
                "respawn": -1,
                "skin": "vbat",
                "speed": 24,
                "xp": 720000
            },
            "wabbit": {
                "achievements": [
                    [
                        1,
                        "stat",
                        "xp",
                        1
                    ],
                    [
                        100,
                        "stat",
                        "xp",
                        1
                    ],
                    [
                        1000,
                        "stat",
                        "luck",
                        1
                    ],
                    [
                        5000,
                        "stat",
                        "luck",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "speed",
                        0.75
                    ],
                    [
                        100000,
                        "stat",
                        "speed",
                        1
                    ]
                ],
                "aggro": 0,
                "armor": 180,
                "attack": 60,
                "avoidance": 96,
                "cooperative": true,
                "damage_type": "physical",
                "frequency": 1,
                "hp": 32000,
                "immune": true,
                "mp": 640,
                "name": "Wabbit",
                "operator": true,
                "phresistance": 70,
                "rage": 0,
                "range": 20,
                "rbuff": "easterluck",
                "resistance": 180,
                "respawn": 3600,
                "s": {
                    "fullguard": {
                        "ms": 300000
                    }
                },
                "skin": "wabbit",
                "special": true,
                "speed": 60,
                "xp": 1000000
            },
            "welemental": {
                "aggro": 0.2,
                "attack": 1800,
                "damage_type": "physical",
                "evasion": 80,
                "frequency": 1.2,
                "hp": 80000,
                "mp": 1600,
                "name": "Water Elemental",
                "rage": 0,
                "range": 80,
                "respawn": 1,
                "skin": "welemental",
                "speed": 20,
                "xp": 10
            },
            "wolf": {
                "achievements": [
                    [
                        1,
                        "stat",
                        "hp",
                        20
                    ],
                    [
                        100,
                        "stat",
                        "mp",
                        20
                    ],
                    [
                        1000,
                        "stat",
                        "for",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "resistance",
                        5
                    ],
                    [
                        100000,
                        "stat",
                        "vit",
                        3
                    ],
                    [
                        1000000,
                        "stat",
                        "xp",
                        1
                    ],
                    [
                        10000000,
                        "stat",
                        "speed",
                        2
                    ]
                ],
                "aggro": 1,
                "armor": 300,
                "attack": 480,
                "charge": 152,
                "damage_type": "physical",
                "frequency": 0.8,
                "hp": 48000,
                "mp": 960,
                "name": "White Wolf",
                "rage": 1,
                "range": 20,
                "resistance": 200,
                "respawn": 12,
                "skin": "wolf",
                "speed": 24,
                "xp": 48800
            },
            "wolfie": {
                "achievements": [
                    [
                        1,
                        "stat",
                        "hp",
                        20
                    ],
                    [
                        100,
                        "stat",
                        "mp",
                        20
                    ],
                    [
                        1000,
                        "stat",
                        "hp",
                        30
                    ],
                    [
                        10000,
                        "stat",
                        "str",
                        1
                    ],
                    [
                        100000,
                        "stat",
                        "vit",
                        1
                    ],
                    [
                        1000000,
                        "stat",
                        "armor",
                        5
                    ],
                    [
                        10000000,
                        "stat",
                        "mp",
                        500
                    ]
                ],
                "aggro": 1,
                "armor": 200,
                "attack": 320,
                "charge": 52,
                "damage_type": "physical",
                "frequency": 0.8,
                "hp": 19200,
                "mp": 384,
                "name": "Dark Hound",
                "rage": 1,
                "range": 20,
                "resistance": 100,
                "respawn": 12,
                "skin": "wolfie",
                "speed": 24,
                "xp": 16400
            },
            "xmagefi": {
                "abilities": {
                    "anger": {
                        "cooldown": 8000,
                        "radius": 300
                    },
                    "multi_burn": {
                        "cooldown": 4000,
                        "damage": 4000
                    }
                },
                "aggro": 1.8,
                "armor": 220,
                "attack": 2240,
                "charge": 84,
                "damage_type": "magical",
                "difficulty": 0,
                "frequency": 1.46,
                "hide": true,
                "hp": 5600000,
                "immune": true,
                "mp": 112000,
                "name": "Mage",
                "phresistance": 35,
                "rage": 1.8,
                "range": 135,
                "resistance": 360,
                "respawn": 0,
                "respawn_as": "xmagen",
                "skin": "xmagefi",
                "slots": {
                    "mainhand": {
                        "level": 13,
                        "name": "firestaff"
                    }
                },
                "speed": 24,
                "xp": 1440000
            },
            "xmagefz": {
                "abilities": {
                    "deepfreeze": {
                        "cooldown": 6000,
                        "radius": 300
                    }
                },
                "aggro": 1.8,
                "armor": 120,
                "attack": 1640,
                "charge": 84,
                "damage_type": "magical",
                "difficulty": 0,
                "frequency": 1.26,
                "hide": true,
                "hp": 4800000,
                "immune": true,
                "mp": 96000,
                "name": "Mage",
                "phresistance": 20,
                "rage": 1.8,
                "range": 135,
                "resistance": 360,
                "respawn": 0,
                "respawn_as": "xmagefi",
                "skin": "xmagefz",
                "slots": {
                    "mainhand": {
                        "level": 13,
                        "name": "vstaff"
                    }
                },
                "speed": 24,
                "xp": 7200000
            },
            "xmagen": {
                "abilities": {
                    "mtangle": {
                        "cooldown": 3200
                    },
                    "self_healing": {
                        "cooldown": 2000,
                        "heal": 4800
                    }
                },
                "aggro": 1.8,
                "armor": 320,
                "attack": 2440,
                "charge": 84,
                "damage_type": "magical",
                "difficulty": 0,
                "frequency": 1.66,
                "hide": true,
                "hp": 6400000,
                "immune": true,
                "mp": 128000,
                "name": "Mage",
                "phresistance": 50,
                "poisonous": true,
                "rage": 1.8,
                "range": 135,
                "reflection": 30,
                "resistance": 360,
                "respawn": 0,
                "respawn_as": "xmagex",
                "skin": "xmagen",
                "slots": {
                    "mainhand": {
                        "level": 13,
                        "name": "mushroomstaff"
                    }
                },
                "speed": 24,
                "xp": 21600000
            },
            "xmagex": {
                "abilities": {
                    "anger": {
                        "cooldown": 8000,
                        "radius": 300
                    },
                    "warpstomp": {
                        "cooldown": 4000,
                        "radius": 160,
                        "stun": 1500
                    }
                },
                "achievements": [
                    [
                        1,
                        "stat",
                        "fzresistance",
                        1
                    ],
                    [
                        5,
                        "stat",
                        "firesistance",
                        1
                    ],
                    [
                        10,
                        "stat",
                        "phresistance",
                        1
                    ],
                    [
                        100,
                        "stat",
                        "frequency",
                        1
                    ],
                    [
                        1000,
                        "stat",
                        "xp",
                        2
                    ],
                    [
                        10000,
                        "stat",
                        "gold",
                        2
                    ]
                ],
                "aggro": 1.8,
                "armor": 360,
                "attack": 10640,
                "charge": 84,
                "damage_type": "magical",
                "difficulty": 64,
                "frequency": 1.56,
                "hp": 7200000,
                "immune": true,
                "mp": 144000,
                "name": "Dark Mage",
                "phresistance": 65,
                "rage": 1.8,
                "range": 135,
                "resistance": 420,
                "respawn": -1,
                "skin": "xmagex",
                "slots": {
                    "mainhand": {
                        "level": 13,
                        "name": "oozingterror"
                    }
                },
                "speed": 24,
                "xp": 28800000
            },
            "xscorpion": {
                "achievements": [
                    [
                        10,
                        "stat",
                        "mp",
                        10
                    ],
                    [
                        100,
                        "stat",
                        "mp",
                        30
                    ],
                    [
                        1000,
                        "stat",
                        "dex",
                        1
                    ],
                    [
                        10000,
                        "stat",
                        "apiercing",
                        2
                    ],
                    [
                        100000,
                        "stat",
                        "rpiercing",
                        3
                    ],
                    [
                        1000000,
                        "stat",
                        "frequency",
                        2
                    ],
                    [
                        10000000,
                        "stat",
                        "attack",
                        25
                    ]
                ],
                "aggro": 0.3,
                "armor": 400,
                "attack": 720,
                "damage_type": "physical",
                "frequency": 0.8,
                "hp": 140000,
                "mp": 2800,
                "name": "Scorpion",
                "rage": 0,
                "range": 32,
                "respawn": 16,
                "skin": "xscorpion",
                "speed": 24,
                "xp": 172000
            },
            "zapper0": {
                "aa": 1,
                "abilities": {
                    "degen": {
                        "amount": 20,
                        "cooldown": 200
                    },
                    "zap": {
                        "amount": 1200,
                        "cooldown": 1000,
                        "pure": true,
                        "radius": 300
                    }
                },
                "aggro": 0,
                "armor": 2200,
                "attack": 0,
                "damage_type": "pure",
                "frequency": 0,
                "hide": true,
                "hp": 6400,
                "mp": 128,
                "name": "Zapper",
                "rage": 0,
                "range": 0,
                "resistance": 1600,
                "respawn": -1,
                "skin": "zapper0",
                "speed": 0,
                "trap": true,
                "xp": 0
            }
        }
    }
    expect(G_monsters).toBeDefined()
})