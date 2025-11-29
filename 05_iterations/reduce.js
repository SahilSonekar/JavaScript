const myNums = [1, 2, 3, 4, 5]

// const myTotal = myNums.reduce( function (acc, currvalue) {
//     console.log(`acc: ${acc} and currvalue: ${currvalue}`)
//     return acc + currvalue
// }, 0)

const myTotal = myNums.reduce( (acc, currvalue) => acc + currvalue ,0)
    
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "PY Course",
        price: 5999
    },
    {
        itemName: "Web Dev Course",
        price: 3999
    },
    {
        itemName: "AI Course",
        price: 6999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);
