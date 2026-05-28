import { expect, test, describe } from 'vitest';
import { calculateTotal } from '../checkout';

describe('calculateTotal', () => {
  test('calcualtes correct total for UK', () => {
    const result = calculateTotal(100, 'UK');
    // console.log('result for UK:', result);
    expect(result).toBe(120);
  });

  test('calculates correct total for FR', () => {
    const result = calculateTotal(100, 'FR');
    expect(result).toBe(120);
  });

  test('calculates correct total for DE', () => {
    const result = calculateTotal(100, 'DE');
    expect(result).toBe(119);
  });
});
