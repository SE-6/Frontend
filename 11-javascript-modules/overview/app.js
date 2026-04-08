import Character from "./Character";
import { log } from "./utils";

const hero = new Character("Bob");
const villain = new Character("Stephen");

const damage = hero.attack(villain);
log(`${hero.name} hits ${villain.name} for ${damage} damage`);
log(`${villain.name} HP: ${villain.health}`);
