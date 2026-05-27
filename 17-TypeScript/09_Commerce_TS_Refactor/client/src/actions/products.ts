'use server';

import { z } from 'zod/v4';
import { revalidatePath } from 'next/cache';

const AddProductSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  price: z.number().positive('Price must be a positive number'),
  category: z.string().min(1, 'Category is required'),
});

type ActionState = {
  error: string | null;
  success: boolean;
  message?: string;
};

export async function addProduct(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const result = AddProductSchema.safeParse({
    title: formData.get('title'),
    price: formData.get('price'),
    category: formData.get('category'),
  });

  if (!result.success) {
    return {
      error: result.error.issues.map((i) => i.message).join(','),
      success: false,
    };
  }

  const { title, price, category } = result.data;

  const res = await fetch('http://localhost:5000/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title,
      price,
      category,
      image: 'something.png',
    }),
  });

  if (!res.ok) throw new Error('Failed to add product');

  revalidatePath('/');
  return {
    success: true,
    message: `${title} added successfully!`,
    error: null,
  };
}
