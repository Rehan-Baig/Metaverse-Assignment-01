"use strict";
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great ".concat(magicians[i]);
    }
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magicians = ['David Copperfield', 'Harry Houdini', 'Penn & Teller'];
console.log("Original list :");
show_magicians(magicians);
make_great(magicians);
console.log("\n**************************");
console.log("\nModified list :");
show_magicians(magicians);
