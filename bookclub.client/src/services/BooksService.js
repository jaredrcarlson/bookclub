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

}

export const booksService = new BooksService()