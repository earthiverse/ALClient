import { StartData } from "./adventureland-server"

/**
 * The following is from socket events received 2021-05-22
 * It is used to confirm type correctness
 */

test("StartData type validation", async () => {
    const start: StartData = {
        "acx": {},
        "afk": true,
        "age": 472,
        "apiercing": 9,
        "armor": 150,
        "attack": 144,
        "base_gold": {
            "a1": {
                "crypt": 9537313
            },
            "a2": {
                "crypt": 94349
            },
            "a3": {
                "crypt": 76827
            },
            "a4": {
                "crypt": 210093
            },
            "a5": {
                "crypt": 51668
            },
            "a6": {
                "crypt": 71885
            },
            "a7": {
                "crypt": 161741
            },
            "a8": {
                "crypt": 125799
            },
            "arcticbee": {
                "winterland": 78
            },
            "armadillo": {
                "main": 55
            },
            "bat": {
                "batcave": 106,
                "cave": 68,
                "old_main": 106
            },
            "bbpompom": {
                "level3": 397,
                "winter_cave": 320
            },
            "bee": {
                "main": 26
            },
            "bigbird": {
                "main": 899
            },
            "bluefairy": {
                "main": 112320
            },
            "boar": {
                "winterland": 587
            },
            "booboo": {
                "spookytown": 281
            },
            "bscorpion": {
                "desertland": 36382
            },
            "cgoo": {
                "arena": 348,
                "level2s": 348,
                "level4": 348
            },
            "crab": {
                "main": 17
            },
            "crabx": {
                "main": 118
            },
            "croc": {
                "main": 61
            },
            "d_wiz": {
                "d2": 16528
            },
            "dknight2": {
                "old_main": 6283
            },
            "ent": {
                "desertland": 675949
            },
            "fireroamer": {
                "desertland": 6535
            },
            "frog": {
                "main": 41
            },
            "fvampire": {
                "halloween": 6740
            },
            "gbluepro": {
                "tomb": 311626
            },
            "ggreenpro": {
                "tomb": 44928
            },
            "ghost": {
                "halloween": 588
            },
            "goo": {
                "dungeon0": 16,
                "goobrawl": 9,
                "main": 9,
                "old_main": 9
            },
            "gpurplepro": {
                "tomb": 376650
            },
            "gredpro": {
                "tomb": 190619
            },
            "greenfairy": {
                "main": 101088
            },
            "greenjr": {
                "halloween": 236
            },
            "grinch": {
                "woffice": 1098531
            },
            "hen": {
                "main": 6
            },
            "icegolem": {
                "winterland": 7731924
            },
            "iceroamer": {
                "winterland": 196
            },
            "jr": {
                "spookytown": 180
            },
            "jrat": {
                "jail": 320
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
            "mechagnome": {
                "cyberland": 25509
            },
            "minimush": {
                "halloween": 34
            },
            "mole": {
                "tunnel": 798
            },
            "mummy": {
                "level3": 2002,
                "level4": 2002,
                "spookytown": 1126
            },
            "mvampire": {
                "batcave": 6740,
                "cave": 6740
            },
            "oneeye": {
                "level2w": 35997
            },
            "osnake": {
                "halloween": 44
            },
            "phoenix": {
                "main": 4493,
                "old_main": 4493
            },
            "pinkgoblin": {
                "level2e": 79530
            },
            "plantoid": {
                "desertland": 9874
            },
            "poisio": {
                "main": 58
            },
            "porcupine": {
                "desertland": 86
            },
            "pppompom": {
                "level2n": 4586
            },
            "prat": {
                "level1": 734
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
            "rat": {
                "mansion": 50
            },
            "redfairy": {
                "main": 134784
            },
            "rooster": {
                "main": 6
            },
            "scorpion": {
                "desertland": 140,
                "main": 68,
                "old_main": 140
            },
            "skeletor": {
                "arena": 2247
            },
            "snake": {
                "halloween": 44,
                "main": 44
            },
            "spider": {
                "main": 87,
                "old_main": 121
            },
            "squig": {
                "main": 61
            },
            "squigtoad": {
                "main": 41
            },
            "stompy": {
                "winterland": 36724
            },
            "stoneworm": {
                "spookytown": 65
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
            "target_ar500red": {
                "main": 20
            },
            "target_ar900": {
                "main": 20
            },
            "target_r500": {
                "main": 20
            },
            "target_r750": {
                "main": 20
            },
            "tinyp": {
                "halloween": 158
            },
            "tortoise": {
                "main": 97
            },
            "vbat": {
                "crypt": 74469
            },
            "wolf": {
                "winterland": 2960
            },
            "wolfie": {
                "winterland": 1235
            },
            "xmagefi": {
                "winter_instance": 702110
            },
            "xmagefz": {
                "winter_instance": 449998
            },
            "xmagen": {
                "winter_instance": 513598
            },
            "xmagex": {
                "winter_instance": 52930167
            },
            "xscorpion": {
                "halloween": 905
            }
        },
        "blast": 0,
        "c": {},
        "cash": 4586,
        "cc": 0,
        "cid": 1,
        "code": "var attack_mode=false\n\nsetInterval(function(){\n\n\tuse_hp_or_mp();\n\tloot();\n\n\tif(!attack_mode || character.rip || is_moving(character)) return;\n\n\tvar target=get_targeted_monster();\n\tif(!target)\n\t{\n\t\ttarget=get_nearest_monster({min_xp:100,max_att:120});\n\t\tif(target) change_target(target);\n\t\telse\n\t\t{\n\t\t\tset_message(\"No Monsters\");\n\t\t\treturn;\n\t\t}\n\t}\n\t\n\tif(!is_in_range(target))\n\t{\n\t\tmove(\n\t\t\tcharacter.x+(target.x-character.x)/2,\n\t\t\tcharacter.y+(target.y-character.y)/2\n\t\t\t);\n\t\t// Walk half the distance\n\t}\n\telse if(can_attack(target))\n\t{\n\t\tset_message(\"Attacking\");\n\t\tattack(target);\n\t}\n\n},1000/4); // Loops every 1/4 seconds.\n\n// Learn Javascript: https://www.codecademy.com/learn/learn-javascript\n// Write your own CODE: https://github.com/kaansoral/adventureland\n// NOTE: If the tab isn't focused, browsers slow down the game\n// NOTE: Use the performance_trick() function as a workaround\n",
        "code_slot": 5139959430774784,
        "code_version": 1,
        "courage": 1,
        "crit": 0.75,
        "critdamage": 0,
        "ctype": "merchant",
        "cx": {},
        "dex": 41,
        "dreturn": 1,
        "emx": {},
        "entities": {
            "in": "main",
            "map": "main",
            "monsters": [
                {
                    "armor": 0,
                    "cid": 1,
                    "going_x": -571,
                    "going_y": 323,
                    "hp": 49831,
                    "id": "30",
                    "mp": 250,
                    "resistance": 0,
                    "s": {},
                    "type": "target",
                    "x": -571,
                    "y": 323
                },
                {
                    "armor": 0,
                    "cid": 1,
                    "going_x": -250,
                    "going_y": 280,
                    "hp": 49834,
                    "id": "33",
                    "mp": 250,
                    "s": {},
                    "type": "target_r500",
                    "x": -250,
                    "y": 280
                },
                {
                    "armor": 0,
                    "cid": 1,
                    "going_x": -230,
                    "going_y": 280,
                    "hp": 48265,
                    "id": "34",
                    "mp": 250,
                    "s": {},
                    "type": "target_r750",
                    "x": -230,
                    "y": 280
                },
                {
                    "cid": 1,
                    "going_x": -270,
                    "going_y": 280,
                    "hp": 30670,
                    "id": "2542926",
                    "mp": 250,
                    "resistance": 0,
                    "s": {},
                    "type": "target_a750",
                    "x": -270,
                    "y": 280
                },
                {
                    "cid": 1,
                    "going_x": -290,
                    "going_y": 280,
                    "id": "2554224",
                    "mp": 250,
                    "resistance": 0,
                    "s": {},
                    "type": "target_a500",
                    "x": -290,
                    "y": 280
                },
                {
                    "cid": 1,
                    "going_x": -210,
                    "going_y": 280,
                    "id": "4955539",
                    "mp": 250,
                    "s": {},
                    "type": "target_ar900",
                    "x": -210,
                    "y": 280
                },
                {
                    "abs": false,
                    "angle": 156.59013157795764,
                    "armor": 0,
                    "cid": 1,
                    "going_x": -110.7475114743804,
                    "going_y": -286.21627513425153,
                    "id": "5366918",
                    "move_num": 50938552,
                    "moving": true,
                    "mp": 1,
                    "resistance": 0,
                    "s": {},
                    "type": "hen",
                    "x": -82.92046044107204,
                    "y": -298.2638061919742
                },
                {
                    "abs": false,
                    "angle": 143.66945967091306,
                    "armor": 0,
                    "cid": 1,
                    "going_x": -51.08535044613559,
                    "going_y": -265.7636183077833,
                    "id": "5366920",
                    "move_num": 50938494,
                    "moving": true,
                    "mp": 1,
                    "resistance": 0,
                    "s": {},
                    "type": "hen",
                    "x": -39.19254454220768,
                    "y": -274.509516416441
                },
                {
                    "abs": false,
                    "angle": 167.80404963968596,
                    "armor": 0,
                    "cid": 1,
                    "going_x": -96.9836168726887,
                    "going_y": -282.15255547631085,
                    "id": "5366924",
                    "move_num": 50938617,
                    "moving": true,
                    "mp": 1,
                    "resistance": 0,
                    "s": {},
                    "type": "rooster",
                    "x": -85.17596207749833,
                    "y": -284.7045872479213
                }
            ],
            "players": [
                {
                    "abs": false,
                    "angle": -127.29066691996609,
                    "armor": 500,
                    "c": {},
                    "cid": 0,
                    "ctype": "bean",
                    "cx": {},
                    "going_x": -94,
                    "going_y": -47,
                    "hp": 3200,
                    "id": "Bean",
                    "level": 100,
                    "max_hp": 3200,
                    "move_num": 50938495,
                    "moving": true,
                    "npc": "bean",
                    "owner": "",
                    "q": {},
                    "s": {},
                    "skin": "lionsuit",
                    "speed": 30,
                    "x": -71.81078044519477,
                    "xp": 0,
                    "y": -17.862640988639615
                },
                {
                    "abs": false,
                    "afk": true,
                    "age": 365,
                    "angle": 149.7970252891833,
                    "armor": 86,
                    "attack": 375,
                    "c": {},
                    "cid": 23179,
                    "code": true,
                    "ctype": "merchant",
                    "cx": {
                        "hair": "hairdo118",
                        "hat": "hat206",
                        "head": "makeup117"
                    },
                    "focus": null,
                    "frequency": 0.9177255129694154,
                    "going_x": -2.750955597045788,
                    "going_y": -36.08600331769935,
                    "hp": 8242,
                    "id": "MoneyS",
                    "level": 80,
                    "max_hp": 10034,
                    "max_mp": 3710,
                    "move_num": 50838393,
                    "moving": false,
                    "mp": 3222,
                    "owner": "5553608930623488",
                    "pdps": 0,
                    "q": {},
                    "range": 76,
                    "resistance": 225,
                    "rip": false,
                    "s": {},
                    "skin": "marmor7e",
                    "slots": {
                        "amulet": {
                            "level": 0,
                            "name": "intamulet"
                        },
                        "belt": {
                            "level": 4,
                            "name": "hpbelt"
                        },
                        "cape": {
                            "level": 6,
                            "name": "angelwings"
                        },
                        "chest": {
                            "level": 7,
                            "name": "tshirt4"
                        },
                        "earring1": {
                            "level": 3,
                            "name": "vitearring"
                        },
                        "earring2": {
                            "level": 3,
                            "name": "vitearring"
                        },
                        "elixir": null,
                        "gloves": null,
                        "helmet": {
                            "name": "ghatp"
                        },
                        "mainhand": {
                            "level": 2,
                            "name": "staff"
                        },
                        "offhand": null,
                        "orb": {
                            "level": 0,
                            "name": "test_orb"
                        },
                        "pants": null,
                        "ring1": {
                            "level": 2,
                            "name": "vitring"
                        },
                        "ring2": {
                            "level": 0,
                            "name": "ringofluck"
                        },
                        "shoes": {
                            "level": 8,
                            "name": "eslippers"
                        },
                        "trade1": {
                            "giveaway": 12,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ],
                            "name": "cryptkey",
                            "price": 1,
                            "q": 10,
                            "rid": "xWAf"
                        },
                        "trade10": {
                            "giveaway": 13,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ],
                            "name": "cryptkey",
                            "price": 1,
                            "q": 10,
                            "rid": "W6xf"
                        },
                        "trade11": {
                            "giveaway": 13,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ],
                            "name": "cryptkey",
                            "price": 1,
                            "q": 10,
                            "rid": "dPrg"
                        },
                        "trade12": {
                            "giveaway": 13,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ],
                            "name": "cryptkey",
                            "price": 1,
                            "q": 10,
                            "rid": "fklP"
                        },
                        "trade13": {
                            "giveaway": 13,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ],
                            "name": "cryptkey",
                            "price": 1,
                            "q": 10,
                            "rid": "TXPN"
                        },
                        "trade14": {
                            "giveaway": 13,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ],
                            "name": "cryptkey",
                            "price": 1,
                            "q": 10,
                            "rid": "pWs3"
                        },
                        "trade15": {
                            "giveaway": 13,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ],
                            "name": "cryptkey",
                            "price": 1,
                            "q": 10,
                            "rid": "WkM6"
                        },
                        "trade16": {
                            "giveaway": 13,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ],
                            "name": "cryptkey",
                            "price": 1,
                            "q": 10,
                            "rid": "JuyW"
                        },
                        "trade17": {
                            "giveaway": 13,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ],
                            "name": "cryptkey",
                            "price": 1,
                            "q": 10,
                            "rid": "Vgpq"
                        },
                        "trade18": {
                            "giveaway": 13,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ],
                            "name": "cryptkey",
                            "price": 1,
                            "q": 10,
                            "rid": "GiJH"
                        },
                        "trade19": {
                            "giveaway": 26,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ],
                            "name": "offeringp",
                            "price": 1,
                            "q": 10,
                            "rid": "qnBI"
                        },
                        "trade2": {
                            "giveaway": 12,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ],
                            "name": "cryptkey",
                            "price": 1,
                            "q": 10,
                            "rid": "Azad"
                        },
                        "trade20": {
                            "giveaway": 26,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ],
                            "name": "offeringp",
                            "price": 1,
                            "q": 10,
                            "rid": "zMtL"
                        },
                        "trade21": {
                            "giveaway": 26,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ],
                            "name": "offeringp",
                            "price": 1,
                            "q": 10,
                            "rid": "Ufx6"
                        },
                        "trade22": {
                            "giveaway": 25,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ],
                            "name": "offeringp",
                            "price": 1,
                            "q": 10,
                            "rid": "TTA8"
                        },
                        "trade23": {
                            "giveaway": 25,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ],
                            "name": "offeringp",
                            "price": 1,
                            "q": 10,
                            "rid": "c5HH"
                        },
                        "trade24": {
                            "giveaway": 25,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ],
                            "name": "offeringp",
                            "price": 1,
                            "q": 10,
                            "rid": "JXO3"
                        },
                        "trade25": {
                            "giveaway": 53,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ],
                            "name": "offeringp",
                            "price": 1,
                            "q": 500,
                            "rid": "dbIg"
                        },
                        "trade26": {
                            "giveaway": 53,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ],
                            "name": "offeringp",
                            "price": 1,
                            "q": 50,
                            "rid": "L399"
                        },
                        "trade27": {
                            "giveaway": 27,
                            "level": 4,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ],
                            "name": "strearring",
                            "price": 1,
                            "rid": "D6ZF"
                        },
                        "trade28": {
                            "giveaway": 27,
                            "level": 4,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ],
                            "name": "strearring",
                            "price": 1,
                            "rid": "fuLi"
                        },
                        "trade29": {
                            "giveaway": 27,
                            "level": 4,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ],
                            "name": "dexearring",
                            "price": 1,
                            "rid": "IiBy"
                        },
                        "trade3": {
                            "giveaway": 12,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ],
                            "name": "cryptkey",
                            "price": 1,
                            "q": 10,
                            "rid": "hCGy"
                        },
                        "trade30": {
                            "giveaway": 14,
                            "level": 4,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ],
                            "name": "wbook0",
                            "price": 1,
                            "rid": "wxVo"
                        },
                        "trade4": {
                            "giveaway": 12,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ],
                            "name": "cryptkey",
                            "price": 1,
                            "q": 10,
                            "rid": "MAGI"
                        },
                        "trade5": {
                            "giveaway": 12,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ],
                            "name": "cryptkey",
                            "price": 1,
                            "q": 10,
                            "rid": "OTgW"
                        },
                        "trade6": {
                            "giveaway": 12,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ],
                            "name": "cryptkey",
                            "price": 1,
                            "q": 10,
                            "rid": "hC6s"
                        },
                        "trade7": {
                            "giveaway": 12,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ],
                            "name": "cryptkey",
                            "price": 1,
                            "q": 10,
                            "rid": "QO08"
                        },
                        "trade8": {
                            "giveaway": 13,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ],
                            "name": "cryptkey",
                            "price": 1,
                            "q": 10,
                            "rid": "ybtJ"
                        },
                        "trade9": {
                            "giveaway": 13,
                            "list": [
                                "BadgerMerch",
                                "earthMer2"
                            ],
                            "name": "cryptkey",
                            "price": 1,
                            "q": 10,
                            "rid": "fgHM"
                        }
                    },
                    "speed": 10,
                    "stand": "cstand",
                    "target": null,
                    "x": -2.750955597045788,
                    "xp": 1116029774,
                    "y": -36.08600331769935
                },
                {
                    "abs": false,
                    "afk": true,
                    "age": 346,
                    "angle": 86.52503986459246,
                    "armor": 55,
                    "attack": 73,
                    "c": {},
                    "cid": 6766,
                    "code": true,
                    "ctype": "merchant",
                    "cx": {
                        "hair": "hairdo520",
                        "hat": "hat404",
                        "head": "fmakeup01"
                    },
                    "focus": "kouin",
                    "frequency": 0.6775064121176926,
                    "going_x": -124,
                    "going_y": -1,
                    "hp": 5468,
                    "id": "Moneybaggers",
                    "level": 57,
                    "max_hp": 5468,
                    "max_mp": 1935,
                    "move_num": 50856591,
                    "moving": false,
                    "mp": 1935,
                    "owner": "6314512450322432",
                    "party": "ShadowKnight",
                    "pdps": 1.8788340662190798e-10,
                    "q": {},
                    "range": 20,
                    "resistance": 122,
                    "rip": false,
                    "s": {
                        "mluck": {
                            "f": "Mekhet",
                            "ms": 279278
                        }
                    },
                    "skin": "marmor12a",
                    "slots": {
                        "amulet": {
                            "level": 4,
                            "name": "hpamulet"
                        },
                        "belt": {
                            "level": 4,
                            "name": "hpbelt"
                        },
                        "cape": null,
                        "chest": null,
                        "earring1": {
                            "level": 0,
                            "name": "vitearring"
                        },
                        "earring2": null,
                        "elixir": null,
                        "gloves": null,
                        "helmet": {
                            "level": 0,
                            "name": "helmet"
                        },
                        "mainhand": null,
                        "offhand": null,
                        "orb": {
                            "level": 0,
                            "name": "test_orb"
                        },
                        "pants": null,
                        "ring1": {
                            "level": 0,
                            "name": "vitring"
                        },
                        "ring2": {
                            "level": 3,
                            "name": "vitring"
                        },
                        "shoes": {
                            "level": 7,
                            "name": "shoes",
                            "stat_type": "dex"
                        },
                        "trade1": null,
                        "trade10": {
                            "level": 0,
                            "name": "bowofthedead",
                            "price": 750000,
                            "rid": "oKVv"
                        },
                        "trade11": {
                            "level": 0,
                            "name": "maceofthedead",
                            "price": 750000,
                            "rid": "AIsB"
                        },
                        "trade12": null,
                        "trade13": {
                            "level": 0,
                            "name": "daggerofthedead",
                            "price": 500000,
                            "rid": "S1Iu"
                        },
                        "trade14": {
                            "level": 0,
                            "name": "bowofthedead",
                            "price": 750000,
                            "rid": "Cd8v"
                        },
                        "trade15": {
                            "level": 0,
                            "name": "maceofthedead",
                            "price": 750000,
                            "rid": "Us40"
                        },
                        "trade16": {
                            "b": true,
                            "level": 0,
                            "name": "mbelt",
                            "price": 6500000,
                            "q": 2,
                            "rid": "XeAi"
                        },
                        "trade2": null,
                        "trade3": null,
                        "trade4": null,
                        "trade5": null,
                        "trade6": {
                            "level": 0,
                            "name": "bowofthedead",
                            "price": 750000,
                            "rid": "ruCd"
                        },
                        "trade7": {
                            "level": 0,
                            "name": "maceofthedead",
                            "price": 750000,
                            "rid": "EiHT"
                        },
                        "trade8": null,
                        "trade9": {
                            "level": 0,
                            "name": "daggerofthedead",
                            "price": 500000,
                            "rid": "qbdi"
                        }
                    },
                    "speed": 10,
                    "stand": "stand0",
                    "target": null,
                    "x": -124,
                    "xp": 15888347,
                    "y": -1
                },
                {
                    "abs": false,
                    "afk": true,
                    "age": 51,
                    "angle": 90,
                    "armor": 132,
                    "attack": 165,
                    "c": {},
                    "cid": 13,
                    "code": true,
                    "ctype": "merchant",
                    "cx": {
                        "hair": "hairdo521",
                        "hat": "hat404",
                        "upper": "marmor12a"
                    },
                    "frequency": 0.5136431716995742,
                    "going_x": -151,
                    "going_y": -69,
                    "hp": 2533,
                    "id": "BadgerMerch",
                    "level": 39,
                    "max_hp": 2533,
                    "max_mp": 1190,
                    "move_num": 50937193,
                    "moving": false,
                    "mp": 920,
                    "owner": "6668530097848320",
                    "party": "BadgerMerch",
                    "pdps": 0,
                    "q": {},
                    "range": 82,
                    "resistance": 158,
                    "rip": false,
                    "s": {
                        "mluck": {
                            "f": "Mekhet",
                            "ms": 317174
                        }
                    },
                    "skin": "marmor12b",
                    "slots": {
                        "amulet": {
                            "level": 0,
                            "name": "hpamulet"
                        },
                        "belt": {
                            "level": 2,
                            "name": "hpbelt"
                        },
                        "cape": {
                            "level": 0,
                            "name": "ecape"
                        },
                        "chest": {
                            "level": 0,
                            "name": "mcarmor"
                        },
                        "earring1": {
                            "level": 0,
                            "name": "dexearring"
                        },
                        "earring2": {
                            "level": 0,
                            "name": "dexearring"
                        },
                        "elixir": null,
                        "gloves": null,
                        "helmet": {
                            "level": 0,
                            "name": "mchat"
                        },
                        "mainhand": {
                            "gift": 1,
                            "level": 4,
                            "name": "staff"
                        },
                        "offhand": null,
                        "orb": {
                            "level": 0,
                            "name": "jacko"
                        },
                        "pants": {
                            "level": 0,
                            "name": "mcpants"
                        },
                        "ring1": {
                            "level": 0,
                            "name": "ringsj"
                        },
                        "ring2": {
                            "level": 0,
                            "name": "ringsj"
                        },
                        "shoes": {
                            "level": 0,
                            "name": "mcboots"
                        },
                        "trade1": null,
                        "trade10": null,
                        "trade11": null,
                        "trade12": null,
                        "trade13": {
                            "level": 0,
                            "name": "epyjamas",
                            "price": 60000,
                            "rid": "Tm66"
                        },
                        "trade14": null,
                        "trade15": {
                            "level": 0,
                            "name": "carrotsword",
                            "price": 500000,
                            "rid": "HpXc"
                        },
                        "trade16": null,
                        "trade2": null,
                        "trade3": null,
                        "trade4": null,
                        "trade5": null,
                        "trade6": null,
                        "trade7": null,
                        "trade8": null,
                        "trade9": null
                    },
                    "speed": 10,
                    "stand": "stand0",
                    "x": -151,
                    "xp": 356886,
                    "y": -69
                },
                {
                    "abs": false,
                    "afk": true,
                    "age": 122,
                    "angle": -18.26811214658535,
                    "armor": 416,
                    "attack": 2186,
                    "c": {},
                    "cid": 282,
                    "code": true,
                    "ctype": "mage",
                    "cx": {
                        "head": "mmakeup00",
                        "upper": "marmor12d"
                    },
                    "focus": null,
                    "frequency": 1.4525196597948122,
                    "going_x": 194.7265555581004,
                    "going_y": -632.8253199835418,
                    "hp": 15499,
                    "id": "cclair",
                    "level": 92,
                    "max_hp": 15499,
                    "max_mp": 7355,
                    "move_num": 50938041,
                    "moving": false,
                    "mp": 1682,
                    "owner": "6484680205926400",
                    "party": "cclair",
                    "pdps": 92807.5,
                    "q": {
                        "exchange": {
                            "id": "basketofeggs",
                            "len": 3887,
                            "ms": 3807,
                            "name": "basketofeggs",
                            "num": 6,
                            "q": 1
                        }
                    },
                    "range": 215,
                    "resistance": 602,
                    "rip": false,
                    "s": {
                        "blink": {
                            "d": 0,
                            "in": "main",
                            "map": "main",
                            "ms": 120,
                            "x": -1180,
                            "y": 420
                        },
                        "mluck": {
                            "f": "kouin",
                            "ms": 3550796,
                            "strong": true
                        },
                        "rspeed": {
                            "f": "kakaka",
                            "ms": 761104
                        }
                    },
                    "skin": "mbody4g",
                    "slots": {
                        "amulet": {
                            "level": 5,
                            "name": "intamulet"
                        },
                        "belt": {
                            "level": 3,
                            "name": "intbelt"
                        },
                        "cape": {
                            "level": 0,
                            "name": "stealthcape",
                            "stat_type": "int"
                        },
                        "chest": {
                            "level": 9,
                            "name": "vattire",
                            "stat_type": "int"
                        },
                        "earring1": {
                            "level": 5,
                            "name": "cearring"
                        },
                        "earring2": {
                            "level": 5,
                            "name": "cearring"
                        },
                        "elixir": {
                            "ex": true,
                            "expires": "2021-05-22T10:45:07.392Z",
                            "name": "pumpkinspice"
                        },
                        "gloves": {
                            "level": 7,
                            "name": "supermittens",
                            "stat_type": "int"
                        },
                        "helmet": {
                            "acc": 1,
                            "level": 7,
                            "name": "cyber",
                            "stat_type": "int"
                        },
                        "mainhand": {
                            "level": 9,
                            "name": "froststaff"
                        },
                        "offhand": {
                            "l": "l",
                            "level": 6,
                            "name": "wbook0"
                        },
                        "orb": {
                            "level": 0,
                            "name": "test_orb"
                        },
                        "pants": {
                            "acc": 98626,
                            "ach": "gooped",
                            "level": 5,
                            "name": "starkillers",
                            "stat_type": "int"
                        },
                        "ring1": {
                            "level": 5,
                            "name": "cring"
                        },
                        "ring2": {
                            "level": 5,
                            "name": "cring"
                        },
                        "shoes": {
                            "level": 9,
                            "name": "wingedboots",
                            "stat_type": "int"
                        }
                    },
                    "speed": 79,
                    "target": "5459336",
                    "x": 232,
                    "xp": 4869843798,
                    "y": 397
                },
                {
                    "afk": true,
                    "age": 472,
                    "armor": 150,
                    "attack": 144,
                    "c": {},
                    "cid": 1,
                    "ctype": "merchant",
                    "cx": {},
                    "frequency": 0.7470348190089043,
                    "hp": 5021,
                    "id": "earthMer2",
                    "level": 53,
                    "max_hp": 5021,
                    "max_mp": 4775,
                    "mp": 4745,
                    "owner": "",
                    "pdps": 0,
                    "q": {},
                    "range": 20,
                    "resistance": 371,
                    "rip": false,
                    "s": {
                        "mlifesteal": {
                            "ms": 47687
                        }
                    },
                    "skin": "mmerchant",
                    "slots": {
                        "amulet": {
                            "level": 3,
                            "name": "intamulet"
                        },
                        "belt": {
                            "level": 4,
                            "name": "intbelt"
                        },
                        "cape": {
                            "level": 0,
                            "name": "stealthcape"
                        },
                        "chest": {
                            "level": 9,
                            "name": "wattire",
                            "stat_type": "int"
                        },
                        "earring1": {
                            "level": 3,
                            "name": "intearring"
                        },
                        "earring2": {
                            "level": 4,
                            "name": "intearring"
                        },
                        "elixir": null,
                        "gloves": {
                            "level": 9,
                            "name": "gloves",
                            "stat_type": "int"
                        },
                        "helmet": {
                            "acc": 1,
                            "level": 9,
                            "name": "wcap",
                            "stat_type": "int"
                        },
                        "mainhand": null,
                        "offhand": null,
                        "orb": {
                            "level": 4,
                            "name": "jacko"
                        },
                        "pants": {
                            "level": 9,
                            "name": "wbreeches",
                            "stat_type": "int"
                        },
                        "ring1": {
                            "level": 1,
                            "name": "intring"
                        },
                        "ring2": {
                            "level": 4,
                            "name": "intring"
                        },
                        "shoes": {
                            "level": 9,
                            "name": "wshoes",
                            "stat_type": "int"
                        }
                    },
                    "speed": 77,
                    "stand": false,
                    "x": 63.30048491762997,
                    "xp": 6969459,
                    "y": -100.3483931085649
                }
            ],
            "type": "all"
        },
        "esize": 33,
        "evasion": 1.25,
        "explosion": 0,
        "fear": 0,
        "firesistance": 0,
        "for": 28.75,
        "frequency": 0.7470348190089043,
        "friends": [],
        "fzresistance": 1,
        "gold": 99980000,
        "goldm": 1.15,
        "heal": 0,
        "hp": 5021,
        "id": "earthMer2",
        "in": "main",
        "info": {},
        "int": 232,
        "ipass": "P8lxU853c9LT",
        "isize": 42,
        "items": [
            {
                "name": "snowball",
                "q": 155
            },
            {
                "name": "snowball",
                "q": 70
            },
            {
                "level": 3,
                "name": "bow"
            },
            {
                "name": "scroll0",
                "q": 1
            },
            null,
            null,
            {
                "name": "snowball",
                "q": 198
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
                "name": "mpot1",
                "q": 1000
            },
            {
                "name": "hpot1",
                "q": 1000
            },
            {
                "name": "xptome",
                "q": 1
            },
            {
                "name": "tracker"
            },
            null
        ],
        "level": 53,
        "lifesteal": 2.5,
        "luckm": 1.06,
        "m": 0,
        "manasteal": 0,
        "map": "main",
        "max_hp": 5021,
        "max_mp": 4775,
        "max_xp": 11000000,
        "mcourage": 0,
        "miss": 0,
        "mp": 4745,
        "mp_cost": 74,
        "mp_reduction": 0,
        "owner": "",
        "pcourage": 0,
        "pdps": 0,
        "pnresistance": 0,
        "q": {},
        "range": 20,
        "reflection": 0.5,
        "resistance": 371,
        "rip": false,
        "rpiercing": 91,
        "s": {
            "mlifesteal": {
                "ms": 47687
            }
        },
        "s_info": {
            "icegolem": {
                "hp": 16000000,
                "live": true,
                "map": "winterland",
                "max_hp": 16000000,
                "x": 864.8843631708521,
                "y": 371.43992549601035
            }
        },
        "skin": "mmerchant",
        "slots": {
            "amulet": {
                "level": 3,
                "name": "intamulet"
            },
            "belt": {
                "level": 4,
                "name": "intbelt"
            },
            "cape": {
                "level": 0,
                "name": "stealthcape"
            },
            "chest": {
                "level": 9,
                "name": "wattire",
                "stat_type": "int"
            },
            "earring1": {
                "level": 3,
                "name": "intearring"
            },
            "earring2": {
                "level": 4,
                "name": "intearring"
            },
            "elixir": null,
            "gloves": {
                "level": 9,
                "name": "gloves",
                "stat_type": "int"
            },
            "helmet": {
                "acc": 1,
                "level": 9,
                "name": "wcap",
                "stat_type": "int"
            },
            "mainhand": null,
            "offhand": null,
            "orb": {
                "level": 4,
                "name": "jacko"
            },
            "pants": {
                "level": 9,
                "name": "wbreeches",
                "stat_type": "int"
            },
            "ring1": {
                "level": 1,
                "name": "intring"
            },
            "ring2": {
                "level": 4,
                "name": "intring"
            },
            "shoes": {
                "level": 9,
                "name": "wshoes",
                "stat_type": "int"
            }
        },
        "speed": 77,
        "stand": false,
        "str": 22,
        "stun": 0,
        "targets": 0,
        "tax": 0.03,
        "vit": 44,
        "x": 63.30048491762997,
        "xcx": [
            "mmerchant",
            "fmerchant"
        ],
        "xp": 6969459,
        "xpm": 1.04,
        "xrange": 25,
        "y": -100.3483931085649
    }
    expect(start).toBeDefined()
})