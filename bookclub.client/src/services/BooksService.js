import { AppState } from "../AppState"
import { Book } from "../models/Book"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"
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
  selectBook(index) {
    AppState.selectedBook = AppState.books[index]
  }

  //Function Adds the selected book in the app state to the BooksToAdd List. Does not send any requests, and not to be confused with adding a book to a booklist.
  // @function
  addBookToList() {
    AppState.booksToAdd.push(AppState.selectedBook)
  }

  //Function removes the selected book from the App State BooksToAdd list. When provided an index, removes that indexed item out of the BooksToAdd list.
  // @function
  removeBookFromList(index = -1) {
    if (index > -1) {
      AppState.booksToAdd.splice(index, 1)
      return
    }
    AppState.booksToAdd = AppState.booksToAdd.filter(book => book != AppState.selectedBook)
  }

  //Function sends a request to create a ClubBook to server
  // @function
  // @param {bookBody} - book data passed in order to create ClubBook
  async createClubBook(bookData) {
    const res = api.post(`api/clubBooks`, bookData)
    logger.log(`[CREATED CLUB BOOK]`, res.data)
    return res.data
  }

  async setDetailsPageBook(gbId) {
    const volume = await googleBooksService.getVolumeById(gbId)
    const book = new Book(volume)
    AppState.detailsPageBook = book
  }
}

export const booksService = new BooksService()