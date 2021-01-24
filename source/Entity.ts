import { DamageType, GData, MapName, MonsterName, SkillName, StatusInfo } from "./definitions/adventureland"
import { ActionData, EntityData } from "./definitions/adventureland-server"
import { PingCompensatedCharacter } from "./PingCompensatedCharacter"

export class Entity implements EntityData {
    protected G: GData

    // Position
    public map: MapName
    public x: number
    public y: number
    public going_x: number
    public going_y: number
    public angle: number
    public moving = false
    public move_num: number

    public type: MonsterName
    public id: string
    public level: number

    public abs: boolean
    public cid: number
    public target: string
    public s: StatusInfo

    public abilities: { [T in SkillName]?: any }
    public max_hp: number
    public max_mp: number
    public "1hp" = false
    public aggro = 0
    public apiercing = 0
    public charge: number
    public cooperative = false
    public damage_type: DamageType
    public evasion = 0
    public frequency: number
    public immune = false
    public lifesteal = 0
    public range: number
    public reflection = 0
    public rpiercing = 0
    public speed: number
    public xp: number

    public hp: number
    public mp: number

    public armor = 0
    public attack = 0
    public resistance = 0
    public rage = 0

    public constructor(data: EntityData, map: MapName, G: GData) {
        this.G = G

        // Set soft properties
        // NOTE: If `data` contains different values, we will overwrite these
        this.max_hp = G.monsters[data.type]["hp"]
        this.max_mp = G.monsters[data.type]["mp"]
        this.map = map
        for (const gDatum in G.monsters[data.type]) {
            this[gDatum] = G.monsters[data.type][gDatum]
        }

        // Set everything else
        this.updateData(data)
    }

    public updateData(data: EntityData): void {
        if (this.id !== undefined && this.id !== data.id) throw Error("The entity's ID does not match")

        // Set everything
        for (const key in data) this[key] = data[key]
    }

    /**
     * Returns true if the monster is attacking the player, or one of its party members
     * @param player The player whose party to check if the monster is attacking
     */
    public isAttackingPartyMember(player: PingCompensatedCharacter): boolean {
        // Check if the entity is targeting anything
        if (this.target === undefined) return false

        // Check if the entity is attacking us
        // NOTE: I don't want to get in to the semantics if we are actually in a party, I'm assuming if we aren't in a party, we're a party of "1".
        if (this.isAttackingUs(player)) return true

        // Check if the entity is targeting a party member
        if (player.partyData && player.partyData.list && player.partyData.list.includes(this.target)) return true

        return false
    }

    /**
     * Returns true if the monster is attacking us specifically, false otherwise
     * @param player The player to check if the monster is attacking
     */
    public isAttackingUs(player: PingCompensatedCharacter): boolean {
        return this.target === player.id
    }

    // TODO: Check if we can taunt when the entity is attacking another player we control (i.e. same account), but we're not partied.
    /**
     * Returns whether or not the Warrior could taunt this monster
     * @param by The player that will perform the taunt
     */
    public isTauntable(by: PingCompensatedCharacter): boolean {
        // If this entity has no target, it is tauntable
        if (this.target === undefined) return true

        // If this entity is attacking a party member, it is tauntable
        if (this.isAttackingPartyMember(by)) return true

        return false
    }

    /**
     * Returns true if the entity will burn to death without taking any additional damage
     * @param entity The entity to check
     */
    public willBurnToDeath(): boolean {
        if (this["1hp"]) return false
        if (this.lifesteal !== undefined) return false
        if (this.abilities && this.abilities.self_healing) return false

        if (this.s.burned) {
            const burnTime = Math.max(0, (this.s.burned.ms - (this.G.conditions.burned.interval * 2))) / 1000
            const burnDamage = burnTime * this.s.burned.intensity
            if (burnDamage > this.hp) return true
        }
        return false
    }

    /**
     * Returns true if the entity will die to the already incoming projectiles
     * @param entity 
     * @param projectiles 
     */
    public willDieToProjectiles(projectiles: Map<string, ActionData>): boolean {
        if (this["1hp"] || this.evasion || this.reflection) return false
        let incomingProjectileDamage = 0
        for (const projectile of projectiles.values()) {
            if (projectile.target == this.id) incomingProjectileDamage += projectile.damage * 0.9
            if (incomingProjectileDamage > this.hp) return true
        }
        return false
    }
}