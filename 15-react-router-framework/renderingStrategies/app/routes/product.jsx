export async function clientLoader({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();
  return product;
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}

export default function Product({ loaderData }) {
  return (
    <div>
      <h2>{loaderData.title}</h2>
      <p>${loaderData.price}</p>
      <img src={loaderData.image} alt={loaderData.title} width={200} />
    </div>
  );
}

export function ErrorBoundary() {
  return <p>Product not found</p>;
}
