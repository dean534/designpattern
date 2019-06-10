const Beverage = require('./Beverage');


class CondimentDecorator extends Beverage {
    getDescription() {
        return `${this.description} ${this.beverage.getDescription()}`;
    }
    getCost() {
            return this.cost + this.beverage.getCost();
    }
}

class Mocha extends CondimentDecorator {
    constructor(beverage) {
        super();
        this.cost = 0.5;
        this.description = 'Mocha';
        this.beverage = beverage;
    }
}

class Milk extends CondimentDecorator {
    constructor(beverage) {
        super();
        this.cost = 0.6;
        this.description = 'Milk';
        this.beverage = beverage;
    }
}

class Soy extends CondimentDecorator {
    constructor(beverage) {
        super();
        this.cost = 0.2;
        this.description = 'Soy';
        this.beverage = beverage;
    }
}

class Whip extends CondimentDecorator {
    constructor(beverage) {
        super();
        this.cost = 0.8;
        this.description = 'Whip';
        this.beverage = beverage;
    }
}

module.exports = { Whip, Soy, Milk, Mocha }