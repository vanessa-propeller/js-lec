// A block of code can be executed together in a FUNCTION

// FUNCTION syntax
function functionNameHere(parametersHere) {
  // insert the code here that will do specific actions
}

// For example, you can create a function to add two numbers
function addNumbers(a, b) {
  return a + b;
}
// Call the function
sum = addNumbers(2, 3); // this will return the sum of a = 2 and b = 3
console.log(sum);

// ANONYMOUS FUNCTIONS - functions that do not have a name
// Syntax 1
let difference = (c, d) => {
  return c - d;
};
console.log(difference(2, 3));

// Syntax 2 (shorter)
let difference_v2 = (e, f) => e - f;
console.log(difference_v2(2, 3));
