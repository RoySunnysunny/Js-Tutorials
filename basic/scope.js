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
//console.log("outer value of", a);

function parentFunction()
{
    const num = 400+200;
    function childFunction()
    {
        const chnum = 200-100;
        console.log(num);
        
    }
    //console.log(chnum);
    
    childFunction()

}
//parentFunction();

if(true)
{
    const uname = "Sunny Roy"
    if(uname === "Sunny Roy")
    {
        const website = "youtube.com"
        //console.log(uname+website);
        
    }
    //console.log(website);
    
}
//console.log(uname);

//===================== interesting =================//
console.log(addOne(5));

//===================== In this function you can call this function after and before declaration =================//
function addOne(num)
{
    return num + 1;
}



const addTwo = function(num)
{
    return num + 2
}
console.log(addTwo(6));
