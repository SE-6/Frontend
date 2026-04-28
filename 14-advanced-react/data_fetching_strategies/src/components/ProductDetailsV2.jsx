import { Suspense, use } from 'react';
import RelatedProductsV2 from './RelatedProductsV2';

const ProductDetailsV2 = ({ promise, fetchRelated }) => {
  const product = use(promise);

  const relatedPromise = fetchRelated(product.category);

  return (
    <div>
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <img src={product.image} alt={product.title} width={100} />

      <Suspense fallback={<p>Loading related products....</p>}>
        <RelatedProductsV2 promise={relatedPromise} />
      </Suspense>
    </div>
  );
};

export default ProductDetailsV2;
