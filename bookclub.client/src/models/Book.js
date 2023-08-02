import { googleBooksService } from "../services/GoogleBooksService"

// Represents a single book taken from the Google Books API
// @class
// @param {data} - Data taken in is an individual volume received from a Google Books API Search
export class Book {
    constructor(data) {
        this.gbid = data.id
        this.title = data.title
        this.subtitle = data.subtitle
        this.publishedDate = new Date(data.publishedDate)
        this.description = data.description
        this.authors = data.authors
        this.imgUrlLarge = googleBooksService.createImageURL(data.id)
        this.imgUrl = data.imagelinks.thumbnail
    }
}