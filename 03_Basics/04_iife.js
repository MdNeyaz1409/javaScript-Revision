//iife = Immediately Invoked Function Expression



(function chai (){
    //Name iife
    console.log(`DB COONECTED`)
})();

( (name) =>{
    //simple iife   
    console.log(`Db connected two ${name}`)

})("neyaz")


//GLOBAL scope ke pollution se jo problem hoti h kai baar usko hatane ke liye use kiya jata h