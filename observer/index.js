const WeatherData = require('./module/WeatherData');
const Device = require('./module/Device');

const publisher = new WeatherData();
const iphone = new Device('iphone');
const samsung = new Device('samsung');
const htc = new Device('htc');

publisher.addToList(iphone).addToList(samsung).addToList(htc);
publisher.updateData('30', '30', '30');
console.log('beforeRemove',iphone.getState(),samsung.getState(),htc.getState());

publisher.removeFromList(samsung).removeFromList(htc);
publisher.updateData('25', '25', '25');
console.log('afterRemove',iphone.getState(),samsung.getState(),htc.getState());
