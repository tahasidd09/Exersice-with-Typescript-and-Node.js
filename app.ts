let favorite_pizzas: string[] = ['pepperoni', 'margherita', 'vegetarian'];

// Printing just the name of each pizza
console.log("Printing just the name of each pizza:");
for (let pizza of favorite_pizzas) {
    console.log(pizza);
}

// Printing a sentence using the name of each pizza
console.log("\nPrinting a sentence using the name of each pizza:");
for (let pizza of favorite_pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Additional sentence expressing love for pizza
console.log("\nI really love pizza!");
