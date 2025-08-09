// Library Management System 

class Book{
    constructor(title, author, PublishedYear){
        this.title = title;
        this.author = author;
        this.PublishedYear = new Date(PublishedYear);
    }

    getSummary(){
        return `${this.title} was published by the Author ${this.author} in the year ${this.PublishedYear.getFullYear()}`;
    }
}

class Ebook extends Book{
    constructor(title, author, PublishedYear, fileSize){
        super(title, author, PublishedYear);
        this.fileSize = fileSize;
    }

    getSummary(){
        return `${super.getSummary()} File size: ${this.fileSize}MB`;
    }
}

const book1 = new Book("The Da Vince Code", "Dan", 2003);
const book2 = new Book("The Girl on the Train", "Paula", 2015);

const book3 = new Ebook("Harry Potter", "J.K. Rowling", 1990, 5.7);
const book4 = new Ebook("It Ends with Us", "Hoover", 2016, 2.5);

console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(book3.getSummary());
console.log(book4.getSummary());

