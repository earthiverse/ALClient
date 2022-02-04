/**
 * This file aims to contain definitions for data in http://adventure.land/data.js
 * In-game, this is *most* things that are available in parent.G
 */

import { IPosition, ItemType, SlotInfo, SlotType, WeaponType } from "./adventureland.js"

export type GData = {
    achievements: {
        [T in AchievementName]: {
            /** The achievement name (human readable) */
            name: string
            /** An explanation how this achievement works, or how you obtain it */
            explanation?: string
            /** If you achieve this achievement, you get this item */
            item?: ItemName
            /** If you achieve this achievement, you get this many shells */
            shells?: number
            /** The number of times you have to do the thing to get the achievement */
            count?: number
            /** If this is set, your item will obtain this title if you get this achievement */
            title?: TitleName
            /** TODO: What is this? */
            rr?: number
        }
    }
    animations: {
        [T in AnimationName]: {
            aspeed?: "fast" | "mild" | "slow"
            alpha?: number
            bubble?: boolean
            continuous?: boolean
            directional?: boolean
            exact?: boolean
            fade?: boolean
            framefps?: number
            front?: boolean
            file: string
            frames: number
            proportional?: boolean
            scale?: number
            size?: number
            speed?: number
            speeding?: boolean
            tiling?: boolean
            y?: number
        }
    }
    classes: { [T in CharacterType]: {
        [T in Attribute]?: number
    } & {
        /** What items you get if you create a new character */
        base_slots: Partial<SlotInfo>
        /** TODO: ??? What does this do? Does it prevent your damage from decreasing when feared? */
        brave?: boolean
        /** What type of damage this class does */
        damage_type: DamageType
        /** A short lore of the class */
        description: string
        /** A list of items that the class can equip using both hands */
        doublehand: { [T in WeaponType]?: {
            /** Modifier on the given stat for equipping this type of item */
            [T in Attribute]?: number
        } };
        /** (GUI related) What sprites are available for the given class */
        looks: [string, CXData][]
        /** Statistics the class gets with a level up */
        lstats: {
            dex: number
            for: number
            int: number
            str: number
            vit: number
        }
        /** (GUI related) What sprite to use for heals */
        healing_projectile?: string
        /** The class's main attribute. Increasing this will increase attack. */
        main_stat: Attribute
        /** A list of items that the class can equip in its mainhand */
        mainhand: { [T in WeaponType]?: {
            /** Modifier on the given stat for equipping this type of item */
            [T in Attribute]?: number
        } };
        /** A list of items that the class can equip in its offhand */
        offhand: { [T in WeaponType]?: {
            /** Modifier on the given stat for equipping this type of item */
            [T in Attribute]?: number
        } };
        /** (GUI related) What sprite the class uses for attacks */
        projectile: string
        /** TODO: ??? What is this? */
        side_stat?: Attribute
        /** Statistics the class starts with */
        stats: {
            dex: number
            for: number
            int: number
            str: number
            vit: number
        }
        /** TODO: ??? GUI related? */
        xcx?: any[]
    } };
    conditions: {
        "eburn": {
            damage: number
            intensity: string
        }
    } & {
        "reflection": {
            cap_reflection: number
        }
    } & {
        [T in ConditionName]: {
            [T in Exclude<Attribute, "attr0">]?: number
        } & {
            /** TODO: ??? What is this? The attribute the condition provides!? */
            attr0?: string
            /** TODO: ??? Does this mean it is caused by an aura, or it causes an aura? */
            aura?: boolean
            /** The condition name (human readable) */
            name: string
            /** A description of what the condition does / what caused the condition. */
            explanation?: string
            /** Is this a 'bad' condition to have? (see also: `buff`) */
            bad?: boolean
            /** If this is true, you won't be able to attack */
            blocked?: boolean
            /** Is this a 'good' condition to have? (see also: `bad`) */
            buff?: boolean
            /** TODO: Confirm. For channeled conditions, if you move around, it won't be cancelled. */
            can_move?: boolean
            /** TODO: Confirm. If this is true, attacking, moving, or using a skill will cause the condition to go away. (NOTE: You can still move if can_move is true) */
            channel?: boolean
            /** If true, this will persist even when your character is logged out. */
            persistent?: boolean
            /** If set, the condition will 'proc' every this many ms. For example, 'burned' will cause damage every interval. */
            interval?: number
            /** How long the condition will affect your character. */
            duration?: number
            /** Some conditions have a random chance of how long they will take. This is the minimum, if that's the case. */
            duration_min?: number
            /** TODO: CONFIRM. If 'ui' is true, this will show the condition in the native game UI. */
            ui?: boolean
            /** Skin (image) for this condition */
            skin?: string
            /** If true, this is related to a technical reason, e.g. not verifying your email, not from the game. */
            technical?: boolean
        } }
    cosmetics: {
        bundle: {
            [T in string]: string[]
        }
        default_beard_position: number
        default_face_position: number
        default_hair_place: number
        default_hat_place: number
        default_head_place: number
        default_makeup_position: number
        gravestone: {
            [T in string]: number
        }
        hair: {
            [T in string]: [number, number]
        }
        hat: {
            [T in string]: number
        }
        head: {
            [T in string]: [string, string, string, number?]
        }
        map: {
            old: string
        }
        no_upper: []
        prop: {
            [T in string]: string[]
        }

    }
    craft: { [T in ItemName]?: {
        /** These are the items that are required to craft the given item
         *  [quantity, item name, item level (0 if not set)] */
        items: [number, ItemName, number?][]
        /** The cost to craft this item */
        cost: number
        quest?: Extract<NPCName, "mcollector" | "witch">
    } }
    dimensions: {
        [T in MonsterName | "default_character"]?: [number, number, number?, number?, number?]
    }
    dismantle: {
        [T in ItemName]?: {
            /** What items you get when you dismantle [quantity (chance if < 1), item name] */
            items: [number, ItemName][]
            /** How much it costs to disassemble the given item */
            cost: number
        }
    }
    // TODO: Add Type Information
    docs: any
    drops: {
        [T in DropName]: GDropItem[]
    } | {
        gold: {
            base: number
            random: number
            x10: number
            x50: number
        }
    } | {
        maps: {
            [T in MapName | "global_static" | "global"]?: GDropItem[]
        }
    } | {
        monsters: {
            [T in MonsterName]?: GDropItem[]
        }
    } | {
        skins: {
            bronze: string[]
            gold: string[]
            normal: string[]
            silver: string[]
        }
    }
    emotions: {
        [T in EmotionName]?: {
            /** How long you have to wait to use an emotion again after using this emotion */
            cooldown: number
            /** The emotion name */
            fx: EmotionName
        }
    }
    geometry: {
        [T in Exclude<MapName, "batcave" | "d1" | "d2" | "d3" | "frozencave" | "maintest" | "old_bank" | "old_main" | "original_main" | "therush">]: GGeometry
    }
    // TODO: Add type information
    images: any
    // TODO: Add type information
    imagesets: any
    items: {
        [T in ItemName]: GItem
    };
    levels: {
        [T in string]?: number
    }
    maps: {
        [T in Exclude<MapName, "d1" | "d3" | "frozencave" | "maintest" | "therush">]: GMap
    }
    monsters: {
        [T in Exclude<MonsterName, "terracota">]: GMonster
    }
    npcs: {
        [T in NPCName]: {
            [T in Attribute]?: number
        } & {
            /** TODO: ??? What is this? */
            allow?: boolean
            /** TODO: ??? What is this? GUI related? */
            aspeed?: "slow" | "slower" | "fast"
            /** TODO: ??? What is this? GUI related? */
            atype?: "flow" | "once"
            /** If you stand near this NPC, you will gain this aura */
            aura?: {
                [T in Attribute]?: number
            }
            /** TODO: ??? What is this? GUI related? */
            color?: string
            /** Appearance related. Look & accessories. */
            cx?: CXData
            /** TODO: ??? What is this? GUI related? */
            delay?: number
            /** The same NPCName as `G.npcs[NPCName]` */
            id: NPCName
            /** TODO: ??? What is this? Does this mean the NPC won't spawn? */
            ignore?: boolean
            /** (GUI) A list of things the NPC will say if you click on it in game */
            interaction?: string[]
            /** TODO: ??? What is this? GUI related? */
            interval?: number
            /** A list of items that you can buy from this NPC. */
            items?: ItemName[]
            /** NPC level? */
            level?: number
            /** NOTE: Not sure why this exists. Some NPCs which don't have this still move */
            moving?: boolean
            /** Their human readable name */
            name?: string
            /** TODO: ??? What is this? Items they used to sell, but no longer sell? */
            old_items?: ItemName[]
            /** TODO: ??? What is this? Their old role? */
            old_role?: "merchant" | "premium"
            /** TODO: ??? What is this? Their old interaction? */
            old_side_interaction?: {
                auto: boolean
                message: string
                skin: string
            }
            /** For bank NPCs, this is the bank pack they represent */
            pack?: BankPackName
            /** If the quest is an ItemName, you can exchange it at this NPC.
             *  If it's "cx", you can exchange cosmetic jars.
             *  If it's "mcollector", you can exchange whatever has `quest: "mcollector"` in `G.craft`
             *  If it's "witch", you can exchange whatever has `quest: "witch"` in `G.craft` */
            quest?: QuestName
            /** The role the NPC has */
            role: "announcer" | "blocker" | "bouncer" | "citizen" | "companion" | "compound" | "craftsman" | "cx" | "daily_events" | "exchange" | "funtokens" | "gold" | "guard" | "items" | "jailer" | "locksmith" | "lostandfound" | "lotterylady" | "mcollector" | "merchant" | "monstertokens" | "newupgrade" | "newyear_tree" | "petkeeper" | "premium" | "pvp_announcer" | "pvptokens" | "quest" | "repeater" | "resort" | "rewards" | "secondhands" | "shells" | "ship" | "shrine" | "standmerchant" | "tavern" | "tease" | "thesearch" | "transport" | "witch" | string
            /** (GUI) Lines the NPC can say */
            says?: string[] | string
            /** (GUI) More interactions. TODO: How is this different than interaction? */
            side_interaction?: {
                auto: boolean
                message: string
                skin: string
            }
            /** (GUI) Sprite for the NPC */
            skin: string
            /** How fast the NPC moves */
            speed?: number
            /** (GUI) If set, the stand sprite for the NPC */
            stand?: string
            /** TODO: ??? What is this? GUI related? */
            steps?: number
            /** TODO: ??? What is this? GUI related? */
            stopframe?: number
            /** If set, you can exchange tokens of this type at this NPC */
            token?: ItemName
            /** TODO: ??? GUI related? */
            type?: "full" | "fullstatic" | "static"
        }
    } & {
        "transporter": {
            /** Places that the transporter can take you */
            places?: {
                /** The number refers to the given spawn on the map */
                [T in MapName]?: number
            }
        }
    }
    /** TODO: ??? What is this? GUI related sprite positions in some sort of image map? */
    positions: {
        "textures": string[]
    } | {
        [T in string]:
        [string, number, number, number, number][] | [string, number, number, number, number] | [string, number, number]
    }
    projectiles: {
        [T in ProjectileName]: {
            animation: string
            hit_animation?: string
            pure?: boolean
            ray?: boolean
            /** Projectile speed */
            speed: number
        }
    }
    sets: {
        [T in SetName]: {
            /** Bonus for having 1 piece of the set equipped */
            "1": { [T in Attribute]?: number }
            /** Bonus for having 2 pieces of the set equipped */
            "2": { [T in Attribute]?: number }
            /** Bonus for having 3 pieces of the set equipped */
            "3"?: { [T in Attribute]?: number }
            /** Bonus for having 4 pieces of the set equipped */
            "4"?: { [T in Attribute]?: number }
            /** Bonus for having 5 pieces of the set equipped */
            "5"?: { [T in Attribute]?: number }
            /** Bonus for having 6 pieces of the set equipped */
            "6"?: { [T in Attribute]?: number }
            /** Bonus for having 7 pieces of the set equipped */
            "7"?: { [T in Attribute]?: number }
            /** Flavour text for the set */
            explanation?: string
            /** What items contribute to the set bonus */
            items: ItemName[]
            /** Set bonus name */
            name: string
        }
    }
    /** If you buy an item with shells, this is the ratio of shells to gold */
    shells_to_gold: number
    skills: { [T in SkillName]: {
        action?: string
        apiercing?: number;
        aura?: boolean
        class?: CharacterType[]
        code?: boolean | string
        /** Additional */
        complementary?: string
        condition?: ConditionName
        consume?: ItemName
        cooldown?: number
        cooldown_multiplier?: number
        damage?: number
        damage_multiplier?: number
        damage_type?: DamageType
        /** How long the condition lasts */
        duration?: number
        /** An exlpanation of what this skill does */
        explanation?: string
        /** If true, we can't use this skill in a safe zone */
        hostile?: boolean;
        /** Items that this we need to use the skill */
        inventory?: ItemName[];
        level?: number;
        levels?: [number, number][]
        /** If set, the skill requires a list of targets */
        list?: boolean
        max?: number
        /** Can we use this skill on monsters? */
        monsters?: boolean;
        /** MP Cost for skill */
        mp?: number;
        /** The name of the skill */
        name: string;
        negative?: ItemName[]
        nprop?: Attribute[]
        /** For skills that get better with level, this is how much the default does */
        output?: number
        /** If this is set, this skill will affect all party members */
        party?: boolean
        passive?: boolean
        persistent?: boolean
        /** If this is set, this skill can be used against immune monsters. */
        pierces_immunity?: boolean
        positive?: ItemName[]
        range?: number;
        range_bonus?: number;
        range_multiplier?: number;
        /** For MP use skills on the mage, 1 mp will equal this much damage */
        ratio?: number;
        /** Requirements for using the skill */
        requirements?: { [T in Attribute]?: number }
        reuse_cooldown?: number
        set_speed?: number
        /** The cooldown this skill shares with another skill */
        share?: SkillName;
        skin?: string
        skins?: string[]
        /** The item(s) required to use this skill */
        slot?: [SlotType, ItemName][];
        /** Does this skill require a single target? (Don't use an array) */
        target?: boolean;
        /** Does this skill require multiple targets? (Use an array) */
        targets?: boolean;
        toggle?: boolean;
        /** NOTE: If the type is 'monster', only monsters have this ability */
        type?: "ability" | "gm" | "monster" | "passive" | "skill" | "utility"
        ui?: boolean
        warning?: string;
        /** The weapon type needed to use this skill */
        wtype?: WeaponType | WeaponType[];
        /** How much percent to vary the output by (random chance) */
        variance?: number
    } }
    // TODO: Add type information
    sprites: {
        [T in string]: {
            columns: number
            rows: number
            type?: "a_hat" | "a_makeup" | "animation" | "armor" | "beard" | "body" | "character" | "emblem" | "face" | "gravestone" | "hair" | "hat" | "head" | "makeup" | "s_wings" | "skin" | "tail" | "v_animation"
            /** The URL that contains the sprites in the matrix */
            file: string
            /** List of sprites in the given file */
            matrix: string[][]
            rskip?: boolean
            size?: "large" | "normal" | "small" | "xsmall" | "xxsmall"
            /** If set to true, the game will not load the sprite sheet. */
            skip?: number
        }
    }
    tilesets: {
        [T in TilesetName]: {
            /** The URL that contains the tileset */
            file: string
            /** TODO: ??? Animation? */
            frames?: number
            /** TODO: ??? Animation? */
            frame_width?: number
        }
    }
    titles: {
        "sniper": {
            consecutive_200p_range_last_hits: number
        }
    } & {
        [T in TitleName]: {
            [T in Attribute]?: number
        } & {
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
        } }
    tokens: {
        [T in "funtoken" | "monstertoken" | "pvptoken"]: {
            /** For the ItemName, it costs this many tokens */
            [T in ItemName]?: number
        }
    }
    /** Version number for this data. */
    version: number
}

export type CXData = {
    chin?: string
    face?: string
    hair?: string
    hat?: string
    head?: string
    makeup?: string
    upper?: string
}

/**
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
 * [7]: If "key", then you need [8] as an item to open this door
 *
 * [8]: If [7] is "key", then this is the key that is required to open this door
 */
export type DoorInfo = [number, number, number, number, MapName, number?, number?, ("key" | "protected" | "ulocked")?, (ItemName | "complicated")?]

export type GGeometry = {
    /** (GUI Related) This is the default tile index to use to tile the map. This is below the player layer.
     *
     * i.e.: `G.geometry[map].tiles[G.geometry[map].default]` */
    default?: number
    /** (GUI Related) [tile index, min_x, min_y, max_x, max_y, y_disp]. These are above the player layer.
     *
     * See: https://pixijs.download/dev/docs/PIXI.Container.html */
    groups?: ([number, number, number, number, number, number] | [number, number, number])[][]
    /** The maximum x-coordinate limit for this map */
    max_x: number
    /** The maximum y-coordinate limit for this map */
    max_y: number
    /** The minimum x-coordinate limit for this map */
    min_x: number
    /** The minimum y-coordinate limit for this map */
    min_y: number
    /** (GUI Related) These are tiles that overlay the map, below the player layer. */
    placements: ([number, number, number, number, number] | [number, number, number])[]
    /** [x, y]. Potentially used in the past for map traversal. */
    points?: {
        [T in string]: [number, number]
    }
    /** Related to G.maps[mapName].zones */
    polygons?: {
        [T in string]: [number, number][]
    }
    /** Related to doors, quirks, and spawns. */
    rectangles?: {
        [T in string]: [number, number, number, number]
    }
    /** (GUI Related) Texture atlas for tiles, [name, x, y, height, width] */
    tiles: ([TilesetName, number, number, number, number] | [TilesetName, number, number, number])[]
    /* Walls along the x-axis. The wall is from ([0], [1]) to ([0], [2]) */
    x_lines?: [number, number, number][]
    /* Walls along the y-axis. The wall is from ([1], [0]) to ([2], [0]) */
    y_lines?: [number, number, number][]
}

export type GItem = {
    [T in Exclude<Attribute, "stat">]?: number
} & {
    /** (TODO: Obsolete?) Related to 'announce'? */
    a?: boolean | number
    ability?: "burn" | "freeze" | "posion" | "poke" | "restore_mp" | "secondchance" | "sugarrush" | "weave" | SkillName
    /** (GUI related) Item border accent color */
    acolor?: string
    /** TODO: ??? What is this? Is this related to special items? */
    action?: string
    /** Wearing this item grants the given aura */
    aura?: ConditionName
    /** Cost of the item in shells */
    cash?: number
    /** If set, only these class types can use this item */
    class?: CharacterType[]
    /** If set, the item is upgradable. How the item gets better if you compound it. */
    compound?: {
        [T in Attribute]?: number
    }
    /** Time to wait until you can use this type of item again */
    cooldown?: number
    /** TODO: ??? The user who came up with the idea for this item? */
    credit?: string
    /** (GUI Related) Styles to apply to the item in the inventory */
    cx?: {
        accent?: string
        border?: number
        extension?: boolean
        large?: boolean
        lightborder?: boolean
        scale?: number
    }
    damage?: DamageType
    /** How long the booster is good for */
    days?: number
    /** If true, this item will remove conditions */
    debuff?: boolean
    /** Human readable flavor text */
    delia?: string
    /** How long the elixir will last */
    duration?: number
    /** TODO: ??? What is this? Why don't all elixirs have 'eat'? */
    eat?: boolean
    /** TODO: ??? What is this? */
    edge?: number
    /** If set, you can exchange this many of the item for something (see 'G.drops') */
    e?: number
    /** If true, this item is related to an event */
    event?: boolean
    /** TODO: ??? What is this? */
    exclusive?: boolean
    /** Human readable flavor text for the item */
    explanation?: string
    /** Bonus to the amount of stat points you get from applying a scroll to the item */
    extra_stat?: number
    /** Item worth */
    g: number
    gain?: Attribute
    gives?: [[Attribute, number]]
    /** TODO: Confirm. Upgrade/compound scroll grade */
    grade?: number
    /** What level the item increases grade at [high, rare, legendary, exalted] */
    grades?: [number, number, number, number]
    /** TODO: Confirm. Equipping this item offers the following cosmetic. */
    hat?: string
    /** If true, the item is probably old. */
    ignore?: boolean
    /** TODO: ??? Obsolete? */
    legacy?: {
        class?: null
        gold?: number
        luck?: number
        set?: null
    }
    /** If set, you will only get `item.g / item.markup` gold for selling the item. */
    markup?: number
    /** TODO: ??? Pets? */
    monster?: MonsterName
    multiplier?: number
    /** Human readable name for the item */
    name: string
    /** Human readable lore */
    nopo?: string
    /** (Obsolete?) Basically the same as "explanation" */
    note?: string
    /** Which NPC to trade the item with */
    npc?: NPCName
    /** TODO: ??? What is this? */
    offering?: number
    /** TODO: Confirm. (GUI related) If set, clicking on this item will cause the given javascript to run. */
    onclick?: string
    /** TODO: Confirm. Opens the given dungeon */
    opens?: MapName
    /** (GUI related) Projectile to use for weapon attacks */
    projectile?: ProjectileName
    /** TODO: ??? GUI related? */
    projectile_test?: string
    /** TODO: ??? What is this? */
    protection?: boolean
    /** Relates to where you can exchange this item. (See: G.npcs[NPCName].quest) */
    quest?: QuestName
    rare?: boolean
    /** For tome of protection, it rewards the player who kills you with this % of the item cost (item.g) */
    reward?: number
    /** If set, you can stack this many of the item in one inventory slot */
    s?: number | boolean
    /** TODO: Confirm. If true, you can apply a scroll to this item to give it stats */
    scroll?: boolean
    set?: string
    /** GUI picture for the item */
    skin: string
    skin_a?: string
    skin_c?: string
    skin_r?: string
    /** Spawns the given monster */
    spawn?: MonsterName | "terracota"
    special?: boolean
    /** If set, you can use this item as a merchant stand */
    stand?: string
    stat?: Attribute | number
    tier?: number
    /** Human readable history and lore for the item */
    trex?: string
    type: ItemType
    /** This key unlocks the given map */
    unlocks?: MapName
    /** If set, the item is upgradable. How the item gets better if you upgrade it. */
    upgrade?: {
        [T in Attribute]?: number
    }
    /** After consuming the item, and its effects wear off, you will get the following debuff  */
    withdrawal?: ConditionName
    wtype?: WeaponType
    /** TODO: Confirm. Equipping this item allows you to equip the following cosmetics */
    xcx?: string[]
    /** TODO: ??? What is this? */
    xscroll?: boolean
}

export type GDropItem =
    /** The drop is an item [chance, item name, item quantity] */
    | [number, ItemName, number?]
    /** The drop is a cosmetic */
    | [number, "cx" | "cxbundle", string]
    | [number, "cxjar", number, string]
    /** The drop is an emotion */
    | [number, "emotionjar", number, EmotionName]
    /** The drop is nothing */
    | [number, "empty"]
    /** The drop is gold, or shells [chance, gold/shells, number of gold/shells] */
    | [number, "gold" | "shells", number]
    /** The drop is an item from another drop table */
    | [number, "open", DropName]

export type GMap = {
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
    /** If true, this map is PVP. */
    pvp?: boolean
    /** If true, you cannot be attacked on this map. */
    safe?: boolean
    /** TODO: Confirm. If true, does this mean you don't lose things when you die? */
    safe_pvp?: boolean
    /** TODO: ??? What is this? */
    loss?: false
    /** If you die on this map, you will spawn at the given map and spawn. */
    on_death?: [MapName, number]
    /** TODO: Confirm. If you logout while your character is on this map, you will be at the given map and spawn next time you login */
    on_exit?: [MapName, number]
    /** TODO: ??? What is this? */
    drop_norm?: number
    monsters?: {
        boundary?: [number, number, number, number]
        boundaries?: [MapName, number, number, number, number][]
        /** Rage boundary. Enter this and all monsters will target you. */
        rage?: [number, number, number, number]
        polygon?: [number, number][]
        count: number
        gatekeeper?: boolean
        grow?: boolean
        type: MonsterName
        stype?: "randomrespawn"
        /** TODO: ??? Does this mean they roam around the map? */
        roam?: boolean
        /** TODO: ??? What is this? */
        special?: boolean

        /** TODO: ??? Old? */
        position?: [number, number]
        /** TODO: ??? Old? */
        radius?: number
    }[];
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
        id: NPCName
        /** Human readable NPC name */
        name?: string
    }[]
    /** A list of doors on the map */
    doors: DoorInfo[]
    /** Essentially a unique ID for the map. Contains a little more information than the `name`. */
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
    quirks?: [number, number, number, number, string | "compound" | "info" | "invisible_statue" | "list_pvp" | "log" | "note" | "sign" | "the_lever" | "upgrade", string?][]
    /** If set, this map has a different burn chance %. Multiply the burn chance by this multiplier. */
    burn_multiplier?: number
    /** If set, this map has a different freeze chance %. Multiply the freeze chance by this multiplier. */
    freeze_multiplier?: number
    /**
     * [0]: x position where you spawn
     *
     * [1]: y position where you spawn
     *
     * [2]: Direction to face the character when you spawn
     *
     * [3]: If set, randomly places you within this distance of the spawn to prevent stacking. TODO: Confirm.
     */
    spawns: ([number, number, number?, number?])[]
    /** TODO: What is this? */
    world?: string
    traps?: {
        type: "debuff" | "spikes"
        polygon?: [number, number][]
        position?: [number, number]
    }[]
    animatables?: {
        [T in string]?: {
            x: number
            y: number
            position: string
        }
    }
    event?: string
    /** TODO: Figure out these types */
    machines?: any
    /** TODO: ??? What is this? GUI related? */
    unlist?: boolean
    /** TODO: ??? GUI related? */
    fx?: string
    /** TODO: ??? GUI related? */
    weather?: string
    /** Zones are special areas where you can use certain skills. */
    zones?: {
        drop: string
        type: "fishing" | "mining"
        polygon: [number, number][]
    }[]
    /** TODO: ??? What is this? GUI related? */
    ref?: {
        [T in string]?: IPosition | [number, number, number, number] | [number, number]
    }
    /** TODO: ??? Old? Deprecated? */
    old_monsters?: {
        count: number
        boundary: [number, number, number, number]
        type: MonsterName
    }[]
}

export type GMonster = {
    [T in Attribute]?: number
} & {
    /** If true, all attacks will only do 1 damage to this monster */
    "1hp"?: boolean
    /** (GUI) If set, the sprite will continue its animation when it's standing still. (AA = Always Animate) */
    aa?: number
    /** Abilities that this monster has */
    abilities?: {
        [T in SkillName]?: {
            cooldown: number
            radius?: number
            aura?: boolean
            condition?: ConditionName
        }
    } & {
        "burn"?: {
            unlimited: boolean
            attr0: number
        }
    } & {
        "degen"?: {
            amount: number
        }
    } & {
        "heal"?: {
            heal: number
        }
    } & {
        "multi_burn"?: {
            damage: number
        }
    } & {
        "putrid"?: {
            curse: boolean
            poison: boolean
        }
    } & {
        "self_healing"?: {
            heal: number
        }
    } & {
        "weakness_aura"?: {
            condition: "weakness"
        }
    } & {
        "zap"?: {
            amount: number
        }
    }
    /** Tracker achievements. [points needed, "stat", stat type, improvement] */
    achievements?: [number, "stat", Attribute, number][]
    /** The higher the number, the more likely the monster will attack you if you're near it */
    aggro: number
    /** (GUI) The color of text used to announce this monster when it spawns. */
    announce?: boolean | string
    /** TODO: ??? What is this? Documentation? */
    article?: string
    /** The amount of damage the monster can deal */
    attack: number
    /** TODO: ??? What is this? The name of the player that suggested changes for the monster? */
    balance?: string
    /** If you kill this monster, you get the corresponding buff to your level */
    cbuff?: [number, ConditionName][]
    /** The speed the monster will move when targeting something */
    charge?: number
    /** If set, drops are split among all players who help kill this monster */
    cooperative?: boolean
    /** If set, the monster won't level up */
    cute?: boolean
    damage_type: DamageType
    /** TODO: ??? What is this? A multiplier for difficulty calculation in the GUI? */
    difficulty?: number
    /** If true, the monster will drop every time you hit the item */
    drop_on_hit?: boolean
    /** Will teleport away if hit. PRO TIP: Stun these monsters if they're not immune, and kill them before the stun runs out! */
    escapist?: boolean
    /** Flavour text that explains extra information, like when it spawns. */
    explanation?: string
    frequency: number
    /** TODO: ??? Does this mean it can appear on all maps? */
    global?: boolean
    /** If set, the monster will steal gold on attack. */
    goldsteal?: number
    /** (GUI) If true, it won't show in the in-game guides. */
    hide?: boolean
    /** (GUI) Attack animation */
    hit?: string
    hp: number
    humanoid?: boolean
    /** Immune monsters can only be hurt by basic attacks. Skills won't hit. */
    immune?: boolean
    /** TODO: More information. Wizard: "Acts as a gold multiplier" */
    lucrativeness?: number
    mp: number
    /** Human readable name for the monster. */
    name: string
    /** TODO: ??? What is this? */
    operator?: boolean
    /** TODO: Confirm. What orientation to show the monster on spawn. */
    orientation?: number
    /** TODO: ??? What is this? */
    passive?: boolean
    /** TODO: Confirm if this is correct: If true, the monster won't attack back */
    peaceful?: boolean
    pet?: {
        aggression: [number, number]
        brightness: number
        chatter: [number, number]
        courage: [number, number]
        exponential: boolean
        level: {
            [T in Attribute]?: number
        }
        obedience: [number, number]
        passion: [number, number]
        xp: number
    }
    /** If set, the monster will cause the condition `poisoned` on attack. */
    poisonous?: boolean
    /** (GUI?) */
    prefix?: string
    /** (GUI) Projectile sprite */
    projectile?: string
    /** The higher the rage, the more likely the monster is to attack (and target) you if you are near it */
    rage: number
    range: number
    /** If you kill this monster (TODO: Confirm you have to kill this monster), this condition will be applied to you */
    rbuff?: ConditionName
    /** The monster will respawn within this many seconds. If it's set to -1, it's special / we don't know.
     * NOTE: For >200 second respawn monsters, the variance is 0.72 + (0 to 0.48) of their base time
     * https://discord.com/channels/238332476743745536/238332476743745536/730109494130114661
     **/
    respawn: number
    /** If set, after the monster is killed, this monster will spawn */
    respawn_as?: MonsterName
    /** If set to true, the monster will roam around the entire map */
    roam?: boolean
    /** Initial conditions for the monster when it spawns */
    s?: { [T in ConditionName]?: { ms: number } }
    /** (GUI) size modifier for sprite sizing */
    size?: number
    /** (GUI) Monster sprite */
    skin: string
    /** (GUI?) TODO: Confirm that this only affects the look of the monster. It will look like it's holding these weapons. */
    slots?: Partial<SlotInfo>
    /** If set, this monster will spawn more monsters [ms between spawns, monster to spawn] */
    spawns?: [number, MonsterName][]
    special?: boolean
    speed: number
    /** If set, this monster will not move */
    stationary?: boolean
    /** TODO: ??? What is this? */
    supporter?: boolean
    /** If this is set, the monster isn't really a monster, it's a trap. */
    trap?: boolean
    /** TODO: I think this GUI related, to remove it from showing up in the monsters list in the game guide. */
    unlist?: boolean
    /** How much XP the monster will give if you kill it. NOTE: This can be negative! Don't kill the puppies! */
    xp: number
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
    /** Chance to avoid an attack (all damage types). */
    | "avoidance"
    /** TODO: ??? Joke stat? */
    | "awesomeness"
    /** TODO: Confirm. Deals % AoE damage around the target */
    | "blast"
    /** TODO: ??? Joke stat? */
    | "bling"
    /** Chance for the item to break on use */
    | "breaks"
    /** Run speed when the entity is targeting something. */
    | "charge"
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
    /** Fire resistance (%) */
    | "firesistance"
    /** Fortitude (Reduces the amount of PvP damage you take) */
    | "for"
    /** Attack Speed (decreases attack cooldown) */
    | "frequency"
    /** Attack speed multiplier */
    | "frequencym"
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
    /** % chance to miss a shot */
    | "miss"
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
    /** Potions Multiplier (potions will heal multiplied by this number) */
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

export type AchievementName =
    "100boss" | "1000boss" | "discoverlair" | "festive" | "firehazard" | "gooped" | "lucky" | "monsterhunter" | "reach40" | "reach50" | "reach60" | "reach70" | "reach80" | "reach90" | "stomped" | "upgrade10"

export type AnimationName =
    "acid" | "arrow_hit" | "arrow1" | "block" | "burst" | "carrow" | "confetti" | "crackle" | "cuarrow" | "curse_new" | "curse_projectile" | "curse" | "dampened" | "exchange" | "explode_a" | "explode_b" | "explode_c" | "explode_p" | "explode_up" | "failure" | "firearrow" | "fireball" | "fog" | "frostarrow" | "frostball" | "garrow" | "gm" | "gold_anim" | "gold" | "hardshell" | "heal_projectile" | "heal" | "hearts_single" | "icecrack" | "invincible" | "light" | "magic0" | "magic1" | "magic2" | "magic3" | "magic4" | "mblob_purplish" | "mblob_red" | "mblob" | "mluck" | "party_heal" | "pblob" | "pinky" | "poucharrow" | "rain" | "reflection" | "revival" | "rspeed" | "slash" | "slash0" | "slash1" | "slash2" | "slash3" | "snow" | "snowball_hit" | "snowball" | "snowflake" | "spark0" | "starkiller" | "stunned" | "success" | "superarrow" | "supershot" | "tangle" | "taunt" | "tiling_burst" | "tiling_burstj" | "transport" | "typing" | "wandy" | "wslash"

export type BankPackName =
    "items0" | "items1" | "items2" | "items3" | "items4" | "items5" | "items6" | "items7" | "items8" | "items9" | "items10" | "items11" | "items12" | "items13" | "items14" | "items15" | "items16" | "items17" | "items18" | "items19" | "items20" | "items21" | "items22" | "items23" | "items24" | "items25" | "items26" | "items27" | "items28" | "items29" | "items30" | "items31" | "items32" | "items33" | "items34" | "items35" | "items36" | "items37" | "items38" | "items39" | "items40" | "items41" | "items42" | "items43" | "items44" | "items45" | "items46" | "items47"

export type CharacterType =
    "mage" | "merchant" | "paladin" | "priest" | "ranger" | "rogue" | "warrior"


/**
 * Generate with:
 * { const is = []; for(const i in G.conditions) { is.push(i) }; is.sort(); console.log(`"${is.join('" | "')}"`) }
 */
export type ConditionName =
    "authfail" | "blink" | "burned" | "charging" | "charmed" | "cursed" | "dampened" | "darkblessing" | "dash" | "deepfreezed" | "easterluck" | "eburn" | "eheal" | "energized" | "fingered" | "fishing" | "frozen" | "fullguard" | "fullguardx" | "halloween0" | "halloween1" | "halloween2" | "hardshell" | "holidayspirit" | "invincible" | "invis" | "licenced" | "marked" | "massproduction" | "massproductionpp" | "mcourage" | "mining" | "mlifesteal" | "mluck" | "monsterhunt" | "mshield" | "newcomersblessing" | "notverified" | "phasedout" | "poisoned" | "poisonous" | "power" | "reflection" | "rspeed" | "sanguine" | "shocked" | "slowness" | "stack" | "stoned" | "stunned" | "sugarrush" | "tangled" | "town" | "warcry" | "weakness" | "withdrawal" | "xpower" | "xshotted"

export type DamageType =
    "heal" | "magical" | "none" | "physical" | "pure"

export type DropName =
    "5bucks" | "abtesting" | "apologybox" | "armorbox" | "armorx" | "basicelixir" | "basketofeggs" | "bugbountybox" | "candy0" | "candy0v2" | "candy0v3" | "candy1" | "candy1v2" | "candy1v3" | "candycane" | "candypop" | "cosmo0" | "cosmo1" | "cosmo2" | "cosmo3" | "eastereggs" | "f1" | "gem0" | "gem1_old" | "gem1" | "gemfragment" | "gift0" | "gift1" | "glitch" | "goldenegg" | "greenenvelope" | "jewellerybox" | "konami" | "leather" | "lightmage" | "lostearring0" | "lostearring1" | "lostearring2" | "lostearring3" | "lostearring4" | "m1" | "mistletoe" | "mysterybox" | "ornament" | "quiver" | "redenvelope" | "redenvelopev2_shouldhavebeen" | "redenvelopev2" | "redenvelopev3" | "seashell" | "statamulet" | "statbelt" | "statring" | "test" | "thrash" | "troll" | "weaponbox" | "weaponofthedead" | "xbox" | "xN"

export type EmotionName =
    | "drop_egg"
    | "hearts_single"

/**
 * Generate with:
 * { const is = []; for(const i in G.items) { is.push(i) }; is.sort(); console.log(`"${is.join('" | "')}"`) }
 */
export type ItemName =
    "5bucks" | "ale" | "amuletofm" | "angelwings" | "apiercingscroll" | "apologybox" | "armorbox" | "armorring" | "armorscroll" | "ascale" | "axe3" | "bandages" | "basher" | "basketofeggs" | "bataxe" | "bcandle" | "bcape" | "beewings" | "bfang" | "bfur" | "bkey" | "blade" | "blue" | "bottleofxp" | "bow" | "bow4" | "bowofthedead" | "bronzeingot" | "bronzenugget" | "broom" | "brownegg" | "btusk" | "bugbountybox" | "bunnyears" | "bunnyelixir" | "bwing" | "cake" | "candy0" | "candy0v2" | "candy0v3" | "candy1" | "candy1v2" | "candy1v3" | "candycane" | "candycanesword" | "candypop" | "cape" | "carrot" | "carrotsword" | "cclaw" | "cdarktristone" | "cdragon" | "cearring" | "charmer" | "chrysalis0" | "claw" | "coal" | "coat" | "coat1" | "cocoon" | "computer" | "confetti" | "cosmo0" | "cosmo1" | "cosmo2" | "cosmo3" | "cosmo4" | "crabclaw" | "cring" | "critscroll" | "crossbow" | "cryptkey" | "cscale" | "cscroll0" | "cscroll1" | "cscroll2" | "cscroll3" | "cshell" | "ctristone" | "cupid" | "cxjar" | "cyber" | "dagger" | "daggerofthedead" | "darktristone" | "dartgun" | "dexamulet" | "dexbelt" | "dexearring" | "dexearringx" | "dexring" | "dexscroll" | "dkey" | "dragondagger" | "drapes" | "dreturnscroll" | "dstones" | "ecape" | "ectoplasm" | "eears" | "egg0" | "egg1" | "egg2" | "egg3" | "egg4" | "egg5" | "egg6" | "egg7" | "egg8" | "eggnog" | "electronics" | "elixirdex0" | "elixirdex1" | "elixirdex2" | "elixirfires" | "elixirfzres" | "elixirint0" | "elixirint1" | "elixirint2" | "elixirluck" | "elixirpnres" | "elixirstr0" | "elixirstr1" | "elixirstr2" | "elixirvit0" | "elixirvit1" | "elixirvit2" | "emotionjar" | "emptyheart" | "emptyjar" | "epyjamas" | "eslippers" | "espresso" | "essenceofether" | "essenceoffire" | "essenceoffrost" | "essenceofgreed" | "essenceoflife" | "essenceofnature" | "evasionscroll" | "exoarm" | "fallen" | "fcape" | "fclaw" | "feather0" | "fieldgen0" | "fierygloves" | "figurine" | "fireblade" | "firebow" | "firecrackers" | "firestaff" | "firestars" | "flute" | "forscroll" | "frankypants" | "frequencyscroll" | "frogt" | "frostbow" | "froststaff" | "frozenkey" | "frozenstone" | "fsword" | "ftrinket" | "funtoken" | "fury" | "gbow" | "gcape" | "gem0" | "gem1" | "gem2" | "gem3" | "gemfragment" | "ghatb" | "ghatp" | "gift0" | "gift1" | "glitch" | "glolipop" | "gloves" | "gloves1" | "goldbooster" | "goldenegg" | "goldenpowerglove" | "goldingot" | "goldnugget" | "goldring" | "goldscroll" | "gphelmet" | "greenbomb" | "greenenvelope" | "gslime" | "gstaff" | "gum" | "hammer" | "handofmidas" | "harbringer" | "harmor" | "hboots" | "hbow" | "hdagger" | "heartwood" | "helmet" | "helmet1" | "hgloves" | "hhelmet" | "hotchocolate" | "hpamulet" | "hpants" | "hpbelt" | "hpot0" | "hpot1" | "hpotx" | "iceskates" | "ijx" | "ink" | "intamulet" | "intbelt" | "intearring" | "intring" | "intscroll" | "jacko" | "jewellerybox" | "kitty1" | "lantern" | "lbelt" | "leather" | "ledger" | "licence" | "lifestealscroll" | "lmace" | "lostearring" | "lotusf" | "lspores" | "luckbooster" | "luckscroll" | "luckyt" | "mace" | "maceofthedead" | "mageshood" | "manastealscroll" | "mbelt" | "mbones" | "mcape" | "mcarmor" | "mcboots" | "mcgloves" | "mchat" | "mcpants" | "mearring" | "merry" | "mistletoe" | "mittens" | "mmarmor" | "mmgloves" | "mmhat" | "mmpants" | "mmshoes" | "molesteeth" | "monsterbox" | "monstertoken" | "mparmor" | "mpcostscroll" | "mpgloves" | "mphat" | "mpot0" | "mpot1" | "mpotx" | "mppants" | "mpshoes" | "mpxamulet" | "mpxbelt" | "mpxgloves" | "mrarmor" | "mrboots" | "mrgloves" | "mrhood" | "mrnarmor" | "mrnboots" | "mrngloves" | "mrnhat" | "mrnpants" | "mrpants" | "mshield" | "mushroomstaff" | "mwarmor" | "mwboots" | "mwgloves" | "mwhelmet" | "mwpants" | "mysterybox" | "networkcard" | "nheart" | "northstar" | "offering" | "offeringp" | "offeringx" | "ololipop" | "oozingterror" | "orbg" | "orbofdex" | "orbofint" | "orbofsc" | "orbofstr" | "orbofvit" | "ornament" | "ornamentstaff" | "outputscroll" | "oxhelmet" | "pants" | "pants1" | "partyhat" | "phelmet" | "pickaxe" | "pico" | "pinkie" | "placeholder" | "placeholder_m" | "platinumingot" | "platinumnugget" | "pleather" | "pmace" | "pmaceofthedead" | "poison" | "poker" | "pouchbow" | "powerglove" | "pstem" | "pumpkinspice" | "puppy1" | "puppyer" | "pvptoken" | "pyjamas" | "qubics" | "quiver" | "rabbitsfoot" | "rapier" | "rattail" | "redenvelope" | "redenvelopev2" | "redenvelopev3" | "redenvelopev4" | "rednose" | "reflectionscroll" | "resistancering" | "resistancescroll" | "rfangs" | "rfur" | "ringhs" | "ringofluck" | "ringsj" | "rod" | "rpiercingscroll" | "sanguine" | "santasbelt" | "sbelt" | "scroll0" | "scroll1" | "scroll2" | "scroll3" | "scroll4" | "scythe" | "seashell" | "shadowstone" | "shield" | "shoes" | "shoes1" | "skullamulet" | "slimestaff" | "smoke" | "smush" | "snakefang" | "snakeoil" | "snowball" | "snowboots" | "snowflakes" | "snring" | "solitaire" | "spear" | "spearofthedead" | "speedscroll" | "spidersilk" | "spookyamulet" | "spores" | "sshield" | "sstinger" | "staff" | "staff2" | "staff3" | "staff4" | "staffofthedead" | "stand0" | "stand1" | "starkillers" | "stealthcape" | "stick" | "stinger" | "stonekey" | "stoneofgold" | "stoneofluck" | "stoneofxp" | "storagebox" | "stramulet" | "strbelt" | "strearring" | "strring" | "strscroll" | "suckerpunch" | "supercomputer" | "supermittens" | "svenom" | "sweaterhs" | "swifty" | "swirlipop" | "sword" | "swordofthedead" | "t2bow" | "t2dexamulet" | "t2intamulet" | "t2quiver" | "t2stramulet" | "t3bow" | "talkingskull" | "test" | "test2" | "test_orb" | "throwingstars" | "tigercape" | "tigerhelmet" | "tigershield" | "tigerstone" | "tombkey" | "tracker" | "trigger" | "trinkets" | "tristone" | "troll" | "tshell" | "tshirt0" | "tshirt1" | "tshirt2" | "tshirt3" | "tshirt4" | "tshirt6" | "tshirt7" | "tshirt8" | "tshirt88" | "tshirt9" | "ukey" | "vattire" | "vblood" | "vboots" | "vcape" | "vdagger" | "vgloves" | "vhammer" | "vitearring" | "vitring" | "vitscroll" | "vorb" | "vring" | "vstaff" | "vsword" | "wand" | "warmscarf" | "warpvest" | "watercore" | "wattire" | "wbasher" | "wblade" | "wbook0" | "wbook1" | "wbookhs" | "wbreeches" | "wcap" | "weaponbox" | "weaver" | "wgloves" | "whiskey" | "whiteegg" | "wine" | "wingedboots" | "woodensword" | "wshield" | "wshoes" | "x0" | "x1" | "x2" | "x3" | "x4" | "x5" | "x6" | "x7" | "x8" | "xarmor" | "xboots" | "xbox" | "xgloves" | "xhelmet" | "xmace" | "xmashat" | "xmaspants" | "xmasshoes" | "xmassweater" | "xpants" | "xpbooster" | "xpscroll" | "xptome" | "xshield" | "xshot" | "zapper"

export type MapName =
    "abtesting" | "arena" | "bank_b" | "bank_u" | "bank" | "batcave" | "cave" | "cgallery" | "crypt" | "cyberland" | "d_a1" | "d_a2" | "d_b1" | "d_e" | "d_g" | "d1" | "d2" | "d3" | "desertland" | "duelland" | "dungeon0" | "frozencave" | "goobrawl" | "halloween" | "hut" | "jail" | "level1" | "level2" | "level2e" | "level2n" | "level2s" | "level2w" | "level3" | "level4" | "main" | "maintest" | "mansion" | "mtunnel" | "old_bank" | "old_main" | "original_main" | "resort_e" | "resort" | "shellsisland" | "ship0" | "spookytown" | "tavern" | "test" | "therush" | "tomb" | "tunnel" | "winter_cave" | "winter_inn_rooms" | "winter_inn" | "winter_instance" | "winterland" | "woffice"

/**
 * Generate with:
 * { const is = []; for(const i in G.monsters) { is.push(i) }; is.sort(); console.log(`"${is.join('" | "')}"`) }
 */
export type MonsterName =
    "a1" | "a2" | "a3" | "a4" | "a5" | "a6" | "a7" | "a8" | "arcticbee" | "armadillo" | "bat" | "bbpompom" | "bee" | "bigbird" | "bluefairy" | "boar" | "booboo" | "bscorpion" | "cgoo" | "chestm" | "crab" | "crabx" | "croc" | "cutebee" | "d_wiz" | "dknight2" | "dragold" | "eelemental" | "ent" | "felemental" | "fieldgen0" | "fireroamer" | "franky" | "frog" | "fvampire" | "gbluepro" | "ggreenpro" | "ghost" | "goblin" | "goldenbat" | "goo" | "gpurplepro" | "gredpro" | "greenfairy" | "greenjr" | "grinch" | "gscorpion" | "hen" | "icegolem" | "iceroamer" | "jr" | "jrat" | "kitty1" | "kitty2" | "kitty3" | "kitty4" | "ligerx" | "mechagnome" | "minimush" | "mole" | "mrgreen" | "mrpumpkin" | "mummy" | "mvampire" | "nelemental" | "nerfedmummy" | "oneeye" | "osnake" | "phoenix" | "pinkgoblin" | "pinkgoo" | "plantoid" | "poisio" | "porcupine" | "pppompom" | "prat" | "puppy1" | "puppy2" | "puppy3" | "puppy4" | "rat" | "redfairy" | "rooster" | "rudolph" | "scorpion" | "skeletor" | "slenderman" | "snake" | "snowman" | "spider" | "squig" | "squigtoad" | "stompy" | "stoneworm" | "target" | "target_a500" | "target_a750" | "target_ar500red" | "target_ar900" | "target_r500" | "target_r750" | "tiger" | "tinyp" | "tortoise" | "vbat" | "wabbit" | "welemental" | "wolf" | "wolfie" | "xmagefi" | "xmagefz" | "xmagen" | "xmagex" | "xscorpion" | "zapper0"

export type NPCName =
    "antip2w" | "appearance" | "armors" | "basics" | "bean" | "beans" | "bouncer" | "citizen0" | "citizen1" | "citizen2" | "citizen3" | "citizen4" | "citizen5" | "citizen6" | "citizen7" | "citizen8" | "citizen9" | "citizen10" | "citizen11" | "citizen12" | "citizen13" | "citizen14" | "citizen15" | "compound" | "craftsman" | "exchange" | "fancypots" | "firstc" | "fisherman" | "funtokens" | "gemmerchant" | "goldnpc" | "guard" | "holo" | "holo0" | "holo1" | "holo2" | "holo3" | "holo4" | "holo5" | "items0" | "items1" | "items2" | "items3" | "items4" | "items5" | "items6" | "items7" | "items8" | "items9" | "items10" | "items11" | "items12" | "items13" | "items14" | "items15" | "items16" | "items17" | "items18" | "items19" | "items20" | "items21" | "items22" | "items23" | "items24" | "items25" | "items26" | "items27" | "items28" | "items29" | "items30" | "items31" | "items32" | "items33" | "items34" | "items35" | "items36" | "items37" | "items38" | "items39" | "items40" | "items41" | "items42" | "items43" | "items44" | "items45" | "items46" | "items47" | "jailer" | "leathermerchant" | "lichteaser" | "locksmith" | "lostandfound" | "lotterylady" | "mcollector" | "mistletoe" | "monsterhunter" | "newupgrade" | "newyear_tree" | "ornaments" | "pete" | "pots" | "premium" | "princess" | "pvp" | "pvpblocker" | "pvptokens" | "pwincess" | "rewards" | "santa" | "scrolls" | "secondhands" | "shellsguy" | "ship" | "shrine" | "standmerchant" | "tavern" | "tbartender" | "thief" | "transporter" | "wbartender" | "weapons" | "witch" | "wizardrepeater" | "wnpc"

export type ProjectileName =
    "acid" | "arrow" | "bigmagic" | "burst" | "crossbowarrow" | "cupid" | "curse" | "firearrow" | "fireball" | "frostarrow" | "frostball" | "garrow" | "magic_divine" | "magic_purple" | "magic" | "mmagic" | "momentum" | "pinky" | "plight" | "pmagic" | "poisonarrow" | "pouch" | "snowball" | "stone_k" | "stone" | "supershot" | "wandy" | "wmomentum"

export type SetName =
    "easter" | "fury" | "holidays" | "legends" | "mmage" | "mmerchant" | "mpriest" | "mpx" | "mranger" | "mrogue" | "mwarrior" | "rugged" | "swift" | "vampires" | "wanderers" | "wt3" | "wt4"

/**
 * Generate with:
 * { const is = []; for(const i in G.skills) { is.push(i) }; is.sort(); console.log(`"${is.join('" | "')}"`) }
 */
export type SkillName =
    "3shot" | "4fingers" | "5shot" | "absorb" | "agitate" | "alchemy" | "anger" | "attack" | "blink" | "burst" | "cburst" | "charge" | "charm" | "cleave" | "curse" | "curse_aura" | "dampening_aura" | "darkblessing" | "dash" | "deepfreeze" | "emotion" | "energize" | "entangle" | "esc" | "fishing" | "gm" | "hardshell" | "heal" | "healing" | "huntersmark" | "interact" | "invis" | "light" | "magiport" | "massproduction" | "massproductionpp" | "mcourage" | "mentalburst" | "mining" | "mlight" | "mluck" | "move_down" | "move_left" | "move_right" | "move_up" | "mshield" | "mtangle" | "multi_burn" | "multi_freeze" | "open_snippet" | "partyheal" | "pcoat" | "phaseout" | "piercingshot" | "poisonarrow" | "portal" | "power" | "pure_eval" | "quickpunch" | "quickstab" | "reflection" | "regen_hp" | "regen_mp" | "revive" | "rspeed" | "scare" | "self_healing" | "selfheal" | "shadowstrike" | "snippet" | "snowball" | "stack" | "stomp" | "stone" | "stop" | "supershot" | "tangle" | "taunt" | "throw" | "toggle_character" | "toggle_code" | "toggle_inventory" | "toggle_run_code" | "toggle_stats" | "track" | "travel" | "use_hp" | "use_mp" | "use_town" | "warcry" | "warp" | "warpstomp" | "weakness_aura" | "xpower" | "zap" | "zapperzap"

export type TilesetName =
    "ash" | "beach" | "castle" | "custom_a" | "custom" | "custom2" | "dark" | "doors" | "dungeon" | "fort" | "house" | "inside" | "jungle" | "licht" | "new" | "outside" | "puzzle" | "ruins" | "ship" | "stands" | "tree" | "water" | "winter"

export type TitleName =
    "critmonger" | "fast" | "festive" | "firehazard" | "glitched" | "gooped" | "legacy" | "lucky" | "shiny" | "sniper" | "stomped" | "superfast"

export type QuestName =
    | ItemName // Not all items are quests, check with `G.items[ItemName].e` if you can exchange it
    | "cx"
    | "mcollector"
    | "witch"