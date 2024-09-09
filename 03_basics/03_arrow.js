const user = {
    username: "Nisha",
    price: 999,

    welcomMessage: function() {
        console.log(`${this.username} , welcome to website`);
        //console.log(this);
        
        
    }
}

//user.welcomMessage()
//user.username = "nish"
//user.welcomMessage()

//console.log(this);


//function monster(){
// let username = "nisha"
  //  console.log(this.username);
    
//}
//monster()


//const monster = function(){
  //  let username = "nisha"
    // console.log(this.username)
//}
//monster()


const monster = () => {
    let username = "nisha"
     console.log(this)
}
//monster()

//const addTwo = (num1, num2) => {
  //  return num1 + num2 
//}

//console.log(addTwo(3,4));



//const addTwo = (num1, num2) => num1 + num2 
const addTwo = (num1, num2) => (num1 + num2)
const add = (num1, num2) => ({username: "nisha"})

console.log(addTwo(3,4))
console.log(add(1,2));


