import { SlotInfo, StatusInfo } from "./definitions/adventureland"
import { Attribute, ConditionName, DamageType, GData2, GMonster, MapName, MonsterName, SkillName } from "./definitions/adventureland-data"
import { ActionData, EntityData } from "./definitions/adventureland-server"
import { PingCompensatedCharacter } from "./PingCompensatedCharacter"
import { Player } from "./Player"
import { Tools } from "./Tools"

export class Entity implements EntityData, Partial<GMonster> {
    protected G: GData2

    // EntityData (required)
    public abs: boolean
    public angle: number
    public cid: number
    public going_x: number
    public going_y: number
    public map: MapName
    public move_num: number
    public moving = false
    public x: number
    public y: number

    public target: string

    public abilities: { [T in SkillName]?: any } = {}
    public charge: number
    public cooperative = false
    public damage_type: DamageType

    // Stats (required)
    public attack: number
    public frequency: number
    public hp: number
    public mp: number
    public range: number
    public speed: number

    // Stats (optional)
    public apiercing = 0
    public armor = 0
    public avoidance = 0
    public blast = 0
    public breaks = 0
    public evasion = 0
    public lifesteal = 0
    public mcourage = 0
    public reflection = 0
    public resistance = 0
    public rpiercing = 0

    // GMonster properties (required)
    public readonly aggro: number
    public readonly name: string
    public readonly rage: number
    public readonly respawn: number
    public readonly skin: string

    // GMonster properties (optional)
    public readonly "1hp" = false
    public readonly aa = 0
    public readonly achievements: [number, "stat", Attribute, number][] = []
    public readonly announce?: string
    public readonly article?: string
    public readonly balance?: string
    public readonly cute = false
    public readonly difficulty?: number
    public readonly escapist = false
    public readonly explanation?: string
    public readonly global = false
    public readonly goldsteal = 0
    public readonly hit?: string
    public readonly humanoid = false
    public readonly immune = false
    public readonly lucrativeness?: number
    public readonly operator = false
    public readonly orientation?: number
    public readonly passive = false
    public readonly pet?: {
        aggression: [number, number]
        brightness: number
        chatter: [number, number]
        courage: [number, number]
        exponential: boolean
        level: {
            [T in Attribute]?: number
        }
        obedience: [number, number]
        passion: [number, number]
        xp: number
    }
    public readonly poisonous = false
    public readonly prefix = ""
    public readonly projectile?: string
    public readonly rbuff: ConditionName
    public readonly roam = false
    public readonly size?: number
    public readonly slots?: Partial<SlotInfo>
    public readonly spawns?: [number, MonsterName][] = []
    public readonly special = false
    public readonly stationary = false
    public readonly supporter = false
    public readonly trap = false
    public readonly unlist = false

    // Misc.
    public id: string
    public level = 1
    public max_hp: number
    public max_mp: number
    public s: StatusInfo = {}
    public type: MonsterName
    public xp: number

    public constructor(data: EntityData, map: MapName, G: GData2) {
        this.G = G

        // Set soft properties
        // NOTE: If `data` contains different values, we will overwrite these in updateData()
        this.max_hp = G.monsters[data.type]["hp"]
        this.max_mp = G.monsters[data.type]["mp"]
        this.map = map
        for (const gKey in G.monsters[data.type]) {
            this[gKey] = G.monsters[data.type][gKey]
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
     * Returns true if the entity has a 100% chance to die from projectiles already cast.
     *
     * @param {Map<string, ActionData>} projectiles (e.g.: bot.projectiles)
     * @param {Map<string, Player>} players (e.g.: bot.players)
     * @param {Map<string, Player>} entities (e.g.: bot.entitites)
     * @return {*}  {boolean}
     * @memberof Entity
     */
    public willDieToProjectiles(projectiles: Map<string, ActionData>, players: Map<string, Player>, entities: Map<string, Entity>): boolean {
        if (this.evasion || this.reflection) return false
        let incomingProjectileDamage = 0
        for (const projectile of projectiles.values()) {
            if (projectile.target !== this.id) continue // This projectile is heading towards another entity

            // NOTE: Entities can attack themselves if the projectile gets reflected
            const attacker = players.get(projectile.attacker) || entities.get(projectile.attacker)
            const minimumDamage = Tools.calculateDamageRange(attacker, this)[0]

            incomingProjectileDamage += minimumDamage
            if (incomingProjectileDamage >= this.hp) return true
        }
        return false
    }
}