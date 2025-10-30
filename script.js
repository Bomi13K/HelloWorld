// 1. Define three variables using let
let myString = "Hello World";
let myBoolean = true;
let myNumber = 42;

// 2. Five different comparisons with comments
console.log(5 > 3); // true; 5 is greater than 3
console.log(10 <= 10); // true; 10 is less than or equal to 10
console.log("5" === 5); // false; strict equality checks type and value
console.log(7 !== "7"); // true; not equal (different types)
console.log(15 >= 10 && 15 <= 20); // true; 15 is between 10 and 20

// 3. Output equation using template literal
let result = 5 * 4;
console.log(`5 * 4 = ${result}`);

// 4. Two ways to convert number to string
let num = 123;
let str1 = String(num); // Method 1: Using String() function
let str2 = num.toString(); // Method 2: Using toString() method

// 5. Boolean expression with all three logical operators
let x = 10;
let y = 20;
let complexExpression = !(x > 5) || (y < 30 && x !== y);
// This evaluates to: false OR (true AND true) = true

// 6. Function that checks if number is positive
function isPositive(number) {
    return number > 0;
}

// 7. Two loops outputting numbers 1-10
console.log("For loop:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("While loop:");
let j = 1;
while (j <= 10) {
    console.log(j);
    j++;
}

// 8. Prompt user for number and check conditions
let userNumber = parseInt(prompt("Enter a number:"));
if (userNumber === 5 || userNumber === 13 || userNumber % 3 === 0) {
    console.log(`The number ${userNumber} meets the condition!`);
}

// 9. Favorite season - if..else if version
let season = prompt("Enter your favourite season (summer/winter/autumn/spring):");

// Chained if..else if statement
if (season === "summer") {
    console.log("Perfect time for beach days!");
} else if (season === "winter") {
    console.log("Great for cozy nights by the fire!");
} else if (season === "autumn") {
    console.log("Beautiful with all the falling leaves!");
} else if (season === "spring") {
    console.log("Lovely with all the flowers blooming!");
} else {
    console.log("That's not a valid season!");
}

// Alternative solution using switch statement
switch (season) {
    case "summer":
        console.log("Perfect time for beach days!");
        break;
    case "winter":
        console.log("Great for cozy nights by the fire!");
        break;
    case "autumn":
        console.log("Beautiful with all the falling leaves!");
        break;
    case "spring":
        console.log("Lovely with all the flowers blooming!");
        break;
    default:
        console.log("That's not a valid season!");
        break;
}