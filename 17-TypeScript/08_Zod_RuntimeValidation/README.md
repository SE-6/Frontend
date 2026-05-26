# Common Validators

## Basic types

```typescript
import { z } from 'zod/v4';

z.string(); // must be a string
z.number(); // must be a number
z.boolean(); // must be a boolean
z.null(); // must be null
z.undefined(); // must be undefined
```

---

## String validators

```typescript
z.string().min(2); // at least 2 characters
z.string().max(100); // at most 100 characters
z.string().email(); // must be a valid email
z.string().url(); // must be a valid URL
z.string().min(1); // non-empty string
```

---

## Number validators

```typescript
z.number().int(); // must be an integer (no decimals)
z.number().positive(); // must be > 0
z.number().min(0); // must be >= 0
z.number().max(100); // must be <= 100
```

---

## Optional and default

```typescript
z.string().optional(); // string | undefined
z.string().nullable(); // string | null
z.boolean().default(false); // uses false if value is missing
```

---

## Objects and arrays

```typescript
// object
const ProductSchema = z.object({
  id: z.number().int(),
  title: z.string().min(1),
  price: z.number().positive(),
});

// array of objects
const ProductsSchema = z.array(ProductSchema);
```

## The full pattern

```bash
1. define schema           → z.object({ ... })
2. infer type from schema  → type X = z.infer<typeof XSchema>
3. fetch data              → response.json() → 'any'
4. validate with safeParse → { data, error, success }
5. handle error or use data safely
```
