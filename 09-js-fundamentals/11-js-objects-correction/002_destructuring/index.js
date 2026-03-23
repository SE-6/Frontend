// Initial array
const fruits = ['apple', 'banana', 'cherry', 'date', ['strawberry']];
// *   **Simple Array Destructuring**

//     Extract the first two elements from the `fruits` array and store
// them in variables `fruit1` and `fruit2`.
const [fruit1, fruit2] = fruits;
// const fruitA = fruits[0];
// const fruitB = fruits[1];

console.log(fruit1, fruit2);
// console.log(fruitA, fruitB);
// *   **Skipping Elements in Array Destructuring**

//     Extract the first and third elements from the `fruits` array,
// skipping the second element.
const [fruitA, , fruitC] = fruits;
console.log(fruitA, fruitC);

// shallow copy with spread operator
const [fruitFirst, ...otherFruits] = fruits;

fruits.push('blueberry');

fruits[4].push('raspberry');

console.log(fruitFirst, otherFruits);

// *   **Simple Object Destructuring**
// Initial object
const person = {
	name: 'John Doe',
	age: 30,
	address: {
		city: 'New York',
		zip: '10001'
	}
};

//     Extract the `name` and `age` properties from the `person` object.
const { name, age } = person;

console.log(name, age);
console.log(person);
// *   **Nested Object Destructuring**

//     Extract the `city` from the `address` property of the `person` object.

const {
	address: { city, zip }
} = person;
// const { city, zip } = address;

console.log(city, zip);

// *   **Destructuring in Function Parameters**

//     `displayPerson` is function that takes a `person` object and logs the `name` and `age` properties using dot notation.
// Modify the function to destructure the `name` and `age` properties directly in the parameters.

//     Modify the function to use destructuring in the parameters
// Initial function
function displayPerson({ name, age }) {
	console.log(`Name: ${name}, Age: ${age}`);
}

const person2 = {
	name: 'Jane Doe',
	age: 33
};

displayPerson(person);
displayPerson(person2);
displayPerson({ name: 'Bob', age: 62 });
