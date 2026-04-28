import { Route, Routes } from 'react-router';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ProductPage from './components/ProductPage';
import { Suspense } from 'react';
import PostsSuspense from './components/PostsSuspense';
import ProductPageV2 from './components/ProductPageV2';

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />

          {/* USEEFFECT */}
          <Route path='/product/:id' element={<ProductPage />} />

          {/* USE & SUSPENSE */}
          <Route path='/product-v2/:id' element={<ProductPageV2 />} />
        </Route>
        <Route path='*' element={<p>NOT FOUND</p>} />
      </Routes>

      {/* <Suspense fallback={<p>Loading...</p>}>
        <PostsSuspense />
      </Suspense> */}
    </>
  );
}

export default App;
