import { instance, token, setAuthToken } from './config'

export function getFavorites (params = {}) {
  setAuthToken(token)
  return instance.get('/favorites/list', params)
}

export function setFavorite (activityId, activityDate) {
  setAuthToken(token)
  return instance.post('/favorites/set', {
    activityId,
    activityDate
  })
}