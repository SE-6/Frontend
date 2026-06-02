import { CartBadge, ProductCard } from '@/components';
import { CartProvider } from '@/context';
import type { CartItem } from '@/types';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Cart flow(integration)', () => {
  it('updates badge after adding an item', async () => {
    const item: CartItem = {
      id: 1,
      name: 'Test Product',
      image: 'test.jpg',
      price: 19.99,
    };

    // render both components
    render(
      <CartProvider>
        <CartBadge />
        <ProductCard item={item} />
      </CartProvider>,
    );

    // check the badge if it starts at 0
    const badge = screen.getByLabelText('cart-count');
    expect(badge).toHaveTextContent('0');

    // click add to cart in ProductCard
    await fireEvent.click(
      screen.getByRole('button', { name: /add Test Product/i }),
    );

    // check the cartBadge updated
    expect(badge).toHaveTextContent('1');
  });
});
