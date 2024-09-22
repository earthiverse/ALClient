import { randomBytes } from "node:crypto";
import type { EventEmitter } from "node:events";
import socket, { type Socket } from "socket.io-client";
import type {
  ClientToServerEvents,
  ServerIdentifier,
  ServerRegion,
  ServerToClient_action_projectile,
  ServerToClient_action_ray,
  ServerToClient_entities,
  ServerToClient_ping_ack,
  ServerToClient_server_info,
  ServerToClientEvents,
  XServerInfos,
} from "typed-adventureland";
import Configuration from "./Configuration.js";
import { Entity } from "./Entity.js";
import { EntityCharacter } from "./EntityCharacter.js";
import { EntityMonster } from "./EntityMonster.js";
import { EntityProjectile } from "./EntityProjectile.js";
import EventBus from "./EventBus.js";
import type { Game } from "./Game.js";

export interface ObserverEventMap {
  character_disappear: [Observer, EntityCharacter];
  monster_death: [Observer, EntityMonster];
  monster_disappear: [Observer, EntityMonster];
  observer_created: [Observer];
  observer_started: [Observer, XServerInfos];
  observer_stopped: [Observer];
  ping: [Observer, XServerInfos, number];
  positions_updated: [
    Observer,
    Map<string, EntityCharacter>,
    Map<string, EntityMonster>,
    Map<string, EntityProjectile>,
  ];
  socket_in: [Observer, keyof ServerToClientEvents, unknown]; // TODO: Can we get this typed?
  socket_out: [Observer, keyof ClientToServerEvents, unknown]; // TODO: Can we get this typed?
}

export type TypedSocket = Socket<
  { [E in keyof ServerToClientEvents]: (data: ServerToClientEvents[E]) => void },
  { [E in keyof ClientToServerEvents]: (data: ClientToServerEvents[E]) => void }
>;

// Typescript will enforce only ObserverEventMap events to be allowed
const ObserverEventBus = EventBus as unknown as EventEmitter<ObserverEventMap>;

export class Observer extends Entity {
  protected _server?: XServerInfos;
  public get server(): XServerInfos {
    if (this._server === undefined) throw new Error("Missing server data");
    return this._server;
  }

  protected _socket?: TypedSocket;
  public get socket(): TypedSocket {
    if (this._socket === undefined) {
      throw new Error("Not started");
    }
    return this._socket;
  }

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

  protected _S?: ServerToClient_server_info;
  public get S(): ServerToClient_server_info {
    if (!this._S) throw new Error("Missing server info");
    return structuredClone(this._S);
  }

  constructor(game: Game, emitEvent = true) {
    super(game, "");
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
    if (this._socket) {
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
        reconnectionDelay: Configuration.SOCKET_RECONNECT_DELAY_MS,
        randomizationFactor: Configuration.SOCKET_RANDOMIZATION_FACTOR,
        transports: ["websocket"],
      },
    );
    this._socket = s;

    s.on("action", (data) => {
      if ((data as ServerToClient_action_ray).instant) return; // It's a ray, not a projectile

      const attacker: Entity | undefined =
        data.attacker === this.id ? this : (this.characters.get(data.attacker) ?? this.monsters.get(data.attacker));
      const target: Entity | undefined =
        data.target === this.id ? this : (this.characters.get(data.target) ?? this.monsters.get(data.target));

      if (!attacker && !target) return; // We don't see either entity!?

      this.projectiles.set(
        data.pid,
        new EntityProjectile(this.game, data as ServerToClient_action_projectile, attacker, target),
      );
    });

    s.on("death", (data) => {
      if (!this.monsters) return;
      const monster = this.monsters.get(data.id);
      if (!monster) return;

      ObserverEventBus.emit("monster_death", this, monster);
      this.monsters.delete(data.id);
    });

    s.on("disappear", (data) => {
      let found = false;
      const monster = this.monsters.get(data.id);
      if (monster) {
        found = true;
        ObserverEventBus.emit("monster_disappear", this, monster);
        this.monsters.delete(data.id);
      }

      if (!found) {
        const character = this.characters.get(data.id);
        if (character) {
          found = true;
          ObserverEventBus.emit("character_disappear", this, character);
          this.characters.delete(data.id);
        }
      }
      this.updatePositions();
    });

    s.on("entities", (data) => {
      this.parseEntities(data);
    });

    s.on("hit", (data) => {
      if (data.pid) this.projectiles.delete(data.pid);
      if (data.damage === 0) return;

      // TODO: Are data.hid & data.id always set?
      const target =
        data.id === this.id ? this : (this.monsters.get(data.id as string) ?? this.characters.get(data.id as string));

      if (target) {
        if (data.kill) {
          // NOTE: Removal of entity happens in s.on("death")
          target.updateData({ hp: 0, rip: true }, false);
        } else if (data.damage) {
          target.updateData({ hp: (target as EntityCharacter | EntityMonster).hp - data.damage }, false);
        } else if (data.heal) {
          target.updateData({ hp: (target as EntityCharacter | EntityMonster).hp + data.heal }, false);
        }
      }
    });

    s.on("new_map", (data) => {
      this._x = data.x;
      this._y = data.y;

      this.parseEntities(data.entities);
    });

    s.on("server_info", (data) => {
      this._S = data;
    });

    // Set up the connection
    const connected = new Promise<void>((resolve, reject) => {
      const timeout = setTimeout(() => {
        this.stop();
        reject(new Error(`Failed to connect to ${server.key} within ${Configuration.CONNECT_TIMEOUT_MS}ms`));
      }, Configuration.CONNECT_TIMEOUT_MS);
      s.on("welcome", (data) => {
        if (data.region !== server.region || data.name !== server.name)
          return reject(new Error(`Expected to connect to ${server.key}, but connected to ${data.name}${data.region}`));

        // Prepare the Observer
        this._server = server;
        this._characters = new Map();
        this._monsters = new Map();
        this._projectiles = new Map();

        this._map = data.map;
        this._in = data.in;
        this._x = data.x;
        this._y = data.y;
        this._S = data.S;

        clearTimeout(timeout);
        s.emit("loaded", {}); // Tell the server we're ready
        return resolve();
      });
    });

    s.onAny((eventName, args) => {
      // TODO: Can we get this typed?
      ObserverEventBus.emit("socket_in", this, eventName as keyof ServerToClientEvents, args);
    });
    s.onAnyOutgoing((eventName, args) => {
      // TODO: Can we get this typed?
      ObserverEventBus.emit("socket_out", this, eventName as keyof ClientToServerEvents, args);
    });

    s.connect();
    await connected; // Wait for connection

    ObserverEventBus.emit("observer_started", this, server);
    return;
  }

  /**
   * Stops this Observer
   */
  public stop() {
    this._socket?.disconnect();

    // Reset variables
    delete this._server;
    delete this._socket;

    delete this._characters;
    delete this._monsters;
    delete this._projectiles;
    ObserverEventBus.emit("observer_stopped", this);
  }

  /**
   * Pings the server
   *
   * @returns elapsed time in ms
   */
  public ping(): Promise<number> {
    const s = this.socket;

    // Generate a random ID to use for the ping
    const id = randomBytes(5).toString("hex");

    const promise = new Promise<number>((resolve, reject) => {
      const cleanup = () => {
        clearTimeout(timeout);
        s.off("ping_ack", pingHandler);
        s.off("disconnect", cleanup);
      };

      const pingHandler = (data: ServerToClient_ping_ack) => {
        if (data.id !== id) return;
        const elapsed = performance.now() - now;
        cleanup();
        ObserverEventBus.emit("ping", this, this.server, elapsed);
        resolve(elapsed);
      };

      const timeout = setTimeout(() => {
        cleanup();
        reject(new Error(`Timeout (${Configuration.SOCKET_EMIT_TIMEOUT_MS}ms)`));
      }, Configuration.SOCKET_EMIT_TIMEOUT_MS);

      s.on("ping_ack", pingHandler);
      s.on("disconnect", cleanup);
    });

    const now = performance.now();
    s.emit("ping_trig", { id });

    return promise;
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
      if (monster) monster.updateData(monsterData);
      else this.monsters.set(monsterData.id, new EntityMonster(this.game, data, monsterData));
    }

    for (const characterData of data.players) {
      const character = this.characters.get(characterData.id);
      characterData.rip = characterData.rip ?? false;
      characterData.party = characterData.party ?? "";
      if (character) character.updateData(characterData);
      else this.characters.set(characterData.id, new EntityCharacter(this.game, data, characterData));
    }

    this.updatePositions();
    // TODO: Event
  }

  /**
   * Updates positions of nearby monsters and characters
   */
  protected updatePositions() {
    for (const [id, character] of this.characters) {
      if (character.map !== this.map || character.in !== this.in) {
        this.characters.delete(id);
        continue;
      }
      // TODO: Remove if far away
      character.updatePosition();
    }
    for (const [id, monster] of this.monsters) {
      if (monster.map !== this.map || monster.in !== this.in) {
        this.monsters.delete(id);
        continue;
      }
      // TODO: Remove if far away
      monster.updatePosition();
    }
    for (const [id, projectile] of this.projectiles) {
      if (this.map !== projectile.map || this.in !== projectile.in) {
        this.projectiles.delete(id);
        continue;
      }
      // TODO: Remove if far away or old
      projectile.updatePosition();
    }

    ObserverEventBus.emit("positions_updated", this, this.characters, this.monsters, this.projectiles);
  }
}

export default Observer;
