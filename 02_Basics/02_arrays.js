const marvel_heroes = ["thor","ironman","rajnikant"]


const dc_heroes = ["ram ","Dinesh","salman khan"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

//  const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

// # note:concat is used for any value which is coming in two bracket [][].it combine all value in one bracket it is called spread value

const all_new_heroes =[...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes);

const all_new_value = [12,2,33,45,[234,234,567,[]]]
const real_all_new_value = all_new_value.flat(Infinity)
console.log(real_all_new_value);

 console.log(Array.isArray("hitesh"))
 console.log(Array.from("hitesh"))
 console.log(Array.from({name:"hitesh"}))//intresting for interview question


 let score1 =100
 let score2 = 200
 let score3 = 500


 console.log(Array.of(score1,score2,score3));



