// WHILE LOOP
let i = 0;

// Print i in increments of 1 while is less than 20
console.log("Print i in increments of 1 until i is equal to 20");
while (i < 20) {
  i++; // shorthand for incrementing i by 1, instead of writing i+=1
  console.log(i);
}

// Print i in increments of 2 while i is less than 10
console.log("Print j in increments of 2 until j is equal to 10");
let j = 0;
while (j < 10) {
  j += 2; // increment j by 2
  console.log(j);
}

// FOR LOOP
// You can do the same thing above with fewer lines using the 'for' loop
console.log(
  "Print k in increments of 3 until k is equal to 20, using for loop"
);
// Syntax: for (initialize variable; condition; increments)
for (let k = 0; k <= 20; k += 3) {
  console.log(k);
}

// Sample applications:
// 1. Print all numbers between 0 and 50 that are multiples of 3
console.log("Multiples of 3 between 0 and 50");
for (m = 1; m <= 50; m++) {
  if (m % 3 == 0) {
    console.log(m); // prints 3, 6, 9, ... , 48
  }
}

// 2. Print all numbers between 0 and 50 that are multiples of 3 AND 5
console.log("Multiples of 3 and 5 between 0-50");
for (n = 1; n <= 50; n++) {
  if (n % 3 == 0 && n % 5 == 0) {
    console.log(n); // prints 15, 30, 45
  }
}
