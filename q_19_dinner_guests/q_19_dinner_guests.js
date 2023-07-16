"use strict";
var din_guests = ["Ali", "Ahmed", "Hamza", "Shabir"];
console.log("I am inviting " + din_guests.length + " people to dinner.");
/////////// Changing Guest List ///////////
var guestWhoCantMakeIt = "Shabir";
var new_din_guest = "Sahil";
din_guests[din_guests.indexOf(guestWhoCantMakeIt)] = new_din_guest;
console.log("I am sorry, " + guestWhoCantMakeIt + " cant make it to dinner.");
console.log("I am now inviting " + din_guests.length + " people to dinner.");
///////////// More Guests /////////////
var new_din_uests = ["Usman", "Faizan", "Taimur"];
din_guests.unshift(new_din_uests[0]);
din_guests.splice(1, 0, new_din_uests[1]);
din_guests.push(new_din_uests[2]);
console.log("I found a bigger dinner table, so I am inviting " + din_guests.length + " people to dinner.");
///////////// Shrinking Guest List /////////////
console.log("I can only invite two people to dinner.");
while (din_guests.length > 2) {
    var guest = din_guests.pop();
    console.log("Sorry, ".concat(guest, ", I can't invite you to dinner."));
}
console.log("I am still inviting ".concat(din_guests[0], " and ").concat(din_guests[1], " to dinner."));
///////////// Printing the number of guests /////////////
console.log("I am inviting " + din_guests.length + " people to dinner.");
