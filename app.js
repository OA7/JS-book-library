let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

let firstBook = new Book('artof', 'me', '222', true);
function addBookToLibrary(book) {
  myLibrary.push(book);
}

// addBookToLibrary(firstBook);

// console.log(myLibrary);