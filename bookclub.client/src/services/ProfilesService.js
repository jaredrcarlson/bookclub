import { AppState } from "../AppState.js"
import { Account } from "../models/Account.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ProfilesService {

  async getProfile(profileId) {
    const res = await api.get(`/api/profiles/${profileId}`)

    logger.log('[GOT PROFILE]', res.data)

    AppState.profile = new Account(res.data)
  }


}

export const profilesService = new ProfilesService