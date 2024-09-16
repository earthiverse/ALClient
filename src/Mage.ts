import { Character } from "./Character.js";

export class Mage extends Character {
  public override get ctype(): "mage" {
    return "mage";
  }
}

export default Mage;
