import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { clubsService } from "../services/ClubsService.js";
import { clubMembersService } from "../services/ClubMembersService.js";

export class ClubsController extends BaseController {

  constructor() {
    super('api/clubs')
    this.router
      //routes
      .get('', this.getClubs)
      .get('/:clubId', this.getClubById)
      .get('/:clubId/members', this.getClubMembers)

      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createClub)
      .put('/:clubId', this.updateClub)
  }
  /** This function gets/reads ALL of the clubs */
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
  /**this function allows a user to create a book club, and assigns them as the 'creator' */
  async createClub(req, res, next) {
    try {
      const clubData = req.body
      clubData.creatorId = req.userInfo.id
      const club = await clubsService.createClub(clubData)
      return res.send(club)
    } catch (error) {
      next(error)
    }
  }
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
}