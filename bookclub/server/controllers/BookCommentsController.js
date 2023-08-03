import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { postCommentsService } from "../services/PostCommentsService.js";

export class BookCommentsController extends BaseController {
  constructor() {
    super('api/bookComments')

    this.router


      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createComment)
  }
  async createComment(req, res, next) {
    try {
      const commentData = req.body

      commentData.creatorId = req.userInfo.id

      await commentsService
    } catch (error) {
      next(error)
    }
  }
}