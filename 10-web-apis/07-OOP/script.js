// const character1 = {
//   name: "Titus",
//   health: 100,
//   attack() {
//     console.log(`${this.name} attacks!`);
//   },
// };

// const character2 = {
//   name: "Horus",
//   health: 120,
//   attack() {
//     console.log(`${this.name} attacks!`);
//   },
// };

// --- BLUEPRINT ---
// class Character {
//   static MAX_LEVEL = 100;

//   constructor(name, health) {
//     this.name = name;
//     this.health = health;
//   }

//   attack() {
//     console.log(`${this.name} attacks!`);
//   }

//   describe() {
//     console.log(`${this.name} - HP: ${this.health}!`);
//   }
// }

// Inheritance
// class Mage extends Character {
//   constructor(name, health, mana) {
//     super(name, health);
//     this.mana = mana;
//   }

//   castSpell() {
//     if (this.mana >= 20) {
//       this.mana -= 20;
//       console.log(
//         `${this.name} casts Fireball for 30 damage! Mana left: ${this.mana}`,
//       );
//     } else {
//       console.log(`${this.name} is out of mana!`);
//     }
//   }
// }

class Warrior extends Character {
  constructor(name, health, armor) {
    super(name, health);
    this.armor = armor;
  }

  attack() {
    console.log(`${this.name} swings a greatsword for 40 damage`);
  }

  shieldBash() {
    console.log(`${this.name} bashed with their shield, stunning the enemy`);
  }
}

// const gandalf = new Mage("Gandalf", 80, 100);
// gandalf.health = -9999;
// const conan = new Warrior("Conan", 120, 100);

// gandalf.attack();
// conan.attack();

// const villager = new Character("villager", 50);

// villager.attack();

// gandalf.describe();
// gandalf.attack();

// console.log(Character.MAX_LEVEL);

// Encapsulation - private fields
class Character {
  #health;

  constructor(name, health) {
    this.name = name;
    this.#health = health;
  }

  getHealth() {
    console.log(this.#health);
  }

  takeDamage(amount) {
    this.#health -= amount;
    if (this.#health < 0) this.#health = 0;
    console.log(`${this.name} takes ${amount} damage. HP: ${this.#health}`);
  }

  heal(amount) {
    this.#health += amount;
    console.log(`${this.name} heals for ${amount}. HP: ${this.#health}`);
  }
}

const gandalf = new Character("Gandalf", 30);

gandalf.takeDamage(10);
gandalf.takeDamage(10);
gandalf.heal(200);

// gandalf.#health = 999999;
