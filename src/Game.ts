import type { EventEmitter } from "node:events";
import type { GData } from "typed-adventureland";
import EventBus from "./EventBus.js";
import Player from "./Player.js";

export type GameOptions = {
  server: string;
  G?: GData;
};

export interface GameEventMap {
  game_created: [Game];
  login_failed: [Game, Error];
  update_g_failed: [Game, Error];
  g_updated: [Game, GData];
}

// Typescript will enforce only GameEventMap events to be allowed
const GameEventBus = EventBus as unknown as EventEmitter<GameEventMap>;

export class Game {
  public options: GameOptions = {
    server: "https://adventure.land",
  };

  private _G?: GData;
  public get G(): GData {
    if (this._G === undefined)
      throw new Error(
        "No G Data. Call `updateGameData()` after creating `Game`, or include G Data when creating `Game`."
      );
    return this._G;
  }

  public get version(): number {
    return this.G.version;
  }

  /**
   * This class is the base and represents an Adventureland server
   *
   * ```ts
   * // Use the default adventure.land server
   * const game = new Game();
   * ```
   *
   * ```ts
   * // Use a custom server
   * const game = new Game({ server: "http://adventureland.local" });
   * ```
   */
  public constructor(options?: Partial<GameOptions>) {
    // Override defaults if set
    if (options?.server) this.options.server = options.server;
    if (options?.G) this._G = options.G;

    GameEventBus.emit("game_created", this);
  }

  /**
   * Returns a {@link Player} that's linked to the current server
   *
   * ```ts
   * const player = await game.login("user@example.com", "password");
   * ```
   */
  public async login(email: string, password: string): Promise<Player> {
    // TODO: return Player
    try {
      const loginResponse = await fetch(
        `${this.options.server}/api/signup_or_login`,
        {
          method: "POST",
          credentials: "include",
          body: new URLSearchParams({
            method: "signup_or_login",
            arguments: JSON.stringify({
              only_login: true,
              email: email,
              password: password,
            }),
          }),
        }
      );

      if (!loginResponse.ok) {
        throw new Error(await loginResponse.text());
      }

      const loginJson = (await loginResponse.json()) as (
        | { type: "message"; message: string }
        | { type: "ui_error"; message: string }
        | { type: string; message: undefined }
      )[];

      for (const entry of loginJson) {
        if (entry.type === "ui_error") throw new Error(entry.message);
        if (entry.type === "message" && entry.message === "Logged In!") {
          // TODO: Store ID & Auth
          for (const cookie of loginResponse.headers.getSetCookie()) {
            const result = /^auth=(.+?);/.exec(cookie);
            if (result && result[1]) {
              const [userId, userAuth] = result[1].split("-");
              if (userId && userAuth) {
                const player = new Player(userId, userAuth, this);
                return player;
              }
            }
          }
        }
      }

      throw new Error(JSON.stringify(loginJson));
    } catch (e) {
      const error = new Error("Failed logging in", { cause: e });
      GameEventBus.emit("login_failed", this, error);
      throw error;
    }
  }

  /**
   * Updates `G`
   */
  public async updateGameData(): Promise<GData> {
    try {
      const dataResponse = await fetch(`${this.options.server}/data.js`);

      let text = (await dataResponse.text()).trim();
      if (!dataResponse.ok) {
        throw new Error(text);
      }

      // Remove the Javascript specific stuff so it's just a large JSON object
      if (text.startsWith("var G=")) text = text.slice(6);
      if (text.endsWith(";")) text = text.slice(0, text.length - 1);

      const g = (this._G = JSON.parse(text));
      GameEventBus.emit("g_updated", this, g);
      this._G = g;
      return g;
    } catch (e) {
      const error = new Error("Failed updating G", { cause: e });
      GameEventBus.emit("update_g_failed", this, error);
      throw error;
    }
  }
}

export default Game;
