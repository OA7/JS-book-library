// Book Array to hold books
const myLibrary = [];

// Book function
function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function chkbtn(val, status){
  if (val) {
    return `<button id='unread'> ${status} </button>`
  } else {
    return `<button id='read'> ${status} </button>`
  }
}

// Function to add books to Array
function addBookToLibrary(book) {
  const list = document.querySelector('#book-table');
  const row = document.createElement('tr');
  let status = book.read ? 'Read' : 'Unread';

  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td>${chkbtn(book.read, status)}</td>
  `
  list.appendChild(row);
}

// console.log(document.querySelector('.messageCheckbox:checked').value);

// Adding book from form
document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('checkbox').checked;
  // console.log(read);
  const book = new Book(title, author, pages, read);
  addBookToLibrary(book);
  myLibrary.push(book);
  console.log(myLibrary);
});


// Render view
function render() {

}

// Validation for input

//
