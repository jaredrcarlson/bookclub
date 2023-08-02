import { dbContext } from "../db/DbContext.js"

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

}
export const postCommentsService = new PostCommentsService()