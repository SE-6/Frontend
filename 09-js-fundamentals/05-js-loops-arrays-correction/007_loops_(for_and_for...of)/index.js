// 1.  **Initialize an Array of Numbers:**

//     *   Create an array called `numberArray` containing
// the following values in order: `10`, `20`, `30`, `40`, `50`.
const numberArray = [10, 20, 30, 40, 50];

// 2.  **Iterate Over the Array with a `for` Loop:**

let notDeclared = null;

notDeclared = 'Something else';
// console.log(notDeclared);

//     *   Use a `for` loop to iterate over `numberArray` and
// print each value to the console.
for (let i = 0; i < numberArray.length; i++) {
	console.log(numberArray[i]);
}

// 3.  **Iterate Over the Array with a `for...of` Loop:**

//     *   Use a `for...of` loop to iterate over
// `numberArray` and print each value to the console.
for (const number of numberArray) {
	console.log(number);
}
