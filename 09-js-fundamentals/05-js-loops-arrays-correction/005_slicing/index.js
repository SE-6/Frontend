// 1.  You will be given an array.
// 2.  Use the `slice` method to extract different portions of the array.
// 3.  Print the original array and the sliced portions to the console.

// Is the original array affected?
const array = [2, 4, 6, 8, 10, 12, 14, 16];
// Extract different portions of the array and print the results

const slice1 = array.slice(1, 4);
const slice2 = array.slice(0, 7);
const slice3 = array.slice(4, 5);

// array = [2, 4, 6, 7, 10, 12, 14, 16];

console.log('slice1', slice1);
console.log('slice2', slice2);
console.log('slice3', slice3);
console.log('array:', array);
