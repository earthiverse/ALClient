import { beforeAll, expect, test } from "bun:test";
import Game from "../src/Game.js";
import Utilities from "../src/Utilities.js";

let game: Game;
beforeAll(async () => {
  game = new Game();
  await Promise.all([game.updateG(), game.updateServers()]);
});

test("calculatePathCost() returns expected values", () => {
  expect(
    Utilities.calculatePathCost([
      {
        map: "main",
        x: 0,
        y: 0,
        method: "move",
      },
      {
        map: "main",
        x: 100,
        y: 0,
        method: "move",
      },
    ]),
  ).toBe(2);

  // TODO: More paths, with different methods
});

test("getMonsterSpawns() returns expected values", () => {
  const gooSpawns = Utilities.getMonsterSpawns(game.G, "goo");
  expect(gooSpawns).toBeTruthy();
  expect(gooSpawns).toHaveLength(2);
});

test("getItemGrade() returns expected values", () => {
  expect(Utilities.getItemGrade({ name: "5bucks" }, game.G)).toBeUndefined();

  expect(Utilities.getItemGrade({ name: "bow", level: 0 }, game.G)).toBe(0);
  expect(Utilities.getItemGrade({ name: "bow", level: 1 }, game.G)).toBe(0);
  expect(Utilities.getItemGrade({ name: "bow", level: 2 }, game.G)).toBe(0);
  expect(Utilities.getItemGrade({ name: "bow", level: 3 }, game.G)).toBe(0);
  expect(Utilities.getItemGrade({ name: "bow", level: 4 }, game.G)).toBe(0);
  expect(Utilities.getItemGrade({ name: "bow", level: 5 }, game.G)).toBe(0);
  expect(Utilities.getItemGrade({ name: "bow", level: 6 }, game.G)).toBe(0);
  expect(Utilities.getItemGrade({ name: "bow", level: 7 }, game.G)).toBe(1);
  expect(Utilities.getItemGrade({ name: "bow", level: 8 }, game.G)).toBe(1);
  expect(Utilities.getItemGrade({ name: "bow", level: 9 }, game.G)).toBe(2);
  expect(Utilities.getItemGrade({ name: "bow", level: 10 }, game.G)).toBe(3);
  expect(Utilities.getItemGrade({ name: "bow", level: 11 }, game.G)).toBe(3);
  expect(Utilities.getItemGrade({ name: "bow", level: 12 }, game.G)).toBe(4);
  expect(Utilities.getItemGrade({ name: "bow", level: 13 }, game.G)).toBe(4);

  expect(Utilities.getItemGrade({ name: "ringsj", level: 0 }, game.G)).toBe(0);
  expect(Utilities.getItemGrade({ name: "ringsj", level: 1 }, game.G)).toBe(0);
  expect(Utilities.getItemGrade({ name: "ringsj", level: 2 }, game.G)).toBe(0);
  expect(Utilities.getItemGrade({ name: "ringsj", level: 3 }, game.G)).toBe(1);
  expect(Utilities.getItemGrade({ name: "ringsj", level: 4 }, game.G)).toBe(1);
  expect(Utilities.getItemGrade({ name: "ringsj", level: 5 }, game.G)).toBe(2);
  expect(Utilities.getItemGrade({ name: "ringsj", level: 6 }, game.G)).toBe(3);
  expect(Utilities.getItemGrade({ name: "ringsj", level: 7 }, game.G)).toBe(4);
});

test("getSpiralOffsets() returns expected values", () => {
  let offsets = [...Utilities.getSpiralOffsets(1, 1)];
  expect(offsets).toEqual([
    [0, 0],
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
    [-1, -1],
    [0, -1],
    [1, -1],
  ]);

  offsets = [...Utilities.getSpiralOffsets(1, 2)];
  expect(offsets).toEqual([
    [0, 0],
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
    [-1, -1],
    [0, -1],
    [1, -1],
    [2, -1],
    [2, 0],
    [2, 1],
    [2, 2],
    [1, 2],
    [0, 2],
    [-1, 2],
    [-2, 2],
    [-2, 1],
    [-2, 0],
    [-2, -1],
    [-2, -2],
    [-1, -2],
    [0, -2],
    [1, -2],
    [2, -2],
  ]);

  offsets = [...Utilities.getSpiralOffsets(5, 5)];
  expect(offsets).toEqual([
    [0, 0],
    [5, 0],
    [5, 5],
    [0, 5],
    [-5, 5],
    [-5, 0],
    [-5, -5],
    [0, -5],
    [5, -5],
  ]);

  offsets = [...Utilities.getSpiralOffsets(5, 10)];
  expect(offsets).toEqual([
    [0, 0],
    [5, 0],
    [5, 5],
    [0, 5],
    [-5, 5],
    [-5, 0],
    [-5, -5],
    [0, -5],
    [5, -5],
    [10, -5],
    [10, 0],
    [10, 5],
    [10, 10],
    [5, 10],
    [0, 10],
    [-5, 10],
    [-10, 10],
    [-10, 5],
    [-10, 0],
    [-10, -5],
    [-10, -10],
    [-5, -10],
    [0, -10],
    [5, -10],
    [10, -10],
  ]);
});

test("getClosestPointOnSegment() returns expected values", () => {
  // Half way between (0,0) -> (100,0)
  expect(Utilities.getClosestPointOnSegment({ x: 50, y: 20 }, { x: 0, y: 0 }, { x: 100, y: 0 })).toEqual({
    x: 50,
    y: 0,
  });

  // Before starting point (should go to start)
  expect(Utilities.getClosestPointOnSegment({ x: -20, y: 10 }, { x: 0, y: 0 }, { x: 100, y: 0 })).toEqual({
    x: 0,
    y: 0,
  });

  // Past ending point (should go to end)
  expect(Utilities.getClosestPointOnSegment({ x: 120, y: 10 }, { x: 0, y: 0 }, { x: 100, y: 0 })).toEqual({
    x: 100,
    y: 0,
  });

  // Start and end are the same point
  expect(Utilities.getClosestPointOnSegment({ x: 10, y: 10 }, { x: 0, y: 0 }, { x: 0, y: 0 })).toEqual({ x: 0, y: 0 });
});
