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

function loginmessage(username ){ //default values - username = "Sam"
    if(!username){ // username === undefined
        console.log("ERROR!! Please Enter a Username!");
        return
    }
    return `${username} just logged in`
}
console.log(loginmessage());
