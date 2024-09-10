
console.log("************ Loops *****************")


//for loop
// ara = [1,2,3,5,6]
// for (let i = 0; i <= ara.length; i++) {
//     const element = i;
//     console.log(element);
// }

//while
// let i = 0
// while (i<=10){
//     console.log(`I = ${i}`);
//     i+=2
// }

//Do-while
// let j = 13
// do {
//     console.log(`I = ${j}`);
//     j++
// }while (j<=10);

//for of

// const arr = [1,2,3,5,6]
// for (const i of arr) {
//     console.log(i);
// }

// const greet = "Hello Aishwarya"
// for (const i of greet) {
//     console.log(i);
// }

//Map

// const newmap = new Map() // map is unique
// newmap.set("IN", "India")
// newmap.set("US", "United States")
// newmap.set("FR", "France")
// newmap.set("IN", "India") //will not added
//console.log(newmap);

// for (const [key] of newmap) {
//     console.log(key); 
// }


//for in

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

//for each

const coding = ['JS', "CPP", "Python", "ruby"]

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

const nums = [1,2,3,4,5]
const new_nums = nums.filter( (num) => num>3)
console.log(new_nums);
