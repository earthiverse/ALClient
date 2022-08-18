import { NewMapData } from "./adventureland-server"

/**
 * The following is from socket events received 2021-04-25 to 2022-05-05
 * It is used to confirm type correctness
 */

test("NewMapData type validation", async () => {
    const comm: NewMapData = {
        "direction": 0,
        "effect": 0,
        "entities": {
            "in": "main",
            "map": "main",
            "monsters": [
                {
                    "abs": false,
                    "angle": 72.0465480104471,
                    "armor": 0,
                    "attack": 60,
                    "cid": 5,
                    "frequency": 0.54,
                    "going_x": 807.3759339415834,
                    "going_y": 1878.3355710034211,
                    "hp": 3000,
                    "id": "4555879",
                    "level": 5,
                    "max_hp": 3000,
                    "move_num": 24045304,
                    "moving": true,
                    "mp": 5,
                    "resistance": 0,
                    "s": {},
                    "speed": 10.8,
                    "type": "croc",
                    "x": 743.6407524936433,
                    "xp": 4500,
                    "y": 1681.6352512095082
                },
                {
                    "abs": false,
                    "angle": -67.64656008461522,
                    "armor": 0,
                    "attack": 60,
                    "cid": 5,
                    "frequency": 0.54,
                    "going_x": 805.1455931457535,
                    "going_y": 1694.9731415872257,
                    "hp": 3000,
                    "id": "4555881",
                    "level": 5,
                    "max_hp": 3000,
                    "move_num": 24045753,
                    "moving": true,
                    "mp": 5,
                    "resistance": 0,
                    "s": {},
                    "speed": 10.8,
                    "type": "croc",
                    "x": 742.8938049463022,
                    "xp": 4500,
                    "y": 1846.356352436311
                },
                {
                    "abs": false,
                    "angle": -72.9536989948719,
                    "armor": 0,
                    "attack": 60,
                    "cid": 5,
                    "frequency": 0.54,
                    "going_x": 868.1778999543137,
                    "going_y": 1537.1179927031708,
                    "hp": 3000,
                    "id": "4555906",
                    "level": 5,
                    "max_hp": 3000,
                    "move_num": 24045376,
                    "moving": true,
                    "mp": 5,
                    "resistance": 0,
                    "s": {},
                    "speed": 10.8,
                    "type": "croc",
                    "x": 834.301886378474,
                    "xp": 4500,
                    "y": 1647.6020343969983
                },
                {
                    "abs": false,
                    "angle": -99.68860630362278,
                    "armor": 0,
                    "attack": 60,
                    "cid": 5,
                    "frequency": 0.54,
                    "going_x": 773.89396439506,
                    "going_y": 1555.0483637160414,
                    "hp": 3000,
                    "id": "4555915",
                    "level": 5,
                    "max_hp": 3000,
                    "move_num": 24044378,
                    "moving": true,
                    "mp": 5,
                    "resistance": 0,
                    "s": {},
                    "speed": 10.8,
                    "type": "croc",
                    "x": 774.5235548397872,
                    "xp": 4500,
                    "y": 1558.736034825793
                },
                {
                    "abs": false,
                    "angle": -115.97246022805558,
                    "armor": 0,
                    "attack": 60,
                    "cid": 5,
                    "frequency": 0.54,
                    "going_x": 717.9529894816733,
                    "going_y": 1633.7628831688717,
                    "hp": 3000,
                    "id": "4555930",
                    "level": 5,
                    "max_hp": 3000,
                    "move_num": 24044727,
                    "moving": true,
                    "mp": 5,
                    "resistance": 0,
                    "s": {},
                    "speed": 10.8,
                    "type": "croc",
                    "x": 740.7112356082641,
                    "xp": 4500,
                    "y": 1680.481182415999
                },
                {
                    "abs": false,
                    "angle": -106.64278664410894,
                    "armor": 0,
                    "attack": 60,
                    "cid": 5,
                    "frequency": 0.54,
                    "going_x": 858.6525821188382,
                    "going_y": 1687.8197087584563,
                    "hp": 3000,
                    "id": "4555948",
                    "level": 5,
                    "max_hp": 3000,
                    "move_num": 24045708,
                    "moving": true,
                    "mp": 5,
                    "resistance": 0,
                    "s": {},
                    "speed": 10.8,
                    "type": "croc",
                    "x": 887.1637176576038,
                    "xp": 4500,
                    "y": 1783.198198645695
                },
                {
                    "abs": false,
                    "angle": -161.37368455850515,
                    "armor": 0,
                    "attack": 17,
                    "cid": 2,
                    "frequency": 0.516,
                    "going_x": 111.56605993329794,
                    "going_y": 1517.9397247241222,
                    "hp": 450,
                    "id": "4561098",
                    "level": 2,
                    "max_hp": 450,
                    "move_num": 24045900,
                    "moving": true,
                    "mp": 2,
                    "resistance": 0,
                    "s": {},
                    "speed": 12.32,
                    "type": "bee",
                    "x": 174.39794326086533,
                    "xp": 800,
                    "y": 1539.1171211254964
                },
                {
                    "abs": false,
                    "angle": -23.886412590988602,
                    "armor": 0,
                    "cid": 1,
                    "going_x": 53.412225306470305,
                    "going_y": 1891.9466957170782,
                    "id": "4564053",
                    "move_num": 24045292,
                    "moving": true,
                    "mp": 4,
                    "resistance": 0,
                    "s": {},
                    "type": "snake",
                    "x": 7.3070347009005046,
                    "y": 1912.3646246434557
                },
                {
                    "abs": false,
                    "angle": -107.93850570053901,
                    "armor": 0,
                    "cid": 1,
                    "going_x": 32.77683826496332,
                    "going_y": 1812.9931643415257,
                    "id": "4564849",
                    "move_num": 24045604,
                    "moving": true,
                    "mp": 4,
                    "resistance": 0,
                    "s": {},
                    "type": "snake",
                    "x": 44.36682535180981,
                    "y": 1848.7941743782244
                },
                {
                    "abs": false,
                    "angle": 110.14569441748515,
                    "armor": 0,
                    "cid": 1,
                    "going_x": 396.42704513565593,
                    "going_y": 1846.6792902987884,
                    "id": "4564855",
                    "move_num": 24045787,
                    "moving": true,
                    "mp": 5,
                    "resistance": 0,
                    "s": {},
                    "type": "armadillo",
                    "x": 424.408441025996,
                    "y": 1770.4050740108657
                },
                {
                    "abs": false,
                    "angle": 158.5280244275818,
                    "armor": 0,
                    "cid": 1,
                    "going_x": -59.612269112986894,
                    "going_y": 1879.66646515929,
                    "id": "4564875",
                    "move_num": 24045569,
                    "moving": true,
                    "mp": 4,
                    "resistance": 0,
                    "s": {},
                    "type": "snake",
                    "x": -40.72969986636739,
                    "y": 1872.2390901662027
                },
                {
                    "abs": false,
                    "angle": 38.67182480728007,
                    "armor": 0,
                    "cid": 1,
                    "going_x": 618.1028161901334,
                    "going_y": 1946.1448976456763,
                    "id": "4564900",
                    "move_num": 24045895,
                    "moving": true,
                    "mp": 5,
                    "resistance": 0,
                    "s": {},
                    "type": "armadillo",
                    "x": 468.5382608748381,
                    "y": 1826.4418013423199
                },
                {
                    "abs": false,
                    "angle": -141.18733155272633,
                    "armor": 0,
                    "cid": 1,
                    "going_x": -219.34426955274813,
                    "going_y": 1846.0469729706108,
                    "id": "4564901",
                    "move_num": 24045720,
                    "moving": true,
                    "mp": 4,
                    "resistance": 0,
                    "s": {},
                    "type": "snake",
                    "x": -130.09559802484722,
                    "y": 1917.837243066023
                },
                {
                    "abs": false,
                    "angle": 170.02754280028637,
                    "armor": 0,
                    "cid": 1,
                    "going_x": 394.5234129082693,
                    "going_y": 1735.3569896906479,
                    "id": "4564924",
                    "move_num": 24045862,
                    "moving": true,
                    "mp": 5,
                    "resistance": 0,
                    "s": {},
                    "type": "armadillo",
                    "x": 510.1482400885042,
                    "y": 1715.026518592415
                },
                {
                    "abs": false,
                    "angle": -153.7011375927786,
                    "armor": 0,
                    "cid": 3,
                    "going_x": -104,
                    "going_y": 1792,
                    "hp": 267,
                    "id": "4564927",
                    "move_num": 24045956,
                    "moving": true,
                    "mp": 4,
                    "resistance": 0,
                    "s": {},
                    "speed": 20,
                    "target": "Whiplash",
                    "type": "snake",
                    "x": -20.94604806646615,
                    "y": 1833.04576794174
                },
                {
                    "abs": false,
                    "angle": -92.30034648433244,
                    "armor": 0,
                    "cid": 1,
                    "going_x": 443.41738855586266,
                    "going_y": 1898.3405184703406,
                    "id": "4564929",
                    "move_num": 24045873,
                    "moving": true,
                    "mp": 5,
                    "resistance": 0,
                    "s": {},
                    "type": "armadillo",
                    "x": 445.64959652880367,
                    "y": 1953.9092644218633
                }
            ],
            "players": [
                {
                    "abs": false,
                    "afk": "code",
                    "age": 57,
                    "angle": 15.606745874312205,
                    "armor": 189,
                    "attack": 1142,
                    "c": {},
                    "cid": 1114,
                    "code": true,
                    "controller": "Mekhet",
                    "ctype": "priest",
                    "cx": {
                        "head": "fmakeup01"
                    },
                    "focus": null,
                    "frequency": 0.9050170586527293,
                    "going_x": 526,
                    "going_y": 1906,
                    "hp": 5944,
                    "id": "Arikel",
                    "level": 65,
                    "max_hp": 6016,
                    "max_mp": 3200,
                    "move_num": 24016900,
                    "moving": false,
                    "mp": 2966,
                    "owner": "4933241876774912",
                    "party": "Mekhet",
                    "pdps": 67766.93903634432,
                    "q": {},
                    "range": 201,
                    "resistance": 424,
                    "rip": false,
                    "s": {
                        "mluck": {
                            "f": "Mekhet",
                            "ms": 3427599,
                            "strong": true
                        },
                        "monsterhunt": {
                            "c": 1,
                            "dl": true,
                            "id": "plantoid",
                            "ms": 860159,
                            "sn": "US III"
                        }
                    },
                    "skin": "mbody5e",
                    "slots": {
                        "amulet": {
                            "level": 2,
                            "name": "intamulet"
                        },
                        "belt": {
                            "level": 0,
                            "name": "santasbelt"
                        },
                        "cape": {
                            "level": 7,
                            "name": "ecape"
                        },
                        "chest": {
                            "level": 7,
                            "name": "epyjamas"
                        },
                        "earring1": {
                            "level": 1,
                            "name": "intearring"
                        },
                        "earring2": {
                            "level": 2,
                            "name": "intearring"
                        },
                        "elixir": null,
                        "gloves": {
                            "level": 5,
                            "name": "mpgloves",
                            "stat_type": "int"
                        },
                        "helmet": {
                            "level": 7,
                            "name": "eears"
                        },
                        "mainhand": {
                            "acc": 1,
                            "level": 7,
                            "name": "firestaff"
                        },
                        "offhand": {
                            "level": 0,
                            "name": "lantern"
                        },
                        "orb": {
                            "level": 0,
                            "name": "jacko"
                        },
                        "pants": {
                            "acc": 97,
                            "ach": "gooped",
                            "level": 0,
                            "name": "pants1"
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
                            "level": 0,
                            "name": "eslippers"
                        },
                        "trade1": null,
                        "trade2": null,
                        "trade3": null,
                        "trade4": null
                    },
                    "speed": 53,
                    "target": "4564933",
                    "x": 526,
                    "xp": 36419171,
                    "y": 1906
                },
                {
                    "abs": false,
                    "afk": "code",
                    "age": 57,
                    "angle": 93.48412385557867,
                    "armor": 234,
                    "attack": 758,
                    "c": {},
                    "cid": 1132,
                    "code": true,
                    "controller": "Mekhet",
                    "ctype": "mage",
                    "cx": {
                        "head": "makeup105"
                    },
                    "focus": null,
                    "frequency": 0.9110821960898181,
                    "going_x": 596,
                    "going_y": 1816,
                    "hp": 1869,
                    "id": "Malkav",
                    "level": 64,
                    "max_hp": 1955,
                    "max_mp": 3630,
                    "move_num": 24017053,
                    "moving": false,
                    "mp": 3308,
                    "owner": "4933241876774912",
                    "party": "Mekhet",
                    "pdps": 85821.9474270208,
                    "q": {},
                    "range": 200,
                    "resistance": 494,
                    "rip": false,
                    "s": {
                        "mluck": {
                            "f": "Mekhet",
                            "ms": 3430047,
                            "strong": true
                        },
                        "monsterhunt": {
                            "c": 214,
                            "dl": true,
                            "id": "bbpompom",
                            "ms": 1220483,
                            "sn": "US III"
                        }
                    },
                    "skin": "marmor12d",
                    "slots": {
                        "amulet": {
                            "level": 2,
                            "name": "intamulet"
                        },
                        "belt": {
                            "level": 1,
                            "name": "intbelt"
                        },
                        "cape": {
                            "level": 0,
                            "name": "ecape"
                        },
                        "chest": {
                            "level": 3,
                            "name": "mmarmor"
                        },
                        "earring1": {
                            "level": 2,
                            "name": "intearring"
                        },
                        "earring2": {
                            "level": 2,
                            "name": "intearring"
                        },
                        "elixir": null,
                        "gloves": {
                            "level": 4,
                            "name": "mmgloves"
                        },
                        "helmet": {
                            "level": 3,
                            "name": "mmhat"
                        },
                        "mainhand": {
                            "acc": 1,
                            "level": 5,
                            "name": "oozingterror"
                        },
                        "offhand": {
                            "level": 0,
                            "name": "lantern"
                        },
                        "orb": {
                            "level": 0,
                            "name": "jacko"
                        },
                        "pants": {
                            "level": 3,
                            "name": "mmpants"
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
                            "level": 3,
                            "name": "mmshoes"
                        }
                    },
                    "speed": 55,
                    "target": "4564933",
                    "x": 596,
                    "xp": 23076858,
                    "y": 1816
                }
            ],
            "type": "all"
        },
        "in": "main",
        "info": {},
        "m": 0,
        "name": "main",
        "x": 526,
        "y": 2026
    }
    expect(comm).toBeDefined()

    const comm2: NewMapData = {
        "direction": 0,
        "effect": 0,
        "entities": {
            "in": "main",
            "map": "main",
            "monsters": [
                {
                    "abs": false,
                    "angle": -2.7591076586202736,
                    "cid": 4,
                    "going_x": -290,
                    "going_y": 280,
                    "hp": 49875,
                    "id": "31",
                    "move_num": 14400051,
                    "moving": false,
                    "mp": 250,
                    "resistance": 0,
                    "s": {},
                    "target": null,
                    "type": "target_a500",
                    "x": -290,
                    "y": 280
                },
                {
                    "cid": 1,
                    "going_x": -270,
                    "going_y": 280,
                    "id": "32",
                    "mp": 250,
                    "resistance": 0,
                    "s": {},
                    "type": "target_a750",
                    "x": -270,
                    "y": 280
                },
                {
                    "armor": 0,
                    "cid": 1,
                    "going_x": -250,
                    "going_y": 280,
                    "id": "33",
                    "mp": 250,
                    "s": {},
                    "type": "target_r500",
                    "x": -250,
                    "y": 280
                },
                {
                    "abs": false,
                    "angle": -92.68377515946901,
                    "cid": 17950,
                    "going_x": -150,
                    "going_y": 400,
                    "id": "36",
                    "move_num": 19570200,
                    "moving": false,
                    "mp": 2500,
                    "s": {
                        "self_healing": {
                            "ability": true,
                            "ms": 6420
                        }
                    },
                    "target": null,
                    "type": "target_ar500red",
                    "x": -150,
                    "y": 400
                },
                {
                    "abs": false,
                    "angle": 158.1063268582716,
                    "armor": 0,
                    "cid": 6,
                    "going_x": -571,
                    "going_y": 323,
                    "hp": 49702,
                    "id": "932007",
                    "move_num": 15418328,
                    "moving": false,
                    "mp": 250,
                    "resistance": 0,
                    "s": {},
                    "target": null,
                    "type": "target",
                    "x": -571,
                    "y": 323
                },
                {
                    "armor": 0,
                    "cid": 1,
                    "going_x": -230,
                    "going_y": 280,
                    "id": "1376126",
                    "mp": 250,
                    "s": {},
                    "type": "target_r750",
                    "x": -230,
                    "y": 280
                },
                {
                    "cid": 1,
                    "going_x": -210,
                    "going_y": 280,
                    "id": "2744508",
                    "mp": 250,
                    "s": {},
                    "type": "target_ar900",
                    "x": -210,
                    "y": 280
                }
            ],
            "players": [
                {
                    "abs": false,
                    "allow": true,
                    "angle": 50.042451069170916,
                    "armor": 500,
                    "c": {},
                    "cid": 0,
                    "ctype": "pvp",
                    "cx": {},
                    "going_x": 325,
                    "going_y": 499,
                    "hp": 5000,
                    "id": "Ace",
                    "level": 100,
                    "max_hp": 5000,
                    "move_num": 677,
                    "moving": false,
                    "npc": "pvp",
                    "owner": "",
                    "q": {},
                    "s": {},
                    "skin": "thehelmet",
                    "speed": 40,
                    "x": 325,
                    "xp": 0,
                    "y": 499
                },
                {
                    "abs": false,
                    "angle": -0.8951737102110744,
                    "armor": 500,
                    "c": {},
                    "cid": 0,
                    "ctype": "bean",
                    "cx": {},
                    "going_x": 98,
                    "going_y": -50,
                    "hp": 3200,
                    "id": "Bean",
                    "level": 100,
                    "max_hp": 3200,
                    "move_num": 24096495,
                    "moving": true,
                    "npc": "bean",
                    "owner": "",
                    "q": {},
                    "s": {},
                    "skin": "lionsuit",
                    "speed": 30,
                    "x": -6.680658567215588,
                    "xp": 0,
                    "y": -48.36436470988727
                },
                {
                    "afk": true,
                    "age": 476,
                    "armor": 192,
                    "attack": 874,
                    "c": {},
                    "cid": 1697,
                    "code": true,
                    "ctype": "merchant",
                    "cx": {},
                    "frequency": 0.9261619241192411,
                    "hp": 9949,
                    "id": "Cassini",
                    "level": 68,
                    "max_hp": 9970,
                    "max_mp": 3420,
                    "mp": 3410,
                    "owner": "5794393261342720",
                    "pdps": 0,
                    "q": {
                        "upgrade": {
                            "len": 4000,
                            "ms": 2000,
                            "num": 8
                        }
                    },
                    "range": 114,
                    "resistance": 552,
                    "rip": false,
                    "s": {
                        "mluck": {
                            "f": "earthMer",
                            "ms": 3565597
                        }
                    },
                    "skin": "mmerchant",
                    "slots": {
                        "amulet": {
                            "l": "l",
                            "level": 4,
                            "name": "dexamulet"
                        },
                        "belt": {
                            "level": 4,
                            "name": "hpbelt"
                        },
                        "cape": {
                            "level": 8,
                            "name": "ecape",
                            "stat_type": "int"
                        },
                        "chest": {
                            "level": 8,
                            "name": "epyjamas"
                        },
                        "earring1": {
                            "l": "l",
                            "level": 3,
                            "name": "vitearring"
                        },
                        "earring2": {
                            "level": 4,
                            "name": "vitearring"
                        },
                        "elixir": null,
                        "gloves": {
                            "level": 4,
                            "name": "wgloves"
                        },
                        "helmet": {
                            "level": 8,
                            "name": "eears"
                        },
                        "mainhand": {
                            "level": 8,
                            "name": "harbringer"
                        },
                        "offhand": {
                            "level": 3,
                            "name": "lantern"
                        },
                        "orb": {
                            "level": 1,
                            "name": "orbofvit"
                        },
                        "pants": {
                            "level": 8,
                            "name": "wbreeches"
                        },
                        "ring1": {
                            "level": 4,
                            "name": "ringsj",
                            "p": "shiny"
                        },
                        "ring2": {
                            "level": 4,
                            "name": "ringsj",
                            "p": "shiny"
                        },
                        "shoes": {
                            "level": 8,
                            "name": "wingedboots"
                        },
                        "trade1": null,
                        "trade2": null,
                        "trade3": null,
                        "trade4": null
                    },
                    "speed": 77,
                    "stand": false,
                    "x": -39.17006453725123,
                    "xp": 137897109,
                    "y": -152.9999999
                },
                {
                    "afk": true,
                    "age": 15,
                    "armor": 34,
                    "attack": 95,
                    "c": {},
                    "cid": 111,
                    "ctype": "merchant",
                    "cx": {
                        "hair": "hairdo520",
                        "head": "fmakeup01"
                    },
                    "frequency": 0.49631545199380567,
                    "hp": 1411,
                    "id": "Natasha11x11",
                    "level": 38,
                    "max_hp": 1411,
                    "max_mp": 1215,
                    "mp": 1215,
                    "owner": "6009509611307008",
                    "pdps": 0,
                    "q": {},
                    "range": 70,
                    "resistance": 81,
                    "rip": 0,
                    "s": {
                        "mluck": {
                            "f": "earthMer",
                            "ms": 3568046
                        }
                    },
                    "skin": "marmor12b",
                    "slots": {
                        "amulet": {
                            "level": 0,
                            "name": "hpamulet"
                        },
                        "belt": {
                            "level": 0,
                            "name": "hpbelt"
                        },
                        "cape": null,
                        "chest": null,
                        "earring1": null,
                        "earring2": null,
                        "elixir": null,
                        "gloves": null,
                        "helmet": {
                            "level": 0,
                            "name": "wcap"
                        },
                        "mainhand": {
                            "gift": 1,
                            "level": 0,
                            "name": "staff"
                        },
                        "offhand": null,
                        "orb": null,
                        "pants": null,
                        "ring1": null,
                        "ring2": null,
                        "shoes": {
                            "level": 4,
                            "name": "wshoes",
                            "stat_type": "int"
                        },
                        "trade1": null,
                        "trade10": null,
                        "trade11": null,
                        "trade12": null,
                        "trade13": null,
                        "trade14": {
                            "b": true,
                            "level": 0,
                            "name": "t2intamulet",
                            "price": 96001,
                            "q": 1,
                            "rid": "O4la"
                        },
                        "trade15": {
                            "b": true,
                            "level": 0,
                            "name": "orbofint",
                            "price": 144001,
                            "q": 1,
                            "rid": "AunL"
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
                    "x": 110.56890778463068,
                    "xp": 7353,
                    "y": 12.09324958756322
                },
                {
                    "afk": "code",
                    "age": 1,
                    "armor": 28,
                    "attack": 7,
                    "c": {},
                    "cid": 101,
                    "code": true,
                    "controller": "Finger",
                    "ctype": "merchant",
                    "cx": {
                        "hair": "hairdo521",
                        "hat": "hat404",
                        "head": "makeup105"
                    },
                    "frequency": 0.22631581494386374,
                    "hp": 2206,
                    "id": "Winger",
                    "level": 1,
                    "max_hp": 2206,
                    "max_mp": 535,
                    "mp": 535,
                    "owner": "6283357430743040",
                    "pdps": 0,
                    "q": {},
                    "range": 20,
                    "resistance": 42,
                    "rip": 0,
                    "s": {
                        "mluck": {
                            "f": "earthMer",
                            "ms": 3569346
                        }
                    },
                    "skin": "marmor12a",
                    "slots": {
                        "amulet": {
                            "level": 2,
                            "name": "hpamulet"
                        },
                        "belt": {
                            "level": 0,
                            "name": "hpbelt"
                        },
                        "cape": null,
                        "chest": null,
                        "earring1": {
                            "level": 1,
                            "name": "vitearring"
                        },
                        "earring2": {
                            "level": 1,
                            "name": "vitearring"
                        },
                        "elixir": null,
                        "gloves": null,
                        "helmet": null,
                        "mainhand": null,
                        "offhand": null,
                        "orb": null,
                        "pants": null,
                        "ring1": {
                            "level": 3,
                            "name": "vitring"
                        },
                        "ring2": {
                            "level": 3,
                            "name": "vitring"
                        },
                        "shoes": {
                            "level": 7,
                            "name": "shoes",
                            "stat_type": "int"
                        }
                    },
                    "speed": 65,
                    "x": 168,
                    "xp": 0,
                    "y": -134
                },
                {
                    "abs": false,
                    "afk": true,
                    "age": 338,
                    "angle": -179.971929569203,
                    "armor": 91,
                    "attack": 365,
                    "c": {},
                    "cid": 18550,
                    "code": true,
                    "ctype": "merchant",
                    "cx": {
                        "hair": "hairdo118",
                        "hat": "hat202",
                        "head": "makeup117"
                    },
                    "frequency": 0.9177255129694154,
                    "going_x": -132,
                    "going_y": -50,
                    "hp": 8093,
                    "id": "MoneyS",
                    "level": 80,
                    "max_hp": 8093,
                    "max_mp": 3710,
                    "move_num": 23921421,
                    "moving": false,
                    "mp": 3478,
                    "owner": "5553608930623488",
                    "pdps": 0,
                    "q": {},
                    "range": 76,
                    "resistance": 231,
                    "rip": false,
                    "s": {
                        "massproduction": {
                            "ms": 1739
                        },
                        "massproductionpp": {
                            "ms": 1973
                        },
                        "mluck": {
                            "f": "earthMer",
                            "ms": 3570766
                        }
                    },
                    "skin": "sarmor1g",
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
                            "level": 0,
                            "name": "partyhat"
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
                        "trade1": null,
                        "trade10": null,
                        "trade11": null,
                        "trade12": null,
                        "trade13": {
                            "b": true,
                            "name": "bkey",
                            "price": 2000000000,
                            "q": 1,
                            "rid": "HJyq"
                        },
                        "trade14": null,
                        "trade15": null,
                        "trade16": {
                            "name": "electronics",
                            "price": 50000,
                            "q": 9976,
                            "rid": "zy9Q"
                        },
                        "trade17": {
                            "name": "electronics",
                            "price": 50000,
                            "q": 9930,
                            "rid": "spAB"
                        },
                        "trade18": null,
                        "trade19": {
                            "level": 3,
                            "name": "lantern",
                            "price": 2000000000,
                            "rid": "lDJM"
                        },
                        "trade2": null,
                        "trade20": null,
                        "trade21": null,
                        "trade22": {
                            "name": "electronics",
                            "price": 50000,
                            "q": 9581,
                            "rid": "MKp2"
                        },
                        "trade23": {
                            "name": "networkcard",
                            "price": 35000000,
                            "q": 91,
                            "rid": "BIXq"
                        },
                        "trade24": null,
                        "trade25": {
                            "name": "offeringp",
                            "price": 3500000,
                            "q": 999,
                            "rid": "GgMg"
                        },
                        "trade26": null,
                        "trade27": null,
                        "trade28": null,
                        "trade29": null,
                        "trade3": null,
                        "trade30": null,
                        "trade4": null,
                        "trade5": {
                            "b": true,
                            "level": 9,
                            "name": "wgloves",
                            "price": 67000000,
                            "q": 10,
                            "rid": "PX2g"
                        },
                        "trade6": {
                            "b": true,
                            "level": 9,
                            "name": "wcap",
                            "price": 67000000,
                            "q": 16,
                            "rid": "To6C"
                        },
                        "trade7": {
                            "b": true,
                            "name": "ukey",
                            "price": 2000000000,
                            "q": 1,
                            "rid": "JtPO"
                        },
                        "trade8": null,
                        "trade9": null
                    },
                    "speed": 10,
                    "stand": "cstand",
                    "x": -132,
                    "xp": 806486574,
                    "y": -50
                },
                {
                    "abs": false,
                    "afk": true,
                    "age": 23,
                    "angle": 149.6767069404636,
                    "armor": 132,
                    "attack": 91,
                    "c": {},
                    "cid": 973,
                    "code": true,
                    "ctype": "merchant",
                    "cx": {
                        "hair": "hairdo521",
                        "hat": "hat404",
                        "upper": "marmor12a"
                    },
                    "frequency": 0.5069106900890438,
                    "going_x": -66,
                    "going_y": -69,
                    "hp": 2443,
                    "id": "BadgerMerch",
                    "level": 38,
                    "max_hp": 2525,
                    "max_mp": 1170,
                    "move_num": 24078297,
                    "moving": false,
                    "mp": 910,
                    "owner": "6668530097848320",
                    "party": "BadgerMerch",
                    "pdps": 0.3208814734926284,
                    "q": {},
                    "range": 70,
                    "resistance": 157,
                    "rip": false,
                    "s": {
                        "mluck": {
                            "f": "earthMer",
                            "ms": 3568901
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
                            "level": 0,
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
                        "trade1": {
                            "b": true,
                            "level": 0,
                            "name": "jacko",
                            "price": 58000,
                            "q": 3,
                            "rid": "rQXn"
                        },
                        "trade10": null,
                        "trade11": null,
                        "trade12": null,
                        "trade13": null,
                        "trade14": null,
                        "trade15": null,
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
                    "x": -66,
                    "xp": 44959.8,
                    "y": -69
                },
                {
                    "abs": false,
                    "afk": true,
                    "age": 5,
                    "angle": 51.099435972164216,
                    "armor": 29,
                    "attack": 67,
                    "c": {},
                    "cid": 11,
                    "code": false,
                    "ctype": "merchant",
                    "cx": {
                        "hair": "hairdo521",
                        "hat": "hat404",
                        "head": "makeup117"
                    },
                    "focus": null,
                    "frequency": 0.22060152922957801,
                    "going_x": 68.92091193824554,
                    "going_y": -76.43778219823282,
                    "hp": 109,
                    "id": "DwalinOak",
                    "level": 1,
                    "max_hp": 109,
                    "max_mp": 400,
                    "move_num": 24091838,
                    "moving": false,
                    "mp": 400,
                    "owner": "6398697301082112",
                    "pdps": 0,
                    "q": {},
                    "range": 79,
                    "resistance": 39,
                    "rip": 0,
                    "s": {
                        "mluck": {
                            "f": "earthMer",
                            "ms": 3523269
                        }
                    },
                    "skin": "marmor12a",
                    "slots": {
                        "amulet": null,
                        "belt": null,
                        "cape": null,
                        "chest": null,
                        "earring1": null,
                        "earring2": null,
                        "elixir": null,
                        "gloves": null,
                        "helmet": {
                            "gift": 1,
                            "level": 0,
                            "name": "helmet"
                        },
                        "mainhand": {
                            "gift": 1,
                            "level": 3,
                            "name": "staff"
                        },
                        "offhand": null,
                        "orb": null,
                        "pants": null,
                        "ring1": null,
                        "ring2": null,
                        "shoes": {
                            "gift": 1,
                            "level": 0,
                            "name": "shoes"
                        }
                    },
                    "speed": 56,
                    "target": null,
                    "x": 68.92091193824554,
                    "xp": 0,
                    "y": -76.43778219823282
                },
                {
                    "abs": false,
                    "afk": "code",
                    "age": 1,
                    "angle": 141.42347043655656,
                    "armor": 29,
                    "attack": 42,
                    "c": {},
                    "cid": 350,
                    "controller": "",
                    "ctype": "merchant",
                    "cx": {
                        "hair": "hairdo520",
                        "head": "fmakeup03"
                    },
                    "frequency": 0.22060152922957801,
                    "going_x": 0,
                    "going_y": 0,
                    "hp": 109,
                    "id": "orlyowl",
                    "level": 1,
                    "max_hp": 109,
                    "max_mp": 400,
                    "move_num": 24092667,
                    "moving": false,
                    "mp": 400,
                    "owner": "4568340897464320",
                    "party": "orlyowl",
                    "pdps": 1.809251394333074e-7,
                    "q": {},
                    "range": 70,
                    "resistance": 39,
                    "rip": 0,
                    "s": {
                        "mluck": {
                            "f": "earthMer",
                            "ms": 3571494
                        }
                    },
                    "skin": "marmor12b",
                    "slots": {
                        "amulet": null,
                        "belt": null,
                        "cape": null,
                        "chest": null,
                        "earring1": null,
                        "earring2": null,
                        "elixir": null,
                        "gloves": null,
                        "helmet": {
                            "gift": 1,
                            "level": 0,
                            "name": "helmet"
                        },
                        "mainhand": {
                            "gift": 1,
                            "level": 0,
                            "name": "staff"
                        },
                        "offhand": null,
                        "orb": null,
                        "pants": null,
                        "ring1": null,
                        "ring2": null,
                        "shoes": {
                            "gift": 1,
                            "level": 0,
                            "name": "shoes"
                        }
                    },
                    "speed": 56,
                    "x": 0,
                    "xp": 0,
                    "y": 0
                },
                {
                    "abs": false,
                    "afk": "code",
                    "age": 586,
                    "angle": -168.23706893452515,
                    "armor": 305,
                    "attack": 155,
                    "c": {},
                    "cid": 18390,
                    "controller": "",
                    "ctype": "merchant",
                    "cx": {
                        "hair": "hairdo520",
                        "head": "fmakeup01"
                    },
                    "frequency": 1.0812914367982966,
                    "going_x": 0,
                    "going_y": 0,
                    "hp": 7160,
                    "id": "earthMer",
                    "level": 74,
                    "max_hp": 7160,
                    "max_mp": 5345,
                    "move_num": 24094765,
                    "moving": false,
                    "mp": 5345,
                    "owner": "5622711463182336",
                    "party": "earthMer",
                    "pdps": 4.456448028457067,
                    "q": {},
                    "range": 20,
                    "resistance": 500,
                    "rip": false,
                    "s": {
                        "mlifesteal": {
                            "ms": 2382577
                        },
                        "mluck": {
                            "f": "earthMer",
                            "ms": 1880053,
                            "strong": true
                        }
                    },
                    "skin": "marmor12a",
                    "slots": {
                        "amulet": {
                            "level": 9,
                            "name": "warmscarf"
                        },
                        "belt": {
                            "level": 3,
                            "name": "santasbelt"
                        },
                        "cape": {
                            "level": 5,
                            "name": "angelwings",
                            "stat_type": "int"
                        },
                        "chest": {
                            "level": 9,
                            "name": "xmassweater",
                            "stat_type": "int"
                        },
                        "earring1": {
                            "level": 4,
                            "name": "intearring"
                        },
                        "earring2": {
                            "level": 4,
                            "name": "dexearring"
                        },
                        "elixir": null,
                        "gloves": {
                            "level": 9,
                            "name": "mittens",
                            "stat_type": "int"
                        },
                        "helmet": {
                            "acc": 1,
                            "level": 9,
                            "name": "xmashat",
                            "stat_type": "int"
                        },
                        "mainhand": null,
                        "offhand": null,
                        "orb": {
                            "level": 4,
                            "name": "jacko"
                        },
                        "pants": {
                            "acc": 425,
                            "ach": "gooped",
                            "level": 8,
                            "name": "frankypants",
                            "stat_type": "int"
                        },
                        "ring1": {
                            "level": 5,
                            "name": "intring"
                        },
                        "ring2": {
                            "level": 4,
                            "name": "intring"
                        },
                        "shoes": {
                            "level": 9,
                            "name": "wingedboots",
                            "stat_type": "int"
                        },
                        "trade1": {
                            "name": "monstertoken",
                            "price": 250000,
                            "q": 730,
                            "rid": "XWZN"
                        },
                        "trade10": null,
                        "trade11": null,
                        "trade12": null,
                        "trade13": null,
                        "trade14": null,
                        "trade15": null,
                        "trade16": null,
                        "trade17": null,
                        "trade18": null,
                        "trade19": null,
                        "trade2": {
                            "name": "greenbomb",
                            "price": 500000000,
                            "q": 22,
                            "rid": "zkLq"
                        },
                        "trade20": null,
                        "trade21": null,
                        "trade22": null,
                        "trade23": null,
                        "trade24": null,
                        "trade3": {
                            "name": "essenceoflife",
                            "price": 2500,
                            "q": 9999,
                            "rid": "rX7D"
                        },
                        "trade4": {
                            "name": "essenceoflife",
                            "price": 2500,
                            "q": 9684,
                            "rid": "i2wU"
                        },
                        "trade5": null,
                        "trade6": null,
                        "trade7": null,
                        "trade8": null,
                        "trade9": null
                    },
                    "speed": 10,
                    "stand": "cstand",
                    "x": 0,
                    "xp": 337576640.20000017,
                    "y": 0
                }
            ],
            "type": "all"
        },
        "in": "main",
        "info": {},
        "m": 0,
        "name": "main",
        "x": 0,
        "y": 0
    }
    expect(comm2).toBeDefined()

    const townTeleport: NewMapData = {
        "direction": 3,
        "effect": 1,
        "entities": {
            "in": "tunnel",
            "map": "tunnel",
            "monsters": [
                {
                    "abs": false,
                    "angle": -52.126739688000406,
                    "armor": 0,
                    "attack": 1200,
                    "cid": 16,
                    "frequency": 1.2080000000000002,
                    "going_x": 198.50482884588848,
                    "going_y": -413.676310455195,
                    "hp": 93000,
                    "id": "127",
                    "level": 14,
                    "max_hp": 93000,
                    "move_num": 6922931,
                    "moving": true,
                    "resistance": 0,
                    "s": {},
                    "speed": 20.88,
                    "target": null,
                    "type": "mole",
                    "x": -74.72869500696135,
                    "xp": 112000,
                    "y": -62.35426100015703
                },
                {
                    "abs": false,
                    "angle": 168.19844532415624,
                    "armor": 0,
                    "attack": 1200,
                    "cid": 15,
                    "frequency": 1.2080000000000002,
                    "going_x": -167.076265872475,
                    "going_y": -176.321222667482,
                    "hp": 99200,
                    "id": "128",
                    "level": 15,
                    "max_hp": 99200,
                    "move_num": 6922603,
                    "moving": true,
                    "resistance": 0,
                    "s": {},
                    "speed": 20.88,
                    "type": "mole",
                    "x": -14.806231749075224,
                    "xp": 120000,
                    "y": -208.13640223128962
                },
                {
                    "abs": false,
                    "angle": 177.97415244171376,
                    "armor": 0,
                    "attack": 1200,
                    "cid": 15,
                    "frequency": 1.2080000000000002,
                    "going_x": -200.620698253412,
                    "going_y": -319.48644097107007,
                    "hp": 99200,
                    "id": "129",
                    "level": 15,
                    "max_hp": 99200,
                    "move_num": 6922971,
                    "moving": true,
                    "resistance": 0,
                    "s": {},
                    "speed": 20.88,
                    "type": "mole",
                    "x": 178.4668295366741,
                    "xp": 120000,
                    "y": -332.89569626165604
                },
                {
                    "abs": false,
                    "angle": -68.24454373977709,
                    "armor": 0,
                    "attack": 1200,
                    "cid": 15,
                    "frequency": 1.2080000000000002,
                    "going_x": -15.445250041253075,
                    "going_y": -497.4581718100786,
                    "hp": 99200,
                    "id": "130",
                    "level": 15,
                    "max_hp": 99200,
                    "move_num": 6922752,
                    "moving": true,
                    "resistance": 0,
                    "s": {},
                    "speed": 20.88,
                    "type": "mole",
                    "x": -32.84476009313387,
                    "xp": 120000,
                    "y": -453.85801950984853
                },
                {
                    "abs": false,
                    "angle": -69.0808117808162,
                    "armor": 0,
                    "attack": 1200,
                    "cid": 15,
                    "frequency": 1.2080000000000002,
                    "going_x": -104.57670994974075,
                    "going_y": -272.4429830450223,
                    "hp": 99200,
                    "id": "131",
                    "level": 15,
                    "max_hp": 99200,
                    "move_num": 6922708,
                    "moving": true,
                    "resistance": 0,
                    "s": {},
                    "speed": 20.88,
                    "type": "mole",
                    "x": -137.30114909045085,
                    "xp": 120000,
                    "y": -186.83218892086222
                },
                {
                    "abs": false,
                    "angle": 148.92543284400804,
                    "armor": 0,
                    "attack": 1200,
                    "cid": 16,
                    "frequency": 1.2080000000000002,
                    "going_x": -41.88996722315565,
                    "going_y": -351.3487240144033,
                    "hp": 93000,
                    "id": "132",
                    "level": 14,
                    "max_hp": 93000,
                    "move_num": 6922812,
                    "moving": true,
                    "resistance": 0,
                    "s": {},
                    "speed": 20.88,
                    "target": null,
                    "type": "mole",
                    "x": 19.512154421754445,
                    "xp": 112000,
                    "y": -388.3516880011831
                },
                {
                    "abs": false,
                    "angle": 20.40498185864498,
                    "armor": 0,
                    "attack": 1200,
                    "cid": 15,
                    "frequency": 1.2080000000000002,
                    "going_x": 158.81322282577463,
                    "going_y": -447.8520186568095,
                    "hp": 99200,
                    "id": "133",
                    "level": 15,
                    "max_hp": 99200,
                    "move_num": 6922484,
                    "moving": true,
                    "resistance": 0,
                    "s": {},
                    "speed": 20.88,
                    "type": "mole",
                    "x": 41.73527326481299,
                    "xp": 120000,
                    "y": -491.4045060388365
                }
            ],
            "players": [
                {
                    "afk": false,
                    "age": 937,
                    "armor": 336,
                    "attack": 207,
                    "c": {},
                    "cid": 3,
                    "ctype": "merchant",
                    "cx": {
                        "hair": "hairdo607",
                        "head": "fmakeup01"
                    },
                    "focus": "earthMer",
                    "frequency": 1.2211355497483547,
                    "hp": 11147,
                    "id": "earthMer",
                    "level": 78,
                    "max_hp": 11147,
                    "max_mp": 5885,
                    "moving": false,
                    "mp": 5865,
                    "owner": "5622711463182336",
                    "pdps": 0,
                    "q": {},
                    "range": 25,
                    "resistance": 642,
                    "rip": false,
                    "s": {
                        "mluck": {
                            "f": "earthMer",
                            "ms": 1123015,
                            "strong": true
                        },
                        "rspeed": {
                            "f": "Bjarna",
                            "ms": 2123351
                        }
                    },
                    "skin": "marmor9h",
                    "slots": {
                        "amulet": {
                            "level": 9,
                            "name": "warmscarf"
                        },
                        "belt": {
                            "level": 3,
                            "name": "santasbelt"
                        },
                        "cape": {
                            "level": 4,
                            "name": "stealthcape",
                            "stat_type": "int"
                        },
                        "chest": {
                            "level": 9,
                            "name": "xmassweater",
                            "stat_type": "int"
                        },
                        "earring1": {
                            "level": 4,
                            "name": "intearring"
                        },
                        "earring2": {
                            "level": 4,
                            "name": "intearring"
                        },
                        "elixir": null,
                        "gloves": {
                            "level": 9,
                            "name": "mittens",
                            "stat_type": "int"
                        },
                        "helmet": {
                            "level": 10,
                            "name": "eears",
                            "stat_type": "int"
                        },
                        "mainhand": {
                            "l": "l",
                            "level": 0,
                            "name": "pickaxe"
                        },
                        "offhand": null,
                        "orb": {
                            "level": 1,
                            "name": "charmer",
                            "p": "glitched"
                        },
                        "pants": {
                            "acc": 12554,
                            "ach": "gooped",
                            "level": 8,
                            "name": "frankypants",
                            "stat_type": "int"
                        },
                        "ring1": {
                            "level": 5,
                            "name": "ringsj",
                            "p": "shiny"
                        },
                        "ring2": {
                            "level": 5,
                            "name": "ringsj",
                            "p": "shiny"
                        },
                        "shoes": {
                            "level": 9,
                            "name": "wingedboots",
                            "stat_type": "int"
                        },
                        "trade1": {
                            "name": "cryptkey",
                            "price": 6000000,
                            "q": 2,
                            "rid": "wg3v"
                        },
                        "trade2": {
                            "name": "tracker",
                            "price": 1600000,
                            "rid": "mAwO"
                        },
                        "trade3": {
                            "name": "monstertoken",
                            "price": 400000,
                            "q": 4,
                            "rid": "Cx9T"
                        },
                        "trade4": {
                            "name": "egg6",
                            "price": 999999999,
                            "q": 262,
                            "rid": "DLnk"
                        }
                    },
                    "speed": 77,
                    "stand": false,
                    "target": null,
                    "tp": true,
                    "x": 0,
                    "xp": 764765838,
                    "y": -16
                }
            ],
            "type": "all"
        },
        "eval": "skill_timeout('attack',3200)",
        "in": "tunnel",
        "info": {},
        "m": 1,
        "name": "tunnel",
        "x": 0,
        "y": -16
    }
    expect(townTeleport).toBeDefined()

    const tavern: NewMapData = {
        "direction": 3,
        "effect": 0,
        "entities": {
            "in": "tavern",
            "map": "tavern",
            "monsters": [],
            "players": [
                {
                    "abs": false,
                    "afk": false,
                    "age": 258,
                    "angle": 70.55378139074305,
                    "armor": 254,
                    "attack": 55,
                    "c": {},
                    "cid": 49,
                    "ctype": "merchant",
                    "cx": {
                        "hair": "hairdo521",
                        "hat": "hat407",
                        "head": "makeup117",
                        "upper": "marmor4h"
                    },
                    "focus": null,
                    "frequency": 0.8164744241192411,
                    "going_x": -9.403406187475646,
                    "going_y": 5.9999999,
                    "hp": 5520,
                    "id": "attackMer",
                    "level": 68,
                    "max_hp": 5520,
                    "max_mp": 3085,
                    "move_num": 22406263,
                    "moving": false,
                    "mp": 3085,
                    "owner": "6133449939746816",
                    "pdps": 0,
                    "q": {},
                    "range": 22,
                    "resistance": 338,
                    "rip": false,
                    "s": {
                        "mluck": {
                            "f": "attackMer",
                            "ms": 1251818,
                            "strong": true
                        }
                    },
                    "skin": "marmor12a",
                    "slots": {
                        "amulet": {
                            "level": 3,
                            "name": "intamulet"
                        },
                        "belt": {
                            "level": 1,
                            "name": "mbelt"
                        },
                        "cape": null,
                        "chest": {
                            "level": 8,
                            "name": "coat1"
                        },
                        "earring1": {
                            "level": 0,
                            "name": "intearring"
                        },
                        "earring2": {
                            "level": 0,
                            "name": "dexearring"
                        },
                        "elixir": null,
                        "gloves": {
                            "level": 8,
                            "name": "gloves1"
                        },
                        "helmet": {
                            "name": "ghatp"
                        },
                        "mainhand": {
                            "level": 0,
                            "name": "pickaxe"
                        },
                        "offhand": null,
                        "orb": {
                            "level": 0,
                            "name": "jacko"
                        },
                        "pants": {
                            "level": 8,
                            "name": "pants1"
                        },
                        "ring1": {
                            "level": 0,
                            "name": "intring"
                        },
                        "ring2": {
                            "level": 0,
                            "name": "intring"
                        },
                        "shoes": {
                            "level": 8,
                            "name": "shoes1"
                        }
                    },
                    "speed": 60,
                    "stand": false,
                    "target": null,
                    "x": 0,
                    "xp": 60303981,
                    "y": -8
                }
            ],
            "type": "all"
        },
        "eval": "skill_timeout('attack',4491)",
        "in": "tavern",
        "info": {
            "dice": "bets",
            "num": "09.41",
            "seconds": 27
        },
        "m": 3,
        "name": "tavern",
        "x": 0,
        "y": -8
    }
    expect(tavern).toBeDefined()
})