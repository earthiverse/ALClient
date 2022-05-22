import { MapName } from "./definitions/adventureland-data.js"

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
    public static distance(a: { x: number, y: number, width?: number, height?: number, map?: MapName, in?: string }, b: { x: number, y: number, width?: number, height?: number, map?: MapName, in?: string }): number {
        if (!a || !b) return Number.MAX_VALUE // No data for one of the objects
        if ((a.map && b.map) && (a.map !== b.map)) return Number.MAX_VALUE // Different map
        if ((a.in && b.in) && (a.in !== b.in)) return Number.MAX_VALUE // Different instance

        const a_w2 = (a.width ?? 0) / 2
        const a_h = a.height ?? 0
        const b_w2 = (b.width ?? 0) / 2
        const b_h = b.height ?? 0

        // Check if they're just 2 points
        if (a_w2 == 0 && a_h == 0 && b_w2 == 0 && b_h == 0) return Math.hypot(a.x - b.x, a.y - b.y)

        // Check overlap
        if ((a.x - a_w2) <= (b.x + b_w2)
        && (a.x + a_w2) >= (b.x - b_w2)
        && (a.y + a_h) >= (b.y)
        && (a.y) <= (b.y + b_h)) return 0

        // Compare the 4 corners + base point to each other
        let min = Number.MAX_VALUE
        for (const a_c of [{ x: a.x + a_w2, y: a.y + a_h },
            { x: a.x + a_w2, y: a.y },
            { x: a.x - a_w2, y: a.y + a_h },
            { x: a.x - a_w2, y: a.y }]) {
            for (const b_c of [{ x: b.x + b_w2, y: b.y + b_h },
                { x: b.x + b_w2, y: b.y },
                { x: b.x - b_w2, y: b.y + b_h },
                { x: b.x - b_w2, y: b.y }]) {
                const d = Math.hypot(a_c.x - b_c.x, a_c.y - b_c.y)
                if (d < min) min = d
            }
        }
        return min
    }
}