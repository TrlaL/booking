import { instance, token, setAuthToken } from './config'

setAuthToken(token)

export function loadUserSettings () {
  return instance.get('/profile/load')
}

export function saveUserSettings (data) {
  return instance.put('/profile/save1', data)
}

export function getFamilyMembers () {
  return instance.get('/profile/family-members')
}

export function saveChild (fullName, birthDate) {
  return instance.put('/profile/save-child', { fullName, birthDate })
}

export function deleteChild (id) {
  return instance.delete('/profile/delete-family-member', { id })
}