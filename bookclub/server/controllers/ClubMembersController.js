import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { clubMembersService } from "../services/ClubMembersService.js";

export class ClubMembersController extends BaseController {
  constructor() {
    super('api/members')
    this.router
      //routes
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.becomeMember)
  }
  async becomeMember(req, res, next) {
    try {
      const memberData = req.body
      memberData.creatorId = req.userInfo.id
      const member = await clubMembersService.becomeMember(memberData)
      return res.send(member)
    } catch (error) {
      next(error)
    }
  }

}