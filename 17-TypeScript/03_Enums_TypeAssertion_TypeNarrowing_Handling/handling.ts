// OPTIONAL CHAINING
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

// Nullish Coalescing-Operator (??)
// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing

type User = {
  name: string;
  address?: {
    street: string;
    ctiy: string;
  };
};

const user: User = { name: 'Alice' };

// console.log(user.address?.street);
// console.log(user.address.street);

const street = user.address?.street ?? 'Street not provided';
// console.log(street);

const count = 0; // 0 is falsy

// console.log(count || 'no count');
// console.log(count ?? 'no count at this point');

// export {};

// try {
//   const res = await fetch('https://fakestoreapi.com/products');
//   const products = (await res.json()) as Product[];
// } catch (error) {
//   if (error instanceof Error) {
//     console.error('something went wrong', error.message);
//   } else {
//     console.error('An unexpected error happened');
//   }
// }

let a: any = 'hello'; // turns off TS completely,  avoid it
console.log(a.toUpperCase());

let b: unknown = 'hello'; // forces you to narrow first, prefer this

if (typeof b === 'string') {
  console.log(b.toUpperCase());
}
