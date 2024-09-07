console.log("************ Scopes *****************")
// global scope, block scope

let a = 300// global 
if (true){ //block 
    let a = 20
    const b = 10
    var c = 30
}

console.log(a);
console.log(b);
console.log(c); // here c is printing, as var does not care about scope

function one(){
    const user_name = "Aishwarya from One"
    function two(){
        const web = "youtube.com"
        console.log(user_name);
    }
    
    two()
}
one()

console.log(addone(2))
function addone(num){ //in this case you can call the function whereever you want, before or after
    return num+1
}


const addtwo = function(num){ // in this case , funtion is acting like initiatizing to an object . so here you have to call it afterwords only
    return num+1
}
console.log(addtwo(5))

