import { beforeAll, expect, test } from "bun:test";
import Game from "../src/Game.js";
import Player from "../src/Player.js";
import Priest from "../src/Priest.js";

let game: Game;
beforeAll(async () => {
  game = new Game();
  await Promise.all([game.updateG(), game.updateServers()]);
});

test("Priest canUse partyheal with enough MP", () => {
  const player = new Player(game, "test", "test");
  const priest = new Priest(player, "test", "priest");

  const mpRequired = game.G.skills.partyheal.mp;
  if (mpRequired === undefined) {
    throw new Error("Partyheal skill does not have MP requirement");
  }

  priest.updateData({
    level: 1,
    mp: mpRequired,
    max_mp: 1_000_000,
    hp: 1_000,
    max_hp: 1_000,
    map: "main",
    in: "main",
    x: 0,
    y: 0,
    s: {},
  });

  expect(priest.canUse("partyheal")).toBe(true);
});

test("priest canUse partyheal fails if not enough MP", () => {
  const player = new Player(game, "test", "test");
  const priest = new Priest(player, "test", "priest");

  const mpRequired = game.G.skills.partyheal.mp;
  if (mpRequired === undefined) {
    throw new Error("Partyheal skill does not have MP requirement");
  }

  priest.updateData({
    level: 1,
    mp: mpRequired - 1,
    max_mp: mpRequired,
    hp: 1_000,
    max_hp: 1_000,
    map: "main",
    in: "main",
    x: 0,
    y: 0,
    s: {},
  });

  expect(priest.canUse("partyheal")).toBe(false);
  expect(priest.canUse("partyheal", { ignoreMp: true })).toBe(true);
});
