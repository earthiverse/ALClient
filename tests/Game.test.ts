import Game from "../src/Game.js";
import Player from "../src/Player.js";
import EventBus from "../src/EventBus.js";

beforeEach(() => {
  EventBus.removeAllListeners();
});

test("`login()` with invalid credentials throws an error", async () => {
  const game = new Game();

  // Set up EventBus to listen for update
  let eventHappened = false;
  EventBus.once("login_failed", () => (eventHappened = true));

  // Bad login
  await expect(() =>
    game.login("hyprkookeez+test@gmail.com", "this_is_not_my_real_password")
  ).rejects.toThrow();

  // Event should have triggered
  expect(eventHappened).toBe(true);
});

test("`login()` with valid credentials returns a `Player` object", async () => {
  const game = new Game();

  // Set up EventBus to listen for update
  let eventHappened = false;
  EventBus.once("player_created", () => (eventHappened = true));

  const email = process.env.TEST_VALID_EMAIL;
  const password = process.env.TEST_VALID_PASSWORD;
  if (!email || !password) {
    throw new Error("Environment variables not set");
  }

  const player = await game.login(email, password);
  expect(player).toBeInstanceOf(Player);

  // Event should have triggered
  expect(eventHappened).toBe(true);
});

// TODO: Custom server login test? We might be able to use docker.

test("`.G` throws error when missing", async () => {
  const game = new Game();
  expect(() => game.G).toThrow;
});

test("`updateGameData()` works", async () => {
  const game = new Game();

  // Set up EventBus to listen for update
  let eventHappened = false;
  EventBus.once("g_updated", () => (eventHappened = true));

  const g = await game.updateGameData();

  // Our JSON should have parsed correctly
  expect(g.version).toBeTruthy();
  expect(g.conditions).toBeTruthy();
  expect(g.monsters).toBeTruthy();
  expect(g.skills).toBeTruthy();

  // `game.G` should reference the same data
  expect(game.G).toBe(g);

  // Event should have triggered
  expect(eventHappened).toBe(true);
}, 10000);
