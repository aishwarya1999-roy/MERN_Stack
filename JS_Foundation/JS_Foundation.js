

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
