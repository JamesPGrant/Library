let myLibrary = [];
const CONTAINED = document.querySelector('.contain')
const CARD = document.createElement('div');
const newTitle = document.createElement('p');
const newAuthor = document.createElement('p');
const newPages = document.createElement('p');
const REMOVEBUTTON =document.createElement('button');

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
                const CARD = document.createElement('div');
                const newTitle = document.createElement('p');
                const newAuthor = document.createElement('p');
                const newPages = document.createElement('p');
                const REMOVEBUTTON =document.createElement('button');
                REMOVEBUTTON.setAttribute(`onclick= 'removeBook()'`)
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
                return myLibrary
   })

}
addANewBook()

function removeBook(){
    //removes book from library on click
    REMOVEBUTTON.addEventListener('click' , ()=>{
        CONTAINED.removeChild(CARD);
    })
}
removeBook()