"use strict";
var current_users = ['John', 'Alice', 'Bob', 'Jane', 'Mark'];
var new_users = ['Mike', 'Sara', 'John', 'David', 'Sam'];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log("Sorry, the username '".concat(new_user, "' is already taken. Please choose a different username."));
    }
    else {
        console.log("The username '".concat(new_user, "' is available."));
    }
}
