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
      .delete('/:memberId', this.removeMember)
  }




  /* This is a function for a user to join a book club; this is a POST request to Create a member of a book club. */
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
  /* this is a function that gives the member the ability to leave a book club that they have joined. It is a DELETE request that Removes them from the club. */
  async removeMember(req, res, next) {
    try {
      const memberId = req.params.memberId
      const userId = req.userInfo.id
      const member = await clubMembersService.removeMember(memberId, userId)
      return res.send('You are no longer in this book club')
    } catch (error) {
      next(error)
    }
  }

}