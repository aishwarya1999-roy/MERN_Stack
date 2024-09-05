// console.log("************ Objects *****************")

//Object.create // constructor way
//object literals

const myst = Symbol("Key1")

const js_user = {
    "name" : "Aish",
    age : 25,
    City : "Kolkata",
    [myst] : "MyKey1",
    isloggin : false
}
Object.freeze(js_user)
// console.log(js_user.name);
// console.log(js_user["name"]);
// console.log(js_user["age"]);
// console.log(js_user[myst]);
js_user.City = "howrah"

console.log(js_user);
