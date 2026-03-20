// 1.  You will be given an array of strings.
// 2.  Use the `join` method to create different strings by
// joining the array elements with various delimiters.
// 3.  Print the original array and the resulting strings to the console.
const array = ['apple', 'banana', 'cherry', 'date'];

// Create different strings by joining the array elements with various delimiters
// Default delimiter (comma)
const comma = array.join();
console.log('comma:', comma);
console.log('array:', array);
// Using dash as delimiter
const dash = array.join('-');
console.log('dash:', dash);

// Using space as delimiter;
const space = array.join(' ');
console.log('space:', space);

// string method counterpart to join
const ogArrayAgain = space.split('');
console.log('ogArrayAgain:', ogArrayAgain);

const delimiter = 'hey mom!';
const heyMom = array.join(` ${delimiter} `);
// Using ' and ' as delimiter
const andStr = array.join(' and  ');
console.log('andStr:', andStr);

// Without any delimiter
const noDelimiter = array.join('');
console.log('noDelimiter:', noDelimiter);
