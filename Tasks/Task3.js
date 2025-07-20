// Task 3

// Exiting the while loop using break on finding the first prime number

let num = 10;
while (true) {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log("First prime number is:", num);
        break;
    }
    num++;
}


// Printing only odd numbers from 1-20 using continue

let n = 20;

for(i=1; i <=20; i++){
    if(i%2 == 0){
        continue;
    }

    else{
        console.log(i);
    }
}