import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { clubsService } from "../services/ClubsService.js";

export class ClubsController extends BaseController {

  constructor() {
    super('api/clubs')
    this.router
      //routes
      .get('', this.getClubs)
      .get('/:clubId', this.getClubById)

      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createClub)
  }
  async getClubs(req, res, next) {
    try {
      const clubs = await clubsService.getClubs()
      return res.send(clubs)
    } catch (error) {
      next(error)
    }
  }
  async getClubById(req, res, next) {
    try {
      const clubId = req.params.clubId
      const club = await clubsService.getClubById(clubId)
      return res.send(club)
    } catch (error) {
      next(error)
    }
  }
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
}