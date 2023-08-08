import { AppState } from "../AppState"
import { Book } from "../models/Book"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop.js"
import { api } from "./AxiosService"
import { googleBooksService } from "./GoogleBooksService"

const limitGoogleBooksAPIUsage = true

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
  // @param {bookData} - book data passed in order to create ClubBook
  async createClubBook(bookData) {
    const res = await api.post(`api/clubBooks`, bookData)
    logger.log(`[CREATED CLUB BOOK]`, res.data)
    const book = new Book(res.data)
    await this.addGoogleBooksVolumeData(book)
    return book
  }

  //Function sends a request to create a UserBook to server
  // @function
  // @param {bookData} - book data passed in order to create UserBook
  async createUserBook(bookData) {
    const res = await api.post(`api/userBooks`, bookData)
    logger.log(`[CREATED USER BOOK]`, res.data)
    const book = new Book(res.data)
    await this.addGoogleBooksVolumeData(book)
    AppState.myBooks.push(book)
    AppState.bookDetailsPage.userBooks.push(book)
    return book
  }

  async getMyBooks() {
    try {
      const res = await api.get('account/books')

      logger.log('[GOT ACCOUNT BOOKS]', res.data)
      AppState.myBooks = res.data.map(pojo => new Book(pojo))
      return res.data
    } catch (error) {
      Pop.error(error.message)
    }
  }

  async updateUserBook(bookId, bookData) {
    const res = await api.put(`api/userBooks/${bookId}`, bookData)
    const updatedBook = res.data
    let bookIndex = AppState.myBooks.findIndex(book => book.id == bookId)
    if (bookIndex != -1) {
      AppState.myBooks.splice(bookIndex, 1, updatedBook)
    }
    bookIndex = AppState.bookDetailsPage.userBooks.findIndex(book => book.id == bookId)
    if (bookIndex != -1) {
      AppState.bookDetailsPage.userBooks.splice(bookIndex, 1, updatedBook)
    }
    return updatedBook
  }

  async deleteUserBook(bookId) {
    await api.delete(`api/userBooks/${bookId}`)
    let bookIndex = AppState.myBooks.findIndex(book => book.id == bookId)
    if (bookIndex != -1) {
      AppState.myBooks.splice(bookIndex, 1)
    }
    bookIndex = AppState.bookDetailsPage.userBooks.findIndex(book => book.id == bookId)
    if (bookIndex != -1) {
      AppState.bookDetailsPage.userBooks.splice(bookIndex, 1)
    }
  }

  async setBookDetailsPageBook(gbId) {
    const volumeData = await googleBooksService.getVolumeById(gbId)
    const book = new Book(volumeData)
    AppState.bookDetailsPage.book = book
  }

  async setBookDetailsPageUserBooks() {
    const userBooks = []
    const res = await api.get('api/userBooks')
    res.data.forEach(async (data) => {
      const book = new Book(data)
      await this.addGoogleBooksVolumeData(book)
      userBooks.push(book)
    })
    AppState.bookDetailsPage.userBooks = userBooks
  }

  async getClubBooksByGbId(gbId) {
    const res = await api.get(`api/clubBooks?gbId=${gbId}`)
    // logger.log(`[GOT CLUB BOOKS BY GB ID: ${gbId}]`, res.data)
    return res.data
  }

  async getBooksByClubId(clubId) {
    const res = await api.get(`api/clubs/${clubId}/clubBooks`)

    logger.log('[GOT CLUB BOOKS]', res.data)
    AppState.books = res.data.map(pojo => new Book(pojo))
    return res.data
  }

  async addGoogleBooksVolumeData(book) {
    if (limitGoogleBooksAPIUsage) {
      return book
    }
    const volumeData = await googleBooksService.getVolumeById(book.gbId)
    book.addGoogleBooksVolumeData(volumeData)
    return book
  }

  async changeBookProgress(progress, userBookId) {
    const res = await api.put(`api/userBooks/${userBookId}`, progress)

    logger.log('[CHANGED BOOK STATUS]', res.data)
    const oldBook = AppState.myBooks.findIndex(b => b.id == userBookId)

    const newBook = new Book(res.data)

    AppState.myBooks.splice(oldBook, 1, newBook)
  }
}

export const booksService = new BooksService()