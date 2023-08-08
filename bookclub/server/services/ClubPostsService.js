import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class ClubPostsService {
  async getClubPosts(clubId) {
    const clubPosts = await dbContext.Posts.find({ clubId: clubId })
      .populate('creator', 'name picture')
      .populate('commentCount')
      .populate('membership')

    return clubPosts
  }
  async getPostById(postId) {
    const clubPost = await dbContext.Posts.findById(postId)
    if (!clubPost) {
      throw new BadRequest(`There is no such post with the id of ${postId}`)
    }
    await clubPost.populate('creator', 'name picture')
    await clubPost.populate('commentCount')
    await clubPost.populate('membership')
    return clubPost
  }

  async getClubPostAnnouncements(clubId) {
    const clubPosts = await dbContext.Posts.find({ clubId, isAnnouncement: true })
      .populate('creator', 'name picture')
      .populate('membership')
      .populate('commentCount')
    return clubPosts
  }

  async createPost(postData) {

    const newPost = await dbContext.Posts.create(postData)
    await newPost.populate('creator', 'name picture')
    await newPost.populate('commentCount')
    return newPost
  }
  async updatePost(postId, userId, postData) {
    const originalPost = await this.getPostById(postId)
    if (originalPost.creatorId.toString() != userId) {
      throw new Forbidden(`You aren't the creator of the post titled "${originalPost.title}"!`)
    }
    originalPost.body = postData.body || originalPost.body
    originalPost.title = postData.title || originalPost.title
    let updatedPost = await originalPost.save()
    return updatedPost
  }

  async removePost(postId, userId) {
    const postToRemove = await this.getPostById(postId)
    if (postToRemove.creatorId.toString() != userId) {
      throw new Forbidden("You can't delete a post you did not make!")
    }
    await postToRemove.remove()
    return postToRemove
  }

}

export const clubPostsService = new ClubPostsService()