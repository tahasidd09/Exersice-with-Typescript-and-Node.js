function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!\n");
}

// Call the function with different numbers of arguments
make_sandwich('ham', 'cheese', 'lettuce');
make_sandwich('turkey', 'bacon', 'avocado', 'tomato');
make_sandwich('peanut butter', 'jelly');

