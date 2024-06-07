const x = 5;
const y = 2;

// If Else Condition
if (x == y) {
  console.log("Hey!");
} else {
  console.log("Ho!");
}

// BONUS: Introducing Template Strings
if (x > y) {
  // String concatenation
  console.log(x + " is greater than " + y);
  // Template Strings
  // Template Strings allow variables inside
  console.log(`${x} is greater than ${y}`);
  // Template Strings allow expressions inside
  console.log(`The sum is: ${x + y}`);
} else {
  console.log(x + " is less than " + y);
  console.log(`${x} is less than ${y}`);
}
