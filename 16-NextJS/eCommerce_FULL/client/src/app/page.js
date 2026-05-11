import ProdcutList from '@/components/ProdcutList';

export default async function Home() {
  const res = await fetch('http://localhost:5000/products', {
    cache: 'no-store',
  });

  const products = await res.json();

  return <ProdcutList products={products} />;
}
