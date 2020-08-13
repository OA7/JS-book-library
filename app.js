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
  const list = document.querySelector('#book-table');
  const row = document.createElement('tr');
  let status = book.read === false ? 'Please read book' : 'Good job';

  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td>${status}</td>
  `
  list.appendChild(row);
}

// Adding book from form
document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;

  const book = new Book(title, author, pages);
  addBookToLibrary(book);
  myLibrary.push(book);
  console.log(myLibrary);
});


// Render view
function render() {

}

// Validation for input

//
