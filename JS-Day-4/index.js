// an array of objects is a collection where each elements is an object with properties.
// // this is used to group related data together in a structured way

// let details = {
//     name : "JavaScript",
//     day :5,
//     date : 25,
//     subject : {
//         dbms : 100,
//         java : 200
//     },

//     sum : function(){
//         let total = parseInt(this.subject.dbms + this.subject.java);
//         return total
//     }
// }

// console.log(details.name);
// console.log(details["day"]);
// console.log(details.subject.dbms);
// console.log(details.subject["java"]);
// console.log(details.sum())


// // for arrray of objects

// let detail = [{
//     name : "JavaScript",
//     day :5,
//     date : 25,
//     subject : {
//         dbms : 100,
//         java : 200
//     },

//     sum : function(){
//         let total = parseInt(this.subject.dbms + this.subject.java);
//         return total
//     }
// }]

// console.log(detail[0].name);
// console.log(detail[0]["day"]);
// console.log(detail[0].subject.dbms);
// console.log(detail[0].subject["java"]);
// console.log(detail[0].sum())



// //object destructuring - is a syntax in JS that allows uou to extract values from object and assign them to variables in a clean and readable way


// let person ={
//     job : "Software Developer",
//     salary : 1200000
// }

// const {job, salary} = person

// console.log(job + " " + salary);




// -----------------------------------------------------------

// ARRAYS

let arr = [10, 20, "Thirty", 40.0];
console.log(arr);

let nums = new Array(1,2,3,4,5); // using array constructor
console.log(nums);

// array destructurinng
let arr2 = [10,20,true, false];
const [num1, num2, b1, b2] = arr2

console.log(num1);

// filter - returns a new array containing only the elements that match a condition
console.log("-----------------------------------------------------------------")
let student = [
    {name : "Jesli", grade : "O"},
    {name: "Priya", grade : "A+"},
    {name: "Arun", grade: "A"},
    {name: "Kanikaa", grade : "O+++++"},
    {name: "Akash", grade : "A++++"},
    {name: "Kanikaa", grade : "Gold Medal"}
]

// console.log(student[0])

let gradestudent = student.filter(student => student.grade === "A")
console.log(gradestudent);


// SPLICE

let num = [10,20,30,40,50];
num.splice(1,1,50); // remove 1 item at index 1 and adds 50 OUTPUT: [ 10, 50, 30, 40, 50 ]
console.log(num);