import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <nav>
          <Link href='/'>HOME</Link>
          <Link href='/contact'>CONTACT</Link>
          <Link href='/register'>REGISTER</Link>
          <Link href='/add-product'>ADD PRODUCT</Link>
          <Link href='/login'>LOGIN</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
