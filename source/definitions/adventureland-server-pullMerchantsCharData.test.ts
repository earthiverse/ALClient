import { PullMerchantsData } from "./adventureland-server"

/**
 * The following is from a socket event received 2021-04-22
 * It is used to confirm type correctness
 */

test("PullMerchantsData type validation", async () => {
    const merchantsData: PullMerchantsData = {
        type: "merchants",
        chars: [
            {
                "map": "main",
                "cx": {
                    "hair": "hairdo521",
                    "head": "makeup117",
                    "hat": "hat404"
                },
                "skin": "marmor12a",
                "slots": {
                    "trade9": {
                        "price": 110000000,
                        "level": 8,
                        "name": "fireblade",
                        "rid": "w47U",
                        "grace": 2.4
                    },
                    "trade1": {
                        "q": 997,
                        "price": 480001,
                        "b": true,
                        "rid": "dk6v",
                        "name": "gem0"
                    },
                    "trade2": {
                        "q": 500,
                        "price": 400001,
                        "b": true,
                        "rid": "dmSx",
                        "name": "essenceoffire"
                    },
                    "trade3": {
                        "name": "mmhat",
                        "price": 275000000,
                        "grace": 2,
                        "rid": "k1hK",
                        "level": 7
                    },
                    "trade5": {
                        "q": 991,
                        "price": 2501001,
                        "b": true,
                        "rid": "mum8",
                        "name": "offeringp"
                    },
                    "trade6": {
                        "q": 500,
                        "price": 600000,
                        "b": true,
                        "rid": "ahTW",
                        "name": "candy0"
                    },
                    "trade7": {
                        "q": 1,
                        "price": 99999999999,
                        "name": "nheart",
                        "rid": "iKED"
                    },
                    "trade18": {
                        "name": "fireblade",
                        "price": 20687360,
                        "grace": 0.8,
                        "rid": "hm9b",
                        "level": 7
                    },
                    "trade12": {
                        "name": "fireblade",
                        "price": 20687360,
                        "grace": 0.8,
                        "rid": "zxmm",
                        "level": 7
                    },
                    "trade10": {
                        "name": "fireblade",
                        "price": 110000000,
                        "grace": 1.6,
                        "rid": "Sm6O",
                        "level": 8
                    },
                    "trade11": {
                        "name": "fireblade",
                        "price": 20687360,
                        "grace": 1.2000000000000002,
                        "rid": "Qkww",
                        "level": 7
                    },
                    "trade16": {
                        "name": "fireblade",
                        "price": 20687360,
                        "grace": 0.8,
                        "rid": "DL19",
                        "level": 7
                    },
                    "trade17": {
                        "price": 20687360,
                        "level": 7,
                        "name": "fireblade",
                        "rid": "tsmN",
                        "grace": 0.8
                    },
                    "trade14": {
                        "price": 2005263680,
                        "level": 2,
                        "name": "lostearring",
                        "rid": "hFfM",
                        "grace": 0.9
                    },
                    "trade15": {
                        "price": 20687360,
                        "level": 7,
                        "name": "fireblade",
                        "rid": "EaXm",
                        "grace": 0.8
                    }
                },
                "name": "GavMerch",
                "level": 71,
                "afk": true,
                "server": "US II",
                "stand": "stand0",
                "y": -55.79204208339533,
                "x": -41.14908918462069
            },
            {
                "map": "main",
                "cx": {
                    "hair": "hairdo521",
                    "head": "makeup117",
                    "hat": "hat404"
                },
                "skin": "marmor12a",
                "slots": {
                    "trade8": {
                        "price": 50000,
                        "name": "strring",
                        "rid": "uZ9P",
                        "level": 0
                    },
                    "trade9": {
                        "price": 5488720,
                        "level": 3,
                        "name": "wbook0",
                        "rid": "pAhy",
                        "grace": 0
                    },
                    "trade1": {
                        "q": 167,
                        "price": 10000,
                        "name": "vitscroll",
                        "rid": "bRCO"
                    },
                    "trade2": {
                        "q": 312,
                        "price": 10000,
                        "name": "vitscroll",
                        "rid": "bsUu"
                    },
                    "trade3": {
                        "price": 586560,
                        "level": 2,
                        "name": "intamulet",
                        "rid": "b3D8",
                        "grace": 0
                    },
                    "trade4": {
                        "q": 3,
                        "price": 1500000,
                        "name": "elixirvit0",
                        "rid": "g0Ar"
                    },
                    "trade5": {
                        "price": 586560,
                        "level": 2,
                        "name": "intamulet",
                        "rid": "MrlN",
                        "grace": 0.125
                    },
                    "trade6": {
                        "price": 734016,
                        "level": 2,
                        "name": "vitearring",
                        "rid": "Vsw5",
                        "grace": 0
                    },
                    "trade7": {
                        "price": 50000,
                        "name": "strring",
                        "rid": "yoXb",
                        "level": 0
                    },
                    "trade12": {
                        "price": 50000,
                        "name": "strring",
                        "rid": "Bx6n",
                        "level": 0
                    },
                    "trade16": {
                        "q": 1,
                        "price": 1000000000,
                        "data": "hat407",
                        "name": "cxjar",
                        "rid": "TI78",
                    }
                },
                "name": "Seler",
                "level": 46,
                "afk": true,
                "server": "EU II",
                "stand": "stand0",
                "y": -69,
                "x": -89
            },
            {
                "map": "desertland",
                "cx": {
                    "hair": "hairdo111",
                    "upper": "marmor6g",
                    "head": "mmakeup00"
                },
                "skin": "marmor3g",
                "slots": {},
                "name": "Drippy",
                "level": 80,
                "afk": true,
                "server": "US I",
                "stand": "cstand",
                "y": -1841,
                "x": -208
            },
            {
                "map": "main",
                "cx": {
                    "hair": "hairdo521",
                    "head": "makeup117",
                    "hat": "hat404"
                },
                "skin": "marmor12a",
                "slots": {
                    "trade8": {
                        "price": 10000000,
                        "name": "staff",
                        "rid": "SkPw",
                        "level": 8
                    },
                    "trade1": {
                        "q": 11,
                        "price": 239999,
                        "name": "cscroll1",
                        "rid": "RgxS"
                    },
                    "trade2": {
                        "q": 1419,
                        "price": 10000,
                        "name": "vitscroll",
                        "rid": "i3a4"
                    },
                    "trade3": {
                        "acc": 1,
                        "rid": "mFQ3",
                        "level": 7,
                        "price": 3500000,
                        "name": "slimestaff"
                    },
                    "trade4": {
                        "price": 1000000,
                        "name": "hhelmet",
                        "rid": "E8wX",
                        "level": 0
                    },
                    "trade5": {
                        "price": 7500000,
                        "level": 8,
                        "name": "blade",
                        "rid": "fK6s",
                        "grace": 1
                    },
                    "trade6": {
                        "price": 1000000,
                        "name": "harmor",
                        "rid": "tXUJ",
                        "level": 0
                    },
                    "trade7": {
                        "name": "blade",
                        "price": 7500000,
                        "grace": 0.4,
                        "rid": "fxnZ",
                        "level": 8
                    }
                },
                "name": "Wombo",
                "level": 51,
                "afk": "code",
                "server": "US I",
                "stand": "stand0",
                "y": -56.26030469651492,
                "x": -75.23736683316768
            },
            {
                "map": "main",
                "cx": {
                    "hair": "hairdo521",
                    "head": "makeup117",
                    "hat": "hat404"
                },
                "skin": "marmor12b",
                "slots": {
                    "trade8": {
                        "price": 500000000,
                        "name": "t3bow",
                        "rid": "lhqv",
                        "level": 0
                    },
                    "trade9": {
                        "price": 100000000,
                        "grace": 0.5,
                        "name": "strearring",
                        "rid": "COC7",
                        "level": 4
                    },
                    "trade1": {
                        "q": 100,
                        "price": 1000000,
                        "name": "essenceoffire",
                        "rid": "rPOA"
                    },
                    "trade5": {
                        "name": "strearring",
                        "price": 100000000,
                        "grace": 0.5,
                        "rid": "cQfg",
                        "level": 4
                    },
                    "trade6": {
                        "price": 100000000,
                        "level": 4,
                        "name": "vitearring",
                        "rid": "rRfU",
                        "grace": 0.5
                    },
                    "trade7": {
                        "price": 50000000,
                        "level": 1,
                        "name": "lantern",
                        "rid": "IVct",
                        "grace": 0.2
                    },
                    "trade12": {
                        "q": 1,
                        "price": 100000000,
                        "name": "snakeoil",
                        "rid": "CQif"
                    },
                    "trade13": {
                        "p": "glitched",
                        "price": 200000000,
                        "name": "dexbelt",
                        "rid": "Fmb0",
                        "level": 0
                    },
                    "trade10": {
                        "price": 100000000,
                        "level": 4,
                        "name": "vitearring",
                        "rid": "aF9c",
                        "grace": 0.5
                    },
                    "trade11": {
                        "b": true,
                        "name": "wbook0",
                        "level": 4,
                        "price": 60000000,
                        "q": 1,
                        "rid": "hgUD"
                    }
                },
                "name": "MerchantMain",
                "level": 69,
                "afk": true,
                "server": "EU PVP",
                "stand": "stand0",
                "y": -144,
                "x": -144
            },
            {
                "map": "main",
                "cx": {
                    "hair": "hairdo401",
                    "head": "makeup117"
                },
                "skin": "marmor12b",
                "slots": {
                    "trade8": {
                        "q": 553,
                        "price": 1500000,
                        "name": "gem0",
                        "rid": "vx3d"
                    },
                    "trade20": {
                        "price": 300000000,
                        "level": 4,
                        "grace": 0.734375,
                        "rid": "TqxS",
                        "name": "strbelt"
                    },
                    "trade2": {
                        "price": 1000000000,
                        "grace": 0.8,
                        "name": "fireblade",
                        "rid": "cLf4",
                        "level": 9
                    },
                    "trade7": {
                        "q": 1,
                        "price": 1500000000,
                        "name": "essenceofgreed",
                        "rid": "TUEe"
                    },
                    "trade19": {
                        "price": 300000000,
                        "level": 4,
                        "grace": 0.5,
                        "rid": "xwHT",
                        "name": "strbelt"
                    },
                    "trade13": {
                        "price": 6000000,
                        "level": 8,
                        "rid": "Hg8r",
                        "name": "quiver"
                    },
                    "trade14": {
                        "price": 6000000,
                        "level": 8,
                        "rid": "nArs",
                        "name": "quiver"
                    }
                },
                "name": "Suarez",
                "level": 74,
                "afk": "code",
                "server": "ASIA I",
                "stand": "cstand",
                "y": -84.00590386777625,
                "x": -1366.473798141893
            },
            {
                "map": "main",
                "cx": {
                    "hair": "hairdo413",
                    "head": "fmakeup01"
                },
                "skin": "marmor7c",
                "slots": {
                    "trade9": {
                        "q": 5667,
                        "price": 35000,
                        "b": true,
                        "rid": "Kxi7",
                        "name": "gemfragment"
                    },
                    "trade4": {
                        "b": true,
                        "name": "cupid",
                        "level": 0,
                        "price": 1000000,
                        "q": 5,
                        "rid": "AtrB"
                    },
                    "trade5": {
                        "q": 2861,
                        "price": 50000,
                        "b": true,
                        "rid": "BJ7K",
                        "name": "essenceoffrost"
                    },
                    "trade12": {
                        "b": true,
                        "name": "suckerpunch",
                        "level": 0,
                        "price": 205000000,
                        "q": 17,
                        "rid": "fRrh"
                    },
                    "trade13": {
                        "q": 7443,
                        "price": 200000,
                        "b": true,
                        "rid": "lM0D",
                        "name": "gem0"
                    },
                    "trade10": {
                        "q": 4780,
                        "price": 25000,
                        "b": true,
                        "rid": "LyxM",
                        "name": "snakeoil"
                    },
                    "trade11": {
                        "q": 34,
                        "price": 12050000,
                        "b": true,
                        "rid": "yarP",
                        "name": "offering"
                    }
                },
                "name": "Lootbot",
                "level": 74,
                "afk": "code",
                "server": "US III",
                "stand": "stand0",
                "y": 0,
                "x": 0
            },
            {
                "map": "main",
                "cx": {
                    "hair": "hairdo520",
                    "head": "fmakeup01",
                    "hat": "hat221"
                },
                "skin": "marmor12b",
                "slots": {},
                "name": "milkyway",
                "level": 75,
                "afk": true,
                "server": "US I",
                "stand": "cstand",
                "y": -137.21077974676678,
                "x": -1367.9999999
            },
            {
                "map": "main",
                "cx": {
                    "hair": "hairdo521",
                    "head": "makeup117",
                    "hat": "hat404"
                },
                "skin": "marmor12a",
                "slots": {},
                "name": "BastardMerch",
                "level": 40,
                "afk": true,
                "server": "US I",
                "stand": "stand0",
                "y": 1704,
                "x": 654
            },
            {
                "map": "desertland",
                "cx": {},
                "skin": "fmerchant",
                "slots": {
                    "trade30": {
                        "q": 100,
                        "price": 3000000,
                        "name": "offeringp",
                        "rid": "VqyV"
                    },
                    "trade2": {
                        "b": true,
                        "name": "supermittens",
                        "level": 7,
                        "price": 500000000,
                        "q": 2,
                        "rid": "TFLv"
                    },
                    "trade20": {
                        "price": 80000000,
                        "grace": 0.84375,
                        "name": "stramulet",
                        "rid": "b4FJ",
                        "level": 4
                    },
                    "trade7": {
                        "b": true,
                        "name": "supermittens",
                        "level": 0,
                        "price": 50000000,
                        "q": 4,
                        "rid": "EL0U"
                    }
                },
                "name": "AriaHarper",
                "level": 90,
                "afk": "code",
                "server": "US I",
                "stand": "cstand",
                "y": -1415,
                "x": -500
            },
            {
                "map": "main",
                "cx": {
                    "hair": "hairdo521",
                    "head": "makeup117",
                    "hat": "hat404"
                },
                "skin": "marmor12a",
                "slots": {
                    "trade8": {
                        "name": "hpbelt",
                        "level": 2,
                        "price": 3000000,
                        "p": "shiny",
                        "rid": "gxAA",
                        "grace": 0.4625
                    },
                    "trade23": {
                        "price": 4000000,
                        "level": 3,
                        "name": "stramulet",
                        "rid": "ElX4",
                        "grace": 0.4
                    },
                    "trade20": {
                        "p": "glitched",
                        "price": 300000000,
                        "level": 0,
                        "rid": "rs41",
                        "name": "candycanesword"
                    },
                    "trade1": {
                        "price": 5000000,
                        "rid": "i7ap",
                        "name": "tshirt4",
                        "level": 4
                    },
                    "trade2": {
                        "name": "ctristone",
                        "price": 8000000,
                        "grace": 0,
                        "rid": "kQgl",
                        "level": 1
                    },
                    "trade3": {
                        "price": 4000000,
                        "name": "firestars",
                        "rid": "gABh",
                        "level": 4
                    },
                    "trade4": {
                        "price": 4000000,
                        "name": "firestars",
                        "rid": "KJ74",
                        "level": 4
                    },
                    "trade5": {
                        "price": 10000000,
                        "level": 0,
                        "rid": "Mg3u",
                        "name": "epyjamas"
                    },
                    "trade6": {
                        "price": 15000000,
                        "grace": 1.6,
                        "name": "mittens",
                        "rid": "zrHO",
                        "level": 5
                    },
                    "trade7": {
                        "name": "stramulet",
                        "level": 4,
                        "price": 55000000,
                        "gf": "Biene",
                        "rid": "bKfE",
                        "grace": 0
                    },
                    "trade21": {
                        "p": "glitched",
                        "price": 300000000,
                        "level": 0,
                        "rid": "afp1",
                        "name": "mushroomstaff"
                    },
                    "trade22": {
                        "price": 10000000,
                        "rid": "kllT",
                        "name": "pinkie",
                        "level": 5
                    },
                    "trade18": {
                        "price": 5000000000,
                        "name": "suckerpunch",
                        "rid": "ruG2",
                        "level": 0
                    },
                    "trade19": {
                        "p": "glitched",
                        "price": 250000000,
                        "rid": "IUBO",
                        "name": "partyhat",
                        "level": 0
                    },
                    "trade24": {
                        "price": 10000000,
                        "rid": "N4PV",
                        "name": "mittens",
                        "level": 4
                    },
                    "trade12": {
                        "price": 5000000000,
                        "name": "suckerpunch",
                        "rid": "ic5v",
                        "level": 0
                    },
                    "trade13": {
                        "name": "stramulet",
                        "price": 4000000,
                        "grace": 0,
                        "rid": "We0Z",
                        "level": 3
                    },
                    "trade10": {
                        "price": 300000000,
                        "level": 2,
                        "name": "lostearring",
                        "rid": "fTHv",
                        "grace": 0
                    },
                    "trade11": {
                        "price": 300000000,
                        "level": 2,
                        "grace": 0,
                        "rid": "IpIP",
                        "name": "lostearring"
                    },
                    "trade14": {
                        "price": 7000000,
                        "level": 5,
                        "rid": "MKw3",
                        "name": "tshirt4"
                    }
                },
                "name": "WBuffet",
                "level": 71,
                "afk": true,
                "server": "ASIA I",
                "stand": "stand0",
                "y": -86.4088722668627,
                "x": 38.02826638038903
            },
            {
                "map": "main",
                "cx": {
                    "hair": "hairdo521",
                    "head": "makeup117",
                    "hat": "hat404"
                },
                "skin": "marmor12b",
                "slots": {
                    "trade1": {
                        "b": true,
                        "name": "fury",
                        "level": 0,
                        "price": 1700000000,
                        "q": 99,
                        "rid": "IF5d"
                    },
                    "trade19": {
                        "q": 7,
                        "price": 50000000,
                        "name": "networkcard",
                        "rid": "XGzi"
                    }
                },
                "name": "AKATrader",
                "level": 77,
                "afk": "code",
                "server": "US II",
                "stand": "cstand",
                "y": -57,
                "x": -93
            },
            {
                "map": "main",
                "cx": {
                    "hair": "hairdo521",
                    "head": "fmakeup01",
                    "hat": "hat110"
                },
                "skin": "mbody1f",
                "slots": {
                    "trade8": {
                        "price": 11000000,
                        "name": "mcarmor",
                        "rid": "OcgT",
                        "level": 3
                    },
                    "trade9": {
                        "price": 9000000,
                        "name": "mcpants",
                        "rid": "KxS5",
                        "level": 3
                    },
                    "trade1": {
                        "price": 2000000,
                        "name": "tracker",
                        "rid": "HUJ5"
                    },
                    "trade2": {
                        "price": 35000000,
                        "name": "mcape",
                        "rid": "SQFS",
                        "level": 6
                    },
                    "trade3": {
                        "price": 160000000,
                        "level": 4,
                        "name": "wbook0",
                        "rid": "TBi6",
                        "grace": 1.74375
                    },
                    "trade4": {
                        "price": 220000000,
                        "name": "wbook1",
                        "rid": "MepV",
                        "level": 0
                    },
                    "trade5": {
                        "q": 1105,
                        "price": 140000,
                        "name": "gem1",
                        "rid": "wztk"
                    },
                    "trade6": {
                        "q": 10,
                        "price": 6000000,
                        "name": "goldnugget",
                        "rid": "sK1b"
                    },
                    "trade7": {
                        "price": 8000000,
                        "name": "mchat",
                        "rid": "Vwak",
                        "level": 3
                    },
                    "trade23": {
                        "price": 35000000,
                        "level": 3,
                        "grace": 0,
                        "rid": "JE4p",
                        "name": "orbg"
                    },
                    "trade22": {
                        "price": 35000000,
                        "level": 4,
                        "grace": 0.625,
                        "rid": "cOca",
                        "name": "ringsj"
                    },
                    "trade21": {
                        "price": 35000000,
                        "grace": 0.5,
                        "name": "ringsj",
                        "rid": "EHyx",
                        "level": 4
                    },
                    "trade20": {
                        "price": 120000000,
                        "grace": 0.5,
                        "name": "ctristone",
                        "rid": "u0q5",
                        "level": 3
                    },
                    "trade24": {
                        "q": 225,
                        "price": 250000,
                        "name": "feather0",
                        "rid": "UrrI"
                    },
                    "trade18": {
                        "q": 1,
                        "price": 950000000,
                        "name": "platinumnugget",
                        "rid": "u0go"
                    },
                    "trade19": {
                        "name": "ctristone",
                        "price": 120000000,
                        "grace": 0,
                        "rid": "xGgd",
                        "level": 3
                    },
                    "trade12": {
                        "price": 45000000,
                        "name": "xpants",
                        "rid": "nEzz",
                        "level": 0
                    },
                    "trade13": {
                        "price": 12000000,
                        "name": "mmhat",
                        "rid": "BzXm",
                        "level": 4
                    },
                    "trade10": {
                        "price": 13000000,
                        "name": "mcboots",
                        "rid": "aKW7",
                        "level": 3
                    },
                    "trade11": {
                        "price": 14000000,
                        "name": "mcgloves",
                        "rid": "e1WR",
                        "level": 3
                    },
                    "trade16": {
                        "price": 18000000,
                        "name": "mmshoes",
                        "rid": "FEd9",
                        "level": 4
                    },
                    "trade17": {
                        "price": 18000000,
                        "name": "mmgloves",
                        "rid": "Nr1I",
                        "level": 4
                    },
                    "trade14": {
                        "price": 14000000,
                        "name": "mmarmor",
                        "rid": "y2MD",
                        "level": 4
                    },
                    "trade15": {
                        "price": 16000000,
                        "name": "mmpants",
                        "rid": "xwTa",
                        "level": 4
                    }
                },
                "name": "Plutus",
                "level": 72,
                "afk": true,
                "server": "EU II",
                "stand": "stand0",
                "y": -100,
                "x": -180
            },
            {
                "map": "main",
                "cx": {
                    "hair": "hairdo520",
                    "head": "fmakeup03"
                },
                "skin": "marmor12b",
                "slots": {
                    "trade9": {
                        "b": true,
                        "name": "intbelt",
                        "level": 0,
                        "price": 500000,
                        "q": 6,
                        "rid": "sSHH"
                    },
                    "trade11": {
                        "b": true,
                        "name": "intring",
                        "level": 0,
                        "price": 500000,
                        "q": 6,
                        "rid": "icoZ"
                    }
                },
                "name": "Dotsell",
                "level": 61,
                "afk": "code",
                "server": "EU II",
                "stand": "stand0",
                "y": -130,
                "x": -180
            },
            {
                "map": "main",
                "cx": {
                    "hair": "hairdo521",
                    "head": "mmakeup00",
                    "hat": "hat224"
                },
                "skin": "marmor2g",
                "slots": {
                    "trade8": {
                        "b": true,
                        "name": "vitearring",
                        "level": 0,
                        "price": 50000,
                        "q": 99,
                        "rid": "MbCF"
                    },
                    "trade9": {
                        "name": "intamulet",
                        "price": 500000000,
                        "grace": 0.5,
                        "rid": "bVRt",
                        "level": 4
                    },
                    "trade1": {
                        "b": true,
                        "name": "wbook0",
                        "level": 0,
                        "price": 50000,
                        "q": 7,
                        "rid": "O0KM"
                    },
                    "trade2": {
                        "b": true,
                        "name": "wbook0",
                        "level": 0,
                        "price": 50000,
                        "q": 94,
                        "rid": "xStk"
                    },
                    "trade3": {
                        "price": 120000000,
                        "level": 4,
                        "grace": 0,
                        "rid": "LCgo",
                        "name": "stramulet"
                    },
                    "trade4": {
                        "price": 120000000,
                        "level": 4,
                        "grace": 0.509765625,
                        "rid": "T3dH",
                        "name": "dexamulet"
                    },
                    "trade5": {
                        "b": true,
                        "name": "intearring",
                        "level": 0,
                        "price": 100000,
                        "q": 98,
                        "rid": "RLI2"
                    },
                    "trade6": {
                        "b": true,
                        "name": "dexearring",
                        "level": 0,
                        "price": 87500,
                        "q": 99,
                        "rid": "U3qS"
                    },
                    "trade7": {
                        "b": true,
                        "name": "strearring",
                        "level": 0,
                        "price": 75000,
                        "q": 99,
                        "rid": "gkqU"
                    },
                    "trade23": {
                        "price": 300000000,
                        "level": 3,
                        "grace": 0,
                        "rid": "n8NF",
                        "name": "dexring"
                    },
                    "trade22": {
                        "price": 500000000,
                        "grace": 0,
                        "name": "ctristone",
                        "rid": "TCWb",
                        "level": 3
                    },
                    "trade21": {
                        "price": 500000000,
                        "grace": 1.6,
                        "name": "intring",
                        "rid": "oiQs",
                        "level": 3
                    },
                    "trade20": {
                        "price": 2000000000,
                        "level": 1,
                        "name": "snring",
                        "rid": "gw5h",
                        "grace": 0.5
                    },
                    "trade24": {
                        "name": "strring",
                        "price": 300000000,
                        "grace": 0,
                        "rid": "ncvr",
                        "level": 3
                    },
                    "trade18": {
                        "price": 500000000,
                        "level": 3,
                        "grace": 0,
                        "rid": "bUrt",
                        "name": "dexbelt"
                    },
                    "trade19": {
                        "price": 1000000000,
                        "level": 5,
                        "name": "stramulet",
                        "rid": "zVR1",
                        "grace": 1.15625
                    },
                    "trade12": {
                        "q": 999,
                        "price": 300000,
                        "b": true,
                        "rid": "RVTG",
                        "name": "essenceoffire"
                    },
                    "trade13": {
                        "q": 676,
                        "price": 10000,
                        "name": "vitscroll",
                        "rid": "pHLQ"
                    },
                    "trade10": {
                        "name": "dexearring",
                        "price": 240000000,
                        "grace": 0.83599853515625,
                        "rid": "pPSV",
                        "level": 4
                    },
                    "trade11": {
                        "price": 100000000,
                        "grace": 0.4,
                        "name": "hammer",
                        "rid": "rkIa",
                        "level": 3
                    },
                    "trade16": {
                        "q": 1,
                        "price": 2000000000,
                        "name": "essenceofgreed",
                        "rid": "sK9L"
                    },
                    "trade17": {
                        "price": 200000000,
                        "level": 4,
                        "name": "vitearring",
                        "rid": "b4bL",
                        "grace": 1.32379150390625
                    },
                    "trade14": {
                        "price": 200000000,
                        "level": 8,
                        "grace": 1.6,
                        "rid": "tbB5",
                        "name": "firestaff"
                    },
                    "trade15": {
                        "price": 240000000,
                        "level": 4,
                        "name": "strearring",
                        "rid": "Ac2b",
                        "grace": 0.83599853515625
                    }
                },
                "name": "Dinger",
                "level": 71,
                "afk": true,
                "server": "EU I",
                "stand": "stand0",
                "y": -144,
                "x": 101
            },
            {
                "map": "main",
                "cx": {
                    "hair": "hairdo521",
                    "head": "makeup117"
                },
                "skin": "marmor12a",
                "slots": {
                    "trade1": {
                        "price": 19200,
                        "name": "stinger",
                        "rid": "PU5z",
                        "level": 0
                    }
                },
                "name": "Dipboi",
                "level": 38,
                "afk": true,
                "server": "US I",
                "stand": "stand0",
                "y": -103,
                "x": -182
            },
            {
                "map": "main",
                "cx": {
                    "hair": "hairdo521",
                    "head": "makeup117",
                    "hat": "hat404"
                },
                "skin": "marmor12a",
                "slots": {
                    "trade1": {
                        "price": 14000,
                        "name": "hpamulet",
                        "rid": "aPUo",
                        "level": 0
                    },
                    "trade2": {
                        "price": 51080,
                        "name": "cclaw",
                        "rid": "WDUV",
                        "level": 5
                    },
                    "trade3": {
                        "price": 22200,
                        "name": "stinger",
                        "rid": "bLTd",
                        "level": 3
                    }
                },
                "name": "Shmerurp",
                "level": 12,
                "afk": true,
                "server": "US I",
                "stand": "stand0",
                "y": 35.1783162795844,
                "x": -135.9999999
            },
            {
                "map": "desertland",
                "cx": {
                    "hair": "hairdo201",
                    "hat": "hat401"
                },
                "skin": "marmor8b",
                "slots": {
                    "trade1": {
                        "name": "stramulet",
                        "price": 550000000,
                        "grace": 4.399999999999999,
                        "rid": "BIXk",
                        "level": 5
                    },
                    "trade6": {
                        "price": 250000,
                        "name": "woodensword",
                        "rid": "IHSO",
                        "level": 0
                    }
                },
                "name": "emptypockets",
                "level": 74,
                "afk": true,
                "server": "US I",
                "stand": "stand0",
                "y": -1841,
                "x": -175
            },
            {
                "map": "main",
                "cx": {
                    "head": "mmakeup00",
                    "hat": "hat221",
                    "face": "catbatg"
                },
                "skin": "marmor2g",
                "slots": {
                    "trade8": {
                        "q": 9999,
                        "price": 110000,
                        "b": true,
                        "rid": "l5Gf",
                        "name": "basketofeggs"
                    },
                    "trade9": {
                        "q": 9999,
                        "price": 480000,
                        "b": true,
                        "rid": "M6Iw",
                        "name": "candycane"
                    },
                    "trade1": {
                        "q": 9999,
                        "price": 640000,
                        "b": true,
                        "rid": "ZGNm",
                        "name": "gem0"
                    },
                    "trade2": {
                        "q": 9999,
                        "price": 155000,
                        "b": true,
                        "rid": "eSn6",
                        "name": "weaponbox"
                    },
                    "trade3": {
                        "price": 1100000000,
                        "grace": 0.5,
                        "name": "snring",
                        "rid": "MzOM",
                        "level": 1
                    },
                    "trade4": {
                        "price": 1000000000,
                        "level": 4,
                        "name": "cring",
                        "rid": "KmRX",
                        "grace": 2.14423828125
                    },
                    "trade5": {
                        "q": 9999,
                        "price": 790000,
                        "b": true,
                        "rid": "tvl3",
                        "name": "candy0"
                    },
                    "trade6": {
                        "q": 9999,
                        "price": 315000,
                        "b": true,
                        "rid": "Jw6W",
                        "name": "armorbox"
                    },
                    "trade7": {
                        "q": 9999,
                        "price": 425000,
                        "b": true,
                        "rid": "WpX2",
                        "name": "mistletoe"
                    },
                    "trade23": {
                        "b": true,
                        "name": "stick",
                        "level": 0,
                        "price": 2500000,
                        "q": 99,
                        "rid": "aPqg"
                    },
                    "trade22": {
                        "b": true,
                        "name": "intbelt",
                        "level": 4,
                        "price": 270000000,
                        "q": 3,
                        "rid": "wonZ"
                    },
                    "trade21": {
                        "b": true,
                        "name": "intbelt",
                        "level": 3,
                        "price": 41000000,
                        "q": 3,
                        "rid": "UrZr"
                    },
                    "trade20": {
                        "price": 3550000000,
                        "grace": 1.4,
                        "name": "cclaw",
                        "rid": "iXBG",
                        "level": 10
                    },
                    "trade27": {
                        "q": 9999,
                        "price": 40000000,
                        "b": true,
                        "rid": "SO5x",
                        "name": "glitch"
                    },
                    "trade26": {
                        "q": 9999,
                        "price": 10500,
                        "b": true,
                        "rid": "OW3x",
                        "name": "leather"
                    },
                    "trade25": {
                        "q": 9999,
                        "price": 70000,
                        "b": true,
                        "rid": "JTEL",
                        "name": "candy1"
                    },
                    "trade24": {
                        "price": 170000000,
                        "name": "t2quiver",
                        "rid": "GLrk",
                        "level": 0
                    },
                    "trade28": {
                        "q": 9999,
                        "price": 245000,
                        "b": true,
                        "rid": "y5mr",
                        "name": "monstertoken"
                    },
                    "trade30": {
                        "name": "fireblade",
                        "level": 10,
                        "price": 27500000000,
                        "l": "l",
                        "rid": "T3o3",
                        "grace": 2.4
                    },
                    "trade18": {
                        "q": 9999,
                        "price": 1900,
                        "b": true,
                        "rid": "eGtm",
                        "name": "seashell"
                    },
                    "trade19": {
                        "q": 9999,
                        "price": 96500000,
                        "b": true,
                        "rid": "LSuM",
                        "name": "xbox"
                    },
                    "trade12": {
                        "q": 9999,
                        "price": 25500,
                        "b": true,
                        "rid": "i3Tr",
                        "name": "ornament"
                    },
                    "trade10": {
                        "q": 9999,
                        "price": 190000,
                        "b": true,
                        "rid": "AMUS",
                        "name": "gemfragment"
                    },
                    "trade11": {
                        "q": 9999,
                        "price": 580000,
                        "b": true,
                        "rid": "nKoT",
                        "name": "essenceoffrost"
                    },
                    "trade16": {
                        "q": 9999,
                        "price": 270000000,
                        "b": true,
                        "rid": "PvJM",
                        "name": "mysterybox"
                    },
                    "trade17": {
                        "price": 43000000,
                        "name": "wbook1",
                        "rid": "TSkK",
                        "level": 0
                    },
                    "trade14": {
                        "q": 9999,
                        "price": 115000,
                        "b": true,
                        "rid": "B5xX",
                        "name": "gem1"
                    },
                    "trade15": {
                        "q": 9999,
                        "price": 18000,
                        "b": true,
                        "rid": "oA9W",
                        "name": "essenceofnature"
                    }
                },
                "name": "kouin",
                "level": 83,
                "afk": true,
                "server": "US PVP",
                "stand": "stand0",
                "y": -37,
                "x": 0
            }
        ]
    }
    expect(merchantsData).not.toBe(undefined)
})