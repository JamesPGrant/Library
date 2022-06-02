//used to get values of the inputs
const TITLE = document.getElementById('title')
const AUTHOR = document.getElementById('author')
const PAGES = document.getElementById('pages')
const CONTAINED = document.querySelector('.contain')
//container to display book values
const READBUTTON = document.createElement('button');
const BUTTON = document.getElementById('submit');
const BUTTON2 = document.querySelector('.submit');
const newTitle = document.createElement('p');
const newAuthor = document.createElement('p');
const newPages = document.createElement('p');
const CARD = document.createElement('div');
const REMOVEBUTTON =document.createElement('button');


let myLibrary = [];

class Book{
    constructor(title, author, pages, read){
        this.title = title
        this.author = author
        this.pages =pages
    }
}

Book.prototype.notRead = function(){
    READBUTTON.textContent = `Not Read`
    READBUTTON.classList.remove( 'btn','btn-success', 'read')
    READBUTTON.classList.add('btn', 'btn-danger', 'read')
    this.read = 'false';
    console.log(this.title, 'has not been read ')
}
    
Book.prototype.read = function(){
    /*create element somewhere else and assign button to it, default button is read and says not false
    if clicked this.read = true and the button changes to green*/
        READBUTTON.textContent = `Read`
        READBUTTON.classList.remove('btn', 'btn-danger', 'read')
        READBUTTON.classList.add('btn','btn-success', 'read')
        READBUTTON.addEventListener('click', Book.prototype.notRead)
        this.read = 'true';
        console.log(myLibrary)
}

function addANewBook(book){
        const newbook = new Book( TITLE.value, AUTHOR.value,PAGES.value)
        myLibrary.push(newbook)
        console.log(myLibrary)
        return myLibrary; 
}
BUTTON.addEventListener('click', addANewBook)
BUTTON.addEventListener(`click`, displayBook)

function displayBook(){
    let i = myLibrary.length
    for(const book of myLibrary){
        for(book[i] of myLibrary){
        REMOVEBUTTON.classList.add(`removed`, `btn`, `btn-warning`)
        CARD.classList.add('container', "bg-light")
        CONTAINED.appendChild(CARD);
        CARD.appendChild(newTitle);
        CARD.appendChild(newAuthor);
        CARD.appendChild(newPages);
        CARD.appendChild(REMOVEBUTTON)
        CARD.appendChild(READBUTTON)
        READBUTTON.classList.add('btn', 'btn-danger', 'read')
        newTitle.textContent = `${book.title}`
        newAuthor.textContent = `${book.author}`
        newPages.textContent = `${book.pages}`
        REMOVEBUTTON.textContent = `Remove`
        READBUTTON.textContent = `Not Read`
        REMOVEBUTTON.addEventListener('click', removeBook)
        READBUTTON.addEventListener('click', Book.prototype.read)
        
        }
    } 
}



function removeBook(){
    //removes book from library on click
    CONTAINED.removeChild(CARD)
}

function readBook(){
    if(myLibrary.read === false){
        READBUTTON.addEventListener('click', Book.prototype.read)
    } else if(myLibrary.read === true){
        READBUTTON.addEventListener('click', Book.prototype.notRead)
    }
}
readBook()