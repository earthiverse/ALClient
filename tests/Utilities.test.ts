import Game from "../src/Game.js";
import Utilities from "../src/Utilities.js";

let game: Game;
beforeAll(async () => {
  game = new Game();
  await Promise.all([game.updateG(), game.updateServers()]);
}, 30_000);

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
