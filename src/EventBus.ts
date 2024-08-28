import { EventEmitter } from "node:events";
import type { CharacterEventMap } from "./Character.js";
import type { GameEventMap } from "./Game.js";
import type { ObserverEventMap } from "./Observer.js";
import type { PlayerEventMap } from "./Player.js";

interface EventMap extends CharacterEventMap, GameEventMap, ObserverEventMap, PlayerEventMap {}

export class EventBus extends EventEmitter<EventMap> {}

export default new EventBus();
