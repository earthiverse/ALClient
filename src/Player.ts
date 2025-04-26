import type EventEmitter from "node:events";
import type { ServersAndCharactersApiResponse, XOnlineCharacter } from "typed-adventureland";
import { Character } from "./Character.js";
import EventBus from "./EventBus.js";
import type { Game } from "./Game.js";
import { Mage } from "./Mage.js";
import { Merchant } from "./Merchant.js";
import { Paladin } from "./Paladin.js";
import { Priest } from "./Priest.js";
import { Ranger } from "./Ranger.js";
import { Rogue } from "./Rogue.js";
import { Warrior } from "./Warrior.js";

export interface PlayerEventMap {
  /** A `Player` was instantiated */
  player_created: [Player];
  /** `Player.characters` was updated */
  characters_updated: [Player, Player["characters"]];
  /** `Player.updateCharacters()` failed */
  update_characters_failed: [Player, Error];
}

// Typescript will enforce only PlayerEventMap events to be allowed
const PlayerEventBus = EventBus as unknown as EventEmitter<PlayerEventMap>;

export class Player {
  public readonly game: Game;

  /**
   * Your user ID is a string of numbers.
   * If your characters are not private, their `owner` will be this value.
   */
  public readonly userId: string;

  /**
   * Treat this variable like a password!
   * The userId and userAuth together allow access to an account!
   *
   * You can remove old unused auths:
   *
   * 1. Log in to https://adventure.land (or your custom server)
   * 2. Click Email and Account (top left)
   * 3. Click Logout Everywhere
   */
  public readonly userAuth: string;

  /**
   * Headers for sending API requests with authentication
   */
  protected get apiHeaders(): { Cookie: string } {
    return { Cookie: `auth=${this.userId}-${this.userAuth}` };
  }

  public characters: XOnlineCharacter[] = [];

  /**
   * This class represents a single player (account)
   */
  constructor(game: Game, userId: string, userAuth: string, characters: Player["characters"] = []) {
    this.game = game;
    this.userId = userId;
    this.userAuth = userAuth;
    this.characters = characters;

    PlayerEventBus.emit("player_created", this);
  }

  /**
   * Creates a {@link Character} with the given name.
   *
   * NOTE: This will not start the character
   */
  public createCharacter<T extends Character>(name: string): T {
    const character = this.characters.find((c) => c.name === name);
    if (character === undefined) {
      throw new Error(`No character with the name '${name}' belongs to this Player`);
    }

    switch (character.type) {
      case "mage":
        return new Mage(this, character.id, name) as T;
      case "merchant":
        return new Merchant(this, character.id, name) as T;
      case "paladin":
        return new Paladin(this, character.id, name) as T;
      case "priest":
        return new Priest(this, character.id, name) as T;
      case "ranger":
        return new Ranger(this, character.id, name) as T;
      case "rogue":
        return new Rogue(this, character.id, name) as T;
      case "warrior":
        return new Warrior(this, character.id, name) as T;
      // default:
      //   return new Character(this, character.id, name) as T;
    }
  }

  /**
   * Updates `characters`
   */
  public async updateCharacters(): Promise<Player["characters"]> {
    try {
      const updateResponse = await fetch(this.game.apiUrl, {
        method: "POST",
        headers: this.apiHeaders,
        body: new URLSearchParams({
          method: "servers_and_characters",
        }),
      });

      if (!updateResponse.ok) {
        throw new Error(await updateResponse.text());
      }

      const [updateJson] = (await updateResponse.json()) as ServersAndCharactersApiResponse[];

      if (updateJson?.characters === undefined || updateJson.servers === undefined) {
        throw new Error(JSON.stringify(updateJson));
      }

      this.characters = updateJson.characters;
      EventBus.emit("characters_updated", this, this.characters);
      this.game._servers = updateJson.servers;
      EventBus.emit("servers_updated", this.game, this.game.servers);
      return this.characters;
    } catch (e) {
      const error = new Error("Failed updating characters", { cause: e });
      PlayerEventBus.emit("update_characters_failed", this, error);
      throw error;
    }
  }
}

export default Player;
