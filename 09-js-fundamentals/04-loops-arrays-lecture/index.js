// for (let i = 0; i < 5; i++) {
// 	// console.log('The current index is: ' + i);
// 	console.log(`The current index is: ${i}`);
// }

// while (true) {
// 	console.log('Infinite money glitch!');
// }

let percentLoaded = 0;
while (percentLoaded < 100) {
	console.log('Loading...');

	percentLoaded += 10;
}

let stillLoading = true;

while (stillLoading) {
	console.log('Loading...');

	stillLoading = false;
}

while (false) {
	console.log('Will I print?');
}

do {
	console.log('What about me?');
} while (false);

// Arrays
const wizard = 'wizard';
const rogue = 'rogue';
const bard = 'bard';
const paladin = 'paladin';

const dndClasses = ['wizard', 'rogue', 'bard', 'paladin'];

console.log('dndClasses:', dndClasses);
console.log('dndClasses length:', dndClasses.length);

// console.log(dndClasses[0]);
// console.log(dndClasses[1]);
// console.log(dndClasses[2]);
// console.log(dndClasses[3]);

dndClasses[3] = 'monk';

// console.log(dndClasses[3]);

// for (let i = 0; i < dndClasses.length; i++) {
// 	console.log(dndClasses[i]);
// }

// for (const dndClass of dndClasses) {
// 	console.log(dndClass);
// }

// for (const letter of 'this is a string') {
// 	console.log(letter);
// }

dndClasses.push('fighter');
// console.log('dndClasses:', dndClasses);

// dndClasses.pop();

// dndClasses.reverse();
const reversedClasses = dndClasses.toReversed();
// console.log('reversedClasses:', reversedClasses);

// dndClasses.splice(1, 3);
dndClasses.splice(2, 1, 'sorcerer');
console.log('dndClasses:', dndClasses);

console.log(dndClasses.slice(0, 3));

console.log('dndClasses:', dndClasses);

console.log(dndClasses.join());
