// Property 

// A property is a variable that belongs to an object.
// It stores data.

// Method

// A method is a function that belongs to an object.
// It performs an action using the object’s data.


// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

let myHeros = ["Thor", "Spiderman"]

let heroPower = {
    Thor: "Hammer",
    Spiderman: "Sling", 

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.Spiderman}`)
    }
}

Object.prototype.Sahil = function(){
    console.log(`Sahil is present in all object`);
}

Array.prototype.heySahil = function() {
    console.log(`Sahil says hello`);
}

// heroPower.Sahil()

// myHeros.Sahil()
// myHeros.heySahil()
// heroPower.heySahil()



// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

//Old method
Teacher.__proto__ = User

//Modern method
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode        "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True value is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Sahil".trueLength()
"Rutu".trueLength()