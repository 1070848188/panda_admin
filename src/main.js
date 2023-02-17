import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 组件库引入
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
// 样式初始化
import 'normalize.css'
// 项目内部样式
import './styles/index.scss'
// 权限控制
import './permission'

Vue.config.productionTip = false

Vue.use(ElementUi)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
