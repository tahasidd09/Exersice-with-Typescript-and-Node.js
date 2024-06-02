function describe_city(city: string, country: string = 'USA'): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city('New York'); // Using the default country
describe_city('Los Angeles'); // Using the default country
describe_city('Tokyo', 'Japan'); // Specifying a different country
