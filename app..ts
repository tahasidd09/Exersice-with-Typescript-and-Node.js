// Define the array of places
let places: string[] = ["captown", "london", "new york", "dubai", "dehili"];

// Print original order
console.log("Original order:", places);

// Print alphabetical order without modifying the list
console.log("Alphabetical order:", [...places].sort());

// Print original order to show it's unchanged
console.log("Original order:", places);

// Print reverse alphabetical order without modifying the list
console.log("Reverse alphabetical order:", [...places].sort().reverse());

// Print original order to show it's unchanged
console.log("Original order:", places);

// Reverse the order of the list
for (let i = 0; i < places.length / 2; i++) {
    const temp = places[i];
    places[i] = places[places.length - 1 - i];
    places[places.length - 1 - i] = temp;
}
console.log("Reversed order:", places);

// Reverse the order again to get back to the original order
for (let i = 0; i < places.length / 2; i++) {
    const temp = places[i];
    places[i] = places[places.length - 1 - i];
    places[places.length - 1 - i] = temp;
}
console.log("Original order:", places);

// Sort the array in alphabetical order
for (let i = 0; i < places.length - 1; i++) {
    for (let j = i + 1; j < places.length; j++) {
        if (places[i] > places[j]) {
            const temp = places[i];
            places[i] = places[j];
            places[j] = temp;
        }
    }
}
console.log("Sorted in alphabetical order:", places);

// Sort the array in reverse alphabetical order
for (let i = 0; i < places.length - 1; i++) {
    for (let j = i + 1; j < places.length; j++) {
        if (places[i] < places[j]) {
            const temp = places[i];
            places[i] = places[j];
            places[j] = temp;
        }
    }
}
console.log("Sorted in reverse alphabetical order:", places);
