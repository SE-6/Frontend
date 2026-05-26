import { z } from 'zod/v4';

const userSchema = z.object({
  id: z.number(),
  name: z.string().min(2),
  email: z.email(),
  isAdmin: z.boolean().default(false),
});

type User = z.infer<typeof userSchema>;

const validData = {
  id: 1,
  name: 'Alice',
  email: 'alice@mail.com',
  isAdmin: true,
};

const result1 = userSchema.safeParse(validData);
// console.log('Success:', result1.success, result1.data?.name);

const invalidData = { id: 'abc', name: 'A', email: 'not-an-email' };
const result2 = userSchema.safeParse(invalidData);
console.log('Success:', result2.success);

if (!result2.success) {
  console.log(z.prettifyError(result2.error));
}

// const fileSchema = z
//   .instanceof(File)
//   .refine((file) => file.size <= 5 * 1024 * 1024, {
//     message: 'File size must be under 5MB',
//   })
//   .refine((file) => ['image/jpeg', 'image/png'].includes(file.type), {
//     message: 'Only JPG and PNG is allowed!',
//   });
