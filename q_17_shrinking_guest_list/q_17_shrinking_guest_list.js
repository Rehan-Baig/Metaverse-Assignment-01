"use strict";
// task 16:Shrinking Guest list
var guests = ["Ayesha", "Abdullah", "Safiullah", "Asadullah"];
console.log("I can only invite two people for dinner.");
while (guests.length > 2) {
    var guest = guests.pop();
    console.log("Sorry, ".concat(guest, ", I can't invite you to dinner."));
}
console.log("I'm still inviting ".concat(guests[0], " and ").concat(guests[1], " to dinner."));
guests.pop();
guests.pop();
console.log("My guest list is now empty.");
