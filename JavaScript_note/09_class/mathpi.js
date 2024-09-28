// get the information about (hidden properties)
 const descripter=Object.getOwnPropertyDescriptor(Math,"PI")
 //console.log(descripter)
// output: {value: 3.141592653589793, writable: false, enumerable: false, configurable: false}
// console.log(Math.PI);
// // Does not override PI value because value of "PI" is constant
// Math.PI=5
// console.log(Math.PI); // does not change value into 5

// ===========================================

const User={
    name:'sonali',
    email:"sonali@gmail.com",
    id: "123",
    isAvailable: true,
    login: function(){
        console.log("User does not login");
    }
}
//console.log(User);

console.log(Object.getOwnPropertyDescriptor(User,"name"));

// ====== Define properties ==============
Object.defineProperty(User,'name',{
    // writable:false,
    enumerable: false
})
// console.log(Object.getOwnPropertyDescriptor(User,"name"));

// ==== Does not itterate because User is Object
// for(let [key,value] of User){
//     console.log(`${key}: ${value}`);
// }

// ==============================
// if function is present inside Object that's Output give with function
// But i want only key and value
// That's why we use "if" condition 

// if enumerable=falue we does apply loop on key ('name')
for(let [key,value] of Object.entries(User)){
    if(typeof value !== 'function'){
    console.log(`${key} : ${value}`);
    }
}









