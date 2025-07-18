let target = Math.floor(Math.random()*100)+1;
let count =0;
let result;


console.log(target);

function playGame(){

    let num = parseInt(document.getElementById("num").value);
    count ++;
    if (target == num){
        result = "You Guesses Correct!";
    }

    else{
        if(num > target){
            result = "Too high!";
        }
        else if(num < target) {
            result= "Too low!";
        }
    }

    document.getElementById("feedback").innerText = result
    document.getElementById("attempts").innerText = "Total Atempts = " + " " + count;
}