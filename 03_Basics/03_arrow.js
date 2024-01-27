const user = {
    username:"salman",
    price:300,
     welcomeMessage: function(){
        // console.log(`${this.username} ,welcome to my website`);
        // console.log(this);//ye pura print hoga q ki ye scope ke andar h

     }
}
user.welcomeMessage()
user.username ="sam"
user.welcomeMessage()
//console.log(this);//yadi hm abhi isko print kre to emty{} aayge q ki ye curreent scope ke bahar h

// function chai(){
    // let username ="neyaz"
//     console.log(this.username);
// }
// chai()//the valiue weil come undefined



// const chai = function(){
//     let username ="neyaz"
//     console.log(this.username);

// }
// chai()//the  valie will be come  undefined

//how to declare function through arrow//
const chai = () =>{
    let username ="neyaz"
    console.log(this);

}
// chai()


// const addTwo = (num1,num2) => {
//     return num1 + num2
// } //this is called explicit return

// const addTwo = (num1,num2) => num1 + num2//this is called implicit line

// const addTwo = (num1,num2) => (num1 + num2)// arrow function ko aise bhi use kr skte h ,,ye  use hoga react me dhyyan sejyada

// const addTwo = (num1,num2) => {username:"hitesh"}//aap is trah object return nhi kr skte iske liye aapko ye bracket use krna hoga(),,nhii kiye to value return hoga undefined
const addTwo = (num1,num2) => ({username:"hitesh"})
console.log(addTwo(3,4))//result will be same