/**
 * This file aims to contain definitions for socket related things that the main
 * game uses to interact with the server.
 */

import { BankInfo, ChannelInfo, ServerIdentifier, ServerRegion, SlotInfo, SlotType, StatusInfo, TradeSlotType } from "./adventureland.js"
import { AchievementName, AnimationName, Attribute, BankPackName, CharacterType, CXData, EmotionName, GDropItem, ItemName, MapName, MonsterName, NPCName, ProjectileName, SkillName, TitleName } from "./adventureland-data.js"

export type AchievementProgressData = AchievementProgressDataFirehazard | {
    name: string
}

export type AchievementProgressDataFirehazard = {
    name: "firehazard"
    count: number
    needed: number
}

export type ActionDataBase = {
    attacker: string
    damage?: number
    heal?: number
    eta: number
    m: number
    pid: string
    source: SkillName
    target: string
    type: SkillName
    x: number
    y: number
}
export type ActionDataProjectile = ActionDataBase & {
    projectile: ProjectileName
}
export type ActionDataRay = ActionDataBase & {
    instant: boolean
}
export type ActionData = ActionDataProjectile | ActionDataRay

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
    c: ChannelInfo
    q: QInfo
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
    items: (ItemData | null)[]
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
    /** (GUI Related) Set if you move inventory items. Flag for reopening player's inventory. */
    reopen?: boolean
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

export type ChestOpenedData = ChestLootData | ChestGoneData

export type ChestLootData = {
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
}

export type ChestGoneData = {
    id: string
    gone: true
}

export type CMData = {
    /** The name of the player that sent the CM */
    name: string
    /** The message that they sent */
    message: string
}

export type PMData = {
    /* The name of the sending player */
    owner: string
    /* The player the message is being sent to */
    to: string
    /* The message of the sending player */
    message: string
    /* The ID (name) Of the sending player */
    id: string
    /* Denotes whether this message has been sent cross server */
    xserver?: string
}

export type ChatLogData = {
    /* The name of the sending player */
    owner: string
    /* The message of the sending player */
    message: string
    /* The ID (name) Of the sending player */
    id: string
    /* Player */
    p?: boolean
}

export type DeathData = {
    id: string
    place?: string | "attack"
}

export type DiceData = {
    state: "bets"
    hex: string
    algorithm: "hmac-sha256"
} | {
    state: "lock"
    key: string
    /** The result of the dice roll (##.##) */
    num: string
    /** If you compute the HMAC-SHA256 of this string, with the key provided, you can confirm that it matches the hex from the `bets` state */
    text: string
} | {
    state: "roll"
}

export type DisappearData =
    /** Character used 'blink' */
    DisappearBlinkData |
    /** Character (rogue) went invisible */
    DisappearInvisData |
    /** Character disconnected */
    DisappearDisconnectData |
    /** Character used 'magiport' */
    DisappearMagiportData |
    /** Character went through a door */
    DisappearDoorData |
    /** Character used a 'town' teleport */
    DisappearTownData

export type DisappearBlinkData = {
    /** Blink animation will be used */
    effect: "blink"
    /** Character name */
    id: string
    reason: "transport"
    /** [x, y, orientation (up/down/left/right)] */
    s?: [number, number, number]
    to?: MapName
}
export type DisappearInvisData = {
    /** Character name */
    id: string
    invis: true
    reason: "invis"
}
export type DisappearDisconnectData = {
    id: string
    reason: "disconnect"
}
export type DisappearMagiportData = {
    effect: "magiport"
    id: string
    reason: "transport"
    s?: [number, number]
    to?: MapName
}
export type DisappearDoorData = {
    effect?: undefined
    id: string
    reason: "transport"
    s?: number
    to?: MapName | string
}
export type DisappearTownData = {
    // TODO: Confirm that characters wearing a stealth cape using 'town' still have 'effect:1'
    effect: 1
    id: string
    reason: "transport"
    s?: number
    to?: MapName
}

export type DisappearingTextData = {
    message: string
    x: number
    y: number
    id: string
    args: any
}

export type DisconnectCharacterResponse = {
    message: "You don't own that character."
    type: "ui_error"
} | {
    message: "No character with that name."
    type: "ui_error"
} | {
    message: "Sent the disconnect signal to the server"
    type: "message"
} | {
    message: "Character is not in game."
    type: "ui_error"
}

export type DisconnectReasonData = "limitdc"

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
    mp?: number
    speed?: number
    resistance?: number
    s: StatusInfo
    /** The ID of the target */
    target?: string | null

    abs?: false
    hp?: number
    level?: number
    max_hp?: number
    xp?: number
}

export type EvalData = {
    code: string
}

export type LoginData = LoginDataItem[]
export type LoginDataItem = {
    code: string
    type: string
} | {
    message: string
    type: string
} | {
    html: string
}

export type GameEventData = {
    name: MonsterName
    map: MapName
    x: number
    y: number
}

export type GameLogData = GameLogDataString | { color: string; message: GameLogDataString }
export type GameLogDataString =
    | string
    | "Already partying"
    | "Can't respawn yet."
    | "Invitation expired"
    /** Sent when you chat with { code: true } */
    | "You can't chat this fast with Code yet. The interval is 15 seconds."

export type GameResponseData =
    GameResponseDataObject
    | GameResponseDataString
    | GameResponseDataUpgradeChance

export type GameResponseDataUpgradeChance = {
    response: "compound_chance" | "upgrade_chance",
    /** The chance for a success */
    chance: number,
    /** The item being compounded */
    item: ItemData,
    /** The scroll used for the compound calculation */
    scroll: ItemName,
    /** Related to compound chance */
    grace: number
}

export type AttackFailedGRDataObject = {
    response: "attack_failed"
    place: "attack"
    id: string
}
/** When you try to enter the bank, but another one of your characters is already inside. */
export type BankOPXGRDataObject = {
    response: "bank_opx"
    /** The character that is already inside */
    name: string
    reason: "mounted"
}
export type BankRestrictionsGRDataObject = {
    response: "bank_restrictions"
    place: string
}
export type BuySuccessGRDataObject = {
    cevent: "buy"
    response: "buy_success"
    cost: number
    /** Inventory slot that the item is now in */
    num: number
    name: ItemName
    /** Note, if you don't specify the quantity in the `buy` socket emit, it will be set to 1 by the server */
    q: number
}
export type CooldownGRDataObject = {
    response: "cooldown"
    failed: true
    skill?: SkillName
    id?: string
    place: SkillName
    ms: number
}
export type CraftGRDataObject = {
    response: "craft"
    name: ItemName
}
export type SkillSuccessGRDataObject = {
    response: "data"
    place: Exclude<SkillName, "attack">
    success: true
}
export type AttackGRDataObject = {
    response: "data"
    place: "attack"
    reason?: string
    failed?: boolean
    id?: string
} & Partial<ActionDataProjectile>
export type DefeatedByMonsterGRDataObject = {
    response: "defeated_by_a_monster"
    xp: number
    monster: MonsterName
}
export type DisabledGRDataObject = {
    response: "disabled"
    place: "attack"
}
export type DismantleGRDataObject = {
    response: "dismantle"
    /** TODO: Name of item dismantled or name of item received? */
    name: ItemName
}
/** Called when donating to the goblin.
 * donation < 100k ➡️ low
 * 100k <= donation < 1m ➡️ gum
 * donation >= 1m ➡️ ability to see lost and found */
export type DonateGRDataObject = {
    response: "donate_gum" | "donate_low" | "donate_thx"
    gold: number
    xprate: number
}
/** Called when a condition expires */
export type CondExpGRDataObject = {
    response: "ex_condition"
    name: SkillName
}
export type GetCloserGRDataObject = {
    response: "get_closer"
    place: "upgrade"
}
export type GoldSentGRDataObject = {
    response: "gold_sent"
    name: string
    gold: number
}
export type ItemLockedGRDataObject = {
    response: "item_locked"
    place: "upgrade"
}
export type ItemSentGRDataObject = {
    response: "item_sent"
    name: string
    item: ItemName
    /** TODO: Verify that q is required for all ItemSent responses */
    q: number
}
export type LostFoundInfoGRDataObject = {
    response: "lostandfound_info"
    gold: number
}
export type MagiportGRDataObject = {
    response: "magiport_failed" | "magiport_sent"
    id: string
}
export type TakeMailItemGRDataObject = {
    response: "mail_item_taken"
}
export type NoMPGRDataObject = {
    response: "no_mp"
    place: SkillName
    failed: true
}
export type NoItemGRDataObject = {
    response: "no_item"
    place: "upgrade" | "compound"
    failed: true
}
export type NoTargetGRDataObject = {
    response: "no_target"
    /** TODO: See what else gets returned */
}
export type SeashellGRDataObject = {
    response: "seashell_success"
    suffix: string | ""
}
export type SkillStatusGRDataObject = {
    response: "skill_fail" | "skill_success"
    name: SkillName
}
export type TargetLockGRDataObject = {
    response: "target_lock"
    monster: MonsterName
}
export type TooFarGRDataObject = {
    response: "too_far"
    place: SkillName
    id: string
    dist: number
}
export type TownGRDataObject = {
    success: false
    in_progress: true
    response: "data"
    place: "town"
}
export type TransportGRDataObject = {
    success: true
    response: "data"
    place: "transport"
}
export type UnfriendFailedGRDataObject = {
    response: "unfriend_failed"
    reason: "bank" | "coms failure" | "nouser"
}
export type GoldReceivedGRDataObject = {
    /** TODO: Separate these into separate objects */
    response: "gold_received" | "item_placeholder" | "item_received"
    gold: number
    name: string
}

// TODO: split these in to other objects
export type GameResponseDataObject =
    AttackFailedGRDataObject | BankOPXGRDataObject | BankRestrictionsGRDataObject | BuySuccessGRDataObject | CooldownGRDataObject |
    CraftGRDataObject | SkillSuccessGRDataObject | AttackGRDataObject | DefeatedByMonsterGRDataObject | DisabledGRDataObject |
    DismantleGRDataObject | DonateGRDataObject | CondExpGRDataObject | GetCloserGRDataObject | GoldSentGRDataObject | ItemLockedGRDataObject |
    ItemSentGRDataObject | LostFoundInfoGRDataObject | MagiportGRDataObject | TakeMailItemGRDataObject | NoItemGRDataObject | NoMPGRDataObject |
    NoTargetGRDataObject | SeashellGRDataObject | SkillStatusGRDataObject | TargetLockGRDataObject | TooFarGRDataObject | UnfriendFailedGRDataObject |
    GoldReceivedGRDataObject | TownGRDataObject | TransportGRDataObject

export type GameResponseDataString =
    | "bank_restrictions"
    /** When you attempt to place a bet while after you drank an xshot */
    | "bet_xshot"
    /** When you attempt to blink to a spot you can't reach. */
    | "blink_failed"
    | "buy_cant_npc"
    | "buy_cant_space"
    | "buy_cost"
    /** When you're too far from Ponty and try to view Ponty's items */
    | "buy_get_closer"
    /** When you try to use `transport` on a door that needs `enter` */
    | "cant_enter"
    /** When attempting to leave a map you can't use the leave command on */
    | "cant_escape"
    /** ??? Maybe if we attempt to compound something with an inventory position that is empty ??? */
    | "compound_no_item"
    /** When we try to dash too far */
    | "dash_failed"
    /** Too far away from monster hunt npc */
    | "ecu_get_closer"
    /** When you try to do an emotion but it's not a valid emotion name, or you don't have that emotion */
    | "emotion_cant"
    /** When you try to do an emotion but it's rejected because it's on cooldown */
    | "emotion_cooldown"
    /** We are already exchanging something */
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
    /** When you try to sell a locked item */
    | "item_locked"
    /** When you try to loot a chest with items but there's no space in your inventory to loot */
    | "loot_no_space"
    /** When you try to look at the lost and found, but haven't donated enough */
    | "lostandfound_donate"
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
    /** When you try to use a skill that requires a certain item to be equipped, but you don't have that item equipped */
    | "skill_cant_slot"
    /** When you try to use a skill, but you don't have the right weapon type equipped for that skill */
    | "skill_cant_wtype"
    | "skill_too_far"
    /** When you try to list an item for sale/purchase in a slot that already has something listed */
    | "slot_occupied"
    /** When you try to sell an item to another merchant, but there's no space on that merchant */
    | "trade_bspace"
    | "trade_get_closer"
    /** When you try to enter a dungeon, but you don't have a key */
    | "transport_cant_item"
    /** When you try to go through a door you haven't unlocked yet (e.g. lower bank) */
    | "transport_cant_locked"
    /** When you're too far away from a door */
    | "transport_cant_reach"
    /** When you try to upgrade an item that isn't upgradable */
    | "upgrade_cant"
    /** Failed upgrading (to chance) */
    | "upgrade_fail"
    /** We are already upgrading something */
    | "upgrade_in_progress"
    /** We are trying to use a scroll to upgrade something that is a higher grade than the scroll can upgrade */
    | "upgrade_incompatible_scroll"
    /** When you specify an inventory index for the item that is empty */
    | "upgrade_no_item"
    /** When you specify an inventory index for the scroll that is empty */
    | "upgrade_no_scroll"
    /** Successfully upgraded an item */
    | "upgrade_success"
    /** Sucessfully applied a stat scroll to an item */
    | "upgrade_success_stat"

export type HitData = {
    anim?: AnimationName | "miss" | "reflect"
    /** If this is true, the hit was due to an aoe attack */
    aoe?: boolean
    /** If this is set, we avoided the projectile (by running?) */
    avoid?: boolean
    /** If set, the projectile has inflicted burn on the target */
    burn?: boolean
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
    /** TODO: What does this number mean? */
    mobbing?: number
    /** UI Related. Skips drawing line to target (used for cleave, for example) */
    no_lines?: boolean
    pid?: string
    projectile?: ProjectileName
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
    /** For cxjars, it shows the cosmetic contained inside. */
    data?: string
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
    /** A list of players that participated in the giveaway for this item. */
    registry?: {
        [T in string]: string
    }
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
        bank?: number
        buy?: number
        code?: number
        equip?: number
        leave?: number
        loaded?: number
        merchant?: number
        move?: number
        "o:home"?: number
        party?: number
        ping_trig?: number
        players?: number
        property?: number
        render?: number
        secondhands?: number
        send?: number
        send_updates?: number
        skill?: number
        stop?: number
        target?: number
        transport?: number
        unequip?: number
        use?: number
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

export type MailDeleteResponse = {
    message: "Mail deleted."
    type: "message"
} | {
    message: "Can't delete."
    type: "ui_error"
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
    /** The subject of the mail */
    subject: string
    /** The body of the mail */
    message: string
    /** A string containing a JSON object that represents the item that was sent in the mail */
    item?: string
    /** If true, we have taken the item attached to this mail. */
    taken?: boolean
}

export type MapInfo = {
    dice: "bets" | "roll" | "lock"
    num?: string
    seconds: number
} | Record<string, never>

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
    eval?: string
    in: string
    info?: MapInfo
    m: number
    name: MapName
    x: number
    y: number
}

export type NotThereData = {
    place: "attack"
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
            type: CharacterType
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
    c: ChannelInfo
    cid: number
    code?: boolean | string
    controller?: string
    cx: CXData
    focus?: string | null
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
    q: QInfo
    range?: number
    resistance?: number
    rip?: boolean | number
    s: StatusInfo
    skin: string
    slots?: SlotInfo
    speed: number
    stand?: boolean | "cstand" | "stand0"
    target?: string | null
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

/** This is for the data that is returned in the `q_data` socket event */
export type PQData = {
    num: number
    p: {
        chance: number
        level: number
        name: ItemName
        nums: number[]
        scroll: ItemName
        success?: boolean
    }
    q: QInfo
}

/** This is for the data of `character.q` and `player.q` */
export type QInfo = {
    compound?: {
        len: number
        ms: number
        num: number
        nums: number[]
        success?: true
        failure?: true
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
        success?: true
        failure?: true
    }
}

export type ServerData = {
    addr: string
    port: number
    region: ServerRegion
    name: ServerIdentifier
    players: number
    key: string

    /** This is an ALClient only property. If the server addr should use `wss` instead of `ws`, we set this to true */
    secure?: boolean
}

export type ServerInfoData = {
    [T in MonsterName]?: ServerInfoDataLive | ServerInfoDataNotLive | ServerInfoDataEvent
} & {
    egghunt?: boolean
    halloween?: boolean
    holidayseason?: boolean
    lunarnewyear?: boolean
    valentines?: boolean
} & {
    goobrawl?: ServerInfoDataEvent
} & {
    abtesting?: ServerInfoDataEvent | {
        /** A date string of when sign-ups will stop for the event */
        signup_end: string
        /** How many characters are on team A. TODO: Check that this is actually what it means */
        A: number
        /** How many characters are on team B. TODO: Check that this is actually what it means */
        B: number
        /** The event ID. TODO: Do we need this? */
        id: string
    }
}

export type ServerInfoDataEvent = {
    /** A date string of when the event will end */
    end?: string
}

export type ServerInfoDataLive = {
    hp: number
    live: true
    map: MapName
    max_hp: number
    target?: string
    /** NOTE: Some event monsters don't have x and y (e.g.: Slenderman) */
    x?: number
    y?: number
}
export type ServerInfoDataNotLive = {
    live: false
    /** When the monster will spawn next */
    spawn: string
}

export type ServerMessageData = {
    color: string
    discord: string
    message: string
} | {
    color: string
    event: boolean
    message: string
}

export type SkillTimeoutData = {
    name: SkillName
    ms: number
    penalty: number
}

export type StartData = CharacterData & {
    info?: MapInfo
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

export type UIDataBuySell = {
    type: "-$" | "+$"
    id: string | "basics" | "scrolls"
    name: string
    item: {
        name: ItemName
        q: number
    }
    num?: string
}
export type UIDataTrade = {
    type: "+$$"
    seller: string
    buyer: string
    item: ItemData & { price: number }
    slot: TradeSlotType
    num: number
    snum: number
}
export type UIDataFishingMining = {
    type: "fishing_fail" | "fishing_none" | "fishing_start" | "mining_fail" | "mining_none" | "mining_start"
    name?: string
    direction?: number
}
export type UIDataMassProduction = {
    type: "massproduction"
    name: string
}
export type UIDataMLuck = {
    type: "mluck"
    from: string
    to: string
}
export type UIDataScare = {
    type: "scare"
    name: string
    ids: string[]
}

export type UIData = UIDataBuySell | UIDataTrade | UIDataFishingMining | UIDataMassProduction | UIDataMLuck | UIDataScare

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

export type ServerToClientEvents = {
    "achievement_progress": (data: AchievementProgressData) => void
    "action": (data: ActionData) => void
    "chat_log": (data: ChatLogData) => void
    "chest_opened": (data: ChestOpenedData) => void
    "cm": (data: CMData) => void
    "code_eval": (data: string) => void
    "death": (data: DeathData) => void
    "disappear": (data: DisappearData) => void
    "disappearing_text": (data: DisappearingTextData) => void
    // TODO: Add return data
    "disconnect_reason": (data: unknown) => void
    "drop": (data: ChestData) => void
    "eval": (data: EvalData) => void
    "emotion": (data: EmotionData) => void
    "entities": (data: EntitiesData) => void
    // TODO: Confirm that there isn't a separate `friends` socket event
    "friend": (data: FriendData) => void
    // TODO: Create GameErrorData type
    "game_error": (data: string | { message: string }) => void
    "game_event": (data: GameEventData) => void
    "game_log": (data: GameLogData) => void
    "game_response": (data: GameResponseData) => void
    "hit": (data: HitData) => void
    "invite": (data: InviteData) => void
    "limitdcreport": (data: LimitDCReportData) => void
    "lostandfound": (data: ItemDataTrade[]) => void
    "magiport": (data: { name: string }) => void
    "new_map": (data: NewMapData) => void
    "notthere": (data: NotThereData) => void
    "party_update": (data: PartyData) => void
    "ping_ack": (data: {id: string}) => void
    "player": (data: CharacterData) => void
    "players": (data: PlayersData) => void
    "pm": (data: PMData) => void
    "q_data": (data: PQData) => void
    "request": (data: { name: string }) => void
    "secondhands": (data: ItemDataTrade[]) => void
    "server_info": (data: ServerInfoData) => void
    "skill_timeout": (data: SkillTimeoutData) => void
    "start": (data: StartData) => void
    "tracker": (data: TrackerData) => void
    "ui": (data: UIData) => void
    "upgrade": (data: UpgradeData) => void
    "welcome": (data: WelcomeData) => void
}

export type ClientToServerSkillData =
/** Skills that don't take any parameters */
| { name: Extract<SkillName, "agitate" | "alchemy" | "charge" | "cleave" | "darkblessing" | "fishing" | "hardshell" | "invis" | "light" | "massproduction" | "massproductionpp" | "mcourage" | "mining" | "mshield" | "partyheal" | "scare" | "selfheal" | "stomp" | "warcry"> }
/** Skills that target an entity */
| { name: Extract<SkillName, "4fingers" | "absorb" | "burst" | "curse" | "huntersmark" | "magiport" | "mentalburst" | "mluck" | "piercingshot" | "pickpocket" | "quickpunch" | "quickstab" | "reflection" | "rspeed" | "supershot" | "taunt" | "zapperzap">, id: string }
/** Skills that use an item */
| { name: Extract<SkillName, "pcoat" | "shadowstrike">, num: number }
/** Skills that target an entity and use an item */
| { name: Extract<SkillName, "entangle" | "poisonarrow" | "revive" | "snowball">, id: string, num: number }
/** Other special skills */
| { name: Extract<SkillName, "3shot">, ids: [string, string, string] }
| { name: Extract<SkillName, "5shot">, ids: [string, string, string, string, string] }
| { name: Extract<SkillName, "blink" | "dash">, x: number, y: number }
| { name: Extract<SkillName, "cburst">, targets: [string, number][] }
| { name: Extract<SkillName, "energize">, id: string, mp: number }

export type ClientToServerEvents = {
    "attack": (data: { id: string }) => void
    "bet": (data: { type: "dice", dir: "up" | "down", num: number, gold: number }) => void
    "auth": (data: AuthData) => void
    // TODO: Create BankData type
    "bank": (data: { amount: number, operation: "deposit" | "withdraw"} | { inv: number, operation: "swap", pack: BankPackName, str: number } | { operation: "move", a: number, b: number, pack: BankPackName }) => void
    "booster": (data: { action: "shift", num: number, to: string }) => void
    // TODO: Create BuyData type
    "buy": (data: { name: ItemName, quantity?: number }) => void
    "cm": (data: { message: string, to: string[] }) => void
    // TODO: Create CompoundData type
    "compound": (data: { calculate?: boolean, clevel: number, items: [number, number, number], offering_num?: number, scroll_num: number}) => void
    // TODO: Create CraftData type
    "craft": (data: { items: [number, number][] }) => void
    "dismantle": (data: { num: number }) => void
    "donate": (donation: { gold: number }) => void
    "emotion": (data: { name: EmotionName }) => void
    "enter": (data: { name: string, place: MapName }) => void
    "equip": (data: { num: number, slot: SlotType } | { consume: true, num: number } | { num: number, price: number, q: number, slot: TradeSlotType }) => void
    "exchange": (data: { item_num: number, q?: number }) => void
    // TODO: Create ExchangeBuyData type
    "exchange_buy": (data: { name: ItemName, num: number, q: number }) => void
    // TODO: Create FriendData type
    // NOTE: We already have FriendData for receiving `friend` sockets.
    //       Maybe FriendEmitData type?
    "friend": (data: { event: "accept" | "request" | "unfriend", name: string }) => void
    "heal": (data: { id: string }) => void
    "imove": (data: { a: number, b: number }) => void
    "interaction": (data: { key: string } | { type: "newyear_tree" }) => void
    "join": (data: { name: string }) => void
    "join_giveaway": (data: { slot: TradeSlotType, id: string, rid: string }) => void
    "leave": () => void
    "loaded": (data: LoadedData) => void
    "lostandfound": (reserveInfo?: "info") => void
    "mail": (data: { item: boolean, message: string, subject: string, to: string }) => void
    "mail_take_item": (data: { id: string }) => void
    "magiport": (data: { name: string }) => void
    "merchant": (data: {close: number } | { num: number }) => void
    "monsterhunt": () => void
    "move": (data: { going_x: number, going_y: number, m: number, x: number, y: number } | { key: "down" | "left" | "right" | "up"}) => void
    "open_chest": (data: { id: string }) => void
    // TODO: Create PartyData type
    // NOTE: We already have PartyData for receiving `party_update` sockets.
    //       Maybe change existing PartyData to PartyUpdateData?
    "party": (data: { event: "accept" | "invite" | "kick" | "raccept" | "request", name: string } | { event: "leave" }) => void
    // TODO: Create PingTrigData type
    "ping_trig": (data: { id: string }) => void
    "players": () => void
    // TODO: Create PropertyData type
    "property": (data: { typing: boolean }) => void
    "respawn": (data: { safe: boolean }) => void
    "say": (data: { message: string, name?: string }) => void
    // TODO: Create SBuyData type
    "sbuy": (data: { rid: string }) => void
    "secondhands": () => void
    "sell": (data: { num: number, quantity: number }) => void
    "send": (data: { gold: number, name: string } | { name: string, num: number, q: number }) => void
    // TODO: Create SendUpdatesData type
    "send_updates": (data: Record<string, never>) => void
    "skill": (data: ClientToServerSkillData) => void
    "stop": (data: { action: "invis" | "town" }) => void
    "town": () => void
    "tracker": () => void
    "transport": (data: { s: number, to: MapName }) => void
    // TODO: Confirm that 'q' is a string
    // TODO: Create TradeBuyData type
    "trade_buy": (data: { id: string, q: string, rid: string, slot: TradeSlotType }) => void
    "trade_sell": (data: { id: string, q: number, rid: string, slot: TradeSlotType }) => void
    "trade_wishlist": (data: { level?: number, name: ItemName, price: number, q: number, slot: TradeSlotType }) => void
    "unequip": (data: { slot: SlotType | TradeSlotType }) => void
    "upgrade": (data: { calculate?: boolean, clevel: number, item_num: number, offering_num: number, scroll_num: number }) => void
    "use": (data: { item: "hp" | "mp" }) => void
}