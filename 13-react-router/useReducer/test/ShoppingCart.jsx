import { useState } from 'react';

const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Phone', price: 499 },
  { id: 3, name: 'Headphones', price: 99 },
];

const ShoppingCart = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  const addItem = (product) => {
    setItems([...items, product]);
    setTotal(total + product.price);
    setItemCount(itemCount + 1);
  };

  const removeItem = (id) => {
    const index = items.findIndex((i) => i.id === id);
    if (index === -1) return;

    const item = items[index];
    const newItems = [...items.slice(0, index), ...items.slice(index + 1)];

    setItems(newItems);
    setTotal(total - item.price);
    setItemCount(itemCount - 1);
  };

  const clearCart = () => {
    setItems([]);
    setTotal(0);
    setItemCount(0);
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} — ${p.price}
            <button onClick={() => addItem(p)}>Add</button>
          </li>
        ))}
      </ul>

      <h2>Cart ({itemCount} items)</h2>
      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          <ul>
            {items.map((item, i) => (
              <li key={i}>
                {item.name} — ${item.price}
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ${total}</p>
          <button onClick={clearCart}>Clear cart</button>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
