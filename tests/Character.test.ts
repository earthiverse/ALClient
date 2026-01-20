import Character from "../src/Character.js";
import Game from "../src/Game.js";
import Player from "../src/Player.js";

let game: Game;
beforeAll(async () => {
  game = new Game();
  await Promise.all([game.updateG(), game.updateServers()]);
}, 30_000);

test("canSell() returns true when expected", () => {
  // Mock a character
  const player = new Player(game, "test", "test");
  const character = new Character(player, "test", "test");

  // Can sell in town
  character.updateData({
    map: "main",
    in: "main",
    items: [null],
    x: 0,
    y: 0,
  });

  expect(character.canSell()).toBe(true);

  // Near goos, can sell to the NPC that sells merchant stands
  character.updateData({
    x: 0,
    y: 800,
  });
  expect(character.canSell()).toBe(true);

  // Far away if you have a computer
  character.updateData({
    map: "cyberland",
    in: "cyberland",
    x: 0,
    y: 0,
    items: [{ name: "computer" }],
  });
  expect(character.canSell()).toBe(true);
});

test("canSell() returns false when expected", () => {
  // Mock a character
  const player = new Player(game, "test", "test");
  const character = new Character(player, "test", "test");

  // In cyberland
  character.updateData({
    map: "cyberland",
    in: "cyberland",
    x: 0,
    y: 0,
    items: [null],
  });

  expect(character.canSell()).toBe(false);

  // In bank, even if you have a computer
  character.updateData({
    map: "bank",
    in: "bank",
    x: 0,
    y: -50,
    items: [{ name: "computer" }],
  });
  expect(character.canSell()).toBe(false);
});

test("canUpgrade() returns true when expected", () => {
  // Mock a character
  const player = new Player(game, "test", "test");
  const character = new Character(player, "test", "test");

  // Can upgrade in town
  character.updateData({
    map: "main",
    in: "main",
    items: [null],
    x: 0,
    y: 0,
  });

  expect(character.canUpgrade()).toBe(true);

  // Far away if you have a computer
  character.updateData({
    map: "cyberland",
    in: "cyberland",
    x: 0,
    y: 0,
    items: [{ name: "computer" }],
  });
  expect(character.canUpgrade()).toBe(true);
});

test("canUpgrade() returns false when expected", () => {
  // Mock a character
  const player = new Player(game, "test", "test");
  const character = new Character(player, "test", "test");

  // In cyberland
  character.updateData({
    map: "cyberland",
    in: "cyberland",
    x: 0,
    y: 0,
    items: [null],
  });

  expect(character.canUpgrade()).toBe(false);

  // In bank, even if you have a computer
  character.updateData({
    map: "bank",
    in: "bank",
    x: 0,
    y: -50,
    items: [{ name: "computer" }],
  });
  expect(character.canUpgrade()).toBe(false);
});
