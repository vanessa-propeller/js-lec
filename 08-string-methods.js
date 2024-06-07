// String operations are very much like array operations
// Each character in a string has an index
// So, for example in the string "GQAE", G has and index of 0, Q has an index of 1, A has an index of 2, and E has an index of 3
// So a string is kinda like a list of characters: ["G", "Q", "A", "E"]

let word = "GQAE";

// Get the length of the word
console.log(word.length); // prints 4

// Slice the word, get the first two letters only
let first_two_letters = word.slice(0, 2); // note that this prints the indices 0, 1 not including index = 2
console.log(first_two_letters);

// Print letter A from GQAE
console.log(word[2]);

// Split the word, print G and E only
let split_word = word.split("QA"); // this prints the list of the remaining characters
console.log(split_word);

// Remove white spaces
let word_with_trailing_white_space = "     GQAE  ";
console.log(word_with_trailing_white_space);
let trimmed_word = word_with_trailing_white_space.trim();
console.log(trimmed_word);

// Convert a string of numbers to actual numbers using the parseInt() method
let x = "23";
let y = "24";
let sum = parseInt(x) + parseInt(y);
console.log(sum);

// Likewise, you can also onvert the sum to a string using the toString() method
let sum_string = sum.toString();
console.log(sum_string);

// Concatenate strings
let output = "The sum is " + sum_string;
console.log(output);

// Template strings - uses back ticks instead of quotations
// Variables are concatenated inside the ${}
// Same printed output as above
console.log(`The sum is ${sum_string}`);
