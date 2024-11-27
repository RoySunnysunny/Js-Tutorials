function myfunc()
{
    console.log("s");
    console.log("u");
    console.log("n");
    console.log("n");
    console.log("y");
}

//myfunc();

function Addnumbers(num1,num2){
    // console.log(num1+num2);
    
    // let result = num1 + num2;
    // return result;

    return num1+num2;
}

const result = Addnumbers(2,2);

//console.log("res",result);

function logusermsg(username = "testuser"){
    if(!username)
    {
        console.log("Please Enter Username");
        return
    }
    //========== it will work when you get username ============//
    return `${username} just logged in`
}

//console.log(logusermsg("sunny"));

// using rest/spread operator (...test) like this 
function cartPrice(...num1)
{
    return num1;
}


//console.log(cartPrice(2,3,4));

const usersData = {
    id:1,
    name:'sunny',
    age:12,
    location: 'kolkata'
}

function handleObject(anyObject)
{
    console.log(`The user name is ${anyObject.name} and age is ${anyObject.age}`);
}
//handleObject(usersData);
 //========= we can define object after creating function we have check if it is object or not ===//
 handleObject({
    name:'johnny',
    age:27
 })
 const myNewArray = ['sunny','johnny','ronny']

 function arrayFunc(allArr)
 {
    console.log(`All the name in the Array is ${allArr[0]}`);
 }

 arrayFunc(myNewArray);
