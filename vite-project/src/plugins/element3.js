// 全局引入element3
import element3 from 'element3'
import 'element3/lib/theme-chalk/index.css'

// 按需引入
// import { ElButton } from 'element3'
// import 'element3/lib/theme-chalk/button.css'

// 导出函数接受应用实例
export default function(app) {
  // 完整
  app.use(element3)

  // 按需引入
  // app.use(ElButton)
}