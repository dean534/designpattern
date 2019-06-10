const Beverage = require('./Beverage');

class HouseBlend extends Beverage {
    constructor(ref) {
        super(ref);
        this.description = 'HouseBlend';
        this.cost = 1.5;
    }
}

class DarkRoast extends Beverage {
    constructor(ref) {
        super(ref);
        this.description = 'DarkRoast';
        this.cost = 1.7;
    }
}

class Espresso extends Beverage {
    constructor(ref) {
        super(ref);
        this.description = 'Espresso';
        this.cost = 1.3;
    }
}

class Decaf extends Beverage {
    constructor(ref) {
        super(ref);
        this.description = 'Decaf';
        this.cost = 2.5;
    }
}

module.exports = { HouseBlend, DarkRoast, Espresso, Decaf }