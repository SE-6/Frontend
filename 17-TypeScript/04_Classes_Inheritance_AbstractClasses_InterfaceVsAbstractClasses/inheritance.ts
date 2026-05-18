class ContentCreator {
  constructor(public username: string) {}

  post(): void {
    console.log(`${this.username} posts something!`);
  }
}

class Youtuber extends ContentCreator {
  post(): void {
    console.log(`${this.username} uploads a new video!`);
  }
}

class Blogger extends ContentCreator {
  post(): void {
    console.log(`${this.username} publishes a new article!`);
  }
}

const creator = new Youtuber('devGuru');
// creator.post();

const blogger = new Blogger('techWriter');
// blogger.post();

class GameCharacter {
  protected energy: number = 100;

  charge(amount: number): void {
    this.energy += amount;
  }

  showEnergy(): void {
    console.log(`${this.energy} energy remaining`);
  }
}

class Mage extends GameCharacter {
  castSpell(): void {
    if (this.energy >= 20) {
      this.energy -= 20;
      console.log('spell cast!');
    } else {
      console.log('not enough energy');
    }
  }
}

const wizard = new Mage();

// wizard.showEnergy();
// wizard.charge(10);
// wizard.showEnergy();

wizard.castSpell();
wizard.showEnergy();

// wizard.energy
