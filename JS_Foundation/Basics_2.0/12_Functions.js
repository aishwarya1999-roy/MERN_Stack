console.log("************ Functions *****************")

function myname(){
    console.log("A");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("W");
    console.log("A");
    console.log("R");
    console.log("Y");
    console.log("A"); 
}

myname()


function add_number(num1, num2){
    console.log(num1+num2);   
}

function add_number(num1, num2){
    let res = num1+num2 
    return res 
}
const res = add_number(6,4)
console.log("Result : ", res);

function loginmessage(username ){ //default values - username = "Sam"
    if(!username){ // username === undefined
        console.log("ERROR!! Please Enter a Username!");
        return
    }
    return `${username} just logged in`
}
console.log(loginmessage());


function calculate(...num1){
    return num1
}
console.log(calculate(2,3,4,5,8,10));

const user = {
    username : "Aishwarya Roy",
    price : '333',
}

function handleobjcet (anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleobjcet(user)
handleobjcet({
    username : "Aishwarya",
    price : '199',
})

function reeturnarray(getarray){
    return getarray[0]
}
const newarray = [100,200,300]
console.log(reeturnarray(newarray));