//========== Array in javascript ===================//

const myArr = [0, 1, 2, 3, 4, 5] 

const myHero = ['Ironman', 'superman','batman']

const myArr2 = new Array(1, 2, 3, 4)

//console.log(myArr[2]);

// ========== Array Methods ==============//

//myArr.push(6)
//myArr.pop();
//myArr.unshift(10)
//myArr.shift()
//console.log(myArr.includes(9));

const newArr = myArr.join();

//console.log(myArr);
//console.log( typeof newArr);

// array slice, spclice

console.log("A", myArr);

const myNewArr = myArr.slice(1,3);
console.log("B", myNewArr);

const myNewAr = myArr.splice(1,3);
console.log("S", myNewAr);