function getNumber(){
    let num1 = Number(prompt("Enter number 1: "));
    let num2 = Number(prompt("Enter number 2: "));

    return [num1, num2];
}

function add(a, b) {
    console.log("The result = " + (a+b));
}

function sub(a, b) {
    console.log("The result = " + (a-b));
}

function mul(a, b) {
    console.log("The result = " + (a*b));
}

function div(a, b) {
    if(b === 0){
        console.log("Error: Cannot divide by Zero!");
    }

    else{
        console.log("The result = " + (a/b));
    }
}

function calculator(){

    while (1) {
        
        console.log("==== MENU OPTIONS ====\n");
        console.log("1. Addition");
        console.log("2. Subtraction");
        console.log("3. Multiplication");
        console.log("4. Division");
        console.log("5. Exit\n\n");
    
        let ch = Number(prompt("Enter your option(1,2,3,4,5): "));

        switch (ch) {
            case 1:
                console.log("add")
                add(...getNumber());
                break;

            case 2:
                sub(...getNumber());
                break;

            case 3:
                mul(...getNumber());
                break;

            case 4:
                div(...getNumber());
                break;

            case 5:
                console.log("Existing the program");
                return;
        
            default:
                console.log("Invalid Input! Try Again!")
                break;
        }
    }
}

calculator();