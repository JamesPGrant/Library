let myLibrary = [];
const title = document.createElement('p');
const author = document.createElement('p');
const pages = document.createElement('p');
title.classList.add("book")
const container = document.querySelector('.container');
container.appendChild(title)
container.appendChild(pages)
container.appendChild(author)


function Book(title, author, pages, read){{
    this.title = title 
    this.author = author
    this.pages = pages 
}}

Book.prototype.notRead = function(){
    this.notRead = false;
    console.log(this.title, 'has not been read ')
}

Book.prototype.read = function(){
    this.read = true;
    console.log(this.title, 'has been read')
}

function addANewBook(){
    //passes the value from each of the inputs to the Book constructor
    //submits form after user clicks submit button and gets the value of each of the book items
   const button = document.getElementById('submit')
   button.addEventListener('click', ()=>{
    let book = new Book( 
        document.getElementById('title').value,
        document.getElementById('author').value,
        document.getElementById('pages').value
            );
            //pushes new book to myLibrary array for each submission
            //for every book create a new card and add the new text content
            myLibrary.push(book)
            title.textContent = `${book.title}`
            author.textContent = `${book.author}`
            pages.textContent = `${book.pages}`
            console.log(myLibrary)
   })
   
}

let book = new Book("Lord of The Rings", "J.R.R Tolkien", "123")

myLibrary.push(book);
title.textContent = `${book.title}`
author.textContent = `${book.author}`
pages.textContent = `${book.pages}`
book.read()
book.notRead();
addANewBook();
console.log(myLibrary)