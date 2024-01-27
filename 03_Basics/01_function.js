

function sayMyName(){
    console.log("h");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
}
// sayMyName()//sayname is only reference when we use ()this bracket is called execution
// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){
    // let result = number1 +number2
    // return result
    // console.log('hitesh');//if we will put Return in first , then no other line will be execute 
    return number1 + number2
 }


 const result = addTwoNumbers(3, 5)
//  console.log("Result: ", result);
// function loginUserMessage (username){
//     if(username ===undefined){
//         console.log("please Enter Username");
//         return
//     }
//     return `${username} just logged  in`
    
// }
function loginUserMessage (username ="sam"){
    if(!username){
        console.log("please Enter Username");
        return
    }
    return `${username} just logged  in`
    
}
//  console.log(loginUserMessage("hitesh"));
//  console.log(loginUserMessage(""));
//  console.log(loginUserMessage("neyaz"));



// function calculateCartPrice(...num1){
//     return num1

// }
function calculateCartPrice(val1,val2,...num1){
    return num1

}
// console.log(calculateCartPrice(200,400,500,1000));


const user = {
    username:"hitesh",
    price:189
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);

}
// handleObject(user)
handleObject({
    username:"sam",
    price:399
})

// note :we declare functions in two methods:handleObject(user) or handleObject


const myNewArray = [200,300,400,600]
function returnSecondVaue(getArray){
    return getArray[3]

} 
// console.log(returnSecondVaue(myNewArray));
console.log(returnSecondVaue([200,300,400,600]));