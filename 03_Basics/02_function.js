let a =300

if(true){
    let a =10
    const b= 20
    // console.log("inner: ",a);

}

/// console.log(b);

//note:{}this bracket come with function and if ,else,then this is called scope of that program

// any code which is wriiten under in if else,this is called block scope
//any code which is wriitten outside ,this is called global scope 


function one(){
    const username = "neyaz"
    function two (){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    // two()
}
// one()

if(true){
    const username ="hitesh"
    if(username==="hitesh"){
        const website = " youtube"
        //console.log(username +  website);
    }
    // console.log(website);

}
// console.log(username);

//+++++++++++++++++++++++++++++++//
console.log(addOne(5))
function addOne(num){

    return num +1
}



console.log( addTwo(5));
 const addTwo=function(num){
    return num + 1

 }


 //function banne ka treehka h:  phla basic function aur kbhi kbhi expression bhi kah dete hain ghbrrane ki jruyrat nhi hh 