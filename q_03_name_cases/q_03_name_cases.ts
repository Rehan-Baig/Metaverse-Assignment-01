let personName: string = "John Doe";

console.log("Lowercase:", personName.toLowerCase());
console.log("Uppercase:", personName.toUpperCase());
console.log("Titlecase:", toTitleCase(personName));

function toTitleCase(str: string): string {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
}