/**
 * This file aims to contain definitions for data in http://adventure.land/data.js
 * In-game, this is *most* things that are available in parent.G
 */

import { DamageType } from "./adventureland"

export type GData2 = {
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
        } & {
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
    monsters: {
        [T in MonsterName]: {
            /** If true, all attacks will only do 1 damage to this monster */
            "1hp"?: boolean
            /** (GUI) If set, the sprite will continue its animation when it's standing still. */
            aa?: number
            /** Abilities that this monster has */
            abilities?: {
                [T in SkillName]?: {
                    cooldown: number
                    radius?: number
                    aura?: boolean
                    condition?: ConditionName
                } & {
                    "burn": {
                        unlimited: boolean
                        attr0: number
                    }
                } & {
                    "heal": {
                        cooldown: number
                        heal: number
                    }
                } & {
                    "self_healing"?: {
                        cooldown: number
                        heal: number
                    }
                } & {
                    "weakness_aura"?: {
                        cooldown: number
                        radius: number
                        aura: true
                        condition: "weakness"
                    }
                }
            }
            /** Tracker achievements. [points needed, "stat", stat type, improvement] */
            achievements?: [number, "stat", Attribute, number][]
            /** The higher the number, the more likely the monster will attack you if you're near it */
            aggro: number
            /** (GUI) The color of text used to announce this monster when it spawns. */
            announce?: string
            /** TODO: ??? What is this? Documentation? */
            article?: string
            /** The amount of damage the monster can deal */
            attack: number
            /** TODO: ??? What is this? The name of the player that suggested changes for the monster? */
            balance?: string
            /** The speed the monster will move when targeting something */
            charge?: number
            /** If set, drops are split among all players who help kill this monster */
            cooperative?: boolean
            /** If set, the monster won't level up */
            cute?: boolean
            damage_type: DamageType
            /** TODO: ??? What is this? A multiplier for difficulty calculation in the GUI? */
            difficulty?: number
            /** Will teleport away if hit. PROTIP: Stun these monsters, and kill them before the stun runs out! */
            escapist?: boolean
            /** Flavour text that explains extra information, like when it spawns. */
            explanation?: string
            /** TODO: ??? Does this mean it can appear on all maps? */
            global?: boolean
            /** If set, the monster will steal gold on attack. */
            goldsteal?: number
            /** (GUI) Attack animation */
            hit?: string
            humanoid?: boolean
            /** Immune monsters can only be hurt by basic attacks. Skills won't hit. */
            immune?: boolean
            /** TODO: More information. Wizard: "Acts as a gold multiplier" */
            lucrativeness?: number
            /** Human readable name for the monster. */
            name: string
            /** TODO: ??? What is this? */
            operator?: boolean
            /** TODO: ??? What is this? */
            passive?: boolean
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
            /** If you kill this monster (TODO: Confirm you have to kill this monster), this condition will be applied to you */
            rbuff?: ConditionName
            /** The monster will respawn within this many milliseonds. If it's set to -1, it's special / we don't know.
             * NOTE: For >200 second respawn monsters, the variance is from 0.6 to 2.2 of their base time
             * https://discordapp.com/channels/238332476743745536/238332476743745536/729997473484898327
             **/
            respawn: number
            /** If set to true, the monster will roam around the entire map */
            roam?: boolean
            /** Initial conditions for the monster when it spawns */
            s?: { [T in ConditionName]: { ms: number } }
            /** (GUI) size modifier for sprite sizing */
            size?: number
            /** (GUI) Monster sprite */
            skin: string
            /** (GUI?) TODO: Confirm that this only affects the look of the monster. It will look like it's holding these weapons. */
            slots?: {
                mainhand: {
                    name: ItemName
                    level: number
                }
                offhand?: {
                    name: ItemName
                    level: number
                }
            }
            /** If set, this monster will spawn more monsters [ms between spawns, monster to spawn] */
            spawns?: [number, MonsterName][]
            special?: boolean
            /** If set, this monster will not move */
            stationary?: boolean
            /** TODO: ??? What is this? */
            supporter?: boolean
            /** If this is set, the monster isn't really a monster, it's a trap. */
            trap?: boolean
            /** TODO: ??? What is this? */
            unlist?: boolean
            /** How much XP the monster will give if you kill it. NOTE: This can be negative! Don't kill the puppies! */
            xp: number
        } & {
            [T in Attribute]?: number
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
        } & {
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

export type EmotionName =
    | "drop_egg"

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
    | "emotionjar"
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

export type MonsterName =
    | "a1"
    | "a2"
    | "a3"
    | "a4"
    | "a5"
    | "a6"
    | "a7"
    | "a8"
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
    | "cutebee"
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
    | "vbat"
    | "wabbit"
    | "welemental"
    | "wolf"
    | "wolfie"
    | "xscorpion"
    | "zapper0"

export type SkillName =
    | "3shot"
    | "4fingers"
    | "5shot"
    | "absorb"
    | "agitate"
    | "alchemy"
    | "anger"
    | "attack"
    | "blink"
    | "burst"
    | "cburst"
    | "charge"
    | "charm"
    | "cleave"
    | "curse"
    | "curse_aura"
    | "dampening_aura"
    | "darkblessing"
    | "emotion"
    | "energize"
    | "entangle"
    | "esc"
    | "fishing"
    | "gm"
    | "hardshell"
    | "heal"
    | "healing"
    | "huntersmark"
    | "interact"
    | "invis"
    | "light"
    | "magiport"
    | "massproduction"
    | "massproductionpp"
    | "mcourage"
    | "mentalburst"
    | "mlight"
    | "mluck"
    | "move_down"
    | "move_left"
    | "move_right"
    | "move_up"
    | "mshield"
    | "mtangle"
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
    | "weakness_aura"
    | "xpower"
    | "zap"

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