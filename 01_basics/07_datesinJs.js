let myDate = new Date()
//console.log(myDate.toString());
console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());

//let myCreatedDate = new Date(2024, 0, 30)
//let myCreatedDate = new Date(2024, 0, 30, 2, 4)
//let myCreatedDate = new Date("2024-01-02")

let myCreatedDate = new Date("01-01-2024")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());

newDate.toLocaleString('dafault',{
    weekday: "long",
    
})






