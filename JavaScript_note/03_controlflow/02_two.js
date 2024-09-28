const arr=[1,4,5,6,7]

for(const num of arr){
    //console.log(num);
}

const greetings="Hello world!"
for(const greet of greetings){
    if(greet===" "){
        continue;
    }
    //console.log(`Each char is ${greet}`);
}

// +++++++++++ map +++++++++++
// only hold unique value
// sequence of output same as input
// const map=new Map()
// map.set("IN","India")
// map.set("USA","United states of America")
// map.set("Fr","France")
// map.set("IN","India")

//console.log(map);

// for(const [key] of map){
//     //console.log(key); // only keys are print
// }


// for(const [key,value] of map){
//     //console.log(`${key} :-> ${value}`)
//     //console.log(key,":->",value); // only keys and value both are print
// }

// ++++++ for of loop on object ======

// const myObject={
//     game1:"NFS",
//     game2:"Spiderman"
// }
// TypeError: myObject is not iterable
//for(const [key,value] of myObject){
  //console.log(key, ':-' , value); 
//}
// ============== for in loop =================
const myObject={
  js:'javascript',
  cpp:'c++',
  rb:"ruby",
  swift:"swift by apple"
}
for(const key in myObject){
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}
//===========================
const programming =["js","rb","py","java","cpp"]

for(const i in programming){
   //console.log(`${i} := ${programming[i]}`); // key are print
}
// ==========================
// does not iterated
// const map=new Map()
// map.set("IN","India")
// map.set("USA","United states of America")
// map.set("Fr","France")
// map.set("IN","India")
// for(const key in map){
//   console.log(key);
// }

// =========== forEach ===========
const coding=["js","rb","py","java","cpp"]
// inside we will pass callback function(function without name)
// coding.forEach(function (val){
//     console.log(val);
// })
// using arrow function
//coding.forEach((val)=>console.log(val))

function printMe(item){
    //console.log(item);
}
coding.forEach(printMe);
// ============================
coding.forEach( (item,index,arr)=>{
    //console.log(item,index,arr);
}
)
// ========================
const myCoding=[
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "javascript",
        languageFileName: "js"
    },
]
myCoding.forEach( (item)=> {
    console.log(item.languageFileName);
})

