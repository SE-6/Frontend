// const input = document.querySelector('input') as HTMLInputElement;
// input.value = 'hello';

let someValue: unknown = 'hello there';
let anotherValue: unknown = 'General Kenobi!';

// let greet1 = <string>someValue;
// console.log(greet1.toUpperCase());

let greet2 = anotherValue as string;
console.log(greet2.toUpperCase());

type Product = {
  id: number;
  title: string;
  price: number;
};

async function fetchProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = (await res.json()) as Product[];

  products.forEach((product) => {
    console.log(`${product.title} - $${product.price}`);
  });
}

// fetchProducts();
