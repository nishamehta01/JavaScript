const userEmail ="nisha@.ai"
if(userEmail){
    console.log("Got user Email");
    
}else{
    console.log("Don't have user Email");
    
} 

//--------------falsy values----
//false, 0, -0, BigInt(0n), "", null, undefined, Nan(not an number)


//----------------truty values-----
// "0", 'false', " ", []. {}, function(){}

if(userEmail.length ===0){
    console.log("Array is empty");
    
}
 
//---- Nullish Coalescing Operator (??): null undefined

let val1;
//val1 =5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 12
val1 = null ?? 10 ?? 21

console.log((val1));


//----Terninay operator ----
//condition ? true: false

const iceCream = 100
iceCream <= 80 ? console.log("less than 80") : console.log("more than 80");

