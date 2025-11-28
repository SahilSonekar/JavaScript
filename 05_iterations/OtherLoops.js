// for of loop

// ["", "", "", ""]
// [{}, {}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num)
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each car is ${greet}`);
}

// Map

// 1.Collection of key value pair
// 2.Unique values no repetition 
// 3.Order remains in the same order

const map = new Map()

map.set('IN', "India")
map.set('SRI', "Sri Lanka")
map.set('USA', "United states of america")
map.set('FR', "France") 
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-" , value);
}

const myObject = {
    game1: "Couter Strike",
    game2: "PUBG"
}

// for (const [key, value] of myObject) {
//     console.log(key , ':-' , value);
// }

// TypeError: myObject is not iterable