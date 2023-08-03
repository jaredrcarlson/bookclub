import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController";
import { bookReviewsService } from "../services/BookReviewsService";

export class BookReviewsController extends BaseController {
    constructor() {
        super('api/bookReviews')
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('/:reviewId', this.createReview)
    }

    async createReview(req, res, next) {
        try {
            let reviewBody = req.body
            reviewBody.creatorId = req.userInfo.id
            const bookReview = bookReviewsService.createReview(reviewBody)
        } catch (error) {
            next(error)
        }
    }
}