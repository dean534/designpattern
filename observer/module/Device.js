class Divice {
    constructor(name) {
        this.name=name;
        this.humidity = null;
        this.temperature = null;
        this.pressure = null;
    }

    update(humidity, temperature, pressure) {
        this.humidity = humidity;
        this.temperature = temperature;
        this.pressure = pressure;
        return this;
    }

    getState(){
        return this;
    }
}

module.exports = Divice