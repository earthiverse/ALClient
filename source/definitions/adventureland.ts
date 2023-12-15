/**
 * This file is deprecated.
 * Please contribute to `adventureland-data` or `adventureland-server`
 * Please help me transfer definitions to those files, too!
 */

import { BankPackName, ConditionName, ItemName, MapName, MonsterName } from "./adventureland-data.js"
import { ItemData, ItemDataTrade } from "./adventureland-server.js"

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
    [T in SlotType]: (ItemData | null)
} & {
    [T in TradeSlotType]?: (ItemDataTrade | null)
}

export type StatusInfo = {
    [T in ConditionName | "typing"]?: {
        /** How many ms left before this condition expires */
        ms: number;
    } } & {
    burned?: {
        /** Damage that the burn will do per second. Damage is currently split between an attack about every 200ms (about 5 attacks/second). */
        intensity: number
        /** The character, or monster name (NOT ID!) that caused the burn */
        f: string
        /** The entity ID that caused the burn */
        fid: string
        /** TODO: Is this the last date that burn was inflicted, or the last date that the burn did damage? */
        last: string
    }
    coop?: {
        id: string;
        ms: number;
        p: number;
    }
    darkblessing?: {
        /** The priest that provided the darkblessing */
        f: string
    }
    /** Set on a ghost if a priest heals it */
    healed?: {
        ms: number
    }
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
        /** A delevel flag. If true, killing a level 1 monster will delevel another monster that is higher than level 1. */
        dl?: boolean
    };
    newcomersblessing?: {
        /** The ID of the player who you received the blessing from */
        f: string;
    }
    citizen0aura?: {
        luck: number;
    };
    citizen4aura?: {
        citizens: true;
        gold: number;
        ms: number;
        name: string;
        skin: string;
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

export type TokenType = Extract<ItemName, "friendtoken" | "funtoken" | "monstertoken" | "pvptoken">

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