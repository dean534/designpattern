const {HouseBlend,DarkRoast,Espresso,Decaf}=require('./module/Main');
const {Mocha,Milk,Soy,Whip}=require('./module/Seasoning');


const beverage = new Soy(new Milk(new Mocha(new Espresso())));

const espresso = new Espresso();

console.log(beverage.getDescription(), beverage.getCost());
console.log(espresso.getDescription(), espresso.getCost());

