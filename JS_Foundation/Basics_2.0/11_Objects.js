
// console.log("************ Objects *****************")

//Object.create // constructor way
//object literals

//const myst = Symbol("Key1")

const js_user = {
    "name" : "Aish",
    age : 25,
    City : "Kolkata",
    myst : "MyKey1",
    isloggin : false
}
// Object.freeze(js_user)
// console.log(js_user.name);
// console.log(js_user["name"]);
// console.log(js_user["age"]);
// console.log(js_user[myst]);
// js_user.City = "howrah"
// console.log(js_user);

js_user.greeting = function(){
    console.log("Hello, Good Morning");
}
console.log(js_user.greeting());

js_user.greetingto = function(){
    console.log(`Hello, Good Morning ${this.name}`);
}
console.log(js_user.greetingto());