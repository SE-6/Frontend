// Comments are for people, ignored by machines
/*This 
is a multi-line comment */

let result = 20 + 5;

result = '25';
// console.log(result);

const somethingToKeep = "Don't change me!";

// will throw an error
// somethingToKeep = 'I was changed!';

var dontUseMe = "Really don't use me";

let myNum = 0;

myNum = myNum + 1;
//shorthand
myNum += 3;

myNum++;
myNum--;

myNum += '3';

const concatenatedString = 'I am part one' + ' and I am part 2.';
// console.log('concatenatedString:', concatenatedString);

// console.log('myNum:', myNum);

// console.log(0 !== false);
// console.log(0 <= 1 && !(2 < 1));

if (0 < 3 || 0 > 3) {
	// console.log('This was true or truthy');
}

// console.log((false && false) || (true && false));

let weatherToday;
let temp = 20;

if (temp >= 20) {
	// let weatherToday = 'toasty';
	weatherToday = 'warm';
	const localConst = "I'm a local, not a tourist";
	// console.log('The weather today is ' + weatherToday);

	if (true) {
		// console.log(localConst);
	}
} else if (temp >= 10 && temp < 20) {
	weatherToday = 'chilly';
} else if (temp >= 0 && temp < 10) {
	weatherToday = 'real cold';
} else {
	weatherToday = 'Unsure';
}

// console.log(weatherToday);
// console.log(localConst);

let characterClass = 'wizard';

switch (characterClass) {
	// (characterClass === 'fighter)
	case 'fighter':
		console.log("I'm very strategic!");
		break;
	case 'monk':
		console.log('Who needs weapons,  when I have my fists!');
	case 'wizard':
		console.log('I get my magic from books!');
	case 'sorcerer':
	case 'warlock':
		console.log('I can do powerful magic!');
		break;
	default:
		console.log('I love DnD!');
}

//function declarations
function sayHelloWorld() {
	console.log('Hello world!');
}
sayHelloWorld();

// function expressions
const goodByeWorld = function () {
	console.log('Goodbye, cruel world!');
};
goodByeWorld();

const makeASandwich = () => {
	console.log("Here's a sandwich!");
};

makeASandwich();

const square = (num) => {
	return num * num;
};

console.log(square(7));

const squareOf5 = square(5);
console.log(squareOf5);

const multiply = (num1, num2 = 8) => {
	return num1 * num2;
};

console.log(multiply(2));
console.log(multiply(2 * 5));
