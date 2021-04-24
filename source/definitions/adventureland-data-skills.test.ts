import { GData2 } from "./adventureland-data"

/** 
 * The following is from http://adventure.land/data.js, version 666 (2021-04-20)
 * It is used to confirm type correctness
 */

test("G.skills type validation", async () => {
    const G_skills: Pick<GData2, "skills"> = {
        "skills": {
            "use_town": {
                "explanation": "Teleports you to the center of the map.",
                "cooldown": 0,
                "type": "ability",
                "name": "Town",
                "skin": "use_town"
            },
            "fishing": {
                "explanation": "Swing your rod and catch some fish!",
                "cooldown": 2880000,
                "skin": "skill_fishing",
                "class": [
                    "merchant"
                ],
                "name": "Fishing",
                "level": 16,
                "wtype": [
                    "rod"
                ],
                "persistent": true,
                "range": 15,
                "mp": 120,
                "type": "skill"
            },
            "regen_hp": {
                "name": "Regenerate HP",
                "type": "ability",
                "explanation": "Regenerate 50 HP without using potions.",
                "share": "use_hp",
                "skin": "regen_hp",
                "cooldown_multiplier": 2
            },
            "gm": {
                "explanation": "Jump, Jail, Mute, Use Any Skill",
                "type": "gm",
                "name": "GM Abilities",
                "skin": "gm"
            },
            "darkblessing": {
                "explanation": "Increases damage by 25% for the duration.",
                "cooldown": 60000,
                "skin": "skill_dbuff",
                "duration": 8000,
                "class": [
                    "priest"
                ],
                "condition": "darkblessing",
                "name": "Dark Blessing",
                "level": 70,
                "range": 600,
                "mp": 900,
                "type": "skill"
            },
            "move_up": {
                "ui": false,
                "explanation": "Moves the character upwards",
                "type": "utility",
                "name": "Move Up",
                "skin": "up"
            },
            "snippet": {
                "code": true,
                "name": "Snippet",
                "explanation": "Maps a code snippet to a keypress.",
                "skins": [
                    "run_snippet0",
                    "run_snippet1",
                    "run_snippet2"
                ],
                "skin": "run_snippet1",
                "type": "utility"
            },
            "dampening_aura": {
                "passive": true,
                "hostile": true,
                "name": "Dampening",
                "skin": "condition_neutral",
                "explanation": "Prevents teleports",
                "type": "monster",
                "condition": "dampened",
                "aura": true
            },
            "phaseout": {
                "consume": "shadowstone",
                "explanation": "Absorb a shadow stone to phase yourself out from this universe.",
                "cooldown": 4000,
                "skin": "skill_phaseout",
                "duration": 5000,
                "class": [
                    "priest"
                ],
                "condition": "phasedout",
                "name": "Phase Out",
                "level": 64,
                "mp": 200,
                "type": "skill"
            },
            "alchemy": {
                "explanation": "Dangerous skill, use with caution! Converts your firstfound item into pure gold!",
                "output": 0.8,
                "levels": [
                    [
                        40,
                        0.8
                    ],
                    [
                        50,
                        0.86
                    ],
                    [
                        60,
                        0.92
                    ],
                    [
                        70,
                        1.0
                    ],
                    [
                        80,
                        1.1
                    ],
                    [
                        90,
                        1.16
                    ],
                    [
                        100,
                        1.2
                    ]
                ],
                "skin": "skill_alchemy",
                "class": [
                    "mage"
                ],
                "party": true,
                "name": "Alchemy",
                "level": 40,
                "cooldown": 8000,
                "mp": 347,
                "action": "rate",
                "variance": 0.2,
                "type": "skill"
            },
            "partyheal": {
                "explanation": "Heals all the party members.",
                "cooldown": 200,
                "skin": "skill_pheal",
                "class": [
                    "priest"
                ],
                "name": "Party Heal",
                "output": 400,
                "levels": [
                    [
                        0,
                        500
                    ],
                    [
                        60,
                        600
                    ],
                    [
                        72,
                        720
                    ],
                    [
                        80,
                        800
                    ]
                ],
                "mp": 400,
                "action": "heal",
                "party": true,
                "type": "skill"
            },
            "3shot": {
                "explanation": "Hits 3 targets at once! Deals 0.7X damage to each target.",
                "share": "attack",
                "skin": "skill_3shot",
                "targets": true,
                "hostile": true,
                "name": "3-Shot",
                "level": 60,
                "type": "skill",
                "wtype": [
                    "bow",
                    "crossbow"
                ],
                "damage_multiplier": 0.7,
                "class": [
                    "ranger"
                ],
                "mp": 300,
                "cooldown_multiplier": 1
            },
            "toggle_run_code": {
                "ui": false,
                "name": "Engage/Disengage Code",
                "skin": "run_code"
            },
            "stomp": {
                "explanation": "Use your basher to Stomp the ground to Stun enemies nearby!",
                "cooldown": 24000,
                "skin": "skill_stomp",
                "duration": 3200,
                "class": [
                    "warrior"
                ],
                "hostile": true,
                "name": "Stomp",
                "level": 52,
                "wtype": "basher",
                "range": 400,
                "mp": 120,
                "type": "skill"
            },
            "multi_freeze": {
                "name": "Multi Freeze",
                "explanation": "Hurl a frostball at everyone who dared attack him and freeze them!",
                "ui": true,
                "skin": "essenceoffrost",
                "type": "monster",
                "hostile": true
            },
            "stop": {
                "explanation": "Stops your character. Cancels all channeling abilities and active skills.",
                "cooldown": 0,
                "type": "ability",
                "name": "Stop",
                "skin": "stop_g"
            },
            "snowball": {
                "name": "Snowball",
                "explanation": "Throw a snowball at someone!",
                "cooldown": 180,
                "mp": 120,
                "skin": "snowball",
                "type": "skill",
                "inventory": [
                    "snowball"
                ]
            },
            "shadowstrike": {
                "consume": "shadowstone",
                "explanation": "Use a shadow stone to strike a random enemy in a parallel universe!",
                "cooldown": 1200,
                "skin": "skill_shadowstrike",
                "class": [
                    "rogue"
                ],
                "hostile": true,
                "name": "Shadow Strike",
                "level": 70,
                "range": 360,
                "mp": 320,
                "type": "skill"
            },
            "massproduction": {
                "cooldown": 50,
                "name": "Mass Production",
                "skin": "skill_massproduction",
                "explanation": "Adds a 1-time use buff that speeds up the next upgrade or compound by 50%. The buff expires in 10 seconds if not used.",
                "level": 30,
                "type": "skill",
                "class": [
                    "merchant"
                ],
                "condition": "massproduction",
                "mp": 20
            },
            "pure_eval": {
                "code": true,
                "name": "Pure Eval",
                "explanation": "[Advanced] Maps a code snippet to be run directly inside the game, rather than using CODE. (Not to be confused with the text command, /eval, which evals inside the Code iframe)",
                "skins": [
                    "run_eval0",
                    "run_eval1",
                    "run_eval2"
                ],
                "skin": "run_eval0",
                "type": "utility"
            },
            "cburst": {
                "explanation": "A skill for experienced mages. Allows you to control and channel your most powerful ability.",
                "cooldown": 240,
                "skin": "skill_cburst",
                "class": [
                    "mage"
                ],
                "hostile": true,
                "ratio": 0.5,
                "name": "Controlled Mana Burst",
                "level": 75,
                "list": true,
                "mp": 80,
                "type": "skill"
            },
            "use_mp": {
                "explanation": "Uses an MP potion from your inventory. If there are multiple potions, the last one is used. If there are no potions, your character regenerates a small amount of MP with a high cooldown.",
                "cooldown": 2000,
                "type": "ability",
                "name": "Use MP Potion",
                "skin": "use_mp"
            },
            "burst": {
                "explanation": "Converts your entire mana pool to pure damage. Deals 0.555 pure damage for each MP.",
                "cooldown": 6000,
                "damage_type": "pure",
                "skin": "skill_burst",
                "class": [
                    "mage"
                ],
                "name": "Mana Burst",
                "ratio": 0.555,
                "target": true,
                "hostile": true,
                "mp": 0,
                "type": "skill"
            },
            "agitate": {
                "range": 320,
                "cooldown": 2200,
                "name": "Agitate",
                "skin": "skill_agitate",
                "explanation": "Taunts all nearby monsters.",
                "level": 68,
                "type": "skill",
                "class": [
                    "warrior"
                ],
                "hostile": true,
                "mp": 420
            },
            "poisonarrow": {
                "consume": "poison",
                "explanation": "Fire a single low damage but poison coated arrow at your opponent.",
                "cooldown": 300,
                "skin": "skill_poisonarrow",
                "class": [
                    "ranger"
                ],
                "name": "Poison Arrow",
                "target": true,
                "wtype": [
                    "bow",
                    "crossbow"
                ],
                "damage": 200,
                "hostile": true,
                "mp": 360,
                "type": "skill"
            },
            "mentalburst": {
                "explanation": "Channel your mental abilities for a magical blow. If the target is defeated, the damage dealt is converted to mana.",
                "hostile": true,
                "cooldown": 900,
                "damage_type": "magical",
                "skin": "skill_mentalburst",
                "class": [
                    "rogue"
                ],
                "target": true,
                "requirements": {
                    "int": 64
                },
                "name": "Mental Burst",
                "range_multiplier": 1.2,
                "damage_multiplier": 0.6,
                "range_bonus": 32,
                "warning": "Highly unbalanced skill, could get nerfed or modified",
                "mp": 180,
                "type": "skill"
            },
            "mcourage": {
                "cooldown": 2000,
                "name": "Merchant's Courage",
                "skin": "skill_mcourage",
                "explanation": "When you sense danger, you know what to do...",
                "level": 70,
                "type": "skill",
                "class": [
                    "merchant"
                ],
                "condition": "mcourage",
                "mp": 2400
            },
            "use_hp": {
                "explanation": "Uses an HP potion from your inventory. If there are multiple potions, the last one is used. If there are no potions, your character regenerates a small amount of HP with a high cooldown.",
                "cooldown": 2000,
                "type": "ability",
                "name": "Use HP Potion",
                "skin": "use_hp"
            },
            "curse": {
                "explanation": "Cursed opponents receive 20% more damage, deal 20% less damage and they slow down by 20.",
                "cooldown": 5000,
                "skin": "skill_curse",
                "duration": 5000,
                "class": [
                    "priest"
                ],
                "condition": "cursed",
                "name": "Curse",
                "target": true,
                "hostile": true,
                "mp": 400,
                "type": "skill"
            },
            "5shot": {
                "explanation": "Hits 5 targets at once! Deals 0.5X damage to each target.",
                "share": "attack",
                "skin": "skill_5shot",
                "targets": true,
                "hostile": true,
                "name": "5-Shot",
                "level": 75,
                "type": "skill",
                "wtype": [
                    "bow",
                    "crossbow"
                ],
                "damage_multiplier": 0.5,
                "class": [
                    "ranger"
                ],
                "mp": 420,
                "cooldown_multiplier": 1
            },
            "move_down": {
                "ui": false,
                "explanation": "Moves the character downwards",
                "type": "utility",
                "name": "Move Down",
                "skin": "down"
            },
            "esc": {
                "ui": false,
                "explanation": "Calls the esc_pressed() function inside the game. Major functionality.",
                "type": "utility",
                "name": "ESC",
                "skin": "esc"
            },
            "power": {
                "slot": [
                    [
                        "gloves",
                        "powerglove"
                    ]
                ],
                "cooldown": 500,
                "name": "Power",
                "skin": "powerglove",
                "explanation": "Unleash the power",
                "type": "skill",
                "condition": "power",
                "mp": 320
            },
            "healing": {
                "explanation": "Heals an ally or self",
                "type": "monster",
                "name": "Healing"
            },
            "multi_burn": {
                "name": "Multi Burn",
                "explanation": "Hurl a fireball at everyone who dared attack him and burn them!",
                "ui": true,
                "skin": "essenceoffire",
                "type": "monster",
                "hostile": true
            },
            "selfheal": {
                "cooldown": 6000,
                "levels": [
                    [
                        0,
                        500
                    ],
                    [
                        60,
                        600
                    ],
                    [
                        72,
                        720
                    ],
                    [
                        80,
                        800
                    ]
                ],
                "name": "Heal",
                "skin": "skill_selfheal",
                "action": "heal",
                "output": 400,
                "explanation": "Heal yourself",
                "type": "skill",
                "class": [
                    "paladin"
                ],
                "mp": 20
            },
            "throw": {
                "code": "range=character.level+200",
                "nprop": [
                    "attack",
                    "armor"
                ],
                "explanation": "Terrified? Just throw whatever you can find at your opponent!",
                "cooldown": 400,
                "skin": "skill_throw",
                "class": [
                    "merchant"
                ],
                "hostile": true,
                "name": "Throw Stuff",
                "level": 60,
                "positive": [
                    "essenceoflife"
                ],
                "negative": [
                    "essenceoffire"
                ],
                "range": 200,
                "mp": 200,
                "type": "skill"
            },
            "invis": {
                "name": "Assassin's Smoke",
                "explanation": "Disappear into the shadows. Deal 1.25X damage when you sneak up on an enemy. Cooldown starts when you re-appear.",
                "skin": "skill_invis",
                "type": "skill",
                "class": [
                    "rogue"
                ],
                "reuse_cooldown": 12000
            },
            "cleave": {
                "explanation": "Swing your axe in a flurry to damage all enemies nearby!",
                "cooldown": 1200,
                "skin": "skill_cleave",
                "class": [
                    "warrior"
                ],
                "hostile": true,
                "name": "Cleave",
                "level": 52,
                "wtype": [
                    "axe",
                    "scythe"
                ],
                "range": 160,
                "mp": 720,
                "type": "skill"
            },
            "self_healing": {
                "explanation": "Periodical self healing",
                "type": "monster",
                "name": "Healing"
            },
            "4fingers": {
                "explanation": "Use the ancient arts to send the target to a deep meditation state. Just several taps to key chakra points does the job!",
                "cooldown": 40000,
                "skin": "skill_4fingers",
                "duration": 5000,
                "class": [
                    "ranger"
                ],
                "condition": "fingered",
                "target": true,
                "name": "4 Finger Technique",
                "level": 64,
                "range": 120,
                "hostile": true,
                "mp": 260,
                "type": "skill",
                "monsters": false
            },
            "charm": {
                "slot": [
                    [
                        "orb",
                        "charmer"
                    ]
                ],
                "cooldown": 60000,
                "name": "Charm",
                "skin": "charmer",
                "explanation": "Charm a monster [%]",
                "type": "skill",
                "hostile": true,
                "mp": 40
            },
            "scare": {
                "slot": [
                    [
                        "orb",
                        "jacko"
                    ]
                ],
                "name": "Scare",
                "explanation": "Activate your Jack-o Lantern to scare away monsters targeting you!",
                "cooldown": 5000,
                "mp": 50,
                "skin": "skill_scare",
                "type": "skill"
            },
            "emotion": {
                "explanation": "Show a random emotion you've unlocked!",
                "type": "utility",
                "name": "Emotion",
                "skin": "run_emotion"
            },
            "move_right": {
                "ui": false,
                "explanation": "Moves the character rightwards",
                "type": "utility",
                "name": "Move Right",
                "skin": "right"
            },
            "blink": {
                "name": "Blink",
                "explanation": "Teleport to a nearby location.",
                "cooldown": 1200,
                "mp": 1600,
                "skin": "skill_blink",
                "type": "skill",
                "class": [
                    "mage"
                ]
            },
            "mluck": {
                "explanation": "Buff a target to increase their luck. 2% chance for you to receive a duplicate of their looted items!",
                "cooldown": 100,
                "skin": "buff_luck",
                "class": [
                    "merchant"
                ],
                "condition": "mluck",
                "name": "Merchant's Luck",
                "target": true,
                "level": 40,
                "range": 320,
                "mp": 10,
                "type": "skill"
            },
            "tangle": {
                "slot": [
                    [
                        "mainhand",
                        "heartwood"
                    ],
                    [
                        "offhand",
                        "heartwood"
                    ]
                ],
                "cooldown": 60000,
                "name": "Tangle",
                "skin": "heartwood",
                "explanation": "Unleash the contained powers of nature to hinder an opponent.",
                "type": "skill",
                "hostile": true,
                "mp": 40
            },
            "zap": {
                "explanation": "Zaps you with a pure damage ray",
                "type": "monster",
                "name": "Zap"
            },
            "charge": {
                "cooldown": 40000,
                "name": "Charge",
                "skin": "skill_charge",
                "duration": 3200,
                "explanation": "Gain 30 Speed for a short duration.",
                "type": "skill",
                "class": [
                    "warrior"
                ],
                "mp": 0
            },
            "move_left": {
                "ui": false,
                "explanation": "Moves the character leftwards",
                "type": "utility",
                "name": "Move Left",
                "skin": "left"
            },
            "interact": {
                "ui": false,
                "explanation": "Interact with the nearest game entity, a door, doorway, or NPC.",
                "type": "utility",
                "name": "Interact",
                "skin": "interact"
            },
            "revive": {
                "target": true,
                "range": 240,
                "cooldown": 200,
                "consume": "essenceoflife",
                "name": "Revive!",
                "skin": "skill_revive",
                "explanation": "1) Heal a fellow adventurer to full hp. 2) Revive using an essence of life.",
                "type": "skill",
                "class": [
                    "priest"
                ],
                "mp": 500
            },
            "attack": {
                "target": true,
                "explanation": "Attack the target",
                "name": "Attack",
                "skin": "attack",
                "type": "ability",
                "hostile": true
            },
            "quickpunch": {
                "explanation": "Use your agility to quickly punch your opponent between your devastating attacks!",
                "cooldown": 250,
                "skin": "skill_quickpunch",
                "class": [
                    "rogue"
                ],
                "name": "Quick Punch",
                "target": true,
                "wtype": "fist",
                "range_multiplier": 1,
                "damage_multiplier": 0.25,
                "hostile": true,
                "mp": 240,
                "type": "skill"
            },
            "mining": {
                "explanation": "Use your pickaxe to mine some mines!",
                "cooldown": 7440000,
                "skin": "skill_mining",
                "class": [
                    "merchant"
                ],
                "name": "Mining",
                "level": 16,
                "wtype": [
                    "pickaxe"
                ],
                "persistent": true,
                "range": 15,
                "mp": 120,
                "type": "skill"
            },
            "rspeed": {
                "explanation": "Buff a target to increase their speed.",
                "cooldown": 100,
                "skin": "buff_speed",
                "class": [
                    "rogue"
                ],
                "condition": "rspeed",
                "name": "Rogue Swiftness",
                "target": true,
                "level": 40,
                "range": 320,
                "mp": 320,
                "type": "skill"
            },
            "heal": {
                "name": "Heal",
                "skin": "heal",
                "cooldown_multiplier": 1,
                "explanation": "Heal the target",
                "share": "attack",
                "type": "ability",
                "class": [
                    "priest"
                ],
                "target": true
            },
            "stone": {
                "explanation": "Looking into his eye for too long turns you to stone!",
                "type": "monster",
                "name": "Stone",
                "condition": "stoned",
                "hostile": true
            },
            "warp": {
                "slot": [
                    [
                        "chest",
                        "warpvest"
                    ]
                ],
                "name": "Warp",
                "explanation": "Warp space to jump into any location",
                "cooldown": 200,
                "mp": 40,
                "skin": "warpvest",
                "type": "skill"
            },
            "xpower": {
                "slot": [
                    [
                        "gloves",
                        "goldenpowerglove"
                    ]
                ],
                "cooldown": 500,
                "name": "Power",
                "skin": "goldenpowerglove",
                "explanation": "Unleash the power",
                "type": "skill",
                "condition": "xpower",
                "mp": 320
            },
            "entangle": {
                "consume": "essenceofnature",
                "explanation": "Unleash the contained powers of nature to hinder an opponent.",
                "cooldown": 40000,
                "skin": "skill_entangle",
                "duration": 5000,
                "class": [
                    "mage"
                ],
                "condition": "tangled",
                "target": true,
                "name": "Entangle",
                "level": 72,
                "range": 480,
                "hostile": true,
                "mp": 360,
                "type": "skill",
                "monsters": true
            },
            "mshield": {
                "toggle": true,
                "cooldown": 0,
                "name": "Mana Shield",
                "skin": "skill_mshield",
                "explanation": "Create a magical shield around yourself to absorb damage [Toggle]",
                "type": "skill",
                "class": [
                    "paladin"
                ],
                "condition": "mshield",
                "mp": 0
            },
            "huntersmark": {
                "cooldown": 10000,
                "target": true,
                "name": "Hunter's Mark",
                "skin": "skill_huntersmark",
                "duration": 10000,
                "explanation": "Mark an opponent for death, prevent them from stealthing away and increase damage done by 10%",
                "type": "skill",
                "class": [
                    "ranger"
                ],
                "hostile": true,
                "mp": 240
            },
            "warcry": {
                "explanation": "Motivate your allies to fight!",
                "cooldown": 60000,
                "skin": "skill_warcry",
                "duration": 8000,
                "class": [
                    "warrior"
                ],
                "condition": "warcry",
                "name": "War Cry",
                "level": 70,
                "range": 600,
                "mp": 320,
                "type": "skill"
            },
            "hardshell": {
                "cooldown": 16000,
                "name": "Hard Shell",
                "skin": "skill_hardshell",
                "duration": 8000,
                "explanation": "Use everything at your disposal to protect yourself from physical attacks for a short duration.",
                "level": 60,
                "type": "skill",
                "class": [
                    "warrior"
                ],
                "condition": "hardshell",
                "mp": 480
            },
            "mtangle": {
                "explanation": "Communicates through spores to activate dormant plants underneath. Slows down opponents significantly.",
                "cooldown": 40000,
                "duration": 5000,
                "condition": "tangled",
                "hostile": true,
                "name": "Tangle",
                "range": 480,
                "mp": 360,
                "target": true,
                "type": "monster",
                "monsters": true
            },
            "massproductionpp": {
                "cooldown": 50,
                "name": "Mass Production++",
                "skin": "skill_massproductionpp",
                "explanation": "Adds a 1-time use buff that speeds up the next upgrade or compound by 90%. The buff expires in 10 seconds if not used.",
                "level": 60,
                "type": "skill",
                "class": [
                    "merchant"
                ],
                "condition": "massproductionpp",
                "mp": 200
            },
            "weakness_aura": {
                "passive": true,
                "hostile": true,
                "name": "Weakness",
                "skin": "condition_bad",
                "explanation": "Weakens",
                "type": "monster",
                "condition": "weakness",
                "aura": true
            },
            "toggle_inventory": {
                "ui": false,
                "explanation": "Toggles the inventory",
                "type": "utility",
                "name": "Toggle Inventory",
                "skin": "inventory"
            },
            "anger": {
                "explanation": "Randomly targets someone",
                "type": "monster",
                "name": "Anger"
            },
            "toggle_character": {
                "ui": false,
                "explanation": "Toggles the character focus",
                "type": "utility",
                "name": "Toggle Character",
                "skin": "character"
            },
            "piercingshot": {
                "explanation": "Fire heavy, armor piercing arrows at your opponent. They deal 75% of the damage but pierce through 500 armor.",
                "share": "attack",
                "skin": "skill_piercingshot",
                "class": [
                    "ranger"
                ],
                "target": true,
                "name": "Piercing Shot",
                "level": 72,
                "type": "skill",
                "wtype": [
                    "bow",
                    "crossbow"
                ],
                "apiercing": 500,
                "damage_multiplier": 0.75,
                "hostile": true,
                "mp": 64,
                "cooldown_multiplier": 1
            },
            "travel": {
                "explanation": "Where would you like to visit?",
                "type": "ability",
                "name": "Travel!",
                "skin": "travel"
            },
            "supershot": {
                "explanation": "Deals 1.5X instant damage from an incredible distance.",
                "cooldown": 30000,
                "skin": "skill_supershot",
                "class": [
                    "ranger"
                ],
                "name": "Supershot",
                "target": true,
                "wtype": [
                    "bow",
                    "crossbow"
                ],
                "range_multiplier": 3,
                "damage_multiplier": 1.5,
                "hostile": true,
                "mp": 400,
                "type": "skill"
            },
            "toggle_stats": {
                "ui": false,
                "explanation": "Toggles the character sheet",
                "type": "utility",
                "name": "Toggle Stats",
                "skin": "stats"
            },
            "taunt": {
                "range": 200,
                "cooldown": 3000,
                "target": true,
                "name": "Taunt",
                "skin": "skill_taunt",
                "explanation": "Taunts an enemy. Steals aggro from friendly targets.",
                "type": "skill",
                "class": [
                    "warrior"
                ],
                "hostile": true,
                "mp": 40
            },
            "regen_mp": {
                "name": "Regenerate MP",
                "type": "ability",
                "explanation": "Regenerate 100 MP without using potions.",
                "share": "use_mp",
                "skin": "regen_mp",
                "cooldown_multiplier": 2
            },
            "track": {
                "range": 1440,
                "cooldown": 1600,
                "name": "Track",
                "skin": "skill_track",
                "explanation": "Use your fine-tuned senses to detect others.",
                "type": "skill",
                "class": [
                    "ranger"
                ],
                "mp": 80
            },
            "absorb": {
                "range": 240,
                "cooldown": 400,
                "target": true,
                "name": "Absorb Sins",
                "skin": "skill_absorbsins",
                "explanation": "Pulls all targets from a friendly character.",
                "level": 55,
                "type": "skill",
                "class": [
                    "priest"
                ],
                "mp": 200
            },
            "toggle_code": {
                "ui": false,
                "name": "Toggle Code",
                "skin": "code"
            },
            "portal": {
                "explanation": "Open a portal to different maps and instances",
                "type": "monster",
                "name": "Portal"
            },
            "open_snippet": {
                "ui": false,
                "explanation": "Open the Code Snippet interface",
                "type": "utility",
                "name": "Open Snippet",
                "skin": "snippet"
            },
            "stack": {
                "name": "Stacked Damage",
                "max": 2000,
                "explanation": "Slowly learning the ways of your opponent each rogue attack deals one more damage.",
                "skin": "skill_stack",
                "type": "passive",
                "class": [
                    "rogue"
                ]
            },
            "curse_aura": {
                "passive": true,
                "hostile": true,
                "name": "Curse",
                "skin": "condition_bad",
                "explanation": "A wretched aura",
                "type": "monster",
                "condition": "cursed",
                "aura": true
            },
            "reflection": {
                "explanation": "Erects a magical shield around the target to grant them +20% Reflection for the duration.",
                "cooldown": 30000,
                "skin": "buff_reflection",
                "class": [
                    "mage"
                ],
                "condition": "reflection",
                "name": "Reflective Shield",
                "target": true,
                "level": 60,
                "range": 320,
                "mp": 540,
                "type": "skill"
            },
            "energize": {
                "range": 320,
                "cooldown": 4000,
                "name": "Energize",
                "skin": "skill_energize",
                "explanation": "Transfers mana to a target. As a side effect the target gains high attack speed for a short duration.",
                "level": 20,
                "type": "skill",
                "class": [
                    "mage"
                ],
                "condition": "energized",
                "target": true
            },
            "light": {
                "cooldown": 0,
                "name": "Light",
                "skin": "skill_light",
                "explanation": "Reveals invisible entities nearby and prevents them from going invisible again for 12 seconds.",
                "type": "skill",
                "class": [
                    "mage"
                ],
                "hostile": true,
                "mp": 2000
            },
            "quickstab": {
                "explanation": "Use your agility to quickly stab your opponent between your devastating attacks!",
                "share": "quickpunch",
                "cooldown": 250,
                "skin": "skill_quickstab",
                "class": [
                    "rogue"
                ],
                "target": true,
                "name": "Quick Stab",
                "wtype": "dagger",
                "range_multiplier": 1,
                "damage_multiplier": 0.36,
                "hostile": true,
                "mp": 320,
                "type": "skill"
            },
            "mlight": {
                "name": "Light",
                "explanation": "Reveals invisible entities nearby and prevents them from going invisible again for 12 seconds.",
                "ui": true,
                "skin": "skill_light",
                "type": "monster",
                "hostile": true
            },
            "magiport": {
                "cooldown": 0,
                "name": "Magiport",
                "skin": "skill_teleport",
                "explanation": "Pull someone to your location using the magical paths that surround our world.",
                "complementary": "Unless the target doesn't have a T2+ helmet, high intelligence, or a low level, it can't resist being magiported. (Reverted [03/07/18])",
                "type": "skill",
                "class": [
                    "mage"
                ],
                "mp": 900
            },
            "pcoat": {
                "cooldown": 50000,
                "consume": "poison",
                "name": "A Poisonous Touch",
                "skin": "skill_pcoat",
                "duration": 7000,
                "explanation": "Coat your blade with a poison sack. Poison everyone you damage before the venom dissipates.",
                "type": "skill",
                "class": [
                    "rogue"
                ],
                "mp": 600
            }
        }
    }
    expect(G_skills).not.toBe(undefined)
})