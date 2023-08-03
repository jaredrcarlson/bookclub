import { AppState } from "../AppState.js"
import { ClubPost } from "../models/ClubPost.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ClubPostsService {
  async getClubPosts(clubId) {
    const res = await api.get(`api/clubs/${clubId}/posts`)
    logger.log('[ARE WE GETTING POSTS?]', res.data)
    const clubPosts = res.data.map(post => new ClubPost(post))
    AppState.clubPosts = clubPosts
  }

  async deletePost(postId) {
    const res = await api.delete(`api/posts/${postId}`)
    logger.log('here is the res data for deleting...', res.data)
    AppState.clubPosts = AppState.clubPosts.filter(clubPost => clubPost.id != postId)
    logger.log('did it delete my post?')
  }
}

export const clubPostsService = new ClubPostsService()