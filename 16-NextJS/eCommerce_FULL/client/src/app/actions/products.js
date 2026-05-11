'use server';

import { revalidatePath } from 'next/cache';

export async function addProduct(prevState, formData) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const title = formData.get('title');
  const price = formData.get('price');
  const category = formData.get('category');

  if (!title || !price || !category) {
    return { error: 'All fields are required.' };
  }

  const res = await fetch('http://localhost:5000/products', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      title,
      price: Number(price),
      category,
      image: 'something.png',
    }),
  });

  if (!res.ok) {
    throw new Error('failed to add product.');
  }

  const data = await res.json();
  console.log('Product added', data); // terminal only => SERVER ACTION

  revalidatePath('/');

  return { success: true, message: `"${title}" added successfully!` };
}
