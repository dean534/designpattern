class SoundBehavior{
    sound(){
        return this.behave;
    }
}

class Squack extends SoundBehavior{
    constructor(){
        super();
        this.behave = 'I say "Squack".';
    }
}

class NoSound extends SoundBehavior{
    constructor(){
        super();
        this.behave = 'I can\'t say anything.';
    }
}
const a = {};
a.Squack = Squack;
a.NoSound = NoSound;
module.exports = a;
