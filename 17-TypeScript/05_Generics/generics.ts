function add(a: number, b: number): number {
  return a + b;
}

function identityString(value: string): string {
  return value;
}

function identityNumber(value: number): number {
  return value;
}

function identityBoolean(value: boolean): boolean {
  return value;
}

// console.log(identityString('hello'));
// console.log(identityNumber(10));
// console.log(identityBoolean(true));

function identity<T>(value: T): T {
  return value;
}

// console.log(identity('hello'));
// console.log(identity(5));
// console.log(identity(true));

const numberArr: number[] = [1, 2, 3, 4, 5];
const stringArr: string[] = ['Alice', 'Bob', 'Jane', 'John'];

function firstString(arr: string[]): string {
  return arr[0];
}

function firstNumber(arr: number[]): number {
  return arr[0];
}

// console.log(firstString(stringArr));
// console.log(firstNumber(numberArr));

function first<T>(arr: T[]): T {
  return arr[0];
}

// console.log(first(numberArr));
// console.log(first(stringArr));

export {};

async function fetchData<T>(url: string): Promise<T> {
  const res = await fetch(url);

  if (!res.ok) throw new Error('Fetch failed');
  return res.json() as T;
}

type Post = { id: number; title: string; body: string };
type User = { id: number; name: string; email: string };

// const posts = await fetchData<Post[]>(
//   'https://jsonplaceholder.typicode.com/posts',
// );

// const users = await fetchData<User[]>(
//   'https://jsonplaceholder.typicode.com/users/',
// );

async function main() {
  const posts = await fetchData<Post[]>(
    'https://jsonplaceholder.typicode.com/posts',
  );

  const users = await fetchData<User[]>(
    'https://jsonplaceholder.typicode.com/users/',
  );

  console.log(users[0].name);
  console.log(posts[0].title);
}

// main();

// type Box = {
//   value: string;
// };

type Box<T> = {
  value: T;
};

// type Stringbox = {
//   value: string;
// };

// type Numberbox = {
//   value: number;
// };

const stringBox: Box<string> = { value: 'Hello' };
const numberBox: Box<number> = { value: 10 };
const booleanBox: Box<boolean> = { value: true };

// console.log(stringBox.value);
// console.log(numberBox.value);
// console.log(booleanBox.value);

type ApiResponse<T> = {
  success: boolean;
  data: T;
};

type Post2 = { id: number; title: string; body: string };
type User2 = { id: number; name: string; email: string };

const postResponse: ApiResponse<Post2> = {
  success: true,
  data: { id: 1, title: 'Hello TypeScript', body: 'Generics are cool!' },
};

const userResponse: ApiResponse<User2[]> = {
  success: true,
  data: [{ id: 1, name: 'Alice', email: 'alice@example.com' }],
};

function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

console.log(getLength('hello'));
console.log(getLength([1, 2, 3]));
// console.log(getLength(11231231)); ❌ number doesn't have 'length'

type ApiResponse2<T = string> = {
  status: number;
  data: T;
};

const textResponse: ApiResponse2 = {
  status: 200,
  data: 'Operation successful',
};
