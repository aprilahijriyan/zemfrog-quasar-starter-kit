import {LocalStorage} from 'quasar'

export default function () {
  let accessToken = LocalStorage.getItem('auth.token') || ''
  return {
    accessToken: accessToken,
    user: JSON.parse(LocalStorage.getItem('auth.user') || '{}'),
    isLoggedIn: accessToken !== '' ? true : false
  }
}
