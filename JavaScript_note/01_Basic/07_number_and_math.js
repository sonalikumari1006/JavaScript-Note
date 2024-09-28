// ++++++++++++++++++++ Numbers ++++++++++++++++++++
const score=400;
//console.log(score); // 400
// +++++++++++++++++++++++++++++++++++++++++
// Always insure that if we are created a number using "new" keyword then only store number
const balance=new Number(100);
//console.log(balance); //[Number: 100]
//console.log(balance.toString().length); // 3
//console.log(balance.toFixed(2)); // 100.00
//+++++++++++++++++++++++++++++++++++++++++++++++++
const otherNumber=23.8977
//console.log(otherNumber.toPrecision(3)); // 23.9
const num1=123.8977
//console.log(num1.toPrecision(3)) // 124
//console.log(num1.toPrecision(4))
// +++++++++++++++++++++++++++++++++++++++++++++++++++
const hundred=10000000
//console.log(hundred.toLocaleString('en-IN')); // 1,00,00,000

// ++++++++++++ Maths +++++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));
// console.log(Math.min(4,6,7,3));
// console.log(Math.max(8,6,4,3));
// Always value between (0-1)
//console.log(Math.random());
// value (1-9)
//console.log((Math.random()*10)+1);

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min))+min)







