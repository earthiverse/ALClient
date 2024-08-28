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

export class Entity implements Location, Movement {
  game: Game;
  lastUpdate!: number;

  // Properties
  id: string;

  // Postion
  map!: MapKey;
  in!: string;
  x!: number;
  y!: number;

  // Movement
  moving!: boolean;
  speed!: number;
  going_x?: number;
  going_y?: number;

  constructor(game: Game, data: { id: string } & Location & Movement) {
    this.game = game;
    this.id = data.id;

    this.updateData(data);
  }

  public updateData(data: Location & Movement) {
    // Position
    this.lastUpdate = Date.now();
    this.map = data.map;
    this.in = data.in;
    this.x = data.x;
    this.y = data.y;

    // Movement
    this.moving = data.moving ?? false;
    this.speed = data.speed ?? 0;
    this.going_x = data.going_x;
    this.going_y = data.going_y;
  }

  public updatePosition() {
    const msSinceLastUpdate = Date.now() - this.lastUpdate;
    if (msSinceLastUpdate <= 0) return;
    if (!this.moving) return;
    if (this.going_x === undefined || this.going_y === undefined) return; // This shouldn't happen
    if (!this.speed) return;

    const distanceTraveled = (this.speed * msSinceLastUpdate) / 1000;
    const yToGoal = this.going_y - this.y;
    const xToGoal = this.going_x - this.x;
    const distanceToGoal = Math.hypot(xToGoal, yToGoal);
    if (distanceTraveled >= distanceToGoal) {
      this.moving = false;
      this.x = this.going_x;
      this.y = this.going_y;
    } else {
      const percentTraveled = distanceTraveled / distanceToGoal;
      this.x += xToGoal * percentTraveled;
      this.y += yToGoal * percentTraveled;
    }
  }
}
