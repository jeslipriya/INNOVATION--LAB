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