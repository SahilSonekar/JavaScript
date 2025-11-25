const user = {
    username : "Sahil",
    coursePrice : 999,

    welcomneMessage : function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomneMessage()
// user.username = "Rutuja"
// user.welcomneMessage()

// console.log(this);

// when we run this(console.log(this)) in browser the most number of object is windows object


// function chai() {
//     let username = "Sahil"
//     console.log(this.username);
// }
// chai()
// const chai = function() {
//     let username = "Sahil"
//     console.log(this.username);
// }
// chai()

// this.username does not work in function it works in object

const chai = () => {
    let username = "Sahil"
    console.log(this.username);
    // console.log(this);
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(5, 6));
// If we are using {} than return keyword must be used not required in ()

const objectreturn = (num1, num2) => ({username : "Sahil"})

console.log(objectreturn());


