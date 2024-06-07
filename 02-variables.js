// GENERAL NOTES
// To run the code
// Make sure you're inside the js-lecture folder in the terminal
// Enter node 02-variables.js

// VARIABLES
// let vs var
// let cannot be redeclared or updated
// var can be redeclared or updated

// let
let x = "My ex";
console.log(x);
// Try to uncomment the line below and run the code, it will return a SyntaxError
// let x = "Another ex";

// var
var y = "My whys";
console.log(y);
var y = "My whys - updated";
console.log(y);

// CONSTANTS
// const cannot be reassigned with another value
const y = "My Ex and Whys";
console.log(y);

// DATA TYPES
// Determine data type
// Is it a: string? number? boolean? null? undefined?
console.log(typeof x); // data type = string
console.log(typeof 4); // data type = number
console.log(typeof true); // data type = boolean
