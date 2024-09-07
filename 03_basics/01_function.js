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



