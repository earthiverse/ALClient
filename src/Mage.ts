import type { ServerToClient_game_response, ServerToClient_new_map, ServerToClient_player } from "typed-adventureland";
import { Character } from "./Character.js";
import Configuration from "./Configuration.js";
import { isFailedGameResponse, isRelevantGameResponse } from "./TypeGuards.js";
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
      resolveOn: "start" | "finish";
    } = {
      checkBeforeEmit: true,
      checkMax: 30,
      resolveOn: "finish",
    },
  ): Promise<void> {
    this.checkCooldown("blink");

    const s = this.socket;

    // Blink rounds to the nearest 10 on the server
    let blinkX = Math.round(x / 10) * 10;
    let blinkY = Math.round(y / 10) * 10;

    if (options.checkBeforeEmit) {
      if (options.checkMax % 10 !== 0) throw new Error("checkMax must be divisible by 10");

      // If the pathfinder is prepared, check if the blink would work before actually blinking
      let canWalk = true;
      try {
        const pathfinder = this.game.pathfinder;
        canWalk = false;
        for (const [dx, dy] of Utilities.getSpiralOffsets(10, options.checkMax)) {
          const testX = blinkX + dx;
          const testY = blinkY + dy;

          if (pathfinder.isWalkable(this.map, testX, testY)) {
            blinkX = testX;
            blinkY = testY;
            canWalk = true;
            break;
          }
        }
      } catch {
        // Suppress No Pathfinder Error
      }
      if (!canWalk) throw new Error(`Cannot blink to ${this.map},${x},${y}`);
    }

    const blinkStarted = new Promise<void>((resolve, reject) => {
      const cleanup = () => {
        clearTimeout(timeout);
        s.off("game_response", responseHandler);
        s.off("player", playerHandler);
      };

      const playerHandler = (data: ServerToClient_player) => {
        if (data.s.blink) {
          cleanup();
          resolve();
        }
      };

      const responseHandler = (data: ServerToClient_game_response) => {
        if (!isRelevantGameResponse(data, "blink")) return;
        if (isFailedGameResponse(data)) {
          reject(new Error(data.response));
        }
        cleanup();
      };

      const timeout = setTimeout(() => {
        cleanup();
        reject(new Error(`Timeout (${Configuration.SOCKET_EMIT_TIMEOUT_MS}ms)`));
      }, Configuration.SOCKET_EMIT_TIMEOUT_MS);

      s.on("game_response", responseHandler);
      s.on("player", playerHandler);
    });

    s.emit("skill", { name: "blink", x: blinkX, y: blinkY });
    if (options.resolveOn === "start") return blinkStarted;
    await blinkStarted;

    const blinkFinished = new Promise<void>((resolve, reject) => {
      const cleanup = () => {
        clearTimeout(timeout);
        s.off("new_map", newMapHandler);
      };

      const newMapHandler = (data: ServerToClient_new_map) => {
        if (data.effect === "blink") {
          cleanup();
          resolve();
        }
      };

      const responseHandler = (data: ServerToClient_game_response) => {
        if (!isRelevantGameResponse(data, "blink")) return;
        if (isFailedGameResponse(data)) {
          cleanup();
          reject(new Error(data.response));
        }
      };

      const timeout = setTimeout(() => {
        cleanup();
        reject(new Error(`Timeout (${Configuration.SOCKET_EMIT_TIMEOUT_MS}ms)`));
      }, Configuration.SOCKET_EMIT_TIMEOUT_MS);

      s.on("game_response", responseHandler);
      s.on("new_map", newMapHandler);
    });

    return blinkFinished;
  }
}

export default Mage;
