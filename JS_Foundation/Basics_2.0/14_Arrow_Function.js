console.log("************ Arrows *****************")
const arrow_user = {
    username : "Aish",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to our website`);
        console.log(this);
    }
}

arrow_user.welcomeMessage()
arrow_user.username = "Sam"
arrow_user.welcomeMessage()


const chaii = function(){
    let username = "Aishwarya"
    console.log(this.username);
}
chai()

const chai = () => { //arrow function
    let username = "Aishwarya"
    console.log(this);
}
chai()

const two_adding = (num1,num2) => { //arrow function
    return num1+num2 //explicit return
}
console.log(add_two(2,4))


//const add_two = (num1,num2) => num1+num2 //implicit return
const add_two = (num1,num2) => (num1+num2)  //implicit return
console.log(add_two(2,4))
const returobject = (num1,num2) => ({username:"Aish"}) 