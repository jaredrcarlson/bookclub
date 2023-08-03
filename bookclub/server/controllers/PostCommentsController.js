import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { postCommentsService } from "../services/PostCommentsService.js";

export class PostCommentsController extends BaseController {
  constructor() {
    super('api/comments')
    this.router
      //routes

      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createComment)
      .delete('/:commentId', this.removeComment)
  }
  async createComment(req, res, next) {
    try {
      const commentData = req.body
      commentData.creatorId = req.userInfo.id
      const comment = await postCommentsService.createComment(commentData)
      return res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async removeComment(req, res, next) {
    try {
      const commentId = req.body

      const userId = req.userInfo.id

      await postCommentsService.removeComment(commentId, userId)
    } catch (error) {
      next(error)
    }
  }
}