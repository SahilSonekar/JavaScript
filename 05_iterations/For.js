// For

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is the best number");
    }
    // console.log(element)
}


for (let i = 1; i <= 5; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value: ${i} and outer loop value ${j}`);
        // console.log(i + "x" + j + "=" + i*j);
    }      
}

let myArray = ["Iron man", "Superman", "Batman"]
// console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}


// Break 

for (let i = 1; i <= 20; i++) {
    if(i == 5) {
        console.log("Detected 5")
        break
    }
    console.log(`Value of i is ${i}`);
}

// Continue

for (let i = 1; i <= 20; i++) {
    if(i == 5) {
        console.log("Detected 5")
        continue
    }
    console.log(`Value of i is ${i}`);
}