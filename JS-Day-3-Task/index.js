let tasks = [];

function addTask(task, callback) {
    tasks.push(task);
    callback(); 
}

const printTasks = () => {
    console.log("Current Tasks:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
};

function addMultipleTasks(callback, ...taskList) {
    taskList.forEach(task => tasks.push(task));
    callback(); 
}

function scopeExample() {
    let insideVar = "Inside the function";
    console.log(insideVar);
}
let outsideVar = "Outside the function";

scopeExample();
console.log(outsideVar);


addTask("Finish assignment", printTasks);
addMultipleTasks(printTasks, "Buy groceries", "Do workout", "Water the plants");
