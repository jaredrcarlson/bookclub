import { AppState } from "../AppState"
import { Book } from "../models/Book"
import { googleBooksService } from "./GoogleBooksService"

class BooksService {

    // Function takes in a query as a string and searches the Google Books API with that string. Then populates appstate with found books.
    // @function
    // @param {query} - string query to pass to Google Books API
    async searchBooks(query) {
        const books = await googleBooksService.search(query)
        AppState.books = books.map(b => new Book(b))
    }
    // Function that takes in an index of a book in the AppState.books and sets it as the selectedBook
    // @function
    // @param {index} - index of a book in the AppState.books
    async selectBook(index) {
        AppState.selectedBook = AppState.books[index]
    }

    //Function Adds the selected book in the app state to the BooksToAdd List. Does not send any requests, and not to be confused with adding a book to a booklist.
    // @function
    async addBookToList() {
        AppState.booksToAdd.push(AppState.selectedBook)
    }

    //Function removes the selected book from the App State BooksToAdd list. When provided an index, removes that indexed item out of the BooksToAdd list.
    // @function
    async removeBookFromList(index = -1) {
        if (index > -1) {
            AppState.booksToAdd.splice(index, 1)
            return
        }
        AppState.booksToAdd = AppState.booksToAdd.filter(book => book != AppState.selectedBook)
    }
}

export const booksService = new BooksService()