import Cookie from 'js-cookie';

const ADMIN_TOKEN = 'admin-token'

export function getToken () {
  return  Cookie.get(ADMIN_TOKEN)
}

export function setToken(token) {
    Cookie.set(ADMIN_TOKEN, token)
}

export function removeToken() {
    Cookie.remove(ADMIN_TOKEN)
}