var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define the array of places
var places = ["captown", "london", "new york", "dubai", "dehili"];
// Print original order
console.log("Original order:", places);
// Print alphabetical order without modifying the list
console.log("Alphabetical order:", __spreadArray([], places, true).sort());
// Print original order to show it's unchanged
console.log("Original order:", places);
// Print reverse alphabetical order without modifying the list
console.log("Reverse alphabetical order:", __spreadArray([], places, true).sort().reverse());
// Print original order to show it's unchanged
console.log("Original order:", places);
// Reverse the order of the list
for (var i = 0; i < places.length / 2; i++) {
    var temp = places[i];
    places[i] = places[places.length - 1 - i];
    places[places.length - 1 - i] = temp;
}
console.log("Reversed order:", places);
// Reverse the order again to get back to the original order
for (var i = 0; i < places.length / 2; i++) {
    var temp = places[i];
    places[i] = places[places.length - 1 - i];
    places[places.length - 1 - i] = temp;
}
console.log("Original order:", places);
// Sort the array in alphabetical order
for (var i = 0; i < places.length - 1; i++) {
    for (var j = i + 1; j < places.length; j++) {
        if (places[i] > places[j]) {
            var temp = places[i];
            places[i] = places[j];
            places[j] = temp;
        }
    }
}
console.log("Sorted in alphabetical order:", places);
// Sort the array in reverse alphabetical order
for (var i = 0; i < places.length - 1; i++) {
    for (var j = i + 1; j < places.length; j++) {
        if (places[i] < places[j]) {
            var temp = places[i];
            places[i] = places[j];
            places[j] = temp;
        }
    }
}
console.log("Sorted in reverse alphabetical order:", places);
