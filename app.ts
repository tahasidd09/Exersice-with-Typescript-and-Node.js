function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}

// Create an array of magician's names
let magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller', 'Criss Angel'];

// Create a new array with the modified magician names
let great_magicians = make_great([...magicians]);

// Show the original magicians
console.log("Original Magicians:");
show_magicians(magicians);

// Show the great magicians
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
