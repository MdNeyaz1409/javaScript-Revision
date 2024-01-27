//array



const myArr =[0,1,2,3,4,5,6,]
const myHeroes = ["saktiamn","balveer"]


const myArr2 = new Array (1,2,2,2,2)
// console.log(myArr[1]);


//Array methods

// myArr.push(4)//add new number
// myArr.push(9)
// myArr.pop()//to remove the last value
// myArr.unshift(6)//add always in first
// myArr.shift() //to remove add new number from first,they don't require ti fill the parameter in bracket

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));


// const newArr = myArr.join()
// console.log(myArr);
// console.log( newArr);//this is changed in String  and result will be without bracket


//slice,splice

console.log("a",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log( "c",myArr);
console.log(myn2);
