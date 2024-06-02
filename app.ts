// Define an array to store a list of famous cities
const cities: string[] = [
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
function displayCities(cityList: string[]): void {
    console.log("List of Famous Cities:");
    cityList.forEach((city, index) => {
        console.log(`${index + 1}. ${city}`);
    });
}

// Display the list of cities
displayCities(cities);
