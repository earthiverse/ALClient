import type EventEmitter from "node:events";
import type {
  BuySuccessGRDataObject,
  CharacterEntityQInfos,
  CharacterEntitySlotsInfos,
  ClassKey,
  CooldownGRDataObject,
  DestroyGRDataObject,
  EntityChannelInfos,
  ExchangeInProgressGRDataObject,
  GoldReceivedGRDataObject,
  ItemInfo,
  ItemKey,
  NotReadyGRDataObject,
  ServerIdentifier,
  ServerRegion,
  ServerToClient_chest_opened,
  ServerToClient_disappear,
  ServerToClient_disconnect_reason,
  ServerToClient_drop,
  ServerToClient_game_error,
  ServerToClient_game_log,
  ServerToClient_game_response,
  ServerToClient_player,
  ServerToClient_start,
  SkillKey,
  SkillSuccessGRDataObject,
  StatusInfo,
  XServerInfos,
} from "typed-adventureland";
import Configuration from "./Configuration.js";
import { Entity } from "./Entity.js";
import EventBus from "./EventBus.js";
import { Observer } from "./Observer.js";
import type { Player } from "./Player.js";
import { isRelevantGameResponse, isSuccessGameResponse } from "./TypeGuards.js";

export interface CharacterEventMap {
  character_created: [character: Character];
  character_started: [character: Character, serverInfo: XServerInfos];
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
  public readonly chests = new Map<string, ServerToClient_drop>();

  protected _apiercing?: number;
  public get apiercing(): number {
    if (this._apiercing === undefined) throw new Error("No player data");
    return this._apiercing;
  }

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

  protected _esize?: number;
  public get esize(): number {
    if (this._esize === undefined) throw new Error("No player data");
    return this._esize;
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

  protected _items?: Array<ItemInfo | null>;
  public get items(): Array<ItemInfo | null> {
    if (this._items === undefined) throw new Error("No player data");
    return this._items;
  }

  protected _level?: number;
  public get level(): number {
    if (this._level === undefined) throw new Error("No player data");
    return this._level;
  }

  protected _lifesteal?: number;
  public get lifesteal(): number {
    if (this._lifesteal === undefined) throw new Error("No player data");
    return this._lifesteal;
  }

  protected _m: number = 0;

  protected _manasteal?: number;
  public get manasteal(): number {
    if (this._manasteal === undefined) throw new Error("No player data");
    return this._manasteal;
  }

  protected _max_hp?: number;
  public get max_hp(): number {
    if (this._max_hp === undefined) throw new Error("No player data");
    return this._max_hp;
  }

  protected _max_mp?: number;
  public get max_mp(): number {
    if (this._max_mp === undefined) throw new Error("No player data");
    return this._max_mp;
  }

  protected _mp?: number;
  public get mp(): number {
    if (this._mp === undefined) throw new Error("No player data");
    return this._mp;
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
    return Boolean(this._rip);
  }

  protected _rpiercing?: number;
  public get rpiercing(): number {
    if (this._rpiercing === undefined) throw new Error("No player data");
    return this._rpiercing;
  }

  protected _s?: StatusInfo;
  public get s(): StatusInfo {
    if (this._s === undefined) throw new Error("No player data");
    return this._s;
  }

  protected _slots?: CharacterEntitySlotsInfos;
  public get slots(): CharacterEntitySlotsInfos {
    if (this._slots === undefined) throw new Error("No player data");
    return this._slots;
  }

  protected _target?: string;
  public get target(): string | undefined {
    return this._target;
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
        reject(new Error(`Failed to start within ${Configuration.CONNECT_TIMEOUT_MS}ms`));
      }, Configuration.CONNECT_TIMEOUT_MS);

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

  public override updateData(data: Partial<ServerToClient_start | ServerToClient_player>, setLastUpdate = true): void {
    super.updateData(data, setLastUpdate);

    // TODO: Add more attributes

    if (data.apiercing !== undefined) this._apiercing = data.apiercing;
    if (data.attack !== undefined) this._attack = data.attack;
    if (data.c !== undefined) this._c = data.c;
    if (data.cash !== undefined) this._cash = data.cash;
    if (data.ctype !== undefined) this._ctype = data.ctype;
    if (data.esize !== undefined) this._esize = data.esize;
    if (data.frequency !== undefined) this._frequency = data.frequency;
    if (data.gold !== undefined) this._gold = data.gold;
    if (data.hp !== undefined) this._hp = data.hp;
    if (data.items !== undefined) this._items = data.items;
    if (data.level !== undefined) this._level = data.level;
    if (data.lifesteal !== undefined) this._lifesteal = data.lifesteal;
    if (data.m !== undefined) this._m = data.m;
    if (data.manasteal !== undefined) this._manasteal = data.manasteal;
    if (data.max_hp !== undefined) this._max_hp = data.max_hp;
    if (data.max_mp !== undefined) this._max_mp = data.max_mp;
    if (data.mp !== undefined) this._mp = data.mp;
    if (data.party !== undefined) this._party = data.party;
    if (data.q !== undefined) {
      this._q = data.q;
      CharacterEventBus.emit("progress_set", this, data.q);
    }
    if (data.range !== undefined) this._range = data.range;
    if (data.rpiercing !== undefined) this._rpiercing = data.rpiercing;
    if (data.s !== undefined) {
      this._s = data.s;
      CharacterEventBus.emit("conditions_set", this, data.s);
    }
    if (data.slots !== undefined) this._slots = data.slots;
    if (data.target !== undefined) this._target = data.target;
  }

  protected override updatePositions(): void {
    if (this._going_x !== undefined && this._going_y !== undefined) this.updatePosition();
    super.updatePositions();
  }

  public canMove(): boolean {
    if (this.rip) return false;
    if (this.s.deepfreezed) return false;
    if (this.s.fingered) return false;
    if (this.s.sleeping) return false;
    if (this.s.stoned) return false;
    if (this.s.stunned) return false;

    return true;
  }

  /**
   * Returns a count of how many of the given item you have in your inventory.
   * For stacks of items, it uses the `.q`.
   *
   * If you wish to know how many inventory slots are being taken up,
   * try `character.locateItems(item).length` instead.
   *
   * @param item all the properties the item needs to match
   * @returns
   */
  public countItems(item: Partial<ItemInfo>): number {
    return this.locateItems(item).reduce((count, index) => count + ((this.items[index] as ItemInfo).q ?? 1), 0);
  }

  /**
   * Returns the number of ms before the skill is available for use
   *
   * @param skill
   * @returns
   */
  public getTimeout(skill: SkillKey): number {
    const ms = this.nextSkill.get(skill);
    return ms === undefined ? 0 : Math.max(0, ms - Date.now());
  }

  /**
   * Returns the index of the first item that matches all properties,
   * or undefined if no item is found
   *
   * @param item all the properties the item needs to match
   * @returns
   */
  public locateItem(item: Partial<ItemInfo>): number | undefined {
    for (let index = 0; index < this.items.length; index++) {
      const i = this.items[index];
      if (!i) continue;

      let match = true;
      for (const prop in i) {
        if (item[prop as keyof ItemInfo] !== i[prop as keyof ItemInfo]) {
          match = false;
          break;
        }
      }

      if (match) return index;
    }
    return undefined;
  }

  /**
   * Returns an array of indices of items matching all of the specified properties.
   *
   * @param item all the properties the items need to match
   * @returns
   */
  public locateItems(item: Partial<ItemInfo>): number[] {
    const items: number[] = [];

    for (let index = 0; index < this.items.length; index++) {
      const i = this.items[index];
      if (!i) continue;

      let match = true;
      for (const prop in i) {
        if (item[prop as keyof ItemInfo] !== i[prop as keyof ItemInfo]) {
          match = false;
          break;
        }
      }

      if (match) items.push(index);
    }

    return items;
  }

  /**
   * Checks if the given skill is on cooldown
   *
   * @param skill
   * @returns
   */
  public isOnCooldown(skill: SkillKey): boolean {
    return this.getTimeout(skill) > 0;
  }

  /**
   * Sets the time the next skill can be used at.
   *
   * @param skill
   * @param when The time that the skill will be available again
   * @param emit Whether to emit the `next_skill_set` event.
   */
  public setNextSkill(skill: SkillKey, when: number, emit = false) {
    this.nextSkill.set(skill, when);
    if (emit) CharacterEventBus.emit("next_skill_set", this, skill, when);
  }

  /**
   * Accepts a party request that you have received
   *
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
        if (!isRelevantGameResponse(data, "party")) return;
        // TODO: Is this actually the party we requested?
        if (isSuccessGameResponse(data)) {
          resolve();
        } else {
          reject(new Error(data.response));
        }
        cleanup();
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

  /**
   * Performs a basic attack.
   *
   * Analogous to `attack()` in the vanilla game client.
   *
   * @param id
   * @returns
   */
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
        if (!isRelevantGameResponse(data, "attack")) return;

        // TODO: Entity check?

        if (isSuccessGameResponse(data)) {
          resolve(data as unknown as SkillSuccessGRDataObject);
        } else {
          reject(new Error(data.response));
        }
        cleanup();
      };

      const disappearHandler = (data: ServerToClient_disappear) => {
        if (data.id !== id) return; // Different entity
        reject(new Error("not_there"));
        cleanup();
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

  public buy(name: ItemKey, quantity = 1): Promise<BuySuccessGRDataObject> {
    const s = this.socket;

    const promise = new Promise<BuySuccessGRDataObject>((resolve, reject) => {
      const cleanup = () => {
        clearTimeout(timeout);
        s.off("game_response", responseHandler);
      };

      const responseHandler = (data: ServerToClient_game_response) => {
        if (!isRelevantGameResponse(data, "buy")) return;
        if (isSuccessGameResponse(data)) {
          if ((data as BuySuccessGRDataObject).name !== name) return; // Response is for a different item
          if ((data as BuySuccessGRDataObject).q !== quantity) return; // Response is for a different item
          resolve(data as BuySuccessGRDataObject);
        } else {
          reject(new Error(data.response));
        }
        cleanup();
      };

      const timeout = setTimeout(() => {
        reject(new Error(`Timeout (${Configuration.SOCKET_EMIT_TIMEOUT_MS}ms)`));
        cleanup();
      }, Configuration.SOCKET_EMIT_TIMEOUT_MS);

      s.on("game_response", responseHandler);
    });

    s.emit("buy", { name, quantity });
    return promise;
  }

  public craft(name: ItemKey, itemPositions?: number[]): Promise<unknown> {
    const s = this.socket;

    const gCraft = this.game.G.craft[name];
    if (!gCraft) throw new Error(`Item ${name} is not craftable`);

    if (this.gold < gCraft.cost) throw new Error(`Not enough gold to craft ${name} (${this.gold}/${gCraft.cost})`);

    if (itemPositions === undefined || itemPositions.length === 0) {
      // TODO: Get item positions
      throw new Error("Item positions not provided (and finding them is not implemented yet)");
    } else {
      for (let i = 0; i < itemPositions.length; i++) {
        const pos = itemPositions[i] as number;
        if (pos < 0 || pos >= this.items.length) throw new Error(`Item position ${pos} is out of bounds`);

        const item = this.items[pos];
        if (!item) throw new Error(`No item at position ${pos}`);
        if (item.name !== gCraft.items[i]?.[1])
          throw new Error(`Item at position ${pos} is not ${gCraft.items[i]?.[1]} (${item.name})`);
      }
    }

    const promise = new Promise<CraftSuccessResponse>((resolve, reject) => {
      const cleanup = () => {
        clearTimeout(timeout);
        s.off("game_response", responseHandler);
      };

      const responseHandler = (data: ServerToClient_game_response) => {
        if (!isRelevantGameResponse(data, "craft")) return;
        if (isSuccessGameResponse(data)) {
          if ((data as CraftSuccessResponse).name !== name) return; // Response is for a different item
          resolve(data as CraftSuccessResponse);
        } else {
          reject(new Error(data.response));
        }
        cleanup();
      };

      const timeout = setTimeout(() => {
        reject(new Error(`Timeout (${Configuration.SOCKET_EMIT_TIMEOUT_MS}ms)`));
        cleanup();
      }, Configuration.SOCKET_EMIT_TIMEOUT_MS);

      s.on("game_response", responseHandler);
    });

    const items: [number, number][] = itemPositions.map((value, index) => [index, value]);
    s.emit("craft", { items });
    return promise;
  }

  /**
   * Destroys the item at the given index
   *
   * @param num Index of item in inventory
   * @param q If the item is stackable, we will destroy this many
   * @returns
   */
  public destroy(num: number, q = 1): Promise<DestroyGRDataObject> {
    const s = this.socket;

    // TODO: Pre-checks (locked, no item)

    const promise = new Promise<DestroyGRDataObject>((resolve, reject) => {
      const cleanup = () => {
        clearTimeout(timeout);
        s.off("game_response", responseHandler);
      };

      const responseHandler = (data: ServerToClient_game_response) => {
        if (!isRelevantGameResponse(data, "destroy")) return;
        if ((data as DestroyGRDataObject).num !== num) return; // Response is for a different item
        if (isSuccessGameResponse(data)) {
          resolve(data as DestroyGRDataObject);
        } else {
          reject(new Error((data as DestroyGRDataObject).response));
        }
        cleanup();
      };

      const timeout = setTimeout(() => {
        cleanup();
        reject(new Error(`Timeout (${Configuration.SOCKET_EMIT_TIMEOUT_MS}ms)`));
      }, Configuration.SOCKET_EMIT_TIMEOUT_MS);

      s.on("game_response", responseHandler);
    });

    s.emit("destroy", { num, q, statue: true });
    return promise;
  }

  public async exchange(itemPosition: number): Promise<string> {
    const s = this.socket;

    if (Configuration.CHECK_COOLDOWN_BEFORE_EMIT && this.q.exchange)
      throw new Error("An exchange is already in progress");

    if (itemPosition === undefined || itemPosition < 0 || itemPosition >= this.items.length)
      throw new Error(`Item position ${itemPosition} is out of bounds`);

    const item = this.items[itemPosition];
    if (!item) throw new Error(`No item at position ${itemPosition}`);

    const gItem = this.game.G.items[item.name];
    if (gItem?.e === undefined) throw new Error(`Item ${item.name} is not exchangeable`);
    if (gItem.e > (item.q ?? 1)) throw new Error(`Insufficient quantity to exchange (${item.q}/${gItem.e})`);

    const startedPromise = new Promise<ExchangeInProgressGRDataObject>((resolve, reject) => {
      const cleanup = () => {
        clearTimeout(timeout);
        s.off("game_response", responseHandler);
      };

      const responseHandler = (data: ServerToClient_game_response) => {
        if (!isRelevantGameResponse(data, "exchange")) return;
        // NOTE: `data.success` is false
        if ((data as ExchangeInProgressGRDataObject).in_progress) {
          resolve(data as ExchangeInProgressGRDataObject);
        } else {
          reject(new Error(data.response));
        }
        cleanup();
      };

      const timeout = setTimeout(() => {
        reject(new Error(`Timeout (${Configuration.SOCKET_EMIT_TIMEOUT_MS}ms)`));
        cleanup();
      }, Configuration.SOCKET_EMIT_TIMEOUT_MS);

      s.on("game_response", responseHandler);
    });

    s.emit("exchange", { item_num: itemPosition });
    await startedPromise;
    if (this.q.exchange?.ms === undefined) throw new Error("Missing `q.exchange`");

    const finishedPromise = new Promise<string>((resolve, reject) => {
      const cleanup = () => {
        clearTimeout(timeout);
        s.off("game_log", responseHandler);
      };

      const responseHandler = (data: ServerToClient_game_log) => {
        let message: string | undefined = undefined;
        if (typeof data === "string") {
          if (data === "Didn't receive anything") message = data;
        } else {
          if (data.message.startsWith("Received")) message = data.message;
        }
        if (message !== undefined) {
          resolve(message);
          cleanup();
        }
      };

      const timeoutMs = this.q.exchange!.ms + Configuration.SOCKET_EMIT_TIMEOUT_MS;
      const timeout = setTimeout(() => {
        reject(new Error(`Timeout (${timeoutMs}ms)`));
        cleanup();
      }, timeoutMs);

      s.on("game_log", responseHandler);
    });

    return finishedPromise;
  }

  /**
   * Moves your character to the given x,y coordinates.
   *
   * NOTE: Currently does not check walls!
   *
   * @param x
   * @param y
   * @returns
   */
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

  /**
   * Opens a chest with the given ID
   *
   * @param id
   * @returns
   */
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
        if (!isRelevantGameResponse(data, "open_chest")) return;
        reject(new Error(data.response)); // NOTE: open_chest only has failed responses
        cleanup();
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

  /**
   * Regenerates a small amount of HP without using an item
   * @returns
   */
  public regenHp(): Promise<void> {
    const s = this.socket;

    const promise = new Promise<void>((resolve, reject) => {
      const cleanup = () => {
        clearTimeout(timeout);
        s.off("game_response", responseHandler);
      };

      const responseHandler = (data: ServerToClient_game_response) => {
        if (!isRelevantGameResponse(data, "use")) return; // Different skill
        // TODO: The game can't differentiate between hp and mp regen using the game_response
        if (isSuccessGameResponse(data)) {
          resolve();
        } else {
          reject(new Error(data.response));
        }
        cleanup();
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

  /**
   * Regenerates a small amount of MP without using an item
   * @returns
   */
  public regenMp(): Promise<void> {
    const s = this.socket;

    const promise = new Promise<void>((resolve, reject) => {
      const cleanup = () => {
        clearTimeout(timeout);
        s.off("game_response", responseHandler);
      };

      const responseHandler = (data: ServerToClient_game_response) => {
        if (!isRelevantGameResponse(data, "use")) return; // Different skill
        // TODO: The game can't differentiate between hp and mp regen using the game_response
        if (isSuccessGameResponse(data)) {
          resolve();
        } else {
          reject(new Error(data.response));
        }
        cleanup();
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
   * Sells an item to the NPC
   *
   * @param num Index of item in inventory
   * @param quantity If the item is stackable, the number of items to sell
   * @returns
   */
  public sell(num: number, quantity = 1): Promise<GoldReceivedGRDataObject> {
    const s = this.socket;

    // TODO: Pre-checks (locked, no item)

    const promise = new Promise<GoldReceivedGRDataObject>((resolve, reject) => {
      const cleanup = () => {
        clearTimeout(timeout);
        s.off("game_response", responseHandler);
      };

      const responseHandler = (data: ServerToClient_game_response) => {
        if (!isRelevantGameResponse(data, "sell")) return;
        // TODO: Is this actually the item we sold?
        if (isSuccessGameResponse(data)) {
          resolve(data as GoldReceivedGRDataObject);
        } else {
          reject(new Error(data.response));
        }
        cleanup();
      };

      const timeout = setTimeout(() => {
        cleanup();
        reject(new Error(`Timeout (${Configuration.SOCKET_EMIT_TIMEOUT_MS}ms)`));
      }, Configuration.SOCKET_EMIT_TIMEOUT_MS);

      s.on("game_response", responseHandler);
    });

    s.emit("sell", { num, quantity });
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
        if (!isRelevantGameResponse(data, "party")) return;
        // TODO: Was the request actually sent to the party we requested?
        if (isSuccessGameResponse(data)) {
          resolve();
        } else {
          reject(new Error(data.response));
        }
        cleanup();
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
