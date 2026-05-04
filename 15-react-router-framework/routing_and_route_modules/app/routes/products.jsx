import Products from '../components/Products';

export async function loader() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) throw new Response('Error loading', { status: res.status });

  const products = await res.json();
  return products;
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}

export default function ProductsPage({ loaderData }) {
  return (
    <div>
      <h2>Products</h2>
      <Products products={loaderData} />
    </div>
  );
}

export function ErrorBoundary() {
  return <h2>Something went wrong!</h2>;
}
