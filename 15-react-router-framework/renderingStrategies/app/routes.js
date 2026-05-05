import { index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.jsx'),
  route('/csr-demo', 'routes/csr-demo.jsx'),
  route('/ssr-demo', 'routes/ssr-demo.jsx'),
  route('/about', 'routes/about.jsx'),
  route('/add-product', 'routes/add-product.jsx'),
  route('/add-product-ssr', 'routes/add-product-ssr.jsx'),
  route('/products/:id', 'routes/product.jsx'),
  route('/products-ssr/:id', 'routes/product-ssr.jsx'),
];
