//const tinderUser = new Object() // sigle term object
const tinderUser = {}  //non single term object

tinderUser.id = "001abc"
tinderUser.name = "sunny"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "12234@gmail.com",
    fullname: {
        userfullname: {
            firstname: "nisha",
            lastname: "mehta"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    
    {
        id: 1,
        email: "nish@gmail.com",
    },
    {
        id: 1,
        email: "nish@gmail.com",
    },
    {
        id: 1,
        email: "nish@gmail.com",
    },
    {
        id: 1,
        email: "nish@gmail.com",
    },
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));



