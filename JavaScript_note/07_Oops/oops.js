// Object literal
// Object literal is collection of methods and properties
const user={
    username: "Sonali",
    loginCount: 8,
    signedIn: true,

    getUserDetails:function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    } 
}

// console.log(user.username)
// console.log(user.getUserDetails());
// cons07ole.log(this) // output: {}

//============ Constructor function ====================
// const promiseOne =new promise()
// here "new" keyword is constructor function all you to create multiple instances from one literal object
function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCOunt=loginCount;
    this.isLoggedIn=isLoggedIn;
    this.greeting=function(){
        console.log(`Welcome {this.username}`)
    }
    //return this;
    // if you do not write return this (inlicitely return occurs by default)
    // that's why if we not write(return this) does not effect output
}
// if you are now use "new" keyword then value will be overwrite
// const userOne= User("sonali",12,true)
// const userTwo= User("Hello",11,false)
// console.log(userOne);
// ==================================
// new keyword create new instance 
const userOne= new User("sonali",12,true)
 const userTwo=new  User("Hello",11,false)

// Note: 1) if we use "new" keyword 1st empty object create (it is called instance)
// 2) One constructor function is called due to new keyword
// 3) All parameter pass 

//  ==========="Read" instanceof method or operator ================
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car);
  // Expected output: true
  
  console.log(auto instanceof Object);
  // Expected output: true