//1) Reverse word in a sentence

// let word = "jesli is a IronMan";
// let reverse = "";
// for(i = word.length-1; i>=0; i--){
//     reverse = reverse + word[i];
// }

// console.log(reverse);

//2) Remove duplicate in a sentence

let arr = [1,2,3,4,2,4,8];

let s = new Set(arr);
let noduplicate = [...s];

console.log(noduplicate);