/**
 * @description 封装axios请求
 *  自定义内容：
 * @param {String} baseUrl 请求地址
 * @param {Number} timeout 超时时间
 * @param {*} request.use  请求拦截
 * @param {*} respose.use  响应拦截
 * 
 * @returns {Object} axios 返回封装过后的axios
 */

import axios from 'axios';
import { getToken } from '@/utils/auth';
import { Message } from 'element-ui';

const services = axios.create({
    // 根据环境区分请求地址
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 5000
})

// 请求拦截
services.interceptors.request.use(config => {
    const hasToken = getToken();
    if (hasToken) {
        config.headers.token = hasToken;
    }
    return config
})

// 响应拦截
services.interceptors.response.use(response => {
    const { data, code, message } = response || {};

    if (code !== 200) {
        Message.info(message)
    }

    return data
})

export default services