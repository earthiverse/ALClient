import type EventEmitter from "node:events";
import type {
  AttackFailedGRDataObject,
  ClassKey,
  ProjectileSkillGRDataObject,
  ServerIdentifier,
  ServerRegion,
  ServerToClient_disconnect_reason,
  ServerToClient_game_error,
  ServerToClient_player,
  ServerToClient_start,
  StatusInfo,
  XServerInfos,
} from "typed-adventureland";
import type { EntityChannelInfos } from "typed-adventureland/dist/src/entities/base-entity.js";
import type { CharacterEntitySlotsInfos } from "typed-adventureland/dist/src/entities/character-entity.js";
import Configuration from "./Configuration.js";
import EventBus from "./EventBus.js";
import { Observer, type TypedSocket } from "./Observer.js";
import type { Player } from "./Player.js";

export interface CharacterEventMap {
  character_created: [Character];
  character_started: [Character, XServerInfos];
}

// Typescript will enforce only CharacterEventMap events to be allowed
const CharacterEventBus = EventBus as unknown as EventEmitter<CharacterEventMap>;

export class Character extends Observer {
  public readonly player: Player;

  public readonly characterId: string;

  protected _attack?: number;
  public get attack(): number {
    if (this._attack === undefined) throw new Error("No player data");
    return this._attack;
  }

  protected _c?: EntityChannelInfos;
  public get c(): EntityChannelInfos {
    if (this._c === undefined) throw new Error("No player data");
    return this._c;
  }

  protected _cash?: number;
  public get cash(): number {
    if (this._cash === undefined) throw new Error("No player data");
    return this._cash;
  }

  protected _ctype?: ClassKey;
  public get ctype(): ClassKey {
    if (this._ctype === undefined) throw new Error("No player data");
    return this._ctype;
  }

  protected _gold?: number;
  public get gold(): number {
    if (this._gold === undefined) throw new Error("No player data");
    return this._gold;
  }

  protected _hp?: number;
  public get hp(): number {
    if (this._hp === undefined) throw new Error("No player data");
    return this._hp;
  }

  protected _level?: number;
  public get level(): number {
    if (this._level === undefined) throw new Error("No player data");
    return this._level;
  }

  protected _max_hp?: number;
  public get max_hp(): number {
    if (this._max_hp === undefined) throw new Error("No player data");
    return this._max_hp;
  }

  protected _party: string = "";
  public get party(): string | undefined {
    return this._party ? this._party : undefined;
  }

  protected _s?: StatusInfo;
  public get s(): StatusInfo {
    if (this._s === undefined) throw new Error("No player data");
    return this._s;
  }

  protected _slots?: CharacterEntitySlotsInfos;
  public get slots(): StatusInfo {
    if (this.slots === undefined) throw new Error("No player data");
    return this.slots;
  }

  constructor(player: Player, characterId: string) {
    super(player.game, false);

    this.player = player;
    this.characterId = characterId;
    CharacterEventBus.emit("character_created", this);
  }

  public override async start(serverRegion: ServerRegion, serverId: ServerIdentifier): Promise<void> {
    await super.start(serverRegion, serverId);

    const s = this.socket as TypedSocket;

    s.on("player", (data) => {
      this.updateData(data);
    });

    const started = new Promise<void>((resolve, reject) => {
      const cleanup = () => {
        clearTimeout(timeout);
        s.off("start", startHandler);
        s.off("game_error", gameErrorHandler);
        s.off("disconnect_reason", disconnectReasonHandler);
      };

      const timeout = setTimeout(() => {
        this.stop();
        reject(new Error(`Failed to start within ${Configuration.SOCKET_EMIT_TIMEOUT_MS}ms`));
      }, Configuration.SOCKET_EMIT_TIMEOUT_MS);

      const startHandler = (data: ServerToClient_start) => {
        cleanup();
        this._S = data.s_info;
        this.updateData(data);
        this.parseEntities(data.entities);
        resolve();
      };

      const gameErrorHandler = (data: ServerToClient_game_error) => {
        this.stop();
        reject(new Error(`Failed to start: ${data instanceof Object ? data.message : data}`));
      };

      // TODO: Improve type of ServerToClient_disconnect_reason
      const disconnectReasonHandler = (data: ServerToClient_disconnect_reason) => {
        this.stop();
        reject(new Error(`Failed to start: ${data as string}`));
      };

      s.on("start", startHandler);
      s.on("game_error", gameErrorHandler);
      s.on("disconnect_reason", disconnectReasonHandler);
    });

    s.emit("auth", {
      auth: this.player.userAuth,
      character: this.characterId,
      user: this.player.userId,
    });
    await started; // Wait for start

    CharacterEventBus.emit("character_started", this, this.server as XServerInfos);

    return;
  }

  /** @internal */
  public override updateData(data: Partial<ServerToClient_start | ServerToClient_player>): void {
    super.updateData(data);

    if (data.attack !== undefined) this._attack = data.attack;
    if (data.c !== undefined) this._c = data.c;
    if (data.cash !== undefined) this._cash = data.cash;
    if (data.ctype !== undefined) this._ctype = data.ctype;
    if (data.gold !== undefined) this._gold = data.gold;
    if (data.hp !== undefined) this._hp = data.hp;
    if (data.level !== undefined) this._level = data.level;
    if (data.max_hp !== undefined) this._max_hp = data.max_hp;
    if (data.party !== undefined) this._party = data.party;
    if (data.s !== undefined) this._s = data.s;
  }

  protected override updatePositions(): void {
    this.updatePosition();
    super.updatePositions();
  }
}

export default Character;
