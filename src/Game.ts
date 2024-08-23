import EventBus from "./EventBus.js";
import Player from "./Player.js";

export type GameOptions = {
  server: string;
};

export interface GameEventMap {
  login_fail: [Error];
  login_success: [Player];
}

export class Game {
  public options: GameOptions = {
    server: "https://adventure.land",
  };

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
                EventBus.emit("login_success", player);
                return player;
              }
            }
          }
        }
      }

      throw new Error(JSON.stringify(loginJson));
    } catch (e) {
      const error = new Error("Failed logging in", { cause: e });
      EventBus.emit("login_fail", error);
      throw error;
    }
  }
}

export default Game;
