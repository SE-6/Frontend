import { use } from 'react';

const RelatedProductsV2 = ({ promise }) => {
  const products = use(promise);

  return (
    <div>
      <h2>Related Product</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.title} - {p.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedProductsV2;
