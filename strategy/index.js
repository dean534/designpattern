const Duck = require('./module/Duck');
const { FlyWithWing, DontFly } = require('./module/FlyBehavior');
const { Squack, NoSound } = require('./module/SoundBehavior');


let realDuck = new Duck('du', new FlyWithWing(), new Squack());
let dummyDuck = new Duck('du', new DontFly(), new NoSound());
realDuck.fly();
realDuck.sound();
dummyDuck.fly();
dummyDuck.sound();
dummyDuck.setSoundBehavior(new Squack());
dummyDuck.sound();