"use strict";
// Following programe prints the quote and the name of its author.
function printQuoteAuthor(quote, author) {
    console.log("\"".concat(quote, "\" - ").concat(author));
}
var fav_quote = "The greatest glory in living lies not in never falling, but in rising every time we fall.";
var quote_author = "Nelson Mandela";
printQuoteAuthor(fav_quote, quote_author);
// Following programe prints the name with whitespace around the name is displayed. Then print the name after striping the white spaces.
var name_with_whitespace = "\t  John Doe \n";
console.log("Name with whitespace:", name_with_whitespace);
var stripped_name = name_with_whitespace.trim();
console.log("Stripped name:", stripped_name);
