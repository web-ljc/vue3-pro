import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局样式
import './styles/index.less'

// 全局引入element3
import element3 from './plugins/element3'

// i18n
import i18n from './i18n'

createApp(App)
  .use(router)
  .use(store)
  .use(element3)
  .use(i18n)
  .mount('#app')
