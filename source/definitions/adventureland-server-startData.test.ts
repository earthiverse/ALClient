import { StartData } from "./adventureland-server"

/**
 * The following is from socket events received 2021-05-22
 * It is used to confirm type correctness
 */

test("StartData type validation", async () => {
    const start: StartData = {
        "hp": 5021,
        "max_hp": 5021,
        "mp": 4745,
        "max_mp": 4775,
        "xp": 6969459,
        "attack": 144,
        "frequency": 0.7470348190089043,
        "speed": 77,
        "range": 20,
        "armor": 150,
        "resistance": 371,
        "level": 53,
        "rip": false,
        "afk": true,
        "s": {
            "mlifesteal": {
                "ms": 47687
            }
        },
        "c": {},
        "q": {},
        "age": 472,
        "pdps": 0,
        "id": "earthMer2",
        "x": 63.30048491762997,
        "y": -100.3483931085649,
        "cid": 1,
        "stand": false,
        "skin": "mmerchant",
        "cx": {},
        "slots": {
            "ring1": {
                "name": "intring",
                "level": 1
            },
            "ring2": {
                "name": "intring",
                "level": 4
            },
            "earring1": {
                "level": 3,
                "name": "intearring"
            },
            "earring2": {
                "level": 4,
                "name": "intearring"
            },
            "belt": {
                "level": 4,
                "name": "intbelt"
            },
            "mainhand": null,
            "offhand": null,
            "helmet": {
                "acc": 1,
                "name": "wcap",
                "level": 9,
                "stat_type": "int"
            },
            "chest": {
                "stat_type": "int",
                "name": "wattire",
                "level": 9
            },
            "pants": {
                "stat_type": "int",
                "name": "wbreeches",
                "level": 9
            },
            "shoes": {
                "stat_type": "int",
                "name": "wshoes",
                "level": 9
            },
            "gloves": {
                "level": 9,
                "stat_type": "int",
                "name": "gloves"
            },
            "amulet": {
                "name": "intamulet",
                "level": 3
            },
            "orb": {
                "name": "jacko",
                "level": 4
            },
            "elixir": null,
            "cape": {
                "name": "stealthcape",
                "level": 0
            }
        },
        "ctype": "merchant",
        "owner": "",
        "int": 232,
        "str": 22,
        "dex": 41,
        "vit": 44,
        "for": 28.75,
        "mp_cost": 74,
        "mp_reduction": 0,
        "max_xp": 11000000,
        "goldm": 1.15,
        "xpm": 1.04,
        "luckm": 1.06,
        "map": "main",
        "in": "main",
        "isize": 42,
        "esize": 33,
        "gold": 99980000,
        "cash": 4586,
        "targets": 0,
        "m": 0,
        "evasion": 1.25,
        "miss": 0,
        "reflection": 0.5,
        "lifesteal": 2.5,
        "manasteal": 0,
        "rpiercing": 91,
        "apiercing": 9,
        "crit": 0.75,
        "critdamage": 0,
        "dreturn": 1,
        "tax": 0.03,
        "xrange": 25,
        "pnresistance": 0,
        "firesistance": 0,
        "fzresistance": 1,
        "stun": 0,
        "blast": 0,
        "explosion": 0,
        "courage": 1,
        "mcourage": 0,
        "pcourage": 0,
        "fear": 0,
        "items": [
            {
                "q": 155,
                "name": "snowball"
            },
            {
                "q": 70,
                "name": "snowball"
            },
            {
                "name": "bow",
                "level": 3
            },
            {
                "q": 1,
                "name": "scroll0"
            },
            null,
            null,
            {
                "q": 198,
                "name": "snowball"
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
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            {
                "q": 1000,
                "name": "mpot1"
            },
            {
                "q": 1000,
                "name": "hpot1"
            },
            {
                "q": 1,
                "name": "xptome"
            },
            {
                "name": "tracker"
            },
            null
        ],
        "cc": 0,
        "ipass": "P8lxU853c9LT",
        "friends": [],
        "acx": {},
        "xcx": [
            "mmerchant",
            "fmerchant"
        ],
        "emx": {},
        "info": {},
        "base_gold": {
            "stompy": {
                "winterland": 36724
            },
            "wolf": {
                "winterland": 2960
            },
            "arcticbee": {
                "winterland": 78
            },
            "wolfie": {
                "winterland": 1235
            },
            "boar": {
                "winterland": 587
            },
            "iceroamer": {
                "winterland": 196
            },
            "icegolem": {
                "winterland": 7731924
            },
            "rat": {
                "mansion": 50
            },
            "d_wiz": {
                "d2": 16528
            },
            "bat": {
                "batcave": 106,
                "old_main": 106,
                "cave": 68
            },
            "mvampire": {
                "batcave": 6740,
                "cave": 6740
            },
            "xmagefz": {
                "winter_instance": 449998
            },
            "xmagefi": {
                "winter_instance": 702110
            },
            "xmagen": {
                "winter_instance": 513598
            },
            "xmagex": {
                "winter_instance": 52930167
            },
            "crab": {
                "main": 17
            },
            "squig": {
                "main": 61
            },
            "squigtoad": {
                "main": 41
            },
            "tortoise": {
                "main": 97
            },
            "frog": {
                "main": 41
            },
            "crabx": {
                "main": 118
            },
            "target": {
                "main": 20
            },
            "target_a500": {
                "main": 20
            },
            "target_a750": {
                "main": 20
            },
            "target_r500": {
                "main": 20
            },
            "target_r750": {
                "main": 20
            },
            "target_ar900": {
                "main": 20
            },
            "target_ar500red": {
                "main": 20
            },
            "goo": {
                "main": 9,
                "dungeon0": 16,
                "old_main": 9,
                "goobrawl": 9
            },
            "bee": {
                "main": 26
            },
            "poisio": {
                "main": 58
            },
            "croc": {
                "main": 61
            },
            "armadillo": {
                "main": 55
            },
            "snake": {
                "main": 44,
                "halloween": 44
            },
            "bigbird": {
                "main": 899
            },
            "spider": {
                "main": 87,
                "old_main": 121
            },
            "scorpion": {
                "main": 68,
                "old_main": 140,
                "desertland": 140
            },
            "phoenix": {
                "main": 4493,
                "old_main": 4493
            },
            "greenfairy": {
                "main": 101088
            },
            "redfairy": {
                "main": 134784
            },
            "bluefairy": {
                "main": 112320
            },
            "puppy1": {
                "main": 20,
                "shellsisland": 20
            },
            "puppy2": {
                "main": 20,
                "shellsisland": 20
            },
            "puppy3": {
                "main": 20,
                "shellsisland": 20
            },
            "puppy4": {
                "main": 20,
                "shellsisland": 20
            },
            "kitty1": {
                "main": 20,
                "shellsisland": 20
            },
            "kitty2": {
                "main": 20,
                "shellsisland": 20
            },
            "kitty3": {
                "main": 20,
                "shellsisland": 20
            },
            "kitty4": {
                "main": 20,
                "shellsisland": 20
            },
            "hen": {
                "main": 6
            },
            "rooster": {
                "main": 6
            },
            "mole": {
                "tunnel": 798
            },
            "pinkgoblin": {
                "level2e": 79530
            },
            "osnake": {
                "halloween": 44
            },
            "greenjr": {
                "halloween": 236
            },
            "minimush": {
                "halloween": 34
            },
            "xscorpion": {
                "halloween": 905
            },
            "tinyp": {
                "halloween": 158
            },
            "ghost": {
                "halloween": 588
            },
            "fvampire": {
                "halloween": 6740
            },
            "prat": {
                "level1": 734
            },
            "mummy": {
                "level3": 2002,
                "level4": 2002,
                "spookytown": 1126
            },
            "bbpompom": {
                "level3": 397,
                "winter_cave": 320
            },
            "cgoo": {
                "level4": 348,
                "level2s": 348,
                "arena": 348
            },
            "mechagnome": {
                "cyberland": 25509
            },
            "dknight2": {
                "old_main": 6283
            },
            "a1": {
                "crypt": 9537313
            },
            "a7": {
                "crypt": 161741
            },
            "a3": {
                "crypt": 76827
            },
            "a6": {
                "crypt": 71885
            },
            "a5": {
                "crypt": 51668
            },
            "a2": {
                "crypt": 94349
            },
            "a4": {
                "crypt": 210093
            },
            "a8": {
                "crypt": 125799
            },
            "vbat": {
                "crypt": 74469
            },
            "booboo": {
                "spookytown": 281
            },
            "stoneworm": {
                "spookytown": 65
            },
            "jr": {
                "spookytown": 180
            },
            "oneeye": {
                "level2w": 35997
            },
            "pppompom": {
                "level2n": 4586
            },
            "skeletor": {
                "arena": 2247
            },
            "plantoid": {
                "desertland": 9874
            },
            "porcupine": {
                "desertland": 86
            },
            "ent": {
                "desertland": 675949
            },
            "fireroamer": {
                "desertland": 6535
            },
            "bscorpion": {
                "desertland": 36382
            },
            "jrat": {
                "jail": 320
            },
            "gredpro": {
                "tomb": 190619
            },
            "ggreenpro": {
                "tomb": 44928
            },
            "gbluepro": {
                "tomb": 311626
            },
            "gpurplepro": {
                "tomb": 376650
            },
            "grinch": {
                "woffice": 1098531
            }
        },
        "s_info": {
            "icegolem": {
                "live": true,
                "map": "winterland",
                "hp": 16000000,
                "max_hp": 16000000,
                "x": 864.8843631708521,
                "y": 371.43992549601035
            }
        },
        "code": "var attack_mode=false\n\nsetInterval(function(){\n\n\tuse_hp_or_mp();\n\tloot();\n\n\tif(!attack_mode || character.rip || is_moving(character)) return;\n\n\tvar target=get_targeted_monster();\n\tif(!target)\n\t{\n\t\ttarget=get_nearest_monster({min_xp:100,max_att:120});\n\t\tif(target) change_target(target);\n\t\telse\n\t\t{\n\t\t\tset_message(\"No Monsters\");\n\t\t\treturn;\n\t\t}\n\t}\n\t\n\tif(!is_in_range(target))\n\t{\n\t\tmove(\n\t\t\tcharacter.x+(target.x-character.x)/2,\n\t\t\tcharacter.y+(target.y-character.y)/2\n\t\t\t);\n\t\t// Walk half the distance\n\t}\n\telse if(can_attack(target))\n\t{\n\t\tset_message(\"Attacking\");\n\t\tattack(target);\n\t}\n\n},1000/4); // Loops every 1/4 seconds.\n\n// Learn Javascript: https://www.codecademy.com/learn/learn-javascript\n// Write your own CODE: https://github.com/kaansoral/adventureland\n// NOTE: If the tab isn't focused, browsers slow down the game\n// NOTE: Use the performance_trick() function as a workaround\n",
        "code_slot": 5139959430774784,
        "code_version": 1,
        "entities": {
            "players": [
                {
                    "hp": 3200,
                    "max_hp": 3200,
                    "xp": 0,
                    "speed": 30,
                    "armor": 500,
                    "level": 100,
                    "npc": "bean",
                    "s": {},
                    "c": {},
                    "q": {},
                    "id": "Bean",
                    "x": -71.81078044519477,
                    "y": -17.862640988639615,
                    "moving": true,
                    "going_x": -94,
                    "going_y": -47,
                    "abs": false,
                    "move_num": 50938495,
                    "angle": -127.29066691996609,
                    "cid": 0,
                    "skin": "lionsuit",
                    "cx": {},
                    "ctype": "bean",
                    "owner": ""
                },
                {
                    "hp": 8242,
                    "max_hp": 10034,
                    "mp": 3222,
                    "max_mp": 3710,
                    "xp": 1116029774,
                    "attack": 375,
                    "frequency": 0.9177255129694154,
                    "speed": 10,
                    "range": 76,
                    "armor": 86,
                    "resistance": 225,
                    "level": 80,
                    "rip": false,
                    "code": true,
                    "afk": true,
                    "target": null,
                    "focus": null,
                    "s": {},
                    "c": {},
                    "q": {},
                    "age": 365,
                    "pdps": 0,
                    "id": "MoneyS",
                    "x": -2.750955597045788,
                    "y": -36.08600331769935,
                    "moving": false,
                    "going_x": -2.750955597045788,
                    "going_y": -36.08600331769935,
                    "abs": false,
                    "move_num": 50838393,
                    "angle": 149.7970252891833,
                    "cid": 23179,
                    "stand": "cstand",
                    "skin": "marmor7e",
                    "cx": {
                        "hair": "hairdo118",
                        "head": "makeup117",
                        "hat": "hat206"
                    },
                    "slots": {
                        "ring1": {
                            "level": 2,
                            "name": "vitring"
                        },
                        "ring2": {
                            "name": "ringofluck",
                            "level": 0
                        },
                        "earring1": {
                            "level": 3,
                            "name": "vitearring"
                        },
                        "earring2": {
                            "level": 3,
                            "name": "vitearring"
                        },
                        "belt": {
                            "name": "hpbelt",
                            "level": 4
                        },
                        "mainhand": {
                            "name": "staff",
                            "level": 2
                        },
                        "offhand": null,
                        "helmet": {
                            "name": "ghatp"
                        },
                        "chest": {
                            "name": "tshirt4",
                            "level": 7
                        },
                        "pants": null,
                        "shoes": {
                            "level": 8,
                            "name": "eslippers"
                        },
                        "gloves": null,
                        "amulet": {
                            "name": "intamulet",
                            "level": 0
                        },
                        "orb": {
                            "level": 0,
                            "name": "test_orb"
                        },
                        "elixir": null,
                        "cape": {
                            "name": "angelwings",
                            "level": 6
                        },
                        "trade1": {
                            "name": "cryptkey",
                            "q": 10,
                            "price": 1,
                            "rid": "xWAf",
                            "giveaway": 12,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ]
                        },
                        "trade2": {
                            "name": "cryptkey",
                            "q": 10,
                            "price": 1,
                            "rid": "Azad",
                            "giveaway": 12,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ]
                        },
                        "trade3": {
                            "name": "cryptkey",
                            "q": 10,
                            "price": 1,
                            "rid": "hCGy",
                            "giveaway": 12,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ]
                        },
                        "trade4": {
                            "name": "cryptkey",
                            "q": 10,
                            "price": 1,
                            "rid": "MAGI",
                            "giveaway": 12,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ]
                        },
                        "trade5": {
                            "name": "cryptkey",
                            "q": 10,
                            "price": 1,
                            "rid": "OTgW",
                            "giveaway": 12,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ]
                        },
                        "trade6": {
                            "name": "cryptkey",
                            "q": 10,
                            "price": 1,
                            "rid": "hC6s",
                            "giveaway": 12,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ]
                        },
                        "trade7": {
                            "name": "cryptkey",
                            "q": 10,
                            "price": 1,
                            "rid": "QO08",
                            "giveaway": 12,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ]
                        },
                        "trade8": {
                            "name": "cryptkey",
                            "q": 10,
                            "price": 1,
                            "rid": "ybtJ",
                            "giveaway": 13,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ]
                        },
                        "trade9": {
                            "name": "cryptkey",
                            "q": 10,
                            "price": 1,
                            "rid": "fgHM",
                            "giveaway": 13,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ]
                        },
                        "trade10": {
                            "name": "cryptkey",
                            "q": 10,
                            "price": 1,
                            "rid": "W6xf",
                            "giveaway": 13,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ]
                        },
                        "trade11": {
                            "name": "cryptkey",
                            "q": 10,
                            "price": 1,
                            "rid": "dPrg",
                            "giveaway": 13,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ]
                        },
                        "trade12": {
                            "name": "cryptkey",
                            "q": 10,
                            "price": 1,
                            "rid": "fklP",
                            "giveaway": 13,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ]
                        },
                        "trade13": {
                            "name": "cryptkey",
                            "q": 10,
                            "price": 1,
                            "rid": "TXPN",
                            "giveaway": 13,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ]
                        },
                        "trade14": {
                            "name": "cryptkey",
                            "q": 10,
                            "price": 1,
                            "rid": "pWs3",
                            "giveaway": 13,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ]
                        },
                        "trade15": {
                            "name": "cryptkey",
                            "q": 10,
                            "price": 1,
                            "rid": "WkM6",
                            "giveaway": 13,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ]
                        },
                        "trade16": {
                            "name": "cryptkey",
                            "q": 10,
                            "price": 1,
                            "rid": "JuyW",
                            "giveaway": 13,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ]
                        },
                        "trade17": {
                            "name": "cryptkey",
                            "q": 10,
                            "price": 1,
                            "rid": "Vgpq",
                            "giveaway": 13,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ]
                        },
                        "trade18": {
                            "name": "cryptkey",
                            "q": 10,
                            "price": 1,
                            "rid": "GiJH",
                            "giveaway": 13,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ]
                        },
                        "trade19": {
                            "name": "offeringp",
                            "q": 10,
                            "price": 1,
                            "rid": "qnBI",
                            "giveaway": 26,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ]
                        },
                        "trade20": {
                            "name": "offeringp",
                            "q": 10,
                            "price": 1,
                            "rid": "zMtL",
                            "giveaway": 26,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ]
                        },
                        "trade21": {
                            "name": "offeringp",
                            "q": 10,
                            "price": 1,
                            "rid": "Ufx6",
                            "giveaway": 26,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ]
                        },
                        "trade22": {
                            "name": "offeringp",
                            "q": 10,
                            "price": 1,
                            "rid": "TTA8",
                            "giveaway": 25,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ]
                        },
                        "trade23": {
                            "name": "offeringp",
                            "q": 10,
                            "price": 1,
                            "rid": "c5HH",
                            "giveaway": 25,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ]
                        },
                        "trade24": {
                            "name": "offeringp",
                            "q": 10,
                            "price": 1,
                            "rid": "JXO3",
                            "giveaway": 25,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ]
                        },
                        "trade25": {
                            "name": "offeringp",
                            "q": 500,
                            "price": 1,
                            "rid": "dbIg",
                            "giveaway": 53,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ]
                        },
                        "trade26": {
                            "name": "offeringp",
                            "q": 50,
                            "price": 1,
                            "rid": "L399",
                            "giveaway": 53,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ]
                        },
                        "trade27": {
                            "rid": "D6ZF",
                            "name": "strearring",
                            "level": 4,
                            "price": 1,
                            "giveaway": 27,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ]
                        },
                        "trade28": {
                            "rid": "fuLi",
                            "name": "strearring",
                            "level": 4,
                            "price": 1,
                            "giveaway": 27,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ]
                        },
                        "trade29": {
                            "rid": "IiBy",
                            "name": "dexearring",
                            "level": 4,
                            "price": 1,
                            "giveaway": 27,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ]
                        },
                        "trade30": {
                            "name": "wbook0",
                            "level": 4,
                            "price": 1,
                            "rid": "wxVo",
                            "giveaway": 14,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ]
                        }
                    },
                    "ctype": "merchant",
                    "owner": "5553608930623488"
                },
                {
                    "hp": 5468,
                    "max_hp": 5468,
                    "mp": 1935,
                    "max_mp": 1935,
                    "xp": 15888347,
                    "attack": 73,
                    "frequency": 0.6775064121176926,
                    "speed": 10,
                    "range": 20,
                    "armor": 55,
                    "resistance": 122,
                    "level": 57,
                    "party": "ShadowKnight",
                    "rip": false,
                    "code": true,
                    "afk": true,
                    "target": null,
                    "focus": "kouin",
                    "s": {
                        "mluck": {
                            "ms": 279278,
                            "f": "Mekhet"
                        }
                    },
                    "c": {},
                    "q": {},
                    "age": 346,
                    "pdps": 1.8788340662190798e-10,
                    "id": "Moneybaggers",
                    "x": -124,
                    "y": -1,
                    "moving": false,
                    "going_x": -124,
                    "going_y": -1,
                    "abs": false,
                    "move_num": 50856591,
                    "angle": 86.52503986459246,
                    "cid": 6766,
                    "stand": "stand0",
                    "skin": "marmor12a",
                    "cx": {
                        "hair": "hairdo520",
                        "head": "fmakeup01",
                        "hat": "hat404"
                    },
                    "slots": {
                        "ring1": {
                            "level": 0,
                            "name": "vitring"
                        },
                        "ring2": {
                            "name": "vitring",
                            "level": 3
                        },
                        "earring1": {
                            "level": 0,
                            "name": "vitearring"
                        },
                        "earring2": null,
                        "belt": {
                            "level": 4,
                            "name": "hpbelt"
                        },
                        "mainhand": null,
                        "offhand": null,
                        "helmet": {
                            "level": 0,
                            "name": "helmet"
                        },
                        "chest": null,
                        "pants": null,
                        "shoes": {
                            "level": 7,
                            "stat_type": "dex",
                            "name": "shoes"
                        },
                        "gloves": null,
                        "amulet": {
                            "level": 4,
                            "name": "hpamulet"
                        },
                        "orb": {
                            "level": 0,
                            "name": "test_orb"
                        },
                        "elixir": null,
                        "cape": null,
                        "trade1": null,
                        "trade2": null,
                        "trade3": null,
                        "trade4": null,
                        "trade5": null,
                        "trade6": {
                            "price": 750000,
                            "name": "bowofthedead",
                            "rid": "ruCd",
                            "level": 0
                        },
                        "trade7": {
                            "price": 750000,
                            "name": "maceofthedead",
                            "rid": "EiHT",
                            "level": 0
                        },
                        "trade8": null,
                        "trade9": {
                            "price": 500000,
                            "name": "daggerofthedead",
                            "rid": "qbdi",
                            "level": 0
                        },
                        "trade10": {
                            "price": 750000,
                            "name": "bowofthedead",
                            "rid": "oKVv",
                            "level": 0
                        },
                        "trade11": {
                            "price": 750000,
                            "name": "maceofthedead",
                            "rid": "AIsB",
                            "level": 0
                        },
                        "trade12": null,
                        "trade13": {
                            "price": 500000,
                            "name": "daggerofthedead",
                            "rid": "S1Iu",
                            "level": 0
                        },
                        "trade14": {
                            "price": 750000,
                            "name": "bowofthedead",
                            "rid": "Cd8v",
                            "level": 0
                        },
                        "trade15": {
                            "price": 750000,
                            "name": "maceofthedead",
                            "rid": "Us40",
                            "level": 0
                        },
                        "trade16": {
                            "b": true,
                            "name": "mbelt",
                            "level": 0,
                            "price": 6500000,
                            "q": 2,
                            "rid": "XeAi"
                        }
                    },
                    "ctype": "merchant",
                    "owner": "6314512450322432"
                },
                {
                    "hp": 2533,
                    "max_hp": 2533,
                    "mp": 920,
                    "max_mp": 1190,
                    "xp": 356886,
                    "attack": 165,
                    "frequency": 0.5136431716995742,
                    "speed": 10,
                    "range": 82,
                    "armor": 132,
                    "resistance": 158,
                    "level": 39,
                    "party": "BadgerMerch",
                    "rip": false,
                    "code": true,
                    "afk": true,
                    "s": {
                        "mluck": {
                            "ms": 317174,
                            "f": "Mekhet"
                        }
                    },
                    "c": {},
                    "q": {},
                    "age": 51,
                    "pdps": 0,
                    "id": "BadgerMerch",
                    "x": -151,
                    "y": -69,
                    "moving": false,
                    "going_x": -151,
                    "going_y": -69,
                    "abs": false,
                    "move_num": 50937193,
                    "angle": 90,
                    "cid": 13,
                    "stand": "stand0",
                    "skin": "marmor12b",
                    "cx": {
                        "hair": "hairdo521",
                        "upper": "marmor12a",
                        "hat": "hat404"
                    },
                    "slots": {
                        "ring1": {
                            "name": "ringsj",
                            "level": 0
                        },
                        "ring2": {
                            "name": "ringsj",
                            "level": 0
                        },
                        "earring1": {
                            "level": 0,
                            "name": "dexearring"
                        },
                        "earring2": {
                            "name": "dexearring",
                            "level": 0
                        },
                        "belt": {
                            "name": "hpbelt",
                            "level": 2
                        },
                        "mainhand": {
                            "level": 4,
                            "gift": 1,
                            "name": "staff"
                        },
                        "offhand": null,
                        "helmet": {
                            "level": 0,
                            "name": "mchat"
                        },
                        "chest": {
                            "name": "mcarmor",
                            "level": 0
                        },
                        "pants": {
                            "name": "mcpants",
                            "level": 0
                        },
                        "shoes": {
                            "level": 0,
                            "name": "mcboots"
                        },
                        "gloves": null,
                        "amulet": {
                            "name": "hpamulet",
                            "level": 0
                        },
                        "orb": {
                            "name": "jacko",
                            "level": 0
                        },
                        "elixir": null,
                        "cape": {
                            "name": "ecape",
                            "level": 0
                        },
                        "trade1": null,
                        "trade2": null,
                        "trade3": null,
                        "trade4": null,
                        "trade5": null,
                        "trade6": null,
                        "trade7": null,
                        "trade8": null,
                        "trade9": null,
                        "trade10": null,
                        "trade11": null,
                        "trade12": null,
                        "trade13": {
                            "name": "epyjamas",
                            "price": 60000,
                            "rid": "Tm66",
                            "level": 0
                        },
                        "trade14": null,
                        "trade15": {
                            "price": 500000,
                            "name": "carrotsword",
                            "rid": "HpXc",
                            "level": 0
                        },
                        "trade16": null
                    },
                    "ctype": "merchant",
                    "owner": "6668530097848320"
                },
                {
                    "hp": 15499,
                    "max_hp": 15499,
                    "mp": 1682,
                    "max_mp": 7355,
                    "xp": 4869843798,
                    "attack": 2186,
                    "frequency": 1.4525196597948122,
                    "speed": 79,
                    "range": 215,
                    "armor": 416,
                    "resistance": 602,
                    "level": 92,
                    "party": "cclair",
                    "rip": false,
                    "code": true,
                    "afk": true,
                    "target": "5459336",
                    "focus": null,
                    "s": {
                        "mluck": {
                            "ms": 3550796,
                            "f": "kouin",
                            "strong": true
                        },
                        "rspeed": {
                            "ms": 761104,
                            "f": "kakaka"
                        },
                        "blink": {
                            "ms": 120,
                            "in": "main",
                            "map": "main",
                            "x": -1180,
                            "y": 420,
                            "d": 0
                        }
                    },
                    "c": {},
                    "q": {
                        "exchange": {
                            "ms": 3807,
                            "len": 3887,
                            "name": "basketofeggs",
                            "id": "basketofeggs",
                            "q": 1,
                            "num": 6
                        }
                    },
                    "age": 122,
                    "pdps": 92807.5,
                    "id": "cclair",
                    "x": 232,
                    "y": 397,
                    "moving": false,
                    "going_x": 194.7265555581004,
                    "going_y": -632.8253199835418,
                    "abs": false,
                    "move_num": 50938041,
                    "angle": -18.26811214658535,
                    "cid": 282,
                    "skin": "mbody4g",
                    "cx": {
                        "upper": "marmor12d",
                        "head": "mmakeup00"
                    },
                    "slots": {
                        "ring1": {
                            "name": "cring",
                            "level": 5
                        },
                        "ring2": {
                            "name": "cring",
                            "level": 5
                        },
                        "earring1": {
                            "name": "cearring",
                            "level": 5
                        },
                        "earring2": {
                            "level": 5,
                            "name": "cearring"
                        },
                        "belt": {
                            "name": "intbelt",
                            "level": 3
                        },
                        "mainhand": {
                            "level": 9,
                            "name": "froststaff"
                        },
                        "offhand": {
                            "level": 6,
                            "l": "l",
                            "name": "wbook0"
                        },
                        "helmet": {
                            "acc": 1,
                            "stat_type": "int",
                            "name": "cyber",
                            "level": 7
                        },
                        "chest": {
                            "level": 9,
                            "stat_type": "int",
                            "name": "vattire"
                        },
                        "pants": {
                            "acc": 98626,
                            "name": "starkillers",
                            "level": 5,
                            "ach": "gooped",
                            "stat_type": "int"
                        },
                        "shoes": {
                            "stat_type": "int",
                            "name": "wingedboots",
                            "level": 9
                        },
                        "gloves": {
                            "level": 7,
                            "stat_type": "int",
                            "name": "supermittens"
                        },
                        "amulet": {
                            "level": 5,
                            "name": "intamulet"
                        },
                        "orb": {
                            "name": "test_orb",
                            "level": 0
                        },
                        "elixir": {
                            "expires": "2021-05-22T10:45:07.392Z",
                            "name": "pumpkinspice",
                            "ex": true
                        },
                        "cape": {
                            "stat_type": "int",
                            "name": "stealthcape",
                            "level": 0
                        }
                    },
                    "ctype": "mage",
                    "owner": "6484680205926400"
                },
                {
                    "hp": 5021,
                    "max_hp": 5021,
                    "mp": 4745,
                    "max_mp": 4775,
                    "xp": 6969459,
                    "attack": 144,
                    "frequency": 0.7470348190089043,
                    "speed": 77,
                    "range": 20,
                    "armor": 150,
                    "resistance": 371,
                    "level": 53,
                    "rip": false,
                    "afk": true,
                    "s": {
                        "mlifesteal": {
                            "ms": 47687
                        }
                    },
                    "c": {},
                    "q": {},
                    "age": 472,
                    "pdps": 0,
                    "id": "earthMer2",
                    "x": 63.30048491762997,
                    "y": -100.3483931085649,
                    "cid": 1,
                    "stand": false,
                    "skin": "mmerchant",
                    "cx": {},
                    "slots": {
                        "ring1": {
                            "name": "intring",
                            "level": 1
                        },
                        "ring2": {
                            "name": "intring",
                            "level": 4
                        },
                        "earring1": {
                            "level": 3,
                            "name": "intearring"
                        },
                        "earring2": {
                            "level": 4,
                            "name": "intearring"
                        },
                        "belt": {
                            "level": 4,
                            "name": "intbelt"
                        },
                        "mainhand": null,
                        "offhand": null,
                        "helmet": {
                            "acc": 1,
                            "name": "wcap",
                            "level": 9,
                            "stat_type": "int"
                        },
                        "chest": {
                            "stat_type": "int",
                            "name": "wattire",
                            "level": 9
                        },
                        "pants": {
                            "stat_type": "int",
                            "name": "wbreeches",
                            "level": 9
                        },
                        "shoes": {
                            "stat_type": "int",
                            "name": "wshoes",
                            "level": 9
                        },
                        "gloves": {
                            "level": 9,
                            "stat_type": "int",
                            "name": "gloves"
                        },
                        "amulet": {
                            "name": "intamulet",
                            "level": 3
                        },
                        "orb": {
                            "name": "jacko",
                            "level": 4
                        },
                        "elixir": null,
                        "cape": {
                            "name": "stealthcape",
                            "level": 0
                        }
                    },
                    "ctype": "merchant",
                    "owner": ""
                }
            ],
            "monsters": [
                {
                    "hp": 49831,
                    "mp": 250,
                    "armor": 0,
                    "resistance": 0,
                    "id": "30",
                    "x": -571,
                    "y": 323,
                    "going_x": -571,
                    "going_y": 323,
                    "type": "target",
                    "cid": 1,
                    "s": {}
                },
                {
                    "hp": 49834,
                    "mp": 250,
                    "armor": 0,
                    "id": "33",
                    "x": -250,
                    "y": 280,
                    "going_x": -250,
                    "going_y": 280,
                    "type": "target_r500",
                    "cid": 1,
                    "s": {}
                },
                {
                    "hp": 48265,
                    "mp": 250,
                    "armor": 0,
                    "id": "34",
                    "x": -230,
                    "y": 280,
                    "going_x": -230,
                    "going_y": 280,
                    "type": "target_r750",
                    "cid": 1,
                    "s": {}
                },
                {
                    "hp": 30670,
                    "mp": 250,
                    "resistance": 0,
                    "id": "2542926",
                    "x": -270,
                    "y": 280,
                    "going_x": -270,
                    "going_y": 280,
                    "type": "target_a750",
                    "cid": 1,
                    "s": {}
                },
                {
                    "mp": 250,
                    "resistance": 0,
                    "id": "2554224",
                    "x": -290,
                    "y": 280,
                    "going_x": -290,
                    "going_y": 280,
                    "type": "target_a500",
                    "cid": 1,
                    "s": {}
                },
                {
                    "mp": 250,
                    "id": "4955539",
                    "x": -210,
                    "y": 280,
                    "going_x": -210,
                    "going_y": 280,
                    "type": "target_ar900",
                    "cid": 1,
                    "s": {}
                },
                {
                    "mp": 1,
                    "armor": 0,
                    "resistance": 0,
                    "id": "5366918",
                    "x": -82.92046044107204,
                    "y": -298.2638061919742,
                    "moving": true,
                    "going_x": -110.7475114743804,
                    "going_y": -286.21627513425153,
                    "abs": false,
                    "move_num": 50938552,
                    "angle": 156.59013157795764,
                    "type": "hen",
                    "cid": 1,
                    "s": {}
                },
                {
                    "mp": 1,
                    "armor": 0,
                    "resistance": 0,
                    "id": "5366920",
                    "x": -39.19254454220768,
                    "y": -274.509516416441,
                    "moving": true,
                    "going_x": -51.08535044613559,
                    "going_y": -265.7636183077833,
                    "abs": false,
                    "move_num": 50938494,
                    "angle": 143.66945967091306,
                    "type": "hen",
                    "cid": 1,
                    "s": {}
                },
                {
                    "mp": 1,
                    "armor": 0,
                    "resistance": 0,
                    "id": "5366924",
                    "x": -85.17596207749833,
                    "y": -284.7045872479213,
                    "moving": true,
                    "going_x": -96.9836168726887,
                    "going_y": -282.15255547631085,
                    "abs": false,
                    "move_num": 50938617,
                    "angle": 167.80404963968596,
                    "type": "rooster",
                    "cid": 1,
                    "s": {}
                }
            ],
            "type": "all",
            "in": "main",
            "map": "main"
        }
    }
    expect(start).toBeDefined()
})