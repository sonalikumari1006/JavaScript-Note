// +++++++ Scope ++++++++++
//let a=900 // globle scope
if(true){
    let a=10 // block scope
    const b=20
    var c=30
}
//console.log(a) // show error because we can't access a outside if
// show error because we can't access "b" outside if
// console.log(b)
// print c=30 
// console.log(c)

// ++++++++++ nested scop +++++++++++++++
// function one(){
//     const username="sonali"

//     function two(){
//         const website="youtube"
//         console.log(username);
//     }
//     // console.log(website); error
//     two()
// }
// one()

// ==================

if(true){
    const username="sonali"
    if(username==="sonali"){
        const website="youtube"
        //console.log(username+website);
    }
    // console.log(website); error(website is not define)
}
//console.log(username); // username is not define

// ++++++++++ Interesting ++++++++++++++++

// normal function
console.log(addone(5)) // does not show error
function addone(num){
    return num+1
}
// addone(5)

// expression
// note: javaScript variable hold function,object,json value etc
// ReferenceError: Cannot access 'addTwo' before initialization
// console.log(addTwo()) error
// when function define using variable
const addTwo=function(num){
    return num+2
}
//addTwo()

