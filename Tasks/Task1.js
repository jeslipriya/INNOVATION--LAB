// Task 1

// simple if statement

let age = prompt("Enter your Age: ");

if(age > 18){
    console.log("You are eligible to vote!");
}

// if-else block

let temp = prompt("Enter the current temperature (in celcius): ");

if(temp > 30){
    console.log("It's Hot!");
} else{
    console.log("It's Cold!");
}

// Multiple conditions with else-if

let grade = prompt("Enter your mark: ");

if(grade >= 90 && grade < 100){
    console.log("Grade: A+");
}

else if(grade >= 80 && grade < 90){
    console.log("Grade: A");
}

else if(grade >= 70 && grade < 80){
    console.log("Grade: B+");
}

else if(grade >= 60 && grade < 70){
    console.log("Grade: B");
}

else if(grade >= 50 && grade < 60){
    console.log("Grade: C+");
}

else if(grade >= 40 && grade < 50 ){
    console.log("Grade: C");
}

else if(grade >= 0 && grade < 40 ){
    console.log("Fail");
}

else{
    console.log("Invalid Input!");
}


// switch statement for choosing the day of the week

let day = prompt("Enter the day (1-7)");

switch (day) {
    case 1:
        console.log("It's Monday!");
        break;
    case 2:
        console.log("It's Tuesday!");
        break;
    case 3:
        console.log("It's Wednesday!");
        break;
    case 4:
        console.log("It's Thursday!");
        break;
    case 5:
        console.log("It's Friday!");
        break;
    case 6:
        console.log("It's Saturday!");
        break;
    case 7:
        console.log("It's Sunday!");
        break;

    default:
        console.log("Invalid Input!");
        break;
}