//1.primative

//7 types: String,Number,Boolean,Null,undefined,Symbol(any value to make unique),BigInt



//2.Reference (non-primitive): Array,objects,Function


// const score =100
// const  scoreValue = 100.3
// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol("123")
// console.log(id==anotherId);



// const heroes = ["saktiman","nagraz","doga"] //=>this is array 
// {
//     name:"neyaz"
//     age: 22
    
// }
//you also set in variable just like that : let myObj ={}


//note:how to function declared in variable type in js//

// const myFunction = function(){
//     console.log('HEELLO PREETI');
// }


//how to know the type of data variable


// console.log(typeof isLoggedIn);
// console.log(typeof myFunction);
// console.log(typeof heroes);




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 //stack (primitive) jo bhi aapne varible declare kiya uska ka copy milta h 
 //Heap (Non-primitive) isme original value milta hh 

 let myYouTubename = "neyazkhangmail"
 let anotherName = 'chchakhanhsj'
 console.log(anotherName);
 console.log(myYouTubename);



 let userOne ={
    name:"khan",
    upi:"upi@ypl"
 }
 console.log(userOne);