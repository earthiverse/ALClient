import type {
  DamageType,
  GData,
  IPosition,
  ItemInfo,
  MapKey,
  MonsterEntity,
  MonsterKey,
  ServerIdentifier,
  ServerKey,
  ServerRegion,
  SkillKey,
  StatType,
} from "typed-adventureland";

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
    attacker: MonsterEntity | Character,
    target: MonsterEntity | Character,
    g: GData,
    options?: {
      skill: SkillKey
    } = {
      skill: "attack"
    }
  ): { min: number; max: number; avg: number } {
    const gSkill = g.skills[options.skill];

    if(target.immune === true) {

    let defenseType: StatType;
    let piercingType: StatType;
    switch (damageType ?? attacker.damage_type) {
      case "heal":
      case "magical":
        defenseType = "resistance";
        piercingType = "rpiercing";
        break;
      case "physical":
        defenseType = "armor";
        piercingType = "apiercing";
        break;
      case undefined:
      default:
        throw new Error(`Unknown damage type ${attacker.damage_type}`);
    }

    let damageMultiplier;
    if (target["1hp"] === true) {
      // TODO: Consider crit
      return { min: 1, max: 1, avg: 1 };
    }

    let damageMultiplier = this.damageMultiplier((target[defenseType] ?? 0) - (attacker[piercingType] ?? 0));

    let min = 0.9;
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
   * Returns spawn data for the given monster
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
