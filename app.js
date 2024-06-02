// Define an array to store a list of famous cities
var cities = [
    "Delhi",
    "Bangkok",
    "Beijing",
    "jakarta",
    "Cairo",
    "Taipei",
    "Moscow",
    "Cape Town",
    "Beijing",
    "London"
];
// Function to display the list of cities
function displayCities(cityList) {
    console.log("List of Famous Cities:");
    cityList.forEach(function (city, index) {
        console.log("".concat(index + 1, ". ").concat(city));
    });
}
// Display the list of cities
displayCities(cities);
