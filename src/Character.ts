import type EventEmitter from "node:events";
import Game from "./Game.js";
import Player from "./Player.js";
import EventBus from "./EventBus.js";

export interface CharacterEventMap {
  character_created: [Character];
}

// Typescript will enforce only CharacterEventMap events to be allowed
const PlayerEventBus = EventBus as unknown as EventEmitter<CharacterEventMap>;

export class Character {
  public readonly game: Game;
  public readonly player: Player;

  public readonly characterId: string;

  constructor(player: Player, characterId: string) {
    this.player = player;
    this.game = player.game;
    this.characterId = characterId;

    PlayerEventBus.emit("character_created", this);
  }
}

export default Character;
