// date and time
let current = new Date();
let day = current.getDay();

console.log(current);
console.log(current.toString());
console.log(day);

// class and constructor

class Example{
    constructor(name){
        this.name = name;
        console.log(name);
    }
}

let result = new Example("Jesli")


// getter and setter

class Bank{
    constructor(initialAmount = 0){
        this._initialAmount = initialAmount;
        console.log(initialAmount);
    }

    get initialAmount(){
        return this._initialAmount;
    }

    set initialAmount(amount){
        this._initialAmount = amount;
    }
}

let res1 = new Bank(1000);
let res2 = new Bank(2000);
let res3 = new Bank(3000);
console.log(res1);
console.log(res2);
console.log(res3);