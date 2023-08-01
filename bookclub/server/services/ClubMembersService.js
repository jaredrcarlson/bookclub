import { dbContext } from "../db/DbContext.js"

class ClubMembersService {
  async becomeMember(memberData) {
    const member = await dbContext.ClubMembers.create(memberData)
    return member
  }

}

export const clubMembersService = new ClubMembersService()