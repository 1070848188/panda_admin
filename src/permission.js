/**
 * @description 权限控制
 *  主要根据路由拦截，配合token控制用户的跳转
 */

import NProgress from 'nprogress'; // 进度条
import 'nprogress/nprogress.css'
import router from './router/index';
import { getToken } from './utils/auth';

const WHILT_LIST = [ '/login' ];

router.beforeEach(function (to, from, next) {
    NProgress.start();

    const hasToken = getToken();

    // 存在token
    if (hasToken) {
        if (to.path === '/login') {
            next('/')
        }
        // ------ 动态路由需后续补充
        next()
        // --------------------

        NProgress.done()
    } else {
        if (WHILT_LIST.includes(to.path)) {
            // 白名单路由不需要权限
            next()
        } else {
            // 其余都需要进行登录
            next(`/login?redirect=${to.path}`)
        }
        NProgress.done()
    }
})