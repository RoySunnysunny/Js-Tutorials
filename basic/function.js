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

console.log(logusermsg("sunny"));

