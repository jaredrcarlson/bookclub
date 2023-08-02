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
}

export const membersService = new MembersService