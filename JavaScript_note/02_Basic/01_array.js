// ====================== Array ===================
// Read documentation (MDN) for theory
const arr1=[0,1,2,3,4,5]
// declaration of array using "new" keyword
const arr=new Array(1,2,3,4)
//console.log(arr2[1]);

// ============== Array method =======================

// arr.push(8) // add element in last
// console.log(arr)
// arr.pop() // Remove element from last
// console.log(arr)
// arr.unshift(9); // add element in 1st
// console.log(arr)
// arr.shift() // Remove element from 1st
// console.log(arr)

// console.log(arr.includes(9)) // false
// console.log(arr.indexOf(3)) // 2

// ================ join ================

const new_arr=arr.join();
// console.log(arr);
// console.log(new_arr);
// console.log(typeof new_arr) // string

// ========== slice and splice ===============

// console.log("A", arr) // A [1,2,3,4]
// const myn1=arr.slice(1,3); // Does not include last index and not change occurs in original array

// console.log(myn1) // [2,3]
// console.log("B" ,arr) // B [1,2,3,4]

// const myn2=arr.splice(1,3); // Include last index(3) and chande occurs in original array
// console.log(myn2); // [2,3,4]
// console.log("C",arr) // C [1]

// ++++++++++++++++++++++++++++++++++++++++++++++
 const hero1=["thor","marbal","spiderman"]
 const hero2=["superman","flash","batman"]
// hero1.push(hero2)
// console.log(hero1); // Print array inside the array
// ==============================
const all_hero=hero1.concat(hero2); // combine two array and create a new array
// console.log(all_hero); 

// =============== spread array ============
const all_new_hero=[...hero1,...hero2];
// console.log(all_new_hero)
// ================ flat method ================
const another_array=[1,2,3,[4,6,7],9,[3,7,[12,16,1]]];
// we can give value in place of "Infinity"
const real_another_array=another_array.flat(Infinity) // spread all the element in array 
// console.log(real_another_array);

// ================= Conversion of Array =============================

console.log(Array.isArray("sonali"))
// Any datatype value pass in 'from'
console.log(Array.from("sonali")) // Convert string into array ['s','o','n','a','l','i']
console.log(Array.from({name:"sonali"})) // give empty error because you are not specify which are convert into array "key" or "value"

let score1=878
let score2=656
let score3=67
console.log(Array.of(score1,score2,score3))
console.log(Array.from((score1,score2,score3))) // empty error









