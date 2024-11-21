//*************** Primitive Type ******************//

// 7 Types == string, number, boolean, null, undefined, Symbol, BigInt

//*************** Reference Type (Non Premitive) ******************//

// Array, Objects, Functions.

const outsideTemp = null
let userEmail;

const Id = Symbol('125');
const sumId = Symbol('125')

console.log(Id === sumId);

const bigIntNumber = 12455455454125445554445n

const ManName = ["sunny", "Kaman", "Tiri", "Joprey"];

const DataObj = {
    name:'sunny',
    age:27,
    address:'kolkata'
}

const myfu = function(){
    console.log("Hello World");
    
}

//==================== Memory In javascript ==========================//

// 1. Stack(primitive type) 2. Heap(Non-primitive)
let myName = "sunny Roy"
let anotherName = myName;

anotherName ="Johnny Roy"
// console.log(myName);
// console.log(anotherName);

let myData = {
    email:'sunny@gmail.com',
    age:24
}

let data = myData;

data.email = 'roy@gmail.com'

console.log(data.email);
console.log(myData.email);

