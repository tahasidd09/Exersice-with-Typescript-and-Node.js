// Tests for equality and inequality with strings
var brand = 'Nike';
console.log("Is brand == 'Nike'? I predict True.");
console.log(brand == 'Nike'); // True
console.log("Is brand != 'Adidas'? I predict True.");
console.log(brand != 'Adidas'); // True
console.log("Is brand == 'Puma'? I predict False.");
console.log(brand == 'Puma'); // False
console.log("Is brand != 'Nike'? I predict False.");
console.log(brand != 'Nike'); // False
// Tests using the lower case function
var country = 'Canada';
console.log("Is country.toLowerCase() == 'canada'? I predict True.");
console.log(country.toLowerCase() == 'canada'); // True
console.log("Is country.toLowerCase() == 'CANADA'? I predict False.");
console.log(country.toLowerCase() == 'CANADA'); // False
var city = 'New York';
console.log("Is city.toLowerCase() == 'new york'? I predict True.");
console.log(city.toLowerCase() == 'new york'); // True
console.log("Is city.toLowerCase() == 'NEW YORK'? I predict False.");
console.log(city.toLowerCase() == 'NEW YORK'); // False
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var score = 85;
console.log("Is score == 85? I predict True.");
console.log(score == 85); // True
console.log("Is score != 90? I predict True.");
console.log(score != 90); // True
console.log("Is score > 80? I predict True.");
console.log(score > 80); // True
console.log("Is score < 90? I predict True.");
console.log(score < 90); // True
console.log("Is score >= 85? I predict True.");
console.log(score >= 85); // True
console.log("Is score <= 80? I predict False.");
console.log(score <= 80); // False
console.log("Is score < 85? I predict False.");
console.log(score < 85); // False
console.log("Is score > 85? I predict False.");
console.log(score > 85); // False
// Tests using "and" and "or" operators
var age = 30;
console.log("Is age > 20 && age < 40? I predict True.");
console.log(age > 20 && age < 40); // True
console.log("Is age < 20 || age > 40? I predict False.");
console.log(age < 20 || age > 40); // False
console.log("Is age > 20 && age < 25? I predict False.");
console.log(age > 20 && age < 25); // False
console.log("Is age < 20 || age > 25? I predict True.");
console.log(age < 20 || age > 25); // True
console.log("Is age == 30 || age == 40? I predict True.");
console.log(age == 30 || age == 40); // True
// Test whether an item is in an array
var fruits = ['apple', 'banana', 'cherry'];
console.log("Is 'banana' in fruits? I predict True.");
console.log(fruits.includes('banana')); // True
console.log("Is 'grape' in fruits? I predict False.");
console.log(fruits.includes('grape')); // False
console.log("Is 'apple' in fruits? I predict True.");
console.log(fruits.includes('apple')); // True
console.log("Is 'mango' in fruits? I predict False.");
console.log(fruits.includes('mango')); // False
// Test whether an item is not in an array
var vegetables = ['carrot', 'potato', 'spinach'];
console.log("Is 'broccoli' not in vegetables? I predict True.");
console.log(!vegetables.includes('broccoli')); // True
console.log("Is 'carrot' not in vegetables? I predict False.");
console.log(!vegetables.includes('carrot')); // False
console.log("Is 'lettuce' not in vegetables? I predict True.");
console.log(!vegetables.includes('lettuce')); // True
console.log("Is 'potato' not in vegetables? I predict False.");
console.log(!vegetables.includes('potato')); // False
