import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"
import { clubsService } from "./ClubsService.js"

class ClubMembersService {
  async getClubMembers(clubId) {
    const clubMembers = await dbContext.ClubMembers.find({ clubId: clubId }).populate('profile', 'name picture')
    return clubMembers
  }
  async becomeMember(memberData) {
    const club = await clubsService.getClubById(memberData.clubId)
    // if (memberData.creatorId == this.getClubMembers(club.creatorId)) {
    //   throw new BadRequest("You're already a member, silly")
    // } **TODO - see if we can get control over a member adding themselves only once
    const member = await dbContext.ClubMembers.create(memberData)
    await member.populate('profile', 'name picture')
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