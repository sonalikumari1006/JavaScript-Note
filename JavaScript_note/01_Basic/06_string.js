const name="sonali"
const count= 45
// Does not use that because it outdated
// console.log(nane+count+"value");

// ============ String interpolation =============
// backticks (`)

console.log(`Hello my name is ${name} and my repo count is ${count}`);
// ============= String declaration using new keyword
// if we are created string using new keyword then indexing use
const game_name=new String('sonali')
console.log(game_name[0]);
console.log(game_name.__proto__);
// ======================
console.log(game_name.length);
console.log(game_name.toUpperCase());
console.log(game_name.charAt(2));
console.log(game_name.indexOf('l'));
//=====================================
// Is you put -ve value in substring then substring ignor that value and start from 0

const newString=game_name.substring(0,4);
console.log(newString);
//====================================
// In "slice" we can use negative index also
const anotherString=game_name.slice(-8,4);
console.log(anotherString)
//====================================
const newStringOne="   sonali   "
console.log(newStringOne);
// "trim" ignor extra space from string
// The trim() method of String values removes whitespace from both 
// ends of this string and returns a new string, without modifying the original string.
// To return a new string with whitespace trimmed from just one end, use "
//"trimStart()" or "trimEnd()".
console.log(newStringOne.trim());
// we can refer documentation (mdn)
// ===================================
const url="https://sonali.com/sonali%20"
console.log(url.replace('%20','_'))
// search value
console.log(url.includes('sonali'))
// ================================
//const arr= ["sonali","kumari","runable"];
const str='The quick brown fox jumps over the lazy dog. '
console.log(arr.split(' '));






