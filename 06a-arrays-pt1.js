// ARRAY BASICS
// An array contains a set of elements
let gqaes = [
  "Rona",
  "Abi",
  "Arbi",
  "Cla",
  "Hazel",
  "Marga",
  "Margaux",
  "Miguel",
  "Maybe",
  "Myra",
  "Vanj",
];

// BONUS: Arrange the names in alphabetical order using the sort() method
let gqaes_alphabetical = gqaes.sort();
console.log(gqaes_alphabetical);

// Accessing values
// Print the third GQAE in the alphabetical list
// Note that index always starts with 0. So to get that third GQAE in the list, the index should be = 2
let third_gqae = gqaes_alphabetical[2];
console.log(`The 3rd GQAE in the list is ${third_gqae}`);

// Replace "Arbi" with "Raoul"
gqaes_alphabetical[1] = "Raoul";
console.log(gqaes_alphabetical);

// Total number of elements in an array
// Count the GQAEs
let gqaes_count = gqaes.length;
console.log(`Currently, there are ${gqaes_count} GQAEs!`);

// Add an element at the end of the array
// Let's try to add Mary to the unsorted list and then sort it again
gqaes.push("Mary"); // add Mary to the unsorted list
gqaes_july_2024_alphabetical = gqaes.sort(); // sort the updated list alphabetically
console.log(gqaes_july_2024_alphabetical); // print the updated list that's been arranged alphabetically

// Get Ate Rona's index
let rona_index = gqaes_july_2024_alphabetical.indexOf("Rona");
console.log(rona_index); // prints 10

// Check if Si Crush is included in the list
console.log(gqaes_july_2024_alphabetical.includes("Si Crush")); // this should return a boolean -> false

// Create a subarray from the main array
// For instance, let's print the first 6 GQAEs in the gqaes_july_2024_alphabetical list
// Syntax listName.slice(startIndex, endIndex)
let first_six_gqaes = gqaes_july_2024_alphabetical.slice(0, 5);
console.log(first_six_gqaes); // prints ["Abi", "Cla", "Hazel", "Marga", "Margaux"]
