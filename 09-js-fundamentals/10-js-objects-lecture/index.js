const dndChar = {
	name: 'Kaladan',
	dndClass: 'paladin',
	level: 12,
	spellsList: ['divine smite', 'bless', "crusader's mantle"],
	yellCatchPhrase() {
		return 'To smite is right!';
	},
	introduce() {
		return `My name is ${this.name} the ${this.dndClass}!`;
	}
};

console.log('dndChar:', dndChar);

console.log(dndChar.dndClass);

const propIWant = 'dndClass';

console.log(dndChar[propIWant]);

dndChar.level = 13;
console.log('dndChar:', dndChar);
console.log(dndChar.yellCatchPhrase());
console.log(dndChar.introduce());

// destructuring
const myName = dndChar.name;
const { name, dndClass, myDndClass } = dndChar;
console.log(myName);
console.log(name, dndClass, myDndClass);
