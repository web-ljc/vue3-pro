import { createI18n } from 'vue-i18n'
import zh from './lang/zh-CN.json'
import en from './lang/en.json'

const messages = {
  'zh_CN': zh,
  'en_US': en
}

const i18n = createI18n({
  globalInjection: true, // 挂载全局
  legacy: false, // 配置false，否则提示异常
  locale: 'zh_CN',
  messages,
})

export default i18n
