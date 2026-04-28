import { useEffect, useState } from 'react';

const RelatedProducts = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRelated = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/category/${category}`,
        );

        if (!res.ok) throw new Error('Failed to load related products');

        const data = await res.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRelated();
  }, [category]);

  return (
    <div>
      <h2>Related Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.title} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedProducts;
