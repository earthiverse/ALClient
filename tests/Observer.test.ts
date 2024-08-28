import EventBus from "../src/EventBus.js";
import Game from "../src/Game.js";
import Observer from "../src/Observer.js";

let game: Game;
beforeAll(async () => {
  game = new Game();
  await game.updateServers();
}, 10000);

beforeEach(() => {
  EventBus.removeAllListeners();
});

test("`start()` works", async () => {
  // Set up EventBus to listen for update
  let eventHappened = false;
  EventBus.once("observer_created", () => {
    eventHappened = true;
  });

  const observer = new Observer(game);

  expect(eventHappened).toBe(true); // Event should have triggered

  // Set up EventBus to listen for update
  eventHappened = false;
  EventBus.once("observer_started", () => {
    eventHappened = true;
  });

  await observer.start("US", "I");

  expect(eventHappened).toBe(true); // Event should have triggered
  expect(observer.socket?.connected).toBe(true); // We should be connected

  observer.stop(); // TODO: We should have a `stop` method on the observer
}, 10000);

test("`start` throws error if already started", async () => {
  const observer = new Observer(game);

  // First start should be OK
  await observer.start("US", "I");

  // Should throw, and the error message should contain the server we're currently running
  await expect(() => observer.start("EU", "PVP")).rejects.toThrow(/USI/);

  observer.stop();
}, 10000);
