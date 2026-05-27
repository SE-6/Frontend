import ProductList from '@/components/ProductList';
import { Product, ProductSchema } from '@/schemas';
import { z } from 'zod/v4';

export default async function Home() {
  const res = await fetch('http://localhost:5000/products', {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Failed to fetch prodcuts');

  const rawData = await res.json();

  const { success, data, error } = z.array(ProductSchema).safeParse(rawData);

  if (!success) {
    throw new Error(`Invalid data from API: ${error.message}`);
  }

  const products: Product[] = data;

  return <ProductList products={products} />;
}
