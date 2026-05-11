// addToCart:
// 1. Read current cart from localStorage
// 2. Check if product already exists in cart
// 3. If yes => increase quantity by 1
// 4. If no  => add product with quantity: 1
// 5. Save updated cart back to localStorage
export const addToCart = (product) => {
  const existing = JSON.parse(localStorage.getItem('cart') || '[]');
  const found = existing.find((item) => item.id === product.id);

  const updated = found
    ? existing.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      )
    : [...existing, { ...product, quantity: 1 }];

  localStorage.setItem('cart', JSON.stringify(updated));
};

// changeQty:
// 1. Find item by id, apply delta (+1 or -1) to quantity
// 2. Filter out items where quantity dropped to 0 (auto-remove)
// 3. Save to localStorage and return updated cart
export const changeQty = (cart, id, delta) => {
  const updated = cart
    .map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + delta } : item,
    )
    .filter((item) => item.quantity > 0);

  localStorage.setItem('cart', JSON.stringify(updated));
  return updated;
};

// removeFromCart:
// 1. Filter out the item with the given id
// 2. Save to localStorage and return updated cart
export const removeFromCart = (cart, id) => {
  const updated = cart.filter((item) => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(updated));
  return updated;
};

// clearCart:
// 1. Set cart to empty array in localStorage
// 2. Return empty array
export const clearCart = () => {
  localStorage.setItem('cart', JSON.stringify([]));
  return [];
};
