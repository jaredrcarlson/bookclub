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
}