import { EventEmitter } from "node:events";
import type { GameEventMap } from "./Game.js";
import type { PlayerEventMap } from "./Player.js";

interface EventMap extends GameEventMap, PlayerEventMap {}

export class EventBus extends EventEmitter<EventMap> {}

export default new EventBus();
