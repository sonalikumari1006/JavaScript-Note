//++++++++ Function ++++++++++++++

function sayMyName(){
    //console.log("s");
}
sayMyName();

// function addTwoNumber(num1,num2){ // num1 and num2 are Prameter
//     console.log(num1+num2)
// }
// addTwoNumber(5,8); // 5 and 8 are arguments
// addTwoNumber(5+"8");
// addTwoNumber(5,null);

//const result=addTwoNumber(4,9)
// Because function does not return any value that's why result hold "undefine"
//console.log("result:" , result); // result: undefine

function addTwoNumber(num1,num2){ // num1 and num2 are Prameter
         return (num1+num2)
 }
const result=addTwoNumber(5,9);
// console.log(result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}
//console.log((loginUserMessage("Sonali")));
//console.log((loginUserMessage()));

// default value passed in function
function loginUserMessage(username="sonali"){
    if(username === undefined){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage())

// ++++++ rest operator ++++++++++
// rest operator is used for packing of value 
// function calculateCartPrice(...num1){
//     return num1
// }
// add all the value in array
//console.log(calculateCartPrice(400,200,700)); // [400,200,700]

function calculateCartPrice(val1,val2,...num1){
    return num1;
}
// 200 insert in val1 and 900 insert into val2.
// console.log(calculateCartPrice(200,900,600,2000,600)); // [600,2000,600]

// ++++ Pass object inside the function +++++
const user={
    username:"sonali",
    price:999
}
function handle_object(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
//handle_object(user)
handle_object({
    username: "sonali",
    price:899
})

// +++++++ Array Pass in function +++++++
const myNewArray=[100,200,300,900]
function returnSecondValue(getArray){
      return getArray[1];
} 
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([800,600,400,300]));

