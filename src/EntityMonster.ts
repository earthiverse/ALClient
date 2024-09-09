import type { MapKey, MonsterKey, ServerToClient_entities_monsters } from "typed-adventureland";
import { Entity } from "./Entity.js";
import type { Game } from "./Game.js";

export class EntityMonster extends Entity {
  protected _type: MonsterKey;
  public get type(): MonsterKey {
    return this._type;
  }

  protected _hp: number;
  public get hp(): number {
    return this._hp;
  }

  protected _level: number;
  public get level(): number {
    return this._level;
  }

  protected _max_hp: number;
  public get max_hp(): number {
    return this._max_hp;
  }

  public get rip(): boolean {
    return this.hp === 0;
  }

  public override get speed(): number {
    return this._speed ?? this.game.G.monsters[this._type].speed;
  }

  // TODO: Add more monster stuff

  constructor(game: Game, mapAndInstance: { map: MapKey; in: string }, data: ServerToClient_entities_monsters) {
    super(game, data.id);

    const gMonster = game.G.monsters[data.type];

    this._type = data.type;

    this._hp = data.hp ?? gMonster.hp;
    this._level = data.level ?? 1;
    this._max_hp = data.max_hp ?? gMonster.hp;

    if (data.moving === undefined) {
      this._going_x = data.x;
      this._going_y = data.y;
    }

    this._map = mapAndInstance.map;
    this._in = mapAndInstance.in;
    this.updateData(data);
  }

  public override updateData(data: Partial<ServerToClient_entities_monsters>): void {
    super.updateData(data);

    if (data.hp !== undefined) this._hp = data.hp;
    if (data.level !== undefined) this._level = data.level;
    if (data.max_hp !== undefined) this._max_hp = data.max_hp;
  }
}
