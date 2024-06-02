var guestList = ['Taha', "Anas", "Shahroz ", "Ali"];
var dontcome = guestList[0];
console.log(dontcome, "He will not come");
guestList.splice(0, 1, "Zain");
console.log("Good news ! we have found a bigger table for dinner");
guestList.unshift("Taha");
guestList.push("babar");
var middle = Math.floor(guestList.length / 2);
guestList.splice(middle, 0, "Amir");
console.log('updated list of our guest');
guestList.forEach(function (element) { console.log("HI ".concat(element, ",would you like to dinner with me?")); });
console.log("unfortunately, the new dinner table wont arrive on time, so i can only invite two guests to dinner with me");
while (guestList.length > 2) {
    var kicked = guestList.pop();
    console.log("sorry ".concat(kicked, " you are not invited to dinner"));
}
guestList.forEach(function (element) { console.log("HI ".concat(element, ", would you like to dinner with me?")); });
guestList.pop();
guestList.pop();
console.log("Empty List", guestList);
