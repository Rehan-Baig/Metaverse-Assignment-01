"use strict";
var old_guests = ["Ayesha", "Abdullah", "Safiullah", "Asadullah"];
console.log('I found a bigger dinner table!');
old_guests.unshift('Usman'); // Add one new guest to the beginning of the array
old_guests.splice(2, 0, 'Faizan'); // Add one new guest to the middle of the array
old_guests.push('Waleed'); // Add one new guest to the end of the array
for (var _i = 0, old_guests_1 = old_guests; _i < old_guests_1.length; _i++) {
    var guest = old_guests_1[_i];
    console.log("Dear ".concat(guest, ",\n\n  I would be honored if you would join me for dinner. I would love to hear your stories and learn from your experiences.\n\n  Sincerely,\n  Rehan\n"));
}
