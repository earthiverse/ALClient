import type { DamageType, MapKey, MonsterKey, ServerToClient_entities_monsters, StatusInfo } from "typed-adventureland";
import { Entity } from "./Entity.js";
import type { Game } from "./Game.js";

export class EntityMonster extends Entity {
  public get "1hp"(): boolean {
    return Boolean(this.game.G.monsters[this._type]["1hp"]);
  }

  protected _attack: number;
  public get attack(): number {
    return this._attack;
  }

  public get avoidance(): number {
    return this.game.G.monsters[this._type].avoidance ?? 0;
  }

  public get apiercing(): number {
    return this.game.G.monsters[this._type].apiercing ?? 0;
  }

  public get armor(): number {
    return this.game.G.monsters[this._type].armor ?? 0;
  }

  public get crit(): number {
    return this.game.G.monsters[this._type].crit ?? 0;
  }

  public get damageType(): DamageType {
    return this.game.G.monsters[this._type].damage_type;
  }

  public get evasion(): number {
    return this.game.G.monsters[this._type].evasion ?? 0;
  }

  protected _hp: number;
  public get hp(): number {
    return this._hp;
  }

  public get immune(): boolean {
    return Boolean(this.game.G.monsters[this._type].immune);
  }

  protected _level: number;
  public get level(): number {
    return this._level;
  }

  protected _max_hp: number;
  public get max_hp(): number {
    return this._max_hp;
  }

  public get rpiercing(): number {
    return this.game.G.monsters[this._type].rpiercing ?? 0;
  }

  public get reflection(): number {
    return this.game.G.monsters[this._type].reflection ?? 0;
  }

  public get resistance(): number {
    return this.game.G.monsters[this._type].resistance ?? 0;
  }

  public get rip(): boolean {
    return this.hp === 0;
  }

  protected _s?: StatusInfo;
  public get s(): StatusInfo {
    return this._s ?? {};
  }

  public override get speed(): number {
    return this._speed ?? this.game.G.monsters[this._type].speed;
  }

  protected _target?: string;
  public get target(): string | undefined {
    return this._target;
  }

  protected _type: MonsterKey;
  public get type(): MonsterKey {
    return this._type;
  }

  constructor(game: Game, mapAndInstance: { map: MapKey; in: string }, data: ServerToClient_entities_monsters) {
    super(game, data.id);

    const gMonster = game.G.monsters[data.type];

    this._type = data.type;

    this._attack = data.attack ?? gMonster.attack;
    this._hp = data.hp ?? gMonster.hp;
    this._level = data.level ?? 1;
    this._max_hp = data.max_hp ?? gMonster.hp;

    if (data.moving !== true) {
      this._going_x = data.x;
      this._going_y = data.y;
    }

    this._map = mapAndInstance.map;
    this._in = mapAndInstance.in;
    this.updateData(data);
  }

  public override updateData(data: Partial<ServerToClient_entities_monsters>, setLastUpdate = true): void {
    super.updateData(data, setLastUpdate);

    if (data.attack !== undefined) this._attack = data.attack;
    if (data.hp !== undefined) this._hp = data.hp;
    if (data.level !== undefined) this._level = data.level;
    if (data.max_hp !== undefined) this._max_hp = data.max_hp;
    if (data.s !== undefined) this._s = data.s;
    data.target = typeof data.target === "string" ? data.target : undefined;
  }
}
