"use strict";
// Tests for equality and inequality with strings
console.log('apple' === 'apple'); // true
console.log('apple' !== 'apple'); // false
// Tests using the lower case function
console.log('APPLE'.toLowerCase() === 'apple'); // true
console.log('APPLE'.toLowerCase() !== 'orange'); // true
console.log('APPLE'.toLowerCase() === 'orange'); // false
console.log('APPLE'.toLowerCase() !== 'apple'); // false
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(5 === 5); // true
console.log(5 > 4); // true
console.log(5 < 6); // true
console.log(5 >= 5); // true
console.log(5 <= 6); // true
console.log(5 !== 5); // false
console.log(5 > 6); // false
console.log(5 < 4); // false
console.log(5 >= 6); // false
console.log(5 <= 4); // false
// Tests using "and" and "or" operators
console.log(5 > 4 && 6 > 5); // true
console.log(5 > 4 || 6 < 5); // true
console.log(5 > 6 && 6 > 5); // false
console.log(5 > 6 || 6 < 5); // false
// Test whether an item is in a array
var myArray = [1, 2, 3, 4, 5];
var itemToFind = 3;
if (myArray.includes(itemToFind)) {
    console.log("Item found in the array!");
}
else {
    console.log("Item not found in the array.");
}
// Test whether an item is not in a array
var my_array = [1, 2, 3, 4, 5];
var item_to_find = 6;
if (!my_array.includes(item_to_find)) {
    console.log("Item not found in the array.");
}
else {
    console.log("Item found in the array!");
}
