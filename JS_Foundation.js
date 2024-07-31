console.log("~~ Hey there, This is all about JS foundation ~~") //print

// --------------- console.log(), const, var, let ----------------

/*
const EmpID = 40 //constant declaration, can't change the value
let EmpMail = "abc@gmail.com" //variable declaration - scope in var
var contact = 123456 //variable declaration - no scope in var - never use var
city = "Kolkata" //variable declaration - we can declare without let/var but it is not recomemded. 
let account_state;
//Prefer not to use var as there are issue with block scope & funcational scope
console.log(EmpID, EmpMail, contact, city)
console.table([EmpID, EmpMail, contact, city, account_state])
*/

// ---------------- Datatype -------------------

"use strict"; //treat all JS code as newer version - as of now it takes it default

//alert("Hello") // works on browser

/* 
let name = "Aish" //string
let age = 25 //number 2 to the power 53
let islogginin = false //boolean

// bigint - bigger than number
// null = standalone value / blank / empty
// undefinded = value not defined 
// symbol = unique
// object

console.log(typeof null) //get the type of the variable 
*/

// ------------- Datatype conversion  ----------------
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

// ------------- Datatype conversion  ----------------

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
*/

let str1 = "Hello"
let str2 = " Aish"

console.log("1" + 2);
console.log(1 + "2");
console.log(1 + 2);
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");