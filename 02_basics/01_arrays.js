const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ['Iron man', 'Thor']
const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[2])

// Array methods

// myArr.push(6)
// console.log(myArr);
// myArr.push(7)
// console.log(myArr);

// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)
// console.log(myArr);
// myArr.shift(9)              //Removes the first element 
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const newArray = myArr.join()
console.log(myArr);
console.log(newArray);
console.log(typeof newArray);


// slice , splice

console.log('A', myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log('B', myArr);

const myn2 = myArr.splice(1,3)    // It removes the element from the array. This is the main difference between slice and splice
console.log(myn2);
console.log('C', myArr);

