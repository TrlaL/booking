import axios from 'axios'

export const token = 'QlFTcmVCQmlMcC90QTJ1VE9xU0lpR0tjU2RWTy80WEZmdDMrcHNlWHNMNDdRVGp1dGVDbmJJamRxallGeUw0WXBnd1ROZUppTk9ucmxNTjBmaDZmMWc9PQ=='

export let instance = axios.create({
  baseURL: 'http://dev.gobambino.com/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

export function setAuthToken (token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}