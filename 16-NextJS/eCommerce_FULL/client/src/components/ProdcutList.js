'use client';

import Link from 'next/link';
import { addToCart } from '@/lib/cart';
import { useState } from 'react';

export default function ProdcutList({ products }) {
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 2000);
  };

  return (
    <div>
      <h2 className='page-title'>Products</h2>
      <div className='product-grid'>
        {products.map((product) => (
          <div key={product.id} className='card'>
            <Link href={`/products/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className='card-img'
              />
            </Link>

            <span className='category'>{product.category}</span>
            <span className='card-title'>{product.title}</span>
            <span className='price'>${product.price}</span>

            <button
              onClick={() => {
                addToCart(product);
                showToast(`${product.title} added to cart`);
              }}
              className='btn btn-add'
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
      {toast && <div className='toast'>{toast}</div>}
    </div>
  );
}
