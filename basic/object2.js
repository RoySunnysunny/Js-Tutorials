//=================== singleton in object ===================//

const instaUser = {}
instaUser.id = "123abc"
instaUser.name = "sunny"
instaUser.Islogged = true

//console.log(instaUser);

const regUser = {
    email:"demo@gmail.com",
    fullname:{
        userfullname :{
            fname: 'sunny',
            lname: 'roy'
        }
    }
}

//console.log(regUser.fullname.userfullname.lname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {5:"e", 6:"e"}

//const obj3 = {obj1, obj2}

//const obj3 = Object.assign({}, obj1, obj2)

//========== Spread operator in object =============//
const obj3 = {...obj1,...obj2,...obj4};

//console.log(obj3);

//========== database realted data handle in array object =========//

const user =[
    {
        id:1,
        email:'test@gmail.com',
        age: 25
    },
    {
        id:2,
        email:'demo@gmail.com',
        age:26
    },
    {
        id:3,
        email:'demo2@gmail.com',
        age:27
    }
]
// console.log(user[1].email);
//console.log(instaUser);
console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));

console.log(instaUser.hasOwnProperty('contact'));


