import { CharacterData } from "./adventureland-server"

/**
 * The following is from socket events received 2021-12-18
 * It is used to confirm type correctness
 */

test("CharacterData type validation", async () => {
    const iMoveData: CharacterData = {
        "hp": 1588,
        "max_hp": 1588,
        "mp": 612,
        "max_mp": 645,
        "xp": 459442,
        "attack": 393,
        "frequency": 0.8802533391405343,
        "speed": 59,
        "range": 126,
        "armor": 71,
        "resistance": 155,
        "level": 45,
        "rip": false,
        "afk": false,
        "target": null,
        "focus": "attacking",
        "s": {
            "holidayspirit": {
                "ms": 83843757
            },
            "mluck": {
                "ms": 3568111,
                "f": "DealStriker"
            }
        },
        "c": {},
        "q": {},
        "age": 130,
        "pdps": 0,
        "id": "attacking",
        "x": 0,
        "y": -9,
        "moving": false,
        "going_x": 171.68670615229303,
        "going_y": -400.9999999,
        "abs": false,
        "move_num": 13797520,
        "angle": -38.80098790882876,
        "cid": 3,
        "skin": "marmor5a",
        "cx": {
            "hair": "hairdo106",
            "head": "makeup105"
        },
        "slots": {
            "ring1": {
                "level": 1,
                "name": "ringsj"
            },
            "ring2": {
                "level": 1,
                "name": "ringsj"
            },
            "earring1": null,
            "earring2": null,
            "belt": {
                "level": 3,
                "name": "dexbelt"
            },
            "mainhand": {
                "name": "bow",
                "level": 7
            },
            "offhand": null,
            "helmet": {
                "stat_type": "dex",
                "name": "helmet",
                "level": 6
            },
            "chest": {
                "stat_type": "dex",
                "name": "coat",
                "level": 6
            },
            "pants": {
                "acc": 129,
                "name": "pants",
                "level": 6,
                "ach": "gooped",
                "stat_type": "dex"
            },
            "shoes": {
                "stat_type": "dex",
                "name": "shoes",
                "level": 6
            },
            "gloves": {
                "stat_type": "dex",
                "name": "gloves",
                "level": 6
            },
            "amulet": {
                "name": "dexamulet",
                "level": 2
            },
            "orb": null,
            "elixir": null,
            "cape": null
        },
        "ctype": "ranger",
        "owner": "6133449939746816",
        "int": 24,
        "str": 17,
        "dex": 122,
        "vit": 17,
        "for": 2,
        "mp_cost": 11,
        "mp_reduction": 0,
        "max_xp": 2000000,
        "goldm": 1.2,
        "xpm": 1.2,
        "luckm": 1.32,
        "map": "hut",
        "in": "hut",
        "isize": 42,
        "esize": 25,
        "gold": 1157993,
        "cash": 1760,
        "targets": 0,
        "m": 2,
        "evasion": 0,
        "miss": 0,
        "reflection": 0,
        "lifesteal": 0,
        "manasteal": 0,
        "rpiercing": 0,
        "apiercing": 0,
        "crit": 0,
        "critdamage": 0,
        "dreturn": 0,
        "tax": 0.04,
        "xrange": 25,
        "pnresistance": 0,
        "firesistance": 0,
        "fzresistance": 0,
        "stun": 0,
        "blast": 0,
        "explosion": 0,
        "courage": 2,
        "mcourage": 2,
        "pcourage": 2,
        "fear": 0,
        "items": [
            {
                "q": 188,
                "name": "hpot0",
                "gift": 1
            },
            {
                "q": 195,
                "name": "mpot0",
                "gift": 1
            },
            {
                "name": "ringsj",
                "level": 0
            },
            {
                "name": "slimestaff",
                "level": 0
            },
            {
                "name": "slimestaff",
                "level": 0
            },
            {
                "name": "slimestaff",
                "level": 0
            },
            {
                "q": 8,
                "name": "gslime"
            },
            {
                "q": 19,
                "name": "beewings"
            },
            {
                "name": "slimestaff",
                "level": 0
            },
            {
                "name": "hpamulet",
                "level": 0
            },
            {
                "name": "stinger",
                "level": 0
            },
            {
                "name": "hpbelt",
                "level": 0
            },
            {
                "name": "hpbelt",
                "level": 0
            },
            null,
            {
                "name": "hpbelt",
                "level": 0
            },
            {
                "name": "hpbelt",
                "level": 0
            },
            {
                "name": "dexamulet",
                "level": 2
            },
            {
                "name": "hpamulet",
                "level": 0
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
            null,
            null,
            null
        ],
        "cc": 1,
        "reopen": true
    }
    expect(iMoveData).toBeDefined()
})