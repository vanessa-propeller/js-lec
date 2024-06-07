// 1. You have an array called productPrices with various product prices.
// 2. Apply a 10% discount to all prices using the map method and store the results in a new array called discountedPrices.
// 3. Use the filter method to create a new array called affordableProducts containing only products priced below $50
// 4. Calculate the total cost of all items in the affordableProducts array using the reduce method.

// Problem 1
let productPrices = [10, 20, 25, 15, 60];

// Problem 2
discountedPrices = [];
productPrices.map((price) => {
  discountedPrices.push(price * 0.9);
});
console.log(discountedPrices);

// Problem 3
const affordableProducts = productPrices.filter((price) => price < 50);
console.log(affordableProducts);

// Problem 4
const total_cost = affordableProducts.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(total_cost);
