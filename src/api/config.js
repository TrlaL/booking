import axios from 'axios'

export const token = 'QUg3WWxyaFRMSVBlZ3l3aHJiQmZvdlNuSjE3VzNNQTBQNEJVRC8wS2NIRjNsRXdaaWNGWXl4MzNqL0tjY1J1WmVkUmxySW1ZRUc5WmdYZUVQY2tkcEE9PQ=='

export let instance = axios.create({
  baseURL: 'http://dev.gobambino.com/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

export function setAuthToken (token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}