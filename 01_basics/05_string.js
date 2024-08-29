const name = "Nisha"
const repoCount = 50

//console.log(name + repoCount + " Value"); do not use this method

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // use this method

const gameName = new String(`Nisha-Mehta-com`)

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,6)
console.log(newString)

const anotherString = gameName.slice(-8, 8)
console.log(anotherString)

const newStringOne = "   Nisha   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nisha.com/nisha%20mehta"
console.log(url.replace('%20', '-'))

console.log(url.includes('mnisha'));

console.log(gameName.split('-'));
