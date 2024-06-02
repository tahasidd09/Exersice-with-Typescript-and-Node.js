var favorite_pizzas = ['pepperoni', 'margherita', 'vegetarian'];
// Printing just the name of each pizza
console.log("Printing just the name of each pizza:");
for (var _i = 0, favorite_pizzas_1 = favorite_pizzas; _i < favorite_pizzas_1.length; _i++) {
    var pizza = favorite_pizzas_1[_i];
    console.log(pizza);
}
// Printing a sentence using the name of each pizza
console.log("\nPrinting a sentence using the name of each pizza:");
for (var _a = 0, favorite_pizzas_2 = favorite_pizzas; _a < favorite_pizzas_2.length; _a++) {
    var pizza = favorite_pizzas_2[_a];
    console.log("I like ".concat(pizza, " pizza."));
}
// Additional sentence expressing love for pizza
console.log("\nI really love pizza!");
