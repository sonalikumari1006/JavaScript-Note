// Types of DataType in JavaScript
// 1) Premitive
// 2) Non Premitive
// ===================================
// Premitive 
// & types: String, Number, Boolean,null,undefined,symbol,BigInt

//======================================
// Reference (Non primitive)
// Array,Objects,Functions

//================================
//Note: JavaScript is dynamically type language

const id=Symbol('123')
const anotherId=Symbol('123')
// Symbol store different value
// console.log(id===anotherId); // false
// console.log(anotherId);

const bidNumber=819458597694800n // big int
//=====================================
// Array
const hero=["shaktiman","doga","naagraj"];
// Object
let myObj={
    name: "sonali",
    age: 23,
}

// +++++++++++++++++++++++ Memory management in JavaScript +++++++++++++

// Stack(Primitive) ,Heap (Non-Primitive)
let my_name="sonali"

let another_name=my_name
another_name="sonalikr"
// console.log(my_name); // sonali 
// console.log(another_name); // sonalikr
// Note: copy created that's why does not change in original value
// In stack copy of variable created
// =====================================
 let user1={
    email:"sonalikr1006@gmail.com",
    upi: "user@ybl"
 }
 let user2=user1;
 user1.email="sonalikr0009@gmail.com"
 console.log(user1.email)
 console.log(user2.email)
// Note: In Heap does not create a copy 
// In Heap refer same object reference that's if i change occurs in one object change happen in both object



