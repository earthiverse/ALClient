import { GData, XServerInfos } from "typed-adventureland";
import EventBus from "../src/EventBus.js";
import Game from "../src/Game.js";
import Player from "../src/Player.js";

beforeEach(() => {
  EventBus.removeAllListeners();
});

test("`login()` with invalid credentials throws an error", async () => {
  const game = new Game();

  // Set up EventBus to listen for update
  let eventHappened = false;
  EventBus.once("login_failed", () => {
    eventHappened = true;
  });

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
  EventBus.once("player_created", () => {
    eventHappened = true;
  });

  const email = process.env.TEST_VALID_EMAIL;
  const password = process.env.TEST_VALID_PASSWORD;
  const numCharacters = process.env.TEST_VALID_EMAIL_CHARACTERS;
  if (!email || !password || !numCharacters) {
    throw new Error("Environment variables not set");
  }

  const player = await game.login(email, password);
  expect(player).toBeInstanceOf(Player);
  expect(player.characters.length).toBe<number>(Number.parseInt(numCharacters));

  // Event should have triggered
  expect(eventHappened).toBe(true);
});

// TODO: Custom server login test? We might be able to use docker.

test("`.G` throws error when missing", () => {
  const game = new Game();
  expect(() => game.G).toThrow();
});

test("`updateG()` works", async () => {
  const game = new Game();

  // Set up EventBus to listen for update
  let eventHappened = false;
  let eventG: GData | undefined = undefined;
  EventBus.once("g_updated", (game, g) => {
    eventHappened = true;
    eventG = g;
  });

  const g = await game.updateG();

  // Should have parsed correctly
  expect(g.version).toBeTruthy();
  expect(g.conditions).toBeTruthy();
  expect(g.monsters).toBeTruthy();
  expect(g.skills).toBeTruthy();

  // `game.G` should reference the same data
  expect(game.G).toBe(g);

  // Event should have triggered and should reference the same data
  expect(eventHappened).toBe(true);
  expect(eventG).toBe(g);
}, 10000);

test("`updateServers()` works", async () => {
  const game = new Game();

  // Set up EventBus to listen for update
  let eventHappened = false;
  let eventServers: XServerInfos[] | undefined = undefined;
  EventBus.once("servers_updated", (game, servers) => {
    eventHappened = true;
    eventServers = servers;
  });

  const servers = await game.updateServers();

  // Should have parsed correctly
  expect(servers.length).toBeGreaterThan(0);

  // Event should have triggered and should reference the same data
  expect(eventHappened).toBe(true);
  expect(eventServers).toBe(servers);
});
