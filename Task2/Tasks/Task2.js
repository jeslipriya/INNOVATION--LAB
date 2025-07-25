// Task 2

// Printing numbers 1-10 using while loop

let num = 1;
while (num <=10) {
    console.log(num);
    num++;
}

// Getting correct Password until user inputs correct password using do while loop

let password;
do {
    password = prompt("Enter the password: ");

} while (password !== "PassWord");
console.log("Access Granted!");

// Sum of first N natural numbers using for loop

let N = prompt("Enter a number to find it's sum: ");
let sum = 0;

for(i=0; i<=N; i++){
    sum += i;
}

console.log("Sum = " + sum);

// printing multiplication table using nested loop

let n = prompt("Enter a number to get it's nultiplication table: ");

if(n == 0){
    console.log("Multiplication of 0 is 0");
}

else{
    for(i=1; i<=10; i++){
        console.log(i + " X " + n + " = " + (n*i));
    }
}
