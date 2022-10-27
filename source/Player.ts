import { Character } from "./Character.js"
import { SlotInfo, StatusInfo } from "./definitions/adventureland.js"
import { CharacterType, CXData, DamageType, GData, MapName, NPCName, SkillName } from "./definitions/adventureland-data.js"
import { ChannelInfo, PlayerData, QInfo } from "./definitions/adventureland-server.js"
import { Entity } from "./Entity.js"
import { Tools } from "./Tools.js"
import { Constants } from "./Constants.js"

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
    rip: boolean
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
    }

    public calculateDamageRange(defender: Character | Entity | Player, skill: SkillName = "attack"): [number, number] {
        // If the entity is immune, most skills won't do damage
        if ((defender as Entity).immune && ["3shot", "5shot", "burst", "cburst", "supershot", "taunt"].includes(skill)) return [0, 0]

        if (defender["1hp"] || skill == "taunt") return [1, 1]

        let baseDamage: number = this.attack
        if (!this.G.skills[skill]) console.debug(`calculateDamageRange DEBUG: '${skill}' isn't a skill!?`)
        if (this.G.skills[skill]?.damage) baseDamage = this.G.skills[skill].damage


        // NOTE: I asked Wizard to add something to G.conditions.cursed and .marked so we don't need these hardcoded.
        if (defender.s.cursed) baseDamage *= 1.2
        if (defender.s.marked) baseDamage *= 1.1

        if (this.ctype == "priest") baseDamage *= 0.4 // Priests only do 40% damage

        let additionalApiercing = 0
        if (this.G.skills[skill]?.apiercing) additionalApiercing = this.G.skills[skill].apiercing
        // NOTE: currently no skills with rpiercing
        // let additionalRpiercing = 0
        // if (this.G.skills[skill].rpiercing) additionalRpiercing = this.G.skills[skill].rpiercing
        if (this.damage_type == "physical") baseDamage *= Tools.damage_multiplier(defender.armor - this.apiercing - additionalApiercing)
        else if (this.damage_type == "magical") baseDamage *= Tools.damage_multiplier(defender.resistance - this.rpiercing /** - additionalRpiercing */)

        if (this.G.skills[skill]?.damage_multiplier) baseDamage *= this.G.skills[skill].damage_multiplier

        let lowerLimit = baseDamage * 0.9
        let upperLimit = baseDamage * 1.1

        if (this.crit) {
            if (this.crit >= 100) {
                lowerLimit *= (2 + (this.critdamage / 100))
            }
            upperLimit *= (2 + (this.critdamage / 100))
        }

        // NOTE: This information is from @Wizard on Discord on May 1st, 2020
        // https://discord.com/channels/238332476743745536/243707345887166465/705722706250694737
        if (skill == "cleave") {
            lowerLimit *= 0.1
            upperLimit *= 0.9
        }

        return [lowerLimit, upperLimit]
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
        return this.rip || ((this.s.stunned || this.s.fingered || this.s.deepfreezed || this.s.sleeping) !== undefined)
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