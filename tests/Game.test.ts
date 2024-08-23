import Game from "../src/Game.js";
import Player from "../src/Player.js";

test("`login` with invalid credentials throws an error", async () => {
  const AL = new Game();

  // Bad login
  await expect(() =>
    AL.login("hyprkookeez+test@gmail.com", "this_is_not_my_real_password")
  ).rejects.toThrow();
});

test("`login` with valid credentials returns a `Player` object", async () => {
  const AL = new Game();

  const email = process.env.TEST_VALID_EMAIL;
  const password = process.env.TEST_VALID_PASSWORD;
  if (!email || !password) {
    throw new Error("Environment variables not set");
  }

  const player = await AL.login(email, password);
  expect(player).toBeInstanceOf(Player);
});

// TODO: Custom server login test? We might be able to use docker.
