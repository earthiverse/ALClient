import { GData } from "./adventureland-data"

/**
 * The following is from http://adventure.land/data.js, version 707 (2022-01-24)
 * It is used to confirm type correctness
 */

test("G.conditions type validation", async () => {
    const G_conditions: Pick<GData, "conditions"> = {
        "conditions": {
            "authfail": {
                "explanation": "Your account has failed an internal authorization routine. This might've happened if you haven't logged on from Steam or Mac App Store since this new system was implemented. So just opening the non-web game client once, starting one character, hanging 1-2 minutes on a server and logging out will be enough to correct this mistake. If it persists unexpectedly email hello@adventure.land",
                "gold": -85,
                "luck": -85,
                "name": "Authorization Failure",
                "skin": "notverified",
                "technical": true,
                "ui": true,
                "xp": -20
            },
            "blink": {
                "explanation": "Blink in progress",
                "name": "Blinking",
                "skin": "condition_positive"
            },
            "burned": {
                "bad": true,
                "interval": 210,
                "name": "Burned",
                "skin": "fireblade",
                "ui": true
            },
            "charging": {
                "name": "Charging",
                "skin": "condition_positive",
                "speed": 30
            },
            "charmed": {
                "duration": 30000,
                "explanation": "Mellow like a warm kitty",
                "name": "Charmed",
                "skin": "charmer",
                "ui": true
            },
            "cursed": {
                "bad": true,
                "duration": 5000,
                "name": "Cursed",
                "skin": "condition_bad"
            },
            "dampened": {
                "bad": true,
                "duration": 300,
                "explanation": "Can't blink or teleport",
                "name": "Dampened",
                "skin": "dampened"
            },
            "darkblessing": {
                "buff": true,
                "duration": 8000,
                "name": "Dark Blessing",
                "output": 25,
                "skin": "skill_dbuff",
                "ui": true
            },
            "dash": {
                "name": "Dashing",
                "set_speed": 500,
                "skin": "condition_positive"
            },
            "deepfreezed": {
                "bad": true,
                "blocked": true,
                "duration": 12000,
                "name": "Deepfreezed",
                "skin": "condition_bad",
                "ui": true
            },
            "easterluck": {
                "buff": true,
                "duration": 86400000,
                "luck": 100,
                "name": "Easter Luck",
                "persistent": true,
                "skin": "easterluck",
                "ui": true
            },
            "eburn": {
                "bad": true,
                "damage": 50,
                "duration": 12000,
                "intensity": "burnd",
                "interval": 200,
                "name": "Burn",
                "skin": "essenceoffire",
                "speed": 5,
                "ui": true
            },
            "eheal": {
                "duration": 4000,
                "heal": 200,
                "interval": 320,
                "name": "Rejuvenate",
                "skin": "essenceoflife",
                "ui": true
            },
            "energized": {
                "buff": true,
                "duration": 800,
                "frequency": 80,
                "name": "Energized",
                "skin": "skill_energize",
                "ui": true
            },
            "fingered": {
                "bad": true,
                "blocked": true,
                "evasion": 96,
                "name": "Deep Meditation",
                "resistance": 1600,
                "skin": "condition_neutral"
            },
            "fishing": {
                "channel": true,
                "duration": 15000,
                "duration_min": 5000,
                "explanation": "Fishing in progress",
                "name": "Fishing",
                "skin": "skill_fishing"
            },
            "frozen": {
                "bad": true,
                "name": "Frozen",
                "skin": "frostbow",
                "ui": true
            },
            "fullguard": {
                "armor": 10000,
                "name": "Full Guard",
                "resistance": 10000,
                "skin": "fullguard",
                "ui": true
            },
            "fullguardx": {
                "armor": 10000,
                "miss": 99,
                "name": "Full Guard",
                "resistance": 10000,
                "skin": "fullguard",
                "ui": true
            },
            "halloween0": {
                "buff": true,
                "duration": 172800000,
                "gold": 5,
                "luck": 5,
                "name": "Halloween Spirit",
                "persistent": true,
                "skin": "halloween0",
                "ui": true,
                "xp": 100
            },
            "halloween1": {
                "buff": true,
                "duration": 86400000,
                "gold": 5,
                "luck": 5,
                "name": "Halloween Spirit",
                "output": 2,
                "persistent": true,
                "skin": "halloween1",
                "ui": true,
                "xp": 50
            },
            "halloween2": {
                "buff": true,
                "duration": 28800000,
                "gold": 5,
                "luck": 5,
                "name": "Halloween Spirit",
                "output": 3,
                "persistent": true,
                "skin": "halloween2",
                "ui": true,
                "xp": 10
            },
            "hardshell": {
                "armor": 800,
                "buff": true,
                "duration": 8000,
                "name": "Hard Shell",
                "set_speed": 10,
                "skin": "skill_hardshell"
            },
            "holidayspirit": {
                "buff": true,
                "duration": 86400000,
                "gold": 20,
                "luck": 20,
                "name": "Holiday Spirit",
                "persistent": true,
                "skin": "holidayspirit",
                "ui": true,
                "xp": 20
            },
            "invincible": {
                "duration": 6000,
                "explanation": "When you spawn in a PVP area. This prevents you from receiving damage or marked as engaged in PVP. If you get attacked, disconnect before this runs out - or fight!",
                "name": "Invincible",
                "skin": "condition_positive"
            },
            "invis": {
                "explanation": "Hidden from everyone else until you attack",
                "name": "Invisible",
                "skin": "skill_invis"
            },
            "licenced": {
                "explanation": "A special, temporary immunity",
                "name": "Licenced to Kill",
                "skin": "licence",
                "ui": true
            },
            "marked": {
                "duration": 10000,
                "explanation": "Marked by a ranger for death. Receive 10% more damage and can't stealth.",
                "name": "Marked",
                "skin": "skill_huntersmark",
                "ui": true
            },
            "massproduction": {
                "buff": true,
                "duration": 10000,
                "explanation": "Speeds up the next upgrade or compound 50%",
                "name": "Mass Production",
                "skin": "skill_massproduction",
                "ui": true
            },
            "massproductionpp": {
                "buff": true,
                "duration": 10000,
                "explanation": "Speeds up the next upgrade or compound 90%",
                "name": "Mass Production++",
                "skin": "skill_massproductionpp",
                "ui": true
            },
            "mcourage": {
                "buff": true,
                "courage": 5,
                "duration": 5000,
                "evasion": 40,
                "mcourage": 5,
                "name": "Merchant's Courage",
                "pcourage": 5,
                "skin": "skill_mcourage",
                "speed": 25,
                "ui": true
            },
            "mining": {
                "channel": true,
                "duration": 15000,
                "duration_min": 5000,
                "explanation": "Mining in progress",
                "name": "Mining",
                "skin": "skill_mining"
            },
            "mlifesteal": {
                "buff": true,
                "duration": 3600000,
                "lifesteal": 2.5,
                "name": "Lifesteal",
                "skin": "lifestealscroll",
                "ui": true
            },
            "mluck": {
                "buff": true,
                "duration": 3600000,
                "luck": 12,
                "name": "Good Luck",
                "persistent": true,
                "skin": "buff_luck",
                "ui": true
            },
            "monsterhunt": {
                "duration": 1800000,
                "name": "On The Hunt",
                "skin": "quest_monsterhunt",
                "ui": true
            },
            "mshield": {
                "name": "Mana Shield",
                "skin": "skill_mshield",
                "ui": true
            },
            "newcomersblessing": {
                "aura": true,
                "duration": 1800000,
                "gold": 10,
                "luck": 10,
                "name": "Newcomers' Blessing",
                "skin": "newcomersblessing",
                "ui": true,
                "xp": 10
            },
            "notverified": {
                "explanation": "Reduced luck and gold until the associated email address is verified.",
                "gold": -25,
                "luck": -25,
                "name": "Not Verified",
                "skin": "notverified",
                "technical": true,
                "ui": true
            },
            "phasedout": {
                "duration": 5000,
                "evasion": 64,
                "frequency": -40,
                "name": "Phased Out",
                "skin": "skill_phaseout",
                "speed": -16,
                "ui": true
            },
            "poisoned": {
                "bad": true,
                "duration": 5000,
                "frequencym": 0.8,
                "healm": 0.25,
                "name": "Poison",
                "potionsm": 0.5,
                "skin": "poison"
            },
            "poisonous": {
                "name": "Poisonous",
                "skin": "skill_pcoat",
                "ui": true
            },
            "power": {
                "buff": true,
                "duration": 4000,
                "frequency": 360,
                "mp_cost": -200,
                "name": "Power",
                "skin": "powerglove",
                "ui": true
            },
            "reflection": {
                "cap_reflection": 50,
                "duration": 5000,
                "name": "Reflective Shield",
                "reflection": 20,
                "skin": "buff_reflection",
                "ui": true
            },
            "rspeed": {
                "buff": true,
                "duration": 2700000,
                "frequency": 8,
                "name": "Rogue Swiftness",
                "skin": "buff_speed",
                "speed": 7,
                "ui": true
            },
            "sanguine": {
                "attr0": "lifesteal",
                "aura": true,
                "buff": true,
                "duration": 30000,
                "lifesteal": 1,
                "name": "Vampiric Aura",
                "skin": "sanguine",
                "ui": true
            },
            "shocked": {
                "bad": true,
                "duration": 1600,
                "explanation": "Imminent magical damage",
                "name": "Shocked",
                "skin": "essenceofthunder",
                "ui": true
            },
            "slowness": {
                "bad": true,
                "explanation": "Things like spiderwebs cause you to slow down.",
                "name": "Slowness",
                "skin": "condition_neutral",
                "speed": -40,
                "ui": true
            },
            "stack": {
                "explanation": "Bonus damage for each rogue attack",
                "name": "Pure Damage",
                "skin": "skill_stack"
            },
            "stoned": {
                "bad": true,
                "blocked": true,
                "duration": 4000,
                "name": "Stoned",
                "skin": "condition_neutral"
            },
            "stunned": {
                "bad": true,
                "blocked": true,
                "name": "Stunned",
                "skin": "condition_bad",
                "ui": true
            },
            "sugarrush": {
                "buff": true,
                "duration": 10000,
                "frequency": 240,
                "mp_cost": -200,
                "name": "Sugar Rush",
                "skin": "candycanesword",
                "ui": true
            },
            "tangled": {
                "bad": true,
                "duration": 12000,
                "name": "Tangled",
                "set_speed": 24,
                "skin": "condition_bad",
                "ui": false
            },
            "town": {
                "can_move": true,
                "channel": true,
                "duration": 3000,
                "explanation": "Town in progress",
                "name": "Town",
                "skin": "condition_positive"
            },
            "warcry": {
                "armor": 160,
                "buff": true,
                "duration": 8000,
                "frequency": 10,
                "name": "War Cry",
                "resistance": 160,
                "skin": "skill_warcry",
                "speed": 20,
                "ui": true
            },
            "weakness": {
                "bad": true,
                "dex": -10,
                "duration": 20000,
                "name": "Weakness",
                "skin": "condition_bad",
                "speed": -30,
                "str": -10,
                "ui": true
            },
            "withdrawal": {
                "bad": true,
                "dex": -20,
                "duration": 10800000,
                "frequency": -30,
                "mp": -300,
                "name": "Withdrawal",
                "persistent": true,
                "skin": "withdrawal",
                "speed": -20,
                "str": -5,
                "ui": true
            },
            "xpower": {
                "buff": true,
                "duration": 6000,
                "frequency": 480,
                "mp_cost": -300,
                "name": "Power",
                "skin": "goldenpowerglove",
                "ui": true
            },
            "xshotted": {
                "bad": true,
                "duration": 43200000,
                "explanation": "Good luck trying to find a tavern to play in.",
                "name": "X-Shot",
                "persistent": true,
                "skin": "xshotted",
                "ui": true
            }
        }
    }
    expect(G_conditions).not.toBe(undefined)
})