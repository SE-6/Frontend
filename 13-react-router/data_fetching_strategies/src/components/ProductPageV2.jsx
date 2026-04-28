import { Suspense } from 'react';
import { useParams } from 'react-router';
import ProductDetailsV2 from './ProductDetailsV2';

// prettier-ignore
const fetchProduct = (id) =>
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json());

// prettier-ignore
const fetchRelated =(category) =>
    fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then((res) => res.json())

const ProductPageV2 = () => {
  const { id } = useParams();

  const productPromise = fetchProduct(id);

  return (
    <Suspense fallback={<p>Loading</p>}>
      {/* <ProductPageV2 promise={productPromise} fetchRelated={fetchRelated} /> */}
      <ProductDetailsV2 promise={productPromise} fetchRelated={fetchRelated} />
    </Suspense>
  );
};

export default ProductPageV2;
