import { afterEach, beforeAll, expect, test } from "bun:test";
import Configuration from "../src/Configuration.js";
import EventBus from "../src/EventBus.js";
import Game from "../src/Game.js";
import Observer from "../src/Observer.js";

const defaultConfig = structuredClone(Configuration);

let game: Game;
beforeAll(async () => {
  game = new Game();
  await Promise.all([game.updateG(), game.updateServers()]);
});

afterEach(() => {
  // Reset values
  Configuration.CONNECT_TIMEOUT_MS = defaultConfig.CONNECT_TIMEOUT_MS;
  Configuration.SOCKET_EMIT_TIMEOUT_MS = defaultConfig.SOCKET_EMIT_TIMEOUT_MS;

  // Clear listeners
  EventBus.removeAllListeners();
});

test("CONNECT_TIMEOUT_MS", () => {
  const observer = new Observer(game);

  // Should throw if we set the timeout to something unreasonable
  Configuration.CONNECT_TIMEOUT_MS = 1;
  expect(observer.start("US", "I")).rejects.toThrow(/1ms/);

  observer.stop();
}, 10_000);

test("SOCKET_EMIT_TIMEOUT_MS", async () => {
  const observer = new Observer(game);

  await observer.start("US", "I");

  // Should throw if we set the timeout to something unreasonable
  Configuration.SOCKET_EMIT_TIMEOUT_MS = 1;
  expect(observer.ping()).rejects.toThrow(/1ms/);

  observer.stop();
}, 10_000);
