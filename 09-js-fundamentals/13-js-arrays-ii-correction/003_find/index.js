// 1.  **Initialize an Array of Numbers:**

//     *   Create an array called `numbers` containing the following values in order: `10`, `20`, `30`, `40`, `50`.
const numbers = [12, 20, 30, 40, 50];
// 2.  **Use the `find` Method to Locate a Number Greater Than 25:**

//     *   Use the `find` method to locate the first number in `numbers` that is greater than `25`.
const firstOver25 = numbers.find((num) => num > 25);
//     *   Print the found number to the console.
console.log('firstOver25:', firstOver25);

// 3.  **Initialize an Array of Objects:**

//     *   Create an array called `people` containing the following objects:
//         *   `{ name: "Alice", age: 25 }`
//         *   `{ name: "Bob", age: 30 }`
//         *   `{ name: "Charlie", age: 35 }`
//         *   `{ name: "David", age: 40 }`

const people = [
	{ name: 'Alice', age: 25 },
	{ name: 'Bob', age: 30 },
	{ name: 'Charlie', age: 35 },
	{ name: 'David', age: 40 }
];
// 4.  **Use the `find` Method to Locate a Person Named "Charlie":**

//     *   Use the `find` method to locate the first object in `people`
//  where the `name` property is `"Charlie"`.
// const charlie = people.find((person) => person.name === 'Charlie');
const charlie = people.find(({ name }) => name === 'Charlie');
//     *   Print the found object to the console.
console.log('charlie:', charlie);
