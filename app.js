// Book Array to hold books
const myLibrary = [];

// Book function
function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function chkbtn(val, i){
  let status = val ? 'Read' : 'Unread';
    return `<button class='readbtn' onclick="toggleRead(${i})" id='readbtn'> ${status} </button>`

}


// console.log(document.querySelector('.messageCheckbox:checked').value);

// Function to add books to Array
function addBookToLibrary(book) {
  // const row = document.createElement('tr');
  myLibrary.push(book);

}



// Render view
function render() {
  // const list = document.querySelector('#book-table').innerHTML('');
  document.getElementById('book-table').innerHTML = '';
  
  for(let i=0;myLibrary.length>i;i++){
    const row = document.createElement('tr');
    const list = document.querySelector('#book-table');
    console.log(i);
    row.innerHTML = `
    <td>${myLibrary[i].title}</td>
    <td>${myLibrary[i].author}</td>
    <td>${myLibrary[i].pages}</td>
    <td>${chkbtn(myLibrary[i].read, i)}</td>
    `;
    list.appendChild(row);
  }
}

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
  console.log(myLibrary);

  render();
});

function toggleRead(index) {
  myLibrary[index].read = !myLibrary[index].read;
  // document.getElementById('#book-form').load();
  render();
}
// var x = document.getElementsByClassName("readbtn");
// Validation for input
 
//
