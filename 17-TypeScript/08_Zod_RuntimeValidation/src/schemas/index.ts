import { z } from 'zod/v4';

export const ProductSchema = z.object({
  id: z.number().int({ error: 'ID must be a number' }),
  title: z.string().min(2, { message: 'Title is required' }),
  price: z.number().positive(),
  description: z.string().min(2),
  category: z.string(),
  image: z.url(),
});

export type Product = z.infer<typeof ProductSchema>;
