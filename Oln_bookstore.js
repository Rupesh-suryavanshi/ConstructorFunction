//Problem2-ONLINE BOOKSTORE

function Author(name, birthYr, nationality) {
    this.name = name;
    this.birthYr = birthYr;
    this.nationality = nationality;
}

function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
}

Book.prototype.getBookInfo = function() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author.name}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Price: $${this.price}`);
    console.log('----------------------');
};

const author1 = new Author("Arundhati Roy", 1961, "Indian");
const author2 = new Author("Chetan Bhagat", 1974, "Indian");

const book1 = new Book("The God of Small Things", author3, "Fiction", 22);
const book2 = new Book("Five Point Someone", author4, "Fiction", 15);

book1.getBookInfo();
book2.getBookInfo();

