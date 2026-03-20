// 1.  **Initialize an Array:**

//     *   Create an array called `myArray` containing the
//  following values in order: `1`, `2`, `3`, `4`, `5`.
const myArray = [1, 2, 3, 4, 5];

// 2.  **Add Elements to the End of the Array:**

//     *   Use the `.push` method to add the values `6` and `7` to the end of the array.
const lengthAfterPush = myArray.push(6, 7);
console.log(lengthAfterPush);
//     *   Print the array to the console.
console.log('myArray:', myArray);

// 3.  **Remove the Last Element from the Array:**

//     *   Use the `.pop` method to remove the last element of the array.
const poppedItem = myArray.pop();
console.log('poppedItem:', poppedItem);

//     *   Print the array to the console.
console.log('myArray after pop:', myArray);
// 4.  **Remove the First Element from the Array:**

//     *   Use the `.shift` method to remove the first element of the array.
const shiftedItem = myArray.shift();
console.log('shiftedItem:', shiftedItem);
//     *   Print the array to the console.
console.log('myArray after shift:', myArray);
// 5.  **Add Elements to the Beginning of the Array:**

//     *   Use the `.unshift` method to add the values `0` and `-1` to the beginning of the array.
myArray.unshift(-1, 0);
//     *   Print the array to the console.
console.log('myArray after unshift:', myArray);
