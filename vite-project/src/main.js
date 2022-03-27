import { createApp } from 'vue'
import App from './App.vue'

// 全局样式
import './styles/index.less'

// 全局引入element3
import element3  from './plugins/element3'


createApp(App).use(element3).mount('#app')
