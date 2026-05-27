import { email, z } from 'zod/v4';

export const ProductSchema = z.object({
  id: z.number().int(),
  title: z.string().min(1),
  price: z.number().positive(),
  category: z.string(),
  image: z.url(),
  description: z.string().optional(),
});

export type Product = z.infer<typeof ProductSchema>;

export const CartItemSchema = ProductSchema.extend({
  quantity: z.number().int().positive(),
});

export type CartItem = z.infer<typeof CartItemSchema>;

// EXAMPLE => refine

// const RegisterSchema = z
//   .object({
//     email: z.email(),
//     confirmEmail: z.email(),
//     password: z.string().min(6),
//     confirmPassword: z.string().min(6),
//   })
//   .refine((data) => data.email === data.confirmEmail, {
//     message: 'Emails do not match',
//     path: ['confirmEmail'],
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: 'Password do not match',
//     path: ['confirmPassword'],
//   });
