
const name  = "neyaz"
const repoCount = 50
// 
console.log(`hello my name is ${name} and my repo count${repoCount}`);


//how to declare string:

const gameName = new String("hitesh-neyaz")
// console.log(gameName[0])  //to show first spelling H



// console.log(gameName.__proto__); //to show {},this bracket if we use


// console.log(gameName.length);//to show how much spelling 
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));//to show which character in which position
// console.log(gameName.indexOf('e'));// to show number in which position
const newString = gameName.substring(0,5)
console.log(newString);


const anotherString = gameName.slice(0,4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());//they remove space between character after inverted comma;



const url = "htttps://neyaz.com/neyaz%20 khan "//change in url any character
console.log(url.replace('%20','='))

console.log(url.includes('khan'));