// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guestList = ["Hamza" , "Taha" , "Ibrar" , "Zaibi"];

let dontCome = guestList[1];

console.log(dontCome, "Nhi Aunga Meri Mrzi");

guestList.splice(1, 1, "Anis");

guestList.forEach(guest => console.log(`Assalam Walaikum ${guest}, would you like to dinnner with me?`));
