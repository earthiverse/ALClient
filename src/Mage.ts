import type { ServerToClient_game_response, SkillSuccessGRDataObject } from "typed-adventureland";
import { Character } from "./Character.js";
import Configuration from "./Configuration.js";
import { isRelevantGameResponse, isSuccessGameResponse } from "./TypeGuards.js";
import Utilities from "./Utilities.js";

export class Mage extends Character {
  public override get ctype(): "mage" {
    return "mage";
  }

  public async blink(
    x: number,
    y: number,
    options: {
      /**
       * If we have the pathfinder prepared, check if the position is blinkable before attempting the blink.
       */
      checkBeforeEmit: boolean;
      /**
       * Maximum offset to check for blink if the provided x,y is not able to be blinked to.
       * MUST be divisible by 10.
       */
      checkMax: number;
    } = {
      checkBeforeEmit: true,
      checkMax: 30,
    },
  ): Promise<SkillSuccessGRDataObject> {
    this.checkCooldown("blink");

    const s = this.socket;

    // Blink rounds to the nearest 10 on the server
    let blinkX = Math.round(x / 10) * 10;
    let blinkY = Math.round(y / 10) * 10;

    if (options.checkBeforeEmit) {
      if (options.checkMax % 10 !== 0) throw new Error("checkMax must be divisible by 10");

      // If the pathfinder is prepared, check if the blink would work before actually blinking
      try {
        const pathfinder = this.game.pathfinder;
        let canWalk = false;
        for (const [dx, dy] of Utilities.getSpiralOffsets(10, options.checkMax)) {
          const testX = blinkX + dx!;
          const testY = blinkY + dy!;

          if (pathfinder.isWalkable(this.map, testX, testY)) {
            blinkX = testX;
            blinkY = testY;
            canWalk = true;
            break;
          }
        }
        if (!canWalk) throw new Error(`Cannot blink to ${this.map},${x},${y}`);
      } catch {
        // Suppress No Pathfinder Error
      }
    }

    const promise = new Promise<SkillSuccessGRDataObject>((resolve, reject) => {
      const cleanup = () => {
        clearTimeout(timeout);
        s.off("game_response", responseHandler);
      };

      const responseHandler = (data: ServerToClient_game_response) => {
        if (!isRelevantGameResponse(data, "blink")) return;

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

    s.emit("skill", { name: "blink", x: blinkX, y: blinkY });
    return promise;
  }
}

export default Mage;
