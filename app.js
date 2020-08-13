// Book Array to hold books
const myLibrary = [];

// Book function
function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Function to add books to Array
function addBookToLibrary(book) {
  myLibrary.push(book);
}

// Adding book from form
document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;

  const book = new Book(title, author, pages);
  addBookToLibrary(book);
  console.log(myLibrary);
});


// Render view

// Validation for input

//
