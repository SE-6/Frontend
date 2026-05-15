// function printValue(value: string | number) {
//   console.log(value.toUpperCase());
// }

function printValue(value: string | number): void {
  if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

// printValue('hello');
// printValue(3.523123123123);

function greet(name?: string): void {
  if (name) {
    console.log(`Hello, ${name}`);
  } else {
    console.log('Hello, stranger!');
  }
}

// greet('Alice');
// greet();

// type Dog = { bark: () => void };
// type Cat = { meow: () => void };

// function speak(pet: Dog | Cat) {
//   if ('bark' in pet) {
//     pet.bark();
//   } else {
//     pet.meow();
//   }
// }

// const dog: Dog = { bark: () => console.log('Woof!') };
// const cat: Cat = { meow: () => console.log('Meow!') };

// speak(dog);
// speak(cat);

type Dog = { kind: 'dog'; bark: () => void };
type Cat = { kind: 'cat'; moew: () => void };

function speak(pet: Dog | Cat): void {
  if (pet.kind === 'dog') {
    pet.bark();
  } else {
    pet.moew();
  }
}

function formatDate(value: Date | string): string {
  if (value instanceof Date) {
    return value.toLocaleDateString();
  } else {
    return value.trim();
  }
}

console.log(formatDate(new Date()));
console.log(formatDate('              hello             '));
