import type { GData, MonsterKey } from "typed-adventureland";

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

export function isSuccessGameResponse(data: unknown): data is SuccessGameResponse<string> {
  if (typeof data !== "object" || data === null || data === undefined) return false;
  return (data as SuccessGameResponse<string>).success === true;
}

export function isFailedGameResponse(data: unknown): data is FailedGameResponse<string> {
  if (typeof data !== "object" || data === null || data === undefined) return false;
  return (data as FailedGameResponse<string>).failed === true;
}

export function isMonsterKey(key: string, g: GData): key is MonsterKey {
  return g.monsters[key as MonsterKey] !== undefined;
}
