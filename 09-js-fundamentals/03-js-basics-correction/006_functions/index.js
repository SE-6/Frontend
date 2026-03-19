// Functions
// =========

// #### Part 1: Function Declarations

// 1.  **Declare a function with no parameters that outputs
// something to the console.**

//     *   Declare a function named `greet` that logs "Hello, World!"
// to the console.
//     *   Call the function.
function greet() {
	console.log('Hello world!');
}
greet();

// 2.  **Declare a function with one parameter that returns something.**

//     *   Declare a function named `square` that takes a
//  number as a parameter and returns its square.
//     *   Call the function with the argument `5`, store the
// result in a variable, and output it to the console.
const squareOf5 = square(5);
function square(num) {
	return num * num;
}

console.log('squareOf5:', squareOf5);

// 3.  **Declare a function with one parameter that performs a control
// flow with a switch statement and returns accordingly.**

//     *   Declare a function named `getDayName` that takes a
// number (0-6) as a parameter and returns the name of the day.
//     *   Use a switch statement to determine the day name.
//     *   Call the function with the argument `3`, store the result in a variable, and output it to the console.

function getDayName(num) {
	switch (num) {
		case 0:
			return 'Sunday';
		case 1:
			return 'Monday';
		case 2:
			return 'Tuesday';
		case 3:
			return 'Wednesday';
		case 4:
			return 'Thursday';
		case 5:
			return 'Friday';
		case 6:
			return 'Saturday';
		default:
			return 'Invalid number! Must be 0-6';
	}
}

const day3 = getDayName(3);

console.log('day3:', day3);

// #### Part 2: Function Expressions

// 1.  **Repeat the above steps using function expressions assigned to variables.**
//     *   Rewrite the `greet` function as a function expression assigned to a variable named `greetExpression`.

const greetExpression = function () {
	console.log('Hello world!');
};
const greetArrow = () => {
	console.log('Hello world!');
};
greetExpression();

//     *   Rewrite the `square` function as a function expression assigned to a variable named `squareExpression`.
const squareExpression = function (num) {
	return num * num;
};
const squareArrow = (num) => {
	return num * num;
};

//     *   Rewrite the `getDayName` function as a function expression assigned to a variable named `getDayNameExpression`.
const getDayNameExpression = function (num) {
	switch (num) {
		case 0:
			return 'Sunday';
		case 1:
			return 'Monday';
		case 2:
			return 'Tuesday';
		case 3:
			return 'Wednesday';
		case 4:
			return 'Thursday';
		case 5:
			return 'Friday';
		case 6:
			return 'Saturday';
		default:
			return 'Invalid number! Must be 0-6';
	}
};
const getDayNameArrow = (num) => {
	switch (num) {
		case 0:
			return 'Sunday';
		case 1:
			return 'Monday';
		case 2:
			return 'Tuesday';
		case 3:
			return 'Wednesday';
		case 4:
			return 'Thursday';
		case 5:
			return 'Friday';
		case 6:
			return 'Saturday';
		default:
			return 'Invalid number! Must be 0-6';
	}
};

// Part 3: Arrow functions
// #### Discussion:

// *   Discuss the difference between function declarations and function expressions.
