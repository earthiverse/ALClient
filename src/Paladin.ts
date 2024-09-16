import { Character } from "./Character.js";

export class Paladin extends Character {
  public override get ctype(): "paladin" {
    return "paladin";
  }
}

export default Paladin;
