console.log("************ String *****************")


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