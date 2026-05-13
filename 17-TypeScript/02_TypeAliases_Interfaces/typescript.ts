// ARRAYS

const scores2: number[] = [95, 87, 100];

const names: string[] = [
  'Yusif',
  'Moritz',
  'Masih',
  'Jochen',
  'Ali',
  'Leila',
  'Andrew',
];

const cities: string[] = ['London', 'Berlin'];
// cities.push(50); // ❌ Type Error

const flags: Array<boolean> = [true, false, true];
// console.log(flags);

// TUPLES
const user: [string, number] = ['Alice', 30];

let result: [boolean, string];

result = [true, 'Alice'];
// result = ['string', true];   ❌ Type Error

const entry: [string, number] = ['Alice', 50];

// OBJECT TYPES

const person: { name: string; age: number } = {
  name: 'Alice',
  age: 30,
};

// person.address =   ❌ Error

const product: { name: string; description?: string } = {
  name: 'laptop',
  // description: 'test',
};

// optional chaining => returns undefined instead of crashing!
console.log(product.description?.toUpperCase());

// nullish coalescing => provide fallback
console.log(product.description ?? 'no description available');

// traditional check
if (product.description) {
  console.log(product.description.toUpperCase());
}

const settings: { readonly theme: string } = { theme: 'dark' };
// settings.theme = 'light';

const users2: { name: string; age: number }[] = [
  { name: 'Alice', age: 30 },
  { name: 'Jane', age: 25 },
];

users2.forEach((user) => {
  console.log(`${user.name} is ${user.age} years old`);
});

users2.push({ name: 'Jochen', age: 25 });

// TYPE ALIASES & INTERFACES
// const product1: { id: number; name: string; price: number } = {
//   id: 1,
//   name: 'Headphones',
//   price: 50,
// };

// const product2: { id: number; name: string; price: number } = {
//   id: 2,
//   name: 'Keyboard',
//   price: 50,
// };

// const product3: { id: number; name: string; price: number } = {
//   id: 3,
//   name: 'Monitor',
//   price: 250,
// };

type Product = {
  id: number;
  name: string;
  price: number;
};

// type Product = {
//   stock: number;
// };

const product4: Product = { id: 1, name: 'Headphones', price: 50 };
const product5: Product = { id: 2, name: 'Keyboard', price: 50 };
const product6: Product = { id: 3, name: 'Monitor', price: 250 };

type ProductList = Product[];

const products: ProductList = [
  { id: 1, name: 'soemthing', price: 10 },
  { id: 2, name: 'soemthingelse', price: 20 },
];

// INTERFACES

// interface User {
//   name: string;
//   email: string;
// }

// interface User {
//   age: number;
// }

// const alice: User = {
//   name: 'Alice',
//   email: 'alice@mail.com',
//   age: 30,
// };

interface User {
  name: string;
  email: string;
}

// interface Admin {
//   name: string;
//   email: string;
//   role: 'admin';
// }

// interface Staff {
//   name: string;
//   email: string;
//   role: 'staff';
// }

interface Admin extends User {
  role: 'admin';
}

interface Staff extends User {
  role: 'staff';
}

// const admin: Admin = {
//   name: 'Sarah',
//   email: 'sarah@sarah.com',
//   role: 'admin',
// };
// const staff: Staff = {
//   name: 'Anoj',
//   email: 'anoj@anoj.com',
//   role: 'staff',
// };

// console.log(admin);
// console.log(staff);

// Function return types and optional/default params

function add(a: number, b: number): number {
  return a + b;
}

// console.log(add(5, 5));

function logMessage(message: string, userId?: number): void {
  console.log(`${message} ${userId ? `from user ${userId}` : ''}`);
}

// logMessage('Hello there');
// logMessage('something', 4);

function greetUser(name: string = 'guest'): string {
  return `Welcome, ${name}`;
}

// console.log(greetUser());
// console.log(greetUser('Moritz'));

type Greeter = (name: string) => string;

const greet: Greeter = (name) => `Hello, ${name}`;
console.log(greet('Alice'));
