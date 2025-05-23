import type { GData } from "./adventureland-data"

/**
 * The following is from http://adventure.land/data.js, version 694 (2021-10-15)
 * It is used to confirm type correctness
 */

test("G.cosmetics type validation", async () => {
    const G_cosmetics: Pick<GData, "cosmetics"> = {
        cosmetics: {
            default_beard_position: 0,
            map: {
                old: "new",
            },
            head: {
                makeup122: ["sskin1d", "mskin1d", "lskin1d"],
                makeup132: ["sskin1b", "mskin1b", "lskin1b", 1],
                makeup125: ["sskin1b", "mskin1b", "lskin1b"],
                makeup124: ["sskin1b", "mskin1b", "lskin1b"],
                makeup133: ["sskin1e", "mskin1e", "lskin1d"],
                mmakeup09: ["sskin1d", "mskin1d", "lskin1d"],
                makeup127: ["sskin1e", "mskin1e", "lskin1d"],
                makeup126: ["sskin1e", "mskin1e", "lskin1d"],
                makeup123: ["sskin1e", "mskin1e", "lskin1d"],
                makeup110: ["sskin1e", "mskin1e", "lskin1d", 1],
                makeup111: ["sskin1e", "mskin1e", "lskin1d"],
                makeup112: ["sskin1f", "mskin1f", "lskin1a", 1],
                makeup113: ["sskin1f", "mskin1f", "lskin1a"],
                makeup114: ["sskin1c", "mskin1c", "lskin1c"],
                makeup115: ["sskin1c", "mskin1c", "lskin1c"],
                makeup116: ["sskin1a", "mskin1a", "lskin1a", 1],
                makeup117: ["sskin1a", "mskin1a", "lskin1a"],
                makeup118: ["sskin1e", "mskin1e", "lskin1d"],
                makeup119: ["sskin1e", "mskin1e", "lskin1d", 1],
                makeup130: ["sskin1g", "mskin1g", "lskin1a"],
                makeup131: ["sskin1g", "mskin1g", "lskin1a"],
                makeup136: ["sskin1e", "mskin1e", "lskin1d"],
                makeup137: ["sskin1b", "mskin1b", "lskin1b"],
                makeup134: ["sskin1e", "mskin1e", "lskin1d", 1],
                makeup135: ["sskin1b", "mskin1b", "lskin1b"],
                fmakeup11: ["sskin1b", "mskin1b", "lskin1b", 1],
                fmakeup10: ["sskin1b", "mskin1b", "lskin1b", 1],
                fmakeup12: ["sskin1e", "mskin1e", "lskin1d", 1],
                mmakeup12: ["sskin1b", "mskin1b", "lskin1b"],
                mmakeup13: ["sskin1d", "mskin1d", "lskin1d"],
                blackhead: ["sskin1d", "mskin1d", "lskin1d"],
                mmakeup11: ["sskin1d", "mskin1d", "lskin1d"],
                smakeup00: ["sskin1a", "mskin1a", "lskin1a", -1],
                makeup128: ["sskin1c", "mskin1c", "lskin1c"],
                mmakeup08: ["sskin1b", "mskin1b", "lskin1b"],
                makeup138: ["sskin1b", "mskin1b", "lskin1b"],
                mmakeup07: ["sskin1h", "mskin1h", "lskin1d", 1],
                makeup139: ["sskin1d", "mskin1d", "lskin1d"],
                bwhead: ["sskin1e", "mbw", "lskin1d"],
                makeup140: ["sskin1d", "mskin1d", "lskin1d"],
                mmakeup06: ["sskin1b", "mskin1b", "lskin1b"],
                mmakeup10: ["sskin1f", "mskin1f", "lskin1a", 1],
                makeup129: ["sskin1c", "mskin1c", "lskin1c", 1],
                makeup121: ["sskin1h", "mskin1h", "lskin1d"],
                makeup109: ["sskin1b", "mskin1b", "lskin1b"],
                makeup108: ["sskin1b", "mskin1b", "lskin1b", 1],
                makeup107: ["sskin1d", "mskin1d", "lskin1d"],
                makeup106: ["sskin1d", "mskin1d", "lskin1d", 1],
                makeup105: ["sskin1b", "mskin1b", "lskin1b"],
                makeup104: ["sskin1b", "mskin1b", "lskin1b", 1],
                makeup103: ["sskin1c", "mskin1c", "lskin1c", 1],
                makeup102: ["sskin1c", "mskin1c", "lskin1c"],
                makeup101: ["sskin1e", "mskin1e", "lskin1d", 1],
                makeup100: ["sskin1e", "mskin1e", "lskin1d"],
                fmakeup06: ["sskin1g", "mskin1g", "lskin1a"],
                fmakeup07: ["sskin1e", "mskin1e", "lskin1d", 1],
                fmakeup05: ["sskin1c", "mskin1c", "lskin1c"],
                fmakeup02: ["sskin1b", "mskin1b", "lskin1b"],
                fmakeup03: ["sskin1b", "mskin1b", "lskin1b"],
                makeup120: ["sskin1h", "mskin1h", "lskin1d", 1],
                mmakeup01: ["sskin1b", "mskin1b", "lskin1b"],
                mmakeup02: ["sskin1b", "mskin1b", "lskin1b"],
                mmakeup05: ["sskin1c", "mskin1c", "lskin1c"],
                mmakeup04: ["sskin1c", "mskin1c", "lskin1c"],
                fmakeup08: ["sskin1e", "mskin1e", "lskin1d", 1],
                fmakeup09: ["sskin1e", "mskin1e", "lskin1d", 1],
            },
            default_face_position: 8,
            default_hair_place: 7,
            bundle: {
                blackw: ["mbody6b", "mbody6c", "blackhead"],
                pinkb: ["mbody2g", "mbody2h"],
                rogueb: ["sbody1c", "sarmor1h"],
            },
            default_hat_place: 7,
            default_head_place: 7,
            hair: {
                hairdo419: [0, 3],
                hairdo418: [0, 0],
                hairdo417: [0, 0],
                hairdo416: [0, 0],
                hairdo415: [0, 0],
                hairdo414: [0, 0],
                hairdo413: [0, 3],
                hairdo412: [0, 2],
                hairdo411: [0, 0],
                hairdo410: [0, 0],
                bwhair: [-2, 1],
                hairdo400: [0, 1],
                hairdo401: [0, 1],
                hairdo402: [0, 4],
                hairdo403: [0, 0],
                hairdo404: [0, 0],
                hairdo405: [0, 3],
                hairdo406: [0, 0],
                hairdo407: [0, 0],
                hairdo408: [0, 0],
                hairdo409: [0, 0],
                hairdo109: [0, 1],
                hairdo108: [0, 1],
                hairdo105: [0, 0],
                hairdo104: [0, 1],
                hairdo107: [0, 1],
                hairdo106: [0, 1],
                hairdo101: [0, 1],
                hairdo100: [0, 0],
                hairdo103: [0, 0],
                hairdo102: [0, 2],
                hairdo215: [0, 0],
                hairdo214: [0, 0],
                hairdo217: [0, 0],
                hairdo216: [0, 1],
                hairdo211: [0, 1],
                hairdo210: [0, 0],
                hairdo213: [0, 2],
                hairdo212: [0, 0],
                hairdo219: [0, 0],
                hairdo218: [0, 0],
                hairdo509: [0, 2],
                hairdo508: [0, 2],
                hairdo501: [0, 1],
                hairdo500: [0, 0],
                hairdo503: [0, 3],
                hairdo502: [0, 2],
                hairdo505: [0, 0],
                hairdo504: [0, 0],
                hairdo507: [0, 1],
                hairdo506: [0, 0],
                hairdo118: [0, 2],
                hairdo119: [0, 1],
                hairdo116: [0, 1],
                hairdo117: [0, 2],
                hairdo114: [0, 0],
                hairdo115: [0, 3],
                hairdo112: [0, 0],
                hairdo113: [0, 0],
                hairdo110: [0, 1],
                hairdo111: [0, 0],
                hairdo206: [0, 0],
                hairdo207: [0, 0],
                hairdo204: [0, 1],
                hairdo205: [0, 2],
                hairdo202: [0, 2],
                hairdo203: [0, 1],
                hairdo200: [0, 1],
                hairdo201: [0, 1],
                hairdo321: [0, 1],
                hairdo320: [0, 0],
                hairdo323: [0, 0],
                hairdo322: [0, 0],
                hairdo324: [0, 0],
                hairdo208: [0, 0],
                hairdo209: [0, 1],
                hairdo518: [0, 1],
                hairdo519: [0, 0],
                hairdo512: [0, 1],
                hairdo513: [0, 1],
                hairdo510: [0, 2],
                hairdo511: [0, 3],
                hairdo516: [0, 1],
                hairdo517: [0, 2],
                hairdo514: [0, 0],
                hairdo515: [0, 0],
                hairdo123: [0, 0],
                hairdo122: [0, 2],
                hairdo121: [0, 2],
                hairdo120: [0, 1],
                hairdo124: [0, 0],
                hairdo523: [0, 1],
                hairdo522: [0, 1],
                hairdo521: [0, 1],
                hairdo520: [0, 0],
                hairdo224: [0, 3],
                hairdo220: [0, 0],
                hairdo221: [0, 0],
                hairdo222: [0, 0],
                hairdo223: [0, 0],
                hairdo309: [0, 1],
                hairdo308: [0, 0],
                hairdo307: [0, 1],
                hairdo306: [0, 0],
                hairdo305: [0, 0],
                hairdo304: [0, 1],
                hairdo303: [0, 1],
                hairdo302: [0, 0],
                hairdo301: [0, 1],
                hairdo300: [0, 0],
                hairdo310: [0, 0],
                hairdo311: [0, 0],
                hairdo312: [0, 0],
                hairdo313: [0, 0],
                hairdo314: [0, 0],
                hairdo315: [0, 0],
                hairdo316: [0, 2],
                hairdo317: [0, 0],
                hairdo318: [0, 0],
                hairdo319: [0, 0],
                hairdo422: [0, 0],
                hairdo423: [0, 0],
                hairdo420: [0, 2],
                hairdo421: [0, 0],
                hairdo424: [0, 0],
            },
            no_upper: [],
            default_makeup_position: 0,
            gravestone: {
                gravestone: 19,
                gravestonea: 19,
                xgravestone2: 21,
                xgravestone3: 21,
                xgravestone0: 21,
                xgravestone1: 21,
                xgravestone4: 21,
            },
            prop: {
                mbody2g: ["covers", "no_hair"],
                marmor12d: ["covers", "no_hair"],
                marmor12b: ["slender"],
                marmor12c: ["covers", "no_hair"],
                lchar1d: ["bulky"],
                lchar1e: ["female"],
                lchar1f: ["no_upper"],
                lchar1g: ["no_upper"],
                lchar1b: ["hair"],
                lchar1h: ["bulky", "hair"],
                bathat: ["manim", "fast"],
                mbody6c: ["covers"],
                mbody5e: ["covers", "no_hair"],
                mbody6b: ["covers", "no_hair"],
                mbody5f: ["covers", "no_hair"],
            },
            hat: {
                hat100: 0,
            },
        },
    }
    expect(G_cosmetics).toBeDefined()
})
