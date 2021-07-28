import { BankPackName, ConditionName, MapName, MonsterName } from "./adventureland-data"
import { ItemData, ItemDataTrade } from "./adventureland-server"

export type BankInfo = {
    [T in Exclude<BankPackName, "gold">]?: ItemData[]
} & {
    gold: number;
}

export type ChestInfo = PositionReal & {
    alpha: number;
    skin: string | "chest3";
}

export type TradeItemInfo = ItemData & {
    /** Number of minutes remaining for giveaway items */
    giveaway?: number;
    /** List of character IDs that are in the giveaway */
    list?: string[];
    price: number;
    rid: string;
}

export type SlotInfo = {
    [T in SlotType]: ItemData
} & {
    [T in TradeSlotType]?: ItemDataTrade
}

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
        /** A flag to show if the mluck was cast by the user's merchant. If unset, the character can be mlucked by any merchant. */
        strong?: boolean;
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
    self_healing?: {
        ability: true
        ms: number
    }
    rspeed?: {
        f: string
    }
    blink?: {
        in: string
        map: MapName
        x: number
        y: number
        d: number
    }
    young?: {
        ms: number
    }
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
    | "misc_offhand"
    | "misc"
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
    "ASIA" | "EU" | "US"