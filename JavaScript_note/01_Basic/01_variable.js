const accountId=1859896
let accountEmail="SOnalikr1006@gmail.com"
var accountPassword="12339"
City="Dehradun"
// If you try to change the constant value generate error

// accountId=6 // Not allowed
accountEmail="Skr1006@gmail.com"
 accountPassword="129"
 City="jaipur"
/* In javaScript if you only declare value does not assign 
 any value then value is "Undefine"
*/
let accountState; 
 /* 
 Prefer not to use var
 because of issue in block scope and functional scope
 */
console.log(City)
// create a table (index 0,1,2,3)->(value 134565,sk1008@,129,jaipur)
console.table([accountId,accountEmail,accountPassword,City,accountState])

