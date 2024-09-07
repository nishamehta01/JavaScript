//---Global Scope
//var c = 300
let a = 300
 
//--- Scope
if (true) {  
  let a = 10
  const b = 20
  var c = 30
  console.log("INNER:", a);
  
}

//console.log(a);
//console.log(b);
//console.log(c);

//---Nested Scope

function one(){
    const username = "nisha"
    function two (){
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);
    two()
}

one()

if(true) {
    const username = "nisha"
    if(username === "nisha"){
        const website = " youtube"
        console.log(username + website);
        
    }
   // console.log(website); // error
    
}
//console.log(username); error 


//---- Example ----- //

console.log(addone(5));
function addone(num){
   return num +1
}


const addTwo = function(num){
    return num + 2
}
addTwo(5)
