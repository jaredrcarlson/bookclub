import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class PostCommentsService {
  async getPostComments(postId) {
    const postComments = await dbContext.PostComments.find({ postId: postId })
      .populate('creator', 'name picture')
    return postComments
  }

  async getCommentById(commentId) {
    const postComment = await dbContext.PostComments.findById(commentId)
    if (!postComment) {
      throw new BadRequest(`There is no comment with the ID ${commentId}`)
    }
    await postComment.populate('creator', 'name picture')
    return postComment
  }

  async createComment(commentData) {
    const newComment = await dbContext.PostComments.create(commentData)
    await newComment.populate('creator', 'name picture')
    return newComment
  }

  async editComment(commentData, commentId, userId) {
    const originalComment = await this.getCommentById(commentId)
    if (originalComment.creatorId != userId) {
      throw new Forbidden('You are not the creator of this comment. You may not edit a comment that you have not created.')
    }

    originalComment.body = commentData.body || originalComment.body

    let editedComment = await originalComment.save()
    await editedComment.populate('creator', 'name picture')
    return editedComment
  }

  async removeComment(commentId, userId) {
    const commentToRemove = await this.getCommentById(commentId)
    if (commentToRemove.creatorId.toString() != userId) {
      throw new Forbidden('You are not the creator of this comment. You may not delete a comment that you have not created.')
    }
    await commentToRemove.remove()
    return commentToRemove
  }

}
export const postCommentsService = new PostCommentsService()