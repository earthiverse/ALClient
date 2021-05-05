import { GData2 } from "./adventureland-data"

/** 
 * The following is from http://adventure.land/data.js, version 680 (2021-05-05)
 * It is used to confirm type correctness
 */

test("G.maps type validation", async () => {
    const G_maps: Pick<GData2, "maps"> = {
        "maps": {
            "winterland": {
                "freeze_multiplier": 1.5,
                "npcs": [
                    {
                        "position": [
                            262,
                            -48.5
                        ],
                        "id": "leathermerchant"
                    },
                    {
                        "position": [
                            -73,
                            -393
                        ],
                        "id": "transporter"
                    },
                    {
                        "position": [
                            1065,
                            -2015
                        ],
                        "id": "guard"
                    },
                    {
                        "position": [
                            -15,
                            5
                        ],
                        "id": "citizen7"
                    },
                    {
                        "position": [
                            -15,
                            5
                        ],
                        "id": "citizen8"
                    },
                    {
                        "position": [
                            -15,
                            5
                        ],
                        "id": "citizen9"
                    },
                    {
                        "position": [
                            -15,
                            5
                        ],
                        "id": "citizen10"
                    }
                ],
                "quirks": [
                    [
                        -247,
                        -73,
                        20,
                        16,
                        "sign",
                        "The Wanderers' Inn"
                    ],
                    [
                        202,
                        -56,
                        20,
                        16,
                        "sign",
                        "Leather Shop. If I'm not outside, check inside!"
                    ],
                    [
                        65,
                        -1601,
                        20,
                        16,
                        "sign",
                        "Dangers Ahead. Beware!"
                    ],
                    [
                        465,
                        -2296,
                        20,
                        16,
                        "note",
                        "Stompy and his companions defeated me many times. However, I've discovered that If I stay just around the corner they can't even reach me! HAHA!"
                    ],
                    [
                        -230,
                        95,
                        20,
                        16,
                        "log",
                        "Old Man's House"
                    ],
                    [
                        168,
                        -83,
                        32,
                        40,
                        "log",
                        "Locked"
                    ],
                    [
                        138,
                        223,
                        32,
                        40,
                        "log",
                        "Locked. This is probably where the guards stay"
                    ],
                    [
                        413,
                        -3080,
                        24,
                        30,
                        "log",
                        "Can't reach. This might be Stompy's lair"
                    ],
                    [
                        600.5,
                        -1273,
                        0,
                        0,
                        "info",
                        "darkmage"
                    ]
                ],
                "name": "Winterland",
                "key": "jayson_WinterLandV2",
                "doors": [
                    [
                        -280,
                        -132,
                        32,
                        40,
                        "winter_inn",
                        0,
                        2
                    ],
                    [
                        602,
                        -1289,
                        24,
                        30,
                        "winter_cave",
                        0,
                        3
                    ],
                    [
                        -864,
                        -1570,
                        24,
                        24,
                        "level2n",
                        2,
                        4
                    ],
                    [
                        599.62,
                        -1282.15,
                        47.71,
                        51.32,
                        "winter_instance",
                        0,
                        5,
                        "key",
                        "frozenkey"
                    ]
                ],
                "spawns": [
                    [
                        0,
                        0
                    ],
                    [
                        -8,
                        -337,
                        3
                    ],
                    [
                        -280,
                        -123
                    ],
                    [
                        600,
                        -1275
                    ],
                    [
                        -864,
                        -1614,
                        3
                    ],
                    [
                        600.5,
                        -1273
                    ],
                    [
                        864.73,
                        429.55
                    ],
                    [
                        1018.66,
                        401.71
                    ]
                ],
                "drop_norm": 3000,
                "burn_multiplier": 0.6,
                "monsters": [
                    {
                        "count": 1,
                        "boundary": [
                            30,
                            -2954,
                            836,
                            -2536
                        ],
                        "type": "stompy"
                    },
                    {
                        "count": 7,
                        "boundary": [
                            30,
                            -2954,
                            836,
                            -2536
                        ],
                        "type": "wolf"
                    },
                    {
                        "count": 10,
                        "boundary": [
                            682,
                            -967,
                            1482,
                            -779
                        ],
                        "type": "arcticbee",
                        "grow": true
                    },
                    {
                        "count": 4,
                        "boundary": [
                            -367,
                            -2234,
                            29,
                            -1819
                        ],
                        "type": "wolfie"
                    },
                    {
                        "count": 3,
                        "boundary": [
                            236,
                            -2232,
                            460,
                            -1847
                        ],
                        "type": "wolfie"
                    },
                    {
                        "count": 8,
                        "boundary": [
                            -173,
                            -1488,
                            212,
                            -730
                        ],
                        "type": "boar"
                    },
                    {
                        "count": 5,
                        "boundary": [
                            550,
                            -240,
                            1097,
                            149
                        ],
                        "type": "iceroamer"
                    },
                    {
                        "count": 4,
                        "boundary": [
                            1335,
                            -71,
                            1689,
                            278
                        ],
                        "type": "iceroamer"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            782.25,
                            395.96,
                            888.71,
                            450.28
                        ],
                        "type": "icegolem",
                        "roam": true
                    }
                ]
            },
            "d_b1": {
                "npcs": [],
                "quirks": [
                    [
                        190.54,
                        -1628.83,
                        59.88,
                        85.03,
                        "log",
                        "The passage is blocked"
                    ]
                ],
                "name": "Dungeon",
                "key": "jayson_pvpDungeon_b1",
                "doors": [
                    [
                        0.09,
                        83.59,
                        66.6,
                        63.26,
                        "d_g",
                        1,
                        0
                    ],
                    [
                        -192.9,
                        -1666.24,
                        59.7,
                        45.23,
                        "d_a1",
                        0,
                        1
                    ]
                ],
                "world": "dungeon",
                "spawns": [
                    [
                        -0.28,
                        10.19,
                        3
                    ],
                    [
                        -192.16,
                        -1655.63
                    ]
                ],
                "monsters": [],
                "traps": [
                    {
                        "type": "debuff",
                        "polygon": [
                            [
                                -336,
                                -1136
                            ],
                            [
                                -192,
                                -1136
                            ],
                            [
                                -192,
                                -1160
                            ],
                            [
                                -168,
                                -1160
                            ],
                            [
                                -168,
                                -1152
                            ],
                            [
                                -120,
                                -1152
                            ],
                            [
                                -120,
                                -1168
                            ],
                            [
                                -112,
                                -1168
                            ],
                            [
                                -112,
                                -1240
                            ],
                            [
                                -72,
                                -1240
                            ],
                            [
                                -72,
                                -1256
                            ],
                            [
                                -56,
                                -1256
                            ],
                            [
                                -56,
                                -1288
                            ],
                            [
                                0,
                                -1288
                            ],
                            [
                                0,
                                -1272
                            ],
                            [
                                16,
                                -1272
                            ],
                            [
                                16,
                                -1208
                            ],
                            [
                                88,
                                -1208
                            ],
                            [
                                88,
                                -1088
                            ],
                            [
                                200,
                                -1088
                            ],
                            [
                                200,
                                -1128
                            ],
                            [
                                336,
                                -1128
                            ],
                            [
                                336,
                                -1368
                            ],
                            [
                                240,
                                -1368
                            ],
                            [
                                240,
                                -1336
                            ],
                            [
                                216,
                                -1336
                            ],
                            [
                                216,
                                -1320
                            ],
                            [
                                160,
                                -1320
                            ],
                            [
                                160,
                                -1400
                            ],
                            [
                                128,
                                -1400
                            ],
                            [
                                128,
                                -1448
                            ],
                            [
                                144,
                                -1448
                            ],
                            [
                                144,
                                -1512
                            ],
                            [
                                88,
                                -1512
                            ],
                            [
                                88,
                                -1496
                            ],
                            [
                                64,
                                -1496
                            ],
                            [
                                64,
                                -1440
                            ],
                            [
                                40,
                                -1440
                            ],
                            [
                                40,
                                -1432
                            ],
                            [
                                0,
                                -1432
                            ],
                            [
                                0,
                                -1464
                            ],
                            [
                                -40,
                                -1464
                            ],
                            [
                                -40,
                                -1480
                            ],
                            [
                                -64,
                                -1480
                            ],
                            [
                                -64,
                                -1512
                            ],
                            [
                                -144,
                                -1512
                            ],
                            [
                                -144,
                                -1560
                            ],
                            [
                                -176,
                                -1560
                            ],
                            [
                                -176,
                                -1576
                            ],
                            [
                                -216,
                                -1576
                            ],
                            [
                                -216,
                                -1544
                            ],
                            [
                                -264,
                                -1544
                            ],
                            [
                                -264,
                                -1480
                            ],
                            [
                                -288,
                                -1480
                            ],
                            [
                                -288,
                                -1456
                            ],
                            [
                                -296,
                                -1456
                            ],
                            [
                                -296,
                                -1432
                            ],
                            [
                                -328,
                                -1432
                            ],
                            [
                                -328,
                                -1152
                            ],
                            [
                                -336,
                                -1152
                            ]
                        ]
                    }
                ]
            },
            "winter_inn": {
                "npcs": [
                    {
                        "position": [
                            -143,
                            -220
                        ],
                        "id": "wbartender"
                    },
                    {
                        "position": [
                            0,
                            -5
                        ],
                        "id": "citizen1"
                    },
                    {
                        "position": [
                            0,
                            -5
                        ],
                        "id": "citizen5"
                    },
                    {
                        "position": [
                            0,
                            -5
                        ],
                        "id": "citizen6"
                    }
                ],
                "drop_norm": 1000,
                "quirks": [],
                "name": "Wanderers' Inn",
                "key": "jayson_winter_inn",
                "doors": [
                    [
                        0,
                        29,
                        24,
                        20,
                        "winterland",
                        2,
                        0
                    ],
                    [
                        47,
                        -228,
                        28,
                        36,
                        "winter_inn_rooms",
                        0,
                        1
                    ]
                ],
                "spawns": [
                    [
                        0,
                        -5,
                        3
                    ],
                    [
                        28,
                        -208
                    ]
                ],
                "monsters": []
            },
            "mansion": {
                "npcs": [
                    {
                        "position": [
                            0,
                            -303
                        ],
                        "id": "pwincess"
                    }
                ],
                "drop_norm": 1000,
                "quirks": [
                    [
                        -335,
                        -111,
                        30,
                        40,
                        "log",
                        "Locked"
                    ],
                    [
                        338,
                        -111,
                        30,
                        40,
                        "log",
                        "Locked"
                    ],
                    [
                        -334,
                        -618,
                        30,
                        40,
                        "log",
                        "Locked"
                    ],
                    [
                        338,
                        -618,
                        30,
                        40,
                        "log",
                        "Locked"
                    ],
                    [
                        338,
                        -618,
                        30,
                        40,
                        "log",
                        "Hotdamn. This one is locked too..."
                    ]
                ],
                "name": "The Mansion",
                "key": "jayson_Mansion",
                "doors": [
                    [
                        -1,
                        12,
                        40,
                        24,
                        "main",
                        10,
                        0
                    ],
                    [
                        -0.05,
                        -493.95,
                        31.8,
                        46.7,
                        "tomb",
                        0,
                        1,
                        "key",
                        "tombkey"
                    ]
                ],
                "spawns": [
                    [
                        0,
                        -21,
                        3
                    ],
                    [
                        -0.18,
                        -481.98
                    ]
                ],
                "monsters": [
                    {
                        "count": 5,
                        "boundary": [
                            -217,
                            -272,
                            200,
                            -24
                        ],
                        "type": "rat"
                    },
                    {
                        "count": 3,
                        "boundary": [
                            -408,
                            -102,
                            -158,
                            27
                        ],
                        "type": "rat"
                    },
                    {
                        "count": 3,
                        "boundary": [
                            160,
                            -97,
                            402,
                            29
                        ],
                        "type": "rat"
                    },
                    {
                        "count": 3,
                        "boundary": [
                            -388,
                            -610,
                            -282,
                            -197
                        ],
                        "type": "rat"
                    },
                    {
                        "count": 3,
                        "boundary": [
                            -388,
                            -610,
                            -282,
                            -197
                        ],
                        "type": "rat"
                    },
                    {
                        "count": 3,
                        "boundary": [
                            283,
                            -604,
                            382,
                            -200
                        ],
                        "type": "rat"
                    },
                    {
                        "count": 4,
                        "boundary": [
                            -240,
                            -487,
                            249,
                            -401
                        ],
                        "type": "rat"
                    }
                ]
            },
            "d2": {
                "npcs": [],
                "ignore": true,
                "quirks": [],
                "name": "Dark World",
                "key": "d2",
                "doors": [
                    [
                        0,
                        22,
                        40,
                        40,
                        "d1",
                        1,
                        0
                    ],
                    [
                        0,
                        -684,
                        20,
                        50,
                        "d3",
                        0,
                        1,
                        "protected"
                    ]
                ],
                "spawns": [
                    [
                        0,
                        -15
                    ],
                    [
                        0,
                        -671
                    ]
                ],
                "monsters": [
                    {
                        "count": 1,
                        "gatekeeper": true,
                        "boundary": [
                            -49,
                            -679,
                            51,
                            -640
                        ],
                        "type": "d_wiz",
                        "rage": [
                            -172,
                            -685,
                            219,
                            -437
                        ]
                    }
                ]
            },
            "batcave": {
                "ignore": true,
                "npcs": [],
                "name": "Cave of Beginnings",
                "key": "batcave",
                "doors": [
                    [
                        -195,
                        213,
                        24,
                        20,
                        "main",
                        1
                    ]
                ],
                "spawns": [
                    [
                        -200,
                        190,
                        3
                    ]
                ],
                "drop_norm": 4500,
                "monsters": [
                    {
                        "count": 12,
                        "boundary": [
                            -210,
                            -170,
                            342,
                            185
                        ],
                        "type": "bat"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            -210,
                            -170,
                            342,
                            185
                        ],
                        "type": "mvampire"
                    }
                ]
            },
            "winter_instance": {
                "npcs": [],
                "drop_norm": 4000,
                "quirks": [],
                "instance": true,
                "name": "Lair of the Dark Mage",
                "key": "jayson_winterInstance",
                "doors": [
                    [
                        -7.23,
                        250.26,
                        38.15,
                        28.55,
                        "winterland",
                        5,
                        0
                    ]
                ],
                "on_exit": [
                    "winterland",
                    5
                ],
                "spawns": [
                    [
                        -8,
                        216,
                        3
                    ]
                ],
                "monsters": [
                    {
                        "count": 1,
                        "boundary": [
                            -255.17,
                            -261.64,
                            239.07,
                            221.4
                        ],
                        "type": "xmagefz"
                    },
                    {
                        "count": 0,
                        "boundary": [
                            -255.17,
                            -261.64,
                            239.07,
                            221.4
                        ],
                        "type": "xmagefi"
                    },
                    {
                        "count": 0,
                        "boundary": [
                            -255.17,
                            -261.64,
                            239.07,
                            221.4
                        ],
                        "type": "xmagen"
                    },
                    {
                        "count": 0,
                        "boundary": [
                            -255.17,
                            -261.64,
                            239.07,
                            221.4
                        ],
                        "type": "xmagex"
                    }
                ]
            },
            "resort": {
                "npcs": [
                    {
                        "position": [
                            -8,
                            -108
                        ],
                        "id": "holo"
                    },
                    {
                        "position": [
                            -8,
                            0
                        ],
                        "id": "holo0"
                    },
                    {
                        "position": [
                            -8,
                            0
                        ],
                        "id": "holo1"
                    },
                    {
                        "position": [
                            -8,
                            0
                        ],
                        "id": "holo2"
                    },
                    {
                        "position": [
                            -8,
                            0
                        ],
                        "id": "holo3"
                    },
                    {
                        "position": [
                            -8,
                            0
                        ],
                        "id": "holo4"
                    },
                    {
                        "position": [
                            -8,
                            0
                        ],
                        "id": "holo5"
                    }
                ],
                "drop_norm": 1000,
                "quirks": [],
                "name": "Holo Resort",
                "key": "resort",
                "doors": [
                    [
                        -8,
                        120,
                        40,
                        24,
                        "tavern",
                        1,
                        0
                    ]
                ],
                "spawns": [
                    [
                        -8,
                        91,
                        3
                    ]
                ],
                "monsters": [],
                "irregular": true
            },
            "d_a2": {
                "npcs": [],
                "quirks": [],
                "name": "Dungeon",
                "key": "jayson_pvpDungeon_a2",
                "doors": [
                    [
                        0.6,
                        77.16,
                        56.2,
                        64.21,
                        "d_a1",
                        1,
                        0
                    ]
                ],
                "world": "dungeon",
                "spawns": [
                    [
                        -2.12,
                        -0.39,
                        3
                    ]
                ],
                "monsters": []
            },
            "main": {
                "on_death": [
                    "main",
                    5
                ],
                "npcs": [
                    {
                        "position": [
                            -207,
                            -220
                        ],
                        "id": "newupgrade"
                    },
                    {
                        "position": [
                            -25,
                            -478
                        ],
                        "name": "Exchanger",
                        "id": "exchange"
                    },
                    {
                        "position": [
                            -464,
                            -96
                        ],
                        "name": "Come Scroll Away",
                        "id": "scrolls"
                    },
                    {
                        "position": [
                            -341,
                            168
                        ],
                        "id": "lotterylady"
                    },
                    {
                        "position": [
                            -1572,
                            552,
                            1
                        ],
                        "id": "fisherman"
                    },
                    {
                        "position": [
                            -35,
                            -162
                        ],
                        "id": "fancypots"
                    },
                    {
                        "position": [
                            -89,
                            -165
                        ],
                        "id": "basics"
                    },
                    {
                        "position": [
                            192,
                            -564
                        ],
                        "id": "premium"
                    },
                    {
                        "position": [
                            -83,
                            -441
                        ],
                        "id": "transporter"
                    },
                    {
                        "position": [
                            -193,
                            680
                        ],
                        "id": "standmerchant"
                    },
                    {
                        "position": [
                            -361,
                            -832
                        ],
                        "name": "Zen Girl",
                        "id": "appearance"
                    },
                    {
                        "positions": [
                            [
                                232,
                                388
                            ],
                            [
                                325,
                                499,
                                1
                            ]
                        ],
                        "id": "pvp"
                    },
                    {
                        "position": [
                            92,
                            670
                        ],
                        "id": "craftsman"
                    },
                    {
                        "position": [
                            -776,
                            1256
                        ],
                        "id": "pete"
                    },
                    {
                        "position": [
                            0,
                            0
                        ],
                        "id": "citizen0"
                    },
                    {
                        "position": [
                            0,
                            0
                        ],
                        "id": "citizen2"
                    },
                    {
                        "position": [
                            0,
                            0
                        ],
                        "id": "citizen3"
                    },
                    {
                        "position": [
                            0,
                            0
                        ],
                        "id": "citizen4"
                    },
                    {
                        "position": [
                            274,
                            -554
                        ],
                        "id": "antip2w"
                    },
                    {
                        "position": [
                            303,
                            -87
                        ],
                        "id": "funtokens"
                    },
                    {
                        "positions": [
                            [
                                -94,
                                -47
                            ],
                            [
                                98,
                                -50
                            ],
                            [
                                5,
                                83
                            ]
                        ],
                        "id": "bean",
                        "loop": true
                    },
                    {
                        "position": [
                            106,
                            -47
                        ],
                        "id": "secondhands"
                    },
                    {
                        "position": [
                            159,
                            403
                        ],
                        "id": "pvptokens"
                    },
                    {
                        "position": [
                            126,
                            -413
                        ],
                        "id": "monsterhunter"
                    },
                    {
                        "position": [
                            81,
                            -283,
                            1
                        ],
                        "id": "mcollector"
                    }
                ],
                "key": "jayson_ALMap2_v2",
                "animatables": {
                    "the_door": {
                        "y": -672,
                        "x": 888,
                        "position": "door0"
                    }
                },
                "traps": [
                    {
                        "position": [
                            -472,
                            286
                        ],
                        "type": "spikes"
                    }
                ],
                "zones": [
                    {
                        "drop": "f1",
                        "type": "fishing",
                        "polygon": [
                            [
                                -880,
                                -352
                            ],
                            [
                                -1064,
                                -352
                            ],
                            [
                                -1064,
                                -336
                            ],
                            [
                                -1080,
                                -336
                            ],
                            [
                                -1080,
                                -320
                            ],
                            [
                                -1096,
                                -320
                            ],
                            [
                                -1096,
                                -304
                            ],
                            [
                                -1224,
                                -304
                            ],
                            [
                                -1224,
                                -288
                            ],
                            [
                                -1368,
                                -288
                            ],
                            [
                                -1368,
                                -272
                            ],
                            [
                                -1384,
                                -272
                            ],
                            [
                                -1384,
                                600
                            ],
                            [
                                -1424,
                                600
                            ],
                            [
                                -1424,
                                456
                            ],
                            [
                                -1616,
                                456
                            ],
                            [
                                -1616,
                                592
                            ],
                            [
                                -1536,
                                592
                            ],
                            [
                                -1536,
                                680
                            ],
                            [
                                -1384,
                                680
                            ],
                            [
                                -1384,
                                1648
                            ],
                            [
                                -1368,
                                1648
                            ],
                            [
                                -1368,
                                1744
                            ],
                            [
                                -1352,
                                1744
                            ],
                            [
                                -1352,
                                1760
                            ],
                            [
                                -1336,
                                1760
                            ],
                            [
                                -1336,
                                1872
                            ],
                            [
                                -1320,
                                1872
                            ],
                            [
                                -1320,
                                1952
                            ],
                            [
                                -1304,
                                1952
                            ],
                            [
                                -1304,
                                2016
                            ],
                            [
                                -1288,
                                2016
                            ],
                            [
                                -1288,
                                2032
                            ],
                            [
                                -1208,
                                2032
                            ],
                            [
                                -1208,
                                2048
                            ],
                            [
                                -1064,
                                2048
                            ],
                            [
                                -1064,
                                2064
                            ],
                            [
                                -920,
                                2064
                            ],
                            [
                                -920,
                                2080
                            ],
                            [
                                -904,
                                2080
                            ],
                            [
                                -904,
                                2096
                            ],
                            [
                                -808,
                                2096
                            ],
                            [
                                -808,
                                2112
                            ],
                            [
                                -736,
                                2112
                            ],
                            [
                                -728,
                                2112
                            ],
                            [
                                -728,
                                2128
                            ],
                            [
                                -456,
                                2128
                            ],
                            [
                                -456,
                                2032
                            ],
                            [
                                -424,
                                2032
                            ],
                            [
                                -424,
                                2440
                            ],
                            [
                                -1880,
                                2440
                            ],
                            [
                                -1880,
                                -528
                            ],
                            [
                                -872,
                                -528
                            ],
                            [
                                -872,
                                -352
                            ]
                        ]
                    }
                ],
                "name": "Mainland",
                "drop_norm": 1000,
                "quirks": [
                    [
                        -236,
                        -189,
                        24,
                        24,
                        "upgrade"
                    ],
                    [
                        -179,
                        -189,
                        24,
                        24,
                        "compound"
                    ],
                    [
                        350,
                        424,
                        30,
                        24,
                        "list_pvp"
                    ],
                    [
                        -200,
                        15,
                        24,
                        42,
                        "log",
                        "A relic from an old era"
                    ],
                    [
                        200,
                        15,
                        24,
                        42,
                        "log",
                        "A relic from an old era"
                    ],
                    [
                        1689,
                        -494,
                        20,
                        16,
                        "note",
                        "The Dark Forest. A curious place."
                    ],
                    [
                        681,
                        624,
                        20,
                        16,
                        "sign",
                        "The Mansion"
                    ],
                    [
                        65,
                        544,
                        20,
                        16,
                        "sign",
                        "Welcome to The New Town!"
                    ],
                    [
                        -150,
                        154,
                        20,
                        16,
                        "sign",
                        "Town Square"
                    ],
                    [
                        -365,
                        144,
                        20,
                        16,
                        "sign",
                        "Tavern"
                    ]
                ],
                "doors": [
                    [
                        -965,
                        -176,
                        24,
                        30,
                        "woffice",
                        0,
                        1
                    ],
                    [
                        536,
                        1665,
                        64,
                        32,
                        "tunnel",
                        0,
                        2
                    ],
                    [
                        168,
                        -149,
                        32,
                        40,
                        "bank",
                        0,
                        3
                    ],
                    [
                        160,
                        1370,
                        24,
                        32,
                        "cave",
                        0,
                        4
                    ],
                    [
                        232,
                        384,
                        24,
                        30,
                        "arena",
                        0,
                        6
                    ],
                    [
                        -472,
                        131,
                        24,
                        30,
                        "tavern",
                        0,
                        8
                    ],
                    [
                        616,
                        610,
                        32,
                        40,
                        "mansion",
                        0,
                        10
                    ],
                    [
                        1936,
                        -23,
                        24,
                        24,
                        "level1",
                        1,
                        11
                    ],
                    [
                        169,
                        -404,
                        24,
                        40,
                        "hut",
                        0,
                        14
                    ],
                    [
                        1600,
                        -547,
                        60,
                        40,
                        "halloween",
                        4,
                        15
                    ],
                    [
                        312,
                        -335,
                        32,
                        32,
                        "mtunnel",
                        0,
                        16
                    ],
                    [
                        967,
                        -584,
                        32,
                        32,
                        "mtunnel",
                        1,
                        17
                    ],
                    [
                        1472,
                        -434,
                        32,
                        32,
                        "mtunnel",
                        2,
                        18
                    ]
                ],
                "on_exit": [
                    "main",
                    0
                ],
                "spawns": [
                    [
                        0,
                        0,
                        0,
                        100
                    ],
                    [
                        -968,
                        -163
                    ],
                    [
                        535,
                        1677
                    ],
                    [
                        168,
                        -134
                    ],
                    [
                        160,
                        1381
                    ],
                    [
                        -87,
                        673
                    ],
                    [
                        232,
                        397
                    ],
                    [
                        294,
                        498
                    ],
                    [
                        -472,
                        149
                    ],
                    [
                        -85,
                        -389,
                        3
                    ],
                    [
                        616,
                        621
                    ],
                    [
                        1937,
                        -12
                    ],
                    [
                        -1104,
                        -924
                    ],
                    [
                        -551,
                        -375
                    ],
                    [
                        169,
                        -385
                    ],
                    [
                        1600,
                        -524
                    ],
                    [
                        294,
                        -347,
                        1
                    ],
                    [
                        968,
                        -577
                    ],
                    [
                        1471,
                        -424
                    ]
                ],
                "ref": {
                    "cx": [
                        -479.65,
                        -919.23,
                        -240.96,
                        -697.72
                    ],
                    "u_mid": [
                        -235,
                        -203
                    ],
                    "c_mid": [
                        -180,
                        -203
                    ]
                },
                "monsters": [
                    {
                        "count": 8,
                        "boundary": [
                            -1353,
                            -254,
                            -1052,
                            122
                        ],
                        "type": "crab",
                        "grow": true
                    },
                    {
                        "count": 6,
                        "boundary": [
                            -1353,
                            126,
                            -998,
                            718
                        ],
                        "type": "squig",
                        "grow": true
                    },
                    {
                        "count": 2,
                        "boundary": [
                            -1353,
                            126,
                            -998,
                            718
                        ],
                        "type": "squigtoad"
                    },
                    {
                        "count": 6,
                        "boundary": [
                            -1353,
                            720,
                            -896,
                            1516
                        ],
                        "type": "tortoise"
                    },
                    {
                        "count": 2,
                        "boundary": [
                            -1353,
                            720,
                            -896,
                            1516
                        ],
                        "type": "frog"
                    },
                    {
                        "count": 5,
                        "boundary": [
                            -1256,
                            1520,
                            -712,
                            2004
                        ],
                        "type": "crabx"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            -571,
                            323,
                            -571,
                            323
                        ],
                        "type": "target"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            -290,
                            280,
                            -290,
                            280
                        ],
                        "type": "target_a500"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            -270,
                            280,
                            -270,
                            280
                        ],
                        "type": "target_a750"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            -250,
                            280,
                            -250,
                            280
                        ],
                        "type": "target_r500"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            -230,
                            280,
                            -230,
                            280
                        ],
                        "type": "target_r750"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            -210,
                            280,
                            -210,
                            280
                        ],
                        "type": "target_ar900"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            -150,
                            400,
                            -150,
                            400
                        ],
                        "type": "target_ar500red"
                    },
                    {
                        "count": 9,
                        "boundary": [
                            -282,
                            702,
                            218,
                            872
                        ],
                        "type": "goo",
                        "grow": true
                    },
                    {
                        "count": 4,
                        "boundary": [
                            424,
                            1014,
                            668,
                            1104
                        ],
                        "type": "bee",
                        "grow": true
                    },
                    {
                        "count": 3,
                        "boundary": [
                            418,
                            994,
                            570,
                            1208
                        ],
                        "type": "bee",
                        "grow": true
                    },
                    {
                        "count": 5,
                        "boundary": [
                            52,
                            1426,
                            252,
                            1548
                        ],
                        "type": "bee",
                        "grow": true
                    },
                    {
                        "count": 3,
                        "boundary": [
                            448,
                            694,
                            592,
                            812
                        ],
                        "type": "bee",
                        "grow": true
                    },
                    {
                        "count": 2,
                        "boundary": [
                            678,
                            676,
                            796,
                            764
                        ],
                        "type": "bee",
                        "grow": true
                    },
                    {
                        "count": 5,
                        "boundary": [
                            -262,
                            1198,
                            20,
                            1522
                        ],
                        "type": "poisio",
                        "grow": true
                    },
                    {
                        "count": 6,
                        "boundary": [
                            696,
                            1498,
                            906,
                            1922
                        ],
                        "type": "croc",
                        "grow": true
                    },
                    {
                        "count": 6,
                        "boundary": [
                            376,
                            1696,
                            676,
                            1996
                        ],
                        "type": "armadillo",
                        "grow": true
                    },
                    {
                        "count": 6,
                        "boundary": [
                            -254,
                            1812,
                            90,
                            1990
                        ],
                        "type": "snake",
                        "grow": true
                    },
                    {
                        "count": 5,
                        "boundary": [
                            1100,
                            160,
                            1586,
                            336
                        ],
                        "type": "bigbird"
                    },
                    {
                        "count": 7,
                        "boundary": [
                            700,
                            -282,
                            1196,
                            -6
                        ],
                        "type": "spider",
                        "grow": true
                    },
                    {
                        "count": 6,
                        "boundary": [
                            1485,
                            -390,
                            1670,
                            54
                        ],
                        "type": "scorpion",
                        "grow": true
                    },
                    {
                        "boundaries": [
                            [
                                "main",
                                708,
                                -300,
                                1668,
                                -86
                            ],
                            [
                                "main",
                                378,
                                1686,
                                904,
                                1920
                            ],
                            [
                                "main",
                                -1358,
                                -118,
                                -1010,
                                1680
                            ],
                            [
                                "halloween",
                                -166,
                                453,
                                182,
                                808
                            ],
                            [
                                "cave",
                                -375,
                                -1287,
                                14,
                                -1041
                            ]
                        ],
                        "count": 1,
                        "type": "phoenix",
                        "stype": "randomrespawn"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            -460,
                            -908,
                            -260,
                            -710
                        ],
                        "type": "greenfairy"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            -460,
                            -908,
                            -260,
                            -710
                        ],
                        "type": "redfairy"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            -460,
                            -908,
                            -260,
                            -710
                        ],
                        "type": "bluefairy"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            -766,
                            1072,
                            -643,
                            1210
                        ],
                        "type": "puppy1"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            -766,
                            1072,
                            -643,
                            1210
                        ],
                        "type": "puppy2"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            -766,
                            1072,
                            -643,
                            1210
                        ],
                        "type": "puppy3"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            -766,
                            1072,
                            -643,
                            1210
                        ],
                        "type": "puppy4"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            -766,
                            1072,
                            -643,
                            1210
                        ],
                        "type": "kitty1"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            -766,
                            1072,
                            -643,
                            1210
                        ],
                        "type": "kitty2"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            -766,
                            1072,
                            -643,
                            1210
                        ],
                        "type": "kitty3"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            -766,
                            1072,
                            -643,
                            1210
                        ],
                        "type": "kitty4"
                    },
                    {
                        "count": 2,
                        "boundary": [
                            -118,
                            -317,
                            -5,
                            -247
                        ],
                        "type": "hen"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            -118,
                            -317,
                            -5,
                            -247
                        ],
                        "type": "rooster"
                    }
                ]
            },
            "resort_e": {
                "npcs": [],
                "drop_norm": 1000,
                "quirks": [
                    [
                        -8,
                        -92,
                        20,
                        24,
                        "the_lever"
                    ]
                ],
                "name": "Holo Resort",
                "key": "resort_e",
                "doors": [
                    [
                        -8,
                        120,
                        40,
                        24,
                        "tavern",
                        1,
                        0
                    ]
                ],
                "animatables": {
                    "the_lever": {
                        "y": -92,
                        "x": -8,
                        "position": "lever0"
                    }
                },
                "spawns": [
                    [
                        -8,
                        91,
                        3
                    ]
                ],
                "monsters": []
            },
            "dungeon0": {
                "npcs": [],
                "pvp": true,
                "no_bounds": true,
                "instance": true,
                "name": "Dungeon",
                "key": "dungeon0",
                "doors": [],
                "on_death": [
                    "dungeon0",
                    0
                ],
                "spawns": [
                    [
                        0,
                        0
                    ]
                ],
                "monsters": [
                    {
                        "count": 5,
                        "boundary": [
                            -50,
                            -50,
                            50,
                            50
                        ],
                        "type": "goo"
                    }
                ]
            },
            "cgallery": {
                "npcs": [],
                "pvp": true,
                "no_bounds": true,
                "instance": true,
                "name": "Cosmetics Gallery",
                "key": "cgallery",
                "doors": [],
                "spawns": [
                    [
                        0,
                        0
                    ]
                ],
                "monsters": []
            },
            "hut": {
                "npcs": [],
                "drop_norm": 1000,
                "name": "The Hut",
                "key": "jayson_smallHut",
                "doors": [
                    [
                        0,
                        17,
                        32,
                        24,
                        "main",
                        14,
                        0
                    ]
                ],
                "spawns": [
                    [
                        0,
                        -9,
                        3
                    ]
                ],
                "safe": true,
                "monsters": []
            },
            "d_a1": {
                "npcs": [],
                "quirks": [],
                "name": "Dungeon",
                "key": "jayson_pvpDungeon_a1",
                "doors": [
                    [
                        0.21,
                        79.75,
                        54.39,
                        66.5,
                        "d_b1",
                        1,
                        0
                    ],
                    [
                        254.82,
                        -916.88,
                        61.73,
                        99.0,
                        "d_a2",
                        0,
                        1
                    ]
                ],
                "world": "dungeon",
                "spawns": [
                    [
                        -2.2,
                        1.48,
                        3
                    ],
                    [
                        255.6,
                        -905.1
                    ]
                ],
                "monsters": []
            },
            "bank": {
                "npcs": [
                    {
                        "position": [
                            1,
                            -416
                        ],
                        "id": "goldnpc"
                    },
                    {
                        "position": [
                            -64,
                            -415
                        ],
                        "id": "items4"
                    },
                    {
                        "position": [
                            64,
                            -415
                        ],
                        "id": "items5"
                    },
                    {
                        "position": [
                            -128,
                            -415
                        ],
                        "id": "items6"
                    },
                    {
                        "position": [
                            128,
                            -415
                        ],
                        "id": "items7"
                    },
                    {
                        "position": [
                            -64,
                            -191
                        ],
                        "id": "items0"
                    },
                    {
                        "position": [
                            64,
                            -191
                        ],
                        "id": "items1"
                    },
                    {
                        "position": [
                            -128,
                            -191
                        ],
                        "id": "items2"
                    },
                    {
                        "position": [
                            128,
                            -191
                        ],
                        "id": "items3"
                    },
                    {
                        "position": [
                            155,
                            -105,
                            1
                        ],
                        "id": "rewards"
                    }
                ],
                "quirks": [
                    [
                        -40.34,
                        -448.85,
                        26.77,
                        42.69,
                        "log",
                        "It's time."
                    ]
                ],
                "mount": true,
                "name": "The Bank",
                "key": "jayson_bank0",
                "doors": [
                    [
                        0,
                        -8,
                        40,
                        20,
                        "main",
                        3,
                        0
                    ],
                    [
                        0.13,
                        -444.39,
                        34.3,
                        52.27,
                        "bank_b",
                        0,
                        1,
                        "ulocked"
                    ]
                ],
                "on_exit": [
                    "main",
                    3
                ],
                "spawns": [
                    [
                        0,
                        -37,
                        3
                    ],
                    [
                        0.75,
                        -435.79
                    ]
                ],
                "safe": true,
                "monsters": []
            },
            "tavern": {
                "npcs": [
                    {
                        "position": [
                            150,
                            -202
                        ],
                        "id": "tbartender"
                    },
                    {
                        "position": [
                            208,
                            -156
                        ],
                        "id": "bouncer"
                    }
                ],
                "drop_norm": 1000,
                "quirks": [
                    [
                        136,
                        -215,
                        32,
                        40,
                        "log",
                        "Impossible to reach. This is probably where they keep all the rare items."
                    ],
                    [
                        -103,
                        -229,
                        20,
                        16,
                        "tavern_info"
                    ]
                ],
                "name": "The Tavern",
                "key": "jayson_tavern02",
                "doors": [
                    [
                        1,
                        23,
                        48,
                        20,
                        "main",
                        8,
                        0
                    ],
                    [
                        272,
                        -220,
                        28,
                        36,
                        "resort_e",
                        0,
                        1
                    ]
                ],
                "spawns": [
                    [
                        0,
                        -8,
                        3
                    ],
                    [
                        272,
                        -200
                    ]
                ],
                "monsters": [],
                "machines": [
                    {
                        "set": "custom",
                        "y": -209,
                        "x": -169,
                        "frames": [
                            [
                                0,
                                256,
                                80,
                                44
                            ],
                            [
                                80,
                                256,
                                80,
                                44
                            ],
                            [
                                160,
                                256,
                                80,
                                44
                            ],
                            [
                                240,
                                256,
                                80,
                                44
                            ],
                            [
                                320,
                                256,
                                80,
                                44
                            ],
                            [
                                400,
                                256,
                                80,
                                44
                            ]
                        ],
                        "subframes": [
                            [
                                11,
                                301,
                                7,
                                14
                            ],
                            [
                                22,
                                301,
                                7,
                                14
                            ],
                            [
                                33,
                                301,
                                7,
                                14
                            ],
                            [
                                44,
                                301,
                                7,
                                14
                            ],
                            [
                                55,
                                301,
                                7,
                                14
                            ],
                            [
                                66,
                                301,
                                7,
                                14
                            ],
                            [
                                77,
                                301,
                                7,
                                14
                            ],
                            [
                                88,
                                301,
                                7,
                                14
                            ],
                            [
                                99,
                                301,
                                7,
                                14
                            ],
                            [
                                110,
                                301,
                                7,
                                14
                            ],
                            [
                                5,
                                310,
                                1,
                                1
                            ]
                        ],
                        "type": "dice"
                    },
                    {
                        "frames": [
                            [
                                0,
                                320,
                                32,
                                48
                            ],
                            [
                                32,
                                320,
                                32,
                                48
                            ],
                            [
                                64,
                                320,
                                32,
                                48
                            ]
                        ],
                        "x": -272,
                        "set": "custom",
                        "type": "slots",
                        "y": -216
                    },
                    {
                        "frames": [
                            [
                                0,
                                368,
                                32,
                                48
                            ],
                            [
                                32,
                                368,
                                32,
                                48
                            ],
                            [
                                64,
                                368,
                                32,
                                48
                            ]
                        ],
                        "x": -64,
                        "set": "custom",
                        "type": "wheel",
                        "y": -216
                    }
                ]
            },
            "ship0": {
                "npcs": [],
                "quirks": [],
                "name": "The Pirate Ship",
                "key": "jayson_PirateShip0",
                "doors": [],
                "spawns": [
                    [
                        0,
                        0
                    ]
                ],
                "monsters": [],
                "event": "pirateship"
            },
            "tunnel": {
                "npcs": [
                    {
                        "position": [
                            -264,
                            -96,
                            2
                        ],
                        "id": "gemmerchant"
                    }
                ],
                "drop_norm": 5000,
                "quirks": [
                    [
                        50,
                        -678,
                        20,
                        16,
                        "sign",
                        "Beware: Mole's Bite"
                    ],
                    [
                        64,
                        -1341,
                        24,
                        30,
                        "log",
                        "Gloomy"
                    ]
                ],
                "zones": [
                    {
                        "drop": "m1",
                        "type": "mining",
                        "polygon": [
                            [
                                296,
                                -16
                            ],
                            [
                                296,
                                -128
                            ],
                            [
                                256,
                                -128
                            ],
                            [
                                256,
                                -280
                            ],
                            [
                                272,
                                -280
                            ],
                            [
                                272,
                                -360
                            ],
                            [
                                264,
                                -360
                            ],
                            [
                                264,
                                -520
                            ],
                            [
                                296,
                                -520
                            ],
                            [
                                296,
                                -680
                            ],
                            [
                                120,
                                -680
                            ],
                            [
                                120,
                                -840
                            ],
                            [
                                280,
                                -840
                            ],
                            [
                                280,
                                -904
                            ],
                            [
                                272,
                                -904
                            ],
                            [
                                272,
                                -1224
                            ],
                            [
                                296,
                                -1224
                            ],
                            [
                                296,
                                -1288
                            ],
                            [
                                280,
                                -1288
                            ],
                            [
                                280,
                                -1304
                            ],
                            [
                                200,
                                -1304
                            ],
                            [
                                200,
                                -1328
                            ],
                            [
                                -64,
                                -1328
                            ],
                            [
                                -64,
                                -1320
                            ],
                            [
                                -200,
                                -1320
                            ],
                            [
                                -200,
                                -1328
                            ],
                            [
                                -288,
                                -1328
                            ],
                            [
                                -288,
                                -1160
                            ],
                            [
                                -248,
                                -1160
                            ],
                            [
                                -240,
                                -1160
                            ],
                            [
                                -240,
                                -952
                            ],
                            [
                                -288,
                                -952
                            ],
                            [
                                -288,
                                -840
                            ],
                            [
                                -152,
                                -840
                            ],
                            [
                                -144,
                                -840
                            ],
                            [
                                -144,
                                -808
                            ],
                            [
                                -112,
                                -808
                            ],
                            [
                                -112,
                                -680
                            ],
                            [
                                -288,
                                -680
                            ],
                            [
                                -288,
                                -504
                            ],
                            [
                                -272,
                                -504
                            ],
                            [
                                -272,
                                -168
                            ],
                            [
                                -288,
                                -168
                            ],
                            [
                                -288,
                                8
                            ],
                            [
                                -424,
                                8
                            ],
                            [
                                -424,
                                -1440
                            ],
                            [
                                384,
                                -1440
                            ],
                            [
                                384,
                                -16
                            ]
                        ]
                    }
                ],
                "name": "Mining Tunnel",
                "key": "jayson_miningtunnel_new",
                "doors": [
                    [
                        2,
                        18,
                        64,
                        32,
                        "main",
                        2,
                        0
                    ]
                ],
                "spawns": [
                    [
                        0,
                        -16,
                        3
                    ]
                ],
                "monsters": [
                    {
                        "count": 8,
                        "boundary": [
                            -210,
                            -1291,
                            238,
                            -853
                        ],
                        "type": "mole"
                    },
                    {
                        "count": 7,
                        "boundary": [
                            -238,
                            -638,
                            207,
                            -21
                        ],
                        "type": "mole"
                    }
                ]
            },
            "level2e": {
                "npcs": [],
                "drop_norm": 5000,
                "quirks": [],
                "name": "Underground [East]",
                "key": "jayson_underground_level2_eastv2",
                "doors": [
                    [
                        -7,
                        502,
                        40,
                        140,
                        "level2s",
                        2,
                        0
                    ],
                    [
                        -23,
                        40,
                        40,
                        140,
                        "level2",
                        3,
                        1
                    ]
                ],
                "spawns": [
                    [
                        18.5,
                        459.5,
                        2
                    ],
                    [
                        3.5,
                        0,
                        2
                    ]
                ],
                "monsters": [
                    {
                        "count": 3,
                        "boundary": [
                            344,
                            -96,
                            608,
                            328
                        ],
                        "type": "pinkgoblin",
                        "polygon": [
                            [
                                384,
                                -96
                            ],
                            [
                                464,
                                -96
                            ],
                            [
                                464,
                                -64
                            ],
                            [
                                608,
                                -64
                            ],
                            [
                                608,
                                144
                            ],
                            [
                                568,
                                144
                            ],
                            [
                                568,
                                304
                            ],
                            [
                                464,
                                304
                            ],
                            [
                                464,
                                328
                            ],
                            [
                                368,
                                328
                            ],
                            [
                                368,
                                208
                            ],
                            [
                                344,
                                208
                            ],
                            [
                                344,
                                160
                            ],
                            [
                                384,
                                160
                            ]
                        ]
                    }
                ],
                "unlist": true
            },
            "d_g": {
                "npcs": [],
                "quirks": [
                    [
                        -320.64,
                        -213.45,
                        67.59,
                        82.61,
                        "log",
                        "The passage is blocked"
                    ]
                ],
                "name": "Dungeon [Gateway]",
                "key": "jayson_pvpDungeon_gateway",
                "doors": [
                    [
                        0.14,
                        47.88,
                        46.19,
                        36.62,
                        "d_e",
                        1,
                        0
                    ],
                    [
                        -320.6,
                        -39.93,
                        64.22,
                        59.29,
                        "d_b1",
                        0,
                        1
                    ]
                ],
                "world": "dungeon",
                "spawns": [
                    [
                        0.03,
                        1.13,
                        3
                    ],
                    [
                        -319.17,
                        -102.09,
                        3
                    ]
                ],
                "monsters": []
            },
            "d_e": {
                "fx": "storm",
                "safe": true,
                "npcs": [],
                "weather": "rain",
                "key": "jayson_pvpDungeon_entrance",
                "world": "dungeon",
                "name": "Dungeon [Entrance]",
                "quirks": [],
                "doors": [
                    [
                        -0.15,
                        -299.63,
                        35.39,
                        51.17,
                        "d_g",
                        0,
                        1
                    ]
                ],
                "spawns": [
                    [
                        -9.2,
                        -0.91
                    ],
                    [
                        0.08,
                        -291.85
                    ]
                ],
                "monsters": []
            },
            "abtesting": {
                "npcs": [],
                "pvp": true,
                "instance": true,
                "name": "A/B Testing",
                "key": "jayson_vs_arena",
                "doors": [],
                "on_death": [
                    "abtesting",
                    1
                ],
                "spawns": [
                    [
                        0,
                        0
                    ],
                    [
                        0,
                        -232
                    ],
                    [
                        -832,
                        0,
                        2,
                        160
                    ],
                    [
                        832,
                        0,
                        1,
                        160
                    ]
                ],
                "monsters": []
            },
            "halloween": {
                "npcs": [
                    {
                        "position": [
                            201,
                            -180
                        ],
                        "name": "Fancy Pots",
                        "id": "fancypots"
                    },
                    {
                        "position": [
                            -97,
                            -330
                        ],
                        "name": "Transporter",
                        "id": "transporter"
                    },
                    {
                        "position": [
                            858,
                            -160
                        ],
                        "id": "witch"
                    },
                    {
                        "position": [
                            201,
                            -160
                        ],
                        "id": "citizen11"
                    },
                    {
                        "position": [
                            201,
                            -160
                        ],
                        "id": "citizen12"
                    },
                    {
                        "position": [
                            201,
                            -160
                        ],
                        "id": "citizen13"
                    }
                ],
                "drop_norm": 4000,
                "quirks": [
                    [
                        -228,
                        -178,
                        32,
                        40,
                        "log",
                        "Locked but there are noises coming from inside"
                    ],
                    [
                        331,
                        -210,
                        32,
                        40,
                        "log",
                        "Locked"
                    ],
                    [
                        128,
                        -251,
                        20,
                        16,
                        "sign",
                        "Beware! Don't fall down!"
                    ]
                ],
                "name": "Spooky Forest",
                "key": "jayson_SpookyForestV2.2",
                "doors": [
                    [
                        784,
                        -1085,
                        80,
                        40,
                        "spookytown",
                        1,
                        2
                    ],
                    [
                        -1071,
                        -1496,
                        40,
                        40,
                        "level1",
                        2,
                        3
                    ],
                    [
                        1212,
                        150,
                        200,
                        36,
                        "main",
                        15,
                        4
                    ]
                ],
                "spawns": [
                    [
                        0,
                        0
                    ],
                    [
                        -38,
                        -283,
                        2
                    ],
                    [
                        784,
                        -1060
                    ],
                    [
                        -1071,
                        -1485
                    ],
                    [
                        1212,
                        101,
                        3
                    ]
                ],
                "monsters": [
                    {
                        "count": 2,
                        "boundary": [
                            -654,
                            -384,
                            -525,
                            -287
                        ],
                        "type": "osnake"
                    },
                    {
                        "count": 4,
                        "boundary": [
                            -620,
                            -986,
                            -356,
                            -431
                        ],
                        "type": "osnake"
                    },
                    {
                        "count": 9,
                        "boundary": [
                            -720,
                            -820,
                            -418,
                            -203
                        ],
                        "type": "snake",
                        "grow": true
                    },
                    {
                        "count": 1,
                        "boundary": [
                            -720,
                            -820,
                            -418,
                            -203
                        ],
                        "type": "greenjr"
                    },
                    {
                        "count": 8,
                        "boundary": [
                            -166,
                            453,
                            182,
                            808
                        ],
                        "type": "minimush",
                        "grow": true
                    },
                    {
                        "count": 6,
                        "boundary": [
                            -671,
                            571,
                            -300,
                            800
                        ],
                        "type": "xscorpion"
                    },
                    {
                        "count": 6,
                        "boundary": [
                            141,
                            -792,
                            552,
                            -702
                        ],
                        "type": "snake",
                        "grow": true
                    },
                    {
                        "count": 2,
                        "boundary": [
                            141,
                            -792,
                            552,
                            -702
                        ],
                        "type": "osnake"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            141,
                            -792,
                            552,
                            -702
                        ],
                        "type": "tinyp"
                    },
                    {
                        "count": 5,
                        "boundary": [
                            284,
                            -1351,
                            446,
                            -1189
                        ],
                        "type": "ghost"
                    },
                    {
                        "count": 5,
                        "boundary": [
                            54,
                            -1277,
                            237,
                            -1078
                        ],
                        "type": "ghost"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            -664,
                            -1808,
                            -147,
                            -1477
                        ],
                        "type": "fvampire"
                    },
                    {
                        "count": 9,
                        "boundary": [
                            -664,
                            -1808,
                            -147,
                            -1477
                        ],
                        "type": "ghost"
                    }
                ]
            },
            "old_bank": {
                "npcs": [
                    {
                        "position": [
                            57,
                            0
                        ],
                        "id": "goldnpc"
                    },
                    {
                        "position": [
                            -24,
                            49
                        ],
                        "id": "items0"
                    },
                    {
                        "position": [
                            128,
                            49
                        ],
                        "id": "items1"
                    }
                ],
                "ignore": true,
                "quirks": [
                    [
                        56,
                        -52,
                        16,
                        34,
                        "log",
                        "It's time."
                    ]
                ],
                "mount": true,
                "name": "The Bank",
                "key": "bank0",
                "doors": [
                    [
                        56,
                        187,
                        64,
                        40,
                        "main",
                        5,
                        0
                    ]
                ],
                "spawns": [
                    [
                        56,
                        129,
                        3
                    ]
                ],
                "monsters": []
            },
            "level1": {
                "npcs": [],
                "drop_norm": 5000,
                "quirks": [],
                "name": "Underground [Entrance]",
                "key": "jayson_underground_level1v2",
                "doors": [
                    [
                        0,
                        -4,
                        20,
                        50,
                        "main",
                        11,
                        1
                    ],
                    [
                        -408,
                        -275,
                        20,
                        50,
                        "halloween",
                        3,
                        2
                    ],
                    [
                        -865,
                        77,
                        20,
                        50,
                        "cave",
                        1,
                        3
                    ],
                    [
                        -313,
                        544,
                        24,
                        24,
                        "level2",
                        1,
                        4
                    ]
                ],
                "spawns": [
                    [
                        149,
                        87,
                        1
                    ],
                    [
                        0,
                        9
                    ],
                    [
                        -408,
                        -258,
                        3
                    ],
                    [
                        -863,
                        89,
                        3
                    ],
                    [
                        -327,
                        511,
                        3
                    ]
                ],
                "monsters": [
                    {
                        "count": 5,
                        "boundary": [
                            -86,
                            17,
                            64,
                            212
                        ],
                        "type": "prat"
                    },
                    {
                        "count": 5,
                        "boundary": [
                            -308,
                            629,
                            0,
                            762
                        ],
                        "type": "prat"
                    }
                ]
            },
            "level2": {
                "npcs": [
                    {
                        "position": [
                            -133,
                            -187
                        ],
                        "id": "thief"
                    }
                ],
                "drop_norm": 5000,
                "quirks": [],
                "name": "Underground [Passing]",
                "key": "jayson_underground_level2.2",
                "doors": [
                    [
                        40,
                        219,
                        24,
                        24,
                        "level3",
                        0,
                        0
                    ],
                    [
                        0,
                        -20,
                        20,
                        50,
                        "level1",
                        4,
                        1
                    ],
                    [
                        -87,
                        300,
                        80,
                        40,
                        "level2s",
                        0,
                        2
                    ],
                    [
                        247,
                        193,
                        40,
                        110,
                        "level2e",
                        1,
                        3
                    ],
                    [
                        -327,
                        -45,
                        40,
                        110,
                        "level2w",
                        0,
                        4
                    ],
                    [
                        79,
                        41,
                        20,
                        50,
                        "spookytown",
                        2,
                        5
                    ],
                    [
                        -280.14,
                        -260.37,
                        34.84,
                        51.33,
                        "bank_u",
                        0,
                        6,
                        "ulocked",
                        "complicated"
                    ]
                ],
                "spawns": [
                    [
                        39,
                        177,
                        3
                    ],
                    [
                        1,
                        -5
                    ],
                    [
                        -87,
                        256,
                        3
                    ],
                    [
                        216,
                        170,
                        1
                    ],
                    [
                        -303,
                        -69,
                        2
                    ],
                    [
                        75,
                        56
                    ],
                    [
                        -279.95,
                        -249.15
                    ]
                ],
                "monsters": [],
                "unlist": true
            },
            "level3": {
                "npcs": [],
                "drop_norm": 5000,
                "quirks": [],
                "name": "Underground [Deeps]",
                "key": "jayson_underground_level3v2",
                "doors": [
                    [
                        0,
                        -5,
                        20,
                        50,
                        "level2",
                        0,
                        0
                    ],
                    [
                        -8,
                        -409,
                        24,
                        24,
                        "level4",
                        0,
                        1
                    ]
                ],
                "spawns": [
                    [
                        0,
                        10
                    ],
                    [
                        -28,
                        -438,
                        2
                    ]
                ],
                "monsters": [
                    {
                        "count": 3,
                        "boundary": [
                            -451.21,
                            -397.41,
                            -240.59,
                            -65.16
                        ],
                        "type": "mummy"
                    },
                    {
                        "count": 4,
                        "boundary": [
                            131.97,
                            -368.95,
                            398.99,
                            -56.88
                        ],
                        "type": "bbpompom"
                    }
                ],
                "unlist": true
            },
            "level4": {
                "npcs": [],
                "drop_norm": 5000,
                "quirks": [],
                "name": "Underground [Abyss]",
                "key": "jayson_underground_level4v2",
                "doors": [
                    [
                        0,
                        -3,
                        20,
                        50,
                        "level3",
                        1,
                        0
                    ]
                ],
                "spawns": [
                    [
                        0,
                        14
                    ],
                    [
                        291,
                        -140
                    ]
                ],
                "monsters": [
                    {
                        "count": 6,
                        "boundary": [
                            -366.74,
                            -395.74,
                            -109.59,
                            -152.68
                        ],
                        "type": "cgoo"
                    },
                    {
                        "count": 3,
                        "boundary": [
                            119.92,
                            -4.27,
                            378.46,
                            338.17
                        ],
                        "type": "mummy"
                    }
                ],
                "unlist": true
            },
            "cyberland": {
                "npcs": [],
                "drop_norm": 1000,
                "quirks": [
                    [
                        0,
                        -100,
                        80,
                        30,
                        "mainframe"
                    ]
                ],
                "name": "Cyberland",
                "key": "cyberland",
                "doors": [
                    [
                        224,
                        -162,
                        16,
                        16,
                        "main",
                        9,
                        1
                    ]
                ],
                "spawns": [
                    [
                        0,
                        0,
                        3
                    ],
                    [
                        224,
                        -162,
                        3
                    ]
                ],
                "monsters": [
                    {
                        "count": 1,
                        "boundary": [
                            -16,
                            -88,
                            -17,
                            -89
                        ],
                        "type": "mechagnome"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            -6,
                            -96,
                            -7,
                            -95
                        ],
                        "type": "mechagnome"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            8,
                            -96,
                            7,
                            -95
                        ],
                        "type": "mechagnome"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            18,
                            -88,
                            17,
                            -89
                        ],
                        "type": "mechagnome"
                    }
                ],
                "irregular": true
            },
            "old_main": {
                "ignore": true,
                "name": "Old Town",
                "npcs": [
                    {
                        "position": [
                            10,
                            10
                        ],
                        "name": "Pots",
                        "id": "pots"
                    },
                    {
                        "position": [
                            112,
                            -152
                        ],
                        "name": "Come Scroll Away",
                        "id": "scrolls"
                    },
                    {
                        "position": [
                            4,
                            -155
                        ],
                        "name": "Shrine of Gods",
                        "id": "shrine"
                    },
                    {
                        "position": [
                            46,
                            -155
                        ],
                        "name": "Shrine of Combinations",
                        "id": "compound"
                    },
                    {
                        "position": [
                            -20,
                            10
                        ],
                        "name": "Armorz",
                        "id": "armors"
                    },
                    {
                        "position": [
                            40,
                            10
                        ],
                        "name": "Weaponz",
                        "id": "weapons"
                    },
                    {
                        "position": [
                            180,
                            -210
                        ],
                        "name": "Transporter",
                        "id": "transporter"
                    }
                ],
                "key": "main5",
                "doors": [],
                "spawns": [
                    [
                        100,
                        100
                    ]
                ],
                "monsters": [
                    {
                        "count": 10,
                        "position": [
                            -400,
                            0
                        ],
                        "radius": 220,
                        "type": "goo"
                    },
                    {
                        "count": 6,
                        "position": [
                            -300,
                            100
                        ],
                        "radius": 180,
                        "type": "spider"
                    },
                    {
                        "count": 12,
                        "position": [
                            -100,
                            100
                        ],
                        "radius": 180,
                        "type": "scorpion"
                    },
                    {
                        "count": 5,
                        "position": [
                            200,
                            100
                        ],
                        "radius": 180,
                        "type": "bat"
                    },
                    {
                        "count": 4,
                        "position": [
                            300,
                            -100
                        ],
                        "radius": 160,
                        "type": "dknight2"
                    },
                    {
                        "count": 1,
                        "position": [
                            0,
                            0
                        ],
                        "radius": 1200,
                        "type": "phoenix"
                    }
                ]
            },
            "crypt": {
                "npcs": [],
                "instance": true,
                "name": "The Crypt [Cave]",
                "key": "jayson_instance_dungeon1",
                "doors": [
                    [
                        -1.54,
                        105.6,
                        126.56,
                        56.96,
                        "cave",
                        2,
                        0
                    ]
                ],
                "on_death": [
                    "cave",
                    2
                ],
                "on_exit": [
                    "cave",
                    2
                ],
                "spawns": [
                    [
                        0,
                        0
                    ]
                ],
                "monsters": [
                    {
                        "count": 1,
                        "boundary": [
                            2243.92,
                            325.27,
                            2689.64,
                            505.06
                        ],
                        "type": "a1"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            726.81,
                            -1076.19,
                            726.81,
                            -1076.19
                        ],
                        "type": "a7",
                        "roam": true
                    },
                    {
                        "count": 1,
                        "boundary": [
                            1790.79,
                            -1480.39,
                            1790.79,
                            -1480.39
                        ],
                        "type": "a3",
                        "roam": true
                    },
                    {
                        "count": 1,
                        "boundary": [
                            2746.91,
                            -1734.86,
                            2746.91,
                            -1734.86
                        ],
                        "type": "a6",
                        "roam": true
                    },
                    {
                        "count": 1,
                        "boundary": [
                            2736.38,
                            -1090.91,
                            2736.38,
                            -1090.91
                        ],
                        "type": "a5",
                        "roam": true
                    },
                    {
                        "count": 1,
                        "boundary": [
                            1109.81,
                            -632.68,
                            1109.81,
                            -632.68
                        ],
                        "type": "a2",
                        "roam": true
                    },
                    {
                        "count": 1,
                        "boundary": [
                            2745.11,
                            -655.82,
                            2745.11,
                            -655.82
                        ],
                        "type": "a4",
                        "roam": true
                    },
                    {
                        "count": 1,
                        "boundary": [
                            2042.91,
                            -883.27,
                            2042.91,
                            -883.27
                        ],
                        "type": "a8",
                        "roam": true
                    },
                    {
                        "count": 7,
                        "boundary": [
                            903.57,
                            -465.05,
                            1479.2,
                            -304.03
                        ],
                        "type": "vbat"
                    }
                ]
            },
            "cave": {
                "npcs": [],
                "drop_norm": 4500,
                "quirks": [
                    [
                        -192,
                        -1309,
                        48,
                        64,
                        "log",
                        "Is this a gateway?"
                    ],
                    [
                        -193.41,
                        -1295.83,
                        0,
                        0,
                        "info",
                        "crypt"
                    ]
                ],
                "name": "Cave of Darkness",
                "key": "jayson_cave02",
                "doors": [
                    [
                        0,
                        33,
                        36,
                        20,
                        "main",
                        4,
                        0
                    ],
                    [
                        1880,
                        -1086,
                        32,
                        32,
                        "level1",
                        3,
                        1
                    ],
                    [
                        -192.22,
                        -1308.2,
                        50.35,
                        56.23,
                        "crypt",
                        0,
                        2,
                        "key",
                        "cryptkey"
                    ]
                ],
                "spawns": [
                    [
                        0,
                        0,
                        3
                    ],
                    [
                        1877,
                        -1078
                    ],
                    [
                        -193.41,
                        -1295.83
                    ]
                ],
                "monsters": [
                    {
                        "count": 6,
                        "boundary": [
                            -396,
                            -594,
                            8,
                            -328
                        ],
                        "type": "bat"
                    },
                    {
                        "count": 7,
                        "boundary": [
                            182,
                            -1282,
                            465,
                            -932
                        ],
                        "type": "bat"
                    },
                    {
                        "count": 8,
                        "boundary": [
                            1018,
                            -940,
                            1385,
                            -624
                        ],
                        "type": "bat"
                    },
                    {
                        "count": 5,
                        "boundary": [
                            1066,
                            -132,
                            1420,
                            78
                        ],
                        "type": "bat"
                    },
                    {
                        "count": 2,
                        "boundary": [
                            964,
                            11,
                            1252,
                            107
                        ],
                        "type": "bat"
                    },
                    {
                        "boundaries": [
                            [
                                "cave",
                                -367,
                                -1296,
                                -14,
                                -1057
                            ],
                            [
                                "cave",
                                1068,
                                -123,
                                1420,
                                78
                            ]
                        ],
                        "count": 1,
                        "type": "mvampire",
                        "stype": "randomrespawn"
                    }
                ]
            },
            "original_main": {
                "pvp": false,
                "on_death": [
                    "original_main",
                    4
                ],
                "old_monsters": [
                    {
                        "count": 12,
                        "boundary": [
                            -84,
                            95,
                            255,
                            234
                        ],
                        "type": "goo"
                    },
                    {
                        "count": 7,
                        "boundary": [
                            279,
                            201,
                            718,
                            333
                        ],
                        "type": "squig"
                    },
                    {
                        "count": 10,
                        "boundary": [
                            464,
                            37,
                            744,
                            190
                        ],
                        "type": "bee"
                    },
                    {
                        "count": 6,
                        "boundary": [
                            -20,
                            295,
                            221,
                            529
                        ],
                        "type": "armadillo"
                    },
                    {
                        "count": 4,
                        "boundary": [
                            50,
                            473,
                            534,
                            676
                        ],
                        "type": "squigtoad"
                    },
                    {
                        "count": 10,
                        "boundary": [
                            440,
                            377,
                            752,
                            567
                        ],
                        "type": "bee"
                    },
                    {
                        "count": 9,
                        "boundary": [
                            1045,
                            423,
                            1371,
                            713
                        ],
                        "type": "spider"
                    },
                    {
                        "count": 9,
                        "boundary": [
                            997,
                            733,
                            1374,
                            911
                        ],
                        "type": "scorpion"
                    },
                    {
                        "count": 6,
                        "boundary": [
                            820,
                            165,
                            1375,
                            465
                        ],
                        "type": "croc"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            690,
                            745,
                            895,
                            775
                        ],
                        "type": "greenfairy"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            690,
                            745,
                            742,
                            850
                        ],
                        "type": "redfairy"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            840,
                            745,
                            895,
                            850
                        ],
                        "type": "bluefairy"
                    }
                ],
                "npcs": [
                    {
                        "position": [
                            319,
                            -178
                        ],
                        "name": "Shrine of Gods",
                        "id": "shrine"
                    },
                    {
                        "position": [
                            362,
                            -178
                        ],
                        "name": "Shrine of Combinations",
                        "id": "compound"
                    },
                    {
                        "position": [
                            112,
                            40
                        ],
                        "name": "Pots",
                        "id": "pots"
                    },
                    {
                        "position": [
                            163,
                            -197
                        ],
                        "name": "Exchanger",
                        "id": "exchange"
                    },
                    {
                        "position": [
                            241,
                            -215
                        ],
                        "name": "Come Scroll Away",
                        "id": "scrolls"
                    },
                    {
                        "position": [
                            -106,
                            -211
                        ],
                        "name": "Armorz",
                        "id": "armors"
                    },
                    {
                        "position": [
                            61,
                            -220
                        ],
                        "name": "Weaponz",
                        "id": "weapons"
                    },
                    {
                        "position": [
                            1352,
                            64
                        ],
                        "name": "Lich",
                        "id": "lichteaser"
                    },
                    {
                        "position": [
                            792,
                            800
                        ],
                        "name": "Zen Girl",
                        "id": "appearance"
                    },
                    {
                        "positions": [
                            [
                                -375,
                                -104
                            ],
                            [
                                -482,
                                -10,
                                2
                            ]
                        ],
                        "id": "pvp"
                    },
                    {
                        "position": [
                            409,
                            36
                        ],
                        "name": "Transporter",
                        "id": "transporter"
                    }
                ],
                "key": "main",
                "name": "Town",
                "instance": true,
                "ignore": true,
                "drop_norm": 700,
                "quirks": [
                    [
                        664,
                        -55,
                        20,
                        16,
                        "sign",
                        "An Offshore Bank"
                    ]
                ],
                "doors": [
                    [
                        -273,
                        -25,
                        24,
                        30,
                        "batcave",
                        0,
                        1
                    ],
                    [
                        -374,
                        -113,
                        24,
                        30,
                        "arena",
                        0,
                        2
                    ],
                    [
                        600,
                        -69,
                        32,
                        40,
                        "bank",
                        0,
                        5
                    ]
                ],
                "spawns": [
                    [
                        41,
                        -71
                    ],
                    [
                        -271,
                        -9,
                        0
                    ],
                    [
                        -376,
                        -99,
                        0
                    ],
                    [
                        -460,
                        63,
                        2
                    ],
                    [
                        224,
                        48
                    ],
                    [
                        600,
                        -42
                    ],
                    [
                        408,
                        62,
                        3
                    ]
                ]
            },
            "duelland": {
                "pvp": true,
                "npcs": [],
                "key": "jayson_duel_arena",
                "loss": false,
                "name": "Duelland",
                "irregular": true,
                "instance": true,
                "drop_norm": 1000,
                "quirks": [],
                "doors": [
                    [
                        0,
                        16,
                        32,
                        20,
                        "main",
                        7,
                        0
                    ]
                ],
                "spawns": [
                    [
                        0,
                        0,
                        3
                    ],
                    [
                        -712,
                        -800,
                        0,
                        40
                    ],
                    [
                        712,
                        -800,
                        0,
                        40
                    ]
                ],
                "monsters": []
            },
            "spookytown": {
                "npcs": [
                    {
                        "position": [
                            300,
                            -700
                        ],
                        "boundary": [
                            281,
                            -836,
                            508,
                            -570
                        ],
                        "id": "citizen15"
                    },
                    {
                        "position": [
                            0,
                            0
                        ],
                        "boundary": [
                            -283,
                            -222,
                            289,
                            234
                        ],
                        "id": "citizen14"
                    }
                ],
                "drop_norm": 4000,
                "quirks": [
                    [
                        -63,
                        -44,
                        30,
                        24,
                        "invisible_statue"
                    ]
                ],
                "name": "Spooky Town",
                "key": "jayson_holloweenmap2",
                "doors": [
                    [
                        34,
                        1449,
                        80,
                        30,
                        "halloween",
                        2,
                        1
                    ],
                    [
                        240,
                        -181,
                        48,
                        32,
                        "level2",
                        5,
                        2
                    ]
                ],
                "spawns": [
                    [
                        0,
                        0
                    ],
                    [
                        32,
                        1404,
                        3
                    ],
                    [
                        192,
                        -194,
                        1
                    ]
                ],
                "ref": {
                    "poof": {
                        "y": -44,
                        "map": "spookytown",
                        "x": -63,
                        "in": "spookytown"
                    }
                },
                "monsters": [
                    {
                        "count": 9,
                        "boundary": [
                            31,
                            -1571,
                            480,
                            -1293
                        ],
                        "type": "mummy",
                        "rage": [
                            -124,
                            -1631,
                            614,
                            -1130
                        ]
                    },
                    {
                        "count": 5,
                        "boundary": [
                            286,
                            -842,
                            544,
                            -562
                        ],
                        "type": "booboo",
                        "rage": [
                            286,
                            -842,
                            544,
                            -562
                        ]
                    },
                    {
                        "count": 4,
                        "boundary": [
                            501,
                            61,
                            852,
                            197
                        ],
                        "type": "stoneworm"
                    },
                    {
                        "count": 4,
                        "boundary": [
                            773,
                            -198,
                            1216,
                            -68
                        ],
                        "type": "stoneworm"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            -970,
                            -413,
                            -597,
                            -189
                        ],
                        "type": "jr"
                    }
                ]
            },
            "test": {
                "npcs": [
                    {
                        "position": [
                            -50,
                            -50
                        ],
                        "name": "Transporter",
                        "id": "transporter"
                    }
                ],
                "irregular": true,
                "no_bounds": true,
                "name": "Test",
                "key": "test",
                "doors": [],
                "spawns": [
                    [
                        0,
                        0
                    ]
                ],
                "monsters": []
            },
            "bank_u": {
                "npcs": [],
                "quirks": [],
                "mount": true,
                "name": "The Bank [Underground]",
                "key": "jayson_theBank2",
                "doors": [
                    [
                        -479.82,
                        -36.54,
                        31,
                        49.64,
                        "level2",
                        6,
                        0,
                        "ulocked",
                        "complicated"
                    ],
                    [
                        0.22,
                        -50.06,
                        64.89,
                        63.09,
                        "bank_b",
                        1,
                        1,
                        "ulocked"
                    ]
                ],
                "on_exit": [
                    "level2",
                    6
                ],
                "spawns": [
                    [
                        -479.47,
                        -25.02
                    ],
                    [
                        -0.4,
                        -41.24
                    ]
                ],
                "safe": true,
                "monsters": []
            },
            "shellsisland": {
                "name": "New Town!",
                "instance": true,
                "npcs": [
                    {
                        "position": [
                            -190,
                            26
                        ],
                        "id": "wizardrepeater"
                    }
                ],
                "drop_norm": 1000,
                "key": "jayson_shells_island01",
                "doors": [],
                "spawns": [
                    [
                        0,
                        0
                    ]
                ],
                "monsters": [
                    {
                        "count": 1,
                        "boundary": [
                            123,
                            -235,
                            270,
                            -176
                        ],
                        "type": "kitty1"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            123,
                            -235,
                            270,
                            -176
                        ],
                        "type": "kitty2"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            123,
                            -235,
                            270,
                            -176
                        ],
                        "type": "kitty3"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            123,
                            -235,
                            270,
                            -176
                        ],
                        "type": "kitty4"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            211,
                            -234,
                            271,
                            -100
                        ],
                        "type": "puppy1"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            211,
                            -234,
                            271,
                            -100
                        ],
                        "type": "puppy2"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            211,
                            -234,
                            271,
                            -100
                        ],
                        "type": "puppy3"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            211,
                            -234,
                            271,
                            -100
                        ],
                        "type": "puppy4"
                    }
                ]
            },
            "goobrawl": {
                "npcs": [],
                "instance": true,
                "name": "Goo Brawl!",
                "key": "jayson_gooisland",
                "doors": [],
                "on_death": [
                    "goobrawl",
                    0
                ],
                "spawns": [
                    [
                        0,
                        0
                    ]
                ],
                "monsters": [
                    {
                        "count": 5,
                        "boundary": [
                            -50,
                            -50,
                            50,
                            50
                        ],
                        "type": "goo"
                    }
                ]
            },
            "level2s": {
                "npcs": [],
                "drop_norm": 5000,
                "quirks": [],
                "name": "Underground [South]",
                "key": "jayson_underground_level2_southv2",
                "doors": [
                    [
                        0,
                        -20,
                        40,
                        40,
                        "level2",
                        2,
                        0
                    ],
                    [
                        -240,
                        668,
                        20,
                        50,
                        "desertland",
                        2,
                        1
                    ],
                    [
                        406,
                        580,
                        40,
                        140,
                        "level2e",
                        0,
                        2
                    ]
                ],
                "spawns": [
                    [
                        0,
                        -14
                    ],
                    [
                        -240,
                        681
                    ],
                    [
                        383,
                        539,
                        1
                    ]
                ],
                "monsters": [
                    {
                        "count": 8,
                        "boundary": [
                            -52.5,
                            359.33,
                            120.29,
                            646.25
                        ],
                        "type": "cgoo"
                    }
                ],
                "unlist": true
            },
            "level2w": {
                "npcs": [],
                "drop_norm": 5000,
                "quirks": [],
                "name": "Underground [West]",
                "key": "jayson_underground_level2_westv2",
                "doors": [
                    [
                        39,
                        53,
                        40,
                        140,
                        "level2",
                        4,
                        0
                    ],
                    [
                        -96,
                        -197,
                        60,
                        40,
                        "level2n",
                        0,
                        1
                    ],
                    [
                        -528,
                        -197,
                        60,
                        40,
                        "level2n",
                        1,
                        2
                    ]
                ],
                "spawns": [
                    [
                        16,
                        9,
                        1
                    ],
                    [
                        -96,
                        -184
                    ],
                    [
                        -528,
                        -184
                    ]
                ],
                "monsters": [
                    {
                        "count": 5,
                        "boundary": [
                            -447,
                            9,
                            -208,
                            323
                        ],
                        "type": "oneeye"
                    }
                ],
                "unlist": true
            },
            "mtunnel": {
                "npcs": [],
                "drop_norm": 4500,
                "quirks": [],
                "name": "Underground [Tunnel]",
                "key": "jayson_mainlandTunnel",
                "doors": [
                    [
                        0,
                        -3,
                        24,
                        60,
                        "main",
                        16,
                        0
                    ],
                    [
                        656,
                        -240,
                        24,
                        60,
                        "main",
                        17,
                        1
                    ],
                    [
                        1168,
                        -65,
                        24,
                        60,
                        "main",
                        18,
                        2
                    ]
                ],
                "spawns": [
                    [
                        0,
                        8
                    ],
                    [
                        671,
                        -225,
                        3
                    ],
                    [
                        1169,
                        -55,
                        3
                    ]
                ],
                "monsters": []
            },
            "level2n": {
                "npcs": [],
                "drop_norm": 5000,
                "quirks": [],
                "name": "Underground [North]",
                "key": "jayson_underground_level2_northv2",
                "doors": [
                    [
                        0,
                        38,
                        120,
                        45,
                        "level2w",
                        1,
                        0
                    ],
                    [
                        -416,
                        38,
                        60,
                        45,
                        "level2w",
                        2,
                        1
                    ],
                    [
                        -112,
                        -691,
                        20,
                        40,
                        "winterland",
                        4,
                        2
                    ]
                ],
                "spawns": [
                    [
                        0,
                        0,
                        3
                    ],
                    [
                        -416,
                        0,
                        3
                    ],
                    [
                        -112,
                        -676
                    ]
                ],
                "monsters": [
                    {
                        "count": 6,
                        "boundary": [
                            -621,
                            -241,
                            -234,
                            -65
                        ],
                        "type": "pppompom"
                    },
                    {
                        "count": 7,
                        "boundary": [
                            153,
                            -303,
                            432,
                            -75
                        ],
                        "type": "pppompom"
                    }
                ],
                "unlist": true
            },
            "bank_b": {
                "npcs": [
                    {
                        "position": [
                            -592.5,
                            -300
                        ],
                        "id": "items8"
                    },
                    {
                        "position": [
                            -528,
                            -318
                        ],
                        "id": "items9"
                    },
                    {
                        "position": [
                            -464,
                            -333
                        ],
                        "id": "items10"
                    },
                    {
                        "position": [
                            -400.5,
                            -350
                        ],
                        "id": "items11"
                    },
                    {
                        "position": [
                            -128.5,
                            -429.5
                        ],
                        "id": "items12"
                    },
                    {
                        "position": [
                            -64.5,
                            -413.5
                        ],
                        "id": "items13"
                    },
                    {
                        "position": [
                            -0.5,
                            -398
                        ],
                        "id": "items14"
                    },
                    {
                        "position": [
                            63,
                            -381.5
                        ],
                        "id": "items15"
                    },
                    {
                        "position": [
                            -480.5,
                            50
                        ],
                        "id": "items16"
                    },
                    {
                        "position": [
                            -416.5,
                            65.5
                        ],
                        "id": "items17"
                    },
                    {
                        "position": [
                            -352.5,
                            81.5
                        ],
                        "id": "items18"
                    },
                    {
                        "position": [
                            -288.5,
                            97.5
                        ],
                        "id": "items19"
                    },
                    {
                        "position": [
                            -16.5,
                            -14
                        ],
                        "id": "items20"
                    },
                    {
                        "position": [
                            47.5,
                            -14
                        ],
                        "id": "items21"
                    },
                    {
                        "position": [
                            111,
                            -14
                        ],
                        "id": "items22"
                    },
                    {
                        "position": [
                            175,
                            -14
                        ],
                        "id": "items23"
                    }
                ],
                "quirks": [],
                "mount": true,
                "name": "The Bank [Basement]",
                "key": "jayson_theBank1",
                "doors": [
                    [
                        -264.04,
                        -421.14,
                        66.84,
                        65.15,
                        "bank",
                        1,
                        0
                    ],
                    [
                        -104.49,
                        -179.73,
                        32.05,
                        45.25,
                        "bank_u",
                        1,
                        1,
                        "ulocked"
                    ]
                ],
                "on_exit": [
                    "main",
                    3
                ],
                "spawns": [
                    [
                        -264.38,
                        -411.81
                    ],
                    [
                        -103.51,
                        -170.63
                    ]
                ],
                "safe": true,
                "monsters": []
            },
            "winter_cave": {
                "npcs": [],
                "drop_norm": 4000,
                "quirks": [],
                "name": "Frozen Cave",
                "key": "jayson_xmas_cave1",
                "doors": [
                    [
                        3,
                        41,
                        36,
                        20,
                        "winterland",
                        3,
                        0
                    ]
                ],
                "spawns": [
                    [
                        0,
                        11,
                        3
                    ]
                ],
                "monsters": [
                    {
                        "count": 6,
                        "boundary": [
                            -234,
                            -300,
                            336,
                            -28
                        ],
                        "type": "bbpompom"
                    },
                    {
                        "count": 7,
                        "boundary": [
                            -318,
                            -1112,
                            153,
                            -786
                        ],
                        "type": "bbpompom"
                    }
                ]
            },
            "arena": {
                "npcs": [],
                "pvp": true,
                "safe_pvp": true,
                "name": "Arena",
                "key": "arena3",
                "doors": [
                    [
                        152.99,
                        85.42,
                        60.9,
                        40.55,
                        "main",
                        6,
                        0
                    ]
                ],
                "on_death": [
                    "main",
                    7
                ],
                "spawns": [
                    [
                        151.6,
                        40.82
                    ]
                ],
                "drop_norm": 2000,
                "monsters": [
                    {
                        "count": 32,
                        "boundary": [
                            -376,
                            -888,
                            1144,
                            48
                        ],
                        "type": "cgoo",
                        "polygon": [
                            [
                                -376,
                                48
                            ],
                            [
                                1144,
                                48
                            ],
                            [
                                1144,
                                -888
                            ],
                            [
                                248,
                                -888
                            ],
                            [
                                248,
                                -776
                            ],
                            [
                                520,
                                -776
                            ],
                            [
                                520,
                                -560
                            ],
                            [
                                248,
                                -560
                            ],
                            [
                                248,
                                -376
                            ],
                            [
                                288,
                                -376
                            ],
                            [
                                288,
                                -336
                            ],
                            [
                                328,
                                -336
                            ],
                            [
                                328,
                                -304
                            ],
                            [
                                480,
                                -304
                            ],
                            [
                                480,
                                -344
                            ],
                            [
                                512,
                                -344
                            ],
                            [
                                512,
                                -368
                            ],
                            [
                                720,
                                -368
                            ],
                            [
                                720,
                                -192
                            ],
                            [
                                688,
                                -192
                            ],
                            [
                                688,
                                -152
                            ],
                            [
                                608,
                                -152
                            ],
                            [
                                608,
                                -120
                            ],
                            [
                                272,
                                -120
                            ],
                            [
                                272,
                                -152
                            ],
                            [
                                104,
                                -152
                            ],
                            [
                                104,
                                -200
                            ],
                            [
                                -128,
                                -200
                            ],
                            [
                                -128,
                                -400
                            ],
                            [
                                240,
                                -400
                            ],
                            [
                                240,
                                -888
                            ],
                            [
                                -376,
                                -888
                            ]
                        ]
                    },
                    {
                        "count": 1,
                        "boundary": [
                            259,
                            -764,
                            500,
                            -579
                        ],
                        "type": "skeletor"
                    }
                ]
            },
            "desertland": {
                "freeze_multiplier": 0.4,
                "npcs": [
                    {
                        "position": [
                            -14,
                            -477
                        ],
                        "id": "transporter"
                    },
                    {
                        "position": [
                            316,
                            -270
                        ],
                        "id": "locksmith"
                    }
                ],
                "name": "Desertland",
                "key": "jayson_desertlandW",
                "doors": [
                    [
                        600,
                        -2383,
                        40,
                        40,
                        "level2s",
                        1,
                        2
                    ]
                ],
                "spawns": [
                    [
                        0,
                        0
                    ],
                    [
                        10,
                        -386
                    ],
                    [
                        601,
                        -2365
                    ]
                ],
                "drop_norm": 1000,
                "burn_multiplier": 1.6,
                "monsters": [
                    {
                        "count": 4,
                        "boundary": [
                            -1013,
                            -472,
                            -575,
                            -130
                        ],
                        "type": "plantoid"
                    },
                    {
                        "count": 4,
                        "boundary": [
                            -1013,
                            -624,
                            -762,
                            -137
                        ],
                        "type": "plantoid"
                    },
                    {
                        "count": 8,
                        "boundary": [
                            -992,
                            -58,
                            -666,
                            328
                        ],
                        "type": "porcupine",
                        "grow": true
                    },
                    {
                        "count": 3,
                        "boundary": [
                            -757,
                            -2034,
                            -70,
                            -1888
                        ],
                        "type": "ent"
                    },
                    {
                        "count": 4,
                        "boundary": [
                            91,
                            -952,
                            353,
                            -702
                        ],
                        "type": "fireroamer"
                    },
                    {
                        "count": 2,
                        "boundary": [
                            161,
                            -868,
                            453,
                            -697
                        ],
                        "type": "fireroamer"
                    },
                    {
                        "count": 6,
                        "boundary": [
                            220.31,
                            -1569.2,
                            561.04,
                            -1275.72
                        ],
                        "type": "scorpion"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            -522.44,
                            -1340.19,
                            -295.2,
                            -1183.31
                        ],
                        "type": "bscorpion"
                    }
                ]
            },
            "winter_inn_rooms": {
                "npcs": [],
                "drop_norm": 1000,
                "quirks": [],
                "name": "Rooms",
                "key": "jayson_winter_inn_room1",
                "doors": [
                    [
                        0,
                        25,
                        24,
                        20,
                        "winter_inn",
                        1,
                        0
                    ]
                ],
                "spawns": [
                    [
                        0,
                        -8,
                        3
                    ]
                ],
                "monsters": [],
                "unlist": true
            },
            "jail": {
                "npcs": [
                    {
                        "position": [
                            191,
                            -156
                        ],
                        "id": "jailer"
                    }
                ],
                "drop_norm": 1000,
                "quirks": [
                    [
                        -81,
                        -165,
                        30,
                        40,
                        "log",
                        "Locked"
                    ]
                ],
                "name": "Jail",
                "key": "jayson_al_jail",
                "doors": [],
                "spawns": [
                    [
                        -79,
                        -153
                    ]
                ],
                "monsters": [
                    {
                        "count": 3,
                        "boundary": [
                            -223,
                            -140,
                            225,
                            156
                        ],
                        "type": "jrat"
                    }
                ],
                "irregular": true
            },
            "tomb": {
                "key": "jayson_MansionCrypt",
                "name": "The Tomb",
                "npcs": [],
                "instance": true,
                "doors": [
                    [
                        0,
                        -68.83,
                        33.4,
                        57.5,
                        "mansion",
                        1,
                        0
                    ]
                ],
                "spawns": [
                    [
                        0.82,
                        -53.5
                    ]
                ],
                "monsters": [
                    {
                        "count": 1,
                        "boundary": [
                            -484.75,
                            -400.63,
                            -165.11,
                            -188.4
                        ],
                        "type": "gredpro"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            -378.79,
                            44.16,
                            -115.78,
                            308.73
                        ],
                        "type": "ggreenpro"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            198.5,
                            -402.6,
                            490.12,
                            -43.68
                        ],
                        "type": "gbluepro"
                    },
                    {
                        "count": 1,
                        "boundary": [
                            -137.74,
                            -531.49,
                            235.49,
                            -476.06
                        ],
                        "type": "gpurplepro"
                    }
                ]
            },
            "woffice": {
                "npcs": [
                    {
                        "position": [
                            -24,
                            -178
                        ],
                        "id": "lostandfound"
                    },
                    {
                        "position": [
                            32,
                            -178,
                            3
                        ],
                        "id": "wnpc"
                    }
                ],
                "drop_norm": 1000,
                "name": "Wizard's Crib",
                "key": "jayson_smallNPCcave",
                "doors": [
                    [
                        -29,
                        112,
                        48,
                        40,
                        "main",
                        1,
                        0
                    ]
                ],
                "spawns": [
                    [
                        -24,
                        83,
                        3
                    ]
                ],
                "safe": true,
                "monsters": [
                    {
                        "count": 1,
                        "boundary": [
                            -112,
                            -142,
                            60,
                            -16
                        ],
                        "type": "grinch",
                        "special": true
                    }
                ]
            }
        }
    }
    expect(G_maps).not.toBe(undefined)
})