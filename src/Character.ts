import type EventEmitter from "node:events";
import type {
  BuySuccessGRDataObject,
  CharacterBankInfos,
  CharacterEntityQInfos,
  CharacterEntitySlotsInfos,
  ClassKey,
  ClientToServer_upgrade,
  CooldownGRDataObject,
  DestroyGRDataObject,
  EntityChannelInfos,
  ExchangeInProgressGRDataObject,
  GoldReceivedGRDataObject,
  ItemInfo,
  ItemKey,
  MapKey,
  MonsterKey,
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
  ServerToClient_new_map,
  ServerToClient_player,
  ServerToClient_start,
  SkillKey,
  SkillSuccessGRDataObject,
  StatType,
  StatusInfo,
  XServerInfos,
} from "typed-adventureland";
import Configuration from "./Configuration.js";
import { Entity } from "./Entity.js";
import EventBus from "./EventBus.js";
import type Mage from "./Mage.js";
import { Observer } from "./Observer.js";
import type { Player } from "./Player.js";
import {
  isConditionKey,
  isFailedGameResponse,
  isMapKey,
  isMonsterKey,
  isRelevantGameResponse,
  isSuccessGameResponse,
} from "./TypeGuards.js";
import Utilities from "./Utilities.js";

export interface CharacterEventMap {
  bank_updated: [character: Character, bank: CharacterBankInfos];
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

  protected _armor?: number;
  public get armor(): number {
    if (this._armor === undefined) throw new Error("No player data");
    return this._armor;
  }

  protected _attack?: number;
  public get attack(): number {
    if (this._attack === undefined) throw new Error("No player data");
    return this._attack;
  }

  protected _bank?: CharacterBankInfos;
  public get bank(): CharacterBankInfos {
    if (this._bank === undefined) throw new Error("No player data");
    return this._bank;
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

  protected _crit?: number;
  public get crit(): number {
    if (this._crit === undefined) throw new Error("No player data");
    return this._crit;
  }

  protected _ctype?: ClassKey;
  public get ctype(): ClassKey {
    if (this._ctype === undefined) throw new Error("No player data");
    return this._ctype;
  }

  protected _dex?: number;
  public get dex(): number {
    if (this._dex === undefined) throw new Error("No player data");
    return this._dex;
  }

  protected _dreturn?: number;
  public get dreturn(): number {
    if (this._dreturn === undefined) throw new Error("No player data");
    return this._dreturn;
  }

  protected _esize?: number;
  public get esize(): number {
    if (this._esize === undefined) throw new Error("No player data");
    return this._esize;
  }

  protected _evasion?: number;
  public get evasion(): number {
    if (this._evasion === undefined) throw new Error("No player data");
    return this._evasion;
  }

  protected _for?: number;
  public get for(): number {
    if (this._for === undefined) throw new Error("No player data");
    return this._for;
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

  public get luck(): number {
    if (this._luckm === undefined) throw new Error("No player data");
    return 100 * this._luckm;
  }

  protected _luckm?: number;
  public get luckm(): number {
    if (this._luckm === undefined) throw new Error("No player data");
    return this._luckm;
  }

  protected _int?: number;
  public get int(): number {
    if (this._int === undefined) throw new Error("No player data");
    return this._int;
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

  protected _mp_cost?: number;
  public get mp_cost(): number {
    if (this._mp_cost === undefined) throw new Error("No player data");
    return this._mp_cost;
  }

  protected _mp_reduction?: number;
  public get mp_reduction(): number {
    if (this._mp_reduction === undefined) throw new Error("No player data");
    return this._mp_reduction;
  }

  private get output(): number {
    // TODO: Implement. Not exposed, but we could figure it out through equipment.
    // TODO: Change to public when implemented
    throw new Error("Not yet implemented");
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

  protected _reflection?: number;
  public get reflection(): number {
    if (this._reflection === undefined) throw new Error("No player data");
    return this._reflection;
  }

  protected _resistance?: number;
  public get resistance(): number {
    if (this._resistance === undefined) throw new Error("No player data");
    return this._resistance;
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

  private get stat(): number {
    // TODO: Implement. Not exposed, but we could figure it out through equipment.
    // TODO: Change to public when implemented
    throw new Error("Not yet implemented");
  }

  protected _str?: number;
  public get str(): number {
    if (this._str === undefined) throw new Error("No player data");
    return this._str;
  }

  protected _target?: string;
  public get target(): string | undefined {
    return this._target;
  }

  protected _vit?: number;
  public get vit(): number {
    if (this._vit === undefined) throw new Error("No player data");
    return this._vit;
  }

  protected _xp?: number;
  public get xp(): number {
    if (this._xp === undefined) throw new Error("No player data");
    return this._xp;
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
    if (data.armor !== undefined) this._armor = data.armor;
    if (data.attack !== undefined) this._attack = data.attack;
    if (data.c !== undefined) this._c = data.c;
    if (data.cash !== undefined) this._cash = data.cash;
    if (data.crit !== undefined) this._crit = data.crit;
    if (data.ctype !== undefined) this._ctype = data.ctype;
    if (data.dex !== undefined) this._dex = data.dex;
    if (data.dreturn !== undefined) this._dreturn = data.dreturn;
    if (data.esize !== undefined) this._esize = data.esize;
    if (data.evasion !== undefined) this._evasion = data.evasion;
    if (data.for !== undefined) this._for = data.for;
    if (data.frequency !== undefined) this._frequency = data.frequency;
    if (data.gold !== undefined) this._gold = data.gold;
    if (data.hp !== undefined) this._hp = data.hp;
    if (data.luckm !== undefined) this._luckm = data.luckm;
    if (data.int !== undefined) this._int = data.int;
    if (data.items !== undefined) this._items = data.items;
    if (data.level !== undefined) this._level = data.level;
    if (data.lifesteal !== undefined) this._lifesteal = data.lifesteal;
    if (data.m !== undefined) this._m = data.m;
    if (data.manasteal !== undefined) this._manasteal = data.manasteal;
    if (data.max_hp !== undefined) this._max_hp = data.max_hp;
    if (data.max_mp !== undefined) this._max_mp = data.max_mp;
    if (data.mp !== undefined) this._mp = data.mp;
    if (data.mp_cost !== undefined) this._mp_cost = data.mp_cost;
    if (data.mp_reduction !== undefined) this._mp_reduction = data.mp_reduction;
    if (data.party !== undefined) this._party = data.party;
    if (data.q !== undefined) {
      this._q = data.q;
      CharacterEventBus.emit("progress_set", this, data.q);
    }
    if (data.range !== undefined) this._range = data.range;
    if (data.reflection !== undefined) this._reflection = data.reflection;
    if (data.resistance !== undefined) this._resistance = data.resistance;
    if (data.rip !== undefined) this._rip = data.rip;
    if (data.rpiercing !== undefined) this._rpiercing = data.rpiercing;
    if (data.s !== undefined) {
      this._s = data.s;
      CharacterEventBus.emit("conditions_set", this, data.s);
    }
    if (data.slots !== undefined) this._slots = data.slots;
    if (data.str !== undefined) this._str = data.str;
    if (data.target !== undefined) this._target = data.target;
    if (data.user !== undefined) {
      this._bank = data.user;
      CharacterEventBus.emit("bank_updated", this, data.user);
    }
    if (data.vit !== undefined) this._vit = data.vit;
    if (data.xp !== undefined) this._xp = data.xp;
  }

  protected override updatePositions(): void {
    if (this._going_x !== undefined && this._going_y !== undefined) this.updatePosition();
    super.updatePositions();
  }

  protected checkCooldown(skill: SkillKey): void {
    if (!Configuration.CHECK_COOLDOWN_BEFORE_EMIT) return; // Not checking
    if (this.isOnCooldown(skill)) throw new Error(`${skill} is on cooldown`);
  }

  /**
   * @param item Item to check if we can buy
   * @param options
   * @returns whether we can buy the given item from where we are standing
   */
  public canBuy(
    item: ItemKey,
    options: {
      ignoreLocation?: true;
      quantity?: number;
    } = {},
  ): boolean {
    if (options.quantity === undefined) options.quantity = 1;
    if (options.quantity <= 0) throw new Error("Quantity must be >= 1");
    if (
      options.ignoreLocation !== true &&
      this._items!.some((i) => i?.name === "computer" || i?.name === "supercomputer")
    )
      options.ignoreLocation = true; // We have a computer, we can ignore the location

    const gItem = this.game.G.items[item];
    if (this._esize! <= 0) {
      if (gItem.s === undefined) return false; // No space, can't stack
      if (this._items?.some((i) => i?.name === item && i.q! <= gItem.s! - options.quantity!) === true) return true; // We can stack it
      return false;
    }

    if (this.gold < gItem.g * (gItem.markup ?? 1) * options.quantity) return false; // We can't afford it

    // Check if we are near the NPC that sells this item
    for (const map of Object.keys(this.game.G.maps) as MapKey[]) {
      if (!options.ignoreLocation && map !== this.map) continue; // Not close
      const gMap = this.game.G.maps[map];
      if (gMap.ignore === true) continue; // Map is not accessible
      for (const npc of gMap.npcs) {
        const gNpc = this.game.G.npcs[npc.id];
        if (!Array.isArray(gNpc.items)) continue; // NPC doesn't sell items
        if (!gNpc.items.some((i) => i === item)) continue; // NPC doesn't sell the item we're looking for
        // TODO: Handle NPCs with multiple positions
        if (
          !options.ignoreLocation &&
          this.getDistanceTo({ map, in: this.in, x: npc.position![0], y: npc.position![1] }) > 400
        )
          continue; // Too far
        return true;
      }
    }

    return false;
  }

  public canMove(): boolean {
    if (this.rip) return false;
    if (this.isBlocked()) return false;
    if (this.s.sleeping) return false;

    return true;
  }

  /**
   * @returns wether we can sell items from where we are standing
   */
  public canSell(): boolean {
    if (this._map?.startsWith("bank") === true) return false; // Can't sell in the bank
    if (this._items!.some((i) => i?.name === "computer" || i?.name === "supercomputer")) return true; // We can sell almost anywhere with a computer

    // Check if we're near an NPC merchant
    for (const npc of this.game.G.maps[this._map!].npcs) {
      const gNpc = this.game.G.npcs[npc.id];
      if (!gNpc.items) continue; // This NPC isn't a merchant
      // TODO: Handle NPCs with multiple positions
      if (this.getDistanceTo({ map: this._map!, in: this._in!, x: npc.position![0], y: npc.position![1] }) > 400)
        continue; // Too far away

      return true;
    }

    return false;
  }

  public canUse(
    skill: SkillKey,
    options: {
      ignoreCooldown?: true;
      ignoreEquipped?: true;
      ignoreLocation?: true;
      ignoreMp?: true;
    } = {},
  ): boolean {
    if (this.rip) return false;
    if (this.isBlocked()) return false;
    if (options.ignoreCooldown === undefined && this.isOnCooldown(skill)) return false;
    const gSkill = this.game.G.skills[skill];
    if (options.ignoreLocation === undefined && gSkill.hostile === true && this.game.G.maps[this.map].safe === true)
      return false; // Can't use a hostile skill in a safe place
    if (options.ignoreMp === undefined && gSkill.mp !== undefined && this.mp < gSkill.mp) return false; // Not enough MP
    if (options.ignoreMp === undefined && skill == "attack" && this.mp < this.mp_cost) return false; // Not enough MP (attack)
    if (gSkill.level !== undefined && this.level < gSkill.level) return false; // Not a high enough level
    if (options.ignoreEquipped && gSkill.wtype !== undefined) {
      // The skill requires a certain weapon type
      if (!this.slots.mainhand) return false; // We don't have any weapon equipped
      const gItem = this.game.G.items[this.slots.mainhand.name];
      const acceptableTypes = Array.isArray(gSkill.wtype) ? gSkill.wtype : [gSkill.wtype];
      if (!acceptableTypes.includes(gItem.wtype!)) return false; // We don't have that weapon type equipped
    }
    if (options.ignoreEquipped === undefined && gSkill.consume !== undefined && !this.hasItem({ name: gSkill.consume }))
      return false; // We don't have the required consumable
    if (
      options.ignoreEquipped === undefined &&
      gSkill.inventory !== undefined &&
      !gSkill.inventory.every((name) => this.hasItem({ name }))
    )
      return false; // We don't have the required item in our inventory
    if (
      options.ignoreEquipped === undefined &&
      gSkill.slot !== undefined &&
      !gSkill.slot.some(([slot, item]) => this.slots[slot]?.name === item)
    )
      return false; // We don't have anything equipped that lets us use this skill
    if (gSkill.class !== undefined && gSkill.class.some((c) => c === this.ctype)) return false; // We're not the right class to use this skill
    if (
      gSkill.requirements !== undefined &&
      !Object.entries(gSkill.requirements).every(([stat, amount]) => this[stat as StatType] >= amount)
    )
      return false; // We don't have every stat requirement

    // Special circumstance -- fishing and mining can only be done in certain locations
    // TODO: Check fishing and mining zone
    // TODO: Include `!options.ignoreLocation`

    // Special circumstance -- we can't use blink if we're being dampened
    if (this.s.dampened) {
      if (skill == "blink") return false;
    }

    // Special circumstance -- merchants can't attack unless they have a dartgun
    if (this.ctype == "merchant" && skill == "attack") {
      if (this.slots.mainhand?.name !== "dartgun") return false; // Wrong weapon
      if (this.gold < 100) return false; // Not enough gold to shoot
    }
    return true;
  }

  /**
   * Consumes (uses) an item
   *
   * @param num Position of the item in inventory
   * @returns
   */
  public async consumeItem(num: number): Promise<void> {
    const s = this.socket;

    const item = this._items![num];
    if (!item) throw new Error(`No item at position ${num}`);

    const gItem = this.game.G.items[item.name];

    if (gItem.gives !== undefined) this.checkCooldown("use_hp");

    const usedItem = new Promise<void>((resolve, reject) => {
      const cleanup = () => {
        clearTimeout(timeout);
        s.off("game_response", responseHandler);
      };

      const responseHandler = (data: ServerToClient_game_response) => {
        if (!isRelevantGameResponse(data, "equip")) return;

        if (isSuccessGameResponse(data)) {
          if (data.num !== num) return; // Different item
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

    s.emit("equip", { consume: true, num });
    return usedItem;
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
    return this.locateItems(item).reduce((count, index) => count + ((this._items![index] as ItemInfo).q ?? 1), 0);
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

  public hasItem(item: Partial<ItemInfo>): boolean {
    return this.locateItem(item) !== undefined;
  }

  /**
   * Returns the index of the first item that matches all properties,
   * or undefined if no item is found
   *
   * @param item all the properties the item needs to match
   * @returns
   */
  public locateItem(item: Partial<ItemInfo>): number | undefined {
    for (let index = 0; index < this._items!.length; index++) {
      const i = this._items![index];
      if (!i) continue;

      let match = true;
      for (const prop in item) {
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

    for (let index = 0; index < this._items!.length; index++) {
      const i = this._items![index];
      if (!i) continue;

      let match = true;
      for (const prop in item) {
        if (item[prop as keyof ItemInfo] !== i[prop as keyof ItemInfo]) {
          match = false;
          break;
        }
      }

      if (match) items.push(index);
    }

    return items;
  }

  public isBlocked(): boolean {
    for (const key in this.s) {
      if (!isConditionKey(key, this.game.G)) continue;
      const condition = this.game.G.conditions[key];
      if (condition.blocked === true) return true;
    }
    return false;
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

    this.checkCooldown("attack");

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

        if (isSuccessGameResponse(data) || data.response === "data") {
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
        if (pos < 0 || pos >= this._items!.length) throw new Error(`Item position ${pos} is out of bounds`);

        const item = this._items![pos];
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

  // TODO: Add option to resolve on start or finish
  public async exchange(itemPosition: number): Promise<string> {
    const s = this.socket;

    if (Configuration.CHECK_COOLDOWN_BEFORE_EMIT && this.q.exchange)
      throw new Error("An exchange is already in progress");

    if (itemPosition === undefined || itemPosition < 0 || itemPosition >= this._items!.length)
      throw new Error(`Item position ${itemPosition} is out of bounds`);

    const item = this._items![itemPosition];
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
    return new Promise<void>((resolve) => setTimeout(resolve, Math.ceil((1000 * distance) / this.speed)));
  }

  /**
   * Moves your character to the entity
   *
   * @param entity
   */
  public async smartMove(entity: Entity): Promise<void>;
  /**
   * Moves your character to the nearest monster of the given type
   *
   * @param monster The monster we want to move to
   * @param map Optional. If set, we will only consider spawns on this map.
   */
  public async smartMove(monster: MonsterKey, map?: MapKey): Promise<void>;
  /**
   * Moves your character to the given position.
   *
   * @param map
   * @param x
   * @param y
   */
  public async smartMove(map: MapKey, x: number, y: number): Promise<void>;
  public async smartMove(arg1: MonsterKey | MapKey | Entity, arg2?: number | MapKey, arg3?: number) {
    const pathfinder = this.game.pathfinder;

    if (!pathfinder.isWalkable(this.map, this.x, this.y)) await this.warpToTown(); // We're stuck

    // TODO: Add smartMove options

    // TODO: Is there a way to add this typing to the pathfinder itself?
    let path:
      | {
          map: MapKey;
          x: number;
          y: number;
          method: "door" | "move" | "town" | "transport";
          spawn?: number;
        }[]
      | undefined = undefined;
    let map: MapKey = arg1 as MapKey;
    let x: number = arg2 as number;
    let y: number = arg3 as number;

    if (arg1 instanceof Entity) {
      ({ map, x, y } = arg1);
    } else if (isMonsterKey(arg1, this.game.G)) {
      const spawns = Utilities.getMonsterSpawns(this.game.G, arg1);
      let bestSpawn = undefined;
      for (let i = 0; i < spawns.length; i++) {
        const spawn = spawns[i]!;
        if (typeof arg2 === "string" && isMapKey(arg2, this.game.G) && spawn.map === arg2) continue; // Not the map we want
        if (spawn.map === this.map) bestSpawn = spawn;
        // TODO: Return cost from pathfinder
        path = pathfinder.getPath(this.map, this.x, this.y, spawn.map, spawn.x, spawn.y) as typeof path;
        if (!Array.isArray(path)) continue; // Couldn't find path
        bestSpawn = spawn;
        break; // TODO: Calculate path cost
      }
      if (bestSpawn === undefined) {
        if (typeof arg2 === "string")
          throw new Error(`Unable to find path from ${this.map},${this.x},${this.y} to ${arg1} on ${arg2}`);
        throw new Error(`Unable to find path from ${this.map},${this.x},${this.y} to ${arg1}`);
      }
      ({ map, x, y } = bestSpawn);
    }
    // TODO: NPC Key
    // TODO: Item Key -- find npc that sells it

    path ??= pathfinder.getPath(this.map, this.x, this.y, map, x, y, this.speed);
    if (!Array.isArray(path))
      throw new Error(`Unable to find path from ${this.map},${this.x},${this.y} to ${map},${arg2},${y}`);

    for (let i = 0; i < path.length; i++) {
      // Check if we can take a shortcut
      // TODO: Make configurable with option
      const furthestIndex = path.findLastIndex((node) => node.map === this.map && this.canMoveTo(node.x, node.y));
      if (furthestIndex !== undefined && furthestIndex > i) i = furthestIndex;

      const segment = path[i]!;

      // TODO: Blink usage
      if (this.ctype === "mage") {
        // TODO: Change to cost instead of # of nodes & move to options
        const lastNodeIndexOnMap = path.findLastIndex((node) => node.map === this.map);
        if (lastNodeIndexOnMap - i >= 5) {
          const lastNode = path[lastNodeIndexOnMap]!;
          if (this.canUse("blink")) {
            try {
              // TODO: We could check for a blink to a known good position around the door
              //       and skip the move
              await (this as unknown as Mage).blink(lastNode.x, lastNode.y);
              await this.move(lastNode.x, lastNode.y);
            } catch {
              // Suppress blink failure
            }
          } else {
            // TODO: Add a listener or something that can check if we can start using blink
          }
        }
      }

      // TODO: Pre-emptive use of town if we're going to be town warping soon

      if (segment.method === "move") {
        if (segment.map !== this.map) throw new Error(`Expected map ${segment.map}, currently on ${this.map}`);
        await this.move(segment.x, segment.y);
        continue;
      }

      if (segment.method === "door" || segment.method === "transport") {
        await this.transport(segment.map, segment.spawn as number);
        continue;
      }

      if (segment.method === "town") {
        // TODO: Pathfind to town by walking, too, so if it gets interrupted, we are still advancing

        await this.warpToTown();
      }
    }
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
    this.checkCooldown("regen_hp");

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
    this.checkCooldown("regen_mp");

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

  public async transport(map: MapKey, spawn: number) {
    const s = this.socket;

    if (this.game.G.maps?.[map]?.spawns?.[spawn] === undefined)
      throw new Error(`${map} does not have a spawn ${spawn}`);

    const promise = new Promise<void>((resolve, reject) => {
      const cleanup = () => {
        clearTimeout(timeout);
        s.off("game_response", responseHandler);
      };

      const responseHandler = (data: ServerToClient_game_response) => {
        if (!isRelevantGameResponse(data, "transport")) return;

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

    s.emit("transport", { s: spawn, to: map });
    return promise;
  }

  public async upgrade(
    item_num: number,
    scroll_num?: number,
    offering_num?: number,
    options: {
      resolveOn: "start" | "finish";
    } = { resolveOn: "finish" },
  ): Promise<unknown> {
    if (this.q.upgrade) throw new Error("An upgrade is already in progress");

    const s = this.socket;

    if (scroll_num === undefined && offering_num === undefined)
      throw new Error("At least a scroll or an offering must be provided");

    const item = this._items![item_num];
    if (!item) throw new Error(`No item in position ${item_num}`);
    const gItem = this.game.G.items[item.name];
    if (gItem.upgrade === undefined) throw new Error(`${item.name} is not upgradable`);

    if (scroll_num !== undefined && !this._items![scroll_num]) throw new Error(`No scroll in position ${scroll_num}`);
    if (offering_num !== undefined && !this._items![offering_num])
      throw new Error(`No offering in position ${offering_num}`);

    const upgradeStarted = new Promise<unknown>((resolve, reject) => {
      const cleanup = () => {
        clearTimeout(timeout);
        s.off("game_response", gameResponseHandler);
        s.off("player", playerHandler);
      };

      const gameResponseHandler = (data: ServerToClient_game_response) => {
        if (!isRelevantGameResponse(data, "upgrade")) return;
        if (isFailedGameResponse(data)) {
          reject(new Error(data.response));
          cleanup();
        }
      };

      const playerHandler = (data: ServerToClient_player) => {
        if (data.q.upgrade) {
          cleanup();
          resolve(data.q);
        }
      };

      const timeout = setTimeout(() => {
        cleanup();
        reject(new Error(`Timeout (${Configuration.SOCKET_EMIT_TIMEOUT_MS}ms)`));
      }, Configuration.SOCKET_EMIT_TIMEOUT_MS);

      s.on("game_response", gameResponseHandler);
      s.on("player", playerHandler);
    });

    s.emit("upgrade", {
      clevel: item.level ?? 0,
      item_num,
      scroll_num,
      offering_num,
    } as ClientToServer_upgrade);

    if (options.resolveOn === "start") return upgradeStarted;
    await upgradeStarted;

    const upgradeFinished = new Promise<unknown>((resolve, reject) => {
      const cleanup = () => {
        clearTimeout(timeout);
        s.off("player", playerHandler);
      };

      const playerHandler = (data: ServerToClient_player) => {
        if (data.hitchhikers === undefined) return;
        for (const [hitchHikerEvent, hitchHikerData] of data.hitchhikers) {
          if (hitchHikerEvent !== "game_response") continue;
          if (typeof hitchHikerData !== "object") continue;
          // TODO: Improve typing of hitchhiker data
          if (
            ["upgrade_offering_success", "upgrade_success", "upgrade_success_stat"].includes(
              (hitchHikerData as { response: string }).response,
            )
          ) {
            cleanup();
            resolve(hitchHikerData);
          } else if ((hitchHikerData as { response: string }).response == "upgrade_fail") {
            cleanup();
            resolve(hitchHikerData);
          }
        }
      };

      const timeout = setTimeout(() => {
        cleanup();
        reject(new Error(`Timeout (${Configuration.SOCKET_EMIT_TIMEOUT_MS}ms)`));
      }, Configuration.SOCKET_EMIT_TIMEOUT_MS);

      s.on("player", playerHandler);
    });

    return upgradeFinished;
  }

  public async warpToTown(
    options: {
      resolveOn: "start" | "finish";
    } = { resolveOn: "finish" },
  ): Promise<void> {
    const s = this.socket;

    const warpStarted = new Promise<void>((resolve, reject) => {
      const cleanup = () => {
        clearTimeout(timeout);
        s.off("game_response", responseHandler);
      };

      const responseHandler = (data: ServerToClient_game_response) => {
        if (!isRelevantGameResponse(data, "town")) return;

        if (isSuccessGameResponse(data) || data.response === "data") {
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

    s.emit("town");
    if (options.resolveOn === "start") return warpStarted;
    await warpStarted;

    const warpFinished = new Promise<void>((resolve, reject) => {
      const cleanup = () => {
        clearTimeout(timeout);
        s.off("new_map", newMapHandler);
        s.off("player", playerHandler);
      };

      const newMapHandler = (data: ServerToClient_new_map) => {
        if (data.effect === 1) {
          cleanup();
          resolve();
        }
      };

      const playerHandler = (data: ServerToClient_player) => {
        if (!data.s.town) {
          cleanup();
          reject(new Error("interupted"));
        }
      };

      const timeoutMs = (this.game.G.conditions.town.duration as number) + Configuration.SOCKET_EMIT_TIMEOUT_MS;
      const timeout = setTimeout(() => {
        cleanup();
        reject(new Error(`Timeout (${timeoutMs}ms)`));
      }, timeoutMs);

      s.on("new_map", newMapHandler);
      s.on("player", playerHandler);
    });
    return warpFinished;
  }
}

export default Character;
