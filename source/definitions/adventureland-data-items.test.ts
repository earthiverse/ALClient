import { GData2 } from "./adventureland-data"

/** 
 * The following is from http://adventure.land/data.js, version 666 (2021-04-27)
 * It is used to confirm type correctness
 */

test("G.items type validation", async () => {
    const G_items: Pick<GData2, "items"> = {
        "items": {
            "harbringer": {
                "skin_r": "harbringer_r",
                "explanation": "Pure, unfiltered power!",
                "grades": [
                    0,
                    5,
                    10,
                    12
                ],
                "skin": "harbringer",
                "tier": 2.75,
                "name": "Harbringer",
                "a": true,
                "upgrade": {
                    "range": 3.875,
                    "attack": 5.875,
                    "rpiercing": 5
                },
                "rpiercing": 10,
                "g": 289000,
                "wtype": "staff",
                "damage": "magical",
                "trex": "This staff is a relic of a past age long forgotten. Thought to be forged by the God of Lighting. Those who have seen this staff claim it radiates powerful energy. Though this staff is only wielded by few, it is feared by all.",
                "range": 60.5,
                "projectile": "magic_divine",
                "attack": 42.5,
                "type": "weapon"
            },
            "dexamulet": {
                "dex": 4,
                "name": "Amulet of Dexterity",
                "g": 30000,
                "skin": "dexamulet",
                "grades": [
                    3,
                    5,
                    6,
                    7
                ],
                "compound": {
                    "dex": 3
                },
                "type": "amulet"
            },
            "candy1v2": {
                "ignore": true,
                "s": 9999,
                "e": 1,
                "name": "Candy [h2]",
                "g": 2400,
                "skin": "candy1",
                "explanation": "A delicious candy. Xyn in New Town could give you something in exchange!",
                "type": "gem"
            },
            "candy1v3": {
                "ignore": true,
                "s": 9999,
                "e": 1,
                "name": "Candy",
                "g": 2400,
                "skin": "candy1",
                "explanation": "A delicious candy. Xyn in New Town could give you something in exchange!",
                "type": "gem"
            },
            "armorring": {
                "a": true,
                "grades": [
                    1,
                    4,
                    6,
                    7
                ],
                "name": "Ring of Armor",
                "g": 180000,
                "skin": "armorring",
                "armor": 24,
                "compound": {
                    "armor": 9,
                    "dreturn": 0.25
                },
                "type": "ring"
            },
            "ale": {
                "g": 24000,
                "s": 9999,
                "skin_a": "ale",
                "str": 24,
                "miss": 20,
                "skin": "ale",
                "duration": 0.05,
                "speed": -6,
                "type": "elixir",
                "name": "Ale"
            },
            "rod": {
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "upgrade": {
                    "breaks": -0.064
                },
                "name": "Fishing Rod",
                "g": 2000,
                "skin": "rod",
                "tier": 1,
                "wtype": "rod",
                "type": "tool",
                "breaks": 1
            },
            "snowboots": {
                "stat": 2,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "fzresistance": 10,
                "skin": "snowboots",
                "tier": 2,
                "speed": 6.0,
                "extra_stat": 1,
                "upgrade": {
                    "armor": 2.5,
                    "stat": 1,
                    "fzresistance": 1,
                    "speed": 0.875
                },
                "name": "Snow Boots",
                "g": 720000,
                "armor": 8,
                "type": "shoes",
                "scroll": true
            },
            "tshirt1": {
                "dex": 5,
                "upgrade": {
                    "dex": 1.25
                },
                "name": "T-Shirt",
                "g": 120,
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "skin": "tshirt1",
                "type": "chest"
            },
            "vblood": {
                "set": "vampires",
                "explanation": "Just a tiny sip",
                "lifesteal": 20,
                "skin_a": "vblood",
                "skin": "vblood",
                "duration": 1,
                "name": "Vampire's Blood",
                "g": 240000,
                "s": 9999,
                "withdrawal": "withdrawal",
                "type": "elixir"
            },
            "x2": {
                "a": true,
                "s": 9999,
                "name": "Quantum Piece",
                "g": 4000,
                "skin": "x2",
                "explanation": "A unique component of a curious puzzle",
                "type": "quest",
                "event": true
            },
            "vboots": {
                "stat": 3,
                "set": "vampires",
                "resistance": 6,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "skin": "vboots",
                "tier": 3,
                "speed": 7.0,
                "dex": 3,
                "extra_stat": 2,
                "upgrade": {
                    "armor": 5.5,
                    "stat": 1,
                    "speed": 1.125,
                    "resistance": 2.75
                },
                "name": "Vampiric Boots",
                "g": 340000,
                "firesistance": 8,
                "armor": 14,
                "str": 3,
                "type": "shoes",
                "scroll": true
            },
            "poison": {
                "name": "Poison Sack",
                "g": 1000,
                "explanation": "An organic poison sack, can be used to coat weapons or arrows.",
                "s": 9999,
                "skin": "poison",
                "type": "skill_item"
            },
            "jacko": {
                "a": true,
                "g": 96000,
                "grades": [
                    2,
                    4,
                    6,
                    7
                ],
                "cx": {
                    "scale": 0.5
                },
                "name": "Jack-o Lantern",
                "rpiercing": 20,
                "skin": "jacko",
                "compound": {
                    "rpiercing": 15
                },
                "type": "orb",
                "ability": "scare"
            },
            "rfur": {
                "s": 9999,
                "type": "material",
                "name": "Rat Fur",
                "g": 40,
                "skin": "rfur"
            },
            "x0": {
                "a": true,
                "s": 9999,
                "name": "Quantum Piece",
                "g": 4000,
                "skin": "x0",
                "explanation": "A unique component of a curious puzzle",
                "type": "quest",
                "event": true
            },
            "pumpkinspice": {
                "explanation": "Produced in bulk during the Halloween season. WARNING: The pumpkin comes from a non-vegetable source",
                "crit": 5,
                "skin_a": "pumpkinspice",
                "skin": "pumpkinspice",
                "duration": 8,
                "reflection": 2,
                "name": "Pumpkin Spice Latte",
                "g": 200,
                "s": 9999,
                "mp": -400,
                "type": "elixir"
            },
            "hboots": {
                "stat": 3,
                "set": "wt3",
                "resistance": 6,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "skin": "hboots",
                "tier": 3,
                "speed": 7.0,
                "a": 2,
                "extra_stat": 2,
                "upgrade": {
                    "armor": 5.5,
                    "stat": 1,
                    "speed": 1.125,
                    "resistance": 2.75
                },
                "name": "Heavy Boots",
                "g": 1240000,
                "armor": 14,
                "type": "shoes",
                "scroll": true
            },
            "mphat": {
                "stat": 2,
                "set": "mpriest",
                "explanation": "You served our realm well",
                "resistance": 22,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "protection": true,
                "skin": "mphat",
                "tier": 2.125,
                "class": [
                    "priest"
                ],
                "extra_stat": 1,
                "upgrade": {
                    "armor": 4.0,
                    "stat": 1,
                    "resistance": 4.0
                },
                "name": "Hat of the Hunter Priest",
                "g": 64000,
                "armor": 19,
                "type": "helmet",
                "scroll": true
            },
            "mbelt": {
                "a": true,
                "int": 8,
                "compound": {
                    "armor": 10,
                    "speed": 1.1
                },
                "grades": [
                    0,
                    1,
                    6,
                    7
                ],
                "skin": "mbelt",
                "speed": 1,
                "dex": 8,
                "name": "Well-Crafted Belt",
                "g": 640000,
                "armor": 15,
                "type": "belt"
            },
            "x7": {
                "a": true,
                "s": 9999,
                "name": "Quantum Piece",
                "g": 4000,
                "skin": "x7",
                "explanation": "A unique component of a curious puzzle",
                "type": "quest",
                "event": true
            },
            "emptyjar": {
                "name": "Empty Jar",
                "g": 1,
                "explanation": "Always nice to have some empty jars lying around, you never know when you'll need one!",
                "s": 9999,
                "skin": "emptyjar",
                "type": "jar"
            },
            "networkcard": {
                "name": "Network Card",
                "g": 24000000,
                "explanation": "A critical component that is able to interact with the fabric of our universe. Possibly quantum technology.",
                "s": 9999,
                "skin": "networkcard",
                "type": "material"
            },
            "cupid": {
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "cx": {
                    "accent": "#DB2A86"
                },
                "vit": 10,
                "skin": "cupid",
                "tier": 2.5,
                "event": true,
                "a": true,
                "upgrade": {
                    "range": 8.666666666666668,
                    "attack": 5.2,
                    "vit": 2
                },
                "name": "Cupid's Bow",
                "g": 90000,
                "wtype": "bow",
                "damage": "heal",
                "range": 50.0,
                "projectile": "cupid",
                "attack": 29.0,
                "type": "weapon"
            },
            "mmshoes": {
                "stat": 2,
                "set": "mmage",
                "explanation": "You served our realm well",
                "resistance": 5,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "skin": "mmshoes",
                "tier": 2.125,
                "speed": 6.0,
                "class": [
                    "mage"
                ],
                "extra_stat": 1,
                "upgrade": {
                    "armor": 4.0,
                    "stat": 1,
                    "speed": 0.90625,
                    "resistance": 2.0
                },
                "name": "Shoes of the Hunter Mage",
                "g": 240000,
                "armor": 11,
                "type": "shoes",
                "scroll": true
            },
            "armorbox": {
                "a": true,
                "s": 9999,
                "e": 1,
                "name": "Armor Box",
                "g": 120000,
                "skin": "armorbox",
                "explanation": "Can be exchanged for a random, rare armor.",
                "type": "box"
            },
            "evasionscroll": {
                "g": 8000,
                "stat": "evasion",
                "name": "Evasion Scroll",
                "evasion": 2,
                "skin": "evasionscroll",
                "explanation": "Adds Evasion to an armor with a Special Stat attribute.",
                "type": "pscroll",
                "s": 9999
            },
            "candy1": {
                "a": 2,
                "s": 9999,
                "e": 1,
                "name": "Candy",
                "g": 24000,
                "skin": "candy1",
                "explanation": "Candy! Can be exchanged for random treasures.",
                "type": "gem"
            },
            "candy0": {
                "a": 2,
                "s": 9999,
                "e": 1,
                "name": "Rare Candy",
                "g": 240000,
                "skin": "candy0",
                "explanation": "A rare candy! Can be exchanged for random treasures.",
                "type": "gem"
            },
            "goldbooster": {
                "gold": 20,
                "explanation": "Boosts gold loot from chests.",
                "compound": {
                    "gold": 8
                },
                "grades": [
                    0,
                    10,
                    6,
                    7
                ],
                "legacy": {
                    "gold": 10
                },
                "skin_a": "goldbooster_a",
                "skin": "goldbooster",
                "name": "Gold Booster",
                "g": 79840000,
                "days": 30,
                "type": "booster",
                "gain": "gold"
            },
            "x5": {
                "a": true,
                "s": 9999,
                "name": "Quantum Piece",
                "g": 4000,
                "skin": "x5",
                "explanation": "A unique component of a curious puzzle",
                "type": "quest",
                "event": true
            },
            "gstaff": {
                "explanation": "[Warning] Highly volatile - might lose it's power suddenly!",
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "cx": {
                    "accent": "#AF2131"
                },
                "skin": "blaster",
                "tier": 3,
                "blast": 40,
                "upgrade": {
                    "range": 5,
                    "blast": 5,
                    "attack": 8
                },
                "name": "Blaster",
                "g": 1240000,
                "wtype": "great_staff",
                "damage": "magical",
                "range": 86,
                "projectile": "bigmagic",
                "attack": 67,
                "type": "weapon"
            },
            "throwingstars": {
                "damage": "physical",
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "cx": {
                    "scale": 0.5,
                    "extension": true
                },
                "skin": "throwingstars",
                "tier": 1,
                "upgrade": {
                    "range": 4,
                    "attack": 2.5
                },
                "name": "Throwing Stars",
                "g": 72000,
                "wtype": "stars",
                "attack": 5,
                "range": 50,
                "type": "weapon"
            },
            "rednose": {
                "a": true,
                "range": 3,
                "grades": [
                    2,
                    4,
                    6,
                    7
                ],
                "name": "Rudolph's Red Nose",
                "g": 32000,
                "skin": "rednose",
                "cuteness": 9,
                "compound": {
                    "cuteness": 3,
                    "range": 4
                },
                "type": "helmet",
                "scroll": true
            },
            "test_orb": {
                "ability": "restore_mp",
                "compound": {},
                "grades": [
                    0,
                    0,
                    10,
                    12
                ],
                "attr0": 8,
                "skin": "test_orb",
                "fzresistance": 20,
                "name": "Orb of Testing",
                "g": 1,
                "firesistance": 20,
                "mp_reduction": 20,
                "type": "orb"
            },
            "wingedboots": {
                "stat": 1,
                "set": "swift",
                "resistance": 20,
                "grades": [
                    4,
                    8,
                    10,
                    12
                ],
                "frequency": 3,
                "skin": "wingedboots",
                "tier": 1.5,
                "speed": 8,
                "upgrade": {
                    "armor": 1.5,
                    "stat": 1,
                    "frequency": 0.625,
                    "speed": 1,
                    "resistance": 1.5
                },
                "name": "Winged Boots",
                "g": 150000,
                "armor": 6,
                "credit": "Pluet",
                "type": "shoes",
                "scroll": true
            },
            "t2dexamulet": {
                "dex": 6,
                "g": 160000,
                "grades": [
                    0,
                    2,
                    6,
                    7
                ],
                "edge": -1,
                "name": "Amulet of the Stubborn Ranger",
                "vit": 5,
                "skin": "t2dexamulet",
                "compound": {
                    "dex": 3,
                    "vit": 3
                },
                "type": "amulet"
            },
            "bcape": {
                "a": true,
                "stat": 5,
                "upgrade": {
                    "armor": 3,
                    "stat": 0.1,
                    "resistance": 2
                },
                "grades": [
                    0,
                    4,
                    10,
                    12
                ],
                "name": "Well-Crafted Cape",
                "g": 2400000,
                "skin": "cape1",
                "armor": 18,
                "type": "cape",
                "resistance": 12
            },
            "outputscroll": {
                "stat": "output",
                "name": "Output Increase Scroll",
                "g": 8000,
                "skin": "outputscroll",
                "explanation": "Adds Output Increase to an armor with a Stat attribute.",
                "multiplier": 0.175,
                "type": "pscroll",
                "s": 9999
            },
            "dexbelt": {
                "dex": 4,
                "name": "Belt of Dexterity",
                "g": 50000,
                "skin": "dexbelt",
                "grades": [
                    2,
                    5,
                    6,
                    7
                ],
                "compound": {
                    "dex": 3
                },
                "type": "belt"
            },
            "hpbelt": {
                "name": "Belt of HP",
                "g": 20000,
                "hp": 160,
                "skin": "hpbelt",
                "grades": [
                    3,
                    5,
                    6,
                    7
                ],
                "compound": {
                    "hp": 240
                },
                "type": "belt"
            },
            "confetti": {
                "onclick": "socket.emit('throw',{num:locate_item('confetti'),x:character.real_x,y:character.real_y})",
                "s": 9999,
                "name": "Pack of Confetti's",
                "g": 20,
                "skin": "confetti",
                "action": "THROW!",
                "explanation": "To celebrate good times",
                "type": "throw"
            },
            "t2stramulet": {
                "g": 160000,
                "grades": [
                    0,
                    2,
                    6,
                    7
                ],
                "edge": -1,
                "name": "Amulet of the Eager Warrior",
                "str": 5,
                "skin": "t2stramulet",
                "compound": {
                    "resistance": 20,
                    "str": 3
                },
                "type": "amulet",
                "resistance": 30
            },
            "orbofdex": {
                "dex": 4,
                "grades": [
                    1,
                    4,
                    6,
                    7
                ],
                "edge": -2,
                "name": "Orb of Dexterity",
                "g": 240000,
                "skin": "orbofdex",
                "compound": {
                    "dex": 3
                },
                "type": "orb"
            },
            "kitty1": {
                "ignore": true,
                "a": true,
                "name": "Egg",
                "g": 40000,
                "skin": "egg1",
                "grade": 0,
                "explanation": "A vibrant egg, it's inhabitant seems eager to get out.",
                "type": "chrysalis",
                "monster": "kitty1"
            },
            "molesteeth": {
                "a": true,
                "grades": [
                    0,
                    1,
                    6,
                    7
                ],
                "name": "Mole's Teeth",
                "g": 500000,
                "skin": "molesteeth",
                "compound": {
                    "apiercing": 15
                },
                "type": "earring",
                "apiercing": 15
            },
            "strscroll": {
                "stat": "str",
                "name": "Strength Scroll",
                "g": 8000,
                "skin": "strscroll",
                "explanation": "Adds Stength to an armor with a Stat attribute.",
                "multiplier": 1,
                "type": "pscroll",
                "s": 9999
            },
            "snowflakes": {
                "ability": "freeze",
                "skin_r": "snowflakes_r",
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "cx": {
                    "scale": 0.5,
                    "extension": true
                },
                "attr0": 1,
                "skin": "snowflakes",
                "tier": 2,
                "upgrade": {
                    "range": 5,
                    "attack": 3.3,
                    "attr0": 1
                },
                "name": "Snowflakes",
                "g": 92000,
                "wtype": "stars",
                "damage": "physical",
                "range": 60,
                "attack": 7,
                "type": "weapon"
            },
            "leather": {
                "s": 9999,
                "quest": "leather",
                "e": 40,
                "name": "Leather",
                "g": 3000,
                "skin": "leather",
                "explanation": "A Leather piece.",
                "type": "quest"
            },
            "nheart": {
                "name": "Heartwood Core",
                "g": 12000000,
                "explanation": "An ancient source of life. A small piece of a magnificent being that spanned life across our realm eons ago.",
                "s": 9999,
                "skin": "nheart",
                "type": "material"
            },
            "hdagger": {
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "cx": {
                    "scale": 0.5,
                    "accent": "#847ADA",
                    "extension": true
                },
                "skin": "hdagger",
                "tier": 3,
                "class": [
                    "rogue"
                ],
                "a": true,
                "upgrade": {
                    "range": 2,
                    "attack": 5
                },
                "name": "Dagger of Hallowing",
                "g": 2400000,
                "firesistance": 15,
                "wtype": "dagger",
                "damage": "physical",
                "range": 11,
                "attack": 22,
                "type": "weapon"
            },
            "gum": {
                "hp": 40,
                "skin_a": "gum",
                "skin": "gum",
                "duration": 120,
                "eat": true,
                "name": "Gum",
                "reflection": 0.2,
                "g": 100,
                "s": 9999,
                "type": "elixir",
                "explanation": "Nice flavour"
            },
            "fcape": {
                "firesistance": 4,
                "stat": 6,
                "upgrade": {
                    "armor": 2,
                    "firesistance": 4,
                    "stat": 0.1,
                    "resistance": 2
                },
                "grades": [
                    0,
                    0,
                    10,
                    12
                ],
                "name": "Fiery Cape",
                "g": 16000000,
                "skin": "fcape",
                "armor": 10,
                "type": "cape",
                "resistance": 8
            },
            "vsword": {
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "cx": {
                    "accent": "#B91A6A"
                },
                "skin": "vsword",
                "tier": 3.25,
                "speed": 1,
                "lifesteal": 5,
                "upgrade": {
                    "range": 1.5,
                    "attack": 6.25
                },
                "name": "Vampiric Sword",
                "g": 9600000,
                "wtype": "sword",
                "damage": "physical",
                "range": 11.75,
                "attack": 26.25,
                "type": "weapon"
            },
            "gloves": {
                "stat": 1,
                "upgrade": {
                    "armor": 0.5,
                    "stat": 1,
                    "resistance": 0.5
                },
                "name": "Gloves",
                "g": 3400,
                "armor": 6,
                "resistance": 3,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "skin": "gloves",
                "tier": 1,
                "type": "gloves",
                "scroll": true
            },
            "mcgloves": {
                "stat": 2,
                "set": "mmerchant",
                "gold": 5,
                "explanation": "Your comrades served our realm well",
                "resistance": 11,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "skin": "mcgloves",
                "tier": 2.25,
                "class": [
                    "merchant"
                ],
                "extra_stat": 1,
                "upgrade": {
                    "armor": 4.0,
                    "stat": 1,
                    "resistance": 4.0
                },
                "name": "Gloves of the Hunter Merchant",
                "g": 68000,
                "armor": 22,
                "type": "gloves",
                "scroll": true
            },
            "stinger": {
                "grades": [
                    5,
                    8,
                    10,
                    12
                ],
                "cx": {
                    "scale": 0.5,
                    "accent": "#96783E",
                    "extension": true
                },
                "skin": "stinger",
                "tier": 1.4,
                "upgrade": {
                    "range": 2,
                    "attack": 3.4
                },
                "name": "Stinger",
                "g": 16000,
                "wtype": "dagger",
                "damage": "physical",
                "range": 5.4,
                "str": 12,
                "attack": 14.0,
                "type": "weapon"
            },
            "weaver": {
                "ability": "weave",
                "attr1": 1,
                "grades": [
                    4,
                    7,
                    10,
                    12
                ],
                "cx": {
                    "accent": "#AF2131"
                },
                "attr0": 4,
                "skin": "weaver",
                "tier": 1.75,
                "upgrade": {
                    "range": 8.166666666666668,
                    "attack": 4.6,
                    "attr0": 2,
                    "attr1": 0.2
                },
                "name": "Bow of the Weaver",
                "g": 36000,
                "wtype": "bow",
                "damage": "physical",
                "range": 62.5,
                "projectile": "arrow",
                "attack": 24.5,
                "type": "weapon"
            },
            "carrotsword": {
                "dex": 12,
                "a": true,
                "set": "easter",
                "name": "Carrot Sword",
                "g": 92000,
                "cx": {
                    "accent": "#E9711A"
                },
                "wtype": "short_sword",
                "skin_c": "carrotsword_c",
                "charisma": -20,
                "damage": "physical",
                "range": 3,
                "upgrade": {
                    "range": 1.25,
                    "attack": 4.5
                },
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "skin": "carrotsword",
                "tier": 2,
                "attack": 21,
                "type": "weapon"
            },
            "mmpants": {
                "stat": 2,
                "set": "mmage",
                "explanation": "You served our realm well",
                "resistance": 17,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "skin": "mmpants",
                "tier": 2.125,
                "class": [
                    "mage"
                ],
                "extra_stat": 1,
                "upgrade": {
                    "armor": 4.0,
                    "stat": 1,
                    "resistance": 4.0
                },
                "name": "Pants of the Hunter Mage",
                "g": 128000,
                "armor": 28,
                "type": "pants",
                "scroll": true
            },
            "mcpants": {
                "stat": 2,
                "set": "mmerchant",
                "explanation": "Your comrades served our realm well",
                "resistance": 17,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "skin": "mcpants",
                "tier": 2.25,
                "class": [
                    "merchant"
                ],
                "extra_stat": 1,
                "upgrade": {
                    "armor": 4.0,
                    "stat": 1,
                    "resistance": 4.0
                },
                "name": "Pants of the Hunter Merchant",
                "g": 128000,
                "armor": 28,
                "type": "pants",
                "scroll": true
            },
            "scroll4": {
                "a": true,
                "exclusive": true,
                "s": 9999,
                "name": "Ultimate Upgrade Scroll",
                "g": 640000000,
                "skin": "scroll4",
                "grade": 3.6,
                "explanation": "A scroll passed down from ancient times. Long believed to be extinct. Powers beyond imagination.",
                "type": "uscroll"
            },
            "helmet1": {
                "stat": 2,
                "set": "rugged",
                "resistance": 16,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "protection": true,
                "skin": "helmet1",
                "tier": 2,
                "a": 2,
                "extra_stat": 1,
                "upgrade": {
                    "armor": 2.5,
                    "stat": 1,
                    "resistance": 2.5
                },
                "name": "Rugged Helmet",
                "g": 32000,
                "armor": 14,
                "type": "helmet",
                "scroll": true
            },
            "scroll2": {
                "name": "Rare Upgrade Scroll",
                "g": 1600000,
                "grade": 2,
                "explanation": "Scroll to upgrade a rare weapon or armor. If the upgrade fails, the item is lost.",
                "s": 9999,
                "skin": "scroll2",
                "type": "uscroll"
            },
            "scroll3": {
                "a": true,
                "s": 9999,
                "name": "Legendary Upgrade Scroll",
                "g": 480000000,
                "skin": "scroll3",
                "grade": 3,
                "explanation": "A mysterious upgrade scroll, you can feel that it's very powerful. If the upgrade fails, the item is lost.",
                "type": "uscroll",
                "markup": 10
            },
            "scroll0": {
                "name": "Upgrade Scroll",
                "g": 1000,
                "grade": 0,
                "explanation": "Scroll to upgrade a weapon or armor. If the upgrade fails, the item is lost.",
                "s": 9999,
                "skin": "scroll0",
                "type": "uscroll"
            },
            "scroll1": {
                "name": "High Upgrade Scroll",
                "g": 40000,
                "grade": 1,
                "explanation": "Scroll to upgrade a high grade weapon or armor. If the upgrade fails, the item is lost.",
                "s": 9999,
                "skin": "scroll1",
                "type": "uscroll"
            },
            "greenbomb": {
                "a": true,
                "explanation": "It's a candy with very questionable ingredients, might be addictive.",
                "resistance": -800,
                "crit": 10,
                "skin_a": "greenbomb",
                "skin": "greenbomb",
                "duration": 0.002,
                "speed": 30,
                "eat": true,
                "dex": 120,
                "name": "Green Bomb",
                "g": 10000,
                "s": 9999,
                "str": 50,
                "withdrawal": "withdrawal",
                "type": "elixir"
            },
            "lbelt": {
                "grades": [
                    3,
                    5,
                    6,
                    7
                ],
                "name": "Belt",
                "g": 40000,
                "skin": "lbelt",
                "armor": 15,
                "speed": 1,
                "explanation": "A belt that can actually hold your pants in place!",
                "compound": {
                    "armor": 5,
                    "speed": 1.1
                },
                "type": "belt"
            },
            "cclaw": {
                "damage": "physical",
                "grades": [
                    5,
                    8,
                    10,
                    12
                ],
                "cx": {
                    "scale": 0.5,
                    "extension": true
                },
                "skin": "cclaw",
                "tier": 1.5,
                "upgrade": {
                    "range": 1.5,
                    "attack": 3.5,
                    "apiercing": 4
                },
                "name": "Crab Claw",
                "g": 9600,
                "wtype": "fist",
                "apiercing": 20,
                "range": 5.5,
                "attack": 12.0,
                "type": "weapon"
            },
            "mppants": {
                "stat": 2,
                "set": "mpriest",
                "explanation": "You served our realm well",
                "resistance": 17,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "skin": "mppants",
                "tier": 2.125,
                "class": [
                    "priest"
                ],
                "extra_stat": 1,
                "upgrade": {
                    "armor": 4.0,
                    "stat": 1,
                    "resistance": 4.0
                },
                "name": "Pants of the Hunter Priest",
                "g": 128000,
                "armor": 28,
                "type": "pants",
                "scroll": true
            },
            "cyber": {
                "stat": 3,
                "pnresistance": 4,
                "int": 6,
                "resistance": 28,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "courage": 1,
                "skin": "cyber",
                "tier": 3,
                "dex": 2,
                "extra_stat": 2,
                "upgrade": {
                    "armor": 5.5,
                    "stat": 1,
                    "resistance": 5.5
                },
                "name": "Cybernetic Implants",
                "g": 320000,
                "armor": 25,
                "protection": true,
                "str": 2,
                "type": "helmet",
                "scroll": true
            },
            "hbow": {
                "damage": "physical",
                "grades": [
                    5,
                    8,
                    10,
                    12
                ],
                "cx": {
                    "accent": "#8B7FD6"
                },
                "skin": "hbow",
                "tier": 1.5,
                "upgrade": {
                    "range": 8.0,
                    "attack": 4.4,
                    "apiercing": 5
                },
                "name": "Hunting Bow",
                "g": 16000,
                "wtype": "bow",
                "apiercing": 40,
                "range": 80.0,
                "projectile": "arrow",
                "attack": 23.0,
                "type": "weapon"
            },
            "darktristone": {
                "dex": 1,
                "evasion": 3,
                "vit": 1,
                "rpiercing": 5,
                "onclick": "socket.emit('activate',{slot:$(this).data('id')})",
                "int": 1,
                "compound": {
                    "dex": 1,
                    "vit": 1,
                    "rpiercing": 5,
                    "int": 1,
                    "apiercing": 5,
                    "str": 1
                },
                "apiercing": 5,
                "ignore": true,
                "g": 50000,
                "grades": [
                    1,
                    4,
                    6,
                    7
                ],
                "skin_a": "darktristone_a",
                "str": 1,
                "skin": "darktristone",
                "action": "ACTIVATE!",
                "type": "ring",
                "name": "Legacy Dark Tri-Stone"
            },
            "computer": {
                "name": "Ancient Computer",
                "g": 64000000,
                "explanation": "Networks you to NPC's and extends the CODE capabilities.",
                "stand": "cstand",
                "skin": "ancientcomputer",
                "type": "computer",
                "special": true
            },
            "critscroll": {
                "stat": "crit",
                "name": "Critical Hit Scroll",
                "g": 8000,
                "skin": "critscroll",
                "explanation": "Adds Critical Hit to an armor with a Stat attribute.",
                "multiplier": 0.125,
                "type": "pscroll",
                "s": 9999
            },
            "pants1": {
                "stat": 2,
                "set": "rugged",
                "resistance": 12,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "skin": "pants1",
                "tier": 2,
                "a": 2,
                "extra_stat": 1,
                "upgrade": {
                    "armor": 2.5,
                    "stat": 1,
                    "resistance": 2.5
                },
                "name": "Rugged Pants",
                "g": 78000,
                "armor": 20,
                "type": "pants",
                "scroll": true
            },
            "flute": {
                "explanation": "The sound of each flute is unique and mesmerizing. Your pets will easily recognize the sound of yours and come to your call.",
                "type": "flute",
                "name": "Flute",
                "g": 200000000,
                "skin": "flute"
            },
            "hammer": {
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "cx": {
                    "accent": "#7A44A2"
                },
                "skin": "hammer",
                "tier": 3,
                "upgrade": {
                    "range": 1,
                    "attack": 6.2
                },
                "name": "Hammer",
                "g": 960000,
                "wtype": "mace",
                "damage": "physical",
                "range": 7,
                "attack": 32,
                "type": "weapon"
            },
            "basketofeggs": {
                "e": 1,
                "name": "Basket of Easter Eggs",
                "g": 20000,
                "explanation": "A basket full of unique easter eggs. You can probably exchange this for a cool reward.",
                "s": 9999,
                "skin": "basketofeggs",
                "type": "quest"
            },
            "blue": {
                "g": 150000,
                "s": 9999,
                "name": "Blue Horizon",
                "evasion": 50,
                "skin": "blue",
                "duration": 0.05,
                "miss": 24,
                "type": "elixir",
                "skin_a": "blue"
            },
            "elixirstr0": {
                "name": "Elixir of Strength",
                "g": 6000,
                "s": 9999,
                "skin_a": "elixirstr0",
                "str": 6,
                "skin": "elixirstr0",
                "duration": 12,
                "type": "elixir"
            },
            "vdagger": {
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "cx": {
                    "scale": 0.5,
                    "accent": "#B91A6A",
                    "extension": true
                },
                "skin": "vdagger",
                "tier": 3.25,
                "lifesteal": 5,
                "upgrade": {
                    "range": 2,
                    "attack": 5.25
                },
                "name": "Vampiric Dagger",
                "g": 9600000,
                "wtype": "dagger",
                "damage": "physical",
                "range": 7.25,
                "attack": 23.25,
                "type": "weapon"
            },
            "fclaw": {
                "ability": "freeze",
                "skin_r": "fclaw_r",
                "int": 8,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "cx": {
                    "scale": 0.5,
                    "extension": true
                },
                "attr0": 0.2,
                "skin": "fclaw",
                "tier": 2,
                "a": true,
                "upgrade": {
                    "range": 1.5,
                    "attack": 4,
                    "attr0": 0.1
                },
                "name": "Frozen Claw",
                "g": 72000,
                "wtype": "fist",
                "damage": "physical",
                "range": 6,
                "attack": 14,
                "type": "weapon"
            },
            "oxhelmet": {
                "a": 2,
                "int": 10,
                "resistance": 12,
                "grades": [
                    0,
                    0,
                    10,
                    12
                ],
                "vit": 2,
                "skin": "oxhelmet",
                "dex": 10,
                "name": "OX Helmet",
                "g": 8900000,
                "armor": 55,
                "firesistance": 3,
                "str": 10,
                "output": 1,
                "type": "helmet"
            },
            "whiskey": {
                "g": 120000,
                "s": 9999,
                "name": "Whiskey On The Rocks",
                "miss": 50,
                "skin": "whiskey",
                "duration": 0.1,
                "speed": -12,
                "type": "elixir",
                "apiercing": 500,
                "skin_a": "whiskey"
            },
            "ringofluck": {
                "a": true,
                "grades": [
                    0,
                    0,
                    6,
                    7
                ],
                "name": "Ring of Luck",
                "g": 6400000,
                "skin": "ringofluck",
                "compound": {
                    "luck": 5
                },
                "type": "ring",
                "luck": 10
            },
            "ctristone": {
                "int": 1,
                "compound": {
                    "dex": 1,
                    "vit": 1,
                    "rpiercing": 5,
                    "int": 1,
                    "apiercing": 5,
                    "str": 1
                },
                "grades": [
                    1,
                    4,
                    6,
                    7
                ],
                "vit": 1,
                "skin": "tristone",
                "name": "Tri-Stone",
                "dex": 1,
                "rpiercing": 5,
                "g": 50000,
                "apiercing": 5,
                "str": 1,
                "type": "ring"
            },
            "lostearring": {
                "explanation": "Looks valuable",
                "compound": {},
                "grades": [
                    0,
                    2,
                    10,
                    12
                ],
                "quest": "lostearring",
                "skin": "lostearring",
                "a": true,
                "e": 1,
                "name": "Gold Earring",
                "g": 360000,
                "edge": -2,
                "type": "earring"
            },
            "ornament": {
                "e": 20,
                "name": "Xmas Ornament",
                "g": 3000,
                "explanation": "A beautiful ornament. A bunch of these could decorate the trees of Winterland.",
                "s": 9999,
                "skin": "ornament",
                "type": "quest"
            },
            "dexring": {
                "dex": 2,
                "name": "Ring of Dexterity",
                "g": 24000,
                "skin": "dexring",
                "grades": [
                    3,
                    5,
                    6,
                    7
                ],
                "compound": {
                    "dex": 2
                },
                "type": "ring"
            },
            "placeholder_m": {
                "ignore": true,
                "type": "placeholder",
                "name": "Placeholder",
                "g": 1,
                "skin": "placeholder_m"
            },
            "fireblade": {
                "ability": "burn",
                "skin_r": "fireblade_r",
                "grades": [
                    0,
                    8,
                    10,
                    12
                ],
                "cx": {
                    "accent": "#E34C25"
                },
                "attr0": 1.5,
                "skin": "fireblade",
                "tier": 2,
                "a": true,
                "upgrade": {
                    "range": 1.5,
                    "attack": 4.5,
                    "attr0": 0.5
                },
                "name": "Fiery Blade",
                "g": 96000,
                "wtype": "short_sword",
                "damage": "physical",
                "range": 7,
                "attack": 21,
                "type": "weapon"
            },
            "rabbitsfoot": {
                "a": true,
                "grades": [
                    0,
                    0,
                    6,
                    7
                ],
                "name": "Rabbit's Foot",
                "g": 120000,
                "skin": "rabbitsfoot",
                "explanation": "Taken from a rabbit who lived a long and happy life, after the natural death occurred, with pre-consent",
                "compound": {
                    "luck": 5
                },
                "type": "orb",
                "luck": 10
            },
            "goldscroll": {
                "stat": "gold",
                "name": "Gold Scroll",
                "g": 8000,
                "skin": "goldscroll",
                "explanation": "Adds Gold bonus to an armor with a Stat attribute.",
                "multiplier": 0.5,
                "type": "pscroll",
                "s": 9999
            },
            "mbones": {
                "name": "Mummy Bones",
                "g": 16,
                "explanation": "Scattered, ugly bones.",
                "s": 9999,
                "skin": "mbones",
                "type": "material"
            },
            "staff": {
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "cx": {
                    "accent": "#AF2131"
                },
                "skin": "staff",
                "tier": 1,
                "upgrade": {
                    "range": 3.0,
                    "attack": 5.0
                },
                "name": "Staff",
                "g": 12400,
                "wtype": "staff",
                "damage": "magical",
                "range": 50,
                "attack": 25,
                "type": "weapon"
            },
            "goldring": {
                "a": true,
                "g": 28000000,
                "grades": [
                    0,
                    2,
                    6,
                    7
                ],
                "name": "Ring of Gold",
                "gold": 4,
                "skin": "goldenring",
                "compound": {
                    "gold": 2
                },
                "type": "ring"
            },
            "strbelt": {
                "name": "Belt of Strength",
                "g": 50000,
                "skin": "strbelt",
                "grades": [
                    2,
                    5,
                    6,
                    7
                ],
                "str": 4,
                "compound": {
                    "str": 3
                },
                "type": "belt"
            },
            "pants": {
                "stat": 1,
                "upgrade": {
                    "armor": 0.5,
                    "stat": 1,
                    "resistance": 0.5
                },
                "name": "Pants",
                "g": 7800,
                "armor": 7,
                "resistance": 4,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "skin": "pants",
                "tier": 1,
                "type": "pants",
                "scroll": true
            },
            "lifestealscroll": {
                "stat": "lifesteal",
                "name": "Lifesteal Scroll",
                "g": 8000,
                "skin": "lifestealscroll",
                "explanation": "Adds Lifesteal to an armor with a Stat attribute.",
                "multiplier": 0.15,
                "type": "pscroll",
                "s": 9999
            },
            "essenceofnature": {
                "name": "Essence of Nature",
                "g": 5000,
                "explanation": "Earthly energy, waiting to spring",
                "s": 9999,
                "skin": "essenceofnature",
                "type": "material"
            },
            "charmer": {
                "attr0": 1,
                "grades": [
                    0,
                    3,
                    6,
                    7
                ],
                "g": 120000,
                "name": "Charmer",
                "vit": 10,
                "skin": "charmer",
                "compound": {
                    "attr0": 1,
                    "vit": 10
                },
                "type": "orb",
                "event": true,
                "ability": "charm"
            },
            "qubics": {
                "a": true,
                "name": "Qubics",
                "g": 5120000,
                "explanation": "Unique bio-electronic components, it's almost like they are alive. Can yield unexpected results if you introduce them to other materials!",
                "s": 9999,
                "skin": "qubics",
                "type": "qubics"
            },
            "egg3": {
                "name": "Easter Egg",
                "g": 4000,
                "explanation": "A uniquely painted Egg!",
                "s": 9999,
                "skin": "egg3",
                "type": "quest"
            },
            "feather0": {
                "name": "Magical Feather",
                "g": 800,
                "explanation": "Holding this, you understand how those huge birds can fly, it's not a normal feather!",
                "s": 9999,
                "skin": "feather0",
                "type": "material"
            },
            "scythe": {
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "cx": {
                    "accent": "#5AAEED"
                },
                "skin": "scythe",
                "tier": 3,
                "upgrade": {
                    "range": 1,
                    "attack": 12.0
                },
                "name": "Skeletor's Scythe",
                "g": 8600000,
                "wtype": "scythe",
                "damage": "physical",
                "range": 13,
                "attack": 48,
                "type": "weapon"
            },
            "sshield": {
                "armor": 60,
                "grades": [
                    4,
                    8,
                    10,
                    12
                ],
                "upgrade": {
                    "armor": 10,
                    "dreturn": 1.5,
                    "resistance": 7
                },
                "name": "Spiked Shield",
                "g": 24000,
                "skin": "sshield",
                "tier": 2,
                "dreturn": 3,
                "type": "shield",
                "resistance": 20
            },
            "merry": {
                "set": "holidays",
                "ability": "secondchance",
                "grades": [
                    0,
                    8,
                    10,
                    12
                ],
                "cx": {
                    "accent": "#289E4D"
                },
                "attr0": 10,
                "skin": "merry",
                "tier": 1.5,
                "upgrade": {
                    "range": 8.0,
                    "attack": 4.4,
                    "attr0": 2
                },
                "name": "Bow of The Merry Ranger",
                "g": 124000,
                "wtype": "bow",
                "damage": "physical",
                "range": 60.0,
                "projectile": "arrow",
                "attack": 23.0,
                "type": "weapon"
            },
            "xptome": {
                "name": "Tome of Protection",
                "g": 3200000,
                "explanation": "Significantly reduces experience loss on death. If the owner is defeated by another player, the victor receives a portion of the Tome's cost.",
                "s": 9999,
                "skin": "xptome",
                "reward": 2,
                "type": "tome"
            },
            "bronzenugget": {
                "name": "Bronze Nugget",
                "g": 3200,
                "explanation": "Ideal for crafting",
                "s": 1000,
                "skin": "bronzenugget",
                "type": "material"
            },
            "placeholder": {
                "ignore": true,
                "type": "placeholder",
                "name": "Placeholder",
                "g": 1,
                "skin": "placeholder"
            },
            "hgloves": {
                "stat": 3,
                "set": "wt3",
                "resistance": 14,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "skin": "hgloves",
                "tier": 3,
                "a": 2,
                "extra_stat": 2,
                "upgrade": {
                    "armor": 5.5,
                    "stat": 1,
                    "resistance": 5.5
                },
                "name": "Heavy Gloves",
                "g": 340000,
                "armor": 28,
                "type": "gloves",
                "scroll": true
            },
            "partyhat": {
                "stat": 1,
                "resistance": 6,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "skin": "partyhat",
                "tier": 1,
                "a": 2,
                "upgrade": {
                    "dex": 0.2,
                    "stat": 1,
                    "str": 0.2,
                    "int": 0.2,
                    "resistance": 0.5,
                    "armor": 0.5,
                    "vit": 0.1
                },
                "name": "Party Hat",
                "g": 12000,
                "armor": 5,
                "type": "helmet",
                "scroll": true
            },
            "stand0": {
                "name": "Merchant Stand",
                "g": 40000,
                "explanation": "You can become a merchant using this item.",
                "stand": "stand0",
                "skin": "stand0",
                "type": "stand"
            },
            "stand1": {
                "name": "Merchant Stand [Sell+Buy]",
                "g": 400000,
                "explanation": "You can become a merchant using this item.",
                "ignore": true,
                "stand": "stand1",
                "skin": "stand1",
                "type": "stand"
            },
            "elixirpnres": {
                "a": true,
                "s": 40,
                "skin_a": "elixirpnres",
                "pnresistance": 30,
                "g": 240000,
                "skin": "elixirpnres",
                "duration": 2,
                "type": "elixir",
                "name": "Elixir of Poison Resistance"
            },
            "axe3": {
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "cx": {
                    "large": true,
                    "accent": "#DF6915",
                    "lightborder": true
                },
                "skin": "axe3",
                "tier": 3,
                "name": "T3 Axe",
                "a": true,
                "upgrade": {
                    "range": 1,
                    "attack": 12.0
                },
                "reflection": 4,
                "g": 124000,
                "wtype": "axe",
                "damage": "physical",
                "ignore": true,
                "range": 11,
                "attack": 48,
                "type": "weapon"
            },
            "xshield": {
                "dex": 6,
                "upgrade": {
                    "resistance": 6,
                    "str": 1
                },
                "name": "Shield X",
                "evasion": 4,
                "int": 4,
                "speed": 5,
                "explanation": "A metallurgical failure but a magical marvel",
                "resistance": 24,
                "crit": 1,
                "grades": [
                    0,
                    0,
                    10,
                    12
                ],
                "cx": {
                    "accent": "#4D828F"
                },
                "g": 1200000,
                "str": 8,
                "skin": "xshield",
                "tier": 3,
                "xp": 8,
                "type": "shield"
            },
            "gcape": {
                "stat": 4,
                "pnresistance": 5,
                "resistance": 8,
                "g": 8008,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "skin": "gcape",
                "speed": -2,
                "reflection": 1,
                "upgrade": {
                    "stat": 0.1,
                    "resistance": 4,
                    "pnresistance": 1
                },
                "name": "Grinch's Cape",
                "evasion": 1,
                "type": "cape"
            },
            "bow": {
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "cx": {
                    "accent": "#AF2131"
                },
                "skin": "bow",
                "tier": 1,
                "upgrade": {
                    "range": 7.666666666666666,
                    "attack": 4.0
                },
                "name": "Bow",
                "g": 16000,
                "wtype": "bow",
                "damage": "physical",
                "range": 55,
                "projectile": "arrow",
                "attack": 20,
                "type": "weapon"
            },
            "essenceoffire": {
                "name": "Essence of Fire",
                "g": 40000,
                "explanation": "So fierce, so mesmerizing",
                "s": 9999,
                "skin": "essenceoffire",
                "type": "material"
            },
            "heartwood": {
                "a": true,
                "ability": "tangle",
                "explanation": "One with nature",
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "cx": {
                    "accent": "#155E0C"
                },
                "skin": "heartwood",
                "tier": 3.5,
                "speed": 4,
                "dex": 20,
                "upgrade": {
                    "dex": 4,
                    "range": 1.5,
                    "attack": 6.5
                },
                "name": "Heartwood",
                "g": 18700000,
                "wtype": "sword",
                "damage": "physical",
                "range": 12.5,
                "attack": 27.5,
                "type": "weapon"
            },
            "forscroll": {
                "stat": "for",
                "name": "Fortitude Scroll",
                "g": 8000,
                "skin": "forscroll",
                "explanation": "Adds Fortitude to an armor with a Stat attribute.",
                "multiplier": 1,
                "type": "pscroll",
                "s": 9999
            },
            "pstem": {
                "s": 9999,
                "type": "material",
                "name": "Pumpkin Stem",
                "g": 5,
                "skin": "pstem"
            },
            "smoke": {
                "onclick": "socket.emit('throw',{num:locate_item('smoke'),x:character.real_x,y:character.real_y})",
                "s": 100,
                "name": "Pouch of Poof",
                "g": 20,
                "skin": "smoke",
                "action": "THROW!",
                "explanation": "A pyrotechnic pouch developed for those who want to feel like Rogue's",
                "type": "throw"
            },
            "intscroll": {
                "stat": "int",
                "name": "Intelligence Scroll",
                "g": 8000,
                "skin": "intscroll",
                "explanation": "Adds Intelligence to an armor with a Stat attribute.",
                "multiplier": 1,
                "type": "pscroll",
                "s": 9999
            },
            "spearofthedead": {
                "explanation": "A deadly weapon",
                "damage": "physical",
                "g": 724000,
                "grades": [
                    0,
                    5,
                    10,
                    12
                ],
                "cx": {
                    "accent": "#D87F0E"
                },
                "skin": "spearofthedead",
                "tier": 2.4,
                "a": true,
                "upgrade": {
                    "range": 2,
                    "attack": 5.2299999999999995
                },
                "name": "Spear of the Dead",
                "for": 3,
                "wtype": "spear",
                "apiercing": 12,
                "range": 17.8,
                "str": 8,
                "attack": 22.0,
                "type": "weapon"
            },
            "frankypants": {
                "stat": 3,
                "resistance": 21,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "vit": 6,
                "skin": "frankypants",
                "tier": 3,
                "speed": 1,
                "a": 2,
                "extra_stat": 2,
                "upgrade": {
                    "armor": 5.5,
                    "stat": 1,
                    "resistance": 5.5
                },
                "name": "Franky Pants",
                "g": 780000,
                "armor": 35,
                "type": "pants",
                "scroll": true
            },
            "orbofint": {
                "grades": [
                    1,
                    4,
                    6,
                    7
                ],
                "edge": -2,
                "name": "Orb of Intelligence",
                "g": 240000,
                "skin": "orbofint",
                "int": 4,
                "compound": {
                    "int": 3
                },
                "type": "orb"
            },
            "hpants": {
                "stat": 3,
                "set": "wt3",
                "resistance": 21,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "skin": "hpants",
                "tier": 3,
                "a": 2,
                "extra_stat": 2,
                "upgrade": {
                    "armor": 5.5,
                    "stat": 1,
                    "resistance": 5.5
                },
                "name": "Heavy Underarmor",
                "g": 780000,
                "armor": 35,
                "type": "pants",
                "scroll": true
            },
            "licence": {
                "name": "Licence to Kill",
                "g": 25000000,
                "explanation": "With this licence, you gain a unique immunity for 7 minutes. No one can bother you for having too many comrades in this realm!",
                "s": 9999,
                "skin": "licence",
                "type": "licence"
            },
            "spear": {
                "damage": "physical",
                "grades": [
                    3,
                    8,
                    10,
                    12
                ],
                "cx": {
                    "accent": "#AE4731"
                },
                "skin": "spear",
                "tier": 1.25,
                "a": 2,
                "upgrade": {
                    "range": 2,
                    "attack": 4.425,
                    "apiercing": 5
                },
                "name": "Spear",
                "g": 72000,
                "wtype": "spear",
                "apiercing": 10,
                "range": 15.5,
                "attack": 16.25,
                "type": "weapon"
            },
            "lotusf": {
                "s": 9999,
                "type": "material",
                "name": "Lotus Flower",
                "g": 12000,
                "skin": "lotusf"
            },
            "egg5": {
                "name": "Easter Egg",
                "g": 4000,
                "explanation": "A uniquely painted Egg!",
                "s": 9999,
                "skin": "egg5",
                "type": "quest"
            },
            "glitch": {
                "ignore": true,
                "a": true,
                "e": 1,
                "name": "A Glitch",
                "g": 10000,
                "skin": "glitch",
                "explanation": "Huh?! ??!",
                "type": "misc",
                "event": true
            },
            "offeringp": {
                "a": true,
                "s": 1000,
                "name": "Primling",
                "g": 480000,
                "skin": "offeringp",
                "grade": 1,
                "explanation": "A tiny cute essence that can be transferred to items during upgrades and compounds. Significantly increases the chance to succeed.",
                "type": "offering"
            },
            "bataxe": {
                "delia": "Now you see me, now you see the floor",
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "cx": {
                    "large": true,
                    "accent": "#DF6915",
                    "lightborder": true
                },
                "skin": "bataxe",
                "tier": 2.25,
                "name": "Ghastly Battle Axe",
                "a": true,
                "upgrade": {
                    "range": 1,
                    "attack": 10.125
                },
                "reflection": 4,
                "g": 124000,
                "wtype": "axe",
                "damage": "physical",
                "range": 8.75,
                "attack": 41.25,
                "type": "weapon"
            },
            "bunnyears": {
                "stat": 2,
                "resistance": 16,
                "tier": 2,
                "grades": [
                    4,
                    8,
                    10,
                    12
                ],
                "protection": true,
                "vit": 4,
                "skin": "bunnyears",
                "cuteness": 12,
                "name": "Legacy Bunny Ears",
                "a": 2,
                "extra_stat": 1,
                "upgrade": {
                    "armor": 2.5,
                    "stat": 1,
                    "resistance": 2.5,
                    "evasion": 0.2
                },
                "evasion": 1,
                "g": 32000,
                "armor": 14,
                "type": "helmet",
                "scroll": true
            },
            "xmace": {
                "set": "holidays",
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "cx": {
                    "accent": "#AF2131"
                },
                "skin": "xmace",
                "tier": 2.25,
                "upgrade": {
                    "range": 1,
                    "attack": 5.375
                },
                "name": "Merry Mace",
                "g": 37000,
                "type": "weapon",
                "wtype": "mace",
                "damage": "physical",
                "range": 6.25,
                "attack": 27.5,
                "stun": 2
            },
            "northstar": {
                "a": true,
                "grades": [
                    0,
                    0,
                    6,
                    7
                ],
                "name": "The North Star",
                "g": 64000000,
                "skin": "northstar",
                "xp": 10,
                "compound": {
                    "xp": 5
                },
                "type": "amulet"
            },
            "frozenkey": {
                "name": "The Frozen Cave Key",
                "g": 50000,
                "explanation": "A key, imbued with magical energy.",
                "s": 10,
                "skin": "frozenkey",
                "type": "dungeon_key",
                "opens": "winter_instance"
            },
            "chrysalis0": {
                "ignore": true,
                "a": true,
                "name": "Dragold's Chrysalis",
                "g": 40000,
                "skin": "goldenegg",
                "grade": 0,
                "type": "chrysalis",
                "monster": "dragold"
            },
            "wand": {
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "cx": {
                    "scale": 0.5,
                    "accent": "#EA6238",
                    "extension": true
                },
                "skin": "wand",
                "tier": 1,
                "upgrade": {
                    "range": 6.0,
                    "attack": 3.0
                },
                "name": "Wand",
                "g": 48600,
                "wtype": "wand",
                "damage": "magical",
                "range": 30,
                "projectile": "wandy",
                "attack": 16,
                "type": "weapon"
            },
            "elixirint0": {
                "name": "Elixir of Intelligence",
                "g": 6000,
                "int": 6,
                "s": 9999,
                "skin_a": "elixirint0",
                "skin": "elixirint0",
                "duration": 12,
                "type": "elixir"
            },
            "crossbow": {
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "skin": "crossbow",
                "tier": 2,
                "upgrade": {
                    "range": 10.733333333333334,
                    "attack": 6.3
                },
                "name": "Crossbow",
                "g": 480000,
                "wtype": "crossbow",
                "damage": "physical",
                "range": 101,
                "projectile": "crossbowarrow",
                "attack": 37,
                "type": "weapon"
            },
            "funtoken": {
                "name": "Fun Token",
                "g": 12000,
                "explanation": "A token representing fun with friends. Collect them from Daily events and exchange them for treasures!",
                "s": 9999,
                "skin": "funtoken",
                "type": "token"
            },
            "swordofthedead": {
                "resistance": 20,
                "grades": [
                    0,
                    4,
                    10,
                    12
                ],
                "cx": {
                    "accent": "#D87F0E"
                },
                "vit": -12,
                "skin": "swordofthedead",
                "tier": 2.5,
                "range": 8.0,
                "a": true,
                "upgrade": {
                    "range": 1.5,
                    "attack": 4.75,
                    "resistance": 2.5
                },
                "name": "Sword of the Dead",
                "g": 224000,
                "wtype": "short_sword",
                "damage": "physical",
                "attack": 26.0,
                "str": 10,
                "type": "weapon"
            },
            "iceskates": {
                "stat": 2,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "skin": "iceskates",
                "tier": 2,
                "speed": -10,
                "extra_stat": 1,
                "upgrade": {
                    "armor": 2.5,
                    "stat": 1,
                    "speed": 1
                },
                "name": "Ice Skates",
                "g": 920000,
                "armor": 8,
                "type": "shoes",
                "scroll": true
            },
            "orbofvit": {
                "g": 240000,
                "grades": [
                    1,
                    4,
                    6,
                    7
                ],
                "edge": -2,
                "name": "Orb of Vitality",
                "vit": 10,
                "skin": "orbofvit",
                "compound": {
                    "vit": 4
                },
                "type": "orb"
            },
            "fury": {
                "a": true,
                "stat": 1,
                "set": "fury",
                "resistance": 11,
                "tier": 1.5,
                "grades": [
                    0,
                    0,
                    10,
                    12
                ],
                "legacy": {
                    "set": null,
                    "class": null
                },
                "skin": "fury",
                "crit": 6,
                "class": [
                    "rogue",
                    "warrior"
                ],
                "dex": 2,
                "upgrade": {
                    "crit": 0.5,
                    "armor": 1.5,
                    "stat": 1,
                    "apiercing": 10,
                    "resistance": 1.5
                },
                "name": "Band of Fury",
                "g": 6400000,
                "armor": 10,
                "apiercing": 20,
                "type": "helmet",
                "scroll": true
            },
            "trigger": {
                "a": true,
                "g": 6400000,
                "grades": [
                    0,
                    0,
                    1,
                    3
                ],
                "name": "The Trigger",
                "str": 6,
                "skin": "trigger",
                "stun": 1.5,
                "compound": {
                    "stun": 0.75,
                    "apiercing": 2,
                    "str": 2
                },
                "type": "ring",
                "apiercing": 10
            },
            "egg0": {
                "name": "Easter Egg",
                "g": 4000,
                "explanation": "A uniquely painted Egg!",
                "s": 9999,
                "skin": "egg0",
                "type": "quest"
            },
            "apiercingscroll": {
                "stat": "apiercing",
                "name": "Armor Piercing Scroll",
                "g": 8000,
                "skin": "apiercingscroll",
                "explanation": "Adds Armor Piercing to an armor with a Stat attribute.",
                "multiplier": 2.25,
                "type": "pscroll",
                "s": 9999
            },
            "mwarmor": {
                "stat": 2,
                "set": "mwarrior",
                "explanation": "You served our realm well",
                "resistance": 23,
                "grades": [
                    0,
                    5,
                    10,
                    12
                ],
                "skin": "mwarmor",
                "tier": 2.625,
                "class": [
                    "warrior"
                ],
                "extra_stat": 1,
                "upgrade": {
                    "armor": 4.0,
                    "stat": 1,
                    "resistance": 4.0
                },
                "name": "Armor of the Hunter Warrior",
                "g": 96000,
                "armor": 35,
                "type": "chest",
                "scroll": true
            },
            "mushroomstaff": {
                "grades": [
                    5,
                    8,
                    10,
                    12
                ],
                "cx": {
                    "accent": "#D34C57"
                },
                "skin": "mushroomstaff",
                "tier": 1.25,
                "class": [
                    "mage"
                ],
                "upgrade": {
                    "range": 3.125,
                    "attack": 5.125
                },
                "name": "Mushroom Staff",
                "g": 16400,
                "wtype": "staff",
                "damage": "magical",
                "range": 51.5,
                "rpiercing": 40,
                "attack": 27.5,
                "type": "weapon"
            },
            "egg2": {
                "name": "Easter Egg",
                "g": 4000,
                "explanation": "A uniquely painted Egg!",
                "s": 9999,
                "skin": "egg2",
                "type": "quest"
            },
            "mcboots": {
                "stat": 2,
                "set": "mmerchant",
                "explanation": "Your comrades served our realm well",
                "resistance": 6,
                "grades": [
                    0,
                    5,
                    10,
                    12
                ],
                "skin": "mcboots",
                "tier": 2.75,
                "speed": 7.0,
                "class": [
                    "merchant"
                ],
                "extra_stat": 1,
                "upgrade": {
                    "armor": 4.0,
                    "stat": 1,
                    "speed": 1.0625,
                    "resistance": 2.0
                },
                "name": "Boots of the Hunter Merchant",
                "g": 240000,
                "armor": 12,
                "for": 8,
                "type": "shoes",
                "scroll": true
            },
            "xpbooster": {
                "explanation": "Increases experience gain. Needs to be activated. Can be shifted into other boosters.",
                "compound": {
                    "xp": 12
                },
                "grades": [
                    0,
                    10,
                    6,
                    7
                ],
                "skin_a": "xpbooster_a",
                "skin": "xpbooster",
                "xp": 20,
                "name": "XP Booster",
                "g": 79840000,
                "days": 30,
                "type": "booster",
                "gain": "xp"
            },
            "mpxgloves": {
                "stat": 2,
                "set": "mpx",
                "ability": "restore_mp",
                "explanation": "The powers of this glove grow fivefold against humanoids!",
                "resistance": 8,
                "grades": [
                    0,
                    0,
                    9,
                    12
                ],
                "attr0": 2,
                "skin": "mpxgloves",
                "tier": 2,
                "extra_stat": 1,
                "upgrade": {
                    "armor": 2.5,
                    "stat": 1,
                    "resistance": 2.5,
                    "attr0": 0.5
                },
                "name": "Mana Gloves",
                "g": 34000000,
                "armor": 16,
                "type": "gloves",
                "scroll": true
            },
            "intbelt": {
                "name": "Belt of Intelligence",
                "g": 50000,
                "int": 4,
                "skin": "intbelt",
                "grades": [
                    2,
                    5,
                    6,
                    7
                ],
                "compound": {
                    "int": 3
                },
                "type": "belt"
            },
            "orbofsc": {
                "a": true,
                "set": "holidays",
                "attr0": 1,
                "int": 2,
                "compound": {
                    "dex": 1,
                    "vit": 1,
                    "int": 2,
                    "mp": 100,
                    "str": 1,
                    "attr0": 1
                },
                "grades": [
                    0,
                    0,
                    6,
                    7
                ],
                "vit": 2,
                "skin": "orbofsc",
                "ability": "secondchance",
                "dex": 2,
                "name": "Orb of Second Chances",
                "g": 120000,
                "mp": 200,
                "str": 2,
                "type": "orb"
            },
            "egg4": {
                "name": "Easter Egg",
                "g": 4000,
                "explanation": "A uniquely painted Egg!",
                "s": 9999,
                "skin": "egg4",
                "type": "quest"
            },
            "eggnog": {
                "g": 6000,
                "s": 9999,
                "name": "Eggnog",
                "evasion": 2.5,
                "skin": "eggnog",
                "duration": 48,
                "hp": 1200,
                "type": "elixir",
                "explanation": "Fills your heart with warmth and joy.",
                "skin_a": "eggnog"
            },
            "stick": {
                "a": true,
                "grades": [
                    4,
                    7,
                    10,
                    12
                ],
                "upgrade": {},
                "name": "Stick",
                "g": 299999,
                "skin": "stick",
                "explanation": "...",
                "type": "misc"
            },
            "ftrinket": {
                "a": true,
                "int": 2,
                "explanation": "Good things come to those who wait",
                "compound": {
                    "armor": 5,
                    "speed": 1,
                    "vit": 3
                },
                "grades": [
                    1,
                    3,
                    6,
                    7
                ],
                "vit": 2,
                "skin": "ftrinket",
                "speed": 0.5,
                "dex": 2,
                "name": "Trinket of Faith",
                "g": 96000,
                "armor": 5,
                "str": 2,
                "type": "orb"
            },
            "egg6": {
                "name": "Easter Egg",
                "g": 4000,
                "explanation": "A uniquely painted Egg!",
                "s": 9999,
                "skin": "egg6",
                "type": "quest"
            },
            "candycane": {
                "a": true,
                "s": 9999,
                "e": 1,
                "name": "Candy Cane",
                "g": 24000,
                "skin": "candycane",
                "explanation": "The old man in Winterland was looking for sweets.",
                "type": "gem"
            },
            "sstinger": {
                "s": 9999,
                "type": "material",
                "name": "Scorpion Stinger",
                "g": 4000,
                "skin": "sstinger"
            },
            "mearring": {
                "a": true,
                "grades": [
                    0,
                    0,
                    6,
                    7
                ],
                "set": "holidays",
                "name": "Mistletoe Earring",
                "g": 12000000,
                "skin": "mearring",
                "compound": {
                    "luck": 1
                },
                "type": "earring",
                "luck": 8
            },
            "mshield": {
                "stat": 5,
                "grades": [
                    0,
                    0,
                    10,
                    12
                ],
                "cx": {
                    "accent": "#E90010"
                },
                "skin": "mshield",
                "tier": 3,
                "upgrade": {
                    "armor": 5,
                    "stat": 1.25,
                    "luck": 1
                },
                "name": "Shield M",
                "g": 1200000,
                "armor": 20,
                "type": "shield",
                "luck": 8
            },
            "elixirvit0": {
                "name": "Elixir of Vitality",
                "g": 6000,
                "s": 9999,
                "skin_a": "elixirvit0",
                "vit": 8,
                "skin": "elixirvit0",
                "duration": 12,
                "type": "elixir"
            },
            "elixirvit1": {
                "name": "Elixir of Greater Vitality",
                "g": 20000,
                "s": 9999,
                "skin_a": "elixirvit1",
                "vit": 12,
                "skin": "elixirvit1",
                "duration": 24,
                "type": "elixir"
            },
            "elixirvit2": {
                "a": true,
                "g": 120000,
                "s": 9999,
                "name": "Elixir of Extreme Vitality",
                "vit": 18,
                "skin": "elixirvit2",
                "duration": 48,
                "type": "elixir",
                "skin_a": "elixirvit2"
            },
            "blade": {
                "damage": "physical",
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "skin": "blade",
                "tier": 1,
                "upgrade": {
                    "range": 1.5,
                    "attack": 4.0
                },
                "name": "Blade",
                "g": 8400,
                "wtype": "short_sword",
                "attack": 15,
                "range": 5,
                "type": "weapon"
            },
            "xshot": {
                "s": 40,
                "name": "X-Shot",
                "g": 1,
                "skin": "xshot",
                "duration": 1e-12,
                "explanation": "Increases your luck in gambling a hundredfold! Warning: Some establishments might screen you before taking a bet. Can be detected in your blood for 12 hours",
                "withdrawal": "xshotted",
                "type": "elixir",
                "skin_a": "xshot"
            },
            "elixirluck": {
                "a": true,
                "s": 9999,
                "skin_a": "elixirluck",
                "name": "Liquid Luck",
                "g": 240000,
                "skin": "elixirluck",
                "duration": 12,
                "type": "elixir",
                "luck": 16
            },
            "elixirstr1": {
                "name": "Elixir of Greater Strength",
                "g": 20000,
                "s": 9999,
                "skin_a": "elixirstr1",
                "str": 8,
                "skin": "elixirstr1",
                "duration": 24,
                "type": "elixir"
            },
            "elixirstr2": {
                "a": true,
                "g": 120000,
                "s": 9999,
                "name": "Elixir of Extreme Strength",
                "str": 12,
                "skin": "elixirstr2",
                "duration": 48,
                "type": "elixir",
                "skin_a": "elixirstr2"
            },
            "solitaire": {
                "grades": [
                    0,
                    0,
                    6,
                    7
                ],
                "bling": 100,
                "name": "Solitaire Ring",
                "g": 1200000,
                "skin": "solitaire",
                "explanation": "The diamond is mesmerizing",
                "compound": {
                    "bling": 200
                },
                "type": "ring",
                "event": true
            },
            "elixirdex0": {
                "dex": 6,
                "name": "Elixir of Dexterity",
                "g": 6000,
                "s": 9999,
                "skin_a": "elixirdex0",
                "skin": "elixirdex0",
                "duration": 12,
                "type": "elixir"
            },
            "cearring": {
                "g": 380000,
                "grades": [
                    0,
                    4,
                    6,
                    7
                ],
                "name": "Earring of The Crypt",
                "str": 5,
                "skin": "cearring",
                "int": 5,
                "compound": {
                    "int": 2,
                    "str": 2
                },
                "type": "earring"
            },
            "mrnarmor": {
                "stat": 2,
                "set": "mranger",
                "explanation": "You served our realm well",
                "resistance": 22,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "frequency": 1,
                "skin": "mrnarmor",
                "tier": 2.25,
                "class": [
                    "ranger"
                ],
                "extra_stat": 1,
                "upgrade": {
                    "armor": 4.0,
                    "stat": 1,
                    "resistance": 4.0
                },
                "name": "Armor of the Hunter Ranger",
                "g": 96000,
                "armor": 33,
                "type": "chest",
                "scroll": true
            },
            "dragondagger": {
                "explanation": "Majestic",
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "cx": {
                    "scale": 0.5,
                    "accent": "#D19FDA",
                    "extension": true
                },
                "skin": "dragondagger",
                "tier": 3,
                "a": true,
                "upgrade": {
                    "armor": 4,
                    "range": 2,
                    "attack": 5
                },
                "name": "Dragon Dagger",
                "g": 2400000,
                "armor": 40,
                "wtype": "dagger",
                "damage": "physical",
                "range": 11,
                "str": 20,
                "attack": 22,
                "type": "weapon"
            },
            "quiver": {
                "dex": 2,
                "armor": 10,
                "range": 20,
                "upgrade": {
                    "dex": 1,
                    "armor": 2,
                    "range": 3.5
                },
                "name": "Quiver",
                "g": 24000,
                "skin": "quiver",
                "tier": 1,
                "type": "quiver",
                "grades": [
                    3,
                    7,
                    10,
                    12
                ]
            },
            "candycanesword": {
                "set": "holidays",
                "ability": "sugarrush",
                "grades": [
                    0,
                    8,
                    10,
                    12
                ],
                "skin": "candycanesword",
                "tier": 2,
                "a": true,
                "upgrade": {
                    "range": 1.0,
                    "attack": 4.5
                },
                "name": "Candy Cane Sword",
                "g": 72000,
                "wtype": "short_sword",
                "damage": "physical",
                "range": 5,
                "attack": 21,
                "type": "weapon"
            },
            "stoneofgold": {
                "ignore": true,
                "skin_a": "stoneofgold",
                "g": 100000000,
                "skin": "stoneofgold",
                "explanation": "Helps you find up to 40% more gold from monsters.",
                "type": "stone",
                "days": 30,
                "name": "Stone of Riches"
            },
            "wbreeches": {
                "stat": 1,
                "set": "wanderers",
                "resistance": 4,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "skin": "wbreeches",
                "tier": 1,
                "speed": 1,
                "upgrade": {
                    "armor": 0.5,
                    "stat": 1,
                    "resistance": 0.5
                },
                "name": "Wanderer's Breeches",
                "g": 15600,
                "armor": 7,
                "type": "pants",
                "scroll": true
            },
            "crabclaw": {
                "s": 9999,
                "type": "material",
                "name": "Crab Claw",
                "g": 120,
                "skin": "crabclaw"
            },
            "powerglove": {
                "a": true,
                "extra_stat": 0,
                "stat": 1,
                "set": "legends",
                "ability": "power",
                "rpiercing": 16,
                "armor": 16,
                "apiercing": 16,
                "resistance": 8,
                "grades": [
                    0,
                    0,
                    10,
                    12
                ],
                "upgrade": {
                    "stat": 1,
                    "rpiercing": 2,
                    "armor": 2.5,
                    "apiercing": 2,
                    "resistance": 2.5,
                    "frequency": 0.2
                },
                "charge": 120,
                "frequency": 2,
                "g": 1600000,
                "skin": "powerglove",
                "tier": 2,
                "type": "gloves",
                "scroll": true,
                "name": "Power Glove"
            },
            "hpotx": {
                "name": "Super HP Potion",
                "g": 20000,
                "s": 9999,
                "cooldown": 2000,
                "skin": "hpotx",
                "type": "pot",
                "gives": [
                    [
                        "hp",
                        10000
                    ]
                ]
            },
            "frogt": {
                "s": 9999,
                "type": "material",
                "name": "Frog Tongue",
                "g": 3,
                "skin": "frogt"
            },
            "firecrackers": {
                "onclick": "socket.emit('throw',{num:locate_item('firecrackers'),x:character.real_x,y:character.real_y})",
                "s": 9999,
                "name": "Firecracker",
                "g": 20,
                "skin": "firecrackers",
                "action": "THROW!",
                "explanation": "Scary but harmless",
                "type": "throw"
            },
            "mmarmor": {
                "stat": 2,
                "set": "mmage",
                "explanation": "You served our realm well",
                "resistance": 22,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "skin": "mmarmor",
                "tier": 2.125,
                "class": [
                    "mage"
                ],
                "extra_stat": 1,
                "upgrade": {
                    "armor": 4.0,
                    "stat": 1,
                    "resistance": 4.0
                },
                "name": "Armor of the Hunter Mage",
                "g": 96000,
                "armor": 33,
                "type": "chest",
                "scroll": true
            },
            "carrot": {
                "s": 9999,
                "type": "material",
                "name": "Carrot",
                "g": 4,
                "skin": "carrot"
            },
            "ukey": {
                "action": "UNLOCK",
                "s": 3,
                "name": "The Bank Key",
                "g": 50000000,
                "skin": "ukey",
                "unlocks": "bank_u",
                "explanation": "Key to the bank's underground",
                "onclick": "socket.emit('activate',{num:locate_item('ukey')})",
                "type": "bank_key"
            },
            "mmhat": {
                "stat": 2,
                "set": "mmage",
                "explanation": "You served our realm well",
                "resistance": 22,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "protection": true,
                "skin": "mmhat",
                "tier": 2.125,
                "class": [
                    "mage"
                ],
                "extra_stat": 1,
                "upgrade": {
                    "armor": 4.0,
                    "stat": 1,
                    "resistance": 4.0
                },
                "name": "Hat of the Hunter Mage",
                "g": 64000,
                "armor": 19,
                "rpiercing": 40,
                "type": "helmet",
                "scroll": true
            },
            "armorscroll": {
                "stat": "armor",
                "name": "Armor Scroll",
                "g": 8000,
                "skin": "armorscroll",
                "explanation": "Adds Armor to an armor with a Stat attribute.",
                "multiplier": 2.25,
                "type": "pscroll",
                "s": 9999
            },
            "starkillers": {
                "stat": 1,
                "set": "legends",
                "resistance": 21,
                "crit": 2,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "legacy": {
                    "set": null,
                    "class": null
                },
                "vit": 10,
                "skin": "starkillers",
                "tier": 3,
                "class": [
                    "mage",
                    "priest"
                ],
                "a": 2,
                "extra_stat": 0,
                "upgrade": {
                    "crit": 0.2,
                    "armor": 5.5,
                    "stat": 1,
                    "resistance": 5.5,
                    "rpiercing": 5
                },
                "name": "Star Killer's Pants",
                "rpiercing": 80,
                "armor": 35,
                "g": 7800000,
                "type": "pants",
                "scroll": true
            },
            "cdarktristone": {
                "int": 1,
                "compound": {
                    "dex": 1,
                    "vit": 1,
                    "rpiercing": 5,
                    "int": 1,
                    "apiercing": 5,
                    "str": 1
                },
                "g": 50000,
                "grades": [
                    1,
                    4,
                    6,
                    7
                ],
                "vit": 1,
                "skin": "darktristone",
                "name": "Dark Tri-Stone",
                "dex": 1,
                "rpiercing": 5,
                "evasion": 3,
                "apiercing": 5,
                "str": 1,
                "type": "ring"
            },
            "helmet": {
                "stat": 1,
                "upgrade": {
                    "armor": 0.5,
                    "stat": 1,
                    "resistance": 0.5
                },
                "name": "Helmet",
                "g": 3200,
                "armor": 5,
                "resistance": 6,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "skin": "helmet",
                "tier": 1,
                "type": "helmet",
                "scroll": true
            },
            "xmasshoes": {
                "stat": 1,
                "set": "holidays",
                "grades": [
                    4,
                    8,
                    10,
                    12
                ],
                "vit": 2,
                "skin": "xmasshoes",
                "tier": 1.5,
                "speed": 6.0,
                "a": true,
                "upgrade": {
                    "armor": 1.5,
                    "stat": 1,
                    "speed": 0.75
                },
                "name": "Xmas Shoes",
                "g": 36000,
                "armor": 6,
                "type": "shoes",
                "scroll": true
            },
            "pyjamas": {
                "stat": 2,
                "hp": 400,
                "explanation": "Comfortable.",
                "resistance": 16,
                "grades": [
                    4,
                    8,
                    10,
                    12
                ],
                "skin": "pyjamas",
                "tier": 2,
                "a": 2,
                "extra_stat": 1,
                "upgrade": {
                    "armor": 2.5,
                    "hp": 50,
                    "stat": 1,
                    "resistance": 2.5
                },
                "name": "Legacy Pyjamas",
                "g": 480000,
                "armor": 24,
                "charisma": -5,
                "type": "chest",
                "scroll": true
            },
            "mrarmor": {
                "stat": 2,
                "set": "mrogue",
                "explanation": "You served our realm well",
                "resistance": 22,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "skin": "mrarmor",
                "tier": 2.25,
                "class": [
                    "rogue"
                ],
                "extra_stat": 1,
                "upgrade": {
                    "armor": 4.0,
                    "stat": 1,
                    "resistance": 4.0
                },
                "name": "Armor of the Hunter Rogue",
                "g": 96000,
                "armor": 33,
                "type": "chest",
                "scroll": true
            },
            "mwgloves": {
                "stat": 2,
                "set": "mwarrior",
                "explanation": "You served our realm well",
                "resistance": 12,
                "crit": 1,
                "grades": [
                    0,
                    5,
                    10,
                    12
                ],
                "skin": "mwgloves",
                "tier": 2.625,
                "class": [
                    "warrior"
                ],
                "extra_stat": 1,
                "upgrade": {
                    "armor": 4.0,
                    "stat": 1,
                    "resistance": 4.0
                },
                "name": "Gloves of the Hunter Warrior",
                "g": 68000,
                "armor": 23,
                "type": "gloves",
                "scroll": true
            },
            "strearring": {
                "name": "Earring of Strength",
                "g": 38000,
                "skin": "strearring",
                "grades": [
                    2,
                    5,
                    6,
                    7
                ],
                "str": 3,
                "compound": {
                    "str": 2
                },
                "type": "earring"
            },
            "mpgloves": {
                "stat": 2,
                "set": "mpriest",
                "explanation": "You served our realm well",
                "resistance": 11,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "skin": "mpgloves",
                "tier": 2.125,
                "class": [
                    "priest"
                ],
                "extra_stat": 1,
                "upgrade": {
                    "armor": 4.0,
                    "stat": 1,
                    "resistance": 4.0
                },
                "name": "Gloves of the Hunter Priest",
                "g": 68000,
                "armor": 22,
                "output": 5,
                "type": "gloves",
                "scroll": true
            },
            "mwpants": {
                "stat": 2,
                "set": "mwarrior",
                "explanation": "You served our realm well",
                "resistance": 18,
                "grades": [
                    0,
                    5,
                    10,
                    12
                ],
                "skin": "mwpants",
                "tier": 2.625,
                "class": [
                    "warrior"
                ],
                "extra_stat": 1,
                "upgrade": {
                    "armor": 4.0,
                    "stat": 1,
                    "resistance": 4.0
                },
                "name": "Underarmor of the Hunter Warrior",
                "g": 128000,
                "armor": 29,
                "type": "pants",
                "scroll": true
            },
            "vgloves": {
                "stat": 3,
                "set": "vampires",
                "int": 3,
                "resistance": 14,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "upgrade": {
                    "armor": 5.5,
                    "stat": 1,
                    "resistance": 5.5
                },
                "skin": "vgloves",
                "tier": 3,
                "extra_stat": 2,
                "fzresistance": 4,
                "name": "Vampiric Gloves",
                "g": 340000,
                "armor": 28,
                "str": 3,
                "type": "gloves",
                "scroll": true
            },
            "phelmet": {
                "stat": 1,
                "resistance": 16,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "protection": true,
                "skin": "phelmet",
                "tier": 2,
                "name": "Pumpkin Head",
                "a": 2,
                "extra_stat": 0,
                "upgrade": {
                    "armor": 2.5,
                    "stat": 1,
                    "reflection": 0.4,
                    "resistance": 2.5
                },
                "reflection": 1,
                "g": 72000,
                "armor": 14,
                "type": "helmet",
                "scroll": true
            },
            "figurine": {
                "spawn": "terracota",
                "ignore": true,
                "s": 9999,
                "note": "Summons an ancient soldier to fight for you",
                "name": "Terracota Army Figurine",
                "g": 40000,
                "skin": "figurine",
                "action": "BREAK!",
                "type": "spawner"
            },
            "goldenpowerglove": {
                "a": true,
                "extra_stat": 1,
                "stat": 6,
                "set": "legends",
                "ability": "xpower",
                "rpiercing": 64,
                "armor": 36,
                "apiercing": 64,
                "resistance": 18,
                "grades": [
                    0,
                    0,
                    8,
                    10
                ],
                "upgrade": {
                    "stat": 1,
                    "rpiercing": 4,
                    "armor": 7.5,
                    "apiercing": 4,
                    "resistance": 7.5,
                    "frequency": 0.2
                },
                "charge": 90,
                "frequency": 5,
                "g": 16000000,
                "skin": "goldenpowerglove",
                "tier": 4,
                "type": "gloves",
                "scroll": true,
                "name": "Golden Power Glove"
            },
            "sword": {
                "grades": [
                    0,
                    4,
                    10,
                    12
                ],
                "cx": {
                    "accent": "#CC5A10"
                },
                "skin": "sword",
                "tier": 2.5,
                "upgrade": {
                    "range": 1.5,
                    "attack": 4.75
                },
                "name": "Short Sword",
                "g": 48000,
                "wtype": "short_sword",
                "damage": "physical",
                "range": 8.0,
                "attack": 24.0,
                "type": "weapon"
            },
            "mrboots": {
                "stat": 2,
                "set": "mrogue",
                "explanation": "You served our realm well",
                "resistance": 5,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "skin": "mrboots",
                "tier": 2.25,
                "speed": 6.0,
                "class": [
                    "rogue"
                ],
                "extra_stat": 1,
                "upgrade": {
                    "armor": 4.0,
                    "stat": 1,
                    "speed": 0.9375,
                    "resistance": 2.0
                },
                "name": "Boots of the Hunter Rogue",
                "g": 240000,
                "armor": 11,
                "type": "shoes",
                "scroll": true
            },
            "bkey": {
                "action": "UNLOCK",
                "s": 5,
                "name": "The Bank Key",
                "g": 5000000,
                "skin": "bkey",
                "unlocks": "bank_b",
                "explanation": "Key to the bank's basement",
                "onclick": "socket.emit('activate',{num:locate_item('bkey')})",
                "type": "bank_key"
            },
            "poker": {
                "stat": 1,
                "ability": "poke",
                "explanation": "Pokey pokey!",
                "resistance": 6,
                "tier": 1.5,
                "grades": [
                    4,
                    8,
                    10,
                    12
                ],
                "skin": "poker",
                "crit": 0.5,
                "a": true,
                "upgrade": {
                    "armor": 1.5,
                    "stat": 1,
                    "resistance": 1.5
                },
                "name": "Poker",
                "g": 16000,
                "armor": 11,
                "type": "gloves",
                "scroll": true
            },
            "harmor": {
                "stat": 3,
                "set": "wt3",
                "resistance": 28,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "skin": "harmor",
                "tier": 3,
                "a": 2,
                "extra_stat": 2,
                "upgrade": {
                    "armor": 5.5,
                    "stat": 1,
                    "resistance": 5.5
                },
                "name": "Heavy Armor",
                "g": 480000,
                "armor": 42,
                "type": "chest",
                "scroll": true
            },
            "resistancescroll": {
                "stat": "resistance",
                "name": "Resistance Scroll",
                "g": 8000,
                "skin": "resistancescroll",
                "explanation": "Adds Resistance to an armor with a Stat attribute.",
                "multiplier": 2.25,
                "type": "pscroll",
                "s": 9999
            },
            "bfang": {
                "s": 9999,
                "type": "material",
                "name": "Bat Fang",
                "g": 24000,
                "skin": "bfang"
            },
            "hpot0": {
                "name": "HP Potion",
                "g": 20,
                "s": 9999,
                "cooldown": 2000,
                "skin": "hpot0",
                "type": "pot",
                "gives": [
                    [
                        "hp",
                        200
                    ]
                ]
            },
            "firebow": {
                "a": true,
                "upgrade": {
                    "range": 8.333333333333332,
                    "attack": 4.8,
                    "attr0": 0.5
                },
                "ability": "burn",
                "skin_r": "firebow_r",
                "wtype": "bow",
                "projectile": "firearrow",
                "damage": "physical",
                "g": 178000,
                "range": 45,
                "cx": {
                    "accent": "#E34C25"
                },
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "attr0": 2,
                "skin": "firebow",
                "tier": 2,
                "attack": 26,
                "type": "weapon",
                "explanation": "Rains fire upon the enemy",
                "name": "Fire Bow"
            },
            "pico": {
                "duration": 0.05,
                "s": 9999,
                "g": 150000,
                "name": "Pixel Colada",
                "rpiercing": 100,
                "skin": "pico",
                "crit": 20,
                "miss": 15,
                "type": "elixir",
                "skin_a": "pico"
            },
            "vcape": {
                "stat": 4,
                "set": "vampires",
                "grades": [
                    0,
                    0,
                    8,
                    10
                ],
                "skin": "vcape",
                "tier": 4,
                "extra_stat": 3,
                "upgrade": {
                    "stat": 1
                },
                "name": "Vampiric Cape",
                "g": 340000,
                "type": "cape",
                "scroll": true
            },
            "wbook0": {
                "int": 6,
                "grades": [
                    4,
                    5,
                    6,
                    7
                ],
                "cx": {
                    "scale": 0.5,
                    "extension": true
                },
                "name": "Book of Knowledge",
                "g": 12000,
                "skin": "wbook0",
                "tier": 1,
                "compound": {
                    "int": 5
                },
                "type": "source"
            },
            "wbook1": {
                "int": 16,
                "compound": {
                    "int": 5,
                    "reflection": 1,
                    "vit": 2
                },
                "grades": [
                    0,
                    2,
                    6,
                    7
                ],
                "cx": {
                    "scale": 0.5,
                    "extension": true
                },
                "vit": 6,
                "skin": "wbook1",
                "tier": 2,
                "name": "Book of Secrets",
                "reflection": 2,
                "g": 960000,
                "type": "source"
            },
            "t3bow": {
                "explanation": "Crafted by the finest of bowmasters",
                "critdamage": 12,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "cx": {
                    "accent": "#DE6F22"
                },
                "skin": "t3bow",
                "tier": 3,
                "a": true,
                "upgrade": {
                    "range": 9.0,
                    "attack": 5.6
                },
                "name": "Artisan's Bow",
                "g": 780000,
                "wtype": "bow",
                "damage": "physical",
                "range": 75,
                "projectile": "arrow",
                "attack": 32,
                "type": "weapon"
            },
            "stoneofxp": {
                "ignore": true,
                "skin_a": "stoneofxp_a",
                "g": 100000000,
                "skin": "stoneofxp",
                "explanation": "Increases experience gain by 50%. Needs to be activated. Can be morphed into other stones.",
                "type": "stone",
                "days": 30,
                "name": "Stone of Wisdom"
            },
            "eears": {
                "stat": 1,
                "set": "easter",
                "resistance": 11,
                "tier": 1.5,
                "grades": [
                    6,
                    9,
                    10,
                    12
                ],
                "vit": 2,
                "skin": "eears",
                "cuteness": 12,
                "name": "Bunny Ears",
                "a": 2,
                "upgrade": {
                    "armor": 1.5,
                    "stat": 1,
                    "resistance": 1.5,
                    "evasion": 0.2
                },
                "evasion": 1,
                "g": 32000,
                "armor": 10,
                "type": "helmet",
                "scroll": true
            },
            "dartgun": {
                "explanation": "Don't let the looks fool you. It's a solid weapon with most components forged from gold. The barrel and trigger mechanism is a platinum alloy. Can shoot anything that fits it's barrel, like actual gold.",
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "cx": {
                    "scale": 0.5,
                    "extension": true
                },
                "skin": "dartgun",
                "tier": 3,
                "upgrade": {
                    "range": 20,
                    "attack": 1.0
                },
                "name": "Golden Dart Gun",
                "g": 20000000,
                "wtype": "dartgun",
                "damage": "physical",
                "range": 50,
                "projectile": "stone",
                "attack": 1,
                "type": "weapon"
            },
            "handofmidas": {
                "gold": 10,
                "explanation": "You can feel the thirst for gold move through your veins.",
                "resistance": 16,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "skin": "goldglove",
                "tier": 3.5,
                "speed": -20,
                "a": true,
                "upgrade": {
                    "armor": 6.5,
                    "resistance": 6.5,
                    "gold": 1
                },
                "name": "Hand of Midas",
                "g": 800000,
                "armor": 32,
                "type": "gloves"
            },
            "gslime": {
                "s": 9999,
                "type": "material",
                "name": "Slime Core",
                "g": 20,
                "skin": "gslime"
            },
            "t2intamulet": {
                "armor": 30,
                "grades": [
                    0,
                    2,
                    6,
                    7
                ],
                "edge": -1,
                "name": "Amulet of the Fierce Mage",
                "g": 160000,
                "skin": "t2intamulet",
                "int": 5,
                "compound": {
                    "int": 2,
                    "armor": 20
                },
                "type": "amulet"
            },
            "snakefang": {
                "s": 9999,
                "type": "material",
                "name": "Snake Fang",
                "g": 1200,
                "skin": "snakefang"
            },
            "mpxamulet": {
                "a": true,
                "mp_cost": -5,
                "set": "mpx",
                "grades": [
                    0,
                    0,
                    6,
                    7
                ],
                "name": "Amulet of MP",
                "g": 56000000,
                "skin": "mpxamulet",
                "compound": {
                    "mp_cost": -2,
                    "mp_reduction": 2
                },
                "type": "amulet",
                "mp_reduction": 12
            },
            "goldnugget": {
                "name": "Gold Nugget",
                "offering": 0,
                "explanation": "Ideal for crafting",
                "g": 120000,
                "s": 1000,
                "skin": "goldnugget",
                "type": "material"
            },
            "fallen": {
                "a": true,
                "stat": 1,
                "set": "fury",
                "resistance": 8,
                "tier": 1.5,
                "grades": [
                    0,
                    0,
                    8,
                    10
                ],
                "frequency": 6,
                "skin": "fallen",
                "crit": 2,
                "speed": 3,
                "class": [
                    "rogue",
                    "warrior"
                ],
                "dex": 4,
                "upgrade": {
                    "crit": 0.5,
                    "armor": 1.5,
                    "stat": 1,
                    "resistance": 1.5
                },
                "name": "Pants of the Fallen Master",
                "g": 6400000,
                "armor": 14,
                "type": "pants",
                "scroll": true
            },
            "tristone": {
                "dex": 1,
                "vit": 1,
                "rpiercing": 5,
                "onclick": "socket.emit('activate',{slot:$(this).data('id')})",
                "int": 1,
                "compound": {
                    "dex": 1,
                    "vit": 1,
                    "rpiercing": 5,
                    "int": 1,
                    "apiercing": 5,
                    "str": 1
                },
                "apiercing": 5,
                "ignore": true,
                "g": 50000,
                "grades": [
                    1,
                    4,
                    6,
                    7
                ],
                "skin_a": "tristone_a",
                "str": 1,
                "skin": "tristone",
                "action": "ACTIVATE!",
                "type": "ring",
                "name": "Legacy Tri-Stone"
            },
            "beewings": {
                "s": 9999,
                "type": "material",
                "name": "Bee Wings",
                "g": 25,
                "skin": "beewings"
            },
            "egg1": {
                "name": "Easter Egg",
                "g": 4000,
                "explanation": "A uniquely painted Egg!",
                "s": 9999,
                "skin": "egg1",
                "type": "quest"
            },
            "coal": {
                "a": true,
                "name": "Coal",
                "g": 10,
                "explanation": "...",
                "compound": {},
                "skin": "coal",
                "type": "misc"
            },
            "bronzeingot": {
                "name": "Bronze Ingot",
                "offering": 0.1,
                "explanation": "Solid Bronze",
                "g": 40000,
                "s": 100,
                "skin": "bronzeingot",
                "type": "material"
            },
            "xarmor": {
                "stat": 4,
                "set": "wt4",
                "resistance": 36,
                "grades": [
                    0,
                    0,
                    8,
                    10
                ],
                "skin": "xarmor",
                "tier": 4,
                "a": 2,
                "extra_stat": 3,
                "upgrade": {
                    "armor": 7.5,
                    "stat": 1,
                    "resistance": 7.5
                },
                "name": "Darkforge Armor",
                "g": 4800000,
                "armor": 54,
                "type": "chest",
                "scroll": true
            },
            "bow4": {
                "grades": [
                    0,
                    0,
                    8,
                    10
                ],
                "cx": {
                    "accent": "#E4B81D"
                },
                "skin": "bow4",
                "tier": 4,
                "upgrade": {
                    "range": 9.666666666666668,
                    "attack": 6.4
                },
                "name": "T4 Bow",
                "g": 16000,
                "wtype": "bow",
                "damage": "physical",
                "ignore": true,
                "range": 85,
                "projectile": "arrow",
                "attack": 38,
                "type": "weapon"
            },
            "wine": {
                "g": 40000,
                "s": 9999,
                "skin_a": "wine",
                "vit": 32,
                "miss": 32,
                "skin": "wine",
                "duration": 0.1,
                "speed": -12,
                "type": "elixir",
                "name": "Red Wine"
            },
            "test2": {
                "ignore": true,
                "g": 1,
                "name": "Test",
                "for": 120,
                "skin": "shells",
                "explanation": "An item to test properties!",
                "type": "orb",
                "critdamage": 60,
                "manasteal": 2
            },
            "shoes": {
                "stat": 1,
                "upgrade": {
                    "armor": 0.5,
                    "stat": 1,
                    "speed": 0.625
                },
                "name": "Shoes",
                "g": 12100,
                "armor": 3,
                "speed": 5.0,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "skin": "shoes",
                "tier": 1,
                "type": "shoes",
                "scroll": true
            },
            "resistancering": {
                "a": true,
                "grades": [
                    1,
                    4,
                    6,
                    7
                ],
                "name": "Ring of Resistance",
                "g": 180000,
                "skin": "resistancering",
                "compound": {
                    "resistance": 9,
                    "reflection": 0.125
                },
                "type": "ring",
                "resistance": 24
            },
            "sanguine": {
                "int": 5,
                "hp": 1200,
                "compound": {
                    "int": 1,
                    "dex": 1,
                    "hp": 300,
                    "str": 1,
                    "attr0": 0.5
                },
                "grades": [
                    0,
                    0,
                    6,
                    7
                ],
                "attr0": 1,
                "skin": "sanguine",
                "dex": 5,
                "name": "Sanguine Amulet",
                "g": 32000000,
                "aura": "sanguine",
                "str": 5,
                "type": "amulet"
            },
            "essenceofether": {
                "name": "Ethereal Essence",
                "g": 40000,
                "explanation": "A ghostly essence, maybe it could allow you to shift from this world momentarily",
                "s": 9999,
                "skin": "essenceofether",
                "type": "material"
            },
            "wcap": {
                "stat": 1,
                "set": "wanderers",
                "hp": 120,
                "resistance": 6,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "skin": "wcap",
                "tier": 1,
                "upgrade": {
                    "armor": 0.5,
                    "stat": 1,
                    "resistance": 0.5
                },
                "name": "Wanderer's Cap",
                "g": 6400,
                "armor": 5,
                "type": "helmet",
                "scroll": true
            },
            "elixirdex1": {
                "dex": 8,
                "name": "Elixir of Greater Dexterity",
                "g": 20000,
                "s": 9999,
                "skin_a": "elixirdex1",
                "skin": "elixirdex1",
                "duration": 24,
                "type": "elixir"
            },
            "pouchbow": {
                "explosion": 10,
                "damage": "physical",
                "grades": [
                    8,
                    9,
                    10,
                    12
                ],
                "cx": {
                    "accent": "#9D7B1B"
                },
                "skin": "pouchbow",
                "tier": 0.2,
                "upgrade": {
                    "range": 7.133333333333333,
                    "explosion": 2,
                    "attack": 3.36
                },
                "name": "Poucher",
                "g": 24000,
                "wtype": "bow",
                "mp_reduction": -10,
                "range": 47.0,
                "projectile": "pouch",
                "attack": 15.2,
                "type": "weapon"
            },
            "daggerofthedead": {
                "a": true,
                "upgrade": {
                    "range": 2,
                    "attack": 4.4
                },
                "str": 20,
                "g": 224000,
                "speed": -2,
                "wtype": "dagger",
                "apiercing": 20,
                "damage": "physical",
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "cx": {
                    "scale": 0.5,
                    "accent": "#D87F0E",
                    "extension": true
                },
                "vit": -6,
                "skin": "daggerofthedead",
                "tier": 2.4,
                "range": 6.4,
                "attack": 19.0,
                "type": "weapon",
                "explanation": "A deadly weapon",
                "name": "Dagger of the Dead"
            },
            "mmgloves": {
                "stat": 2,
                "set": "mmage",
                "explanation": "You served our realm well",
                "resistance": 11,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "skin": "mmgloves",
                "tier": 2.125,
                "class": [
                    "mage"
                ],
                "extra_stat": 1,
                "upgrade": {
                    "armor": 4.0,
                    "stat": 1,
                    "resistance": 4.0
                },
                "name": "Gloves of the Hunter Mage",
                "g": 68000,
                "armor": 22,
                "type": "gloves",
                "scroll": true
            },
            "frostbow": {
                "a": true,
                "upgrade": {
                    "range": 8.333333333333332,
                    "attack": 4.8,
                    "attr0": 0.5
                },
                "ability": "freeze",
                "skin_r": "frostbow_r",
                "wtype": "bow",
                "projectile": "frostarrow",
                "damage": "physical",
                "g": 78000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "cx": {
                    "accent": "#2D9DE5"
                },
                "attr0": 2,
                "skin": "frostbow",
                "tier": 2,
                "range": 65,
                "attack": 26,
                "type": "weapon",
                "explanation": "Let your enemy feel the cold",
                "name": "Frost Bow"
            },
            "bunnyelixir": {
                "hp": 400,
                "skin_a": "bunnyelixir",
                "vit": 15,
                "skin": "bunnyelixir",
                "duration": 2,
                "speed": 12,
                "dex": 4,
                "name": "Bunny Energy Drink",
                "g": 6000,
                "s": 9999,
                "mp": 300,
                "type": "elixir",
                "explanation": "Ingredients: Rabbit sweat, bubble gum flavour"
            },
            "puppyer": {
                "name": "Licence to Adopt a Puppy",
                "g": 10000,
                "explanation": "Lets you adopt a puppy once they are ready. You'll have to wait a bit until they are ready to be adopted tho!",
                "s": 9999,
                "skin": "puppyer",
                "type": "petlicence"
            },
            "bowofthedead": {
                "a": true,
                "upgrade": {
                    "crit": 0.2,
                    "range": 8.6,
                    "attack": 5.12
                },
                "vit": -2,
                "g": 228000,
                "speed": -12,
                "wtype": "bow",
                "projectile": "arrow",
                "damage": "physical",
                "crit": 1,
                "range": 59.0,
                "cx": {
                    "accent": "#D87F0E"
                },
                "grades": [
                    0,
                    5,
                    10,
                    12
                ],
                "str": 20,
                "skin": "bowofthedead",
                "tier": 2.4,
                "attack": 28.4,
                "type": "weapon",
                "explanation": "A weapon of death",
                "name": "Bow of the Dead"
            },
            "mistletoe": {
                "a": true,
                "s": 9999,
                "e": 1,
                "name": "Mistletoe",
                "g": 20000,
                "skin": "mistletoe",
                "explanation": "Maybe someone could give you a kiss in exchange...",
                "type": "gem"
            },
            "hpamulet": {
                "name": "Amulet of HP",
                "g": 20000,
                "hp": 200,
                "skin": "hpamulet",
                "grades": [
                    3,
                    5,
                    6,
                    7
                ],
                "compound": {
                    "hp": 240
                },
                "type": "amulet"
            },
            "shoes1": {
                "stat": 2,
                "set": "rugged",
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "skin": "shoes1",
                "tier": 2,
                "speed": 6.0,
                "a": 2,
                "extra_stat": 1,
                "upgrade": {
                    "armor": 2.5,
                    "stat": 1,
                    "speed": 0.875
                },
                "name": "Rugged Shoes",
                "g": 120000,
                "armor": 8,
                "type": "shoes",
                "scroll": true
            },
            "cscale": {
                "name": "Croc Scale",
                "g": 200,
                "explanation": "A very hard scale, can be sewn onto armors.",
                "s": 9999,
                "skin": "cscale",
                "type": "material"
            },
            "monsterbox": {
                "name": "Monster Box",
                "g": 120000,
                "grade": 0,
                "explanation": "A magical pet world inside a box.",
                "ignore": true,
                "skin": "armorbox",
                "type": "container"
            },
            "swirlipop": {
                "int": -40,
                "explanation": "A dizzying candy, has some benefits.",
                "resistance": -300,
                "g": 10000,
                "skin_a": "swirlipop",
                "skin": "swirlipop",
                "duration": 0.008,
                "eat": true,
                "a": true,
                "name": "Swirlipop",
                "evasion": 90,
                "s": 9999,
                "withdrawal": "withdrawal",
                "type": "elixir"
            },
            "bcandle": {
                "s": 9999,
                "type": "material",
                "name": "Burning Candle",
                "g": 420000,
                "skin": "bcandle"
            },
            "trinkets": {
                "s": 9999,
                "type": "material",
                "name": "Trinkets",
                "g": 200000,
                "skin": "trinkets"
            },
            "rapier": {
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "cx": {
                    "accent": "#5085B0"
                },
                "skin": "rapier",
                "tier": 2,
                "upgrade": {
                    "range": 1.5,
                    "attack": 2.5
                },
                "name": "Rapier",
                "g": 84000,
                "wtype": "rapier",
                "damage": "physical",
                "range": 7,
                "attack": 15,
                "type": "weapon"
            },
            "bwing": {
                "s": 9999,
                "type": "material",
                "name": "Bat Wing",
                "g": 120,
                "skin": "bwing"
            },
            "frozenstone": {
                "onclick": "socket.emit('activate',{num:locate_item('frozenstone')})",
                "s": 9999,
                "name": "Frozen Stone",
                "g": 20000,
                "skin": "frozenstone",
                "action": "SHAKE",
                "explanation": "It's strangely not cold, must be a magical artifact.",
                "type": "activator"
            },
            "wshield": {
                "stat": 2,
                "resistance": 15,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "cx": {
                    "accent": "#3D923A"
                },
                "skin": "wshield",
                "tier": 1,
                "upgrade": {
                    "armor": 8,
                    "resistance": 5
                },
                "name": "Wooden Shield",
                "g": 4800,
                "armor": 40,
                "type": "shield"
            },
            "cxjar": {
                "exclusive": true,
                "name": "CX Jar",
                "g": 1,
                "explanation": "An appearance liquified and stored inside a jar.",
                "s": 9999,
                "skin": "cxjar",
                "type": "jar"
            },
            "essenceofgreed": {
                "name": "Essence of Greed",
                "g": 13,
                "explanation": "A peculiar material.",
                "s": 9999,
                "skin": "essenceofgreed",
                "type": "material"
            },
            "pleather": {
                "s": 9999,
                "type": "material",
                "name": "Porcupine Leather",
                "g": 400,
                "skin": "pleather"
            },
            "mysterybox": {
                "e": 1,
                "name": "Mystery Box",
                "g": 12000000,
                "explanation": "It looks super cool, but you have no idea what to do with it! Exchange now or wait? No idea.",
                "s": 9999,
                "skin": "mysterybox",
                "type": "misc"
            },
            "monstertoken": {
                "name": "Monster Token",
                "g": 12000,
                "explanation": "A token representing the hunt. You made Adventure Land a safer place for all. Be proud!",
                "npc": "monsterhunter",
                "s": 9999,
                "skin": "monstertoken",
                "type": "token"
            },
            "mpcostscroll": {
                "stat": "mp_cost",
                "name": "MP Cost Reduction Scroll",
                "g": 8000,
                "skin": "mpcostscroll",
                "explanation": "Adds MP Cost Reduction to an armor with a Stat attribute.",
                "multiplier": 0.6,
                "type": "pscroll",
                "s": 9999
            },
            "orbofstr": {
                "g": 240000,
                "grades": [
                    1,
                    4,
                    6,
                    7
                ],
                "edge": -2,
                "name": "Orb of Strength",
                "str": 4,
                "skin": "orbofstr",
                "compound": {
                    "str": 3
                },
                "type": "orb"
            },
            "snowball": {
                "name": "Snowball",
                "g": 1,
                "explanation": "Be careful not to hit someone in the ear!",
                "s": 200,
                "skin": "snowball",
                "type": "throw"
            },
            "elixirfzres": {
                "a": true,
                "s": 40,
                "fzresistance": 30,
                "name": "Elixir of Freeze Resistance",
                "g": 240000,
                "skin": "elixirfzres",
                "duration": 2,
                "type": "elixir",
                "skin_a": "elixirfzres"
            },
            "ringsj": {
                "dex": 1,
                "g": 24000,
                "grades": [
                    3,
                    5,
                    6,
                    7
                ],
                "name": "Ring of Small Joys",
                "str": 1,
                "skin": "ring",
                "int": 1,
                "compound": {
                    "int": 1,
                    "dex": 1,
                    "resistance": 5,
                    "str": 1
                },
                "type": "ring",
                "resistance": 5
            },
            "cape": {
                "stat": 4,
                "upgrade": {
                    "armor": 2,
                    "stat": 0.1,
                    "resistance": 1
                },
                "grades": [
                    0,
                    8,
                    10,
                    12
                ],
                "name": "Cape",
                "g": 20000,
                "skin": "cape0",
                "armor": 10,
                "type": "cape",
                "resistance": 8
            },
            "cryptkey": {
                "name": "The Crypt Key",
                "g": 50000,
                "explanation": "A key, imbued with magical energy.",
                "s": 10,
                "skin": "cryptkey",
                "type": "dungeon_key",
                "opens": "crypt"
            },
            "ectoplasm": {
                "s": 9999,
                "type": "material",
                "name": "Ectoplasm",
                "g": 60000,
                "skin": "ectoplasm"
            },
            "gem3": {
                "a": 2,
                "name": "Raw Colourful Diamond",
                "g": 4800000,
                "explanation": "A hard to find gem. Can be exchanged for random treasures.",
                "s": 9999,
                "skin": "gem3",
                "type": "gem"
            },
            "gem2": {
                "a": 2,
                "name": "Raw Diamond",
                "g": 360000,
                "explanation": "A precious gem. Can be exchanged for random treasures.",
                "s": 9999,
                "skin": "gem2",
                "type": "gem"
            },
            "gem1": {
                "a": 2,
                "s": 9999,
                "e": 1,
                "name": "Tiny Ruby",
                "g": 24000,
                "skin": "gem1",
                "explanation": "A hard to find gem. Can be exchanged for random treasures.",
                "type": "gem"
            },
            "gem0": {
                "a": true,
                "s": 9999,
                "e": 1,
                "name": "Raw Emerald",
                "g": 240000,
                "skin": "gem0",
                "explanation": "A very rare gem. Can be exchanged for random treasures.",
                "type": "gem"
            },
            "watercore": {
                "s": 9999,
                "type": "material",
                "name": "Water Core",
                "g": 800000,
                "skin": "watercore"
            },
            "talkingskull": {
                "a": true,
                "grades": [
                    1,
                    2,
                    6,
                    7
                ],
                "name": "Yorick the Talking Skull",
                "g": 96000,
                "skin": "talkingskull",
                "xp": 5,
                "compound": {
                    "xp": 5
                },
                "type": "orb",
                "explanation": "Endless wisdom"
            },
            "supermittens": {
                "stat": 1,
                "set": "holidays",
                "explanation": "Swift and lethal!",
                "resistance": 8,
                "g": 340000,
                "grades": [
                    0,
                    0,
                    10,
                    12
                ],
                "frequency": 2,
                "skin": "supermittens",
                "tier": 2,
                "a": true,
                "extra_stat": 0,
                "upgrade": {
                    "stat": 1,
                    "rpiercing": 3,
                    "armor": 2.5,
                    "apiercing": 3,
                    "resistance": 2.5,
                    "frequency": 0.2
                },
                "name": "Super Mittens",
                "rpiercing": 32,
                "armor": 16,
                "apiercing": 32,
                "type": "gloves",
                "scroll": true
            },
            "xpscroll": {
                "stat": "xp",
                "name": "XP Scroll",
                "g": 8000,
                "skin": "xpscroll",
                "explanation": "Adds XP bonus to an armor with a Stat attribute.",
                "multiplier": 0.5,
                "type": "pscroll",
                "s": 9999
            },
            "wattire": {
                "stat": 1,
                "set": "wanderers",
                "resistance": 6,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "skin": "wattire",
                "tier": 1,
                "upgrade": {
                    "armor": 0.5,
                    "stat": 1,
                    "resistance": 0.5
                },
                "name": "Wanderer's Attire",
                "g": 12000,
                "armor": 8,
                "mp": 80,
                "type": "chest",
                "scroll": true
            },
            "oozingterror": {
                "int": 20,
                "grades": [
                    0,
                    5,
                    10,
                    12
                ],
                "cx": {
                    "accent": "#745DD6"
                },
                "vit": -30,
                "skin": "oozingterror",
                "upgrade": {
                    "int": 1,
                    "range": 3.875,
                    "attack": 5.875,
                    "reflection": 0.25,
                    "attr0": 0.02
                },
                "damage": "magical",
                "attack": 42.5,
                "nopo": "Mutates the brain to maximize its potential, sapping the user's life in the process.",
                "type": "weapon",
                "ability": "posion",
                "explanation": "It drains the life energy of the user",
                "attr0": 0.1,
                "tier": 2.75,
                "name": "Oozing Terror",
                "a": true,
                "reflection": 1,
                "g": 289000,
                "wtype": "staff",
                "projectile_test": "acid",
                "range": 60.5,
                "projectile": "magic_purple"
            },
            "xbox": {
                "a": true,
                "s": 9999,
                "e": 1,
                "name": "Xmas Box",
                "g": 1000000,
                "skin": "xbox",
                "explanation": "Finally... They all came together. A unique gift lies within this box. Take it to Xyn to be unlocked.",
                "type": "quest"
            },
            "elixirdex2": {
                "dex": 12,
                "a": true,
                "s": 9999,
                "name": "Elixir of Extreme Dexterity",
                "g": 120000,
                "skin": "elixirdex2",
                "duration": 48,
                "type": "elixir",
                "skin_a": "elixirdex2"
            },
            "jewellerybox": {
                "ignore": true,
                "a": true,
                "s": 9999,
                "e": 1,
                "name": "Jewellery Box",
                "g": 80000,
                "skin": "chest3",
                "explanation": "Can be exchanged for a random acessory.",
                "type": "box"
            },
            "mrgloves": {
                "stat": 2,
                "set": "mrogue",
                "explanation": "You served our realm well",
                "resistance": 11,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "skin": "mrgloves",
                "tier": 2.25,
                "class": [
                    "rogue"
                ],
                "extra_stat": 1,
                "upgrade": {
                    "armor": 4.0,
                    "stat": 1,
                    "resistance": 4.0
                },
                "name": "Gloves of the Hunter Rogue",
                "g": 68000,
                "armor": 22,
                "type": "gloves",
                "scroll": true
            },
            "rattail": {
                "s": 9999,
                "type": "material",
                "name": "Rat Tail",
                "g": 2,
                "skin": "rattail"
            },
            "xboots": {
                "stat": 4,
                "set": "wt4",
                "resistance": 8,
                "grades": [
                    0,
                    0,
                    8,
                    10
                ],
                "skin": "xboots",
                "tier": 4,
                "speed": 8.0,
                "a": 2,
                "extra_stat": 3,
                "upgrade": {
                    "armor": 7.5,
                    "stat": 1,
                    "speed": 1.375,
                    "resistance": 3.75
                },
                "name": "Darkforge Boots",
                "g": 12400000,
                "armor": 18,
                "type": "shoes",
                "scroll": true
            },
            "lspores": {
                "s": 9999,
                "type": "material",
                "name": "Large Spores",
                "g": 160,
                "skin": "lspores"
            },
            "claw": {
                "damage": "physical",
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "cx": {
                    "scale": 0.5,
                    "extension": true
                },
                "skin": "claw",
                "tier": 1,
                "upgrade": {
                    "range": 1.5,
                    "attack": 3
                },
                "name": "Claw",
                "g": 7200,
                "wtype": "fist",
                "attack": 10,
                "range": 5,
                "type": "weapon"
            },
            "lantern": {
                "compound": {
                    "resistance": 10,
                    "evasion": 5
                },
                "explanation": "Forged from a naturally vibrating metal",
                "skin": "lantern",
                "resistance": 120,
                "grades": [
                    0,
                    0,
                    6,
                    7
                ],
                "cx": {
                    "scale": 0.5
                },
                "evasion": 10,
                "tier": 3,
                "name": "The Lantern",
                "g": 480000,
                "type": "misc_offhand"
            },
            "bottleofxp": {
                "name": "Bottle of XP",
                "g": 12000000,
                "explanation": "One hundred million memories, experiences, bits and pieces of information.",
                "s": 20,
                "skin": "bottleofxp",
                "type": "xp",
                "gives": [
                    [
                        "xp",
                        100000000
                    ]
                ]
            },
            "eslippers": {
                "stat": 1,
                "set": "easter",
                "tier": 1.5,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "skin": "eslippers",
                "cuteness": 24,
                "speed": 6.0,
                "upgrade": {
                    "cuteness": 2,
                    "armor": 1.5,
                    "stat": 1,
                    "speed": 0.75
                },
                "name": "Fluffy Slippers",
                "g": 24200,
                "armor": 6,
                "type": "shoes",
                "scroll": true
            },
            "ijx": {
                "s": 9999,
                "type": "material",
                "name": "Irradium",
                "g": 360000,
                "skin": "ijx"
            },
            "candypop": {
                "int": 6,
                "explanation": "You can eat it. Gift it. Exchange 10 of them at Xyn for a small reward.",
                "skin_a": "candypop",
                "vit": 10,
                "skin": "candypop",
                "duration": 1,
                "eat": true,
                "e": 10,
                "name": "Candy Pop",
                "g": 120,
                "s": 9999,
                "type": "elixir",
                "luck": 12
            },
            "puppy1": {
                "ignore": true,
                "a": true,
                "name": "Egg",
                "g": 40000,
                "skin": "egg2",
                "grade": 0,
                "explanation": "A vibrant egg, it's inhabitant seems eager to get out.",
                "type": "chrysalis",
                "monster": "puppy1"
            },
            "warmscarf": {
                "a": true,
                "int": 2,
                "explanation": "Stylish and deadly!",
                "resistance": 10,
                "g": 20000,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "skin": "warmscarf",
                "dex": 2,
                "upgrade": {
                    "apiercing": 1.25,
                    "rpiercing": 1.25
                },
                "name": "Warm Scarf",
                "rpiercing": 5,
                "armor": 10,
                "apiercing": 5,
                "str": 2,
                "type": "amulet"
            },
            "luckbooster": {
                "explanation": "Increases your chances of looting something from a monster.",
                "compound": {
                    "luck": 8
                },
                "grades": [
                    0,
                    10,
                    6,
                    7
                ],
                "legacy": {
                    "luck": 15
                },
                "skin_a": "luckbooster_a",
                "skin": "luckbooster",
                "name": "Luck Booster",
                "g": 79840000,
                "days": 30,
                "gain": "luck",
                "type": "booster",
                "luck": 20
            },
            "ledger": {
                "name": "Ledger",
                "g": 12000,
                "explanation": "Every decent merchant needs one!",
                "ignore": true,
                "skin": "ledger",
                "type": "misc"
            },
            "reflectionscroll": {
                "stat": "reflection",
                "name": "Reflection Scroll",
                "g": 8000,
                "skin": "reflectionscroll",
                "explanation": "Adds Reflection to an armor with a Stat attribute.",
                "multiplier": 0.125,
                "type": "pscroll",
                "s": 9999
            },
            "angelwings": {
                "stat": 3,
                "skin": "angelwings",
                "resistance": 8,
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "evasion": 1,
                "speed": 1,
                "a": true,
                "upgrade": {
                    "stat": 0.1,
                    "speed": 0.2,
                    "resistance": 1,
                    "evasion": 0.2
                },
                "name": "Angel Wings",
                "g": 120000,
                "onclick": "socket.emit('activate',{slot:$(this).data('id')})",
                "action": "FLAP",
                "type": "cape"
            },
            "storagebox": {
                "name": "Storage Box",
                "g": 9000,
                "explanation": "It's a nifty little box",
                "ignore": true,
                "s": 9999,
                "skin": "storagebox",
                "type": "misc"
            },
            "fsword": {
                "ability": "freeze",
                "skin_r": "fsword_r",
                "int": 8,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "attr0": 0.2,
                "skin": "fsword",
                "tier": 2,
                "upgrade": {
                    "range": 1.5,
                    "attack": 4.5,
                    "attr0": 0.1
                },
                "name": "Frozen Sword",
                "g": 72000,
                "wtype": "short_sword",
                "damage": "physical",
                "range": 7,
                "attack": 21,
                "type": "weapon"
            },
            "bandages": {
                "s": 9999,
                "type": "material",
                "name": "Bandages",
                "g": 26,
                "skin": "bandages"
            },
            "ghatb": {
                "name": "Hat of Generosity",
                "g": 128000,
                "type": "helmet",
                "explanation": "If you put on this hat, you can run item giveaways!",
                "vit": 24,
                "skin": "ghatb",
                "hat": "hat114"
            },
            "woodensword": {
                "a": true,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "cx": {
                    "accent": "#155E0C"
                },
                "skin": "woodensword",
                "tier": 2,
                "dex": 20,
                "upgrade": {
                    "dex": 2,
                    "range": 1.5,
                    "attack": 5
                },
                "name": "Wooden Sword",
                "g": 224000,
                "wtype": "sword",
                "damage": "physical",
                "range": 8,
                "attack": 20,
                "type": "weapon"
            },
            "xhelmet": {
                "stat": 4,
                "set": "wt4",
                "xscroll": true,
                "resistance": 36,
                "grades": [
                    0,
                    0,
                    8,
                    10
                ],
                "protection": true,
                "skin": "xhelmet",
                "tier": 4,
                "a": 2,
                "extra_stat": 3,
                "upgrade": {
                    "armor": 7.5,
                    "stat": 1,
                    "resistance": 7.5
                },
                "name": "Darkforge Helmet",
                "g": 3200000,
                "armor": 32,
                "type": "helmet",
                "scroll": true
            },
            "luckyt": {
                "grades": [
                    0,
                    0,
                    0,
                    12
                ],
                "upgrade": {
                    "xp": 1,
                    "resistance": 10,
                    "luck": 1.75
                },
                "name": "Lucky T-Shirt",
                "g": 120000,
                "skin": "luckyt",
                // NOTE: Known error
                // "res": 20,
                "xp": 5,
                "type": "chest",
                "scroll": true,
                "luck": 7
            },
            "hpot1": {
                "name": "HP Potion",
                "g": 100,
                "s": 9999,
                "cooldown": 2000,
                "skin": "hpot1",
                "type": "pot",
                "gives": [
                    [
                        "hp",
                        400
                    ]
                ]
            },
            "dkey": {
                "onclick": "socket.emit('activate',{num:locate_item('dkey')})",
                "s": 2,
                "name": "Diamond Key",
                "g": 72000000,
                "skin": "dkey",
                "action": "UNLOCK",
                "explanation": "A key that unlocks any teller!",
                "type": "bank_key"
            },
            "slimestaff": {
                "grades": [
                    5,
                    8,
                    10,
                    12
                ],
                "cx": {
                    "accent": "#48A763"
                },
                "skin": "slimestaff",
                "tier": 1.5,
                "speed": -5,
                "class": [
                    "priest"
                ],
                "dex": 5,
                "upgrade": {
                    "dex": 2,
                    "range": 3.25,
                    "attack": 5.25
                },
                "name": "Slime Staff",
                "g": 16400,
                "wtype": "staff",
                "damage": "magical",
                "range": 53.0,
                "attack": 30.0,
                "type": "weapon"
            },
            "spidersilk": {
                "name": "Spider Silk",
                "g": 300,
                "explanation": "A durable yet sticky material",
                "s": 9999,
                "skin": "spidersilk",
                "type": "material"
            },
            "tracker": {
                "ignore": true,
                "acolor": "#B969CE",
                "name": "Tracktrix",
                "g": 12,
                "skin": "tracker",
                "action": "INTERFACE!",
                "explanation": "A tool that tracks all your experiences and encounters in Adventure Land so you can learn from them and grow as an adventurer!",
                "onclick": "socket.emit('tracker')",
                "type": "tracker",
                "special": true
            },
            "swifty": {
                "grades": [
                    4,
                    7,
                    10,
                    12
                ],
                "cx": {
                    "accent": "#CC54B2"
                },
                "skin": "swifty",
                "tier": 1.75,
                "dex": 12,
                "upgrade": {
                    "range": 1.5,
                    "attack": 4.75
                },
                "name": "Swifty",
                "g": 48000,
                "wtype": "sword",
                "damage": "physical",
                "range": 7.25,
                "attack": 18.75,
                "type": "weapon"
            },
            "smush": {
                "s": 9999,
                "type": "material",
                "name": "Small Mushroom",
                "g": 87,
                "skin": "smush"
            },
            "mrngloves": {
                "stat": 2,
                "set": "mranger",
                "explanation": "You served our realm well",
                "resistance": 11,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "skin": "mrngloves",
                "tier": 2.25,
                "class": [
                    "ranger"
                ],
                "extra_stat": 1,
                "upgrade": {
                    "armor": 4.0,
                    "stat": 1,
                    "resistance": 4.0
                },
                "name": "Gloves of the Hunter Ranger",
                "g": 68000,
                "armor": 22,
                "type": "gloves",
                "scroll": true
            },
            "ghatp": {
                "name": "Hat of Generosity",
                "g": 128000,
                "type": "helmet",
                "explanation": "If you put on this hat, you can run item giveaways!",
                "vit": 24,
                "skin": "ghatp",
                "hat": "hat115"
            },
            "snakeoil": {
                "s": 9999,
                "debuff": true,
                "name": "Snake Oil",
                "g": 200,
                "skin": "snakeoil",
                "rare": true,
                "type": "pot",
                "gives": [
                    [
                        "hp",
                        -100
                    ]
                ]
            },
            "electronics": {
                "name": "Electronics",
                "g": 7,
                "explanation": "Various random electronic components",
                "s": 9999,
                "skin": "electronics",
                "type": "material"
            },
            "mittens": {
                "stat": 1,
                "set": "holidays",
                "explanation": "Cute but deadly.",
                "resistance": 6,
                "grades": [
                    4,
                    8,
                    10,
                    12
                ],
                "skin": "mittens",
                "tier": 1.5,
                "a": true,
                "upgrade": {
                    "armor": 1.5,
                    "stat": 1,
                    "apiercing": 2,
                    "rpiercing": 2,
                    "resistance": 1.5
                },
                "name": "Mittens",
                "g": 34000,
                "armor": 11,
                "apiercing": 20,
                "rpiercing": 20,
                "type": "gloves",
                "scroll": true
            },
            "mwhelmet": {
                "stat": 2,
                "set": "mwarrior",
                "explanation": "You served our realm well",
                "resistance": 23,
                "grades": [
                    0,
                    5,
                    10,
                    12
                ],
                "protection": true,
                "skin": "mwhelmet",
                "tier": 2.625,
                "class": [
                    "warrior"
                ],
                "extra_stat": 1,
                "upgrade": {
                    "armor": 4.0,
                    "stat": 1,
                    "resistance": 4.0
                },
                "name": "Helmet of the Hunter Warrior",
                "g": 64000,
                "armor": 21,
                "type": "helmet",
                "scroll": true
            },
            "mpot0": {
                "name": "MP Potion",
                "g": 20,
                "s": 9999,
                "cooldown": 2000,
                "skin": "mpot0",
                "type": "pot",
                "gives": [
                    [
                        "mp",
                        300
                    ]
                ]
            },
            "manastealscroll": {
                "stat": "manasteal",
                "name": "Manasteal Scroll",
                "g": 8000,
                "skin": "manastealscroll",
                "explanation": "Adds Manasteal to an armor with a Stat attribute.",
                "multiplier": 0.04,
                "type": "pscroll",
                "s": 9999
            },
            "emptyheart": {
                "name": "Empty Heart",
                "g": 12000,
                "explanation": "A cold empty stone heart",
                "s": 9999,
                "skin": "emptyheart",
                "type": "material",
                "event": true
            },
            "tshirt3": {
                "upgrade": {
                    "xp": 0.75
                },
                "name": "T-Shirt",
                "g": 120,
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "skin": "tshirt3",
                "xp": 2,
                "type": "chest"
            },
            "frequencyscroll": {
                "stat": "frequency",
                "name": "Attack Speed Scroll",
                "g": 8000,
                "skin": "frequencyscroll",
                "explanation": "Adds Attack Speed to an armor with a Stat attribute.",
                "multiplier": 0.325,
                "type": "pscroll",
                "s": 9999
            },
            "epyjamas": {
                "stat": 1,
                "set": "easter",
                "hp": 400,
                "explanation": "Comfortable.",
                "resistance": 11,
                "grades": [
                    5,
                    8,
                    10,
                    12
                ],
                "skin": "epyjamas",
                "tier": 1.5,
                "a": 2,
                "upgrade": {
                    "armor": 1.5,
                    "hp": 50,
                    "stat": 1,
                    "resistance": 1.5
                },
                "name": "Pyjamas",
                "g": 48000,
                "armor": 16,
                "charisma": -5,
                "type": "chest",
                "scroll": true
            },
            "dstones": {
                "s": 9999,
                "type": "material",
                "name": "Digestive Stones",
                "g": 90,
                "skin": "dstones"
            },
            "wblade": {
                "exclusive": true,
                "grades": [
                    0,
                    0,
                    8,
                    10
                ],
                "skin": "wblade",
                "tier": 4,
                "name": "Ethereal Blade of Destiny",
                "a": true,
                "upgrade": {
                    "range": 2,
                    "attack": 8,
                    "rpiercing": 16,
                    "evasion": 1
                },
                "evasion": 10,
                "g": 48900000,
                "wtype": "wblade",
                "damage": "magical",
                "range": 30,
                "projectile": "wmomentum",
                "rpiercing": 40,
                "attack": 48,
                "type": "weapon"
            },
            "warpvest": {
                "stat": 1,
                "set": "legends",
                "ability": "warp",
                "explanation": "Warps space-time. Ancient Computer unlocks only a fraction of it's capabilities. Needs to be recharged in order to initiate a jump.",
                "resistance": 28,
                "grades": [
                    0,
                    0,
                    6,
                    10
                ],
                "skin": "warpvest",
                "tier": 3,
                "a": 2,
                "extra_stat": 0,
                "upgrade": {
                    "dex": 0.64,
                    "stat": 1,
                    "str": 0.64,
                    "for": 1,
                    "int": 0.64,
                    "resistance": 5.5,
                    "armor": 5.5,
                    "vit": 0.64
                },
                "name": "Warp Vest",
                "g": 36400000,
                "armor": 42,
                "charge": 1,
                "edge": 5,
                "type": "chest",
                "scroll": true
            },
            "pickaxe": {
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "upgrade": {
                    "breaks": -0.064
                },
                "name": "Pickaxe",
                "g": 2000,
                "skin": "pickaxe",
                "tier": 1,
                "wtype": "pickaxe",
                "type": "tool",
                "breaks": 1
            },
            "vattire": {
                "stat": 3,
                "set": "vampires",
                "hp": 1600,
                "resistance": 28,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "lifesteal": 2,
                "skin": "vattire",
                "tier": 3,
                "extra_stat": 2,
                "upgrade": {
                    "armor": 5.5,
                    "hp": 300,
                    "stat": 1,
                    "lifesteal": 0.2,
                    "resistance": 5.5
                },
                "name": "Spike's Attire",
                "g": 4800000,
                "armor": 42,
                "type": "chest",
                "scroll": true
            },
            "gphelmet": {
                "stat": 1,
                "resistance": 16,
                "crit": 0.5,
                "grades": [
                    0,
                    0,
                    10,
                    12
                ],
                "protection": true,
                "skin": "gphelmet",
                "tier": 2,
                "name": "Green Pumpkin Head",
                "a": 2,
                "extra_stat": 0,
                "upgrade": {
                    "crit": 0.1,
                    "armor": 2.5,
                    "stat": 1,
                    "reflection": 0.4,
                    "resistance": 2.5
                },
                "reflection": 1,
                "lifesteal": 2,
                "armor": 14,
                "g": 32000,
                "rpiercing": 10,
                "type": "helmet",
                "scroll": true,
                "luck": -4
            },
            "cocoon": {
                "s": 9999,
                "type": "material",
                "name": "Cocoon",
                "g": 200,
                "skin": "cocoon"
            },
            "intring": {
                "name": "Ring of Intelligence",
                "g": 24000,
                "int": 2,
                "skin": "intring",
                "grades": [
                    3,
                    5,
                    6,
                    7
                ],
                "compound": {
                    "int": 2
                },
                "type": "ring"
            },
            "shadowstone": {
                "name": "Shadow Stone",
                "g": 800,
                "explanation": "A stone piece with curious properties, allows the bearer to shift to a parallel reality.",
                "s": 9999,
                "skin": "shadowstone",
                "type": "skill_item"
            },
            "rpiercingscroll": {
                "stat": "rpiercing",
                "name": "Resistance Piercing Scroll",
                "g": 8000,
                "skin": "rpiercingscroll",
                "explanation": "Adds Resistance Piercing to an armor with a Stat attribute.",
                "multiplier": 2.25,
                "type": "pscroll",
                "s": 9999
            },
            "weaponbox": {
                "a": true,
                "s": 9999,
                "e": 1,
                "name": "Weapon Box",
                "g": 320000,
                "skin": "weaponbox",
                "explanation": "Can be exchanged for a random, rare weapon.",
                "type": "box"
            },
            "mrpants": {
                "stat": 2,
                "set": "mrogue",
                "explanation": "You served our realm well",
                "resistance": 17,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "skin": "mrpants",
                "tier": 2.25,
                "class": [
                    "rogue"
                ],
                "extra_stat": 1,
                "upgrade": {
                    "armor": 4.0,
                    "stat": 1,
                    "resistance": 4.0
                },
                "name": "Pants of the Hunter Rogue",
                "g": 128000,
                "armor": 28,
                "type": "pants",
                "scroll": true
            },
            "shield": {
                "armor": 60,
                "grades": [
                    4,
                    8,
                    10,
                    12
                ],
                "upgrade": {
                    "armor": 12.5,
                    "resistance": 7.5
                },
                "name": "Shield",
                "g": 24000,
                "skin": "shield",
                "tier": 2,
                "type": "shield",
                "resistance": 20
            },
            "espresso": {
                "name": "Espresso",
                "g": 12000,
                "type": "elixir",
                "s": 9999,
                "skin_a": "espresso",
                "skin": "espresso",
                "duration": 0.0005,
                "speed": 24
            },
            "cring": {
                "dex": 4,
                "grades": [
                    0,
                    4,
                    6,
                    7
                ],
                "name": "Ring of The Crypt",
                "g": 240000,
                "skin": "cring",
                "int": 4,
                "compound": {
                    "dex": 2,
                    "int": 2
                },
                "type": "ring"
            },
            "dreturnscroll": {
                "stat": "dreturn",
                "name": "Damage Return Scroll",
                "g": 8000,
                "skin": "dreturnscroll",
                "explanation": "Adds Damage Return to an armor with a Stat attribute.",
                "multiplier": 0.5,
                "type": "pscroll",
                "s": 9999
            },
            "hotchocolate": {
                "explanation": "Fills your heart with warmth.",
                "resistance": 30,
                "skin_a": "hotchocolate",
                "vit": 30,
                "skin": "hotchocolate",
                "duration": 1,
                "name": "Hot Chocolate",
                "g": 6000,
                "armor": 30,
                "s": 9999,
                "type": "elixir"
            },
            "mpshoes": {
                "stat": 2,
                "set": "mpriest",
                "explanation": "You served our realm well",
                "resistance": 5,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "skin": "mpshoes",
                "tier": 2.125,
                "speed": 6.0,
                "class": [
                    "priest"
                ],
                "extra_stat": 1,
                "upgrade": {
                    "armor": 4.0,
                    "stat": 1,
                    "speed": 0.90625,
                    "resistance": 2.0
                },
                "name": "Shoes of the Hunter Priest",
                "g": 240000,
                "armor": 11,
                "type": "shoes",
                "scroll": true
            },
            "t2bow": {
                "explanation": "Crafted with the finest of materials",
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "cx": {
                    "accent": "#CD3F3B"
                },
                "skin": "t2bow",
                "tier": 2,
                "a": true,
                "upgrade": {
                    "range": 8.333333333333332,
                    "attack": 4.8
                },
                "name": "Well-Crafted Bow",
                "g": 78000,
                "wtype": "bow",
                "damage": "physical",
                "range": 65,
                "projectile": "arrow",
                "attack": 26,
                "type": "weapon"
            },
            "dexearring": {
                "dex": 3,
                "name": "Earring of Dexterity",
                "g": 38000,
                "skin": "dexearring",
                "grades": [
                    2,
                    5,
                    6,
                    7
                ],
                "compound": {
                    "dex": 2
                },
                "type": "earring"
            },
            "staff2": {
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "cx": {
                    "accent": "#AF2131"
                },
                "skin": "staff",
                "tier": 2,
                "upgrade": {
                    "range": 3.5,
                    "attack": 5.5
                },
                "name": "T2 Staff",
                "g": 12400,
                "wtype": "staff",
                "damage": "magical",
                "ignore": true,
                "range": 56,
                "attack": 35,
                "type": "weapon"
            },
            "staff3": {
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "cx": {
                    "accent": "#AF2131"
                },
                "skin": "staff",
                "tier": 3,
                "upgrade": {
                    "range": 4.0,
                    "attack": 6.0
                },
                "name": "T3 Staff",
                "g": 12400,
                "wtype": "staff",
                "damage": "magical",
                "ignore": true,
                "range": 62,
                "attack": 45,
                "type": "weapon"
            },
            "staff4": {
                "grades": [
                    0,
                    0,
                    8,
                    10
                ],
                "cx": {
                    "accent": "#AF2131"
                },
                "skin": "staff",
                "tier": 4,
                "upgrade": {
                    "range": 4.5,
                    "attack": 6.5
                },
                "name": "T4 Staff",
                "g": 12400,
                "wtype": "staff",
                "damage": "magical",
                "ignore": true,
                "range": 68,
                "attack": 55,
                "type": "weapon"
            },
            "seashell": {
                "s": 9999,
                "quest": "seashell",
                "e": 20,
                "name": "Seashell",
                "g": 800,
                "skin": "seashell",
                "explanation": "A beautiful seashell.",
                "type": "quest"
            },
            "mcarmor": {
                "stat": 2,
                "set": "mmerchant",
                "explanation": "Your comrades served our realm well",
                "resistance": 22,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "skin": "mcarmor",
                "tier": 2.25,
                "class": [
                    "merchant"
                ],
                "extra_stat": 1,
                "upgrade": {
                    "armor": 4.0,
                    "stat": 1,
                    "resistance": 4.0
                },
                "name": "Armor of the Hunter Merchant",
                "g": 96000,
                "armor": 33,
                "type": "chest",
                "scroll": true
            },
            "platinumingot": {
                "name": "Platinum Ingot",
                "offering": 2,
                "explanation": "Solid Platinum",
                "g": 40000000,
                "s": 100,
                "skin": "platinumingot",
                "type": "material"
            },
            "intearring": {
                "name": "Earring of Intelligence",
                "g": 38000,
                "int": 3,
                "skin": "intearring",
                "grades": [
                    2,
                    5,
                    6,
                    7
                ],
                "compound": {
                    "int": 2
                },
                "type": "earring"
            },
            "vitscroll": {
                "stat": "vit",
                "name": "Vitality Scroll",
                "g": 8000,
                "skin": "vitscroll",
                "explanation": "Adds Vitality to an armor with a Stat attribute.",
                "multiplier": 1,
                "type": "pscroll",
                "s": 9999
            },
            "dagger": {
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "cx": {
                    "scale": 0.5,
                    "accent": "#3B9A5C",
                    "extension": true
                },
                "skin": "dagger",
                "tier": 2,
                "a": true,
                "upgrade": {
                    "range": 2,
                    "attack": 4
                },
                "name": "Dagger",
                "g": 167000,
                "wtype": "dagger",
                "damage": "physical",
                "range": 6,
                "attack": 17,
                "type": "weapon"
            },
            "amuletofm": {
                "dex": 3,
                "dreturn": 1,
                "reflection": 0.5,
                "evasion": 2,
                "int": 6,
                "hp": 400,
                "compound": {
                    "dex": 1,
                    "dreturn": 0.75,
                    "int": 1,
                    "str": 1,
                    "evasion": 2,
                    "crit": 1,
                    "hp": 120,
                    "armor": 2
                },
                "name": "Amulet of Mystery",
                "armor": 10,
                "grades": [
                    0,
                    0,
                    6,
                    7
                ],
                "g": 6400000,
                "a": true,
                "str": 4,
                "skin": "amuletofm",
                "crit": 2,
                "type": "amulet",
                "manasteal": 0.5
            },
            "pvptoken": {
                "name": "PVP Token",
                "g": 24000,
                "explanation": "A token representing valour in battles. Collect them from PVP events and exchange them for treasures!",
                "s": 9999,
                "skin": "pvptoken",
                "type": "token"
            },
            "mrnhat": {
                "stat": 2,
                "set": "mranger",
                "explanation": "You served our realm well",
                "resistance": 22,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "protection": true,
                "skin": "mrnhat",
                "tier": 2.25,
                "class": [
                    "ranger"
                ],
                "extra_stat": 1,
                "upgrade": {
                    "armor": 4.0,
                    "stat": 1,
                    "resistance": 4.0
                },
                "name": "Hat of the Hunter Ranger",
                "g": 64000,
                "armor": 20,
                "type": "helmet",
                "scroll": true
            },
            "vstaff": {
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "cx": {
                    "accent": "#B91A6A"
                },
                "skin": "vstaff",
                "tier": 3.25,
                "speed": 8,
                "upgrade": {
                    "range": 4.125,
                    "attack": 6.125
                },
                "name": "Vampiric Staff",
                "g": 9600000,
                "armor": 120,
                "wtype": "staff",
                "damage": "magical",
                "range": 63.5,
                "attack": 47.5,
                "type": "weapon"
            },
            "fieldgen0": {
                "spawn": "fieldgen0",
                "name": "Dampening Field Generator",
                "g": 2000000,
                "explanation": "Summon a robot generating a dampening field that prevents teleportation of any kind!",
                "s": false,
                "skin": "fieldgen0",
                "type": "spawner"
            },
            "cshell": {
                "s": 9999,
                "type": "material",
                "name": "Crab Shell",
                "g": 32000,
                "skin": "cshell"
            },
            "ornamentstaff": {
                "set": "holidays",
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "awesomeness": 99,
                "skin": "ornamentstaff",
                "tier": 2,
                "range": 56,
                "a": true,
                "upgrade": {
                    "range": 3.5,
                    "awesomeness": 0.1,
                    "attack": 5.5
                },
                "name": "Ornament Staff",
                "g": 120000,
                "wtype": "staff",
                "damage": "magical",
                "mp_cost": -40,
                "cx": {
                    "accent": "#0B5818"
                },
                "attack": 35,
                "type": "weapon"
            },
            "candy0v3": {
                "ignore": true,
                "s": 9999,
                "e": 1,
                "name": "Rare Candy",
                "g": 12000,
                "skin": "candy0",
                "explanation": "A rare candy. Xyn in New Town could give you something exciting in exchange!",
                "type": "gem"
            },
            "candy0v2": {
                "ignore": true,
                "s": 9999,
                "e": 1,
                "name": "Rare Candy [h2]",
                "g": 12000,
                "skin": "candy0",
                "explanation": "A rare candy. Xyn in New Town could give you something exciting in exchange!",
                "type": "gem"
            },
            "xmassweater": {
                "stat": 1,
                "set": "holidays",
                "explanation": "Such a beautiful vest. But for some reason, every time you wear this, people seem to avoid you.",
                "skin": "xmassweater",
                "resistance": 11,
                "grades": [
                    4,
                    8,
                    10,
                    12
                ],
                "evasion": 0.5,
                "tier": 1.5,
                "a": true,
                "upgrade": {
                    "armor": 1.5,
                    "stat": 1,
                    "resistance": 1.5,
                    "evasion": 0.25
                },
                "name": "Xmas Sweater",
                "g": 16000,
                "armor": 16,
                "type": "chest",
                "scroll": true
            },
            "spores": {
                "s": 9999,
                "type": "material",
                "name": "Spores",
                "g": 120,
                "skin": "spores"
            },
            "fierygloves": {
                "stat": 1,
                "set": "swift",
                "resistance": 6,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "frequency": 2,
                "skin": "fierygloves",
                "tier": 1.5,
                "upgrade": {
                    "armor": 1.5,
                    "stat": 1,
                    "frequency": 0.125,
                    "resistance": 1.5
                },
                "name": "Fiery Gloves",
                "g": 144000,
                "armor": 11,
                "type": "gloves",
                "scroll": true
            },
            "emotionjar": {
                "exclusive": true,
                "name": "Emotion Jar",
                "g": 1,
                "explanation": "An emotion liquified and stored inside a jar.",
                "s": 9999,
                "skin": "emotionjar",
                "type": "jar"
            },
            "cdragon": {
                "dreturn": 3,
                "int": 10,
                "resistance": 32,
                "g": 8900000,
                "grades": [
                    0,
                    0,
                    10,
                    12
                ],
                "a": 2,
                "vit": 2,
                "skin": "dragonarmor",
                "dex": 10,
                "name": "Dragon Armor",
                "rpiercing": 16,
                "armor": 40,
                "apiercing": 16,
                "str": 10,
                "type": "chest"
            },
            "whiteegg": {
                "s": 9999,
                "type": "material",
                "name": "White Egg",
                "g": 5,
                "skin": "whiteegg"
            },
            "santasbelt": {
                "dex": 3,
                "a": true,
                "grades": [
                    0,
                    3,
                    6,
                    7
                ],
                "set": "holidays",
                "g": 640000,
                "name": "Santa's Belt",
                "evasion": 4,
                "skin": "santasbelt",
                "compound": {
                    "dex": 2
                },
                "type": "belt"
            },
            "mrhood": {
                "stat": 2,
                "set": "mrogue",
                "explanation": "You served our realm well",
                "skin": "mrhood",
                "resistance": 22,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "protection": true,
                "evasion": 5,
                "tier": 2.25,
                "class": [
                    "rogue"
                ],
                "extra_stat": 1,
                "upgrade": {
                    "armor": 4.0,
                    "stat": 1,
                    "resistance": 4.0
                },
                "name": "Hood of the Hunter Rogue",
                "g": 64000,
                "armor": 20,
                "type": "helmet",
                "scroll": true
            },
            "vitring": {
                "name": "Ring of Vitality",
                "g": 24000,
                "skin": "vitring",
                "grades": [
                    3,
                    5,
                    6,
                    7
                ],
                "vit": 2,
                "compound": {
                    "vit": 2
                },
                "type": "ring"
            },
            "ecape": {
                "stat": 5,
                "set": "easter",
                "resistance": 8,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "skin": "ecape",
                "cuteness": 20,
                "upgrade": {
                    "cuteness": 3,
                    "armor": 2,
                    "stat": 0.1,
                    "resistance": 1
                },
                "name": "Fluffy Blanket",
                "g": 20000,
                "armor": 10,
                "type": "cape"
            },
            "maceofthedead": {
                "grades": [
                    0,
                    5,
                    10,
                    12
                ],
                // NOTE: Known error
                // "strength": 6,
                "vit": -8,
                "skin": "maceofthedead",
                "tier": 2.4,
                "speed": -3,
                "a": true,
                "upgrade": {
                    "range": 1,
                    "attack": 5.54
                },
                "name": "Mace of the Dead",
                "g": 224000,
                "wtype": "mace",
                "damage": "physical",
                "range": 6.4,
                "cx": {
                    "accent": "#D87F0E"
                },
                "attack": 28.4,
                "type": "weapon"
            },
            "coat1": {
                "stat": 2,
                "set": "rugged",
                "resistance": 16,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "skin": "coat1",
                "tier": 2,
                "a": 2,
                "extra_stat": 1,
                "upgrade": {
                    "armor": 2.5,
                    "stat": 1,
                    "resistance": 2.5
                },
                "name": "Rugged Coat",
                "g": 48000,
                "armor": 24,
                "type": "chest",
                "scroll": true
            },
            "mchat": {
                "stat": 2,
                "set": "mmerchant",
                "explanation": "Your comrades served our realm well",
                "resistance": 22,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "protection": true,
                "skin": "mchat",
                "tier": 2.25,
                "class": [
                    "merchant"
                ],
                "extra_stat": 1,
                "upgrade": {
                    "armor": 4.0,
                    "stat": 1,
                    "resistance": 4.0
                },
                "name": "Hat of the Hunter Merchant",
                "g": 64000,
                "armor": 20,
                "type": "helmet",
                "scroll": true
            },
            "cosmo1": {
                "name": "New Make-up",
                "g": 14688000,
                "explanation": "Give this to NPC Haila to receive a new make-up. Heads-up! It's random, you may or may-not like it. [Work in progress - Not functional yet.]",
                "cash": 459,
                "s": 9999,
                "quest": "cx",
                "skin": "cosmo1",
                "type": "cosmetics"
            },
            "cosmo0": {
                "s": 9999,
                "quest": "cx",
                "e": 1,
                "name": "New Armor",
                "g": 9248000,
                "skin": "cosmo0",
                "explanation": "Give this to NPC Haila to receive a new look. Heads-up! It's random, you may or may-not like it. [Work in progress - PRICE/DROPS MIGHT CHANGE!]",
                "type": "cosmetics",
                "cash": 289
            },
            "froststaff": {
                "ability": "freeze",
                "skin_r": "froststaff_r",
                "int": 2,
                "grades": [
                    0,
                    8,
                    10,
                    12
                ],
                "attr0": 4,
                "skin": "froststaff",
                "tier": 2,
                "a": true,
                "upgrade": {
                    "int": 0.2,
                    "range": 3.5,
                    "attack": 5.5,
                    "attr0": 1.25
                },
                "name": "Frost Staff",
                "g": 289000,
                "wtype": "staff",
                "damage": "magical",
                "range": 56,
                "projectile": "frostball",
                "attack": 35,
                "type": "weapon"
            },
            "cosmo2": {
                "s": 9999,
                "quest": "cx",
                "e": 1,
                "name": "New Hairdo",
                "g": 4128000,
                "skin": "cosmo2",
                "explanation": "Give this to NPC Haila to receive a new hairdo. Heads-up! It's random, you may or may-not like it. [Work in progress - PRICE/DROPS MIGHT CHANGE!]",
                "type": "cosmetics",
                "cash": 129
            },
            "tshirt8": {
                "upgrade": {
                    "mp_cost": -2
                },
                "name": "T-Shirt",
                "g": 120,
                "mp_cost": -5,
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "skin": "tshirt8",
                "type": "chest"
            },
            "cosmo4": {
                "name": "New Accessory",
                "g": 44768000,
                "explanation": "Give this to NPC Haila to receive a unique accessory. Heads-up! It's random, you may or may-not like it. [Work in progress - Not functional yet.]",
                "cash": 1399,
                "s": 9999,
                "quest": "cx",
                "skin": "cosmo4",
                "type": "cosmetics"
            },
            "btusk": {
                "s": 9999,
                "type": "material",
                "name": "Boar Tusk",
                "g": 50000,
                "skin": "btusk"
            },
            "gloves1": {
                "stat": 2,
                "set": "rugged",
                "resistance": 8,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "skin": "gloves1",
                "tier": 2,
                "a": 2,
                "extra_stat": 1,
                "upgrade": {
                    "armor": 2.5,
                    "stat": 1,
                    "resistance": 2.5
                },
                "name": "Rugged Gloves",
                "g": 34000,
                "armor": 16,
                "type": "gloves",
                "scroll": true
            },
            "mparmor": {
                "stat": 2,
                "set": "mpriest",
                "explanation": "You served our realm well",
                "resistance": 22,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "skin": "mparmor",
                "tier": 2.125,
                "class": [
                    "priest"
                ],
                "extra_stat": 1,
                "upgrade": {
                    "armor": 4.0,
                    "stat": 1,
                    "resistance": 4.0
                },
                "name": "Armor of the Hunter Priest",
                "g": 96000,
                "armor": 33,
                "type": "chest",
                "scroll": true
            },
            "offering": {
                "a": true,
                "s": 100,
                "name": "Primordial Essence",
                "g": 27420000,
                "skin": "shade_offering",
                "grade": 2,
                "explanation": "The essence contained within can be transferred to items during upgrades and compounds. Significantly increases the chance to succeed.",
                "type": "offering"
            },
            "drapes": {
                "s": 9999,
                "type": "material",
                "name": "Drapes",
                "g": 480,
                "skin": "drapes"
            },
            "stonekey": {
                "name": "The Stone Key",
                "g": 50000,
                "explanation": "A stone key, imbued with magical energy.",
                "s": 10,
                "skin": "stonekey",
                "type": "dungeon_key",
                "opens": "therush"
            },
            "xmashat": {
                "stat": 1,
                "set": "holidays",
                "resistance": 11,
                "grades": [
                    4,
                    8,
                    10,
                    12
                ],
                "vit": 2,
                "skin": "xmashat",
                "tier": 1.5,
                "xcx": [
                    "hat100"
                ],
                "a": true,
                "upgrade": {
                    "armor": 1.5,
                    "stat": 1,
                    "resistance": 1.5
                },
                "name": "Xmas Hat",
                "g": 13200,
                "armor": 10,
                "type": "helmet",
                "scroll": true
            },
            "vring": {
                "dreturn": 9,
                "set": "vampires",
                "pnresistance": 4,
                "compound": {
                    "str": 4
                },
                "g": 4200000,
                "grades": [
                    0,
                    0,
                    6,
                    7
                ],
                "courage": 1,
                "vit": 6,
                "skin": "vring",
                "a": true,
                "name": "Vampiring",
                "lifesteal": 6,
                "armor": 10,
                "str": 12,
                "type": "ring"
            },
            "hhelmet": {
                "stat": 3,
                "set": "wt3",
                "resistance": 28,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "protection": true,
                "skin": "hhelmet",
                "tier": 3,
                "a": 2,
                "extra_stat": 2,
                "upgrade": {
                    "armor": 5.5,
                    "stat": 1,
                    "resistance": 5.5
                },
                "name": "Heavy Helmet",
                "g": 320000,
                "armor": 25,
                "type": "helmet",
                "scroll": true
            },
            "suckerpunch": {
                "set": "fury",
                "compound": {
                    "crit": 1,
                    "apiercing": 20,
                    "lifesteal": 1
                },
                "grades": [
                    0,
                    0,
                    6,
                    7
                ],
                "lifesteal": 2,
                "skin": "suckerpunch",
                "crit": 2,
                "a": true,
                "name": "Sucker Punch",
                "g": 3200000,
                "apiercing": 20,
                "type": "ring"
            },
            "xpants": {
                "stat": 4,
                "set": "wt4",
                "resistance": 27,
                "grades": [
                    0,
                    0,
                    8,
                    10
                ],
                "skin": "xpants",
                "tier": 4,
                "a": 2,
                "extra_stat": 3,
                "upgrade": {
                    "armor": 7.5,
                    "stat": 1,
                    "resistance": 7.5
                },
                "name": "Darkforge Underarmor",
                "g": 7800000,
                "armor": 45,
                "type": "pants",
                "scroll": true
            },
            "offeringx": {
                "a": true,
                "s": 10,
                "name": "Primordial X",
                "g": 242064000,
                "skin": "offeringx",
                "grade": 3,
                "explanation": "The most powerful essence that can be transferred to items during upgrades and compounds. Significantly increases the chance to succeed.",
                "type": "offering"
            },
            "x3": {
                "a": true,
                "s": 9999,
                "name": "Quantum Piece",
                "g": 4000,
                "skin": "x3",
                "explanation": "A unique component of a curious puzzle",
                "type": "quest",
                "event": true
            },
            "ascale": {
                "s": 9999,
                "type": "material",
                "name": "Armadillo Scale",
                "g": 500,
                "skin": "ascale"
            },
            "x1": {
                "a": true,
                "s": 9999,
                "name": "Quantum Piece",
                "g": 4000,
                "skin": "x1",
                "explanation": "A unique component of a curious puzzle",
                "type": "quest",
                "event": true
            },
            "x6": {
                "a": true,
                "s": 9999,
                "name": "Quantum Piece",
                "g": 4000,
                "skin": "x6",
                "explanation": "A unique component of a curious puzzle",
                "type": "quest",
                "event": true
            },
            "cosmo3": {
                "s": 9999,
                "quest": "cx",
                "e": 1,
                "name": "New Hat",
                "g": 12768000,
                "skin": "cosmo3",
                "explanation": "Give this to NPC Haila to receive a new hat. Heads-up! It's random, you may or may-not like it. [Work in progress - PRICE/DROPS MIGHT CHANGE!]",
                "type": "cosmetics",
                "cash": 399
            },
            "x4": {
                "a": true,
                "s": 9999,
                "name": "Quantum Piece",
                "g": 4000,
                "skin": "x4",
                "explanation": "A unique component of a curious puzzle",
                "type": "quest",
                "event": true
            },
            "snring": {
                "dex": 2,
                "g": 2400000,
                "grades": [
                    0,
                    0,
                    6,
                    7
                ],
                "name": "Stompy's Nose Ring",
                "str": 14,
                "skin": "snring",
                "armor": 20,
                "compound": {
                    "dex": 1,
                    "armor": 5,
                    "str": 2
                },
                "type": "amulet"
            },
            "essenceoffrost": {
                "name": "Essence of Frost",
                "g": 40000,
                "explanation": "It's like an ice storm in a bottle",
                "s": 9999,
                "skin": "essenceoffrost",
                "type": "material"
            },
            "speedscroll": {
                "stat": "speed",
                "name": "Speed Scroll",
                "g": 8000,
                "skin": "speedscroll",
                "explanation": "Adds Speed to an armor with a Stat attribute.",
                "multiplier": 0.325,
                "type": "pscroll",
                "s": 9999
            },
            "staffofthedead": {
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "cx": {
                    "accent": "#D87F0E"
                },
                "skin": "staffofthedead",
                "tier": 2.5,
                "speed": -6,
                "a": true,
                "upgrade": {
                    "range": 3.75,
                    "attack": 5.75
                },
                "name": "Staff of the Dead",
                "g": 224000,
                "wtype": "staff",
                "damage": "magical",
                "range": 59.0,
                "str": 32,
                "attack": 40.0,
                "type": "weapon"
            },
            "cscroll0": {
                "name": "Compound Scroll",
                "g": 6400,
                "grade": 0,
                "explanation": "Scroll to combine 3 accessories. Things get challenging after +1. If the combination fails, the item is lost.",
                "s": 9999,
                "skin": "cscroll0",
                "type": "cscroll"
            },
            "cscroll1": {
                "name": "High Compound Scroll",
                "g": 240000,
                "grade": 1,
                "explanation": "Scroll to combine 3 high grade accessories. If the combination fails, the item is lost.",
                "s": 9999,
                "skin": "cscroll1",
                "type": "cscroll"
            },
            "cscroll2": {
                "name": "Rare Compound Scroll",
                "g": 9200000,
                "grade": 2,
                "explanation": "Scroll to combine 3 rare accessories. If the combination fails, the item is lost.",
                "s": 9999,
                "skin": "cscroll2",
                "type": "cscroll"
            },
            "cscroll3": {
                "a": true,
                "s": 9999,
                "name": "Legendary Compound Scroll",
                "g": 1840000000,
                "skin": "cscroll3",
                "grade": 3,
                "explanation": "A mysterious compound scroll, you can feel that it's very powerful. If the combination fails, the item is lost.",
                "type": "cscroll",
                "markup": 20
            },
            "intamulet": {
                "name": "Amulet of Intelligence",
                "g": 30000,
                "int": 4,
                "skin": "intamulet",
                "grades": [
                    3,
                    5,
                    6,
                    7
                ],
                "compound": {
                    "int": 3
                },
                "type": "amulet"
            },
            "basher": {
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "cx": {
                    "large": true,
                    "accent": "#5085B0"
                },
                "skin": "basher",
                "tier": 2,
                "a": true,
                "upgrade": {
                    "armor": 4,
                    "speed": 1,
                    "range": 1,
                    "stun": 0.5,
                    "attack": 9.0
                },
                "name": "Basher",
                "g": 72000,
                "armor": 20,
                "type": "weapon",
                "wtype": "basher",
                "damage": "physical",
                "range": 6,
                "attack": 35,
                "stun": 0.5
            },
            "apologybox": {
                "ignore": true,
                "a": 2,
                "s": 9999,
                "e": 1,
                "name": "Apology Box",
                "g": 120000,
                "skin": "apologybox",
                "explanation": "This box represents an official apology. Sorry.",
                "type": "box",
                "event": true
            },
            "wshoes": {
                "stat": 1,
                "set": "wanderers",
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "skin": "wshoes",
                "tier": 1,
                "speed": 5.0,
                "upgrade": {
                    "armor": 0.5,
                    "stat": 1,
                    "speed": 0.625
                },
                "name": "Wanderer's Shoes",
                "g": 24200,
                "armor": 3,
                "type": "shoes",
                "scroll": true
            },
            "cake": {
                "hp": 2400,
                "skin_a": "cake",
                "skin": "cake",
                "duration": 6,
                "speed": -30,
                "eat": true,
                "name": "Piece of Cake",
                "g": 100,
                "s": 9999,
                "type": "elixir",
                "explanation": "Delicious."
            },
            "brownegg": {
                "s": 9999,
                "type": "material",
                "name": "Brown Egg",
                "g": 1000,
                "skin": "brownegg"
            },
            "firestaff": {
                "ability": "burn",
                "skin_r": "firestaff_r",
                "grades": [
                    0,
                    8,
                    10,
                    12
                ],
                "cx": {
                    "accent": "#D3001E"
                },
                "attr0": 2,
                "skin": "firestaff",
                "tier": 2,
                "a": true,
                "upgrade": {
                    "range": 3.5,
                    "attack": 5.5,
                    "attr0": 0.5
                },
                "name": "Fiery Staff",
                "g": 189000,
                "wtype": "staff",
                "damage": "magical",
                "range": 56,
                "projectile": "fireball",
                "attack": 35,
                "type": "weapon"
            },
            "egg8": {
                "name": "Easter Egg",
                "g": 4000,
                "explanation": "A uniquely painted Egg!",
                "s": 9999,
                "skin": "egg8",
                "type": "quest"
            },
            "tshirt9": {
                "upgrade": {
                    "manasteal": 0.1
                },
                "name": "T-Shirt",
                "g": 120,
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "skin": "tshirt9",
                "type": "chest",
                "manasteal": 1
            },
            "mpotx": {
                "name": "Super MP Potion",
                "g": 20000,
                "s": 9999,
                "cooldown": 2000,
                "skin": "mpotx",
                "type": "pot",
                "gives": [
                    [
                        "mp",
                        10000
                    ]
                ]
            },
            "rfangs": {
                "s": 9999,
                "type": "material",
                "name": "Rat Fangs",
                "g": 12000,
                "skin": "rfangs"
            },
            "stoneofluck": {
                "ignore": true,
                "skin_a": "stoneofluck",
                "g": 100000000,
                "skin": "stoneofluck",
                "explanation": "Increases your chances to loot something from a monster by 20%.",
                "type": "stone",
                "days": 30,
                "name": "Stone of Luck"
            },
            "tshirt2": {
                "upgrade": {
                    "str": 1.25
                },
                "name": "T-Shirt",
                "g": 120,
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "str": 5,
                "skin": "tshirt2",
                "type": "chest"
            },
            "wgloves": {
                "stat": 1,
                "set": "wanderers",
                "resistance": 3,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "skin": "wgloves",
                "tier": 1,
                "upgrade": {
                    "armor": 0.5,
                    "stat": 1,
                    "resistance": 0.5
                },
                "name": "Wanderer's Gloves",
                "g": 6800,
                "armor": 6,
                "type": "gloves",
                "scroll": true
            },
            "tshirt0": {
                "upgrade": {
                    "int": 1.25
                },
                "name": "T-Shirt",
                "g": 120,
                "int": 5,
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "skin": "tshirt0",
                "type": "chest"
            },
            "tshirt7": {
                "upgrade": {
                    "apiercing": 5
                },
                "name": "T-Shirt",
                "g": 120,
                "apiercing": 30,
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "skin": "tshirt7",
                "type": "chest"
            },
            "tshirt6": {
                "upgrade": {
                    "rpiercing": 5
                },
                "name": "T-Shirt",
                "rpiercing": 30,
                "g": 120,
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "skin": "tshirt6",
                "type": "chest"
            },
            "egg7": {
                "name": "Easter Egg",
                "g": 4000,
                "explanation": "A uniquely painted Egg!",
                "s": 9999,
                "skin": "egg7",
                "type": "quest"
            },
            "tshirt4": {
                "upgrade": {
                    "speed": 0.5
                },
                "name": "T-Shirt",
                "g": 120,
                "type": "chest",
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "skin": "tshirt4",
                "speed": 3
            },
            "dexscroll": {
                "stat": "dex",
                "name": "Dexterity Scroll",
                "g": 8000,
                "skin": "dexscroll",
                "explanation": "Adds Dexterity to an armor with a Stat attribute.",
                "multiplier": 1,
                "type": "pscroll",
                "s": 9999
            },
            "gift1": {
                "a": 2,
                "s": 9999,
                "e": 1,
                "name": "Gift",
                "g": 100,
                "skin": "gift1",
                "explanation": "A Gift to celebrate our Anniversary!",
                "type": "gem"
            },
            "gift0": {
                "a": true,
                "s": 9999,
                "e": 1,
                "name": "Rare Gift",
                "g": 2400,
                "skin": "gift0",
                "explanation": "A Rare Gift to celebrate our Anniversary!",
                "type": "gem"
            },
            "mrnboots": {
                "stat": 2,
                "set": "mranger",
                "explanation": "You served our realm well",
                "resistance": 5,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "skin": "mrnboots",
                "tier": 2.25,
                "speed": 6.0,
                "class": [
                    "ranger"
                ],
                "extra_stat": 1,
                "upgrade": {
                    "armor": 4.0,
                    "stat": 1,
                    "speed": 0.9375,
                    "resistance": 2.0
                },
                "name": "Boots of the Hunter Ranger",
                "g": 240000,
                "armor": 11,
                "type": "shoes",
                "scroll": true
            },
            "firestars": {
                "ability": "burn",
                "skin_r": "firestars_r",
                "grades": [
                    0,
                    4,
                    10,
                    12
                ],
                "cx": {
                    "scale": 0.5,
                    "extension": true
                },
                "attr0": 1.5,
                "skin": "firestars",
                "tier": 2.5,
                "upgrade": {
                    "range": 5.5,
                    "attack": 3.7,
                    "attr0": 0.5
                },
                "name": "Fiery Throwing Stars",
                "g": 290000,
                "wtype": "stars",
                "damage": "physical",
                "range": 65.0,
                "attack": 8.0,
                "type": "weapon"
            },
            "ink": {
                "s": 9999,
                "type": "material",
                "name": "Ink",
                "g": 5000,
                "skin": "ink"
            },
            "vorb": {
                "name": "Vampiric Canine Teeth",
                "g": 12000000,
                "skin": "vorb",
                "grades": [
                    0,
                    0,
                    10,
                    12
                ],
                "courage": 1,
                "compound": {},
                "type": "orb"
            },
            "goldenegg": {
                "a": true,
                "s": 9999,
                "e": 1,
                "name": "Golden Egg",
                "g": 60000,
                "skin": "goldenegg",
                "explanation": "Nope, it's not painted, an actual golden egg!",
                "type": "quest",
                "event": true
            },
            "mcape": {
                "stat": 2,
                "set": "vampires",
                "hp": 160,
                "resistance": 16,
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "lifesteal": 1,
                "skin": "mcape",
                "tier": 2,
                "a": 2,
                "extra_stat": 1,
                "upgrade": {
                    "armor": 2.5,
                    "hp": 30,
                    "stat": 1,
                    "lifesteal": 0.2,
                    "resistance": 2.5
                },
                "name": "Dracul's Attire",
                "g": 480000,
                "armor": 24,
                "type": "chest",
                "scroll": true
            },
            "exoarm": {
                "int": 20,
                "explanation": "It does more than just enhance your natural movements, almost like has a mind of it's own",
                "compound": {
                    "int": 6,
                    "str": 6
                },
                "grades": [
                    0,
                    0,
                    6,
                    7
                ],
                "cx": {},
                "skin": "exoarm",
                "tier": 3,
                "name": "Exoskeletal Arm",
                "g": 48000000,
                "armor": 80,
                "str": 24,
                "type": "misc_offhand"
            },
            "elixirfires": {
                "a": true,
                "duration": 2,
                "s": 40,
                "name": "Elixir of Fire Resistance",
                "g": 240000,
                "skin": "elixirfires",
                "firesistance": 30,
                "type": "elixir",
                "skin_a": "elixirfires"
            },
            "greenenvelope": {
                "a": true,
                "s": 9999,
                "e": 1,
                "name": "Green Envelope",
                "g": 24000,
                "skin": "greenenvelope",
                "explanation": "Congratulations and prosperity",
                "type": "gem",
                "event": true
            },
            "bfur": {
                "s": 9999,
                "type": "material",
                "name": "Bee Fur",
                "g": 5,
                "skin": "bfur"
            },
            "essenceoflife": {
                "name": "Essence of Life",
                "g": 1,
                "explanation": "Full of life, literally.",
                "s": 9999,
                "skin": "essenceoflife",
                "type": "material"
            },
            "wbasher": {
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "cx": {
                    "large": true,
                    "accent": "#AF2131"
                },
                "skin": "wbasher",
                "tier": 1,
                "upgrade": {
                    "range": 1,
                    "attack": 6.5
                },
                "name": "Wooden Basher",
                "g": 4900,
                "wtype": "basher",
                "damage": "physical",
                "range": 3,
                "attack": 26,
                "type": "weapon"
            },
            "pinkie": {
                "set": "easter",
                "skin_r": "pinkie_r",
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "cx": {
                    "scale": 0.5,
                    "accent": "#DF33EC",
                    "extension": true
                },
                "skin": "pinkie",
                "tier": 1.75,
                "range": 33.75,
                "speed": 2,
                "upgrade": {
                    "range": 6.25,
                    "attack": 3.45
                },
                "name": "Pink Wand",
                "g": 124000,
                "wtype": "wand",
                "damage": "magical",
                "charisma": -100,
                "projectile": "pinky",
                "attack": 19.75,
                "type": "weapon"
            },
            "xgloves": {
                "stat": 4,
                "set": "wt4",
                "resistance": 18,
                "grades": [
                    0,
                    0,
                    8,
                    10
                ],
                "skin": "xgloves",
                "tier": 4,
                "a": 2,
                "extra_stat": 3,
                "upgrade": {
                    "armor": 7.5,
                    "stat": 1,
                    "resistance": 7.5
                },
                "name": "Darkforge Gloves",
                "g": 3400000,
                "armor": 36,
                "type": "gloves",
                "scroll": true
            },
            "t2quiver": {
                "a": true,
                "skin": "t2quiver",
                "grades": [
                    0,
                    4,
                    10,
                    12
                ],
                "evasion": 1,
                "tier": 2,
                "dex": 9,
                "upgrade": {
                    "dex": 1.5,
                    "armor": 3,
                    "range": 3.5
                },
                "name": "Agile Quiver",
                "g": 960000,
                "armor": 12,
                "range": 20,
                "type": "quiver"
            },
            "mpxbelt": {
                "mp_cost": -5,
                "set": "mpx",
                "grades": [
                    0,
                    0,
                    6,
                    7
                ],
                "name": "Belt of MP Reduction",
                "g": 1200000,
                "skin": "mpxbelt",
                "compound": {
                    "mp_cost": -1,
                    "mp_reduction": 5
                },
                "type": "belt",
                "mp_reduction": 10
            },
            "gemfragment": {
                "s": 9999,
                "quest": "gemfragment",
                "e": 50,
                "name": "Gem Fragment",
                "g": 32000,
                "skin": "gemfragment",
                "explanation": "Beautiful, yet broken. Would be extremely valuable if they were whole.",
                "type": "quest"
            },
            "test": {
                "name": "Test",
                "g": 1,
                "explanation": "An item to test item looks, just set the 'skin' property.",
                "ignore": true,
                "skin": "test",
                "type": "test"
            },
            "mrnpants": {
                "stat": 2,
                "set": "mranger",
                "explanation": "You served our realm well",
                "resistance": 17,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "skin": "mrnpants",
                "tier": 2.25,
                "class": [
                    "ranger"
                ],
                "extra_stat": 1,
                "upgrade": {
                    "armor": 4.0,
                    "stat": 1,
                    "resistance": 4.0
                },
                "name": "Pants of the Hunter Ranger",
                "g": 128000,
                "armor": 28,
                "type": "pants",
                "scroll": true
            },
            "tshirt88": {
                "int": 5,
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "skin": "tshirt88",
                "xp": 5,
                "speed": 3,
                "dex": 5,
                "upgrade": {
                    "int": 1,
                    "dex": 1,
                    "str": 1
                },
                "name": "T-Shirt",
                "g": 120,
                "str": 5,
                "type": "chest",
                "luck": 12
            },
            "5bucks": {
                "s": 9999,
                "rare": true,
                "name": "Old Paper Money",
                "g": 5,
                "skin": "5bucks",
                "e": 1,
                "explanation": "It's not gold. Must be worthless.",
                "type": "misc"
            },
            "troll": {
                "e": 1,
                "name": "T-Shirt Roll",
                "g": 12000,
                "explanation": "A random T-Shirt!",
                "s": 9999,
                "skin": "troll",
                "type": "misc"
            },
            "stealthcape": {
                "stat": 3,
                "upgrade": {
                    "stat": 0.3,
                    "resistance": 1
                },
                "grades": [
                    0,
                    4,
                    10,
                    12
                ],
                "name": "Stealth Cape",
                "g": 2000000,
                "skin": "stealthcape",
                "explanation": "Thanks to it's stealth capabilities, no one can track your endeavours any more.",
                "type": "cape",
                "resistance": 42
            },
            "elixirint2": {
                "a": true,
                "duration": 48,
                "s": 9999,
                "name": "Elixir of Extreme Intelligence",
                "g": 120000,
                "skin": "elixirint2",
                "int": 12,
                "type": "elixir",
                "skin_a": "elixirint2"
            },
            "mageshood": {
                "stat": 2,
                "resistance": 16,
                "tier": 2,
                "grades": [
                    0,
                    8,
                    10,
                    12
                ],
                "protection": true,
                "skin": "mageshood",
                "crit": 0.5,
                "class": [
                    "mage"
                ],
                "a": true,
                "extra_stat": 1,
                "upgrade": {
                    "armor": 2.5,
                    "stat": 1,
                    "resistance": 2.5,
                    "rpiercing": 10
                },
                "name": "Mage's Hood",
                "g": 640000,
                "armor": 14,
                "ignore": true,
                "type": "helmet",
                "scroll": true
            },
            "elixirint1": {
                "name": "Elixir of Greater Intelligence",
                "g": 20000,
                "int": 8,
                "s": 9999,
                "skin_a": "elixirint1",
                "skin": "elixirint1",
                "duration": 24,
                "type": "elixir"
            },
            "mpot1": {
                "name": "MP Potion",
                "g": 100,
                "s": 9999,
                "cooldown": 2000,
                "skin": "mpot1",
                "type": "pot",
                "gives": [
                    [
                        "mp",
                        500
                    ]
                ]
            },
            "vitearring": {
                "name": "Earring of Vitality",
                "g": 38000,
                "skin": "vitearring",
                "grades": [
                    2,
                    5,
                    6,
                    7
                ],
                "vit": 3,
                "compound": {
                    "vit": 2
                },
                "type": "earring"
            },
            "gbow": {
                "grades": [
                    0,
                    0,
                    10,
                    12
                ],
                "cx": {
                    "border": 1,
                    "accent": "#DF6915"
                },
                "skin": "gbow",
                "tier": 2.5,
                "a": true,
                "upgrade": {
                    "range": 8.666666666666668,
                    "attack": 5.2
                },
                "name": "Bow of the Feared Ranger",
                "g": 3200000,
                "wtype": "bow",
                "damage": "physical",
                "range": 70.0,
                "str": 3,
                "projectile": "garrow",
                "attack": 29.0,
                "type": "weapon"
            },
            "stramulet": {
                "name": "Amulet of Strength",
                "g": 30000,
                "skin": "stramulet",
                "grades": [
                    3,
                    5,
                    6,
                    7
                ],
                "str": 4,
                "compound": {
                    "str": 2
                },
                "type": "amulet"
            },
            "xmaspants": {
                "stat": 1,
                "set": "holidays",
                "resistance": 8,
                "grades": [
                    4,
                    8,
                    10,
                    12
                ],
                "vit": 2,
                "skin": "xmaspants",
                "tier": 1.5,
                "a": true,
                "upgrade": {
                    "armor": 1.5,
                    "stat": 1,
                    "resistance": 1.5
                },
                "name": "Xmas Pants",
                "g": 17800,
                "armor": 14,
                "type": "pants",
                "scroll": true
            },
            "mace": {
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "cx": {
                    "accent": "#AF2131"
                },
                "skin": "mace",
                "tier": 1,
                "upgrade": {
                    "range": 1,
                    "attack": 4.0
                },
                "name": "Mace",
                "g": 3700,
                "wtype": "mace",
                "damage": "physical",
                "range": 5,
                "attack": 20,
                "type": "weapon"
            },
            "vhammer": {
                "explosion": 10,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "cx": {
                    "accent": "#B91A6A"
                },
                "skin": "vhammer",
                "tier": 3,
                "lifesteal": 3,
                "upgrade": {
                    "range": 1,
                    "explosion": 2,
                    "attack": 6.2
                },
                "name": "Vampiric Hammer",
                "g": 9600000,
                "wtype": "mace",
                "damage": "physical",
                "range": 7,
                "attack": 32,
                "type": "weapon"
            },
            "redenvelopev2": {
                "a": true,
                "s": 9999,
                "e": 1,
                "name": "Red Envelope",
                "g": 24000,
                "skin": "redenvelopev2",
                "explanation": "Congratulations and prosperity",
                "type": "gem",
                "event": true
            },
            "redenvelopev3": {
                "a": true,
                "s": 9999,
                "e": 1,
                "name": "Red Envelope",
                "g": 24000,
                "skin": "redenvelopev3",
                "explanation": "Congratulations and prosperity",
                "type": "gem",
                "event": true
            },
            "strring": {
                "name": "Ring of Strength",
                "g": 24000,
                "skin": "strring",
                "grades": [
                    3,
                    5,
                    6,
                    7
                ],
                "str": 2,
                "compound": {
                    "str": 2
                },
                "type": "ring"
            },
            "mwboots": {
                "stat": 2,
                "set": "mwarrior",
                "explanation": "You served our realm well",
                "resistance": 6,
                "grades": [
                    0,
                    5,
                    10,
                    12
                ],
                "skin": "mwboots",
                "tier": 2.625,
                "speed": 7.0,
                "class": [
                    "warrior"
                ],
                "extra_stat": 1,
                "upgrade": {
                    "armor": 4.0,
                    "stat": 1,
                    "speed": 1.03125,
                    "resistance": 2.0
                },
                "name": "Boots of the Hunter Warrior",
                "g": 240000,
                "armor": 12,
                "type": "shoes",
                "scroll": true
            },
            "bugbountybox": {
                "a": 2,
                "s": 9999,
                "e": 1,
                "name": "Bug Bounty Box",
                "g": 120000,
                "skin": "bugbountybox",
                "explanation": "Rewarded for assisting in the hunt against the bugs.",
                "type": "box",
                "event": true
            },
            "redenvelope": {
                "a": true,
                "s": 9999,
                "e": 1,
                "name": "Red Envelope",
                "g": 24000,
                "skin": "redenvelope",
                "explanation": "Congratulations and prosperity",
                "type": "gem",
                "event": true
            },
            "coat": {
                "stat": 1,
                "upgrade": {
                    "armor": 0.5,
                    "stat": 1,
                    "resistance": 0.5
                },
                "name": "Coat",
                "g": 6000,
                "armor": 8,
                "resistance": 6,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "skin": "coat",
                "tier": 1,
                "type": "chest",
                "scroll": true
            },
            "lmace": {
                "int": 8,
                "explanation": "Majestic",
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "skin": "lmace",
                "tier": 3,
                "class": [
                    "priest"
                ],
                "a": true,
                "upgrade": {
                    "int": 2,
                    "range": 6,
                    "attack": 7,
                    "str": 1
                },
                "name": "Lunar Mace",
                "g": 890000,
                "wtype": "pmace",
                "damage": "magical",
                "range": 15,
                "str": 6,
                "attack": 30,
                "type": "weapon",
                "luck": 6
            },
            "platinumnugget": {
                "name": "Platinum Nugget",
                "offering": 1,
                "explanation": "Ideal for crafting",
                "g": 5200000,
                "s": 1000,
                "skin": "platinumnugget",
                "type": "material"
            },
            "dexearringx": {
                "dex": 6,
                "grades": [
                    0,
                    2,
                    6,
                    7
                ],
                "name": "Enchanted Earring",
                "g": 38000,
                "skin": "dexearringx",
                "speed": 1,
                "compound": {
                    "dex": 2,
                    "luck": 2
                },
                "type": "earring",
                "luck": 2
            },
            "tombkey": {
                "name": "The Tomb Key",
                "g": 50000,
                "explanation": "A key, imbued with magical energy.",
                "s": 10,
                "skin": "tombkey",
                "type": "dungeon_key",
                "opens": "tomb"
            },
            "svenom": {
                "s": 9999,
                "type": "material",
                "name": "Scorpion Venom",
                "g": 12000,
                "skin": "svenom"
            },
            "x8": {
                "a": true,
                "s": 9999,
                "name": "Quantum Piece",
                "g": 4000,
                "skin": "x8",
                "explanation": "A unique component of a curious puzzle",
                "type": "quest",
                "event": true
            },
            "pmace": {
                "a": true,
                "int": 8,
                "grades": [
                    0,
                    8,
                    10,
                    12
                ],
                "skin": "pmace",
                "tier": 2,
                "class": [
                    "priest"
                ],
                "dex": 4,
                "upgrade": {
                    "int": 2,
                    "dex": 1,
                    "range": 5,
                    "attack": 6
                },
                "name": "Priest's Mace",
                "g": 89000,
                "wtype": "pmace",
                "damage": "magical",
                "range": 10,
                "attack": 25,
                "type": "weapon"
            },
            "goldingot": {
                "name": "Gold Ingot",
                "offering": 1.1,
                "explanation": "Solid Gold",
                "g": 2000000,
                "s": 100,
                "skin": "goldingot",
                "type": "material"
            },
            "orbg": {
                "dex": 2,
                "g": 60000,
                "grades": [
                    4,
                    6,
                    6,
                    7
                ],
                "name": "Orb of Beginnings",
                "str": 2,
                "skin": "orbg",
                "int": 2,
                "compound": {
                    "int": 1,
                    "dex": 1,
                    "str": 1
                },
                "type": "orb"
            },
            "tshell": {
                "s": 9999,
                "type": "material",
                "name": "Turtle Shell",
                "g": 1200,
                "skin": "tshell"
            },
            "luckscroll": {
                "stat": "luck",
                "name": "Luck Scroll",
                "g": 8000,
                "skin": "luckscroll",
                "explanation": "Adds Luck to an armor with a Stat attribute.",
                "multiplier": 1,
                "type": "pscroll",
                "s": 9999
            }
        }
    }
    expect(G_items).not.toBe(undefined)
})