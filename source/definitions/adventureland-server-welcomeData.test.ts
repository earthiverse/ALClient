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
    expect(normalWelcomeData).toBeDefined()

    const commWelcomeData: WelcomeData = {
        "character": {
            "abs": false,
            "afk": "code",
            "age": 578,
            "angle": -148.39249775375345,
            "apiercing": 9,
            "armor": 538,
            "attack": 2441,
            "blast": 0,
            "c": {},
            "cash": 4386,
            "cc": 10.5,
            "cid": 1234,
            "controller": "",
            "courage": 17,
            "crit": 5.75,
            "critdamage": 8,
            "ctype": "warrior",
            "cx": {},
            "dex": 48.5,
            "dreturn": 1,
            "esize": 21,
            "evasion": 1.25,
            "explosion": 0,
            "fear": 0,
            "firesistance": 20,
            "for": 42.75,
            "frequency": 1.2154512074138597,
            "fzresistance": 21,
            "going_x": -447.9364398561797,
            "going_y": -1173.499347603802,
            "gold": 11044422,
            "goldm": 1.05,
            "heal": 0,
            "hp": 17169,
            "id": "earthWar",
            "in": "desertland",
            "int": 62,
            "isize": 42,
            "items": [
                {
                    "name": "computer"
                },
                {
                    "name": "tracker"
                },
                {
                    "name": "mpot1",
                    "q": 9957
                },
                {
                    "name": "hpot1",
                    "q": 9316
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
                    "level": 8,
                    "name": "carrotsword"
                },
                {
                    "level": 8,
                    "name": "shield"
                },
                {
                    "acc": 1,
                    "level": 8,
                    "name": "basher"
                },
                {
                    "level": 9,
                    "name": "swordofthedead"
                },
                {
                    "level": 8,
                    "name": "woodensword"
                },
                {
                    "level": 0,
                    "name": "jacko"
                },
                {
                    "name": "offeringp",
                    "q": 1
                },
                {
                    "level": 8,
                    "name": "sshield"
                },
                {
                    "level": 3,
                    "name": "lantern"
                },
                {
                    "level": 2,
                    "name": "orbofstr"
                },
                {
                    "level": 3,
                    "name": "heartwood",
                    "p": "glitched"
                },
                {
                    "name": "gem1",
                    "q": 1
                },
                {
                    "name": "xptome",
                    "q": 1
                },
                {
                    "level": 9,
                    "name": "candycanesword"
                },
                {
                    "name": "pumpkinspice",
                    "q": 9993
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
            "level": 87,
            "lifesteal": 0,
            "luckm": 1.19,
            "m": 0,
            "manasteal": 0,
            "map": "desertland",
            "max_hp": 17169,
            "max_mp": 1635,
            "max_xp": 7900000000,
            "mcourage": 2,
            "miss": 0,
            "move_num": 8508140,
            "moving": false,
            "mp": 1621,
            "mp_cost": 17,
            "mp_reduction": 20,
            "name": "earthWar",
            "owner": "12345",
            "pcourage": 2,
            "pdps": 480061.869524055,
            "pnresistance": 0,
            "q": {},
            "range": 43,
            "reflection": 2.5,
            "resistance": 369,
            "rip": false,
            "rpiercing": 11,
            "s": {
                "mluck": {
                    "f": "earthMer",
                    "ms": 779426,
                    "strong": true
                },
                "typing": {
                    "ms": 1581
                },
                "weakness": {
                    "ms": 17417
                }
            },
            "skin": "fwarrior",
            "slots": {
                "amulet": {
                    "level": 5,
                    "name": "stramulet"
                },
                "belt": {
                    "level": 5,
                    "name": "strbelt"
                },
                "cape": {
                    "acc": 343382,
                    "ach": "festive",
                    "level": 8,
                    "name": "cape",
                    "p": "festive",
                    "ps": [
                        "festive"
                    ],
                    "stat_type": "str"
                },
                "chest": {
                    "level": 9,
                    "name": "coat1",
                    "stat_type": "str"
                },
                "earring1": {
                    "level": 5,
                    "name": "strearring"
                },
                "earring2": {
                    "level": 5,
                    "name": "strearring"
                },
                "elixir": {
                    "ex": true,
                    "expires": "2021-04-22T09:55:51.565Z",
                    "name": "pumpkinspice"
                },
                "gloves": {
                    "level": 9,
                    "name": "gloves1",
                    "stat_type": "str"
                },
                "helmet": {
                    "acc": 1,
                    "level": 9,
                    "name": "helmet1",
                    "stat_type": "str"
                },
                "mainhand": {
                    "acc": 2,
                    "level": 9,
                    "name": "fireblade",
                    "p": "firehazard",
                    "ps": [
                        "firehazard"
                    ]
                },
                "offhand": {
                    "level": 9,
                    "name": "fireblade",
                    "p": "firehazard",
                    "ps": [
                        "firehazard"
                    ]
                },
                "orb": {
                    "level": 1,
                    "name": "test_orb"
                },
                "pants": {
                    "acc": 2814568,
                    "ach": "gooped",
                    "level": 9,
                    "name": "pants1",
                    "stat_type": "str"
                },
                "ring1": {
                    "level": 4,
                    "name": "strring"
                },
                "ring2": {
                    "level": 5,
                    "name": "strring"
                },
                "shoes": {
                    "level": 9,
                    "name": "wingedboots",
                    "stat_type": "str"
                }
            },
            "speed": 54,
            "str": 368,
            "stun": 0,
            "target": "774233",
            "targets": 0,
            "tax": 0.01,
            "vit": 103,
            "x": -447.9364398561797,
            "xp": 1840334663,
            "xpm": 1.04,
            "xrange": 25,
            "y": -1173.499347603802
        },
        "gameplay": "normal",
        "in": "desertland",
        "info": {},
        "map": "desertland",
        "name": "I",
        "pvp": false,
        "region": "US",
        "x": -447.9364398561797,
        "y": -1173.499347603802
    }
    expect(commWelcomeData).toBeDefined()
})