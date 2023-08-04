import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class ClubMembersService {
  async getUserClubs(userId) {
    const clubs = await dbContext.ClubMembers.find({ creatorId: userId }).populate('club')
    return clubs
  }
  async getClubMembers(clubId) {
    const clubMembers = await dbContext.ClubMembers.find({ clubId: clubId }).populate('profile', 'name picture')
    return clubMembers
  }
  async becomeMember(memberData) {
    memberData.role = 'member'
    const member = await dbContext.ClubMembers.create(memberData)
    await member.populate('profile', 'name picture')
    return member
  }

  async becomeCreator(creatorId, clubId) {
    await dbContext.ClubMembers.create({ clubId, creatorId, role: 'creator' })
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
    return memberToDelete
  }

}

export const clubMembersService = new ClubMembersService()