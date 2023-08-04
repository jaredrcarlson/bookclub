import { AppState } from "../AppState.js"
import { BookReview } from "../models/BookReview.js"
import { api } from "./AxiosService.js"

class BookReviewsService {
  async setBookDetailsPageReviews(gbId) {
    const res = await api.get(`api/bookReviews?gbId=${gbId}`)
    const bookReviewsData = res.data
    AppState.bookDetailsUserReviews = bookReviewsData.map(data => new BookReview(data))
  }

  async createBookReview(bookReviewData) {
    const res = await api.post('api/bookReviews', bookReviewData)
    const newBookReview = new BookReview(res.data)
    AppState.bookDetailsPage.userReviews.unshift(newBookReview)
  }

}

export const bookReviewsService = new BookReviewsService()