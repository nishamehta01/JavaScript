// const coading = ["js", "ruby", "java", "python", "cpp"]

// const values = coading.forEach( (item) => {
//     //console.log(item);
//     return item
// })

// console.log(values);



//--filter method--
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4  // when we use use scope {} then you need to write return keyword
// })

// ---or ------

const newNums = []


myNums.forEach ( (num) => {
    if(num >4) {
        newNums.push(num)
    }
})
console.log(newNums);



