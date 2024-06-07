// 1. Create an array called expenses that contains at least 5 different expense amounts.
// 2. Calculate the total expenses by summing all the elements of the array.
// 3. Find the highest and lowest individual expenses within the array.

// SOLUTIONS

// For Problem #1
let expenses = [10, 20, 25, 15, 30];

// For Problem #2
// P2 Solution 1: Using the for loop
let sum = 0;
for (i = 0; i < expenses.length; i++) {
  sum += expenses[i];
}
console.log(sum); // prints 100

// P2 Solution 2: Using the reducer method()
const sum_v2 = expenses.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum_v2); // prints 100 as well

// P2 Solution 3: Using forEach() method
let sum_v3 = 0;
expenses.forEach((expense) => (sum_v3 += expense));
console.log(sum_v3); // prints 100, too!

// For Problem #3
expenses.sort((a, b) => a - b); // sort the list from lowest to highest expense
console.log(expenses); // check if it's indeed sorted out

console.log(expenses[0]); // print the lowest amount i.e., the first item in the sorted list
console.log(expenses[expenses.length - 1]); // print the hightest amount i.e., the last item in the sorted list; the index of the last item is the length of the list minus 1
