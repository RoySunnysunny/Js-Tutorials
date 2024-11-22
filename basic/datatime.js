
let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());

// console.log(myDate.toISOString());

// console.log(myDate.toJSON());

// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//let mydateCreate = new Date(2023, 0, 23)
//let mydateCreate = new Date(2023, 0, 23, 5,5)

let mydateCreate = new Date("01-14-2024")

let myTimestamp = new Date;

// console.log(myTimestamp);

console.log(myTimestamp.getDay());
console.log(myTimestamp.getFullYear());
console.log(myTimestamp.getMonth()+1);

myTimestamp.toLocaleString('default',{
    weekday:'long',
});