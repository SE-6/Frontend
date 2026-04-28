import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import RelatedProducts from './RelatedProducts';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log(id);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error('failed to load product');

        const data = await res.json();
        console.log(data);
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return null;

  return (
    <div>
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <img src={product.image} alt={product.title} width={100} />
      <p>Category: {product.category}</p>

      {/* RELATED PRODUCTS */}
      <RelatedProducts category={product.category} />
    </div>
  );
};

export default ProductPage;
