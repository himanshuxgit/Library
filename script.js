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
    card.className = 'bg-white p-4 rounded shadow';
  

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