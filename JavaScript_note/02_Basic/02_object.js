// +++++++++++++ Object ++++++++++++++
// singleton
// Object is created using two way
// 1) object literals

// create symbol
const mysym=Symbol("key1")
const jsuser={
    name: "Sonali",
    age: 18,
    // if you declare array in that way
    "full name":"sonali kumari", // only accsible using [] 
    location: "Delhi",
   [mysym]:"mykey1",
    email: "sonali@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}
// Note: In object always value access using (.) but some spical case we can use "[]"
//console.log(jsuser.email)
//console.log(jsuser["email"])
//console.log(jsuser["full name"])
//console.log(jsuser[mysym])
//console.log(typeof (jsuser[mysym]))
// console.log(jsuser."full name") // errror
// we can change the value in object
jsuser.email="sonalikr@gmail.com"
//console.log(jsuser)
// Object.freeze(jsuser) // After does not change in object
jsuser.email="sonali@google.com"
//console.log(jsuser)

// ======= add function in object
jsuser.greeting=function(){
    console.log("Hello")
}
jsuser.greeting_two=function(){
    console.log(`Hello ,${this.name}`)
}
// console.log(jsuser.greeting) // [Function(anonymous)]
// console.log(jsuser.greeting()) // Hello
// console.log(jsuser.greeting_two()) // Hello ,Sonali

// 2) Object created singleton object(using new "keyword")
const tinder_user=new Object()
//console.log(tinder_user)
tinder_user.id="123sff"
tinder_user.name="sonali"
tinder_user.isLoggeIn=false
//console.log(tinder_user)

const regular_user={
    email: "sonali$@gmail.com",
    fullname:{
        userfullname:{
            firstname:"sonali",
            lastname:"kumari"
        }
    }
}
//console.log(regular_user)
//console.log(regular_user.fullname)
//console.log(regular_user.fullname.userfullname.firstname)

// ===== merge object ==============
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2} // create object inside object
//console.log(obj3)

//const obj3=Object.assign(obj1,obj2)
//const obj3=Object.assign({},obj1,obj2)// also write in this way
//console.log(obj3)

// ======= merge using sprit =====
const obj3={...obj1,...obj2} // 90% time use that
// console.log(obj3)

// +++++++++++++++++ Object de-structure ++++++++++++++++++++++++++
const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor: "hitesh"
}
 // course.courseInstructor
// de-structure
 //const {courseInstructor}=course
// console.log(courseInstructor)

const {courseInstructor: instructor}=course
// console.log(instructor)

//+++++++++++++ API ++++++++++++++
// backend value in the form of JSON
// API in the form of JSON value
// And convert json value into object

// {
//     "name":"sonali",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// Random userme API (populer API in google)
// JSON formater tool use to understand API value




