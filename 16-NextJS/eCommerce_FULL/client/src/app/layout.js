import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Fake eCommerce',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div id='app'>
          <header className='site-header'>
            <Link href='/' className='site-logo'>
              Shop
            </Link>
            <nav className='site-nav'>
              <Link href='/' className='nav-link'>
                Products
              </Link>
              <Link href='/cart' className='nav-link'>
                Cart
              </Link>
              <Link href='/admin/add' className='nav-link'>
                Add Product
              </Link>
            </nav>
          </header>
          <main id='main-content'>{children}</main>
        </div>
      </body>
    </html>
  );
}
