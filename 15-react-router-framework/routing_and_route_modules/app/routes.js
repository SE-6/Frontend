import { index, route } from '@react-router/dev/routes';

//prettier-ignore
export default [
    index("routes/home.jsx"),
    route('/about', 'routes/about.jsx'),
    route('/hello', 'routes/hello.jsx'),
    route('/loader-demo', 'routes/loader-demo.jsx'),
    route('/error-demo', 'routes/error-demo.jsx'),
    route('/products', 'routes/products.jsx'),
];
