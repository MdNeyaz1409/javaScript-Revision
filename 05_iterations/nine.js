//reduce


const myNums = [1,2,3,]


//  const myTotal = myNums.reduce(function (acc ,curval){
//     console.log(`acc: ${acc} and curval:${curval}`);
//     return acc + curval
//  },0)


const myTotal = myNums.reduce( ( acc,curval)=> acc + curval,0)


 console.log(myTotal);


 const shopingCard = [
    {
        itemName:"js course",
        price:2399
    },
    {
        itemName:"python course",
        price:2099
    },

    {
        itemName:"React course",
        price:2999
    },

    {
        itemName:"c++ course",
        price:20999
    },
 ]


 const priceTopay=  shopingCard.reduce((acc,item) => acc + item.price ,0 )
console.log(priceTopay);