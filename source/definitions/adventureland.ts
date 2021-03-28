export type GData = {
    // TODO: Add
    achievements: { [T in string]: any }
    base_gold: { [T in MonsterName]?: {
        /** The base amount of gold this monster drops if you kill it in the given map */
        [T in MapName]?: number
    } };
    classes: { [T in CharacterType]: {
        damage_type: DamageType
        /** A list of items that the character can equip using both hands */
        doublehand: { [T in WeaponType]?: {
            /** Modifier on the given stat for equipping this type of item */
            [T in StatType]?: number
        } };
        /** A list of items that the character can equip in its mainhand */
        mainhand: { [T in WeaponType]?: {
            /** Modifier on the given stat for equipping this type of item */
            [T in StatType]?: number
        } };
        /** A list of items that the character can equip in its offhand */
        offhand: { [T in WeaponType]?: {
            /** Modifier on the given stat for equipping this type of item */
            [T in StatType]?: number
        } };
    } };
    conditions: { [T in ConditionName]: {
        /** Indicates whether the condition is a penalty or not */
        bad?: boolean;
        buff?: boolean;
        /** The length the condition lasts in ms */
        duration?: number;
        interval?: number;
    } & {
        [T in StatType]?: number
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
    items: { [T in ItemName]: GItem };
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
    monsters: { [T in MonsterName]: GMonster };
    npcs: { [T in NPCType]: {
        id: NPCType;
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
        id: NPCType;
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
        requirements?: { [T in StatType]?: number }
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
    id: NPCType
    name?: string
    position: [number, number, number?]
    positions: [number, number, number?]
}

export type GMonster = {
    /** If set, the monster will only take 1 damage from attacks */
    "1hp"?: true
    // TODO: Improve this to separate the damage and heal in to respective types
    abilities?: { [T in SkillName]?: {
        cooldown?: number
        damage?: number
        heal?: number
    } }
    /**
   * This is a list of Tracktrix achievements you can get by killing these monsters
   * [0]: # of monsters you need to kill to get this level of achievement
   * [1]: TODO: Looks to be just "stat" at this point
   * [2]: The StatType that gets an improvement
   * [3]: The amount of that StatType that gets improved
   */
    achievevments?: [number, "stat", StatType, number][]
    aggro: number
    /** If set, the monster will have this speed set when it is targeting a player */
    charge?: number
    /** If set to true, all players that deal damage to this monster will share the loot */
    cooperative?: true
    damage_type: DamageType
    /** If true, when the monster dies, the chest will drop on the player's location, not where the monster died */
    global?: true
    /** If true, the monster can only be damaged using basic attacks.
   * NOTE: Immunity doesn't prevent the monster from being stunned */
    immune?: true
    /** TODO: Confirm || boosts the amount of XP obtained when you kill this monster? */
    lucrativeness?: number
    name: string
    rage: number
    /** The monster will respawn within this many milliseonds. If it's set to -1, it's special / we don't know.
   * NOTE: For >200 second respawn monsters, the variance is from 0.6 to 2.2 of their base time
   * https://discordapp.com/channels/238332476743745536/238332476743745536/729997473484898327
   */
    respawn: number
    spawns?: [number, MonsterName][]
    special?: true
    xspawns?: [number, MonsterName][]

    // GUI related things
    aa?: number // TODO: Conirm what this is
    announce: string
    hit?: string
    projectile?: string
    skin: string
    size?: number // TODO: Confirm that size doesn't affect things

    // The following stats are available on all monsterss
    attack: number
    frequency: number
    hp: number
    mp: number
    range: number
    xp: number
} & {
    [T in StatType]?: number
}

export type GItem = {
    buy?: boolean;
    /** Contains information about what stats the item will gain with each compound level. Set if the item is compoundable. */
    compound?: {
        [T in StatType]?: number
    };
    damage?: DamageType;
    /** Refers to how many items are needed to exchange (see .quest as well!) */
    e?: number;
    /** Cost of the item in gold, if an NPC were to sell this item */
    g: number;
    gives: ["hp" | "mp", number][]
    /** The first number refers to what level the item begins being "high" grade, the second for "rare" */
    grades?: [number, number];
    /** The full name of the item */
    name: string;
    id: ItemName;
    // TODO: Add a type for quests
    /** Indicates the "quest" that this item is needed to complete */
    quest: string;
    /** Indicates how many of this items you can stack. Set if the item is stackable. */
    s: number;
    /** Contains information about what stats the item will gain with each upgrade level. Set if the item is upgradable. */
    upgrade?: {
        [T in StatType]?: number
    };
    type: ItemType;
    wtype: WeaponType;
} & { [T in StatType]?: number }

export type BankInfo = {
    [T in Exclude<BankPackType, "gold">]?: ItemInfo[]
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
    stat_type?: StatType
    // TODO: Confirm
    /** If set, the item might drop if we die to another player's attacks (i.e. die to PvP) */
    v?: boolean
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
    };
    citizen0aura?: {
        luck: number;
    };
    citizen4aura?: {
        gold: number;
    };
}

export type SInfo = { [T in MonsterName]?: IPosition & {
    map: string;
    live: boolean;
    hp: number;
    max_hp: number;
    /** The character name that the monster is currently attacking */
    target?: string;
} } & {
    valentines?: boolean;
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
    /**
   * Contains the name of the map
   */
    map?: MapName;
    x: number;
    y: number;
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

// TODO: Get all types (from G?)
export type DamageType =
    | "magical"
    | "physical"
    | "pure"

// TODO: Get all types
export type ItemType =
    | "box"
    | "cape"
    | "gem"
    | "material"
    | "misc"
    | "pot"
    | "quest"

// TODO: Get all stat types
export type StatType =
    /** Armor Piercing */
    | "apiercing"
    | "armor"
    | "attack"
    /** AOE */
    | "blast"
    | "cuteness"
    | "dex"
    /** Damage Return */
    | "dreturn"
    | "evasion"
    | "explosion"
    /** fire resistance */
    | "firesistance"
    /** fortitude */
    | "for"
    /** attack speed */
    | "frequency"
    /** freeze resistance */
    | "fzresistance"
    | "gold"
    | "hp"
    | "int"
    | "lifesteal"
    | "luck"
    /** Miss chance */
    | "miss"
    | "mp"
    | "mp_cost"
    | "mp_reduction"
    /** poison resistance */
    | "pnresistance"
    | "range"
    | "reflection"
    | "resistance"
    | "speed"
    | "str"
    | "stun"
    | "vit"
    | "xp"

/** These can be placed on items. They respond to the keys in `G.titles`. */
export type TitleName =
    | "critmonger"
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

export type WeaponType =
    | "axe"
    | "basher"
    | "bow"
    | "crossbow"
    | "dagger"
    | "dartgun"
    | "fist"
    | "mace"
    | "pmace"
    | "rapier"
    | "short_sword"
    | "spear"
    | "staff"
    | "stars"
    | "sword"
    | "wand"
    | "wblade"

export type MonsterName =
    | "arcticbee"
    | "armadillo"
    | "bat"
    | "bbpompom"
    | "bee"
    | "bigbird"
    | "bluefairy"
    | "boar"
    | "booboo"
    | "bscorpion"
    | "cgoo"
    | "chestm"
    | "crab"
    | "crabx"
    | "croc"
    | "d_wiz"
    | "dknight2"
    | "dragold"
    | "eelemental"
    | "ent"
    | "felemental"
    | "fieldgen0"
    | "fireroamer"
    | "franky"
    | "frog"
    | "fvampire"
    | "gbluepro"
    | "ggreenpro"
    | "ghost"
    | "goblin"
    | "goldenbat"
    | "goo"
    | "gpurplepro"
    | "gredpro"
    | "greenfairy"
    | "greenjr"
    | "grinch"
    | "gscorpion"
    | "hen"
    | "iceroamer"
    | "jr"
    | "jrat"
    | "kitty1"
    | "kitty2"
    | "kitty3"
    | "kitty4"
    | "ligerx"
    | "mechagnome"
    | "minimush"
    | "mole"
    | "mrgreen"
    | "mrpumpkin"
    | "mummy"
    | "mvampire"
    | "nelemental"
    | "nerfedmummy"
    | "oneeye"
    | "osnake"
    | "phoenix"
    | "pinkgoblin"
    | "pinkgoo"
    | "plantoid"
    | "poisio"
    | "porcupine"
    | "pppompom"
    | "prat"
    | "puppy1"
    | "puppy2"
    | "puppy3"
    | "puppy4"
    | "rat"
    | "redfairy"
    | "rooster"
    | "rudolph"
    | "scorpion"
    | "skeletor"
    | "snake"
    | "snowman"
    | "spider"
    | "squig"
    | "squigtoad"
    | "stompy"
    | "stoneworm"
    | "target"
    | "target_a500"
    | "target_a750"
    | "target_ar500red"
    | "target_ar900"
    | "target_r500"
    | "target_r750"
    | "tinyp"
    | "tortoise"
    | "wabbit"
    | "welemental"
    | "wolf"
    | "wolfie"
    | "xscorpion"

export type BankPackType =
    | "gold"
    | "items0"
    | "items1"
    | "items10"
    | "items11"
    | "items12"
    | "items13"
    | "items14"
    | "items15"
    | "items16"
    | "items17"
    | "items18"
    | "items19"
    | "items2"
    | "items20"
    | "items21"
    | "items22"
    | "items23"
    | "items24"
    | "items25"
    | "items26"
    | "items27"
    | "items28"
    | "items29"
    | "items3"
    | "items30"
    | "items31"
    | "items32"
    | "items33"
    | "items34"
    | "items35"
    | "items36"
    | "items37"
    | "items38"
    | "items39"
    | "items4"
    | "items40"
    | "items41"
    | "items42"
    | "items43"
    | "items44"
    | "items45"
    | "items46"
    | "items47"
    | "items5"
    | "items6"
    | "items7"
    | "items8"
    | "items9"

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

export type ConditionName =
    | "authfail"
    | "blink"
    | "burned"
    | "charging"
    | "charmed"
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

export type ItemName =
    | "5bucks"
    | "ale"
    | "amuletofm"
    | "angelwings"
    | "apiercingscroll"
    | "apologybox"
    | "armorbox"
    | "armorring"
    | "armorscroll"
    | "ascale"
    | "axe3"
    | "bandages"
    | "basher"
    | "basketofeggs"
    | "bataxe"
    | "bcandle"
    | "bcape"
    | "beewings"
    | "bfang"
    | "bfur"
    | "bkey"
    | "blade"
    | "blue"
    | "bottleofxp"
    | "bow"
    | "bow4"
    | "bowofthedead"
    | "bronzeingot"
    | "bronzenugget"
    | "brownegg"
    | "btusk"
    | "bugbountybox"
    | "bunnyears"
    | "bunnyelixir"
    | "bwing"
    | "cake"
    | "candy0"
    | "candy0v2"
    | "candy0v3"
    | "candy1"
    | "candy1v2"
    | "candy1v3"
    | "candycane"
    | "candycanesword"
    | "candypop"
    | "cape"
    | "carrot"
    | "carrotsword"
    | "cclaw"
    | "cdarktristone"
    | "cdragon"
    | "cearring"
    | "charmer"
    | "chrysalis0"
    | "claw"
    | "coal"
    | "coat"
    | "coat1"
    | "cocoon"
    | "computer"
    | "confetti"
    | "cosmo0"
    | "cosmo1"
    | "cosmo2"
    | "cosmo3"
    | "cosmo4"
    | "crabclaw"
    | "cring"
    | "critscroll"
    | "crossbow"
    | "cryptkey"
    | "cscale"
    | "cscroll0"
    | "cscroll1"
    | "cscroll2"
    | "cscroll3"
    | "cshell"
    | "ctristone"
    | "cupid"
    | "cxjar"
    | "cyber"
    | "dagger"
    | "daggerofthedead"
    | "darktristone"
    | "dartgun"
    | "dexamulet"
    | "dexbelt"
    | "dexearring"
    | "dexearringx"
    | "dexring"
    | "dexscroll"
    | "dkey"
    | "dragondagger"
    | "drapes"
    | "dreturnscroll"
    | "dstones"
    | "ecape"
    | "ectoplasm"
    | "eears"
    | "egg0"
    | "egg1"
    | "egg2"
    | "egg3"
    | "egg4"
    | "egg5"
    | "egg6"
    | "egg7"
    | "egg8"
    | "eggnog"
    | "electronics"
    | "elixirdex0"
    | "elixirdex1"
    | "elixirdex2"
    | "elixirfires"
    | "elixirfzres"
    | "elixirint0"
    | "elixirint1"
    | "elixirint2"
    | "elixirluck"
    | "elixirpnres"
    | "elixirstr0"
    | "elixirstr1"
    | "elixirstr2"
    | "elixirvit0"
    | "elixirvit1"
    | "elixirvit2"
    | "emptyheart"
    | "emptyjar"
    | "epyjamas"
    | "eslippers"
    | "espresso"
    | "essenceofether"
    | "essenceoffire"
    | "essenceoffrost"
    | "essenceofgreed"
    | "essenceoflife"
    | "essenceofnature"
    | "evasionscroll"
    | "exoarm"
    | "fallen"
    | "fcape"
    | "fclaw"
    | "feather0"
    | "fieldgen0"
    | "fierygloves"
    | "figurine"
    | "fireblade"
    | "firebow"
    | "firecrackers"
    | "firestaff"
    | "firestars"
    | "flute"
    | "forscroll"
    | "frankypants"
    | "frequencyscroll"
    | "frogt"
    | "frostbow"
    | "froststaff"
    | "frozenkey"
    | "frozenstone"
    | "fsword"
    | "ftrinket"
    | "funtoken"
    | "fury"
    | "gbow"
    | "gcape"
    | "gem0"
    | "gem1"
    | "gem2"
    | "gem3"
    | "gemfragment"
    | "ghatb"
    | "ghatp"
    | "gift0"
    | "gift1"
    | "glitch"
    | "gloves"
    | "gloves1"
    | "goldbooster"
    | "goldenegg"
    | "goldenpowerglove"
    | "goldingot"
    | "goldnugget"
    | "goldring"
    | "goldscroll"
    | "gphelmet"
    | "greenbomb"
    | "greenenvelope"
    | "gslime"
    | "gstaff"
    | "gum"
    | "hammer"
    | "handofmidas"
    | "harbringer"
    | "harmor"
    | "hboots"
    | "hbow"
    | "hdagger"
    | "heartwood"
    | "helmet"
    | "helmet1"
    | "hgloves"
    | "hhelmet"
    | "hotchocolate"
    | "hpamulet"
    | "hpants"
    | "hpbelt"
    | "hpot0"
    | "hpot1"
    | "hpotx"
    | "iceskates"
    | "ijx"
    | "ink"
    | "intamulet"
    | "intbelt"
    | "intearring"
    | "intring"
    | "intscroll"
    | "jacko"
    | "jewellerybox"
    | "kitty1"
    | "lantern"
    | "lbelt"
    | "leather"
    | "ledger"
    | "licence"
    | "lifestealscroll"
    | "lmace"
    | "lostearring"
    | "lotusf"
    | "lspores"
    | "luckbooster"
    | "luckscroll"
    | "luckyt"
    | "mace"
    | "maceofthedead"
    | "mageshood"
    | "manastealscroll"
    | "mbelt"
    | "mbones"
    | "mcape"
    | "mcarmor"
    | "mcboots"
    | "mcgloves"
    | "mchat"
    | "mcpants"
    | "mearring"
    | "merry"
    | "mistletoe"
    | "mittens"
    | "mmarmor"
    | "mmgloves"
    | "mmhat"
    | "mmpants"
    | "mmshoes"
    | "molesteeth"
    | "monsterbox"
    | "monstertoken"
    | "mparmor"
    | "mpcostscroll"
    | "mpgloves"
    | "mphat"
    | "mpot0"
    | "mpot1"
    | "mpotx"
    | "mppants"
    | "mpshoes"
    | "mpxamulet"
    | "mpxbelt"
    | "mpxgloves"
    | "mrarmor"
    | "mrboots"
    | "mrgloves"
    | "mrhood"
    | "mrnarmor"
    | "mrnboots"
    | "mrngloves"
    | "mrnhat"
    | "mrnpants"
    | "mrpants"
    | "mshield"
    | "mushroomstaff"
    | "mwarmor"
    | "mwboots"
    | "mwgloves"
    | "mwhelmet"
    | "mwpants"
    | "mysterybox"
    | "networkcard"
    | "nheart"
    | "northstar"
    | "offering"
    | "offeringp"
    | "offeringx"
    | "oozingterror"
    | "orbg"
    | "orbofdex"
    | "orbofint"
    | "orbofsc"
    | "orbofstr"
    | "orbofvit"
    | "ornament"
    | "ornamentstaff"
    | "outputscroll"
    | "oxhelmet"
    | "pants"
    | "pants1"
    | "partyhat"
    | "phelmet"
    | "pico"
    | "pinkie"
    | "placeholder"
    | "placeholder_m"
    | "platinumingot"
    | "platinumnugget"
    | "pleather"
    | "pmace"
    | "poison"
    | "poker"
    | "pouchbow"
    | "powerglove"
    | "pstem"
    | "pumpkinspice"
    | "puppy1"
    | "puppyer"
    | "pvptoken"
    | "pyjamas"
    | "qubics"
    | "quiver"
    | "rabbitsfoot"
    | "rapier"
    | "rattail"
    | "redenvelope"
    | "redenvelopev2"
    | "redenvelopev3"
    | "rednose"
    | "reflectionscroll"
    | "resistancering"
    | "resistancescroll"
    | "rfangs"
    | "rfur"
    | "ringofluck"
    | "ringsj"
    | "rod"
    | "rpiercingscroll"
    | "sanguine"
    | "santasbelt"
    | "scroll0"
    | "scroll1"
    | "scroll2"
    | "scroll3"
    | "scroll4"
    | "scythe"
    | "seashell"
    | "shadowstone"
    | "shield"
    | "shoes"
    | "shoes1"
    | "slimestaff"
    | "smoke"
    | "smush"
    | "snakefang"
    | "snakeoil"
    | "snowball"
    | "snowboots"
    | "snowflakes"
    | "snring"
    | "solitaire"
    | "spear"
    | "spearofthedead"
    | "speedscroll"
    | "spidersilk"
    | "spores"
    | "sshield"
    | "sstinger"
    | "staff"
    | "staff2"
    | "staff3"
    | "staff4"
    | "staffofthedead"
    | "stand0"
    | "stand1"
    | "starkillers"
    | "stealthcape"
    | "stick"
    | "stinger"
    | "stonekey"
    | "stoneofgold"
    | "stoneofluck"
    | "stoneofxp"
    | "storagebox"
    | "stramulet"
    | "strbelt"
    | "strearring"
    | "strring"
    | "strscroll"
    | "suckerpunch"
    | "supermittens"
    | "svenom"
    | "swifty"
    | "swirlipop"
    | "sword"
    | "swordofthedead"
    | "t2bow"
    | "t2dexamulet"
    | "t2intamulet"
    | "t2quiver"
    | "t2stramulet"
    | "t3bow"
    | "talkingskull"
    | "test"
    | "test2"
    | "test_orb"
    | "throwingstars"
    | "tombkey"
    | "tracker"
    | "trigger"
    | "trinkets"
    | "tristone"
    | "troll"
    | "tshell"
    | "tshirt0"
    | "tshirt1"
    | "tshirt2"
    | "tshirt3"
    | "tshirt4"
    | "tshirt6"
    | "tshirt7"
    | "tshirt8"
    | "tshirt88"
    | "tshirt9"
    | "ukey"
    | "vattire"
    | "vblood"
    | "vboots"
    | "vcape"
    | "vdagger"
    | "vgloves"
    | "vhammer"
    | "vitearring"
    | "vitring"
    | "vitscroll"
    | "vorb"
    | "vring"
    | "vstaff"
    | "vsword"
    | "wand"
    | "warmscarf"
    | "warpvest"
    | "watercore"
    | "wattire"
    | "wbasher"
    | "wblade"
    | "wbook0"
    | "wbook1"
    | "wbreeches"
    | "wcap"
    | "weaponbox"
    | "weaver"
    | "wgloves"
    | "whiskey"
    | "whiteegg"
    | "wine"
    | "wingedboots"
    | "woodensword"
    | "wshield"
    | "wshoes"
    | "x0"
    | "x1"
    | "x2"
    | "x3"
    | "x4"
    | "x5"
    | "x6"
    | "x7"
    | "x8"
    | "xarmor"
    | "xboots"
    | "xbox"
    | "xgloves"
    | "xhelmet"
    | "xmace"
    | "xmashat"
    | "xmaspants"
    | "xmasshoes"
    | "xmassweater"
    | "xpants"
    | "xpbooster"
    | "xpscroll"
    | "xptome"
    | "xshield"
    | "xshot"

export type MapName =
    | "abtesting"
    | "arena"
    | "bank"
    | "bank_b"
    | "bank_u"
    | "batcave"
    | "cave"
    | "cgallery"
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
    | "mansion_u"
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
    | "tunnel"
    | "winter_cave"
    | "winter_inn"
    | "winter_inn_rooms"
    | "winterland"
    | "woffice"

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

export type NPCType =
    | "antip2w"
    | "appearance"
    | "armors"
    | "basics"
    | "bean"
    | "beans"
    | "bouncer"
    | "citizen0"
    | "citizen1"
    | "citizen10"
    | "citizen11"
    | "citizen12"
    | "citizen13"
    | "citizen14"
    | "citizen15"
    | "citizen2"
    | "citizen3"
    | "citizen4"
    | "citizen5"
    | "citizen6"
    | "citizen7"
    | "citizen8"
    | "citizen9"
    | "compound"
    | "craftsman"
    | "exchange"
    | "fancypots"
    | "firstc"
    | "fisherman"
    | "funtokens"
    | "gemmerchant"
    | "goldnpc"
    | "guard"
    | "holo"
    | "holo0"
    | "holo1"
    | "holo2"
    | "holo3"
    | "holo4"
    | "holo5"
    | "items0"
    | "items1"
    | "items10"
    | "items11"
    | "items12"
    | "items13"
    | "items14"
    | "items15"
    | "items16"
    | "items17"
    | "items18"
    | "items19"
    | "items2"
    | "items20"
    | "items21"
    | "items22"
    | "items23"
    | "items24"
    | "items25"
    | "items26"
    | "items27"
    | "items28"
    | "items29"
    | "items3"
    | "items30"
    | "items31"
    | "items32"
    | "items33"
    | "items34"
    | "items35"
    | "items36"
    | "items37"
    | "items38"
    | "items39"
    | "items4"
    | "items40"
    | "items41"
    | "items42"
    | "items43"
    | "items44"
    | "items45"
    | "items46"
    | "items47"
    | "items5"
    | "items6"
    | "items7"
    | "items8"
    | "items9"
    | "jailer"
    | "leathermerchant"
    | "lichteaser"
    | "locksmith"
    | "lostandfound"
    | "lotterylady"
    | "mcollector"
    | "mistletoe"
    | "monsterhunter"
    | "newupgrade"
    | "newyear_tree"
    | "ornaments"
    | "pete"
    | "pots"
    | "premium"
    | "princess"
    | "pvp"
    | "pvpblocker"
    | "pvptokens"
    | "pwincess"
    | "rewards"
    | "santa"
    | "scrolls"
    | "secondhands"
    | "shellsguy"
    | "ship"
    | "shrine"
    | "standmerchant"
    | "tavern"
    | "tbartender"
    | "thief"
    | "transporter"
    | "wbartender"
    | "weapons"
    | "witch"
    | "wizardrepeater"
    | "wnpc"

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

export type SkillName =
    | "3shot"
    | "4fingers"
    | "5shot"
    | "absorb"
    | "agitate"
    | "alchemy"
    | "attack"
    | "blink"
    | "burst"
    | "cburst"
    | "charge"
    | "charm"
    | "cleave"
    | "curse"
    | "darkblessing"
    | "energize"
    | "entangle"
    | "esc"
    | "gm"
    | "hardshell"
    | "heal"
    | "huntersmark"
    | "interact"
    | "invis"
    | "light"
    | "magiport"
    | "massproduction"
    | "mcourage"
    | "mentalburst"
    | "mluck"
    | "move_down"
    | "move_left"
    | "move_right"
    | "move_up"
    | "mshield"
    | "multi_burn"
    | "multi_freeze"
    | "open_snippet"
    | "partyheal"
    | "pcoat"
    | "phaseout"
    | "piercingshot"
    | "poisonarrow"
    | "portal"
    | "power"
    | "pure_eval"
    | "quickpunch"
    | "quickstab"
    | "reflection"
    | "regen_hp"
    | "regen_mp"
    | "revive"
    | "rspeed"
    | "scare"
    | "self_healing"
    | "selfheal"
    | "shadowstrike"
    | "snippet"
    | "snowball"
    | "stack"
    | "stomp"
    | "stone"
    | "stop"
    | "supershot"
    | "tangle"
    | "taunt"
    | "throw"
    | "toggle_character"
    | "toggle_code"
    | "toggle_inventory"
    | "toggle_run_code"
    | "toggle_stats"
    | "track"
    | "travel"
    | "use_hp"
    | "use_mp"
    | "use_town"
    | "warcry"
    | "warp"
    | "xpower"