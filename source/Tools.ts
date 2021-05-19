import { Character } from "./Character"
import { MapName } from "./definitions/adventureland-data"
import { Entity } from "./Entity"
import { Player } from "./Player"

export class Tools {
    /**
     * The first element is the minimum damage the attacker could do. The second element is the maximum damage the attacker could do.
     * NOTE: This function does not apply crit (TODO: Should it? It should probably, no?)
     * @param attacker 
     * @param defender 
     */
    public static calculateDamageRange(attacker: Entity | Player | Character, defender: Entity | Player | Character): [number, number] {
        /**
         * From Adventureland's common_functions.js
         * @param a The difference between armor and armor piercing, or resistance and resistance piercing.
         */
        function damage_multiplier(a: number) {
            return Math.min(1.32, Math.max(.05, 1 - (.001 * Math.max(0, Math.min(100, a)) + .001 * Math.max(0, Math.min(100, a - 100)) + .00095 * Math.max(0, Math.min(100, a - 200)) + .0009 * Math.max(0, Math.min(100, a - 300)) + .00082 * Math.max(0, Math.min(100, a - 400)) + .0007 * Math.max(0, Math.min(100, a - 500)) + .0006 * Math.max(0, Math.min(100, a - 600)) + .0005 * Math.max(0, Math.min(100, a - 700)) + .0004 * Math.max(0, a - 800)) + .001 * Math.max(0, Math.min(50, 0 - a)) + .00075 * Math.max(0, Math.min(50, -50 - a)) + .0005 * Math.max(0, Math.min(50, -100 - a)) + .00025 * Math.max(0, -150 - a)))
        }

        if (defender["1hp"]) return [1, 1]

        let baseDamage: number = attacker.attack

        // TODO: I asked Wizard to add something to G.conditions.cursed and .marked so we don't need these hardcoded.
        if (defender.s.cursed) baseDamage *= 1.2
        if (defender.s.marked) baseDamage *= 1.1

        if ((attacker as Player).ctype == "priest") baseDamage *= 0.4 // Priests only do 40% damage

        if (attacker.damage_type == "physical") baseDamage *= damage_multiplier(defender.armor - attacker.apiercing)
        else if (attacker.damage_type == "magical") baseDamage *= damage_multiplier(defender.resistance - attacker.rpiercing)

        if (attacker.crit) {
            if (attacker.crit >= 100) {
                // Guaranteed crit
                return [baseDamage * 0.9 * (2 + (attacker.critdamage / 100)), baseDamage * 1.1 * (2 + (attacker.critdamage / 100))]
            } else {
                return [baseDamage * 0.9, baseDamage * 1.1 * (2 + (attacker.critdamage / 100))]
            }
        } else {
            return [baseDamage * 0.9, baseDamage * 1.1]
        }
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