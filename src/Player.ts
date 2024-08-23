import { type Game } from "./Game.js";

export class Player {
  /**
   * Your user ID is a string of numbers.
   * If your characters are not private, their `owner` will be this value.
   */
  public readonly userId: string;

  /**
   * Treat this variable like a password!
   * The userId and userAuth together allow access to an account!
   *
   * You can remove old unused auths:
   *
   * 1. Visit https://adventure.land (or custom server website)
   * 2. Log in
   * 3. Click Email and Account (top left)
   * 4. Click Logout Everywhere
   */
  public readonly userAuth: string;

  public readonly game: Game;

  constructor(userId: string, userAuth: string, game: Game) {
    this.userId = userId;
    this.userAuth = userAuth;
    this.game = game;
  }
}

export default Player;
