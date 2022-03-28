import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layouts/index.vue'

// 工厂函数创建router实例
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        { path: '/', component: () => import('views/home.vue') }
      ]
    }
  ]
})

export default router
