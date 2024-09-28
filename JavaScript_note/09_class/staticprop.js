class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`Username: ${this.username}`)
    }
    // jasha hi yak user bana usko yak unique id mile jaya
    static createId(){
        return '123'
    } 

}

const sonali= new User("sonali");
// console.log(User.createId())
// console.log(sonali.createId()) // does not have access because createId() is static method

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iphone=new Teacher("iphone","i@phone.com")
// console.log(iphone.createId()); // does not access