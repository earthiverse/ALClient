import type { ProjectileKey, ServerToClient_action_projectile } from "typed-adventureland";
import { Entity } from "./Entity.js";
import { Game } from "./Game.js";

export class EntityProjectile extends Entity {
  protected _projectile: ProjectileKey;
  public get projectile(): ProjectileKey {
    return this._projectile;
  }

  protected _attacker: string;
  public get attacker(): string {
    return this._attacker;
  }

  protected _target: string;
  public get target(): string {
    return this._target;
  }

  public override get speed(): number {
    return this.game.G.projectiles[this.projectile].speed ?? 0;
  }

  constructor(game: Game, data: ServerToClient_action_projectile, attacker?: Entity, target?: Entity) {
    super(game, data.pid);

    this._projectile = data.projectile;
    this._attacker = data.attacker;
    this._target = data.target;
    this._x = data.x;
    this._y = data.y;

    const attackerOrTarget = attacker ?? target;
    if (attackerOrTarget) {
      this._map = attackerOrTarget.map;
      this._in = attackerOrTarget.in;
    }

    if (attacker) {
      this._x = attacker.x;
      this._y = attacker.y;
    }

    if (target) {
      this._going_x = target.x;
      this._going_y = target.y;
    }
  }
}
