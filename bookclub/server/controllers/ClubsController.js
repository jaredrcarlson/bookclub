import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { clubsService } from "../services/ClubsService.js";
import { clubMembersService } from "../services/ClubMembersService.js";
import { clubPostsService } from "../services/ClubPostsService.js";
import { clubBooksService } from "../services/ClubBooksService.js";

export class ClubsController extends BaseController {

  constructor() {
    super('api/clubs')
    this.router
      //routes
      .get('', this.getClubs)
      .get('/:clubId', this.getClubById)
      .get('/:clubId/members', this.getClubMembers)
      .get('/:clubId/posts', this.getClubPosts)
      .get('/:clubId/announcements', this.getClubAnnouncements)
      .get('/:clubId/clubBooks', this.getClubBooks)

      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createClub)
      .put('/:clubId', this.updateClub)
      .delete('/:clubId', this.removeClub)
  }
  async getClubAnnouncements(req, res, next) {
    try {
      const clubId = req.params.clubId
      const announcements = await clubPostsService.getClubPostAnnouncements(clubId)
      return res.send(announcements)
    } catch (error) {
      next(error)
    }
  }

  /** This function gets/reads ALL of the clubs */
  // FIXME Gets all clubs, could become future problem if returning a very large number of clubs
  async getClubs(req, res, next) {
    try {
      const clubs = await clubsService.getClubs()
      return res.send(clubs)
    } catch (error) {
      next(error)
    }
  }
  /**this function gets ONE club  */
  async getClubById(req, res, next) {
    try {
      const clubId = req.params.clubId
      const club = await clubsService.getClubById(clubId)
      return res.send(club)
    } catch (error) {
      next(error)
    }
  }
  /* This function gets all the members that are within a club by its id. It READS the members.  */
  async getClubMembers(req, res, next) {
    try {
      const clubId = req.params.clubId
      const clubMembers = await clubMembersService.getClubMembers(clubId)
      return res.send(clubMembers)
    } catch (error) {
      next(error)
    }
  }
  async getClubPosts(req, res, next) {
    try {
      const clubId = req.params.clubId
      const clubPosts = await clubPostsService.getClubPosts(clubId)
      return res.send(clubPosts)
    } catch (error) {
      next(error)
    }
  }
  async getClubBooks(req, res, next) {
    try {
      const clubId = req.params.clubId
      const clubBooks = await clubBooksService.getClubBooksByClubId(clubId)
      return res.send(clubBooks)
    } catch (error) {
      next(error)
    }
  }
  /**this function allows a user to create a book club, and assigns them as the 'creator' */
  async createClub(req, res, next) {
    try {
      const clubData = req.body
      clubData.creatorId = req.userInfo.id
      const club = await clubsService.createClub(clubData)
      // const memberBody = {clubId: club.id, }
      const clubMember = await clubMembersService.becomeMember()
      return res.send(club)
    } catch (error) {
      next(error)
    }
  }
  /**this allows the creator of the club to update things in the club, a PUT request */
  async updateClub(req, res, next) {
    try {
      const clubId = req.params.clubId
      const userId = req.userInfo.id
      const clubData = req.body
      const club = await clubsService.updateClub(clubId, userId, clubData)
      return res.send(club)
    } catch (error) {
      next(error)
    }
  }
  /**this allows the club creator to DELETE the club. */
  async removeClub(req, res, next) {
    try {
      const clubId = req.params.clubId
      const userId = req.userInfo.id
      const club = await clubsService.removeClub(clubId, userId)
      return res.send('Successful deletion of the club')
    } catch (error) {
      next(error)
    }
  }
}