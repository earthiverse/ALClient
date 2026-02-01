import type {
  ServerToClient_action,
  ServerToClient_game_response,
  SkillSuccessGRDataObject,
} from "typed-adventureland";
import { Character } from "./Character.js";
import Configuration from "./Configuration.js";
import { Entity } from "./Entity.js";
import { isRelevantGameResponse, isSuccessGameResponse } from "./TypeGuards.js";

export class Ranger extends Character {
  public override get ctype(): "ranger" {
    return "ranger";
  }

  public async threeShot(
    id1: Entity | string,
    id2: Entity | string,
    id3: Entity | string,
    options: {
      returnProjectiles: boolean;
    } = { returnProjectiles: true },
  ): Promise<SkillSuccessGRDataObject | string[]> {
    const s = this.socket;

    if (id1 instanceof Entity) id1 = id1.id;
    if (id2 instanceof Entity) id2 = id2.id;
    if (id3 instanceof Entity) id3 = id3.id;

    this.checkCooldown("3shot");

    const projectiles: string[] = [];
    const getProjectiles = (data: ServerToClient_action) => {
      if (
        data.attacker == this.id &&
        data.type == "3shot" &&
        (data.target == id1 || data.target == id2 || data.target == id3)
      ) {
        projectiles.push(data.pid);
      }
    };
    if (options.returnProjectiles) s.on("action", getProjectiles);

    const promise = new Promise<SkillSuccessGRDataObject>((resolve, reject) => {
      const cleanup = () => {
        clearTimeout(timeout);
        s.off("game_response", attackHandler);
      };

      const attackHandler = (data: ServerToClient_game_response) => {
        if (!isRelevantGameResponse(data, "3shot")) return;

        if (isSuccessGameResponse(data)) {
          resolve(data as SkillSuccessGRDataObject);
        } else {
          reject(new Error(data.response));
        }
        cleanup();
      };

      const timeout = setTimeout(() => {
        cleanup();
        reject(new Error(`Timeout (${Configuration.SOCKET_EMIT_TIMEOUT_MS}ms)`));
      }, Configuration.SOCKET_EMIT_TIMEOUT_MS);
    });

    s.emit("skill", {
      name: "3shot",
      ids: [id1, id2, id3],
    });

    if (options.returnProjectiles) {
      try {
        await promise;
      } finally {
        s.off("action", getProjectiles);
      }
      return projectiles;
    }
    return promise;
  }

  public async fiveShot(
    id1: Entity | string,
    id2: Entity | string,
    id3: Entity | string,
    id4: Entity | string,
    id5: Entity | string,
    options: {
      returnProjectiles: boolean;
    } = { returnProjectiles: true },
  ): Promise<SkillSuccessGRDataObject | string[]> {
    const s = this.socket;

    if (id1 instanceof Entity) id1 = id1.id;
    if (id2 instanceof Entity) id2 = id2.id;
    if (id3 instanceof Entity) id3 = id3.id;
    if (id4 instanceof Entity) id4 = id4.id;
    if (id5 instanceof Entity) id5 = id5.id;

    this.checkCooldown("5shot");

    const projectiles: string[] = [];
    const getProjectiles = (data: ServerToClient_action) => {
      if (
        data.attacker == this.id &&
        data.type == "5shot" &&
        (data.target == id1 || data.target == id2 || data.target == id3)
      ) {
        projectiles.push(data.pid);
      }
    };
    if (options.returnProjectiles) s.on("action", getProjectiles);

    const promise = new Promise<SkillSuccessGRDataObject>((resolve, reject) => {
      const cleanup = () => {
        clearTimeout(timeout);
        s.off("game_response", attackHandler);
      };

      const attackHandler = (data: ServerToClient_game_response) => {
        if (!isRelevantGameResponse(data, "5shot")) return;

        if (isSuccessGameResponse(data)) {
          resolve(data as SkillSuccessGRDataObject);
        } else {
          reject(new Error(data.response));
        }
        cleanup();
      };

      const timeout = setTimeout(() => {
        cleanup();
        reject(new Error(`Timeout (${Configuration.SOCKET_EMIT_TIMEOUT_MS}ms)`));
      }, Configuration.SOCKET_EMIT_TIMEOUT_MS);
    });

    s.emit("skill", {
      name: "5shot",
      ids: [id1, id2, id3, id4, id5],
    });

    if (options.returnProjectiles) {
      try {
        await promise;
      } finally {
        s.off("action", getProjectiles);
      }
      return projectiles;
    }
    return promise;
  }
}

export default Ranger;
