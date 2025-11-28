// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;

    default:
        console.log("default case match");
        break;
}

// if break statement is not used than every code will be executed given below but it will not execute the default case ex. given below 

switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")

    case 4:
        console.log("April")
        break;

    default:
        console.log("default case match");
        break;
}