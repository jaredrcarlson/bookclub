import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { clubPostsService } from "../services/ClubPostsService.js";

export class ClubPostsController extends BaseController {
  constructor() {
    super('api/posts')
    this.router
      //routes
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('/:postId', this.createPost)
  }
  async createPost(req, res, next) {
    try {
      const postData = req.body
      postData.creatorId = req.userInfo.id
      const post = await clubPostsService.createPost(postData)
      return res.send(post)
    } catch (error) {
      next(error)
    }
  }
}