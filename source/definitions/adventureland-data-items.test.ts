/* eslint-disable sort-keys */
import { GData } from "./adventureland-data"

/**
 * The following is from http://adventure.land/data.js, version 755 (2022-10-31)
 * It is used to confirm type correctness
 */

test("G.items type validation", async () => {
    const G_items: Pick<GData, "items"> = {
        "items": {
            "5bucks": {
                "e": 1,
                "explanation": "It's not gold. Must be worthless.",
                "g": 5,
                "name": "Old Paper Money",
                "rare": true,
                "s": 9999,
                "skin": "5bucks",
                "type": "misc"
            },
            "ale": {
                "duration": 0.05,
                "g": 24000,
                "miss": 20,
                "name": "Ale",
                "s": 9999,
                "skin": "ale",
                "skin_a": "ale",
                "speed": -6,
                "str": 24,
                "type": "elixir"
            },
            "amuletofm": {
                "a": true,
                "armor": 10,
                "compound": {
                    "armor": 2,
                    "crit": 1,
                    "dex": 1,
                    "dreturn": 0.75,
                    "evasion": 2,
                    "hp": 120,
                    "int": 1,
                    "str": 1
                },
                "crit": 2,
                "dex": 3,
                "dreturn": 1,
                "evasion": 2,
                "g": 6400000,
                "grades": [
                    0,
                    0,
                    6,
                    7
                ],
                "hp": 400,
                "int": 6,
                "manasteal": 0.5,
                "name": "Amulet of Mystery",
                "reflection": 0.5,
                "skin": "amuletofm",
                "str": 4,
                "type": "amulet"
            },
            "angelwings": {
                "a": true,
                "action": "FLAP",
                "evasion": 1,
                "g": 120000,
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "name": "Angel Wings",
                "onclick": "socket.emit('activate',{slot:$(this).data('id')})",
                "resistance": 8,
                "skin": "angelwings",
                "speed": 1,
                "stat": 3,
                "type": "cape",
                "upgrade": {
                    "evasion": 0.2,
                    "resistance": 1,
                    "speed": 0.2,
                    "stat": 0.1
                }
            },
            "apiercingscroll": {
                "explanation": "Adds Armor Piercing to an armor with a Stat attribute.",
                "g": 8000,
                "multiplier": 2.25,
                "name": "Armor Piercing Scroll",
                "s": 9999,
                "skin": "apiercingscroll",
                "stat": "apiercing",
                "type": "pscroll"
            },
            "apologybox": {
                "a": 2,
                "e": 1,
                "event": true,
                "explanation": "This box represents an official apology. Sorry.",
                "g": 120000,
                "ignore": true,
                "name": "Apology Box",
                "s": 9999,
                "skin": "apologybox",
                "type": "box"
            },
            "armorbox": {
                "a": true,
                "e": 1,
                "explanation": "Can be exchanged for a random, rare armor.",
                "g": 120000,
                "name": "Armor Box",
                "s": 9999,
                "skin": "armorbox",
                "type": "box"
            },
            "armorring": {
                "a": true,
                "armor": 24,
                "compound": {
                    "armor": 9,
                    "dreturn": 0.25
                },
                "g": 180000,
                "grades": [
                    1,
                    4,
                    6,
                    7
                ],
                "name": "Ring of Armor",
                "skin": "armorring",
                "type": "ring"
            },
            "armorscroll": {
                "explanation": "Adds Armor to an armor with a Stat attribute.",
                "g": 8000,
                "multiplier": 2.25,
                "name": "Armor Scroll",
                "s": 9999,
                "skin": "armorscroll",
                "stat": "armor",
                "type": "pscroll"
            },
            "ascale": {
                "g": 500,
                "name": "Armadillo Scale",
                "s": 9999,
                "skin": "ascale",
                "type": "material"
            },
            "axe3": {
                "a": true,
                "attack": 48,
                "cx": {
                    "accent": "#DF6915",
                    "large": true,
                    "lightborder": true
                },
                "damage_type": "physical",
                "g": 124000,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "ignore": true,
                "name": "T3 Axe",
                "range": 11,
                "reflection": 4,
                "skin": "axe3",
                "tier": 3,
                "type": "weapon",
                "upgrade": {
                    "attack": 12,
                    "range": 1
                },
                "wtype": "axe"
            },
            "bandages": {
                "g": 26,
                "name": "Bandages",
                "s": 9999,
                "skin": "bandages",
                "type": "material"
            },
            "basher": {
                "a": true,
                "armor": 20,
                "attack": 35,
                "cx": {
                    "accent": "#5085B0",
                    "large": true
                },
                "damage_type": "physical",
                "g": 72000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Basher",
                "range": 6,
                "skin": "basher",
                "stun": 0.5,
                "tier": 2,
                "type": "weapon",
                "upgrade": {
                    "armor": 4,
                    "attack": 9,
                    "range": 1,
                    "speed": 1,
                    "stun": 0.5
                },
                "wtype": "basher"
            },
            "basketofeggs": {
                "e": 1,
                "explanation": "A basket full of unique easter eggs. You can probably exchange this for a cool reward.",
                "g": 20000,
                "name": "Basket of Easter Eggs",
                "s": 9999,
                "skin": "basketofeggs",
                "type": "quest"
            },
            "bataxe": {
                "a": true,
                "attack": 41.25,
                "cx": {
                    "accent": "#DF6915",
                    "large": true,
                    "lightborder": true
                },
                "damage_type": "physical",
                "delia": "Now you see me, now you see the floor",
                "g": 124000,
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "name": "Ghastly Battle Axe",
                "range": 8.75,
                "reflection": 4,
                "skin": "bataxe",
                "tier": 2.25,
                "type": "weapon",
                "upgrade": {
                    "attack": 10.125,
                    "range": 1
                },
                "wtype": "axe"
            },
            "bcandle": {
                "g": 420000,
                "name": "Burning Candle",
                "s": 9999,
                "skin": "bcandle",
                "type": "material"
            },
            "bcape": {
                "a": true,
                "armor": 18,
                "g": 2400000,
                "grades": [
                    0,
                    4,
                    10,
                    12
                ],
                "name": "Well-Crafted Cape",
                "resistance": 12,
                "skin": "cape1",
                "stat": 5,
                "type": "cape",
                "upgrade": {
                    "armor": 3,
                    "resistance": 2,
                    "stat": 0.1
                }
            },
            "beewings": {
                "g": 25,
                "name": "Bee Wings",
                "s": 9999,
                "skin": "beewings",
                "type": "material"
            },
            "bfang": {
                "g": 24000,
                "name": "Bat Fang",
                "s": 9999,
                "skin": "bfang",
                "type": "material"
            },
            "bfangamulet": {
                "a": true,
                "apiercing": 20,
                "compound": {
                    "apiercing": 20,
                    "critdamage": 4,
                    "lifesteal": 1
                },
                "critdamage": 4,
                "g": 6400000,
                "grades": [
                    0,
                    0,
                    6,
                    7
                ],
                "lifesteal": 2,
                "name": "Ghastly Bat Fang",
                "skin": "bfangamulet",
                "type": "amulet"
            },
            "bfur": {
                "g": 5,
                "name": "Bee Fur",
                "s": 9999,
                "skin": "bfur",
                "type": "material"
            },
            "bkey": {
                "action": "UNLOCK",
                "explanation": "Key to the bank's basement",
                "g": 5000000,
                "name": "The Bank Key",
                "onclick": "socket.emit('activate',{num:locate_item('bkey')})",
                "s": 5,
                "skin": "bkey",
                "type": "bank_key",
                "unlocks": "bank_b"
            },
            "blade": {
                "attack": 15,
                "damage_type": "physical",
                "g": 8400,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "name": "Blade",
                "range": 5,
                "skin": "blade",
                "tier": 1,
                "type": "weapon",
                "upgrade": {
                    "attack": 4,
                    "range": 1.5
                },
                "wtype": "short_sword"
            },
            "blue": {
                "duration": 0.05,
                "evasion": 50,
                "g": 150000,
                "miss": 24,
                "name": "Blue Horizon",
                "s": 9999,
                "skin": "blue",
                "skin_a": "blue",
                "type": "elixir"
            },
            "bottleofxp": {
                "explanation": "One hundred million memories, experiences, bits and pieces of information.",
                "g": 12000000,
                "gives": [
                    [
                        "xp",
                        100000000
                    ]
                ],
                "name": "Bottle of XP",
                "s": 20,
                "skin": "bottleofxp",
                "type": "xp"
            },
            "bow": {
                "attack": 20,
                "cx": {
                    "accent": "#AF2131"
                },
                "damage_type": "physical",
                "g": 16000,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "name": "Bow",
                "projectile": "arrow",
                "range": 55,
                "skin": "bow",
                "tier": 1,
                "type": "weapon",
                "upgrade": {
                    "attack": 4,
                    "range": 7.666666666666666
                },
                "wtype": "bow"
            },
            "bow4": {
                "attack": 38,
                "cx": {
                    "accent": "#E4B81D"
                },
                "damage_type": "physical",
                "g": 16000,
                "grades": [
                    0,
                    0,
                    8,
                    10
                ],
                "ignore": true,
                "name": "T4 Bow",
                "projectile": "arrow",
                "range": 85,
                "skin": "bow4",
                "tier": 4,
                "type": "weapon",
                "upgrade": {
                    "attack": 6.4,
                    "range": 9.666666666666668
                },
                "wtype": "bow"
            },
            "bowofthedead": {
                "a": true,
                "attack": 28.4,
                "crit": 1,
                "cx": {
                    "accent": "#D87F0E"
                },
                "damage_type": "physical",
                "explanation": "A weapon of death",
                "g": 228000,
                "grades": [
                    0,
                    5,
                    10,
                    12
                ],
                "name": "Bow of the Dead",
                "projectile": "arrow",
                "range": 59,
                "skin": "bowofthedead",
                "speed": -12,
                "str": 20,
                "tier": 2.4,
                "type": "weapon",
                "upgrade": {
                    "attack": 5.12,
                    "crit": 0.2,
                    "range": 8.6
                },
                "vit": -2,
                "wtype": "bow"
            },
            "bronzeingot": {
                "explanation": "Solid Bronze",
                "g": 40000,
                "name": "Bronze Ingot",
                "offering": 0.1,
                "s": 100,
                "skin": "bronzeingot",
                "type": "material"
            },
            "bronzenugget": {
                "explanation": "Ideal for crafting",
                "g": 3200,
                "name": "Bronze Nugget",
                "s": 1000,
                "skin": "bronzenugget",
                "type": "material"
            },
            "broom": {
                "attack": 15,
                "cx": {
                    "accent": "#7B68A5"
                },
                "damage_type": "magical",
                "evasion": 5,
                "g": 128,
                "grades": [
                    8,
                    9,
                    10,
                    12
                ],
                "name": "Broom",
                "range": 44,
                "skin": "broom",
                "speed": 2,
                "tier": 0,
                "type": "weapon",
                "upgrade": {
                    "attack": 4.5,
                    "evasion": 1,
                    "range": 2.5,
                    "speed": 1
                },
                "wtype": "staff"
            },
            "brownegg": {
                "g": 1000,
                "name": "Brown Egg",
                "s": 100,
                "skin": "brownegg",
                "type": "material"
            },
            "btusk": {
                "g": 50000,
                "name": "Boar Tusk",
                "s": 9999,
                "skin": "btusk",
                "type": "material"
            },
            "bugbountybox": {
                "a": 2,
                "e": 1,
                "event": true,
                "explanation": "Rewarded for assisting in the hunt against the bugs.",
                "g": 120000,
                "name": "Bug Bounty Box",
                "s": 9999,
                "skin": "bugbountybox",
                "type": "box"
            },
            "bunnyears": {
                "a": 2,
                "armor": 14,
                "cuteness": 12,
                "evasion": 1,
                "extra_stat": 1,
                "g": 32000,
                "grades": [
                    4,
                    8,
                    10,
                    12
                ],
                "name": "Legacy Bunny Ears",
                "protection": true,
                "resistance": 16,
                "scroll": true,
                "skin": "bunnyears",
                "stat": 2,
                "tier": 2,
                "type": "helmet",
                "upgrade": {
                    "armor": 2.5,
                    "cuteness": 2,
                    "evasion": 0.2,
                    "resistance": 2.5,
                    "stat": 1
                },
                "vit": 4
            },
            "bunnyelixir": {
                "dex": 4,
                "duration": 2,
                "explanation": "Ingredients: Rabbit sweat, bubble gum flavour",
                "g": 6000,
                "hp": 400,
                "mp": 300,
                "name": "Bunny Energy Drink",
                "s": 9999,
                "skin": "bunnyelixir",
                "skin_a": "bunnyelixir",
                "speed": 12,
                "type": "elixir",
                "vit": 15
            },
            "bwing": {
                "g": 120,
                "name": "Bat Wing",
                "s": 9999,
                "skin": "bwing",
                "type": "material"
            },
            "cake": {
                "duration": 6,
                "eat": true,
                "explanation": "Delicious.",
                "g": 100,
                "hp": 2400,
                "name": "Piece of Cake",
                "s": 9999,
                "skin": "cake",
                "skin_a": "cake",
                "speed": -30,
                "type": "elixir"
            },
            "candy0": {
                "a": 2,
                "e": 1,
                "explanation": "A rare candy! Can be exchanged for random treasures.",
                "g": 240000,
                "name": "Rare Candy",
                "s": 9999,
                "skin": "candy0",
                "type": "gem"
            },
            "candy0v2": {
                "e": 1,
                "explanation": "A rare candy. Xyn in New Town could give you something exciting in exchange!",
                "g": 12000,
                "ignore": true,
                "name": "Rare Candy [h2]",
                "s": 9999,
                "skin": "candy0",
                "type": "gem"
            },
            "candy0v3": {
                "e": 1,
                "explanation": "A rare candy. Xyn in New Town could give you something exciting in exchange!",
                "g": 12000,
                "ignore": true,
                "name": "Rare Candy",
                "s": 9999,
                "skin": "candy0",
                "type": "gem"
            },
            "candy1": {
                "a": 2,
                "e": 1,
                "explanation": "Candy! Can be exchanged for random treasures.",
                "g": 24000,
                "name": "Candy",
                "s": 9999,
                "skin": "candy1",
                "type": "gem"
            },
            "candy1v2": {
                "e": 1,
                "explanation": "A delicious candy. Xyn in New Town could give you something in exchange!",
                "g": 2400,
                "ignore": true,
                "name": "Candy [h2]",
                "s": 9999,
                "skin": "candy1",
                "type": "gem"
            },
            "candy1v3": {
                "e": 1,
                "explanation": "A delicious candy. Xyn in New Town could give you something in exchange!",
                "g": 2400,
                "ignore": true,
                "name": "Candy",
                "s": 9999,
                "skin": "candy1",
                "type": "gem"
            },
            "candycane": {
                "a": true,
                "e": 1,
                "explanation": "The old man in Winterland was looking for sweets.",
                "g": 24000,
                "name": "Candy Cane",
                "s": 9999,
                "skin": "candycane",
                "type": "gem"
            },
            "candycanesword": {
                "a": true,
                "ability": "sugarrush",
                "attack": 21,
                "damage_type": "physical",
                "g": 72000,
                "grades": [
                    0,
                    8,
                    10,
                    12
                ],
                "name": "Candy Cane Sword",
                "range": 5,
                "set": "holidays",
                "skin": "candycanesword",
                "tier": 2,
                "type": "weapon",
                "upgrade": {
                    "attack": 4.5,
                    "range": 1
                },
                "wtype": "short_sword"
            },
            "candypop": {
                "duration": 1,
                "e": 10,
                "eat": true,
                "explanation": "You can eat it. Gift it. Exchange 10 of them at Xyn for a small reward.",
                "g": 120,
                "int": 6,
                "luck": 12,
                "name": "Candy Pop",
                "s": 9999,
                "skin": "candypop",
                "skin_a": "candypop",
                "type": "elixir",
                "vit": 10
            },
            "cape": {
                "armor": 10,
                "g": 20000,
                "grades": [
                    0,
                    8,
                    10,
                    12
                ],
                "name": "Cape",
                "resistance": 8,
                "skin": "cape0",
                "stat": 4,
                "type": "cape",
                "upgrade": {
                    "armor": 2,
                    "resistance": 1,
                    "stat": 0.1
                }
            },
            "carrot": {
                "g": 4,
                "name": "Carrot",
                "s": 9999,
                "skin": "carrot",
                "type": "material"
            },
            "carrotsword": {
                "a": true,
                "attack": 21,
                "charisma": -20,
                "cx": {
                    "accent": "#E9711A"
                },
                "damage_type": "physical",
                "dex": 12,
                "g": 92000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Carrot Sword",
                "range": 3,
                "set": "bunny",
                "skin": "carrotsword",
                "skin_c": "carrotsword_c",
                "tier": 2,
                "type": "weapon",
                "upgrade": {
                    "attack": 4.5,
                    "range": 1.25
                },
                "wtype": "short_sword"
            },
            "cclaw": {
                "apiercing": 20,
                "attack": 12,
                "cx": {
                    "extension": true,
                    "scale": 0.5
                },
                "damage_type": "physical",
                "g": 9600,
                "grades": [
                    5,
                    8,
                    10,
                    12
                ],
                "name": "Crab Claw",
                "range": 5.5,
                "skin": "cclaw",
                "tier": 1.5,
                "type": "weapon",
                "upgrade": {
                    "apiercing": 4,
                    "attack": 3.5,
                    "range": 1.5
                },
                "wtype": "fist"
            },
            "cdarktristone": {
                "apiercing": 5,
                "compound": {
                    "apiercing": 5,
                    "dex": 1,
                    "int": 1,
                    "rpiercing": 5,
                    "str": 1,
                    "vit": 1
                },
                "dex": 1,
                "evasion": 3,
                "g": 50000,
                "grades": [
                    1,
                    4,
                    6,
                    7
                ],
                "int": 1,
                "name": "Dark Tri-Stone",
                "rpiercing": 5,
                "skin": "darktristone",
                "str": 1,
                "type": "ring",
                "vit": 1
            },
            "cdragon": {
                "a": 2,
                "apiercing": 16,
                "armor": 40,
                "dex": 10,
                "dreturn": 3,
                "g": 8900000,
                "grades": [
                    0,
                    0,
                    10,
                    12
                ],
                "int": 10,
                "name": "Dragon Armor",
                "resistance": 32,
                "rpiercing": 16,
                "skin": "dragonarmor",
                "str": 10,
                "type": "chest",
                "vit": 2
            },
            "cearring": {
                "compound": {
                    "int": 2,
                    "str": 2
                },
                "edge": -2,
                "g": 380000,
                "grades": [
                    0,
                    4,
                    6,
                    7
                ],
                "int": 5,
                "name": "Earring of The Crypt",
                "skin": "cearring",
                "str": 5,
                "type": "earring"
            },
            "charmer": {
                "ability": "charm",
                "attr0": 1,
                "compound": {
                    "attr0": 1,
                    "vit": 10
                },
                "event": true,
                "g": 120000,
                "grades": [
                    0,
                    3,
                    6,
                    7
                ],
                "name": "Charmer",
                "skin": "charmer",
                "type": "orb",
                "vit": 10
            },
            "chrysalis0": {
                "a": true,
                "g": 40000,
                "grade": 0,
                "ignore": true,
                "monster": "dragold",
                "name": "Dragold's Chrysalis",
                "skin": "goldenegg",
                "type": "chrysalis"
            },
            "claw": {
                "attack": 10,
                "cx": {
                    "extension": true,
                    "scale": 0.5
                },
                "damage_type": "physical",
                "g": 7200,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "name": "Claw",
                "range": 5,
                "skin": "claw",
                "tier": 1,
                "type": "weapon",
                "upgrade": {
                    "attack": 3,
                    "range": 1.5
                },
                "wtype": "fist"
            },
            "coal": {
                "a": true,
                "compound": {},
                "explanation": "...",
                "g": 10,
                "name": "Coal",
                "skin": "coal",
                "type": "misc"
            },
            "coat": {
                "armor": 8,
                "g": 6000,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "name": "Coat",
                "resistance": 6,
                "scroll": true,
                "skin": "coat",
                "stat": 1,
                "tier": 1,
                "type": "chest",
                "upgrade": {
                    "armor": 0.5,
                    "resistance": 0.5,
                    "stat": 1
                }
            },
            "coat1": {
                "a": 2,
                "armor": 24,
                "extra_stat": 1,
                "g": 48000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Rugged Coat",
                "resistance": 16,
                "scroll": true,
                "set": "rugged",
                "skin": "coat1",
                "stat": 2,
                "tier": 2,
                "type": "chest",
                "upgrade": {
                    "armor": 2.5,
                    "resistance": 2.5,
                    "stat": 1
                }
            },
            "cocoon": {
                "g": 200,
                "name": "Cocoon",
                "s": 9999,
                "skin": "cocoon",
                "type": "material"
            },
            "computer": {
                "explanation": "Networks you to NPC's and extends the CODE capabilities.",
                "g": 64000000,
                "name": "Ancient Computer",
                "skin": "ancientcomputer",
                "special": true,
                "stand": "cstand",
                "type": "computer"
            },
            "confetti": {
                "action": "THROW!",
                "explanation": "To celebrate good times",
                "g": 20,
                "name": "Pack of Confetti's",
                "onclick": "socket.emit('throw',{num:locate_item('confetti'),x:character.real_x,y:character.real_y}); push_deferred('throw')",
                "s": 9999,
                "skin": "confetti",
                "throw": true,
                "type": "throw"
            },
            "cosmo0": {
                "cash": 289,
                "e": 1,
                "explanation": "Give this to NPC Haila to receive a new look. Heads-up! It's random, you may or may-not like it. [Work in progress - PRICE/DROPS MIGHT CHANGE!]",
                "g": 9248000,
                "name": "New Armor",
                "quest": "cx",
                "s": 9999,
                "skin": "cosmo0",
                "type": "cosmetics"
            },
            "cosmo1": {
                "cash": 459,
                "explanation": "Give this to NPC Haila to receive a new make-up. Heads-up! It's random, you may or may-not like it. [Work in progress - Not functional yet.]",
                "g": 14688000,
                "name": "New Make-up",
                "quest": "cx",
                "s": 9999,
                "skin": "cosmo1",
                "type": "cosmetics"
            },
            "cosmo2": {
                "cash": 129,
                "e": 1,
                "explanation": "Give this to NPC Haila to receive a new hairdo. Heads-up! It's random, you may or may-not like it. [Work in progress - PRICE/DROPS MIGHT CHANGE!]",
                "g": 4128000,
                "name": "New Hairdo",
                "quest": "cx",
                "s": 9999,
                "skin": "cosmo2",
                "type": "cosmetics"
            },
            "cosmo3": {
                "cash": 399,
                "e": 1,
                "explanation": "Give this to NPC Haila to receive a new hat. Heads-up! It's random, you may or may-not like it. [Work in progress - PRICE/DROPS MIGHT CHANGE!]",
                "g": 12768000,
                "name": "New Hat",
                "quest": "cx",
                "s": 9999,
                "skin": "cosmo3",
                "type": "cosmetics"
            },
            "cosmo4": {
                "cash": 1399,
                "explanation": "Give this to NPC Haila to receive a unique accessory. Heads-up! It's random, you may or may-not like it. [Work in progress - Not functional yet.]",
                "g": 44768000,
                "name": "New Accessory",
                "quest": "cx",
                "s": 9999,
                "skin": "cosmo4",
                "type": "cosmetics"
            },
            "crabclaw": {
                "g": 120,
                "name": "Crab Claw",
                "s": 9999,
                "skin": "crabclaw",
                "type": "material"
            },
            "cring": {
                "compound": {
                    "dex": 2,
                    "int": 2
                },
                "dex": 4,
                "edge": -2,
                "g": 240000,
                "grades": [
                    0,
                    4,
                    6,
                    7
                ],
                "int": 4,
                "name": "Ring of The Crypt",
                "skin": "cring",
                "type": "ring"
            },
            "critscroll": {
                "explanation": "Adds Critical Hit to an armor with a Stat attribute.",
                "g": 8000,
                "multiplier": 0.125,
                "name": "Critical Hit Scroll",
                "s": 9999,
                "skin": "critscroll",
                "stat": "crit",
                "type": "pscroll"
            },
            "crossbow": {
                "attack": 37,
                "damage_type": "physical",
                "g": 480000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Crossbow",
                "projectile": "crossbowarrow",
                "range": 101,
                "skin": "crossbow",
                "tier": 2,
                "type": "weapon",
                "upgrade": {
                    "attack": 6.3,
                    "range": 10.733333333333334
                },
                "wtype": "crossbow"
            },
            "cryptkey": {
                "explanation": "A key, imbued with magical energy.",
                "g": 50000,
                "name": "The Crypt Key",
                "opens": "crypt",
                "s": 10,
                "skin": "cryptkey",
                "type": "dungeon_key"
            },
            "cscale": {
                "explanation": "A very hard scale, can be sewn onto armors.",
                "g": 200,
                "name": "Croc Scale",
                "s": 9999,
                "skin": "cscale",
                "type": "material"
            },
            "cscroll0": {
                "explanation": "Scroll to combine 3 accessories. Things get challenging after +1. If the combination fails, the item is lost.",
                "g": 6400,
                "grade": 0,
                "name": "Compound Scroll",
                "s": 9999,
                "skin": "cscroll0",
                "type": "cscroll"
            },
            "cscroll1": {
                "explanation": "Scroll to combine 3 high grade accessories. If the combination fails, the item is lost.",
                "g": 240000,
                "grade": 1,
                "name": "High Compound Scroll",
                "s": 9999,
                "skin": "cscroll1",
                "type": "cscroll"
            },
            "cscroll2": {
                "explanation": "Scroll to combine 3 rare accessories. If the combination fails, the item is lost.",
                "g": 9200000,
                "grade": 2,
                "name": "Rare Compound Scroll",
                "s": 9999,
                "skin": "cscroll2",
                "type": "cscroll"
            },
            "cscroll3": {
                "a": true,
                "explanation": "A mysterious compound scroll, you can feel that it's very powerful. If the combination fails, the item is lost.",
                "g": 1840000000,
                "grade": 3,
                "markup": 20,
                "name": "Legendary Compound Scroll",
                "s": 9999,
                "skin": "cscroll3",
                "type": "cscroll"
            },
            "cshell": {
                "g": 32000,
                "name": "Crab Shell",
                "s": 9999,
                "skin": "cshell",
                "type": "material"
            },
            "ctristone": {
                "apiercing": 5,
                "compound": {
                    "apiercing": 5,
                    "dex": 1,
                    "int": 1,
                    "rpiercing": 5,
                    "str": 1,
                    "vit": 1
                },
                "dex": 1,
                "g": 50000,
                "grades": [
                    1,
                    4,
                    6,
                    7
                ],
                "int": 1,
                "name": "Tri-Stone",
                "rpiercing": 5,
                "skin": "tristone",
                "str": 1,
                "type": "ring",
                "vit": 1
            },
            "cupid": {
                "a": true,
                "attack": 29,
                "cx": {
                    "accent": "#DB2A86"
                },
                "damage_type": "heal",
                "event": true,
                "g": 90000,
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "name": "Cupid's Bow",
                "projectile": "cupid",
                "range": 50,
                "skin": "cupid",
                "tier": 2.5,
                "type": "weapon",
                "upgrade": {
                    "attack": 5.2,
                    "range": 8.666666666666668,
                    "vit": 2
                },
                "vit": 10,
                "wtype": "bow"
            },
            "cxjar": {
                "exclusive": true,
                "explanation": "An appearance liquified and stored inside a jar.",
                "g": 1,
                "name": "CX Jar",
                "s": 9999,
                "skin": "cxjar",
                "type": "jar"
            },
            "cyber": {
                "armor": 25,
                "dex": 2,
                "extra_stat": 2,
                "g": 320000,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "int": 6,
                "mcourage": 1,
                "name": "Cybernetic Implants",
                "pcourage": 1,
                "pnresistance": 4,
                "protection": true,
                "resistance": 28,
                "scroll": true,
                "skin": "cyber",
                "stat": 3,
                "str": 2,
                "tier": 3,
                "type": "helmet",
                "upgrade": {
                    "armor": 5.5,
                    "resistance": 5.5,
                    "stat": 1
                }
            },
            "dagger": {
                "a": true,
                "attack": 17,
                "cx": {
                    "accent": "#3B9A5C",
                    "extension": true,
                    "scale": 0.5
                },
                "damage_type": "physical",
                "g": 167000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Dagger",
                "range": 6,
                "skin": "dagger",
                "tier": 2,
                "type": "weapon",
                "upgrade": {
                    "attack": 4,
                    "range": 2
                },
                "wtype": "dagger"
            },
            "daggerofthedead": {
                "a": true,
                "apiercing": 20,
                "attack": 19,
                "cx": {
                    "accent": "#D87F0E",
                    "extension": true,
                    "scale": 0.5
                },
                "damage_type": "physical",
                "explanation": "A deadly weapon",
                "g": 224000,
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "name": "Dagger of the Dead",
                "range": 6.4,
                "skin": "daggerofthedead",
                "speed": -2,
                "str": 20,
                "tier": 2.4,
                "type": "weapon",
                "upgrade": {
                    "attack": 4.4,
                    "range": 2
                },
                "vit": -6,
                "wtype": "dagger"
            },
            "darktristone": {
                "action": "ACTIVATE!",
                "apiercing": 5,
                "compound": {
                    "apiercing": 5,
                    "dex": 1,
                    "int": 1,
                    "rpiercing": 5,
                    "str": 1,
                    "vit": 1
                },
                "dex": 1,
                "evasion": 3,
                "g": 50000,
                "grades": [
                    1,
                    4,
                    6,
                    7
                ],
                "ignore": true,
                "int": 1,
                "name": "Legacy Dark Tri-Stone",
                "onclick": "socket.emit('activate',{slot:$(this).data('id')})",
                "rpiercing": 5,
                "skin": "darktristone",
                "skin_a": "darktristone_a",
                "str": 1,
                "type": "ring",
                "vit": 1
            },
            "dartgun": {
                "attack": 10,
                "cx": {
                    "extension": true,
                    "scale": 0.5
                },
                "damage_type": "physical",
                "explanation": "Don't let the looks fool you. It's a solid weapon with most components forged from gold. The barrel and trigger mechanism is a platinum alloy. Can shoot anything that fits it's barrel, like actual gold.",
                "g": 20000000,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "name": "Golden Dart Gun",
                "projectile": "stone",
                "range": 50,
                "skin": "dartgun",
                "tier": 3,
                "type": "weapon",
                "upgrade": {
                    "attack": 10,
                    "range": 20
                },
                "wtype": "dartgun"
            },
            "dexamulet": {
                "compound": {
                    "dex": 3
                },
                "dex": 4,
                "g": 30000,
                "grades": [
                    3,
                    5,
                    6,
                    7
                ],
                "name": "Amulet of Dexterity",
                "skin": "dexamulet",
                "type": "amulet"
            },
            "dexbelt": {
                "compound": {
                    "dex": 3
                },
                "dex": 4,
                "g": 50000,
                "grades": [
                    2,
                    5,
                    6,
                    7
                ],
                "name": "Belt of Dexterity",
                "skin": "dexbelt",
                "type": "belt"
            },
            "dexearring": {
                "compound": {
                    "dex": 2
                },
                "dex": 3,
                "g": 38000,
                "grades": [
                    2,
                    5,
                    6,
                    7
                ],
                "name": "Earring of Dexterity",
                "skin": "dexearring",
                "type": "earring"
            },
            "dexearringx": {
                "compound": {
                    "dex": 2,
                    "luck": 2
                },
                "dex": 6,
                "g": 38000,
                "grades": [
                    0,
                    2,
                    6,
                    7
                ],
                "luck": 2,
                "name": "Enchanted Earring",
                "skin": "dexearringx",
                "speed": 1,
                "type": "earring"
            },
            "dexring": {
                "compound": {
                    "dex": 2
                },
                "dex": 2,
                "g": 24000,
                "grades": [
                    3,
                    5,
                    6,
                    7
                ],
                "name": "Ring of Dexterity",
                "skin": "dexring",
                "type": "ring"
            },
            "dexscroll": {
                "explanation": "Adds Dexterity to an armor with a Stat attribute.",
                "g": 8000,
                "multiplier": 1,
                "name": "Dexterity Scroll",
                "s": 9999,
                "skin": "dexscroll",
                "stat": "dex",
                "type": "pscroll"
            },
            "dkey": {
                "action": "UNLOCK",
                "explanation": "A key that unlocks any teller!",
                "g": 72000000,
                "name": "Diamond Key",
                "onclick": "socket.emit('activate',{num:locate_item('dkey')})",
                "s": 2,
                "skin": "dkey",
                "type": "bank_key"
            },
            "dragondagger": {
                "a": true,
                "armor": 40,
                "attack": 22,
                "cx": {
                    "accent": "#D19FDA",
                    "extension": true,
                    "scale": 0.5
                },
                "damage_type": "physical",
                "explanation": "Majestic",
                "g": 2400000,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "name": "Dragon Dagger",
                "range": 11,
                "skin": "dragondagger",
                "str": 20,
                "tier": 3,
                "type": "weapon",
                "upgrade": {
                    "armor": 4,
                    "attack": 5,
                    "range": 2
                },
                "wtype": "dagger"
            },
            "drapes": {
                "g": 480,
                "name": "Drapes",
                "s": 9999,
                "skin": "drapes",
                "type": "material"
            },
            "dreturnscroll": {
                "explanation": "Adds Damage Return to an armor with a Stat attribute.",
                "g": 8000,
                "multiplier": 0.5,
                "name": "Damage Return Scroll",
                "s": 9999,
                "skin": "dreturnscroll",
                "stat": "dreturn",
                "type": "pscroll"
            },
            "dstones": {
                "g": 90,
                "name": "Digestive Stones",
                "s": 9999,
                "skin": "dstones",
                "type": "material"
            },
            "ecape": {
                "armor": 10,
                "cuteness": 20,
                "g": 20000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Fluffy Blanket",
                "resistance": 8,
                "set": "bunny",
                "skin": "ecape",
                "stat": 5,
                "type": "cape",
                "upgrade": {
                    "armor": 2,
                    "cuteness": 3,
                    "resistance": 1,
                    "stat": 0.1
                }
            },
            "ectoplasm": {
                "g": 60000,
                "name": "Ectoplasm",
                "s": 9999,
                "skin": "ectoplasm",
                "type": "material"
            },
            "eears": {
                "a": 2,
                "armor": 10,
                "cuteness": 12,
                "evasion": 1,
                "g": 32000,
                "grades": [
                    6,
                    9,
                    10,
                    12
                ],
                "name": "Bunny Ears",
                "resistance": 11,
                "scroll": true,
                "set": "bunny",
                "skin": "eears",
                "stat": 1,
                "tier": 1.5,
                "type": "helmet",
                "upgrade": {
                    "armor": 1.5,
                    "cuteness": 2,
                    "evasion": 0.2,
                    "resistance": 1.5,
                    "stat": 1
                },
                "vit": 2
            },
            "egg0": {
                "explanation": "A uniquely painted Egg!",
                "g": 4000,
                "name": "Easter Egg",
                "s": 9999,
                "skin": "egg0",
                "type": "quest"
            },
            "egg1": {
                "explanation": "A uniquely painted Egg!",
                "g": 4000,
                "name": "Easter Egg",
                "s": 9999,
                "skin": "egg1",
                "type": "quest"
            },
            "egg2": {
                "explanation": "A uniquely painted Egg!",
                "g": 4000,
                "name": "Easter Egg",
                "s": 9999,
                "skin": "egg2",
                "type": "quest"
            },
            "egg3": {
                "explanation": "A uniquely painted Egg!",
                "g": 4000,
                "name": "Easter Egg",
                "s": 9999,
                "skin": "egg3",
                "type": "quest"
            },
            "egg4": {
                "explanation": "A uniquely painted Egg!",
                "g": 4000,
                "name": "Easter Egg",
                "s": 9999,
                "skin": "egg4",
                "type": "quest"
            },
            "egg5": {
                "explanation": "A uniquely painted Egg!",
                "g": 4000,
                "name": "Easter Egg",
                "s": 9999,
                "skin": "egg5",
                "type": "quest"
            },
            "egg6": {
                "explanation": "A uniquely painted Egg!",
                "g": 4000,
                "name": "Easter Egg",
                "s": 9999,
                "skin": "egg6",
                "type": "quest"
            },
            "egg7": {
                "explanation": "A uniquely painted Egg!",
                "g": 4000,
                "name": "Easter Egg",
                "s": 9999,
                "skin": "egg7",
                "type": "quest"
            },
            "egg8": {
                "explanation": "A uniquely painted Egg!",
                "g": 4000,
                "name": "Easter Egg",
                "s": 9999,
                "skin": "egg8",
                "type": "quest"
            },
            "eggnog": {
                "duration": 48,
                "evasion": 2.5,
                "explanation": "Fills your heart with warmth and joy.",
                "g": 6000,
                "hp": 1200,
                "name": "Eggnog",
                "s": 9999,
                "skin": "eggnog",
                "skin_a": "eggnog",
                "type": "elixir"
            },
            "electronics": {
                "explanation": "Various random electronic components",
                "g": 7,
                "name": "Electronics",
                "s": 9999,
                "skin": "electronics",
                "type": "material"
            },
            "elixirdex0": {
                "dex": 6,
                "duration": 12,
                "g": 6000,
                "name": "Elixir of Dexterity",
                "s": 9999,
                "skin": "elixirdex0",
                "skin_a": "elixirdex0",
                "type": "elixir"
            },
            "elixirdex1": {
                "dex": 8,
                "duration": 24,
                "g": 20000,
                "name": "Elixir of Greater Dexterity",
                "s": 9999,
                "skin": "elixirdex1",
                "skin_a": "elixirdex1",
                "type": "elixir"
            },
            "elixirdex2": {
                "a": true,
                "dex": 12,
                "duration": 48,
                "g": 120000,
                "name": "Elixir of Extreme Dexterity",
                "s": 9999,
                "skin": "elixirdex2",
                "skin_a": "elixirdex2",
                "type": "elixir"
            },
            "elixirfires": {
                "a": true,
                "duration": 2,
                "firesistance": 30,
                "g": 240000,
                "name": "Elixir of Fire Resistance",
                "s": 40,
                "skin": "elixirfires",
                "skin_a": "elixirfires",
                "type": "elixir"
            },
            "elixirfzres": {
                "a": true,
                "duration": 2,
                "fzresistance": 30,
                "g": 240000,
                "name": "Elixir of Freeze Resistance",
                "s": 40,
                "skin": "elixirfzres",
                "skin_a": "elixirfzres",
                "type": "elixir"
            },
            "elixirint0": {
                "duration": 12,
                "g": 6000,
                "int": 6,
                "name": "Elixir of Intelligence",
                "s": 9999,
                "skin": "elixirint0",
                "skin_a": "elixirint0",
                "type": "elixir"
            },
            "elixirint1": {
                "duration": 24,
                "g": 20000,
                "int": 8,
                "name": "Elixir of Greater Intelligence",
                "s": 9999,
                "skin": "elixirint1",
                "skin_a": "elixirint1",
                "type": "elixir"
            },
            "elixirint2": {
                "a": true,
                "duration": 48,
                "g": 120000,
                "int": 12,
                "name": "Elixir of Extreme Intelligence",
                "s": 9999,
                "skin": "elixirint2",
                "skin_a": "elixirint2",
                "type": "elixir"
            },
            "elixirluck": {
                "a": true,
                "duration": 12,
                "g": 240000,
                "luck": 16,
                "name": "Liquid Luck",
                "s": 9999,
                "skin": "elixirluck",
                "skin_a": "elixirluck",
                "type": "elixir"
            },
            "elixirpnres": {
                "a": true,
                "duration": 2,
                "g": 240000,
                "name": "Elixir of Poison Resistance",
                "pnresistance": 30,
                "s": 40,
                "skin": "elixirpnres",
                "skin_a": "elixirpnres",
                "type": "elixir"
            },
            "elixirstr0": {
                "duration": 12,
                "g": 6000,
                "name": "Elixir of Strength",
                "s": 9999,
                "skin": "elixirstr0",
                "skin_a": "elixirstr0",
                "str": 6,
                "type": "elixir"
            },
            "elixirstr1": {
                "duration": 24,
                "g": 20000,
                "name": "Elixir of Greater Strength",
                "s": 9999,
                "skin": "elixirstr1",
                "skin_a": "elixirstr1",
                "str": 8,
                "type": "elixir"
            },
            "elixirstr2": {
                "a": true,
                "duration": 48,
                "g": 120000,
                "name": "Elixir of Extreme Strength",
                "s": 9999,
                "skin": "elixirstr2",
                "skin_a": "elixirstr2",
                "str": 12,
                "type": "elixir"
            },
            "elixirvit0": {
                "duration": 12,
                "g": 6000,
                "name": "Elixir of Vitality",
                "s": 9999,
                "skin": "elixirvit0",
                "skin_a": "elixirvit0",
                "type": "elixir",
                "vit": 8
            },
            "elixirvit1": {
                "duration": 24,
                "g": 20000,
                "name": "Elixir of Greater Vitality",
                "s": 9999,
                "skin": "elixirvit1",
                "skin_a": "elixirvit1",
                "type": "elixir",
                "vit": 12
            },
            "elixirvit2": {
                "a": true,
                "duration": 48,
                "g": 120000,
                "name": "Elixir of Extreme Vitality",
                "s": 9999,
                "skin": "elixirvit2",
                "skin_a": "elixirvit2",
                "type": "elixir",
                "vit": 18
            },
            "emotionjar": {
                "exclusive": true,
                "explanation": "An emotion liquified and stored inside a jar.",
                "g": 1,
                "name": "Emotion Jar",
                "s": 9999,
                "skin": "emotionjar",
                "type": "jar"
            },
            "emptyheart": {
                "event": true,
                "explanation": "A cold empty stone heart",
                "g": 12000,
                "name": "Empty Heart",
                "s": 9999,
                "skin": "emptyheart",
                "type": "material"
            },
            "emptyjar": {
                "explanation": "Always nice to have some empty jars lying around, you never know when you'll need one!",
                "g": 1,
                "name": "Empty Jar",
                "s": 9999,
                "skin": "emptyjar",
                "type": "jar"
            },
            "epyjamas": {
                "a": 2,
                "armor": 16,
                "charisma": -5,
                "explanation": "Comfortable.",
                "g": 48000,
                "grades": [
                    5,
                    8,
                    10,
                    12
                ],
                "hp": 400,
                "name": "Pyjamas",
                "resistance": 11,
                "scroll": true,
                "set": "bunny",
                "skin": "epyjamas",
                "stat": 1,
                "tier": 1.5,
                "type": "chest",
                "upgrade": {
                    "armor": 1.5,
                    "hp": 50,
                    "resistance": 1.5,
                    "stat": 1
                }
            },
            "eslippers": {
                "armor": 6,
                "cuteness": 24,
                "g": 24200,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "name": "Fluffy Slippers",
                "scroll": true,
                "set": "bunny",
                "skin": "eslippers",
                "speed": 6,
                "stat": 1,
                "tier": 1.5,
                "type": "shoes",
                "upgrade": {
                    "armor": 1.5,
                    "cuteness": 2,
                    "speed": 0.75,
                    "stat": 1
                }
            },
            "espresso": {
                "duration": 0.0005,
                "g": 12000,
                "name": "Espresso",
                "s": 9999,
                "skin": "espresso",
                "skin_a": "espresso",
                "speed": 24,
                "type": "elixir"
            },
            "essenceofether": {
                "explanation": "A ghostly essence, maybe it could allow you to shift from this world momentarily",
                "g": 40000,
                "name": "Ethereal Essence",
                "s": 9999,
                "skin": "essenceofether",
                "type": "material"
            },
            "essenceoffire": {
                "explanation": "So fierce, so mesmerizing",
                "g": 40000,
                "name": "Essence of Fire",
                "s": 9999,
                "skin": "essenceoffire",
                "type": "material"
            },
            "essenceoffrost": {
                "explanation": "It's like an ice storm in a bottle",
                "g": 40000,
                "name": "Essence of Frost",
                "s": 9999,
                "skin": "essenceoffrost",
                "type": "material"
            },
            "essenceofgreed": {
                "explanation": "A peculiar material.",
                "g": 13,
                "name": "Essence of Greed",
                "s": 9999,
                "skin": "essenceofgreed",
                "type": "material"
            },
            "essenceoflife": {
                "explanation": "Full of life, literally.",
                "g": 1,
                "name": "Essence of Life",
                "s": 9999,
                "skin": "essenceoflife",
                "type": "material"
            },
            "essenceofnature": {
                "explanation": "Earthly energy, waiting to spring",
                "g": 5000,
                "name": "Essence of Nature",
                "s": 9999,
                "skin": "essenceofnature",
                "type": "material"
            },
            "evasionscroll": {
                "evasion": 2,
                "explanation": "Adds Evasion to an armor with a Special Stat attribute.",
                "g": 8000,
                "name": "Evasion Scroll",
                "s": 9999,
                "skin": "evasionscroll",
                "stat": "evasion",
                "type": "pscroll"
            },
            "exoarm": {
                "armor": 80,
                "compound": {
                    "int": 6,
                    "str": 6
                },
                "cx": {},
                "explanation": "It does more than just enhance your natural movements, almost like has a mind of it's own",
                "g": 48000000,
                "grades": [
                    0,
                    0,
                    6,
                    7
                ],
                "int": 20,
                "name": "Exoskeletal Arm",
                "skin": "exoarm",
                "str": 24,
                "tier": 3,
                "type": "misc_offhand"
            },
            "fallen": {
                "a": true,
                "armor": 14,
                "class": [
                    "rogue",
                    "warrior"
                ],
                "crit": 2,
                "dex": 4,
                "frequency": 6,
                "g": 6400000,
                "grades": [
                    0,
                    0,
                    8,
                    10
                ],
                "name": "Pants of the Fallen Master",
                "resistance": 8,
                "scroll": true,
                "set": "fury",
                "skin": "fallen",
                "speed": 3,
                "stat": 1,
                "tier": 1.5,
                "type": "pants",
                "upgrade": {
                    "armor": 1.5,
                    "crit": 0.5,
                    "resistance": 1.5,
                    "stat": 1
                }
            },
            "fcape": {
                "armor": 10,
                "firesistance": 4,
                "g": 16000000,
                "grades": [
                    0,
                    0,
                    10,
                    12
                ],
                "name": "Fiery Cape",
                "resistance": 8,
                "skin": "fcape",
                "stat": 6,
                "type": "cape",
                "upgrade": {
                    "armor": 2,
                    "firesistance": 4,
                    "resistance": 2,
                    "stat": 0.1
                }
            },
            "fclaw": {
                "a": true,
                "ability": "freeze",
                "attack": 14,
                "attr0": 0.2,
                "cx": {
                    "extension": true,
                    "scale": 0.5
                },
                "damage_type": "physical",
                "g": 72000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "int": 8,
                "name": "Frozen Claw",
                "range": 6,
                "skin": "fclaw",
                "skin_r": "fclaw_r",
                "tier": 2,
                "type": "weapon",
                "upgrade": {
                    "attack": 4,
                    "attr0": 0.1,
                    "range": 1.5
                },
                "wtype": "fist"
            },
            "feather0": {
                "explanation": "Holding this, you understand how those huge birds can fly, it's not a normal feather!",
                "g": 800,
                "name": "Magical Feather",
                "s": 9999,
                "skin": "feather0",
                "type": "material"
            },
            "feather1": {
                "explanation": "Holding this, you understand how those huge harpies can fly, it's not a normal feather!",
                "g": 800,
                "name": "Harpy Feather",
                "s": 9999,
                "skin": "feather0",
                "type": "material"
            },
            "fieldgen0": {
                "explanation": "Summon a robot generating a dampening field that prevents teleportation of any kind!",
                "g": 2000000,
                "name": "Dampening Field Generator",
                "s": false,
                "skin": "fieldgen0",
                "spawn": "fieldgen0",
                "type": "spawner"
            },
            "fierygloves": {
                "armor": 11,
                "frequency": 2,
                "g": 144000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Fiery Gloves",
                "resistance": 6,
                "scroll": true,
                "set": "swift",
                "skin": "fierygloves",
                "stat": 1,
                "tier": 1.5,
                "type": "gloves",
                "upgrade": {
                    "armor": 1.5,
                    "frequency": 0.125,
                    "resistance": 1.5,
                    "stat": 1
                }
            },
            "figurine": {
                "action": "BREAK!",
                "g": 40000,
                "ignore": true,
                "name": "Terracota Army Figurine",
                "note": "Summons an ancient soldier to fight for you",
                "s": 9999,
                "skin": "figurine",
                "spawn": "terracota",
                "type": "spawner"
            },
            "fireblade": {
                "a": true,
                "ability": "burn",
                "attack": 21,
                "attr0": 1.5,
                "cx": {
                    "accent": "#E34C25"
                },
                "damage_type": "physical",
                "g": 96000,
                "grades": [
                    0,
                    8,
                    10,
                    12
                ],
                "name": "Fiery Blade",
                "range": 7,
                "skin": "fireblade",
                "skin_r": "fireblade_r",
                "tier": 2,
                "type": "weapon",
                "upgrade": {
                    "attack": 4.5,
                    "attr0": 0.5,
                    "range": 1.5
                },
                "wtype": "short_sword"
            },
            "firebow": {
                "a": true,
                "ability": "burn",
                "attack": 26,
                "attr0": 2,
                "cx": {
                    "accent": "#E34C25"
                },
                "damage_type": "physical",
                "explanation": "Rains fire upon the enemy",
                "g": 178000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Fire Bow",
                "projectile": "firearrow",
                "range": 45,
                "skin": "firebow",
                "skin_r": "firebow_r",
                "tier": 2,
                "type": "weapon",
                "upgrade": {
                    "attack": 4.8,
                    "attr0": 0.5,
                    "range": 8.333333333333332
                },
                "wtype": "bow"
            },
            "firecrackers": {
                "action": "THROW!",
                "explanation": "Scary but harmless",
                "g": 20,
                "name": "Firecracker",
                "onclick": "socket.emit('throw',{num:locate_item('firecrackers'),x:character.real_x,y:character.real_y}); push_deferred('throw')",
                "s": 9999,
                "skin": "firecrackers",
                "throw": true,
                "type": "throw"
            },
            "firestaff": {
                "a": true,
                "ability": "burn",
                "attack": 35,
                "attr0": 2,
                "cx": {
                    "accent": "#D3001E"
                },
                "damage_type": "magical",
                "g": 189000,
                "grades": [
                    0,
                    8,
                    10,
                    12
                ],
                "name": "Fiery Staff",
                "projectile": "fireball",
                "range": 56,
                "skin": "firestaff",
                "skin_r": "firestaff_r",
                "tier": 2,
                "type": "weapon",
                "upgrade": {
                    "attack": 5.5,
                    "attr0": 0.5,
                    "range": 3.5
                },
                "wtype": "staff"
            },
            "firestars": {
                "ability": "burn",
                "attack": 8,
                "attr0": 1.5,
                "cx": {
                    "extension": true,
                    "scale": 0.5
                },
                "damage_type": "physical",
                "g": 290000,
                "grades": [
                    0,
                    4,
                    10,
                    12
                ],
                "name": "Fiery Throwing Stars",
                "range": 65,
                "skin": "firestars",
                "skin_r": "firestars_r",
                "tier": 2.5,
                "type": "weapon",
                "upgrade": {
                    "attack": 3.7,
                    "attr0": 0.5,
                    "range": 5.5
                },
                "wtype": "stars"
            },
            "flute": {
                "explanation": "The sound of each flute is unique and mesmerizing. Your pets will easily recognize the sound of yours and come to your call.",
                "g": 200000000,
                "name": "Flute",
                "skin": "flute",
                "type": "flute"
            },
            "forscroll": {
                "explanation": "Adds Fortitude to an armor with a Stat attribute.",
                "g": 8000,
                "multiplier": 1,
                "name": "Fortitude Scroll",
                "s": 9999,
                "skin": "forscroll",
                "stat": "for",
                "type": "pscroll"
            },
            "frankypants": {
                "a": 2,
                "armor": 35,
                "extra_stat": 2,
                "g": 780000,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "name": "Franky Pants",
                "resistance": 21,
                "scroll": true,
                "skin": "frankypants",
                "speed": 1,
                "stat": 3,
                "tier": 3,
                "type": "pants",
                "upgrade": {
                    "armor": 5.5,
                    "resistance": 5.5,
                    "stat": 1
                },
                "vit": 6
            },
            "frequencyscroll": {
                "explanation": "Adds Attack Speed to an armor with a Stat attribute.",
                "g": 8000,
                "multiplier": 0.325,
                "name": "Attack Speed Scroll",
                "s": 9999,
                "skin": "frequencyscroll",
                "stat": "frequency",
                "type": "pscroll"
            },
            "friendtoken": {
                "explanation": "A token representing friendship. Awarded each time a friend joins the adventure!",
                "g": 36000,
                "name": "Friend Token",
                "s": 9999,
                "skin": "friendtoken",
                "type": "token"
            },
            "frogt": {
                "g": 3,
                "name": "Frog Tongue",
                "s": 9999,
                "skin": "frogt",
                "type": "material"
            },
            "frostbow": {
                "a": true,
                "ability": "freeze",
                "attack": 26,
                "attr0": 2,
                "cx": {
                    "accent": "#2D9DE5"
                },
                "damage_type": "physical",
                "explanation": "Let your enemy feel the cold",
                "g": 78000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Frost Bow",
                "projectile": "frostarrow",
                "range": 65,
                "skin": "frostbow",
                "skin_r": "frostbow_r",
                "tier": 2,
                "type": "weapon",
                "upgrade": {
                    "attack": 4.8,
                    "attr0": 0.5,
                    "range": 8.333333333333332
                },
                "wtype": "bow"
            },
            "froststaff": {
                "a": true,
                "ability": "freeze",
                "attack": 35,
                "attr0": 4,
                "damage_type": "magical",
                "g": 289000,
                "grades": [
                    0,
                    8,
                    10,
                    12
                ],
                "int": 2,
                "name": "Frost Staff",
                "projectile": "frostball",
                "range": 56,
                "skin": "froststaff",
                "skin_r": "froststaff_r",
                "tier": 2,
                "type": "weapon",
                "upgrade": {
                    "attack": 5.5,
                    "attr0": 1.25,
                    "int": 0.2,
                    "range": 3.5
                },
                "wtype": "staff"
            },
            "frozenkey": {
                "explanation": "A key, imbued with magical energy.",
                "g": 50000,
                "name": "The Frozen Cave Key",
                "opens": "winter_instance",
                "s": 10,
                "skin": "frozenkey",
                "type": "dungeon_key"
            },
            "frozenstone": {
                "action": "SHAKE",
                "explanation": "It's strangely not cold, must be a magical artifact.",
                "g": 20000,
                "name": "Frozen Stone",
                "onclick": "socket.emit('activate',{num:locate_item('frozenstone')})",
                "s": 9999,
                "skin": "frozenstone",
                "type": "activator"
            },
            "fsword": {
                "ability": "freeze",
                "attack": 21,
                "attr0": 0.2,
                "damage_type": "physical",
                "g": 72000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "int": 8,
                "name": "Frozen Sword",
                "range": 7,
                "skin": "fsword",
                "skin_r": "fsword_r",
                "tier": 2,
                "type": "weapon",
                "upgrade": {
                    "attack": 4.5,
                    "attr0": 0.1,
                    "range": 1.5
                },
                "wtype": "short_sword"
            },
            "ftrinket": {
                "a": true,
                "armor": 5,
                "compound": {
                    "armor": 5,
                    "speed": 1,
                    "vit": 3
                },
                "dex": 2,
                "explanation": "Good things come to those who wait",
                "g": 96000,
                "grades": [
                    1,
                    3,
                    6,
                    7
                ],
                "int": 2,
                "name": "Trinket of Faith",
                "skin": "ftrinket",
                "speed": 0.5,
                "str": 2,
                "type": "orb",
                "vit": 2
            },
            "funtoken": {
                "explanation": "A token representing fun with friends. Collect them from Daily events and exchange them for treasures!",
                "g": 12000,
                "name": "Fun Token",
                "s": 9999,
                "skin": "funtoken",
                "type": "token"
            },
            "fury": {
                "a": true,
                "apiercing": 20,
                "armor": 10,
                "class": [
                    "rogue",
                    "warrior"
                ],
                "crit": 6,
                "dex": 2,
                "g": 6400000,
                "grades": [
                    0,
                    0,
                    10,
                    12
                ],
                "legacy": {
                    "class": null,
                    "set": null
                },
                "name": "Band of Fury",
                "resistance": 11,
                "scroll": true,
                "set": "fury",
                "skin": "fury",
                "stat": 1,
                "tier": 1.5,
                "type": "helmet",
                "upgrade": {
                    "apiercing": 10,
                    "armor": 1.5,
                    "crit": 0.5,
                    "resistance": 1.5,
                    "stat": 1
                }
            },
            "gbow": {
                "a": true,
                "attack": 29,
                "cx": {
                    "accent": "#DF6915",
                    "border": 1
                },
                "damage_type": "physical",
                "g": 3200000,
                "grades": [
                    0,
                    0,
                    10,
                    12
                ],
                "name": "Bow of the Feared Ranger",
                "projectile": "garrow",
                "range": 70,
                "skin": "gbow",
                "str": 3,
                "tier": 2.5,
                "type": "weapon",
                "upgrade": {
                    "attack": 5.2,
                    "range": 8.666666666666668
                },
                "wtype": "bow"
            },
            "gcape": {
                "evasion": 1,
                "g": 8008,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Grinch's Cape",
                "pnresistance": 5,
                "reflection": 1,
                "resistance": 8,
                "skin": "gcape",
                "speed": -2,
                "stat": 4,
                "type": "cape",
                "upgrade": {
                    "pnresistance": 1,
                    "resistance": 4,
                    "stat": 0.1
                }
            },
            "gem0": {
                "a": true,
                "e": 1,
                "explanation": "A very rare gem. Can be exchanged for random treasures.",
                "g": 240000,
                "name": "Raw Emerald",
                "s": 9999,
                "skin": "gem0",
                "type": "gem"
            },
            "gem1": {
                "a": 2,
                "e": 1,
                "explanation": "A hard to find gem. Can be exchanged for random treasures.",
                "g": 24000,
                "name": "Tiny Ruby",
                "s": 9999,
                "skin": "gem1",
                "type": "gem"
            },
            "gem2": {
                "a": 2,
                "explanation": "A precious gem. Can be exchanged for random treasures.",
                "g": 360000,
                "name": "Raw Diamond",
                "s": 9999,
                "skin": "gem2",
                "type": "gem"
            },
            "gem3": {
                "a": 2,
                "explanation": "A hard to find gem. Can be exchanged for random treasures.",
                "g": 4800000,
                "name": "Raw Colourful Diamond",
                "s": 9999,
                "skin": "gem3",
                "type": "gem"
            },
            "gemfragment": {
                "e": 50,
                "explanation": "Beautiful, yet broken. Would be extremely valuable if they were whole.",
                "g": 32000,
                "name": "Gem Fragment",
                "quest": "gemfragment",
                "s": 9999,
                "skin": "gemfragment",
                "type": "quest"
            },
            "ghatb": {
                "explanation": "If you put on this hat, you can run item giveaways!",
                "g": 128000,
                "hat": "hat114",
                "name": "Hat of Generosity",
                "skin": "ghatb",
                "type": "helmet",
                "vit": 24
            },
            "ghatp": {
                "explanation": "If you put on this hat, you can run item giveaways!",
                "g": 128000,
                "hat": "hat115",
                "name": "Hat of Generosity",
                "skin": "ghatp",
                "type": "helmet",
                "vit": 24
            },
            "gift0": {
                "a": true,
                "e": 1,
                "explanation": "A Rare Gift to celebrate our Anniversary!",
                "g": 2400,
                "name": "Rare Gift",
                "s": 9999,
                "skin": "gift0",
                "type": "gem"
            },
            "gift1": {
                "a": 2,
                "e": 1,
                "explanation": "A Gift to celebrate our Anniversary!",
                "g": 100,
                "name": "Gift",
                "s": 9999,
                "skin": "gift1",
                "type": "gem"
            },
            "glitch": {
                "a": true,
                "e": 1,
                "event": true,
                "explanation": "Huh?! ??!",
                "g": 10000,
                "ignore": true,
                "name": "A Glitch",
                "skin": "glitch",
                "type": "misc"
            },
            "glolipop": {
                "ability": "sugarrush",
                "attack": 14,
                "cx": {
                    "accent": "#64B553"
                },
                "damage_type": "physical",
                "dex": 24,
                "explosion": 20,
                "g": 16000,
                "grades": [
                    8,
                    9,
                    10,
                    12
                ],
                "name": "Lolipop Mace",
                "range": 4,
                "skin": "glolipop",
                "tier": 0,
                "type": "weapon",
                "upgrade": {
                    "attack": 2.9,
                    "explosion": 2,
                    "range": 1
                },
                "wtype": "mace"
            },
            "gloves": {
                "armor": 6,
                "g": 3400,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "name": "Gloves",
                "resistance": 3,
                "scroll": true,
                "skin": "gloves",
                "stat": 1,
                "tier": 1,
                "type": "gloves",
                "upgrade": {
                    "armor": 0.5,
                    "resistance": 0.5,
                    "stat": 1
                }
            },
            "gloves1": {
                "a": 2,
                "armor": 16,
                "extra_stat": 1,
                "g": 34000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Rugged Gloves",
                "resistance": 8,
                "scroll": true,
                "set": "rugged",
                "skin": "gloves1",
                "stat": 2,
                "tier": 2,
                "type": "gloves",
                "upgrade": {
                    "armor": 2.5,
                    "resistance": 2.5,
                    "stat": 1
                }
            },
            "goldbooster": {
                "compound": {
                    "gold": 8
                },
                "days": 30,
                "explanation": "Boosts gold loot from chests.",
                "g": 79840000,
                "gain": "gold",
                "gold": 20,
                "grades": [
                    0,
                    10,
                    6,
                    7
                ],
                "legacy": {
                    "gold": 10
                },
                "name": "Gold Booster",
                "skin": "goldbooster",
                "skin_a": "goldbooster_a",
                "type": "booster"
            },
            "goldenegg": {
                "a": true,
                "e": 1,
                "event": true,
                "explanation": "Nope, it's not painted, an actual golden egg!",
                "g": 60000,
                "name": "Golden Egg",
                "s": 9999,
                "skin": "goldenegg",
                "type": "quest"
            },
            "goldenpowerglove": {
                "a": true,
                "ability": "xpower",
                "apiercing": 64,
                "armor": 36,
                "charge": 90,
                "extra_stat": 1,
                "frequency": 5,
                "g": 16000000,
                "grades": [
                    0,
                    0,
                    8,
                    10
                ],
                "name": "Golden Power Glove",
                "resistance": 18,
                "rpiercing": 64,
                "scroll": true,
                "set": "legends",
                "skin": "goldenpowerglove",
                "stat": 6,
                "tier": 4,
                "type": "gloves",
                "upgrade": {
                    "apiercing": 4,
                    "armor": 7.5,
                    "frequency": 0.2,
                    "resistance": 7.5,
                    "rpiercing": 4,
                    "stat": 1
                }
            },
            "goldingot": {
                "explanation": "Solid Gold",
                "g": 2000000,
                "name": "Gold Ingot",
                "offering": 1.1,
                "s": 100,
                "skin": "goldingot",
                "type": "material"
            },
            "goldnugget": {
                "explanation": "Ideal for crafting",
                "g": 120000,
                "name": "Gold Nugget",
                "offering": 0,
                "s": 1000,
                "skin": "goldnugget",
                "type": "material"
            },
            "goldring": {
                "a": true,
                "compound": {
                    "gold": 2
                },
                "g": 28000000,
                "gold": 4,
                "grades": [
                    0,
                    2,
                    6,
                    7
                ],
                "name": "Ring of Gold",
                "skin": "goldenring",
                "type": "ring"
            },
            "goldscroll": {
                "explanation": "Adds Gold bonus to an armor with a Stat attribute.",
                "g": 8000,
                "multiplier": 0.5,
                "name": "Gold Scroll",
                "s": 9999,
                "skin": "goldscroll",
                "stat": "gold",
                "type": "pscroll"
            },
            "gphelmet": {
                "a": 2,
                "armor": 14,
                "crit": 0.5,
                "extra_stat": 0,
                "g": 32000,
                "grades": [
                    0,
                    0,
                    10,
                    12
                ],
                "lifesteal": 2,
                "luck": -4,
                "name": "Green Pumpkin Head",
                "protection": true,
                "reflection": 1,
                "resistance": 16,
                "rpiercing": 10,
                "scroll": true,
                "skin": "gphelmet",
                "stat": 1,
                "tier": 2,
                "type": "helmet",
                "upgrade": {
                    "armor": 2.5,
                    "crit": 0.1,
                    "reflection": 0.4,
                    "resistance": 2.5,
                    "stat": 1
                }
            },
            "greenbomb": {
                "a": true,
                "crit": 10,
                "dex": 120,
                "duration": 0.002,
                "eat": true,
                "explanation": "It's a candy with very questionable ingredients, might be addictive.",
                "g": 10000,
                "name": "Green Bomb",
                "resistance": -800,
                "s": 9999,
                "skin": "greenbomb",
                "skin_a": "greenbomb",
                "speed": 30,
                "str": 50,
                "type": "elixir",
                "withdrawal": "withdrawal"
            },
            "greenenvelope": {
                "a": true,
                "e": 1,
                "event": true,
                "explanation": "Congratulations and prosperity",
                "g": 24000,
                "name": "Green Envelope",
                "s": 9999,
                "skin": "greenenvelope",
                "type": "gem"
            },
            "gslime": {
                "g": 20,
                "name": "Slime Core",
                "s": 9999,
                "skin": "gslime",
                "type": "material"
            },
            "gstaff": {
                "attack": 67,
                "blast": 40,
                "cx": {
                    "accent": "#AF2131"
                },
                "damage_type": "magical",
                "explanation": "[Warning] Highly volatile - might lose it's power suddenly!",
                "g": 1240000,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "name": "Blaster",
                "projectile": "bigmagic",
                "range": 86,
                "skin": "blaster",
                "tier": 3,
                "type": "weapon",
                "upgrade": {
                    "attack": 8,
                    "blast": 5,
                    "range": 5
                },
                "wtype": "great_staff"
            },
            "gum": {
                "duration": 120,
                "eat": true,
                "explanation": "Nice flavour",
                "g": 100,
                "hp": 40,
                "name": "Gum",
                "reflection": 0.2,
                "s": 9999,
                "skin": "gum",
                "skin_a": "gum",
                "type": "elixir"
            },
            "hammer": {
                "attack": 32,
                "cx": {
                    "accent": "#7A44A2"
                },
                "damage_type": "physical",
                "g": 960000,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "name": "Hammer",
                "range": 7,
                "skin": "hammer",
                "tier": 3,
                "type": "weapon",
                "upgrade": {
                    "attack": 6.2,
                    "range": 1
                },
                "wtype": "mace"
            },
            "handofmidas": {
                "a": true,
                "armor": 32,
                "explanation": "You can feel the thirst for gold move through your veins.",
                "g": 800000,
                "gold": 10,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "name": "Hand of Midas",
                "resistance": 16,
                "skin": "goldglove",
                "speed": -20,
                "tier": 3.5,
                "type": "gloves",
                "upgrade": {
                    "armor": 6.5,
                    "gold": 1,
                    "resistance": 6.5
                }
            },
            "harbringer": {
                "a": true,
                "attack": 42.5,
                "damage_type": "magical",
                "explanation": "Pure, unfiltered power!",
                "g": 289000,
                "grades": [
                    0,
                    5,
                    10,
                    12
                ],
                "name": "Harbringer",
                "projectile": "magic_divine",
                "range": 60.5,
                "rpiercing": 10,
                "skin": "harbringer",
                "skin_r": "harbringer_r",
                "tier": 2.75,
                "trex": "This staff is a relic of a past age long forgotten. Thought to be forged by the God of Lighting. Those who have seen this staff claim it radiates powerful energy. Though this staff is only wielded by few, it is feared by all.",
                "type": "weapon",
                "upgrade": {
                    "attack": 5.875,
                    "range": 3.875,
                    "rpiercing": 5
                },
                "wtype": "staff"
            },
            "harmor": {
                "a": 2,
                "armor": 42,
                "extra_stat": 2,
                "g": 480000,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "name": "Heavy Armor",
                "resistance": 28,
                "scroll": true,
                "set": "wt3",
                "skin": "harmor",
                "stat": 3,
                "tier": 3,
                "type": "chest",
                "upgrade": {
                    "armor": 5.5,
                    "resistance": 5.5,
                    "stat": 1
                }
            },
            "harpybow": {
                "a": true,
                "attack": 32,
                "cx": {
                    "accent": "#DE6F22"
                },
                "damage_type": "physical",
                "evasion": 5,
                "explanation": "A bow decorated with exclusive Harpy feathers!",
                "g": 780000,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "name": "Harpy Bow",
                "projectile": "arrow",
                "range": 75,
                "skin": "t3bow",
                "speed": 2,
                "tier": 3,
                "type": "weapon",
                "upgrade": {
                    "attack": 5.6,
                    "range": 9
                },
                "wtype": "bow"
            },
            "hboots": {
                "a": 2,
                "armor": 14,
                "extra_stat": 2,
                "g": 1240000,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "name": "Heavy Boots",
                "resistance": 6,
                "scroll": true,
                "set": "wt3",
                "skin": "hboots",
                "speed": 7,
                "stat": 3,
                "tier": 3,
                "type": "shoes",
                "upgrade": {
                    "armor": 5.5,
                    "resistance": 2.75,
                    "speed": 1.125,
                    "stat": 1
                }
            },
            "hbow": {
                "apiercing": 40,
                "attack": 23,
                "cx": {
                    "accent": "#8B7FD6"
                },
                "damage_type": "physical",
                "g": 16000,
                "grades": [
                    5,
                    8,
                    10,
                    12
                ],
                "name": "Hunting Bow",
                "projectile": "arrow",
                "range": 80,
                "skin": "hbow",
                "tier": 1.5,
                "type": "weapon",
                "upgrade": {
                    "apiercing": 5,
                    "attack": 4.4,
                    "range": 8
                },
                "wtype": "bow"
            },
            "hdagger": {
                "a": true,
                "attack": 22,
                "class": [
                    "rogue"
                ],
                "cx": {
                    "accent": "#847ADA",
                    "extension": true,
                    "scale": 0.5
                },
                "damage_type": "physical",
                "firesistance": 15,
                "g": 2400000,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "name": "Dagger of Hallowing",
                "range": 11,
                "skin": "hdagger",
                "tier": 3,
                "type": "weapon",
                "upgrade": {
                    "attack": 5,
                    "range": 2
                },
                "wtype": "dagger"
            },
            "heartwood": {
                "a": true,
                "ability": "tangle",
                "attack": 27.5,
                "cx": {
                    "accent": "#155E0C"
                },
                "damage_type": "physical",
                "dex": 20,
                "explanation": "One with nature",
                "g": 18700000,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "name": "Heartwood",
                "range": 12.5,
                "skin": "heartwood",
                "speed": 4,
                "tier": 3.5,
                "type": "weapon",
                "upgrade": {
                    "attack": 6.5,
                    "dex": 4,
                    "range": 1.5
                },
                "wtype": "sword"
            },
            "helmet": {
                "armor": 5,
                "g": 3200,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "name": "Helmet",
                "resistance": 6,
                "scroll": true,
                "skin": "helmet",
                "stat": 1,
                "tier": 1,
                "type": "helmet",
                "upgrade": {
                    "armor": 0.5,
                    "resistance": 0.5,
                    "stat": 1
                }
            },
            "helmet1": {
                "a": 2,
                "armor": 14,
                "extra_stat": 1,
                "g": 32000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Rugged Helmet",
                "protection": true,
                "resistance": 16,
                "scroll": true,
                "set": "rugged",
                "skin": "helmet1",
                "stat": 2,
                "tier": 2,
                "type": "helmet",
                "upgrade": {
                    "armor": 2.5,
                    "resistance": 2.5,
                    "stat": 1
                }
            },
            "hgloves": {
                "a": 2,
                "armor": 28,
                "extra_stat": 2,
                "g": 340000,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "name": "Heavy Gloves",
                "resistance": 14,
                "scroll": true,
                "set": "wt3",
                "skin": "hgloves",
                "stat": 3,
                "tier": 3,
                "type": "gloves",
                "upgrade": {
                    "armor": 5.5,
                    "resistance": 5.5,
                    "stat": 1
                }
            },
            "hhelmet": {
                "a": 2,
                "armor": 25,
                "extra_stat": 2,
                "g": 320000,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "name": "Heavy Helmet",
                "protection": true,
                "resistance": 28,
                "scroll": true,
                "set": "wt3",
                "skin": "hhelmet",
                "stat": 3,
                "tier": 3,
                "type": "helmet",
                "upgrade": {
                    "armor": 5.5,
                    "resistance": 5.5,
                    "stat": 1
                }
            },
            "hotchocolate": {
                "armor": 30,
                "duration": 1,
                "explanation": "Fills your heart with warmth.",
                "g": 6000,
                "name": "Hot Chocolate",
                "resistance": 30,
                "s": 9999,
                "skin": "hotchocolate",
                "skin_a": "hotchocolate",
                "type": "elixir",
                "vit": 30
            },
            "hpamulet": {
                "compound": {
                    "hp": 240
                },
                "g": 20000,
                "grades": [
                    3,
                    5,
                    6,
                    7
                ],
                "hp": 200,
                "name": "Amulet of HP",
                "skin": "hpamulet",
                "type": "amulet"
            },
            "hpants": {
                "a": 2,
                "armor": 35,
                "extra_stat": 2,
                "g": 780000,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "name": "Heavy Underarmor",
                "resistance": 21,
                "scroll": true,
                "set": "wt3",
                "skin": "hpants",
                "stat": 3,
                "tier": 3,
                "type": "pants",
                "upgrade": {
                    "armor": 5.5,
                    "resistance": 5.5,
                    "stat": 1
                }
            },
            "hpbelt": {
                "compound": {
                    "hp": 240
                },
                "g": 20000,
                "grades": [
                    3,
                    5,
                    6,
                    7
                ],
                "hp": 160,
                "name": "Belt of HP",
                "skin": "hpbelt",
                "type": "belt"
            },
            "hpot0": {
                "cooldown": 2000,
                "g": 20,
                "gives": [
                    [
                        "hp",
                        200
                    ]
                ],
                "name": "HP Potion",
                "s": 9999,
                "skin": "hpot0",
                "type": "pot"
            },
            "hpot1": {
                "cooldown": 2000,
                "g": 100,
                "gives": [
                    [
                        "hp",
                        400
                    ]
                ],
                "name": "HP Potion",
                "s": 9999,
                "skin": "hpot1",
                "type": "pot"
            },
            "hpotx": {
                "cooldown": 2000,
                "g": 20000,
                "gives": [
                    [
                        "hp",
                        10000
                    ]
                ],
                "name": "Super HP Potion",
                "s": 9999,
                "skin": "hpotx",
                "type": "pot"
            },
            "iceskates": {
                "armor": 8,
                "extra_stat": 1,
                "g": 920000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Ice Skates",
                "scroll": true,
                "skin": "iceskates",
                "speed": -10,
                "stat": 2,
                "tier": 2,
                "type": "shoes",
                "upgrade": {
                    "armor": 2.5,
                    "speed": 1,
                    "stat": 1
                },
                "winterland": {
                    "speed": 25,
                    "upgrade": {
                        "speed": 1
                    }
                }
            },
            "ijx": {
                "g": 360000,
                "name": "Irradium",
                "s": 9999,
                "skin": "ijx",
                "type": "material"
            },
            "ink": {
                "g": 5000,
                "name": "Ink",
                "s": 9999,
                "skin": "ink",
                "type": "material"
            },
            "intamulet": {
                "compound": {
                    "int": 3
                },
                "g": 30000,
                "grades": [
                    3,
                    5,
                    6,
                    7
                ],
                "int": 4,
                "name": "Amulet of Intelligence",
                "skin": "intamulet",
                "type": "amulet"
            },
            "intbelt": {
                "compound": {
                    "int": 3
                },
                "g": 50000,
                "grades": [
                    2,
                    5,
                    6,
                    7
                ],
                "int": 4,
                "name": "Belt of Intelligence",
                "skin": "intbelt",
                "type": "belt"
            },
            "intearring": {
                "compound": {
                    "int": 2
                },
                "g": 38000,
                "grades": [
                    2,
                    5,
                    6,
                    7
                ],
                "int": 3,
                "name": "Earring of Intelligence",
                "skin": "intearring",
                "type": "earring"
            },
            "intring": {
                "compound": {
                    "int": 2
                },
                "g": 24000,
                "grades": [
                    3,
                    5,
                    6,
                    7
                ],
                "int": 2,
                "name": "Ring of Intelligence",
                "skin": "intring",
                "type": "ring"
            },
            "intscroll": {
                "explanation": "Adds Intelligence to an armor with a Stat attribute.",
                "g": 8000,
                "multiplier": 1,
                "name": "Intelligence Scroll",
                "s": 9999,
                "skin": "intscroll",
                "stat": "int",
                "type": "pscroll"
            },
            "jacko": {
                "a": true,
                "ability": "scare",
                "compound": {
                    "rpiercing": 15
                },
                "cx": {
                    "scale": 0.5
                },
                "g": 96000,
                "grades": [
                    2,
                    4,
                    6,
                    7
                ],
                "name": "Jack-o Lantern",
                "rpiercing": 20,
                "skin": "jacko",
                "type": "orb"
            },
            "jewellerybox": {
                "a": true,
                "e": 1,
                "explanation": "Can be exchanged for a random acessory.",
                "g": 80000,
                "ignore": true,
                "name": "Jewellery Box",
                "s": 9999,
                "skin": "chest3",
                "type": "box"
            },
            "kitty1": {
                "a": true,
                "explanation": "A vibrant egg, it's inhabitant seems eager to get out.",
                "g": 40000,
                "grade": 0,
                "ignore": true,
                "monster": "kitty1",
                "name": "Egg",
                "skin": "egg1",
                "type": "chrysalis"
            },
            "lantern": {
                "compound": {
                    "evasion": 5,
                    "resistance": 10
                },
                "cx": {
                    "scale": 0.5
                },
                "evasion": 10,
                "explanation": "Forged from a naturally vibrating metal",
                "g": 480000,
                "grades": [
                    0,
                    0,
                    6,
                    7
                ],
                "name": "The Lantern",
                "resistance": 120,
                "skin": "lantern",
                "tier": 3,
                "type": "misc_offhand"
            },
            "lbelt": {
                "armor": 15,
                "compound": {
                    "armor": 5,
                    "speed": 1.1
                },
                "explanation": "A belt that can actually hold your pants in place!",
                "g": 40000,
                "grades": [
                    3,
                    5,
                    6,
                    7
                ],
                "name": "Belt",
                "skin": "lbelt",
                "speed": 1,
                "type": "belt"
            },
            "leather": {
                "e": 40,
                "explanation": "A Leather piece.",
                "g": 3000,
                "name": "Leather",
                "quest": "leather",
                "s": 9999,
                "skin": "leather",
                "type": "quest"
            },
            "ledger": {
                "explanation": "Every decent merchant needs one!",
                "g": 12000,
                "ignore": true,
                "name": "Ledger",
                "skin": "ledger",
                "type": "misc"
            },
            "licence": {
                "explanation": "With this licence, you gain a unique immunity for 7 minutes. No one can bother you for having too many comrades in this realm!",
                "g": 25000000,
                "name": "Licence to Kill",
                "s": 9999,
                "skin": "licence",
                "type": "licence"
            },
            "lifestealscroll": {
                "explanation": "Adds Lifesteal to an armor with a Stat attribute.",
                "g": 8000,
                "multiplier": 0.15,
                "name": "Lifesteal Scroll",
                "s": 9999,
                "skin": "lifestealscroll",
                "stat": "lifesteal",
                "type": "pscroll"
            },
            "lmace": {
                "a": true,
                "attack": 30,
                "class": [
                    "priest"
                ],
                "damage_type": "magical",
                "explanation": "Majestic",
                "g": 890000,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "int": 8,
                "luck": 6,
                "name": "Lunar Mace",
                "range": 15,
                "skin": "lmace",
                "str": 6,
                "tier": 3,
                "type": "weapon",
                "upgrade": {
                    "attack": 7,
                    "int": 2,
                    "range": 6,
                    "str": 1
                },
                "wtype": "pmace"
            },
            "lostearring": {
                "a": true,
                "compound": {},
                "e": 1,
                "edge": -2,
                "explanation": "Looks valuable",
                "g": 360000,
                "grades": [
                    0,
                    2,
                    10,
                    12
                ],
                "name": "Gold Earring",
                "quest": "lostearring",
                "skin": "lostearring",
                "type": "earring"
            },
            "lotusf": {
                "g": 12000,
                "name": "Lotus Flower",
                "s": 9999,
                "skin": "lotusf",
                "type": "material"
            },
            "lspores": {
                "g": 160,
                "name": "Large Spores",
                "s": 9999,
                "skin": "lspores",
                "type": "material"
            },
            "luckbooster": {
                "compound": {
                    "luck": 8
                },
                "days": 30,
                "explanation": "Increases your chances of looting something from a monster.",
                "g": 79840000,
                "gain": "luck",
                "grades": [
                    0,
                    10,
                    6,
                    7
                ],
                "legacy": {
                    "luck": 15
                },
                "luck": 20,
                "name": "Luck Booster",
                "skin": "luckbooster",
                "skin_a": "luckbooster_a",
                "type": "booster"
            },
            "luckscroll": {
                "explanation": "Adds Luck to an armor with a Stat attribute.",
                "g": 8000,
                "multiplier": 1,
                "name": "Luck Scroll",
                "s": 9999,
                "skin": "luckscroll",
                "stat": "luck",
                "type": "pscroll"
            },
            "luckyt": {
                "g": 120000,
                "grades": [
                    0,
                    0,
                    0,
                    12
                ],
                "luck": 7,
                "name": "Lucky T-Shirt",
                "resistance": 20,
                "scroll": true,
                "skin": "luckyt",
                "type": "chest",
                "upgrade": {
                    "luck": 1.75,
                    "resistance": 10,
                    "xp": 1
                },
                "xp": 5
            },
            "mace": {
                "attack": 20,
                "cx": {
                    "accent": "#AF2131"
                },
                "damage_type": "physical",
                "g": 3700,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "name": "Mace",
                "range": 5,
                "skin": "mace",
                "tier": 1,
                "type": "weapon",
                "upgrade": {
                    "attack": 4,
                    "range": 1
                },
                "wtype": "mace"
            },
            "maceofthedead": {
                "a": true,
                "attack": 28.4,
                "cx": {
                    "accent": "#D87F0E"
                },
                "damage_type": "physical",
                "g": 224000,
                "grades": [
                    0,
                    5,
                    10,
                    12
                ],
                "name": "Mace of the Dead",
                "range": 6.4,
                "skin": "maceofthedead",
                "speed": -3,
                "str": 6,
                "tier": 2.4,
                "type": "weapon",
                "upgrade": {
                    "attack": 5.54,
                    "range": 1
                },
                "vit": -8,
                "wtype": "mace"
            },
            "mageshood": {
                "a": true,
                "armor": 14,
                "class": [
                    "mage"
                ],
                "crit": 0.5,
                "extra_stat": 1,
                "g": 640000,
                "grades": [
                    0,
                    8,
                    10,
                    12
                ],
                "ignore": true,
                "name": "Mage's Hood",
                "protection": true,
                "resistance": 16,
                "scroll": true,
                "skin": "mageshood",
                "stat": 2,
                "tier": 2,
                "type": "helmet",
                "upgrade": {
                    "armor": 2.5,
                    "resistance": 2.5,
                    "rpiercing": 10,
                    "stat": 1
                }
            },
            "manastealscroll": {
                "explanation": "Adds Manasteal to an armor with a Stat attribute.",
                "g": 8000,
                "multiplier": 0.04,
                "name": "Manasteal Scroll",
                "s": 9999,
                "skin": "manastealscroll",
                "stat": "manasteal",
                "type": "pscroll"
            },
            "mbelt": {
                "a": true,
                "armor": 15,
                "compound": {
                    "armor": 10,
                    "speed": 1.1
                },
                "dex": 8,
                "g": 640000,
                "grades": [
                    0,
                    1,
                    6,
                    7
                ],
                "int": 8,
                "name": "Well-Crafted Belt",
                "skin": "mbelt",
                "speed": 1,
                "type": "belt"
            },
            "mbones": {
                "explanation": "Scattered, ugly bones.",
                "g": 16,
                "name": "Mummy Bones",
                "s": 9999,
                "skin": "mbones",
                "type": "material"
            },
            "mcape": {
                "a": 2,
                "armor": 24,
                "extra_stat": 1,
                "g": 480000,
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "hp": 160,
                "lifesteal": 1,
                "name": "Dracul's Attire",
                "resistance": 16,
                "scroll": true,
                "set": "vampires",
                "skin": "mcape",
                "stat": 2,
                "tier": 2,
                "type": "chest",
                "upgrade": {
                    "armor": 2.5,
                    "hp": 30,
                    "lifesteal": 0.2,
                    "resistance": 2.5,
                    "stat": 1
                }
            },
            "mcarmor": {
                "armor": 33,
                "class": [
                    "merchant"
                ],
                "explanation": "Your comrades served our realm well",
                "extra_stat": 1,
                "g": 96000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Armor of the Hunter Merchant",
                "resistance": 22,
                "scroll": true,
                "set": "mmerchant",
                "skin": "mcarmor",
                "stat": 2,
                "tier": 2.25,
                "type": "chest",
                "upgrade": {
                    "armor": 4,
                    "resistance": 4,
                    "stat": 1
                }
            },
            "mcboots": {
                "armor": 12,
                "class": [
                    "merchant"
                ],
                "explanation": "Your comrades served our realm well",
                "extra_stat": 1,
                "for": 8,
                "g": 240000,
                "grades": [
                    0,
                    5,
                    10,
                    12
                ],
                "name": "Boots of the Hunter Merchant",
                "resistance": 6,
                "scroll": true,
                "set": "mmerchant",
                "skin": "mcboots",
                "speed": 7,
                "stat": 2,
                "tier": 2.75,
                "type": "shoes",
                "upgrade": {
                    "armor": 4,
                    "resistance": 2,
                    "speed": 1.0625,
                    "stat": 1
                }
            },
            "mcgloves": {
                "armor": 22,
                "class": [
                    "merchant"
                ],
                "explanation": "Your comrades served our realm well",
                "extra_stat": 1,
                "g": 68000,
                "gold": 5,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Gloves of the Hunter Merchant",
                "resistance": 11,
                "scroll": true,
                "set": "mmerchant",
                "skin": "mcgloves",
                "stat": 2,
                "tier": 2.25,
                "type": "gloves",
                "upgrade": {
                    "armor": 4,
                    "resistance": 4,
                    "stat": 1
                }
            },
            "mchat": {
                "armor": 20,
                "class": [
                    "merchant"
                ],
                "explanation": "Your comrades served our realm well",
                "extra_stat": 1,
                "g": 64000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Hat of the Hunter Merchant",
                "protection": true,
                "resistance": 22,
                "scroll": true,
                "set": "mmerchant",
                "skin": "mchat",
                "stat": 2,
                "tier": 2.25,
                "type": "helmet",
                "upgrade": {
                    "armor": 4,
                    "resistance": 4,
                    "stat": 1
                }
            },
            "mcpants": {
                "armor": 28,
                "class": [
                    "merchant"
                ],
                "explanation": "Your comrades served our realm well",
                "extra_stat": 1,
                "g": 128000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Pants of the Hunter Merchant",
                "resistance": 17,
                "scroll": true,
                "set": "mmerchant",
                "skin": "mcpants",
                "stat": 2,
                "tier": 2.25,
                "type": "pants",
                "upgrade": {
                    "armor": 4,
                    "resistance": 4,
                    "stat": 1
                }
            },
            "mearring": {
                "a": true,
                "compound": {
                    "luck": 1
                },
                "g": 12000000,
                "grades": [
                    0,
                    0,
                    6,
                    7
                ],
                "luck": 8,
                "name": "Mistletoe Earring",
                "set": "holidays",
                "skin": "mearring",
                "type": "earring"
            },
            "merry": {
                "ability": "secondchance",
                "attack": 23,
                "attr0": 10,
                "cx": {
                    "accent": "#289E4D"
                },
                "damage_type": "physical",
                "g": 124000,
                "grades": [
                    0,
                    8,
                    10,
                    12
                ],
                "name": "Bow of The Merry Ranger",
                "projectile": "arrow",
                "range": 60,
                "set": "holidays",
                "skin": "merry",
                "tier": 1.5,
                "type": "weapon",
                "upgrade": {
                    "attack": 4.4,
                    "attr0": 2,
                    "range": 8
                },
                "wtype": "bow"
            },
            "mistletoe": {
                "a": true,
                "e": 1,
                "explanation": "Maybe someone could give you a kiss in exchange...",
                "g": 20000,
                "name": "Mistletoe",
                "s": 9999,
                "skin": "mistletoe",
                "type": "gem"
            },
            "mittens": {
                "a": true,
                "apiercing": 20,
                "armor": 11,
                "explanation": "Cute but deadly.",
                "g": 34000,
                "grades": [
                    4,
                    8,
                    10,
                    12
                ],
                "name": "Mittens",
                "resistance": 6,
                "rpiercing": 20,
                "scroll": true,
                "set": "holidays",
                "skin": "mittens",
                "stat": 1,
                "tier": 1.5,
                "type": "gloves",
                "upgrade": {
                    "apiercing": 2,
                    "armor": 1.5,
                    "resistance": 1.5,
                    "rpiercing": 2,
                    "stat": 1
                }
            },
            "mmarmor": {
                "armor": 33,
                "class": [
                    "mage"
                ],
                "explanation": "You served our realm well",
                "extra_stat": 1,
                "g": 96000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Armor of the Hunter Mage",
                "resistance": 22,
                "scroll": true,
                "set": "mmage",
                "skin": "mmarmor",
                "stat": 2,
                "tier": 2.125,
                "type": "chest",
                "upgrade": {
                    "armor": 4,
                    "resistance": 4,
                    "stat": 1
                }
            },
            "mmgloves": {
                "armor": 22,
                "class": [
                    "mage"
                ],
                "explanation": "You served our realm well",
                "extra_stat": 1,
                "g": 68000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Gloves of the Hunter Mage",
                "resistance": 11,
                "scroll": true,
                "set": "mmage",
                "skin": "mmgloves",
                "stat": 2,
                "tier": 2.125,
                "type": "gloves",
                "upgrade": {
                    "armor": 4,
                    "resistance": 4,
                    "stat": 1
                }
            },
            "mmhat": {
                "armor": 19,
                "class": [
                    "mage"
                ],
                "explanation": "You served our realm well",
                "extra_stat": 1,
                "g": 64000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Hat of the Hunter Mage",
                "protection": true,
                "resistance": 22,
                "rpiercing": 40,
                "scroll": true,
                "set": "mmage",
                "skin": "mmhat",
                "stat": 2,
                "tier": 2.125,
                "type": "helmet",
                "upgrade": {
                    "armor": 4,
                    "resistance": 4,
                    "stat": 1
                }
            },
            "mmpants": {
                "armor": 28,
                "class": [
                    "mage"
                ],
                "explanation": "You served our realm well",
                "extra_stat": 1,
                "g": 128000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Pants of the Hunter Mage",
                "resistance": 17,
                "scroll": true,
                "set": "mmage",
                "skin": "mmpants",
                "stat": 2,
                "tier": 2.125,
                "type": "pants",
                "upgrade": {
                    "armor": 4,
                    "resistance": 4,
                    "stat": 1
                }
            },
            "mmshoes": {
                "armor": 11,
                "class": [
                    "mage"
                ],
                "explanation": "You served our realm well",
                "extra_stat": 1,
                "g": 240000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Shoes of the Hunter Mage",
                "resistance": 5,
                "scroll": true,
                "set": "mmage",
                "skin": "mmshoes",
                "speed": 6,
                "stat": 2,
                "tier": 2.125,
                "type": "shoes",
                "upgrade": {
                    "armor": 4,
                    "resistance": 2,
                    "speed": 0.90625,
                    "stat": 1
                }
            },
            "molesteeth": {
                "a": true,
                "apiercing": 15,
                "compound": {
                    "apiercing": 15
                },
                "g": 500000,
                "grades": [
                    0,
                    1,
                    6,
                    7
                ],
                "name": "Mole's Teeth",
                "skin": "molesteeth",
                "type": "earring"
            },
            "monsterbox": {
                "explanation": "A magical pet world inside a box.",
                "g": 120000,
                "grade": 0,
                "ignore": true,
                "name": "Monster Box",
                "skin": "armorbox",
                "type": "container"
            },
            "monstertoken": {
                "explanation": "A token representing the hunt. You made Adventure Land a safer place for all. Be proud!",
                "g": 12000,
                "name": "Monster Token",
                "npc": "monsterhunter",
                "s": 9999,
                "skin": "monstertoken",
                "type": "token"
            },
            "mparmor": {
                "armor": 33,
                "class": [
                    "priest"
                ],
                "explanation": "You served our realm well",
                "extra_stat": 1,
                "g": 96000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Armor of the Hunter Priest",
                "resistance": 22,
                "scroll": true,
                "set": "mpriest",
                "skin": "mparmor",
                "stat": 2,
                "tier": 2.125,
                "type": "chest",
                "upgrade": {
                    "armor": 4,
                    "resistance": 4,
                    "stat": 1
                }
            },
            "mpcostscroll": {
                "explanation": "Adds MP Cost Reduction to an armor with a Stat attribute.",
                "g": 8000,
                "multiplier": 0.6,
                "name": "MP Cost Reduction Scroll",
                "s": 9999,
                "skin": "mpcostscroll",
                "stat": "mp_cost",
                "type": "pscroll"
            },
            "mpgloves": {
                "armor": 22,
                "class": [
                    "priest"
                ],
                "explanation": "You served our realm well",
                "extra_stat": 1,
                "g": 68000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Gloves of the Hunter Priest",
                "output": 5,
                "resistance": 11,
                "scroll": true,
                "set": "mpriest",
                "skin": "mpgloves",
                "stat": 2,
                "tier": 2.125,
                "type": "gloves",
                "upgrade": {
                    "armor": 4,
                    "resistance": 4,
                    "stat": 1
                }
            },
            "mphat": {
                "armor": 19,
                "class": [
                    "priest"
                ],
                "explanation": "You served our realm well",
                "extra_stat": 1,
                "g": 64000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Hat of the Hunter Priest",
                "protection": true,
                "resistance": 22,
                "scroll": true,
                "set": "mpriest",
                "skin": "mphat",
                "stat": 2,
                "tier": 2.125,
                "type": "helmet",
                "upgrade": {
                    "armor": 4,
                    "resistance": 4,
                    "stat": 1
                }
            },
            "mpot0": {
                "cooldown": 2000,
                "g": 20,
                "gives": [
                    [
                        "mp",
                        300
                    ]
                ],
                "name": "MP Potion",
                "s": 9999,
                "skin": "mpot0",
                "type": "pot"
            },
            "mpot1": {
                "cooldown": 2000,
                "g": 100,
                "gives": [
                    [
                        "mp",
                        500
                    ]
                ],
                "name": "MP Potion",
                "s": 9999,
                "skin": "mpot1",
                "type": "pot"
            },
            "mpotx": {
                "cooldown": 2000,
                "g": 20000,
                "gives": [
                    [
                        "mp",
                        10000
                    ]
                ],
                "name": "Super MP Potion",
                "s": 9999,
                "skin": "mpotx",
                "type": "pot"
            },
            "mppants": {
                "armor": 28,
                "class": [
                    "priest"
                ],
                "explanation": "You served our realm well",
                "extra_stat": 1,
                "g": 128000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Pants of the Hunter Priest",
                "resistance": 17,
                "scroll": true,
                "set": "mpriest",
                "skin": "mppants",
                "stat": 2,
                "tier": 2.125,
                "type": "pants",
                "upgrade": {
                    "armor": 4,
                    "resistance": 4,
                    "stat": 1
                }
            },
            "mpshoes": {
                "armor": 11,
                "class": [
                    "priest"
                ],
                "explanation": "You served our realm well",
                "extra_stat": 1,
                "g": 240000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Shoes of the Hunter Priest",
                "resistance": 5,
                "scroll": true,
                "set": "mpriest",
                "skin": "mpshoes",
                "speed": 6,
                "stat": 2,
                "tier": 2.125,
                "type": "shoes",
                "upgrade": {
                    "armor": 4,
                    "resistance": 2,
                    "speed": 0.90625,
                    "stat": 1
                }
            },
            "mpxamulet": {
                "a": true,
                "compound": {
                    "mp_cost": -2,
                    "mp_reduction": 2
                },
                "g": 56000000,
                "grades": [
                    0,
                    0,
                    6,
                    7
                ],
                "mp_cost": -5,
                "mp_reduction": 12,
                "name": "Amulet of MP",
                "set": "mpx",
                "skin": "mpxamulet",
                "type": "amulet"
            },
            "mpxbelt": {
                "compound": {
                    "mp_cost": -1,
                    "mp_reduction": 5
                },
                "g": 1200000,
                "grades": [
                    0,
                    0,
                    6,
                    7
                ],
                "mp_cost": -5,
                "mp_reduction": 10,
                "name": "Belt of MP Reduction",
                "set": "mpx",
                "skin": "mpxbelt",
                "type": "belt"
            },
            "mpxgloves": {
                "ability": "restore_mp",
                "armor": 16,
                "attr0": 2,
                "explanation": "The powers of this glove grow fivefold against humanoids!",
                "extra_stat": 1,
                "g": 34000000,
                "grades": [
                    0,
                    0,
                    9,
                    12
                ],
                "name": "Mana Gloves",
                "resistance": 8,
                "scroll": true,
                "set": "mpx",
                "skin": "mpxgloves",
                "stat": 2,
                "tier": 2,
                "type": "gloves",
                "upgrade": {
                    "armor": 2.5,
                    "attr0": 0.5,
                    "resistance": 2.5,
                    "stat": 1
                }
            },
            "mrarmor": {
                "armor": 33,
                "class": [
                    "rogue"
                ],
                "explanation": "You served our realm well",
                "extra_stat": 1,
                "g": 96000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Armor of the Hunter Rogue",
                "resistance": 22,
                "scroll": true,
                "set": "mrogue",
                "skin": "mrarmor",
                "stat": 2,
                "tier": 2.25,
                "type": "chest",
                "upgrade": {
                    "armor": 4,
                    "resistance": 4,
                    "stat": 1
                }
            },
            "mrboots": {
                "armor": 11,
                "class": [
                    "rogue"
                ],
                "explanation": "You served our realm well",
                "extra_stat": 1,
                "g": 240000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Boots of the Hunter Rogue",
                "resistance": 5,
                "scroll": true,
                "set": "mrogue",
                "skin": "mrboots",
                "speed": 6,
                "stat": 2,
                "tier": 2.25,
                "type": "shoes",
                "upgrade": {
                    "armor": 4,
                    "resistance": 2,
                    "speed": 0.9375,
                    "stat": 1
                }
            },
            "mrgloves": {
                "armor": 22,
                "class": [
                    "rogue"
                ],
                "explanation": "You served our realm well",
                "extra_stat": 1,
                "g": 68000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Gloves of the Hunter Rogue",
                "resistance": 11,
                "scroll": true,
                "set": "mrogue",
                "skin": "mrgloves",
                "stat": 2,
                "tier": 2.25,
                "type": "gloves",
                "upgrade": {
                    "armor": 4,
                    "resistance": 4,
                    "stat": 1
                }
            },
            "mrhood": {
                "armor": 20,
                "class": [
                    "rogue"
                ],
                "evasion": 5,
                "explanation": "You served our realm well",
                "extra_stat": 1,
                "g": 64000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Hood of the Hunter Rogue",
                "protection": true,
                "resistance": 22,
                "scroll": true,
                "set": "mrogue",
                "skin": "mrhood",
                "stat": 2,
                "tier": 2.25,
                "type": "helmet",
                "upgrade": {
                    "armor": 4,
                    "resistance": 4,
                    "stat": 1
                }
            },
            "mrnarmor": {
                "armor": 33,
                "class": [
                    "ranger"
                ],
                "explanation": "You served our realm well",
                "extra_stat": 1,
                "frequency": 1,
                "g": 96000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Armor of the Hunter Ranger",
                "resistance": 22,
                "scroll": true,
                "set": "mranger",
                "skin": "mrnarmor",
                "stat": 2,
                "tier": 2.25,
                "type": "chest",
                "upgrade": {
                    "armor": 4,
                    "resistance": 4,
                    "stat": 1
                }
            },
            "mrnboots": {
                "armor": 11,
                "class": [
                    "ranger"
                ],
                "explanation": "You served our realm well",
                "extra_stat": 1,
                "g": 240000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Boots of the Hunter Ranger",
                "resistance": 5,
                "scroll": true,
                "set": "mranger",
                "skin": "mrnboots",
                "speed": 6,
                "stat": 2,
                "tier": 2.25,
                "type": "shoes",
                "upgrade": {
                    "armor": 4,
                    "resistance": 2,
                    "speed": 0.9375,
                    "stat": 1
                }
            },
            "mrngloves": {
                "armor": 22,
                "class": [
                    "ranger"
                ],
                "explanation": "You served our realm well",
                "extra_stat": 1,
                "g": 68000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Gloves of the Hunter Ranger",
                "resistance": 11,
                "scroll": true,
                "set": "mranger",
                "skin": "mrngloves",
                "stat": 2,
                "tier": 2.25,
                "type": "gloves",
                "upgrade": {
                    "armor": 4,
                    "resistance": 4,
                    "stat": 1
                }
            },
            "mrnhat": {
                "armor": 20,
                "class": [
                    "ranger"
                ],
                "explanation": "You served our realm well",
                "extra_stat": 1,
                "g": 64000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Hat of the Hunter Ranger",
                "protection": true,
                "resistance": 22,
                "scroll": true,
                "set": "mranger",
                "skin": "mrnhat",
                "stat": 2,
                "tier": 2.25,
                "type": "helmet",
                "upgrade": {
                    "armor": 4,
                    "resistance": 4,
                    "stat": 1
                }
            },
            "mrnpants": {
                "armor": 28,
                "class": [
                    "ranger"
                ],
                "explanation": "You served our realm well",
                "extra_stat": 1,
                "g": 128000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Pants of the Hunter Ranger",
                "resistance": 17,
                "scroll": true,
                "set": "mranger",
                "skin": "mrnpants",
                "stat": 2,
                "tier": 2.25,
                "type": "pants",
                "upgrade": {
                    "armor": 4,
                    "resistance": 4,
                    "stat": 1
                }
            },
            "mrpants": {
                "armor": 28,
                "class": [
                    "rogue"
                ],
                "explanation": "You served our realm well",
                "extra_stat": 1,
                "g": 128000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Pants of the Hunter Rogue",
                "resistance": 17,
                "scroll": true,
                "set": "mrogue",
                "skin": "mrpants",
                "stat": 2,
                "tier": 2.25,
                "type": "pants",
                "upgrade": {
                    "armor": 4,
                    "resistance": 4,
                    "stat": 1
                }
            },
            "mshield": {
                "armor": 20,
                "cx": {
                    "accent": "#E90010"
                },
                "g": 1200000,
                "grades": [
                    0,
                    0,
                    10,
                    12
                ],
                "luck": 8,
                "name": "Shield M",
                "skin": "mshield",
                "stat": 5,
                "tier": 3,
                "type": "shield",
                "upgrade": {
                    "armor": 5,
                    "luck": 1,
                    "stat": 1.25
                }
            },
            "mushroomstaff": {
                "attack": 27.5,
                "class": [
                    "mage"
                ],
                "cx": {
                    "accent": "#D34C57"
                },
                "damage_type": "magical",
                "g": 16400,
                "grades": [
                    5,
                    8,
                    10,
                    12
                ],
                "name": "Mushroom Staff",
                "range": 51.5,
                "rpiercing": 40,
                "skin": "mushroomstaff",
                "tier": 1.25,
                "type": "weapon",
                "upgrade": {
                    "attack": 5.125,
                    "range": 3.125
                },
                "wtype": "staff"
            },
            "mwarmor": {
                "armor": 35,
                "class": [
                    "warrior"
                ],
                "explanation": "You served our realm well",
                "extra_stat": 1,
                "g": 96000,
                "grades": [
                    0,
                    5,
                    10,
                    12
                ],
                "name": "Armor of the Hunter Warrior",
                "resistance": 23,
                "scroll": true,
                "set": "mwarrior",
                "skin": "mwarmor",
                "stat": 2,
                "tier": 2.625,
                "type": "chest",
                "upgrade": {
                    "armor": 4,
                    "resistance": 4,
                    "stat": 1
                }
            },
            "mwboots": {
                "armor": 12,
                "class": [
                    "warrior"
                ],
                "explanation": "You served our realm well",
                "extra_stat": 1,
                "g": 240000,
                "grades": [
                    0,
                    5,
                    10,
                    12
                ],
                "name": "Boots of the Hunter Warrior",
                "resistance": 6,
                "scroll": true,
                "set": "mwarrior",
                "skin": "mwboots",
                "speed": 7,
                "stat": 2,
                "tier": 2.625,
                "type": "shoes",
                "upgrade": {
                    "armor": 4,
                    "resistance": 2,
                    "speed": 1.03125,
                    "stat": 1
                }
            },
            "mwgloves": {
                "armor": 23,
                "class": [
                    "warrior"
                ],
                "crit": 1,
                "explanation": "You served our realm well",
                "extra_stat": 1,
                "g": 68000,
                "grades": [
                    0,
                    5,
                    10,
                    12
                ],
                "name": "Gloves of the Hunter Warrior",
                "resistance": 12,
                "scroll": true,
                "set": "mwarrior",
                "skin": "mwgloves",
                "stat": 2,
                "tier": 2.625,
                "type": "gloves",
                "upgrade": {
                    "armor": 4,
                    "resistance": 4,
                    "stat": 1
                }
            },
            "mwhelmet": {
                "armor": 21,
                "class": [
                    "warrior"
                ],
                "explanation": "You served our realm well",
                "extra_stat": 1,
                "g": 64000,
                "grades": [
                    0,
                    5,
                    10,
                    12
                ],
                "name": "Helmet of the Hunter Warrior",
                "protection": true,
                "resistance": 23,
                "scroll": true,
                "set": "mwarrior",
                "skin": "mwhelmet",
                "stat": 2,
                "tier": 2.625,
                "type": "helmet",
                "upgrade": {
                    "armor": 4,
                    "resistance": 4,
                    "stat": 1
                }
            },
            "mwpants": {
                "armor": 29,
                "class": [
                    "warrior"
                ],
                "explanation": "You served our realm well",
                "extra_stat": 1,
                "g": 128000,
                "grades": [
                    0,
                    5,
                    10,
                    12
                ],
                "name": "Underarmor of the Hunter Warrior",
                "resistance": 18,
                "scroll": true,
                "set": "mwarrior",
                "skin": "mwpants",
                "stat": 2,
                "tier": 2.625,
                "type": "pants",
                "upgrade": {
                    "armor": 4,
                    "resistance": 4,
                    "stat": 1
                }
            },
            "mysterybox": {
                "e": 1,
                "explanation": "It looks super cool, but you have no idea what to do with it! Exchange now or wait? No idea.",
                "g": 12000000,
                "name": "Mystery Box",
                "s": 9999,
                "skin": "mysterybox",
                "type": "misc"
            },
            "networkcard": {
                "explanation": "A critical component that is able to interact with the fabric of our universe. Possibly quantum technology.",
                "g": 24000000,
                "name": "Network Card",
                "s": 9999,
                "skin": "networkcard",
                "type": "material"
            },
            "nheart": {
                "explanation": "An ancient source of life. A small piece of a magnificent being that spanned life across our realm eons ago.",
                "g": 12000000,
                "name": "Heartwood Core",
                "s": 9999,
                "skin": "nheart",
                "type": "material"
            },
            "northstar": {
                "a": true,
                "compound": {
                    "xp": 5
                },
                "g": 64000000,
                "grades": [
                    0,
                    0,
                    6,
                    7
                ],
                "name": "The North Star",
                "skin": "northstar",
                "type": "amulet",
                "xp": 10
            },
            "offering": {
                "a": true,
                "explanation": "The essence contained within can be transferred to items during upgrades and compounds. Significantly increases the chance to succeed.",
                "g": 27420000,
                "grade": 2,
                "name": "Primordial Essence",
                "s": 100,
                "skin": "shade_offering",
                "type": "offering"
            },
            "offeringp": {
                "a": true,
                "explanation": "A tiny cute essence that can be transferred to items during upgrades and compounds. Significantly increases the chance to succeed.",
                "g": 480000,
                "grade": 1,
                "name": "Primling",
                "s": 1000,
                "skin": "offeringp",
                "type": "offering"
            },
            "offeringx": {
                "a": true,
                "explanation": "The most powerful essence that can be transferred to items during upgrades and compounds. Significantly increases the chance to succeed.",
                "g": 242064000,
                "grade": 3,
                "name": "Primordial X",
                "s": 10,
                "skin": "offeringx",
                "type": "offering"
            },
            "ololipop": {
                "ability": "sugarrush",
                "attack": 14,
                "cx": {
                    "accent": "#DB763B"
                },
                "damage_type": "physical",
                "explosion": 20,
                "g": 16000,
                "grades": [
                    8,
                    9,
                    10,
                    12
                ],
                "name": "Lolipop Mace",
                "range": 4,
                "skin": "ololipop",
                "str": 24,
                "tier": 0,
                "type": "weapon",
                "upgrade": {
                    "attack": 2.9,
                    "explosion": 2,
                    "range": 1
                },
                "wtype": "mace"
            },
            "oozingterror": {
                "a": true,
                "ability": "posion",
                "attack": 42.5,
                "attr0": 0.1,
                "cx": {
                    "accent": "#745DD6"
                },
                "damage_type": "magical",
                "explanation": "It drains the life energy of the user",
                "g": 289000,
                "grades": [
                    0,
                    5,
                    10,
                    12
                ],
                "int": 20,
                "name": "Oozing Terror",
                "nopo": "Mutates the brain to maximize its potential, sapping the user's life in the process.",
                "projectile": "magic_purple",
                "projectile_test": "acid",
                "range": 60.5,
                "reflection": 1,
                "skin": "oozingterror",
                "tier": 2.75,
                "type": "weapon",
                "upgrade": {
                    "attack": 5.875,
                    "attr0": 0.02,
                    "int": 1,
                    "range": 3.875,
                    "reflection": 0.25
                },
                "vit": -30,
                "wtype": "staff"
            },
            "orbg": {
                "compound": {
                    "dex": 1,
                    "int": 1,
                    "str": 1
                },
                "dex": 2,
                "g": 60000,
                "grades": [
                    4,
                    6,
                    6,
                    7
                ],
                "int": 2,
                "name": "Orb of Beginnings",
                "skin": "orbg",
                "str": 2,
                "type": "orb"
            },
            "orbofdex": {
                "compound": {
                    "dex": 3
                },
                "dex": 4,
                "edge": -2,
                "g": 240000,
                "grades": [
                    1,
                    4,
                    6,
                    7
                ],
                "name": "Orb of Dexterity",
                "skin": "orbofdex",
                "type": "orb"
            },
            "orbofint": {
                "compound": {
                    "int": 3
                },
                "edge": -2,
                "g": 240000,
                "grades": [
                    1,
                    4,
                    6,
                    7
                ],
                "int": 4,
                "name": "Orb of Intelligence",
                "skin": "orbofint",
                "type": "orb"
            },
            "orbofsc": {
                "a": true,
                "ability": "secondchance",
                "attr0": 1,
                "compound": {
                    "attr0": 1,
                    "dex": 1,
                    "int": 2,
                    "mp": 100,
                    "str": 1,
                    "vit": 1
                },
                "dex": 2,
                "g": 120000,
                "grades": [
                    0,
                    0,
                    6,
                    7
                ],
                "int": 2,
                "mp": 200,
                "name": "Orb of Second Chances",
                "set": "holidays",
                "skin": "orbofsc",
                "str": 2,
                "type": "orb",
                "vit": 2
            },
            "orbofstr": {
                "compound": {
                    "str": 3
                },
                "edge": -2,
                "g": 240000,
                "grades": [
                    1,
                    4,
                    6,
                    7
                ],
                "name": "Orb of Strength",
                "skin": "orbofstr",
                "str": 4,
                "type": "orb"
            },
            "orbofvit": {
                "compound": {
                    "vit": 4
                },
                "edge": -2,
                "g": 240000,
                "grades": [
                    1,
                    4,
                    6,
                    7
                ],
                "name": "Orb of Vitality",
                "skin": "orbofvit",
                "type": "orb",
                "vit": 10
            },
            "ornament": {
                "e": 20,
                "explanation": "A beautiful ornament. A bunch of these could decorate the trees of Winterland.",
                "g": 3000,
                "name": "Xmas Ornament",
                "s": 9999,
                "skin": "ornament",
                "type": "quest"
            },
            "ornamentstaff": {
                "a": true,
                "attack": 35,
                "awesomeness": 99,
                "cx": {
                    "accent": "#0B5818"
                },
                "damage_type": "magical",
                "g": 120000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "mp_cost": -40,
                "name": "Ornament Staff",
                "range": 56,
                "set": "holidays",
                "skin": "ornamentstaff",
                "tier": 2,
                "type": "weapon",
                "upgrade": {
                    "attack": 5.5,
                    "awesomeness": 0.1,
                    "range": 3.5
                },
                "wtype": "staff"
            },
            "outputscroll": {
                "explanation": "Adds Output Increase to an armor with a Stat attribute.",
                "g": 8000,
                "multiplier": 0.175,
                "name": "Output Increase Scroll",
                "s": 9999,
                "skin": "outputscroll",
                "stat": "output",
                "type": "pscroll"
            },
            "oxhelmet": {
                "a": 2,
                "armor": 55,
                "dex": 10,
                "firesistance": 3,
                "g": 8900000,
                "grades": [
                    0,
                    0,
                    10,
                    12
                ],
                "int": 10,
                "name": "OX Helmet",
                "output": 1,
                "resistance": 12,
                "skin": "oxhelmet",
                "str": 10,
                "type": "helmet",
                "vit": 2
            },
            "pants": {
                "armor": 7,
                "g": 7800,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "name": "Pants",
                "resistance": 4,
                "scroll": true,
                "skin": "pants",
                "stat": 1,
                "tier": 1,
                "type": "pants",
                "upgrade": {
                    "armor": 0.5,
                    "resistance": 0.5,
                    "stat": 1
                }
            },
            "pants1": {
                "a": 2,
                "armor": 20,
                "extra_stat": 1,
                "g": 78000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Rugged Pants",
                "resistance": 12,
                "scroll": true,
                "set": "rugged",
                "skin": "pants1",
                "stat": 2,
                "tier": 2,
                "type": "pants",
                "upgrade": {
                    "armor": 2.5,
                    "resistance": 2.5,
                    "stat": 1
                }
            },
            "partyhat": {
                "a": 2,
                "armor": 5,
                "g": 12000,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "name": "Party Hat",
                "resistance": 6,
                "scroll": true,
                "skin": "partyhat",
                "stat": 1,
                "tier": 1,
                "type": "helmet",
                "upgrade": {
                    "armor": 0.5,
                    "dex": 0.2,
                    "int": 0.2,
                    "resistance": 0.5,
                    "stat": 1,
                    "str": 0.2,
                    "vit": 0.1
                }
            },
            "phelmet": {
                "a": 2,
                "armor": 14,
                "extra_stat": 0,
                "g": 72000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Pumpkin Head",
                "protection": true,
                "reflection": 1,
                "resistance": 16,
                "scroll": true,
                "skin": "phelmet",
                "stat": 1,
                "tier": 2,
                "type": "helmet",
                "upgrade": {
                    "armor": 2.5,
                    "reflection": 0.4,
                    "resistance": 2.5,
                    "stat": 1
                }
            },
            "pickaxe": {
                "breaks": 1,
                "g": 2000,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "name": "Pickaxe",
                "skin": "pickaxe",
                "tier": 1,
                "type": "tool",
                "upgrade": {
                    "breaks": -0.064
                },
                "wtype": "pickaxe"
            },
            "pico": {
                "crit": 20,
                "duration": 0.05,
                "g": 150000,
                "miss": 15,
                "name": "Pixel Colada",
                "rpiercing": 100,
                "s": 9999,
                "skin": "pico",
                "skin_a": "pico",
                "type": "elixir"
            },
            "pinkie": {
                "attack": 19.75,
                "charisma": -100,
                "cx": {
                    "accent": "#DF33EC",
                    "extension": true,
                    "scale": 0.5
                },
                "damage_type": "magical",
                "g": 124000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Pink Wand",
                "projectile": "pinky",
                "range": 33.75,
                "set": "bunny",
                "skin": "pinkie",
                "skin_r": "pinkie_r",
                "speed": 2,
                "tier": 1.75,
                "type": "weapon",
                "upgrade": {
                    "attack": 3.45,
                    "range": 6.25
                },
                "wtype": "wand"
            },
            "placeholder": {
                "g": 1,
                "ignore": true,
                "name": "Placeholder",
                "skin": "placeholder",
                "type": "placeholder"
            },
            "placeholder_m": {
                "g": 1,
                "ignore": true,
                "name": "Placeholder",
                "skin": "placeholder_m",
                "type": "placeholder"
            },
            "platinumingot": {
                "explanation": "Solid Platinum",
                "g": 40000000,
                "name": "Platinum Ingot",
                "offering": 2,
                "s": 100,
                "skin": "platinumingot",
                "type": "material"
            },
            "platinumnugget": {
                "explanation": "Ideal for crafting",
                "g": 5200000,
                "name": "Platinum Nugget",
                "offering": 1,
                "s": 1000,
                "skin": "platinumnugget",
                "type": "material"
            },
            "pleather": {
                "g": 400,
                "name": "Porcupine Leather",
                "s": 9999,
                "skin": "pleather",
                "type": "material"
            },
            "pmace": {
                "a": true,
                "attack": 25,
                "class": [
                    "priest"
                ],
                "damage_type": "magical",
                "dex": 4,
                "g": 89000,
                "grades": [
                    0,
                    8,
                    10,
                    12
                ],
                "int": 8,
                "name": "Priest's Mace",
                "range": 10,
                "skin": "pmace",
                "tier": 2,
                "type": "weapon",
                "upgrade": {
                    "attack": 6,
                    "dex": 1,
                    "int": 2,
                    "range": 5
                },
                "wtype": "pmace"
            },
            "pmaceofthedead": {
                "a": true,
                "attack": 30,
                "cx": {
                    "accent": "#D87F0E"
                },
                "damage_type": "magical",
                "g": 824000,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "name": "Hand of the Dead",
                "range": 15,
                "skin": "pmaceofthedead",
                "speed": -3,
                "str": 20,
                "tier": 3,
                "type": "weapon",
                "upgrade": {
                    "attack": 7,
                    "range": 6
                },
                "wtype": "pmace"
            },
            "poison": {
                "explanation": "An organic poison sack, can be used to coat weapons or arrows.",
                "g": 1000,
                "name": "Poison Sack",
                "s": 9999,
                "skin": "poison",
                "type": "skill_item"
            },
            "poker": {
                "a": true,
                "ability": "poke",
                "armor": 11,
                "crit": 0.5,
                "explanation": "Pokey pokey!",
                "g": 16000,
                "grades": [
                    4,
                    8,
                    10,
                    12
                ],
                "name": "Poker",
                "resistance": 6,
                "scroll": true,
                "skin": "poker",
                "stat": 1,
                "tier": 1.5,
                "type": "gloves",
                "upgrade": {
                    "armor": 1.5,
                    "resistance": 1.5,
                    "stat": 1
                }
            },
            "pouchbow": {
                "attack": 15.2,
                "cx": {
                    "accent": "#9D7B1B"
                },
                "damage_type": "physical",
                "explosion": 10,
                "g": 24000,
                "grades": [
                    8,
                    9,
                    10,
                    12
                ],
                "mp_reduction": -10,
                "name": "Poucher",
                "projectile": "pouch",
                "range": 47,
                "skin": "pouchbow",
                "tier": 0.2,
                "type": "weapon",
                "upgrade": {
                    "attack": 3.36,
                    "explosion": 2,
                    "range": 7.133333333333333
                },
                "wtype": "bow"
            },
            "powerglove": {
                "a": true,
                "ability": "power",
                "apiercing": 16,
                "armor": 16,
                "charge": 120,
                "extra_stat": 0,
                "frequency": 2,
                "g": 1600000,
                "grades": [
                    0,
                    0,
                    10,
                    12
                ],
                "name": "Power Glove",
                "resistance": 8,
                "rpiercing": 16,
                "scroll": true,
                "set": "legends",
                "skin": "powerglove",
                "stat": 1,
                "tier": 2,
                "type": "gloves",
                "upgrade": {
                    "apiercing": 2,
                    "armor": 2.5,
                    "frequency": 0.2,
                    "resistance": 2.5,
                    "rpiercing": 2,
                    "stat": 1
                }
            },
            "pstem": {
                "g": 5,
                "name": "Pumpkin Stem",
                "s": 9999,
                "skin": "pstem",
                "type": "material"
            },
            "pumpkinspice": {
                "crit": 5,
                "duration": 8,
                "explanation": "Produced in bulk during the Halloween season. WARNING: The pumpkin comes from a non-vegetable source",
                "g": 200,
                "mp": -400,
                "name": "Pumpkin Spice Latte",
                "reflection": 2,
                "s": 9999,
                "skin": "pumpkinspice",
                "skin_a": "pumpkinspice",
                "type": "elixir"
            },
            "puppy1": {
                "a": true,
                "explanation": "A vibrant egg, it's inhabitant seems eager to get out.",
                "g": 40000,
                "grade": 0,
                "ignore": true,
                "monster": "puppy1",
                "name": "Egg",
                "skin": "egg2",
                "type": "chrysalis"
            },
            "puppyer": {
                "explanation": "Lets you adopt a puppy once they are ready. You'll have to wait a bit until they are ready to be adopted tho!",
                "g": 10000,
                "name": "Licence to Adopt a Puppy",
                "s": 9999,
                "skin": "puppyer",
                "type": "petlicence"
            },
            "pvptoken": {
                "explanation": "A token representing valour in battles. Collect them from PVP events and exchange them for treasures!",
                "g": 24000,
                "name": "PVP Token",
                "s": 9999,
                "skin": "pvptoken",
                "type": "token"
            },
            "pyjamas": {
                "a": 2,
                "armor": 24,
                "charisma": -5,
                "explanation": "Comfortable.",
                "extra_stat": 1,
                "g": 480000,
                "grades": [
                    4,
                    8,
                    10,
                    12
                ],
                "hp": 400,
                "name": "Legacy Pyjamas",
                "resistance": 16,
                "scroll": true,
                "skin": "pyjamas",
                "stat": 2,
                "tier": 2,
                "type": "chest",
                "upgrade": {
                    "armor": 2.5,
                    "hp": 50,
                    "resistance": 2.5,
                    "stat": 1
                }
            },
            "qubics": {
                "a": true,
                "explanation": "Unique bio-electronic components, it's almost like they are alive. Can yield unexpected results if you introduce them to other materials!",
                "g": 5120000,
                "name": "Qubics",
                "s": 9999,
                "skin": "qubics",
                "type": "qubics"
            },
            "quiver": {
                "armor": 10,
                "dex": 2,
                "g": 24000,
                "grades": [
                    3,
                    7,
                    10,
                    12
                ],
                "name": "Quiver",
                "range": 20,
                "skin": "quiver",
                "tier": 1,
                "type": "quiver",
                "upgrade": {
                    "armor": 2,
                    "dex": 1,
                    "range": 3.5
                }
            },
            "rabbitsfoot": {
                "a": true,
                "compound": {
                    "luck": 5
                },
                "explanation": "Taken from a rabbit who lived a long and happy life, after the natural death occurred, with pre-consent",
                "g": 120000,
                "grades": [
                    0,
                    0,
                    6,
                    7
                ],
                "luck": 10,
                "name": "Rabbit's Foot",
                "skin": "rabbitsfoot",
                "type": "orb"
            },
            "rapier": {
                "attack": 15,
                "cx": {
                    "accent": "#5085B0"
                },
                "damage_type": "physical",
                "g": 84000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Rapier",
                "range": 7,
                "skin": "rapier",
                "tier": 2,
                "type": "weapon",
                "upgrade": {
                    "attack": 2.5,
                    "range": 1.5
                },
                "wtype": "rapier"
            },
            "rattail": {
                "g": 2,
                "name": "Rat Tail",
                "s": 9999,
                "skin": "rattail",
                "type": "material"
            },
            "redenvelope": {
                "a": true,
                "e": 1,
                "event": true,
                "explanation": "Congratulations and prosperity",
                "g": 24000,
                "name": "Red Envelope",
                "s": 9999,
                "skin": "redenvelope",
                "type": "gem"
            },
            "redenvelopev2": {
                "a": true,
                "e": 1,
                "event": true,
                "explanation": "Congratulations and prosperity",
                "g": 24000,
                "name": "Red Envelope",
                "s": 9999,
                "skin": "redenvelopev2",
                "type": "gem"
            },
            "redenvelopev3": {
                "a": true,
                "e": 1,
                "event": true,
                "explanation": "Congratulations and prosperity",
                "g": 24000,
                "name": "Red Envelope",
                "s": 9999,
                "skin": "redenvelopev3",
                "type": "gem"
            },
            "redenvelopev4": {
                "a": true,
                "e": 1,
                "event": true,
                "explanation": "Congratulations and prosperity",
                "g": 24000,
                "name": "Red Envelope",
                "s": 9999,
                "skin": "redenvelopev4",
                "type": "gem"
            },
            "rednose": {
                "a": true,
                "compound": {
                    "cuteness": 3,
                    "range": 4
                },
                "cuteness": 9,
                "g": 32000,
                "grades": [
                    2,
                    4,
                    6,
                    7
                ],
                "name": "Rudolph's Red Nose",
                "range": 3,
                "scroll": true,
                "skin": "rednose",
                "type": "helmet"
            },
            "reflectionscroll": {
                "explanation": "Adds Reflection to an armor with a Stat attribute.",
                "g": 8000,
                "multiplier": 0.125,
                "name": "Reflection Scroll",
                "s": 9999,
                "skin": "reflectionscroll",
                "stat": "reflection",
                "type": "pscroll"
            },
            "resistancering": {
                "a": true,
                "compound": {
                    "reflection": 0.125,
                    "resistance": 9
                },
                "g": 180000,
                "grades": [
                    1,
                    4,
                    6,
                    7
                ],
                "name": "Ring of Resistance",
                "resistance": 24,
                "skin": "resistancering",
                "type": "ring"
            },
            "resistancescroll": {
                "explanation": "Adds Resistance to an armor with a Stat attribute.",
                "g": 8000,
                "multiplier": 2.25,
                "name": "Resistance Scroll",
                "s": 9999,
                "skin": "resistancescroll",
                "stat": "resistance",
                "type": "pscroll"
            },
            "rfangs": {
                "g": 12000,
                "name": "Rat Fangs",
                "s": 9999,
                "skin": "rfangs",
                "type": "material"
            },
            "rfur": {
                "g": 40,
                "name": "Rat Fur",
                "s": 9999,
                "skin": "rfur",
                "type": "material"
            },
            "ringhs": {
                "a": true,
                "ability": "secondchance",
                "attr0": 3,
                "compound": {
                    "luck": 3,
                    "vit": 5
                },
                "dex": 4,
                "g": 6400000,
                "grades": [
                    0,
                    0,
                    6,
                    7
                ],
                "int": 4,
                "luck": 8,
                "name": "Ring of Holidays",
                "set": "holidays",
                "skin": "ringhs",
                "str": 4,
                "type": "ring",
                "vit": 10
            },
            "ringofluck": {
                "a": true,
                "compound": {
                    "luck": 5
                },
                "g": 6400000,
                "grades": [
                    0,
                    0,
                    6,
                    7
                ],
                "luck": 10,
                "name": "Ring of Luck",
                "skin": "ringofluck",
                "type": "ring"
            },
            "ringsj": {
                "compound": {
                    "dex": 1,
                    "int": 1,
                    "resistance": 5,
                    "str": 1
                },
                "dex": 1,
                "g": 24000,
                "grades": [
                    3,
                    5,
                    6,
                    7
                ],
                "int": 1,
                "name": "Ring of Small Joys",
                "resistance": 5,
                "skin": "ring",
                "str": 1,
                "type": "ring"
            },
            "rod": {
                "breaks": 1,
                "g": 2000,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "name": "Fishing Rod",
                "skin": "rod",
                "tier": 1,
                "type": "tool",
                "upgrade": {
                    "breaks": -0.064
                },
                "wtype": "rod"
            },
            "rpiercingscroll": {
                "explanation": "Adds Resistance Piercing to an armor with a Stat attribute.",
                "g": 8000,
                "multiplier": 2.25,
                "name": "Resistance Piercing Scroll",
                "s": 9999,
                "skin": "rpiercingscroll",
                "stat": "rpiercing",
                "type": "pscroll"
            },
            "sanguine": {
                "attr0": 1,
                "aura": "sanguine",
                "compound": {
                    "attr0": 0.5,
                    "dex": 1,
                    "hp": 300,
                    "int": 1,
                    "str": 1
                },
                "dex": 5,
                "g": 32000000,
                "grades": [
                    0,
                    0,
                    6,
                    7
                ],
                "hp": 1200,
                "int": 5,
                "name": "Sanguine Amulet",
                "skin": "sanguine",
                "str": 5,
                "type": "amulet"
            },
            "santasbelt": {
                "a": true,
                "compound": {
                    "dex": 2
                },
                "dex": 3,
                "evasion": 4,
                "g": 640000,
                "grades": [
                    0,
                    3,
                    6,
                    7
                ],
                "name": "Santa's Belt",
                "set": "holidays",
                "skin": "santasbelt",
                "type": "belt"
            },
            "sbelt": {
                "a": true,
                "armor": 15,
                "compound": {
                    "armor": 10,
                    "dex": 2,
                    "int": 2,
                    "resistance": 10,
                    "str": 2
                },
                "dex": 8,
                "for": 12,
                "g": 640000,
                "grades": [
                    0,
                    1,
                    6,
                    7
                ],
                "int": 8,
                "name": "Belt of Hallowed Trials",
                "resistance": 15,
                "skin": "sbelt",
                "str": 8,
                "type": "belt"
            },
            "scroll0": {
                "explanation": "Scroll to upgrade a weapon or armor. If the upgrade fails, the item is lost.",
                "g": 1000,
                "grade": 0,
                "name": "Upgrade Scroll",
                "s": 9999,
                "skin": "scroll0",
                "type": "uscroll"
            },
            "scroll1": {
                "explanation": "Scroll to upgrade a high grade weapon or armor. If the upgrade fails, the item is lost.",
                "g": 40000,
                "grade": 1,
                "name": "High Upgrade Scroll",
                "s": 9999,
                "skin": "scroll1",
                "type": "uscroll"
            },
            "scroll2": {
                "explanation": "Scroll to upgrade a rare weapon or armor. If the upgrade fails, the item is lost.",
                "g": 1600000,
                "grade": 2,
                "name": "Rare Upgrade Scroll",
                "s": 9999,
                "skin": "scroll2",
                "type": "uscroll"
            },
            "scroll3": {
                "a": true,
                "explanation": "A mysterious upgrade scroll, you can feel that it's very powerful. If the upgrade fails, the item is lost.",
                "g": 480000000,
                "grade": 3,
                "markup": 10,
                "name": "Legendary Upgrade Scroll",
                "s": 9999,
                "skin": "scroll3",
                "type": "uscroll"
            },
            "scroll4": {
                "a": true,
                "exclusive": true,
                "explanation": "A scroll passed down from ancient times. Long believed to be extinct. Powers beyond imagination.",
                "g": 640000000,
                "grade": 3.6,
                "name": "Ultimate Upgrade Scroll",
                "s": 9999,
                "skin": "scroll4",
                "type": "uscroll"
            },
            "scythe": {
                "attack": 48,
                "cx": {
                    "accent": "#5AAEED"
                },
                "damage_type": "physical",
                "g": 8600000,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "name": "Skeletor's Scythe",
                "range": 13,
                "skin": "scythe",
                "tier": 3,
                "type": "weapon",
                "upgrade": {
                    "attack": 12,
                    "range": 1
                },
                "wtype": "scythe"
            },
            "seashell": {
                "e": 20,
                "explanation": "A beautiful seashell.",
                "g": 800,
                "name": "Seashell",
                "quest": "seashell",
                "s": 9999,
                "skin": "seashell",
                "type": "quest"
            },
            "shadowstone": {
                "explanation": "A stone piece with curious properties, allows the bearer to shift to a parallel reality.",
                "g": 800,
                "name": "Shadow Stone",
                "s": 9999,
                "skin": "shadowstone",
                "type": "skill_item"
            },
            "shield": {
                "armor": 60,
                "g": 24000,
                "grades": [
                    4,
                    8,
                    10,
                    12
                ],
                "name": "Shield",
                "resistance": 20,
                "skin": "shield",
                "tier": 2,
                "type": "shield",
                "upgrade": {
                    "armor": 12.5,
                    "resistance": 7.5
                }
            },
            "shoes": {
                "armor": 3,
                "g": 12100,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "name": "Shoes",
                "scroll": true,
                "skin": "shoes",
                "speed": 5,
                "stat": 1,
                "tier": 1,
                "type": "shoes",
                "upgrade": {
                    "armor": 0.5,
                    "speed": 0.625,
                    "stat": 1
                }
            },
            "shoes1": {
                "a": 2,
                "armor": 8,
                "extra_stat": 1,
                "g": 120000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Rugged Shoes",
                "scroll": true,
                "set": "rugged",
                "skin": "shoes1",
                "speed": 6,
                "stat": 2,
                "tier": 2,
                "type": "shoes",
                "upgrade": {
                    "armor": 2.5,
                    "speed": 0.875,
                    "stat": 1
                }
            },
            "skullamulet": {
                "a": true,
                "armor": 10,
                "compound": {
                    "armor": 5,
                    "dex": 1,
                    "for": 1,
                    "hp": 320,
                    "int": 1,
                    "str": 1
                },
                "dex": 1,
                "for": 4,
                "g": 30000,
                "grades": [
                    2,
                    4,
                    6,
                    7
                ],
                "hp": 200,
                "int": 1,
                "name": "Skull Amulet",
                "skin": "skullamulet",
                "str": 1,
                "type": "amulet"
            },
            "slimestaff": {
                "attack": 30,
                "class": [
                    "priest"
                ],
                "cx": {
                    "accent": "#48A763"
                },
                "damage_type": "magical",
                "dex": 5,
                "g": 16400,
                "grades": [
                    5,
                    8,
                    10,
                    12
                ],
                "name": "Slime Staff",
                "range": 53,
                "skin": "slimestaff",
                "speed": -5,
                "tier": 1.5,
                "type": "weapon",
                "upgrade": {
                    "attack": 5.25,
                    "dex": 2,
                    "range": 3.25
                },
                "wtype": "staff"
            },
            "smoke": {
                "action": "THROW!",
                "explanation": "A pyrotechnic pouch developed for those who want to feel like Rogue's",
                "g": 20,
                "name": "Pouch of Poof",
                "onclick": "socket.emit('throw',{num:locate_item('smoke'),x:character.real_x,y:character.real_y}); push_deferred('throw')",
                "s": 100,
                "skin": "smoke",
                "throw": true,
                "type": "throw"
            },
            "smush": {
                "g": 87,
                "name": "Small Mushroom",
                "s": 9999,
                "skin": "smush",
                "type": "material"
            },
            "snakefang": {
                "g": 1200,
                "name": "Snake Fang",
                "s": 9999,
                "skin": "snakefang",
                "type": "material"
            },
            "snakeoil": {
                "debuff": true,
                "g": 200,
                "gives": [
                    [
                        "hp",
                        -100
                    ]
                ],
                "name": "Snake Oil",
                "rare": true,
                "s": 9999,
                "skin": "snakeoil",
                "type": "pot"
            },
            "snowball": {
                "explanation": "Be careful not to hit someone in the ear!",
                "g": 1,
                "name": "Snowball",
                "s": 200,
                "skin": "snowball",
                "type": "throw"
            },
            "snowboots": {
                "armor": 8,
                "extra_stat": 1,
                "fzresistance": 10,
                "g": 720000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Snow Boots",
                "scroll": true,
                "skin": "snowboots",
                "speed": 6,
                "stat": 2,
                "tier": 2,
                "type": "shoes",
                "upgrade": {
                    "armor": 2.5,
                    "fzresistance": 1,
                    "speed": 0.875,
                    "stat": 1
                }
            },
            "snowflakes": {
                "ability": "freeze",
                "attack": 7,
                "attr0": 1,
                "cx": {
                    "extension": true,
                    "scale": 0.5
                },
                "damage_type": "physical",
                "g": 92000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Snowflakes",
                "range": 60,
                "skin": "snowflakes",
                "skin_r": "snowflakes_r",
                "tier": 2,
                "type": "weapon",
                "upgrade": {
                    "attack": 3.3,
                    "attr0": 1,
                    "range": 5
                },
                "wtype": "stars"
            },
            "snring": {
                "armor": 20,
                "compound": {
                    "armor": 5,
                    "dex": 1,
                    "str": 2
                },
                "dex": 2,
                "g": 2400000,
                "grades": [
                    0,
                    0,
                    6,
                    7
                ],
                "name": "Stompy's Nose Ring",
                "skin": "snring",
                "str": 14,
                "type": "amulet"
            },
            "solitaire": {
                "bling": 10,
                "compound": {
                    "bling": 30
                },
                "event": true,
                "explanation": "The diamond is mesmerizing",
                "g": 1200000,
                "grades": [
                    0,
                    0,
                    6,
                    7
                ],
                "name": "Solitaire Ring",
                "skin": "solitaire",
                "type": "ring"
            },
            "spear": {
                "a": 2,
                "apiercing": 10,
                "attack": 16.25,
                "cx": {
                    "accent": "#AE4731"
                },
                "damage_type": "physical",
                "g": 72000,
                "grades": [
                    3,
                    8,
                    10,
                    12
                ],
                "name": "Spear",
                "range": 15.5,
                "skin": "spear",
                "tier": 1.25,
                "type": "weapon",
                "upgrade": {
                    "apiercing": 5,
                    "attack": 4.425,
                    "range": 2
                },
                "wtype": "spear"
            },
            "spearofthedead": {
                "a": true,
                "apiercing": 12,
                "attack": 22,
                "cx": {
                    "accent": "#D87F0E"
                },
                "damage_type": "physical",
                "explanation": "A deadly weapon",
                "for": 3,
                "g": 724000,
                "grades": [
                    0,
                    5,
                    10,
                    12
                ],
                "name": "Spear of the Dead",
                "range": 17.8,
                "skin": "spearofthedead",
                "str": 8,
                "tier": 2.4,
                "type": "weapon",
                "upgrade": {
                    "attack": 5.2299999999999995,
                    "range": 2
                },
                "wtype": "spear"
            },
            "speedscroll": {
                "explanation": "Adds Speed to an armor with a Stat attribute.",
                "g": 8000,
                "multiplier": 0.325,
                "name": "Speed Scroll",
                "s": 9999,
                "skin": "speedscroll",
                "stat": "speed",
                "type": "pscroll"
            },
            "spidersilk": {
                "explanation": "A durable yet sticky material",
                "g": 300,
                "name": "Spider Silk",
                "s": 9999,
                "skin": "spidersilk",
                "type": "material"
            },
            "spookyamulet": {
                "a": true,
                "evasion": 5,
                "g": 320000,
                "gold": 2,
                "grades": [
                    3,
                    5,
                    10,
                    12
                ],
                "luck": 2,
                "name": "Amulet of Spooks",
                "reflection": 2,
                "skin": "spookyamulet",
                "type": "amulet",
                "xp": 2
            },
            "spores": {
                "g": 120,
                "name": "Spores",
                "s": 9999,
                "skin": "spores",
                "type": "material"
            },
            "sshield": {
                "armor": 60,
                "dreturn": 3,
                "g": 24000,
                "grades": [
                    4,
                    8,
                    10,
                    12
                ],
                "name": "Spiked Shield",
                "resistance": 20,
                "skin": "sshield",
                "tier": 2,
                "type": "shield",
                "upgrade": {
                    "armor": 10,
                    "dreturn": 1.5,
                    "resistance": 7
                }
            },
            "sstinger": {
                "g": 4000,
                "name": "Scorpion Stinger",
                "s": 9999,
                "skin": "sstinger",
                "type": "material"
            },
            "staff": {
                "attack": 25,
                "cx": {
                    "accent": "#AF2131"
                },
                "damage_type": "magical",
                "g": 12400,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "name": "Staff",
                "range": 50,
                "skin": "staff",
                "tier": 1,
                "type": "weapon",
                "upgrade": {
                    "attack": 5,
                    "range": 3
                },
                "wtype": "staff"
            },
            "staff2": {
                "attack": 35,
                "cx": {
                    "accent": "#AF2131"
                },
                "damage_type": "magical",
                "g": 12400,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "ignore": true,
                "name": "T2 Staff",
                "range": 56,
                "skin": "staff",
                "tier": 2,
                "type": "weapon",
                "upgrade": {
                    "attack": 5.5,
                    "range": 3.5
                },
                "wtype": "staff"
            },
            "staff3": {
                "attack": 45,
                "cx": {
                    "accent": "#AF2131"
                },
                "damage_type": "magical",
                "g": 12400,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "ignore": true,
                "name": "T3 Staff",
                "range": 62,
                "skin": "staff",
                "tier": 3,
                "type": "weapon",
                "upgrade": {
                    "attack": 6,
                    "range": 4
                },
                "wtype": "staff"
            },
            "staff4": {
                "attack": 55,
                "cx": {
                    "accent": "#AF2131"
                },
                "damage_type": "magical",
                "g": 12400,
                "grades": [
                    0,
                    0,
                    8,
                    10
                ],
                "ignore": true,
                "name": "T4 Staff",
                "range": 68,
                "skin": "staff",
                "tier": 4,
                "type": "weapon",
                "upgrade": {
                    "attack": 6.5,
                    "range": 4.5
                },
                "wtype": "staff"
            },
            "staffofthedead": {
                "a": true,
                "attack": 40,
                "cx": {
                    "accent": "#D87F0E"
                },
                "damage_type": "magical",
                "g": 224000,
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "name": "Staff of the Dead",
                "range": 59,
                "skin": "staffofthedead",
                "speed": -6,
                "str": 32,
                "tier": 2.5,
                "type": "weapon",
                "upgrade": {
                    "attack": 5.75,
                    "range": 3.75
                },
                "wtype": "staff"
            },
            "stand0": {
                "explanation": "You can become a merchant using this item.",
                "g": 40000,
                "name": "Merchant Stand",
                "skin": "stand0",
                "stand": "stand0",
                "type": "stand"
            },
            "stand1": {
                "explanation": "You can become a merchant using this item.",
                "g": 400000,
                "ignore": true,
                "name": "Merchant Stand [Sell+Buy]",
                "skin": "stand1",
                "stand": "stand1",
                "type": "stand"
            },
            "starkillers": {
                "a": 2,
                "armor": 35,
                "class": [
                    "mage",
                    "priest"
                ],
                "crit": 2,
                "extra_stat": 0,
                "g": 7800000,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "legacy": {
                    "class": null,
                    "set": null
                },
                "name": "Star Killer's Pants",
                "resistance": 21,
                "rpiercing": 80,
                "scroll": true,
                "set": "legends",
                "skin": "starkillers",
                "stat": 1,
                "tier": 3,
                "type": "pants",
                "upgrade": {
                    "armor": 5.5,
                    "crit": 0.2,
                    "resistance": 5.5,
                    "rpiercing": 5,
                    "stat": 1
                },
                "vit": 10
            },
            "stealthcape": {
                "explanation": "Thanks to it's stealth capabilities, no one can track your endeavours any more.",
                "g": 2000000,
                "grades": [
                    0,
                    4,
                    10,
                    12
                ],
                "name": "Stealth Cape",
                "resistance": 42,
                "skin": "stealthcape",
                "stat": 3,
                "type": "cape",
                "upgrade": {
                    "resistance": 1,
                    "stat": 0.3
                }
            },
            "stick": {
                "a": true,
                "explanation": "...",
                "g": 299999,
                "grades": [
                    4,
                    7,
                    10,
                    12
                ],
                "name": "Stick",
                "skin": "stick",
                "type": "misc",
                "upgrade": {}
            },
            "stinger": {
                "attack": 14,
                "cx": {
                    "accent": "#96783E",
                    "extension": true,
                    "scale": 0.5
                },
                "damage_type": "physical",
                "g": 16000,
                "grades": [
                    5,
                    8,
                    10,
                    12
                ],
                "name": "Stinger",
                "range": 5.4,
                "skin": "stinger",
                "str": 12,
                "tier": 1.4,
                "type": "weapon",
                "upgrade": {
                    "attack": 3.4,
                    "range": 2
                },
                "wtype": "dagger"
            },
            "stonekey": {
                "explanation": "A stone key, imbued with magical energy.",
                "g": 50000,
                "name": "The Stone Key",
                "opens": "therush",
                "s": 10,
                "skin": "stonekey",
                "type": "dungeon_key"
            },
            "stoneofgold": {
                "days": 30,
                "explanation": "Helps you find up to 40% more gold from monsters.",
                "g": 100000000,
                "ignore": true,
                "name": "Stone of Riches",
                "skin": "stoneofgold",
                "skin_a": "stoneofgold",
                "type": "stone"
            },
            "stoneofluck": {
                "days": 30,
                "explanation": "Increases your chances to loot something from a monster by 20%.",
                "g": 100000000,
                "ignore": true,
                "name": "Stone of Luck",
                "skin": "stoneofluck",
                "skin_a": "stoneofluck",
                "type": "stone"
            },
            "stoneofxp": {
                "days": 30,
                "explanation": "Increases experience gain by 50%. Needs to be activated. Can be morphed into other stones.",
                "g": 100000000,
                "ignore": true,
                "name": "Stone of Wisdom",
                "skin": "stoneofxp",
                "skin_a": "stoneofxp_a",
                "type": "stone"
            },
            "storagebox": {
                "explanation": "It's a nifty little box",
                "g": 9000,
                "ignore": true,
                "name": "Storage Box",
                "s": 9999,
                "skin": "storagebox",
                "type": "misc"
            },
            "stramulet": {
                "compound": {
                    "str": 2
                },
                "g": 30000,
                "grades": [
                    3,
                    5,
                    6,
                    7
                ],
                "name": "Amulet of Strength",
                "skin": "stramulet",
                "str": 4,
                "type": "amulet"
            },
            "strbelt": {
                "compound": {
                    "str": 3
                },
                "g": 50000,
                "grades": [
                    2,
                    5,
                    6,
                    7
                ],
                "name": "Belt of Strength",
                "skin": "strbelt",
                "str": 4,
                "type": "belt"
            },
            "strearring": {
                "compound": {
                    "str": 2
                },
                "g": 38000,
                "grades": [
                    2,
                    5,
                    6,
                    7
                ],
                "name": "Earring of Strength",
                "skin": "strearring",
                "str": 3,
                "type": "earring"
            },
            "strring": {
                "compound": {
                    "str": 2
                },
                "g": 24000,
                "grades": [
                    3,
                    5,
                    6,
                    7
                ],
                "name": "Ring of Strength",
                "skin": "strring",
                "str": 2,
                "type": "ring"
            },
            "strscroll": {
                "explanation": "Adds Stength to an armor with a Stat attribute.",
                "g": 8000,
                "multiplier": 1,
                "name": "Strength Scroll",
                "s": 9999,
                "skin": "strscroll",
                "stat": "str",
                "type": "pscroll"
            },
            "suckerpunch": {
                "a": true,
                "apiercing": 20,
                "compound": {
                    "apiercing": 20,
                    "crit": 1,
                    "lifesteal": 1
                },
                "crit": 2,
                "g": 3200000,
                "grades": [
                    0,
                    0,
                    6,
                    7
                ],
                "lifesteal": 2,
                "name": "Sucker Punch",
                "set": "fury",
                "skin": "suckerpunch",
                "type": "ring"
            },
            "supercomputer": {
                "explanation": "Networks you to NPC's, extends the CODE capabilities and tracks your encounters.",
                "g": 64000000,
                "name": "Super Computer",
                "skin": "ancientcomputer",
                "special": true,
                "stand": "cstand",
                "type": "computer"
            },
            "supermittens": {
                "a": true,
                "apiercing": 32,
                "armor": 16,
                "explanation": "Swift and lethal!",
                "extra_stat": 0,
                "frequency": 2,
                "g": 340000,
                "grades": [
                    0,
                    0,
                    10,
                    12
                ],
                "name": "Super Mittens",
                "resistance": 8,
                "rpiercing": 32,
                "scroll": true,
                "set": "holidays",
                "skin": "supermittens",
                "stat": 1,
                "tier": 2,
                "type": "gloves",
                "upgrade": {
                    "apiercing": 3,
                    "armor": 2.5,
                    "frequency": 0.2,
                    "resistance": 2.5,
                    "rpiercing": 3,
                    "stat": 1
                }
            },
            "svenom": {
                "g": 12000,
                "name": "Scorpion Venom",
                "s": 9999,
                "skin": "svenom",
                "type": "material"
            },
            "sweaterhs": {
                "a": true,
                "armor": 34,
                "extra_stat": 1,
                "g": 160000,
                "grades": [
                    0,
                    5,
                    10,
                    12
                ],
                "mp": 240,
                "name": "Super Sweater",
                "resistance": 23,
                "scroll": true,
                "set": "holidays",
                "skin": "sweaterhs",
                "speed": -1,
                "stat": 2,
                "tier": 2.5,
                "type": "chest",
                "upgrade": {
                    "armor": 4,
                    "resistance": 4,
                    "stat": 1
                },
                "vit": 12
            },
            "swifty": {
                "attack": 18.75,
                "cx": {
                    "accent": "#CC54B2"
                },
                "damage_type": "physical",
                "dex": 12,
                "g": 48000,
                "grades": [
                    4,
                    7,
                    10,
                    12
                ],
                "name": "Swifty",
                "range": 7.25,
                "skin": "swifty",
                "tier": 1.75,
                "type": "weapon",
                "upgrade": {
                    "attack": 4.75,
                    "range": 1.5
                },
                "wtype": "sword"
            },
            "swirlipop": {
                "a": true,
                "duration": 0.008,
                "eat": true,
                "evasion": 90,
                "explanation": "A dizzying candy, has some benefits.",
                "g": 10000,
                "int": -40,
                "name": "Swirlipop",
                "resistance": -300,
                "s": 9999,
                "skin": "swirlipop",
                "skin_a": "swirlipop",
                "type": "elixir",
                "withdrawal": "withdrawal"
            },
            "sword": {
                "attack": 24,
                "cx": {
                    "accent": "#CC5A10"
                },
                "damage_type": "physical",
                "g": 48000,
                "grades": [
                    0,
                    4,
                    10,
                    12
                ],
                "name": "Short Sword",
                "range": 8,
                "skin": "sword",
                "tier": 2.5,
                "type": "weapon",
                "upgrade": {
                    "attack": 4.75,
                    "range": 1.5
                },
                "wtype": "short_sword"
            },
            "swordofthedead": {
                "a": true,
                "attack": 26,
                "cx": {
                    "accent": "#D87F0E"
                },
                "damage_type": "physical",
                "g": 224000,
                "grades": [
                    0,
                    4,
                    10,
                    12
                ],
                "name": "Sword of the Dead",
                "range": 8,
                "resistance": 20,
                "skin": "swordofthedead",
                "str": 10,
                "tier": 2.5,
                "type": "weapon",
                "upgrade": {
                    "attack": 4.75,
                    "range": 1.5,
                    "resistance": 2.5
                },
                "vit": -12,
                "wtype": "short_sword"
            },
            "t2bow": {
                "a": true,
                "attack": 26,
                "cx": {
                    "accent": "#CD3F3B"
                },
                "damage_type": "physical",
                "explanation": "Crafted with the finest of materials",
                "g": 78000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Well-Crafted Bow",
                "projectile": "arrow",
                "range": 65,
                "skin": "t2bow",
                "tier": 2,
                "type": "weapon",
                "upgrade": {
                    "attack": 4.8,
                    "range": 8.333333333333332
                },
                "wtype": "bow"
            },
            "t2dexamulet": {
                "compound": {
                    "dex": 3,
                    "vit": 3
                },
                "dex": 6,
                "edge": -1,
                "g": 160000,
                "grades": [
                    0,
                    2,
                    6,
                    7
                ],
                "name": "Amulet of the Stubborn Ranger",
                "skin": "t2dexamulet",
                "type": "amulet",
                "vit": 5
            },
            "t2intamulet": {
                "armor": 30,
                "compound": {
                    "armor": 20,
                    "int": 2
                },
                "edge": -1,
                "g": 160000,
                "grades": [
                    0,
                    2,
                    6,
                    7
                ],
                "int": 5,
                "name": "Amulet of the Fierce Mage",
                "skin": "t2intamulet",
                "type": "amulet"
            },
            "t2quiver": {
                "a": true,
                "armor": 12,
                "dex": 9,
                "evasion": 1,
                "g": 960000,
                "grades": [
                    0,
                    4,
                    10,
                    12
                ],
                "name": "Agile Quiver",
                "range": 20,
                "skin": "t2quiver",
                "tier": 2,
                "type": "quiver",
                "upgrade": {
                    "armor": 3,
                    "dex": 1.5,
                    "range": 3.5
                }
            },
            "t2stramulet": {
                "compound": {
                    "resistance": 20,
                    "str": 3
                },
                "edge": -1,
                "g": 160000,
                "grades": [
                    0,
                    2,
                    6,
                    7
                ],
                "name": "Amulet of the Eager Warrior",
                "resistance": 30,
                "skin": "t2stramulet",
                "str": 5,
                "type": "amulet"
            },
            "t3bow": {
                "a": true,
                "attack": 32,
                "critdamage": 12,
                "cx": {
                    "accent": "#DE6F22"
                },
                "damage_type": "physical",
                "explanation": "Crafted by the finest of bowmasters",
                "g": 780000,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "name": "Artisan's Bow",
                "projectile": "arrow",
                "range": 75,
                "skin": "t3bow",
                "tier": 3,
                "type": "weapon",
                "upgrade": {
                    "attack": 5.6,
                    "range": 9
                },
                "wtype": "bow"
            },
            "talkingskull": {
                "a": true,
                "compound": {
                    "xp": 5
                },
                "explanation": "Endless wisdom",
                "g": 96000,
                "grades": [
                    1,
                    2,
                    6,
                    7
                ],
                "name": "Yorick the Talking Skull",
                "skin": "talkingskull",
                "type": "orb",
                "xp": 5
            },
            "test": {
                "explanation": "An item to test item looks, just set the 'skin' property.",
                "g": 1,
                "ignore": true,
                "name": "Test",
                "skin": "test",
                "type": "test"
            },
            "test2": {
                "critdamage": 60,
                "explanation": "An item to test properties!",
                "for": 120,
                "g": 1,
                "ignore": true,
                "manasteal": 2,
                "name": "Test",
                "skin": "shells",
                "type": "orb"
            },
            "test_orb": {
                "compound": {},
                "firesistance": 20,
                "fzresistance": 20,
                "g": 1,
                "grades": [
                    0,
                    0,
                    10,
                    12
                ],
                "name": "Orb of Testing",
                "skin": "test_orb",
                "type": "orb"
            },
            "throwingstars": {
                "attack": 5,
                "cx": {
                    "extension": true,
                    "scale": 0.5
                },
                "damage_type": "physical",
                "g": 72000,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "name": "Throwing Stars",
                "range": 50,
                "skin": "throwingstars",
                "tier": 1,
                "type": "weapon",
                "upgrade": {
                    "attack": 2.5,
                    "range": 4
                },
                "wtype": "stars"
            },
            "tigercape": {
                "a": true,
                "armor": 18,
                "dex": 1,
                "g": 2400000,
                "grades": [
                    0,
                    4,
                    10,
                    12
                ],
                "name": "Cape of the Tiger",
                "resistance": 12,
                "set": "tiger",
                "skin": "tigercape",
                "speed": 1,
                "stat": 4,
                "str": 1,
                "type": "cape",
                "upgrade": {
                    "armor": 3,
                    "resistance": 2,
                    "stat": 0.1
                }
            },
            "tigerhelmet": {
                "a": true,
                "armor": 14,
                "crit": 0.5,
                "extra_stat": 1,
                "g": 640000,
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "name": "Helmet of the Tiger",
                "protection": true,
                "resistance": 16,
                "rogue": {
                    "crit": 2,
                    "upgrade": {
                        "crit": 0.25
                    }
                },
                "scroll": true,
                "set": "tiger",
                "skin": "tigerhelmet",
                "speed": 2,
                "stat": 2,
                "tier": 2,
                "type": "helmet",
                "upgrade": {
                    "armor": 2.5,
                    "resistance": 2.5,
                    "stat": 1
                }
            },
            "tigershield": {
                "armor": 80,
                "g": 240000,
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "name": "Shield of the Tiger",
                "resistance": 30,
                "set": "tiger",
                "skin": "tigershield",
                "speed": 2,
                "tier": 2.5,
                "type": "shield",
                "upgrade": {
                    "armor": 13.5,
                    "resistance": 8.5
                }
            },
            "tigerstone": {
                "armor": 30,
                "compound": {
                    "dex": 1,
                    "int": 0.5,
                    "str": 1,
                    "vit": 4
                },
                "dex": 2,
                "g": 600000,
                "grades": [
                    0,
                    1,
                    6,
                    7
                ],
                "int": 1,
                "name": "Tiger Stone",
                "set": "tiger",
                "skin": "tigerstone",
                "speed": 1,
                "str": 2,
                "type": "orb",
                "vit": 10
            },
            "tombkey": {
                "explanation": "A key, imbued with magical energy.",
                "g": 50000,
                "name": "The Tomb Key",
                "opens": "tomb",
                "s": 10,
                "skin": "tombkey",
                "type": "dungeon_key"
            },
            "tracker": {
                "acolor": "#B969CE",
                "action": "INTERFACE!",
                "explanation": "A tool that tracks all your experiences and encounters in Adventure Land so you can learn from them and grow as an adventurer!",
                "g": 12,
                "name": "Tracktrix",
                "onclick": "socket.emit('tracker')",
                "skin": "tracker",
                "special": true,
                "type": "tracker"
            },
            "trigger": {
                "a": true,
                "apiercing": 10,
                "compound": {
                    "apiercing": 2,
                    "str": 2,
                    "stun": 0.75
                },
                "g": 6400000,
                "grades": [
                    0,
                    0,
                    1,
                    3
                ],
                "name": "The Trigger",
                "skin": "trigger",
                "str": 6,
                "stun": 1.5,
                "type": "ring"
            },
            "trinkets": {
                "g": 200000,
                "name": "Trinkets",
                "s": 9999,
                "skin": "trinkets",
                "type": "material"
            },
            "tristone": {
                "action": "ACTIVATE!",
                "apiercing": 5,
                "compound": {
                    "apiercing": 5,
                    "dex": 1,
                    "int": 1,
                    "rpiercing": 5,
                    "str": 1,
                    "vit": 1
                },
                "dex": 1,
                "g": 50000,
                "grades": [
                    1,
                    4,
                    6,
                    7
                ],
                "ignore": true,
                "int": 1,
                "name": "Legacy Tri-Stone",
                "onclick": "socket.emit('activate',{slot:$(this).data('id')})",
                "rpiercing": 5,
                "skin": "tristone",
                "skin_a": "tristone_a",
                "str": 1,
                "type": "ring",
                "vit": 1
            },
            "troll": {
                "e": 1,
                "explanation": "A random T-Shirt!",
                "g": 12000,
                "name": "T-Shirt Roll",
                "s": 9999,
                "skin": "troll",
                "type": "misc"
            },
            "tshell": {
                "g": 1200,
                "name": "Turtle Shell",
                "s": 9999,
                "skin": "tshell",
                "type": "material"
            },
            "tshirt0": {
                "g": 120,
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "int": 5,
                "name": "T-Shirt",
                "skin": "tshirt0",
                "type": "chest",
                "upgrade": {
                    "int": 1.25
                }
            },
            "tshirt1": {
                "dex": 5,
                "g": 120,
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "name": "T-Shirt",
                "skin": "tshirt1",
                "type": "chest",
                "upgrade": {
                    "dex": 1.25
                }
            },
            "tshirt2": {
                "g": 120,
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "name": "T-Shirt",
                "skin": "tshirt2",
                "str": 5,
                "type": "chest",
                "upgrade": {
                    "str": 1.25
                }
            },
            "tshirt3": {
                "g": 120,
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "name": "T-Shirt",
                "skin": "tshirt3",
                "type": "chest",
                "upgrade": {
                    "xp": 0.75
                },
                "xp": 2
            },
            "tshirt4": {
                "g": 120,
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "name": "T-Shirt",
                "skin": "tshirt4",
                "speed": 3,
                "type": "chest",
                "upgrade": {
                    "speed": 0.5
                }
            },
            "tshirt6": {
                "g": 120,
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "name": "T-Shirt",
                "rpiercing": 30,
                "skin": "tshirt6",
                "type": "chest",
                "upgrade": {
                    "rpiercing": 5
                }
            },
            "tshirt7": {
                "apiercing": 30,
                "g": 120,
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "name": "T-Shirt",
                "skin": "tshirt7",
                "type": "chest",
                "upgrade": {
                    "apiercing": 5
                }
            },
            "tshirt8": {
                "g": 120,
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "mp_cost": -5,
                "name": "T-Shirt",
                "skin": "tshirt8",
                "type": "chest",
                "upgrade": {
                    "mp_cost": -2
                }
            },
            "tshirt88": {
                "dex": 5,
                "g": 120,
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "int": 5,
                "luck": 12,
                "name": "T-Shirt",
                "skin": "tshirt88",
                "speed": 3,
                "str": 5,
                "type": "chest",
                "upgrade": {
                    "dex": 1,
                    "int": 1,
                    "str": 1
                },
                "xp": 5
            },
            "tshirt9": {
                "g": 120,
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "manasteal": 1,
                "name": "T-Shirt",
                "skin": "tshirt9",
                "type": "chest",
                "upgrade": {
                    "manasteal": 0.1
                }
            },
            "ukey": {
                "action": "UNLOCK",
                "explanation": "Key to the bank's underground",
                "g": 50000000,
                "name": "The Bank Key",
                "onclick": "socket.emit('activate',{num:locate_item('ukey')})",
                "s": 3,
                "skin": "ukey",
                "type": "bank_key",
                "unlocks": "bank_u"
            },
            "vattire": {
                "armor": 42,
                "extra_stat": 2,
                "g": 4800000,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "hp": 1600,
                "lifesteal": 2,
                "name": "Spike's Attire",
                "resistance": 28,
                "scroll": true,
                "set": "vampires",
                "skin": "vattire",
                "stat": 3,
                "tier": 3,
                "type": "chest",
                "upgrade": {
                    "armor": 5.5,
                    "hp": 300,
                    "lifesteal": 0.2,
                    "resistance": 5.5,
                    "stat": 1
                }
            },
            "vblood": {
                "duration": 1,
                "explanation": "Just a tiny sip",
                "g": 240000,
                "lifesteal": 20,
                "name": "Vampire's Blood",
                "s": 9999,
                "set": "vampires",
                "skin": "vblood",
                "skin_a": "vblood",
                "type": "elixir",
                "withdrawal": "withdrawal"
            },
            "vboots": {
                "armor": 14,
                "dex": 3,
                "extra_stat": 2,
                "firesistance": 8,
                "g": 340000,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "name": "Vampiric Boots",
                "resistance": 6,
                "scroll": true,
                "set": "vampires",
                "skin": "vboots",
                "speed": 7,
                "stat": 3,
                "str": 3,
                "tier": 3,
                "type": "shoes",
                "upgrade": {
                    "armor": 5.5,
                    "resistance": 2.75,
                    "speed": 1.125,
                    "stat": 1
                }
            },
            "vcape": {
                "extra_stat": 3,
                "g": 340000,
                "grades": [
                    0,
                    0,
                    8,
                    10
                ],
                "name": "Vampiric Cape",
                "scroll": true,
                "set": "vampires",
                "skin": "vcape",
                "stat": 4,
                "tier": 4,
                "type": "cape",
                "upgrade": {
                    "stat": 1
                }
            },
            "vdagger": {
                "attack": 23.25,
                "cx": {
                    "accent": "#B91A6A",
                    "extension": true,
                    "scale": 0.5
                },
                "damage_type": "physical",
                "g": 9600000,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "lifesteal": 5,
                "name": "Vampiric Dagger",
                "range": 7.25,
                "set": "vampires",
                "skin": "vdagger",
                "tier": 3.25,
                "type": "weapon",
                "upgrade": {
                    "attack": 5.25,
                    "range": 2
                },
                "wtype": "dagger"
            },
            "vgloves": {
                "armor": 28,
                "extra_stat": 2,
                "fzresistance": 4,
                "g": 340000,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "int": 3,
                "name": "Vampiric Gloves",
                "resistance": 14,
                "scroll": true,
                "set": "vampires",
                "skin": "vgloves",
                "stat": 3,
                "str": 3,
                "tier": 3,
                "type": "gloves",
                "upgrade": {
                    "armor": 5.5,
                    "resistance": 5.5,
                    "stat": 1
                }
            },
            "vhammer": {
                "attack": 32,
                "cx": {
                    "accent": "#B91A6A"
                },
                "damage_type": "physical",
                "explosion": 10,
                "g": 9600000,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "lifesteal": 3,
                "name": "Vampiric Hammer",
                "range": 7,
                "set": "vampires",
                "skin": "vhammer",
                "tier": 3,
                "type": "weapon",
                "upgrade": {
                    "attack": 6.2,
                    "explosion": 2,
                    "range": 1
                },
                "wtype": "mace"
            },
            "vitearring": {
                "compound": {
                    "vit": 2
                },
                "g": 38000,
                "grades": [
                    2,
                    5,
                    6,
                    7
                ],
                "name": "Earring of Vitality",
                "skin": "vitearring",
                "type": "earring",
                "vit": 3
            },
            "vitring": {
                "compound": {
                    "vit": 2
                },
                "g": 24000,
                "grades": [
                    3,
                    5,
                    6,
                    7
                ],
                "name": "Ring of Vitality",
                "skin": "vitring",
                "type": "ring",
                "vit": 2
            },
            "vitscroll": {
                "explanation": "Adds Vitality to an armor with a Stat attribute.",
                "g": 8000,
                "multiplier": 1,
                "name": "Vitality Scroll",
                "s": 9999,
                "skin": "vitscroll",
                "stat": "vit",
                "type": "pscroll"
            },
            "vorb": {
                "compound": {
                    "courage": 1
                },
                "courage": 1,
                "g": 12000000,
                "grades": [
                    0,
                    0,
                    6,
                    7
                ],
                "name": "Vampiric Canine Teeth",
                "pcourage": 1,
                "set": "vampires",
                "skin": "vorb",
                "type": "orb"
            },
            "vring": {
                "a": true,
                "armor": 10,
                "compound": {
                    "str": 4
                },
                "courage": 1,
                "dreturn": 9,
                "g": 4200000,
                "grades": [
                    0,
                    0,
                    6,
                    7
                ],
                "lifesteal": 6,
                "name": "Vampiring",
                "pnresistance": 4,
                "set": "vampires",
                "skin": "vring",
                "str": 12,
                "type": "ring",
                "vit": 6
            },
            "vstaff": {
                "armor": 120,
                "attack": 47.5,
                "cx": {
                    "accent": "#B91A6A"
                },
                "damage_type": "magical",
                "g": 9600000,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "name": "Vampiric Staff",
                "range": 63.5,
                "set": "vampires",
                "skin": "vstaff",
                "speed": 8,
                "tier": 3.25,
                "type": "weapon",
                "upgrade": {
                    "attack": 6.125,
                    "range": 4.125
                },
                "wtype": "staff"
            },
            "vsword": {
                "attack": 26.25,
                "cx": {
                    "accent": "#B91A6A"
                },
                "damage_type": "physical",
                "g": 9600000,
                "grades": [
                    0,
                    0,
                    9,
                    10
                ],
                "lifesteal": 5,
                "name": "Vampiric Sword",
                "range": 11.75,
                "set": "vampires",
                "skin": "vsword",
                "speed": 1,
                "tier": 3.25,
                "type": "weapon",
                "upgrade": {
                    "attack": 6.25,
                    "range": 1.5
                },
                "wtype": "sword"
            },
            "wand": {
                "attack": 16,
                "cx": {
                    "accent": "#EA6238",
                    "extension": true,
                    "scale": 0.5
                },
                "damage_type": "magical",
                "g": 48600,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "name": "Wand",
                "projectile": "wandy",
                "range": 30,
                "skin": "wand",
                "tier": 1,
                "type": "weapon",
                "upgrade": {
                    "attack": 3,
                    "range": 6
                },
                "wtype": "wand"
            },
            "warmscarf": {
                "a": true,
                "apiercing": 5,
                "armor": 10,
                "dex": 2,
                "explanation": "Stylish and deadly!",
                "g": 20000,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "int": 2,
                "name": "Warm Scarf",
                "resistance": 10,
                "rpiercing": 5,
                "skin": "warmscarf",
                "str": 2,
                "type": "amulet",
                "upgrade": {
                    "apiercing": 1.25,
                    "rpiercing": 1.25
                }
            },
            "warpvest": {
                "a": 2,
                "ability": "warp",
                "armor": 42,
                "charge": 1,
                "edge": 5,
                "explanation": "Warps space-time. Ancient Computer unlocks only a fraction of it's capabilities. Needs to be recharged in order to initiate a jump.",
                "extra_stat": 0,
                "g": 36400000,
                "grades": [
                    0,
                    0,
                    6,
                    10
                ],
                "name": "Warp Vest",
                "resistance": 28,
                "scroll": true,
                "set": "legends",
                "skin": "warpvest",
                "stat": 1,
                "tier": 3,
                "type": "chest",
                "upgrade": {
                    "armor": 5.5,
                    "dex": 0.64,
                    "for": 1,
                    "int": 0.64,
                    "resistance": 5.5,
                    "stat": 1,
                    "str": 0.64,
                    "vit": 0.64
                }
            },
            "watercore": {
                "g": 800000,
                "name": "Water Core",
                "s": 9999,
                "skin": "watercore",
                "type": "material"
            },
            "wattire": {
                "armor": 8,
                "g": 12000,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "mp": 80,
                "name": "Wanderer's Attire",
                "resistance": 6,
                "scroll": true,
                "set": "wanderers",
                "skin": "wattire",
                "stat": 1,
                "tier": 1,
                "type": "chest",
                "upgrade": {
                    "armor": 0.5,
                    "resistance": 0.5,
                    "stat": 1
                }
            },
            "wbasher": {
                "attack": 26,
                "cx": {
                    "accent": "#AF2131",
                    "large": true
                },
                "damage_type": "physical",
                "g": 4900,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "name": "Wooden Basher",
                "range": 3,
                "skin": "wbasher",
                "tier": 1,
                "type": "weapon",
                "upgrade": {
                    "attack": 6.5,
                    "range": 1
                },
                "wtype": "basher"
            },
            "wblade": {
                "a": true,
                "attack": 48,
                "damage_type": "magical",
                "evasion": 10,
                "exclusive": true,
                "g": 48900000,
                "grades": [
                    0,
                    0,
                    8,
                    10
                ],
                "name": "Ethereal Blade of Destiny",
                "projectile": "wmomentum",
                "range": 30,
                "rpiercing": 40,
                "skin": "wblade",
                "tier": 4,
                "type": "weapon",
                "upgrade": {
                    "attack": 8,
                    "evasion": 1,
                    "range": 2,
                    "rpiercing": 16
                },
                "wtype": "wblade"
            },
            "wbook0": {
                "compound": {
                    "int": 5
                },
                "cx": {
                    "extension": true,
                    "scale": 0.5
                },
                "g": 12000,
                "grades": [
                    4,
                    5,
                    6,
                    7
                ],
                "int": 6,
                "name": "Book of Knowledge",
                "skin": "wbook0",
                "tier": 1,
                "type": "source"
            },
            "wbook1": {
                "compound": {
                    "int": 5,
                    "reflection": 1,
                    "vit": 2
                },
                "cx": {
                    "extension": true,
                    "scale": 0.5
                },
                "g": 960000,
                "grades": [
                    0,
                    2,
                    6,
                    7
                ],
                "int": 16,
                "name": "Book of Secrets",
                "reflection": 2,
                "skin": "wbook1",
                "tier": 2,
                "type": "source",
                "vit": 6
            },
            "wbookhs": {
                "compound": {
                    "dex": 6,
                    "resistance": 30,
                    "vit": 6
                },
                "cx": {
                    "extension": true,
                    "scale": 0.5
                },
                "dex": 16,
                "g": 960000,
                "grades": [
                    0,
                    2,
                    6,
                    7
                ],
                "name": "Book of Cheer",
                "resistance": 120,
                "set": "holidays",
                "skin": "wbookhs",
                "tier": 2,
                "type": "source",
                "vit": 16
            },
            "wbreeches": {
                "armor": 7,
                "g": 15600,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "name": "Wanderer's Breeches",
                "resistance": 4,
                "scroll": true,
                "set": "wanderers",
                "skin": "wbreeches",
                "speed": 1,
                "stat": 1,
                "tier": 1,
                "type": "pants",
                "upgrade": {
                    "armor": 0.5,
                    "resistance": 0.5,
                    "stat": 1
                }
            },
            "wcap": {
                "armor": 5,
                "g": 6400,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "hp": 120,
                "name": "Wanderer's Cap",
                "resistance": 6,
                "scroll": true,
                "set": "wanderers",
                "skin": "wcap",
                "stat": 1,
                "tier": 1,
                "type": "helmet",
                "upgrade": {
                    "armor": 0.5,
                    "resistance": 0.5,
                    "stat": 1
                }
            },
            "weaponbox": {
                "a": true,
                "e": 1,
                "explanation": "Can be exchanged for a random, rare weapon.",
                "g": 320000,
                "name": "Weapon Box",
                "s": 9999,
                "skin": "weaponbox",
                "type": "box"
            },
            "weaver": {
                "ability": "weave",
                "attack": 24.5,
                "attr0": 4,
                "attr1": 1,
                "cx": {
                    "accent": "#AF2131"
                },
                "damage_type": "physical",
                "g": 36000,
                "grades": [
                    4,
                    7,
                    10,
                    12
                ],
                "name": "Bow of the Weaver",
                "projectile": "arrow",
                "range": 62.5,
                "skin": "weaver",
                "tier": 1.75,
                "type": "weapon",
                "upgrade": {
                    "attack": 4.6,
                    "attr0": 2,
                    "attr1": 0.2,
                    "range": 8.166666666666668
                },
                "wtype": "bow"
            },
            "wgloves": {
                "armor": 6,
                "g": 6800,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "name": "Wanderer's Gloves",
                "resistance": 3,
                "scroll": true,
                "set": "wanderers",
                "skin": "wgloves",
                "stat": 1,
                "tier": 1,
                "type": "gloves",
                "upgrade": {
                    "armor": 0.5,
                    "resistance": 0.5,
                    "stat": 1
                }
            },
            "whiskey": {
                "apiercing": 500,
                "duration": 0.1,
                "g": 120000,
                "miss": 50,
                "name": "Whiskey On The Rocks",
                "s": 9999,
                "skin": "whiskey",
                "skin_a": "whiskey",
                "speed": -12,
                "type": "elixir"
            },
            "whiteegg": {
                "action": "THROW!",
                "g": 5,
                "name": "White Egg",
                "onclick": "socket.emit('throw',{num:locate_item('confetti'),x:character.real_x,y:character.real_y}); push_deferred('throw')",
                "s": 2000,
                "skin": "whiteegg",
                "throw": true,
                "type": "material"
            },
            "wine": {
                "duration": 0.1,
                "g": 40000,
                "miss": 32,
                "name": "Red Wine",
                "s": 9999,
                "skin": "wine",
                "skin_a": "wine",
                "speed": -12,
                "type": "elixir",
                "vit": 32
            },
            "wingedboots": {
                "armor": 6,
                "credit": "Pluet",
                "frequency": 3,
                "g": 150000,
                "grades": [
                    4,
                    8,
                    10,
                    12
                ],
                "name": "Winged Boots",
                "resistance": 20,
                "scroll": true,
                "set": "swift",
                "skin": "wingedboots",
                "speed": 8,
                "stat": 1,
                "tier": 1.5,
                "type": "shoes",
                "upgrade": {
                    "armor": 1.5,
                    "frequency": 0.625,
                    "resistance": 1.5,
                    "speed": 1,
                    "stat": 1
                }
            },
            "woodensword": {
                "a": true,
                "attack": 20,
                "cx": {
                    "accent": "#155E0C"
                },
                "damage_type": "physical",
                "dex": 20,
                "g": 224000,
                "grades": [
                    0,
                    7,
                    10,
                    12
                ],
                "name": "Wooden Sword",
                "range": 8,
                "skin": "woodensword",
                "tier": 2,
                "type": "weapon",
                "upgrade": {
                    "attack": 5,
                    "dex": 2,
                    "range": 1.5
                },
                "wtype": "sword"
            },
            "wshield": {
                "armor": 40,
                "cx": {
                    "accent": "#3D923A"
                },
                "g": 4800,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "name": "Wooden Shield",
                "resistance": 15,
                "skin": "wshield",
                "stat": 2,
                "tier": 1,
                "type": "shield",
                "upgrade": {
                    "armor": 8,
                    "resistance": 5
                }
            },
            "wshoes": {
                "armor": 3,
                "g": 24200,
                "grades": [
                    7,
                    9,
                    10,
                    12
                ],
                "name": "Wanderer's Shoes",
                "scroll": true,
                "set": "wanderers",
                "skin": "wshoes",
                "speed": 5,
                "stat": 1,
                "tier": 1,
                "type": "shoes",
                "upgrade": {
                    "armor": 0.5,
                    "speed": 0.625,
                    "stat": 1
                }
            },
            "x0": {
                "a": true,
                "event": true,
                "explanation": "A unique component of a curious puzzle",
                "g": 4000,
                "name": "Quantum Piece",
                "s": 9999,
                "skin": "x0",
                "type": "quest"
            },
            "x1": {
                "a": true,
                "event": true,
                "explanation": "A unique component of a curious puzzle",
                "g": 4000,
                "name": "Quantum Piece",
                "s": 9999,
                "skin": "x1",
                "type": "quest"
            },
            "x2": {
                "a": true,
                "event": true,
                "explanation": "A unique component of a curious puzzle",
                "g": 4000,
                "name": "Quantum Piece",
                "s": 9999,
                "skin": "x2",
                "type": "quest"
            },
            "x3": {
                "a": true,
                "event": true,
                "explanation": "A unique component of a curious puzzle",
                "g": 4000,
                "name": "Quantum Piece",
                "s": 9999,
                "skin": "x3",
                "type": "quest"
            },
            "x4": {
                "a": true,
                "event": true,
                "explanation": "A unique component of a curious puzzle",
                "g": 4000,
                "name": "Quantum Piece",
                "s": 9999,
                "skin": "x4",
                "type": "quest"
            },
            "x5": {
                "a": true,
                "event": true,
                "explanation": "A unique component of a curious puzzle",
                "g": 4000,
                "name": "Quantum Piece",
                "s": 9999,
                "skin": "x5",
                "type": "quest"
            },
            "x6": {
                "a": true,
                "event": true,
                "explanation": "A unique component of a curious puzzle",
                "g": 4000,
                "name": "Quantum Piece",
                "s": 9999,
                "skin": "x6",
                "type": "quest"
            },
            "x7": {
                "a": true,
                "event": true,
                "explanation": "A unique component of a curious puzzle",
                "g": 4000,
                "name": "Quantum Piece",
                "s": 9999,
                "skin": "x7",
                "type": "quest"
            },
            "x8": {
                "a": true,
                "event": true,
                "explanation": "A unique component of a curious puzzle",
                "g": 4000,
                "name": "Quantum Piece",
                "s": 9999,
                "skin": "x8",
                "type": "quest"
            },
            "xarmor": {
                "a": 2,
                "armor": 54,
                "extra_stat": 3,
                "g": 4800000,
                "grades": [
                    0,
                    0,
                    8,
                    10
                ],
                "name": "Darkforge Armor",
                "resistance": 36,
                "scroll": true,
                "set": "wt4",
                "skin": "xarmor",
                "stat": 4,
                "tier": 4,
                "type": "chest",
                "upgrade": {
                    "armor": 7.5,
                    "resistance": 7.5,
                    "stat": 1
                }
            },
            "xboots": {
                "a": 2,
                "armor": 18,
                "extra_stat": 3,
                "g": 12400000,
                "grades": [
                    0,
                    0,
                    8,
                    10
                ],
                "name": "Darkforge Boots",
                "resistance": 8,
                "scroll": true,
                "set": "wt4",
                "skin": "xboots",
                "speed": 8,
                "stat": 4,
                "tier": 4,
                "type": "shoes",
                "upgrade": {
                    "armor": 7.5,
                    "resistance": 3.75,
                    "speed": 1.375,
                    "stat": 1
                }
            },
            "xbox": {
                "a": true,
                "e": 1,
                "explanation": "Finally... They all came together. A unique gift lies within this box. Take it to Xyn to be unlocked.",
                "g": 1000000,
                "name": "Xmas Box",
                "s": 9999,
                "skin": "xbox",
                "type": "quest"
            },
            "xgloves": {
                "a": 2,
                "armor": 36,
                "extra_stat": 3,
                "g": 3400000,
                "grades": [
                    0,
                    0,
                    8,
                    10
                ],
                "name": "Darkforge Gloves",
                "resistance": 18,
                "scroll": true,
                "set": "wt4",
                "skin": "xgloves",
                "stat": 4,
                "tier": 4,
                "type": "gloves",
                "upgrade": {
                    "armor": 7.5,
                    "resistance": 7.5,
                    "stat": 1
                }
            },
            "xhelmet": {
                "a": 2,
                "armor": 32,
                "extra_stat": 3,
                "g": 3200000,
                "grades": [
                    0,
                    0,
                    8,
                    10
                ],
                "name": "Darkforge Helmet",
                "protection": true,
                "resistance": 36,
                "scroll": true,
                "set": "wt4",
                "skin": "xhelmet",
                "stat": 4,
                "tier": 4,
                "type": "helmet",
                "upgrade": {
                    "armor": 7.5,
                    "resistance": 7.5,
                    "stat": 1
                },
                "xscroll": true
            },
            "xmace": {
                "attack": 27.5,
                "cx": {
                    "accent": "#AF2131"
                },
                "damage_type": "physical",
                "g": 37000,
                "grades": [
                    0,
                    6,
                    10,
                    12
                ],
                "name": "Merry Mace",
                "range": 6.25,
                "set": "holidays",
                "skin": "xmace",
                "stun": 2,
                "tier": 2.25,
                "type": "weapon",
                "upgrade": {
                    "attack": 5.375,
                    "range": 1
                },
                "wtype": "mace"
            },
            "xmashat": {
                "a": true,
                "armor": 10,
                "g": 13200,
                "grades": [
                    4,
                    8,
                    10,
                    12
                ],
                "name": "Xmas Hat",
                "resistance": 11,
                "scroll": true,
                "set": "holidays",
                "skin": "xmashat",
                "stat": 1,
                "tier": 1.5,
                "type": "helmet",
                "upgrade": {
                    "armor": 1.5,
                    "resistance": 1.5,
                    "stat": 1
                },
                "vit": 2,
                "xcx": [
                    "hat100"
                ]
            },
            "xmaspants": {
                "a": true,
                "armor": 14,
                "g": 17800,
                "grades": [
                    4,
                    8,
                    10,
                    12
                ],
                "name": "Xmas Pants",
                "resistance": 8,
                "scroll": true,
                "set": "holidays",
                "skin": "xmaspants",
                "stat": 1,
                "tier": 1.5,
                "type": "pants",
                "upgrade": {
                    "armor": 1.5,
                    "resistance": 1.5,
                    "stat": 1
                },
                "vit": 2
            },
            "xmasshoes": {
                "a": true,
                "armor": 6,
                "g": 36000,
                "grades": [
                    4,
                    8,
                    10,
                    12
                ],
                "name": "Xmas Shoes",
                "scroll": true,
                "set": "holidays",
                "skin": "xmasshoes",
                "speed": 6,
                "stat": 1,
                "tier": 1.5,
                "type": "shoes",
                "upgrade": {
                    "armor": 1.5,
                    "speed": 0.75,
                    "stat": 1
                },
                "vit": 2
            },
            "xmassweater": {
                "a": true,
                "armor": 16,
                "evasion": 0.5,
                "explanation": "Such a beautiful vest. But for some reason, every time you wear this, people seem to avoid you.",
                "g": 16000,
                "grades": [
                    4,
                    8,
                    10,
                    12
                ],
                "name": "Xmas Sweater",
                "resistance": 11,
                "scroll": true,
                "set": "holidays",
                "skin": "xmassweater",
                "stat": 1,
                "tier": 1.5,
                "type": "chest",
                "upgrade": {
                    "armor": 1.5,
                    "evasion": 0.25,
                    "resistance": 1.5,
                    "stat": 1
                }
            },
            "xpants": {
                "a": 2,
                "armor": 45,
                "extra_stat": 3,
                "g": 7800000,
                "grades": [
                    0,
                    0,
                    8,
                    10
                ],
                "name": "Darkforge Underarmor",
                "resistance": 27,
                "scroll": true,
                "set": "wt4",
                "skin": "xpants",
                "stat": 4,
                "tier": 4,
                "type": "pants",
                "upgrade": {
                    "armor": 7.5,
                    "resistance": 7.5,
                    "stat": 1
                }
            },
            "xpbooster": {
                "compound": {
                    "xp": 12
                },
                "days": 30,
                "explanation": "Increases experience gain. Needs to be activated. Can be shifted into other boosters.",
                "g": 79840000,
                "gain": "xp",
                "grades": [
                    0,
                    10,
                    6,
                    7
                ],
                "name": "XP Booster",
                "skin": "xpbooster",
                "skin_a": "xpbooster_a",
                "type": "booster",
                "xp": 20
            },
            "xpscroll": {
                "explanation": "Adds XP bonus to an armor with a Stat attribute.",
                "g": 8000,
                "multiplier": 0.5,
                "name": "XP Scroll",
                "s": 9999,
                "skin": "xpscroll",
                "stat": "xp",
                "type": "pscroll"
            },
            "xptome": {
                "explanation": "Significantly reduces experience loss on death. If the owner is defeated by another player, the victor receives a portion of the Tome's cost.",
                "g": 3200000,
                "name": "Tome of Protection",
                "reward": 2,
                "s": 9999,
                "skin": "xptome",
                "type": "tome"
            },
            "xshield": {
                "crit": 1,
                "cx": {
                    "accent": "#4D828F"
                },
                "dex": 6,
                "evasion": 4,
                "explanation": "A metallurgical failure but a magical marvel",
                "g": 1200000,
                "grades": [
                    0,
                    0,
                    10,
                    12
                ],
                "int": 4,
                "name": "Shield X",
                "resistance": 24,
                "skin": "xshield",
                "speed": 5,
                "str": 8,
                "tier": 3,
                "type": "shield",
                "upgrade": {
                    "resistance": 6,
                    "str": 1
                },
                "xp": 8
            },
            "xshot": {
                "duration": 1e-12,
                "explanation": "Increases your luck in gambling a hundredfold! Warning: Some establishments might screen you before taking a bet. Can be detected in your blood for 12 hours",
                "g": 1,
                "name": "X-Shot",
                "s": 40,
                "skin": "xshot",
                "skin_a": "xshot",
                "type": "elixir",
                "withdrawal": "xshotted"
            },
            "zapper": {
                "a": true,
                "ability": "zapperzap",
                "compound": {
                    "int": 3,
                    "rpiercing": 4
                },
                "g": 6400000,
                "grades": [
                    0,
                    0,
                    1,
                    3
                ],
                "int": 10,
                "name": "The Zapper",
                "resistance": 30,
                "rpiercing": 10,
                "skin": "trigger",
                "str": 5,
                "type": "ring"
            }
        }
    }
    expect(G_items).toBeDefined()
})