// Create an array of car objects
var cars = [
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
function displayCars(carList) {
    console.log("List of Cars:");
    carList.forEach(function (car, index) {
        console.log("".concat(index + 1, ". ").concat(car.year, " ").concat(car.make, " ").concat(car.model, " (").concat(car.color, ")"));
    });
}
// Display the list of cars
displayCars(cars);
