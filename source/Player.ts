import type { Character } from "./Character.js"
import type { SlotInfo, StatusInfo, TradeSlotType } from "./definitions/adventureland.js"
import type {
    CharacterType,
    ConditionName,
    CXData,
    DamageType,
    GData,
    MapName,
    NPCName,
    SkillName,
} from "./definitions/adventureland-data.js"
import type { ChannelInfo, PlayerData, QInfo } from "./definitions/adventureland-server.js"
import type { Entity } from "./Entity.js"
import { Tools } from "./Tools.js"
import { Constants } from "./Constants.js"
import { TradeItem } from "./TradeItem.js"

export class Player implements PlayerData {
    protected G: GData

    public afk?: boolean | "code"
    public id: string
    public ctype: CharacterType
    public abs: boolean
    public angle?: number
    public armor = 0
    public apiercing = 0
    public attack: number
    public avoidance = 0
    public cid: number
    public crit = 0
    public critdamage = 0
    public damage_type: DamageType
    public evasion = 0
    public frequency: number
    public going_x?: number
    public going_y?: number
    public heal: number
    public level = 1
    public move_num: number
    public moving: boolean
    public name?: string
    public party: string
    public reflection = 0
    public resistance = 0
    public rpiercing = 0
    public target: string
    public team?: string
    public guild?: string
    public x: number
    public y: number
    public s: StatusInfo = {}

    c: ChannelInfo = {}
    cx: CXData
    focus?: string
    hp: number
    max_hp: number
    max_mp: number
    mp: number
    npc?: NPCName
    owner: string
    pdps: number
    q: QInfo = {}
    range: number
    rip?: boolean | number
    skin: string
    slots: SlotInfo
    speed: number
    stand?: boolean | "cstand" | "stand0"
    tp?: boolean;

    // Soft Properties
    in: string
    map: MapName

    public width = Constants.CHARACTER_WIDTH
    public height = Constants.CHARACTER_HEIGHT

    public constructor(data: PlayerData, map: MapName, instance: string, g: GData) {
        this.G = g

        // Set soft properties
        this.map = map
        this.in = instance
        if (!data.npc) this.damage_type = this.G.classes[data.ctype].damage_type

        // Set everything else
        this.updateData(data)
    }

    public updateData(data: PlayerData): void {
        if (this.id !== undefined && this.id !== data.id) throw new Error("The entity's ID does not match")

        // Set everything
        for (const key in data) this[key] = data[key]

        if (!this.npc && this.ctype) {
            const mainhandDamageType = this.slots?.mainhand
                ? this.G.items[this.slots.mainhand.name]?.damage_type
                : undefined
            this.damage_type = mainhandDamageType ?? this.G.classes[this.ctype]?.damage_type
        }
    }

    public calculateDamageRange(
        defender: Character | Entity | Player,
        skill: SkillName = "attack",
        baseAttack?: number,
    ): [number, number] {
        const gSkill = this.G.skills[skill]
        if (!gSkill) console.debug(`calculateDamageRange DEBUG: '${skill}' isn't a skill!?`)

        // If the entity is immune, most skills won't do damage
        if ((defender as Entity).immune && skill !== "attack" && !gSkill?.pierces_immunity) return [0, 0]

        const isHeal = Boolean(gSkill?.heal || this.slots?.mainhand?.name == "cupid")
        if (!isHeal && defender.s?.invincible) return [0, 0]

        // Non-damaging / non-healing skills (e.g. curse, stomp, huntersmark, agitate, buffs)
        if (
            gSkill &&
            !gSkill.heal &&
            skill !== "attack" &&
            skill !== "cleave" &&
            skill !== "shadowstrike" &&
            gSkill.damage === undefined &&
            gSkill.damage_multiplier === undefined &&
            !(gSkill.ratio && gSkill.hostile)
        ) {
            return [0, 0]
        }

        // Merchants can only use merchant_use skills or attack with a dartgun
        if (
            this.ctype == "merchant" &&
            !gSkill?.merchant_use &&
            !(skill == "attack" && this.slots?.mainhand && this.G.items[this.slots.mainhand.name]?.wtype == "dartgun")
        ) {
            return [0, 0]
        }

        const canCrit = !isHeal && Boolean(gSkill?.procs) && Boolean(this.crit)

        if (defender["1hp"] && !isHeal) {
            if (!canCrit) return [1, 1]
            if (this.crit >= 100) return [2, 2]
            return [1, 2]
        }

        const mainhandDamageType = this.slots?.mainhand
            ? this.G.items[this.slots.mainhand.name]?.damage_type
            : undefined
        let damage_type =
            mainhandDamageType ?? this.damage_type ?? (this.ctype ? this.G.classes[this.ctype]?.damage_type : undefined)
        if (skill !== "attack" && gSkill?.damage_type) damage_type = gSkill.damage_type

        let lowerBase: number
        let upperBase: number

        if (baseAttack !== undefined) {
            lowerBase = baseAttack
            upperBase = baseAttack
        } else if (skill == "burst") {
            if ((this.mp ?? 0) < 1) return [0, 0]
            const burstDamage = this.mp * (gSkill?.ratio ?? 0.555)
            lowerBase = burstDamage
            upperBase = burstDamage
        } else if (skill == "cburst") {
            const availableMp = Math.floor(Math.max(0, (this.mp ?? 0) - (gSkill?.mp ?? 0)))
            if (availableMp < 1) return [0, 0]
            const ratio = gSkill?.ratio ?? 0.5
            lowerBase = 1 * ratio
            upperBase = availableMp * ratio
        } else {
            let baseDamage: number = this.attack
            if (skill == "heal") baseDamage = this.heal || this.attack
            if (gSkill?.damage !== undefined) baseDamage = gSkill.damage
            if (gSkill?.levels && isHeal) {
                for (const [level, output] of gSkill.levels) {
                    if (this.level >= level) baseDamage = output
                }
            }
            if (gSkill?.armor_multiplier !== undefined) {
                baseDamage =
                    baseDamage * (gSkill.damage_multiplier ?? 1) +
                    Math.min(Math.max(this.armor ?? 0, 0), gSkill.armor_cap ?? Infinity) * gSkill.armor_multiplier
            } else if (gSkill?.damage_multiplier) {
                baseDamage *= gSkill.damage_multiplier
            }

            lowerBase = baseDamage
            upperBase = baseDamage

            // NOTE: This information is from @Wizard on Discord on May 1st, 2020
            // https://discord.com/channels/238332476743745536/243707345887166465/705722706250694737
            if (skill == "cleave") {
                lowerBase *= 0.1
                upperBase *= 0.9
            } else if (skill == "shadowstrike") {
                lowerBase *= 0.2
                upperBase *= 1.4 * 12
            }
        }

        if (skill == "purify" && defender.s) {
            const isMonster = Boolean((defender as Entity).type && this.G.monsters[(defender as Entity).type])
            for (const conditionName in defender.s) {
                if (
                    conditionName == "poisonous" &&
                    isMonster &&
                    ((defender as Entity).poisonous || this.G.monsters[(defender as Entity).type]?.poisonous)
                ) {
                    continue
                }
                const gCondition = this.G.conditions[conditionName as ConditionName]
                const statusData = defender.s[conditionName as keyof typeof defender.s] as {
                    s?: number
                    citizens?: unknown
                }
                if (
                    (gCondition && (gCondition.buff || gCondition.debuff) && !gCondition.persistent) ||
                    statusData?.citizens
                ) {
                    let bonus = gSkill?.condition_damage ?? 400
                    if (conditionName === "stack") {
                        const rawStacks = statusData?.s
                        const stacks = Number.isFinite(rawStacks)
                            ? Math.max(0, Math.min(this.G.skills.stack?.max ?? 2000, Math.floor(rawStacks)))
                            : 0
                        bonus = stacks
                            ? bonus + Math.min(stacks * (gSkill?.stack_damage ?? 1), gSkill?.stack_bonus_cap ?? 400)
                            : 0
                    }
                    lowerBase += bonus
                    upperBase += bonus
                }
            }
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
            const mult = defMult * condMult
            return [lowerBase * 0.9 * mult, upperBase * 1.1 * mult]
        }

        if (damage_type == "pure") {
            return [Math.ceil(lowerBase), Math.ceil(upperBase)]
        }

        if (canCrit) {
            const critMult = 2 + (this.critdamage ?? 0) / 100
            if (this.crit >= 100) lowerBase *= critMult
            upperBase *= critMult
        }

        if (this.ctype == "rogue") {
            const maxStack = this.G.skills.stack?.max ?? 2000
            const nextStack = Math.min(maxStack, (defender.s?.stack?.s ?? 0) + 1)
            lowerBase += nextStack
            upperBase += nextStack
        }

        let lowerLimit = lowerBase * 0.9
        let upperLimit = upperBase * 1.1

        let defMult = 1
        if ((defender as Character)["for"]) {
            defMult *= Tools.damage_multiplier((defender as Character)["for"] * 5)
        }
        if (defender.id !== this.id) {
            if (damage_type == "magical") {
                const additionalRpiercing = gSkill?.rpiercing ?? 0
                defMult *= Tools.damage_multiplier(
                    (defender.resistance ?? 0) - (this.rpiercing ?? 0) - additionalRpiercing,
                )
            } else {
                const additionalApiercing = gSkill?.apiercing ?? 0
                defMult *= Tools.damage_multiplier((defender.armor ?? 0) - (this.apiercing ?? 0) - additionalApiercing)
            }
        }

        lowerLimit *= defMult
        upperLimit *= defMult

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

        if (skill == "taunt") {
            const ampMult = incdmgamp ? (100 + incdmgamp) / 100 : 1
            const minTaunt = Math.round(Math.ceil(Math.ceil(lowerBase * 0.9) * defMult) * ampMult)
            const maxTaunt = Math.round(Math.ceil(Math.ceil(upperBase * 1.1) * defMult) * ampMult)
            return [minTaunt, maxTaunt]
        }

        return [lowerLimit, upperLimit]
    }

    /**
     * Returns the items that the player is selling in their trade slots.
     *
     * @see getWantedItems for items the player is buying
     */
    public getItemsForSale(): Map<TradeSlotType, TradeItem> {
        const slots = new Map<TradeSlotType, TradeItem>()
        for (const s in this.slots) {
            const slot = s as TradeSlotType
            const item = this.slots[slot]

            if (!item) continue // Nothing in the slot
            if (!item.rid) continue // Not a trade item
            if (item.b) continue // They are buying, not selling

            slots.set(slot, new TradeItem(item, this.G))
        }
        return slots
    }

    /**
     * Returns the items that the player is purchasing in their trade slots
     *
     * @see getItemsForSale for items the player is selling
     */
    public getWantedItems(): Map<TradeSlotType, TradeItem> {
        const slots = new Map<TradeSlotType, TradeItem>()
        for (const s in this.slots) {
            const slot = s as TradeSlotType
            const item = this.slots[slot]

            if (!item) continue // Nothing in the slot
            if (!item.rid) continue // Not a trade item
            if (!item.b) continue // They are selling, not buying

            slots.set(slot, new TradeItem(item, this.G))
        }
        return slots
    }

    /**
     * Returns true if the player is attacking us, or one of our party members
     * @param player The player whose party to check if they are attacking
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
     * Returns true if they are attacking us specifically, false otherwise
     * @param player The player to check if they are attacking
     */
    public isAttackingUs(player: Character): boolean {
        return this.target == player.id
    }

    /**
     * If the player is disabled, they cannot move or attack
     * @returns If the player is disabled
     */
    public isDisabled(): boolean {
        if (this.rip || this.s?.sleeping) return true
        for (const conditionName in this.s) {
            const gCondition = this.G.conditions[conditionName as ConditionName]
            if (gCondition?.blocked) return true
        }
        return false
    }

    /**
     * Returns true if the player is "friendly", for example, if it's one of our characters, in our party, or in our friends list.
     * @param character Our character (e.g.: bot.character)
     */
    public isFriendly(bot: Character): boolean {
        // Check if it's an NPC
        if (this.npc) return true

        // Check if it's us
        if (bot.id == this.id) return true

        // Check if we're the owner
        if (this.owner && bot.owner == this.owner) return true

        // Check if we're in the same party
        if (this.party && bot.party == this.party) return true

        // Check if we're on the same team
        if (this.team && bot.team == this.team) return true

        // Check if we're in the same guild
        if (this.guild && bot.guild == this.guild) return true

        // TODO: Check if they're in our friends list

        // They're not friendly >:(
        return false
    }

    /**
     * Returns true if this player is an NPC.
     *
     * @return {*}  {boolean}
     * @memberof Player
     */
    public isNPC(): boolean {
        return this.npc !== undefined
    }
}
