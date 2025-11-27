import type { ServerToClient_game_response, SkillSuccessGRDataObject } from "typed-adventureland";
import { Character } from "./Character.js";
import Configuration from "./Configuration.js";
import { isRelevantGameResponse, isSuccessGameResponse } from "./TypeGuards.js";

export class Paladin extends Character {
  public override get ctype(): "paladin" {
    return "paladin";
  }

  public selfHeal(): Promise<SkillSuccessGRDataObject> {
    this.checkCooldown("selfheal");

    const s = this.socket;

    const promise = new Promise<SkillSuccessGRDataObject>((resolve, reject) => {
      const cleanup = () => {
        clearTimeout(timeout);
        s.off("game_response", responseHandler);
      };

      const responseHandler = (data: ServerToClient_game_response) => {
        if (!isRelevantGameResponse(data, "selfheal")) return;

        if (isSuccessGameResponse(data)) {
          resolve(data as unknown as SkillSuccessGRDataObject);
        } else {
          reject(new Error(data.response));
        }
        cleanup();
      };

      const timeout = setTimeout(() => {
        cleanup();
        reject(new Error(`Timeout (${Configuration.SOCKET_EMIT_TIMEOUT_MS}ms)`));
      }, Configuration.SOCKET_EMIT_TIMEOUT_MS);

      s.on("game_response", responseHandler);
    });

    s.emit("skill", { name: "selfheal" });

    return promise;
  }
}

export default Paladin;
