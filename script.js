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

function createBook(obj) {
    const grid_container = document.querySelector(".container");

    console.log(grid_container);
    const bookDiv = document.createElement("div");

    bookDiv.className = "book"

    //is there any other better approach?
    //create p element for new book
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("p");

    //create textnode for each object element
    const titleNode = document.createTextNode(obj.title);
    const authorNode = document.createTextNode(obj.author);
    const pagesNode = document.createTextNode(obj.pages);
    const readNode = document.createTextNode(obj.read);

    //create button
    const btn = document.createElement("button");
    const btnNode = document.createTextNode("remove");

    btn.className = "rm_btn";
    btn.onclick = function() {
        btn.parentElement.remove();
    }

    btn.appendChild(btnNode);

    //append child to premade p elements
    title.appendChild(titleNode);
    author.appendChild(authorNode);
    pages.appendChild(pagesNode);
    read.appendChild(readNode);

    //append child to book div
    bookDiv.appendChild(title);
    bookDiv.appendChild(author);
    bookDiv.appendChild(pages);
    bookDiv.appendChild(read);

    bookDiv.appendChild(btn);


    grid_container.appendChild(bookDiv);
}


const form = document.getElementById('temp_form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const myFormData = new FormData(e.target);
    
    const title = myFormData.get('book_title');
    const author = myFormData.get('author');
    const pages = myFormData.get('pages');
    const read = myFormData.get('read');

    const book = new Book(title, author, pages, read);


    addBookToLibrary(book);

    form.reset();

    createBook(book);

});



function openForm(){
    document.getElementById('temp_form').style.display = "block";
}

function closeForm(){
    document.getElementById('temp_form').style.display = "none";
}