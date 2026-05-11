'use client';

import { changeQty, clearCart } from '@/lib/cart';
import { useEffect, useState } from 'react';

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart') || '[]');
    Promise.resolve().then(() => setCart(stored));
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <h2 className='page-title'>Cart {itemCount > 0 && `(${itemCount})`}</h2>
      {cart.length === 0 ? (
        <p className='empty'>Your cart is empty</p>
      ) : (
        <>
          <div className='cart-list'>
            {cart.map((item) => (
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
                    -
                  </button>
                </div>

                <span className='qty'>{item.quantity}</span>

                <div className='qty-controls'>
                  <button
                    className='btn-qty'
                    onClick={() => setCart(changeQty(cart, item.id, +1))}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className='cart-summary'>
            <span>Items: {itemCount}</span>
            <strong>Total: ${total.toFixed(2)}</strong>
            <button
              className='btn btn-checkout'
              onClick={() => {
                setCart(clearCart());
                alert('Thank you for your order!');
              }}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </>
  );
}
