import { AppState } from "../AppState.js"
import { Member } from "../models/Member.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class MembersService {
  async getMembersByClubId(clubId) {
    const res = await api.get(`api/clubs/${clubId}/members`)

    logger.log('[GOT CLUB MEMBERS]', res.data)

    AppState.members = res.data.map(pojo => new Member(pojo))
  }

  async becomeMember(memberData) {
    const res = await api.post('api/members', memberData)

    logger.log('[BECAME A MEMBER]', res.data)
  }
}

export const membersService = new MembersService