// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// creating a guest array
var guestList = ["Hamza", "Taha", "Ibrar", "Zaibi"];
// Making variable for those  guest who not come
var dontCome = guestList[0];
// Print the name of guest who not come
console.log(dontCome, "Tu Qq Puch Rha Ha Meri Mrzi Nhi Aunga");
// Add or Remove Value Fron Guest List Array
guestList.splice(0, 1, "Malaika");
//  Message print for bigger table
console.log("Good News ! We Have Found A Biggest Table For Dinner");
//  Adding a new value at starting index of array
guestList.unshift("Mustafa");
//  Adding a new value at ending index of array
guestList.push("Ahbaaaaa");
//  Get a middle index of our guest list array
var middleIndex = (guestList.length / 2);
// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Areeba");
console.timeLog("Updated List of our Guest");
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, "would you like to dinner with me?));\n")); });
