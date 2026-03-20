const animals = ['lion', 'tiger', 'bear', 'giraffe', 'zebra', 'monkey'];
// 1.  Use a `for` loop to count the total number of animals.
let totalAnimals = 0;
for (let i = 0; i < animals.length; i++) {
	console.log('i:', i);
	totalAnimals++;
}
// console.log('i:', i);
console.log('totalAnimals:', totalAnimals);

// 2.  Use a `while` loop to count animals whose
// names have five or more letters.
// You can check the [length of a string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)
let animalsOf5OrMore = 0;
let i = 0;

while (i < animals.length) {
	if (animals[i].length >= 5) {
		animalsOf5OrMore++;
	}

	i++;
}

console.log(animalsOf5OrMore);

// 3.  Use a `do...while` loop to count animals until you
//  encounter an animal whose name starts with 'm'
let count = 0;
do {
	if (animals[count].startsWith('m')) {
		break;
	}

	count++;
} while (count < animals.length);

console.log(`Count until m: ${count}`);
