function store_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var _b = options_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
// Call the function with required information and additional name-value pairs
var my_car = store_car('Toyota', 'Corolla', ['color', 'red'], ['year', 2022]);
// Print the returned object to check if the information was stored correctly
console.log(my_car);
