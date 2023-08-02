
import BaseController from "../utils/BaseController";

export class GoogleBooksController extends BaseController {
  constructor() {
    super('volumes')
    this.router
      .get('', this.search)
  }

  async search(req, res, next) {
    try {
      const query = req.query.q
      return res.send(`Query String: ${query}`)
    } catch (error) {
      next(error)
    }
  }
}