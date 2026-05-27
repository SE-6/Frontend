**What's new compared to the JavaScript version:**

```
schemas/index.ts      => Zod schemas + inferred types
utilities/cart.ts     => typed utility functions
typed props           => ProductList receives Product[], Cart uses CartItem[]
typed state           => useState<CartItem[]>, useState<string | null>
typed params          => PageProps with Promise<{ id: string }>
Zod on API fetch      => validate response before using the data
Zod in Server Action  => validate form data instead of manual checks
typed error.tsx       => Error and reset() properly typed
```

### Project structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    ← Server Component + Zod fetch
│   ├── loading.tsx
│   ├── error.tsx                   ← typed error boundary
│   ├── cart/page.tsx
│   └── admin/add/page.tsx          ← useActionState, typed
├── components/
│   ├── ProductList/ProductList.tsx ← typed props
│   └── Cart.tsx                    ← typed state
├── actions/
│   └── products.ts                 ← Server Action + Zod form validation
├── utilities/
│   └── cart.ts                     ← typed cart utilities
└── schemas/
    └── index.ts                    ← Zod schemas + inferred types
```
