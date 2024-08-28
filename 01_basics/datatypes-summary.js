// Primitive DataType - 7 type : String, Number, Boolean, null, undefined, symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

//const bigNumber =23456227788523n


// Refernce(Non-Primitive) - Array, Object, Functions

const hero = [1,2,3]
let myObj ={
    name: "Nisha",
    age: "22" ,
}

const myfunction = function(){
   console.log("Hello world");
}

console.log(typeof hero)

//------------------------Memory-------------------------------//

// stack (primitive), heap (non-primitive)

let myName = "Nisha"
let anotherName = myName
anotherName = "Mehta"

console.log(myName)
console.log(anotherName)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email  = "nis@google.com"

console.log(userOne.email);
console.log(userTwo.email)
