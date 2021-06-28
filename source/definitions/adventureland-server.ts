/**
 * This file aims to contain definitions for socket related things that the main
 * game uses to interact with the server.
 */

import { StatusInfo, SlotInfo, ServerRegion, ServerIdentifier, BankInfo, TradeSlotType } from "./adventureland"
import { AchievementName, AnimationName, Attribute, CharacterType, CXData, EmotionName, GDropItem, ItemName, MapName, MonsterName, NPCName, ProjectileName, SkillName, TitleName } from "./adventureland-data"

export type AchievementProgressData = AchievementProgressDataFirehazard | {
    name: string
}

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

    no_html: "" | "1"
    no_graphics: "" | "True"

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
    afk: boolean | string | "afk"
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
    abs?: boolean
    age: number
    angle?: number
    blast: number
    pdps: number
    id: string
    name?: string
    x: number
    y: number
    going_x?: number
    going_y?: number
    moving?: boolean
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
    move_num?: number
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
    items: ItemData[]
    cc: number

    // (Probably) GUI Related things
    cid: number
    controller?: string
    cx: CXData

    ipass?: string
    friends?: string[]
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
    in: string
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
    chest: string | "chest3" | "chest4" | "chest6"
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

export type CMData = {
    /** The name of the player that sent the CM */
    name: string
    /** The message that they sent */
    message: string
}

export type DeathData = {
    id: string
    place?: string | "attack"
}

export type DisappearData = {
    id: string
    /** TODO: Confirm, if effect is '1', they used the town skill */
    effect?: "blink" | 1
    reason?: string | "transport"
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
    in: string
    map: MapName

    monsters: MonsterData[]
    players: PlayerData[]
}

// TODO: Capture an "update" and confirm that it has friends.
export type FriendData = {
    event: "lost"
    friends: string[]
    /** The name of the player that you are no longer friends with */
    name: string
} | {
    event: "new"
    /** The name of the player that you are now friends with */
    friends: string[]
    name: string
} | {
    event: "request"
    /** The name of the player who sent you a friend request */
    name: string
} | {
    event: "update"
    friends: string[]
}

export type MonsterData = {
    id: string
    type: MonsterName

    angle?: number
    move_num?: number
    moving?: boolean
    x: number
    y: number

    armor?: number
    attack?: number
    // TODO: Figure out what this is
    cid: number
    frequency?: number
    going_x: number
    going_y: number
    mp: number
    speed?: number
    resistance?: number
    s: StatusInfo
    /** The ID of the target */
    target?: string

    abs?: false
    hp?: number
    level?: number
    max_hp?: number
    xp?: number
}

export type EvalData = {
    code: string
}

export type GameLogData = GameLogDataString
export type GameLogDataString =
    | string
    | "Already partying"
    | "Can't respawn yet."
    | "Invitation expired"

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
    place: string | "compound"
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
    response: "magiport_failed"
    // User ID the magiport offer was sent to
    id: string
} | {
    response: "magiport_sent"
    // User ID the magiport offer was sent to
    id: string
} | {
    response: "mail_item_taken"
}| {
    response: "no_mp"
    place: "attack"
} | {
    response: "no_target"
    // TODO: See what else gets returned
} | {
    response: "seashell_success"
    suffix: string | ""
} | {
    response: "skill_fail"
    name: SkillName
} | {
    response: "skill_success"
    name: SkillName
} | {
    response: "target_lock"
    monster: MonsterName
} | {
    response: "too_far"
    place: "attack"
    id: string
    dist: number
} |
/** When you try to unfriend, but you have a character in the bank */
{
    response: "unfriend_failed"
    reason: "bank" | "coms failure" | "nouser"
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
    /** When you send a friend request for someone you're already friends with */
    | "friend_already"
    /** When you try to accept a friend request, but you took too long (or they never sent one in the first place) */
    | "friend_expired"
    /** When you send a friend request but they aren't on the server to accept the request */
    | "friend_rleft"
    /** When you send a friend request for a valid player name */
    | "friend_rsent"
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
    /* Failed upgrading (to chance) */
    | "upgrade_fail"
    /** We are already upgrading something */
    | "upgrade_in_progress"
    /** We are trying to use a scroll to upgrade something that is a higher grade than the scroll can upgrade */
    | "upgrade_incompatible_scroll"
    /* Successfully upgraded */
    | "upgrade_success"

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

// TODO: merge the old types
// export type ItemInfo = {
//     // TODO: Figure out what this is
//     acc?: number
//     // TODO: Figure out what this is (I think it might be similar to 'p', but for achievements)
//     ach?: TitleName
//     /** If true, the entity is buying this item */
//     b?: boolean;
//     // TODO: Figure out what this is (Probably related to 'expires')
//     ex?: boolean;
//     /** If the item expires (booster, elixir), this will be set to a date string */
//     expires?: string
//     /** If the item is a gift, you can only sell it for 1 gold. The items you get from creating a new character are gifts. */
//     gift?: number
//     /** Related to upgrade chance. (NOTE: If you see this property, it's likely a bug. Report to Wizard!) */
//     grace?: number
//     /** Set if the item is compoundable or upgradable */
//     level?: number;
//     name: ItemName;
//     /** How many of this item we have. Set if the item is stackable. */
//     q?: number;
//     /** If set, name == placeholder, and we are upgrading or compounding something */
//     p?: {
//         chance: number;
//         name: ItemName;
//         level: number;
//         scroll: ItemName;
//         nums: number[];
//     } | TitleName;
//     ps?: TitleName[]
//     /** If set, the item is for sale, or purchase */
//     rid?: string;
//     /** If the item has this property, this type of scroll has been applied */
//     stat_type?: Attribute
//     // TODO: Confirm
//     /** If set, the item might drop if we die to another player's attacks (i.e. die to PvP) */
//     v?: boolean
// }

export type ItemData = {
    /** Achievement progress */
    acc?: number
    /** Achievement name to which you are progressing to */
    ach?: AchievementName
    /** TODO: What is this? Seen on an elixir. TODO: Check if this is only applicable to the elixir slot */
    ex?: boolean
    /** If this is set, once the date hits, the item will disappear */
    expires?: string
    /** TODO: What is this? Seen on a level 1 xpbooster. */
    extra?: number
    /** TODO: Confirm. The item was a giveaway, and this was the character that gave it away. */
    gf?: string
    /** If set, the item was given to the player (most likely when they created the character), and it is only worth 1 gold if you sell it to an NPC. */
    gift?: number
    /** The higher the number, the more likely it is to succeed if you compound or upgrade the item */
    grace?: number
    /** If set, the item is locked. 's' == 'sealed', 'u' == 'unlocking', "l" == 'locked'. */
    l?: "l" | "s" | "x"
    /** The item level */
    level?: number
    /** The item name */
    name: ItemName
    /** The title applied to the item */
    p?: TitleName
    /** TODO: What is this? A list of available titles for the item?  */
    ps?: TitleName[]
    /** The quantity of the item for stackable items */
    q?: number
    /** If the item has a scroll applied to it, the scroll provides this attribute */
    stat_type?: Attribute
    /** If set, the item is PVP marked until the given date. If you die to another player, there is a chance to lose this item to them. */
    v?: string
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
    success: number | 1
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
    afk: boolean | "code"
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
    effect: number | "blink" | "magiport"
    entities: EntitiesData
    in: string
    info: any
    m: number
    name: MapName
    x: number
    y: number
}

export type OnlineData = {
    name: string
    server: string
}

export type PartyData = {
    list: string[]
    message?: string
    party: {
        [T in string]: {
            gold: number
            in: string
            // TODO: What is this?
            l: number
            level: number
            luck: number
            map: MapName
            share: number
            pdps: number
            skin: string
            type: string
            x: number
            xp: number
            y: number
            cx?: CXData
        }
    }
}

export type PlayerData = {
    id: string
    ctype: CharacterType | NPCName

    abs?: boolean
    angle?: number
    going_x?: number
    going_y?: number

    /** The 'pvp' NPC has an extra  */
    allow?: boolean

    afk?: boolean | "code"
    age?: number
    armor: number
    attack?: number
    // TODO: Figure out what this is
    c: any
    cid: number
    code?: boolean | string
    controller?: string
    cx: CXData
    focus?: string
    frequency?: number
    x: number
    y: number
    hp: number
    level: number
    max_hp: number
    max_mp?: number
    move_num?: number
    moving?: boolean
    mp?: number
    npc?: NPCName
    owner: string
    party?: string
    // TODO: Figure out what this is
    pdps?: number
    q: {
        compound?: {
            len: number
            ms: number
            num: number
            // NOTE: I don't think this value is used?
            nums: number[]
        }
        exchange?: {
            ms: number
            len: number
            name: ItemName
            id: ItemName
            q: number
            num: number
        }
        upgrade?: {
            len: number
            ms: number
            num: number
        }
    }
    range?: number
    resistance?: number
    rip?: boolean | number
    s: StatusInfo
    skin: string
    slots?: SlotInfo
    speed: number
    stand?: boolean | "cstand" | "stand0"
    target?: string
    tp?: boolean
    xp?: number
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
    [T in MonsterName]?: ServerInfoDataLive | ServerInfoDataNotLive
} & {
    egghunt?: boolean
    holidayseason?: boolean
    lunarnewyear?: boolean
    valentines?: boolean
}
export type ServerInfoDataLive = {
    hp: number
    live: true
    map: MapName
    max_hp: number
    target?: string
    x: number
    y: number
}
export type ServerInfoDataNotLive = {
    live: false
    /** When the monster will spawn next */
    spawn: string
}

export type StartData = CharacterData & {
    // TODO: Figure this out
    info: any
    code_slot: number
    code_version: number
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
        [T in MapName | "global_static" | "global"]?: GDropItem[]
    }
    /** For the "open" items in maps, this table has a list of the drops that could occur */
    tables: {
        [T in ItemName | string]?: GDropItem[]
    }
    /** Contains information about your characters with the max points */
    max: {
        monsters: {
            /** [points, character name] */
            [T in MonsterName]?: [number, string]
        }
    }
    drops: {
        [T in MonsterName]?: GDropItem[]
    }
    // TODO: What's the difference between the global here, and the one in 'maps'?
    global: [number, "open", string][] | [number, ItemName][]
    // TODO: What's the difference between the global_static here, and the one in 'maps'?
    global_static: [number, "open", string][] | [number, ItemName][]
}

export type UIData = {
    type: "-$"
    // TODO: Is there a type for these?
    id: string | "basics" | "scrolls"
    /** The character who sold the item */
    name: string
    item: {
        name: ItemName
        q: number
    }
    /** The slot number where the item was being stored in inventory. */
    num: string
} | {
    type: "+$"
    // TODO: Is there a type for these?
    id: string | "basics" | "scrolls"
    /** The character who bought the item */
    name: string
    item: {
        name: ItemName
        q: number
    }
} | {
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
}

export type UpgradeData = {
    type: string | "compound" | "exchange" | "upgrade"
    /** 0 = fail, 1 = success */
    success: 0 | 1
}

export type WelcomeData = {
    /** The character gets returned if you open a socket with a secret (i.e. /comm and click on one of your characters) */
    character?: CharacterData
    region: ServerRegion
    in: string
    map: MapName
    // TODO: Find out if this is "hardcore" on a hardcore server
    gameplay: string | "normal"
    // TODO: Find out what this is
    info: any
    name: ServerIdentifier
    pvp: boolean
    x: number
    y: number
}