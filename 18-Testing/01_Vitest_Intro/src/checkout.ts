import { VATRates } from './types';

export const calculateTotal = (
  net: number,
  country: keyof typeof VATRates,
): number => {
  return net * (1 + VATRates[country]);
};

// 100 * 1.20 = 120
// 100 * 1.20 * 1.20 = 144
