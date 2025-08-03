import type { ServerIdentifier, ServerKey, ServerRegion } from "typed-adventureland";

export class Utilities {
  /**
   * From Adventureland's common_functions.js
   * @static
   * @param {number} defense The difference between armor and armor piercing, or resistance and resistance piercing.
   * @return {*}  {number}
   * @memberof Tools
   */
  public static damage_multiplier(defense: number): number {
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

  public static parseServerKey(serverKey: ServerKey): {
    serverRegion: ServerRegion;
    serverIdentifier: ServerIdentifier;
  } {
    const match = /^(US|EU|ASIA)(I|II|III|PVP)$/
    const result = match.exec(serverKey)
    if(result === null) throw new Error(`Unable to parse server key ${serverKey}`)
  
    return {
      serverRegion: result[1] as ServerRegion,
      serverIdentifier: result[2] as ServerIdentifier
    };
  }
}
