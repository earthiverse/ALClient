import { EventEmitter } from "node:events";
import { type GameEventMap } from "./Game.js";

interface EventMap extends GameEventMap {}

export class EventBus extends EventEmitter<EventMap> {}

export default new EventBus();
