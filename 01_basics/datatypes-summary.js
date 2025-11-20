// Primitive

// 7 Types = String, Number, Boolean, Null, Undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id == anotherId);

const bigNumber = 12356556523225332n
// console.log(typeof bigNumber);


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

// console.log(typeof anotherId)


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "SahilSonekar"

let anothername = myYoutubename
anothername = "ChaiaurCode"

// console.log(myYoutubename)
// console.log(anothername)

let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Sahil@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// In stack the value assigned to a variable or anything is a copy
// In Heap the value assigned to a variable or anything is the direct reference(Original Value)

// in userOne.email when we changed the value of userTwo.email the value of userOne.email(Main) also changed 