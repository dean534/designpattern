class WeatherData {
    constructor() {
        this.humidity = null;
        this.temperature = null;
        this.pressure = null;
        this.devices = []
    }

    updateData(humidity, temperature, pressure) {
        this.humidity = humidity;
        this.temperature = temperature;
        this.pressure = pressure;
        this.sendToDevices(humidity,temperature,pressure);
        return this;
    }

    addToList(device) {
        this.devices.push(device);
        return this;
    }

    removeFromList(device) {
        this.devices = this.devices.filter(item => item !== device);
        return this;
    }

    sendToDevices() {
        this.devices.forEach(device => device.update(this.humidity, this.temperature, this.pressure));
        return this;
    }
}

module.exports = WeatherData