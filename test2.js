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
    const book = new Book(TITLE.value, AUTHOR.value, PAGES.value);
    myLibrary.push(book);
    library2.push(book)
    console.log(library2)
    return myLibrary;
}


function displayBook(){
    for(const book of myLibrary){
        const CARDCLONE = CARD.cloneNode(true);
        CARDCLONE.setAttribute('data-attribute', `${library2.indexOf(book)}`)
        const TITLECLONE = newTitle.cloneNode(true);
        const PAGESCLONE = newPages.cloneNode(true);
        const  AUTHORCLONE = newAuthor.cloneNode(true);
        const REMOVEBUTTON =document.createElement('button');
        const READBUTTON = document.createElement('button');
        READBUTTON.classList.add('btn', 'btn-danger', 'read')
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
        myLibrary.pop(book)
    }
}

function removeBook(){
    addANewBook()
    const CARDCLONE =document.querySelector('[data-attribute]')
    CONTAINED.removeChild(CARDCLONE)
    console.log(myLibrary)
    for(const book in myLibrary){
        myLibrary.splice(book)
    }
}
function readToggle(){
    const READBUTTON = document.querySelector('#read')
    READBUTTON.addEventListener('click', ()=>{
        
    })
}
BUTTON.addEventListener('click', addANewBook);
BUTTON.addEventListener('click',displayBook);