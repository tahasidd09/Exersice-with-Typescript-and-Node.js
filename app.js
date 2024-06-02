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
    // Introduce an intentional index error
    for (var i = 0; i <= carList.length; i++) { // 'i <= carList.length' will cause an out-of-bounds error
        console.log("".concat(i + 1, ". ").concat(carList[i].year, " ").concat(carList[i].make, " ").concat(carList[i].model, " (").concat(carList[i].color, ")"));
    }
}
// Display the list of cars
displayCars(cars);
