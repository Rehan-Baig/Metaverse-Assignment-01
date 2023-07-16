"use strict";
var fav_magicians = ["David Copperfield", "Harry Houdini", "David Blaine"];
var makeGreat = function (fav_magicians) {
    var greatfav_magicians = [];
    for (var _i = 0, fav_magicians_1 = fav_magicians; _i < fav_magicians_1.length; _i++) {
        var magician = fav_magicians_1[_i];
        var greatMagician = "The Great " + magician;
        greatfav_magicians.push(greatMagician);
    }
    return greatfav_magicians;
};
var show_fav_magicians = function (fav_magicians) {
    for (var _i = 0, fav_magicians_2 = fav_magicians; _i < fav_magicians_2.length; _i++) {
        var magician = fav_magicians_2[_i];
        console.log(magician);
    }
};
var greatfav_magicians = makeGreat(fav_magicians.slice()); // Make a copy of the fav_magicians array.
show_fav_magicians(fav_magicians);
console.log("*************************************");
show_fav_magicians(greatfav_magicians);
