console.log("~~ Hey there, This is all about JS foundation ~~")

//console.log("************ console.log(), const, var, let *****************")

/*
const EmpID = 40 //constant declaration, can't change the value
let EmpMail = "abc@gmail.com" //variable declaration - scope in var
var contact = 123456 //variable declaration - no scope in var - never use var
city = "Kolkata" //variable declaration - we can declare without let/var but it is not recomemded. 
let account_state; //undefined value stored here as no value passed

//Prefer not to use var as there are issue with block scope & funcational scope
console.log(EmpID, EmpMail, contact, city)  //console.log() is to print anything
console.table([EmpID, EmpMail, contact, city, account_state]) //console.table() is used to show everything as a table format
*/

//console.log("************ Datatype *****************")

"use strict"; //treat all JS code as newer version - as of now it takes it default

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

// const myname = "aish"
// const repcount = 13
//console.log(myname + repcount + "dew"); //outdated

//console.log(`Hello my name is ${myname} and my repo count is ${repcount}`);

const gamename = new String('aishwarya') //creating string as a object to use as a constructor
 
// console.log(gamename[0]);
console.log(gamename.substring());
// console.log(gamename.__proto__);
// console.log(gamename.length); //len of string
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(2));
// console.log(gamename[2]);
// console.log(gamename.indexOf('a')); // return index of first character in case of duplicate character
// console.log(gamename.charCodeAt(0)); //return ASCII value
// console.log(gamename.codePointAt(8)); //return ASCII value
// console.log(gamename.endsWith('b'));
// console.log(gamename.includes('a'));
// console.log(gamename.lastIndexOf('a')); // return index of last character in case of duplicate character
// console.log(gamename.repeat(2)); // repeat the string 
console.log(gamename.normalize()); // repeat the string 




/*
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


const trimstring = "   Aishwarya space   "
console.log(trimstring);
console.log(trimstring.trim());

const url = "https://aishwarya.com/aishwarya%20roy"
console.log(url.replace('%20','-'));

*/