import Configuration from "../src/Configuration.js";
import EventBus from "../src/EventBus.js";
import Game from "../src/Game.js";
import Observer from "../src/Observer.js";

const defaultConfig = structuredClone(Configuration);

let game: Game;
beforeAll(async () => {
  game = new Game();
  await Promise.all([game.updateG(), game.updateServers()]);
}, 30_000);

beforeEach(() => {
  // Reset values
  Configuration.SOCKET_EMIT_TIMEOUT_MS = defaultConfig.SOCKET_EMIT_TIMEOUT_MS;

  EventBus.removeAllListeners();
});

test("SOCKET_EMIT_TIMEOUT_MS", async () => {
  const observer = new Observer(game);

  await observer.start("US", "I");

  // Should throw if we set the timeout to something unreasonable
  Configuration.SOCKET_EMIT_TIMEOUT_MS = 1;
  await expect(() => observer.ping()).rejects.toThrow("Timeout (1ms)");

  observer.stop();
}, 10_000);
