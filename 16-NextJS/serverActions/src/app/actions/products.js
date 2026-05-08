'use server';

export async function addProduct(formData) {
  const title = formData.get('title');
  const price = formData.get('price');

  const res = await fetch('https://fakestoreapi.com/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title,
      price: Number(price),
      description: 'test product',
      image: 'something.png',
      category: 'electronics',
    }),
  });

  const newProduct = await res.json();
  console.log('New Product', newProduct); // terminal ?
}
