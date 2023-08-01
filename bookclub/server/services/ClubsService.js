import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class ClubsService {
  async getClubs() {
    const clubs = await dbContext.Clubs.find()
    return clubs
  }
  async getClubById(clubId) {
    const club = await dbContext.Clubs.findById(clubId)
    if (!club) {
      throw new BadRequest(`There is no club with id of ${clubId}`)
    }
    return club
  }

  async createClub(clubData) {
    const club = await dbContext.Clubs.create(clubData)
    await club.populate('creator', 'name picture')
    return club
  }
}
export const clubsService = new ClubsService()