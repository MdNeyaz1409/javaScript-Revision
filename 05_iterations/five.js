//for each in loop

const coding = ["js","ruby","java","python","cpp"]

// coding.forEach( (item) =>{
//     console.log(item);
// })

// coding.forEach(function(item){
//     console.log(item);
// })


// function printMe (item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( function(item,index,arr){
//     console.log(item,index,arr);
// })
    
const myCoding =[
    {
        language:"javascript",
        languageFileName:"js"
    },
    {
        language:"javas",
        languageFileName:"java"
    },
    {
        language:"python",
        languageFileName:"python"
    },
]

myCoding.forEach(function(item){
    console.log(item.language);

})