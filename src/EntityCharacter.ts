import type { ClassKey, MapKey, ServerToClient_entities_players } from "typed-adventureland";
import { Entity } from "./Entity.js";
import { type Game } from "./Game.js";

export class EntityCharacter extends Entity {
  ctype!: ClassKey;

  /**
   *
   */
  constructor(game: Game, mapAndInstance: { map: MapKey; in: string }, data: ServerToClient_entities_players) {
    super(game, data.id);

    this.ctype = data.ctype;

    this._map = mapAndInstance.map;
    this._in = mapAndInstance.in;
    this.updateData(data);
  }

  public override updateData(data: ServerToClient_entities_players): void {
    super.updateData(data);
  }
}
