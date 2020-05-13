let myLibrary = [];
let newBook = document.querySelector('.add-book');
let form = document.querySelector('.book-data');

// Book object constructor
function Book(title,pages,author,status) {
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.status = status;
}

//User input processing mechanism
function addBook(title,pages,author,status) {
    let book = new Book(title,pages,author,status);
    myLibrary.push(book);
    console.log(myLibrary);
}

newBook.addEventListener('click', () => {
    form.style.setProperty('display', 'block');
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let title = document.querySelector('.title');
    let pages = document.querySelector('.pages');
    let author = document.querySelector('.author');
    let status;
    let yes = document.querySelector('.yes');
    let no = document.querySelector('.no');

    if (yes.checked) {
        status = 'yes';
    } else if (no.checked) {
        status = 'no';
    }

    addBook(title.value,pages.value,author.value,status);

    form.reset();
    form.style.setProperty('display', 'none');
});