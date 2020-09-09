class TemperatureUnit {
    constructor(unitFrom, degree) {
        this.unitFrom = unitFrom;
        this.degree = degree;
    }
}


TemperatureUnit.prototype.toFahrenheit = function() {
    let calc = {
        'F': () => this.degree,
        'K': () => ((9 * (this.degree - 273.15)) / 5) + 32,
        'C': () => (9 * this.degree / 5) + 32,
    };

    return calc[this.unitFrom]();
};

TemperatureUnit.prototype.toCelsius = function() {
    let calc = {
        'F': () => (5 * (this.degree - 32)) / 9,
        'K': () => this.degree - 273.15,
        'C': () => this.degree
    };

    return calc[this.unitFrom]();
};



TemperatureUnit.prototype.toKelvins = function() {
    let calc = {
        'F': () => (5 * (this.degree - 32) / 9) + 273.15,
        'K': () => this.degree,
        'C': () => this.degree + 273.15
    };

    return calc[this.unitFrom]();
};


// console.log(new TemperatureUnit('C', 1).toFahrenheit()); // true
// console.log(new TemperatureUnit('F', 1).toFahrenheit()); // true
// console.log(new TemperatureUnit('K', 1).toFahrenheit()); // true

// console.log(new TemperatureUnit('C', 1).toCelsius()); // true
// console.log(new TemperatureUnit('F', 1).toCelsius()); // true
// console.log(new TemperatureUnit('K', 1).toCelsius()); // true


// console.log(new TemperatureUnit('C', 1).toKelvins()); // true
// console.log(new TemperatureUnit('F', 1).toKelvins()); // true
// console.log(new TemperatureUnit('K', 1).toKelvins()); // true



module.exports['TemperatureUnit'] = TemperatureUnit;