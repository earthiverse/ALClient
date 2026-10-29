import type { SlotInfo, StatusInfo } from "./definitions/adventureland.js"
import type {
    Attribute,
    ConditionName,
    DamageType,
    GData,
    GMonster,
    GMonsterAbilities,
    MapName,
    MonsterName,
    SkillName,
} from "./definitions/adventureland-data.js"
import type { ActionData, MonsterData } from "./definitions/adventureland-server.js"
import type { Character } from "./Character.js"
import type { Player } from "./Player.js"
import { Tools } from "./Tools.js"

export class Entity implements MonsterData, Partial<GMonster> {
    protected G: GData

    // EntityData (required)
    public abs?: false
    public angle: number
    public cid: number
    public focus?: string
    public going_x: number
    public going_y: number
    public in: string
    public map: MapName
    public move_num: number
    public moving = false
    public x: number
    public y: number

    public target: string

    public abilities: GMonsterAbilities = {}
    public charge: number
    public cooperative = false
    public damage_type: DamageType

    // Stats (required)
    public attack: number
    public frequency: number
    public hp: number
    public mp = 0
    public range: number
    public speed: number

    // Stats (optional)
    public apiercing = 0
    public armor = 0
    public avoidance = 0
    public blast = 0
    public breaks = 0
    public crit = 0
    public critdamage = 0
    public dreturn = 0
    public evasion = 0
    public explosion = 0
    public lifesteal = 0
    public mcourage = 0
    public rage = 0
    public reflection = 0
    public resistance = 0
    public rpiercing = 0

    // GMonster properties (required)
    public aggro: number
    public name: string
    public respawn: number
    public skin: string

    // GMonster properties (optional)
    public "1hp" = false
    public aa = 0
    public achievements: [number, "stat", Attribute, number][] = []
    public announce?: string
    public article?: string
    public balance?: string
    public cute = false
    public difficulty?: number
    public drop_on_hit = false
    public escapist = false
    public explanation?: string
    public global = false
    public goldsteal = 0
    public hit?: string
    public humanoid = false
    public immune = false
    public lucrativeness?: number
    public operator = false
    public orientation?: number
    public passive = false
    public peaceful = false
    public pet?: {
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
    public poisonous = false
    public prefix = ""
    public projectile?: string
    public rbuff: ConditionName
    public roam = false
    public size?: number
    public slots?: Partial<SlotInfo>
    public spawns?: [number, MonsterName][] = []
    public special = false
    public stationary = false
    public supporter = false
    public trap = false
    public unlist = false

    // Misc.
    public id: string
    public level = 1
    public max_hp: number
    public max_mp: number
    public s: StatusInfo & {
        [T in SkillName]?: {
            ms: number
            ability: true
        }
    } = {}
    public type: MonsterName
    public xp: number
    public width: number
    public height: number

    public constructor(data: MonsterData, map: MapName, instance: string, G: GData) {
        this.G = G

        // Set soft properties
        // NOTE: If `data` contains different values, we will overwrite these in updateData()
        this.max_hp = (G.monsters[data.type] as GMonster).hp
        this.max_mp = (G.monsters[data.type] as GMonster).mp
        this.map = map
        this.in = instance
        for (const gKey in G.monsters[data.type]) {
            this[gKey] = G.monsters[data.type][gKey]
        }

        // Set width and height if it is known
        this.width = (G.dimensions[data.type]?.[0] ?? 0) * (G.monsters[data.type].size ?? 1)
        this.height = (G.dimensions[data.type]?.[1] ?? 0) * (G.monsters[data.type].size ?? 1)

        // Set everything else
        this.updateData(data)
    }

    public updateData(data: MonsterData): void {
        if (this.id !== undefined && this.id !== data.id) throw new Error("The entity's ID does not match")

        // Set everything
        for (const key in data) this[key] = data[key]
    }

    public calculateDamageRange(
        defender: Character | Entity | Player,
        skill: SkillName = "attack",
        baseAttack?: number,
    ): [number, number] {
        const gSkill = this.G.skills[skill]

        // If the entity is immune, most skills won't do damage
        if ((defender as Entity).immune && skill !== "attack" && !gSkill?.pierces_immunity) return [0, 0]

        const isHeal = Boolean(gSkill?.heal)
        if (!isHeal && defender.s?.invincible) return [0, 0]

        if (
            gSkill &&
            !gSkill.heal &&
            skill !== "attack" &&
            gSkill.damage === undefined &&
            gSkill.damage_multiplier === undefined
        ) {
            return [0, 0]
        }

        // Monsters proc crits on all attacks except rimeshatter (and heals)
        const canCrit = !isHeal && skill !== "rimeshatter" && Boolean(this.crit)

        if (defender["1hp"] && !isHeal) {
            if (!canCrit) return [1, 1]
            if (this.crit >= 100) return [2, 2]
            return [1, 2]
        }

        const damage_type = skill !== "attack" && gSkill?.damage_type ? gSkill.damage_type : this.damage_type

        let baseDamage: number = baseAttack ?? this.attack
        if (baseAttack === undefined) {
            if (gSkill?.damage !== undefined) baseDamage = gSkill.damage
            if (gSkill?.levels && isHeal) {
                for (const [level, output] of gSkill.levels) {
                    if (this.level >= level) baseDamage = output
                }
            }
            if (gSkill?.damage_multiplier) baseDamage *= gSkill.damage_multiplier
        }

        if (isHeal) {
            let defMult = 1
            if (defender.id !== this.id && damage_type !== "pure") {
                if (damage_type == "magical") {
                    const effectiveRes = Math.max(0, (defender.resistance ?? 0) - (this.rpiercing ?? 0)) / 2
                    defMult = Tools.damage_multiplier(effectiveRes)
                } else {
                    const effectiveArmor = Math.max(0, (defender.armor ?? 0) - (this.apiercing ?? 0)) / 2
                    defMult = Tools.damage_multiplier(effectiveArmor)
                }
            }
            let condMult = 1
            if (defender.s) {
                for (const conditionName in defender.s) {
                    const gCondition = this.G.conditions[conditionName as ConditionName]
                    if (gCondition?.healm !== undefined) condMult *= gCondition.healm
                }
            }
            return [baseDamage * 0.9 * defMult * condMult, baseDamage * 1.1 * defMult * condMult]
        }

        if (damage_type == "pure") {
            return [Math.ceil(baseDamage), Math.ceil(baseDamage)]
        }

        let lowerBase = baseDamage
        let upperBase = baseDamage
        if (canCrit) {
            const critMult = 2 + (this.critdamage ?? 0) / 100
            if (this.crit >= 100) lowerBase *= critMult
            upperBase *= critMult
        }

        let lowerLimit = lowerBase * 0.9
        let upperLimit = upperBase * 1.1

        if (defender.id !== this.id) {
            if (damage_type == "magical") {
                const additionalRpiercing = gSkill?.rpiercing ?? 0
                const defMult = Tools.damage_multiplier(
                    (defender.resistance ?? 0) - (this.rpiercing ?? 0) - additionalRpiercing,
                )
                lowerLimit *= defMult
                upperLimit *= defMult
            } else if (damage_type == "physical") {
                const additionalApiercing = gSkill?.apiercing ?? 0
                const defMult = Tools.damage_multiplier(
                    (defender.armor ?? 0) - (this.apiercing ?? 0) - additionalApiercing,
                )
                lowerLimit *= defMult
                upperLimit *= defMult
            }
        }

        let incdmgamp = 0
        if (defender.s) {
            for (const conditionName in defender.s) {
                const gCondition = this.G.conditions[conditionName as ConditionName]
                if (gCondition?.incdmgamp) incdmgamp += gCondition.incdmgamp
            }
        }
        if (incdmgamp) {
            const ampMult = (100 + incdmgamp) / 100
            lowerLimit *= ampMult
            upperLimit *= ampMult
        }

        return [lowerLimit, upperLimit]
    }

    /**
     * Returns true if the entity has a >0% chance to die from projectiles already cast.
     *
     * TODO: Consider `blast` and `explosion`
     *
     * @param {Map<string, ActionData>} projectiles (e.g.: bot.projectiles)
     * @param {Map<string, Player>} players (e.g.: bot.players)
     * @param {Map<string, Player>} entities (e.g.: bot.entities)
     * @return {*}  {boolean}
     * @memberof Entity
     */
    public couldDieToProjectiles(
        character: Character,
        projectiles: Map<string, ActionData>,
        players: Map<string, Player>,
        entities: Map<string, Entity>,
    ): boolean {
        if (this.avoidance >= 100) return false
        let incomingProjectileDamage = 0
        for (const projectile of projectiles.values()) {
            if (!projectile.damage) continue // Won't do any damage
            if (projectile.target !== this.id) continue // This projectile is heading towards another entity

            // NOTE: Entities can attack themselves if the projectile gets reflected
            let attacker: Character | Entity | Player
            if (!attacker && character.id == projectile.attacker) attacker = character
            if (!attacker) attacker = players.get(projectile.attacker)
            if (!attacker) attacker = entities.get(projectile.attacker)
            if (!attacker) {
                // Couldn't find attacker, assume it will crit with maximum damage
                incomingProjectileDamage += projectile.damage * 2.2
                if (incomingProjectileDamage >= this.hp) return true
                continue
            }

            const gSkill = this.G.skills[projectile.type]
            const attackerMainhand = (attacker as Character | Player).slots?.mainhand?.name
            const damage_type =
                (projectile.type !== "attack" && gSkill?.damage_type) ||
                (attackerMainhand && this.G.items[attackerMainhand]?.damage_type) ||
                attacker.damage_type

            if (damage_type == "physical" && this.evasion >= 100) continue // It will avoid the attack
            if (damage_type == "magical" && !gSkill?.no_reflection && this.reflection >= 100) continue // It will reflect the attack

            const projectileDamage = (projectile as ActionData & { reflect?: number }).reflect ?? projectile.damage
            const maximumDamage = attacker.calculateDamageRange(this, projectile.type, projectileDamage)[1]

            incomingProjectileDamage += maximumDamage
            if (incomingProjectileDamage >= this.hp) return true
        }
        return false
    }

    /**
     * Returns true if killing this monster could drop gold/loot, or give us tracker credit.
     *
     * @param {Character} player
     * @return {*}  {boolean}
     * @memberof Entity
     */
    public couldGiveCreditForKill(player: Character): boolean {
        // It's not attacking anyone
        if (this.target == undefined) return true

        // Everyone gets credit if you attack a cooperative monster
        if (this.cooperative) return true

        // It's attacking one of our party members (includes us)
        if (this.isAttackingPartyMember(player)) return true

        return false
    }

    /**
     * Returns true if the monster is attacking the player, or one of its party members
     * @param player The player whose party to check if the monster is attacking
     */
    public isAttackingPartyMember(player: Character): boolean {
        // Check if the entity is targeting anything
        if (this.target == undefined) return false

        // Check if the entity is attacking us
        // NOTE: I don't want to get in to the semantics if we are actually in a party, I'm assuming if we aren't in a party, we're a party of "1".
        if (this.isAttackingUs(player)) return true

        // Check if the entity is targeting a party member
        if (player?.partyData?.list?.includes(this.target)) return true

        return false
    }

    /**
     * Returns true if the monster is attacking us specifically, false otherwise
     * @param player The player to check if the monster is attacking
     */
    public isAttackingUs(player: Character): boolean {
        return this.target == player.id
    }

    /**
     * If the entity is disabled, they cannot move or attack
     * @returns If the entity is disabled
     */
    public isDisabled(): boolean {
        if (this.s?.sleeping) return true
        for (const conditionName in this.s) {
            const gCondition = this.G.conditions[conditionName as ConditionName]
            if (gCondition?.blocked) return true
        }
        return false
    }

    // TODO: Check if we can taunt when the entity is attacking another player we control (i.e. same account), but we're not partied.
    /**
     * Returns whether or not the Warrior could taunt this monster
     * @param by The player that will perform the taunt
     */
    public isTauntable(by: Character): boolean {
        // If this entity has no target, it is tauntable
        if (this.target == undefined) return true

        // If this entity is attacking a party member, it is tauntable
        if (this.isAttackingPartyMember(by)) return true

        // If the player it's targeting is another character of ours, it is tauntable
        const targeting = by.players.get(this.target)
        if (targeting && targeting.owner == by.owner) return true

        return false
    }

    /**
     * Returns true if the entity will burn to death without taking any additional damage
     * @return {*}  {boolean}
     * @memberof Entity
     */
    public willBurnToDeath(): boolean {
        if (this.lifesteal) return false // Could heal itself
        if (this.abilities?.self_healing) return false // Could heal itself
        if (this.s.eheal && !this.immune) return false // Could heal itself
        if (!this.s.burned) return false // Not burning

        const numIntervals = Math.floor(this.s.burned.ms / this.G.conditions.burned.interval) - 1

        // It will proc for 1 damage every interval
        if (this["1hp"]) {
            return numIntervals >= this.hp
        }

        const burnDamage = numIntervals * Math.ceil(this.s.burned.intensity / 5)
        return burnDamage >= this.hp
    }

    /**
     * Returns true if the entity has a 100% chance to die from projectiles already cast.
     *
     * @param {Map<string, ActionData>} projectiles (e.g.: bot.projectiles)
     * @param {Map<string, Player>} players (e.g.: bot.players)
     * @param {Map<string, Player>} entities (e.g.: bot.entities)
     * @return {*}  {boolean}
     * @memberof Entity
     */
    public willDieToProjectiles(
        character: Character,
        projectiles: Map<string, ActionData>,
        players: Map<string, Player>,
        entities: Map<string, Entity>,
    ): boolean {
        if (this.avoidance) return false
        let incomingProjectileDamage = 0
        for (const projectile of projectiles.values()) {
            if (!projectile.damage) continue // This projectile won't do damage
            if (projectile.target !== this.id) continue // This projectile is heading towards another entity

            // NOTE: Entities can attack themselves if the projectile gets reflected
            let attacker: Character | Entity | Player
            if (character.id == projectile.attacker) attacker = character
            if (!attacker) attacker = players.get(projectile.attacker)
            if (!attacker) attacker = entities.get(projectile.attacker)
            if (!attacker) continue // Couldn't find attacker, assume it will do no damage

            const gSkill = this.G.skills[projectile.type]
            const attackerMainhand = (attacker as Character | Player).slots?.mainhand?.name
            const damage_type =
                (projectile.type !== "attack" && gSkill?.damage_type) ||
                (attackerMainhand && this.G.items[attackerMainhand]?.damage_type) ||
                attacker.damage_type

            if (damage_type == "magical" && !gSkill?.no_reflection && this.reflection) continue // Entity could reflect the damage
            if (damage_type == "physical" && this.evasion) continue // Entity could avoid the damage

            const projectileDamage = (projectile as ActionData & { reflect?: number }).reflect ?? projectile.damage
            const minimumDamage = attacker.calculateDamageRange(this, projectile.type, projectileDamage)[0]

            incomingProjectileDamage += minimumDamage
            if (incomingProjectileDamage >= this.hp) return true
        }
        return false
    }
}
