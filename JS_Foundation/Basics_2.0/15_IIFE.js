// console.log("************ Immediately Invoked Function Expression *****************")
 //we use IIFE to avoid global scope pollution
// (function defination)(execution call)
// Named IIFE
(function iffe(){
    console.log("DB CONNECTED"); 
})();

// Unamed IIFE
((name) => {
    console.log(`DB CONNECTED TWO ${name}`); 
})("Aishwarya");