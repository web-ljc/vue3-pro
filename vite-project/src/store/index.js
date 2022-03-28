import { createStore } from 'vuex'

// 工厂函数创建
export default createStore({
  state: {
    counter: 0
  },
  mutations: {
    add(state) {
      state.counter++
    }
  }
})