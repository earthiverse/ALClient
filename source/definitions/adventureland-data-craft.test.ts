import type { GData } from "./adventureland-data"

/**
 * The following is from http://adventure.land/data.js, version 5140 (2026-08-25)
 * It is used to confirm type correctness
 */

test("G.craft type validation", async () => {
    const G_craft: Pick<GData, "craft"> = {
        craft: {
            anchorbelt: {
                cost: 260000,
                items: [
                    [1, "hpbelt", 2],
                    [150, "reefglass"],
                    [1, "cshell"],
                ],
            },
            armorring: {
                cost: 0,
                items: [
                    [1, "snakefang"],
                    [1, "lotusf"],
                    [1, "vitring", 2],
                ],
                quest: "mcollector",
            },
            basketofeggs: {
                cost: 100,
                items: [
                    [1, "egg0"],
                    [1, "egg1"],
                    [1, "egg2"],
                    [1, "egg3"],
                    [1, "egg4"],
                    [1, "egg5"],
                    [1, "egg6"],
                    [1, "egg7"],
                    [1, "egg8"],
                ],
            },
            beastmantle: {
                cost: 1200000,
                items: [
                    [1, "cape", 7],
                    [2, "verdantcore"],
                    [240, "leather"],
                ],
            },
            bfangamulet: {
                cost: 4000000,
                items: [
                    [1, "bfang"],
                    [5000, "bwing"],
                ],
            },
            bogcrown: {
                cost: 220000,
                items: [
                    [1, "helmet", 7],
                    [1, "verdantcore"],
                    [12, "poison"],
                    [40, "ashleaf"],
                ],
            },
            bogwalkers: {
                cost: 260000,
                items: [
                    [1, "shoes1", 6],
                    [1, "verdantcore"],
                    [12, "poison"],
                    [8, "snakefang"],
                ],
            },
            bowofthedead: {
                cost: 120000,
                items: [
                    [1, "mbones"],
                    [1, "bow"],
                ],
            },
            brinefang: {
                cost: 180000,
                items: [
                    [1, "blade", 7],
                    [120, "reefglass"],
                    [1, "cshell"],
                ],
            },
            bronzeingot: { cost: 360000, items: [[16, "bronzenugget"]] },
            cake: { cost: 5, items: [[10, "whiteegg"]] },
            candycanesword: {
                cost: 480000,
                items: [
                    [1, "blade", 7],
                    [1, "candycane"],
                ],
            },
            carrotsword: {
                cost: 500,
                items: [
                    [1, "blade"],
                    [1, "carrot"],
                ],
            },
            cclaw: {
                cost: 24000,
                items: [
                    [1, "claw"],
                    [1, "crabclaw"],
                ],
            },
            charmer: {
                cost: 80000,
                items: [
                    [1, "goldnugget"],
                    [20, "gem1"],
                    [1, "emptyheart"],
                ],
            },
            cinderboots: {
                cost: 280000,
                items: [
                    [1, "shoes1", 6],
                    [1, "embercore"],
                    [8, "essenceoffire"],
                    [20, "ashleaf"],
                ],
            },
            cinderwand: {
                cost: 240000,
                items: [
                    [1, "wand", 7],
                    [1, "embercore"],
                    [6, "essenceoffire"],
                    [40, "ashleaf"],
                ],
            },
            cloverstud: {
                cost: 280000,
                items: [
                    [1, "vitearring", 2],
                    [1, "verdantcore"],
                    [40, "ashleaf"],
                    [40, "spores"],
                    [5, "gslime"],
                ],
            },
            cocoon: { cost: 2500, items: [[1000, "spidersilk"]] },
            computer: {
                cost: 120000000,
                items: [
                    [1, "networkcard"],
                    [8, "qubics"],
                    [1, "platinumnugget"],
                    [12, "goldnugget"],
                    [100, "electronics"],
                ],
            },
            ctristone: {
                cost: 20000,
                items: [
                    [1, "strring"],
                    [1, "intring"],
                    [1, "dexring"],
                    [10, "vitscroll"],
                ],
            },
            daggerofthedead: {
                cost: 24000,
                items: [
                    [1, "mbones"],
                    [1, "wand"],
                ],
            },
            dartgun: {
                cost: 32000000,
                items: [
                    [1, "blade", 9],
                    [12, "qubics"],
                    [4, "platinumnugget"],
                    [20, "goldnugget"],
                ],
            },
            elixirdex1: { cost: 1000, items: [[10, "elixirdex0"]] },
            elixirdex2: { cost: 2400, items: [[10, "elixirdex1"]] },
            elixirfires: {
                cost: 0,
                items: [
                    [1, "cshell"],
                    [2000, "hpot0"],
                ],
                quest: "witch",
            },
            elixirfzres: {
                cost: 0,
                items: [
                    [50, "bfur"],
                    [10, "mpot0"],
                ],
                quest: "witch",
            },
            elixirint1: { cost: 1000, items: [[10, "elixirint0"]] },
            elixirint2: { cost: 2400, items: [[10, "elixirint1"]] },
            elixirpnres: {
                cost: 0,
                items: [
                    [500, "bwing"],
                    [1, "hpot0"],
                ],
                quest: "witch",
            },
            elixirstr1: { cost: 1000, items: [[10, "elixirstr0"]] },
            elixirstr2: { cost: 2400, items: [[10, "elixirstr1"]] },
            elixirvit1: { cost: 1000, items: [[10, "elixirvit0"]] },
            elixirvit2: { cost: 2400, items: [[10, "elixirvit1"]] },
            emberhood: {
                cost: 400000,
                items: [
                    [1, "mmhat", 5],
                    [1, "embercore"],
                    [8, "essenceoffire"],
                    [20, "ashleaf"],
                ],
            },
            emberseal: {
                cost: 300000,
                items: [
                    [1, "strring", 2],
                    [1, "embercore"],
                    [6, "essenceoffire"],
                ],
            },
            fclaw: {
                cost: 20000,
                items: [
                    [1, "claw"],
                    [2, "essenceoffrost"],
                ],
            },
            fierygloves: {
                cost: 120000,
                items: [
                    [1, "gloves"],
                    [20, "feather0"],
                    [2, "essenceoffire"],
                ],
            },
            fireblade: {
                cost: 20000,
                items: [
                    [1, "blade"],
                    [1, "essenceoffire"],
                ],
            },
            firebow: {
                cost: 20000,
                items: [
                    [1, "bow"],
                    [1, "essenceoffire"],
                ],
            },
            firestaff: {
                cost: 20000,
                items: [
                    [1, "staff"],
                    [1, "essenceoffire"],
                ],
            },
            firestars: {
                cost: 180000,
                items: [
                    [1, "throwingstars"],
                    [1, "essenceoffire"],
                ],
            },
            frostbow: {
                cost: 40000,
                items: [
                    [1, "bow"],
                    [3, "essenceoffrost"],
                ],
            },
            froststaff: {
                cost: 20000,
                items: [
                    [1, "staff"],
                    [2, "essenceoffrost"],
                ],
            },
            fsword: {
                cost: 20000,
                items: [
                    [1, "blade"],
                    [2, "essenceoffrost"],
                ],
            },
            glacierseal: {
                cost: 300000,
                items: [
                    [1, "intring", 2],
                    [1, "frostcore"],
                    [6, "essenceoffrost"],
                ],
            },
            gloampendant: {
                cost: 420000,
                items: [
                    [1, "dexamulet", 2],
                    [12, "voidthread"],
                    [80, "bwing"],
                    [6, "essenceofether"],
                ],
            },
            goldingot: { cost: 3600000, items: [[12, "goldnugget"]] },
            gstaff: {
                cost: 180000,
                items: [
                    [1, "staff", 8],
                    [1, "essenceofgreed"],
                ],
            },
            harpybow: {
                cost: 1640000,
                items: [
                    [1, "t2bow"],
                    [100, "feather1"],
                ],
            },
            hbow: {
                cost: 0,
                items: [
                    [40, "dstones"],
                    [2, "pleather"],
                    [1, "feather0"],
                ],
                quest: "mcollector",
            },
            heartwood: {
                cost: 120000000,
                items: [
                    [1, "woodensword", 8],
                    [1, "nheart"],
                ],
            },
            knifebelt: {
                cost: 350000,
                items: [
                    [1, "dexbelt", 2],
                    [30, "spidersilk"],
                    [8, "voidthread"],
                    [20, "bwing"],
                    [12, "poison"],
                ],
            },
            lanternshield: {
                cost: 240000,
                items: [
                    [1, "shield", 6],
                    [1, "embercore"],
                    [1, "bronzeingot"],
                ],
            },
            lbelt: {
                cost: 0,
                items: [
                    [100, "bfur"],
                    [1, "hpbelt", 2],
                ],
                quest: "mcollector",
            },
            maceofthedead: {
                cost: 240000,
                items: [
                    [1, "mbones"],
                    [1, "wbasher"],
                ],
            },
            merry: {
                cost: 480000,
                items: [
                    [1, "bow"],
                    [1, "candycane"],
                    [1, "mistletoe"],
                ],
            },
            molehook: {
                cost: 90000,
                items: [
                    [1, "pickaxe", 5],
                    [40, "gemfragment"],
                    [2, "bronzenugget"],
                ],
            },
            moonshardearring: {
                cost: 240000,
                items: [
                    [1, "intearring", 2],
                    [8, "voidthread"],
                    [40, "bwing"],
                    [4, "essenceofether"],
                ],
            },
            mossheart: {
                cost: 800000,
                items: [
                    [1, "wbook0", 4],
                    [2, "verdantcore"],
                    [120, "ashleaf"],
                    [80, "essenceofnature"],
                ],
            },
            mushroomstaff: {
                cost: 24000,
                items: [
                    [1, "staff"],
                    [2, "smush"],
                ],
            },
            offeringx: {
                cost: 32000000,
                items: [
                    [10, "offering"],
                    [1200, "essenceofnature"],
                    [200, "essenceoflife"],
                    [1, "essenceofgreed"],
                ],
            },
            orba: {
                cost: 0,
                items: [
                    [1, "orboffire"],
                    [1, "orboffrost"],
                    [1, "orbofplague"],
                    [1, "orbofresolve"],
                ],
                quest: "mcollector",
            },
            orbg: {
                cost: 0,
                items: [
                    [1, "ascale"],
                    [1, "pleather"],
                    [1, "cscale"],
                    [1, "bfur"],
                ],
                quest: "mcollector",
            },
            ornamentstaff: {
                cost: 120000,
                items: [
                    [1, "staff"],
                    [1, "ornament"],
                    [20, "confetti"],
                ],
            },
            pickaxe: {
                cost: 100,
                items: [
                    [1, "staff"],
                    [1, "spidersilk"],
                    [1, "blade"],
                ],
            },
            platinumingot: { cost: 36000000, items: [[8, "platinumnugget"]] },
            pmaceofthedead: {
                cost: 24000,
                items: [
                    [1, "mbones"],
                    [1, "pmace"],
                ],
            },
            pollenbow: {
                cost: 90000,
                items: [
                    [1, "bow", 7],
                    [60, "beewings"],
                    [60, "ashleaf"],
                    [10, "essenceofnature"],
                ],
            },
            pouchbow: {
                cost: 180000,
                items: [
                    [1, "bow"],
                    [1, "smoke"],
                ],
            },
            quiver: {
                cost: 0,
                items: [
                    [1, "ascale"],
                    [200, "beewings"],
                ],
                quest: "mcollector",
            },
            ratkingbuckler: {
                cost: 40000,
                items: [
                    [1, "wshield", 4],
                    [30, "rattail"],
                    [20, "ashleaf"],
                    [1, "bronzenugget"],
                ],
            },
            ratworkcoat: {
                cost: 75000,
                items: [
                    [1, "coat", 5],
                    [30, "rattail"],
                    [40, "ashleaf"],
                ],
            },
            reedpants: {
                cost: 100000,
                items: [
                    [1, "pants", 6],
                    [20, "frogt"],
                    [4, "lotusf"],
                    [40, "ashleaf"],
                ],
            },
            reefvest: {
                cost: 400000,
                items: [
                    [1, "coat1", 7],
                    [200, "reefglass"],
                    [2, "cshell"],
                ],
            },
            resistancering: {
                cost: 0,
                items: [
                    [1, "ink"],
                    [5, "ascale"],
                    [1, "vitring", 2],
                ],
                quest: "mcollector",
            },
            rimeboots: {
                cost: 280000,
                items: [
                    [1, "shoes1", 6],
                    [1, "frostcore"],
                    [8, "essenceoffrost"],
                    [12, "bfur"],
                ],
            },
            rimeknuckles: {
                cost: 180000,
                items: [
                    [1, "claw", 7],
                    [1, "frostcore"],
                    [12, "bfur"],
                    [4, "essenceoffrost"],
                ],
            },
            rod: {
                cost: 100,
                items: [
                    [1, "staff"],
                    [1, "spidersilk"],
                ],
            },
            saffronloop: {
                cost: 350000,
                items: [
                    [1, "vitearring", 2],
                    [1, "goldnugget"],
                    [100, "gemfragment"],
                ],
            },
            scribeorb: {
                cost: 280000,
                items: [
                    [1, "wbook0", 3],
                    [12, "voidthread"],
                    [50, "bwing"],
                    [4, "essenceofether"],
                ],
            },
            silkgrips: {
                cost: 120000,
                items: [
                    [1, "gloves", 5],
                    [30, "spidersilk"],
                    [8, "voidthread"],
                    [20, "bwing"],
                ],
            },
            slimestaff: {
                cost: 24000,
                items: [
                    [1, "staff"],
                    [10, "gslime"],
                ],
            },
            snakeoil: {
                cost: 0,
                items: [
                    [40, "dstones"],
                    [9000, "rattail"],
                ],
                quest: "witch",
            },
            snowflakes: {
                cost: 20000,
                items: [
                    [1, "throwingstars"],
                    [1, "essenceoffrost"],
                ],
            },
            spearofthedead: {
                cost: 24000,
                items: [
                    [2, "mbones"],
                    [1, "spear"],
                ],
            },
            staffofthedead: {
                cost: 120000,
                items: [
                    [1, "mbones"],
                    [1, "staff"],
                ],
            },
            starcloak: {
                cost: 1800000,
                items: [
                    [1, "cape", 7],
                    [40, "voidthread"],
                    [40, "essenceofether"],
                    [1, "platinumnugget"],
                ],
            },
            stealthcape: {
                cost: 2000000,
                items: [
                    [1, "bcape", 7],
                    [5, "shadowstone"],
                    [200, "essenceofnature"],
                    [1000, "cscale"],
                ],
            },
            stinger: { cost: 0, items: [[12, "feather0"]], quest: "mcollector" },
            stormquiver: {
                cost: 500000,
                items: [
                    [1, "alloyquiver", 5],
                    [80, "stormfeather"],
                    [8, "essenceofether"],
                ],
            },
            supercomputer: {
                cost: 4800000000,
                items: [
                    [1, "computer"],
                    [1, "tracker"],
                    [3, "qubics"],
                    [2000, "electronics"],
                ],
            },
            swordofthedead: {
                cost: 24000,
                items: [
                    [1, "mbones"],
                    [1, "sword"],
                ],
            },
            thistlequiver: {
                cost: 140000,
                items: [
                    [1, "quiver", 5],
                    [10, "pleather"],
                    [40, "ashleaf"],
                    [5, "essenceofnature"],
                ],
            },
            threadneedle: {
                cost: 120000,
                items: [
                    [1, "blade", 5],
                    [20, "spidersilk"],
                    [20, "ashleaf"],
                ],
            },
            thundergrips: {
                cost: 800000,
                items: [
                    [1, "mrngloves", 6],
                    [80, "stormfeather"],
                    [12, "essenceofether"],
                ],
            },
            turtleshard: {
                cost: 100000,
                items: [
                    [1, "wshield", 6],
                    [80, "reefglass"],
                    [1, "cshell"],
                ],
            },
            venomband: {
                cost: 240000,
                items: [
                    [1, "dexring", 2],
                    [1, "verdantcore"],
                    [12, "poison"],
                    [4, "snakefang"],
                ],
            },
            wattire: {
                cost: 0,
                items: [
                    [100, "gslime"],
                    [200, "crabclaw"],
                ],
                quest: "mcollector",
            },
            wblade: {
                cost: 24000000,
                items: [
                    [1, "stick", 9],
                    [1, "blade", 9],
                    [800, "essenceoffrost"],
                ],
            },
            wbreeches: {
                cost: 0,
                items: [
                    [10, "crabclaw"],
                    [100, "spores"],
                ],
                quest: "mcollector",
            },
            wcap: {
                cost: 0,
                items: [
                    [50, "beewings"],
                    [3, "gslime"],
                ],
                quest: "mcollector",
            },
            weaver: {
                cost: 75000,
                items: [
                    [1, "bow"],
                    [30, "cocoon"],
                ],
            },
            wgloves: {
                cost: 0,
                items: [
                    [60, "beewings"],
                    [20, "spores"],
                ],
                quest: "mcollector",
            },
            windbelt: {
                cost: 300000,
                items: [
                    [1, "dexbelt", 2],
                    [40, "stormfeather"],
                    [4, "essenceofether"],
                ],
            },
            wingedboots: {
                cost: 120000,
                items: [
                    [1, "shoes"],
                    [20, "feather0"],
                ],
            },
            worldrootcrook: {
                cost: 250000000,
                items: [
                    [1, "harbringer", 8],
                    [1, "sapstone"],
                    [1, "platinumingot"],
                    [3, "goldingot"],
                    [4, "ijx"],
                    [12, "ectoplasm"],
                    [1, "bcandle"],
                ],
            },
            wshoes: {
                cost: 0,
                items: [
                    [5, "frogt"],
                    [500, "beewings"],
                    [100, "crabclaw"],
                ],
                quest: "mcollector",
            },
            xbox: {
                cost: 1200,
                items: [
                    [1, "x0"],
                    [1, "x1"],
                    [1, "x2"],
                    [1, "x3"],
                    [1, "x4"],
                    [1, "x5"],
                    [1, "x6"],
                    [1, "x7"],
                    [1, "x8"],
                ],
            },
        },
    }
    expect(G_craft).toBeDefined()
})
