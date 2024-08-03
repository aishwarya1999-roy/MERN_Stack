"use strict"; //treat all JS code as newer version - as of now it takes it default

console.log("~~ Hey there, This is all about JS foundation ~~")

console.log("************ console.log(), const, var, let *****************")

const EmpID = 40 //constant declaration, can't change the value
let EmpMail = "abc@gmail.com" //variable declaration - scope in var
var contact = 123456 //variable declaration - no scope in var - never use var
city = "Kolkata" //variable declaration - we can declare without let/var but it is not recomemded. 
let account_state; //undefined value stored here as no value passed

//Prefer not to use var as there are issue with block scope & funcational scope
console.log(EmpID, EmpMail, contact, city)  //console.log() is to print anything
console.table([EmpID, EmpMail, contact, city, account_state]) //console.table() is used to show everything as a table format
