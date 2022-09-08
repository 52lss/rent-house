// 导入vant.js
import registerVant from '@/plugins/vant.js'
// 使用install函数来全局注册
const plugins = {
  install (Vue) {
    registerVant(Vue)
  }
}
export default plugins
