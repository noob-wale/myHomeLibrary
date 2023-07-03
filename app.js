// book constructor
function Book(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;    
}

//store books in array
let books = [];

// function to add book
function addBook() {
    let title = prompt("Enter book title: ");
    let author = prompt("Enter the author name: ");
    let genre = prompt("Enter the book genre: ");

    let newBook = new Book(title, author, genre);

    books.push(newBook);

    let bookList = document.getElementById("book-list");
    let bookItem = document.createElement("li");
    bookItem.textContent = "Title: " + newBook.title + ", Author: " + newBook.author + ", Genre: " + newBook.genre;
    bookList.appendChild(bookItem);
}