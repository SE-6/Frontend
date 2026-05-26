import { useEffect, useState } from 'react';
import { z } from 'zod/v4';
import { ProductSchema, type Product } from '../schemas';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) throw new Error('failed to fetch products');

        const resData = await res.json();

        const { data, error, success } = z
          .array(ProductSchema)
          .safeParse(resData);

        if (!success) throw new Error(z.prettifyError(error));
        setProducts(data);
      } catch (error: unknown) {
        if (error instanceof Error) setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.title} - ${product.price}
        </li>
      ))}
    </ul>
  );
};

export default Products;
