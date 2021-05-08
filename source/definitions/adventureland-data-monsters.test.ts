import { GData2 } from "./adventureland-data"

/** 
 * The following is from http://adventure.land/data.js, version 680 (2021-05-05)
 * It is used to confirm type correctness
 */

test("G.monsters type validation", async () => {
    const G_monsters: Pick<GData2, "monsters"> = {
        "monsters": {
            "snowman": {
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
                        5
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
                "1hp": true,
                "name": "Snowman",
                "rage": 0,
                "hp": 1200,
                "respawn": 3600,
                "range": 20,
                "aggro": 0,
                "immune": true,
                "attack": 80,
                "frequency": 1,
                "damage_type": "physical",
                "cooperative": true,
                "skin": "snowman",
                "announce": "#B1DCEF",
                "xp": 12000,
                "speed": 8,
                "special": true,
                "mp": 60.0
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
                "name": "Cute Bee",
                "rage": 0.1,
                "hp": 300,
                "respawn": -1,
                "range": 20,
                "aggro": 1,
                "attack": 16,
                "frequency": 0.5,
                "cute": true,
                "damage_type": "physical",
                "skin": "cutebee",
                "xp": 400,
                "avoidance": 99.9,
                "speed": 12,
                "explanation": "Spawns in Mainland around every 480,000 Bee spawns",
                "mp": 15.0
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
                "name": "Dark Hound",
                "rage": 1,
                "armor": 200,
                "hp": 19200,
                "respawn": 12,
                "resistance": 100,
                "attack": 320,
                "aggro": 1,
                "charge": 52,
                "frequency": 0.8,
                "damage_type": "physical",
                "skin": "wolfie",
                "range": 20,
                "xp": 16400,
                "speed": 24,
                "mp": 960.0
            },
            "gredpro": {
                "abilities": {
                    "burn": {
                        "unlimited": true,
                        "attr0": 100
                    }
                },
                "hit": "explode_c",
                "name": "Protector of Fire",
                "rage": 0,
                "hp": 2400000,
                "respawn": 600,
                "attack": 120,
                "aggro": 1,
                "charge": 84,
                "frequency": 1.2,
                "damage_type": "magical",
                "skin": "gredpro",
                "range": 948,
                "xp": 3200000,
                "speed": 48,
                "slots": {
                    "mainhand": {
                        "name": "firestaff",
                        "level": 12
                    }
                },
                "mp": 120000.0
            },
            "fireroamer": {
                "abilities": {
                    "burn": {
                        "unlimited": true,
                        "attr0": 100
                    }
                },
                "resistance": 320,
                "frequency": 1.2,
                "damage_type": "magical",
                "skin": "fireroamer",
                "xp": 64200,
                "speed": 24,
                "evasion": 4,
                "armor": 120,
                "attack": 320,
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
                "hit": "explode_p",
                "hp": 84000,
                "difficulty": 1.1,
                "name": "Fire Spirit",
                "rpiercing": 320,
                "rage": 0,
                "respawn": 2,
                "range": 280,
                "aggro": 0.2,
                "mp": 4200.0
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
                "hit": "explode_c",
                "hp": 3600000,
                "frequency": 100,
                "damage_type": "magical",
                "skin": "greenfairy",
                "xp": 2000000,
                "speed": 10,
                "name": "Fairy",
                "rage": 0,
                "respawn": 0,
                "range": 999999,
                "attack": 3000,
                "aggro": 0,
                "mp": 180000.0
            },
            "icegolem": {
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
                "abilities": {
                    "multi_freeze": {
                        "cooldown": 2000,
                        "damage": 2000
                    }
                },
                "name": "Ice Golem",
                "rage": 0,
                "armor": 400,
                "hp": 800000,
                "respawn": 79200,
                "resistance": 400,
                "attack": 2400,
                "aggro": 0.2,
                "charge": 48,
                "frequency": 1.2,
                "damage_type": "physical",
                "cooperative": true,
                "skin": "icegolem",
                "range": 64,
                "xp": 920000,
                "speed": 12,
                "mp": 40000.0
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
                "hp": 80000,
                "frequency": 1.2,
                "damage_type": "physical",
                "skin": "skeletor",
                "xp": 120000,
                "speed": 40,
                "slots": {
                    "mainhand": {
                        "name": "scythe",
                        "level": 8
                    }
                },
                "name": "Skeletor",
                "rage": 0,
                "respawn": 960,
                "range": 80,
                "attack": 1800,
                "aggro": 0.2,
                "mp": 4000.0
            },
            "nerfedmummy": {
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
                "name": "Mummy",
                "rage": 1,
                "hp": 1600,
                "respawn": 24,
                "attack": 240,
                "aggro": 1,
                "charge": 96,
                "frequency": 0.9,
                "damage_type": "physical",
                "skin": "mummy",
                "range": 48,
                "xp": 1800,
                "speed": 96,
                "mp": 80.0
            },
            "prat": {
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
                "name": "Vampire Rat",
                "lifesteal": 120,
                "rage": 0.4,
                "armor": 160,
                "hp": 9200,
                "respawn": 4,
                "attack": 320,
                "aggro": 1,
                "charge": 86,
                "frequency": 1.6,
                "damage_type": "physical",
                "skin": "prat",
                "range": 32,
                "xp": 7600,
                "speed": 12,
                "mp": 460.0
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
                "hit": "explode_c",
                "name": "Mr. Pumpkin",
                "rage": 0,
                "hp": 36000000,
                "respawn": 1920,
                "range": 520,
                "aggro": 0.05,
                "attack": 1200,
                "frequency": 1,
                "damage_type": "magical",
                "cooperative": true,
                "skin": "mrpumpkin",
                "announce": "#FD8940",
                "xp": 48000000,
                "speed": 40,
                "slots": {
                    "mainhand": {
                        "name": "oozingterror",
                        "level": 8
                    }
                },
                "mp": 1800000.0
            },
            "bscorpion": {
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
                "abilities": {
                    "weakness_aura": {
                        "cooldown": 4000,
                        "radius": 100,
                        "aura": true,
                        "condition": "weakness"
                    }
                },
                "name": "Black Scorpion",
                "rage": 0,
                "armor": 600,
                "hp": 576900,
                "respawn": 6,
                "resistance": 400,
                "aggro": 0.8,
                "attack": 3200,
                "frequency": 0.6,
                "damage_type": "physical",
                "skin": "bscorpion",
                "crit": 10,
                "range": 32,
                "xp": 634800,
                "speed": 24,
                "poisonous": true,
                "mp": 28845.0
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
                "hp": 2400,
                "frequency": 0.8,
                "damage_type": "physical",
                "skin": "scorpion",
                "xp": 2000,
                "speed": 24,
                "name": "Scorpion",
                "rage": 0,
                "respawn": 6,
                "range": 32,
                "attack": 100,
                "aggro": 0.3,
                "mp": 120.0
            },
            "jrat": {
                "aa": 1,
                "achievements": [
                    [
                        1000000,
                        "stat",
                        "for",
                        5
                    ]
                ],
                "hp": 4000,
                "frequency": 0.5,
                "damage_type": "physical",
                "skin": "rat",
                "xp": 100,
                "speed": 12,
                "name": "Rat",
                "rage": 0,
                "respawn": 42,
                "range": 40,
                "attack": 240,
                "aggro": 0,
                "mp": 200.0
            },
            "porcupine": {
                "aa": 1,
                "dreturn": 4800,
                "name": "Porcupine",
                "rage": 0.4,
                "hp": 1400,
                "respawn": 2,
                "attack": 16,
                "aggro": 1,
                "charge": 30,
                "frequency": 0.5,
                "damage_type": "physical",
                "skin": "porcupine",
                "range": 20,
                "xp": 1200,
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
                "speed": 10,
                "mp": 70.0
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
                "name": "Target Automatron",
                "rage": 0,
                "armor": 900,
                "stationary": true,
                "hp": 50000,
                "respawn": 0,
                "resistance": 900,
                "aggro": 0,
                "attack": 0,
                "frequency": 0.1,
                "damage_type": "physical",
                "skin": "target_ar900",
                "range": 1,
                "xp": 1000,
                "speed": 12,
                "humanoid": true,
                "mp": 2500.0,
                "orientation": 0
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
                "hit": "explode_p",
                "hp": 6400,
                "resistance": 160,
                "frequency": 0.6,
                "damage_type": "magical",
                "skin": "bbpompom",
                "xp": 6000,
                "speed": 18,
                "name": "Pom Pom",
                "rage": 0,
                "respawn": 4,
                "range": 280,
                "attack": 320,
                "aggro": 0.2,
                "mp": 320.0
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
                        15
                    ]
                ],
                "hp": 720,
                "frequency": 0.6,
                "damage_type": "physical",
                "skin": "snake",
                "xp": 960,
                "speed": 12,
                "name": "Snake",
                "rage": 0,
                "respawn": 3,
                "range": 20,
                "attack": 24,
                "aggro": 0,
                "mp": 36.0
            },
            "target_a750": {
                "orientation": 0,
                "hp": 50000,
                "humanoid": true,
                "frequency": 0.1,
                "damage_type": "physical",
                "skin": "target_a750",
                "xp": 1000,
                "speed": 12,
                "name": "Target Automatron",
                "rage": 0,
                "armor": 750,
                "respawn": 0,
                "range": 1,
                "attack": 0,
                "aggro": 0,
                "mp": 2500.0,
                "stationary": true
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
                "hp": 2400,
                "frequency": 0.7,
                "damage_type": "physical",
                "skin": "bat",
                "xp": 2000,
                "speed": 24,
                "name": "Bat",
                "rage": 0,
                "respawn": 12,
                "range": 35,
                "attack": 50,
                "aggro": 0.3,
                "mp": 120.0
            },
            "crabx": {
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
                "hp": 4200,
                "frequency": 0.3,
                "damage_type": "physical",
                "skin": "crabx",
                "xp": 3600,
                "speed": 8,
                "name": "Huge Crab",
                "rage": 0,
                "respawn": 4,
                "range": 15,
                "charge": 30,
                "aggro": 0.5,
                "mp": 210.0,
                "attack": 240
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
                "hp": 24000,
                "frequency": 0.8,
                "damage_type": "physical",
                "skin": "xscorpion",
                "xp": 27200,
                "speed": 24,
                "name": "Scorpion",
                "rage": 0,
                "respawn": 6,
                "range": 32,
                "attack": 720,
                "aggro": 0.3,
                "mp": 1200.0
            },
            "target_ar500red": {
                "abilities": {
                    "self_healing": {
                        "heal": 100000,
                        "cooldown": 10000
                    }
                },
                "orientation": 1,
                "resistance": 500,
                "frequency": 0.1,
                "damage_type": "physical",
                "skin": "target_ar500red",
                "xp": 1000,
                "speed": 12,
                "evasion": 50,
                "armor": 500,
                "humanoid": true,
                "attack": 0,
                "dreturn": 50,
                "hp": 500000,
                "reflection": 50,
                "name": "Target Automatron",
                "rage": 0,
                "respawn": 0,
                "range": 1,
                "aggro": 0,
                "mp": 25000.0,
                "stationary": true
            },
            "felemental": {
                "hp": 80000,
                "frequency": 1.2,
                "damage_type": "physical",
                "skin": "felemental",
                "xp": 10,
                "speed": 20,
                "name": "Fire Elemental",
                "evasion": 80,
                "rage": 0,
                "respawn": 1,
                "range": 80,
                "attack": 1800,
                "aggro": 0.2,
                "mp": 4000.0
            },
            "nelemental": {
                "hp": 80000,
                "frequency": 1.2,
                "damage_type": "physical",
                "skin": "nelemental",
                "xp": 10,
                "speed": 20,
                "name": "Nature Elemental",
                "evasion": 80,
                "rage": 0,
                "respawn": 1,
                "range": 80,
                "attack": 1800,
                "aggro": 0.2,
                "mp": 4000.0
            },
            "puppy4": {
                "aa": 1,
                "cute": true,
                "hp": 100,
                "frequency": 0.4,
                "damage_type": "physical",
                "skin": "puppy4",
                "xp": -500,
                "speed": 16,
                "name": "Puppy",
                "rage": 0,
                "respawn": 6000,
                "range": 15,
                "charge": 12,
                "aggro": 0,
                "mp": 5.0,
                "attack": 5
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
                "hp": 1800,
                "frequency": 1,
                "damage_type": "physical",
                "skin": "spider",
                "xp": 1200,
                "speed": 24,
                "name": "Spider",
                "rage": 0,
                "respawn": 14,
                "range": 32,
                "attack": 80,
                "aggro": 0.3,
                "mp": 90.0
            },
            "chestm": {
                "hit": "explode_p",
                "hp": 6400,
                "resistance": 160,
                "frequency": 0.6,
                "damage_type": "magical",
                "skin": "chestm",
                "xp": 6000,
                "speed": 4,
                "hide": true,
                "name": "Angry Chest",
                "rage": 0,
                "respawn": 4,
                "range": 280,
                "attack": 320,
                "aggro": 0.2,
                "mp": 320.0
            },
            "puppy3": {
                "aa": 1,
                "cute": true,
                "hp": 100,
                "frequency": 0.4,
                "damage_type": "physical",
                "skin": "puppy3",
                "xp": -500,
                "speed": 16,
                "name": "Puppy",
                "rage": 0,
                "pet": {
                    "courage": [
                        80,
                        100
                    ],
                    "passion": [
                        50,
                        100
                    ],
                    "exponential": true,
                    "level": {
                        "evasion": 5,
                        "armor": 20,
                        "hp": 300,
                        "attack": 40,
                        "resistance": 30,
                        "charge": 3,
                        "speed": 2
                    },
                    "xp": 1000,
                    "brightness": 0,
                    "chatter": [
                        20,
                        100
                    ],
                    "obedience": [
                        0,
                        50
                    ],
                    "aggression": [
                        10,
                        100
                    ]
                },
                "respawn": 6000,
                "range": 15,
                "charge": 12,
                "aggro": 0,
                "mp": 5.0,
                "attack": 5
            },
            "vbat": {
                "aa": 1,
                "hp": 156000,
                "frequency": 1.56,
                "damage_type": "physical",
                "skin": "vbat",
                "xp": 720000,
                "speed": 24,
                "name": "Vampireling",
                "rage": 0.1,
                "respawn": -1,
                "range": 35,
                "charge": 84,
                "aggro": 0.3,
                "lucrativeness": 17,
                "attack": 1240,
                "mp": 7800.0
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
                "hp": 1000,
                "frequency": 0.5,
                "damage_type": "physical",
                "skin": "croc",
                "xp": 900,
                "speed": 10,
                "name": "Croc",
                "rage": 1,
                "respawn": 6,
                "range": 15,
                "attack": 48,
                "aggro": 0.2,
                "mp": 50.0
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
                "hp": 3200,
                "frequency": 0.8,
                "damage_type": "physical",
                "skin": "gscorpion",
                "xp": 4800,
                "speed": 24,
                "name": "Scorpion",
                "rage": 0,
                "respawn": 6,
                "range": 32,
                "attack": 120,
                "aggro": 0.3,
                "mp": 160.0
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
                "hp": 100,
                "frequency": 0.4,
                "damage_type": "physical",
                "skin": "goo",
                "xp": 100,
                "speed": 6,
                "name": "Goo",
                "rage": 0,
                "respawn": 1,
                "range": 15,
                "charge": 12,
                "aggro": 0,
                "mp": 5.0,
                "attack": 5
            },
            "mummy": {
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
                "name": "Mummy",
                "rage": 100,
                "hp": 12000,
                "respawn": 24,
                "attack": 420,
                "aggro": 100,
                "difficulty": 2,
                "charge": 96,
                "frequency": 1.2,
                "damage_type": "physical",
                "skin": "mummy",
                "range": 48,
                "xp": 16000,
                "speed": 16,
                "mp": 600.0
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
                "hp": 86000,
                "frequency": 1.2,
                "damage_type": "physical",
                "skin": "dknight2",
                "xp": 72000,
                "speed": 28,
                "hide": true,
                "name": "Dark Knight",
                "rage": 0,
                "armor": 200,
                "respawn": 40,
                "range": 32,
                "attack": 2275,
                "aggro": 0.3,
                "mp": 4300.0
            },
            "pinkgoo": {
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
                "1hp": true,
                "name": "Love Goo",
                "rage": 0,
                "hp": 40,
                "respawn": 3600,
                "range": 20,
                "aggro": 0,
                "immune": true,
                "attack": 100,
                "frequency": 1,
                "damage_type": "physical",
                "cooperative": true,
                "skin": "pinkgoo",
                "xp": 12000,
                "avoidance": 98.0,
                "speed": 8,
                "special": true,
                "mp": 2.0
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
                "hp": 600,
                "frequency": 0.6,
                "damage_type": "physical",
                "skin": "squigtoad",
                "xp": 2400,
                "speed": 16,
                "name": "Squigtoad",
                "rage": 0,
                "respawn": 120,
                "range": 20,
                "attack": 24,
                "aggro": 0,
                "mp": 30.0
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
                "hit": "explode_p",
                "name": "Pom Pom",
                "rage": 0,
                "hp": 64000,
                "respawn": 4,
                "resistance": 480,
                "range": 300,
                "aggro": 0.2,
                "difficulty": 1.2,
                "attack": 920,
                "frequency": 1.32,
                "damage_type": "physical",
                "skin": "pppompom",
                "xp": 62400,
                "speed": 18,
                "poisonous": true,
                "mp": 3200.0
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
                "prefix": "",
                "hit": "explode_c",
                "name": "Dracul",
                "rage": 0,
                "hp": 240000,
                "respawn": 1080,
                "resistance": 150,
                "range": 120,
                "aggro": 0.05,
                "attack": 245,
                "frequency": 1.2,
                "rbuff": "mlifesteal",
                "damage_type": "magical",
                "skin": "mvampire",
                "xp": 200000,
                "speed": 40,
                "humanoid": true,
                "mp": 12000.0
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
                        15
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
                "name": "Jr.",
                "rage": 1,
                "hp": 3200,
                "respawn": 25920,
                "resistance": 400,
                "attack": 10,
                "aggro": 1,
                "difficulty": 2,
                "charge": 90,
                "frequency": 20,
                "damage_type": "magical",
                "evasion": 80,
                "skin": "jr",
                "range": 30,
                "xp": 80000,
                "speed": 40,
                "mp": 160.0
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
                "hp": 640000,
                "frequency": 0.8,
                "damage_type": "physical",
                "skin": "stompy",
                "xp": 600000,
                "speed": 40,
                "name": "Stompy",
                "rage": 0,
                "respawn": 2160,
                "range": 64,
                "charge": 80,
                "aggro": 0.2,
                "mp": 32000.0,
                "attack": 3600
            },
            "d_wiz": {
                "abilities": {
                    "self_healing": {
                        "heal": 4800,
                        "cooldown": 2000
                    }
                },
                "name": "Dark Wizard",
                "rage": 0,
                "armor": 560,
                "hp": 100000,
                "respawn": 6000,
                "resistance": 920,
                "attack": 5200,
                "aggro": 1,
                "charge": 90,
                "frequency": 2,
                "damage_type": "magical",
                "skin": "shadow",
                "range": 240,
                "xp": 10000,
                "speed": 12,
                "slots": {
                    "mainhand": {
                        "name": "oozingterror",
                        "level": 13
                    }
                },
                "mp": 5000.0,
                "unlist": true
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
                "hp": 720,
                "frequency": 0.6,
                "damage_type": "physical",
                "skin": "osnake",
                "xp": 1600,
                "speed": 12,
                "name": "Snake",
                "rage": 0,
                "respawn": 60,
                "range": 20,
                "attack": 24,
                "aggro": 0,
                "mp": 36.0
            },
            "target_r750": {
                "abilities": {
                    "portal": {
                        "cooldown": 0
                    }
                },
                "name": "Target Automatron",
                "rage": 0,
                "stationary": true,
                "hp": 50000,
                "respawn": 0,
                "resistance": 750,
                "aggro": 0,
                "attack": 0,
                "frequency": 0.1,
                "damage_type": "physical",
                "skin": "target_r750",
                "range": 1,
                "xp": 1000,
                "speed": 36,
                "humanoid": true,
                "mp": 2500.0,
                "orientation": 0
            },
            "dragold": {
                "abilities": {
                    "multi_burn": {
                        "cooldown": 24000,
                        "damage": 4000
                    }
                },
                "resistance": 320,
                "frequency": 1,
                "damage_type": "magical",
                "cooperative": true,
                "skin": "dragold",
                "xp": 12000000,
                "speed": 22,
                "special": true,
                "armor": 240,
                "attack": 800,
                "announce": "#D7B717",
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
                "hp": 12800000,
                "name": "Dragold",
                "rage": 0,
                "respawn": 10800,
                "range": 320,
                "aggro": 0,
                "mp": 640000.0,
                "projectile": "fireball"
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
                "hp": 2000,
                "frequency": 0.5,
                "damage_type": "physical",
                "skin": "tortoise",
                "xp": 1600,
                "speed": 10,
                "name": "Tortoise",
                "rage": 0,
                "armor": 200,
                "respawn": 12,
                "range": 15,
                "attack": 36,
                "aggro": 0,
                "mp": 100.0
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
                "name": "White Wolf",
                "rage": 1,
                "armor": 300,
                "hp": 24000,
                "respawn": 12,
                "resistance": 200,
                "attack": 480,
                "aggro": 1,
                "charge": 152,
                "frequency": 0.8,
                "damage_type": "physical",
                "skin": "wolf",
                "range": 20,
                "xp": 24800,
                "speed": 24,
                "mp": 1200.0
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
                "name": "Mr. Green",
                "rage": 1,
                "hp": 36000000,
                "respawn": 4320,
                "resistance": 900,
                "attack": 1200,
                "aggro": 1,
                "charge": 90,
                "frequency": 1.6,
                "damage_type": "physical",
                "cooperative": true,
                "announce": "#256943",
                "skin": "mrgreen",
                "range": 620,
                "xp": 48000000,
                "speed": 40,
                "slots": {
                    "mainhand": {
                        "name": "gbow",
                        "level": 10
                    }
                },
                "mp": 1800000.0,
                "apiercing": 320
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
                "hp": 80000,
                "frequency": 1.2,
                "damage_type": "physical",
                "skin": "ligerx",
                "xp": 120000,
                "speed": 30,
                "charge": 60,
                "name": "Liger X",
                "rage": 0,
                "respawn": 960,
                "range": 80,
                "attack": 1800,
                "aggro": 0.2,
                "mp": 4000.0,
                "explanation": "A genetically modified and cybernetically enhanced beast!"
            },
            "fieldgen0": {
                "aa": 1,
                "abilities": {
                    "degen": {
                        "amount": 60,
                        "cooldown": 200
                    },
                    "dampening_aura": {
                        "cooldown": 180,
                        "radius": 300,
                        "aura": true,
                        "condition": "dampened"
                    }
                },
                "hide": true,
                "name": "Field Generator",
                "rage": 0,
                "armor": 2200,
                "hp": 6400,
                "respawn": -1,
                "resistance": 1600,
                "aggro": 0,
                "attack": 0,
                "frequency": 0,
                "trap": true,
                "skin": "fieldgen0",
                "range": 0,
                "xp": 0,
                "speed": 0,
                "mp": 320.0,
                "damage_type": "pure"
            },
            "kitty3": {
                "aa": 1,
                "cute": true,
                "hp": 100,
                "frequency": 0.4,
                "damage_type": "physical",
                "skin": "kitty3",
                "xp": -500,
                "speed": 14,
                "name": "Kitty",
                "rage": 0,
                "respawn": 6000,
                "range": 15,
                "charge": 12,
                "aggro": 0,
                "mp": 5.0,
                "attack": 5
            },
            "eelemental": {
                "hp": 80000,
                "frequency": 1.2,
                "damage_type": "physical",
                "skin": "eelemental",
                "xp": 10,
                "speed": 20,
                "name": "Earth Elemental",
                "evasion": 80,
                "rage": 0,
                "respawn": 1,
                "range": 80,
                "attack": 1800,
                "aggro": 0.2,
                "mp": 4000.0
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
                        30
                    ]
                ],
                "hp": 12000,
                "frequency": 0.7,
                "damage_type": "physical",
                "skin": "boar",
                "xp": 10800,
                "speed": 20,
                "name": "Wild Boar",
                "rage": 1,
                "armor": 100,
                "respawn": 10,
                "range": 24,
                "charge": 40,
                "aggro": 1,
                "mp": 600.0,
                "attack": 240
            },
            "franky": {
                "aa": 1,
                "humanoid": true,
                "frequency": 1.6,
                "damage_type": "magical",
                "cooperative": true,
                "skin": "franky",
                "xp": 200000000,
                "speed": 48,
                "special": true,
                "charge": 64,
                "immune": true,
                "attack": 2910,
                "announce": "#9D99EF",
                "spawns": [
                    [
                        200,
                        "nerfedmummy"
                    ]
                ],
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
                "hit": "explode_c",
                "hp": 120000000,
                "name": "Franky",
                "rage": 0,
                "respawn": -1,
                "range": 948,
                "aggro": 1,
                "mp": 6000000.0
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
                "hp": 1200,
                "frequency": 0.6,
                "damage_type": "physical",
                "skin": "poisio",
                "xp": 1300,
                "speed": 24,
                "name": "Poisio",
                "rage": 0.2,
                "respawn": 6,
                "range": 20,
                "attack": 240,
                "aggro": 1,
                "mp": 60.0
            },
            "kitty4": {
                "aa": 1,
                "cute": true,
                "hp": 100,
                "frequency": 0.4,
                "damage_type": "physical",
                "skin": "kitty4",
                "xp": -500,
                "speed": 14,
                "name": "Kitty",
                "rage": 0,
                "respawn": 6000,
                "range": 15,
                "charge": 12,
                "aggro": 0,
                "mp": 5.0,
                "attack": 5
            },
            "kitty1": {
                "aa": 1,
                "cute": true,
                "hp": 100,
                "frequency": 0.4,
                "damage_type": "physical",
                "skin": "kitty1",
                "xp": -500,
                "speed": 14,
                "name": "Kitty",
                "rage": 0,
                "respawn": 6000,
                "range": 15,
                "charge": 12,
                "aggro": 0,
                "mp": 5.0,
                "attack": 5
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
                "hp": 600,
                "frequency": 0.5,
                "damage_type": "physical",
                "skin": "frog",
                "xp": 7200,
                "speed": 10,
                "name": "Froggie",
                "evasion": 99,
                "rage": 0,
                "respawn": 960,
                "range": 15,
                "attack": 24,
                "aggro": 0,
                "mp": 30.0
            },
            "kitty2": {
                "aa": 1,
                "cute": true,
                "hp": 100,
                "frequency": 0.4,
                "damage_type": "physical",
                "skin": "kitty2",
                "xp": -500,
                "speed": 14,
                "name": "Kitty",
                "rage": 0,
                "respawn": 6000,
                "range": 15,
                "charge": 12,
                "aggro": 0,
                "mp": 5.0,
                "attack": 5
            },
            "crab": {
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
                "hp": 200,
                "frequency": 0.4,
                "damage_type": "physical",
                "skin": "crab",
                "xp": 300,
                "speed": 6,
                "size": 0.5,
                "name": "Tiny Crab",
                "rage": 0,
                "respawn": 0.64,
                "range": 15,
                "attack": 24,
                "aggro": 0.2,
                "mp": 10.0
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
                "hp": 120000,
                "resistance": 190,
                "frequency": 1.2,
                "damage_type": "physical",
                "skin": "plantoid",
                "xp": 96000,
                "speed": 20,
                "name": "Sprawling",
                "rage": 0,
                "armor": 160,
                "respawn": 18,
                "range": 80,
                "attack": 640,
                "aggro": 0.2,
                "mp": 6000.0
            },
            "hen": {
                "aa": 1,
                "cute": true,
                "hp": 60,
                "frequency": 1.5,
                "damage_type": "physical",
                "skin": "hen",
                "xp": 10,
                "speed": 10,
                "name": "Chicken",
                "rage": 0.2,
                "respawn": 200,
                "range": 20,
                "attack": 48,
                "aggro": 1,
                "mp": 3.0,
                "achievements": [
                    [
                        1000,
                        "stat",
                        "gold",
                        2
                    ]
                ]
            },
            "redfairy": {
                "aa": 1,
                "achievements": [
                    [
                        10,
                        "stat",
                        "gold",
                        2
                    ]
                ],
                "abilities": {
                    "heal": {
                        "heal": 20000,
                        "cooldown": 1000
                    }
                },
                "hit": "explode_c",
                "hp": 4800000,
                "frequency": 100,
                "damage_type": "magical",
                "skin": "redfairy",
                "xp": 2000000,
                "speed": 10,
                "name": "Fairy",
                "rage": 0,
                "respawn": 0,
                "range": 999999,
                "attack": 4000,
                "aggro": 0,
                "mp": 240000.0
            },
            "wabbit": {
                "resistance": 180,
                "frequency": 1,
                "damage_type": "physical",
                "cooperative": true,
                "skin": "wabbit",
                "operator": true,
                "xp": 1000000,
                "speed": 60,
                "special": true,
                "armor": 180,
                "range": 20,
                "immune": true,
                "attack": 60,
                "avoidance": 96.0,
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
                "hp": 32000,
                "name": "Wabbit",
                "rage": 0,
                "respawn": 3600,
                "s": {
                    "fullguard": {
                        "ms": 300000
                    }
                },
                "aggro": 0,
                "rbuff": "easterluck",
                "mp": 1600.0
            },
            "target_r500": {
                "name": "Target Automatron",
                "evasion": 50,
                "rage": 0,
                "stationary": true,
                "hp": 50000,
                "respawn": 0,
                "resistance": 500,
                "aggro": 0,
                "attack": 0,
                "frequency": 0.1,
                "damage_type": "physical",
                "skin": "target_r500",
                "range": 1,
                "xp": 1000,
                "speed": 12,
                "humanoid": true,
                "mp": 2500.0,
                "orientation": 0
            },
            "xmagen": {
                "aa": 1,
                "abilities": {
                    "mtangle": {
                        "cooldown": 3200
                    },
                    "self_healing": {
                        "heal": 4800,
                        "cooldown": 2000
                    }
                },
                "frequency": 1.66,
                "damage_type": "magical",
                "skin": "xmagen",
                "xp": 21600000,
                "speed": 24,
                "slots": {
                    "mainhand": {
                        "name": "mushroomstaff",
                        "level": 13
                    }
                },
                "hide": true,
                "respawn_as": "xmagex",
                "poisonous": true,
                "charge": 84,
                "immune": true,
                "attack": 2440,
                "lucrativeness": 0,
                "hp": 6400000,
                "reflection": 30,
                "name": "Mage",
                "rage": 10,
                "respawn": 0,
                "range": 135,
                "aggro": 10,
                "mp": 320000.0
            },
            "oneeye": {
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
                "abilities": {
                    "stone": {
                        "cooldown": 6400
                    }
                },
                "name": "One Eye",
                "rage": 0,
                "armor": 160,
                "hp": 420000,
                "respawn": 4,
                "resistance": 160,
                "aggro": 1,
                "difficulty": 1.2,
                "attack": 480,
                "frequency": 3,
                "damage_type": "physical",
                "skin": "oneeye",
                "range": 40,
                "xp": 582000,
                "speed": 24,
                "mp": 21000.0
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
                "dreturn": 30,
                "hp": 900,
                "frequency": 0.5,
                "damage_type": "physical",
                "skin": "armadillo",
                "xp": 800,
                "speed": 14,
                "name": "Armadillo",
                "rage": 0,
                "respawn": 3,
                "range": 20,
                "attack": 20,
                "aggro": 0,
                "mp": 45.0
            },
            "puppy2": {
                "aa": 1,
                "cute": true,
                "hp": 100,
                "frequency": 0.4,
                "damage_type": "physical",
                "skin": "puppy2",
                "xp": -500,
                "speed": 16,
                "name": "Puppy",
                "rage": 0,
                "pet": {
                    "courage": [
                        80,
                        100
                    ],
                    "passion": [
                        50,
                        100
                    ],
                    "exponential": true,
                    "level": {
                        "evasion": 5,
                        "armor": 20,
                        "hp": 300,
                        "attack": 40,
                        "resistance": 30,
                        "charge": 3,
                        "speed": 2
                    },
                    "xp": 1000,
                    "brightness": 0,
                    "chatter": [
                        20,
                        100
                    ],
                    "obedience": [
                        0,
                        50
                    ],
                    "aggression": [
                        10,
                        100
                    ]
                },
                "respawn": 6000,
                "range": 15,
                "charge": 12,
                "aggro": 0,
                "mp": 5.0,
                "attack": 5
            },
            "xmagex": {
                "aa": 1,
                "abilities": {
                    "anger": {
                        "cooldown": 8000,
                        "radius": 300
                    },
                    "warpstomp": {
                        "stun": 1500,
                        "cooldown": 4000,
                        "radius": 160
                    }
                },
                "name": "Dark Mage",
                "rage": 10,
                "hp": 7200000,
                "respawn": -1,
                "attack": 12640,
                "aggro": 10,
                "immune": true,
                "charge": 84,
                "frequency": 1.56,
                "lucrativeness": 120,
                "skin": "xmagex",
                "range": 135,
                "xp": 28800000,
                "speed": 24,
                "slots": {
                    "mainhand": {
                        "name": "oozingterror",
                        "level": 13
                    }
                },
                "mp": 360000.0,
                "damage_type": "magical"
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
                "hit": "explode_c",
                "hp": 4000000,
                "frequency": 100,
                "damage_type": "magical",
                "skin": "bluefairy",
                "xp": 2000000,
                "speed": 10,
                "name": "Fairy",
                "rage": 0,
                "respawn": 0,
                "range": 999999,
                "attack": 2400,
                "aggro": 0,
                "mp": 200000.0
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
                "name": "Sneaky Goblin",
                "rage": 0,
                "mp": 2.0,
                "hp": 50,
                "respawn": -1,
                "range": 2,
                "aggro": 0,
                "immune": true,
                "attack": 0,
                "frequency": 1,
                "damage_type": "physical",
                "evasion": 99.95,
                "skin": "goblin",
                "xp": 640000,
                "speed": 30,
                "special": true,
                "reflection": 99.95
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
                "prefix": "",
                "hit": "explode_c",
                "name": "Ms. Dracul",
                "rage": 0,
                "hp": 240000,
                "respawn": 1440,
                "resistance": 300,
                "range": 120,
                "aggro": 0.05,
                "attack": 875,
                "frequency": 1.2,
                "rbuff": "mlifesteal",
                "damage_type": "magical",
                "skin": "fvampire",
                "xp": 200000,
                "speed": 40,
                "humanoid": true,
                "mp": 12000.0
            },
            "puppy1": {
                "aa": 1,
                "cute": true,
                "hp": 100,
                "frequency": 0.4,
                "damage_type": "physical",
                "skin": "puppy1",
                "xp": -500,
                "speed": 16,
                "name": "Puppy",
                "rage": 0,
                "pet": {
                    "courage": [
                        80,
                        100
                    ],
                    "passion": [
                        50,
                        100
                    ],
                    "exponential": true,
                    "level": {
                        "evasion": 5,
                        "armor": 20,
                        "hp": 300,
                        "attack": 40,
                        "resistance": 30,
                        "charge": 3,
                        "speed": 2
                    },
                    "xp": 1000,
                    "brightness": 0,
                    "chatter": [
                        20,
                        100
                    ],
                    "obedience": [
                        0,
                        50
                    ],
                    "aggression": [
                        10,
                        100
                    ]
                },
                "respawn": 6000,
                "range": 15,
                "charge": 12,
                "aggro": 0,
                "mp": 5.0,
                "attack": 5
            },
            "welemental": {
                "hp": 80000,
                "frequency": 1.2,
                "damage_type": "physical",
                "skin": "welemental",
                "xp": 10,
                "speed": 20,
                "name": "Water Elemental",
                "evasion": 80,
                "rage": 0,
                "respawn": 1,
                "range": 80,
                "attack": 1800,
                "aggro": 0.2,
                "mp": 4000.0
            },
            "target": {
                "orientation": 2,
                "hp": 50000,
                "humanoid": true,
                "frequency": 0.1,
                "damage_type": "physical",
                "skin": "target",
                "xp": 1000,
                "speed": 12,
                "name": "Target Automatron",
                "rage": 0,
                "respawn": 0,
                "range": 1,
                "attack": 0,
                "aggro": 0,
                "mp": 2500.0,
                "stationary": true
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
                "hit": "explode_p",
                "name": "Water Spirit",
                "rage": 0,
                "hp": 3600,
                "respawn": 2,
                "range": 100,
                "aggro": 0.2,
                "attack": 120,
                "frequency": 0.7,
                "damage_type": "magical",
                "evasion": 10,
                "skin": "iceroamer",
                "rpiercing": 320,
                "xp": 4200,
                "speed": 20,
                "mp": 180.0,
                "reflection": 8
            },
            "grinch": {
                "abilities": {
                    "portal": {
                        "cooldown": 0
                    },
                    "self_healing": {
                        "heal": 8008,
                        "cooldown": 8008
                    }
                },
                "global": true,
                "resistance": 150,
                "prefix": "",
                "frequency": 0.5,
                "damage_type": "magical",
                "cooperative": true,
                "skin": "grinch",
                "xp": 12000,
                "speed": 40,
                "slots": {
                    "mainhand": {
                        "name": "ornamentstaff",
                        "level": 13
                    }
                },
                "special": true,
                "humanoid": true,
                "passive": true,
                "attack": 9,
                "announce": "#C82F17",
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
                "goldsteal": 1,
                "hit": "explode_c",
                "hp": 24000000,
                "name": "Grinch",
                "rage": 0,
                "respawn": 43200,
                "range": 120,
                "aggro": 0,
                "mp": 1200000.0
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
                "hp": 300,
                "frequency": 0.5,
                "damage_type": "physical",
                "skin": "bee",
                "xp": 400,
                "speed": 12,
                "name": "Bee",
                "rage": 0.1,
                "respawn": 2,
                "range": 20,
                "attack": 16,
                "aggro": 1,
                "mp": 15.0
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
                        "radius": 300,
                        "pure": true
                    }
                },
                "hide": true,
                "name": "Zapper",
                "rage": 0,
                "armor": 2200,
                "hp": 6400,
                "respawn": -1,
                "resistance": 1600,
                "aggro": 0,
                "attack": 0,
                "frequency": 0,
                "trap": true,
                "skin": "zapper0",
                "range": 0,
                "xp": 0,
                "speed": 0,
                "mp": 320.0,
                "damage_type": "pure"
            },
            "pinkgoblin": {
                "prefix": "",
                "abilities": {
                    "self_healing": {
                        "heal": 96000,
                        "cooldown": 4000
                    }
                },
                "hit": "explode_p",
                "name": "Pink Goblin",
                "rage": 0,
                "armor": 200,
                "hp": 420000,
                "respawn": 40,
                "resistance": 350,
                "range": 240,
                "aggro": 0,
                "difficulty": 2,
                "attack": 2400,
                "frequency": 0.4,
                "damage_type": "magical",
                "skin": "pinkgoblin",
                "xp": 460000,
                "speed": 40,
                "slots": {
                    "mainhand": {
                        "name": "pmace",
                        "level": 8
                    }
                },
                "mp": 21000.0
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
                "hit": "explode_p",
                "hp": 500,
                "frequency": 1,
                "damage_type": "magical",
                "skin": "minimush",
                "xp": 600,
                "speed": 12,
                "name": "Pom Pom",
                "rage": 0,
                "respawn": 4,
                "range": 120,
                "attack": 120,
                "aggro": 0.05,
                "mp": 25.0
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
                "hp": 1000,
                "frequency": 0.5,
                "damage_type": "physical",
                "skin": "squig",
                "xp": 600,
                "speed": 10,
                "name": "Squig",
                "rage": 0,
                "respawn": 12,
                "range": 15,
                "attack": 7,
                "aggro": 0,
                "mp": 50.0
            },
            "tinyp": {
                "aa": 1,
                "cute": true,
                "abilities": {
                    "self_healing": {
                        "heal": 1200,
                        "cooldown": 10
                    }
                },
                "frequency": 5,
                "damage_type": "physical",
                "skin": "tinyp",
                "xp": 12000,
                "speed": 24,
                "special": true,
                "immune": true,
                "attack": 240,
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
                "hp": 5600,
                "escapist": true,
                "name": "Fairy",
                "rage": 0,
                "respawn": -1,
                "range": 35,
                "aggro": 0.3,
                "mp": 280.0,
                "roam": true
            },
            "rooster": {
                "aa": 1,
                "cute": true,
                "hp": 60,
                "frequency": 1.5,
                "damage_type": "physical",
                "skin": "rooster",
                "xp": 10,
                "speed": 7,
                "name": "Chicken",
                "rage": 0.2,
                "respawn": 200,
                "range": 20,
                "attack": 48,
                "aggro": 1,
                "mp": 3.0,
                "achievements": [
                    [
                        1000,
                        "stat",
                        "for",
                        1
                    ]
                ]
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
                "hp": 820,
                "frequency": 0.5,
                "damage_type": "physical",
                "skin": "rat",
                "xp": 640,
                "speed": 12,
                "name": "Rat",
                "rage": 1,
                "respawn": 2,
                "range": 40,
                "attack": 80,
                "aggro": 1,
                "mp": 41.0
            },
            "a7": {
                "aa": 1,
                "abilities": {
                    "mlight": {
                        "cooldown": 3000
                    },
                    "dampening_aura": {
                        "cooldown": 180,
                        "radius": 300,
                        "aura": true,
                        "condition": "dampened"
                    }
                },
                "name": "Lucinda",
                "rage": 1,
                "hp": 720000,
                "respawn": -1,
                "attack": 910,
                "aggro": 1,
                "charge": 72,
                "frequency": 1.2,
                "lucrativeness": 8,
                "roam": true,
                "skin": "a7",
                "range": 135,
                "xp": 1200000,
                "humanoid": true,
                "speed": 32,
                "slots": {
                    "mainhand": {
                        "name": "oozingterror",
                        "level": 10
                    }
                },
                "mp": 36000.0,
                "damage_type": "magical"
            },
            "mole": {
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
                "name": "Mole",
                "rage": 1,
                "hp": 12400,
                "respawn": 6,
                "attack": 480,
                "aggro": 1,
                "charge": 60,
                "frequency": 0.8,
                "damage_type": "physical",
                "skin": "mole",
                "range": 15,
                "xp": 8000,
                "speed": 18,
                "mp": 620.0,
                "apiercing": 320
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
                "prefix": "the",
                "hit": "explode_c",
                "name": "Reindeer",
                "rage": 0,
                "armor": 1200,
                "hp": 12000000,
                "respawn": 3600,
                "resistance": 1200,
                "range": 999999,
                "aggro": 0,
                "attack": 1600,
                "frequency": 10,
                "damage_type": "magical",
                "skin": "rudolph",
                "xp": 2000000,
                "speed": 24,
                "mp": 600000.0
            },
            "xmagefi": {
                "aa": 1,
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
                "frequency": 1.46,
                "damage_type": "magical",
                "skin": "xmagefi",
                "xp": 1440000,
                "speed": 24,
                "slots": {
                    "mainhand": {
                        "name": "firestaff",
                        "level": 13
                    }
                },
                "hide": true,
                "respawn_as": "xmagen",
                "charge": 84,
                "immune": true,
                "attack": 2240,
                "lucrativeness": 0,
                "hp": 5600000,
                "name": "Mage",
                "rage": 10,
                "respawn": 0,
                "range": 135,
                "aggro": 10,
                "mp": 280000.0
            },
            "ent": {
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
                "abilities": {
                    "mtangle": {
                        "cooldown": 3200
                    }
                },
                "name": "Ent",
                "rage": 0,
                "armor": 100,
                "hp": 8000000,
                "respawn": 12,
                "resistance": 100,
                "attack": 3600,
                "aggro": 0.2,
                "charge": 48,
                "frequency": 1.2,
                "damage_type": "physical",
                "skin": "ent",
                "range": 64,
                "xp": 9200000,
                "speed": 12,
                "mp": 400000.0
            },
            "target_a500": {
                "orientation": 0,
                "hp": 50000,
                "humanoid": true,
                "frequency": 0.1,
                "damage_type": "physical",
                "skin": "target_a500",
                "xp": 1000,
                "speed": 12,
                "name": "Target Automatron",
                "rage": 0,
                "armor": 500,
                "respawn": 0,
                "range": 1,
                "attack": 0,
                "aggro": 0,
                "mp": 2500.0,
                "stationary": true
            },
            "xmagefz": {
                "aa": 1,
                "abilities": {
                    "deepfreeze": {
                        "cooldown": 6000,
                        "radius": 300
                    }
                },
                "frequency": 1.26,
                "damage_type": "magical",
                "skin": "xmagefz",
                "xp": 7200000,
                "speed": 24,
                "slots": {
                    "mainhand": {
                        "name": "vstaff",
                        "level": 13
                    }
                },
                "hide": true,
                "respawn_as": "xmagefi",
                "charge": 84,
                "immune": true,
                "attack": 1640,
                "lucrativeness": 0,
                "hp": 4800000,
                "name": "Mage",
                "rage": 10,
                "respawn": 0,
                "range": 135,
                "aggro": 10,
                "mp": 240000.0
            },
            "mechagnome": {
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
                "abilities": {
                    "portal": {
                        "cooldown": 0
                    }
                },
                "name": "Mech-a Gnome",
                "rage": 0,
                "armor": 600,
                "hp": 164000,
                "respawn": 480,
                "resistance": 600,
                "attack": 48,
                "aggro": 0,
                "charge": 120,
                "frequency": 4,
                "damage_type": "physical",
                "skin": "mechagnome",
                "range": 30,
                "xp": 80000,
                "speed": 1,
                "mp": 8200.0
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
                        25
                    ]
                ],
                "name": "Stone Worm",
                "rage": 1,
                "hp": 2200,
                "respawn": 1,
                "attack": 360,
                "aggro": 1,
                "charge": 46,
                "frequency": 0.6,
                "damage_type": "physical",
                "skin": "stoneworm",
                "range": 20,
                "xp": 2400,
                "balance": "Spadar",
                "speed": 12,
                "mp": 110.0,
                "apiercing": 800
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
                "prefix": "the",
                "hit": "explode_a",
                "name": "Phoenix",
                "rage": 0,
                "hp": 160000,
                "respawn": 32,
                "range": 120,
                "aggro": 0.2,
                "attack": 125,
                "frequency": 1.2,
                "damage_type": "magical",
                "cooperative": true,
                "skin": "phoenix",
                "xp": 180000,
                "speed": 50,
                "mp": 8000.0
            },
            "gbluepro": {
                "abilities": {
                    "multi_freeze": {
                        "cooldown": 4000,
                        "damage": 800
                    }
                },
                "hit": "explode_c",
                "name": "Protector of Frost",
                "rage": 0,
                "hp": 3200000,
                "respawn": 300,
                "attack": 9600,
                "aggro": 1,
                "charge": 84,
                "frequency": 1.2,
                "damage_type": "magical",
                "cooperative": true,
                "article": "event-mae",
                "skin": "gbluepro",
                "range": 948,
                "xp": 7200000,
                "speed": 48,
                "slots": {
                    "mainhand": {
                        "name": "froststaff",
                        "level": 12
                    }
                },
                "mp": 160000.0
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
                "hp": 1600,
                "frequency": 0.6,
                "damage_type": "physical",
                "skin": "arcticbee",
                "xp": 1800,
                "speed": 12,
                "name": "Arctic Bee",
                "rage": 0.05,
                "respawn": 1,
                "range": 20,
                "attack": 64,
                "aggro": 1,
                "mp": 80.0
            },
            "ggreenpro": {
                "abilities": {
                    "tangle": {
                        "cooldown": 1600
                    },
                    "self_healing": {
                        "heal": 48000,
                        "cooldown": 2000
                    }
                },
                "hit": "explode_c",
                "name": "Protector of Nature",
                "rage": 0,
                "hp": 1600000,
                "respawn": 3600,
                "attack": 1120,
                "aggro": 1,
                "charge": 64,
                "frequency": 3,
                "damage_type": "physical",
                "skin": "ggreenpro",
                "range": 948,
                "xp": 9600000,
                "speed": 48,
                "slots": {
                    "mainhand": {
                        "name": "woodensword",
                        "level": 12
                    }
                },
                "mp": 80000.0
            },
            "a1": {
                "aa": 1,
                "spawns": [
                    [
                        200,
                        "bat"
                    ]
                ],
                "name": "Spike",
                "rage": 1,
                "hp": 18700000,
                "respawn": -1,
                "attack": 4240,
                "aggro": 1,
                "charge": 67,
                "frequency": 1.2,
                "lucrativeness": 8,
                "roam": true,
                "skin": "a1",
                "range": 147,
                "xp": 32000000,
                "humanoid": true,
                "speed": 32,
                "slots": {
                    "mainhand": {
                        "name": "vstaff",
                        "level": 10
                    }
                },
                "mp": 935000.0,
                "damage_type": "magical"
            },
            "a3": {
                "aa": 1,
                "abilities": {
                    "anger": {
                        "cooldown": 8000,
                        "radius": 300
                    }
                },
                "humanoid": true,
                "frequency": 1.2,
                "damage_type": "physical",
                "skin": "a3",
                "xp": 9600000,
                "speed": 32,
                "slots": {
                    "mainhand": {
                        "name": "vhammer",
                        "level": 10
                    },
                    "offhand": {
                        "name": "vhammer",
                        "level": 10
                    }
                },
                "charge": 80,
                "attack": 1520,
                "lucrativeness": 8,
                "explosion": 20,
                "hp": 342000,
                "name": "Lestat",
                "rage": 1,
                "respawn": -1,
                "range": 35,
                "aggro": 1,
                "mp": 17100.0,
                "roam": true
            },
            "a2": {
                "aa": 1,
                "abilities": {
                    "anger": {
                        "cooldown": 8000,
                        "radius": 300
                    }
                },
                "humanoid": true,
                "frequency": 1.4,
                "damage_type": "physical",
                "skin": "a2",
                "xp": 1200000,
                "speed": 32,
                "slots": {
                    "mainhand": {
                        "name": "vdagger",
                        "level": 9
                    },
                    "offhand": {
                        "name": "vdagger",
                        "level": 10
                    }
                },
                "poisonous": true,
                "charge": 96,
                "attack": 2240,
                "lucrativeness": 8,
                "hp": 420000,
                "name": "Bill",
                "rage": 1,
                "respawn": -1,
                "range": 35,
                "aggro": 1,
                "mp": 21000.0,
                "roam": true
            },
            "a5": {
                "aa": 1,
                "abilities": {
                    "healing": {
                        "heal": 66000,
                        "cooldown": 800
                    }
                },
                "humanoid": true,
                "frequency": 0.3,
                "damage_type": "magical",
                "skin": "a5",
                "xp": 1200000,
                "speed": 32,
                "supporter": true,
                "charge": 76,
                "attack": 240,
                "lucrativeness": 8,
                "slots": {
                    "mainhand": {
                        "name": "lmace",
                        "level": 10
                    }
                },
                "hp": 230000,
                "name": "Elena",
                "rage": 1,
                "respawn": -1,
                "range": 135,
                "aggro": 1,
                "mp": 11500.0,
                "roam": true
            },
            "a4": {
                "aa": 1,
                "spawns": [
                    [
                        1600,
                        "zapper0"
                    ]
                ],
                "name": "Orlok",
                "rage": 1,
                "hp": 560000,
                "respawn": -1,
                "attack": 720,
                "aggro": 1,
                "charge": 86,
                "frequency": 1.5,
                "lucrativeness": 8,
                "roam": true,
                "skin": "a4",
                "range": 35,
                "xp": 1600000,
                "humanoid": true,
                "speed": 42,
                "slots": {
                    "mainhand": {
                        "name": "scythe",
                        "level": 9
                    }
                },
                "mp": 28000.0,
                "damage_type": "physical"
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
                "name": "Boo Boo",
                "rage": 100,
                "hp": 8000,
                "respawn": 48,
                "attack": 220,
                "aggro": 100,
                "difficulty": 1.25,
                "charge": 96,
                "frequency": 1.2,
                "damage_type": "pure",
                "skin": "booboo",
                "range": 420,
                "xp": 12000,
                "speed": 16,
                "mp": 400.0
            },
            "a6": {
                "aa": 1,
                "abilities": {
                    "weakness_aura": {
                        "cooldown": 4000,
                        "radius": 100,
                        "aura": true,
                        "condition": "weakness"
                    }
                },
                "name": "Marceline",
                "rage": 1,
                "hp": 320000,
                "respawn": -1,
                "attack": 8960,
                "aggro": 1,
                "charge": 86,
                "frequency": 2,
                "lucrativeness": 8,
                "roam": true,
                "skin": "a6",
                "range": 35,
                "xp": 880000,
                "humanoid": true,
                "speed": 32,
                "slots": {
                    "mainhand": {
                        "name": "scythe",
                        "level": 9
                    }
                },
                "mp": 16000.0,
                "damage_type": "physical"
            },
            "a8": {
                "aa": 1,
                "abilities": {
                    "curse_aura": {
                        "cooldown": 4000,
                        "radius": 300,
                        "aura": true,
                        "condition": "cursed"
                    }
                },
                "name": "Angel",
                "rage": 1,
                "hp": 560000,
                "respawn": -1,
                "attack": 2680,
                "aggro": 1,
                "charge": 76,
                "frequency": 4,
                "lucrativeness": 8,
                "roam": true,
                "skin": "a8",
                "range": 35,
                "xp": 1200000,
                "humanoid": true,
                "speed": 32,
                "slots": {
                    "mainhand": {
                        "name": "pinkie",
                        "level": 10
                    },
                    "offhand": {
                        "name": "pinkie",
                        "level": 10
                    }
                },
                "mp": 28000.0,
                "damage_type": "physical"
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
                "name": "Green Jr.",
                "rage": 1,
                "rpiercing": 420,
                "hp": 4200,
                "respawn": 51840,
                "resistance": 400,
                "attack": 30,
                "aggro": 1,
                "difficulty": 2,
                "charge": 120,
                "frequency": 20,
                "damage_type": "physical",
                "evasion": 40,
                "skin": "greenjr",
                "range": 80,
                "xp": 120000,
                "speed": 60,
                "mp": 210.0,
                "reflection": 4
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
                        30
                    ]
                ],
                "hit": "explode_p",
                "hp": 12000,
                "resistance": 400,
                "frequency": 1,
                "damage_type": "magical",
                "skin": "ghost",
                "xp": 16000,
                "speed": 12,
                "name": "Ghost",
                "evasion": 20,
                "rage": 0,
                "respawn": 4,
                "range": 120,
                "attack": 200,
                "aggro": 0.05,
                "mp": 600.0
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
                "hp": 1200,
                "frequency": 1.2,
                "damage_type": "physical",
                "skin": "cgoo",
                "xp": 4800,
                "speed": 9,
                "name": "Irradiated Goo",
                "rage": 0,
                "respawn": 48,
                "range": 64,
                "attack": 320,
                "aggro": 0.1,
                "lucrativeness": 6,
                "mp": 60.0
            },
            "bigbird": {
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
                "hp": 32000,
                "frequency": 0.8,
                "damage_type": "physical",
                "skin": "bigbird",
                "xp": 30000,
                "speed": 24,
                "name": "Hawk",
                "evasion": 20,
                "rage": 0.4,
                "respawn": 12,
                "range": 20,
                "charge": 52,
                "aggro": 1,
                "mp": 1600.0,
                "attack": 480
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
                "hp": 2400,
                "frequency": 0.7,
                "damage_type": "physical",
                "skin": "goldenbat",
                "xp": 2000,
                "speed": 24,
                "name": "Golden Bat",
                "rage": 0,
                "respawn": -1,
                "range": 35,
                "attack": 50,
                "aggro": 0.3,
                "mp": 120.0,
                "explanation": "Spawns in Cave of Darkness around every 80,000 Bat spawns"
            },
            "gpurplepro": {
                "abilities": {
                    "putrid": {
                        "curse": true,
                        "poison": true
                    }
                },
                "hit": "explode_c",
                "name": "Protector of Darkness",
                "rage": 0,
                "hp": 4300000,
                "respawn": 420,
                "attack": 4893,
                "aggro": 1,
                "charge": 84,
                "frequency": 2,
                "damage_type": "magical",
                "cooperative": true,
                "article": "event-mae",
                "skin": "gpurplepro",
                "range": 948,
                "xp": 8200000,
                "speed": 48,
                "slots": {
                    "mainhand": {
                        "name": "oozingterror",
                        "level": 12
                    }
                },
                "mp": 215000.0
            }
        }
    }
    expect(G_monsters).not.toBe(undefined)
})