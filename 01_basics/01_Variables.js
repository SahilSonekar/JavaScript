const accountId = 144553
let accountEmail = "sahil@google.com"
var accountPassword = "12345"
accountCity = "Nagpur"
let accountState;       // undefined

// accountId = 2  //Not allowed
accountEmail = "sahilsonekar@gmail.com"
accountPassword = "54321"
accountCity = "Mumbai"


// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


/*
Prefer not to use var
because of issue in block scope and functional scope
*/