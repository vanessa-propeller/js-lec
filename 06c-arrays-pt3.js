// ARRAY MAPPING
// In the real world, you'll find yourself using array mapping most often

let gqaes = [
  "Abi",
  "Cla",
  "Hazel",
  "Marga",
  "Margaux",
  "Mary",
  "Maybe",
  "Miguel",
  "Myra",
  "Raoul",
  "Rona",
  "Vanj",
];

// Recall this loop from the previous JS file
console.log("METHOD 1");
for (let i = 0; i < gqaes.length; i++) {
  console.log(`${gqaes[i]} nambawan!`);
}

// We can actually get the same results by using the map() method like so:
console.log("METHOD 2");
gqaes.map((gqae) => {
  console.log(`${gqae} nambawan!`);
});
// ^^^ Isn't that more elegant? Hehe
// Also, it is the more commonly used syntax
