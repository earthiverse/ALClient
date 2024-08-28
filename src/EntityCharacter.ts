import type { ClassKey, ServerToClient_entities_players } from "typed-adventureland";
import { Entity, type Location } from "./Entity.js";

export class EntityCharacter extends Entity {
  ctype!: ClassKey;

  public override updateData(data: ServerToClient_entities_players & Location): void {
    this.ctype = data.ctype;
  }
}
