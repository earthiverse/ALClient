import { Character } from "./Character"
import { CharacterType, GData, MapName, SlotInfo, StatusInfo } from "./definitions/adventureland"
import { EntityData, PlayerData } from "./definitions/adventureland-server"

export class Player implements PlayerData {
    protected G: GData

    public id: string
    public ctype: CharacterType
    public abs: boolean
    public angle: number
    public armor: number
    public cid: number
    public frequency: number
    public going_x: number
    public going_y: number
    public level: number
    public move_num: any
    public moving: boolean
    public resistance: number
    public target: string
    public x: number
    public y: number
    public s: StatusInfo

    // Soft Properties
    c: any;
    cx: any;
    focus?: string;
    map: MapName;
    in: MapName;
    hp: number;
    max_hp: number;
    max_mp: number;
    mp: number;
    npc?: string;
    owner: string;
    pdps: number;
    q: { compound?: { len: number; ms: number; num: number; nums: number[]; }; upgrade?: { len: number; ms: number; num: number; }; };
    range: number;
    rip: boolean;
    skin: string;
    slots: SlotInfo;
    speed: number;
    stand?: boolean | "cstand" | "stand0";
    tp?: boolean;

    public constructor(data: PlayerData, map: MapName, G: GData) {
        this.G = G

        // Set soft properties
        this.map = map

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
        if (bot.character.owner == this.owner) return true

        // Check if we're in a party with the character
        if (bot.party && bot.party.list && bot.party.list.includes(this.id)) return true

        // TODO: Check if they're in our friends list

        // They're not friendly >:(
        return false
    }
}