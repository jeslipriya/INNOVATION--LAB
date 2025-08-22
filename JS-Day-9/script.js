let contact = [
    {
        name : "John",
        phone : 1234567890,
        email : "john@gmail.com",

        displayInfo(){
            console.log(`Name: ${this.name}, Phone Number: ${this.phone}, Email id: ${this.email}`);
        }

    },
    {
        name : "Joshua",
        phone : 9087654432,
        email : "joshua@gmail.com",

        displayInfo(){
            console.log(`Name: ${this.name}, Phone Number: ${this.phone}, Email id: ${this.email}`);
        }

    }
];

const {name, phone, email} = contact;
console.log(`(Destructured) ${name} , ${phone} , ${email}`);

console.log(contact.name);
console.log(contact["phone"]);

contact.forEach(contact => contact.displayInfo());