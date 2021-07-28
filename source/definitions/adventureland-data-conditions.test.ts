import { GData } from "./adventureland-data"

/**
 * The following is from http://adventure.land/data.js, version 680 (2021-05-05)
 * It is used to confirm type correctness
 */

test("G.conditions type validation", async () => {
    const G_conditions: Pick<GData, "conditions"> = {
        "conditions": {
            "stunned": {
                "bad": true,
                "blocked": true,
                "ui": true,
                "name": "Stunned",
                "skin": "condition_bad"
            },
            "massproductionpp": {
                "name": "Mass Production++",
                "explanation": "Speeds up the next upgrade or compound 90%",
                "ui": true,
                "skin": "skill_massproductionpp",
                "duration": 10000,
                "buff": true
            },
            "marked": {
                "duration": 10000,
                "explanation": "Marked by a ranger for death. Receive 10% more damage and can't stealth.",
                "ui": true,
                "name": "Marked",
                "skin": "skill_huntersmark"
            },
            "blink": {
                "explanation": "Blink in progress",
                "name": "Blinking",
                "skin": "condition_positive"
            },
            "cursed": {
                "duration": 5000,
                "bad": true,
                "name": "Cursed",
                "skin": "condition_bad"
            },
            "mluck": {
                "name": "Good Luck",
                "persistent": true,
                "ui": true,
                "skin": "buff_luck",
                "duration": 3600000,
                "buff": true,
                "luck": 12
            },
            "fishing": {
                "explanation": "Fishing in progress",
                "name": "Fishing",
                "channel": true,
                "skin": "skill_fishing"
            },
            "stoned": {
                "duration": 4000,
                "bad": true,
                "blocked": true,
                "name": "Stoned",
                "skin": "condition_neutral"
            },
            "darkblessing": {
                "name": "Dark Blessing",
                "ui": true,
                "skin": "skill_dbuff",
                "duration": 8000,
                "output": 25,
                "buff": true
            },
            "sugarrush": {
                "name": "Sugar Rush",
                "mp_cost": -200,
                "frequency": 240,
                "ui": true,
                "skin": "candycanesword",
                "duration": 10000,
                "buff": true
            },
            "authfail": {
                "ui": true,
                "name": "Authorization Failure",
                "gold": -85,
                "skin": "notverified",
                "technical": true,
                "explanation": "Your account has failed an internal authorization routine. This might've happened if you haven't logged on from Steam or Mac App Store since this new system was implemented. So just opening the non-web game client once, starting one character, hanging 1-2 minutes on a server and logging out will be enough to correct this mistake. If it persists unexpectedly email hello@adventure.land",
                "xp": -20,
                "luck": -85
            },
            "mlifesteal": {
                "name": "Lifesteal",
                "lifesteal": 2.5,
                "ui": true,
                "skin": "lifestealscroll",
                "duration": 3600000,
                "buff": true
            },
            "phasedout": {
                "name": "Phased Out",
                "evasion": 64,
                "frequency": -40,
                "ui": true,
                "skin": "skill_phaseout",
                "duration": 5000,
                "speed": -16
            },
            "invis": {
                "explanation": "Hidden from everyone else until you attack",
                "name": "Invisible",
                "skin": "skill_invis"
            },
            "rspeed": {
                "name": "Rogue Swiftness",
                "frequency": 8,
                "ui": true,
                "skin": "buff_speed",
                "duration": 2700000,
                "speed": 7,
                "buff": true
            },
            "monsterhunt": {
                "duration": 1800000,
                "ui": true,
                "name": "On The Hunt",
                "skin": "quest_monsterhunt"
            },
            "weakness": {
                "dex": -10,
                "bad": true,
                "ui": true,
                "name": "Weakness",
                "str": -10,
                "skin": "condition_bad",
                "duration": 20000,
                "speed": -30
            },
            "easterluck": {
                "name": "Easter Luck",
                "persistent": true,
                "ui": true,
                "skin": "easterluck",
                "duration": 86400000,
                "buff": true,
                "luck": 100
            },
            "fingered": {
                "name": "Deep Meditation",
                "evasion": 96,
                "resistance": 1600,
                "bad": true,
                "skin": "condition_neutral",
                "blocked": true
            },
            "deepfreezed": {
                "name": "Deepfreezed",
                "bad": true,
                "ui": true,
                "skin": "condition_bad",
                "duration": 12000,
                "blocked": true
            },
            "xpower": {
                "name": "Power",
                "mp_cost": -300,
                "frequency": 480,
                "ui": true,
                "skin": "goldenpowerglove",
                "duration": 6000,
                "buff": true
            },
            "town": {
                "explanation": "Town in progress",
                "can_move": true,
                "name": "Town",
                "channel": true,
                "skin": "condition_positive"
            },
            "charmed": {
                "duration": 30000,
                "explanation": "Mellow like a warm kitty",
                "ui": true,
                "name": "Charmed",
                "skin": "charmer"
            },
            "mshield": {
                "ui": true,
                "name": "Mana Shield",
                "skin": "skill_mshield"
            },
            "massproduction": {
                "name": "Mass Production",
                "explanation": "Speeds up the next upgrade or compound 50%",
                "ui": true,
                "skin": "skill_massproduction",
                "duration": 10000,
                "buff": true
            },
            "frozen": {
                "bad": true,
                "ui": true,
                "name": "Frozen",
                "skin": "frostbow"
            },
            "invincible": {
                "duration": 6000,
                "explanation": "When you spawn in a PVP area. This prevents you from receiving damage or marked as engaged in PVP. If you get attacked, disconnect before this runs out - or fight!",
                "name": "Invincible",
                "skin": "condition_positive"
            },
            "slowness": {
                "name": "Slowness",
                "explanation": "Things like spiderwebs cause you to slow down.",
                "bad": true,
                "ui": true,
                "skin": "condition_neutral",
                "speed": -40
            },
            "withdrawal": {
                "frequency": -30,
                "skin": "withdrawal",
                "duration": 10800000,
                "speed": -20,
                "dex": -20,
                "name": "Withdrawal",
                "persistent": true,
                "bad": true,
                "ui": true,
                "mp": -300,
                "str": -5
            },
            "eheal": {
                "name": "Rejuvenate",
                "heal": 200,
                "interval": 320,
                "ui": true,
                "skin": "essenceoflife",
                "duration": 4000
            },
            "poisoned": {
                "healm": 0.25,
                "name": "Poison",
                "frequencym": 0.8,
                "potionsm": 0.5,
                "bad": true,
                "skin": "poison",
                "duration": 5000
            },
            "xshotted": {
                "name": "X-Shot",
                "explanation": "Good luck trying to find a tavern to play in.",
                "persistent": true,
                "bad": true,
                "ui": true,
                "skin": "xshotted",
                "duration": 43200000
            },
            "newcomersblessing": {
                "aura": true,
                "ui": true,
                "name": "Newcomers' Blessing",
                "gold": 8,
                "skin": "newcomersblessing",
                "duration": 3600000,
                "xp": 2,
                "luck": 10
            },
            "fullguard": {
                "armor": 10000,
                "resistance": 10000,
                "ui": true,
                "name": "Full Guard",
                "skin": "fullguard"
            },
            "warcry": {
                "duration": 8000,
                "frequency": 10,
                "ui": true,
                "name": "War Cry",
                "skin": "skill_warcry",
                "armor": 160,
                "speed": 20,
                "resistance": 160,
                "buff": true
            },
            "mcourage": {
                "courage": 5,
                "ui": true,
                "name": "Merchant's Courage",
                "evasion": 40,
                "skin": "skill_mcourage",
                "duration": 5000,
                "pcourage": 5,
                "mcourage": 5,
                "speed": 25,
                "buff": true
            },
            "eburn": {
                "intensity": "burnd",
                "ui": true,
                "name": "Burn",
                "skin": "essenceoffire",
                "duration": 12000,
                "bad": true,
                "interval": 200,
                "speed": 5,
                "damage": 50
            },
            "poisonous": {
                "ui": true,
                "name": "Poisonous",
                "skin": "skill_pcoat"
            },
            "sanguine": {
                "aura": true,
                "ui": true,
                "name": "Vampiric Aura",
                "lifesteal": 1,
                "skin": "sanguine",
                "duration": 30000,
                "attr0": "lifesteal",
                "buff": true
            },
            "shocked": {
                "name": "Shocked",
                "explanation": "Imminent magical damage",
                "bad": true,
                "ui": true,
                "skin": "essenceofthunder",
                "duration": 1600
            },
            "notverified": {
                "name": "Not Verified",
                "gold": -25,
                "technical": true,
                "explanation": "Reduced luck and gold until the associated email address is verified.",
                "ui": true,
                "skin": "notverified",
                "luck": -25
            },
            "burned": {
                "bad": true,
                "interval": 210,
                "ui": true,
                "name": "Burned",
                "skin": "fireblade"
            },
            "charging": {
                "speed": 30,
                "name": "Charging",
                "skin": "condition_positive"
            },
            "power": {
                "name": "Power",
                "mp_cost": -200,
                "frequency": 360,
                "ui": true,
                "skin": "powerglove",
                "duration": 4000,
                "buff": true
            },
            "dampened": {
                "duration": 300,
                "explanation": "Can't blink or teleport",
                "bad": true,
                "name": "Dampened",
                "skin": "dampened"
            },
            "stack": {
                "explanation": "Bonus damage for each rogue attack",
                "name": "Pure Damage",
                "skin": "skill_stack"
            },
            "licenced": {
                "explanation": "A special, temporary immunity",
                "ui": true,
                "name": "Licenced to Kill",
                "skin": "licence"
            },
            "energized": {
                "name": "Energized",
                "frequency": 80,
                "ui": true,
                "skin": "skill_energize",
                "duration": 800,
                "buff": true
            },
            "holidayspirit": {
                "ui": true,
                "name": "Holiday Spirit",
                "gold": 20,
                "skin": "holidayspirit",
                "duration": 86400000,
                "xp": 20,
                "buff": true,
                "persistent": true,
                "luck": 20
            },
            "reflection": {
                "cap_reflection": 50,
                "reflection": 20,
                "ui": true,
                "skin": "buff_reflection",
                "duration": 5000,
                "name": "Reflective Shield"
            },
            "tangled": {
                "set_speed": 24,
                "name": "Tangled",
                "bad": true,
                "ui": false,
                "skin": "condition_bad",
                "duration": 12000
            },
            "hardshell": {
                "set_speed": 10,
                "name": "Hard Shell",
                "armor": 800,
                "skin": "skill_hardshell",
                "duration": 8000,
                "buff": true
            }
        }
    }
    expect(G_conditions).not.toBe(undefined)
})