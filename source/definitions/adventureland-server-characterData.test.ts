import { CharacterData } from "./adventureland-server"

/**
 * The following is from socket events received 2021-12-18
 * It is used to confirm type correctness
 */

test("CharacterData type validation", async () => {
    const iMoveData: CharacterData = {
        "abs": false,
        "afk": false,
        "age": 130,
        "angle": -38.80098790882876,
        "apiercing": 0,
        "armor": 71,
        "attack": 393,
        "blast": 0,
        "c": {},
        "cash": 1760,
        "cc": 1,
        "cid": 3,
        "courage": 2,
        "crit": 0,
        "critdamage": 0,
        "ctype": "ranger",
        "cx": {
            "hair": "hairdo106",
            "head": "makeup105"
        },
        "dex": 122,
        "dreturn": 0,
        "esize": 25,
        "evasion": 0,
        "explosion": 0,
        "fear": 0,
        "firesistance": 0,
        "focus": "attacking",
        "for": 2,
        "frequency": 0.8802533391405343,
        "fzresistance": 0,
        "going_x": 171.68670615229303,
        "going_y": -400.9999999,
        "gold": 1157993,
        "goldm": 1.2,
        "heal": 0,
        "hp": 1588,
        "id": "attacking",
        "in": "hut",
        "int": 24,
        "isize": 42,
        "items": [
            {
                "gift": 1,
                "name": "hpot0",
                "q": 188
            },
            {
                "gift": 1,
                "name": "mpot0",
                "q": 195
            },
            {
                "level": 0,
                "name": "ringsj"
            },
            {
                "level": 0,
                "name": "slimestaff"
            },
            {
                "level": 0,
                "name": "slimestaff"
            },
            {
                "level": 0,
                "name": "slimestaff"
            },
            {
                "name": "gslime",
                "q": 8
            },
            {
                "name": "beewings",
                "q": 19
            },
            {
                "level": 0,
                "name": "slimestaff"
            },
            {
                "level": 0,
                "name": "hpamulet"
            },
            {
                "level": 0,
                "name": "stinger"
            },
            {
                "level": 0,
                "name": "hpbelt"
            },
            {
                "level": 0,
                "name": "hpbelt"
            },
            null,
            {
                "level": 0,
                "name": "hpbelt"
            },
            {
                "level": 0,
                "name": "hpbelt"
            },
            {
                "level": 2,
                "name": "dexamulet"
            },
            {
                "level": 0,
                "name": "hpamulet"
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
        "level": 45,
        "lifesteal": 0,
        "luckm": 1.32,
        "m": 2,
        "manasteal": 0,
        "map": "hut",
        "max_hp": 1588,
        "max_mp": 645,
        "max_xp": 2000000,
        "mcourage": 2,
        "miss": 0,
        "move_num": 13797520,
        "moving": false,
        "mp": 612,
        "mp_cost": 11,
        "mp_reduction": 0,
        "owner": "6133449939746816",
        "pcourage": 2,
        "pdps": 0,
        "pnresistance": 0,
        "q": {},
        "range": 126,
        "reflection": 0,
        "reopen": true,
        "resistance": 155,
        "rip": false,
        "rpiercing": 0,
        "s": {
            "holidayspirit": {
                "ms": 83843757
            },
            "mluck": {
                "f": "DealStriker",
                "ms": 3568111
            }
        },
        "skin": "marmor5a",
        "slots": {
            "amulet": {
                "level": 2,
                "name": "dexamulet"
            },
            "belt": {
                "level": 3,
                "name": "dexbelt"
            },
            "cape": null,
            "chest": {
                "level": 6,
                "name": "coat",
                "stat_type": "dex"
            },
            "earring1": null,
            "earring2": null,
            "elixir": null,
            "gloves": {
                "level": 6,
                "name": "gloves",
                "stat_type": "dex"
            },
            "helmet": {
                "level": 6,
                "name": "helmet",
                "stat_type": "dex"
            },
            "mainhand": {
                "level": 7,
                "name": "bow"
            },
            "offhand": null,
            "orb": null,
            "pants": {
                "acc": 129,
                "ach": "gooped",
                "level": 6,
                "name": "pants",
                "stat_type": "dex"
            },
            "ring1": {
                "level": 1,
                "name": "ringsj"
            },
            "ring2": {
                "level": 1,
                "name": "ringsj"
            },
            "shoes": {
                "level": 6,
                "name": "shoes",
                "stat_type": "dex"
            }
        },
        "speed": 59,
        "str": 17,
        "stun": 0,
        "target": null,
        "targets": 0,
        "tax": 0.04,
        "vit": 17,
        "x": 0,
        "xp": 459442,
        "xpm": 1.2,
        "xrange": 25,
        "y": -9
    }
    expect(iMoveData).toBeDefined()
})