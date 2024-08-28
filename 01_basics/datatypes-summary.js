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

