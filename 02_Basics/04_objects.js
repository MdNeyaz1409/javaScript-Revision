// const tinderUser = new Object()//single term object
const tinderUser = {}//non single term object
tinderUser.id = "123abc"
tinderUser.name = "harsh"
tinderUser.isLoggedIn = false
// console.log(tinderUser);
const regularUser ={
     email:"neyaz@gmail.123",
     fullName:{
        userFullName :{
            firstname:"jatin",
            lastname:"akash"

        }
     }
}
// console.log(regularUser.fullName.userFullName.lastname);


const obj1 = {1:"a",2:"b"}
const obj2 ={ 3:"a",4:"b"}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2) //when we  use object.assign method all object in one curly bracket=> one also method 
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
console.log(obj3);

const users =[//when the data is come from database ...it as same as like
    {
        id:1,
        email:"neyazkhan@gmail",
    },
    {
        id:1,
        email:"neyazkhan@gmail",
    },
    {
        id:1,
        email:"neyazkhan@gmail",
    }
] 
users[1].id
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //in this method we check  which value is exist =>output:true  or not => false in object .
console.log(tinderUser.hasOwnProperty('isLoggedInOut')); 
