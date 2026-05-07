export default async function Products() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) throw new Error('failed to fetch products');
  const products = await res.json();

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
