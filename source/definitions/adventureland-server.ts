/**
 * This file aims to contain definitions for socket related things that the main
 * game uses to interact with the server.
 */

import { NPCType, CharacterType, StatusInfo, SlotInfo, ItemInfo, MapName, MonsterName, ItemName, ServerRegion, ServerIdentifier, BankPackType, BankInfo, SkillName, SInfo, DamageType, StatType, TradeSlotType } from "./adventureland"

export type AchievementProgressData = {
    name: string
} | AchievementProgressDataFirehazard

export type AchievementProgressDataFirehazard = {
    name: "firehazard"
    count: number
    needed: number
}

export type ActionData = {
    attacker: string
    damage: number
    eta: number
    m: number
    pid: string
    projectile: "arrow" | "pmag" | "supershot" | string
    source: "attack" | "supershot" | string
    target: string
    type: "attack" | "supershot" | string
    x: number
    y: number
}

export type AuthData = {
    // TODO: Find out where to get this auth string
    auth: string
    /** NOTE: This is not the name of the player. It's a long number, encoded as a string. */
    user: string
    /** NOTE: This is not the name of the character. It's a long number, encoded as a string. */
    character: string
    passphrase: string

    height: number
    width: number
    scale: number

    no_html: "1" | ""
    no_graphics: "True" | ""

    code_slot?: number
}

export type CharacterData = PlayerData & {
    hp: number
    max_hp: number
    mp: number
    max_mp: number
    attack: number
    frequency: number
    speed: number
    range: number
    armor: number
    resistance: number
    level: number
    rip: boolean
    afk: "afk" | string
    s: StatusInfo
    // TODO: Figure this type out
    c: any
    q: {
        compound?: {
            len: number
            ms: number
            num: number
            // NOTE: I don't think this value is used?
            nums: number[]
        }
        upgrade?: {
            len: number
            ms: number
            num: number
        }
    }
    abs: boolean
    age: number
    angle: number
    blast: number
    pdps: number
    id: string
    name: string
    x: number
    y: number
    going_x?: number
    going_y?: number
    moving: boolean
    stand?: boolean | "cstand" | "stand0",
    skin: string
    slots: SlotInfo
    ctype: CharacterType
    owner: string
    party?: string
    explosion: number
    firesistance: number
    fzresistance: number
    mp_reduction: number
    pnresistance: number
    stun: number
    int: number
    str: number
    dex: number
    vit: number
    for: number
    mp_cost: number
    max_xp: number
    goldm: number
    xpm: number
    xp: number
    luckm: number
    map: MapName
    in: string
    /** The size of the character's inventory */
    isize: number
    /** The number of empty inventory slots */
    esize: number
    gold: number
    cash: number
    /** This number is the number of monsters currently targeting you */
    targets: number
    target?: string
    m: number
    evasion: number
    miss: number
    move_num: number
    reflection: number
    lifesteal: number
    manasteal: number
    rpiercing: number
    apiercing: number
    crit: number
    critdamage: number
    dreturn: number
    tax: number
    xrange: number
    items: ItemInfo[]
    cc: number

    // (Probably) GUI Related things
    cid: number
    controller: string
    cx: any

    ipass?: string
    // TODO: Figure this out
    friends?: any
    // TODO: Figure this out
    acx?: any
    xcx?: string[]
    /** Extra events (e.g. ["game_response", {response: "upgrade_success", level: 4, num: 8}]) */
    hitchhikers?: [string, any][]
    /** Holds bank information when the character is inside the bank */
    user?: BankInfo
}

export type CharacterListData = {
    map: MapName
    in: MapName
    name: string
    level: number
    skin: string
    cx: any
    online: number
    y: number
    x: number
    type: CharacterType
    id: string

    secret?: string
    server?: string
}

export type ChestData = {
    chest: "chest3" | "chest4" | "chest6" | string
    id: string
    items: number
    map: MapName
    party: string
    x: number
    y: number
}

export type ChestOpenedData = {
    id: string
    gold: number
    goldm: number
    items: {
        name: string
        q?: number
        level?: number
        looter: string
    }[]
    opener: string
    party: boolean
} | {
    id: string
    gone: true
}

export type DeathData = {
    id: string
    place?: "attack" | string
}

export type DisappearData = {
    id: string
    effect?: 1
    reason?: "disconnect" | "invis" | "transport" | string
    /** s can be a spawn (single number), or [x,y,orientation (up/down/left/right)] */
    s?: number | [number, number, number?]
    to?: MapName
}

export type DisappearingTextData = {
    message: string
    x: number
    y: number
    id: string
    args: any
}

export type EntitiesData = {
    type: "all" | "xy"
    in: MapName
    map: MapName

    monsters: EntityData[]
    players: PlayerData[]
}

export type EntityData = {
    id: string
    type: MonsterName

    abs: boolean
    angle: number
    armor: number
    // TODO: Figure out what this is
    cid: number
    frequency: number
    going_x: number
    going_y: number
    move_num: number
    moving: boolean
    resistance: number
    s: StatusInfo
    /** The ID of the target */
    target?: string

    x: number
    y: number

    // The following are soft properties. We need to use the values from G.monsters for these if there are none available.
    "1hp"?: boolean
    apiercing?: number
    attack?: number
    charge?: number
    cooperative?: boolean
    damage_type?: DamageType
    evasion?: number
    hp?: number
    immune?: boolean
    level?: number
    map?: MapName
    max_hp?: number
    max_mp?: number
    mp?: number
    range?: number
    reflection?: number
    rpiercing?: number
    speed?: number
    xp?: number
}

export type EvalData = {
    code: string
}

export type GameLogData = GameLogDataString
export type GameLogDataString =
    | "Already partying"
    | "Invitation expired"
    | string

export type GameResponseData = GameResponseDataObject | GameResponseDataString

// TODO: split these in to other objects
export type GameResponseDataObject = {
    response: "attack_failed"
    place: "attack"
    id: string
} | {
    response: "bank_restrictions"
    place: "compound" | string
} | {
    response: "buy_success"
    cost: number
    // Inventory slot that the item is now in
    num: number
    name: ItemName
    q: number
} | {
    response: "cooldown"
    skill?: SkillName
    place: SkillName
    id: string
    ms: number
} | {
    response: "craft"
    name: ItemName
} | {
    response: "defeated_by_a_monster"
    xp: number
    monster: MonsterName
} | {
    response: "disabled"
    place: "attack"
} |
/** Called when a condition expires */
{
    response: "ex_condition"
    name: SkillName
} | {
    response: "gold_sent"
    // User ID the gold was sent to
    name: string
    // The amount of gold that was sent
    gold: number
} | {
    response: "item_sent"
    // User ID the item was sent to
    name: string
    item: ItemName
    q: number
} | {
    response: "mail_item_taken"
} | {
    response: "magiport_failed"
    // User ID the magiport offer was sent to
    id: string
} | {
    response: "magiport_sent"
    // User ID the magiport offer was sent to
    id: string
} | {
    response: "no_mp"
    place: "attack"
} | {
    response: "no_target"
    // TODO: See what else gets returned
} | {
    response: "skill_success"
    name: SkillName
} | {
    response: "too_far"
    place: "attack"
    id: string
    dist: number
} | {
    // TODO: Separate these in to separate objects
    response: "gold_received" | "item_placeholder" | "item_received"
    gold: number
    name: string
}

export type GameResponseDataString =
    | "bank_restrictions"
    | "buy_cant_npc"
    | "buy_cant_space"
    | "buy_cost"
    /** When you're too far from Ponty and try to view Ponty's items */
    | "buy_get_closer"
    /** ??? Maybe if we attempt to compound something with an inventory position that is empty ??? */
    | "compound_no_item"
    /** Too far away from monster hunt npc */
    | "ecu_get_closer"
    /** We are already exchaning something */
    | "exchange_existing"
    /** The given item requires multiple to exchange */
    | "exchange_notenough"
    /** When a merchant tries to start a monster hunt */
    | "monsterhunt_merchant"
    | "monsterhunt_started"
    /** When you try to use a skill, but you're not a high enough level */
    | "no_level"
    /** When you attack or use a skill with "id" set to "null" */
    | "no_target"
    /** When you try to send an item to another character, but they don't have room for it in their inventory */
    | "send_no_space"
    | "skill_cant_incapacitated"
    | "skill_too_far"
    | "trade_bspace"
    | "trade_get_closer"
    /** We are already upgrading something */
    | "upgrade_in_progress"
    /** We are trying to use a scroll to upgrade something that is a higher grade than the scroll can upgrade */
    | "upgrade_incompatible_scroll"
    /* Failed upgrading (to chance) */
    | "upgrade_fail"
    /* Successfully upgraded */
    | "upgrade_success"
// | string

export type HitData = {
    anim: "arrow_hit" | "miss" | "reflect" | "slash1" | string
    /** If this is set, we avoided the projectile (by running?) */
    avoid?: boolean
    damage: number
    lifesteal?: number
    evade?: boolean
    hid?: string
    id?: string
    pid?: string
    projectile?: string
    reflect?: boolean
    /** If set, this was a sneak attack by a rogue */
    sneak?: boolean
    source?: "attack" | "heal" | string
    /** If this is set, these IDs are too close to each other and are receiving additional damage on each hit */
    stacked?: string[]
    /** If set, the character is stunned with this attack */
    stun?: boolean
    miss?: boolean
    kill?: boolean
}

/** Used for the 'invite' socket message */
export type InviteData = {
    /** The name of the character who invited */
    name: string
}

export type LoadedData = {
    /** The height of the monitor's resolution */
    height: number
    /** The width of the monitor's resolution */
    width: number
    // TODO: Find out what this is
    scale: number
    success: 1 | number
}

export type MailData = {
    /** We can use this cursor to retrieve more mail */
    cursor: string
    /** If false, we are on the first page of mail. If true, we are scrolling through mail */
    cursored: boolean
    mail: MailMessageData[]
    /** If true, there is more mail which you can retrieve by using the cursor */
    more: boolean
    type: "mail"
}

export type MailMessageData = {
    /** The mail's ID */
    id: string
    /** From */
    fro: string
    /** To */
    to: string
    /** The time this message was sent */
    sent: string
    /** If true, we have taken the item attached to this mail. */
    message: string

    /** A string containing a JSON object that represents the item that was sent in the mail */
    item?: string
    taken?: boolean
}

export type PullMerchantData = {
    type: "merchants"
    chars: PullMerchantCharData[]
}

export type PullMerchantCharData = {
    map: MapName
    x: number
    y: number
    afk: boolean
    /** Follows the following format: `${ServerRegion} ${ServerIdentifier}` */
    server: string
    stand: ItemName
    /** Merchant name */
    name: string
    /** Merchant level */
    level: number
    /** Items for sale */
    slots: { [T in TradeSlotType]?: ItemInfo & {
        /** Number of minutes remaining for giveaway items */
        giveaway?: number;
        /** List of character IDs that are in the giveaway */
        list?: string[];
        price: number;
        rid: string;
    }
    }
}

export type NewMapData = {
    direction: number
    effect: number | "magiport"
    entities: EntitiesData
    in: MapName
    info: any
    m: number
    name: MapName
    x: number
    y: number
}

export type PartyData = {
    list: string[]
    message?: string
    party: {
        [T in string]: {
            gold: number
            in: MapName
            // TODO: What is this?
            l: number
            level: number
            luck: number
            map: MapName
            share: number
            skin: string
            type: string
            x: number
            xp: number
            y: number
        }
    }
}

export type PlayerData = {
    id: string
    ctype: CharacterType | NPCType

    abs: boolean
    afk?: string
    angle: number
    armor: number
    attack: number
    // TODO: Figure out what this is
    c: any
    cid: number
    // TODO: Figure out what this is
    cx: any
    focus?: string
    frequency: number
    x: number
    y: number
    going_x: number
    going_y: number
    hp: number
    level: number
    max_hp: number
    max_mp: number
    move_num?: number
    moving?: boolean
    mp: number
    npc?: string
    owner: string
    party?: string
    // TODO: Figure out what this is
    pdps: number
    q: {
        compound?: {
            len: number
            ms: number
            num: number
            // NOTE: I don't think this value is used?
            nums: number[]
        }
        upgrade?: {
            len: number
            ms: number
            num: number
        }
    }
    range: number
    resistance: number
    rip: boolean
    s: StatusInfo
    skin: string
    slots: SlotInfo
    speed: number
    stand?: boolean | "cstand" | "stand0"
    tp?: boolean

    // Soft Properties
    map?: MapName
    in?: MapName
}

export type QData = {
    num: number
    p: {
        chance: number
        level: number
        name: ItemName
        nums: number[]
        scroll: ItemName
        success?: boolean
    }
    q: {
        compound?: {
            len: number
            ms: number
            num: number
            // NOTE: I don't think this value is used?
            nums: number[]
        }
        upgrade?: {
            len: number
            ms: number
            num: number
        }
    }
}

export type ServerData = {
    addr: string
    port: number
    region: ServerRegion
    name: ServerIdentifier
    players: number
    key: string
}

export type StartData = CharacterData & {
    // TODO: Figure this out
    info: any
    base_gold: {
        [T in MonsterName]?: { [T in string]?: number }
    }
    s_info: SInfo
    entities: EntitiesData
}

export type UIData = {
    type: "massproduction"
    name: string
} | {
    type: "mluck"
    from: string
    to: string
} | {
    type: "scare"
    name: string
    ids: string[]
} | {
    type: "+$"
    // TODO: Is there a type for these?
    id: "basics" | "scrolls" | string
    /** The character who bought the item */
    name: string
    item: {
        name: ItemName
        q: number
    }
} | {
    type: "-$"
    // TODO: Is there a type for these?
    id: "basics" | "scrolls" | string
    /** The character who sold the item */
    name: string
    item: {
        name: ItemName
        q: number
    }
    /** The slot number where the item was being stored in inventory. */
    num: string
}

export type UpgradeData = {
    type: "compound" | "exchange" | "upgrade" | string
    /** 0 = fail, 1 = success */
    success: 0 | 1
}

export type WelcomeData = {
    region: ServerRegion
    in: MapName
    map: MapName
    // TODO: Find out if this is "hardcore" on a hardcore server
    gameplay: "normal" | string
    // TODO: Find out what this is
    info: any
    name: ServerIdentifier
    pvp: boolean
    x: number
    y: number
}