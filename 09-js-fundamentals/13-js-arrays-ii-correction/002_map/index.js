// 1.  **Initialize an Array of Numbers:**

//     *   Create an array called `numbers` containing the following values in order: `1`, `2`, `3`, `4`, `5`.
const numbers = [1, 2, 3, 4, 5];
// 2.  **Use the `map` Method to Create a New Array with Doubled Values:**

//     *   Use the `map` method to create a new array called `doubledNumbers`
//  where each value is double the corresponding value in `numbers`.
// const doubledNumbers = numbers.map((number) => {
//   return number * 2});
const doubledNumbers = numbers.map((number) => number * 2);
//     *   Print the `doubledNumbers` array to the console.
console.log(doubledNumbers);

// 3.  **Use the `map` Method to Create a New Array of Strings:**

//     *   Use the `map` method to create a new array called `stringNumbers`
//  where each value is the corresponding number in `numbers` converted to a
// string with the prefix "Number: ".
const stringNumbers = numbers.map((num) => `Number: ${num}`);
//     *   Print the `stringNumbers` array to the console.
console.log(stringNumbers);

// 4.  **Use the `map` Method to Create a New Array of Objects:**

//     *   Use the `map` method to create a new array called `numberObjects`
//  where each value is an object with the properties `original` (the original number)
// and `squared` (the square of the number).
const numberObjects = numbers.map((number) => ({
	original: number,
	squared: number * number
}));
// const numberObjects = numbers.map((number) => {
// 	return {
// 		original: number,
// 		squared: number * number
// 	};
// });

//     *   Print the `numberObjects` array to the console.
console.log(numberObjects);
