// Promise is an object

//A Promise in JavaScript is an object that represents a value that will be available now, later, or never.

// It is used for handling asynchronous operations like API calls, timers, reading files, etc.

const promiseOne = new Promise(function(resolve, reject) {
    // Do async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is completed");
        resolve()
    }, 1000)
}) 

promiseOne.then(function() {
    console.log("Promise Completed");
})



new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    })
}).then(function() {
    console.log("Async 2 resolved");
})



const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({username: "Chai", email: "sahil@gmail.com"})
    },1000)
})

// The parameters passed by resolve comes in then 

promiseThree.then(function(user){
    console.log(user)
})



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        
    })
})