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
