let score="sonali"
//console.log(typeof score)

let valueInNumber=Number(score)
//console.log(valueInNumber) 0/p=>NaN
//console.log(typeof valueInNumber)

// "33" => 33
// "33abc" => NaN
// "sonali" => NaN
// true => 1; false => 0

let isLoggedIn="sonali"
let booleeanIsLoggedIn=Boolean(isLoggedIn)
//console.log(booleeanIsLoggedIn)

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ================ Postfix and prefix operator ==========
// let x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`);
// // Expected output: "x:4, y:3"

// let a = 3;
// const b = ++a;

// console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
//Note:
//++(++x); // SyntaxError: Invalid left-hand side expression in prefix operation

let x = 3;
const y = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n
