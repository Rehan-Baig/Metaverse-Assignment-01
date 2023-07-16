"use strict";
var personName = "John Doe";
console.log("Lowercase:", personName.toLowerCase());
console.log("Uppercase:", personName.toUpperCase());
console.log("Titlecase:", toTitleCase(personName));
function toTitleCase(str) {
    return str.replace(/\b\w/g, function (match) { return match.toUpperCase(); });
}
