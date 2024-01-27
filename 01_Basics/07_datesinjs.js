//dates


let myDate = new Date()// to show date with number
// console.log(myDate.toString()); //to show date with alphabaticlo
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleTimeString());//to show exact time
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);//interview question asked by the company which result =>object

// let myNewDate = new Date(2028,8,23)
// let myCreateDate = new Date(2023,4,12,5,6)
// let myCreateDate = new Date("2023-01-14")
let myCreateDate = new Date("12-5-2024")



// console.log(myNewDate.toDateString());
// console.log(myNewDate.toLocaleDateString());
// console.log(myCreateDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getDate());
// console.log(myCreateDate.getMilliseconds());
console.log( Math.floor( Date.now()/100));
//note:month is always started in javasript from 0 not to 1
let myDateHmaar = new Date()
console.log(new Date);
console.log(myDateHmaar.getDay());
