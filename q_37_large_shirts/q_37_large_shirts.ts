function make_shirt(size: string = "Large", message: string = "I love TypeScript") {
  console.log(`A ${size} shirt will be printed with the message: "${message}".`);
}

make_shirt();                          // Large shirt with default message
make_shirt("Medium");                  // Medium shirt with default message
make_shirt("Small", "Hello, World!");  // Custom small shirt with a different message