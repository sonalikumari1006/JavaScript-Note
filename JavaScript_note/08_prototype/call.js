function SetUsername(username){
    //complex DB call
    this.username=username
}

function createUser(username,email,password){
    // here function is call but not hold reference
    //SetUsername(username)
    // here function called and hold reference
    SetUsername.call(this,username);
    this.email=email
    this.password=password
}

const chai=new createUser("chai","chai@fb.com","114")
console.log(chai);