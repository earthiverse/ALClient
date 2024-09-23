import type EventEmitter from "node:events";
import type {
  AttackFailedGRDataObject,
  ClassKey,
  CooldownGRDataObject,
  NotReadyGRDataObject,
  ProjectileSkillGRDataObject,
  ServerIdentifier,
  ServerRegion,
  ServerToClient_chest_opened,
  ServerToClient_disappear,
  ServerToClient_disconnect_reason,
  ServerToClient_drop,
  ServerToClient_game_error,
  ServerToClient_game_response,
  ServerToClient_player,
  ServerToClient_start,
  SkillKey,
  SkillSuccessGRDataObject,
  StatusInfo,
  XServerInfos,
} from "typed-adventureland";
import type { EntityChannelInfos } from "typed-adventureland/dist/src/entities/base-entity.js";
import type {
  CharacterEntityQInfos,
  CharacterEntitySlotsInfos,
} from "typed-adventureland/dist/src/entities/character-entity.js";
import Configuration from "./Configuration.js";
import { Entity } from "./Entity.js";
import EventBus from "./EventBus.js";
import { Observer } from "./Observer.js";
import type { Player } from "./Player.js";

export interface CharacterEventMap {
  character_created: [Character];
  character_started: [Character, XServerInfos];
  chest_dropped: [Character, ServerToClient_drop];
  chest_opened: [Character, ServerToClient_chest_opened];
  conditions_set: [Character, StatusInfo];
  next_skill_set: [Character, SkillKey, number];
  party_request_received: [Character, string];
  progress_set: [Character, CharacterEntityQInfos];
}

// Typescript will enforce only CharacterEventMap events to be allowed
const CharacterEventBus = EventBus as unknown as EventEmitter<CharacterEventMap>;

export class Character extends Observer {
  public readonly player: Player;

  public readonly characterId: string;

  protected readonly nextSkill = new Map<SkillKey, number>();
  protected readonly chests = new Map<string, ServerToClient_drop>();

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

  protected _frequency?: number;
  public get frequency(): number {
    if (this._frequency === undefined) throw new Error("No player data");
    return this._frequency;
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

  protected _m: number = 0;

  protected _max_hp?: number;
  public get max_hp(): number {
    if (this._max_hp === undefined) throw new Error("No player data");
    return this._max_hp;
  }

  protected _party: string = "";
  public get party(): string | undefined {
    return this._party ? this._party : undefined;
  }

  protected _q?: CharacterEntityQInfos;
  public get q(): CharacterEntityQInfos {
    if (this._q === undefined) throw new Error("No player data");
    return this._q;
  }

  protected _range?: number;
  public get range(): number {
    if (this._range === undefined) throw new Error("No player data");
    return this._range;
  }

  protected _rip?: boolean;
  public get rip(): boolean {
    return !!this._rip;
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

  constructor(player: Player, characterId: string, id: string) {
    super(player.game, false, id);

    this.player = player;
    this.characterId = characterId;
    CharacterEventBus.emit("character_created", this);
  }

  public override async start(serverRegion: ServerRegion, serverId: ServerIdentifier): Promise<void> {
    await super.start(serverRegion, serverId);

    const s = this.socket;

    s.on("chest_opened", (data) => {
      this.chests.delete(data.id);
      CharacterEventBus.emit("chest_opened", this, data);
    });

    s.on("drop", (data) => {
      this.chests.set(data.id, data);
      CharacterEventBus.emit("chest_dropped", this, data);
    });

    s.on("eval", (data) => {
      if (data.code.startsWith("pot_timeout")) {
        // potion cooldown still uses eval
        const match = data.code.match(/[\d.]+/);
        if (match) {
          const futureMs = Date.now() + Number.parseFloat(match[0]);
          this.setNextSkill("use_hp", futureMs, true);
          this.setNextSkill("use_mp", futureMs, true);
          this.setNextSkill("regen_hp", futureMs, true);
          this.setNextSkill("regen_mp", futureMs, true);
        }
        return;
      }
    });

    s.on("game_response", (data) => {
      if ((data as NotReadyGRDataObject).response === "not_ready") {
        // "not_ready" is used for cooldown on regen and potions
        const ms = (data as NotReadyGRDataObject).ms;
        if (ms === undefined) return; // TODO: https://github.com/kaansoral/adventureland/pull/154 will guarantee this is always defined
        const futureMs = Date.now() + ms;
        this.setNextSkill("use_hp", futureMs, true);
        this.setNextSkill("use_mp", futureMs, true);
        this.setNextSkill("regen_hp", futureMs, true);
        this.setNextSkill("regen_mp", futureMs, true);
        return;
      }

      if ((data as CooldownGRDataObject).response === "cooldown") {
        const futureMs = Date.now() + (data as CooldownGRDataObject).ms;
        this.setNextSkill((data as CooldownGRDataObject).place, futureMs, true);
        return;
      }
    });

    s.on("player", (data) => {
      this.updateData(data);
    });

    s.on("request", (data) => {
      CharacterEventBus.emit("party_request_received", this, data.name);
    });

    s.on("skill_timeout", (data) => {
      this.setNextSkill(data.name, Date.now() + data.ms, true);
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
        this._going_x = data.x;
        this._going_y = data.y;
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

    s.on("welcome", () => {
      // This emit is if the socket gets reconnected
      s.emit("auth", {
        auth: this.player.userAuth,
        character: this.characterId,
        user: this.player.userId,
      });
    });

    // This emit is for the first auth
    s.emit("auth", {
      auth: this.player.userAuth,
      character: this.characterId,
      user: this.player.userId,
    });
    await started; // Wait for start

    CharacterEventBus.emit("character_started", this, this.server);

    return;
  }

  /** @internal */
  public override updateData(data: Partial<ServerToClient_start | ServerToClient_player>, setLastUpdate = true): void {
    super.updateData(data, setLastUpdate);

    if (data.attack !== undefined) this._attack = data.attack;
    if (data.c !== undefined) this._c = data.c;
    if (data.cash !== undefined) this._cash = data.cash;
    if (data.ctype !== undefined) this._ctype = data.ctype;
    if (data.frequency !== undefined) this._frequency = data.frequency;
    if (data.gold !== undefined) this._gold = data.gold;
    if (data.hp !== undefined) this._hp = data.hp;
    if (data.level !== undefined) this._level = data.level;
    if (data.m !== undefined) this._m = data.m;
    if (data.max_hp !== undefined) this._max_hp = data.max_hp;
    if (data.party !== undefined) this._party = data.party;
    if (data.q !== undefined) {
      this._q = data.q;
      CharacterEventBus.emit("progress_set", this, data.q);
    }
    if (data.range !== undefined) this._range = data.range;
    if (data.s !== undefined) {
      this._s = data.s;
      CharacterEventBus.emit("conditions_set", this, data.s);
    }
    if (data.slots !== undefined) this._slots = data.slots;
  }

  protected override updatePositions(): void {
    if (this._going_x !== undefined && this._going_y !== undefined) this.updatePosition();
    super.updatePositions();
  }

  public canMove(): boolean {
    if (this.rip) return false;
    if (this.s) {
      if (this.s.deepfreezed) return false;
      if (this.s.fingered) return false;
      if (this.s.sleeping) return false;
      if (this.s.stoned) return false;
      if (this.s.stunned) return false;
    }

    return true;
  }

  public getTimeout(skill: SkillKey): number {
    const ms = this.nextSkill.get(skill);
    return ms === undefined ? 0 : Math.max(0, ms - Date.now());
  }

  public isOnCooldown(skill: SkillKey): boolean {
    return this.getTimeout(skill) > 0;
  }

  /**
   * @param skill
   * @param when The time that the skill will be available again
   * @param emit Whether to emit the `next_skill_set` event.
   */
  public setNextSkill(skill: SkillKey, when: number, emit = false) {
    this.nextSkill.set(skill, when);
    if (emit) CharacterEventBus.emit("next_skill_set", this, skill, when);
  }

  /**
   * @param name ID of character who requested an invite to your party
   * @returns
   */
  public acceptPartyRequest(name: string) {
    const s = this.socket;

    const promise = new Promise<void>((resolve, reject) => {
      const cleanup = () => {
        clearTimeout(timeout);
        s.off("game_response", responseHandler);
      };

      const responseHandler = (data: ServerToClient_game_response) => {
        // TODO: Improve typing
        if ((data as { place: string }).place !== "party") return; // Not a party response
        cleanup();
        if ((data as { success: boolean }).success) {
          resolve();
        } else {
          reject(new Error((data as { response: string }).response));
        }
      };

      const timeout = setTimeout(() => {
        cleanup();
        reject(new Error(`Timeout (${Configuration.SOCKET_EMIT_TIMEOUT_MS}ms)`));
      }, Configuration.SOCKET_EMIT_TIMEOUT_MS);

      s.on("game_response", responseHandler);
    });

    s.emit("party", { name, event: "raccept" });
    return promise;
  }

  public basicAttack(id: Entity | string): Promise<SkillSuccessGRDataObject> {
    const s = this.socket;

    if (id instanceof Entity) id = id.id;
    if (!id) throw new Error("`id` not provided");

    // TODO: Add configuration for check cooldown before emit
    // if(Configuration.CHECK_COOLDOWN_BEFORE_EMIT) {

    // }

    // TODO: Add merchant check
    // if(this.ctype === "merchant") {

    // }

    const promise = new Promise<SkillSuccessGRDataObject>((resolve, reject) => {
      const cleanup = () => {
        clearTimeout(timeout);
        s.off("game_response", attackHandler);
        s.off("disappear", disappearHandler);
      };

      const attackHandler = (data: ServerToClient_game_response) => {
        if ((data as ProjectileSkillGRDataObject).place !== "attack") return; // Different skill

        cleanup();

        if (
          (data as ProjectileSkillGRDataObject).failed ||
          (data as AttackFailedGRDataObject).response === "attack_failed"
        )
          reject(new Error((data as ProjectileSkillGRDataObject).reason ?? (data as CooldownGRDataObject).response));

        resolve(data as SkillSuccessGRDataObject);
      };

      const disappearHandler = (data: ServerToClient_disappear) => {
        if (data.id !== id) return; // Different entity
        if (data.reason !== "not_there") return;
        cleanup();
        reject(new Error("not_there"));
      };

      const timeout = setTimeout(() => {
        cleanup();
        reject(new Error(`Timeout (${Configuration.SOCKET_EMIT_TIMEOUT_MS}ms)`));
      }, Configuration.SOCKET_EMIT_TIMEOUT_MS);

      s.on("game_response", attackHandler);
      s.on("disappear", disappearHandler);
    });

    s.emit("attack", { id });

    return promise;
  }

  public move(x: number, y: number): Promise<void> {
    const s = this.socket;

    if (this.going_x === x && this.going_y === y) return Promise.resolve(); // We're already moving there
    if (!this.canMove()) return Promise.reject(new Error("We can't move"));

    this._going_x = x;
    this._going_y = y;

    const distance = this.getDistanceTo({ x, y, map: this.map, in: this.in });

    s.emit("move", { x: this.x, y: this.y, going_x: this.going_x, going_y: this.going_y, m: this._m });
    return new Promise<void>((resolve) => setTimeout(resolve, (1000 * distance) / this.speed));
  }

  public openChest(id: string): Promise<ServerToClient_chest_opened> {
    const s = this.socket;

    const promise = new Promise<ServerToClient_chest_opened>((resolve, reject) => {
      const cleanup = () => {
        s.off("chest_opened", chestOpenedHandler);
        s.off("game_response", gameResponseHandler);
        clearTimeout(timeout);
      };

      const chestOpenedHandler = (data: ServerToClient_chest_opened) => {
        if (data.id !== id) return; // Different chest
        cleanup();
        resolve(data);
      };

      const gameResponseHandler = (data: ServerToClient_game_response) => {
        if (data == "loot_no_space" || data == "loot_failed") {
          cleanup();
          reject(new Error(data));
        }
      };

      const timeout = setTimeout(() => {
        cleanup();
        reject(new Error(`Timeout (${Configuration.SOCKET_EMIT_TIMEOUT_MS}ms)`));
      }, Configuration.SOCKET_EMIT_TIMEOUT_MS);

      s.on("chest_opened", chestOpenedHandler);
      s.on("game_response", gameResponseHandler);
    });

    s.emit("open_chest", { id });

    return promise;
  }

  public regenHp(): Promise<void> {
    const s = this.socket;

    const promise = new Promise<void>((resolve, reject) => {
      const cleanup = () => {
        clearTimeout(timeout);
        s.off("game_response", responseHandler);
      };

      const responseHandler = (data: ServerToClient_game_response) => {
        if ((data as NotReadyGRDataObject).place !== "use") return; // Different skill
        cleanup();
        if ((data as SkillSuccessGRDataObject).success) {
          resolve();
        } else {
          reject(new Error((data as NotReadyGRDataObject).response));
        }
      };

      const timeout = setTimeout(() => {
        cleanup();
        reject(new Error(`Timeout (${Configuration.SOCKET_EMIT_TIMEOUT_MS}ms)`));
      }, Configuration.SOCKET_EMIT_TIMEOUT_MS);

      s.on("game_response", responseHandler);
    });

    s.emit("use", { item: "hp" });

    return promise;
  }

  public regenMp(): Promise<void> {
    const s = this.socket;

    const promise = new Promise<void>((resolve, reject) => {
      const cleanup = () => {
        clearTimeout(timeout);
        s.off("game_response", responseHandler);
      };

      const responseHandler = (data: ServerToClient_game_response) => {
        if ((data as NotReadyGRDataObject).place !== "use") return; // Different skill
        cleanup();
        if ((data as SkillSuccessGRDataObject).success) {
          resolve();
        } else {
          reject(new Error((data as NotReadyGRDataObject).response));
        }
      };

      const timeout = setTimeout(() => {
        cleanup();
        reject(new Error(`Timeout (${Configuration.SOCKET_EMIT_TIMEOUT_MS}ms)`));
      }, Configuration.SOCKET_EMIT_TIMEOUT_MS);

      s.on("game_response", responseHandler);
    });

    s.emit("use", { item: "mp" });

    return promise;
  }

  /**
   * NOTE: This function will return a successful promise if the request was successfully sent, NOT if we successfully joined the party.
   *
   * @param name ID of character whose party you wish to join
   * @returns
   */
  public sendPartyRequest(name: string): Promise<void> {
    const s = this.socket;

    const promise = new Promise<void>((resolve, reject) => {
      const cleanup = () => {
        clearTimeout(timeout);
        s.off("game_response", responseHandler);
      };

      const responseHandler = (data: ServerToClient_game_response) => {
        // TODO: Improve typing
        if ((data as { place: string }).place !== "party") return; // Not a party response
        cleanup();
        if ((data as { success: boolean }).success) {
          resolve();
        } else {
          reject(new Error((data as { response: string }).response));
        }
      };

      const timeout = setTimeout(() => {
        cleanup();
        reject(new Error(`Timeout (${Configuration.SOCKET_EMIT_TIMEOUT_MS}ms)`));
      }, Configuration.SOCKET_EMIT_TIMEOUT_MS);

      s.on("game_response", responseHandler);
    });

    s.emit("party", { name, event: "request" });
    return promise;
  }
}

export default Character;
