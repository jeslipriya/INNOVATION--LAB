//Global scope

let x= 10; //declared outside the function is a global variable can be accessed inside and outside the function

function globalScope() {
    console.log("Hello World!");
    console.log(x); //accessing inside the function
}

globalScope();

console.log(x); //accessing outside the function


// Function Scope

function functionScope() {
    let y = 20; // can be accessed only inside the function
    console.log(y)
}
// console.log(y) - leads to error
functionScope();

// Block Scope

// the variable is accessed only with in {}

function blockScope(){
    if(true){
        let lang = "JavaScript";
        // console.log(lang); // accessible only with in if block
        // console.log("Block Scope");
        var a = true;
        console.log(a);
        return lang;
    }
    //console.log(lang); - leads to error

    console.log(a);
}
blockScope(); // prints everything inside the function
console.log(blockScope()); // only prints the returned value

// callback: // used in asynchronous, API call, timeouts or event handling, custamizing behaviour inside function
             // a function is passed as an argument to another function

function first(){
    console.log("First");
}

function second(callback){
    console.log("Second");
    // callback();
    // setTimeout(callback, 2000); //  delays and print
    // setInterval(callback, 1000);  // prints contineously until it is terminated or the condition gets false. can use clearInverval

}

// first();
second(first);

// Arrow Function

let count = 0;
let arrowFunction = () => {
    count++;
    console.log(count);
    if(count < 5){
        arrowFunction();
    }
}
arrowFunction();