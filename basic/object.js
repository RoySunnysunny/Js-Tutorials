//== singleton, object creta, object literals

const mysym = Symbol("Key1");

const jsuser = {
    name: "suny",
    "full name" :"sunny roy",
    [mysym] : "mySymbol",
    age : 27,
    address : "kolkata",
    Islogged: false,
    LastloginDays : ["monday","Tuesday"]

}

// console.log(jsuser['age']);
// console.log(jsuser["full name"]);
//console.log(typeof jsuser[mysym]);

jsuser.address = "Hydrabad";

// console.log(jsuser);

//Object.freeze(jsuser);
// jsuser.age = 30;  // age not replace after useing frezze

//console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hello js user");
}

jsuser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
} 
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());



