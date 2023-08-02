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
      .put('/:postId', this.updatePost)
  }
  /**Function that allows a user to create a post on a specific club */
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
  /**Function that let's a user update their own post, but not another user's */
  async updatePost(req, res, next) {
    try {
      const postId = req.params.postId
      const userId = req.userInfo.id
      const postData = req.body
      const post = await clubPostsService.updatePost(postId, userId, postData)
      return res.send(post)
    } catch (error) {
      next(error)
    }
  }
}