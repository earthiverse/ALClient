import { GData2 } from "./adventureland-data"

/** 
 * The following is from http://adventure.land/data.js, version 666 (2021-04-20)
 * It is used to confirm type correctness
 */

test("G.classes type validation", async () => {
    const G_classes: Pick<GData2, "classes"> = {
        "classes": {
            "merchant": {
                "resistance": 20,
                "frequency": 0.2,
                "damage_type": "none",
                "mcourage": 0,
                "speed": 55,
                "doublehand": {
                    "pickaxe": {
                        "speed": -20
                    },
                    "rod": {
                        "speed": -20
                    },
                    "basher": {
                        "speed": -26
                    },
                    "axe": {
                        "speed": -20
                    }
                },
                "stats": {
                    "dex": 4,
                    "int": 12,
                    "vit": 1,
                    "str": 1,
                    "for": 0
                },
                "armor": 20,
                "range": 20,
                "attack": 1,
                "lstats": {
                    "dex": 0.4,
                    "int": 1,
                    "vit": 0.25,
                    "str": 0.1,
                    "for": 0
                },
                "description": "While your main characters are out there adventuring, merchants can wait in town and market your loots. Server and character limits don't apply to merchants. They gain experience when they sell or buy something.",
                "offhand": {
                    "source": {},
                    "quiver": {
                        "speed": -2
                    },
                    "shield": {
                        "speed": -8
                    },
                    "misc_offhand": {
                        "speed": -3
                    }
                },
                "hp": 40,
                "courage": 1,
                "pcourage": 0,
                "mainhand": {
                    "mace": {
                        "speed": -10
                    },
                    "dagger": {
                        "speed": -3
                    },
                    "fist": {
                        "speed": -2
                    },
                    "spear": {
                        "speed": -5
                    },
                    "short_sword": {
                        "speed": -5
                    },
                    "bow": {
                        "speed": -6
                    },
                    "dartgun": {},
                    "staff": {
                        "speed": -4
                    }
                },
                "mp_cost": 10,
                "base_slots": {
                    "mainhand": {
                        "name": "staff",
                        "gift": 1,
                        "level": 0
                    }
                },
                "mp": 200,
                "projectile": "momentum",
                "main_stat": "int",
                "looks": [
                    [
                        "marmor12a",
                        {
                            "hair": "hairdo521",
                            "head": "makeup117",
                            "hat": "hat404"
                        }
                    ],
                    [
                        "marmor12b",
                        {
                            "hair": "hairdo520",
                            "head": "fmakeup01"
                        }
                    ],
                    [
                        "marmor12a",
                        {
                            "hair": "hairdo521",
                            "head": "makeup105",
                            "hat": "hat404"
                        }
                    ],
                    [
                        "marmor12b",
                        {
                            "hair": "hairdo520",
                            "head": "fmakeup03"
                        }
                    ]
                ]
            },
            "warrior": {
                "brave": true,
                "resistance": 2,
                "frequency": 0.5,
                "damage_type": "physical",
                "mcourage": 2,
                "xcx": [],
                "speed": 55,
                "doublehand": {
                    "rapier": {
                        "mp_cost": 4,
                        "frequency": 60,
                        "miss": 2
                    },
                    "great_sword": {
                        "mp_cost": 6,
                        "frequency": -8,
                        "speed": -5
                    },
                    "bow": {
                        "speed": -12,
                        "frequency": -40,
                        "miss": 50
                    },
                    "scythe": {
                        "mp_cost": 8,
                        "frequency": -11,
                        "speed": -6
                    },
                    "basher": {
                        "mp_cost": 12,
                        "frequency": -12,
                        "speed": -12
                    },
                    "axe": {
                        "mp_cost": 6,
                        "frequency": -10,
                        "speed": -7
                    }
                },
                "stats": {
                    "dex": 2,
                    "int": 2,
                    "vit": 4,
                    "str": 10,
                    "for": 2
                },
                "armor": 20,
                "range": 18,
                "attack": 60,
                "lstats": {
                    "dex": 0.25,
                    "int": 0.25,
                    "vit": 0.4,
                    "str": 1,
                    "for": 0.025
                },
                "description": "Warriors are strong melee characters. Ideal for both PVE and PVP. Can't go wrong with a warrior.",
                "offhand": {
                    "shield": {
                        "speed": -2
                    },
                    "sword": {
                        "speed": -5
                    },
                    "misc_offhand": {
                        "frequency": -12,
                        "speed": -8
                    },
                    "short_sword": {
                        "speed": -5
                    },
                    "mace": {
                        "frequency": -6,
                        "speed": -5
                    },
                    "fist": {
                        "frequency": 6
                    }
                },
                "hp": 200,
                "base_slots": {
                    "mainhand": {
                        "name": "blade",
                        "gift": 1,
                        "level": 0
                    }
                },
                "pcourage": 2,
                "mainhand": {
                    "mace": {
                        "frequency": -8,
                        "speed": -4
                    },
                    "fist": {
                        "frequency": 6
                    },
                    "sword": {
                        "speed": -5
                    },
                    "spear": {
                        "speed": -2
                    },
                    "short_sword": {}
                },
                "mp_cost": 1,
                "courage": 5,
                "mp": 20,
                "projectile": "momentum",
                "main_stat": "str",
                "looks": [
                    [
                        "marmor6d",
                        {
                            "hair": "hairdo105",
                            "head": "makeup117"
                        }
                    ],
                    [
                        "sarmor2d",
                        {
                            "hair": "hairdo120",
                            "head": "fmakeup01"
                        }
                    ],
                    [
                        "marmor6d",
                        {
                            "hair": "hairdo105",
                            "head": "makeup105"
                        }
                    ],
                    [
                        "sarmor2d",
                        {
                            "hair": "hairdo120",
                            "head": "fmakeup03"
                        }
                    ]
                ]
            },
            "paladin": {
                "resistance": 2,
                "frequency": 0.4,
                "damage_type": "physical",
                "mcourage": 4,
                "speed": 45,
                "doublehand": {},
                "stats": {
                    "dex": 2,
                    "int": 10,
                    "vit": 4,
                    "str": 10,
                    "for": 5
                },
                "armor": 20,
                "range": 15,
                "attack": 60,
                "lstats": {
                    "dex": 0.05,
                    "int": 1,
                    "vit": 0.4,
                    "str": 1,
                    "for": 0.2
                },
                "description": "Work in progress! Pick a paladin if you are an established player or just too adventerous. Paladins don't even have a starter weapon yet!",
                "offhand": {
                    "source": {},
                    "shield": {
                        "speed": -3
                    },
                    "misc_offhand": {}
                },
                "hp": 300,
                "courage": 2,
                "side_stat": "int",
                "pcourage": 5,
                "mainhand": {
                    "mace": {},
                    "sword": {
                        "output": -5,
                        "frequency": -5,
                        "speed": -7
                    },
                    "short_sword": {
                        "output": -5,
                        "speed": -3
                    }
                },
                "mp_cost": 2,
                "base_slots": {
                    "mainhand": {
                        "name": "mace",
                        "gift": 1,
                        "level": 0
                    }
                },
                "mp": 50,
                "projectile": "momentum",
                "main_stat": "str",
                "looks": [
                    [
                        "marmor4b",
                        {
                            "hair": "hairdo515",
                            "head": "makeup117"
                        }
                    ],
                    [
                        "marmor4b",
                        {
                            "hair": "hairdo405",
                            "head": "fmakeup01"
                        }
                    ],
                    [
                        "marmor4b",
                        {
                            "hair": "hairdo515",
                            "head": "makeup105"
                        }
                    ],
                    [
                        "marmor4b",
                        {
                            "hair": "hairdo405",
                            "head": "fmakeup03"
                        }
                    ]
                ]
            },
            "priest": {
                "resistance": 5,
                "frequency": 0.35,
                "damage_type": "magical",
                "mcourage": 5,
                "xcx": [
                    "marmor12e",
                    "mbody5g",
                    "hairdo402"
                ],
                "speed": 45,
                "doublehand": {
                    "wand": {
                        "frequency": 40
                    }
                },
                "stats": {
                    "dex": 3,
                    "int": 10,
                    "vit": 4,
                    "str": 2,
                    "for": 3
                },
                "armor": 2,
                "healing_projectile": "plight",
                "range": 120,
                "attack": 30,
                "lstats": {
                    "dex": 0.2,
                    "int": 1,
                    "vit": 0.4,
                    "str": 0.2,
                    "for": 0.025
                },
                "description": "Priest's are the healers of the realm. They are not ideal for beginners or solo players. They can't inflict a lot of damage. Every serious party needs at least one priest.",
                "offhand": {
                    "source": {},
                    "shield": {
                        "speed": -5
                    },
                    "misc_offhand": {
                        "speed": -4
                    }
                },
                "hp": 70,
                "base_slots": {
                    "mainhand": {
                        "name": "staff",
                        "gift": 1,
                        "level": 0
                    }
                },
                "pcourage": 2,
                "mainhand": {
                    "pmace": {
                        "speed": -2
                    },
                    "staff": {
                        "speed": -4
                    }
                },
                "mp_cost": 5,
                "courage": 2,
                "mp": 300,
                "projectile": "pmagic",
                "main_stat": "int",
                "looks": [
                    [
                        "marmor12c",
                        {
                            "head": "makeup117"
                        }
                    ],
                    [
                        "mbody5e",
                        {
                            "head": "fmakeup01"
                        }
                    ],
                    [
                        "marmor12c",
                        {
                            "head": "makeup105"
                        }
                    ],
                    [
                        "mbody5e",
                        {
                            "head": "fmakeup03"
                        }
                    ]
                ]
            },
            "ranger": {
                "resistance": 80,
                "frequency": 0.4,
                "damage_type": "physical",
                "mcourage": 2,
                "speed": 45,
                "doublehand": {
                    "dagger": {},
                    "fist": {}
                },
                "stats": {
                    "dex": 10,
                    "int": 8,
                    "vit": 2,
                    "str": 3,
                    "for": 1
                },
                "armor": 10,
                "range": 15,
                "attack": 45,
                "lstats": {
                    "dex": 1,
                    "int": 0.25,
                    "vit": 0.3,
                    "str": 0.2,
                    "for": 0.02
                },
                "description": "Rangers are skilled archers. Expert trackers. Their high range makes them very suitable for beginners.",
                "offhand": {
                    "quiver": {}
                },
                "hp": 160,
                "courage": 2,
                "pcourage": 2,
                "mainhand": {
                    "crossbow": {
                        "frequency": -36,
                        "apiercing": 120
                    },
                    "bow": {
                        "speed": -3
                    }
                },
                "mp_cost": 2,
                "base_slots": {
                    "mainhand": {
                        "name": "bow",
                        "gift": 1,
                        "level": 0
                    }
                },
                "mp": 60,
                "projectile": "momentum",
                "main_stat": "dex",
                "looks": [
                    [
                        "marmor5a",
                        {
                            "hair": "hairdo106",
                            "head": "makeup117"
                        }
                    ],
                    [
                        "mbody2b",
                        {
                            "hair": "hairdo206",
                            "head": "fmakeup01",
                            "makeup": "facemakeup02"
                        }
                    ],
                    [
                        "marmor5a",
                        {
                            "hair": "hairdo106",
                            "head": "makeup105"
                        }
                    ],
                    [
                        "mbody2b",
                        {
                            "hair": "hairdo206",
                            "head": "fmakeup03",
                            "makeup": "facemakeup02"
                        }
                    ]
                ]
            },
            "rogue": {
                "resistance": 10,
                "frequency": 0.45,
                "damage_type": "physical",
                "mcourage": 2,
                "speed": 50,
                "doublehand": {
                    "rapier": {
                        "frequency": 70
                    },
                    "short_sword": {},
                    "spear": {
                        "frequency": 16,
                        "speed": -3
                    },
                    "bow": {
                        "speed": -10,
                        "frequency": -30,
                        "miss": 30
                    }
                },
                "stats": {
                    "dex": 10,
                    "int": 3,
                    "vit": 3,
                    "str": 4,
                    "for": 2
                },
                "armor": 15,
                "range": 15,
                "attack": 45,
                "lstats": {
                    "dex": 1,
                    "int": 0.2,
                    "vit": 0.3,
                    "str": 0.2,
                    "for": 0.025
                },
                "description": "Rogue's are the ideal assassins. Their invis ability makes them super-fun for PVP. They are fast. Not ideal for beginners.",
                "offhand": {
                    "misc_offhand": {
                        "speed": -4
                    },
                    "dagger": {},
                    "stars": {},
                    "fist": {}
                },
                "hp": 120,
                "courage": 2,
                "pcourage": 2,
                "mainhand": {
                    "dagger": {},
                    "stars": {
                        "frequency": 20
                    },
                    "fist": {}
                },
                "mp_cost": 1,
                "base_slots": {
                    "mainhand": {
                        "name": "claw",
                        "gift": 1,
                        "level": 0
                    }
                },
                "mp": 30,
                "projectile": "momentum",
                "main_stat": "dex",
                "looks": [
                    [
                        "sbody1c",
                        {
                            "hair": "hairdo522",
                            "head": "makeup117",
                            "chin": "beard112"
                        }
                    ],
                    [
                        "sarmor1h",
                        {
                            "hair": "hairdo210",
                            "head": "fmakeup01"
                        }
                    ],
                    [
                        "sbody1c",
                        {
                            "hair": "hairdo522",
                            "head": "makeup105",
                            "chin": "beard112"
                        }
                    ],
                    [
                        "sarmor1h",
                        {
                            "hair": "hairdo210",
                            "head": "fmakeup03"
                        }
                    ]
                ]
            },
            "mage": {
                "resistance": 5,
                "frequency": 0.35,
                "damage_type": "magical",
                "mcourage": 3,
                "xcx": [
                    "marmor12f",
                    "mbody5h",
                    "hairdo402"
                ],
                "speed": 45,
                "doublehand": {
                    "great_staff": {
                        "mp_cost": 160,
                        "frequency": -10,
                        "speed": -12
                    }
                },
                "stats": {
                    "dex": 3,
                    "int": 10,
                    "vit": 3,
                    "str": 2,
                    "for": 2
                },
                "armor": 2,
                "range": 120,
                "attack": 30,
                "lstats": {
                    "dex": 0.2,
                    "int": 1,
                    "vit": 0.3,
                    "str": 0.2,
                    "for": 0.02
                },
                "description": "Mage's are the ideal characters for beginners. They are easy and fun to play. Both PVE and PVP.",
                "offhand": {
                    "source": {},
                    "misc_offhand": {
                        "speed": -4
                    }
                },
                "hp": 70,
                "courage": 2,
                "pcourage": 2,
                "mainhand": {
                    "wblade": {
                        "speed": -5
                    },
                    "wand": {
                        "mp_cost": -18,
                        "frequency": 60
                    },
                    "staff": {
                        "speed": -4
                    }
                },
                "mp_cost": 5,
                "base_slots": {
                    "mainhand": {
                        "name": "staff",
                        "gift": 1,
                        "level": 0
                    }
                },
                "mp": 300,
                "projectile": "magic",
                "main_stat": "int",
                "looks": [
                    [
                        "marmor12d",
                        {
                            "head": "makeup117"
                        }
                    ],
                    [
                        "mbody5f",
                        {
                            "head": "fmakeup01"
                        }
                    ],
                    [
                        "marmor12d",
                        {
                            "head": "makeup105"
                        }
                    ],
                    [
                        "mbody5f",
                        {
                            "head": "fmakeup03"
                        }
                    ]
                ]
            }
        }
    }
    expect(G_classes).not.toBe(undefined)
})