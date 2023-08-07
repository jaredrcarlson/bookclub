import { googleBooksService } from "../services/GoogleBooksService"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop.js"

// Represents a single book 
// @constructor
// @param {data} - Passed in data types supported are: Google Books API Volume, UserBook, or ClubBook
export class Book {
  constructor(data) {
    this.id = data.id
    if ('volumeInfo' in data) {
      // Data Type: Google Books API > Volume
      this.gbId = data.id
      this.addGoogleBooksVolumeData(data)
    } else {
      if ('creatorId' in data) {
        // Data Type: UserBook
        this.creatorId = data.creatorId
      }
      if ('clubId' in data) {
        // Data Type: ClubBook
        this.clubId = data.clubId
        this.club = data.club
      }
      this.gbId = data.gbId
      this.author = data.author
      this.title = data.title
      this.imgUrl = data.imgUrl
      this.status = data.status
      this.createdAt = new Date(data.createdAt)
      this.updatedAt = new Date(data.updatedAt)
    }
  }

  addGoogleBooksVolumeData(volumeData) {
    this.author = volumeData.volumeInfo.authors.join(', ')
    this.authors = volumeData.volumeInfo.authors
    this.title = volumeData.volumeInfo.title
    this.subtitle = volumeData.volumeInfo.subtitle ? volumeData.volumeInfo.subtitle : ""
    this.imgUrl = volumeData.volumeInfo.imageLinks ? volumeData.volumeInfo.imageLinks.thumbnail : `https://placehold.co/128x192?text=${volumeData.volumeInfo.title}`
    this.imgUrlLarge = volumeData.volumeInfo.imageLinks ? googleBooksService.createImageURL(volumeData.id) : `https://placehold.co/400x600?text=${volumeData.volumeInfo.title} ${volumeData.volumeInfo.subtitle}`
    this.publishedDate = new Date(volumeData.volumeInfo.publishedDate)
    this.description = volumeData.volumeInfo.description ? volumeData.volumeInfo.description : ""
    this.pageCount = volumeData.volumeInfo.pageCount
  }
}