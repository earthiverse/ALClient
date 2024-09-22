import type { ClassKey, MapKey, NpcKey, ServerToClient_entities_players } from "typed-adventureland";
import { Entity } from "./Entity.js";
import type { Game } from "./Game.js";

export class EntityCharacter extends Entity {
  protected _armor!: number;
  public get armor(): number {
    return this._armor;
  }

  // TODO: Is this really not on all characters in the entities event?
  protected _attack: number | undefined;
  public get attack(): number {
    return this._attack ?? 0;
  }

  protected _ctype: ClassKey;
  public get ctype(): ClassKey {
    return this._ctype;
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

  protected _party?: string;
  public get party(): string | undefined {
    return this._party;
  }

  // TODO: Is this really not on all characters in the entities event?
  protected _range: number | undefined;
  public get range(): number {
    return this._range ?? 0;
  }

  protected _resistance: number | undefined; // NOTE: Resistance is missing on (some?) NPCs
  public get resistance(): number {
    return this._resistance ?? 0;
  }

  // TODO: Is this really not on all characters in the entities event?
  // TODO: Can this really be a number?
  protected _rip: boolean | number | undefined;
  public get rip(): boolean {
    return !!this._rip;
  }

  constructor(game: Game, mapAndInstance: { map: MapKey; in: string }, data: ServerToClient_entities_players) {
    super(game, data.id);

    this._ctype = data.ctype;
    this._npc = data.npc;

    if (!data.moving) {
      this._going_x = data.x;
      this._going_y = data.y;
    }

    this._map = mapAndInstance.map;
    this._in = mapAndInstance.in;
    this.updateData(data);
  }

  /** @internal */
  public override updateData(data: Partial<ServerToClient_entities_players>, setLastUpdate = true): void {
    super.updateData(data, setLastUpdate);

    if (data.armor !== undefined) this._armor = data.armor;
    if (data.attack !== undefined) this._attack = data.attack;
    if (data.hp !== undefined) this._hp = data.hp;
    if (data.level !== undefined) this._level = data.level;
    if (data.max_hp !== undefined) this._max_hp = data.max_hp;
    if (data.party !== undefined) this._party = data.party;
    if (data.range !== undefined) this._range = data.range;
    if (data.resistance !== undefined) this._resistance = data.resistance;
    if (data.rip !== undefined) this._rip = data.rip;
  }
}
