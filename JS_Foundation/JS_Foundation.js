console.log("~~ Hey there, This is all about JS foundation in once sheet ~~")

"use strict"; //treat all JS code as newer version - as of now it takes it default
//console.log("************ Datatype *****************")

//alert("Hello") // works on browser

// Primitve & Non primitive data type
// Primitive - 7type : string, number, boolean, null, undefined, symbol, bigint
// Refernce Type/ Non premitive - 
//Array, objects, Functions

/*
let name = "Aish" //string declarion
let age = 25 //number declarion, number range = 2 to the power 53
let islogginin = false //boolean declarion

//symbol = unique
const id = Symbol('123')
const another_id = Symbol('123')
console.log(id === another_id; //false 

// bigint - bigger than number
const bignum = 41656598456n //bigint declarion

// null = standalone value / blank / empty
// undefinded = value not defined 

console.log(typeof null) //get the type of the variable 

//array creation
const heros = ["iron", "hjii", 'idji']
console.log(heros);

// object creation = object is like dictionary in python
let myobj = {             
    first_name : "Aishw",
    my_age: 23,
}
console.log(myobj);


// function creaton
const myfunction = function(){
    console.log("hello")
    return "Aishwarya"
}
console.log(myfunction())

// function creaton another way
function functionanotherWay(){
    console.log("hello")
    return "Aishwarya"
}
console.log(functionanotherWay())

*/

//console.log("************ Datatype conversion *****************")
/* 
let score = "33"

console.log(typeof score)
console.log(typeof(score))
let valueinNumber = Number(score)
console.log(typeof valueinNumber)
console.log(typeof Number(score))

let score2 = "33an"
console.log(Number(score2)) //NaN - not a number

//"33" => 33
//"33abs" => NaN
//true => 1, false => 0

let aa = 1
console.log(Boolean(aa));

let strw = 54
console.log(typeof String(strw));
*/

// console.log("************ Operations *****************")

/* 
let val = 3
let negva = -val
//console.log(negva);

console.log(3+3)
console.log(3-3)
console.log(3*3)
console.log(3**3)
console.log(3/3)
console.log(3%3)

let str1 = "Hello"
let str2 = " Aish"

console.log("1" + 2);
console.log(1 + "2");
console.log(1 + 2);
console.log("1" + 2 + 2); // after adding a string if we put a number still it behave like string
console.log(1 + 2 + "2"); // before adding a string if we put a number it will calculate the number then concat to the string


let gamecounter = 100
gamecounter++ //postfix - increament after
++gamecounter //prefix - increament before 
console.log(gamecounter);

*/


// console.log("************ Datatype Comparison *****************")
/*
console.log(2>1)
console.log(2>=1)
console.log("2">1)
console.log("02">1) //comparison chanes the data type

console.log("2"=== 2) // === will check condition as well as the datatype
*/


// console.log("************ Memory - Stack/Heap *****************")

/*
// Stack (used for primitive type - number, string, boolean etc) & Heap (used for non primitive type - functions/array/objects)

//stack - take a copy then change, nothing will change in original 
let ytname = "Aishwarya"
let anothername = ytname
anothername = "Adwe"
console.log(ytname);
console.log(anothername);


//Heap  - take refernce and update - update in both
let user_one = {
    email : "ajhd@gmail.com",
    upi : "dhu@oksbi"
}

let user_two = user_one
console.log(user_two);

user_two.email = "aish@gmail.com"

console.log(user_one);
console.log(user_two);
// here email value will change for user one & user two both
*/

// console.log("************ String *****************")

/*
const myname = "aish"
const repcount = 13
console.log(myname + repcount + "dew"); //outdated

console.log(`Hello my name is ${myname} and my repo count is ${repcount}`);

const gamename = new String('AishwaryA') //creating string as a object to use as a constructor
const trimstring = "   Aishwarya space   "
console.log(gamename[0]);
console.log(gamename.valueOf()); //return premitive value of the object
console.log(gamename.substring(2,4)); //slice into substring
console.log(gamename.__proto__);
console.log(gamename.length); //len of string
console.log(gamename.toUpperCase());
console.log(gamename.toLowerCase());
console.log(gamename.charAt(2));
console.log(gamename[2]);
console.log(gamename.indexOf('is')); // return index of first character in case of duplicate character
console.log(gamename.search('is'))// return index of first substring
console.log(gamename.charCodeAt(0)); //return ASCII value
console.log(gamename.codePointAt(8)); //return ASCII value
console.log(gamename.startsWith('g'));
console.log(gamename.endsWith('b'));
console.log(gamename.includes('a'));
console.log(gamename.lastIndexOf('a')); // return index of last character in case of duplicate character
console.log(gamename.repeat(2)); // repeat the string 
console.log(gamename.split(',')); //split the string and make array

console.log(trimstring.trimEnd()); //trim from end
console.log(trimstring.trimStart()); //trim from front
console.log(trimstring.trim()); //trim from both end

console.log(gamename.substring());
// substring
const newString = gamename.substring(2,5)
console.log(newString);
// slicing
const anotherString = gamename.slice(-9,5)
console.log(anotherString);

// A  i  s  h  w  a  r  y  a
// 0  1  2  3  4  5  6  7  8
//-9 -8 -7 -6 -5 -4 -3 -2 -1 - Slice backward index

const url = "https://aishwarya.com/aishwarya%20roy"
console.log(url.replace('%20','-'));
console.log(url.includes('kd')); 

const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
console.log(eval(s2.valueOf())); // returns the number 4
*/

// console.log("************ Numbers  *****************")
/*
const numbervalue = 400
console.log(numbervalue);

const balance = new Number(5)
console.log(balance);
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));
console.log(balance.toPrecision(2));
console.log(balance.toExponential(2));

const hundreds = 4000000
console.log(hundreds.toLocaleString('en-IN'));
console.log(Number.MIN_SAFE_INTEGER);  */

// console.log("************ Maths  *****************")
/*
console.log(Math.abs(-4)); //return positive value for any given negetive value
console.log(Math.round(4.6)); // it round of the floating point number
console.log(Math.ceil(4.6)); // return ceil mean celling value of floating point number
console.log(Math.floor(4.6)); //return floor value for floating point numbers
console.log(Math.sqrt(4)); // //square root
console.log(Math.pow(2,4)); //power of n
console.log(Math.max(19, 45, 99, 5)); //return max
console.log(Math.min(19, 45, 99, 5)); //return min
console.log(Math.random()); //return value from 0 to 1
console.log(Math.random()*10 + 1); //return value from 1 to 10
console.log(Math.floor(Math.random()*10 + 1)); //return floor value from 1 to 10 
const min = 10
const max = 50
console.log( Math.floor(Math.random() * (max - min + 1)) + min );
 */


// console.log("************ Date & time  *****************")
/**  
let mydate = new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toTimeString());
console.log(mydate.getHours());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());

let my_created_date = new Date(2024, 7, 5) //let my_created_date = new Date(2024, 7, 5,5, 3)
let another_date = new Date(2024, 7, 5,5, 3)
console.log(my_created_date.toLocaleString());
let myTimestamp = Date.now()
console.log(myTimestamp);
console.log(Math.floor(Date.now()/1000));
console.log(`Date is ${mydate.getDay()}`);
console.log(mydate.toLocaleString('default', {weekday: "long"}))
*/



// console.log("************ Array *****************")

//shallow copy of an object is a copy whose properties share the same referance  - so if we change anything in source or copy file, both the file changes
//deep copy of an object is a copy whose properties don't share the same referance  - not disturing the source changing anything to copy and vice versa
/* 
const arr = [1, 4, 6, 7, 8]
console.log(arr[1]);

arr.push(10) // add in the last
console.log(arr);
arr.pop() //pop from last
console.log(arr);

arr.unshift(111) //add in begining
arr.unshift(111) //remove from begining
console.log(arr);
console.log(arr.includes(8));
console.log(arr.indexOf(8));
console.log(arr.indexOf(8));

const new_ary = arr.join() //join a list to string
console.log(new_ary);

//slice
console.log("A ", arr); 
const new_slice = arr.slice(1,3) //Slice - return only the sliced part of the list, it return like (start_index, end_index), it doesn't affect  anything to the original array
console.log(new_slice);

console.log("B ", arr);
const new_splice = arr.splice(1,3) //Splice - it separates the splice part form the array, and return like (start_index, how many numbers you wanna return), and the original array remain with the remaning elements, so it changes the original array
console.log(new_splice);

console.log("C ", arr);

const mar_hero = ["he", "she" , "kk"]
const DC_hero = ["hwe", "ewe" , "wae"]
const ind_hero = ["hary", "we" , "wer"]

mar_hero.push(DC_hero) //array under array
const pp = mar_hero.concat(DC_hero) // concat two array
const all_hero = [...mar_hero, ...DC_hero, ...ind_hero] // concat any numbers of array
console.log(all_hero);

const nested_array = [1,2,3,[4,5],6,[7,8,[9,10]]]
console.log(nested_array.flat(Infinity));

console.log(Array.isArray("Aishwarya"));
console.log(Array.from("Aishwarya"));

const val1 = 100
const val2 = 200
const val3 = 300
console.log(Array.of(val1, val2, val3));
*/

// console.log("************ Objects *****************")

//Object.create // constructor way
//object literals

//const myst = Symbol("Key1")

// const js_user = {
//     "name" : "Aish",
//     age : 25,
//     City : "Kolkata",
//     myst : "MyKey1",
//     isloggin : false
// }
// Object.freeze(js_user)
// console.log(js_user.name);
// console.log(js_user["name"]);
// console.log(js_user["age"]);
// console.log(js_user[myst]);
// js_user.City = "howrah"
// console.log(js_user);

// js_user.greeting = function(){
//     console.log("Hello, Good Morning");
// }
// console.log(js_user.greeting());

// js_user.greetingto = function(){
//     console.log(`Hello, Good Morning ${this.name}`);
// }
// console.log(js_user.greetingto());


//object singleton or using constructor

//const facebook = new Object() // singleton object 
// const facebook = {} // non singleton object

// console.log(facebook)

// facebook.id = '123abs'
// facebook.name = 'Aishwarya'
// facebook.isLoggedin = false

//console.log(facebook)

// const regularUser = {
//     email : "som@gmailak",
//     fullname :{
//         usersname : {
//             firstname :"Aishwarya",
//             Lastname : "Roy"
//         }
//     },
//     address : "ABC, road, 71110"
// }

//console.log(regularUser.fullname?.usersname.firstname); // ? is used for error handeling, if the fullname object is not there then it won't throw error, it just give undefined

// const obj1 = { 1:'a', 2:'b'}
// const obj2 = { 3:'c', 4:'d'}
// //const obj3 = Object.assign({}, obj1, obj2) //assign(target , source) // 1st way to concat
// const obj3 = {...obj1,...obj2} //2nd way to concat
// console.log(obj3);


// const users = [
//     {
//         id : 1,
//         "email" : "hh@gmail.com"
//     }
// ]

// console.log(users[0].email);

// console.log(facebook);
// console.log(Object.keys(facebook));
// console.log(Object.values(facebook));
// console.log(Object.entries(facebook));
// console.log(facebook.hasOwnProperty('isLogged') );


// const course = {
//     coursename : "Python Programming",
//     price : '333',
//     instructor : "aishwraya"
// }

// console.log(course.coursename);
// const {instructor : Teacher} = course
// console.log(Teacher);

// console.log("************ APIs *****************")

// {
//     "name" : "Aishw",
//     "course" : "Python",
//     "price" : "free"
// }

// [
//     {},
//     {},
//     {}
// ]

// console.log("************ Functions *****************")

// function myname(){
//     console.log("A");
//     console.log("I");
//     console.log("S");
//     console.log("H");
//     console.log("W");
//     console.log("A");
//     console.log("R");
//     console.log("Y");
//     console.log("A"); 
// }

// myname()


// function add_number(num1, num2){
//     console.log(num1+num2);   
// }

// function add_number(num1, num2){
//     let res = num1+num2 
//     return res 
// }
// const res = add_number(6,4)
// console.log("Result : ", res);

// function loginmessage(username ){ //default values - username = "Sam"
//     if(!username){ // username === undefined
//         console.log("ERROR!! Please Enter a Username!");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginmessage());


// function calculate(...num1){
//     return num1
// }
// console.log(calculate(2,3,4,5,8,10));

// const user = {
//     username : "Aishwarya Roy",
//     price : '333',
// }

// function handleobjcet (anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }
// handleobjcet(user)
// handleobjcet({
//     username : "Aishwarya",
//     price : '199',
// })


// function reeturnarray(getarray){
//     return getarray[0]
// }
// const newarray = [100,200,300]
// console.log(reeturnarray(newarray));


// console.log("************ Scopes *****************")
//global scope, block scope
//global 
// let a = 300
// if (true){ //block 
//     let a = 20
//     const b = 10
//     var c = 30
// }

// console.log(a);
// console.log(b);
//console.log(c); // here c is printing, as var does not care about scope

// function one(){
//     const user_name = "Aishwarya from One"
//     function two(){
//         const web = "youtube.com"
//         console.log(user_name);
//     }
    
//     two()
// }
// one()

// console.log(addone(2))
// function addone(num){ //in this case you can call the function whereever you want, before or after
//     return num+1
// }


// const addtwo = function(num){ // in this case , funtion is acting like initiatizing to an object . so here you have to call it afterwords only
//     return num+1
// }
// console.log(addtwo(5))


// console.log("************ Arrows *****************")
// const arrow_user = {
//     username : "Aish",
//     price : 999,
//     welcomeMessage : function(){
//         console.log(`${this.username}, welcome to our website`);
//         console.log(this);
//     }
// }

// arrow_user.welcomeMessage()
// arrow_user.username = "Sam"
// arrow_user.welcomeMessage()


// const chaii = function(){
//     let username = "Aishwarya"
//     console.log(this.username);
// }
// chai()

// const chai = () => { //arrow function
//     let username = "Aishwarya"
//     console.log(this);
// }
// chai()

// const two_adding = (num1,num2) => { //arrow function
//     return num1+num2 //explicit return
// }
// console.log(add_two(2,4))


// //const add_two = (num1,num2) => num1+num2 //implicit return
// const add_two = (num1,num2) => (num1+num2)  //implicit return
// console.log(add_two(2,4))
// const returobject = (num1,num2) => ({username:"Aish"}) 



// console.log("************ Immediately Invoked Function Expression *****************")
 //we use IIFE to avoid global scope pollution
// (function defination)(execution call)

// Named IIFE
// (function iffe(){
//     console.log("DB CONNECTED"); 
// })();

// // Unamed IIFE
// ((name) => {
//     console.log(`DB CONNECTED TWO ${name}`); 
// })("Aishwarya");


// console.log("************ Javascript execution context *****************")

//1. global EC
//2. function EC
//3. Eval EC

/*
1. gloabl Execution -> this
2. memory phase -> 
    val1 -> undefined
    val2 -> undefined
    addnum -> defination
    result -> undefined
3. execution phase
    val1 <- 10
    val2 <- 5
    addnum -> new variable enviroment + Execution therad (again memory phase + Execution phase)
    result = 15
4. result go to gloabl execution 
*/

// console.log("************ Control flow *****************")

//IF

// const isloggedIn = true
// if (isloggedIn){
// }
//== for checking condition, === check condition with type 
// if (2 === "2"){
//     console.log("Yes");
// }

// const temp = 32
// if (temp<50){
//     console.log("Less than 40");
// } else{
//     console.log("More than 40");
// }

// const balance = 300
// if (balance>200) console.log("Greater than");

// const tempu = 25
// if (tempu>50 && tempu<60){
//     console.log("More than 50 & Less than 60");
// } else if (tempu>20 && tempu%5 == 0) {
//     console.log("More than 20");
// }else{
//     console.log("less than 20");
// }

// Switch case

// const month = 6
// switch(month){
//     case 1:
//         console.log("Jan");
//         break;
//     case 2:
//         console.log("Feb");
//         break;
//     case 3:
//         console.log("Mar");
//         break;
//     case 4:
//         console.log("Apr");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     default:
//         console.log("Deafult");
//         break;
// }


// falsy value
// false, 0, -0, BigInt 0n, "", undefined, null, NaN

//truthy values
// "0", 'false'," ", [], {}, funtion(){}, 

// && , || - logical operator

// nullish coalescing operator (??): null undefined
// let val1;
// val1 = 5??10
// val2 = null??10
// val3 = undefined??15
// console.log(val1);
// console.log(val2);
// console.log(val3);

//Terniary operator
// condition ? true : false 

// const teaprice = 100
// teaprice<=80 ? console.log("Less than 80") : console.log("Grater than 80")



// console.log("************ Loops *****************")


// //for loop
// ara = [1,2,3,5,6]
// for (let i = 0; i <= ara.length; i++) {
//     const element = i;
//     console.log(element);
// }

// //while
// let i = 0
// while (i<=10){
//     console.log(`I = ${i}`);
//     i+=2
// }

// //Do-while
// let j = 13
// do {
//     console.log(`I = ${j}`);
//     j++
// }while (j<=10);

// //for of

// const arr = [1,2,3,5,6]
// for (const i of arr) {
//     console.log(i);
// }

// const greet = "Hello Aishwarya"
// for (const i of greet) {
//     console.log(i);
// }

// //Map

// const newmap = new Map() // map is unique
// newmap.set("IN", "India")
// newmap.set("US", "United States")
// newmap.set("FR", "France")
// newmap.set("IN", "India") //will not added
// console.log(newmap);

// for (const [key] of newmap) {
//     console.log(key); 
// }


// //for in

// const for_in_user = {
//     name : "Aish",
//     age : 25,
//     City : "Kolkata",
//     myst : "MyKey1"
// }

// for (const i in for_in_user) {
//     console.log(`${i} =  ${for_in_user[i]}`);    
// }

// const programming = ['JS', "CPP", "Python", "ruby"]
// for (const i in programming) {
//     console.log(programming[i]);
// }

// //for each

// const coding = ['JS', "CPP", "Python", "ruby"]

// coding.forEach(function(item) {
//     console.log(item);
// });

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// });

// const mycoding = [
//     {
//         name : "javascript",
//         extName : ".js",
//         no_of_code : 5
//     },
//     {
//         name : "Python",
//         extName : ".py",
//         no_of_code : 10
//     },
//     {
//         name : "C Prgramming",
//         extName : ".cpp",
//         no_of_code : 2
//     }    
// ]

// mycoding.forEach( (item) => {
//     console.log(item);  
// })



//console.log("************ Filter_Map_reduce *****************")


//const nums = [1,4,5,2,8]
// //filter

// const new_nums = nums.filter( (num) => num>3)
// console.log(new_nums);


// //map

// const new_nums_map = nums.map((num) => (num+10))
// console.log(new_nums_map);


// //reduce

// const nums_reduce = nums.reduce(function(acc,cur){
//     console.log(`acc : ${acc}, curent value ${cur}`);
//     return acc+cur
// }, 0)
// console.log(nums_reduce);

// const nums_reduce_arrow = nums.reduce((acc,cur) => (acc+cur), 0)
// console.log(nums_reduce_arrow);