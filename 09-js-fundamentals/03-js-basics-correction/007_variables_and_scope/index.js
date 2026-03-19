// Variables in JavaScript can be declared using `var`, `let`, or `const`. Each has different implications for scope control and mutability:

// *   `var` has function scope or global scope if declared outside any function. It can be re-declared and updated.
// *   `let` has block scope (like within an `if` block or loop), cannot be re-declared within the same scope, but can be updated.
// *   `const` also has block scope and cannot be re-declared or updated. It's perfect for declaring constants and for arrays or objects where contents might change but the reference does not.

// #### Task:

// 1.  **Global and Function Scope with `var`**:

//     *   Declare a global variable using `var` and log it.
var myVar = 'Global with var';
//     *   Inside a function, declare another `var`
//  variable with the same name but different value and log it within the function.
function test() {
	var myVar = 'Function scoped with var';
	console.log('inside function myVar:', myVar);
}
test();
//     *   Call your function.
//     *   Log your global variable. Did it change? No! This is function scope!
console.log('outside function myVar:', myVar);

// 2.  **Block Scope with `let` and `const`**:

//     *   Inside a block (use an `if` statement with a condition of `true`),
//  declare variables using `let` and `const`. Try redeclaring them
//  within the same block to observe errors.
//     *   Try to log them inside and outside the `if`
//  statement. What happens?
const myGlobalConst = 'global const';
if (true) {
	let myLetVar = 'something let';
	const myConstVar = 'something const';
	console.log('myLetVar in if:', myLetVar);
	console.log('myConstVar in if:', myConstVar);
	const myGlobalConst = 'local const';

	// let myLetVar = 'Conflict!';
	// 3.  **Redeclaration with `var`**:

	//     *   Try to redeclare your original global variable
	//  with `var` within the `if` block, log it in and outside the statement. What happens?

	var myVar = 're-declared';
	console.log('myVar in if:', myVar);
	console.log('myConstVar in if:', myGlobalConst);
}
// console.log('myLetVar in if:', myLetVar);
// console.log('myConstVar in if:', myConstVar);
console.log('myConstVar after if:', myGlobalConst);
console.log('myVar after if:', myVar);

function returnAVar() {
	// const myGlobalConst = 'not really global';
	return myGlobalConst;
}

const returnedConst = returnAVar();

// console.log(returnedConst);

// #### Discussion Points:

// *   Discuss why `var` might lead to unexpected results when used in blocks.
// *   Explain why `let` and `const` are generally safer to use for controlling scope.
// *   Consider the mutability of arrays and objects declared with `const`.
