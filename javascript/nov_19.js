let bicycleOne = new BicycleConstructor(50, 20, 4);
let returnUndefined = BicycleConstructor(50, 20, 4);
// A contructor should be named with a capital start character as a namin convention
function BicycleConstructor(cadence, speed, gear){

    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
} 

console.log(bicycleOne);
console.log(returnUndefined);


function bicycleRegularFunction(cadence, speed, gear){
    let newBicycle = {};
    newBicycle.cadence = cadence;
    newBicycle.speed = speed;
    newBicycle.gear = gear;
    return newBicycle;
}

let bicycleTwo = new bicycleRegularFunction(90, 34, 5);
console.log(bicycleTwo);
