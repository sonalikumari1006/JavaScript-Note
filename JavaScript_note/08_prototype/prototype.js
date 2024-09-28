function multipleBy5(num){
    this.num=num
    return num*5;
}
multipleBy5.power=2
console.log(multipleBy5(5))
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

// ==========================
function createUser(username,score){
    this.username= username
    this.score=score
}
// crete own method
createUser.prototype.increment=function(){
     this.score++
}
createUser.prototype.printMe=function(){
    console.log(`price is ${this.score}`);
}
// this means ---> jisne bhi bulaya uska pass chala ja
const chai= new createUser("chai",25)
const tea= new createUser("tea",250)

chai.printMe();

// ================================================================
/* 
Here's what happens behind the scenes when the new keyword is used:

1) A new object is created: 
=> The new keyword initiates the creation of a new JavaScript object.

2) A prototype is linked: 
=> The newly created object gets linked to the prototype property of the constructor function. 
    This means that it has access to properties and methods defined on the constructor's prototype.

3) The constructor is called: 
=> The constructor function is called with the specified arguments and this is bound to the newly created object.
   If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

4) The new object is returned: 
=> After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned. 

*/

// ++++++++++++++++ Prototype +++++++++++++++++++++++++++++
let myName="hitesh   "
let mychannel="chai   "
//console.log(myName.trueLength);

let myHeros=["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
// Agar hum object ka under function create karte ha to o sab ko accessible hoga 
Object.prototype.sonali=function(){
    console.log("sonali is present in all objects");
}
// Only Array have this function
Array.prototype.heySonali=function(){
    console.log(`Sonali say Hello`);
}
// heroPower.sonali();
myHeros.soanli();
// myHeros.heySonali() //error

heroPower.heySonali()

// +++++++ Inheritance +++++++++++
const User={
    name:"chai",
    email: "chai@google.com"
}
const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssigment:'JS assigment',
    fullTime: true,
    // access of TeachingSupport
    __proto__:TeachingSupport
}
Teacher.__proto__=User;

// +++++++++++++ modern syntax of inheritance ===========
Object.setPrototypeOf(TeachingSupport,Teacher);

let anotherUsername="Sonali   "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
"sonali".trueLength()