// 1.  **Initialize an Array:**

//     *   Create an array called `myArray` containing the following
// values in order: `42`, `"Hello, world!"`, `true`, `3.14`, `"JavaScript"`.
const myArray = [42, 'Hello, world!', true, 3.14, 'JavaScript'];

// 2.  **Print the Array:**

//     *   Use `console.log` to print the array to the console.
console.log('myArray:', myArray);

// 3.  **Access Array Elements:**

//     *   Access and print each element of the array individually using its index.
//     *   Bonus points if you use a for loop!
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
for (let i = 0; i < myArray.length; i++) {
	console.log(myArray[i]);
}

// 4.  **Modify an Array Element:**

//     *   Change the value of the second element (index 1) to
// `"Changed value"`, and print the array again to see the change.
myArray[1] = 'Changed value';
console.log('myArray after:', myArray);
