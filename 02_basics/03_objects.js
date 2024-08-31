//singleton

//object literals

const mySym = Symbol("key1") // symbol declare


const JsUser = {
    name :"Nisha",
    "full name" : "Nisha Mehta",
    age: 20,
    [mySym] : "mykey1",
    location: "deharadun",
    email: "nisha@gmail.com",
    isLoggedIn: false,
    lastLogginDays:["Monday", "Tuesday"]
}

//console.log(JsUser.email);  // not use this method
//console.log(JsUser["email"]); //correct method
//console.log(JsUser["full name"]);
//console.log(JsUser[mySym]);

JsUser.email ="mehta@gmail.com" // chanage email
//Object.freeze(JsUser)
JsUser.email= "nisha@mehta.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS  user");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS  user, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



