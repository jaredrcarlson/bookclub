import { AppState } from "../AppState.js"
import { NYTList } from "../models/NYTList.js"
import { logger } from "../utils/Logger.js"
import { nyApi } from "./AxiosService.js"

class NewYorkTimesService {
  async getTopBooks() {
    const res = await nyApi.get('lists/overview.json')

    logger.log('[GOT NYT BEST SELLERS LISTS]', res.data)
    AppState.nytLists = res.data.results.lists.map(pojo => new NYTList(pojo))
  }
}

export const newYorkTimesService = new NewYorkTimesService