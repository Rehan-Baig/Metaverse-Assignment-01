"use strict";
var favoritePizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];
// Printing the names of each pizza
console.log("Pizza names:");
for (var i = 0; i < favoritePizzas.length; i++) {
    console.log(favoritePizzas[i]);
}
// Printing a sentence using the name of each pizza
console.log("\nPizza statements:");
for (var i = 0; i < favoritePizzas.length; i++) {
    console.log("I like " + favoritePizzas[i] + " pizza.");
}
// Additional sentence about liking pizza
console.log("\nI really love pizza!");
