// Define a type for a car
type Car = {
    make: string;
    model: string;
    year: number;
    color: string;
};

// Create an array of car objects
const cars: Car[] = [
    {
        make: "Toyota",
        model: "Camry",
        year: 2020,
        color: "Blue"
    },
    {
        make: "Honda",
        model: "Civic",
        year: 2018,
        color: "Red"
    },
    {
        make: "Ford",
        model: "Mustang",
        year: 2021,
        color: "Black"
    },
    {
        make: "Chevrolet",
        model: "Impala",
        year: 2019,
        color: "White"
    },
    {
        make: "Tesla",
        model: "Model 3",
        year: 2022,
        color: "Silver"
    }
];

// Function to display information about each car
function displayCars(carList: Car[]): void {
    console.log("List of Cars:");
    carList.forEach((car, index) => {
        console.log(`${index + 1}. ${car.year} ${car.make} ${car.model} (${car.color})`);
    });
}

// Display the list of cars
displayCars(cars);
