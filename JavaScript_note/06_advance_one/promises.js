const promiseOne=new Promise(function(resolve,reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
      console.log('Async task is compelete'); 
      resolve()
    }, 1000)

})
// consume promise
// After the resolve() promises then run below function
promiseOne.then(function(){
   console.log("Promise consumed");
})
// =====================================

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

// ========================================

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve({username:"sonali",email:"sonali@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    // console.log(user);
})

// ===================================
//++++++++ this is perfect way to use promises +++++++++++++

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"sonali",password:"123"})
        }
    else{
        reject('Error:Something went wrong')
    }
    },1000)
})
// 2nd then ka parameter m 1st then ka value aa yaha ga 
// catch run if "reject" the promise
// Final method aiways execute if promise resolved or reject
promiseFour.then((user)=>{
  console.log(user);
  return user.username
}).then((usernamre)=>{
    console.log(usernamre);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("The promise is either resolved or rejectrd"))

// ========================================================
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"",password:"123"})
        }
    else{
        reject('Error:Something went wrong')
    }
    },1000)
})
// ==========================================================

// asyncWait juch time wait karta ha kam ka hone kaa
// does not run it shows error because promises give error
// await promiseFive always wait for value tha's why its give error
// async function consumePromiseFive(){
//     const response =await promiseFive
//     console.log(response);
// }
// consumePromiseFive()

//  Noth : Both methode use for handle promised
async function consumePromiseFive(){
    try{
        const response =await promiseFive
        console.log(response);
    }
    catch(error){
       console.log(error);
    }
}
consumePromiseFive()

// =========================================
// async function ha to kuch response aaya ga 
// async function getAllUser(){
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//     const data= await response.json();
//     console.log(data)
//     }
//     catch(error){
//         console.log("E: ",error);
//     }
// }
// getAllUser();

// ==========================================
// ====== Read fetch document =============
// Note: The fetch() function will reject the promise on some errors, but not if the server responds with an error status like 404
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))