import * as ALPathfinder from "alpathfinder";
import type { EventEmitter } from "node:events";
import type {
  ClassKey,
  GData,
  ServerIdentifier,
  ServerRegion,
  XOnlineCharacter,
  XServerInfos,
} from "typed-adventureland";
import EventBus from "./EventBus.js";
import Player from "./Player.js";

export type GameOptions = {
  url: string;
  G?: GData;
  servers?: XServerInfos[];
};

export interface GameEventMap {
  /** A `Game` was instantiated */
  game_created: [Game];
  /** `Game.login()` failed */
  login_failed: [Game, Error];
  /** `Game.updateG()` failed */
  update_g_failed: [Game, Error];
  /** `Game.updateServers()` failed */
  update_servers_failed: [Game, Error];
  /** `Game.G` was updated */
  g_updated: [Game, GData];
  /** `Game.servers` was updated */
  servers_updated: [Game, XServerInfos[]];
}

// Typescript will enforce only GameEventMap events to be allowed
const GameEventBus = EventBus as unknown as EventEmitter<GameEventMap>;

export class Game {
  public options: GameOptions = {
    url: "https://adventure.land",
  };

  private _G?: GData;
  public get G(): GData {
    if (this._G === undefined)
      throw new Error("No G data. Call `updateG()` after creating `Game`, or include G data when creating `Game`.");
    return this._G;
  }

  private _pathfinder?: typeof ALPathfinder;
  public get pathfinder(): typeof ALPathfinder {
    if (this._pathfinder === undefined) throw new Error("Pathfinder is not prepared. Call `preparePathfinder()`");
    return this._pathfinder;
  }

  public get apiUrl(): string {
    return `${this.options.url}/api`;
  }

  public get url(): string {
    return this.options.url;
  }

  public get version(): number {
    return this.G.version;
  }

  /** @internal */
  public _servers?: XServerInfos[];
  public get servers(): XServerInfos[] {
    if (this._servers === undefined) {
      throw new Error(
        "No servers data. Call `updateServers()` after creating `Game`, or include server data when creating `Game`.",
      );
    }
    return this._servers;
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
    if (options?.url !== undefined) this.options.url = options.url;
    if (options?.G) this._G = options.G;
    if (options?.servers) this._servers = options.servers;

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
    try {
      const loginResponse = await fetch(this.apiUrl, {
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
      });

      if (!loginResponse.ok) {
        throw new Error(await loginResponse.text());
      }

      const loginJson = (await loginResponse.json()) as (
        | { type: "content"; html: string }
        | { type: "message"; message: string }
        | { type: "ui_error"; message: string }
      )[];

      let userId: string | undefined;
      let userAuth: string | undefined;
      const characters: Player["characters"] = [];
      for (const entry of loginJson) {
        if (entry.type === "ui_error") throw new Error(entry.message);

        if (entry.type === "content") {
          // Parse the HTML to get character data
          // TODO: We can grab more information with a better regex
          const regex =
            /observe_character\('(?<name>.+?)'\)\)\s+log_in\(user_id,'(?<id>\d+)'.+?<span class="gray".+?>(?<type>.+?)<\/span>/gms;
          for (const result of entry.html.matchAll(regex)) {
            if (result.groups) {
              const { name, id, type } = result.groups;
              if (name !== undefined && id !== undefined && type !== undefined)
                characters.push({
                  id: id,
                  name: name,
                  type: type.toLowerCase() as ClassKey,
                } as XOnlineCharacter);
            }
          }
        }

        if (entry.type === "message" && entry.message === "Logged In!") {
          // Parse the cookie to get User ID and auth
          for (const cookie of loginResponse.headers.getSetCookie()) {
            const result = /^auth=(.+?);/.exec(cookie);
            if (result && result[1] !== undefined) {
              [userId, userAuth] = result[1].split("-");
            }
          }
        }
      }

      if (userAuth !== undefined && userId !== undefined) {
        return new Player(this, userId, userAuth, characters);
      }

      throw new Error(JSON.stringify(loginJson));
    } catch (e) {
      const error = new Error("Failed logging in", { cause: e });
      GameEventBus.emit("login_failed", this, error);
      throw error;
    }
  }

  public preparePathfinder(): typeof ALPathfinder {
    if (this._pathfinder !== undefined) return this._pathfinder;
    ALPathfinder.prepare(this.G);
    this._pathfinder = ALPathfinder;
    return ALPathfinder;
  }

  /**
   * Updates `G`
   */
  public async updateG(): Promise<GData> {
    try {
      const dataResponse = await fetch(`${this.options.url}/data.js`);

      let text = (await dataResponse.text()).trim();
      if (!dataResponse.ok) {
        throw new Error(text);
      }

      // Remove the Javascript specific stuff so it's just a large JSON object
      if (text.startsWith("var G=")) text = text.slice(6);
      if (text.endsWith(";")) text = text.slice(0, text.length - 1);

      const g = JSON.parse(text) as GData;
      GameEventBus.emit("g_updated", this, g);
      this._G = g;
      return g;
    } catch (e) {
      const error = new Error("Failed updating G", { cause: e });
      GameEventBus.emit("update_g_failed", this, error);
      throw error;
    }
  }

  /**
   * Updates `servers`
   */
  public async updateServers(): Promise<XServerInfos[]> {
    try {
      // We use comm because we don't need to be logged in to get the servers
      const commResponse = await fetch(`${this.options.url}/comm`);

      const text = (await commResponse.text()).trim();
      if (!commResponse.ok) {
        throw new Error(text);
      }

      const result = text.match(/X\.servers=(.+?);?$/m);
      if (!result || result[1] === undefined) {
        throw new Error("Could not find server data", { cause: text });
      }

      const servers = JSON.parse(result[1]) as XServerInfos[];
      GameEventBus.emit("servers_updated", this, servers);
      this._servers = servers;
      return servers;
    } catch (e) {
      const error = new Error("Failed updating servers", { cause: e });
      GameEventBus.emit("update_servers_failed", this, error);
      throw error;
    }
  }

  public getServer(serverKey: string): XServerInfos;
  public getServer(serverRegion: ServerRegion, serverId: ServerIdentifier): XServerInfos;
  public getServer(serverKeyOrRegion: string, serverId?: ServerIdentifier): XServerInfos {
    let server: XServerInfos | undefined;
    if (serverId === undefined) {
      server = this.servers.find((s) => s.key === serverKeyOrRegion);
    } else {
      server = this.servers.find((s) => s.region === serverKeyOrRegion && s.name === serverId);
    }

    if (!server) throw new Error(`Could not find server with key '${serverKeyOrRegion}'`);
    return server;
  }
}

export default Game;
