// const coding = ["js","ruby","java","python","cpp"]

//  const values = coding.forEach( (item)=>{
//     console.log(item);
//     return item
// })
// console.log(values);

const myNums =[1,2,3,4,5,6,7,8,9]

//  const newNums = myNums.filter( (num) => num > 4)
 const newNums = myNums.filter( (nums) =>{
     return nums >4 

 })
//  console.log(newNums);

const Books = [
    {title:'Book One',genre:"Fiction",publish:'1981',
    edition:2004},

    {title:'Book Two',genre:"Non-Fiction",publish:'1982',
    edition:2008},

    {title:'Book Three',genre:"History",publish:'1999',
    edition:2007},

    {title:'Book Four',genre:"science",publish:'2009',
    edition:2010},

    {title:'Book Five',genre:"Fiction",publish:'1987',
    edition:2014},

    {title:'Book Six',genre:"History",publish:'1986',
    edition:2010},

    {title:'Book Seven',genre:"History",publish:'1981',
    edition:1996},

    {title:'Book Eight',genre:"Science",publish:'2011',
    edition:2016},

    {title:'Book Nine',genre:"Non-Fiction",publish:'1981',
    edition:1989}

    
];
let userBooks = Books.filter( (bk) =>bk.genre ==='History')
userBooks = Books.filter((bk) =>{
    return bk.publish>=1995 &&  bk.genre==="History"
})

console.log(userBooks);