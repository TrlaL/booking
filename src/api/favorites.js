import { instance, token, setAuthToken } from './config'

export function getFavorites (params = {}) {
  setAuthToken(token)
  return instance.get('/favorites/list', params)
}