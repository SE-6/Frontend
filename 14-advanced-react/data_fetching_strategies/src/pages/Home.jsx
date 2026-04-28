import { Link } from 'react-router';
import Products from '../components/Products';

const Home = () => {
  return (
    <div>
      <Products />

      <h2> useEffect = Fetch On Render</h2>
      <Link to='/product/1'>Product 1 (useEffect)</Link>
      <br />

      <h2>Suspense & Hook (Render as you Fetch)</h2>
      <Link to='/product-v2/1'>Product 1 (Suspense)</Link>
    </div>
  );
};

export default Home;
