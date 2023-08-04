import { profileService } from '../services/ProfileService.js'
import { userBooksService } from '../services/UserBooksService.js'
import BaseController from '../utils/BaseController'

export class ProfilesController extends BaseController {
  constructor() {
    super('api/profiles')
    this.router
      .get('', this.getProfiles)
      .get('/:id', this.getProfile)
      .get('/:id/books')
  }

  async getProfiles(req, res, next) {
    try {
      const profiles = await profileService.findProfiles(req.query.name, req.query.offset)
      res.send(profiles)
    } catch (error) {
      next(error)
    }
  }

  async getProfile(req, res, next) {
    try {
      const profile = await profileService.getProfileById(req.params.id)
      res.send(profile)
    } catch (error) {
      next(error)
    }
  }

  async getProfileBooks(req, res, next) {
    try {
      const books = await userBooksService.getUserBooksByUserId(req.params.id)
      res.send(books)
    } catch (error) {
      next(error)
    }
  }
}
