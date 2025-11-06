// solution.js - Simple Version

// 1. Three variables
let text = "Hello";
let flag = true;
let count = 42;

// 2. Five comparisons
console.log(5 > 3); // true
console.log(10 <= 10); // true  
console.log("5" === 5); // false
console.log(7 !== "7"); // true
console.log(15 >= 10 && 15 <= 20); // true

// 3. Template literal
console.log(`5 * 4 = ${5 * 4}`);

// 4. Number to string
let n = 123;
let s1 = String(n);
let s2 = n.toString();

// 5. Logical operators
let a = 10, b = 20;
let check = !(a > 5) || (b < 30 && a !== b);

// 6. Positive check function
function isPositive(n) {
    return n > 0;
}

// 7. Two loops
for (let i = 1; i <= 10; i++) console.log(i);

let k = 1;
while (k <= 10) console.log(k++);

// 8. Number check
let num = parseInt(prompt("Enter a number:"));
if (num === 5 || num === 13 || num % 3 === 0) {
    console.log(`Number ${num} is special!`);
}

// 9. Season check
let season = prompt("Enter season:");

// If version
if (season === "summer") console.log("Beach time!");
else if (season === "winter") console.log("Fireplace time!");
else if (season === "autumn") console.log("Leaf time!");
else if (season === "spring") console.log("Flower time!");
else console.log("Unknown season!");

// Switch version  
switch (season) {
    case "summer": console.log("Beach time!"); break;
    case "winter": console.log("Fireplace time!"); break;
    case "autumn": console.log("Leaf time!"); break;
    case "spring": console.log("Flower time!"); break;
    default: console.log("Unknown season!");
}
