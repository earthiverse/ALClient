import type { Attribute, CharacterType, MonsterName, SkillName, TitleName } from "./adventureland-data.js"
import type { IPosition } from "./adventureland.js"
import type { PathfinderOptions } from "./pathfinder.js"

/** Filters for returning a list of entities */
export type GetEntitiesFilters = {
    /** Can we damage the current entity? */
    canDamage?: boolean | SkillName
    canKillInOneShot?: SkillName
    canWalkTo?: boolean
    /** NOTE: Don't confuse this with `willDieToProjectiles`! */
    couldDieToProjectiles?: boolean
    couldGiveCredit?: boolean
    hasTarget?: boolean
    /** If set to a string, we will check that it came from that attacker */
    hasIncomingProjectile?: boolean | string
    hpGreaterThan?: number
    hpLessThan?: number
    ignoreIDs?: Iterable<string>
    isCooperative?: boolean
    isDisabled?: boolean
    withinRange?: number | SkillName
    /**
     * Only set this if you're not checking within the range of your own character.
     *
     * If you set this, make sure that `withinRange` is also set!
     */
    withinRangeOf?: IPosition
    targetingMe?: boolean
    targetingPartyMember?: boolean
    targetingPlayer?: string
    /** Returns entities with types not equal to this type */
    notType?: MonsterName
    /** Returns entities with types not equal to any in the provided list */
    notTypeList?: MonsterName[]
    type?: MonsterName
    typeList?: MonsterName[]
    level?: number
    levelGreaterThan?: number
    levelLessThan?: number
    willBurnToDeath?: boolean
    /** NOTE: Don't confuse this with `couldDieToProjectiles`! */
    willDieToProjectiles?: boolean
}

/** Filters for returning a single entity */
export type GetEntityFilters = GetEntitiesFilters & {
    returnHighestLevel?: boolean
    returnLowestLevel?: boolean
    returnHighestHP?: boolean
    returnLowestHP?: boolean
    returnFurthest?: boolean
    returnNearest?: boolean
}

/** Filters for returning a list of players */
export type GetPlayersFilters = {
    canDamage?: boolean | SkillName
    canWalkTo?: boolean
    ctype?: CharacterType
    hpGreaterThan?: number
    hpLessThan?: number
    ignoreIDs?: Iterable<string>
    isDead?: boolean
    isDisabled?: boolean
    isFriendly?: boolean
    isNPC?: boolean
    isPartyMember?: boolean
    withinRange?: number | SkillName
    /** Only set this if you're not checking within the range of your own character */
    withinRangeOf?: IPosition
    targetingMe?: boolean
    targetingPartyMember?: boolean
    targetingPlayer?: string
    level?: number
    levelGreaterThan?: number
    levelLessThan?: number
}

/** Filters for returning a single player */
export type GetPlayerFilters = GetPlayersFilters & {
    returnHighestHP?: boolean
    returnLowestHP?: boolean
    returnNearest?: boolean
}

/** Filters for returning a list of items */
export type LocateItemsFilters = {
    level?: number
    levelGreaterThan?: number
    levelLessThan?: number
    locked?: boolean
    /** Is the item PvP marked? (i.e. does it have a chance to drop if we die to another player?) */
    pvpMarked?: boolean
    quantityGreaterThan?: number
    quantityLessThan?: number
    /** Is the item special? (e.g.: shiny, firehazard, lucky, glitched, ...) */
    special?: boolean | TitleName
    /** The scroll applied to the weapon (e.g.: int, dex, str, ...) */
    statType?: Attribute
    /** Some items, like cosmetics, have a data property */
    data?: string
}

/** Filters for returning a single item */
export type LocateItemFilters = LocateItemsFilters & {
    returnHighestLevel?: boolean
    returnHighestQuantity?: boolean
    returnLowestLevel?: boolean
    returnLowestQuantity?: boolean
}

export type SmartMoveOptions = PathfinderOptions & {
    /** Override the default number of attempts */
    numAttempts?: number
    /** If set, this function will be called before every action. Useful if you want to stop smartMoving early. */
    stopIfTrue?: () => Promise<boolean>
    /** If set, we will resolve the promise when we start moving our final move instead of completing the final move */
    resolveOnFinalMoveStart?: boolean
    /** If set, we will console.log() messages */
    showConsole?: boolean
}
