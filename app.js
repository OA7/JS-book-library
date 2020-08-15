// Book Array to hold books
const myLibrary = [
  {
    title: 'Default One',
    author: 'John Doe',
    pages: 1000,
    read: false,
  }, {
    title: 'Default Two',
    author: 'Jane Doe',
    pages: 1500,
    read: false,
  }];

// Book function
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Function to add books to View
function addBookToLibrary(book) {
  const list = document.querySelector('#book-table');
  const row = document.createElement('tr');
  book.read = document.getElementById('checkbox').checked;
  const state = book.read === true ? 'Yes I have' : 'No I have not';

  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td><button class="state-btn" id="status">${state}</button></td>
    <td><a href="#" class="del-btn delete">Delete Book</a></td>
  `;
  list.appendChild(row);

  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id === 'status') {
      e.preventDefault();
      if (book.read === false) {
        book.read = true;
        e.target.innerHTML = 'Yes I have';
      } else {
        book.read = false;
        e.target.innerHTML = 'No I have not';
      }
    }
  });
}

// Function to clear fields after book is submitted
function clearfields() {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#pages').value = '';
  document.querySelector('#checkbox').checked = false;
}

// Adding book from form input
function addNewBook() {
  document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('checkbox').value;
    const book = new Book(title, author, pages, read);
    addBookToLibrary(book);
    myLibrary.push(book);
    clearfields();
  });
}

// Remove book from view
function removeBook(el) {
  if (el.classList.contains('delete')) {
    el.parentElement.parentElement.remove();
  }
}

// Function to return book to be removed
function removeBookCall() {
  document.querySelector('#book-table').addEventListener('click', (e) => {
    removeBook(e.target);
  });
}

// Render view
function render() {
  myLibrary.forEach((book) => addBookToLibrary(book));
}

// Function calls
render();

addNewBook();

removeBookCall();