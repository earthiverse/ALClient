import { Character } from "./Character.js";

export class Merchant extends Character {
  public override get ctype(): "merchant" {
    return "merchant";
  }
}

export default Merchant;
