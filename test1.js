//used to get values of the inputs
const TITLE = document.getElementById('title')
const AUTHOR = document.getElementById('author')
const PAGES = document.getElementById('pages')
const CONTAINED = document.querySelector('.contain')
//container to display book values
const CARD = document.createElement('div');
const newTitle = document.createElement('p');
const newAuthor = document.createElement('p');
const newPages = document.createElement('p');
const REMOVEBUTTON =document.createElement('button');
const READBUTTON = document.createElement('button');

let myLibrary = [];

class Book{
    constructor(title, author, pages){
        this.title = title
        this.author = author
        this.pages =pages
        this.read = false
    }
}

Book.prototype.notRead = function(){
    this.read = false;
    console.log(this.title, 'has not been read ')
}
    
Book.prototype.read = function(){
    /*create element somewhere else and assign button to it, default button is read and says not false
    if clicked this.read = true and the button changes to green*/
    READBUTTON.addEventListener('click', ()=>{
        READBUTTON.textContent = `READ`
        this.read = true;
    })
}

function addANewBook(book){
    const BUTTON = document.querySelector('.submit');
    BUTTON.addEventListener('click', () =>{
        const book = new Book( TITLE.value, AUTHOR.value,PAGES.value)
        myLibrary.push(book)
        return myLibrary;
    })
    displayBook()
}
addANewBook();

function displayBook(){
    myLibrary.forEach(book =>{
        CARD.classList.add('container')
        CONTAINED.appendChild(CARD);
        CARD.appendChild(newTitle);
        CARD.appendChild(newAuthor);
        CARD.appendChild(newPages);
        CARD.appendChild(REMOVEBUTTON)
        newTitle.textContent = `${book.title}`
        newAuthor.textContent = `${book.author}`
        newPages.textContent = `${book.pages}`
        REMOVEBUTTON.textContent = `Remove`
        READBUTTON.textbutton = `Not Read`
    } )
    console.log(myLibrary)
}


function removeBook(){
    //removes book from library on click
    REMOVEBUTTON.addEventListener('click' , ()=>{
        CONTAINED.removeChild(CARD);
    })
}
