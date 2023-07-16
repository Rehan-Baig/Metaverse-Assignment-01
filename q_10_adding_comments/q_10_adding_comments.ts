// Following programe prints the quote and the name of its author.
function printQuoteAuthor(quote: string, author: string): void {
  console.log(`"${quote}" - ${author}`);
}

const fav_quote = "The greatest glory in living lies not in never falling, but in rising every time we fall.";
const quote_author = "Nelson Mandela";

printQuoteAuthor(fav_quote, quote_author);

// Following programe prints the name with whitespace around the name is displayed. Then print the name after striping the white spaces.
const name_with_whitespace: string = "\t  John Doe \n";
console.log("Name with whitespace:", name_with_whitespace);

const stripped_name: string = name_with_whitespace.trim();
console.log("Stripped name:", stripped_name);