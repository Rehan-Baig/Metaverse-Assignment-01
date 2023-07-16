function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
      magicians[i] = `The Great ${magicians[i]}`;
  }
}

function show_magicians(magicians: string[]) {
  for (const magician of magicians) {
      console.log(magician);
  }
}

const magicians: string[] = ['David Copperfield', 'Harry Houdini', 'Penn & Teller'];

console.log("Original list :");
show_magicians(magicians);
make_great(magicians);

console.log("\n**************************");

console.log("\nModified list :");
show_magicians(magicians)