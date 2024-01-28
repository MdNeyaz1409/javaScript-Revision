const userEmail = []
 if( userEmail){
    console.log("Got user Email");
 } else{
    console.log("Dont have user email");
 }
 


 //falsy value: false, 0 ,-0,BgInt 0n,"",null,undefined,NaN
 //truthy value: "0","falsy","" ,(){}[] function(){} string ke andar koi bhi value, this is called trujhy value

 if(userEmail.length ===0){
    console.log("Array is Empty");
 }
 const myObject ={}
 if(Object.keys(myObject).length ===0){
    console.log("object is empty");
 }

// Nullish Coalicing FindOperators(??):null undefined

let val1;
// val1 =5 ?? 10
// val1 = null ?? 10
// val1 = undefined ??15
val1 = undefined ?? 10 ??30
console.log(val1);

//terniary  operator
// condition ? true :false

const IceTeaPrice = 100
IceTeaPrice <= 80 ? console.log("less than80") : console.log("more than 80")