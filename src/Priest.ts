import Character from "./Character.js";

export class Priest extends Character {
  public override get ctype(): "priest" {
    return "priest";
  }
}

export default Priest;
