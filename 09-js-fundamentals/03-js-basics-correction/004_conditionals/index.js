// 1.  Define a variable `temperature` and set
// it to any integer to represent the temperature in degrees Celsius.
let temp = 20;
// 2.  Use `if/else` to advise wearing a coat if the temperature is below 15 degrees.
// 3.  Use `if/else if/else` to give advice based on three temperature ranges:
//     *   Below 15 degrees: suggest a coat.
//     *   Between 15 and 25 degrees: suggest a sweater.
//     *   Above 25 degrees: suggest a t-shirt.

if (temp < 15) {
	console.log('Wear a coat.');
} else if (temp >= 15 && temp < 25) {
	console.log('Wear a sweater.');
} else {
	console.log('Wear a t-shirt');
}

// condition ? if condition is true or truthy : else
temp < 15 ? console.log('Wear a coat') : console.log('Wear less than a coat');

// 4.  Use a `switch` statement to provide advice based on specific
// temperatures (just a few for example): 10, 20, and 30 degrees.
switch (temp) {
	// temp === 10
	case 10:
		console.log('Wear a coat');
		break;
	// temp === 20
	case 20:
		console.log('Wear light sweater');
		break;
	case 30:
		console.log('Wear a t-shirt');
}

// 5.  Print the results for each task to the console.

// Play with different values for `temperature` and different scenarios!
