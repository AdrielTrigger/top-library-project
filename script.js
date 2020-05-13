let myLibrary = [];
let newBook = document.querySelector('.add-book');
let form = document.querySelector('.book-data');
let shelf = document.querySelector('.shelf');

// Book object constructor
function Book(title,pages,author,status) {
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.status = status;
    this.position;
}

//User input processing mechanism
function addBook(title,pages,author,status) {
    let book = new Book(title,pages,author,status);
    book.position = myLibrary.length;
    myLibrary.push(book);
    render(book,book.position);
}

function removeBook(library,position) {
    library.splice(position,1);
    console.log(library);
}

function render(book,position) {
    let bookData = document.createElement('div');
    let readStatus = document.createElement('p');
    bookData.classList.add('book');

    for(i = 0; i < 3; i++) {
        let info = document.createElement('p');
        if (i == 0) {
            info.textContent = book.title;
        } else if (i == 1) {
            info.textContent = book.pages;
        } else {
            info.textContent = book.author;
        }
        bookData.appendChild(info);
    }

    readStatus.textContent = book.status;
    bookData.appendChild(readStatus);

    let changeStatus = document.createElement('button');
    changeStatus.textContent = 'Change \'read\' status';
    changeStatus.addEventListener('click', () => {
        if (book.status == 'read') {
            book.status = 'not read';
            readStatus.textContent = book.status;
        } else {
            book.status = 'read';
            readStatus.textContent = book.status;
        }
    });
    bookData.appendChild(changeStatus);

    let removeBook = document.createElement('button');
    removeBook.textContent = 'Remove book';
    removeBook.addEventListener('click', () => {
        shelf.removeChild(bookData);
        myLibrary.splice(position,1);
    });
    bookData.appendChild(removeBook);

    shelf.appendChild(bookData);
}

newBook.addEventListener('click', () => {
    if (myLibrary.length < 10) {
        form.style.setProperty('display', 'block');    
    } else {
        alert('There is a limit of 10 books in this shelf. Please remove at least one in order to add a new book.');
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let title = document.querySelector('.title').value;
    let pages = document.querySelector('.pages').value;
    let author = document.querySelector('.author').value;
    let status;
    let yes = document.querySelector('.yes');
    let no = document.querySelector('.no');

    if (yes.checked) {
        status = 'read';
    } else if (no.checked) {
        status = 'not-read';
    }

    addBook(title,pages,author,status);

    form.reset();
    form.style.setProperty('display', 'none');
});