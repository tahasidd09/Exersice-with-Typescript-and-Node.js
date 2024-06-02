function make_shirt(size: string = 'L', message: string = 'I love TypeScript'): void {
    console.log(`The shirt size is ${size} and it has the message: "${message}" printed on it.`);
}

// Call the function to make a large shirt with the default message
make_shirt();

// Call the function to make a medium shirt with the default message
make_shirt('M');

// Call the function to make a shirt of any size with a different message
make_shirt('S', 'JavaScript is cool');
