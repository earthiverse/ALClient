import type { ClassKey, MapKey, ServerToClient_entities_players } from "typed-adventureland";
import { Entity } from "./Entity.js";
import type { Game } from "./Game.js";

export class EntityCharacter extends Entity {
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

  protected _rip?: boolean;
  public get rip(): boolean {
    return this._rip === true;
  }

  /**
   *
   */
  constructor(game: Game, mapAndInstance: { map: MapKey; in: string }, data: ServerToClient_entities_players) {
    super(game, data.id);

    this._ctype = data.ctype;

    if (data.moving === undefined) {
      this._going_x = data.x;
      this._going_y = data.y;
    }

    this._map = mapAndInstance.map;
    this._in = mapAndInstance.in;
    this.updateData(data);
  }

  /** @internal */
  public override updateData(data: Partial<ServerToClient_entities_players>): void {
    super.updateData(data);

    if (data.hp !== undefined) this._hp = data.hp;
    if (data.level !== undefined) this._level = data.level;
    if (data.max_hp !== undefined) this._max_hp = data.max_hp;
    if (data.rip !== undefined) this._rip = !!data.rip;
  }
}
