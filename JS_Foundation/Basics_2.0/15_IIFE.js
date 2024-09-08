// console.log("************ Immediately Invoked Function Expression *****************")


(function iffe(){
    console.log("DB CONNECTED"); 
})(); //we use IIFE to avoid global scope pollution

// (function defination)(execution call)

((name) => {
    console.log(`DB CONNECTED TWO ${name}`); 
})("Aishwarya");