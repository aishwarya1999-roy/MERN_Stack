// console.log("************ Control flow *****************")

//IF

const isloggedIn = true
if (isloggedIn){
}
//== for checking condition, === check condition with type 
if (2 === "2"){
    console.log("Yes");
}

const temp = 32
if (temp<50){
    console.log("Less than 40");
} else{
    console.log("More than 40");
}

const balance = 300
if (balance>200) console.log("Greater than");

const tempu = 25
if (tempu>50 && tempu<60){
    console.log("More than 50 & Less than 60");
} else if (tempu>20 && tempu%5 == 0) {
    console.log("More than 20");
}else{
    console.log("less than 20");
}

// Switch case

const month = 6
switch(month){
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("Apr");
        break;
    case 5:
        console.log("May");
        break;
    default:
        console.log("Deafult");
        break;
}


// falsy value
// false, 0, -0, BigInt 0n, "", undefined, null, NaN

//truthy values
// "0", 'false'," ", [], {}, funtion(){}, 

// && , || - logical operator

// nullish coalescing operator (??): null undefined
let val1;
val1 = 5??10
val2 = null??10
val3 = undefined??15
console.log(val1);
console.log(val2);
console.log(val3);

//Terniary operator
// condition ? true : false 

// const teaprice = 100
// teaprice<=80 ? console.log("Less than 80") : console.log("Grater than 80")