interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allows arbitrary additional properties
}

function store_car(manufacturer: string, model: string, ...options: [string, any][]): Car {
    let car: Car = { manufacturer, model };
    for (let [key, value] of options) {
        car[key] = value;
    }
    return car;
}

// Call the function with required information and additional name-value pairs
let my_car = store_car('Toyota', 'Corolla', ['color', 'red'], ['year', 2022]);

// Print the returned object to check if the information was stored correctly
console.log(my_car);
