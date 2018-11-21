import { instance } from './config'

export function getActivities (params = {}, query = '') {
  return instance.put(`/activities/list?query=${query}`, params)
}