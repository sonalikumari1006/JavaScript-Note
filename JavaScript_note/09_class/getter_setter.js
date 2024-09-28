//=========== Getter and Setter ==============
// class User{
//     constructor(email,password){
//         this.email=email;
//         this.password=password;
//     }
//     get email(){
//         return this._email.toUpprCase()
//     }
//     set email(value){
//         this._email=value;
//     }
//     get password(){
//        return this._password.toUpperCase()
//     }
//     set password(value){
//         this._password=value
//     }
// }

// const sonali=new User("sonali@gmail.com","123")
// console.log(sonali.password);
// console.log(sonali.email);

// ============== Properties get set ============

// function User(email,password){
//     this._email=email;
//     this._password=password;
//     Object.defineProperty(this,'email',{
//         get: function(){
//             return this._email.toUpperCase()
//         },
//         set: function(value){
//             this_email=value;
//         }
//     })
//     Object.defineProperty(this,'password',{
//         get: function(){
//             return this._password.toUpperCase()
//         },
//         set: function(value){
//             this._password=value;
//         }
//     })

// }
// // function also behave like object 
// const chai=new User("sonali@gmail.com","hello")
// console.log(chai.email);

// ++++++++++++++++ Object get set +++++++++++++
// Also use (#) instance of (_)
const User={
    _email:'sonali@1223',
    _password:"abc",
  // get matlab usko memory se leke aaao
    get email(){
        return this._email.toUpperCase()
    },
    // value store kar loo
    set email(value){
        this._email=value
    }
}
// +++++++ factory function +++++++++++++
const tea= Object.create(User);
console.log(tea.email);

// Note: UnderScore dikhata ha ki hum private properties define kar raha hu
