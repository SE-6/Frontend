import { prerender } from 'react-dom/static';

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,

  // async prerender() {
  //   return ['/', '/about', 'ssr-demo'];
  // },

  async prerender() {
    const products = [1, 2, 3, 4, 5];
    return products.map((p) => `products-ssr/${p}`);
  },
};
