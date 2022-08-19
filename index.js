let myLibrary = []

class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}

const addBtn = document.querySelector('.add-btn')
addBtn.addEventListener('click', function () {
    const modal = document.querySelector('#modal')
    modal.classList.remove('hidden')
})

const bookElements = function () {
    const container = document.createElement('li')
    const title = document.createElement('h2')
    const author = document.createElement('span')
    const pages = document.createElement('span')
    const read = document.createElement('input')
    read.type = 'checkbox'
    read.id = 'read'
    const label = document.createElement('label')
    label.setAttribute('for', 'read')

    container.classList.add('book-item')
    title.classList.add('title')
    author.classList.add('author')
    pages.classList.add('pages')
    read.classList.add('read-checkbox')

    container.append(title, author, pages, read, label)

    return container
}


const addBook = document.querySelector('.add-book')
const bookContainer = bookElements()
addBook.addEventListener('click', function () {
    const title = document.querySelector('.input-title').value
    const author = document.querySelector('.input-author').value
    const pages = document.querySelector('.input-pages').value
    const read = document.querySelector('.input-read').checked

    const newBook = new Book(title, author, pages, read)

    myLibrary.push(newBook)
    addToDOM()
})

const addToDOM = function () {

    const title = bookContainer.querySelector('.title')
    const author = bookContainer.querySelector('.author')
    const pages = bookContainer.querySelector('.pages')
    const label = bookContainer.querySelector('label')
    const read = bookContainer.querySelector('.read-checkbox')
    myLibrary.forEach(book => {
        const container = document.querySelector('.library-list')
        container.appendChild(bookContainer)
        title.textContent = book.title
        author.textContent = book.author
        pages.textContent = book.pages
        label.textContent = 'Read?'
        read.value = book.read
    })
}

