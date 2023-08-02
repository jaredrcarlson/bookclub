import { dbContext } from "../db/DbContext.js"

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

}

export const clubPostsService = new ClubPostsService()