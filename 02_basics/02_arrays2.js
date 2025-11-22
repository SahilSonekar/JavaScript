const marvels_hero = ['Thor', 'Iron man', 'Spiderman']
const dc_heros = ['Superman', 'Batman', 'Flash']

// marvels_hero.push(dc_heros)
// console.log(marvels_hero);
// console.log(marvels_hero[3][2]);

// const allHeros = marvels_hero.concat(dc_heros)  
//It returns an new array without modifying the existing array,so we must assign it to the new variable while using concat
// console.log(marvels_hero);
// console.log(marvels_hero.concat(dc_heros));

// Spread operator

// const all_new_heros = [...marvels_hero,...dc_heros]
// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]] ]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


// console.log(Array.isArray('Sahil', 'Sonekar'))
// console.log(Array.from('Sahil'))
// console.log(Array.from({name:"Sahil"}))         // Interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
