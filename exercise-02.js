// 1. Create an array named studentNames with the names of your students.
// 2. Add a new student name to the beginning of the array.
// 3. Remove the last student name from the array.
// 4. Alphabetize the student names within the array.

// Problem 1
let studentNames = ["Monica", "Phoebe", "Rachel", "Chandler", "Joey", "Ross"];

// Problem 2
studentNames.unshift("Janice");
console.log(studentNames);

// Problem 3
studentNames.pop();
console.log(studentNames);

// Problem 4
studentNames.sort();
console.log(studentNames);
