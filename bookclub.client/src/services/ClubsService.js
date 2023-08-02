import { AppState } from "../AppState.js"
import { Club } from "../models/Club.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ClubsService {
  async getAllClubs() {
    const res = await api.get('api/clubs')

    logger.log('[GOT CLUBS]', res.data)
    AppState.clubs = res.data.map(pojo => new Club(pojo))
  }

  async getClubById(clubId) {
    const res = await api.get(`api/clubs/${clubId}`)

    logger.log('[GOT CLUB BY ID]', res.data)

    AppState.selectedClub = new Club(res.data)
  }

  async createClub(clubData) {
    const res = await api.post(`api/clubs`, clubData)
    logger.log(`[CREATED CLUB]`, res.data)
  }
}

export const clubsService = new ClubsService