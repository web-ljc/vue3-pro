const base = {
  // 状态
  state: {
    counter: 0,
    locale: 'zh_CN'
  },
  // 唯一获取值的方法
  getters: {
    getConter(state) {
      return state.counter
    },
    getLocale(state) {
      return state.locale
    }
  },
  // 唯一可以修改state值的方法，同步阻塞
  mutations: {
    add(state) {
      state.counter++
    },
    changeLocale(state, locale) {
      console.info(locale, 'locale')
      state.locale = locale
    }
  },
  // 异步调用mutations方法
  actions: {
    asyncUpdateConter(context, counter) {
      context.commit('add', counter)
    },
    asyncUpdateLocale(context, locale) {
      context.commit('changeLocale', locale)
    }
  }
}

export default base