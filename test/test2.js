//used to get values of the inputs
const TITLE = document.getElementById('title')
const AUTHOR = document.getElementById('author')
const PAGES = document.getElementById('pages')
const CONTAINED = document.querySelector('.contain')
//container to display book values
const ADDBOOK = document.getElementById('addBook');
const MODAL = document.querySelector('.modal')
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

function Book(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = false;
}

Book.prototype.didRead = function(){
    console.log(this.read)
    return this.read = true
    
}
Book.prototype.notRead = function(){
   for( const book in Book){
    console.log(book)
    return book.read = false
   }
    
}


function addANewBook(){
    const book = new Book(TITLE.value, AUTHOR.value, PAGES.value, this.didRead);
    console.log(this)
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
        READBUTTON.setAttribute('id','read')
        READBUTTON.setAttribute('data-book', `b${library2.indexOf(book)}`)
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
    let currentCard = e.currentTarget.parentNode
    console.log(currentCard)
   currentCard.remove()
    for(const key in myLibrary){
        myLibrary.splice(key)
    }
    console.log(myLibrary)
}

function readToggle() {
    let READBUTTON = Array.from(CONTAINED.querySelectorAll('#read'));
    for (let i = 0; i < READBUTTON.length; i++) {
      READBUTTON[i].id = `H`    
      READBUTTON[i].textContent = `Read`
      READBUTTON[i].classList.remove('btn', 'btn-danger', 'read')
      READBUTTON[i].classList.add('btn','btn-success', 'read')
      READBUTTON[i].addEventListener('click', notReadToggle)
      
    }
  }

function notReadToggle(e){
    let READBUTTON = Array.from(CONTAINED.querySelectorAll(`#H`));
    for (let i = 0; i < READBUTTON.length; i++) {
        READBUTTON[i].textContent = `Not Read`
        READBUTTON[i].classList.remove('btn','btn-success', 'read')
        READBUTTON[i].classList.add('btn', 'btn-danger', 'read') 
        READBUTTON[i].removeEventListener('click', notReadToggle)
      }
    }


BUTTON.addEventListener('click', addANewBook);
BUTTON.addEventListener('click',displayBook);
BUTTON.addEventListener('click', Book.prototype.notRead)