/**
 * @description
 *    Cookie存储token信息
 * @param {String} ADMIN_TOKEN 
 *   存储cookie的key值
 * @returns {Function} getToken
 *   【 获取token 】
 * @returns {Function} setToken
 *   【 设置token 】
 * @returns {Function} removeToken
 *   【 删除token 】
 */

import Cookie from 'js-cookie';

const ADMIN_TOKEN = 'Admin-Token'

export function getToken () {
  return Cookie.get(ADMIN_TOKEN)
}

export function setToken(token) {
  Cookie.set(ADMIN_TOKEN, token)
}

export function removeToken() {
  Cookie.remove(ADMIN_TOKEN)
}