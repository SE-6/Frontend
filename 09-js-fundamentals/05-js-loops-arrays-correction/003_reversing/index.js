// 1.  **Reverse the First Array in Place:**

//     *   The `reverse` method reverses the array in place,
// which means the original array is modified.
//     *   For example, `array1.reverse()` will change `array1`
// from `[1, 2, 3, 4, 5]` to `[5, 4, 3, 2, 1]`.
const array1 = [1, 2, 3, 4, 5];
array1.reverse();
console.log('array1:', array1);

// 2.  **Create a Reversed Copy of the Second Array:**

//     *   The `toReversed` method creates a new array that is
// the reversed version of the original array.
//     *   This method does not modify the original array.
//     *   For example, `array2.toReversed()`
// will return `['e', 'd', 'c', 'b', 'a']` while `array2` remains `['a', 'b', 'c', 'd', 'e']`.
// 3.  **Print the Results:**

const array2 = ['a', 'b', 'c', 'd', 'e'];
const reversed2 = array2.toReversed();

console.log('array2:', array2);
console.log('reversed2:', reversed2);
