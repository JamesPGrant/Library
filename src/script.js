let library = [];
let myLibrary = []
//modal
const modal = document.querySelector(".modal");
const  btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
//value elements
const TITLE = document.getElementById(`title`);
const AUTHOR = document.getElementById(`author`);
const PAGES = document.getElementById(`pages`);
const READ = document.querySelector(`#read`)
const SUBMITBUTTON = document.querySelector(`#submit`)
//Create Elements
const CONTAINER = document.querySelector('.container')
const DISPLAYTITLE = document.createElement('p');
const DISPLAYAUTHOR = document.createElement('p');
const DISPLAYPAGES = document.createElement('p');
const CARD = document.createElement('div')
const REMOVEBUTTON = document.createElement('button')
const READBUTTON = document.createElement('button')

function Book(title, author, pages, read, info){
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
        this.info = function(){
            this.title
            this.author
            this.pages
            this.read
        }
}
Book.prototype.toggleReadStatus = function() {
    if (this.read === true) {
        this.read = false;
    }
    else {
        this.read = true;
    }
}

btn.onclick = function() {
    modal.style.display = "block";
  }
  
  span.onclick = function() {
    modal.style.display = "none";
  }

function addANewBook(e){
if(READ.checked){
    READ.value = true
    const book = new Book(TITLE.value,AUTHOR.value,PAGES.value, true)
    library.push(book);
    myLibrary.push(book)
    console.log(library)
} else {
    READ.value = false
    const book = new Book(TITLE.value,AUTHOR.value,PAGES.value, false)
    library.push(book);
    myLibrary.push(book)
    console.log(library)
    return library
}

}


function displayBook(book){
    for(const book of library){
        const CARDCLONE = CARD.cloneNode(true)
        const CLONEDISPLAYTITLE = DISPLAYTITLE.cloneNode(true)
        const CLONEDISPLAYAUTHOR = DISPLAYAUTHOR.cloneNode(true)
        const CLONEDISPLAYPAGES = DISPLAYPAGES.cloneNode(true)
        const CLONEREMOVEBUTTON = REMOVEBUTTON.cloneNode(true)
        const CLONEREADBUTTON =  READBUTTON.cloneNode(true)
        CARDCLONE.classList.add('bg-light')
        CARDCLONE.setAttribute('id', 'card')
        CONTAINER.appendChild(CARDCLONE)
        CARDCLONE.appendChild(CLONEDISPLAYTITLE)
        CARDCLONE.appendChild(CLONEDISPLAYAUTHOR)
        CARDCLONE.appendChild(CLONEDISPLAYPAGES)
        CARDCLONE.appendChild(CLONEREMOVEBUTTON)
        CARDCLONE.appendChild(CLONEREADBUTTON)
        CLONEDISPLAYTITLE.textContent = `${book.title}`
        CLONEDISPLAYAUTHOR.textContent = `${book.author}`
        CLONEDISPLAYPAGES.textContent = `${book.pages}`
        CLONEREMOVEBUTTON.textContent = `Remove`
        if(READ.checked){
        CLONEREADBUTTON.classList.add ('btn','btn-success')
        CLONEREADBUTTON.setAttribute (`data-book`, `${myLibrary.indexOf(book)}`)
        CLONEREADBUTTON.setAttribute(`id`, `Read`)
        CLONEREADBUTTON.textContent = `Read`
        CLONEREADBUTTON.addEventListener('click', notReadToggle)
        } else {
            CLONEREADBUTTON.classList.add ('btn','btn-danger')
            CLONEREADBUTTON.setAttribute (`data-book`, `${myLibrary.indexOf(book)}`)
            CLONEREADBUTTON.setAttribute(`id`, `Read`)
            CLONEREADBUTTON.textContent = `Not Read`
            CLONEREADBUTTON.addEventListener('click', readToggle)
        }
        CLONEREMOVEBUTTON.classList.add ('btn', 'btn-warning')
        
        CLONEREMOVEBUTTON.addEventListener('click', removeBook)
        
        console.log(myLibrary)
        library.pop(book)
    }
}

function removeBook(e){
    let removal = e.currentTarget.parentNode;
    const clickedElem = e.target;
    const index = clickedElem.value
    library.splice(index, 1)
    removal.remove()
    console.log(myLibrary)
    console.log(library);
}

function readToggle(e) {
myLibrary.forEach(function(book){
    const CLONEREADBUTTON = document.querySelector(`[data-book = "${myLibrary.indexOf(book)}"]`);
    book.toggleReadStatus()
    console.log(book)
if(CLONEREADBUTTON !== e.target){
    return
} else{
    if(book.read === true){
        CLONEREADBUTTON.classList.remove('btn', 'btn-danger')
        CLONEREADBUTTON.classList.add ('btn','btn-success')
        CLONEREADBUTTON.textContent = `Read`
        
        CLONEREADBUTTON.removeEventListener('click', readToggle)
        CLONEREADBUTTON.addEventListener('click', notReadToggle)
    }
}
})
}

function notReadToggle(e){
    myLibrary.forEach(function(book){
        const CLONEREADBUTTON = document.querySelector(`[data-book = "${myLibrary.indexOf(book)}"]`);
        book.toggleReadStatus()
if(CLONEREADBUTTON !== e.target){
    return
}
        if(book.read === false){
            CLONEREADBUTTON.classList.remove('btn','btn-success')
            CLONEREADBUTTON.classList.add('btn', 'btn-danger')
            CLONEREADBUTTON.textContent = `Not Read`
            
            CLONEREADBUTTON.removeEventListener('click', notReadToggle)
            CLONEREADBUTTON.addEventListener('click', readToggle)
            console.log(book)
        }
    })
}


SUBMITBUTTON.addEventListener('click', (e)=>{
    e.preventDefault()
})
SUBMITBUTTON.addEventListener('click', addANewBook)
SUBMITBUTTON.addEventListener('click', displayBook)