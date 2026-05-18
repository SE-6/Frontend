abstract class Notify {
  constructor(public recipient: string) {}

  abstract send(): void; // => every subclass must implement this

  log(): void {
    console.log(`Sending notification to ${this.recipient}`);
  }
}

class EmailNotification extends Notify {
  send(): void {
    console.log(`Email sent to ${this.recipient}`);
  }
}

class SMSNotification extends Notify {
  send(): void {
    console.log(`SMS sent to ${this.recipient}`);
  }
}

const email = new EmailNotification('alice@example.com');
email.log();
email.send();

const sms = new SMSNotification('+491234567');
sms.log();
sms.send();

// new Notify()

// abstract class Animal {
//   private id: number = 1;
//   protected name: string = 'Doggo name';
//   abstract makeSound(): void;
// }

// class Dog extends Animal {
//   makeSound(): void {
//     console.log(this.name);
//   }
// }

// const doggo = new Dog();
// doggo.makeSound();

interface Drawable {
  draw(): void;
}

interface Resizible {
  resize(factor: number): void;
}

class Circle implements Drawable {
  draw(): void {
    console.log('Drawing a circle');
  }
}

class Square implements Drawable {
  draw(): void {
    console.log('Drawing a square');
  }
}

class Canvas implements Drawable, Resizible {
  draw(): void {
    console.log('drawing...');
  }

  resize(factor: number): void {
    console.log(`Resizing by ${factor}`);
  }
}

const test = new Canvas();
test.draw();
test.resize(10);

abstract class Tool {
  constructor(public name: string) {}

  abstract use(): void; // subclasses must implent this!

  desribe(): void {
    console.log(`${this.name} is a tool`); // can be shared!
  }
}

class Hammer extends Tool {
  use(): void {
    console.log('hammering nails!');
  }
}

const hammer = new Hammer('Hammer');

hammer.desribe();
hammer.use();
