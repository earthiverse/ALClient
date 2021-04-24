/**
 * This file aims to contain definitions for socket related things that the main
 * game uses to interact with the server.
 */

import { CharacterType, StatusInfo, SlotInfo, ItemInfo, ServerRegion, ServerIdentifier, BankInfo, TradeSlotType } from "./adventureland"
import { AchievementName, AnimationName, Attribute, CXData, EmotionName, ItemName, MapName, MonsterName, NPCName, ProjectileName, SkillName, TitleName } from "./adventureland-data"

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
    damage?: number
    heal?: number
    eta: number
    m: number
    pid: string
    projectile: ProjectileName
    source: SkillName
    target: string
    type: SkillName
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
    fear: number
    courage: number
    mcourage: number
    pcourage: number
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
        exchange?: {
            len: number
            ms: number
            // TODO: add more variables
        }
    }
    /** TODO: What is this? */
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
    emx?: {
        [T in EmotionName]?: number
    }
    tax: number
    xrange: number
    items: ItemInfo[]
    cc: number

    // (Probably) GUI Related things
    cid: number
    controller: string
    cx: CXData

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
    cx: CXData
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
    /** TODO: Confirm, if effect is '1', they used the town skill */
    effect?: 1 | "blink"
    reason?: "transport" | string
    /** s can be a spawn (single number), or [x,y,orientation (up/down/left/right)] */
    s?: number | [number, number, number?]
    to?: MapName
} | {
    id: string
    reason: "disconnect"
} | {
    id: string
    reason: "invis"
    invis: boolean
}

export type DisappearingTextData = {
    message: string
    x: number
    y: number
    id: string
    args: any
}

export type DisconnectReasonData =
    | "limitdc"

export type EmotionData = {
    /** emotion name */
    name: EmotionName
    /** character name that did the emotion */
    player: string
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
}

export type EvalData = {
    code: string
}

export type GameLogData = GameLogDataString
export type GameLogDataString =
    | "Already partying"
    | "Can't respawn yet."
    | "Invitation expired"
    | string

export type GameResponseData = GameResponseDataObject | GameResponseDataString

// TODO: split these in to other objects
export type GameResponseDataObject = {
    response: "attack_failed"
    place: "attack"
    id: string
} |
/** When you try to enter the bank, but another one of your characters is already inside. */
{
    response: "bank_opx"
    /** The character that is already inside */
    name: string
    reason: "mounted"
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
    response: "seashell_success"
    suffix: "" | string
} | {
    response: "skill_fail"
    name: SkillName
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
    /** When attempting to leave a map you can't use the leave command on */
    | "cant_escape"
    /** ??? Maybe if we attempt to compound something with an inventory position that is empty ??? */
    | "compound_no_item"
    /** Too far away from monster hunt npc */
    | "ecu_get_closer"
    /** When you try to do an emotion but it's not a valid emotion name, or you don't have that emotion */
    | "emotion_cant"
    /** When you try to do an emotion but it's rejected because it's on cooldown */
    | "emotion_cooldown"
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
    /** After you use a skill, when the server is done with everything, it will send this in response */
    | "resolve_skill"
    /** When you try to send an item to another character, but they don't have room for it in their inventory */
    | "send_no_space"
    | "skill_cant_incapacitated"
    /** When you try to use a skill, but you don't have the right weapon type equipped for that skill */
    | "skill_cant_wtype"
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
    anim?: AnimationName | "miss" | "reflect"
    /** If this is set, we avoided the projectile (by running?) */
    avoid?: boolean
    damage?: number
    evade?: boolean
    heal?: number
    hid?: string
    id?: string
    /** Did the entity die from this hit? */
    kill?: boolean
    lifesteal?: number
    manasteal?: number
    miss?: boolean
    pid?: string
    projectile?: string
    reflect?: number
    /** If set, this was a sneak attack by a rogue */
    sneak?: boolean
    source?: SkillName | "burn"
    /** If this is set, these IDs are too close to each other and are receiving additional damage on each hit */
    stacked?: string[]
    /** If set, the character is stunned with this attack */
    stun?: boolean
}

/** Used for the 'invite' socket message */
export type InviteData = {
    /** The name of the character who invited */
    name: string
}

export type ItemData = {
    /** Achievement progress */
    acc?: number
    /** Achievement name to which you are progressing to */
    ach?: AchievementName
    /** TODO: Confirm. The item was a giveaway, and this was the character that gave it away. */
    gf?: string
    /** If set, the item was given to the player (most likely when they created the character), and it is only worth 1 gold if you sell it to an NPC. */
    gift?: number
    /** The higher the number, the more likely it is to succeed if you compound or upgrade the item */
    grace?: number
    /** If set, the item is locked. 's' == 'sealed', 'u' == 'unlocking', TODO: ??? == 'locked'. */
    l?: "s" | "x"
    /** The item level */
    level?: number
    /** The item name */
    name: ItemName
    /** The title applied to the item */
    p?: TitleName
    /** The quantity of the item for stackable items */
    q?: number
    /** If the item has a scroll applied to it, the scroll provides this attribute */
    stat_type?: Attribute
}

/**
 * This is for items that are in trade slots
 */
export type ItemDataTrade = ItemData & {
    /** If set, this item is not for sale. The player wants to buy this item. */
    b?: boolean
    /** Number of minutes remaining for giveaway items */
    giveaway?: number;
    /** List of character IDs that are in the giveaway */
    list?: string[];
    price: number;
    rid: string;
}

export type LimitDCReportData = {
    /** How many of each call you made */
    mcalls: {
        auth?: number
        code?: number
        loaded?: number
        move?: number
        "o:home"?: number
        ping_trig?: number
        players?: number
        property?: number
        render?: number
        send_updates?: number
    }
    /** Call cost limit. It's lower for comm sockets. */
    climit?: number
    /** Total number of socket messages sent */
    total?: number
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

export type PullMerchantsData = {
    type: "merchants"
    chars: PullMerchantsCharData[]
}

export type PullMerchantsCharData = {
    cx: CXData
    map: MapName
    x: number
    y: number
    afk: "code" | boolean
    /** Follows the following format: `${ServerRegion} ${ServerIdentifier}` */
    server: string
    stand: "cstand" | "stand0" | "stand1"
    /** Merchant name */
    name: string
    /** Merchant level */
    level: number
    /** Items for sale */
    slots: { [T in TradeSlotType]?: ItemDataTrade }
    skin: string
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
    ctype: CharacterType | NPCName

    abs: boolean
    afk?: string
    angle: number
    armor: number
    attack: number
    // TODO: Figure out what this is
    c: any
    cid: number
    cx: CXData
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

/**
 * This is what is returned when you ask for 'players'.
 * It's all the players that are online on the server you're on.
 */
export type PlayersData = {
    /** Are they AFK? */
    afk: number
    /** How many days have passed since this character was created */
    age: number
    /** What level are they */
    level: number
    /** Character name */
    name: string
    /** What map are they on */
    map: MapName
    /** What party are they in? */
    party: string
    /** What type of character are they */
    type: CharacterType
}[]

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

export type ServerInfoData = {
    [T in MonsterName]?: ({
        hp: number
        map: MapName
        max_hp: number
        target?: string
    }) & ({
        live: true
        x: number
        y: number
    } | {
        live: false
        /** When the monster will spawn next */
        spapwn: string
    })
} & {
    egghunt?: boolean
    lunarnewyear?: boolean
    valentines?: boolean
}

export type StartData = CharacterData & {
    // TODO: Figure this out
    info: any
    base_gold: {
        [T in MonsterName]?: { [T in string]?: number }
    }
    s_info: ServerInfoData
    entities: EntitiesData
}

export type TrackerData = {
    /** How many points you have for each monster for the given character */
    monsters: {
        [T in MonsterName]?: number
    }
    /** How many points behind this character is from your character that has the most points for this monster */
    monsters_diff: {
        [T in MonsterName]?: number
    }
    /** How many exchanges this character has done for the various given items */
    exchanges: {
        // TODO
    }
    /** Contains drop information */
    maps: {
        [T in MapName | "global" | "global_static"]: [number, ItemName][] | [number, "open", string][]
    }
    /** For the "open" items in maps, this table has a list of the drops that could occur */
    tables: {
        [T in ItemName | string]?: [number, ItemName][]
    }
    /** Contains information about your characters with the max points */
    max: {
        monsters: {
            /** [points, character name] */
            [T in MonsterName]?: [number, string]
        }
    }
    drops: {
        [T in MonsterName]?: [number, ItemName][]
    }
    // TODO: What's the difference between the global here, and the one in 'maps'?
    global: [number, ItemName][] | [number, "open", string][]
    // TODO: What's the difference between the global_static here, and the one in 'maps'?
    global_static: [number, ItemName][] | [number, "open", string][]
}

export type UIData = {
    type: "fishing_fail"
    name: string
} | {
    type: "fishing_none"
} | {
    type: "fishing_start"
    name: string
    direction: number
} | {
    type: "massproduction"
    name: string
} | {
    type: "mining_fail"
    name: string
} | {
    type: "mining_none"
} | {
    type: "mining_start"
    name: string
    direction: number
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
    /** The character gets returned if you open a socket with a secret (i.e. /comm and click on one of your characters) */
    character?: CharacterData
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