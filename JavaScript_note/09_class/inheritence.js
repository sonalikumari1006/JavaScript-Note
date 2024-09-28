class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username,email,password){
        // extract username from User we use "super" keyword
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const chai= new Teacher("chai","chai@gmail.com","123")
// chai.logMe() // access
// chai.addCourse()

const chai2=new User("chai");
//chai2.addCourse() //does not access 
// chai2.logMe() // access

// console.log(chai===chai2); // false
// console.log(chai===Teacher) ; // false

console.log(chai instanceof User); // true





