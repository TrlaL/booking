import { instance, token, setAuthToken } from './config'

setAuthToken(token)

export function getFamilyMembers () {
  return instance.get('/profile/family-members')
}

export function saveChild (fullName, birthDate) {
  return instance.put('/profile/save-child', { fullName, birthDate })
}

export function deleteChild (id) {
  return instance.delete('/profile/delete-child', { id })
}