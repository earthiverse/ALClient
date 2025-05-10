import { Character } from "./Character.js";

export class Rogue extends Character {
  public override get ctype(): "rogue" {
    return "rogue";
  }
}

export default Rogue;
