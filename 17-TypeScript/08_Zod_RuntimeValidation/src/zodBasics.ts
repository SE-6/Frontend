import { z } from 'zod/v4';

const userSchema = z.object({
  id: z.number(),
  name: z.string().min(2),
  email: z.email(),
  isAdmin: z.boolean().default(false),
});

const someData = {
  id: 1,
  name: 'test',
  email: 'someone@mail.com',
};

const { data, error, success } = userSchema.safeParse(someData);

if (!success) {
  throw new Error(z.prettifyError(error));
}

console.log(data.name); // if we get here, data is valid and fully typed
