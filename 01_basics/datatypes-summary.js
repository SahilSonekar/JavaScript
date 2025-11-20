// Primitive

// 7 Types = String, Number, Boolean, Null, Undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id == anotherId);

const bigNumber = 12356556523225332n
console.log(typeof bigNumber);


// Reference (Non-primitive)

// Arrays, Object, Function

const heros = ["Shaktiman", "Nagraj", "Doga"]
let myObj = {
    name: "Sahil",
    age: 22
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof anotherId)