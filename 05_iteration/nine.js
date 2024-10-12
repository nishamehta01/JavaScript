//-----Reduce method------
const myNums = [1, 2, 3]

// const mytotal = myNums.reduce(function (acc, currval) { // acc(accumalator , currentValue)
//     console.log(`acc:${acc} and currval: ${currval}`);
    
// return acc + currval
// }, 0)



 //---- use in arrow function---
const mytotal = myNums.reduce( (acc, curr) => acc + curr, 0)

console.log(mytotal);

const shoppingCart = [
    {
        itemName: "js course",
        price:2999
    },

    {
        itemName: "DSA course",
        price:8999
    },
    {
        itemName: "JAVA course",
        price:999
    },

    {
        itemName: "data science course",
        price:12999
    }
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);