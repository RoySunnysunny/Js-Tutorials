const arr_first = ["sunny", "sourav", "Sujan"]
 
const arr_second = ["milan", "mukund", "makara"]

const last_arr = ["unmuk", "changd" ,"chawla"]

//arr_first.push(arr_second);

//console.log(arr_first);

const thrd_arr = arr_first.concat(arr_second);

//console.log(thrd_arr);

const new_arr = [...arr_first, ...arr_second, ...last_arr];

//console.log(new_arr)

const multi_arr = [1,2,3, [5,8,[9,8],10,56,[45,36]]]

const new_multi_arr = multi_arr.flat(Infinity);

//console.log(new_multi_arr);

console.log(Array.isArray("Sunny"));
console.log(Array.from("Sunny"));

console.log(Array.from({name:"Sunny"})); // Its return an empty array if it could convert into array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));




