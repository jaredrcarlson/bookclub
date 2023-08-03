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

  async createPost(postData) {
    // logger.log('Is it making it to the srvice?')
    const res = await api.post('api/posts', postData)
    logger.log('[DID I CREATE A POST?]', res.data)
    const clubPost = new ClubPost(res.data)
    AppState.clubPosts.unshift(postData)
    return clubPost
  }

  async editPost(postData) {
    const res = await api.put(`api/posts/${postData.id}`, postData)
    logger.log('[DID I EDIT A POST?]', res.data)
    const clubPostIndex = AppState.clubPosts.findIndex(post => post.id == postData.id)
    const updatedPost = new ClubPost(res.data)
    AppState.activeClubPost = updatedPost
    AppState.clubPosts.splice(clubPostIndex, 1, updatedPost)
  }

  async deletePost(postId) {
    const res = await api.delete(`api/posts/${postId}`)
    logger.log('here is the res data for deleting...', res.data)
    AppState.clubPosts = AppState.clubPosts.filter(clubPost => clubPost.id != postId)
    logger.log('did it delete my post?')
  }
}

export const clubPostsService = new ClubPostsService()