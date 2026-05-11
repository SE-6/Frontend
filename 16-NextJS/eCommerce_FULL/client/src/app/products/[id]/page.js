import { notFound } from 'next/navigation';

export default async function Product({ params }) {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/products/${id}`, {
    cache: 'no-store',
  });

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const product = await res.json();

  return (
    <div>
      <h2>PRODUCT</h2>
      <img src={product.image} alt={product.title} className='card-img' />
    </div>
  );
}
