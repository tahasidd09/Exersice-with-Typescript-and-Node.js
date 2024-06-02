let car: string = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');  // True

console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');  // False

let age: number = 25;

console.log("Is age > 20? I predict True.");
console.log(age > 20);  // True

console.log("Is age < 20? I predict False.");
console.log(age < 20);  // False

let city: string = 'New York';

console.log("Is city != 'Los Angeles'? I predict True.");
console.log(city != 'Los Angeles');  // True

console.log("Is city == 'New York'? I predict True.");
console.log(city == 'New York');  // True

let temperature: number = 30;

console.log("Is temperature <= 30? I predict True.");
console.log(temperature <= 30);  // True

console.log("Is temperature >= 40? I predict False.");
console.log(temperature >= 40);  // False

let isRaining: boolean = false;

console.log("Is isRaining == false? I predict True.");
console.log(isRaining == false);  // True



let fruits: string[] = ['apple', 'banana', 'cherry'];

console.log("Is 'apple' in fruits? I predict True.");
console.log(fruits.includes('apple'));  // True

console.log("Is 'grape' in fruits? I predict False.");
console.log(fruits.includes('grape'));  // False

let colors: string[] = ['red', 'green', 'blue'];

console.log("Is colors.length == 3? I predict True.");
console.log(colors.length == 3);  // True

console.log("Is colors.length == 5? I predict False.");
console.log(colors.length == 5);  // False

let height: number = 180;

console.log("Is height > 170 && height < 190? I predict True.");
console.log(height > 170 && height < 190);  // True

console.log("Is height < 150 || height > 200? I predict False.");
console.log(height < 150 || height > 200);  // False
