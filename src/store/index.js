import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 获取modules文件夹下所有文件
let modulesFiles= require.context('./modules', true, /.js$/);

// 遍历所有文件，把默认导出的对象放到modules里
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // 获取模块名称
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath) // 获取模块
  modules[moduleName] = value.default
  return modules
}, {})

export default new Vuex.Store({
  modules
})
