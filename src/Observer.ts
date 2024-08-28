import EventEmitter from "node:events";
import socket, { Socket } from "socket.io-client";
import type {
  ClientToServerEvents,
  MapKey,
  ServerIdentifier,
  ServerRegion,
  ServerToClient_entities,
  ServerToClientEvents,
  XServerInfos,
} from "typed-adventureland";
import { EntityCharacter } from "./EntityCharacter.js";
import { EntityMonster } from "./EntityMonster.js";
import type { EntityProjectile } from "./EntityProjectile.js";
import EventBus from "./EventBus.js";
import Game from "./Game.js";

export interface ObserverEventMap {
  monster_death: [Observer, EntityMonster];
  observer_created: [Observer];
  observer_started: [Observer, XServerInfos];
}

// Typescript will enforce only ObserverEventMap events to be allowed
const ObserverEventBus = EventBus as unknown as EventEmitter<ObserverEventMap>;

export class Observer {
  public readonly game: Game;

  public socket?: Socket<
    { [E in keyof ServerToClientEvents]: (data: ServerToClientEvents[E]) => void },
    { [E in keyof ClientToServerEvents]: (data: ClientToServerEvents[E]) => void }
  >;
  public server?: XServerInfos;

  protected _characters?: Map<string, EntityCharacter>;
  /** Nearby characters, mapped by ID */
  public get characters(): Exclude<Observer["_characters"], undefined> {
    if (!this._characters) throw new Error("Missing characters data");
    return this._characters;
  }

  protected _monsters?: Map<string, EntityMonster>;
  /** Nearby monsters, mapped by ID */
  public get monsters(): Exclude<Observer["_monsters"], undefined> {
    if (!this._monsters) throw new Error("Missing monsters data");
    return this._monsters;
  }

  protected _projectiles?: Map<string, EntityProjectile>;
  /** Nearby projectiles, mapped by ID */
  public get projectiles(): Exclude<Observer["_projectiles"], undefined> {
    if (!this._projectiles) throw new Error("Missing projectiles data");
    return this._projectiles;
  }

  protected _map?: MapKey;
  /** Current map */
  public get map(): MapKey {
    if (!this._map) throw new Error("Missing map data");
    return this._map;
  }

  protected _in?: string;
  /** Current instance */
  public get in(): string {
    if (!this._in) throw new Error("Missing instance data");
    return this._in;
  }

  protected _x?: number;
  /** Current x position */
  public get x(): number {
    if (!this._x) throw new Error("Missing position data");
    return this._x;
  }

  protected _y?: number;
  /** Current y position */
  public get y(): number {
    if (!this._y) throw new Error("Missing position data");
    return this._y;
  }

  constructor(game: Game, emitEvent = true) {
    this.game = game;

    if (emitEvent) ObserverEventBus.emit("observer_created", this);
  }

  /**
   * Starts this Observer on the given server
   *
   * @param serverRegion
   * @param serverId
   * @param secret Can be used to observe a specific character
   * @returns
   */
  public async start(serverRegion: ServerRegion, serverId: ServerIdentifier, options?: { secret?: string }) {
    if (this.socket) {
      if (!this.server) {
        throw new Error("This Observer has already started"); // This shouldn't happen
      }
      throw new Error(`This Observer has already started (${this.server.region}${this.server.name})`);
    }

    const server = this.game.getServer(serverRegion, serverId);

    const s: Observer["socket"] = socket(
      `ws${this.game.url.startsWith("https") ? "s" : ""}://${server.addr}:${server.port}`,
      {
        autoConnect: false, // We will set up listeners first
        query: {
          secret: options?.secret,
        },
        reconnection: true,
        transports: ["websocket"],
      },
    );

    // TODO: on("action")

    s.on("death", (data) => {
      if (!this.monsters) return;
      const monster = this.monsters.get(data.id);
      if (!monster) return;

      ObserverEventBus.emit("monster_death", this, monster);
      this.monsters?.delete(data.id);
    });

    s.on("disappear", (data) => {
      let found = false;
      if (this.monsters) {
        const monster = this.monsters.get(data.id);
        if (monster) {
          found = true;
          // TODO: Event
          this.monsters.delete(data.id);
        }
      }
      if (!found && this.characters) {
        const character = this.characters.get(data.id);
        if (character) {
          found = true;
          // TODO: Event
          this.characters.delete(data.id);
        }
      }
      this.updatePositions();
    });

    s.on("entities", (data) => {
      this.parseEntities(data);
    });

    // Set up the connection
    const connected = new Promise<void>((resolve, reject) => {
      const timeout = setTimeout(reject, 5_000, new Error(`Failed to connect to ${server.key} within 5,000 ms`)); // TODO: Move timeout to a config
      s.on("welcome", (data) => {
        if (data.region !== server.region || data.name !== server.name)
          return reject(new Error(`Expected to connect to ${server.key}, but connected to ${data.name}${data.region}`));

        // Prepare the Observer
        this.socket = s;
        this.server = server;
        this._characters = new Map();
        this._monsters = new Map();

        clearTimeout(timeout);
        s.emit("loaded", {}); // Tell the server we're ready
        return resolve();
      });
    });

    // Wait for connection
    s.connect();
    await connected;

    ObserverEventBus.emit("observer_started", this, server);
    return;
  }

  /**
   * Stops this Observer
   */
  public stop() {
    this.socket?.disconnect();

    // Reset variables
    delete this.socket;
    delete this.server;

    delete this._characters;
    delete this._monsters;

    delete this._map;
    delete this._in;
    delete this._x;
    delete this._y;
  }

  protected parseEntities(data: ServerToClient_entities) {
    if (data.type === "all") {
      this.characters.clear();
      this.monsters.clear();
    }

    this._map = data.map;
    this._in = data.in;

    // Update monsters
    for (const monsterData of data.monsters) {
      const monster = this.monsters.get(monsterData.id);
      const updatedData = { ...monsterData, map: this.map, in: this.in };
      if (monster) monster.updateData(updatedData);
      else this.monsters.set(updatedData.id, new EntityMonster(this.game, updatedData));
    }

    for (const characterData of data.players) {
      const character = this.characters.get(characterData.id);
      const updatedData = { ...characterData, map: this.map, in: this.in };
      if (character) character.updateData(updatedData);
      else this.characters.set(characterData.id, new EntityCharacter(this.game, updatedData));
    }

    if (data.type === "xy") this.updatePositions();

    // TODO: Event
  }

  /**
   * Updates positions of nearby monsters and characters
   */
  protected updatePositions() {
    for (const [, entity] of this.monsters) entity.updatePosition();
    for (const [, character] of this.characters) character.updatePosition();
    for (const [, projectile] of this.projectiles) projectile.updatePosition();

    // TODO: Event
  }
}

export default Observer;
