// var c = 300
let a = 300

if(true) {
    let a = 10
    const b = 20
    // var c = 30
    // c = 30 //same as varit is excuted from outside the scope also
    // console.log("Inner: ",a);
}

// console.log(a)
// console.log(b)
// console.log(c)

// function one() {
//     const username = "Sahil"

//     function two(){
//         const website = "Youtube"
//         console.log(username);
//     }
//     // console.log(website);

//     two()
// }
// one()

if(true){
    const username = "Sahil"
    if(username === "Sahil"){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website);
}
// console.log(username)

// +++++++++++++++++++++++++++ Interseting +++++++++++++++++++++++++++

console.log(addone(5));

function addone(num) {
    return num + 1
}

addtwo(5)
const addTwo = function (num){
    return num + 2 
}