import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ClubsService {
  async getAllClubs() {
    const res = await api.get('api/clubs')

    logger.log('[GOT CLUBS]', res.data)
  }
}

export const clubsService = new ClubsService