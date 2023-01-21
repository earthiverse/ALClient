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
    expect(players).toBeDefined()

    const players2: EntitiesData = {
        "in": "desertland",
        "map": "desertland",
        "monsters": [
            {
                "abs": false,
                "angle": -173.17365672584762,
                "cid": 155,
                "going_x": 216,
                "going_y": -808,
                "hp": 1654,
                "id": "3454573",
                "move_num": 25573411,
                "moving": false,
                "mp": 420,
                "s": {},
                "speed": 38,
                "target": "PriestMain",
                "type": "fireroamer",
                "x": 216,
                "y": -808
            },
            {
                "abs": false,
                "angle": -170.5448326762524,
                "cid": 81,
                "going_x": 208,
                "going_y": -808,
                "hp": 19240,
                "id": "3454617",
                "move_num": 25573429,
                "moving": false,
                "mp": 420,
                "s": {},
                "speed": 38,
                "target": "PriestMain",
                "type": "fireroamer",
                "x": 208,
                "y": -808
            },
            {
                "abs": false,
                "angle": -170.5448326762524,
                "cid": 77,
                "going_x": 208,
                "going_y": -808,
                "hp": 48015,
                "id": "3454686",
                "move_num": 25573427,
                "moving": false,
                "mp": 420,
                "s": {},
                "speed": 38,
                "target": "PriestMain",
                "type": "fireroamer",
                "x": 208,
                "y": -808
            },
            {
                "abs": false,
                "angle": -102.91633428295093,
                "cid": 32,
                "going_x": 192,
                "going_y": -792,
                "hp": 55470,
                "id": "3454736",
                "move_num": 25573404,
                "moving": false,
                "mp": 420,
                "s": {},
                "speed": 38,
                "target": "PriestMain",
                "type": "fireroamer",
                "x": 192,
                "y": -792
            }
        ],
        "players": [
            {
                "abs": false,
                "afk": "code",
                "age": 246,
                "angle": -135.00000000000406,
                "armor": 427,
                "attack": 2160,
                "c": {},
                "cid": 106080,
                "code": true,
                "controller": "PriestMain",
                "ctype": "warrior",
                "cx": {
                    "hat": "hat306",
                    "head": "makeup117"
                },
                "focus": null,
                "frequency": 1.122923925667828,
                "going_x": 219.00934143748643,
                "going_y": -804.990658562514,
                "hp": 19575,
                "id": "WarriorMain",
                "level": 84,
                "max_hp": 19575,
                "max_mp": 2085,
                "move_num": 25573451,
                "moving": false,
                "mp": 1106,
                "owner": "5912409405915136",
                "party": "PriestMain",
                "pdps": 2461859.9773271414,
                "q": {},
                "range": 36,
                "resistance": 264,
                "rip": false,
                "s": {
                    "mluck": {
                        "f": "MerchantMain",
                        "ms": 3099844,
                        "strong": true
                    }
                },
                "skin": "marmor11c",
                "slots": {
                    "amulet": {
                        "l": "l",
                        "level": 4,
                        "name": "stramulet",
                        "registry": {
                            "76561197983907860": "MoneyS",
                            "76561197986726436": "ImmortalMerc",
                            "76561198007507208": "SyuuMerch",
                            "76561198013955841": "Madora",
                            "76561198017484541": "Kaylee",
                            "76561198024874460": "Plutus",
                            "76561198032692301": "CodeAnna",
                            "76561198041871962": "MerchantMain",
                            "76561198072933236": "kouin",
                            "76561198074385093": "CurvyMoney",
                            "76561198129567684": "Byakuya",
                            "76561198138460241": "StrongMad",
                            "76561198166019050": "Evergleem",
                            "76561198333158770": "Biene",
                            "76561198333629156": "Merchant001",
                            "76561199016494300": "milkyway",
                            "76561199131310181": "Stttonks"
                        }
                    },
                    "belt": {
                        "l": "l",
                        "level": 5,
                        "name": "strbelt"
                    },
                    "cape": {
                        "acc": 48560,
                        "ach": "festive",
                        "l": "l",
                        "level": 8,
                        "name": "ecape",
                        "p": "festive",
                        "ps": [
                            "festive"
                        ],
                        "registry": {
                            "76561198004196810": "Crow",
                            "76561198007507208": "SyuuMerch",
                            "76561198009162916": "Bjarnu",
                            "76561198010108867": "earthMer",
                            "76561198017484541": "Kaylee",
                            "76561198024874460": "Plutus",
                            "76561198024917816": "AKATrader",
                            "76561198041871962": "MerchantMain",
                            "76561198044418993": "Zetchant",
                            "76561198088066244": "Drippy",
                            "76561198138460241": "StrongMad",
                            "76561198163762805": "RisingTrader",
                            "76561198841973606": "emptypockets",
                            "76561199016494300": "milkyway"
                        },
                        "stat_type": "str"
                    },
                    "chest": {
                        "l": "l",
                        "level": 7,
                        "name": "vattire",
                        "stat_type": "str"
                    },
                    "earring1": {
                        "l": "l",
                        "level": 4,
                        "name": "cearring"
                    },
                    "earring2": {
                        "l": "l",
                        "level": 4,
                        "name": "cearring"
                    },
                    "elixir": null,
                    "gloves": {
                        "l": "l",
                        "level": 9,
                        "name": "mittens",
                        "stat_type": "str"
                    },
                    "helmet": {
                        "acc": 1,
                        "l": "l",
                        "level": 5,
                        "name": "fury",
                        "stat_type": "str"
                    },
                    "mainhand": {
                        "l": "l",
                        "level": 8,
                        "name": "vhammer"
                    },
                    "offhand": {
                        "acc": 1,
                        "l": "l",
                        "level": 9,
                        "name": "glolipop"
                    },
                    "orb": {
                        "l": "l",
                        "level": 3,
                        "name": "orbofstr"
                    },
                    "pants": {
                        "acc": 48,
                        "ach": "gooped",
                        "level": 9,
                        "name": "pants",
                        "stat_type": "str"
                    },
                    "ring1": {
                        "l": "l",
                        "level": 0,
                        "name": "suckerpunch"
                    },
                    "ring2": {
                        "l": "l",
                        "level": 0,
                        "name": "suckerpunch"
                    },
                    "shoes": {
                        "l": "l",
                        "level": 9,
                        "name": "wingedboots",
                        "stat_type": "str"
                    }
                },
                "speed": 79,
                "target": "3454573",
                "x": 219.00934143748643,
                "xp": 2803177567,
                "y": -804.990658562514
            },
            {
                "abs": false,
                "afk": true,
                "age": 246,
                "angle": 12.979316290367533,
                "armor": 508,
                "attack": 2990,
                "c": {},
                "cid": 258325,
                "code": true,
                "ctype": "priest",
                "cx": {
                    "hat": "hat410",
                    "head": "makeup117"
                },
                "focus": null,
                "frequency": 1.288157060588463,
                "going_x": 187.54966364683872,
                "going_y": -811.4057647468726,
                "hp": 9335,
                "id": "PriestMain",
                "level": 81,
                "max_hp": 11158,
                "max_mp": 6010,
                "move_num": 25573383,
                "moving": false,
                "mp": 4076,
                "owner": "5912409405915136",
                "party": "PriestMain",
                "pdps": 1069259.9242556414,
                "q": {},
                "range": 224,
                "resistance": 1088,
                "rip": false,
                "s": {
                    "burned": {
                        "f": "Fire Spirit",
                        "fid": "3454686",
                        "intensity": 988,
                        "last": "2022-02-22T20:36:11.779Z",
                        "ms": 4914
                    },
                    "mluck": {
                        "f": "MerchantMain",
                        "ms": 3047233,
                        "strong": true
                    }
                },
                "skin": "marmor11c",
                "slots": {
                    "amulet": {
                        "l": "l",
                        "level": 3,
                        "name": "t2stramulet"
                    },
                    "belt": {
                        "level": 1,
                        "name": "sbelt"
                    },
                    "cape": {
                        "acc": 218513,
                        "ach": "festive",
                        "l": "l",
                        "level": 9,
                        "name": "gcape",
                        "p": "festive",
                        "ps": [
                            "festive"
                        ],
                        "stat_type": "int"
                    },
                    "chest": {
                        "l": "l",
                        "level": 8,
                        "name": "xarmor",
                        "registry": {
                            "76561198004196810": "Crow",
                            "76561198007507208": "SyuuMerch",
                            "76561198009162916": "Bjarnu",
                            "76561198010108867": "earthMer",
                            "76561198017484541": "Kaylee",
                            "76561198024874460": "Plutus",
                            "76561198024917816": "AKATrader",
                            "76561198041871962": "MerchantMain",
                            "76561198044418993": "Zetchant",
                            "76561198088066244": "Drippy",
                            "76561198138460241": "StrongMad",
                            "76561198163762805": "RisingTrader",
                            "76561198841973606": "emptypockets",
                            "76561199016494300": "milkyway"
                        },
                        "stat_type": "int"
                    },
                    "earring1": {
                        "l": "l",
                        "level": 4,
                        "name": "cearring"
                    },
                    "earring2": {
                        "l": "l",
                        "level": 4,
                        "name": "cearring",
                        "p": "shiny",
                        "registry": {
                            "76561198004196810": "Crow",
                            "76561198007507208": "SyuuMerch",
                            "76561198009162916": "Bjarnu",
                            "76561198010108867": "earthMer",
                            "76561198017484541": "Kaylee",
                            "76561198024917816": "AKATrader",
                            "76561198041871962": "MerchantMain",
                            "76561198044418993": "Zetchant",
                            "76561198074385093": "CurvyMoney",
                            "76561198077097097": "BuyThisShit",
                            "76561198088066244": "Drippy",
                            "76561198138460241": "StrongMad",
                            "76561198163762805": "RisingTrader",
                            "76561198841973606": "emptypockets",
                            "76561199016494300": "milkyway",
                            "76561199163789308": "orlyowl",
                            "76561199172472357": "decisiveness"
                        }
                    },
                    "elixir": {
                        "ex": true,
                        "expires": "2022-02-23T06:43:52.916Z",
                        "name": "elixirluck"
                    },
                    "gloves": {
                        "l": "l",
                        "level": 8,
                        "name": "vgloves",
                        "stat_type": "int"
                    },
                    "helmet": {
                        "l": "l",
                        "level": 7,
                        "name": "xhelmet",
                        "stat_type": "int"
                    },
                    "mainhand": {
                        "acc": 1,
                        "l": "l",
                        "level": 9,
                        "name": "oozingterror"
                    },
                    "offhand": {
                        "l": "l",
                        "level": 4,
                        "name": "wbookhs"
                    },
                    "orb": {
                        "l": "l",
                        "level": 1,
                        "name": "rabbitsfoot",
                        "p": "glitched"
                    },
                    "pants": {
                        "acc": 487,
                        "ach": "gooped",
                        "l": "l",
                        "level": 6,
                        "name": "starkillers",
                        "stat_type": "int"
                    },
                    "ring1": {
                        "l": "l",
                        "level": 3,
                        "name": "resistancering"
                    },
                    "ring2": {
                        "l": "l",
                        "level": 3,
                        "name": "resistancering"
                    },
                    "shoes": {
                        "l": "l",
                        "level": 9,
                        "name": "wingedboots",
                        "stat_type": "int"
                    }
                },
                "speed": 69,
                "target": "PriestMain",
                "x": 187.54966364683872,
                "xp": 1748219222,
                "y": -811.4057647468726
            }
        ],
        "type": "xy"
    }
    expect(players2).toBeDefined()

    const oneHp: EntitiesData = {
        "in": "main",
        "map": "main",
        "monsters": [
            {
                "1hp": true,
                "abs": false,
                "angle": -135.07692287277675,
                "cid": 1635,
                "going_x": -1112.3090383558963,
                "going_y": 1521.6049141206402,
                "hp": 958523,
                "id": "1387174",
                "move_num": 6595867,
                "moving": true,
                "resistance": 0,
                "s": {},
                "target": null,
                "type": "crabxx",
                "x": -948.9911401121902,
                "y": 1684.4848727545927
            },
            {
                "abs": false,
                "angle": 15.330314005385574,
                "armor": 0,
                "attack": 264,
                "cid": 13,
                "frequency": 0.616,
                "going_x": -85.4340038159535,
                "going_y": 1273.1411391726576,
                "hp": 1090,
                "id": "1400285",
                "level": 2,
                "max_hp": 5400,
                "move_num": 6595868,
                "moving": true,
                "resistance": 0,
                "s": {},
                "speed": 24.32,
                "target": null,
                "type": "poisio",
                "x": -118.82867015745819,
                "xp": 8000,
                "y": 1263.9863987780225
            }
        ],
        "players": [
            {
                "abs": false,
                "afk": "code",
                "age": 1215,
                "angle": 166.61413316354037,
                "armor": 589,
                "attack": 2117,
                "c": {},
                "cid": 585,
                "controller": "",
                "ctype": "warrior",
                "cx": {
                    "hat": "hat306",
                    "head": "fmakeup01"
                },
                "frequency": 1.2292632113821136,
                "going_x": -813.7035380632644,
                "going_y": 1758.0635355834986,
                "heal": 0,
                "hp": 17528,
                "id": "earthWar",
                "level": 93,
                "max_hp": 21014,
                "max_mp": 2480,
                "move_num": 6595840,
                "moving": true,
                "mp": 1848,
                "owner": "5622711463182336",
                "party": "earthWar",
                "pdps": 22720.2,
                "q": {},
                "range": 41,
                "resistance": 459,
                "rip": false,
                "s": {
                    "coop": {
                        "id": "1387174",
                        "ms": 719915,
                        "p": 805.5
                    },
                    "hopsickness": {
                        "ms": 626306
                    },
                    "mlifesteal": {
                        "ms": 282449
                    },
                    "mluck": {
                        "f": "earthMer",
                        "ms": 3117748,
                        "strong": true
                    },
                    "monsterhunt": {
                        "c": 5,
                        "dl": true,
                        "id": "wolfie",
                        "ms": 646273,
                        "sn": "US I"
                    },
                    "newcomersblessing": {
                        "f": "MrYobs",
                        "ms": 490225,
                    },
                    "rspeed": {
                        "f": "CodeGra",
                        "ms": 2641879
                    },
                    "typing": {
                        "ms": 1588
                    }
                },
                "skin": "mbody1d",
                "slots": {
                    "amulet": {
                        "l": "l",
                        "level": 2,
                        "name": "snring"
                    },
                    "belt": {
                        "l": "l",
                        "level": 5,
                        "name": "strbelt"
                    },
                    "cape": {
                        "acc": 163592,
                        "ach": "festive",
                        "l": "l",
                        "level": 7,
                        "name": "bcape",
                        "p": "festive",
                        "ps": [
                            "festive"
                        ],
                        "stat_type": "str"
                    },
                    "chest": {
                        "l": "l",
                        "level": 9,
                        "name": "coat1",
                        "stat_type": "str"
                    },
                    "earring1": null,
                    "earring2": {
                        "l": "l",
                        "level": 0,
                        "name": "dexearringx"
                    },
                    "elixir": {
                        "ex": true,
                        "expires": "2023-01-20T02:16:11.533Z",
                        "name": "elixirluck"
                    },
                    "gloves": {
                        "l": "l",
                        "level": 9,
                        "name": "gloves1",
                        "stat_type": "str"
                    },
                    "helmet": {
                        "acc": 1,
                        "l": "l",
                        "level": 9,
                        "name": "helmet1",
                        "stat_type": "str"
                    },
                    "mainhand": {
                        "acc": 1,
                        "l": "l",
                        "level": 8,
                        "name": "vhammer"
                    },
                    "offhand": {
                        "l": "l",
                        "level": 9,
                        "name": "ololipop"
                    },
                    "orb": {
                        "l": "l",
                        "level": 0,
                        "name": "jacko"
                    },
                    "pants": {
                        "acc": 42125297,
                        "ach": "gooped",
                        "l": "l",
                        "level": 9,
                        "name": "pants1",
                        "p": "gooped",
                        "ps": [
                            "gooped"
                        ],
                        "stat_type": "str"
                    },
                    "ring1": {
                        "l": "l",
                        "level": 0,
                        "name": "zapper"
                    },
                    "ring2": {
                        "l": "l",
                        "level": 5,
                        "name": "strring"
                    },
                    "shoes": {
                        "l": "l",
                        "level": 9,
                        "name": "wingedboots",
                        "stat_type": "str"
                    },
                    "trade1": null,
                    "trade2": null,
                    "trade3": null,
                    "trade4": null
                },
                "speed": 91,
                "target": "1387174",
                "x": -726.9520347495466,
                "xp": 25473785493,
                "y": 1636.8639972166511
            }
        ],
        "type": "xy"
    }
    expect(oneHp).toBeDefined()
})