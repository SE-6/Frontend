// BASICS - PRIMITIVE TYPES

let firstName: string = 'Alice';
let age: number = 25;
let isActive: boolean = true;

let language: string = 'TypeScript';
// language = 42; ❌ Type Error

// TYPE INFERENCE => TS figures it out

let city = 'London'; // inferred as string
let score = 30.23123; // inferred as number

console.log(city.toUpperCase());
console.log(score.toFixed(2));
// console.log(city.toFixed(2)) ❌ Type Error

let data;

data = 'hello';
data = 30;

// -----
let something: string;

// something = true; ❌ Type Error

// FUNCTIONS

function add2(a: number, b: number) {
  return a + b;
}

console.log(add2(1, 2));
// console.log(add2('1', '2')); ❌ Type Error

function greet(name: string): string {
  return `Hello, ${name}`;
}

console.log(greet('Moritz'));

function logMessage(message: string): void {
  console.log(message);
  // void means: this function doesn't return a value
}

function isOldEnough(age: number): string {
  if (age >= 18) {
    return 'You are old enough';
  } else {
    return 'you are too young';
  }
}

function example(input: string): number {
  return input.length;
}

console.log(example('Leila'));
