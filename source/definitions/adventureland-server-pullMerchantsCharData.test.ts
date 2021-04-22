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
                "cx": {},
                "skin": "mmerchant",
                "slots": {
                    "trade8": {
                        "b": true,
                        "name": "wbook0",
                        "level": 0,
                        "price": 7201,
                        "q": 99,
                        "rid": "dUdm"
                    },
                    "trade12": {
                        "b": true,
                        "name": "wattire",
                        "level": 0,
                        "price": 17201,
                        "q": 25,
                        "rid": "SqCv"
                    },
                    "trade4": {
                        "q": 100,
                        "price": 30,
                        "b": true,
                        "rid": "xTUQ",
                        "name": "gslime"
                    }
                },
                "name": "loots",
                "level": 44,
                "afk": true,
                "server": "US II",
                "stand": "stand0",
                "y": -89.90283024715129,
                "x": -143.2673704927162
            },
            {
                "map": "main",
                "cx": {},
                "skin": "fmerchant",
                "slots": {
                    "trade8": {
                        "price": 8350628,
                        "name": "staff",
                        "rid": "Pbe3",
                        "level": 8
                    },
                    "trade9": {
                        "acc": 1,
                        "price": 17238760,
                        "name": "bow",
                        "rid": "Cl94",
                        "level": 8
                    },
                    "trade1": {
                        "price": 20285480,
                        "level": 8,
                        "name": "wcap",
                        "rid": "HP0D",
                        "grace": 1
                    },
                    "trade3": {
                        "price": 5103660,
                        "level": 3,
                        "name": "ringsj",
                        "rid": "XVcw",
                        "grace": 0
                    },
                    "trade4": {
                        "price": 200129280,
                        "name": "harbringer",
                        "rid": "kfpz",
                        "level": 6
                    },
                    "trade5": {
                        "name": "wattire",
                        "level": 8,
                        "price": 20309156,
                        "rid": "rxkB",
                        "stat_type": "int",
                        "grace": 0.4
                    },
                    "trade6": {
                        "price": 5350628,
                        "name": "staff",
                        "rid": "cNLH",
                        "level": 8
                    },
                    "trade7": {
                        "name": "wshield",
                        "level": 8,
                        "price": 5626600,
                        "rid": "hfwI",
                        "stat_type": "int",
                        "grace": 0.4
                    },
                    "trade12": {
                        "acc": 1,
                        "name": "fireblade",
                        "level": 8,
                        "price": 400493952,
                        "rid": "MKkN",
                        "grace": 0.4
                    },
                    "trade13": {
                        "q": 7,
                        "price": 255000,
                        "name": "monstertoken",
                        "rid": "lqbe"
                    },
                    "trade10": {
                        "price": 30765900,
                        "level": 3,
                        "name": "dexearring",
                        "rid": "slsT",
                        "grace": 0.00152587890625
                    },
                    "trade11": {
                        "price": 221600000,
                        "level": 4,
                        "name": "hdagger",
                        "rid": "VgNH",
                        "grace": 1
                    },
                    "trade16": {
                        "name": "gloves",
                        "level": 8,
                        "price": 20417508,
                        "rid": "ICR4",
                        "stat_type": "int",
                        "grace": 0.4
                    },
                    "trade14": {
                        "price": 20901256,
                        "grace": 0.8,
                        "name": "slimestaff",
                        "rid": "UKqC",
                        "level": 8
                    },
                    "trade15": {
                        "name": "shoes",
                        "level": 8,
                        "price": 20319524,
                        "rid": "Xf9X",
                        "stat_type": "int",
                        "grace": 0.4
                    }
                },
                "name": "FearceM",
                "level": 50,
                "afk": "code",
                "server": "EU II",
                "stand": "stand0",
                "y": -134,
                "x": -134
            },
            {
                "map": "main",
                "cx": {},
                "skin": "fmerchant",
                "slots": {
                    "trade1": {
                        "q": 974,
                        "price": 99,
                        "name": "mpot1",
                        "rid": "TT4f"
                    },
                    "trade2": {
                        "q": 5288,
                        "price": 15,
                        "name": "mpot0",
                        "rid": "mrev"
                    },
                    "trade3": {
                        "q": 5882,
                        "price": 99,
                        "name": "mpot1",
                        "rid": "ybef"
                    },
                    "trade4": {
                        "q": 5994,
                        "price": 99,
                        "name": "mpot1",
                        "rid": "iPL4"
                    }
                },
                "name": "Bogdanoff",
                "level": 44,
                "afk": true,
                "server": "EU II",
                "stand": "stand0",
                "y": -9,
                "x": 67.1
            },
            {
                "map": "spookytown",
                "cx": {
                    "hair": "hairdo417",
                    "head": "mmakeup00"
                },
                "skin": "marmor2g",
                "slots": {
                    "trade1": {
                        "q": 9451,
                        "price": 8000,
                        "name": "dstones",
                        "rid": "EVNZ"
                    },
                    "trade16": {
                        "b": true,
                        "name": "suckerpunch",
                        "level": 0,
                        "price": 450000000,
                        "q": 1,
                        "rid": "k5rW"
                    }
                },
                "name": "CeeNote",
                "level": 76,
                "afk": true,
                "server": "US III",
                "stand": "cstand",
                "y": 0,
                "x": 750
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
                "level": 78,
                "afk": true,
                "server": "US III",
                "stand": "cstand",
                "y": -1841,
                "x": -208
            },
            {
                "map": "main",
                "cx": {
                    "hair": "hairdo118",
                    "head": "makeup117",
                    "hat": "hat206"
                },
                "skin": "sarmor1g",
                "slots": {
                    "trade5": {
                        "b": true,
                        "name": "wgloves",
                        "level": 9,
                        "price": 67000000,
                        "q": 10,
                        "rid": "PX2g"
                    },
                    "trade6": {
                        "b": true,
                        "name": "wcap",
                        "level": 9,
                        "price": 67000000,
                        "q": 16,
                        "rid": "To6C"
                    },
                    "trade7": {
                        "q": 1,
                        "price": 2000000000,
                        "b": true,
                        "rid": "JtPO",
                        "name": "ukey"
                    },
                    "trade23": {
                        "q": 91,
                        "price": 35000000,
                        "name": "networkcard",
                        "rid": "BIXq"
                    },
                    "trade22": {
                        "q": 9581,
                        "price": 50000,
                        "name": "electronics",
                        "rid": "MKp2"
                    },
                    "trade19": {
                        "price": 2000000000,
                        "level": 3,
                        "name": "lantern",
                        "rid": "lDJM",
                        "grace": 0.53125
                    },
                    "trade25": {
                        "q": 683,
                        "price": 3500000,
                        "name": "offeringp",
                        "rid": "tT15"
                    },
                    "trade13": {
                        "q": 1,
                        "price": 2000000000,
                        "b": true,
                        "rid": "HJyq",
                        "name": "bkey"
                    },
                    "trade16": {
                        "q": 9976,
                        "price": 50000,
                        "name": "electronics",
                        "rid": "zy9Q"
                    },
                    "trade17": {
                        "q": 9930,
                        "price": 50000,
                        "name": "electronics",
                        "rid": "spAB"
                    }
                },
                "name": "MoneyS",
                "level": 80,
                "afk": true,
                "server": "US III",
                "stand": "cstand",
                "y": -50,
                "x": -132
            },
            {
                "map": "main",
                "cx": {
                    "hair": "hairdo120"
                },
                "skin": "marmor7h",
                "slots": {
                    "trade9": {
                        "price": 70000000,
                        "name": "carrotsword",
                        "rid": "aLmv",
                        "level": 8
                    },
                    "trade1": {
                        "price": 800000000,
                        "level": 7,
                        "grace": 1.4,
                        "rid": "TFDc",
                        "name": "lmace"
                    },
                    "trade2": {
                        "name": "orbofdex",
                        "price": 250000000,
                        "grace": 1.134375,
                        "rid": "BhrL",
                        "level": 3
                    },
                    "trade3": {
                        "price": 250000000,
                        "level": 3,
                        "name": "orbofdex",
                        "rid": "ppfV",
                        "grace": 1.134375
                    },
                    "trade4": {
                        "name": "fireblade",
                        "price": 800000000,
                        "grace": 2,
                        "rid": "mlUp",
                        "level": 9
                    },
                    "trade5": {
                        "price": 50000000,
                        "grace": 0.5,
                        "name": "orbofint",
                        "rid": "gaT0",
                        "level": 2
                    },
                    "trade6": {
                        "price": 50000000,
                        "level": 2,
                        "name": "orbofint",
                        "rid": "bGDs",
                        "grace": 0.5
                    },
                    "trade10": {
                        "price": 70000000,
                        "name": "carrotsword",
                        "rid": "KCcu",
                        "level": 8
                    },
                    "trade11": {
                        "price": 70000000,
                        "grace": 1,
                        "name": "carrotsword",
                        "rid": "WPTM",
                        "level": 8
                    }
                },
                "name": "RisingTrader",
                "level": 78,
                "afk": true,
                "server": "EU I",
                "stand": "cstand",
                "y": -193,
                "x": -278
            },
            {
                "map": "main",
                "cx": {},
                "skin": "fmerchant",
                "slots": {
                    "trade8": {
                        "price": 5000000,
                        "name": "angelwings",
                        "rid": "ikkI",
                        "level": 0
                    },
                    "trade9": {
                        "price": 180000000,
                        "name": "lantern",
                        "rid": "FNCu",
                        "level": 2
                    },
                    "trade20": {
                        "price": 500000,
                        "name": "woodensword",
                        "rid": "TqFS",
                        "level": 0
                    },
                    "trade2": {
                        "q": 1,
                        "price": 1000000000,
                        "b": true,
                        "rid": "leyt",
                        "name": "ukey"
                    },
                    "trade3": {
                        "b": true,
                        "name": "suckerpunch",
                        "level": 0,
                        "price": 400000000,
                        "q": 2,
                        "rid": "Q39H"
                    },
                    "trade4": {
                        "price": 99999999999,
                        "name": "ledger",
                        "rid": "Gvz4"
                    },
                    "trade21": {
                        "price": 500000,
                        "name": "woodensword",
                        "rid": "NmIU",
                        "level": 0
                    },
                    "trade23": {
                        "price": 5000000,
                        "name": "angelwings",
                        "rid": "AazD",
                        "level": 0
                    },
                    "trade22": {
                        "price": 5000000,
                        "name": "angelwings",
                        "rid": "qhQQ",
                        "level": 0
                    },
                    "trade18": {
                        "price": 500000,
                        "name": "woodensword",
                        "rid": "mxES",
                        "level": 0
                    },
                    "trade19": {
                        "price": 500000,
                        "name": "woodensword",
                        "rid": "oawO",
                        "level": 0
                    },
                    "trade27": {
                        "price": 5000000,
                        "name": "angelwings",
                        "rid": "h0BC",
                        "level": 0
                    },
                    "trade26": {
                        "price": 5000000,
                        "name": "angelwings",
                        "rid": "qh8h",
                        "level": 0
                    },
                    "trade25": {
                        "price": 5000000,
                        "name": "angelwings",
                        "rid": "fPEm",
                        "level": 0
                    },
                    "trade13": {
                        "price": 15000000,
                        "name": "lantern",
                        "rid": "oBXT",
                        "level": 0
                    },
                    "trade29": {
                        "price": 5000000,
                        "name": "angelwings",
                        "rid": "QZKV",
                        "level": 0
                    },
                    "trade28": {
                        "price": 5000000,
                        "name": "angelwings",
                        "rid": "Nhsr",
                        "level": 0
                    },
                    "trade16": {
                        "price": 5000000,
                        "name": "angelwings",
                        "rid": "TB97",
                        "level": 0
                    },
                    "trade17": {
                        "price": 5000000,
                        "name": "angelwings",
                        "rid": "yFs8",
                        "level": 0
                    },
                    "trade14": {
                        "price": 50000000,
                        "level": 1,
                        "grace": 0,
                        "rid": "n3gT",
                        "name": "lantern"
                    },
                    "trade15": {
                        "price": 50000000,
                        "level": 1,
                        "grace": 0,
                        "rid": "rZ0R",
                        "name": "lantern"
                    }
                },
                "name": "Trexnamedtod",
                "level": 81,
                "afk": true,
                "server": "US III",
                "stand": "stand0",
                "y": 589.9177179040183,
                "x": -1017.1797089081631
            },
            {
                "map": "main",
                "cx": {
                    "hair": "hairdo401",
                    "head": "makeup117"
                },
                "skin": "marmor12b",
                "slots": {
                    "trade2": {
                        "price": 350000000,
                        "grace": 0.65625,
                        "name": "dexbelt",
                        "rid": "W3xF",
                        "level": 4
                    },
                    "trade7": {
                        "name": "fireblade",
                        "price": 1500000000,
                        "grace": 0.8,
                        "rid": "MtOK",
                        "level": 9
                    },
                    "trade19": {
                        "q": 1,
                        "price": 1500000000,
                        "name": "essenceofgreed",
                        "rid": "K4m9"
                    },
                    "trade24": {
                        "price": 2000000,
                        "rid": "BONw",
                        "name": "gphelmet",
                        "level": 0
                    },
                    "trade13": {
                        "price": 200000000,
                        "level": 4,
                        "grace": 0.578125,
                        "rid": "DfBJ",
                        "name": "strearring"
                    },
                    "trade11": {
                        "price": 350000000,
                        "grace": 0.734375,
                        "name": "intbelt",
                        "rid": "Smlb",
                        "level": 4
                    }
                },
                "name": "Suarez",
                "level": 70,
                "afk": true,
                "server": "ASIA I",
                "stand": "cstand",
                "y": -106.23900292121996,
                "x": -1247.1106141733453
            },
            {
                "map": "main",
                "cx": {
                    "hair": "hairdo520",
                    "hat": "hat222"
                },
                "skin": "marmor12b",
                "slots": {
                    "trade30": {
                        "q": 307,
                        "price": 4000000,
                        "name": "offeringp",
                        "rid": "AMsQ"
                    },
                    "trade20": {
                        "q": 9999,
                        "price": 200000,
                        "b": true,
                        "rid": "SqOG",
                        "name": "essenceoffrost"
                    },
                    "trade1": {
                        "q": 8168,
                        "price": 100000,
                        "name": "cscale",
                        "rid": "isHu"
                    },
                    "trade21": {
                        "q": 10,
                        "price": 50000000,
                        "b": true,
                        "rid": "RrF4",
                        "name": "platinumnugget"
                    },
                    "trade5": {
                        "b": true,
                        "name": "fury",
                        "level": 0,
                        "price": 800000000,
                        "q": 10,
                        "rid": "yg3x"
                    },
                    "trade6": {
                        "b": true,
                        "name": "cring",
                        "level": 4,
                        "price": 200000000,
                        "q": 1,
                        "rid": "boft"
                    },
                    "trade23": {
                        "q": 9042,
                        "price": 500000,
                        "b": true,
                        "rid": "hvzD",
                        "name": "weaponbox"
                    },
                    "trade22": {
                        "q": 10,
                        "price": 50000000,
                        "b": true,
                        "rid": "hdyo",
                        "name": "essenceofgreed"
                    },
                    "trade18": {
                        "q": 7900,
                        "price": 250000,
                        "b": true,
                        "rid": "Upik",
                        "name": "essenceoffire"
                    },
                    "trade19": {
                        "b": true,
                        "name": "ringofluck",
                        "level": 0,
                        "price": 500000000,
                        "q": 2,
                        "rid": "RHGL"
                    },
                    "trade27": {
                        "q": 8381,
                        "price": 40000,
                        "b": true,
                        "rid": "IvqH",
                        "name": "gemfragment"
                    },
                    "trade26": {
                        "q": 1000,
                        "price": 1250000,
                        "name": "candy0",
                        "rid": "R5iT"
                    },
                    "trade25": {
                        "q": 1,
                        "price": 99999999999,
                        "name": "scroll4",
                        "rid": "dd6l"
                    },
                    "trade24": {
                        "b": true,
                        "name": "suckerpunch",
                        "level": 0,
                        "price": 600000000,
                        "q": 10,
                        "rid": "IFB4"
                    },
                    "trade13": {
                        "b": true,
                        "name": "stick",
                        "level": 0,
                        "price": 5000000,
                        "q": 99,
                        "rid": "aBJO"
                    },
                    "trade29": {
                        "q": 80,
                        "price": 24000000,
                        "b": true,
                        "rid": "aFBN",
                        "name": "offering"
                    },
                    "trade28": {
                        "q": 9778,
                        "price": 65000,
                        "b": true,
                        "rid": "zeLN",
                        "name": "ornament"
                    },
                    "trade16": {
                        "q": 9059,
                        "price": 175000,
                        "b": true,
                        "rid": "g3PE",
                        "name": "monstertoken"
                    },
                    "trade17": {
                        "b": true,
                        "name": "gcape",
                        "level": 0,
                        "price": 200000,
                        "q": 68,
                        "rid": "TFIz"
                    },
                    "trade14": {
                        "b": true,
                        "name": "orbofdex",
                        "level": 0,
                        "price": 400000,
                        "q": 97,
                        "rid": "W1LH"
                    },
                    "trade15": {
                        "b": true,
                        "name": "orbofstr",
                        "level": 0,
                        "price": 400000,
                        "q": 97,
                        "rid": "lX7G"
                    }
                },
                "name": "Ploob",
                "level": 81,
                "afk": true,
                "server": "US II",
                "stand": "cstand",
                "y": 40,
                "x": 40
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
                        "price": 14999999,
                        "grace": 1,
                        "name": "pants1",
                        "rid": "tuAg",
                        "level": 5
                    },
                    "trade3": {
                        "q": 1,
                        "price": 49999999,
                        "name": "x6",
                        "rid": "k6i2"
                    },
                    "trade13": {
                        "price": 39999999,
                        "level": 4,
                        "name": "ringsj",
                        "rid": "iaSR",
                        "grace": 0.0625
                    },
                    "trade10": {
                        "price": 39999999,
                        "name": "coat1",
                        "rid": "akMI",
                        "level": 5
                    },
                    "trade16": {
                        "q": 5,
                        "price": 1999999,
                        "name": "elixirvit0",
                        "rid": "m3yn"
                    },
                    "trade14": {
                        "price": 4999999,
                        "name": "hpamulet",
                        "rid": "dnPM",
                        "level": 0
                    }
                },
                "name": "KnossosSells",
                "level": 57,
                "afk": true,
                "server": "EU II",
                "stand": "stand0",
                "y": -140.88222004627048,
                "x": -145.53867472931853
            },
            {
                "map": "main",
                "cx": {
                    "hair": "hairdo520",
                    "head": "fmakeup01",
                    "hat": "hat404"
                },
                "skin": "marmor12b",
                "slots": {
                    "trade1": {
                        "b": true,
                        "name": "suckerpunch",
                        "level": 0,
                        "price": 600000000,
                        "q": 1,
                        "rid": "Z3T9"
                    }
                },
                "name": "milkyway",
                "level": 73,
                "afk": true,
                "server": "US I",
                "stand": "cstand",
                "y": -119.54669714871194,
                "x": -1367.9999999
            },
            {
                "map": "main",
                "cx": {},
                "skin": "fmerchant",
                "slots": {
                    "trade30": {
                        "price": 10000000,
                        "name": "harbringer",
                        "rid": "Sz7K",
                        "level": 5
                    },
                    "trade20": {
                        "name": "dexamulet",
                        "level": 5,
                        "price": 600000000,
                        "l": "s",
                        "rid": "OL2M",
                        "grace": 35.79999999999999
                    },
                    "trade1": {
                        "b": true,
                        "name": "vattire",
                        "level": 8,
                        "price": 1000000000,
                        "q": 1,
                        "rid": "JPIf"
                    },
                    "trade2": {
                        "b": true,
                        "name": "supermittens",
                        "level": 7,
                        "price": 500000000,
                        "q": 2,
                        "rid": "TFLv"
                    },
                    "trade3": {
                        "b": true,
                        "name": "strbelt",
                        "level": 4,
                        "price": 200000000,
                        "q": 1,
                        "rid": "et8k"
                    },
                    "trade21": {
                        "price": 80000000,
                        "level": 4,
                        "grace": 0.84375,
                        "rid": "lKZf",
                        "name": "stramulet"
                    },
                    "trade7": {
                        "b": true,
                        "name": "supermittens",
                        "level": 0,
                        "price": 50000000,
                        "q": 4,
                        "rid": "EL0U"
                    },
                    "trade23": {
                        "price": 10000000,
                        "name": "harbringer",
                        "rid": "sfXa",
                        "level": 5
                    },
                    "trade22": {
                        "price": 10000000,
                        "name": "harbringer",
                        "rid": "Em73",
                        "level": 5
                    },
                    "trade18": {
                        "price": 10000000,
                        "name": "harbringer",
                        "rid": "gIsv",
                        "level": 5
                    },
                    "trade19": {
                        "price": 350000000,
                        "level": 3,
                        "grace": 1.55625,
                        "rid": "wvUX",
                        "name": "santasbelt"
                    },
                    "trade27": {
                        "price": 250000000,
                        "level": 4,
                        "grace": 39.39999999999999,
                        "rid": "OAMs",
                        "name": "dexbelt"
                    },
                    "trade26": {
                        "price": 175000000,
                        "level": 4,
                        "grace": 1.0875,
                        "rid": "ZZC6",
                        "name": "strring"
                    },
                    "trade25": {
                        "price": 200000000,
                        "level": 4,
                        "grace": 0.6875,
                        "rid": "z8HX",
                        "name": "strring"
                    },
                    "trade24": {
                        "price": 10000000,
                        "level": 5,
                        "grace": 1,
                        "rid": "qVGn",
                        "name": "harbringer"
                    },
                    "trade29": {
                        "price": 10000000,
                        "name": "harbringer",
                        "rid": "Iqlf",
                        "level": 5
                    },
                    "trade28": {
                        "price": 10000000,
                        "name": "harbringer",
                        "rid": "eP5q",
                        "level": 5
                    },
                    "trade17": {
                        "price": 10000000,
                        "name": "harbringer",
                        "rid": "lh6M",
                        "level": 5
                    }
                },
                "name": "AriaHarper",
                "level": 90,
                "afk": "code",
                "server": "US II",
                "stand": "cstand",
                "y": 115,
                "x": 1370
            },
            {
                "map": "main",
                "cx": {
                    "hair": "hairdo520",
                    "head": "fmakeup01"
                },
                "skin": "marmor12b",
                "slots": {
                    "trade14": {
                        "b": true,
                        "name": "t2intamulet",
                        "level": 0,
                        "price": 96001,
                        "q": 1,
                        "rid": "O4la"
                    },
                    "trade15": {
                        "b": true,
                        "name": "orbofint",
                        "level": 0,
                        "price": 144001,
                        "q": 1,
                        "rid": "AunL"
                    }
                },
                "name": "Natasha11x11",
                "level": 35,
                "afk": true,
                "server": "US III",
                "stand": "stand0",
                "y": 0.07492304938025995,
                "x": 96.90916385505643
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
                        "q": 9999,
                        "price": 5000000,
                        "b": true,
                        "rid": "OTLV",
                        "name": "offering"
                    },
                    "trade1": {
                        "price": 200000000,
                        "grace": 0,
                        "name": "dexring",
                        "rid": "l96g",
                        "level": 4
                    },
                    "trade6": {
                        "q": 9959,
                        "price": 2500000,
                        "b": true,
                        "rid": "hUTd",
                        "name": "funtoken"
                    },
                    "trade19": {
                        "b": true,
                        "name": "intearring",
                        "level": 4,
                        "price": 120000000,
                        "q": 1,
                        "rid": "zIxQ"
                    },
                    "trade24": {
                        "q": 2599,
                        "price": 250000,
                        "b": true,
                        "rid": "t62I",
                        "name": "essenceoffire"
                    },
                    "trade16": {
                        "q": 9907,
                        "price": 100000000,
                        "name": "mpot0",
                        "rid": "fTZe"
                    },
                    "trade15": {
                        "b": true,
                        "name": "t2quiver",
                        "level": 0,
                        "price": 40000000,
                        "q": 98,
                        "rid": "iUqw"
                    }
                },
                "name": "AKATrader",
                "level": 74,
                "afk": true,
                "server": "US II",
                "stand": "cstand",
                "y": -72,
                "x": -1
            },
            {
                "map": "main",
                "cx": {
                    "hair": "hairdo117"
                },
                "skin": "marmor12a",
                "slots": {
                    "trade8": {
                        "b": true,
                        "name": "wbook0",
                        "level": 0,
                        "price": 10000,
                        "q": 51,
                        "rid": "wIl9"
                    },
                    "trade9": {
                        "p": "shiny",
                        "price": 5000000,
                        "name": "maceofthedead",
                        "rid": "WvB7",
                        "level": 0
                    },
                    "trade1": {
                        "price": 1771080,
                        "grace": 1,
                        "name": "epyjamas",
                        "rid": "gWbw",
                        "level": 7
                    },
                    "trade2": {
                        "price": 5000000,
                        "name": "epyjamas",
                        "rid": "W59l",
                        "level": 7
                    },
                    "trade21": {
                        "name": "swordofthedead",
                        "price": 10000000,
                        "grace": 0.4,
                        "rid": "seUm",
                        "level": 4
                    },
                    "trade23": {
                        "price": 10000000,
                        "level": 4,
                        "grace": 0.4,
                        "rid": "Qp42",
                        "name": "swordofthedead"
                    },
                    "trade22": {
                        "price": 10000000,
                        "name": "swordofthedead",
                        "rid": "n0Dq",
                        "level": 4
                    },
                    "trade18": {
                        "price": 10000000,
                        "grace": 0.4,
                        "name": "swordofthedead",
                        "rid": "GOxA",
                        "level": 4
                    },
                    "trade19": {
                        "price": 20000000,
                        "name": "blade",
                        "rid": "m1FJ",
                        "level": 8
                    },
                    "trade24": {
                        "name": "phelmet",
                        "level": 5,
                        "price": 3000000,
                        "gf": "Bjarnu",
                        "rid": "OIb0",
                        "grace": 2
                    },
                    "trade12": {
                        "price": 10000000,
                        "level": 4,
                        "name": "swordofthedead",
                        "rid": "zxku",
                        "grace": 0.4
                    },
                    "trade13": {
                        "b": true,
                        "name": "intring",
                        "level": 0,
                        "price": 20000,
                        "q": 71,
                        "rid": "LG0N"
                    },
                    "trade10": {
                        "b": true,
                        "name": "ecape",
                        "level": 0,
                        "price": 15000,
                        "q": 39,
                        "rid": "uHvX"
                    },
                    "trade16": {
                        "price": 25450710,
                        "name": "eears",
                        "rid": "hXIA",
                        "level": 8
                    },
                    "trade14": {
                        "q": 8466,
                        "price": 26000,
                        "b": true,
                        "rid": "zZM7",
                        "name": "bfur"
                    },
                    "trade15": {
                        "price": 50723876,
                        "level": 8,
                        "grace": 0.8,
                        "rid": "d2IF",
                        "name": "bow"
                    }
                },
                "name": "Esgrobledard",
                "level": 70,
                "afk": "code",
                "server": "EU II",
                "stand": "cstand",
                "y": -100,
                "x": -65
            },
            {
                "map": "desertland",
                "cx": {
                    "hair": "hairdo110",
                    "head": "makeup117"
                },
                "skin": "marmor12b",
                "slots": {
                    "trade23": {
                        "name": "dexamulet",
                        "price": 200000000,
                        "grace": 0,
                        "rid": "TuQs",
                        "level": 4
                    },
                    "trade1": {
                        "q": 324,
                        "price": 4000000,
                        "name": "offeringp",
                        "rid": "Dyeh"
                    },
                    "trade22": {
                        "name": "intamulet",
                        "price": 99999999999,
                        "grace": 0,
                        "rid": "L9gS",
                        "level": 4
                    }
                },
                "name": "Biene",
                "level": 77,
                "afk": true,
                "server": "EU PVP",
                "stand": "stand0",
                "y": -1225,
                "x": -600
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
                    "trade9": {
                        "q": 32,
                        "price": 434000,
                        "name": "basketofeggs",
                        "rid": "cO51"
                    },
                    "trade1": {
                        "q": 27,
                        "price": 888000,
                        "name": "gem0",
                        "rid": "Nhlr"
                    },
                    "trade2": {
                        "q": 20,
                        "price": 988800,
                        "name": "gem1",
                        "rid": "IBHQ"
                    },
                    "trade3": {
                        "price": 1374640,
                        "name": "eears",
                        "rid": "oq7i",
                        "level": 6
                    },
                    "trade4": {
                        "price": 4020732,
                        "level": 3,
                        "grace": 0.4625,
                        "rid": "XRRd",
                        "name": "intring"
                    },
                    "trade7": {
                        "price": 635400,
                        "level": 5,
                        "name": "epyjamas",
                        "rid": "ZcqL",
                        "grace": 1
                    },
                    "trade13": {
                        "q": 233,
                        "price": 32960,
                        "name": "seashell",
                        "rid": "XVTs"
                    },
                    "trade10": {
                        "q": 1,
                        "price": 117200,
                        "name": "hotchocolate",
                        "rid": "n0hu"
                    },
                    "trade11": {
                        "price": 8548872,
                        "level": 3,
                        "name": "wbook0",
                        "rid": "TZku",
                        "grace": 0
                    },
                    "trade16": {
                        "price": 30560000,
                        "stat_type": "str",
                        "name": "xarmor",
                        "rid": "lWgu",
                        "level": 3
                    },
                    "trade15": {
                        "price": 3544640,
                        "grace": 1,
                        "name": "gloves1",
                        "rid": "kysu",
                        "level": 7
                    }
                },
                "name": "petercroft",
                "level": 51,
                "afk": true,
                "server": "EU II",
                "stand": "stand0",
                "y": -110.36075595811249,
                "x": -237.6149977145884
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
                        "level": 7,
                        "rid": "oW1U",
                        "name": "quiver"
                    },
                    "trade9": {
                        "price": 2000000,
                        "level": 7,
                        "rid": "wWAw",
                        "name": "wcap"
                    },
                    "trade1": {
                        "q": 2,
                        "price": 1000000,
                        "name": "lotusf",
                        "rid": "yTlm"
                    },
                    "trade2": {
                        "price": 5000000,
                        "level": 8,
                        "name": "staff",
                        "rid": "Qf8b",
                        "grace": 1
                    },
                    "trade3": {
                        "price": 10000000,
                        "level": 3,
                        "name": "vitring",
                        "rid": "VynF",
                        "grace": 0
                    },
                    "trade4": {
                        "price": 10000000,
                        "level": 3,
                        "name": "hpamulet",
                        "rid": "WgPx",
                        "grace": 0
                    },
                    "trade5": {
                        "price": 5000000,
                        "name": "firestaff",
                        "rid": "J7vV",
                        "level": 5
                    },
                    "trade6": {
                        "price": 20000000,
                        "level": 3,
                        "name": "ringsj",
                        "rid": "q1qz",
                        "grace": 0
                    },
                    "trade7": {
                        "price": 1000000,
                        "name": "firestaff",
                        "rid": "oN5E",
                        "level": 0
                    },
                    "trade12": {
                        "price": 10000000,
                        "level": 3,
                        "name": "vitring",
                        "rid": "lbk1",
                        "grace": 0.4
                    },
                    "trade13": {
                        "price": 3065280,
                        "grace": 1,
                        "name": "t2bow",
                        "rid": "rt6k",
                        "level": 7
                    },
                    "trade10": {
                        "price": 2000000,
                        "level": 7,
                        "rid": "hwi9",
                        "name": "wbreeches"
                    },
                    "trade11": {
                        "price": 10000000,
                        "level": 3,
                        "name": "vitring",
                        "rid": "mR10",
                        "grace": 0
                    },
                    "trade16": {
                        "price": 500000,
                        "level": 4,
                        "name": "sword",
                        "rid": "V9Ro",
                        "grace": 0.4
                    },
                    "trade14": {
                        "b": true,
                        "name": "wbook0",
                        "level": 0,
                        "price": 30000,
                        "q": 87,
                        "rid": "foek"
                    },
                    "trade15": {
                        "price": 500000,
                        "name": "sword",
                        "rid": "e88g",
                        "level": 4
                    }
                },
                "name": "Dinger",
                "level": 52,
                "afk": true,
                "server": "US III",
                "stand": "stand0",
                "y": -144.9999999,
                "x": 145.15436173453844
            },
            {
                "map": "main",
                "cx": {
                    "hair": "hairdo207",
                    "head": "mmakeup00"
                },
                "skin": "marmor8f",
                "slots": {
                    "trade8": {
                        "price": 57600,
                        "name": "sword",
                        "rid": "T9y5",
                        "level": 0
                    },
                    "trade9": {
                        "price": 57600,
                        "name": "sword",
                        "rid": "Gzni",
                        "level": 0
                    },
                    "trade1": {
                        "q": 32,
                        "price": 350000,
                        "name": "elixirfires",
                        "rid": "bXXA"
                    },
                    "trade2": {
                        "q": 1,
                        "price": 1144000,
                        "name": "goldnugget",
                        "rid": "lOMb"
                    },
                    "trade3": {
                        "price": 9020732,
                        "grace": 0,
                        "name": "strring",
                        "rid": "efue",
                        "level": 3
                    },
                    "trade4": {
                        "q": 5,
                        "price": 30000000,
                        "name": "networkcard",
                        "rid": "N7ua"
                    },
                    "trade5": {
                        "price": 9020732,
                        "grace": 0,
                        "name": "strring",
                        "rid": "FpHC",
                        "level": 3
                    },
                    "trade6": {
                        "price": 9020732,
                        "level": 3,
                        "rid": "PbOR",
                        "grace": 0,
                        "name": "strring"
                    },
                    "trade7": {
                        "price": 9020732,
                        "grace": 0,
                        "name": "strring",
                        "rid": "QDCS",
                        "level": 3
                    },
                    "trade12": {
                        "q": 99,
                        "price": 50000,
                        "b": true,
                        "rid": "yimi",
                        "name": "ink"
                    },
                    "trade10": {
                        "price": 200400,
                        "name": "dagger",
                        "rid": "GKI6",
                        "level": 0
                    },
                    "trade11": {
                        "q": 99,
                        "price": 100000,
                        "b": true,
                        "rid": "vGMR",
                        "name": "lotusf"
                    }
                },
                "name": "SweetPea",
                "level": 82,
                "afk": true,
                "server": "ASIA I",
                "stand": "stand0",
                "y": -50.0000001,
                "x": 166.43750125
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
                "name": "Sinstrite",
                "level": 28,
                "afk": true,
                "server": "US III",
                "stand": "stand0",
                "y": -110,
                "x": -86
            },
            {
                "map": "desertland",
                "cx": {
                    "hair": "hairdo201",
                    "hat": "hat401"
                },
                "skin": "marmor8b",
                "slots": {
                    "trade2": {
                        "price": 250000,
                        "name": "woodensword",
                        "rid": "V75p",
                        "level": 0
                    },
                    "trade3": {
                        "price": 250000,
                        "name": "woodensword",
                        "rid": "NHFE",
                        "level": 0
                    },
                    "trade4": {
                        "price": 250000,
                        "name": "woodensword",
                        "rid": "TeDU",
                        "level": 0
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
                "server": "US III",
                "stand": "stand0",
                "y": -1247,
                "x": -629
            },
            {
                "map": "main",
                "cx": {
                    "hair": "hairdo520",
                    "upper": "marmor4h",
                    "head": "fmakeup01",
                    "hat": "hat405"
                },
                "skin": "marmor12b",
                "slots": {
                    "trade8": {
                        "price": 100000000,
                        "grace": 1.15625,
                        "name": "stramulet",
                        "rid": "vmcF",
                        "level": 4
                    },
                    "trade9": {
                        "name": "dexring",
                        "price": 250000000,
                        "grace": 7.462500000000002,
                        "rid": "fkDk",
                        "level": 4
                    },
                    "trade1": {
                        "name": "ringsj",
                        "level": 3,
                        "price": 20000000,
                        "p": "shiny",
                        "rid": "MoMz",
                        "grace": 13.400000000000006
                    },
                    "trade2": {
                        "price": 200000000,
                        "grace": 1.13629150390625,
                        "name": "strring",
                        "rid": "eoiG",
                        "level": 4
                    },
                    "trade3": {
                        "price": 200000000,
                        "name": "t2intamulet",
                        "rid": "VT5t",
                        "level": 0
                    },
                    "trade4": {
                        "price": 200000000,
                        "name": "t2dexamulet",
                        "rid": "qS5O",
                        "level": 0
                    },
                    "trade5": {
                        "price": 200000000,
                        "name": "t2dexamulet",
                        "rid": "p6f5",
                        "level": 0
                    },
                    "trade10": {
                        "price": 10000000,
                        "grace": 0.4,
                        "name": "strring",
                        "rid": "fbZT",
                        "level": 3
                    }
                },
                "name": "SophiaxI",
                "level": 76,
                "afk": "code",
                "server": "ASIA I",
                "stand": "stand0",
                "y": -115,
                "x": -87
            },
            {
                "map": "main",
                "cx": {
                    "hair": "hairdo520",
                    "head": "fmakeup01"
                },
                "skin": "marmor12b",
                "slots": {
                    "trade8": {
                        "price": 16000,
                        "name": "hpbelt",
                        "rid": "INTU",
                        "level": 0
                    },
                    "trade9": {
                        "price": 16000,
                        "name": "hpbelt",
                        "rid": "AwBL",
                        "level": 0
                    },
                    "trade1": {
                        "price": 30720000,
                        "name": "mcape",
                        "rid": "K01C",
                        "level": 5
                    },
                    "trade2": {
                        "price": 4992000,
                        "name": "pants1",
                        "rid": "epNt",
                        "level": 5
                    },
                    "trade3": {
                        "price": 4992000,
                        "level": 5,
                        "grace": 2,
                        "rid": "qX3E",
                        "name": "pants1"
                    },
                    "trade4": {
                        "price": 1049600,
                        "name": "slimestaff",
                        "rid": "drQx",
                        "level": 5
                    },
                    "trade5": {
                        "name": "helmet",
                        "gift": 1,
                        "level": 5,
                        "price": 204800,
                        "rid": "kI4I",
                        "grace": 1.2000000000000002
                    },
                    "trade6": {
                        "price": 64000,
                        "level": 1,
                        "name": "hpamulet",
                        "rid": "Xc6w",
                        "grace": 0
                    },
                    "trade7": {
                        "price": 19200,
                        "name": "ringsj",
                        "rid": "Ct48",
                        "level": 0
                    },
                    "trade10": {
                        "q": 314,
                        "price": 96,
                        "name": "bwing",
                        "rid": "z4kT"
                    },
                    "trade11": {
                        "q": 2,
                        "price": 96,
                        "name": "spores",
                        "rid": "wMG4"
                    }
                },
                "name": "Zin001Me",
                "level": 53,
                "afk": true,
                "server": "EU II",
                "stand": "stand0",
                "y": -14,
                "x": 134
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
                    "trade3": {
                        "price": 51080,
                        "name": "cclaw",
                        "rid": "GCHS",
                        "level": 5
                    },
                    "trade4": {
                        "price": 51080,
                        "name": "cclaw",
                        "rid": "LAn6",
                        "level": 5
                    }
                },
                "name": "Fehdaykin",
                "level": 25,
                "afk": true,
                "server": "EU II",
                "stand": "stand0",
                "y": -100,
                "x": -100
            },
            {
                "map": "main",
                "cx": {},
                "skin": "marmor12a",
                "slots": {
                    "trade1": {
                        "q": 9,
                        "price": 200000000,
                        "name": "platinumnugget",
                        "rid": "SBSh"
                    },
                    "trade4": {
                        "q": 9998,
                        "price": 120000,
                        "name": "feather0",
                        "rid": "lTTo"
                    }
                },
                "name": "Wholesale",
                "level": 76,
                "afk": true,
                "server": "EU II",
                "stand": "stand0",
                "y": -139,
                "x": -153
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
                        "price": 10000000,
                        "name": "handofmidas",
                        "rid": "NBTh",
                        "level": 0
                    },
                    "trade9": {
                        "q": 9999,
                        "price": 265163000,
                        "b": true,
                        "rid": "hkH5",
                        "name": "mysterybox"
                    },
                    "trade1": {
                        "q": 738,
                        "price": 493000,
                        "name": "mbones",
                        "rid": "R6vC"
                    },
                    "trade2": {
                        "q": 9999,
                        "price": 66000,
                        "b": true,
                        "rid": "aawr",
                        "name": "basketofeggs"
                    },
                    "trade3": {
                        "q": 9999,
                        "price": 75000,
                        "b": true,
                        "rid": "FZOl",
                        "name": "feather0"
                    },
                    "trade4": {
                        "q": 9999,
                        "price": 711000,
                        "b": true,
                        "rid": "q2Pg",
                        "name": "candy0"
                    },
                    "trade5": {
                        "q": 9999,
                        "price": 301000,
                        "b": true,
                        "rid": "mN1S",
                        "name": "mistletoe"
                    },
                    "trade6": {
                        "price": 655000000,
                        "level": 5,
                        "name": "wbook0",
                        "rid": "LbG4",
                        "grace": 1.5875
                    },
                    "trade23": {
                        "name": "cring",
                        "price": 150000000,
                        "grace": 0.734375,
                        "rid": "dVNL",
                        "level": 3
                    },
                    "trade22": {
                        "price": 25000000,
                        "level": 2,
                        "grace": 0,
                        "rid": "rt3R",
                        "name": "cearring"
                    },
                    "trade21": {
                        "price": 150000000,
                        "level": 3,
                        "grace": 0.5,
                        "rid": "tIvg",
                        "name": "cearring"
                    },
                    "trade20": {
                        "price": 25000000,
                        "grace": 0.5,
                        "name": "cring",
                        "rid": "X5PM",
                        "level": 2
                    },
                    "trade27": {
                        "q": 422,
                        "price": 2600000,
                        "b": true,
                        "rid": "TWc6",
                        "name": "offeringp"
                    },
                    "trade26": {
                        "name": "cring",
                        "price": 1065000000,
                        "grace": 1.74423828125,
                        "rid": "JTzX",
                        "level": 4
                    },
                    "trade25": {
                        "price": 6666000000,
                        "level": 6,
                        "grace": 1.373687744140625,
                        "rid": "ON3u",
                        "name": "wbook0"
                    },
                    "trade24": {
                        "price": 395000000,
                        "name": "snring",
                        "rid": "TTvR",
                        "level": 0
                    },
                    "trade29": {
                        "price": 33000000,
                        "name": "hammer",
                        "rid": "U5lW",
                        "level": 0
                    },
                    "trade28": {
                        "price": 999000000,
                        "name": "vorb",
                        "rid": "k1AP",
                        "level": 0
                    },
                    "trade18": {
                        "q": 9999,
                        "price": 60000,
                        "b": true,
                        "rid": "V0CE",
                        "name": "candy1"
                    },
                    "trade19": {
                        "price": 95000000,
                        "grace": 0.4,
                        "name": "wbook0",
                        "rid": "dFnn",
                        "level": 4
                    },
                    "trade12": {
                        "q": 9999,
                        "price": 325000,
                        "b": true,
                        "rid": "EioX",
                        "name": "candycane"
                    },
                    "trade13": {
                        "q": 9999,
                        "price": 77000,
                        "b": true,
                        "rid": "ZAXs",
                        "name": "gem1"
                    },
                    "trade10": {
                        "q": 9999,
                        "price": 5000000,
                        "b": true,
                        "rid": "dQWb",
                        "name": "cryptkey"
                    },
                    "trade11": {
                        "q": 9999,
                        "price": 206000,
                        "b": true,
                        "rid": "SJFi",
                        "name": "armorbox"
                    },
                    "trade16": {
                        "q": 9999,
                        "price": 584000,
                        "b": true,
                        "rid": "f2rC",
                        "name": "gem0"
                    },
                    "trade17": {
                        "price": 1620000000,
                        "level": 8,
                        "grace": 1.4,
                        "rid": "MCu9",
                        "name": "handofmidas"
                    },
                    "trade14": {
                        "name": "helmet",
                        "level": 10,
                        "price": 805000000,
                        "rid": "IKqX",
                        "stat_type": "dex",
                        "grace": 0.2
                    },
                    "trade15": {
                        "q": 9999,
                        "price": 36000000,
                        "b": true,
                        "rid": "Xltd",
                        "name": "cosmo0"
                    }
                },
                "name": "kouin",
                "level": 82,
                "afk": false,
                "server": "US III",
                "stand": "stand0",
                "y": -37,
                "x": 0
            }
        ]
    }
    expect(merchantsData).not.toBe(undefined)
})