function make_sandwich(items: string[]) {
  console.log("\nYour sandwich will have the following items:");
  for (const item of items) {
    console.log(`${item}`);
  }
}

// Call the function , using a different number of arguments each time
make_sandwich(["ham", "cheese"]);
make_sandwich(["ham", "cheese", "lettuce"]);
make_sandwich(["ham", "cheese", "lettuce", "tomato"]);