import { WelcomeData } from "./adventureland-server"

/**
 * The following is from socket events received 2021-04-22
 * It is used to confirm type correctness
 */

test("WelcomeData type validation", async () => {
    const normalWelcomeData: WelcomeData = {
        "S": {
            "dragold": {
                "live": false,
                "spawn": "2023-01-21T05:28:15.387Z"
            },
            "lunarnewyear": true,
            "schedule": {
                "dailies": [
                    13,
                    20
                ],
                "night": false,
                "nightlies": [
                    23
                ],
                "time_offset": 7
            },
            "tiger": {
                "hp": 4458,
                "live": true,
                "map": "main",
                "max_hp": 12000
            }
        },
        "gameplay": "normal",
        "in": "main",
        "info": {},
        "map": "main",
        "name": "I",
        "pvp": false,
        "region": "ASIA",
        "x": -1173,
        "y": 15
    }
    expect(normalWelcomeData).toBeDefined()

    const commWelcomeData: WelcomeData = {
        "S": {
            "dragold": {
                "live": false,
                "spawn": "2023-01-21T05:40:49.132Z"
            },
            "lunarnewyear": true,
            "schedule": {
                "dailies": [
                    13,
                    20
                ],
                "night": false,
                "nightlies": [
                    23
                ],
                "time_offset": -5
            },
            "tiger": {
                "hp": 24000,
                "live": true,
                "map": "main",
                "max_hp": 24000
            }
        },
        "character": {
            "abs": false,
            "afk": "code",
            "age": 351,
            "angle": -90.07842665451273,
            "apiercing": 2,
            "armor": 130,
            "attack": 908,
            "blast": 0,
            "c": {},
            "cash": 760,
            "cc": 4,
            "cid": 13062,
            "controller": "",
            "courage": 2,
            "crit": 0.75,
            "critdamage": 0,
            "ctype": "priest",
            "cx": {
                "head": "fmakeup03"
            },
            "dex": 44,
            "dreturn": 0.5,
            "esize": 21,
            "evasion": 0,
            "explosion": 0,
            "fear": 0,
            "firesistance": 0,
            "for": 14,
            "frequency": 1.1534877080913666,
            "fzresistance": 0,
            "going_x": -1119.7876733325054,
            "going_y": 800.2359638507783,
            "gold": 20645452,
            "goldm": 1.4849999999999999,
            "heal": 2112,
            "hp": 4920,
            "id": "attackPri3",
            "in": "main",
            "incdmgamp": 0,
            "int": 307,
            "isize": 42,
            "items": [
                {
                    "level": 0,
                    "name": "tigerhelmet",
                    "v": "2023-01-21T02:39:07.454Z"
                },
                {
                    "level": 0,
                    "name": "hpamulet",
                    "v": "2023-01-21T02:43:29.341Z"
                },
                {
                    "level": 0,
                    "name": "tigerhelmet",
                    "v": "2023-01-21T02:43:38.852Z"
                },
                {
                    "name": "gem0",
                    "q": 1,
                    "v": "2023-01-21T02:43:46.188Z"
                },
                {
                    "level": 0,
                    "name": "tigerhelmet",
                    "v": "2023-01-21T02:44:26.038Z"
                },
                {
                    "name": "beewings",
                    "q": 2,
                    "v": "2023-01-21T01:32:39.683Z"
                },
                {
                    "level": 0,
                    "name": "hpamulet",
                    "v": "2023-01-21T02:55:17.758Z"
                },
                {
                    "level": 0,
                    "name": "tigerhelmet",
                    "v": "2023-01-21T02:55:26.566Z"
                },
                {
                    "name": "seashell",
                    "q": 2,
                    "v": "2023-01-21T03:08:01.473Z"
                },
                {
                    "level": 0,
                    "name": "wcap",
                    "v": "2023-01-21T02:57:07.965Z"
                },
                {
                    "level": 0,
                    "name": "hpbelt",
                    "v": "2023-01-21T03:05:09.511Z"
                },
                {
                    "level": 0,
                    "name": "tigerhelmet",
                    "v": "2023-01-21T03:05:58.186Z"
                },
                {
                    "level": 0,
                    "name": "hpamulet",
                    "v": "2023-01-21T03:08:38.435Z"
                },
                {
                    "level": 0,
                    "name": "tigerhelmet",
                    "v": "2023-01-21T03:10:59.849Z"
                },
                {
                    "level": 0,
                    "name": "hpamulet",
                    "v": "2023-01-21T03:15:23.002Z"
                },
                {
                    "level": 0,
                    "name": "tigerhelmet",
                    "v": "2023-01-21T03:16:27.934Z"
                },
                {
                    "level": 0,
                    "name": "tigerhelmet",
                    "v": "2023-01-21T03:17:28.063Z"
                },
                {
                    "level": 0,
                    "name": "tigerhelmet",
                    "v": "2023-01-21T03:20:14.146Z"
                },
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                {
                    "name": "hpot1",
                    "q": 2472
                },
                {
                    "name": "mpot1",
                    "q": 2084
                },
                {
                    "name": "tracker"
                }
            ],
            "level": 75,
            "lifesteal": 0,
            "luckm": 1.49,
            "m": 140,
            "manasteal": 0,
            "map": "main",
            "max_hp": 5011,
            "max_mp": 5795,
            "max_xp": 750000000,
            "mcourage": 15,
            "miss": 0,
            "move_num": 467304,
            "moving": false,
            "mp": 5390,
            "mp_cost": 45,
            "mp_reduction": 0,
            "name": "attackPri3",
            "owner": "6133449939746816",
            "party": "attackPri",
            "pcourage": 2,
            "pdps": 9876.700998357677,
            "phresistance": 0,
            "pnresistance": 0,
            "q": {},
            "range": 204,
            "reflection": 2.5,
            "resistance": 341,
            "rip": false,
            "rpiercing": 28,
            "s": {
                "coop": {
                    "id": "734",
                    "ms": 700619,
                    "p": 7227
                },
                "halloween2": {
                    "ms": 19466423
                },
                "mluck": {
                    "f": "attackMer",
                    "ms": 2749987,
                    "strong": true
                },
                "rspeed": {
                    "f": "kakaka",
                    "ms": 197877
                }
            },
            "skin": "mbody5e",
            "slots": {
                "amulet": {
                    "level": 3,
                    "name": "intamulet"
                },
                "belt": {
                    "level": 1,
                    "name": "intbelt"
                },
                "cape": {
                    "level": 5,
                    "name": "ecape",
                    "stat_type": "int"
                },
                "chest": {
                    "level": 8,
                    "name": "wattire",
                    "stat_type": "int"
                },
                "earring1": {
                    "level": 2,
                    "name": "intearring"
                },
                "earring2": {
                    "level": 3,
                    "name": "intearring"
                },
                "elixir": null,
                "gloves": {
                    "level": 8,
                    "name": "wgloves",
                    "stat_type": "int"
                },
                "helmet": {
                    "level": 7,
                    "name": "wcap",
                    "stat_type": "int"
                },
                "mainhand": {
                    "level": 6,
                    "name": "oozingterror"
                },
                "offhand": {
                    "level": 3,
                    "name": "wbook0"
                },
                "orb": {
                    "level": 0,
                    "name": "jacko"
                },
                "pants": {
                    "acc": 8,
                    "ach": "gooped",
                    "level": 9,
                    "name": "wbreeches",
                    "stat_type": "int"
                },
                "ring1": {
                    "level": 3,
                    "name": "ringsj"
                },
                "ring2": {
                    "level": 3,
                    "name": "ringsj"
                },
                "shoes": {
                    "level": 8,
                    "name": "wshoes",
                    "stat_type": "int"
                }
            },
            "speed": 68,
            "str": 44,
            "stresistance": 0,
            "stun": 0,
            "target": "734",
            "targets": 0,
            "tax": 0.02,
            "vit": 39,
            "x": -1119.7876733325054,
            "xp": 141597178,
            "xpm": 1.47,
            "xrange": 25,
            "y": 800.2359638507783
        },
        "gameplay": "normal",
        "in": "main",
        "info": {},
        "map": "main",
        "name": "PVP",
        "pvp": true,
        "region": "US",
        "x": -1119.7876733325054,
        "y": 800.2359638507783
    }
    expect(commWelcomeData).toBeDefined()
})