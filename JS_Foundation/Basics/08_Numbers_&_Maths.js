console.log("************ Numbers  *****************")

const numbervalue = 400
console.log(numbervalue);

const balance = new Number(5)
console.log(balance);
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));
console.log(balance.toPrecision(2));
console.log(balance.toExponential(2));

const hundreds = 4000000
console.log(hundreds.toLocaleString('en-IN'));
console.log(Number.MIN_SAFE_INTEGER);

console.log("************ Maths  *****************")

console.log(Math.abs(-4)); //return positive value for any given negetive value
console.log(Math.round(4.6)); // it round of the floating point number
console.log(Math.ceil(4.6)); // return ceil mean celling value of floating point number
console.log(Math.floor(4.6)); //return floor value for floating point numbers
console.log(Math.sqrt(4)); // //square root
console.log(Math.pow(2,4)); //power of n
console.log(Math.max(19, 45, 99, 5)); //return max
console.log(Math.min(19, 45, 99, 5)); //return min
console.log(Math.random()); //return value from 0 to 1
console.log(Math.random()*10 + 1); //return value from 1 to 10
console.log(Math.floor(Math.random()*10 + 1)); //return floor value from 1 to 10 
const min = 10
const max = 50
console.log( Math.floor(Math.random() * (max - min + 1)) + min );
