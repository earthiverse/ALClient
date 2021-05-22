import { Character } from "./Character"
import { SlotInfo, StatusInfo } from "./definitions/adventureland"
import { CharacterType, CXData, DamageType, GData2, MapName, NPCName } from "./definitions/adventureland-data"
import { PlayerData } from "./definitions/adventureland-server"

export class Player implements PlayerData {
    protected G: GData2
    public lastMongoUpdate: number

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
    public party: string
    public reflection = 0
    public resistance = 0
    public rpiercing = 0
    public target: string
    public x: number
    public y: number
    public s: StatusInfo = {}

    c: any = {}
    cx: CXData
    focus?: string
    hp: number
    max_hp: number
    max_mp: number
    mp: number
    npc?: NPCName
    owner: string
    pdps: number
    q: { compound?: { len: number; ms: number; num: number; nums: number[]; }; upgrade?: { len: number; ms: number; num: number; }; } = {}
    range: number;
    rip: boolean;
    skin: string;
    slots: SlotInfo;
    speed: number;
    stand?: boolean | "cstand" | "stand0";
    tp?: boolean;

    // Soft Properties
    in: MapName;
    map: MapName;

    public constructor(data: PlayerData, map: MapName, g: GData2) {
        this.G = g

        // Set soft properties
        this.map = map
        if (!data.npc) this.damage_type = this.G.classes[data.ctype].damage_type

        // Set everything else
        this.updateData(data)
    }

    public updateData(data: PlayerData): void {
        if (this.id !== undefined && this.id !== data.id) throw Error("The entity's ID does not match")

        // Set everything
        for (const key in data) this[key] = data[key]
    }

    /**
     * Returns true if the player is "friendly", for example, if it's one of our characters, in our party, or in our friends list.
     * @param character Our character (e.g.: bot.character)
     */
    public isFriendly(bot: Character): boolean {
        // Check if we're the owner
        if (bot.owner == this.owner) return true

        // Check if we're in the same party
        if (bot.party == this.party) return true

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