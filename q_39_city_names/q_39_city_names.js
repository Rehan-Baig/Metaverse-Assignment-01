"use strict";
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Call the function with different city-country pairs
var result1 = city_country("Lahore", "Pakistan");
console.log(result1); // Output: "Lahore, Pakistan"
var result2 = city_country("Paris", "France");
console.log(result2); // Output: "Paris, France"
var result3 = city_country("Sydney", "Australia");
console.log(result3); // Output: "Sydney, Australia"
