import { afterEach, expect, test } from "bun:test";
import type { GData, XServerInfos } from "typed-adventureland";
import EventBus from "../src/EventBus.js";
import Game from "../src/Game.js";
import Player from "../src/Player.js";

afterEach(() => {
  // Clear listeners
  EventBus.removeAllListeners();
});

test("`login()` with invalid credentials throws an error", () => {
  const game = new Game();

  // Set up EventBus to listen for update
  let eventHappened = false;
  EventBus.once("login_failed", (ev_game) => {
    if (game !== ev_game) return; // Different test
    eventHappened = true;
  });

  // Bad login
  expect(game.login("hyprkookeez+test@gmail.com", "this_is_not_my_real_password")).rejects.toThrow();

  // Event should have triggered
  expect(eventHappened).toBe(true);
});

test("`login()` with valid credentials returns a `Player` object", async () => {
  const game = new Game();

  // Set up EventBus to listen for update
  let eventHappened = false;
  EventBus.once("player_created", (player) => {
    if (player.game !== game) return; // Different test
    eventHappened = true;
  });

  const email = process.env.TEST_VALID_EMAIL;
  const password = process.env.TEST_VALID_PASSWORD;
  const numCharacters = process.env.TEST_VALID_EMAIL_CHARACTERS;
  if (
    email === undefined ||
    email === "" ||
    password === undefined ||
    password === "" ||
    numCharacters === undefined ||
    numCharacters === ""
  ) {
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

test("`preparePathfinder()` works, and pathfinder works as expected", async () => {
  const game = new Game();
  await game.updateG();
  const pathfinder = game.preparePathfinder();

  // Should be able to check if points are walkable
  expect(pathfinder.isWalkable("main", 0, 0)).toBe(true);
  expect(pathfinder.isWalkable("main", 200, 20)).toBe(false);

  // Should be able to check if lines are walkable
  expect(pathfinder.canWalkPath("main", -11, -124, 7, 886)).toBe(true);
  expect(pathfinder.canWalkPath("main", 81, -100, 291, 94)).toBe(false);

  // This line incorrectly returned that it was walkable
  expect(pathfinder.isWalkable("main", 399, 1277)).toBe(true);
  expect(pathfinder.isWalkable("main", 399, 1536)).toBe(true);
  expect(pathfinder.canWalkPath("main", 399, 1277, 399, 1300)).toBe(true);
  expect(pathfinder.canWalkPath("main", 399, 1277, 399, 1536)).toBe(false);

  // Should be able to get path across maps
  expect(pathfinder.getPath("main", 0, 0, "spookytown", 0, 0, 100)).toBeArray();
  expect(pathfinder.getPath("main", 0, 0, "spookytown", 0, 0, 1)).toBeArray();

  // These paths were problematic for mrdiamond12312
  expect(pathfinder.canWalkPath("main", -145, -153, 16, -153)).toBe(false);
  expect(pathfinder.getPath("winterland", 420, -2777, "main", 0, 0, 50)).toBeArray();
  expect(pathfinder.getPath("main", -1324, 19, "mforest", 0, 0, 50)).toBeArray();
  expect(pathfinder.getPath("main", -152, -137, "winterland", 0, 0, 50)).toBeArray();

  // This path didn't get close enough to the tunnel door
  const mainToTunnel = pathfinder.getPath("main", 0, 0, "tunnel", -7, 5);
  expect(mainToTunnel).toBeArray();
  const mainToTunnelDoorNode = mainToTunnel![mainToTunnel!.findIndex((node) => node.method === "door") - 1];
  expect(mainToTunnelDoorNode).toBeTruthy();
  const mainToTunnelDoorNodeDistance = Math.hypot(mainToTunnelDoorNode!.x - 535, mainToTunnelDoorNode!.y - 1677);
  expect(mainToTunnelDoorNodeDistance).toBeLessThan(112);

  // This path tried to walk through walls
  expect(pathfinder.canWalkPath("main", 671, 1128, 977, 1101)).toBe(false);
  const beeToBee = pathfinder.getPath("main", 671, 1128, "main", 977, 1101);
  expect(beeToBee).toBeArray();
  expect(beeToBee!.length).toBeGreaterThan(1);
  for (let i = 1; i < beeToBee!.length; i++) {
    const fromNode = beeToBee![i - 1]!;
    const toNode = beeToBee![i]!;
    expect(pathfinder.canWalkPath(fromNode.map, fromNode.x, fromNode.y, toNode.x, toNode.y)).toBe(true);
  }

  // Should be able to escape islands
  expect(pathfinder.getPath("winterland", 865, 430, "main", 0, 0, 50)).toBeArray();

  // These paths was recommended by Crown
  expect(pathfinder.getPath("main", 0, 0, "resort_e", 0, 0, 50)).toBeArray();

  // Test leaving from jail (should use `leave`)
  const jailToMain = pathfinder.getPath("jail", 0, 0, "main", 0, 0);
  expect(jailToMain).toBeArray();
  expect(jailToMain!.some((node) => node.method === "leave")).toBe(true);

  // Test entering instance (should use `enter`)
  const caveToCrypt = pathfinder.getPath("cave", -200, -1300, "crypt", 0, 0);
  expect(caveToCrypt).toBeArray();
  expect(caveToCrypt!.some((node) => node.method === "enter" && node.key === "cryptkey")).toBe(true);

  // Final destination should be moved to
  const mainMovement = pathfinder.getPath("main", 0, 0, "main", 99, 9);
  expect(mainMovement).toBeArray();
  expect(mainMovement!.at(-1)!.x).toBe(99);
  expect(mainMovement!.at(-1)!.y).toBe(9);

  // Movement should be optimal
  expect(mainMovement).toHaveLength(1);
}, 10_000);

test("`updateG()` works", async () => {
  const game = new Game();

  // Set up EventBus to listen for update
  let eventHappened = false;
  let eventG: GData | undefined = undefined;
  EventBus.once("g_updated", (ev_game, g) => {
    if (ev_game !== game) return; // Different test
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
  expect(eventG).toBeDefined();
  expect(eventG!).toBe(g);
}, 10_000);

test("`updateServers()` works", async () => {
  const game = new Game();

  // Set up EventBus to listen for update
  let eventHappened = false;
  let eventServers: XServerInfos[] | undefined = undefined;
  EventBus.once("servers_updated", (ev_game, servers) => {
    if (game !== ev_game) return; // Different test
    eventHappened = true;
    eventServers = servers;
  });

  const servers = await game.updateServers();

  // Should have parsed correctly
  expect(servers.length).toBeGreaterThan(0);

  // Event should have triggered and should reference the same data
  expect(eventHappened).toBe(true);
  expect(eventServers).toBeDefined();
  expect(eventServers!).toBe(servers);
}, 10_000);
