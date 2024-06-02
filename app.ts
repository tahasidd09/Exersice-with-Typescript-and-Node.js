// Tests for equality and inequality with strings
let brand: string = 'Nike';

console.log("Is brand == 'Nike'? I predict True.");
console.log(brand == 'Nike');  // True

console.log("Is brand != 'Adidas'? I predict True.");
console.log(brand != 'Adidas');  // True

console.log("Is brand == 'Puma'? I predict False.");
console.log(brand == 'Puma');  // False

// Tests using the lower case function
let country: string = 'Canada';

console.log("Is country.toLowerCase() == 'canada'? I predict True.");
console.log(country.toLowerCase() == 'canada');  // True

console.log("Is country.toLowerCase() == 'CANADA'? I predict False.");
console.log(country.toLowerCase() == 'CANADA');  // False

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let score: number = 85;

console.log("Is score == 85? I predict True.");
console.log(score == 85);  // True

console.log("Is score != 90? I predict True.");
console.log(score != 90);  // True

console.log("Is score > 80? I predict True.");
console.log(score > 80);  // True

console.log("Is score < 90? I predict True.");
console.log(score < 90);  // True

console.log("Is score >= 85? I predict True.");
console.log(score >= 85);  // True

console.log("Is score <= 80? I predict False.");
console.log(score <= 80);  // False

// Tests using "and" and "or" operators
let age: number = 30;

console.log("Is age > 20 && age < 40? I predict True.");
console.log(age > 20 && age < 40);  // True

console.log("Is age < 20 || age > 40? I predict False.");
console.log(age < 20 || age > 40);  // False

console.log("Is age > 20 && age < 25? I predict False.");
console.log(age > 20 && age < 25);  // False

console.log("Is age < 20 || age > 25? I predict True.");
console.log(age < 20 || age > 25);  // True

// Test whether an item is in an array
let fruits: string[] = ['apple', 'banana', 'cherry'];

console.log("Is 'banana' in fruits? I predict True.");
console.log(fruits.includes('banana'));  // True

console.log("Is 'grape' in fruits? I predict False.");
console.log(fruits.includes('grape'));  // False

// Test whether an item is not in an array
let vegetables: string[] = ['carrot', 'potato', 'spinach'];

console.log("Is 'broccoli' not in vegetables? I predict True.");
console.log(!vegetables.includes('broccoli'));  // True

console.log("Is 'carrot' not in vegetables? I predict False.");
console.log(!vegetables.includes('carrot'));  // False
