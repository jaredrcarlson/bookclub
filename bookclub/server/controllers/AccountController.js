import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import BaseController from '../utils/BaseController'
import { userBooksService } from '../services/UserBooksService.js'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .put('', this.editUserAccount)
      .get('', this.getUserAccount)
      .get('', this.getUserBooks)
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async getUserBooks(req, res, next) {
    try {
      const userId = req.userInfo.id
      const userBooks = await userBooksService.getUserBooksByUserId(userId)
      return res.send(userBooks)
    } catch (error) {
      next(error)
    }
  }

  async editUserAccount(req, res, next) {
    try {
      const user = req.userInfo
      const updatedAccount = await accountService.updateAccount(user, req.body)
      return res.send(updatedAccount)
    } catch (error) {
      next(error)
    }
  }
}
