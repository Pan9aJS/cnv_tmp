class Degree {
    constructor(unit, t = 0) {
        this.unit = unit;
        this.t = t;
    }


    Celsius() {
        return this.convert('C');
    }


    Kelvins() {
        return this.convert('K');
    }


    Fahrenheit() {
        return this.convert('F');
    }


    getAll() {
        return {
            'F': this.convert('F'),
            'C': this.convert('C'),
            'K': this.convert('K')
        };
    }


    _error() {
        let has = ['F', 'K', 'C'].includes(this.unit);
        if (!has)
            throw new Error('Parameters were passed incorrectly.\nExample: new Degree(\'C\', 1);');
    }


    convert(__unit) {
        this._error(); // если всё верно, то это функция ничего не сделает.

        let units = {
            'F': {
                'C': ((this.t - 32) * (5 / 9)),
                'F': this.t,
                'K': ((this.t + 459.67) * (5 / 9))
            },
            'C': {
                'C': this.t,
                'F': (this.t * (9 / 5)) + 32,
                'K': this.t + 273.15
            },
            'K': {
                'C': ((this.t + 459.67) * (5 / 9)),
                'F': this.t - 273.15,
                'K': this.t
            },
        };
        return units[this.unit][__unit];
    }

    getAll() {
        return {
            'F': this.convert('F'),
            'C': this.convert('C'),
            'K': this.convert('K')
        };
    }
}


module.exports = Degree;