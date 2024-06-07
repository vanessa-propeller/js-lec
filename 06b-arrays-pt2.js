// MORE ON ARRAY METHODS

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

// Recall the FOR loop syntax
// for (initialize variable, condition, increments)
// Print the name of all the gqaes with "nambawan!" at the end of each name
for (let i = 0; i < gqaes.length; i++) {
  console.log(`${gqaes[i]} nambawan!`);
}

// Create a new list that contains only the GQAE names starting with M
// Initialize an empty array, this is where we will put the the new array
let m_gqaes = [];

for (let i = 0; i < gqaes.length; i++) {
  if (gqaes[i].startsWith("M")) {
    m_gqaes.push(gqaes[i]);
  }
}

console.log(m_gqaes);
console.log(`There are ${m_gqaes.length} GQAEs who have names starting with M`);

// But you can actually do the same thing above with even fewer lines using the filter() method
// What the line below says is:
// Filter the gqaes list: for each gqae, check if said gqae name starts with M
let m_gqaes_v2 = gqaes.filter((gqae) => gqae.startsWith("M"));
console.log(m_gqaes_v2);
console.log("See, that worked! Same list, different solution");
