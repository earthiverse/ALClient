import type { MapKey } from "typed-adventureland";
import type { Game } from "./Game.js";

export type Location = {
  map: MapKey;
  in: string;
  x: number;
  y: number;
};

export type Movement = {
  moving?: boolean;
  speed?: number;
  going_x?: number;
  going_y?: number;
};

export type EntityData = {
  id: string;
};

export abstract class Entity implements EntityData, Location, Movement {
  public readonly game: Game;

  protected _lastUpdate!: number;
  /** When this Entity's position data was last updated (Unix timestamp) */
  public get lastUpdate(): number {
    return this._lastUpdate;
  }

  public readonly id: string;

  protected _map?: MapKey;
  /** Current map */
  public get map(): MapKey {
    if (!this._map) throw new Error("Missing map data");
    return this._map;
  }

  protected _in?: string;
  /** Current instance */
  public get in(): string {
    if (this._in === undefined) throw new Error("Missing instance data");
    return this._in;
  }

  protected _x?: number;
  /** Current x position */
  public get x(): number {
    if (this._x === undefined) throw new Error("Missing position data");
    return this._x;
  }

  protected _y?: number;
  /** Current y position */
  public get y(): number {
    if (this._y === undefined) throw new Error("Missing position data");
    return this._y;
  }

  public get moving(): boolean {
    return this.x !== this.going_x || this.y !== this.going_y;
  }

  protected _speed?: number;
  public get speed(): number {
    if (this._speed === undefined) throw new Error("Missing speed data");
    return this._speed;
  }

  public get going(): Location {
    if (!this._map) throw new Error("Missing map data");
    if (this._in === undefined) throw new Error("Missing instance data");
    if (this._going_x === undefined) throw new Error("Missing position data");
    if (this._going_y === undefined) throw new Error("Missing position data");
    return {
      map: this._map,
      in: this._in,
      x: this._going_x,
      y: this.going_y,
    };
  }

  protected _going_x?: number;
  public get going_x(): number {
    if (this._going_x === undefined) throw new Error("Missing position data");
    return this._going_x;
  }

  protected _going_y?: number;
  public get going_y(): number {
    if (this._going_y === undefined) throw new Error("Missing position data");
    return this._going_y;
  }

  constructor(game: Game, id: string) {
    this.game = game;
    this.id = id;
  }

  /**
   * NOTE: This function is intended for internal use.
   *
   * @param data
   * @param setLastUpdate
   */
  public updateData(data: Partial<Location> & Partial<Movement>, setLastUpdate = true) {
    // Position
    if (setLastUpdate) this._lastUpdate = Date.now();
    if (data.map !== undefined) this._map = data.map;
    if (data.in !== undefined) this._in = data.in;
    if (data.x !== undefined) this._x = data.x;
    if (data.y !== undefined) this._y = data.y;

    // Movement
    if (data.speed !== undefined) this._speed = data.speed;
    if (data.going_x !== undefined) this._going_x = data.going_x;
    if (data.going_y !== undefined) this._going_y = data.going_y;
  }

  /** @internal */
  public updatePosition() {
    const msSinceLastUpdate = Date.now() - this._lastUpdate;
    if (msSinceLastUpdate <= 0) return; // We already checked recently
    if (
      this._x === undefined ||
      this._y === undefined ||
      this._going_x === undefined ||
      this.going_y === undefined ||
      this._speed === undefined ||
      this._speed === 0
    )
      return; // No positional data, or not moving

    const distanceTraveled = (this.speed * msSinceLastUpdate) / 1000;
    const yToGoal = this.going_y - this.y;
    const xToGoal = this.going_x - this.x;
    const distanceToGoal = Math.sqrt(xToGoal * xToGoal + yToGoal * yToGoal);
    if (distanceTraveled >= distanceToGoal) {
      this._x = this.going_x;
      this._y = this.going_y;
    } else {
      const percentTraveled = distanceTraveled / distanceToGoal;
      this._x += xToGoal * percentTraveled;
      this._y += yToGoal * percentTraveled;
    }

    this._lastUpdate = Date.now();
  }

  /**
   * Returns wether this Entity can move to the given Entity in a straight line
   *
   * @param entity
   */
  public canMoveTo(entity: Entity): boolean;
  /**
   * Returns wether this Entity can move to the given location in a straight line
   *
   * @param x
   * @param y
   * @returns
   */
  public canMoveTo(x: number, y: number): boolean;
  public canMoveTo(x: number | Entity, y?: number): boolean {
    if (x instanceof Entity) {
      const entity = x;
      return this.game.pathfinder.canWalkPath(this.map, this.x, this.y, entity.x, entity.y);
    }
    return this.game.pathfinder.canWalkPath(this.map, this.x, this.y, x, y as number);
  }

  /**
   * @param to
   * @returns Distance between this entity and the given location
   */
  public getDistanceTo(to: Location): number {
    if (to.map !== this.map) return Number.POSITIVE_INFINITY; // Different map
    if (to.in !== this.in) return Number.POSITIVE_INFINITY; // Different instance
    const dx = to.x - this.x;
    const dy = to.y - this.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}
