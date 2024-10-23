import EventBus from "../src/EventBus.js";
import Game from "../src/Game.js";
import Player from "../src/Player.js";

let game: Game;
let player: Player;
beforeAll(async () => {
  game = new Game();

  const email = process.env.TEST_VALID_EMAIL;
  const password = process.env.TEST_VALID_PASSWORD;
  if (email === undefined || email === "" || password === undefined || password === "") {
    throw new Error("Environment variables not set");
  }
  player = await game.login(email, password);
});

beforeEach(() => {
  EventBus.removeAllListeners();
});

test("`updateCharacters()` works", async () => {
  // Set up EventBus to listen for update
  let eventHappened = false;
  let eventCharacters: Player["characters"] | undefined = undefined;
  EventBus.once("characters_updated", (game, characters) => {
    eventHappened = true;
    eventCharacters = characters;
  });

  const characters = await player.updateCharacters();

  const numCharacters = process.env.TEST_VALID_EMAIL_CHARACTERS;
  if (numCharacters === undefined || numCharacters === "") {
    throw new Error("Environment variables not set");
  }

  // Should have parsed correctly
  expect(characters.length).toBe<number>(Number.parseInt(numCharacters));
  expect(characters[0]?.level).toBeGreaterThan(0);

  // `player.characters` should reference the same data
  expect(player.characters).toBe(characters);

  // Event should have triggered and should reference the same data
  expect(eventHappened).toBe(true);
  expect(eventCharacters).toBe(characters);
}, 10000);
