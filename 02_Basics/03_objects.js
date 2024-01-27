//singleton
//object .create
//object literals

const jsUser ={
    name:"neyaz",
    "full name":"salman",
    age:12,
    location:"punjab",
    email:"neyaz@gmail.com",
    isLoggedIn:false,
    lastLoginDay:["monday","sunday"]

}
console.log(jsUser.email);
console.log(jsUser ["age"]);
console.log(jsUser["full name"]);

//how to change anything in object

jsUser.email = "netaz@CHATGPTGMAIL.COM"
console.log(jsUser);
jsUser.name = "sharukh bhai"
console.log(jsUser); 