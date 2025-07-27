//1) Reverse word in a sentence

// let word = "jesli is a IronMan";
// let reverse = "";
// for(i = word.length-1; i>=0; i--){
//     reverse = reverse + word[i];
// }

// console.log(reverse);

//2) Remove duplicate in a sentence

// let arr = [1,2,3,4,2,4,8];

// let s = new Set(arr);
// let noduplicate = [...s];

// console.log(noduplicate);


// 3) count vowels in a string

let vowels = ["A","E","I","O","U","a","e","i","o","u"];

let sentence = "Welcome to JavaScript Programming";

let temp ="";
for(i = sentence.length-1; i>=0; i--){
    if(vowels.includes(sentence[i])){
        continue;
    }
    
    else{
        temp += sentence[i];
    }

}

console.log(temp);