'use client';

import { useState } from 'react';
import Link from 'next/link';
import { addToCart } from '@/utilities/cart';
import { Product } from '@/schemas';

type ProductListProps = {
  products: Product[];
  // typed props
};

export default function ProductList({ products }: ProductListProps) {
  const [toast, setToast] = useState<string | null>(null);
  // typed state
  // string | null => either a message or nothing

  const showToast = (message: string): void => {
    setToast(message);
    setTimeout(() => setToast(null), 2000);
  };

  return (
    <>
      <h1 className='page-title'>All Products</h1>
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
              className='btn btn-add'
              onClick={() => {
                addToCart(product);
                showToast(`${product.title.slice(0, 30)}... added`);
              }}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
      {toast && <div className='toast'>{toast}</div>}
    </>
  );
}
