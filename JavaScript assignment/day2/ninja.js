class Ninja {
    constructor(name,health,speed = 3,strength = 3){
        this.name =name
        this.health =health
        this.speed =speed
        this.strength =strength
    }
    // methods
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(this);
    }
    drinkSake(){
        return this.health +=10
    }
   
}
const ninja1 = new Ninja("Hyabusa",88);
ninja1.sayName()
ninja1.drinkSake();
ninja1.showStats();