function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("H");
    console.log("I");
    console.log("L");
}

// sayMyName()

// sayMyName -> just refernece it does not run 
// sayMyName() -> it is executed

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){
    // console.log("Sahil");
    // let result = number1 + number2
    // return result
    return number1+number2
}

const result = addTwoNumbers(5, 3)
// console.log("Result is :", result);

function loginUserMessage(username = "User") {
    if(!username){
        console.log("Please enter a user name");
        return
    }
    // if(username == undefined){
    //     console.log("Please enter a user name");
    //     return
    // }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Sahil"))
// console.log(loginUserMessage())     //undefined just logged in 

function caculateCartPrice(val1, val2, ...num1) {
    return num1         
}

// the (...) reutrns the value in array

// console.log(caculateCartPrice(200, 300, 400, 500));

const user = {
    name : "Sahil",
    coursePrice : 199
}

function handleOnbject(anyObject) {
    console.log(`Username is ${anyObject.name} and the course price is ${anyObject.coursePrice}`)
}

// handleOnbject(user)
// handleOnbject({
//     name : "Sam",
//     coursePrice : 399
// })

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
