import { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) throw new Error('Fetch failed');

        const data = await res.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/product/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
