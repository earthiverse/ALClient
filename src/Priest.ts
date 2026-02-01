import type {
  ServerToClient_disappear,
  ServerToClient_game_response,
  SkillSuccessGRDataObject,
} from "typed-adventureland";
import { Character } from "./Character.js";
import Configuration from "./Configuration.js";
import { Entity } from "./Entity.js";
import { isRelevantGameResponse, isSuccessGameResponse } from "./TypeGuards.js";

export class Priest extends Character {
  public override get ctype(): "priest" {
    return "priest";
  }

  // TDOO: Untested
  public heal(id: Entity | string): Promise<SkillSuccessGRDataObject> {
    const s = this.socket;

    if (id instanceof Entity) id = id.id;
    if (!id) throw new Error("`id` not provided");

    this.checkCooldown("heal");

    const promise = new Promise<SkillSuccessGRDataObject>((resolve, reject) => {
      const cleanup = () => {
        clearTimeout(timeout);
        s.off("game_response", responseHandler);
        s.off("disappear", disappearHandler);
      };

      const responseHandler = (data: ServerToClient_game_response) => {
        if (!isRelevantGameResponse(data, "heal")) return;

        if (isSuccessGameResponse(data)) {
          resolve(data as unknown as SkillSuccessGRDataObject);
        } else {
          reject(new Error(data.response));
        }
        cleanup();
      };

      const disappearHandler = (data: ServerToClient_disappear) => {
        if (data.id !== id) return; // Different entity
        reject(new Error("not_there"));
        cleanup();
      };

      const timeout = setTimeout(() => {
        cleanup();
        reject(new Error(`Timeout (${Configuration.SOCKET_EMIT_TIMEOUT_MS}ms)`));
      }, Configuration.SOCKET_EMIT_TIMEOUT_MS);

      s.on("game_response", responseHandler);
      s.on("disappear", disappearHandler);
    });

    s.emit("heal", { id });

    return promise;
  }
}

export default Priest;
