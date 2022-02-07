import { Attribute, MonsterName } from "./adventureland-data.js"

/** Filters for returning a list of entities */
export type GetEntitiesFilters = {
    canDamage?: boolean
    canWalkTo?: boolean
    couldGiveCredit?: boolean
    withinRange?: number
    targetingMe?: boolean
    targetingPartyMember?: boolean
    targetingPlayer?: string
    type?: MonsterName
    typeList?: MonsterName[]
    level?: number
    levelGreaterThan?: number
    levelLessThan?: number
    willBurnToDeath?: boolean
    willDieToProjectiles?: boolean
}

/** Filters for returning a single entity */
export type GetEntityFilters = GetEntitiesFilters & {
    returnHighestHP?: boolean
    returnLowestHP?: boolean
    returnNearest?: boolean
}

/** Filters for returning a list of items */
export type LocateItemsFilters = {
    level?: number;
    levelGreaterThan?: number;
    levelLessThan?: number;
    locked?: boolean;
    quantityGreaterThan?: number;
    /** Is the item special? (e.g.: shiny, firehazard, lucky, glitched, ...) */
    special?: boolean;
    /** The scroll applied to the weapon (e.g.: int, dex, str, ...) */
    statType?: Attribute;
}

/** Filters for returning a single item */
export type LocateItemFilters = LocateItemsFilters & {
    returnHighestLevel?: boolean;
    returnLowestLevel?: boolean;
}