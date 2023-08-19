class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

let myLibrary = [];

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = '';
  for (let book of myLibrary) {
    const card = createBookCard(book);
    bookList.appendChild(card);
  }
}

function createBookCard(book) {
  const card = document.createElement('div');
  card.className = 'bg-stone-200	 text-orange-800 p-4 rounded shadow mb-4';

  const title = document.createElement('h3');
  title.className = 'text-xl font-semibold mb-2';
  title.textContent = book.title;

  const author = document.createElement('p');
  author.textContent = 'Author: ' + book.author;

  const pages = document.createElement('p');
  pages.textContent = 'Pages: ' + book.pages;

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);

  const readBtn = document.createElement('button');
  readBtn.className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2';
  readBtn.textContent = book.read ? 'Read' : 'Not Read';
  readBtn.addEventListener('click', () => {
    book.read = !book.read;
    displayBooks();
  });
  card.appendChild(readBtn);

  const removeBtn = document.createElement('button');
  removeBtn.className = 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded';
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', () => {
    myLibrary.splice(myLibrary.indexOf(book), 1);
    displayBooks();
  });
  card.appendChild(removeBtn);

  return card;
}

const newBookForm = document.getElementById('new-book-form');
const popup = document.getElementById('popup');

const newBookBtn = document.getElementById('new-book');
newBookBtn.addEventListener('click', () => {
  popup.classList.remove('hidden');
});

window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.add('hidden');
    newBookForm.reset();
  }
});

newBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = parseInt(document.getElementById('pages').value);
  const read = document.getElementById('read').checked;

  const book = new Book(title, author, pages, read);
  addBookToLibrary(book);

  newBookForm.reset();
  popup.classList.add('hidden');

  displayBooks();
});

addBookToLibrary(new Book('The Hobbit', 'JRR Tolkien', 295, true));
addBookToLibrary(new Book('Harry Potter', 'JK Rowling', 500, false));

displayBooks();
