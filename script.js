let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(obj){
    myLibrary.push(obj);
}

const form = document.getElementById('temp_form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const myFormData = new FormData(e.target);
    
    const title = myFormData.get('book_title');
    const author = myFormData.get('author');
    const pages = myFormData.get('pages');
    const read = myFormData.get('read_or_not');

    const book = new Book(title, author, pages, read);


    addBookToLibrary(book);

    form.reset();
});

