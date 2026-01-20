import type {
  GData,
  IPosition,
  ItemInfo,
  MapKey,
  MonsterKey,
  NpcKey,
  ServerIdentifier,
  ServerKey,
  ServerRegion,
  SkillKey,
} from "typed-adventureland";
import type { Character } from "./Character.js";
import type { EntityCharacter } from "./EntityCharacter.js";
import type { EntityMonster } from "./EntityMonster.js";

export class Utilities {
  /**
   * From Adventureland's common_functions.js
   * @static
   * @param {number} defense The difference between armor and armor piercing, or resistance and resistance piercing.
   * @return {*}  {number}
   * @memberof Tools
   */
  public static damageMultiplier(defense: number): number {
    if (defense <= -980) return 1.32;
    if (defense <= -150) return 1.1125 - (defense + 150) * 0.00025;
    if (defense > -150 && defense <= -100) return 1.0875 - (defense + 100) * 0.0005;
    if (defense > -100 && defense <= -50) return 1.05 - (defense + 50) * 0.00075;
    if (defense > -50 && defense <= 100) return 1 - defense * 0.001;
    if (defense > 100 && defense <= 200) return 0.9 - (defense - 100) * 0.001;
    if (defense > 200 && defense <= 300) return 0.8 - (defense - 200) * 0.00095;
    if (defense > 300 && defense <= 400) return 0.705 - (defense - 300) * 0.0009;
    if (defense > 400 && defense <= 500) return 0.615 - (defense - 400) * 0.00082;
    if (defense > 500 && defense <= 600) return 0.533 - (defense - 500) * 0.0007;
    if (defense > 600 && defense <= 700) return 0.463 - (defense - 600) * 0.0006;
    if (defense > 700 && defense <= 800) return 0.403 - (defense - 700) * 0.0005;
    if (defense > 800 && defense <= 1557.5) return 0.353 - (defense - 800) * 0.0004;
    return 0.05;
  }

  // TODO: This is mostly garbage, finish it from ALClient original version
  public static damageRange(
    attacker: Character | EntityCharacter | EntityMonster,
    target: Character | EntityCharacter | EntityMonster,
    g: GData,
    options?: {
      skill: SkillKey;
    } = {
      skill: "attack",
    },
  ): { min: number; max: number; avg: number } {
    const gSkill = g.skills[options.skill];

    // If the entity is immune, most skills won't do damage
    if ((target as EntityMonster).immune && gSkill.pierces_immunity !== true) return { min: 0, max: 0, avg: 0 };

    // Check if target could avoid attack
    let avoidChance = 0;
    if (attacker.damageType === "magical" && target.reflection) avoidChance = Math.min(1, target.reflection / 100);
    else if (attacker.damageType === "physical" && target.evasion) avoidChance = Math.min(1, target.evasion / 100);
    if (target.avoidance) avoidChance = Math.min(1, avoidChance + (1 - avoidChance) * (target.avoidance / 100));

    if (avoidChance >= 1) return { min: 0, max: 0, avg: 0 }; // Target can fully avoid our attack

    const critChance = attacker.crit / 100;

    if ((target as EntityMonster)["1hp"] === true) {
      return {
        min: 1,
        max: critChance > 0 ? 2 : 1,
        avg: (1 + critChance) * (1 - avoidChance),
      };
    }

    let damage: number;
    if (gSkill.damage !== undefined) damage = gSkill.damage;
  }

  public static parseServerKey(serverKey: ServerKey): {
    serverRegion: ServerRegion;
    serverIdentifier: ServerIdentifier;
  } {
    const match = /^(US|EU|ASIA)(I|II|III|PVP)$/;
    const result = match.exec(serverKey);
    if (result === null) throw new Error(`Unable to parse server key ${serverKey}`);

    return {
      serverRegion: result[1] as ServerRegion,
      serverIdentifier: result[2] as ServerIdentifier,
    };
  }

  /**
   * Returns the center of spawns for the given monster
   *
   * @param g
   * @param monster
   * @returns
   */
  public static getMonsterSpawns(g: GData, monster: MonsterKey): Required<IPosition>[] {
    const spawns: Required<IPosition>[] = [];
    for (const [mapKey, gMap] of Object.entries(g.maps)) {
      if (gMap.ignore !== undefined && gMap.ignore) continue; // Ignore map
      if (gMap.monsters === undefined) continue; // No monsters on map
      for (const mapMonster of gMap.monsters) {
        if (mapMonster.type !== monster) continue; // Different monster
        for (const [map, x1, y1, x2, y2] of mapMonster.boundaries ?? [
          [mapKey as MapKey, ...(mapMonster.boundary as [number, number, number, number])],
        ]) {
          spawns.push({ map, x: (x1 + x2) / 2, y: (y1 + y2) / 2 });
        }
      }
    }
    return spawns;
  }

  /**
   * Returns the positions you can find the given NPC
   *
   * @param g
   * @param npcKey
   * @param options
   * @returns
   */
  public static getNpcPositions(g: GData, npcKey: NpcKey, options: { map?: MapKey } = {}): Required<IPosition>[] {
    const positions: Required<IPosition>[] = [];
    for (const [mapKey, gMap] of Object.entries(g.maps)) {
      if (options.map === mapKey) continue; // We're looking for a specific map
      if (gMap.ignore !== undefined && gMap.ignore) continue; // Ignore map
      for (const npc of gMap.npcs) {
        if (npc.id !== npcKey) continue; // Different NPC
        for (const [x, y] of npc.positions ?? [[...(npc.position as [number, number])]]) {
          positions.push({ map: mapKey as MapKey, x, y });
        }
      }
    }
    return positions;
  }

  public static getItemGrade(item: ItemInfo, g: GData): number | undefined {
    if (item.level === undefined) return; // No level
    const gInfo = g.items[item.name];
    if (!gInfo.grades) return undefined; // No grades
    return gInfo.grades.findLastIndex((level) => item.level! >= level) + 1;
  }

  /**
   * Generates offset positions in a spiral by steps of step distance until the maxRadius is reached
   * @param step
   * @param maxRadius
   */
  public static *getSpiralOffsets(step: number, maxRadius: number): Generator<[number, number]> {
    let x = 0;
    let y = 0;
    let dx = step;
    let dy = 0;
    let segmentLength = 1;
    let segmentPassed = 0;
    let directionChanges = 0;

    yield [0, 0];

    while (true) {
      x += dx;
      y += dy;

      if (Math.max(Math.abs(x), Math.abs(y)) > maxRadius) break; // Over limit

      yield [x, y];

      segmentPassed++;
      if (segmentPassed === segmentLength) {
        segmentPassed = 0;

        // Rotate clockwise
        [dx, dy] = [-dy, dx];
        directionChanges++;

        if (directionChanges % 2 === 0) {
          segmentLength++;
        }
      }
    }
  }
}

export default Utilities;
