class FlyBehavior{
    fly(){
        return this.behave;
    }
}

class FlyWithWing extends FlyBehavior{
    constructor(){
        super();
        this.behave = 'I\'m fly in the sky.';
    }
}

class DontFly extends FlyBehavior{
    constructor(){
        super();
        this.behave = 'I can\'t fly';
    }
}

const a = {};
a.FlyWithWing = FlyWithWing;
a.DontFly = DontFly;
module.exports = a;