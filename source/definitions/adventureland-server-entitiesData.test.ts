import { EntitiesData } from "./adventureland-server"

/**
 * The following is from socket events received 2021-05-22
 * It is used to confirm type correctness
 */

test("EntitiesData type validation", async () => {
    const players: EntitiesData = {
        "players": [
            {
                "hp": 7862,
                "max_hp": 8625,
                "mp": 835,
                "max_mp": 835,
                "xp": 22761603,
                "attack": 631,
                "frequency": 0.9237739547038327,
                "speed": 77,
                "range": 34,
                "armor": 447,
                "resistance": 185,
                "level": 59,
                "party": "ShadowKnight",
                "rip": false,
                "code": true,
                "afk": true,
                "target": "5459683",
                "focus": null,
                "s": {
                    "mluck": {
                        "ms": 1503221,
                        "f": "Moneybaggers",
                        "strong": true
                    }
                },
                "c": {},
                "q": {},
                "age": 307,
                "pdps": 94372.45815439985,
                "id": "ShadowKnight",
                "x": 0,
                "y": 0,
                "moving": false,
                "going_x": 0,
                "going_y": 0,
                "abs": false,
                "move_num": 50933532,
                "angle": 2.186457533640503,
                "cid": 220214,
                "stand": false,
                "skin": "marmor6d",
                "cx": {
                    "hair": "hairdo105",
                    "head": "makeup117"
                },
                "slots": {
                    "ring1": {
                        "level": 2,
                        "name": "strring"
                    },
                    "ring2": {
                        "level": 3,
                        "name": "strring"
                    },
                    "earring1": {
                        "level": 3,
                        "name": "strearring"
                    },
                    "earring2": {
                        "level": 3,
                        "name": "strearring"
                    },
                    "belt": {
                        "level": 2,
                        "name": "strbelt"
                    },
                    "mainhand": {
                        "acc": 1,
                        "name": "fireblade",
                        "level": 6
                    },
                    "offhand": {
                        "name": "sshield",
                        "level": 8
                    },
                    "helmet": {
                        "stat_type": "str",
                        "name": "eears",
                        "level": 7
                    },
                    "chest": {
                        "stat_type": "str",
                        "name": "epyjamas",
                        "level": 7
                    },
                    "pants": {
                        "stat_type": "str",
                        "name": "wbreeches",
                        "level": 7
                    },
                    "shoes": {
                        "stat_type": "str",
                        "name": "eslippers",
                        "level": 6
                    },
                    "gloves": {
                        "stat_type": "str",
                        "name": "gloves",
                        "level": 7
                    },
                    "amulet": {
                        "name": "stramulet",
                        "level": 3
                    },
                    "orb": {
                        "name": "orbg",
                        "level": 2
                    },
                    "elixir": null,
                    "cape": {
                        "stat_type": "str",
                        "name": "ecape",
                        "level": 1
                    }
                },
                "ctype": "warrior",
                "owner": "6314512450322432"
            },
            {
                "hp": 6593,
                "max_hp": 6593,
                "mp": 4910,
                "max_mp": 5020,
                "xp": 239511535,
                "attack": 1801,
                "frequency": 1.079644429926442,
                "speed": 64,
                "range": 166,
                "armor": 151,
                "resistance": 286,
                "level": 72,
                "party": "ShadowKnight",
                "rip": false,
                "code": true,
                "afk": "code",
                "target": "5459683",
                "focus": null,
                "s": {
                    "mluck": {
                        "ms": 1529481,
                        "f": "Moneybaggers",
                        "strong": true
                    }
                },
                "c": {},
                "q": {},
                "age": 62,
                "pdps": 103869.62098324746,
                "id": "ShadowMedic",
                "x": -50,
                "y": 29,
                "angle": -152.14034930475773,
                "cid": 91562,
                "stand": false,
                "controller": "ShadowKnight",
                "skin": "mbody5e",
                "cx": {
                    "hair": "hairdo402",
                    "head": "makeup117"
                },
                "slots": {
                    "ring1": {
                        "name": "cring",
                        "level": 2
                    },
                    "ring2": {
                        "name": "cring",
                        "level": 2
                    },
                    "earring1": {
                        "name": "intearring",
                        "level": 2
                    },
                    "earring2": {
                        "level": 2,
                        "name": "intearring"
                    },
                    "belt": {
                        "name": "mbelt",
                        "level": 0
                    },
                    "mainhand": {
                        "name": "pmace",
                        "level": 7
                    },
                    "offhand": {
                        "level": 2,
                        "name": "wbook0"
                    },
                    "helmet": {
                        "stat_type": "int",
                        "name": "eears",
                        "level": 7
                    },
                    "chest": {
                        "stat_type": "int",
                        "name": "epyjamas",
                        "level": 7
                    },
                    "pants": {
                        "level": 7,
                        "stat_type": "int",
                        "name": "wbreeches"
                    },
                    "shoes": {
                        "level": 8,
                        "stat_type": "int",
                        "name": "shoes"
                    },
                    "gloves": {
                        "level": 7,
                        "stat_type": "int",
                        "name": "gloves"
                    },
                    "amulet": {
                        "name": "intamulet",
                        "level": 2
                    },
                    "orb": {
                        "name": "orbg",
                        "level": 2
                    },
                    "elixir": null,
                    "cape": {
                        "name": "ecape",
                        "level": 1,
                        "stat_type": "int"
                    }
                },
                "ctype": "priest",
                "owner": "6314512450322432"
            },
            {
                "hp": 4862,
                "max_hp": 4862,
                "mp": 4383,
                "max_mp": 4545,
                "xp": 502377811,
                "attack": 1001,
                "frequency": 1.0232370305845917,
                "speed": 61,
                "range": 197,
                "armor": 130,
                "resistance": 295,
                "level": 73,
                "party": "ShadowKnight",
                "rip": false,
                "code": true,
                "afk": "code",
                "target": "5459683",
                "focus": null,
                "s": {
                    "mluck": {
                        "ms": 1529801,
                        "f": "Moneybaggers",
                        "strong": true
                    }
                },
                "c": {},
                "q": {},
                "age": 323,
                "pdps": 103211.18695961982,
                "id": "ShadowSeer",
                "x": -87.9999999,
                "y": 29,
                "angle": -130.85537634748508,
                "cid": 7697,
                "stand": false,
                "controller": "ShadowKnight",
                "skin": "mbody5h",
                "cx": {
                    "hair": "hairdo402",
                    "head": "makeup117"
                },
                "slots": {
                    "ring1": {
                        "level": 3,
                        "name": "ringsj"
                    },
                    "ring2": {
                        "level": 3,
                        "name": "ringsj"
                    },
                    "earring1": {
                        "level": 3,
                        "name": "intearring"
                    },
                    "earring2": {
                        "level": 3,
                        "name": "intearring"
                    },
                    "belt": null,
                    "mainhand": {
                        "acc": 1,
                        "name": "firestaff",
                        "level": 6
                    },
                    "offhand": {
                        "name": "wbook0",
                        "level": 2
                    },
                    "helmet": {
                        "stat_type": "int",
                        "name": "eears",
                        "level": 7
                    },
                    "chest": {
                        "level": 6,
                        "name": "tshirt0"
                    },
                    "pants": {
                        "acc": 6924,
                        "name": "wbreeches",
                        "level": 6,
                        "ach": "gooped",
                        "stat_type": "int"
                    },
                    "shoes": {
                        "stat_type": "int",
                        "name": "shoes1",
                        "level": 5
                    },
                    "gloves": {
                        "name": "gloves",
                        "level": 8,
                        "stat_type": "int"
                    },
                    "amulet": {
                        "level": 2,
                        "name": "intamulet"
                    },
                    "orb": {
                        "level": 1,
                        "name": "orbg"
                    },
                    "elixir": null,
                    "cape": {
                        "level": 1,
                        "stat_type": "int",
                        "name": "ecape"
                    }
                },
                "ctype": "mage",
                "owner": "6314512450322432"
            }
        ],
        "monsters": [
            {
                "speed": 20.88,
                "hp": 64000,
                "mp": 32,
                "attack": 800,
                "xp": 114000,
                "frequency": 1.008,
                "armor": 0,
                "max_hp": 64000,
                "id": "4271596",
                "x": 303.54083141458585,
                "y": -204.76398569325568,
                "moving": true,
                "going_x": 140.92303024483888,
                "going_y": -345.89075399863316,
                "abs": false,
                "move_num": 50933470,
                "angle": -139.04714031777658,
                "type": "bbpompom",
                "cid": 19,
                "s": {},
                "level": 19
            },
            {
                "speed": 20.88,
                "hp": 64000,
                "mp": 32,
                "attack": 800,
                "xp": 114000,
                "frequency": 1.008,
                "armor": 0,
                "max_hp": 64000,
                "id": "4274585",
                "x": 209.1799643006324,
                "y": -293.28417660791735,
                "moving": false,
                "going_x": 209.1799643006324,
                "going_y": -293.28417660791735,
                "abs": false,
                "move_num": 50933447,
                "angle": -176.39656436277588,
                "type": "bbpompom",
                "cid": 19,
                "s": {},
                "level": 19
            },
            {
                "speed": 20.88,
                "hp": 63999,
                "mp": 32,
                "attack": 800,
                "xp": 114000,
                "frequency": 1.008,
                "armor": 0,
                "max_hp": 64000,
                "id": "4275865",
                "x": 299.1903342688585,
                "y": -163.92772527669683,
                "moving": true,
                "going_x": 276.6672697678158,
                "going_y": -315.15471611805583,
                "abs": false,
                "move_num": 50933481,
                "angle": -98.47110595644949,
                "type": "bbpompom",
                "cid": 19,
                "s": {},
                "level": 19
            },
            {
                "speed": 20.88,
                "hp": 64000,
                "mp": 32,
                "attack": 800,
                "xp": 114000,
                "frequency": 1.008,
                "armor": 0,
                "max_hp": 64000,
                "id": "4281041",
                "x": 159.9483553233265,
                "y": -137.44929165836254,
                "moving": true,
                "going_x": 189.8632932901482,
                "going_y": -363.8406892116329,
                "abs": false,
                "move_num": 50933462,
                "angle": -82.47265057588253,
                "type": "bbpompom",
                "cid": 19,
                "s": {},
                "level": 19
            }
        ],
        "type": "all",
        "in": "level3",
        "map": "level3"
    }
    expect(players).not.toBe(undefined)
})