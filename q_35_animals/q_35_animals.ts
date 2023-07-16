const animals: string[] = ["Dog", "Cat", "Rabbit"];

// Printing the names of each animal
console.log("Animal names:");
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// Printing a statement about each animal
console.log("\nAnimal statements:");
for (let i = 0; i < animals.length; i++) {
  console.log("A " + animals[i] + " would make a great pet.");
}

// Additional sentence about what these animals have in common
console.log("\nAny of these animals would make a great pet!");