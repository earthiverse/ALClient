import { GData2 } from "./adventureland-data"

/** 
 * The following is from http://adventure.land/data.js, version 657 (2021-04-09)
 * It is used to confirm type correctness
 */

test("G.positions type validation", async () => {
    const G_positions: Pick<GData2, "positions"> = {
        "positions": {
            "harbringer": [
                "",
                7,
                10
            ],
            "shade_tome": [
                "pack_1a",
                2,
                114
            ],
            "code": [
                "skills",
                0,
                10
            ],
            "dexamulet": [
                "",
                10,
                19
            ],
            "gold": [
                "",
                15,
                26
            ],
            "tshirt1": [
                "",
                3,
                38
            ],
            "run_snippet3": [
                "skills",
                9,
                10
            ],
            "run_snippet2": [
                "skills",
                7,
                10
            ],
            "run_snippet1": [
                "skills",
                5,
                10
            ],
            "run_snippet0": [
                "skills",
                3,
                10
            ],
            "rod": [
                "custom",
                4,
                3
            ],
            "snowboots": [
                "",
                14,
                5
            ],
            "firestaff_r": [
                "",
                3,
                58
            ],
            "run_snippet4": [
                "skills",
                11,
                10
            ],
            "wshoes": [
                "",
                0,
                46
            ],
            "poison": [
                "",
                8,
                21
            ],
            "jacko": [
                "",
                12,
                38
            ],
            "rfur": [
                "",
                14,
                51
            ],
            "gm": [
                "skills",
                4,
                6
            ],
            "sanguine": [
                "",
                4,
                20
            ],
            "pumpkinspice": [
                "",
                9,
                21
            ],
            "hboots": [
                "",
                4,
                5
            ],
            "sshield": [
                "",
                1,
                12
            ],
            "emptyheart": [
                "",
                13,
                39
            ],
            "mrboots": [
                "",
                7,
                46
            ],
            "ring220": [
                "",
                1,
                10
            ],
            "fireblade_r": [
                "",
                1,
                58
            ],
            "resistancering": [
                "",
                13,
                16
            ],
            "cupid": [
                "",
                14,
                29
            ],
            "candycane": [
                "",
                4,
                29
            ],
            "armorbox": [
                "",
                1,
                26
            ],
            "snowflakes_r": [
                "",
                10,
                37
            ],
            "rattail": [
                "",
                11,
                50
            ],
            "evasionscroll": [
                "",
                10,
                23
            ],
            "warmscarf": [
                "",
                0,
                20
            ],
            "candy1": [
                "",
                12,
                29
            ],
            "candy0": [
                "",
                13,
                29
            ],
            "goldbooster": [
                "",
                4,
                27
            ],
            "snring": [
                "",
                1,
                20
            ],
            "armorring": [
                "",
                12,
                16
            ],
            "pmace": [
                "",
                4,
                10
            ],
            "rednose": [
                "",
                10,
                0
            ],
            "lever0": [
                [
                    "puzzle",
                    96,
                    72,
                    16,
                    24
                ],
                [
                    "puzzle",
                    112,
                    72,
                    16,
                    24
                ],
                [
                    "puzzle",
                    128,
                    72,
                    16,
                    24
                ]
            ],
            "shade_cscroll": [
                "",
                1,
                24
            ],
            "essenceofdarkness": [
                "",
                11,
                34
            ],
            "wingedboots": [
                "",
                10,
                5
            ],
            "tshirt7": [
                "",
                9,
                38
            ],
            "ghatp": [
                "custom",
                4,
                0
            ],
            "orangeorb": [
                "pack_1a",
                11,
                28
            ],
            "easterluck": [
                "custom",
                2,
                0
            ],
            "outputscroll": [
                "",
                7,
                41
            ],
            "snakeoil": [
                "",
                15,
                28
            ],
            "skill_4fingers": [
                "skills",
                5,
                2
            ],
            "dexbelt": [
                "",
                13,
                3
            ],
            "hpbelt": [
                "",
                10,
                3
            ],
            "mrpants": [
                "",
                7,
                45
            ],
            "shade_elixir": [
                "pack_1a",
                12,
                40
            ],
            "shade_amulet": [
                "",
                12,
                31
            ],
            "t2stramulet": [
                "",
                11,
                19
            ],
            "orbofdex": [
                "",
                1,
                48
            ],
            "tshirt88": [
                "",
                7,
                38
            ],
            "skill_mcourage": [
                "skills",
                0,
                5
            ],
            "skill_supershot": [
                "skills",
                0,
                2
            ],
            "dkey": [
                "",
                4,
                59
            ],
            "cape0": [
                "",
                0,
                6
            ],
            "cape1": [
                "",
                6,
                6
            ],
            "snowflakes": [
                "",
                6,
                37
            ],
            "skill_cleave": [
                "skills",
                2,
                1
            ],
            "leather": [
                "",
                6,
                25
            ],
            "run_code": [
                "skills",
                1,
                10
            ],
            "nheart": [
                "",
                10,
                40
            ],
            "hdagger": [
                "",
                7,
                7
            ],
            "flute": [
                "",
                14,
                26
            ],
            "mittens": [
                "",
                8,
                29
            ],
            "pball": [
                "custom",
                1,
                1
            ],
            "vsword": [
                "custom",
                2,
                5
            ],
            "gloves": [
                "",
                2,
                2
            ],
            "mcgloves": [
                "",
                8,
                44
            ],
            "goldbooster_a": [
                "",
                5,
                27
            ],
            "5bucks": [
                "",
                8,
                36
            ],
            "intring": [
                "",
                15,
                15
            ],
            "carrotsword": [
                "",
                11,
                30
            ],
            "orb20": [
                "",
                4,
                6
            ],
            "mcpants": [
                "",
                8,
                45
            ],
            "scroll4": [
                "",
                4,
                24
            ],
            "helmet1": [
                "",
                3,
                0
            ],
            "scroll2": [
                "",
                14,
                23
            ],
            "scroll3": [
                "",
                3,
                24
            ],
            "scroll0": [
                "",
                13,
                23
            ],
            "scroll1": [
                "",
                12,
                23
            ],
            "shade_mainhand": [
                "",
                5,
                31
            ],
            "greenbomb": [
                "",
                11,
                32
            ],
            "lbelt": [
                "",
                2,
                3
            ],
            "daggerofthedead": [
                "",
                15,
                7
            ],
            "stonekey": [
                "",
                9,
                35
            ],
            "cyber": [
                "custom",
                3,
                3
            ],
            "up": [
                "skills",
                11,
                6
            ],
            "shade20_orb": [
                "",
                2,
                25
            ],
            "egg1": [
                "",
                1,
                30
            ],
            "critscroll": [
                "",
                3,
                41
            ],
            "pants1": [
                "",
                3,
                4
            ],
            "hammer": [
                "",
                12,
                10
            ],
            "basketofeggs": [
                "",
                10,
                30
            ],
            "blue": [
                "",
                13,
                36
            ],
            "elixirluck": [
                "",
                15,
                31
            ],
            "use_hp": [
                "skills",
                2,
                7
            ],
            "vdagger": [
                "custom",
                1,
                5
            ],
            "stats": [
                "skills",
                4,
                6
            ],
            "fclaw": [
                "",
                3,
                11
            ],
            "oxhelmet": [
                "",
                7,
                0
            ],
            "whiskey": [
                "",
                15,
                36
            ],
            "skill_warcry": [
                "skills",
                6,
                1
            ],
            "ornament": [
                "",
                2,
                29
            ],
            "dexring": [
                "",
                14,
                15
            ],
            "placeholder_m": [
                "",
                15,
                24
            ],
            "t2dexamulet": [
                "",
                13,
                19
            ],
            "cscroll3": [
                "",
                2,
                24
            ],
            "goldscroll": [
                "",
                10,
                41
            ],
            "mbones": [
                "",
                1,
                59
            ],
            "mwpants": [
                "",
                3,
                45
            ],
            "staff": [
                "",
                2,
                10
            ],
            "strbelt": [
                "",
                11,
                3
            ],
            "pants": [
                "",
                2,
                4
            ],
            "textures": [
                "stone",
                "stand0_texture",
                "standx_texture",
                "standg_texture",
                "cstand_texture"
            ],
            "skill_mshield": [
                "skills",
                0,
                11
            ],
            "lifestealscroll": [
                "",
                1,
                41
            ],
            "espresso": [
                "",
                11,
                36
            ],
            "essenceofnature": [
                "",
                8,
                34
            ],
            "blaster": [
                "",
                0,
                10
            ],
            "throwingstars": [
                "",
                4,
                9
            ],
            "qubics": [
                "",
                0,
                36
            ],
            "skill_corrosion": [
                "skills",
                4,
                4
            ],
            "ale": [
                "",
                10,
                36
            ],
            "scythe": [
                "",
                12,
                7
            ],
            "forscroll": [
                "",
                8,
                41
            ],
            "crossbow": [
                "",
                6,
                9
            ],
            "merry": [
                "",
                14,
                9
            ],
            "xptome": [
                "",
                14,
                27
            ],
            "bronzenugget": [
                "",
                5,
                35
            ],
            "feather0": [
                "",
                1,
                33
            ],
            "placeholder": [
                "custom",
                3,
                1
            ],
            "hgloves": [
                "",
                4,
                2
            ],
            "skill_selfheal": [
                "skills",
                1,
                11
            ],
            "warpvest": [
                "",
                10,
                1
            ],
            "eggnog": [
                "",
                0,
                29
            ],
            "mbelt": [
                "",
                4,
                3
            ],
            "stand0": [
                "",
                14,
                24
            ],
            "shade_belt": [
                "",
                4,
                3
            ],
            "vblood": [
                "",
                0,
                22
            ],
            "coat20": [
                "",
                2,
                4
            ],
            "lichteaser": [
                "licht",
                47,
                0,
                47,
                50
            ],
            "dexearring": [
                "",
                8,
                17
            ],
            "xshield": [
                "",
                6,
                12
            ],
            "pickaxe": [
                "custom",
                4,
                4
            ],
            "skill_charge": [
                "skills",
                5,
                1
            ],
            "bow": [
                "",
                0,
                9
            ],
            "essenceoffire": [
                "",
                9,
                34
            ],
            "amulet20": [
                "",
                4,
                8
            ],
            "heartwood": [
                "",
                12,
                8
            ],
            "pico": [
                "",
                12,
                36
            ],
            "wine": [
                "",
                14,
                36
            ],
            "shade_scroll": [
                "",
                14,
                23
            ],
            "skill_shadowstrike": [
                "skills",
                8,
                3
            ],
            "xpbooster_a": [
                "",
                3,
                27
            ],
            "intscroll": [
                "",
                8,
                23
            ],
            "emptyjar": [
                "",
                14,
                35
            ],
            "frankypants": [
                "",
                11,
                4
            ],
            "skill_alchemy": [
                "skills",
                9,
                0
            ],
            "hpants": [
                "",
                4,
                4
            ],
            "licence": [
                "",
                2,
                23
            ],
            "spear": [
                "",
                3,
                7
            ],
            "stoneofxp_a": [
                "pack_1a",
                12,
                114
            ],
            "mrgloves": [
                "",
                7,
                44
            ],
            "swirlipop": [
                "",
                15,
                32
            ],
            "mphat": [
                "",
                5,
                42
            ],
            "tshirt9": [
                "",
                11,
                38
            ],
            "skill_stomp": [
                "skills",
                3,
                1
            ],
            "glitch": [
                "",
                9,
                24
            ],
            "tshirt8": [
                "",
                10,
                38
            ],
            "skill_light": [
                "skills",
                0,
                0
            ],
            "bataxe": [
                "",
                2,
                8
            ],
            "bunnyears": [
                "",
                12,
                30
            ],
            "xmace": [
                "",
                12,
                11
            ],
            "northstar": [
                "",
                5,
                20
            ],
            "belt": [
                "",
                2,
                3
            ],
            "skill_entangle": [
                "skills",
                8,
                0
            ],
            "frozenkey": [
                "custom",
                2,
                3
            ],
            "fsword_r": [
                "",
                5,
                58
            ],
            "fallen": [
                "",
                0,
                4
            ],
            "skill_poisonarrow": [
                "skills",
                3,
                2
            ],
            "seashell": [
                "",
                5,
                25
            ],
            "funtoken": [
                "",
                9,
                32
            ],
            "swordofthedead": [
                "",
                15,
                8
            ],
            "skill_quickstab": [
                "skills",
                3,
                3
            ],
            "stoneofluck": [
                "pack_1a",
                10,
                114
            ],
            "trigger": [
                "",
                15,
                16
            ],
            "mrnarmor": [
                "",
                6,
                43
            ],
            "mmshoes": [
                "",
                4,
                46
            ],
            "shield20": [
                "",
                3,
                11
            ],
            "hhelmet": [
                "",
                4,
                0
            ],
            "mwarmor": [
                "",
                3,
                43
            ],
            "wgloves": [
                "",
                0,
                44
            ],
            "skill_massproductionpp": [
                "skills",
                3,
                5
            ],
            "pants20": [
                "",
                3,
                5
            ],
            "tshirt0": [
                "",
                2,
                38
            ],
            "skill_fishing": [
                "custom",
                4,
                3
            ],
            "egg7": [
                "",
                7,
                30
            ],
            "mcboots": [
                "",
                8,
                46
            ],
            "xpbooster": [
                "",
                2,
                27
            ],
            "mpxgloves": [
                "",
                6,
                2
            ],
            "intbelt": [
                "",
                12,
                3
            ],
            "holidayspirit": [
                "skills",
                2,
                9
            ],
            "btusk": [
                "",
                4,
                52
            ],
            "tshirt6": [
                "",
                8,
                38
            ],
            "partyhat": [
                "",
                11,
                0
            ],
            "stick": [
                "",
                4,
                26
            ],
            "skill_pheal": [
                "skills",
                1,
                4
            ],
            "frogt": [
                "",
                8,
                50
            ],
            "elixirpnres": [
                "",
                4,
                62
            ],
            "shade_earring": [
                "",
                5,
                17
            ],
            "sstinger": [
                "",
                9,
                51
            ],
            "mearring": [
                "",
                9,
                17
            ],
            "dstones": [
                "",
                6,
                51
            ],
            "mshield": [
                "",
                10,
                12
            ],
            "firebow_r": [
                "",
                2,
                58
            ],
            "run_eval4": [
                "skills",
                12,
                10
            ],
            "elixirvit0": [
                "",
                0,
                27
            ],
            "elixirvit1": [
                "",
                0,
                28
            ],
            "elixirvit2": [
                "",
                1,
                28
            ],
            "skill_energize": [
                "skills",
                6,
                0
            ],
            "helmet20": [
                "",
                0,
                0
            ],
            "xshot": [
                "",
                1,
                22
            ],
            "elixirstr0": [
                "",
                2,
                28
            ],
            "elixirstr1": [
                "",
                3,
                28
            ],
            "run_emotion": [
                "skills",
                13,
                10
            ],
            "fullguard": [
                "",
                4,
                12
            ],
            "essenceofether": [
                "",
                0,
                33
            ],
            "cearring": [
                "custom",
                1,
                6
            ],
            "essenceofpower": [
                "",
                14,
                34
            ],
            "pstem": [
                "",
                11,
                51
            ],
            "dragondagger": [
                "",
                10,
                7
            ],
            "platinumingot": [
                "",
                4,
                35
            ],
            "firestars": [
                "",
                5,
                37
            ],
            "wand": [
                "",
                14,
                58
            ],
            "rapier": [
                "",
                11,
                7
            ],
            "wbreeches": [
                "",
                0,
                45
            ],
            "offeringx": [
                "",
                3,
                62
            ],
            "ink": [
                "",
                14,
                50
            ],
            "strring": [
                "",
                0,
                16
            ],
            "test_orb": [
                "",
                14,
                49
            ],
            "hpotx": [
                "",
                12,
                21
            ],
            "skill_abuff": [
                "skills",
                5,
                3
            ],
            "firecrackers": [
                "",
                10,
                39
            ],
            "mmarmor": [
                "",
                4,
                43
            ],
            "standx_texture": [
                "stands",
                0,
                36,
                26,
                36
            ],
            "lotusf": [
                "",
                7,
                50
            ],
            "ukey": [
                "",
                3,
                59
            ],
            "mmhat": [
                "",
                4,
                42
            ],
            "armorscroll": [
                "",
                12,
                41
            ],
            "xshotted": [
                "",
                3,
                22
            ],
            "testv2": [
                "",
                11,
                17
            ],
            "starkillers": [
                "",
                6,
                4
            ],
            "helmet": [
                "",
                2,
                0
            ],
            "xmasshoes": [
                "",
                10,
                29
            ],
            "pyjamas": [
                "",
                13,
                30
            ],
            "mrarmor": [
                "",
                7,
                43
            ],
            "goldenegg": [
                "",
                9,
                30
            ],
            "travel": [
                "skills",
                7,
                6
            ],
            "wshield": [
                "",
                7,
                12
            ],
            "skill_track": [
                "skills",
                2,
                3
            ],
            "shade20_cape": [
                "",
                4,
                6
            ],
            "chry": [
                "custom",
                0,
                1
            ],
            "vgloves": [
                "custom",
                1,
                4
            ],
            "phelmet": [
                "",
                11,
                29
            ],
            "ftrinket": [
                "",
                3,
                32
            ],
            "inventory": [
                "skills",
                6,
                6
            ],
            "cosmo3": [
                "",
                3,
                39
            ],
            "skill_tame": [
                "skills",
                4,
                2
            ],
            "solitaire": [
                "",
                5,
                16
            ],
            "powerglove": [
                "",
                13,
                2
            ],
            "bkey": [
                "",
                2,
                59
            ],
            "goldglove": [
                "",
                10,
                2
            ],
            "skill_dbuff": [
                "skills",
                4,
                4
            ],
            "hotchocolate": [
                "",
                11,
                21
            ],
            "poker": [
                "",
                5,
                32
            ],
            "shade20_elixir": [
                "",
                0,
                27
            ],
            "resistancescroll": [
                "",
                13,
                41
            ],
            "regen_mp": [
                "skills",
                8,
                8
            ],
            "hpot0": [
                "",
                4,
                21
            ],
            "hpot1": [
                "",
                6,
                21
            ],
            "stop": [
                "skills",
                9,
                6
            ],
            "t2bow": [
                "",
                3,
                9
            ],
            "vcape": [
                "custom",
                3,
                4
            ],
            "wbook0": [
                "",
                1,
                14
            ],
            "wbook1": [
                "",
                3,
                14
            ],
            "skill_pcoat": [
                "skills",
                0,
                3
            ],
            "shade_chest": [
                "",
                6,
                1
            ],
            "t3bow": [
                "",
                5,
                9
            ],
            "gum": [
                "",
                9,
                36
            ],
            "buff_reflection": [
                "skills",
                7,
                0
            ],
            "stoneofxp": [
                "pack_1a",
                12,
                113
            ],
            "pinkie_r": [
                "",
                12,
                58
            ],
            "mpgloves": [
                "",
                5,
                44
            ],
            "eears": [
                "",
                2,
                42
            ],
            "dartgun": [
                "",
                4,
                37
            ],
            "ecape": [
                "",
                2,
                47
            ],
            "blade20": [
                "",
                1,
                11
            ],
            "gloves1": [
                "",
                3,
                2
            ],
            "smoke": [
                "",
                10,
                21
            ],
            "exoarm": [
                "",
                8,
                11
            ],
            "mpxamulet": [
                "",
                6,
                20
            ],
            "coat": [
                "",
                2,
                1
            ],
            "tristone": [
                "",
                1,
                16
            ],
            "vboots": [
                "custom",
                2,
                4
            ],
            "beewings": [
                "",
                4,
                50
            ],
            "ring120": [
                "",
                0,
                9
            ],
            "spearofthedead": [
                "",
                13,
                7
            ],
            "coal": [
                "",
                9,
                25
            ],
            "bronzeingot": [
                "",
                2,
                35
            ],
            "xarmor": [
                "",
                5,
                1
            ],
            "bow4": [
                "",
                10,
                9
            ],
            "elixir20": [
                "",
                4,
                13
            ],
            "felixir": [
                "",
                15,
                31
            ],
            "mwgloves": [
                "",
                3,
                44
            ],
            "left": [
                "skills",
                13,
                6
            ],
            "buff_luck": [
                "skills",
                0,
                9
            ],
            "strearring": [
                "",
                6,
                17
            ],
            "shoes": [
                "",
                2,
                5
            ],
            "darktristone": [
                "",
                3,
                16
            ],
            "networkcard": [
                "",
                1,
                36
            ],
            "use_town": [
                "skills",
                0,
                6
            ],
            "shade_helmet": [
                "",
                0,
                31
            ],
            "fcape": [
                "",
                9,
                6
            ],
            "wcap": [
                "",
                0,
                42
            ],
            "elixirdex1": [
                "",
                9,
                28
            ],
            "confetti": [
                "",
                6,
                32
            ],
            "swifty": [
                "",
                7,
                55
            ],
            "bandages": [
                "",
                3,
                51
            ],
            "shade_shoes": [
                "",
                3,
                31
            ],
            "regen_hp": [
                "skills",
                8,
                7
            ],
            "lostearring": [
                "",
                4,
                25
            ],
            "ancientcomputer": [
                "",
                0,
                26
            ],
            "mmpants": [
                "",
                4,
                45
            ],
            "mmgloves": [
                "",
                4,
                44
            ],
            "frostbow": [
                "",
                12,
                9
            ],
            "skill_blink": [
                "skills",
                3,
                0
            ],
            "darktristone_a": [
                "",
                4,
                16
            ],
            "snippet": [
                "skills",
                2,
                10
            ],
            "bunnyelixir": [
                "",
                15,
                30
            ],
            "goldenring": [
                "",
                7,
                15
            ],
            "skill_taunt": [
                "skills",
                1,
                1
            ],
            "shard20": [
                "",
                6,
                6
            ],
            "puppyer": [
                "",
                14,
                33
            ],
            "bowofthedead": [
                "",
                15,
                9
            ],
            "mistletoe": [
                "",
                5,
                29
            ],
            "character": [
                "skills",
                3,
                6
            ],
            "elixirstr2": [
                "",
                4,
                28
            ],
            "shade_offhand": [
                "",
                6,
                31
            ],
            "shade_ring": [
                "",
                13,
                31
            ],
            "hpamulet": [
                "",
                4,
                19
            ],
            "shoes1": [
                "",
                3,
                5
            ],
            "cscale": [
                "",
                4,
                32
            ],
            "mrhood": [
                "",
                7,
                42
            ],
            "bcandle": [
                "",
                0,
                52
            ],
            "shade_seal": [
                "",
                11,
                9
            ],
            "trinkets": [
                "",
                2,
                52
            ],
            "stoneofgold": [
                "pack_1a",
                11,
                114
            ],
            "bwing": [
                "",
                7,
                51
            ],
            "bfang": [
                "",
                8,
                51
            ],
            "weaver": [
                "",
                13,
                9
            ],
            "sword": [
                "",
                2,
                7
            ],
            "frozenstone": [
                "",
                8,
                26
            ],
            "xmassweater": [
                "",
                7,
                29
            ],
            "cxjar": [
                "custom",
                2,
                1
            ],
            "redorb": [
                "pack_1a",
                10,
                28
            ],
            "pleather": [
                "",
                5,
                50
            ],
            "mysterybox": [
                "",
                2,
                26
            ],
            "monstertoken": [
                "",
                0,
                38
            ],
            "mpcostscroll": [
                "",
                6,
                41
            ],
            "amulet": [
                "pack_1a",
                14,
                1
            ],
            "snowball": [
                "",
                7,
                37
            ],
            "strscroll": [
                "",
                11,
                23
            ],
            "vstaff": [
                "custom",
                3,
                5
            ],
            "pouchbow": [
                "",
                5,
                59
            ],
            "candycanesword": [
                "",
                7,
                8
            ],
            "wbasher": [
                "",
                13,
                11
            ],
            "fieldgen0": [
                "",
                0,
                62
            ],
            "cryptkey": [
                "custom",
                0,
                3
            ],
            "ectoplasm": [
                "",
                13,
                51
            ],
            "gem3": [
                "",
                14,
                40
            ],
            "gem2": [
                "",
                13,
                40
            ],
            "gem1": [
                "",
                10,
                25
            ],
            "gem0": [
                "",
                13,
                25
            ],
            "watercore": [
                "",
                12,
                51
            ],
            "shade_uweapon": [
                "",
                5,
                8
            ],
            "talkingskull": [
                "",
                14,
                38
            ],
            "offeringp": [
                "",
                1,
                62
            ],
            "supermittens": [
                "",
                2,
                33
            ],
            "shrine2": [
                "dungeon",
                720,
                128,
                32,
                48
            ],
            "xpscroll": [
                "",
                9,
                41
            ],
            "wattire": [
                "",
                0,
                43
            ],
            "luckbooster": [
                "",
                6,
                27
            ],
            "xbox": [
                "",
                3,
                33
            ],
            "elixirdex2": [
                "",
                10,
                28
            ],
            "elixirdex0": [
                "",
                8,
                28
            ],
            "ornamentstaff": [
                "",
                6,
                11
            ],
            "shade_gloves": [
                "",
                10,
                2
            ],
            "xboots": [
                "",
                5,
                5
            ],
            "lspores": [
                "",
                1,
                52
            ],
            "claw": [
                "",
                1,
                11
            ],
            "use_mp": [
                "skills",
                2,
                8
            ],
            "lantern": [
                "",
                9,
                12
            ],
            "bottleofxp": [
                "",
                15,
                35
            ],
            "shade_offering": [
                "",
                6,
                26
            ],
            "right": [
                "skills",
                14,
                6
            ],
            "condition_bad": [
                "skills",
                13,
                9
            ],
            "ijx": [
                "",
                15,
                50
            ],
            "quiver": [
                "",
                0,
                13
            ],
            "candypop": [
                "",
                11,
                39
            ],
            "skill_revive": [
                "skills",
                3,
                4
            ],
            "tarot": [
                "",
                11,
                24
            ],
            "harmor": [
                "",
                4,
                1
            ],
            "gloves20": [
                "",
                2,
                5
            ],
            "oozingterror": [
                "",
                6,
                10
            ],
            "blade": [
                "",
                0,
                7
            ],
            "reflectionscroll": [
                "",
                7,
                23
            ],
            "fierygloves": [
                "",
                7,
                2
            ],
            "angelwings": [
                "",
                8,
                6
            ],
            "troll": [
                "",
                1,
                38
            ],
            "fsword": [
                "",
                5,
                7
            ],
            "rabbitsfoot": [
                "",
                14,
                30
            ],
            "elixirint0": [
                "",
                5,
                28
            ],
            "woodensword": [
                "",
                10,
                8
            ],
            "xhelmet": [
                "",
                5,
                0
            ],
            "luckscroll": [
                "",
                11,
                41
            ],
            "firebow": [
                "",
                11,
                9
            ],
            "tshirt4": [
                "",
                6,
                38
            ],
            "t2fist": [
                "",
                2,
                11
            ],
            "slimestaff": [
                "",
                2,
                55
            ],
            "spidersilk": [
                "",
                8,
                39
            ],
            "tracker": [
                "",
                11,
                40
            ],
            "esc": [
                "skills",
                8,
                6
            ],
            "smush": [
                "",
                0,
                51
            ],
            "mrngloves": [
                "",
                6,
                44
            ],
            "shade_pants": [
                "",
                2,
                31
            ],
            "notverified": [
                "skills",
                3,
                9
            ],
            "essenceofthunder": [
                "",
                12,
                34
            ],
            "electronics": [
                "",
                4,
                36
            ],
            "skill_curse": [
                "skills",
                0,
                4
            ],
            "skill_teleport": [
                "skills",
                4,
                0
            ],
            "firestars_r": [
                "",
                9,
                37
            ],
            "snowball_r": [
                "",
                11,
                37
            ],
            "buff_speed": [
                "skills",
                1,
                9
            ],
            "manastealscroll": [
                "",
                2,
                41
            ],
            "cclaw": [
                "",
                3,
                55
            ],
            "frequencyscroll": [
                "",
                5,
                41
            ],
            "skill_burst": [
                "skills",
                1,
                0
            ],
            "epyjamas": [
                "",
                2,
                43
            ],
            "whiteegg": [
                "",
                1,
                50
            ],
            "gbow": [
                "",
                10,
                58
            ],
            "chest3": [
                "pack_1a",
                9,
                114
            ],
            "chest2": [
                "pack_1a",
                9,
                113
            ],
            "chest1": [
                "pack_1a",
                8,
                113
            ],
            "chest0": [
                "pack_1a",
                11,
                112
            ],
            "vattire": [
                "custom",
                0,
                4
            ],
            "gphelmet": [
                "",
                15,
                29
            ],
            "cocoon": [
                "",
                4,
                51
            ],
            "essenceofdesire": [
                "",
                13,
                34
            ],
            "iceskates": [
                "",
                15,
                5
            ],
            "star20": [
                "",
                6,
                7
            ],
            "xmaspants": [
                "",
                9,
                29
            ],
            "stone": [
                "outside",
                672,
                104,
                16,
                20
            ],
            "skill_massproduction": [
                "skills",
                2,
                5
            ],
            "essenceofgreed": [
                "",
                13,
                34
            ],
            "stinger": [
                "",
                4,
                55
            ],
            "weaponbox": [
                "",
                3,
                26
            ],
            "mwhelmet": [
                "",
                3,
                42
            ],
            "molesteeth": [
                "",
                5,
                17
            ],
            "run_snippet5": [
                "skills",
                13,
                10
            ],
            "citizens": [
                "skills",
                6,
                9
            ],
            "shield": [
                "",
                0,
                12
            ],
            "mace": [
                "",
                14,
                11
            ],
            "vitearring": [
                "",
                0,
                17
            ],
            "shade_exchange": [
                "",
                1,
                35
            ],
            "cring": [
                "custom",
                0,
                6
            ],
            "dreturnscroll": [
                "",
                4,
                41
            ],
            "shade_lock": [
                "",
                1,
                37
            ],
            "mpshoes": [
                "",
                5,
                46
            ],
            "goldenpowerglove": [
                "",
                15,
                2
            ],
            "skill_5shot": [
                "skills",
                2,
                2
            ],
            "essenceoflight": [
                "",
                7,
                34
            ],
            "snakefang": [
                "",
                9,
                50
            ],
            "luckbooster_a": [
                "",
                7,
                27
            ],
            "harbringer_r": [
                "",
                9,
                58
            ],
            "mcarmor": [
                "",
                8,
                43
            ],
            "intearring": [
                "",
                7,
                17
            ],
            "vitscroll": [
                "",
                6,
                23
            ],
            "dagger": [
                "",
                6,
                7
            ],
            "skill_hardshell": [
                "skills",
                4,
                1
            ],
            "amuletofm": [
                "",
                14,
                19
            ],
            "pvptoken": [
                "",
                8,
                32
            ],
            "skill_strength": [
                "skills",
                0,
                1
            ],
            "carrot": [
                "",
                1,
                51
            ],
            "condition_neutral": [
                "skills",
                12,
                9
            ],
            "elixirfzres": [
                "",
                6,
                62
            ],
            "orbofstr": [
                "",
                0,
                48
            ],
            "down": [
                "skills",
                12,
                6
            ],
            "cshell": [
                "",
                15,
                51
            ],
            "rpiercingscroll": [
                "",
                15,
                41
            ],
            "blueorb": [
                "pack_1a",
                15,
                28
            ],
            "skill_pstrike": [
                "skills",
                6,
                3
            ],
            "redenvelopev3": [
                "",
                15,
                39
            ],
            "spores": [
                "",
                6,
                50
            ],
            "ring": [
                "",
                12,
                15
            ],
            "emotionjar": [
                "custom",
                5,
                1
            ],
            "earring220": [
                "",
                1,
                6
            ],
            "skill_piercingshot": [
                "skills",
                7,
                2
            ],
            "frostbow_r": [
                "",
                6,
                58
            ],
            "belt20": [
                "",
                3,
                7
            ],
            "dragonarmor": [
                "",
                14,
                1
            ],
            "shoes20": [
                "",
                4,
                5
            ],
            "skill_invis_active": [
                "skills",
                0,
                1
            ],
            "skill_phaseout": [
                "skills",
                7,
                4
            ],
            "shade_orb": [
                "pack_1a",
                10,
                28
            ],
            "vhammer": [
                "custom",
                0,
                5
            ],
            "shells": [
                "",
                3,
                25
            ],
            "skill_stack": [
                "skills",
                6,
                3
            ],
            "interact": [
                "skills",
                5,
                6
            ],
            "vitring": [
                "",
                13,
                15
            ],
            "orbg": [
                "",
                4,
                48
            ],
            "cstand_texture": [
                "stands",
                0,
                72,
                26,
                36
            ],
            "maceofthedead": [
                "",
                15,
                11
            ],
            "attack": [
                "skills",
                1,
                6
            ],
            "coat1": [
                "",
                3,
                1
            ],
            "stop_g": [
                "skills",
                10,
                6
            ],
            "orbofint": [
                "",
                2,
                48
            ],
            "cosmo1": [
                "",
                1,
                39
            ],
            "cosmo0": [
                "",
                0,
                39
            ],
            "froststaff": [
                "",
                8,
                10
            ],
            "gslime": [
                "",
                2,
                50
            ],
            "cosmo4": [
                "",
                4,
                39
            ],
            "carrotsword_c": [
                "",
                0,
                58
            ],
            "skill_absorbsins": [
                "skills",
                6,
                4
            ],
            "t2intamulet": [
                "",
                12,
                19
            ],
            "mparmor": [
                "",
                5,
                43
            ],
            "mchat": [
                "",
                8,
                42
            ],
            "drapes": [
                "",
                5,
                52
            ],
            "mppants": [
                "",
                5,
                45
            ],
            "heal": [
                "skills",
                2,
                6
            ],
            "xmashat": [
                "",
                6,
                29
            ],
            "vring": [
                "custom",
                2,
                6
            ],
            "apiercingscroll": [
                "",
                14,
                41
            ],
            "x8": [
                "",
                12,
                33
            ],
            "froststaff_r": [
                "",
                4,
                58
            ],
            "xpants": [
                "",
                5,
                4
            ],
            "x2": [
                "",
                6,
                33
            ],
            "x3": [
                "",
                7,
                33
            ],
            "x0": [
                "",
                4,
                33
            ],
            "x1": [
                "",
                5,
                33
            ],
            "x6": [
                "",
                10,
                33
            ],
            "x7": [
                "",
                11,
                33
            ],
            "x4": [
                "",
                8,
                33
            ],
            "x5": [
                "",
                9,
                33
            ],
            "hbow": [
                "",
                5,
                55
            ],
            "essenceoffrost": [
                "",
                10,
                34
            ],
            "skill_invis": [
                "skills",
                1,
                3
            ],
            "run_eval1": [
                "skills",
                6,
                10
            ],
            "run_eval0": [
                "skills",
                4,
                10
            ],
            "run_eval3": [
                "skills",
                10,
                10
            ],
            "run_eval2": [
                "skills",
                8,
                10
            ],
            "run_eval5": [
                "skills",
                14,
                10
            ],
            "speedscroll": [
                "",
                0,
                41
            ],
            "staffofthedead": [
                "",
                15,
                10
            ],
            "mushroomstaff": [
                "",
                6,
                55
            ],
            "cscroll0": [
                "",
                0,
                24
            ],
            "cscroll1": [
                "",
                15,
                23
            ],
            "cscroll2": [
                "",
                1,
                24
            ],
            "fireblade": [
                "",
                1,
                8
            ],
            "intamulet": [
                "",
                9,
                19
            ],
            "basher": [
                "",
                5,
                10
            ],
            "apologybox": [
                "",
                6,
                39
            ],
            "charmer": [
                "",
                12,
                39
            ],
            "cake": [
                "",
                12,
                28
            ],
            "santasbelt": [
                "",
                3,
                3
            ],
            "brownegg": [
                "",
                0,
                50
            ],
            "shade_cring": [
                "",
                7,
                19
            ],
            "skill_3shot": [
                "skills",
                1,
                2
            ],
            "firestaff": [
                "",
                3,
                10
            ],
            "egg8": [
                "",
                8,
                30
            ],
            "skill_sacrifice": [
                "skills",
                2,
                4
            ],
            "mpotx": [
                "",
                13,
                21
            ],
            "skill_mentalburst": [
                "skills",
                9,
                3
            ],
            "rfangs": [
                "",
                3,
                52
            ],
            "fury": [
                "",
                0,
                0
            ],
            "egg0": [
                "",
                0,
                30
            ],
            "egg3": [
                "",
                3,
                30
            ],
            "egg2": [
                "",
                2,
                30
            ],
            "egg5": [
                "",
                5,
                30
            ],
            "egg4": [
                "",
                4,
                30
            ],
            "goldnugget": [
                "",
                6,
                35
            ],
            "egg6": [
                "",
                6,
                30
            ],
            "dexscroll": [
                "",
                9,
                23
            ],
            "gift1": [
                "",
                0,
                32
            ],
            "condition_good": [
                "skills",
                11,
                9
            ],
            "mrnboots": [
                "",
                6,
                46
            ],
            "orbofsc": [
                "",
                1,
                29
            ],
            "crabclaw": [
                "",
                3,
                50
            ],
            "vorb": [
                "custom",
                3,
                6
            ],
            "shade_gold": [
                "",
                8,
                35
            ],
            "withdrawal": [
                "skills",
                4,
                9
            ],
            "orbofvit": [
                "",
                3,
                48
            ],
            "mcape": [
                "",
                11,
                1
            ],
            "shade_unlock": [
                "",
                8,
                6
            ],
            "elixirfires": [
                "",
                5,
                62
            ],
            "greenenvelope": [
                "",
                15,
                40
            ],
            "bfur": [
                "",
                2,
                51
            ],
            "essenceoflife": [
                "",
                14,
                34
            ],
            "gcape": [
                "",
                15,
                6
            ],
            "pinkie": [
                "",
                13,
                58
            ],
            "xgloves": [
                "",
                5,
                2
            ],
            "ascale": [
                "",
                12,
                50
            ],
            "t2quiver": [
                "",
                1,
                13
            ],
            "shrine": [
                "dungeon",
                720,
                304,
                32,
                48
            ],
            "mpxbelt": [
                "",
                6,
                3
            ],
            "gemfragment": [
                "",
                7,
                25
            ],
            "skill_scare": [
                "",
                13,
                38
            ],
            "test": [
                "",
                9,
                17
            ],
            "mrnpants": [
                "",
                6,
                45
            ],
            "stand0_texture": [
                "stands",
                52,
                0,
                26,
                36
            ],
            "gift0": [
                "",
                1,
                32
            ],
            "door0": [
                [
                    "custom",
                    0,
                    128,
                    32,
                    32
                ],
                [
                    "custom",
                    32,
                    128,
                    32,
                    32
                ],
                [
                    "custom",
                    64,
                    128,
                    32,
                    32
                ],
                [
                    "custom",
                    96,
                    128,
                    32,
                    32
                ],
                [
                    "custom",
                    128,
                    128,
                    32,
                    32
                ],
                [
                    "custom",
                    160,
                    128,
                    32,
                    32
                ]
            ],
            "tristone_a": [
                "",
                2,
                16
            ],
            "stealthcape": [
                "",
                1,
                6
            ],
            "elixirint2": [
                "",
                7,
                28
            ],
            "skill_cburst": [
                "skills",
                2,
                0
            ],
            "skill_agitate": [
                "skills",
                7,
                1
            ],
            "elixirint1": [
                "",
                6,
                28
            ],
            "mpot1": [
                "",
                7,
                21
            ],
            "mpot0": [
                "",
                5,
                21
            ],
            "wblade": [
                "",
                8,
                8
            ],
            "stramulet": [
                "",
                8,
                19
            ],
            "quest_monsterhunt": [
                "skills",
                7,
                9
            ],
            "shadowstone": [
                "",
                14,
                28
            ],
            "tshirt3": [
                "",
                5,
                38
            ],
            "stone20": [
                "",
                5,
                5
            ],
            "axe3": [
                "",
                11,
                10
            ],
            "redenvelopev2": [
                "",
                9,
                39
            ],
            "skill_throw": [
                "skills",
                1,
                5
            ],
            "mwboots": [
                "",
                3,
                46
            ],
            "bugbountybox": [
                "",
                5,
                39
            ],
            "ghatb": [
                "custom",
                3,
                0
            ],
            "cosmo2": [
                "",
                2,
                39
            ],
            "redenvelope": [
                "",
                13,
                33
            ],
            "skill_mining": [
                "custom",
                4,
                4
            ],
            "lmace": [
                "",
                11,
                11
            ],
            "platinumnugget": [
                "",
                7,
                35
            ],
            "skill_huntersmark": [
                "skills",
                6,
                2
            ],
            "dexearringx": [
                "",
                1,
                17
            ],
            "tombkey": [
                "custom",
                1,
                3
            ],
            "svenom": [
                "",
                10,
                51
            ],
            "suckerpunch": [
                "",
                11,
                15
            ],
            "tshirt2": [
                "",
                4,
                38
            ],
            "ringofluck": [
                "",
                6,
                16
            ],
            "goldingot": [
                "",
                3,
                35
            ],
            "standg_texture": [
                "stands",
                52,
                36,
                26,
                36
            ],
            "eslippers": [
                "",
                2,
                46
            ],
            "fclaw_r": [
                "",
                8,
                58
            ],
            "mrnhat": [
                "",
                6,
                42
            ],
            "earring120": [
                "",
                5,
                10
            ],
            "tshell": [
                "",
                5,
                51
            ],
            "luckyt": [
                "",
                0,
                1
            ],
            "skill_quickpunch": [
                "skills",
                4,
                3
            ]
        }
    }
    expect(G_positions).not.toBe(undefined)
})