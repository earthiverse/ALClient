import { Attribute, BankPackName, ConditionName, DamageType, ItemName, MapName, MonsterName, NPCName, SkillName, TitleName } from "./adventureland-data"

export type GData = {
    // TODO: Add
    achievements: { [T in string]: any }
    base_gold: { [T in MonsterName]?: {
        /** The base amount of gold this monster drops if you kill it in the given map */
        [T in MapName]?: number
    } };

    conditions: { [T in ConditionName]: {
        /** Indicates whether the condition is a penalty or not */
        bad?: boolean;
        buff?: boolean;
        /** The length the condition lasts in ms */
        duration?: number;
        interval?: number;
    } & {
        [T in Attribute]?: number
    } };
    craft: { [T in ItemName]?: {
        /** These are the items that are required to craft the given item
         *  [quantity, item name, item level] */
        items: [number, ItemName, number?][]
        /** The cost to craft this item */
        cost: number
        quest?: NPCRole
    } }
    dismantle: { [T in ItemName]?: {
        /** The cost of dismantling the item */
        cost: number;
        /** A list of items you will get if you dismantle. If the number is < 1, it indicates the probability of getting that item. */
        items: [number, ItemName][];
    } };
    geometry: {
        [T in MapName]: {
            max_x: number;
            max_y: number;
            min_x: number;
            min_y: number;
            /* The line is from ([0], [1]) to ([0], [2]) */
            x_lines: [number, number, number][];
            /* The line is from ([1], [0]) to ([2], [0]) */
            y_lines: [number, number, number][];
        }
    };
    maps: { [T in MapName]: {
        doors: DoorInfo[];
        /** The name of the map, if this changes, the map layout probably changed. */
        key: string;
        ignore?: boolean;
        instance?: boolean;
        irregular?: boolean;
        monsters: {
            count: number;
            boundary?: [number, number, number, number];
            boundaries?: [MapName, number, number, number, number][];
            type: MonsterName;
        }[];
        /** Not sure what this means. Might mean that only one character of the players can be here at a time. */
        mount: boolean;
        no_bounds?: boolean;
        npcs: GMapsNPC[];
        /** If set to true, the map is PvP in ALL servers */
        pvp?: boolean;
        on_death: number;
        ref: {
            [id: string]: IPosition & {
                map: MapName;
                in: MapName;
                id: string;
            };
        };
        /**
         * [0]: x position where you spawn
         * [1]: y position where you spawn
         * [2]: Direction to face the character when you spawn
         */
        spawns: [number, number, number?][];
    } };
    npcs: { [T in NPCName]: {
        id: NPCName;
        items?: ItemName[];
        /** Full name of NPC */
        name: string;
        /** A list of places you can transport to with this NPC. The number is the spawn */
        places?: {
            [T in MapName]?: number
        };
        role: NPCRole;
    } };
    // TODO: Get list of quest names
    quests: { [T in string]: PositionReal & {
        id: NPCName;
    } };
    skills: { [T in SkillName]: {
        apiercing?: number;
        class?: CharacterType[];
        cooldown: number;
        cooldown_multiplier?: number;
        damage_multiplier?: number;
        /** If true, we can't use this skill in a safe zone */
        hostile?: boolean;
        /** Items that this we need to use the skill */
        inventory?: ItemName[];
        level?: number;
        /** Can we use this skill on monsters? */
        monster?: boolean;
        /** MP Cost for skill */
        mp?: number;
        /** The name of the skill */
        name: string;
        range?: number;
        range_bonus?: number;
        range_multiplier?: number;
        /** For MP use skills on the mage, 1 mp will equal this much damage */
        ratio?: number;
        /** Requirements for using the skill */
        requirements?: { [T in Attribute]?: number }
        /** The cooldown this skill shares with another skill */
        share?: SkillName;
        /** The item(s) required to use this skill */
        slot?: [SlotType, ItemName][];
        /** Does this skill require a single target? (Don't use an array) */
        target?: boolean;
        /** Does this skill require multiple targets? (Use an array) */
        targets?: boolean;
        warning?: string;
        /** The weapon type needed to use this skill */
        wtype?: WeaponType | WeaponType[];
    } };
}

// TODO: Get a better name for this.
// TODO: Get a better naming convention for G data
export type GMapsNPC = {
    id: NPCName
    name?: string
    position: [number, number, number?]
    positions: [number, number, number?]
}

export type BankInfo = {
    [T in Exclude<BankPackName, "gold">]?: ItemInfo[]
} & {
    gold: number;
}

export type ChestInfo = PositionReal & {
    alpha: number;
    skin: "chest3" | string;
}

export type ItemInfo = {
    // TODO: Figure out what this is
    acc?: number
    // TODO: Figure out what this is (I think it might be similar to 'p', but for achievements)
    ach?: TitleName
    /** If true, the entity is buying this item */
    b?: boolean;
    // TODO: Figure out what this is (Probably related to 'expires')
    ex?: boolean;
    /** If the item expires (booster, elixir), this will be set to a date string */
    expires?: string
    /** If the item is a gift, you can only sell it for 1 gold. The items you get from creating a new character are gifts. */
    gift?: number
    /** Related to upgrade chance. (NOTE: If you see this property, it's likely a bug. Report to Wizard!) */
    grace?: number
    /** Set if the item is compoundable or upgradable */
    level?: number;
    name: ItemName;
    /** How many of this item we have. Set if the item is stackable. */
    q?: number;
    /** If set, name == placeholder, and we are upgrading or compounding something */
    p?: {
        chance: number;
        name: ItemName;
        level: number;
        scroll: ItemName;
        nums: number[];
    } | TitleName;
    ps?: TitleName[]
    /** If set, the item is for sale, or purchase */
    rid?: string;
    /** If the item has this property, this type of scroll has been applied */
    stat_type?: Attribute
    // TODO: Confirm
    /** If set, the item might drop if we die to another player's attacks (i.e. die to PvP) */
    v?: boolean
}

export type TradeItemInfo = ItemInfo & {
    /** Number of minutes remaining for giveaway items */
    giveaway?: number;
    /** List of character IDs that are in the giveaway */
    list?: string[];
    price: number;
    rid: string;
}

export type SlotInfo = {
    [T in SlotType]: ItemInfo
} & {
    [T in TradeSlotType]?: ItemInfo & {
        /** Number of minutes remaining for giveaway items */
        giveaway?: number;
        /** List of character IDs that are in the giveaway */
        list: string[];
        price: number;
        rid: string;
    }
}

/**
 * Contains elements that describe a door
 * [0]: The x-position of the door
 * [1]: The y-position of the door
 * [2]: The width of the door
 * [3]: The height of the door
 * [4]: The map that this door leads to (use in combination with [5] (spawn))
 * [5]: The spawn that this door leads to (use in combination with [4] (map))
 * [6]: The spawn that this door is close to on the current map
 * [7]: ??? Maybe "locked" or "ulocked"?
 * [8]: ??? There's reference to "complicated" in smart_move?
 */
export type DoorInfo = [number, number, number, number, MapName, number?, number?, string?, string?]

export type StatusInfo = {
    [T in ConditionName | "typing"]?: {
        /** How many ms left before this condition expires */
        ms: number;
    } } & {
    burned?: {
        // Damage that the burn will do per second. Damage is currently split between an attack every 200ms (5 attacks/second).
        intensity: number
        // The character ID that caused the burn (TODO: Is this the initial character? Or the last character to contribute?)
        f: string
    }
    // TODO: This currently isn't in G.conditions, but it *should* be eventually, so we can do it later
    cursed?: {
        ms: number
    }
    coop?: {
        id: string;
        p: number;
    };
    mluck?: {
        /** The ID of the merchant who cast mluck */
        f: string;
        /** A flag to show if the mluck was cast by the user's merchant. If false, it can be mlucked by any merchant. */
        strong: boolean;
    };
    monsterhunt?: {
        /** The server ID where the monster hunt is valid */
        sn: string;
        /** Number of monsters remaining to kill */
        c: number;
        /** What monster we have to kill */
        id: MonsterName;
        /** What is this? */
        dl?: boolean
    };
    citizen0aura?: {
        luck: number;
    };
    citizen4aura?: {
        gold: number;
    };
}

export type PositionReal = IPosition & {
    map: MapName;
    real_x?: number;
    real_y?: number;
}

export type PositionMovable = PositionReal & {
    from_x?: number;
    from_y?: number;
    going_x: number;
    going_y: number;
}

export type PositionSmart = IPosition & {
    map: MapName;
    transport?: boolean;
    i?: number;
    s?: number;
}

export type IPosition = {
    map?: MapName
    in?: string
    x: number
    y: number
}

// TODO: Get all types (from G?)
export type CharacterType =
    | "mage"
    | "merchant"
    | "paladin"
    | "priest"
    | "ranger"
    | "rogue"
    | "warrior"

// TODO: Get all types
export type ItemType =
    | "activator"
    | "amulet"
    | "bank_key"
    | "belt"
    | "booster"
    | "box"
    | "cape"
    | "chest"
    | "chrysalis"
    | "computer"
    | "container"
    | "cosmetics"
    | "cscroll"
    | "dungeon_key"
    | "earring"
    | "elixir"
    | "flute"
    | "gem"
    | "gloves"
    | "helmet"
    | "jar"
    | "licence"
    | "material"
    | "misc"
    | "misc_offhand"
    | "offering"
    | "orb"
    | "pants"
    | "petlicence"
    | "placeholder"
    | "pot"
    | "pscroll"
    | "qubics"
    | "quest"
    | "quiver"
    | "ring"
    | "shield"
    | "shoes"
    | "skill_item"
    | "source"
    | "spawner"
    | "stand"
    | "stone"
    | "test"
    | "throw"
    | "token"
    | "tome"
    | "tool"
    | "tracker"
    | "uscroll"
    | "weapon"
    | "xp"

export type WeaponType =
    | "axe"
    | "basher"
    | "bow"
    | "crossbow"
    | "dagger"
    | "dartgun"
    | "fist"
    | "great_staff"
    | "great_sword"
    | "mace"
    | "misc_offhand"
    | "pickaxe"
    | "pmace"
    | "quiver"
    | "rapier"
    | "rod"
    | "scythe"
    | "shield"
    | "short_sword"
    | "source"
    | "spear"
    | "staff"
    | "stars"
    | "sword"
    | "wand"
    | "wblade"

export type SlotType =
    | "amulet"
    | "belt"
    | "cape"
    | "chest"
    | "earring1"
    | "earring2"
    | "elixir"
    | "gloves"
    | "helmet"
    | "mainhand"
    | "offhand"
    | "orb"
    | "pants"
    | "ring1"
    | "ring2"
    | "shoes"

export type TradeSlotType =
    | "trade1"
    | "trade2"
    | "trade3"
    | "trade4"
    | "trade5"
    | "trade6"
    | "trade7"
    | "trade8"
    | "trade9"
    | "trade10"
    | "trade11"
    | "trade12"
    | "trade13"
    | "trade14"
    | "trade15"
    | "trade16"
    | "trade17"
    | "trade18"
    | "trade19"
    | "trade20"
    | "trade21"
    | "trade22"
    | "trade23"
    | "trade24"
    | "trade25"
    | "trade26"
    | "trade27"
    | "trade28"
    | "trade29"
    | "trade30"

export type NPCRole =
    | "announcer"
    | "blocker"
    | "bouncer"
    | "citizen"
    | "companion"
    | "compound"
    | "craftsman"
    | "cx"
    | "daily_events"
    | "exchange"
    | "funtokens"
    | "gold"
    | "guard"
    | "items"
    | "jailer"
    | "locksmith"
    | "lostandfound"
    | "lottery"
    | "mcollector"
    | "merchant"
    | "monstertokens"
    | "newupgrade"
    | "newyear_tree"
    | "petkeeper"
    | "premium"
    | "pvp_announcer"
    | "pvptokens"
    | "quest"
    | "repeater"
    | "resort"
    | "santa"
    | "secondhands"
    | "shells"
    | "ship"
    | "shrine"
    | "standmerchant"
    | "tavern"
    | "tease"
    | "thesearch"
    | "transport"
    | "witch"

// TODO: Confirm that PVP is actually the identifier for PVP servers
export type ServerIdentifier =
    | "HARDCORE"
    | "I"
    | "II"
    | "III"
    | "PVP"

export type ServerRegion =
    | "ASIA"
    | "US"
    | "EU"