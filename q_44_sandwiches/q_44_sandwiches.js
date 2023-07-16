"use strict";
function make_sandwich(items) {
    console.log("\nYour sandwich will have the following items:");
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        console.log("".concat(item));
    }
}
// Call the function , using a different number of arguments each time
make_sandwich(["ham", "cheese"]);
make_sandwich(["ham", "cheese", "lettuce"]);
make_sandwich(["ham", "cheese", "lettuce", "tomato"]);
