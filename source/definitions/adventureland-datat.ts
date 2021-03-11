/**
 * This file aims to contain definitions for data in http://adventure.land/data.js
 * In-game, this is *most* things that are available in parent.G
 */

export type GData = {
    conditions: {
        [T in ConditionName]: {
            /** The condition name (human readable) */
            name: string
            /** A description of what the condition does / what caused the condition. */
            explanation?: string
            /** Is this a 'bad' condition to have? (see also: `buff`) */
            bad?: boolean
            /** Is this a 'good' condition to have? (see also: `bad`) */
            buff?: boolean
            /** If true, this will persist even when your character is logged out. */
            persistent?: boolean
            /** If set, the condition will 'proc' every this many ms. For example, 'burned' will cause damage every interval. */
            interval?: number
            /** How long the condition will affect your character. */
            duration?: number
            /** TODO: CONFIRM. If 'ui' is true, this will show the condition in the native game UI. */
            ui?: boolean
            /** Skin (image) for this condition */
            skin?: string
            /** If true, this is related to a technical reason, e.g. not verifying your email, not from the game. */
            technical?: boolean
        } | {
            [T in Attribute]?: number
        } } & {
        "eburn": {
            damage: number
            intensity: string
        }
    }
    maps: {
        [T in MapName]: {
            data?: {
                /** The furthest west you can go on the map */
                min_x: number
                /** The furthest east you can go on the map */
                max_x: number
                /** The furthest north you can go on the map */
                min_y: number
                /** The furthest south you can go on the map */
                max_y: number
            }
            npcs: {
                /** [x, y, direction] spawn position for the given NPC on the map */
                position?: [number, number, number?]
                /** TODO: ??? If this is set, does the NPC appears on the map in more than one position? Does it walk between these positions? */
                positions?: [number, number, number?][]
                /** TODO: ??? Might mean that the NPC can only walk within this area */
                boundary?: [number, number, number, number]
                /** TODO: ??? */
                loop?: boolean
                /** NPC id */
                id: string
            }[]
            /**
             * Doors to other maps
             * 
             * [0]: The x-position of the door
             * 
             * [1]: The y-position of the door
             * 
             * [2]: The width of the door
             * 
             * [3]: The height of the door
             * 
             * [4]: The map that this door leads to (use in combination with [5] (spawn))
             * 
             * [5]: The spawn that this door leads to (use in combination with [4] (map))
             * 
             * [6]: The spawn that this door is close to on the current map
             * 
             * [7]: TODO: ??? Related to bank / bank keys?
             * 
             * [8]: TODO: ??? Related to bank / bank keys?
             */
            doors: [number, number, number, number, MapName, number?, number?, "ulocked"?, "complicated"?][]
            /** Esentially a unique ID for the map. Contains a little more information than the `name`. */
            key: string
            /** Map Name (human readable) */
            name: string
            /** Maps with `instance` set are not maps that all users share. Some are accessed by keys, some are accessed by other special means. Two players on a server could be on the same 'map', but different instances of that map. */
            instance?: boolean
            /** Maps with `irregular` set to true usually have no doors. */
            irregular?: boolean
            /** TODO: ??? Might mean that only one of your characters can be here at once. */
            mount?: boolean
            /** TODO: ??? Might mean you can ignore walls on this map */
            no_bounds?: boolean
            /** If true, this map should be ignored (it probably isn't accessible, or is a work in progress) */
            ignore?: boolean
            /** Signs and doors on maps that don't work, but could contain useful information */
            quirks?: [number, number, number, number, "compound" | "info" | "invisible_statue" | "list_pvp" | "log" | "note" | "sign" | "the_lever" | "upgrade" | string, string][]
            /** If set, this map has a different burn chance %. Multiply the burn chance by this multiplier. */
            burn_multiplier?: number
            /** If set, this map has a different freeze chance %. Multiply the freeze chance by this multiplier. */
            freeze_multiplier?: number
        }
    }
    titles: {
        [T in TitleName]: {
            /** The title name (human readable) */
            title: string
            /** The items you can get this title on */
            type: "all_items" | string
            /** The related achievement that provided the title */
            achievement?: string
            /** The source of the title */
            source?: string
            /** TODO: ??? */
            misc?: boolean
            /** TODO: ??? */
            improve?: boolean
            /** TODO: ??? */
            manual?: boolean
        } | {
            [T in Attribute]?: number
        } } & {
        "sniper": {
            consecutive_200p_range_last_hits: number
        }
    }
}

export type Attribute =
    /** Armor Piercing (physical attacks will pierce through this much armor) */
    | "apiercing"
    /** Armor (reduction to physical damage) */
    | "armor"
    /** How much damage you do (per attack) */
    | "attack"
    /** Special effect for some weapons. See: `charmer` (chance to charm), `merry` (chance to avoid death). */
    | "attr0"
    /** TODO: ??? Found on "weaver" (2021-02-26). Possibly an additional effect for some weapons. */
    | "attr1"
    /** TODO: ??? */
    | "avoidance"
    /** TODO: ??? Joke stat? */
    | "awesomeness"
    /** TODO: Confirm. Deals % AoE damage around the target */
    | "blast"
    /** TODO: ??? Joke stat? */
    | "bling"
    /** TODO: ??? Joke stat? */
    | "charisma"
    /** Number of monsters that can attack before 'fear' starts. */
    | "courage"
    /** Critical hit chance (% to do double damage) */
    | "crit"
    /** Critical damage increase (% damage increase) */
    | "critdamage"
    /** TODO: ??? Joke stat? */
    | "cuteness"
    /** Dexterity (increases attack speed, run speed) */
    | "dex"
    /** Damage Return (Returns melee damage) */
    | "dreturn"
    /** Chance to evade a physical attack (%) */
    | "evasion"
    /** Chance to do AoE damage around the target */
    | "explosion"
    /** Fortitude (Reduces the amount of PvP damage you take) */
    | "for"
    /** Attack Speed (decreases attack cooldown) */
    | "frequency"
    /** Freeze resistance (%) */
    | "fzresistance"
    /** Gold drop multiplier (%) */
    | "gold"
    /** Amount of HP to heal */
    | "heal"
    /** Heal Multiplier (heal amount will be multiplied by this number) */
    | "healm"
    /** Health (how much damage you can take before you die) */
    | "hp"
    /** Increases MP, Resistance */
    | "int"
    /** Steals % damage as HP */
    | "lifesteal"
    /** Luck (increases chance to drop items) */
    | "luck"
    /** Steals % damage as MP */
    | "manasteal"
    /** Magical Courage (Number of magical monsters that can attack before 'fear' starts) */
    | "mcourage"
    /** Mana */
    | "mp"
    /** MP Cost (how much MP an attack will use) */
    | "mp_cost"
    /** MP Reduction (will reduce MP cost by this much %) */
    | "mp_reduction"
    /** Damage increase (%) */
    | "output"
    /** Pure Courage (Number of pure monsters that can attack before 'fear' starts) */
    | "pcourage"
    /** Poison resistance */
    | "pnresistance"
    /** Potions Multiplier (potions will heal multipled by this number) */
    | "potionsm"
    /** Random Stat (for glitched items) */
    | "random_stat"
    /** How far you can attack */
    | "range"
    /** % chance to reflect a magic attack */
    | "reflection"
    /** Resistance (reduction to magical damage) */
    | "resistance"
    /** Resistance piercing (magical attacks will pierce through this much resistance) */
    | "rpiercing"
    /** Set Speed (character will walk exactly this fast) */
    | "set_speed"
    /** Movement speed (units / second) */
    | "speed"
    /** If this is on a weapon, it means that you can apply a scroll to it, and it will reflect whatever scroll you have applied */
    | "stat"
    /** Strength (increases HP, armor) */
    | "str"
    /** Stun chance (%) */
    | "stun"
    /** Vitality (increases HP) */
    | "vit"
    /** XP (increases XP gained by this much %) */
    | "xp"

export type ConditionName =
    | "authfail"
    | "blink"
    | "burned"
    | "charging"
    | "charmed"
    | "cursed"
    | "dampened"
    | "darkblessing"
    | "easterluck"
    | "eburn"
    | "eheal"
    | "energized"
    | "fingered"
    | "frozen"
    | "fullguard"
    | "hardshell"
    | "holidayspirit"
    | "invincible"
    | "invis"
    | "licenced"
    | "marked"
    | "massproduction"
    | "mcourage"
    | "mlifesteal"
    | "mluck"
    | "monsterhunt"
    | "mshield"
    | "notverified"
    | "phasedout"
    | "poisoned"
    | "poisonous"
    | "power"
    | "reflection"
    | "rspeed"
    | "sanguine"
    | "shocked"
    | "slowness"
    | "stack"
    | "stoned"
    | "stunned"
    | "sugarrush"
    | "tangled"
    | "warcry"
    | "weakness"
    | "withdrawal"
    | "xpower"
    | "xshotted"

export type MapName =
    | "abtesting"
    | "arena"
    | "bank"
    | "bank_b"
    | "bank_u"
    | "batcave"
    | "cave"
    | "cgallery"
    | "crypt"
    | "cyberland"
    | "d2"
    | "d_a1"
    | "d_a2"
    | "d_b1"
    | "d_e"
    | "d_g"
    | "desertland"
    | "duelland"
    | "dungeon0"
    | "goobrawl"
    | "halloween"
    | "hut"
    | "jail"
    | "level1"
    | "level2"
    | "level2e"
    | "level2n"
    | "level2s"
    | "level2w"
    | "level3"
    | "level4"
    | "main"
    | "mansion"
    | "mtunnel"
    | "old_bank"
    | "old_main"
    | "original_main"
    | "resort"
    | "resort_e"
    | "shellsisland"
    | "ship0"
    | "spookytown"
    | "tavern"
    | "test"
    | "tomb"
    | "tunnel"
    | "winter_cave"
    | "winter_inn"
    | "winter_inn_rooms"
    | "winterland"
    | "woffice"

export type TitleName =
    | "critmonger"
    | "fast"
    | "festive"
    | "firehazard"
    | "glitched"
    | "gooped"
    | "legacy"
    | "lucky"
    | "shiny"
    | "sniper"
    | "stomped"
    | "superfast"