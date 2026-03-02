import type { MapName } from "./definitions/adventureland-data.js"
import type { ServerIdentifier, ServerRegion } from "./definitions/adventureland.js"

export class Tools {
    /**
     * From Adventureland's common_functions.js
     * @static
     * @param {number} defense The difference between armor and armor piercing, or resistance and resistance piercing.
     * @return {*}  {number}
     * @memberof Tools
     */
    public static damage_multiplier(defense: number): number {
        if (defense <= -980) return 1.32
        if (defense <= -150) return 1.1125 - (defense + 150) * 0.00025
        if (defense > -150 && defense <= -100) return 1.0875 - (defense + 100) * 0.0005
        if (defense > -100 && defense <= -50) return 1.05 - (defense + 50) * 0.00075
        if (defense > -50 && defense <= 100) return 1 - defense * 0.001
        if (defense > 100 && defense <= 200) return 0.9 - (defense - 100) * 0.001
        if (defense > 200 && defense <= 300) return 0.8 - (defense - 200) * 0.00095
        if (defense > 300 && defense <= 400) return 0.705 - (defense - 300) * 0.0009
        if (defense > 400 && defense <= 500) return 0.615 - (defense - 400) * 0.00082
        if (defense > 500 && defense <= 600) return 0.533 - (defense - 500) * 0.0007
        if (defense > 600 && defense <= 700) return 0.463 - (defense - 600) * 0.0006
        if (defense > 700 && defense <= 800) return 0.403 - (defense - 700) * 0.0005
        if (defense > 800 && defense <= 1557.5) return 0.353 - (defense - 800) * 0.0004
        return 0.05
    }

    /**
     * Returns the distance between two positions.
     * @param a Position 1
     * @param b Position 2
     */
    public static distance(
        a: { x: number; y: number; width?: number; height?: number; map?: MapName; in?: string },
        b: { x: number; y: number; width?: number; height?: number; map?: MapName; in?: string },
    ): number {
        // Inifinity if on a different map, instance, or we don't have data
        if (!a || !b) return Infinity
        if (a.map && b.map && a.map !== b.map) return Infinity
        if (a.in && b.in && a.in !== b.in) return Infinity

        const aHalfWidth = (a.width ?? 0) / 2
        const aHeight = a.height ?? 0
        const bHalfWidth = (b.width ?? 0) / 2
        const bHeight = b.height ?? 0

        // Compute bounds of each rectangle
        const aLeft = a.x - aHalfWidth
        const aRight = a.x + aHalfWidth
        const aTop = a.y - aHeight
        const aBottom = a.y

        const bLeft = b.x - bHalfWidth
        const bRight = b.x + bHalfWidth
        const bTop = b.y - bHeight
        const bBottom = b.y

        const dx = Math.max(bLeft - aRight, aLeft - bRight, 0)
        const dy = Math.max(bTop - aBottom, aTop - bBottom, 0)

        return Math.hypot(dx, dy)
    }

    /**
     * Returns the squared distance between two positions.
     *
     * This has slightly faster computation than the distance function, and is useful if you're only doing comparisons with the distances between a variety of
     *
     * @param a Position 1
     * @param b Position 2
     */
    public static squaredDistance(
        a: { x: number; y: number; width?: number; height?: number; map?: MapName; in?: string },
        b: { x: number; y: number; width?: number; height?: number; map?: MapName; in?: string },
    ): number {
        // Inifinity if on a different map, instance, or we don't have data
        if (!a || !b) return Infinity
        if (a.map && b.map && a.map !== b.map) return Infinity
        if (a.in && b.in && a.in !== b.in) return Infinity

        const aHalfWidth = (a.width ?? 0) / 2
        const aHeight = a.height ?? 0
        const bHalfWidth = (b.width ?? 0) / 2
        const bHeight = b.height ?? 0

        // Compute bounds of each rectangle
        const aLeft = a.x - aHalfWidth
        const aRight = a.x + aHalfWidth
        const aTop = a.y - aHeight
        const aBottom = a.y

        const bLeft = b.x - bHalfWidth
        const bRight = b.x + bHalfWidth
        const bTop = b.y - bHeight
        const bBottom = b.y

        const dx = Math.max(bLeft - aRight, aLeft - bRight, 0)
        const dy = Math.max(bTop - aBottom, aTop - bBottom, 0)

        return dx * dx + dy * dy
    }

    /**
     * Calculates the latest the monster could have spawned
     *
     * @param level
     * @param base_hp
     * @returns
     */
    public static estimateSpawnedDate(level: number, base_hp: number) {
        let firstSeen = Date.now()
        for (let level_from = level - 1; level_from > 0; level_from--) {
            const hp_from = base_hp + base_hp * 0.5 * level_from
            firstSeen -= Math.pow(2, (level_from - 1) * 0.3) * Math.max(180_000, 30 * hp_from)
        }
        return firstSeen
    }

    /**
     * Parses a server key to return the server region and identifier
     * @param serverKey
     * @returns
     */
    public static parseServerKey(serverKey: string): { region: ServerRegion; identifier: ServerIdentifier } {
        const server = /(US|EU|ASIA)([I]+|PVP)/.exec(serverKey)
        if (!server) throw new Error(`Invalid server key: ${serverKey}`)
        return {
            region: server[1] as ServerRegion,
            identifier: server[2] as ServerIdentifier,
        }
    }
}
