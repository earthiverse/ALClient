import { WelcomeData } from "./adventureland-server"

/** 
 * The following is from socket events received 2021-04-22
 * It is used to confirm type correctness
 */

test("WelcomeData type validation", async () => {
    const normalWelcomeData: WelcomeData = {
        "region": "ASIA",
        "name": "I",
        "pvp": false,
        "gameplay": "normal",
        "info": {},
        "x": -476,
        "y": 873,
        "map": "halloween",
        "in": "halloween"
    }
    expect(normalWelcomeData).not.toBe(undefined)

    const commWelcomeData: WelcomeData = {
        "region": "US",
        "name": "I",
        "pvp": false,
        "gameplay": "normal",
        "info": {},
        "character": {
            "hp": 17169,
            "max_hp": 17169,
            "mp": 1621,
            "max_mp": 1635,
            "xp": 1840334663,
            "attack": 2441,
            "frequency": 1.2154512074138597,
            "speed": 54,
            "range": 43,
            "armor": 538,
            "resistance": 369,
            "level": 87,
            "rip": false,
            "afk": "code",
            "target": "774233",
            "s": {
                "weakness": {
                    "ms": 17417
                },
                "mluck": {
                    "ms": 779426,
                    "f": "earthMer",
                    "strong": true
                },
                "typing": {
                    "ms": 1581
                }
            },
            "c": {},
            "q": {},
            "age": 578,
            "pdps": 480061.869524055,
            "id": "earthWar",
            "x": -447.9364398561797,
            "y": -1173.499347603802,
            "moving": false,
            "going_x": -447.9364398561797,
            "going_y": -1173.499347603802,
            "abs": false,
            "move_num": 8508140,
            "angle": -148.39249775375345,
            "cid": 1234,
            "controller": "",
            "skin": "fwarrior",
            "cx": {},
            "slots": {
                "ring1": {
                    "level": 4,
                    "name": "strring"
                },
                "ring2": {
                    "name": "strring",
                    "level": 5
                },
                "earring1": {
                    "level": 5,
                    "name": "strearring"
                },
                "earring2": {
                    "name": "strearring",
                    "level": 5
                },
                "belt": {
                    "level": 5,
                    "name": "strbelt"
                },
                "mainhand": {
                    "acc": 2,
                    "ps": [
                        "firehazard"
                    ],
                    "name": "fireblade",
                    "level": 9,
                    "p": "firehazard"
                },
                "offhand": {
                    "ps": [
                        "firehazard"
                    ],
                    "p": "firehazard",
                    "name": "fireblade",
                    "level": 9
                },
                "helmet": {
                    "acc": 1,
                    "level": 9,
                    "stat_type": "str",
                    "name": "helmet1"
                },
                "chest": {
                    "stat_type": "str",
                    "name": "coat1",
                    "level": 9
                },
                "pants": {
                    "acc": 2814568,
                    "name": "pants1",
                    "level": 9,
                    "ach": "gooped",
                    "stat_type": "str"
                },
                "shoes": {
                    "level": 9,
                    "stat_type": "str",
                    "name": "wingedboots"
                },
                "gloves": {
                    "stat_type": "str",
                    "name": "gloves1",
                    "level": 9
                },
                "amulet": {
                    "name": "stramulet",
                    "level": 5
                },
                "orb": {
                    "name": "test_orb",
                    "level": 1
                },
                "elixir": {
                    "expires": "2021-04-22T09:55:51.565Z",
                    "name": "pumpkinspice",
                    "ex": true
                },
                "cape": {
                    "acc": 343382,
                    "ps": [
                        "festive"
                    ],
                    "name": "cape",
                    "level": 8,
                    "ach": "festive",
                    "p": "festive",
                    "stat_type": "str"
                }
            },
            "ctype": "warrior",
            "owner": "12345",
            "int": 62,
            "str": 368,
            "dex": 48.5,
            "vit": 103,
            "for": 42.75,
            "mp_cost": 17,
            "mp_reduction": 20,
            "max_xp": 7900000000,
            "goldm": 1.05,
            "xpm": 1.04,
            "luckm": 1.19,
            "map": "desertland",
            "in": "desertland",
            "isize": 42,
            "esize": 21,
            "gold": 11044422,
            "cash": 4386,
            "targets": 0,
            "m": 0,
            "evasion": 1.25,
            "miss": 0,
            "reflection": 2.5,
            "lifesteal": 0,
            "manasteal": 0,
            "rpiercing": 11,
            "apiercing": 9,
            "crit": 5.75,
            "critdamage": 8,
            "dreturn": 1,
            "tax": 0.01,
            "xrange": 25,
            "pnresistance": 0,
            "firesistance": 20,
            "fzresistance": 21,
            "stun": 0,
            "blast": 0,
            "explosion": 0,
            "courage": 17,
            "mcourage": 2,
            "pcourage": 2,
            "fear": 0,
            "items": [
                {
                    "name": "computer"
                },
                {
                    "name": "tracker"
                },
                {
                    "q": 9957,
                    "name": "mpot1"
                },
                {
                    "q": 9316,
                    "name": "hpot1"
                },
                {
                    "level": 4,
                    "name": "orbg"
                },
                {
                    "acc": 1,
                    "level": 8,
                    "name": "bataxe"
                },
                {
                    "name": "carrotsword",
                    "level": 8
                },
                {
                    "name": "shield",
                    "level": 8
                },
                {
                    "acc": 1,
                    "name": "basher",
                    "level": 8
                },
                {
                    "name": "swordofthedead",
                    "level": 9
                },
                {
                    "name": "woodensword",
                    "level": 8
                },
                {
                    "level": 0,
                    "name": "jacko"
                },
                {
                    "q": 1,
                    "name": "offeringp"
                },
                {
                    "name": "sshield",
                    "level": 8
                },
                {
                    "name": "lantern",
                    "level": 3
                },
                {
                    "name": "orbofstr",
                    "level": 2
                },
                {
                    "name": "heartwood",
                    "level": 3,
                    "p": "glitched"
                },
                {
                    "q": 1,
                    "name": "gem1"
                },
                {
                    "q": 1,
                    "name": "xptome"
                },
                {
                    "name": "candycanesword",
                    "level": 9
                },
                {
                    "q": 9993,
                    "name": "pumpkinspice"
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
                null
            ],
            "cc": 10.5,
            "name": "earthWar"
        },
        "x": -447.9364398561797,
        "y": -1173.499347603802,
        "map": "desertland",
        "in": "desertland"
    }
    expect(commWelcomeData).not.toBe(undefined)
})