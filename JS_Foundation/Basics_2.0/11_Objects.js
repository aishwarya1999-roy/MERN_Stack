console.log("************ Objects *****************")

Object.create // constructor way
object literals

const myst = Symbol("Key1")

const js_user = {
    "name" : "Aish",
    age : 25,
    City : "Kolkata",
    myst : "MyKey1",
    isloggin : false
}
Object.freeze(js_user)
console.log(js_user.name);
console.log(js_user["name"]);
console.log(js_user["age"]);
console.log(js_user[myst]);
js_user.City = "howrah"
console.log(js_user);

js_user.greeting = function(){
    console.log("Hello, Good Morning");
}
console.log(js_user.greeting());

js_user.greetingto = function(){
    console.log(`Hello, Good Morning ${this.name}`);
}
console.log(js_user.greetingto());


object singleton or using constructor

const facebook = new Object() // singleton object 
const facebook = {} // non singleton object

console.log(facebook)

facebook.id = '123abs'
facebook.name = 'Aishwarya'
facebook.isLoggedin = false

console.log(facebook)

const regularUser = {
    email : "som@gmailak",
    fullname :{
        usersname : {
            firstname :"Aishwarya",
            Lastname : "Roy"
        }
    },
    address : "ABC, road, 71110"
}

console.log(regularUser.fullname?.usersname.firstname); // ? is used for error handeling, if the fullname object is not there then it won't throw error, it just give undefined

const obj1 = { 1:'a', 2:'b'}
const obj2 = { 3:'c', 4:'d'}
//const obj3 = Object.assign({}, obj1, obj2) //assign(target , source) // 1st way to concat
const obj3 = {...obj1,...obj2} //2nd way to concat
console.log(obj3);


const users = [
    {
        id : 1,
        "email" : "hh@gmail.com"
    }
]

console.log(users[0].email);

console.log(facebook);
console.log(Object.keys(facebook));
console.log(Object.values(facebook));
console.log(Object.entries(facebook));
console.log(facebook.hasOwnProperty('isLogged') );


const course = {
    coursename : "Python Programming",
    price : '333',
    instructor : "aishwraya"
}

console.log(course.coursename);
const {instructor : Teacher} = course
console.log(Teacher);