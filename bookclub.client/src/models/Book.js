import { googleBooksService } from "../services/GoogleBooksService"
import { logger } from "../utils/Logger"

// Represents a single book taken from the Google Books API
// @constructor
// @param {data} - Data taken in is an individual volume received from a Google Books API Search
export class Book {
    constructor(data) {
        this.gbId = data.id
        this.title = data.volumeInfo.title
        this.subtitle = data.volumeInfo.subtitle ? data.volumeInfo.subtitle : ""
        this.publishedDate = new Date(data.volumeInfo.publishedDate)
        this.description = data.volumeInfo.description ? data.volumeInfo.description : ""
        this.authors = data.volumeInfo.authors
        this.pageCount = data.volumeInfo.pageCount
        this.imgUrlLarge = data.volumeInfo.imageLinks ? googleBooksService.createImageURL(data.id) : `https://placehold.co/400x600?text=${this.title} ${this.subtitle}`
        this.imgUrl = data.volumeInfo.imageLinks ? data.volumeInfo.imageLinks.thumbnail : `https://placehold.co/128x192?text=${this.title}`
    }
}