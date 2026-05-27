'use client';

import { useState, useEffect } from 'react';

import type { CartItem } from '@/schemas';
import { changeQty, clearCart, removeFromCart } from '@/utilities/cart';

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  // Typing State =>
  // TS knows cart is an array of CartItem objects
  // each item has: id, title, price, image, category, quantity

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart') || '[]');
    Promise.resolve().then(() => setCart(stored));
  }, []);

  // total: price x quantity for each item, summed
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // itemCount: sum of all quantities
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <h1 className='page-title'>Cart {itemCount > 0 && `(${itemCount})`}</h1>

      {cart.length === 0 ? (
        <p className='empty'>Your cart is empty.</p>
      ) : (
        <>
          <div className='cart-list'>
            {cart.map((item: CartItem) => (
              <div key={item.id} className='cart-item'>
                <img src={item.image} alt={item.title} className='cart-img' />
                <div className='cart-item-info'>
                  <p className='cart-item-title'>{item.title}</p>
                  <p className='cart-item-price'>${item.price}</p>
                </div>
                <div className='qty-controls'>
                  <button
                    className='btn-qty'
                    onClick={() => setCart(changeQty(cart, item.id, -1))}
                  >
                    −
                  </button>
                  <span className='qty'>{item.quantity}</span>
                  <button
                    className='btn-qty'
                    onClick={() => setCart(changeQty(cart, item.id, +1))}
                  >
                    +
                  </button>
                </div>
                <button
                  className='btn btn-remove'
                  onClick={() => setCart(removeFromCart(cart, item.id))}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className='cart-summary'>
            <span>Items: {itemCount}</span>
            <strong>Total: ${total.toFixed(2)}</strong>
            <button
              className='btn btn-checkout'
              onClick={() => setCart(clearCart())}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </>
  );
}
