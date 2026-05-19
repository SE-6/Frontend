## `Partial<T>` — make all properties optional

Useful when updating an object => you dont want to provide every field, just the ones that changed:

```ts
type User = {
  id: number;
  name: string;
  email: string;
};

// Without Partial — you'd have to provide every field
function updateUser(id: number, newData: Partial<User>) {
  // newData can have any combination of id, name, email
  console.log('Updating:', newData);
}

updateUser(1, { name: 'Ada' }); // ✅ only name
updateUser(2, { email: 'ada@ts.com' }); // ✅ only email
```

---

## `Required<T>` — make all properties required

The opposite of `Partial` — every optional property becomes required:

```ts
type Settings = {
  darkMode?: boolean;
  language?: string;
};

// all fields must be provided
function initSettings(config: Required<Settings>) {
  console.log(config.darkMode, config.language);
}

initSettings({ darkMode: true, language: 'en' }); // ✅
initSettings({ darkMode: true }); // ❌ language is missing
```

---

## `Readonly<T>` — prevent changes

All properties cannot be changed: so they become read-only

```ts
type Todo = { title: string; done: boolean };

const todo: Readonly<Todo> = { title: 'Learn TypeScript', done: false };

todo.title = 'Something else'; // ❌ Cannot assign to 'title' — it's read-only
```

---

## `Pick<T, K>` — keep only certain fields

Create a new type with only the properties you need:

```ts
type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

// Safe to send to the frontend — no sensitive data
type PublicUser = Pick<User, 'id' | 'name'>;

const publicUser: PublicUser = { id: 1, name: 'Alice' };
```

---

## `Omit<T, K>` — remove certain fields

The opposite of `Pick` — keep everything except the specified fields:

```ts
// Everything except password
type SafeUser = Omit<User, 'password'>;

const safeUser: SafeUser = { id: 1, name: 'Alice', email: 'alice@example.com' };
```

---

## `Record<K, T>` — build an object type from keys and values

Useful when you know the keys and want to enforce the value type:

```ts
type Role = 'admin' | 'user' | 'guest';

const access: Record<Role, boolean> = {
  admin: true,
  user: true,
  guest: false,
};
```

---

## `NonNullable<T>` — remove null and undefined

```ts
type Name = string | null | undefined;
type CleanName = NonNullable<Name>; // string
```

---

## `Exclude<T, U>` and `Extract<T, U>`

`Exclude` removes types from a union. `Extract` keeps only the matching ones:

```ts
type Event = 'click' | 'hover' | 'scroll';

type WithoutScroll = Exclude<Event, 'scroll'>; // 'click' | 'hover'
type OnlyMouse = Extract<Event, 'click' | 'hover'>; // 'click' | 'hover'
```

---

## Quick reference

| Utility          | What it does                          |
| ---------------- | ------------------------------------- |
| `Partial<T>`     | All properties optional               |
| `Required<T>`    | All properties required               |
| `Readonly<T>`    | All properties immutable              |
| `Pick<T, K>`     | Keep only specified fields            |
| `Omit<T, K>`     | Remove specified fields               |
| `Record<K, T>`   | Object with fixed keys and value type |
| `NonNullable<T>` | Remove null and undefined             |
| `Exclude<T, U>`  | Remove matching types from union      |
| `Extract<T, U>`  | Keep only matching types from union   |

> Full list: [typescriptlang.org/docs/handbook/utility-types.html](https://www.typescriptlang.org/docs/handbook/utility-types.html)
