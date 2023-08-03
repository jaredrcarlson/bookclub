import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class PostCommentsService {
  async getPostComments(postId) {
    const postComments = await dbContext.PostComments.find({ postId: postId })
      .populate('creator', 'name picture')
    return postComments
  }
  async createComment(commentData) {
    const newComment = await dbContext.PostComments.create(commentData)
    await newComment.populate('creator', 'name picture')
    return newComment
  }

  async removeComment(commentId, userId) {
    const commentToRemove = await dbContext.PostComments.findById(commentId)

    if (!commentToRemove) {
      throw new BadRequest('There is no comment with this id.')
    }
    if (commentToRemove.creatorId.toString() != userId) {
      throw new Forbidden('You are not the creator of this comment. You may not delete a comment that you have not created.')
    }

    await commentToRemove.remove()
  }

}
export const postCommentsService = new PostCommentsService()