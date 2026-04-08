import { rollDice } from "./utils";

export default class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }

  attack(target) {
    const damage = rollDice(20);
    target.health -= damage;
    return damage;
  }
}
