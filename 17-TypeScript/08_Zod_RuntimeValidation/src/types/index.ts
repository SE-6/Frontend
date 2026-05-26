type User = {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
};

type Products = {
  id: number;
  title: string;
  price: number;
};

const res = await fetch('https://fakestoreapi.com/products/2');
const data = await res.json();
const product = data as Products[]; // trust me, this is a Product!
