//used to get values of the inputs
const TITLE = document.getElementById('title')
const AUTHOR = document.getElementById('author')
const PAGES = document.getElementById('pages')
const CONTAINED = document.querySelector('.contain')
//container to display book values

const BUTTON = document.getElementById('submit');
const BUTTON2 = document.querySelector('.submit');
const newTitle = document.createElement('p');
const newAuthor = document.createElement('p');
const newPages = document.createElement('p');
const CARD = document.createElement('div');
CARD.classList.add('container', "bg-light")
CARD.style.display ="none"
const REMOVE = document.getElementById('removed');
//adds bootstrap classes to button

CONTAINED.appendChild(CARD)
CARD.appendChild(newTitle)
CARD.appendChild(newAuthor)
CARD.appendChild(newPages)


let myLibrary =[];
let library2 = [];

class Book{
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = false
    }
}

Book.prototype.didRead = function(){
    this.read = true
    console.log(this.read)
}
Book.prototype.notRead = function(){
    this.read = false
    console.log(this.read)
}

function addANewBook(){
    const book = new Book(TITLE.value, AUTHOR.value, PAGES.value, this.notRead);
    myLibrary.push(book);
    library2.push(book)
    console.log(library2)
    return myLibrary;
}


function displayBook(){
    for(const book of myLibrary){
        const CARDCLONE = CARD.cloneNode(true);
        CARDCLONE.setAttribute('data-book', `${library2.indexOf(book)}`)
        const TITLECLONE = newTitle.cloneNode(true);
        const PAGESCLONE = newPages.cloneNode(true);
        const  AUTHORCLONE = newAuthor.cloneNode(true);
        const REMOVEBUTTON =document.createElement('button');
        const READBUTTON = document.createElement('button');
        READBUTTON.classList.add('btn', 'btn-danger', 'read')
        READBUTTON.setAttribute('data-book', `${library2.indexOf(book)}`)
        READBUTTON.setAttribute('id', 'read')
        CONTAINED.appendChild(CARDCLONE)
        CARDCLONE.appendChild(TITLECLONE)
        CARDCLONE.appendChild(AUTHORCLONE)
        CARDCLONE.appendChild(PAGESCLONE)
        CARDCLONE.appendChild(REMOVEBUTTON)
        CARDCLONE.appendChild(READBUTTON)
        REMOVEBUTTON.classList.add(`removed`, `btn`, `btn-warning`)
        CARDCLONE.style.display ='grid'
        TITLECLONE.textContent = `${book.title}`
        AUTHORCLONE.textContent =`${book.author}`
        PAGESCLONE.textContent = `${book.pages}`
        REMOVEBUTTON.textContent= `Remove`
        READBUTTON.textContent = `Not Read`
        REMOVEBUTTON.addEventListener('click', removeBook)
        READBUTTON.addEventListener('click', readToggle)
        myLibrary.pop(book)
    }
}

function removeBook(e){
    let book = e.currentTarget.parentNode
    console.log(book)
    book.remove()
    for(const book in myLibrary){
        myLibrary.splice(book)
    }
    console.log(myLibrary)
}

function readToggle(){
    const READBUTTON = document.querySelector('#read')
    for(let i = 0; i < library2.length; i++){
        if ( this.read === this.notRead){
            READBUTTON.textContent = `Read`
            READBUTTON.classList.remove('btn', 'btn-danger', 'read')
            READBUTTON.classList.add('btn','btn-success', 'read')
            READBUTTON.addEventListener('click', notReadToggle)
           return this.read === this.didRead
        }
            
        }
        console.log(this.read)
    }
function notReadToggle(){
    for(let i = 0; i < library2.length; i++){
    const READBUTTON = document.querySelector('#read')
        if(this.read === this.didRead){
            READBUTTON.textContent = `Not Read`;
            READBUTTON.classList.remove('btn','btn-success', 'read')
            READBUTTON.classList.add('btn', 'btn-danger', 'read')
            READBUTTON.removeEventListener('click', notReadToggle)
            return this.read === this.notRead
            console.log(this.read)
        }
        }
    }

function populateStorage(){
    localStorage.setItem('library2')
}
BUTTON.addEventListener('click', addANewBook);
BUTTON.addEventListener('click',displayBook);
BUTTON.addEventListener('click',populateStorage);