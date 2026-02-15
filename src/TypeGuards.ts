import type {
  ConditionKey,
  GameResponseDataUpgradeChance,
  GData,
  ItemKey,
  MapKey,
  MonsterKey,
  NpcKey,
} from "typed-adventureland";
import type { Location } from "./Entity.js";

export type SuccessGameResponse<Place extends string> = {
  response: string;
  place: Place;
  success: true;
};

export type FailedGameResponse<Place extends string> = {
  response: string;
  place: Place;
  failed: true;
};

export function isRelevantGameResponse<Place extends string>(
  data: unknown,
  place: Place,
): data is SuccessGameResponse<Place> | FailedGameResponse<Place> {
  if (typeof data !== "object" || data === null || data === undefined) return false;
  if ((data as SuccessGameResponse<Place>).place !== place) return false;
  return true;
}

export function isUpgradeChanceResponse(data: unknown): data is GameResponseDataUpgradeChance {
  if (typeof data !== "object" || data === null || data === undefined) return false;
  if ((data as SuccessGameResponse<"upgrade">).place !== "upgrade") return false;
  if ((data as SuccessGameResponse<"upgrade">).response !== "upgrade_chance") return false;
  return true;
}

export function isCompoundChanceResponse(data: unknown): data is GameResponseDataUpgradeChance {
  if (typeof data !== "object" || data === null || data === undefined) return false;
  if ((data as SuccessGameResponse<"compound">).place !== "compound") return false;
  if ((data as SuccessGameResponse<"compound">).response !== "compound_chance") return false;
  return true;
}

export function isSuccessGameResponse(data: unknown): data is SuccessGameResponse<string> {
  if (typeof data !== "object" || data === null || data === undefined) return false;
  return (data as SuccessGameResponse<string>).success === true;
}

export function isFailedGameResponse(data: unknown): data is FailedGameResponse<string> {
  if (typeof data !== "object" || data === null || data === undefined) return false;
  return (data as FailedGameResponse<string>).failed === true;
}

export function isConditionKey(key: unknown, g: GData): key is ConditionKey {
  return g.conditions[key as ConditionKey] !== undefined;
}

export function isLocation(data: unknown, g: GData): data is Location {
  if (typeof data !== "object" || !data) return false;
  if (!isMapKey((data as Location).map, g)) return false;
  if (typeof (data as Location).in !== "string") return false;
  if (typeof (data as Location).x !== "number") return false;
  if (typeof (data as Location).y !== "number") return false;
  return true;
}

export function isItemKey(key: unknown, g: GData): key is ItemKey {
  return g.items[key as ItemKey] !== undefined;
}

export function isMapKey(key: unknown, g: GData): key is MapKey {
  return g.maps[key as MapKey] !== undefined;
}

export function isMonsterKey(key: unknown, g: GData): key is MonsterKey {
  return g.monsters[key as MonsterKey] !== undefined;
}

export function isNpcKey(key: unknown, g: GData): key is NpcKey {
  return g.npcs[key as NpcKey] !== undefined;
}
