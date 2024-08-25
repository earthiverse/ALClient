import type EventEmitter from "node:events";
import EventBus from "./EventBus.js";
import Observer from "./Observer.js";
import Player from "./Player.js";

export interface CharacterEventMap {
  character_created: [Character];
}

// Typescript will enforce only CharacterEventMap events to be allowed
const PlayerEventBus = EventBus as unknown as EventEmitter<CharacterEventMap>;

export class Character extends Observer {
  public readonly player: Player;

  public readonly characterId: string;

  constructor(player: Player, characterId: string) {
    super(player.game, false);

    this.player = player;
    this.characterId = characterId;
    PlayerEventBus.emit("character_created", this);
  }
}

export default Character;
