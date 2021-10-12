// Book class
class Book {
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class: UI Tasks
class UI {
  constructor() {
    this.allElementAreValid = true;
  }
  static displayBooks() {
    const StoredBooks = [
      // {
      //   title: 'Amintiri Din Copilarie',
      //   author: 'Ion Creanga',
      //   isbn: '11223344'
      // },
      // {
      //   title: 'Luceafarul',
      //   author: 'Mihai Eminescu',
      //   isbn: '12341234'
      // }
    ]

    const books = StoredBooks;

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const bookList = document.querySelector('#new-book');

    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><button class="delete"> X </button></td>
    `;

    bookList.appendChild(row);
  }

  static showError() {
    document.querySelector('.validation-form').classList.add('error');
    document.querySelector('.validation-form').innerHTML = "Please fill in all fields !";
    document.querySelector('.validation-form').style.display="block";
  }

  static showSuccess() {
    document.querySelector('.validation-form').classList.remove('error');
    document.querySelector('.validation-form').style.display="block";
    document.querySelector('.validation-form').classList.add('success');
    document.querySelector('.validation-form.success').innerHTML = "Book Added !";
  }

  static clearFields() {
    document.querySelector('#input-title').value = '';
    document.querySelector('#input-author').value = '';
    document.querySelector('#input-isbn').value = '';
  }

  static deleteBook(el) {
    if(el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }
}

//Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Add a Book
document.querySelector('#inputs').addEventListener('submit', e => {
  e.preventDefault();
  const title = document.querySelector('#input-title').value;
  const author = document.querySelector('#input-author').value;
  const isbn = document.querySelector('#input-isbn').value;

  const book = new Book(title, author, isbn);

  if (title === '' || author === '' || isbn === '') {
    UI.showError();
  } else if (document.querySelector('.validation-form').classList.contains('error')) {
    UI.showSuccess();
    UI.addBookToList(book);
    UI.clearFields();
  } else {
    document.querySelector('.validation-form').classList.add('success');
    document.querySelector('.validation-form').innerHTML = "Book Added !";
    UI.addBookToList(book);
    UI.clearFields();
  }
  setTimeout(function () {
    document.querySelector('.validation-form').style.display='none';
}, 3000);

});

//Remove a Book
document.querySelector('#new-book').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
  if (document.querySelector('.validation-form').classList.contains('error')) {
    document.querySelector('.validation-form').classList.remove('error');
    document.querySelector('.validation-form').style.display="block";
    document.querySelector('.validation-form').classList.add('success');
    document.querySelector('.validation-form.success').innerHTML = "Book Removed !";
  } else {
    document.querySelector('.validation-form').style.display="block";
    document.querySelector('.validation-form').classList.add('success');
    document.querySelector('.validation-form.success').innerHTML = "Book Removed !";
  }
  setTimeout(function () {
    document.querySelector('.validation-form').style.display='none';
}, 3000);
});