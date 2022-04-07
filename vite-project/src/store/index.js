import { createStore } from 'vuex'
import base from './modules/base'

// 工厂函数创建
export default createStore({
  modules: {
    base
  }
})