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

const addBook = document.querySelector('.add-book')
addBook.addEventListener('click', function () {
    const bookEl = bookContainer()
    const bookContent = newBook()

    bookEl.title.textContent = bookContent.title
    bookEl.author.textContent = bookContent.author
    bookEl.pages.textContent = bookContent.pages
    bookEl.del.textContent = 'Delete'
    bookEl.read.checked = bookContent.read
    bookEl.label.textContent = 'Read?'
    addToDOM(bookEl)
})

const addToDOM = function (el) {
    const container = document.querySelector('.library-list')
    const listItem = document.createElement('li')
    listItem.classList.add('book-item')

    const numBooks = myLibrary.length
    listItem.dataset.index = numBooks === 1 ? 0 : numBooks - 1

    container.appendChild(listItem)
    listItem.appendChild(el.title)
    listItem.appendChild(el.author)
    listItem.appendChild(el.pages)
    listItem.appendChild(el.del)
    listItem.appendChild(el.read)
    listItem.appendChild(el.label)

    delBook(el.del)
}

const newBook = function () {
    const title = document.querySelector('.input-title').value
    const author = document.querySelector('.input-author').value
    const pages = document.querySelector('.input-pages').value
    const read = document.querySelector('.input-read').checked

    const book = new Book(title, author, pages, read)
    myLibrary.push(book)
    return book
}

const bookElements = function () {
    const container = document.createElement('li')
    const title = document.createElement('h2')
    const author = document.createElement('span')
    const pages = document.createElement('span')
    const del = document.createElement('button')
    const read = document.createElement('input')
    read.type = 'checkbox'
    read.id = 'read'
    const label = document.createElement('label')
    label.setAttribute('for', 'read')

    title.classList.add('title')
    author.classList.add('author')
    pages.classList.add('pages')
    del.classList.add('del-book')
    read.classList.add('read-checkbox')
    label.classList.add('checkbox-label')

    container.append(title, author, pages, del, read, label)

    return container
}

const bookContainer = function (book) {
    const bookContainer = bookElements()
    const title = bookContainer.querySelector('.title')
    const author = bookContainer.querySelector('.author')
    const pages = bookContainer.querySelector('.pages')
    const del = bookContainer.querySelector('.del-book')
    const label = bookContainer.querySelector('.checkbox-label')
    const read = bookContainer.querySelector('.read-checkbox')

    return { title, author, pages, del, label, read }
}

const delBook = function (delBtn) {
    delBtn.addEventListener('click', function () {
        const book = delBtn.parentNode
        book.parentNode.removeChild(book)
        const arrIndex = book.dataset.index
        myLibrary.splice(arrIndex, 1)
        console.log(myLibrary)
        // delete from library arr thru data attribute
        //reset data attributes when a book is deleted (to line up with index in array)
        // update array with changes to read status
    })
}

