import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class ClubPostsService {
  async getClubPosts(clubId) {
    const clubPosts = await dbContext.Posts.find({ clubId: clubId })
    return clubPosts
  }
  async createPost(postData) {
    const newPost = await dbContext.Posts.create(postData)
    await newPost.populate('creator commentCount', 'name picture')
    return newPost
  }
  async updatePost(postId, userId, postData) {
    const originalPost = await dbContext.Posts.findById(postId)
    if (!originalPost) {
      throw new BadRequest(`There is no such post with the id of ${postId}`)
    }
    if (originalPost.creatorId.toString() != userId) {
      throw new Forbidden(`You aren't the creator of the post titled ${originalPost.title}!`)
    }
    originalPost.body = postData.body || originalPost.body
    originalPost.title = postData.title || originalPost.title

    let updatedPost = await originalPost.save()
    return updatedPost
  }


}

export const clubPostsService = new ClubPostsService()