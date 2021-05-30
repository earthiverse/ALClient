import { MapName } from "./definitions/adventureland-data"

export class Tools {
    /**
     * From Adventureland's common_functions.js
     * @static
     * @param {number} a The difference between armor and armor piercing, or resistance and resistance piercing.
     * @return {*}  {number}
     * @memberof Tools
     */
    public static damage_multiplier(a: number): number {
        return Math.min(1.32, Math.max(.05, 1 - (.001 * Math.max(0, Math.min(100, a)) + .001 * Math.max(0, Math.min(100, a - 100)) + .00095 * Math.max(0, Math.min(100, a - 200)) + .0009 * Math.max(0, Math.min(100, a - 300)) + .00082 * Math.max(0, Math.min(100, a - 400)) + .0007 * Math.max(0, Math.min(100, a - 500)) + .0006 * Math.max(0, Math.min(100, a - 600)) + .0005 * Math.max(0, Math.min(100, a - 700)) + .0004 * Math.max(0, a - 800)) + .001 * Math.max(0, Math.min(50, 0 - a)) + .00075 * Math.max(0, Math.min(50, -50 - a)) + .0005 * Math.max(0, Math.min(50, -100 - a)) + .00025 * Math.max(0, -150 - a)))
    }

    /**
     * Returns the distance between two positions.
     * @param a Position 1
     * @param b Position 2
     */
    public static distance(a: { x: number, y: number, map?: MapName }, b: { x: number, y: number, map?: MapName }): number {
        if (!a || !b) return Number.MAX_VALUE // No data for one of the objects
        if ((a.map && b.map) && (a.map !== b.map)) return Number.MAX_VALUE // Different map

        return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2)
    }
}