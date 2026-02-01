import type {
  CharacterEntitySlotsInfos,
  ClassKey,
  DamageType,
  MapKey,
  NpcKey,
  ServerToClient_entities_players,
  StatusInfo,
} from "typed-adventureland";
import { Entity } from "./Entity.js";
import type { Game } from "./Game.js";

export class EntityCharacter extends Entity {
  public get apiercing(): number {
    return 0; // TODO: Calculate an estimate of apiercing based on items equipped
  }

  protected _armor!: number;
  public get armor(): number {
    return this._armor;
  }

  // TODO: Is this really not on all characters in the entities event?
  protected _attack?: number;
  public get attack(): number {
    return this._attack ?? 0;
  }

  public get avoidance(): number {
    return 0; // TODO: I don't think players can get avoidance, need to confirm
  }

  public get crit(): number {
    return 0; // TODO: Calculate an estimate of crit based on items equipped
  }

  protected _ctype: ClassKey;
  public get ctype(): ClassKey {
    return this._ctype;
  }

  /**
   * NOTE: If using a skill that does damage, and the skill has a damage type, that will take priority
   */
  public get damageType(): DamageType {
    const mainhand = this._slots?.mainhand?.name;
    if (mainhand) {
      const gMainhand = this.game.G.items[mainhand];
      if (gMainhand.damage_type !== undefined) return gMainhand.damage_type;
    }

    return this.game.G.classes[this._ctype].damage_type;
  }

  public get evasion(): number {
    return 0; // TODO: Calculate an estimate of evasion based on items equipped
  }

  protected _hp!: number;
  public get hp(): number {
    return this._hp;
  }

  protected _level!: number;
  public get level(): number {
    return this._level;
  }

  protected _max_hp!: number;
  public get max_hp(): number {
    return this._max_hp;
  }

  protected _npc?: NpcKey;
  public get npc(): NpcKey | false {
    return this._npc ? this._npc : false;
  }

  protected _owner?: string;
  public get owner(): string | undefined {
    return this._owner;
  }

  protected _party?: string;
  public get party(): string | undefined {
    return this._party;
  }

  // TODO: Is this really not on all characters in the entities event?
  protected _range: number | undefined;
  public get range(): number {
    return this._range ?? 0;
  }

  public get reflection(): number {
    return 0; // TODO: Calculate an estimate of reflection based on items equipped
  }

  protected _resistance: number | undefined; // NOTE: Resistance is missing on (some?) NPCs
  public get resistance(): number {
    return this._resistance ?? 0;
  }

  // TODO: Is this really not on all characters in the entities event?
  // TODO: Can this really be a number?
  protected _rip: boolean | number | undefined;
  public get rip(): boolean {
    return Boolean(this._rip);
  }

  public get rpiercing(): number {
    return 0; // TODO: Calculate an estimate of apiercing based on items equipped
  }

  protected _s?: StatusInfo;
  public get s(): StatusInfo {
    return this._s ?? {};
  }

  protected _slots?: CharacterEntitySlotsInfos;
  public get slots(): CharacterEntitySlotsInfos | undefined {
    return this._slots;
  }

  protected _target?: string;
  public get target(): string | undefined {
    return this._target;
  }

  constructor(game: Game, mapAndInstance: { map: MapKey; in: string }, data: ServerToClient_entities_players) {
    super(game, data.id);

    this._ctype = data.ctype;
    this._npc = data.npc;

    if (data.moving !== true) {
      this._going_x = data.x;
      this._going_y = data.y;
    }

    this._map = mapAndInstance.map;
    this._in = mapAndInstance.in;
    this.updateData(data);
  }

  public override updateData(data: Partial<ServerToClient_entities_players>, setLastUpdate = true): void {
    super.updateData(data, setLastUpdate);

    if (data.armor !== undefined) this._armor = data.armor;
    if (data.attack !== undefined) this._attack = data.attack;
    if (data.hp !== undefined) this._hp = data.hp;
    if (data.level !== undefined) this._level = data.level;
    if (data.max_hp !== undefined) this._max_hp = data.max_hp;
    if (data.owner !== undefined) this._owner = data.owner;
    if (data.party !== undefined) this._party = data.party; // TODO: Is this correct? What if they leave a party?
    if (data.range !== undefined) this._range = data.range;
    if (data.resistance !== undefined) this._resistance = data.resistance;
    if (data.rip !== undefined) this._rip = data.rip;
    if (data.s !== undefined) this._s = data.s;
    if (data.slots !== undefined) this._slots = data.slots;
    if (typeof data.target === "string") this._target = data.target;
  }
}
