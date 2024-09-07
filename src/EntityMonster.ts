import type { MapKey, MonsterKey, ServerToClient_entities_monsters } from "typed-adventureland";
import { Entity } from "./Entity.js";
import { type Game } from "./Game.js";

export class EntityMonster extends Entity {
  protected _type: MonsterKey;
  public get type(): MonsterKey {
    return this._type;
  }

  public override get speed(): number {
    return this._speed ?? this.game.G.monsters[this._type].speed;
  }

  // TODO: Add more monster stuff

  constructor(game: Game, mapAndInstance: { map: MapKey; in: string }, data: ServerToClient_entities_monsters) {
    super(game, data.id);

    this._type = data.type;

    this._map = mapAndInstance.map;
    this._in = mapAndInstance.in;
    this.updateData(data);
  }

  public override updateData(data: ServerToClient_entities_monsters): void {
    super.updateData(data);
  }
}
