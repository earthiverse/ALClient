import type { Attribute, CharacterType, MonsterName, SkillName, TitleName } from "./adventureland-data.js"
import type { IPosition } from "./adventureland.js"
import type { PathfinderOptions } from "./pathfinder.js"

/** Filters for returning a list of entities */
export type GetEntitiesFilters = {
    /** Can we damage the current entity? */
    canDamage?: boolean | SkillName | undefined
    canKillInOneShot?: SkillName | undefined
    canWalkTo?: boolean | undefined
    /** NOTE: Don't confuse this with `willDieToProjectiles`! */
    couldDieToProjectiles?: boolean | undefined
    couldGiveCredit?: boolean | undefined
    hasTarget?: boolean | undefined
    /** If set to a string, we will check that it came from that attacker */
    hasIncomingProjectile?: boolean | string | undefined
    hpGreaterThan?: number | undefined
    hpLessThan?: number | undefined
    ignoreIDs?: Iterable<string> | undefined
    isCooperative?: boolean | undefined
    isDisabled?: boolean | undefined
    withinRange?: number | SkillName | undefined
    /**
     * Only set this if you're not checking within the range of your own character.
     *
     * If you set this, make sure that `withinRange` is also set!
     */
    withinRangeOf?: IPosition | undefined
    targetingMe?: boolean | undefined
    targetingPartyMember?: boolean | undefined
    targetingPlayer?: string | undefined
    /** Returns entities with types not equal to this type */
    notType?: MonsterName | undefined
    /** Returns entities with types not equal to any in the provided list */
    notTypeList?: MonsterName[] | undefined
    type?: MonsterName | undefined
    typeList?: MonsterName[] | undefined
    level?: number | undefined
    levelGreaterThan?: number | undefined
    levelLessThan?: number | undefined
    willBurnToDeath?: boolean | undefined
    /** NOTE: Don't confuse this with `couldDieToProjectiles`! */
    willDieToProjectiles?: boolean | undefined
}

/** Filters for returning a single entity */
export type GetEntityFilters = GetEntitiesFilters & {
    returnHighestLevel?: boolean | undefined
    returnLowestLevel?: boolean | undefined
    returnHighestHP?: boolean | undefined
    returnLowestHP?: boolean | undefined
    returnFurthest?: boolean | undefined
    returnNearest?: boolean | undefined
}

/** Filters for returning a list of players */
export type GetPlayersFilters = {
    canDamage?: boolean | SkillName | undefined
    canWalkTo?: boolean | undefined
    ctype?: CharacterType | undefined
    hpGreaterThan?: number | undefined
    hpLessThan?: number | undefined
    ids?: Iterable<string> | undefined
    ignoreIDs?: Iterable<string> | undefined
    isDead?: boolean | undefined
    isDisabled?: boolean | undefined
    isFriendly?: boolean | undefined
    isNPC?: boolean | undefined
    isPartyMember?: boolean | undefined
    withinRange?: number | SkillName | undefined
    /** Only set this if you're not checking within the range of your own character */
    withinRangeOf?: IPosition | undefined
    targetingMe?: boolean | undefined
    targetingPartyMember?: boolean | undefined
    targetingPlayer?: string | undefined
    level?: number | undefined
    levelGreaterThan?: number | undefined
    levelLessThan?: number | undefined
}

/** Filters for returning a single player */
export type GetPlayerFilters = GetPlayersFilters & {
    returnHighestHP?: boolean | undefined
    returnLowestHP?: boolean | undefined
    returnNearest?: boolean | undefined
    id?: string | undefined
}

/** Filters for returning a list of items */
export type LocateItemsFilters = {
    level?: number | undefined
    levelGreaterThan?: number | undefined
    levelLessThan?: number | undefined
    locked?: boolean | undefined
    /** Is the item PvP marked? (i.e. does it have a chance to drop if we die to another player?) */
    pvpMarked?: boolean | undefined
    quantityGreaterThan?: number | undefined
    quantityLessThan?: number | undefined
    /** Is the item special? (e.g.: shiny, firehazard, lucky, glitched, ...) */
    special?: boolean | TitleName | undefined
    /** The scroll applied to the weapon (e.g.: int, dex, str, ...) */
    statType?: Attribute | undefined
    /** Some items, like cosmetics, have a data property */
    data?: string | undefined
}

/** Filters for returning a single item */
export type LocateItemFilters = LocateItemsFilters & {
    returnHighestLevel?: boolean | undefined
    returnHighestQuantity?: boolean | undefined
    returnLowestLevel?: boolean | undefined
    returnLowestQuantity?: boolean | undefined
}

export type SmartMoveOptions = PathfinderOptions & {
    /** Override the default number of attempts */
    numAttempts?: number | undefined
    /** If set, this function will be called before every action. Useful if you want to stop smartMoving early. */
    stopIfTrue?: (() => Promise<boolean>) | undefined
    /** If set, we will resolve the promise when we start moving our final move instead of completing the final move */
    resolveOnFinalMoveStart?: boolean | undefined
    /** If set, we will console.log() messages */
    showConsole?: boolean | undefined
}
