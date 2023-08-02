import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class ClubMembersService {
  async getClubMembers(clubId) {
    const clubMembers = await dbContext.ClubMembers.find({ clubId: clubId }).populate('profile', 'name picture')
    return clubMembers
  }
  async becomeMember(memberData) {
    const member = await dbContext.ClubMembers.create(memberData)
    return member
  }
  async removeMember(memberId, userId) {
    const memberToDelete = await dbContext.ClubMembers.findById(memberId)
    if (!memberToDelete) {
      throw new BadRequest('There is no such member to delete...')
    }
    if (memberToDelete.creatorId.toString() != userId) {
      throw new Forbidden('You can not delete a member other than yourself!')
    }
    await memberToDelete.remove()
  }

}

export const clubMembersService = new ClubMembersService()