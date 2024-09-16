import Character from "./Character.js";

export class Ranger extends Character {
  public override get ctype(): "ranger" {
    return "ranger";
  }
}

export default Ranger;
