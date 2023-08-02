import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"
import { clubsService } from "./ClubsService.js"

class ClubBooksService {
  async createClubBook(userId, clubBookData) {
    const club = await clubsService.getClubById(clubBookData.clubId)
    if (userId != club.creatorId) {
      throw new Forbidden('Only the Club Creator can create a Club Book.')
    }
    const newClubBook = await dbContext.ClubBooks.create(clubBookData)
    return newClubBook
  }

  async getClubBooks(clubId) {
    const clubBooks = await dbContext.ClubBooks.find({ clubId })
    return clubBooks
  }

  async getClubBookById(clubBookId) {
    const clubBook = await dbContext.ClubBooks.findById(clubBookId)
    if (!clubBook) {
      throw new BadRequest(`Club Book with ID: ${clubBookId} does not exist.`)
    }
    return clubBook
  }

  async updateClubBook(userId, clubBookId, clubBookData) {
    const clubBook = await this.getClubBookById(clubBookId)
    const club = await clubsService.getClubById(clubBook.clubId)
    if (userId != club.creatorId) {
      throw new Forbidden('This Club Book can only be modified by the Club Creator.')
    }
    const updateFields = ['title', 'imgUrl', 'author', 'status']
    updateFields.forEach(field => {
      if (field in clubBookData) {
        clubBook[field] = clubBookData[field]
      }
    })
    await clubBook.save()
    return clubBook
  }

  async deleteClubBook(userId, clubBookId) {
    const clubBook = await this.getClubBookById(clubBookId)
    const club = await clubsService.getClubById(clubBook.clubId)
    if (userId != club.creatorId) {
      throw new Forbidden('This Club Book can only be removed by the Club Creator')
    }
    await clubBook.remove()
    return `Club Book with ID: ${clubBookId} removed successfully.`
  }
}

export const clubBooksService = new ClubBooksService()