// object literals

const mySym = Symbol("keys1")

const JsUser = {
    name : "Sahil",
    "full name" : "Sahil Sonekar",
    [mySym] : "myKey1",
    age : 22,
    location : 'Thailand',
    email : "sahil@google.com",
    isLoggedIn : false,
    lastLoginDays : ['Monday', 'Sunday']
}

// console.log(JsUser.email)
// console.log(JsUser["email"])  // Use this format to access element
// console.log(JsUser["full name"])
// console.log( JsUser[mySym])

// JsUser.email = "sahil@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "sahil@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS Users");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS Users, ${this.name}`);
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
