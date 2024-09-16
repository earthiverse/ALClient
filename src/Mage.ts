import type { ClassKey } from "typed-adventureland";
import { Character } from "./Character.js";

export class Mage extends Character {
  protected override _ctype: ClassKey = "mage";
}

export default Mage;
