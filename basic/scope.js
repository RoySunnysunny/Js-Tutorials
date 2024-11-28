//=========== This is called global scope =============//
let a= 300

if(true)
{
    //================= This is called block scope ======//
    let a = 10
    const b= 20
    var c = 30
    console.log("inner value of ",a);
    
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }
console.log("outer value of", a);
