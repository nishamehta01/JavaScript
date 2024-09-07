function myName(){
    console.log("N");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("a");
    
}
// myName()        //myName-is a refrence and myName()-this is execution.



function addTwoNumber(num1, num2){
   //let result = num1 + num2
   //return result
    return num1 + num2
}
const result = addTwoNumber(1,4)
console.log("Result:", result);



function loginUserMsg(userName){
    if(userName === undefined){
        console.log("please enter a userName");
        return
    }
    return `${userName} just logged in`
}
console.log(loginUserMsg("Nisha"))
console.log(loginUserMsg())



function calculateCartPrice(val1,val2,...num1){
 return num1
}
console.log(calculateCartPrice(200,300,400))


const user = {
    username: "Nisha",
    price: 199
}
function handleObject(anyObject){
   console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
   
}

//handleObject(user)
handleObject({      // we can direct pass object
    username: "Nisha",
    price: 199
})


const myNewArray = [100,200,400,600,500]

function returnSecondValue(getArray){
   return getArray[3]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,300,700,900,450]));

