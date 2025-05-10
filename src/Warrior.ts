import { Character } from "./Character.js";

export class Warrior extends Character {
  public override get ctype(): "warrior" {
    return "warrior";
  }
}

export default Warrior;
