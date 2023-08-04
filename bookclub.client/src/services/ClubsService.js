import { AppState } from "../AppState.js"
import { Club } from "../models/Club.js"
import { Member } from "../models/Member.js"
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js"
import { api } from "./AxiosService.js"
import { booksService } from "./BooksService.js"

class ClubsService {
  async getAllClubs() {
    const res = await api.get('api/clubs')

    logger.log('[GOT CLUBS]', res.data.clubs)
    AppState.clubs = res.data.clubs.map(pojo => new Club(pojo))
  }

  async getClubById(clubId) {
    const res = await api.get(`api/clubs/${clubId}`)

    logger.log('[GOT CLUB BY ID]', res.data)

    AppState.selectedClub = new Club(res.data)
  }

  async getMyClubs() {
    try {
      const res = await api.get('account/clubs')

      logger.log('[GOT ACCOUNT CLUBS]', res.data)
      AppState.myMemberships = res.data.map(pojo => new Member(pojo))
    } catch (error) {
      Pop.error(error.message)
    }
  }

  async createClub(clubData) {
    const res = await api.post(`api/clubs`, clubData)
    logger.log(`[CREATED CLUB]`, res.data)
    return res.data
  }

  async setBookDetailsPageClubs(gbId, status) {
    const clubBooks = await booksService.getClubBooksByGbId(gbId)
    const clubsData = clubBooks.filter((clubBook) => clubBook.status == status)
    const clubs = clubsData.map(clubData => new Club(clubData))
    AppState.bookDetailsClubs[status] = clubs
  }
}

export const clubsService = new ClubsService