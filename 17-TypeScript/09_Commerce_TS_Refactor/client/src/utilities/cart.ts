import type { CartItem, Product } from '@/schemas';

export const addToCart = (product: Product): void => {
  const existing: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
  const found = existing.find((item) => item.id === product.id);

  const updated: CartItem[] = found
    ? existing.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      )
    : [...existing, { ...product, quantity: 1 }];

  localStorage.setItem('cart', JSON.stringify(updated));
};

export const changeQty = (
  cart: CartItem[],
  id: number,
  delta: number,
): CartItem[] => {
  const updated = cart
    .map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + delta } : item,
    )
    .filter((item) => item.quantity > 0);

  localStorage.setItem('cart', JSON.stringify(updated));
  return updated;
};

export const removeFromCart = (cart: CartItem[], id: number): CartItem[] => {
  const updated = cart.filter((item) => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(updated));
  return updated;
};

export const clearCart = (): CartItem[] => {
  localStorage.setItem('cart', JSON.stringify([]));
  return [];
};
