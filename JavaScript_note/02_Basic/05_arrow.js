const user={
    username:"sonali",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`)
        console.log(this)
    }
}
// "this" keyword tell about current value inside variable
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

//console.log(this) // {} (empty object)
// browser ka under jo global object ha oo ha ha "window" object

// +++++++ this inside function +++++++++
// function chai(){
//     //console.log(this)
//     let username="sonali"
//     // does not use "this" inside function
//     console.log(this.username) //undefine 
// }
// chai()
// const chai=function(){
//     let username="sonali"
//     console.log(this.username) // undefine
// }
// chai()

// +++++++++ arrow function +++++++++++++
// const chai=() => {
//     console.log(this) // empty object({})
//     let username="sonali"
//     console.log(this.username) // undefine
// }
// chai()
// +++++++++++++++++++++
// const addTwo=(num1,num2) =>{
//     return num1+num2
// }

//const addTwo=(num1,num2) => num1+num2

//const addTwo=(num1,num2) => (num1+num2)
// you need paranthesis wehen we return object
const addTwo=(num1,num2) => ({username:"sonali"})
console.log(addTwo(4,9));












