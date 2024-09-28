// Immediately Invoked Function Exoresssions (IIFE)

// function hi(){
//     console.log("Hello")
// }
// hi()
// global scope se kayi bar pollution hoti to us pollution ko hatana ka liya "iife" use kiya
// "iife" immediately call

(function hi(){
    console.log("Hello")
})();
// note: if we use iife then always end (;)
// otherwise if we use iife nexttime in code it will through error
(function hiby(){
    console.log("Hello By")
})();

(()=>console.log("Hello By By"))();

((name)=>{console.log(`Hello By By ${name}`)})("sonali");

