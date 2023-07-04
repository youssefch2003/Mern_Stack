class  Card {
    constructor (name,cost){
        this.name = name
        this.cost = cost 
    }
}

class  Unit extends Card {
    constructor (name,cost,power,res){
        super(name,cost);
        this.power = power 
        this.res = res 
    }
    attack(target){
        target.res -= this.power
    }
}

class  Effect extends Card {
    constructor (name,cost,text,stat,magnitude){
        super(name, cost);
        this.text = text 
        this.stat = stat
        this.magnitude = magnitude
    }
    play( target ) {
        if( target instanceof Unit ) {
            if (this.stat == "resilience") {
                target.res+=this.magnitude
            }
            if (this.stat == "power") {
                target.power+=this.magnitude
            }
        } else {
            console.log( "Target must be a unit!" );
        }

}}

const RedBeltNinja = new Unit("redbelt",3,3,4)
const BlackBeltNinja = new Unit("blackbelt",4,5,4)


const HardAlgorithm = new Effect("Hard Algorithm",2,"increase target's resilience by 3","resilience",3);
const UnhandledPromiseRejection = new Effect("Unhandled Promise Rejection",1,"reduce target's resilience by 2","resilience",-2);
const PairProgramming = new Effect("Pair Programming",3,"increase target's power by 2","power",2);

HardAlgorithm.play(RedBeltNinja);
UnhandledPromiseRejection.play(BlackBeltNinja);
PairProgramming.play(RedBeltNinja);
RedBeltNinja.attack(BlackBeltNinja);

console.log(RedBeltNinja);
console.log(BlackBeltNinja);
// Unit { name: 'redbelt', cost: 3, power: 5, res: 7 }
// Unit { name: 'blackbelt', cost: 4, power: 5, res: -3 }