import Axios from 'axios'
import { logger } from '../utils/Logger.js'

export const gbApi = Axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
  timeout: 8000
})
gbApi.interceptors.request.use(config => config, handleAxiosError)
gbApi.interceptors.response.use(response => response, handleAxiosError)

function handleAxiosError(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    logger.warn('[📡 AXIOS_ERROR_RESPONSE_DATA]', error.response.data)
  } else if (error.request) {
    // The request was made but no response was received
    logger.warn('[📡 AXIOS_ERROR_NO_RESPONSE]', error.request)
  } else {
    // Something happened in setting up the request that triggered an Error
    logger.warn('[📡 AXIOS_ERROR_INVALID_REQUEST]', error.message)
  }
  return Promise.reject(error)
}
