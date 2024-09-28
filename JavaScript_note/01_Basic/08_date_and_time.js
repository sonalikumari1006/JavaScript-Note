// +++++++++++++++++++ Dates +++++++++++++++++++
let myDate =new Date()
//console.log(myDate.toString()); // give present time and date
//console.log(myDate.toDateString()); // Sat jul 06 2024
//console.log(myDate.toLocaleDateString()); // 7/6/2024
//console.log(myDate.toISOString());
//console.log(typeof myDate); // object

//+++++++++++++++++++++++++++++++++++++++++++
// month start from 0(jan)
//let myCreatedDate=new Date(2024,6,6);
//console.log(myCreatedDate);
//console.log(myCreatedDate.toDateString())

// +++++++++++++++++++++++++++++++++++++++
//let myCreatedDate=new Date(2024,6,6,5,3);
console.log(myCreatedDate.toLocaleString());

// ++++++++++++++++++++++++++++++++++++++++++
let myCreatedDate=new Date("2024-06-06");
//console.log(myCreatedDate.toLocaleString());

// ============================
let myTimeStamp =Date.now();
// console.log(myTimetamp);
// Time give im mili seconds always used for comparision
//console.log(myTimeStamp.getTime())
// output given in seconds
//console.log(Math.floor(Date.now()/1000));

// +++++++++++++++++++++++++++++++++++++++++++++

let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
// `${newDate.getDay()} and the time ${newDate.getMonth()+}`
// ++++++++++++++++++++++ Important ++++++++++++++++
newDate.toLocaleString('default',{
    weekday:"long",
 }
)





