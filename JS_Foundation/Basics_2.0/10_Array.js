// console.log("************ Array *****************")

//shallow copy of an object is a copy whose properties share the same referance  - so if we change anything in source or copy file, both the file changes
//deep copy of an object is a copy whose properties don't share the same referance  - not disturing the source changing anything to copy and vice versa
 
const arr = [1, 4, 6, 7, 8]
console.log(arr[1]);

arr.push(10) // add in the last
console.log(arr);
arr.pop() //pop from last
console.log(arr);

arr.unshift(111) //add in begining
arr.unshift(111) //remove from begining
console.log(arr);
console.log(arr.includes(8));
console.log(arr.indexOf(8));
console.log(arr.indexOf(8));

const new_ary = arr.join() //join a list to string
console.log(new_ary);

//slice
console.log("A ", arr); 
const new_slice = arr.slice(1,3) //Slice - return only the sliced part of the list, it return like (start_index, end_index), it doesn't affect  anything to the original array
console.log(new_slice);

console.log("B ", arr);
const new_splice = arr.splice(1,3) //Splice - it separates the splice part form the array, and return like (start_index, how many numbers you wanna return), and the original array remain with the remaning elements, so it changes the original array
console.log(new_splice);

console.log("C ", arr);

const mar_hero = ["he", "she" , "kk"]
const DC_hero = ["hwe", "ewe" , "wae"]
const ind_hero = ["hary", "we" , "wer"]

mar_hero.push(DC_hero) //array under array
const pp = mar_hero.concat(DC_hero) // concat two array
const all_hero = [...mar_hero, ...DC_hero, ...ind_hero] // concat any numbers of array
console.log(all_hero);

const nested_array = [1,2,3,[4,5],6,[7,8,[9,10]]]
console.log(nested_array.flat(Infinity));

console.log(Array.isArray("Aishwarya"));
console.log(Array.from("Aishwarya"));

const val1 = 100
const val2 = 200
const val3 = 300
console.log(Array.of(val1, val2, val3));
