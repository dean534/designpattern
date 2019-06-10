class Duck{
    constructor(name, flyBehavior ,soundBehavior){
        this.name = name;
        this.flyBehavior = flyBehavior;
        this.soundBehavior = soundBehavior;
    }

    setFlyBehavior(flyBehavior){
        this.flyBehavior = flyBehavior;
        return this;
    }

    setSoundBehavior(soundBehavior){
        this.soundBehavior = soundBehavior;
        return this;
    }

    fly(){
        return console.log(this.flyBehavior.fly());
    }

    sound(){
        return console.log(this.soundBehavior.sound());
    }
}

module.exports = Duck;